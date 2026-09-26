# Trabajo de Fin de Ciclo - ReparaTuCoche
En este **README** quiero centrarme en la parte tecnica del proyecto, pero el trabajo tambien consiste en desarrollar una empresa. Para poder ver completo el trabajo, con la parte de empresa y la parte tecnica, en formato de presentacion o de PDF se encuentra en la carpeta **PDF** (Documentacion completa), **Presentacion** (PowerPoint de exposicion), **BBDD** (Estructura BBDD) y **estructura_pagina_web** (HTML, CSS, JAVA, imagenes y videos de la pagina web).

## Indice
1. Introduccion
2. Tecnologias
3. Arquitectura
4. Balanceador de cargas
5. DNS
6. SFTP
7. NFS

## 1.- Introduccion
En el Trabajo de Fin de Ciclo he decidido desarrollar una plataforma web funcional basada en un cluster de servidores. El objetivo es diseniar, configurar e implementar tecnologias como en un entorno empresarial. Para ello he pensado en la idea de que sea una una plataforma que garantice alta disponibilidad, escalabilidad, seguridad y balanceo de cargas<br>

El nombre del proyecto es **ReparaTuCoche.net**, donde se centra en una plataforma web centrada en el mundo automovilistico, donde a traves de una suscripcion acceder a contenido (PDF, guias, videos y fotos) para reparar vehiculos o modificarlos. La idea surge de el crecimiento de el autoconocimiento a traves de Internet y el auge del mundillo de los coches.

## 2.- Tecnologias
Las tecnologias usadas en este proyecto son:
- **Apache:** para la pagina web.
- **DNS (Bind9):** para la resolucion de nombres.
- **HAProxy:** para el balanceo de cargas entre los servidores web.
- **NFS:** para almacenamiento compartido y sincronizado entre los servidores.
- **SFTP:** transferencia de archivos entre los servidores y el equipo del administrador.
- **MySQL:** para la base de datos.
- **HTTPS / SSL:** para comunicacion cifrada.
- **PHP:** para el backend del login.
- **HTML, CSS y JavaScript:** para el fronted de la pagina.
- **Ubuntu Server 20.04 LTS:** sistema operativo de los servidores.
- **VMware Workstation Pro:** para la virtualizacion de los servidores.

## 3.- Arquitectura
La arquitectura del proyecto constara de un cluster de cinco servidores, con **Ubuntu Serve 20.04 LTS**. El motivo de escoger este sistema operativo es el mantenimiento que tienen las versiones LTS de Ubuntu y la fiabilidad del sistema operativo, ademas, de usar un servidor Linux para optimizar los recursos de mi equipo.<br>

La estructura del cluster la componen: un primer servidor, **node01**, que tiene HAProxy para balancear la carga entre los servidores web y DNS para la resolucion de nombres, por este servidor es por donde acceden los usuarios usando HTTPS; el segundo y tercer servidor usan Apache para mostrar la pagina web y NFS Client para acceder al servidor donde se escuentra la pagina web, permitiendo que la informacion este sincronizada; el cuarto servidor contiene la base de datos y usa MySQL, aqui se guarda la informacion de los usuarios y los tipos de suscripcion; y por ultimo, el quinto servidor, que tiene NFS Server para compartir la pagina web con los servidores web y SFTP para pasar archivos desde la maquina local al cluster.<br>

![Arquitectura de red](./imagenes/arquitectur_red.png)<br>


Para la **red** he usado una red privada para la comunicacion entre los servidores, basada en el rango 192.168.153.0/24.<br>

| Servidor | Direccion IP | Funcion |
|----------|--------------|---------|
| node01 | 192.168.153.101 | HAProxy + DNS |
| node02 | 192.168.153.102 | WEB1 + NFS Client |
| node03 | 192.168.153.103 | WEB2 + NFS Client |
| node04 | 192.168.153.104 | MySQL + NFS Client |
| node05 | 192.168.153.105 | NFS Server + SFTP |
<br>

**NOTA:** En este proyecto la division de los servicios en estos servidores es por la falta de recursos fisicos. Lo ideal es separar cada funcion en un servidor, teniendo un servidor independiente para DNS, otro para HAProxy, dos servidores NFS para tener redundacia y asegurar alta disponibilidad, otro servidor BBDD para backups, y otro servidor independiente para SFTP.<br>

## 4.- Balanceador de cargas
Instalo y configuro **HAProxy** en **node01**. Ademas de crear certificados autofirmados y parametros Diffie-Hellman para la seguridad HTTPS.<br>

### 4.1.- Instalacion
Instalo HAPorxy:<br>
```bash
apt install haproxy
```
<br>

Habilito para que el servicio arraque automaticamente:<br>
```bash
systemctl enable haproxy
```
<br>

Compruebo que el servicio este funcionando:<br>
```bash
systemctl status haproxy
```
<br>

### 4.2.- Configuracion
El archivo de configuracio de HAProxy se encuentra en `/etc/haproxy/haproxy.cfg`.<br>

La seccion `global` tiene parametros relacionados con el funcionamiento general del servicio. El parametro `log /dev/log` indica donde se registran los eventos. El parametro `daemon` indica que el servicio funciona en segundo plano.<br>
![Configuracion global](./imagenes/global_haproxy.png)
<br>

Para que funcione **HTTPS** en HAProxy es necesario que los certificados esten en un archivo `.pem`.<br>

Creo el directorio que contiene los certificados:<br>
```bash
mkdir -p /etc/ssl/reparatucoche
```
<br>

Creo los certificados autofirmados:<br>
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/reparatucoche/reparatucoche.key -out /eyc/reparatucoche/reparatucoche.crt
```
<br>

Creo el archivo `.pem`:<br>
```
bash -c 'cat /etc/ssl/reparatucoche/reparatucoche.crt /etc/ssl/reparatucoche/reparatucoche.key > /etc/ssl/reparatucoche/reparatucoche.pem'
```
<br>

Creo los parametros **Diffie-Hellman** para mejorar la seguridad HTTPS:<br>
```bash
openssl dhparam -out /etc/ssl/reparatucoche/dhparam.pem
```
<br>

La seccion `frontend` es donde se configura el punto de entrada por el que los usuarios realizan la conexion. El frontend lo voy a llamar `http_front` y a configurar:<br>
![Configuracion frontend HAProxy](./imagenes/frontend_haproxy.png)
<br>

| Parametro | Funcion |
|-----------|---------|
| `bind *:80` | Indica que esucha las conexiones **HTTP** en el puerto 80 |
| `bind *:443` | Indica que esucha las conexiones **HTTPS** en el puerto 443 |
| `ssl crt` | Activa el cifrado SSL/TLS e indica la ruta del archivo de certificados |
| `redirect sheme https if !{ ssl_fc }` | Fuerza a los usuarios a usar HTTPS |
| `default_backend` | Indica el backend al que enviara todas las petiociones |

<br>

La seccion `backend` define los servidores que procesaran las peticiones. El backend lo voy a llamar `web_servers` y a configurar:<br>
![Configuracion backend HAProxy](./imagenes/backend_haproxy.png)
<br>

| Parametro | Funcion |
|-----------|---------|
| `balance roundrobin` | Define el algoritmo de balanceo, roundrobin es un algoritmo que distribuye las peticiones de forma alterna |
| `option httpchk GET /` | Activa los **Health checks** automaticos *(Envia una peticion GET a cada servidor)* |
| `server *servidor* *IP*` | Define los servidores | 
| `ssl verify none check` | **ssl** obliga a conectarse con HTTPS, **verify none** acepta certificados autofirmados y **check** activa los health checks para el servidor |

**NOTA:** En entornos mas grandes con mas servidores y trafico de usuarios, en vez de usar el algoritmo **roundrobin** recomiendo usar **leastconn**. Este algoritmo distribuye a los usuarios hacia el servidor con menos conexiones activas.

Para terminar la configuracion de HAProxy agrego los parametros **Diffie-Hellman** en la seccion `global`:<br>
![Parametros Diffie-Hellman](./imagenes/dhparam_haproxy.png)
<br>

### 4.3.- Comprobar el funcionamiento
Para comprobar el funcionamiento del servicio, comprobamos los logs:<br>
```bash
tail -f /var/log/haproxy.log
```
<br>

Y se puede monitorizar el servicio:<br>
```bash
journalctl -u haproxy -f
```
<br>

## 5.- DNS
Instalo y configuro el **DNS** en **node01**. El dominio que va a resolver es **ReaparaTuCoche.net**. El archivo de configuracon del servicio es `/etc/bind/db.reparatucoche.net`.

### 5.1- Instalacion
Instalo **Bind9**:<br>
```bash
apt install bind9 bind9utils bin9-doc
```
<br>

Habilito el servicio para que arranque automaticamente:<br>
```bash
systemctl enable bind9
```
<br>

Compruebo que funciona:<br>
```bash
systemctl status bind9
```
<br>

### 5.2- Configuracion
Para la configuracion del servicio **DNS**, voy a crear el archivo desde la plantilla que trae el ervicio:<br>
```bash
cp /etc/bind/db.local /etc/bind/db.reparatucoche.net
```
<br>

En el archivo de configuracion se aniaden los registros DNS del dominio para resolver a las peticiones del cliente, admeas de los demas servidores del cluster para acceder a ellos sin necesidad de usar direccion IP:<br>
![Configuracion del DNS](./imagenes/conf_DNS.png)
<br>

| Parametro | Funcion |
|-----------|---------|
| `$TTL` | Define el tiempo que los registros permaneceran en cache |
| `SOA` | Indica el servidor DNS principal, correo del administrador, version de zona y tiempos de sincronizacion |
| `NS` | Define el servidor autoritativo de la zona |
| `A`| Relaciona un nombre con una IP |

<br>

Confiduro el archivo `/etc/bind/named.conf.local`, ahi defino la zona DNS del servidor:<br>
![Configuracion de la zona del dominio](./imagenes/conf_zona_DNS.png)
<br>

| Parametro | Funcion |
|-----------|---------|
| `zone` | Indica el nombre de la zona |
| `type master` | Indica que la zona es de tipo maestro |
| `file` | Indica la ruta del archivo de configuracion de la zona |

<br>

Compruebo la sintaxis de los archivos:<br>
```bash
named-checkconf
```
```bash
named-checkzone reparatucoche.net /etc/bind/db.reparatucoche.net
```
<br>

Reinico el servicio:<br>
```bash
systemctl restart bind9
```
<br>

Tras configurar en **node01** el DNS, ahora configuro en todos los servidores **(node02, node03, node04 y node05)** el archivo de red `/etc/netplan/00-installer.config.yaml` la opcion de `nameservers` y aniado la IP del servidor DNS:<br>
![Confifuracion de red de los servidores](./imagenes/conf_red.png)
<br>

Aplico la configuracion de red:<br>
```bash
netplan apply
```
<br>

### 5.3.- Comprobar el funcionamiento
Compruebo la resolucion del nombre de dominio:<br>
```bash
nslookup reparatucoche.net
```
<br>

Y tambien monitorizo el bind9 para visualizar los eventos en tiempo real:<br>
```bash
journalctl -u bind9 -f
```
<br>

## 6.- SFTP
Voy a configurar **SFTP** en **node05** con el objetivo de pasar de mi maquina a las maquinas virtuales los archivos de la pagina web y la estructura de la BBDD. La eleccion de este servidor es porque tambien tendra **NSF** y compartira los archivos desde una carpeta compartida.<br>

### 6.1.- Instalacion
Ya que **SFTP** funciona sobre **SSH**, voy a instalar **OpenSSH**:<br>
```bash
apt install openssh-server
```
<br>

### 6.2.- Configuracion
Primero voy a crear un usuario para las conexiones SFTP:<br>
```bash
adduser sftpuser
```
<br>

El usuario **sftpuser** quiero que este enjaulado, de esta forma no puede acceder a ninguna carpeta o archivo fuera de la acrpeta asignada. Esta decision es con el onjetivo de proteger los sistemas y servidores en caso de estar comprometidas las credenciales del usuario.<br>

Creo el directorio donde voy a enjaular al usuario:<br>
```bash
mkdir -p /srv/sftp
```
<br>

Para poder enjaular al usuario la carpeta debe pertenecer al usuario **root** y tener permisos 755. Para ello hare:<br>
```bash
chown root:root /srv/sftp
```
```bash
chmod 755 /srv/sftp
```
<br>

Configuro el archivo del servicio, `/etc/ssh/sshd_config`. Para ello lo primero es descomentar la linea:<br>
```bash
Subsystem   sftp    /usr/lib/openssh/sftp-server
```
<br>

Al final del archivo configuro la jaula del usuario:<br>
![Configuracio de la jaula del usuario sftpuser](./imagenes/jaula_sftpuser.png)
<br>

| Parametro | Funcion |
|-----------|---------|
| `Mach User` | Indica el usuario al que se le aplican las reglas |
| `ChrootDirectory` | Indica la ruta del directorio donde se enjaula al usuario |
| `ForceCommand internal-sftp` | Obliga al usuario a usar SFTP |
| `AllowTcpForwarding no` | Impide redireccion de puertos |
| `X11Forwarding no` | Evita conexiones graficas` |

<br>

Compruebo la configuracion del archivo de configuracion:<br>
```bash
sshd -t
```
<br>

Reinicio el servicio:<br>
```bash
systemctl restart ssh
```
<br>

### 6.3.- Comprobar el funcionamiento
Para comprobar el funcionamiento, accedo desde mi maquina (windows) al servidor usando **FileZilla**:<br>
![Comprobacio SFTP](./imagenes/filezilla.png)
<br>

Y tambien monitorizo el servicio comprobando las conexiones y trasnferencias de datos:<br>
```bash
tail -f /var/log/auth.log
```
```bash
ps aux | grep sftp
```
<br>

## 7.- NFS
Con **NFS** quiero que el contenido de la pagina web este sincronizado, compartiendo a traves de una acrpeta compartida los archivos con los servidores web. Ademas para poder actualizar de forma facil y sencilla los archivos, sera la misma carpeta que para **SFTP** y por eso el servicio esta en **node05**.

### 7.1.- Instalacion
Instalo **NFS Server** en **node05**:<br>
```bash
apt install nfs-kernel-server
```
<br>

Instalo **NFS Client** en los servidores web y el de BBDD:<br>
```bash
apt install nfs-common
```
<br>

### 7.2.- Configuracion

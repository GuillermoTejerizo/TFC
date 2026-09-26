// BASE DE DATOS TEMPORAL
const baseDatos = {
    BMW: {
        "Serie 3": {
            "E30": {
                imagen: "../Imagenes/Coches/BMW/Serie_3/E30/E30.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "E36": {
                imagen: "../Imagenes/Coches/BMW/Serie_3/E36/E36.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E36/Cambio_pastillas_freno/cambio_pastillas_freno_E36.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E36/Cambio_pastillas_freno/cambio_pastillas_freno_E36.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E36/Pastillas_freno/pastillas_freno_E36_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E36/Pastillas_freno/pastillas_freno_E36_2.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E36/Pastillas_freno/pastillas_freno_E36_3.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "",
                    pdf: "../PDF/Coches/BMW/Serie_3/E36/Cambio_aceite/cambio_aceite_E36.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E36/Cambio_aceite/cambio_aceite_E36_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E36/Cambio_aceite/cambio_aceite_E36_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "E46": {
                imagen: "../Imagenes/Coches/BMW/Serie_3/E46/E46.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "E90": {
                imagen: "../Imagenes/Coches/BMW/Serie_3/E90/E90.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "F30": {
                imagen: "../Imagenes/Coches/BMW/Serie_3/F30/F30.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "G20": {
                imagen: "../Imagenes/Coches/BMW/Serie_3/G20/G20.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            }
        },
        "Serie 5": {
            "E34": {
                imagen: "../Imagenes/Coches/BMW/Serie_5/E34/E34.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "E39": {
                imagen: "../Imagenes/Coches/BMW/Serie_5/E39/E39.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "E60": {
                imagen: "../Imagenes/Coches/BMW/Serie_5/E60/E60.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "F10": {
                imagen: "../Imagenes/Coches/BMW/Serie_5/F10/F10.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "G30": {
                imagen: "../Imagenes/Coches/BMW/Serie_5/G30/G30.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            }
        },
        "M3": {
            "E30": {
                imagen: "../Imagenes/Coches/BMW/M3/E30/E30.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "E36": {
                imagen: "../Imagenes/Coches/BMW/M3/E36/E36.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "E46": {
                imagen: "../Imagenes/Coches/BMW/M3/E46/E46.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "E92": {
                imagen: "../Imagenes/Coches/BMW/M3/E92/E92.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "F80": {
                imagen: "../Imagenes/Coches/BMW/M3/F80/F80.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "G80": {
                imagen: "../Imagenes/Coches/BMW/M3/G80/G80.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            }
        }
    },
    Audi: {
        "A3": {
            "8L": {
                imagen: "../Imagenes/Coches/Audi/A3/8L/8L.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "8P": {
                imagen: "../Imagenes/Coches/Audi/A3/8P/8P.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "8V": {
                imagen: "../Imagenes/Coches/Audi/A3/8V/8V.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "8Y": {
                imagen: "../Imagenes/Coches/Audi/A3/8Y/8Y.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            }
        },
        "A4": {
            "B5": {
                imagen: "../Imagenes/Coches/Audi/A4/B5/B5.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "B6": {
                imagen: "../Imagenes/Coches/Audi/A4/B6/B6.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "B7": {
                imagen: "../Imagenes/Coches/Audi/A4/B7/B7.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "B8": {
                imagen: "../Imagenes/Coches/Audi/A4/B8/B8.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "B9": {
                imagen: "../Imagenes/Coches/Audi/A4/B9/B9.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            }
        },
        "RS3": {
            "8P": {
                imagen: "../Imagenes/Coches/Audi/RS3/8P/8P.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "8V": {
                imagen: "../Imagenes/Coches/Audi/RS3/8V/8V.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            },
            "8Y": {
                imagen: "../Imagenes/Coches/Audi/RS3/8Y/8Y.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_aceite/cambio_aceite_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Cambio_aceite/cambio_aceite_E30_2.jpg"
                    ],
                    pasos: [
                        "Calienta el motor",
                        "Levanta el coche de forma segura",
                        "Quita el tornillo del cárter (llave 17mm)",
                        "Drena el aceite",
                        "Cambia el filtro de aceite (llave 13mm para la tapa)",
                        "Reemplaza sus juntas tóricas",
                        "Aprieta el tornillo del cárter",
                        "Añade entre 4,5-6 litros según la motorización del modelo"
                    ]
                }
            }
        }
    },
    Honda: {
        "Civic": {
            "EG": {
                imagen: "../Imagenes/Coches/Honda/Civic/EG/EG.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/BMW/Serie_3/E30/cambio_pastillas_freno/cambio_pastillas_freno_E30.pdf",
                    imagenes: [
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_1.jpg",
                        "../Imagenes/Coches/BMW/Serie_3/E30/Pastillas_freno/pastilla_freno_E30_2.jpg"
                    ],
                    pasos: [
                        "Elevar el coche",
                        "Quitar las ruedas",
                        "Desmontar la pinza (caliper) quitando los pasadores (tornillos guía)",
                        "Comprimir el piston",
                        "Instalar las pastillas nuevas con pasta antiruido",
                        "Verificar el líquido de frenos"
                    ]
                }
            },
            "EK": {
                imagen: "../Imagenes/Coches/Honda/Civic/EK/EK.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            },
            "EP": {
                imagen: "../Imagenes/Coches/Honda/Civic/EP/EP.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            },
            "FN": {
                imagen: "../Imagenes/Coches/Honda/Civic/FN/FN.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            },
            "FK": {
                imagen: "../Imagenes/Coches/Honda/Civic/FK/FK.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            },
            "FL": {
                imagen: "../Imagenes/Coches/Honda/Civic/FL/FL.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            }
        },
        "Accord": {
            "5ª Gen": {
                imagen: "../Imagenes/Coches/Honda/Accord/5Gen/5Gen.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            },
            "6ª Gen": {
                imagen: "../Imagenes/Coches/Honda/Accord/6Gen/6Gen.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            },
            "7ª Gen": {
                imagen: "../Imagenes/Coches/Honda/Accord/7Gen/7Gen.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            },
            "8ª Gen": {
                imagen: "../Imagenes/Coches/Honda/Accord/8Gen/8Gen.jpg",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            }
        },
        "S2000": {
            "AP1": {
                imagen: "../Imagenes/Coches/Honda/S2000/AP1",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            },
            "AP2": {
                imagen: "../Imagenes/Coches/Honda/S2000/AP1",
                "Cambio de frenos": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_pastillas_freno/cambio_pastillas_freno_EK9_3.jpg"
                    ],
                    pasos: [
                        "Elevar el vehículo",
                        "Retirar la rueda y la pinza de freno (cáliper), usando llaves de 12-17 mm",
                        "Retraer el pistón",
                        "Sustituir laspastillas viejas por las nuevas (engrasando los puntos de contacto)",
                        "Reensamblar",
                        "Asegurar el purgado (si es necesario)"
                    ]
                },
                "Cambio de aceite": {
                    video: "../Video/Coches/BMW/Serie_3/E30/Pastillas_freno/cambio_pastillas_freno_E30.mp4",
                    pdf: "../PDF/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9.pdf",
                    imagenes: [
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_1.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_2.jpg",
                        "../Imagenes/Coches/Honda/Civic/EK/Cambiar_aceite/cambio_aceite_EK9_3.jpg"
                    ],
                    pasos: [
                        "Calienta el motor brevemente para que fluya mejor",
                        "Apaga el motor",
                        "Eleva el coche",
                        "Afloja el tapón del cárter (llave de vaso 17 mm)",
                        "Drena el aceite colocando una badeja debajo del cárter",
                        "Localiza y cambia el Filtro del aire por uno nuevo (El filtro nuevo no se aprieta con herramienta)",
                        "Tapa el cárter con el tapón",
                        "Añade 3,6 litros de aceite aprox."
                    ]
                }
            }
        }
    }
};

// OBTENER DATOS DE LA URL
const params = new URLSearchParams(window.location.search);

const marca = decodeURIComponent(params.get("marca"));
const modelo = decodeURIComponent(params.get("modelo"));
const generacion = decodeURIComponent(params.get("generacion"));

// const modeloTexto = modelo.replaceAll("_", " ");
const modeloTexto = decodeURIComponent(modelo).replaceAll("_", " "); //INVESTIGAR DIFERENCIA

let contenido = null;

if ( baseDatos[marca] && baseDatos[marca][modeloTexto] && baseDatos[marca][modeloTexto][generacion]) {
    contenido = baseDatos[marca][modeloTexto][generacion];
}

// Mostrar título
document.getElementById("titulo").textContent = `${marca} ${modeloTexto} ${generacion}`;

const contenedor = document.getElementById("contenido");



// GENERAR MENÚS

if (!contenido) {
    contenedor.innerHTML = "<p>No hay contenido disponible.</p>";
} else {
    // IMAGEN DEL COCHE
    if (contenido.imagen) {
        const imgCoche = document.createElement("img");
        imgCoche.src = contenido.imagen;
        imgCoche.classList.add("imagen_coche");
        contenedor.appendChild(imgCoche);
    }
    Object.keys(contenido).forEach(nombreOpcion => {
        if (nombreOpcion === "imagen") return;

        const datos = contenido[nombreOpcion];        
        const menu = document.createElement("div");
        menu.classList.add("menu");
        const titulo = document.createElement("div");
        titulo.classList.add("titulo");
        titulo.textContent = nombreOpcion;
        const opciones = document.createElement("div");
        opciones.classList.add("opciones");

        // VIDEO
        const video = document.createElement("video");
        video.src = datos.video;
        video.controls = true;
        video.autoplay = false;
        video.preload = "metadata";
        video.classList.add("video_manual");

        // PDF
        const pdf = document.createElement("a");
        pdf.href = datos.pdf;
        pdf.textContent = "Ver manual PDF";
        pdf.target = "_blank";
        pdf.classList.add("enlace_pdf");

        // IMÁGENES
        const contImagenes = document.createElement("div");
        datos.imagenes.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            contImagenes.appendChild(img);
        });

        // PASOS
        const lista = document.createElement("ol");
        datos.pasos.forEach(paso => {
            const li = document.createElement("li");
            li.textContent = paso;
            lista.appendChild(li);
        });

        // AÑADIR TODO
        opciones.appendChild(video);
        opciones.appendChild(pdf);
        opciones.appendChild(contImagenes);
        opciones.appendChild(lista);

        // DESPLEGAR
        titulo.addEventListener("click", () => {
            opciones.style.display =
                opciones.style.display === "block" ? "none" : "block";
        });

        menu.appendChild(titulo);
        menu.appendChild(opciones);
        contenedor.appendChild(menu);
    });
}
import type { Sala, Usuario } from "../types/types"

export const USUARIOS: Usuario[] = [
  {
    id: 'user-0c62b124-14b7-42dc-891f-489814877cf5',
    foto: '10.jpg',
    nombre: 'Pablo Martin Bulacios',
    contra: '777',
    rol: 'user'
  },
  { id: 'user-42ea8b42-30f5-4312-b6e4-10f7dcc6d72f',
    foto: '20.jpg',
    nombre: 'Diego J. Toro',
    contra: '777',
    rol: 'user'
  },
  { id: 'user-21289dc2-a920-4546-aed3-f992fafe2adc',
    foto: '32.jpg',
    nombre: 'Daniel Paez',
    contra: '777',
    rol: 'user'
  },
  { id: 'user-a65973f5-eeea-49f4-a961-524469665658',
    foto: '53.jpg',
    nombre: 'Mariela Vallejo',
    contra: '777',
    rol: 'user'
  },
  { id: 'user-50214ea5-9024-459d-8943-677b71a0b3e1',
    foto: '63.jpg',
    nombre: 'Claudia Anahi Soria',
    contra: '777',
    rol: 'user'
  },
  { id: 'user-7db732ef-364e-44f1-87cf-fa1f650eac32',
    foto: '76.jpg',
    nombre: 'Raul Lopez Camaño',
    contra: '777',
    rol: 'user'
  },
  { id: 'user-429d1297-8e21-4bb8-9dc0-e4f42980ebb4',
    foto: '95.jpg',
    nombre: 'Sofia N. Quiroga',
    contra: '777',
    rol: 'user'
  },
  { id: 'user-d22dee92-ec52-465f-9d70-19f79972715b',
    foto: '0.png',
    nombre: 'Administrador',
    contra: '333',
    rol: 'admin'
  },
]

export const SALAS: Sala[] = [
  {
    nombre: 'Tutorial',
    id: 'sala-f54828dc-35af-485a-ac9e-9b776f4afa1a',
    chat: [
      {
        mensaje: 'Bienvenido a EnContacto !! Esta app te ofrece distintas salas de chat para comunicarte con tus equipos',
        usuarioId: USUARIOS[1].id
      },
      {
        mensaje: 'Puedes crear, modificar y eliminar las salas',
        usuarioId: USUARIOS[3].id
      },
      {
        mensaje: 'Lo mismo con los usuarios',
        usuarioId: USUARIOS[4].id
      },
      {
        mensaje: 'Para acceder a estas funciones dale al boton Aministrar',
        usuarioId: USUARIOS[2].id
      },
      {
        mensaje: 'Escribe todos los mensajes que quieras, aunque estos no se guardaran',
        usuarioId: USUARIOS[0].id
      },
      {
        mensaje: 'Estos son mensajes simulados de usuarios tambien simulados',
        usuarioId: USUARIOS[1].id
      },
    ]
  },
  {
    nombre: 'Sala Vacia',
    id: 'sala-a2e4d884-4aec-43c0-a43a-09ee2297989d',
    chat: []
  },
]
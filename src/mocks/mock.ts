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
    foto: 'null',
    nombre: 'Administrador',
    contra: '333',
    rol: 'admin'
  },
]

export const SALAS: Sala[] = [
  {
    nombre: 'Sala Front',
    id: 'sala-f54828dc-35af-485a-ac9e-9b776f4afa1a',
    chat: [
      {
        mensaje: 'Los mensajes aqui no se guardaran',
        usuarioId: USUARIOS[1].id
      },
      {
        mensaje: 'En la pestaña de usuario puedes cambiar tu foto y contraseña',
        usuarioId: USUARIOS[2].id
      },
      {
        mensaje: 'El boton de "admin" te llevara a donde puedes modificar las salas y usuarios',
        usuarioId: USUARIOS[0].id
      }
    ]
  },
  {
    nombre: 'Sala Vacia',
    id: 'sala-a2e4d884-4aec-43c0-a43a-09ee2297989d',
    chat: []
  },
  {
    nombre: 'Asistencia',
    id: 'sala-23a7952d-fa95-4c53-bc77-f184166bcebf',
    chat: [
      {
        mensaje: 'Presente',
        usuarioId: USUARIOS[0].id
      },
      {
        mensaje: 'Presente',
        usuarioId: USUARIOS[1].id
      },
      {
        mensaje: 'Presente',
        usuarioId: USUARIOS[2].id
      },
      {
        mensaje: 'Presente',
        usuarioId: USUARIOS[3].id
      },
      {
        mensaje: 'Presente',
        usuarioId: USUARIOS[4].id
      },
      {
        mensaje: 'Presente',
        usuarioId: USUARIOS[5].id
      },
      {
        mensaje: 'Presente',
        usuarioId: USUARIOS[6].id
      },
    ]
  }
]
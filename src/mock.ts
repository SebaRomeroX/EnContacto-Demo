import type { Sala, Usuario } from "./types"

export const USUARIOS: Usuario[] = [
  {
    id: 'user-0c62b124-14b7-42dc-891f-489814877cf5',
    foto: 'pablito',
    nombre: 'Pablito Clavito',
    contra: '777',
    rol: 'user'
  },
  { id: 'user-42ea8b42-30f5-4312-b6e4-10f7dcc6d72f',
    foto: 'ironman',
    nombre: 'Tony Stark',
    contra: '777',
    rol: 'user'
  },
  { id: 'user-21289dc2-a920-4546-aed3-f992fafe2adc',
    foto: 'judelaw',
    nombre: 'Dr. Watson',
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
  }
]
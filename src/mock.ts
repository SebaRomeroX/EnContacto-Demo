export const USUARIOS = [
  { id: 1 , foto: 'pablito', nombre: 'Pablito Clavito', contra: '777', rol: 'user' },
  { id: 2 , foto: 'ironman', nombre: 'Tony Stark', contra: '777', rol: 'user' },
  { id: 3 , foto: 'judelaw', nombre: 'Dr. Watson', contra: '777', rol: 'user' },
  { id: 4 , foto: 'null', nombre: 'Administrador', contra: '333', rol: 'admin' },
]

export const SALAS = [
  {
    nombre: 'Sala Front',
    id: 1,
    chat: [
      { mensaje: 'Los mensajes aqui no se guardaran', usuarioId: 2 },
      { mensaje: 'En la pestaña de usuario puedes cambiar tu foto y contraseña', usuarioId: 3 },
      { mensaje: 'El boton de "admin" te llevara a donde puedes modificar las salas y usuarios', usuarioId: 1 }
    ]
  },
  {
    nombre: 'Sala Vacia',
    id: 2,
    chat: []
  }
]
import { useContext, useEffect, useRef, useState } from 'react'
import { UsuarioContext } from '../../context/usuarioContext'
import { SalasContext } from '../../context/salasContext'


export const CajaMensaje = () => {
  const { usuario } = useContext(UsuarioContext)
  const { agregarMensaje } = useContext(SalasContext)
  const [texto, setTexto] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  function handleTexto (e) {
    const newTexto = e.target.value

    if (newTexto === ' ') return
    if (newTexto.endsWith(' ') && texto.endsWith(' ')) return

    setTexto(newTexto)
  }

  function handleEscribir (e) {
    e.preventDefault()
    if (!texto) return

    setTexto('')
    agregarMensaje(texto, usuario.id)
  }

  return (
    <form className='caja-mensaje' onSubmit={handleEscribir}>
      <input
        value={texto}
        onChange={handleTexto}
        placeholder='Escribe algo ...'
        ref={inputRef}
      />
      <button> ▶ </button>
    </form>
  )
}
import './Login.css'
import { useContext, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { UsuarioContext } from '../../context/usuarioContext'
import { useNavigate } from 'react-router'
import { RUTAS } from '../../constants/consts'

const inputsIniciales = {user: '', pass: ''}

export const Login = () => {
  const [inputs, setInputs] = useState(inputsIniciales)
  const [error, setError] = useState('')
  const { logear } = useContext(UsuarioContext)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  function handleInput (e: ChangeEvent<HTMLInputElement>, campo:string) {
    setInputs(prev => ({...prev, [campo]: e.target.value}))
  }

  function handleLog (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (inputs.user && inputs.pass) {
      if (logear(inputs)) {
        navigate(RUTAS.chat)
      } else {
        setError('Los datos no coinciden con ningun perfil')
        inputRef.current?.focus()
      }
      setInputs(inputsIniciales)
    }
  }

  return (
    <section className='log-section'>
      <h2>Inicio de Sesion</h2>
      <form className='formulario' onSubmit={handleLog}>
        <input
          type='text'
          placeholder='usuario'
          onChange={(e) => handleInput(e, 'user')}
          value={inputs.user}
          autoFocus
          required
          ref={inputRef}
          className='input-texto'
        />
        <input
          type='password'
          placeholder='contraseña'
          onChange={(e) => handleInput(e, 'pass')}
          value={inputs.pass}
          required
          className='input-texto'
        />
        { error && <p className='error'>{error}</p> }
        <button className='boton'>Entrar</button>
      </form>
    </section>
  )
}
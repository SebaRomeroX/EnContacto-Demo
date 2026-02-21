import './Login.css'
import { useContext, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { UsuarioContext } from '../../context/usuarioContext'
import { useNavigate } from 'react-router'
import { RUTAS } from '../../consts'

export const Login = () => {
  const [inputs, setInputs] = useState({ user: '', pass: '' })
  const [error, setError] = useState('')
  const { logear } = useContext(UsuarioContext)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  function handleUser (e: ChangeEvent<HTMLInputElement>) {
    setInputs({...inputs, user: e.target.value})
  }

  function handlePass (e: ChangeEvent<HTMLInputElement>) {
    setInputs({...inputs, pass: e.target.value})
  }

  ///// HAY QUE VER QUE PINGO PASA AQUI ??? PORQUE DEPRECATED ??????? !!!!!!
  function handleLog (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (inputs.user && inputs.pass) {
      if (logear(inputs)) {
        navigate(RUTAS.chat)
      } else {
        setError('Error en los datos ingresados')
        inputRef.current?.focus()
      }
      setInputs({ user: '', pass: '' })
    }
  }

  return (
    <section className='log-section'>
      <h2>Inicio de Sesion</h2>
      <form onSubmit={handleLog}>
        <input
          type='text'
          placeholder='usuario'
          onChange={handleUser}
          value={inputs.user}
          autoFocus
          required
          ref={inputRef}
          />
        <input
          type='password'
          placeholder='contra'
          onChange={handlePass}
          value={inputs.pass}
          required
          />
        { error && <p className='error'>{error}</p> }
        <button>Log</button>
      </form>
    </section>
  )
}
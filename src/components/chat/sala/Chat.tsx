import { useContext, useEffect, useRef } from 'react'
import { SalasContext } from '../../../context/salasContext'
import { Mensaje } from './Mensaje'

export const Chat = () => {
  const { sala } = useContext(SalasContext)
  const contenedorRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollTop = contenedorRef.current.scrollHeight;
    }
  }, [sala])

  return (
    <section className="sala">
      {
        sala
          ? <section>
            <h2>{sala.nombre}</h2>
            <ul className="chat-section" ref={contenedorRef}>
              { sala.chat?.map((msj, index) => <Mensaje key={index} msj={msj} /> )}
            </ul>
          </section>
          : <p>Elige sala</p>
      }
    </section>
  )
}
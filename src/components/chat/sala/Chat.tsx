import { useContext, useEffect, useRef } from 'react'
import { SalasContext } from '../../../context/salasContext'
import { Mensaje } from './Mensaje'

export const Chat = () => {
  const { salaActiva } = useContext(SalasContext)
  const contenedorRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollTop = contenedorRef.current.scrollHeight;
    }
  }, [salaActiva])

  return (
    <section className="sala">
      {
        salaActiva
          ? <section>
            <h2>{salaActiva.nombre}</h2>
            <ul className="chat-section" ref={contenedorRef}>
              { salaActiva.chat?.map((msj, index) => <Mensaje key={index} msj={msj} /> )}
            </ul>
          </section>
          : <p>Elige sala</p>
      }
    </section>
  )
}
import { SALAS, USUARIOS } from "./mock";
import type { Id, IdClase } from "./types";

export function crearNewId (IdClase: IdClase) {
  let lista
  if (IdClase == 'sala') {
    lista = [...SALAS]
  }
  if (IdClase == 'user') {
    lista = [...USUARIOS]
  }
  
  let newId: Id
  do {
    newId = `${IdClase}-${crypto.randomUUID()}`
  } while (lista?.find(item => item.id == newId));
  return newId
}
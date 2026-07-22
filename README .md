# enContacto — Demo

[![Live Demo](https://img.shields.io/badge/demo-netlify-00C7B7?logo=netlify)](https://encontacto-demo.netlify.app/)
[![Repo](https://img.shields.io/badge/github-encontacto--demo-181717?logo=github)](https://github.com/SebaRomeroX/EnContacto-Demo)

Plataforma para gestionar salas de chat y usuarios. Crea, modifica y elimina salas, administra usuarios y colabora en tiempo real.

> Proyecto real desarrollado para ayudar a coordinar un equipo de trabajo.

---

## Estado del proyecto

| Componente | Estado |
|------------|--------|
| Demo frontend (Netlify) | Completada |
| Versión completa con backend | Completada |
| Tests unitarios y E2E | Implementados |

La **versión completa** del proyecto ya está disponible con backend propio (Node/Express + MongoDB), autenticación JWT y despliegue en Vercel. [Ver versión completa](https://en-contacto-complete.vercel.app/)

---

## Funcionalidades (Demo)

- Perfil administrador con acceso completo:
  - Crear, editar y eliminar salas de chat
  - Gestionar usuarios (crear, editar, eliminar)
  - Participar en los chats

---

## Versión Completa

Características implementadas en la versión completa:

- **Autenticación JWT** — registro y login de usuarios
- **Roles** — `admin` (control total) y `user` (participa en salas)
- **Panel de administración** — crear/eliminar salas, listar/eliminar usuarios
- **Mensajería persistente** — historial de mensajes por sala vía API REST
- **Protección de rutas** — redirección automática ante 401
- **Tests** — unitarios (Vitest + React Testing Library) y E2E (Playwright)

> Nota: funcionalidades como edición de perfil, permisos por sala y rol moderador aun se encuentran en desarrollo.

---

## Tecnologías

**Frontend (Demo Actual)**

- React con TypeScript
- Context API para estado global
- CSS Modules (estilo propio, sin frameworks UI)
- Desplegado en Netlify

**Backend (Versión Completa)**

- Node.js / Express
- MongoDB / Mongoose
- JWT para autenticación
- API REST desplegada en Vercel

---

## Desafíos Técnicos

**Sistema de roles**  
Solo el administrador debe acceder a funciones críticas. Se implementó protección por roles en el frontend y middlewares de autorización en el backend.

**Diseño UI**  
Se priorizó la funcionalidad primero, consistencia en componentes y refinamiento iterativo.

**Arquitectura limpia**  
Se refactorizó el código para separar responsabilidades y crear componentes reutilizables, mejorando la mantenibilidad.


---

## Aprendizajes

- Componentes reutilizables ahorran horas de desarrollo y debugging.
- Separación de concerns hace el código más mantenible y testeable.
- Mantener un diseño sobrio con el usuario siempre en mente.
- Planificar features ayuda a evitar funcionalidades innecesarias.

---

## Instalación Local (Demo)

```bash
git clone https://github.com/SebaRomeroX/EnContacto-Demo.git
cd EnContacto-Demo
npm install
npm start
```

---

## Autor

**Seba Romero** — [Portfolio](https://sebaromerox.github.io/portafolios/)

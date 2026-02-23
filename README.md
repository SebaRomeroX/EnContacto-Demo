### 📱 enContacto - Gestión de Salas de Chat

[Demo en Vivo](https://encontacto-demo.netlify.app/)
[Código Fuente](https://github.com/SebaRomeroX/EnContacto-Demo)

**Plataforma para gestionar salas de chat y usuarios.** Crea, modifica y elimina salas, administra usuarios y colabora en tiempo real.

> > > 🎯 Proyecto real: desarrollado para ayudar a una amiga a coordinar su equipo de trabajo.

### 🚀 Estado Actual

- ✅ **Demo funcional** con perfil Administrador
- 🏗️ **Backend en desarrollo** (Node/Express + MongoDB)
- 🔜 **Próximamente:** autenticación, permisos avanzados y roles

### 🖼️ Vista Previa

![Captura de enContacto mostrando pantalla de chats](./public/vistaprevia.png)

### ✨ Funcionalidades Demo

- **Perfil Administrador** con acceso completo:
  - ✨ Crear nuevas salas de chat
  - ✏️ Editar salas existentes
  - 🗑️ Eliminar salas
  - 👥 Gestionar usuarios (crear, editar, eliminar)
  - 💬 Participar en los chats

### 🔮 Versión Completa (En Desarrollo)

- **Autenticación de usuarios** - login con cualquier usuario existente
- **Perfiles personalizables** - editar nombre, foto y contraseña
- **Sistema de permisos por sala**:
  - 🔒 Salas con acceso restringido (solo usuarios autorizados)
  - 📖 Salas de solo lectura (solo admin/moderadores pueden escribir)
- **Sistema de roles**:
  - 👑 **Administrador:** control total
  - 🛡️ **Moderador:** funciones adicionales en salas especificas
  - 👤 **Usuario regular:** participa según permisos

### 🛠️ Tecnologías

# Frontend (Demo Actual)

- **React** con TypeScript
- **Context API** para estado global
- **CSS Modules** (estilo propio, sin frameworks UI)
- **Desplegado en:** Netlify

# Backend (En Desarrollo)

- **Node.js/Express**
- **MongoDB/Mongoose**
- **JWT** para autenticación

### 🧠 Desafíos Técnicos y Soluciones

1. 🔐 **Sistema de Permisos**
   **Problema:** Solo el administrador debe acceder a ciertas funciones críticas.  
   **Solución:** Implementé protección por roles en el frontend y, próximamente, en backend con middlewares de autorización.

2. 🎨 **Diseño UI sin Ser Diseñador**
   **Problema:** No tengo formación en diseño, pero necesitaba una interfaz usable.
   **Solución:** Enfoque en funcionalidad primero, consistencia en componentes y refinamiento iterativo.

3. 🏗️ **Arquitectura Limpia**
   **Problema:** Código repetido y lógica desordenada en primeras versiones.
   **Solución:** Refactorización constante, separación de responsabilidades y componentes reutilizables.

4. 🚧 **Primer Proyecto Fullstack**
   **Desafío:** Todo el ecosistema backend y base de datos es territorio nuevo.
   **Aprendizaje:** Cada error es una oportunidad de aprender.

### 💡 Lo Que Estoy Aprendiendo

"La importancia de la reutilización de componentes, la lógica bien separada y una arquitectura clara no se aprecia hasta que tienes que mantener el código."

### Lecciones Clave:

Componentes reutilizables ahorran horas de desarrollo y debugging

Separación de concerns hace el código más mantenible y testeable

Iterar sobre el diseño con feedback real mejora la UX sin ser diseñador

Planificar features ayuda a no trabajar funcionalidades innecesarias

### 🚀 Instalación Local (Demo Frontend)

git clone TU_LINK_REPO_FRONTEND_AQUÍ

cd enContacto-Demo

npm install

npm start

### 🔮 Próximos Pasos

- Completar API REST con Node/Express
- Integrar MongoDB para persistencia de datos
- Implementar autenticación JWT
- Añadir WebSockets para mensajes en tiempo real
- Sistema de roles (admin, moderador, usuario)
- Permisos granulares por sala
- Tests (frontend y backend)

👨‍💻 Autor
[ Seba Romero ] - [Portfolios](https://sebaromerox.github.io/portafolios/)

⭐ ¿Te interesa el proyecto? Sígueme para ver el progreso o deja una estrella si te gusta la idea.

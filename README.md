# CompraFácil - Backend (Node.js + Express + MongoDB + Socket.io)

## ¿Qué incluye?
- server.js (servidor principal)
- models: User, Post, Message
- routes: auth, posts, chat
- .env.example con variables a configurar

## Instrucciones rápidas (local)
1. Copia `.env.example` a `.env` y completa `MONGO_URI` y `JWT_SECRET`.
2. `npm install`
3. `npm start`

## Despliegue en Railway (pasos resumidos)
1. Crear proyecto -> Deploy from ZIP
2. Subir este ZIP
3. En Variables de entorno de Railway, agregar:
   - MONGO_URI
   - JWT_SECRET
   - PORT (opcional)
4. Deploy y obtén la URL pública.

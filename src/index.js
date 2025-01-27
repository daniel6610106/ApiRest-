import express from 'express'
import empleadosRoutes from './routes/empleados.routes.js'
import indexRoutes  from './routes/index.routes.js'

const app = express()

app.use(indexRoutes)
app.use(empleadosRoutes)

app.listen(3000)
console.log("se está ejecutando en el puerto 3000")


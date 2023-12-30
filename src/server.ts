//DEPENDENCIES
import express from 'express'
import gatewayRouter from './routes/gateway'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/gateway', gatewayRouter)

export default app
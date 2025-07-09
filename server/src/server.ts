import { fastifyCors } from "@fastify/cors"

import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod"
import { env } from "@/env"
import { app } from "./app"
import { getRoomsRoute } from './http/routes/get-rooms';

app.register(fastifyCors, {
  origin: "http://localhost:5173",
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get("/health", () => {
  return "Ok"
})

app.register(getRoomsRoute)

app.listen({ port: env.PORT ? Number(env.PORT) : 3333 })

console.log(`Server running on http://localhost:${env.PORT}`)
import { fastifyCors } from "@fastify/cors"
import { fastifyMultipart } from "@fastify/multipart"
import {
	serializerCompiler,
	validatorCompiler,
} from "fastify-type-provider-zod"
import { env } from "@/env"
import { app } from "./app"
import { createQuestionRoute } from "./http/routes/create-question"
import { createRoomsRoute } from "./http/routes/create-room"
import { getRoomsRoute } from "./http/routes/get-rooms"
import { getRoomsQuestions } from "./http/routes/get-rooms-questions"
import { uploadAudioRoute } from "./http/routes/upload-audio"

app.register(fastifyCors, {
	origin: "http://localhost:5173",
})

app.register(fastifyMultipart)

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get("/health", () => {
	return "Ok"
})

app.register(getRoomsRoute)
app.register(createRoomsRoute)
app.register(getRoomsQuestions)
app.register(createQuestionRoute)
app.register(uploadAudioRoute)

app.listen({ port: env.PORT ? Number(env.PORT) : 3333 })

console.log(`Server running on http://localhost:${env.PORT}`)

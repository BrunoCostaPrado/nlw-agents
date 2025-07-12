import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import { z } from "zod/v4"
import { db } from "../../db/connection"
import { rooms } from "./../../db/schema/rooms"

export const createRoomsRoute: FastifyPluginCallbackZod = app => {
	app.post(
		"/rooms",
		{
			schema: {
				body: z.object({
					name: z.string().min(1),
					description: z.string().optional(),
				}),
			},
		},
		async (request, reply) => {
			const { name, description } = request.body
			const result = await db
				.insert(rooms)
				.values({
					name,
					description,
				})
				.returning()

			const insertRoom = result[0]

			if (!insertRoom) {
				throw new Error("Room not created")
			}

			return reply.status(201).send({ roomId: insertRoom.id })
		}
	)
}

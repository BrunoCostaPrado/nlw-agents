import { useQuery } from "@tanstack/react-query"
import type { GetRoomQuestionsResponse } from "./types/get-room-questions"

export function useRoomQuestions(roomID: string) {
	return useQuery({
		queryKey: ["get-questions", roomID],
		queryFn: async () => {
			const response = await fetch(
				`http://localhost:3333/rooms/${roomID}/questions`
			)
			const result: GetRoomQuestionsResponse = await response.json()
			return result
		},
	})
}

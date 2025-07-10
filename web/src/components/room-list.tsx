import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

import { useRooms } from "@/http/use-rooms"
import { dayjs } from "@/lib/dayjs"

export function RoomList() {
	const { data, isLoading } = useRooms()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Salas Recentes</CardTitle>
				<CardDescription>
					Acesso rápido para as salas mais recentes
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				{isLoading && (
					<p className="txt-sm text-muted-foreground">Carregando...</p>
				)}
				{data?.map(room => {
					return (
						<Link
							className="flex items-center justify-between rounded-lg p-3 hover:bg-accent/50"
							key={room.id}
							to={`/room/${room.id}`}
						>
							<div className=" flex flex-1 flex-col gap-1">
								<h3 className="font-medium">{room.name}</h3>
								<div className="flex items-center gap-2">
									<Badge className="text-xs" variant={"secondary"}>
										{dayjs(room.createdAt).toNow()}
									</Badge>
									<Badge className="text-xs" variant={"secondary"}>
										{room.questionsCount} pergunta(s)
									</Badge>
								</div>
							</div>
							<span className="">
								Entrar
								<ArrowRight />
							</span>
						</Link>
					)
				})}
			</CardContent>
		</Card>
	)
}

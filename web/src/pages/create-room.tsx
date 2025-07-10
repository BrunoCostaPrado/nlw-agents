import { CreateRoomForm } from "@/components/create-room-form"
import { RoomList } from "@/components/room-list"

export function CreateRoom() {
	return (
		<div className="min-h-screen px-4 py-8">
			<div className="mx-auto max-w-4xl px-4 py-8">
				<CreateRoomForm />
				<RoomList />
				<div className="grid grid-cols-2 items-center gap-8 " />
			</div>
		</div>
	)
}

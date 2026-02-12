"use client";

import { Spinner } from "@/components/ui/spinner";
import { useGetRooms } from "@/hooks/useGetRooms";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";
import { useState } from "react";
import { RoomsCommand } from "../RoomsCommand/RoomsCommand";

function RoomsList() {
  const [showModal, setShowModal] = useState(false);
  const [roomId, setRoomId] = useState("");
  const { rooms, loading } = useGetRooms();

  if (!rooms.length) {
    return (
      <p className="text-xl font-bold text-center text-gray-400">
        Hozircha xonalar mavjud emas!
      </p>
    );
  }
  if (loading) {
    return <Spinner />;
  }
  const handleClick = (roomId:string)=>{
    setShowModal(true)
    setRoomId(roomId)
  }
  return (
    <div>
      <RoomsCommand  roomId={roomId} open={showModal} setOpen={setShowModal} />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nomi</TableHead>
            <TableHead>Statusi</TableHead>
            <TableHead className="text-end">Narxi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((room) => (
            <TableRow
              onClick={()=>handleClick(room.id)}
              key={room.name}
              className="select-none cursor-pointer"
            >
              <TableCell className="font-medium">{room.name}</TableCell>
              <TableCell>
                {room.isBusy ? (
                  <Badge variant={"error"}>Band</Badge>
                ) : (
                  <Badge variant={"success"}>Bo'sh</Badge>
                )}
              </TableCell>
              <TableCell className="text-end">{room.price} so'm</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}

export default RoomsList;

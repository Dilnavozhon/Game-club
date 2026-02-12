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

function RoomsList() {
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
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nomi</TableHead>
            <TableHead>Statusi</TableHead>
            <TableHead>Narxi</TableHead>
            <TableHead className="text-right">
             Sozlama
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room.name}>
              <TableCell className="font-medium">{room.name}</TableCell>
              <TableCell>
                {room.isBusy ? (
                  <Badge variant={"error"}>Band</Badge>
                ) : (
                  <Badge variant={"success"}>Bo'sh</Badge>
                )}
              </TableCell>
              <TableCell>{room.price} so'm</TableCell>
              <TableCell className="flex justify-end cursor-pointer">
                <Settings/>
              </TableCell>
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

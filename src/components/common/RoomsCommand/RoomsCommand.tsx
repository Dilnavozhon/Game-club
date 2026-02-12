"use client";

import * as React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Edit, Timer, Trash2 } from "lucide-react";
import { DeleteItem } from "../DeleteItem/DeleteItem";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  roomId:string
};

export function RoomsCommand({ open, setOpen,roomId }: Props) {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const handleClick = ()=>{
    setShowDeleteModal(true)
    setOpen(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <DeleteItem roomId={roomId} open={showDeleteModal} setOpen={setShowDeleteModal}/>
      <CommandDialog className="w-96" open={open} onOpenChange={setOpen}>
        <Command>
          <CommandList>
            <CommandEmpty>Natija topilmadi.</CommandEmpty>
            <CommandGroup heading="Sessiya">
              <CommandItem>
                <Timer />
                <span>Sessiya boshlash</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Sozlamalar">
              <CommandItem>
                <Edit />
                <span>Xonani tahrirlash</span>
              </CommandItem>
              <CommandItem onSelect={handleClick} className="text-red-600! bg-red-200! hover:text-red-600! hover:bg-red-300!">
                <Trash2 className="text-red-600" />
                <span>Xonani o'chirish</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}

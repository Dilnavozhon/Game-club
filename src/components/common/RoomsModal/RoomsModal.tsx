"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import RoomsModalForm from "../RoomsModalForm/RoomsModalForm";
import { Plus } from "lucide-react";
import { useState } from "react";

export function RoomsModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger className="ml-auto" asChild>
        <Button>
          <Plus />
          <span>Xona qo'shish</span>
        </Button>
      </DialogTrigger>
      {showModal && <RoomsModalForm setShowModal={setShowModal}/>}
    </Dialog>
  );
}

import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.config";
import { TRoom } from "@/components/common/RoomsModalForm/RoomsModalForm";
import { FullRoomType } from "@/types/types";

export const createRoom = async (room: TRoom) => {
  return addDoc(collection(db, "rooms"), {
    price: room.price,
    name: room.name,
    isBusy: false,
    sessionId: null,
  });
};

export const getRoom = function (fn: (room: FullRoomType[]) => void) {
  const q = query(collection(db, "rooms"));

  return onSnapshot(q, (snapshot) => {
    const roooms: FullRoomType[] = snapshot.docs.map((r) => {
      return {
        id: r.id,
        ...(r.data() as Omit<FullRoomType, "id">),
      };
    });
    fn(roooms);
  });
};

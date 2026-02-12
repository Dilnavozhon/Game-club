"use client";

import { getRoom } from "@/firebase/firebaseRoom";
import { FullRoomType } from "@/types/types";
import { useEffect, useState } from "react";

export const useGetRooms = () => {
  const [rooms, setRooms] = useState<FullRoomType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fullData = getRoom((data) => {
      setRooms(data);
      setLoading(false);
    });
    return () => fullData();
  }, []);

  return { rooms, loading };
};

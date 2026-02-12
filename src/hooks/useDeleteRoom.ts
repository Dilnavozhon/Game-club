

import { deleteRoom as removeRoom } from "@/firebase/firebaseRoom";

export const useDeleteRoom = () => {

  const deleteRoom = async function(roomId:string){
    await removeRoom(roomId)
  }



  return {deleteRoom };
};





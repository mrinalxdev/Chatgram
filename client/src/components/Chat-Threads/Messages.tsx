"use client";
import React from "react";
import Topbar from "./Topbar";
import { useSelectedUser } from "@/store/useStore";

const Messages = () => {
  const selectedUser = useSelectedUser((state) => state.selectedUser);
  return (
    <div className="bg-image messages w-full min-h-screen z-0 hidden md:1/2 lg:w-2/3 md:flex md:flex-col flex-col">
      <Topbar seletedUser = {selectedUser} />
    </div>
  );
};

export default Messages;

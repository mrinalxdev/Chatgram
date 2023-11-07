"use client";
import React from "react";
import Topbar from "./Topbar";
import { useSelectedUser } from "@/store/useStore";
import MessageList from "./MessageList";

const Messages = () => {
  const selectedUser = useSelectedUser((state) => state.selectedUser);
  return (
    <div className="bg-image messages w-full min-h-screen z-0 hidden md:1/2 lg:w-2/3 md:flex md:flex-col flex-col">
      <Topbar seletedUser = {selectedUser} />
      <div className={`max-w-sm md:max-m-3xl w-fullmx-auto mb-10 ${selectedUser? "" : "md:hidden"}`}>
        <MessageList />
      </div>
    </div>
  );
};

export default Messages;

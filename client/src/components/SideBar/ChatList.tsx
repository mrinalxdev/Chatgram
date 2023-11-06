"use client";
import { fetchUsers } from "@/lib/fetcher";
import { useAllUsers } from "@/store/useStore";
import { userProps } from "@/types";
import React, { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import ChatItem from "./ChatItem";

const ChatList = ({ mySelf }: { mySelf: userProps }) => {
  const { users, setUsers } = useAllUsers(
    (state: any) => ({ users: state.users, setUsers: state.setUsers }),
    shallow
  );
  useEffect(() => {
    fetchUsers(mySelf, setUsers);
  }, [users]);
  return (
    <div className="my-5 flex flex-col">
      {users ? (
        users?.reverse()?.map((user: any) => <ChatItem key={user._id} user={user} />)
      ) : (
        <span className="loading loading-ring w-16"></span>
      )}
    </div>
  );
};

export default ChatList;

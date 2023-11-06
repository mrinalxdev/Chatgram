import { userProps } from "@/types";
import Image from "next/image";
import React from "react";

const ChatItem = ({ user }: { user: userProps }) => {
  return (
    <>
      <li className="flex gap-1 cursor-pointer hover:bg-slate-300 p-3 m-2 rounded-lg">
        <div className="avatar">
          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              width={256}
              height={256}
              src={user?.imageId || ""}
              alt="Avatar"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <h3 className="pl-6 font-semibold text-black text-lg">
            {user?.name}
          </h3>
          <p className="text-[#707991] pl-6">User has joined</p>
        </div>
      </li>
      <div className="divider my-0"></div>
    </>
  );
};

export default ChatItem;

import { AvatarProps } from "@/types";
import Image from "next/image";
import React from "react";

const Avatar = ({avatarId , setAvatarId}: AvatarProps) => {
  return (
    <div className="avatar cursor-pointer mx-auto mb-5 tooltip" data-tip="Click to regenerate avatar">
      <div className="w-24 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full">
        <Image
          src={`https://robohash.org/1.png`}
          width={256}
          height={256}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;

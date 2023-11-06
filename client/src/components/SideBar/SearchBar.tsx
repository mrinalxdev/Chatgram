import { userProps } from "@/types";
import { SearchIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

const SearchBar = ({ user }: { user: userProps }) => {
  return (
    <div className="flex gap-4 p-3">
      <div className="avatar online">
        <div className="w-12 rounded-full ring">
          <Image
            width={256}
            height={256}
            src={user?.imageId || ""}
            alt="avatar"
          />
        </div>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          className="input pl-12 rounded-full input-bordered w-full bg-gray-100 placeholder:text-gray-500"
          placeholder="Search...."
        />
        <div className="w-6 h-6 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

"use client";

import React, { useState } from "react";
import Avatar from "./Avatar";
import { handleSubmit } from "@/lib/fetcher";
import { useRouter } from "next/navigation";

const Form = () => {
  const [avatarId, setAvatarId] = useState((Math.random() * 20).toFixed());
  const router = useRouter()

  return (
    <form onSubmit={(e)=>handleSubmit(e, router, avatarId)} className="flex flex-col gap-5">
      <Avatar avatarId={avatarId} setAvatarId={setAvatarId} />
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">What is your name</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full text-sm"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            type="email"
            placeholder="enter your email"
            className="input input-bordered w-full text-sm"
            required
          />
        </div>
      </div>
      <button className="btn">Login</button>
    </form>
  );
};

export default Form;

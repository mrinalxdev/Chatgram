"use client";
import { SendMsIcon, SmileFaceIcon } from "@/utils/icons";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Picker = dynamic(
    () => {
        return import("emoji-picker-react")
    },
    {
        ssr : false
    }
  )

const MessageInpt = () => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [showEmojie, setShowEmojies] = useState<boolean>(false)

  function handleSubmit(e: { preventDefault: () => void; }){
    e.preventDefault()
    setInputValue("")
  }

  function onEmojieClick(emojiObject: { emoji: string  }) {
    setInputValue(pre => pre + emojiObject.emoji)
  }
  
  return (
    <form className="mt-auto relative" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Type Message...."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="input w-full pl-14 input-bordered"
        />
      </div>
      <button
      onClick={()=> setShowEmojies(!showEmojie)}
        type="button"
        className="absolute top-1/2 left-5 -translate-y-1/2 text-white"
      >
        <SmileFaceIcon />
      </button>

        {
            showEmojie && <div className="absolute bottom-full">
                <Picker onEmojiClick={onEmojieClick}/>
            </div>
        }

      <button
        type="submit"
        className="text-white absolute top-1/2 right-5 -translate-y-1/2"
      >
        <SendMsIcon />
      </button>
    </form>
  );
};

export default MessageInpt;

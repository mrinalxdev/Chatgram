"use client";
import { fetchMessages } from "@/lib/fetcher";
import { useMessages, useUser } from "@/store/useStore";
import React, { useEffect } from "react";
import { shallow } from 'zustand/shallow'

const MessageList = () => {
  const sender = useUser((state: any) => state.myUser);
  const receiver = useUser((state: any) => state.selectedUser);
  const { messages, setMessages } = useMessages((state: any) => ({
    messages: state.messages,
    setMessages: state.setMessages
  }), shallow);

  useEffect(() => {
    fetchMessages(sender, receiver, setMessages);
  }, [receiver]);

  return <div>MessageList</div>;
};

export default MessageList;

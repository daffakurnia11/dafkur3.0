"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { notifContent } from "@/utils/atom";
import toast, { Toaster } from "react-hot-toast";
import Typography from "./Typography";

export function CustomNotification({
  title,
  message,
}: {
  title: string;
  message?: string | null;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    setInterval(() => setIsVisible(!isVisible), 3000);
  }, [title, message]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="absolute top-0 right-0 z-50 sm:w-[370px] min-h-[70px] border border-solid border-green-primary bg-black/80 backdrop-blur-sm rounded-2xl flex items-center"
        >
          <div className="px-4 flex items-center gap-3">
            <Image
              src={"/profile.png"}
              alt="My Profile Picture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="py-3">
              <Typography.Paragraph as="p" className="text-green-light">
                {title}
              </Typography.Paragraph>
              <Typography.Small as="span" className="text-green-primary">
                {message}
              </Typography.Small>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Notification() {
  const [content, setContent] = useAtom(notifContent);
  const initialRenderRef = useRef(true);
  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    if (content.title) {
      toast.custom(
        <CustomNotification title={content.title} message={content.message} />
      );
      setContent({
        type: "success",
        title: null,
        message: null,
      });
    }
  }, [content]);

  return <Toaster />;
}

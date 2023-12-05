"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { notifContent } from "@/utils/atom";
import toast, { Toaster } from "react-hot-toast";

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
          className="notification position-absolute d-flex align-items-center"
        >
          <div className="px-3 d-flex align-items-center gap-3 h-auto">
            <Image
              src={"/profile.png"}
              alt="My Profile Picture"
              width={50}
              height={50}
              className="notification-profile"
            />
            <div className="py-2 my-1">
              <p className="text-light-green text-body">{title}</p>
              <small className="text-primary-green text-small lh-1">
                {message}
              </small>
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

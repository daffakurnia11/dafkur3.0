"use client";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Input, { InputTextArea } from "@/components/Input";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GradientCard } from "@/components/Card";
import Scramble from "@/components/Scramble";
import { ContactDataType, ContactSendApi } from "@/axios/api";
import { useSetAtom } from "jotai";
import { notifContent } from "@/utils/atom";

export default function FormContact() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const setNotif = useSetAtom(notifContent);
  const [formData, setFormData] = useState<ContactDataType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("daffakurniaf11@gmail.com");
    setInterval(() => {
      setIsCopied(false);
      return clearInterval(3000);
    }, 3000);
  };

  const handleChange = (value: string, type: string) => {
    setFormData((prev) => {
      return { ...prev, [type]: value };
    });
  };

  const onSubmit = () => {
    setLoading(true);
    ContactSendApi(formData).then((resp) => {
      setLoading(false);
      if (resp?.status === 201) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setNotif({
          title: "Yeyy! The message is sent!",
          message: "Kindly check your email regularly!",
        });
      } else {
        setNotif({
          title: "Oops! Something's happen.",
          message: "You need to check your data once more.",
        });
      }
    });
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0, height: "100%" }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.5, delay: 0.8 }}
    >
      <GradientCard className="form-card mx-auto me-lg-auto ms-lg-0">
        <div className="contact-form h-100">
          <div className="d-flex flex-column h-100 justify-content-between">
            <div>
              <div className="mb-3">
                <Scramble className="text-body text-light-green">
                  Drop me a message:
                </Scramble>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-3">
                <Input
                  name="name"
                  className="w-100"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleChange(e.target.value, "name")}
                  disabled={loading}
                />
                <Input
                  name="email"
                  className="w-100"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleChange(e.target.value, "email")}
                  disabled={loading}
                />
              </div>
              <Input
                name="subject"
                className="w-100 mb-3"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => handleChange(e.target.value, "subject")}
                disabled={loading}
              />
              <InputTextArea
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e.target.value, "message")}
                disabled={loading}
                className="w-100 mb-3"
                rows={3}
                placeholder="Your message.."
              />
              <Button
                buttonType="primary"
                className="w-100"
                onClick={onSubmit}
                disabled={loading}
              >
                <Scramble>{loading ? "Sending.." : "Submit"}</Scramble>
              </Button>
            </div>
            <div className="mt-4">
              <div className="mb-2">
                <Scramble className="text-small text-light-green">
                  Or email me at:
                </Scramble>
              </div>
              <Button
                buttonType="secondary"
                className="d-flex w-100 justify-content-center align-items-center gap-2"
                onClick={handleCopy}
              >
                {isCopied ? (
                  "Copied"
                ) : (
                  <>
                    <Icon icon="copy" size={16} />
                    <Scramble className="text-small">
                      daffakurniaf11@gmail.com
                    </Scramble>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </GradientCard>
    </motion.div>
  );
}

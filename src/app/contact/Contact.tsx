"use client";

import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import Image from "next/image";
import React, { HTMLAttributes, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import Input, { InputTextArea } from "@/components/Input";
import { ContactDataType, ContactSendApi } from "@/axios/api";
import { useSetAtom } from "jotai";
import { notifContent } from "@/utils/atom";

interface SocialListType {
  name: string;
  detail: string;
  link: string;
  icon: string;
}

const socialList: SocialListType[] = [
  {
    name: "Instagram",
    detail: "@daffakurniaf11",
    link: "https://www.instagram.com/daffakurniaf11/",
    icon: "instagram",
  },
  {
    name: "WhatsApp",
    detail: "+6285156317473",
    link: "https://wa.me/6285156317473",
    icon: "whatsapp",
  },
  {
    name: "GitHub",
    detail: "@daffakurnia11",
    link: "https://github.com/daffakurnia11",
    icon: "github",
  },
  {
    name: "LinkedIn",
    detail: "Daffa Kurnia Fatah",
    link: "https://www.linkedin.com/in/daffakurniafatah/",
    icon: "linkedin",
  },
];

const GradientCard = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={classNames(
      "w-full aspect-square p-[1px] bg-gradient-to-b from-green-primary from-30% to-green-primary/15 hover:bg-green-primary to-80% rounded-[18px] transition duration-300",
      className
    )}
  >
    <div className="w-full aspect-square bg-black rounded-[17px] p-8 relative">
      {children}
    </div>
  </div>
);

const SocialCard = ({ children }: { children: React.ReactNode }) => (
  <GradientCard className="overflow-hidden group">
    <Image
      width={72}
      height={72}
      src={"/icons/arrow-top-right-bg.svg"}
      className="absolute top-0 right-0 transition-all duration-300 w-0 h-0 group-hover:w-[72px] group-hover:h-[72px]"
      alt="Arrow Background"
    />
    <Icon
      size={24}
      icon="arrow-top-right"
      className="absolute top-4 right-4 text-green-secondary"
    />
    {children}
  </GradientCard>
);

export default function Contact() {
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
          message: "I will contact you by email very soon!",
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
    <section className="container mx-auto h-fit">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-6">
            {socialList.map((item: SocialListType, key: number) => (
              <motion.div
                key={key}
                className="col-span-1"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 0.5, delay: key * 0.2 }}
              >
                <SocialCard>
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-fit aspect-square rounded-full border border-solid border-green-primary p-3 overflow-hidden relative">
                      <Icon
                        icon={item.icon}
                        size={30}
                        className="text-green-secondary relative z-10"
                      />
                      <div className="w-full h-full aspect-square absolute bottom-0 left-0 right-0 bg-green-primary rounded-full translate-y-full group-hover:translate-y-0 transition duration-300"></div>
                    </div>
                    <div className="shrink-0">
                      <Typography.Heading
                        level={4}
                        as="h2"
                        className="text-white mb-2 translate-y-full group-hover:translate-y-0 transition duration-300"
                        isScrambled
                      >
                        {item.name}
                      </Typography.Heading>
                      <div className="flex items-center gap-2 -translate-x-full group-hover:translate-x-0 transition duration-300">
                        <Icon
                          icon="arrow-right-linear"
                          size={16}
                          className="text-green-secondary"
                        />
                        <Typography.Small
                          as="small"
                          className="text-white"
                          isScrambled
                        >
                          {item.detail}
                        </Typography.Small>
                      </div>
                    </div>
                  </div>
                </SocialCard>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="col-span-1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.8 }}
        >
          <GradientCard>
            <div className="flex flex-col justify-between h-full">
              <div className="flex-1">
                <Typography.Paragraph className="text-white mb-4">
                  Drop me a message:
                </Typography.Paragraph>
                <div className="flex flex-row justify-between gap-4 mb-4">
                  <Input
                    name="name"
                    className="w-full"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleChange(e.target.value, "name")}
                    disabled={loading}
                  />
                  <Input
                    name="email"
                    className="w-full"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleChange(e.target.value, "email")}
                    disabled={loading}
                  />
                </div>
                <Input
                  name="subject"
                  className="w-full mb-4"
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
                  className="w-full mb-4"
                  rows={3}
                  placeholder="Your message.."
                />
                <button
                  className="w-full bg-green-primary py-3 px-5 rounded-2xl flex items-center justify-center hover:bg-green-secondary group transition duration-300"
                  onClick={onSubmit}
                >
                  <Typography.Small
                    as="span"
                    className="text-green-light group-hover:text-black transition duration-300"
                    isScrambled
                  >
                    Submit
                  </Typography.Small>
                </button>
              </div>
              <div className="shrink-0">
                <Typography.Paragraph className="text-white mb-4">
                  or email me at:
                </Typography.Paragraph>
                <button
                  className="w-full bg-green-dark border border-solid border-green-primary py-3 px-5 rounded-2xl flex items-center justify-center hover:bg-green-secondary group transition duration-300"
                  onClick={handleCopy}
                >
                  <div className="flex items-center justify-center gap-1">
                    {isCopied ? (
                      <Typography.Small
                        as="span"
                        className="text-green-secondary group-hover:text-black"
                        isScrambled
                      >
                        Copied
                      </Typography.Small>
                    ) : (
                      <>
                        <Icon
                          icon="copy"
                          size={16}
                          className="text-green-secondary group-hover:text-black"
                        />
                        <Typography.Small
                          as="span"
                          className="text-green-secondary group-hover:text-black"
                          isScrambled
                        >
                          daffakurniaf11@gmail.com
                        </Typography.Small>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </GradientCard>
        </motion.div>
      </div>
    </section>
  );
}

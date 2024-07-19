import { ContactDataType, ContactSendApi } from "@/axios/api";
import { notifContent } from "@/utils/atom";
import { useSetAtom } from "jotai";
import { useState } from "react";

export const useFormContact = () => {
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
    setFormData((prev: any) => {
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

  return { formData, handleChange, handleCopy, isCopied, loading, onSubmit };
};

import { ContactDataType, ContactSendApi } from "@/axios/api";
import { notifContent } from "@/utils/atom";
import { useSetAtom } from "jotai";
import { useState } from "react";

export const useFormContact = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const setNotif = useSetAtom(notifContent);
  const [formData, setFormData] = useState<Omit<ContactDataType, "token">>({
    name: "",
    email: "",
    subject: "",
    body: "",
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

  const onSubmit = async (token: string | null) => {
    if (!token) {
      setNotif({
        title: "reCAPTCHA failed",
        message: "Please try again or check your internet connection.",
      });
      return;
    }

    setLoading(true);
    await ContactSendApi({ ...formData, token }).then((resp: any) => {
      console.log(resp);
      setLoading(false);
      if (resp.success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          body: "",
        });
        setNotif({
          title: "Yeyy! The message is sent!",
          message: "I will contact you by email very soon!",
        });
      } else {
        setNotif({
          title: "Oops! Something's happen.",
          message: resp.error || "You need to check your data once more.",
        });
      }
    });
  };

  return { formData, handleChange, handleCopy, isCopied, loading, onSubmit };
};

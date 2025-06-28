import { ContactDataType, ContactSendApi } from "@/axios/api";
import { useGtag } from "@/hooks/useGtag.hook";
import { notifContent } from "@/utils/atom";
import { useSetAtom } from "jotai";
import { useState } from "react";

export const useFormContact = () => {
  const { event } = useGtag();
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
    event("button_click", {
      page_name: "contact",
      component_name: "form_contact",
      button_name: "copy_email_button",
    });
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
    event("button_click", {
      page_name: "contact",
      component_name: "form_contact",
      button_name: "submit_contact_button",
    });

    setLoading(true);
    await ContactSendApi({ ...formData, token }).then((resp: any) => {
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

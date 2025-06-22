import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Input, { InputTextArea } from "@/components/Input";
import ReCaptchaProvider from "@/components/ReCaptcha/Provider";
import Typography from "@/components/Typography";
import { useMobile } from "@/hooks/useMobile.hook";
import { motion } from "framer-motion";
import React from "react";
import { useFormContact } from "../_hooks/useFormContact.hook";

export default function FormContact() {
  const { formData, handleChange, handleCopy, isCopied, loading, onSubmit } =
    useFormContact();
  const { isMobile } = useMobile();

  return (
    <motion.div
      className="col-span-1"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.5, delay: 0.8 }}
    >
      <ReCaptchaProvider onVerify={onSubmit}>
        {(executeReCaptcha) => (
          <Card.Gradient isSquare={!isMobile}>
            <div className="flex flex-col gap-4 justify-between h-full">
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
                  name="body"
                  value={formData.body}
                  onChange={(e) => handleChange(e.target.value, "body")}
                  disabled={loading}
                  className="w-full mb-4"
                  rows={3}
                  placeholder="Your message.."
                />
                <button
                  className="w-full bg-green-primary py-3 px-5 rounded-2xl flex items-center justify-center hover:bg-green-secondary group transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                  onClick={() => executeReCaptcha()}
                >
                  {loading ? (
                    <Typography.Small
                      as="span"
                      className="text-green-secondary group-hover:text-black"
                      isScrambled
                    >
                      Submitting...
                    </Typography.Small>
                  ) : (
                    <Typography.Small
                      as="span"
                      className="text-green-light group-hover:text-black transition duration-300"
                      isScrambled
                    >
                      Submit
                    </Typography.Small>
                  )}
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
          </Card.Gradient>
        )}
      </ReCaptchaProvider>
    </motion.div>
  );
}

"use client";

import Button from "@/components/Button";
import { GradientCard } from "@/components/Card";
import Icon from "@/components/Icon";
import Input, { InputTextArea } from "@/components/Input";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FormContact() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("daffakurniaf11@gmail.com");
    setInterval(() => {
      setIsCopied(false);
      return clearInterval(3000);
    }, 3000);
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
              <p className="text-light-green mb-3">Drop me a message:</p>
              <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-3">
                <Input className="w-100" placeholder="Name" />
                <Input className="w-100" placeholder="Email" />
              </div>
              <Input className="w-100 mb-3" placeholder="Subject" />
              <InputTextArea
                className="w-100 mb-3"
                rows={3}
                placeholder="Your message.."
              />
              <Button buttonType="primary" className="w-100">
                Submit
              </Button>
            </div>
            <div className="mt-4">
              <small className="d-block mb-2">Or email me at:</small>
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
                    daffakurniaf11@gmail.com
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

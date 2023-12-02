"use client";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Input, { InputTextArea } from "@/components/Input";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GradientCard } from "@/components/Card";
import Scramble from "@/components/Scramble";

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
              <div className="mb-3">
                <Scramble className="text-body text-light-green">
                  Drop me a message:
                </Scramble>
              </div>
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
                <Scramble>Submit</Scramble>
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

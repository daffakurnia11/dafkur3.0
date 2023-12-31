import Icon from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { ContactProps } from "./type";
import Scramble from "../Scramble";

export function CardContact(props: ContactProps) {
  return (
    <Link href={props.link} target="_blank" className="d-block contact-social">
      <div className="h-100 d-flex flex-column justify-content-between">
        <div className="social-icon">
          <Icon icon={props.icon} className="text-secondary-green" />
        </div>
        <div>
          <Scramble className="social-name">{props.title}</Scramble>
          <div className="social-detail d-flex gap-1 gap-md-2 align-items-center mt-1 mt-md-2">
            <Icon
              icon="arrow-right"
              size={16}
              className="text-secondary-green"
            />
            <Scramble className="text-small">{props.detail}</Scramble>
          </div>
        </div>
      </div>
      <div>
        <Image
          width={72}
          height={72}
          src={"/icons/arrow-bg.svg"}
          className="social-arrow-bg"
          alt="arrow background"
        />
      </div>
      <Icon icon="arrow-top-right" className="social-arrow" size={24} />
    </Link>
  );
}

import { FeatureListType } from "@/utils/menu";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

interface Props extends FeatureListType {
  key: number;
}

export default function HomeList(props: Props) {
  return props.link ? (
    <Link
      href={props.link}
      key={props.key}
      target={props.newTab ? "_blank" : "_self"}
      className="text-body d-flex gap-2 mb-2"
    >
      <TypeAnimation
        className="text-primary-green"
        sequence={[props.key * 200, props.number]}
        speed={30}
        cursor={false}
      />
      <TypeAnimation
        className="text-light-green text-decoration-underline"
        sequence={[(props.key + 1) * 200, props.label]}
        speed={30}
        cursor={false}
      />
    </Link>
  ) : (
    <div
      key={props.key}
      className="text-body text-light-green d-flex gap-2 mb-2"
    >
      <TypeAnimation
        className="text-primary-green"
        sequence={[props.key * 200, props.number]}
        speed={30}
        cursor={false}
      />
      <TypeAnimation
        className="text-light-green"
        sequence={[(props.key + 1) * 200, props.label]}
        speed={30}
        cursor={false}
      />
    </div>
  );
}

import type { HTMLAttributes } from "react";

export interface GradientCardProps extends HTMLAttributes<HTMLDivElement> {
  shape?: "square" | "fix" | null;
}

export interface ContactProps {
  icon: string;
  title: string;
  detail: string;
  link: string;
}

export interface ProjectContentProps {
  name: string;
  description: string;
  link?: string | null;
  isHover?: boolean | null;
  tech?: string[] | null;
  image?: string | null;
}

export interface BoxCardProps extends ProjectContentProps {
  background?: string | null;
  logo?: string | null;
}

export interface ProjectCardProps
  extends ProjectContentProps,
    BoxCardProps,
    HTMLAttributes<HTMLDivElement> {
  shape: "vertical" | "horizontal" | "box";
}
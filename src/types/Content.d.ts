export interface MenuItemType {
  name: string;
  icon: string;
  pathname: string[];
  tracking: string;
}

export interface PagesListType {
  number: string,
  label: string,
  link?: string
  newTab?: boolean,
}

export interface ExperienceDataType {
  position: string;
  company: string;
  place: string;
  start: string;
  end?: string;
}

export interface ProjectContentProps {
  id: string;
  name: string;
  description: string;
  brief: string[];
  link?: string | null;
  isHover?: boolean | null;
  tech?: string[] | null;
  repo?: string | null;
}

export interface BoxCardProps extends ProjectContentProps {
  background?: string | null;
}

export interface ProjectCardProps
  extends ProjectContentProps,
    BoxCardProps,
    HTMLAttributes<HTMLDivElement> {
  shape: "vertical" | "horizontal" | "box";
}

export interface ProjectDataType extends ProjectCardProps {
  id: string;
}

export interface SocialListType {
  name: string;
  detail: string;
  link: string;
  icon: string;
}
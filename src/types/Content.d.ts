export interface MenuItemType {
  name: string;
  icon: string;
  pathname: string[];
}

export interface PagesListType {
  number: string,
  label: string,
  link?: string
  newTab?: boolean,
}

export interface SocialListType {
  name: string;
  detail: string;
  link: string;
  icon: string;
}
import type { MenuItemType, PagesListType, SocialListType } from "@/types/Content";

export const menuItem: MenuItemType[] = [
  {
    name: "Home",
    icon: "home",
    pathname: ["/", "/about"],
  },
  {
    name: "Experiences",
    icon: "skills",
    pathname: ["/experience"],
  },
  {
    name: "Skills",
    icon: "stack",
    pathname: ["/skills"],
  },
  {
    name: "Projects",
    icon: "project",
    pathname: ["/project"],
  },
  {
    name: "Blog",
    icon: "blog",
    pathname: ["/blog"],
  },
  {
    name: "Contact",
    icon: "contact",
    pathname: ["/contact"],
  },
];

export const pagesList: PagesListType[] = [
  {
    number: "01.",
    label: "Home",
    link: "/",
  },
  {
    number: "02.",
    label: "About",
    link: "/about",
  },
  {
    number: "03.",
    label: "Experiences",
    link: "/experience",
  },
  {
    number: "04.",
    label: "Skills",
    link: "/skills",
  },
  {
    number: "05.",
    label: "Projects",
    link: "/projects",
  },
  {
    number: "06.",
    label: "Blogs",
    link: "/blog",
  },
  {
    number: "07.",
    label: "Games",
    link: "/games",
  },
  {
    number: "08.",
    label: "Contacts",
    link: "/contact",
  }
]

export const socialList: SocialListType[] = [
  {
    name: "Instagram",
    detail: "@daffakurniaf11",
    link: "https://www.instagram.com/daffakurniaf11/",
    icon: "instagram",
  },
  {
    name: "WhatsApp",
    detail: "+6285156317473",
    link: "https://wa.me/6285156317473",
    icon: "whatsapp",
  },
  {
    name: "GitHub",
    detail: "@daffakurnia11",
    link: "https://github.com/daffakurnia11",
    icon: "github",
  },
  {
    name: "LinkedIn",
    detail: "Daffa Kurnia Fatah",
    link: "https://www.linkedin.com/in/daffakurniafatah/",
    icon: "linkedin",
  },
];
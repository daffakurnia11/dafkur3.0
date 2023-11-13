export interface FeatureListType {
  number: string,
  label: string,
  link?: string
  newTab?: boolean,
}

export const featureList: FeatureListType[] = [
  {
    number: "01.",
    label: "Projects",
    link: "/project",
  },
  {
    number: "02.",
    label: "Experiences",
    link: "/experience",
  },
  {
    number: "03.",
    label: "Blogs",
    link: "/blog"
  },
  {
    number: "04.",
    label: "Contacts",
    link: "/contact",
  },
  {
    number: "05.",
    label: "Instagram",
    link: "https://www.instagram.com/daffakurniaf11/",
    newTab: true,
  },
  {
    number: "06.",
    label: "Whatsapp",
    link: "https://wa.me/6285156317473",
    newTab: true,
  },
  {
    number: "07.",
    label: "Github",
    link: "https://github.com/daffakurnia11",
    newTab: true,
  },
  {
    number: "08.",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/daffakurniafatah/",
    newTab: true,
  },
  {
    number: "09.",
    label: "Braille Games",
  },
  {
    number: "10.",
    label: "Short Links",
  },
  {
    number: "11.",
    label: "Coming Soon!",
  },
]
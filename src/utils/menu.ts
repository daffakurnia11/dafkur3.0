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
    label: "Download My CV",
    link: "https://drive.google.com/file/d/1pztI2gzYTaUJgEntlI2r_XhzSK1jV5_4/view?usp=sharing",
    newTab: true,
  },
  {
    number: "10.",
    label: "Braille Quest",
    link: "/braille",
  },
  {
    number: "11.",
    label: "Coming Soon!",
  },
  // {
  //   number: "12.",
  //   label: "Coming Soon!",
  // },
]
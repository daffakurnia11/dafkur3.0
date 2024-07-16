import type { ExperienceDataType, MenuItemType, PagesListType, SocialListType } from "@/types/Content";

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

export const workData: ExperienceDataType[] = [
  {
    position: "Front-end Developer",
    company: "Itsavirus",
    place: "Denpasar, Bali - Indonesia",
    start: "July 2023",
  },
  {
    position: "Full-stack Developer",
    company: "LnData Indonesia",
    place: "Surabaya, East Java - Indonesia",
    start: "September 2022",
    end: "April 2023",
  },
  {
    position: "Engineer Intern",
    company: "Unilever Indonesia",
    place: "Surabaya, East Java - Indonesia",
    start: "August 2022",
    end: "September 2022",
  },
  {
    position: "Mobile Development Cohort",
    company: "Bangkit Academy 2022",
    place: "Surabaya, East Java - Indonesia",
    start: "February 2022",
    end: "July 2022",
  },
  {
    position: "Founder & Full-stack Developer",
    company: "Breakpoint Indonesia",
    place: "Surabaya, East Java - Indonesia",
    start: "May 2021",
    end: "February 2023",
  },
  {
    position: "Team Coach Extracurricular",
    company: "SMAN 1 Sidoarjo",
    place: "Sidoarjo, East Java - Indonesia",
    start: "January 2020",
    end: "August 2023",
  },
];

export const organizationData: ExperienceDataType[] = [
  {
    position: "Coordinator of Laboratory Assistant",
    company: "Embedded and Cyber-Physical System",
    place: "Surabaya, East Java - Indonesia",
    start: "March 2022",
    end:"February 2023"
  },
  {
    position: "Coordinator of Web Development",
    company: "Petrolida 2022",
    place: "Surabaya, East Java - Indonesia",
    start: "November 2021",
    end: "May 2022",
  },
  {
    position: "IT Manager",
    company: "Engineering Physics Week 2022",
    place: "Surabaya, East Java - Indonesia",
    start: "October 2021",
    end: "February 2022",
  },
  {
    position: "Head of Web Development",
    company: "Society of Petroleum Engineer ITS",
    place: "Surabaya, East Java - Indonesia",
    start: "August 2021",
    end: "June 2022",
  },
  {
    position: "Expert Staff of Web Development",
    company: "Gerigi ITS 2021",
    place: "Surabaya, East Java - Indonesia",
    start: "July 2021",
    end: "August 2021",
  },
  {
    position: "Staff of IT Developer",
    company: "Ini Lho ITS! 2021",
    place: "Surabaya, East Java - Indonesia",
    start: "December 2020",
    end: "March 2021",
  },
];

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
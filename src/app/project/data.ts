import { ProjectCardProps } from "@/components/Card/type";

export interface ProjectDataType extends ProjectCardProps {
  key: string;
}

export const projectData: ProjectDataType[] = [
  {
    key: "dafkur2.0",
    shape: "horizontal",
    name: "Dafkur.com 2.0",
    description: "My second version of Personal Website",
    tech: ["ReactJS", "Bootstrap", "SCSS"],
    logo: null,
    image: "dafkur2.png",
    background: null,
  },
  {
    key: "breakpoint",
    shape: "box",
    name: "Breakpoint",
    description: "My Startup Company Profile.",
    tech: ["Laravel", "Bootstrap", "SCSS"],
    logo: "breakpoint.png",
    image: null,
    background: "#0C1523",
  },
  {
    key: "candlecraft",
    shape: "box",
    name: "Candle Craft",
    description: "Candle Exporter Product Website.",
    tech: ["NextJS", "Bootstrap", "SCSS"],
    logo: "candlecraft.png",
    image: null,
    background: "#05060A",
  },
  {
    key: "ifem",
    shape: "vertical",
    name: "IFEM 2022",
    description: "Biggest Mechanical Engineering ITS Event.",
    tech: ["Laravel", "Bootstrap", "SCSS"],
    logo: null,
    image: "ifem.png",
    background: null,
  },
  {
    key: "crawlerhub",
    shape: "horizontal",
    name: "Crawlerhub",
    description: "Web Crawler by LnData Indonesia.",
    tech: ["ReactJS", "AntDesign", "SCSS"],
    logo: null,
    image: "crawlerhub.png",
    background: null,
  },
  {
    key: "ecs",
    shape: "box",
    name: "ECS Training",
    description: "Programming Training by ECS Laboratory.",
    tech: ["Laravel", "Bootstrap", "SCSS"],
    logo: "ecs.png",
    image: null,
    background: "#E0D6B6",
  },
  {
    key: "spe",
    shape: "box",
    name: "SPE ITS",
    description: "Society of Petroleum Engineers ITS.",
    tech: ["Laravel", "Bootstrap", "SCSS"],
    logo: "spe.png",
    image: null,
    background: "#111840",
  },
  {
    key: "petrolida",
    shape: "vertical",
    name: "Petrolida 2022",
    description: "Biggest Events by SPE ITS.",
    tech: ["React", "Bootstrap", "Laravel"],
    logo: null,
    image: "petrolida.png",
    background: null,
  },
  {
    key: "ukmexpo",
    shape: "horizontal",
    name: "UKM Expo ITS",
    description: "Biggest Event by ITS Communities.",
    tech: ["Laravel", "Bootstrap", "SCSS"],
    logo: null,
    image: "ukmexpo.png",
    background: null,
  },
  {
    key: "epw",
    shape: "box",
    name: "EPW ITS 2022",
    description: "Biggest Engineering Physics ITS Event.",
    tech: ["Laravel", "Bootstrap", "SCSS"],
    logo: "epw.png",
    image: null,
    background: "#9BB56D",
  },
  {
    key: "ilits",
    shape: "box",
    name: "Ini Lho ITS! 2021",
    description: "Biggest Event in ITS Surabaya.",
    tech: ["Laravel", "Bootstrap", "SCSS"],
    logo: "ilits.png",
    image: null,
    background: "#1C2945",
  },
]
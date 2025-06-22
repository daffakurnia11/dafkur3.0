import { useParams } from "next/navigation";
import type { ProjectDataType } from "@/types/Content";
import projects from "@/data/projects.json";

export const useProjectDetail = () => {
  const params = useParams();
  const data: ProjectDataType | undefined = (
    projects.data as ProjectDataType[]
  ).find((item) => item.id === params.name);

  return { data };
};

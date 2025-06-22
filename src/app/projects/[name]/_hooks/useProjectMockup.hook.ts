import type { ProjectDataType } from "@/types/Content";
import { useEffect, useState } from "react";

export const useProjectMockup = (data: ProjectDataType) => {
  const [mockupType, setMockupType] = useState<"laptop" | "mobile">("laptop");
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    if (data) {
      const imageUrl = `/mockup/${data.id}/mobile-portrait.png`;

      fetch(imageUrl)
        .then((res) => {
          if (res.ok) {
            setImageExists(true);
          } else {
            setImageExists(false);
          }
        })
        .catch(() => setImageExists(false));
    }
  }, [data, mockupType]);

  return { mockupType, setMockupType, imageExists };
};
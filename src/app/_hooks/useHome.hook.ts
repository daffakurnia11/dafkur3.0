import type { PagesListType } from "@/types/Content";
import { useEffect, useState } from "react";

import pages from "@/data/pages.json";

export const useHome = () => {
  const [list, setList] = useState<PagesListType[]>([]);

  function createGridReorderedList() {
    const numRows = window.innerWidth < 640 ? 2 : 3;
    const numCols = Math.ceil(pages.length / numRows);
    const reorderedList = [];

    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        const index = col + row * numCols;
        if (index < pages.length) {
          reorderedList.push(pages[index]);
        }
      }
    }
    setList(reorderedList);
  }

  useEffect(() => {
    createGridReorderedList();
  }, []);

  return { list };
};

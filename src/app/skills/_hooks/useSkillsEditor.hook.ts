import { useEffect, useState } from "react";
import samplecode from "@/data/samplecode.json";

export const useSkillsEditor = () => {
  const [lang, setLang] = useState<
    "javascript" | "typescript" | "python" | "php"
  >("javascript");
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const content = samplecode!.find((item) => item.lang === lang)!.content;
    setCode(content);
  }, [lang]);

  return { lang, setLang, code };
};

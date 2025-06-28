import { useEffect, useState } from "react";
import samplecode from "@/data/samplecode.json";
import { useGtag } from "@/hooks/useGtag.hook";

export const useSkillsEditor = () => {
  const { event } = useGtag();
  const [lang, setLang] = useState<
    "javascript" | "typescript" | "python" | "php"
  >("javascript");
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const content = samplecode!.find((item) => item.lang === lang)!.content;
    event('button_click', {
      page_name: 'skills',
      component_name: 'skills_editor',
      button_name: `skills_tab_button_${lang}`,
    })
    setCode(content);
  }, [lang]);

  return { lang, setLang, code };
};

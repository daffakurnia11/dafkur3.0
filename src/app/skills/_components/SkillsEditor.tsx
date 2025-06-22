import React from "react";
import Editor from "@monaco-editor/react";
import classNames from "classnames";
import { useMobile } from "@/hooks/useMobile.hook";
import { useSkillsEditor } from "../_hooks/useSkillsEditor.hook";
import Typography from "@/components/Typography";

export default function SkillsEditor() {
  const { isMobile } = useMobile();
  const { lang, setLang, code } = useSkillsEditor();

  return (
    code && (
      <>
        <div className="flex flex-wrap justify-between gap-3">
          <button
            className={classNames(
              "flex-1 shrink-0 block w-full pb-2 border-b border-solid transition duration-300",
              lang === "javascript"
                ? "border-green-primary"
                : "border-transparent"
            )}
            onClick={() => setLang("javascript")}
          >
            <Typography.Small className="text-white">
              Javascript
            </Typography.Small>
          </button>
          <button
            className={classNames(
              "flex-1 shrink-0 block w-full pb-2 border-b border-solid transition duration-300",
              lang === "typescript"
                ? "border-green-primary"
                : "border-transparent"
            )}
            onClick={() => setLang("typescript")}
          >
            <Typography.Small className="text-white">
              Typescript
            </Typography.Small>
          </button>
          <button
            className={classNames(
              "flex-1 shrink-0 block w-full pb-2 border-b border-solid transition duration-300",
              lang === "python" ? "border-green-primary" : "border-transparent"
            )}
            onClick={() => setLang("python")}
          >
            <Typography.Small className="text-white">Python</Typography.Small>
          </button>
          <button
            className={classNames(
              "flex-1 shrink-0 block w-full pb-2 border-b border-solid transition duration-300",
              lang === "php" ? "border-green-primary" : "border-transparent"
            )}
            onClick={() => setLang("php")}
          >
            <Typography.Small className="text-white">PHP</Typography.Small>
          </button>
        </div>
        <Editor
          language={lang}
          theme="vs-dark"
          value={code}
          options={{
            lineNumbers: isMobile ? "off" : "on",
            fontSize: isMobile ? 10 : 14,
            inlineSuggest: true,
            formatOnType: true,
            autoClosingBrackets: true,
            minimap: { enabled: false },
          }}
        />
      </>
    )
  );
}

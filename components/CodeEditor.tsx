"use client";
import Editor from "@monaco-editor/react";

interface codeEditorProps {
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
    buttons: React.ReactNode;
}
const CodeEditor = ({ code, setCode, buttons }: codeEditorProps) => {
    return (
        <div
            className="w-full rounded-lg border border-black px-2 py-4 flex flex-col relative"
            style={{ flex: 7 }}
        >
            <Editor
                className="
                editor"
                height="100%"
                defaultLanguage="json"
                defaultValue="{}"
                value={code}
                onChange={(value) => {
                    setCode(value as string);
                }}
            />
            <div className="absolute bottom-4 right-[24px] flex gap-4   ">
                {buttons}
            </div>
        </div>
    );
};

export default CodeEditor;

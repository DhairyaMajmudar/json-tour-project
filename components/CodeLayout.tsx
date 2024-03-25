"use client";

import CodeEditor from "./CodeEditor";
import Instructions from "./CodeInstructions";
import Output from "./CodeOutput";

interface CodeLayoutProps {
    InstructionsMarkdown: string;
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
    output: {
        isInvalid: boolean;
        message: string;
    };
    buttons: React.ReactNode;
}

const CodeLayout = ({
    InstructionsMarkdown,
    code,
    setCode,
    output,
    buttons,
}: CodeLayoutProps) => {
    return (
        <div className="flex flex-row h-[90%] gap-4 w-full ">
            <Instructions markdownInstructions={InstructionsMarkdown!} />
            <div
                className="flex flex-col h-full gap-4 w-full "
                style={{ flex: 6 }}
            >
                <CodeEditor code={code} setCode={setCode} buttons={buttons} />
                <Output isInvalid={output.isInvalid}>{output.message}</Output>
            </div>
        </div>
    );
};

export default CodeLayout;

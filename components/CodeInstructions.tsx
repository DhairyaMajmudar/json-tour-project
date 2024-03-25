"use client";
import MarkdownPreview from "@uiw/react-markdown-preview";
const Instructions = ({
    markdownInstructions,
}: {
    markdownInstructions: string;
}) => {
    return (
        <div
            className="h-full  border border-black  p-8 overflow-y-scroll rounded-lg "
            style={{ flex: 4 }}
            data-color-mode="light"
        >
            <MarkdownPreview
                source={markdownInstructions}
                style={{
                    backgroundColor: "transparent",
                }}
            />
        </div>
    );
};

export default Instructions;

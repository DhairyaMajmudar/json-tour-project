"use client";

import classnames from "classnames";

interface OutputProps {
    children: React.ReactNode;
    isInvalid: boolean;
}

const Output = ({ children, isInvalid }: OutputProps) => {
    return (
        <>
            <div
                className={classnames(
                    "w-full border rounded-lg border-black p-4 overflow-y-scroll overflow-x-scroll items-start",
                    isInvalid ? "text-red-500" : "text-green-500 text-lg"
                )}
                style={{ flex: 3, whiteSpace: "pre-wrap" }}
            >
                {children?.toString().replaceAll('"', "")}
            </div>
        </>
    );
};

export default Output;

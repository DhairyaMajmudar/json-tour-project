"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Instructions from "@/components/CodeInstructions";
import Link from "next/link";

export default function Home() {
    const [InstructionsMarkdown, setInstructionsMarkdown] =
        useState<string>("");

    useEffect(() => {
        const textFile = require("./instructions.md");
        setInstructionsMarkdown(textFile);
    }, []);
    return (
        <>
            <Navbar />

            <div className="flex flex-col h-[85%]">
                <Instructions markdownInstructions={InstructionsMarkdown} />

                <Link href={"/"}>
                    <button className=" w-[100px] right-8 fixed hover:bg-blue-800 bg-blue-900 text-white px-1 text-sm font-semibold rounded-lg py-2">
                        Finish
                    </button>
                </Link>
            </div>
        </>
    );
}

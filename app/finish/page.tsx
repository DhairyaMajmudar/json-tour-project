"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Instructions from "@/components/CodeInstructions";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                    <Button>Home</Button>
                </Link>
            </div>
        </>
    );
}

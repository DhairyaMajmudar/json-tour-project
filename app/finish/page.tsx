"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Instructions from "@/components/CodeInstructions";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Home() {
    const [InstructionsMarkdown, setInstructionsMarkdown] =
        useState<string>("");

    useEffect(() => {
        const textFile = require("./instructions.md");
        setInstructionsMarkdown(textFile);
    }, []);
    return (
        <>
            {" "}
            <Sheet>
                <Navbar />
                <SheetTrigger className="flex flex-row group gap-2 justify-center items-center">
                    <span className="text-lg">Chapters</span>
                    <TiArrowSortedDown className="-rotate-90 text-lg group-hover:translate-x-2 group-hover:duration-150" />
                </SheetTrigger>

                <div className="flex flex-col h-[80%]">
                    <Instructions markdownInstructions={InstructionsMarkdown} />

                    <Link href={"/"}>
                        <Button
                            variant={"primary"}
                            className="right-8 fixed mt-2"
                        >
                            Home
                        </Button>
                    </Link>
                </div>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-2xl">
                            Chapter Roadmap
                        </SheetTitle>
                        <SheetDescription>
                            <ul className="ml-2 text-lg mt-5 flex flex-col gap-4 list-disc">
                                <li className=" ">
                                    Chapter 1: Introduction and Schema
                                    Definations
                                </li>
                                <Link href={"/tutorial2"}>
                                    <li className="">
                                        Chapter 2: Arrays and type keyword
                                    </li>
                                </Link>
                                <Link href={"/finish"}>
                                    <li className="text-blue-900 font-semibold">
                                        Chapter 3: Finishing and Summary
                                    </li>
                                </Link>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    );
}

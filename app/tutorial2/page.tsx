"use client";
import { useEffect, useState } from "react";
import CodeLayout from "../../components/CodeLayout";
import { ajv, hyperjumpValidate } from "@/lib/validators";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

async function handleValidation(
    setValidity: any,
    setIsInvalid: any,
    code: string | undefined
) {
    try {
        const schema = JSON.parse(code!);
        const data = [1, 2, 3];
        const output = await hyperjumpValidate(data, schema);

        const avjErrors = ajv(data, schema).errors;
        if (output?.valid) {
            setValidity(
                "Bingo! Your JSON schema is valid. Now let's move to the next step."
            );

            setIsInvalid(false);
        } else {
            setValidity(avjErrors);

            setIsInvalid(true);
        }
    } catch (e) {
        setValidity(JSON.stringify((e as Error).message));
        setIsInvalid(true);
    }
}

export default function Home() {
    const [code, setCode] = useState<string>("{}");
    const [InstructionsMarkdown, setInstructionsMarkdown] =
        useState<string>("");
    const [validity, setValidity] = useState<string>("");
    const [isInvalid, setIsInvalid] = useState<boolean>(true);
    useEffect(() => {
        const textFile = require("./instructions.md");
        setInstructionsMarkdown(textFile);
    }, []);
    return (
        <>
            <Sheet>
                <Navbar />
                <SheetTrigger className="flex flex-row group gap-2 justify-center items-center">
                    <span className="text-lg">Chapters</span>
                    <TiArrowSortedDown className="-rotate-90 text-lg group-hover:translate-x-2 group-hover:duration-150" />
                </SheetTrigger>
                <CodeLayout
                    InstructionsMarkdown={InstructionsMarkdown}
                    code={code}
                    setCode={setCode}
                    output={{
                        isInvalid,
                        message: validity,
                    }}
                    buttons={
                        <>
                            <Button
                                variant={"primary"}
                                onClick={() =>
                                    handleValidation(
                                        setValidity,
                                        setIsInvalid,
                                        code
                                    )
                                }
                            >
                                Validate
                            </Button>
                            <Link href={"/finish"}>
                                <Button
                                    variant={"primary"}
                                    className="gap-3 group "
                                >
                                    <span>Finish</span>
                                    <TiArrowSortedDown className="-rotate-90 text-lg group-hover:translate-x-1 group-hover:duration-150" />
                                </Button>
                            </Link>
                        </>
                    }
                />

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-2xl">
                            Chapter Roadmap
                        </SheetTitle>
                        <SheetDescription>
                            <ul className="ml-2 text-lg mt-5 flex flex-col gap-4 list-disc">
                                <li className="">
                                    Chapter 1: Introduction and Schema
                                    Definations
                                </li>
                                <Link href={"/tutorial2"}>
                                    <li className="text-blue-900 font-semibold ">
                                        Chapter 2: Arrays and type keyword
                                    </li>
                                </Link>
                                <Link href={"/finish"}>
                                    <li className="">
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

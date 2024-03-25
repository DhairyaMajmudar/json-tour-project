"use client";
import { useEffect, useState } from "react";
import CodeLayout from "../../components/CodeLayout";
import { ajv, hyperjumpValidate } from "@/lib/validators";
import Link from "next/link";
import Navbar from "../../components/Navbar";

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
            setValidity("Bingo! Your JSON schema is valid.");

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
            <Navbar />
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
                        <button
                            className=" group flex flex-row justify-center gap-2 items-center w-[100px] hover:bg-blue-800 bg-blue-900 text-white px-1 text-sm font-semibold rounded-lg py-2"
                            onClick={() =>
                                handleValidation(
                                    setValidity,
                                    setIsInvalid,
                                    code
                                )
                            }
                        >
                            Validate
                        </button>
                        <Link href={"/"}>
                            <button className="group flex flex-row justify-center gap-2 items-center w-[100px] hover:bg-blue-800 bg-blue-900 text-white px-1 text-sm font-semibold rounded-lg py-2">
                                Finish
                            </button>
                        </Link>
                    </>
                }
            />
        </>
    );
}

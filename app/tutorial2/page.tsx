"use client";
import { useEffect, useState } from "react";
import CodeLayout from "../../components/CodeLayout";
import { ajv, hyperjumpValidate } from "@/lib/validators";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

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
                                Finish
                                <span className="group-hover:translate-x-2 group-hover:duration-150">
                                    <FaArrowRight />
                                </span>
                            </Button>
                        </Link>
                    </>
                }
            />
        </>
    );
}

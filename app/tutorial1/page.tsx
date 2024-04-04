"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import CodeLayout from "../../components/CodeLayout";
import { ajv, hyperjumpValidate } from "@/lib/validators";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "../../components/Navbar";
import { Button } from "@/components/ui/button";

async function handleValidation(
    setValidity: any,
    setIsInvalid: any,
    code: string | undefined
) {
    try {
        const schema = JSON.parse(code!);
        const data1 = {};
        const data2: any[] = [];
        const output1 = await hyperjumpValidate(data1, schema);
        const output2 = await hyperjumpValidate(data2, schema);

        const avjErrors = ajv(data1, schema).errors;
        if (output1?.valid || output2?.valid) {
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
                        <Link href={"/tutorial2"}>
                            <Button
                                variant={"primary"}
                                className="gap-3 group "
                            >
                                Step 2
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

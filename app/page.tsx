"use client";

import Link from "next/link";
import JsonIcon from "@/public/logo.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <main className="flex flex-row ">
                <section className="w-1/2 flex justify-center items-center">
                    <img
                        src={JsonIcon.src}
                        alt="logo"
                        className="w-[30%] h-[35%]"
                    />
                </section>
                <section className="w-1/2  flex flex-col justify-center gap-[5rem] items-center">
                    <div className="flex flex-col gap-5">
                        <div className="font-bold text-3xl text-center text-blue-900">
                            Welcome to Tour of JSON Schema 🚀
                        </div>
                        <div className="font-semibold text-xl text-center text-blue-900">
                            Learn , Collabrate, Develop 💪🏻
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/tutorial1">
                            <Button variant={"primary"} className="gap-3 group">
                                Start The Tour
                                <span className="group-hover:translate-x-2 group-hover:duration-150">
                                    <FaArrowRight />
                                </span>
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

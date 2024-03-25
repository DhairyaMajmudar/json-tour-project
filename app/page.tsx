"use client";

import Link from "next/link";
import JsonIcon from "@/public/logo.svg";
import { FaArrowRight } from "react-icons/fa6";

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
                            <button className=" group flex flex-row justify-center gap-2 items-center w-[150px]  bg-blue-900 text-white px-1 text-sm font-semibold rounded-lg py-3 ">
                                Start The Tour
                                <span className="group-hover:translate-x-2 group-hover:duration-150">
                                    <FaArrowRight />
                                </span>
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

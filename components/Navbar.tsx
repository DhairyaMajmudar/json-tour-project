"use client";

import jsonIcon from "@/public/logo.svg";

const Navbar = () => {
    return (
        <>
            <div className="">
                <div className="flex justify-center  gap-6 items-center ">
                    <img
                        alt="logo"
                        src={jsonIcon.src}
                        className="w-[45px] h-[45px]"
                    />
                    <span className="text-xl text-blue-900 font-bold">
                        Tour of JSON Schema
                    </span>
                </div>
            </div>
        </>
    );
};

export default Navbar;

"use client";

import jsonIcon from "@/public/logo.svg";

const Navbar = () => {
    return (
        <>
            <div className="pb-3">
                <div className="flex justify-center  gap-8 items-center ">
                    <img
                        alt="logo"
                        src={jsonIcon.src}
                        className="w-[54px] h-[54px]"
                    />
                    <span className="text-2xl text-blue-900 font-bold">
                        Tour of JSON Schema
                    </span>
                </div>
            </div>
        </>
    );
};

export default Navbar;

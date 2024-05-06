'use client'
import Image from "next/image"
import { IoSunnyOutline } from "react-icons/io5";
import { RiMoonClearLine } from "react-icons/ri";
import clsx from "clsx";
import { MdKeyboardArrowDown } from "react-icons/md";
import React, { useState } from 'react';

export default function Header() {
    const [language, change] = useState(false);
    const changeclick = () => {
        change(!language)
    }
    
    return (
        <main className={clsx("border fixed left-0 w-full h-[80px] z-10 bg-white")}>
            <div className="flex items-center mx-7 my-3">
                <Image width={66} height={36} src="/logo.png" alt=""></Image>
                <p className="text-[24px] pl-4">Medlodisco</p>
                <span className="absolute right-6 flex items-center">
                    <button>
                        <RiMoonClearLine className="w-[20px] h-[20px] mr-4" />
                        {
                            // mode ? <RiMoonClearLine className="w-[20px] h-[20px] mr-4" /> : <IoSunnyOutline className="w-[24px] h-[24px] mr-4" />
                        }
                    </button>
                    <button onClick={() => { changeclick() }} className="border w-[86px] h-[40px] rounded-md flex justify-center items-center">
                        English
                        <MdKeyboardArrowDown />
                    </button>
                    <button className="border w-[86px] h-[40px] text-black text-center rounded-md mx-6 bg-[rgb(250,208,44)]">Sign in</button>
                </span>
            </div>
            {
                language && <div className="flex flex-col absolute top-[69px] right-[142px] z-1 border py-2 rounded-lg bg-white w-[96px]">
                    <span className="hover:bg-[rgb(245,245,244)] w-full pt-2"><input type="radio" name="choice" className="ml-3 mr-1" checked />English</span>
                    <span className="hover:bg-[rgb(245,245,244)] w-full pt-2"><input type="radio" name="choice" className="ml-3 mr-1" />中文</span>
                    <span className="hover:bg-[rgb(245,245,244)] w-full pt-2"><input type="radio" name="choice" className="ml-3 mr-1" />日本语</span>
                    <span className="hover:bg-[rgb(245,245,244)] w-full pt-2"><input type="radio" name="choice" className="ml-3 mr-1" />英语</span>
                    <span className="hover:bg-[rgb(245,245,244)] w-full pt-2"><input type="radio" name="choice" className="ml-3 mr-1" />英语</span>
                </div>
            }
        </main>
    )
}
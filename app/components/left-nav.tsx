'use client'
import Link from "next/link"
import { MdMusicNote } from "react-icons/md";
import { BsMusicNoteList } from "react-icons/bs";
import { FaFire } from "react-icons/fa6";
import { MdOutlineRadio, MdOutlineLibraryMusic } from "react-icons/md";
import { LuHeartPulse } from "react-icons/lu";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoLogoRss } from "react-icons/io";
import React from 'react';
import { usePathname } from "next/navigation";
import clsx from 'clsx'
import { create } from 'zustand'


type Store = {
    count: string
    setValue: (newValue: string) => void;
}

const useStore = create<Store>()((set) => ({
    count: "",
    setValue: (newValue) => set({ count: newValue }),
}))


export default function LeftNav() {
    // const { mode } = modestore();
    const pathname = usePathname();
    const { count, setValue } = useStore()
    const handleClick = (newValue: string) => {
        setValue(newValue);
    };
    const music = [
        { title: "Dicover", her: "/", icon: MdMusicNote },
        { title: "Trending", her: "/trending", icon: FaFire },
        { title: "Newest", her: "/newest", icon: IoLogoRss },
        { title: "Roaming", her: "/roaming", icon: MdOutlineRadio },
        { title: "Playlists", her: "/playlists", icon: BsMusicNoteList },
    ]
    return (
        <section className={clsx("w-[18%] inline-block h-[100vh] bg-white border fixed")}>
            <main className="h-[60%] w-[220px] mt-[120px]">
                <div className="my-7">
                    <span className="ml-10 font-bold">Music</span>
                    {music.map((item) => {
                        const Linkicon = item.icon;
                        return <Link onClick={() => handleClick(item.title)} key={item.title} href={item.her} className={clsx(
                            'flex items-center ml-9 mt-4 ',
                            {
                                // 'text-yellow-400': count === item.title || pathname === item.her ,
                                'text-yellow-400': pathname === item.her || pathname === item.her + "/suno" || pathname === item.her + "/udio",
                            },
                        )}>
                            <Linkicon className="w-5" />
                            <p className="ml-2">{item.title}</p>
                        </Link>
                    })}
                </div>
                <div>
                    <span className="ml-9 font-bold">Library</span>
                    <Link href="/favorite" className={clsx(
                        'flex items-center ml-9 mt-4 ',
                        {
                            'text-yellow-400': pathname === '/favorite',
                        },
                    )}>
                        <LuHeartPulse />
                        <p className="ml-3">Favorite</p>
                    </Link>
                    <Link href="/recently" className={clsx(
                        'flex items-center ml-9 mt-4 ',
                        {
                            'text-yellow-400': pathname === '/recently',
                        },
                    )}>
                        <FaRegPlayCircle />
                        <p className="ml-3">Recently</p>
                    </Link>
                </div>
                <div className="my-8 mb-20">
                    <span className="ml-9 font-bold">Tools</span>
                    <Link href="/create" className={clsx(
                        'flex items-center ml-9 mt-4 ',
                        {
                            'text-yellow-400': pathname === '/create',
                        },
                    )}>
                        <MdOutlineLibraryMusic />
                        <p className="ml-3">Create Music</p>
                    </Link>
                </div>
            </main>
        </section>
    )
}
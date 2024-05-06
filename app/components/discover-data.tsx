'use client'
import { FaFire } from "react-icons/fa6";
import Image from "next/image";
import { playstore, Isplaystore, MusicIdstore, currentPlayStore, musicList } from "../data";
import React from "react";
import { IoLogoRss } from "react-icons/io";
import { MdOutlineRadio } from "react-icons/md";

interface DiscoverProps {
    data1: musicList[];
    data2: musicList[];
    data3: musicList[];
}

const DiscoverData: React.FC<DiscoverProps> = ({ data1, data2, data3 }) => {
    const { play, setplay } = playstore();
    const { isPlaying, setIsPlaying } = Isplaystore();
    const { musicId, setMusicId } = MusicIdstore();
    const handleplay = (item: number) => {
        setplay(true);
        if (musicId === item) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true)
        }
        setMusicId(item);
    }
    const { currentPlayList,setCurrentPlay } = currentPlayStore()

    return (
        <div className="h-[100vh] pt-[122px] ml-[300px] pl-[22px]">
            <h1 className="font-bold text-2xl ml-3">Discover</h1>
            <div>
                <span className="flex items-center mt-6 ml-3">
                    <FaFire className="" />
                    <p className="font-bold text-xl ml-2">Trending</p>
                </span>
                <div className="pt-8 w-[90%] h-[180px] flex flex-nowrap overflow-hidden hover:overflow-x-auto" onClick={()=>{setCurrentPlay(data1)}}>
                    {data1.map((item: any,index) => (
                        <div className="ml-3" key={item.id} onClick={() => handleplay(index)}>
                            <Image width={110} height={110} alt="" src={item.imgUrl} className="rounded-lg" />
                            <span className="inline-block w-[112px] h-6 overflow-hidden truncate text-[14px] p-1">{item.title}</span>
                        </div>
                    ))}

                </div>
            </div>
            <div>
                <span className="flex items-center mt-6 ml-3">
                    <IoLogoRss className="" />
                    <p className="font-bold text-xl ml-2">Newest</p>
                </span>
                <div className="pt-8 w-[90%] h-[180px] flex flex-nowrap hover:overflow-x-auto overflow-hidden" onClick={()=>{setCurrentPlay(data2)}}>
                    {data2.map((item: any,index) => (
                        <div className="ml-3" key={item.id} onClick={() => handleplay(index)}>
                            <Image width={110} height={110} alt="" src={item.imgUrl} className="rounded-lg" />
                            <span className="inline-block w-[112px] h-6 overflow-hidden truncate text-[14px] p-1">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pb-[120px]">
                <span className="flex items-center mt-6 ml-3">
                    <MdOutlineRadio className="" />
                    <p className="font-bold text-xl ml-2">Roaming</p>
                </span>
                <div className="pt-8 w-[90%] h-[180px] flex flex-nowrap hover:overflow-x-auto overflow-hidden" onClick={()=>{setCurrentPlay(data3)}}>
                    {data3.map((item: any,index) => (
                        <div className="ml-3" key={item.id} onClick={() => handleplay(index)}>
                            <Image width={110} height={110} alt="" src={item.imgUrl} className="rounded-lg" />
                            <span className="inline-block w-[112px] h-6 overflow-hidden truncate text-[14px] p-1">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiscoverData;

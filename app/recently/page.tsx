'use client'
import Common from "../components/common"
import { loginstore } from "../data"
import clsx from "clsx"

export default function Recently() {
    const { login, setValue } = loginstore();
    const loginclick = () => {
        setValue(true)
    }
    const title = "Newest";
    const data2 = [
        { id: 1, title: "Guys what is wrong", listen: 92000, love: 45660, imageUrl: "/music-img.png" },
        { id: 2, title: "马克思主义基本原理", listen: 48659, love: 3156, imageUrl: "/music-img.png" },
        { id: 3, title: "习近平新时代中国特色社会主义思想概论", listen: 39856, love: 2316, imageUrl: "/music-img.png" },
        { id: 4, title: "毛泽东思想和中国特色社会主义理论体系概论", listen: 48659, love: 1623, imageUrl: "/music-img.png" },
        { id: 5, title: "思想道德与法治", listen: 48659, love: 100, imageUrl: "/music-img.png" },
        // More data...
    ];

    return (
        <div className={clsx('w-100%')}>
            <div className="h-[100vh] w-[80%] pt-[122px] ml-[320px]">
                <h1 className="font-bold text-2xl">Recently</h1>
                {
                    login ? <>
                        {/* <Common title={title} data2={data2} /> */}
                    </> : <div className="">
                        <div className="flex flex-col justify-center items-center mt-[200px] pr-14">
                            <p className="mb-8">You are not authorized,please sign in.</p>
                            <button className="w-28 h-10 rounded-lg bg-yellow-400 mb-60" onClick={() => loginclick()}>Sign in</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
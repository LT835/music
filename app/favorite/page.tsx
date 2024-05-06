'use client'
import Play from "../components/play"
import Secondcommon from "../components/second-common"
import Common from "../components/common"
import { loginstore } from "../data"
import clsx from "clsx"
import { LoveMusicstore } from "../data"

export default function Favorite() {
    const { login, setValue } = loginstore();
    const loginclick = () => {
        setValue(true)
    }
    const title = "Newest";
    const { loveMuisc, setLoveMusic} = LoveMusicstore();
    

    return (
        <div className={clsx('w-100%')}>
            <div className="h-[100vh] w-[80%] pt-[122px] ml-[320px]">
            <h1 className="font-bold text-2xl">Favorite</h1>
                {
                    login ? <>
                        {/* <Common title={title} data2={loveMuisc} /> */}
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
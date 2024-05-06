'use client'
import Secondcommon from "../components/second-common"
import clsx from "clsx"
export default function Playlists() {
    let login = true;
    return (
        <div className={clsx('w-100%')}>
            <div className="h-[100vh] w-[80%] pt-[122px] ml-[320px]">
                <Secondcommon title="Playlists" />
                <div>coming soon...</div>
            </div>
        </div>
    )
}
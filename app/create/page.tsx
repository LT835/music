'use client'
import Common from "../components/common"
import Secondcommon from "../components/second-common"
import clsx from "clsx"
export default function Create() {
    return (
        <div className={clsx('w-100%')}>
            <div className="h-[100vh] w-[80%] pt-[122px] ml-[320px]">
                <Secondcommon title="Create Music" />
                <div>coming soon...</div>
            </div>
        </div>
    )
}
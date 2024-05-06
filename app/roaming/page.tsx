import Common from "@/app/components/common";
import YellowNav from "@/app/components/yellow-nav";
import Secondcommon from "../components/second-common";
import clsx from "clsx";

async function fetchData() {
    const roamingList = await fetch('http://localhost:3000/api/roaming');
    const data = await roamingList.json();
    return data.message;
}
export default async function RoamingUdio() {
    const roamingList = await fetchData();

    return (
        <>
        <div className={clsx('w-[100%] pt-[122px] ml-[300px] pl-[22px]')}>
            <div className='h-[100vh] w-[80%]'>
                <Secondcommon title="Roaming" />
                <YellowNav firstpath="/roaming" secondpath="/roaming/suno" thirdpath="/roaming/udio" />
                <Common data={roamingList} />
            </div>
        </div> 
        </>    
    )
}
import Common from "@/app/components/common";
import ThirdNav from "@/app/components/third-nav";
import YellowNav from "@/app/components/yellow-nav";
import clsx from "clsx";

async function fetchData() {
    const roamingList = await fetch('http://localhost:3000/api/roaming/udio');
    const data = await roamingList.json();
    return data.message;
}
export default async function Roamingudio() {
    const title = "Roaming";
    const roamingUdioList = await fetchData();
    return (
        <>
            <div className={clsx('w-[100%] h-[100vh] pt-[122px] pl-[320px]')}>
                <ThirdNav title="Roaming" first="/roaming" second="/roaming/udio" subtitle="Udio AI Songs" />
                <YellowNav firstpath="/roaming" secondpath="/roaming/suno" thirdpath="/roaming/udio" />
                <Common title={title} data={roamingUdioList} />
            </div>
        </>
    )
}
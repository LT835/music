import Common from "@/app/components/common";
import ThirdNav from "@/app/components/third-nav";
import YellowNav from "@/app/components/yellow-nav";
import clsx from "clsx";

async function fetchData() {
    const newestUdio = await fetch('http://localhost:3000/api/newest/udio');
    const data = await newestUdio.json();
    return data.message
}

export default async function NewestUdio() {
    const title = "Newest";
    const newestUdioList = await fetchData();
    return (
        <>
            <div className={clsx('w-[100%] h-[100vh] pt-[122px] ml-[320px]')}>
                <ThirdNav title="Newest" first="/newest" second="/newset/udio" subtitle="Udio AI Songs" />
                <YellowNav firstpath="/newest" secondpath="/newest/suno" thirdpath="/newest/udio" />
                <Common title={title} data={newestUdioList} />
            </div>
        </>
    )
}


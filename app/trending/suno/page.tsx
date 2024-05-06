import Common from "@/app/components/common";
import ThirdNav from "@/app/components/third-nav";
import YellowNav from "@/app/components/yellow-nav";
import clsx from "clsx";

async function fetchData() {
    const response = await fetch('http://localhost:3000/api/trending/suno');
    const data = await response.json();
    return data.message;
}

export default async function TrendingSuno() {
    const title = "Trending";
    const trendingList = await fetchData();
    return (
        <div className={clsx('w-[100%] h-[100vh] pt-[122px] pl-[320px]',
        )}>
            <ThirdNav title="Trending" first="/trending" second="/trending/suno" subtitle="Suno AI Songs" />
            <YellowNav firstpath="/trending" secondpath="/trending/suno" thirdpath="/trending/udio" />
            <Common title={title} data={trendingList} />
        </div>
    )
}


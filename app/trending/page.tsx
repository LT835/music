import Common from "../components/common"
import Secondcommon from "../components/second-common";
import YellowNav from "../components/yellow-nav";
import clsx from "clsx"

async function fetchData() {
    const response = await fetch('http://localhost:3000/api/trending');
    const data = await response.json();
    return data.message;
  }
export default async function Trending() {
    const title = "Trending";
    const trendingList = await fetchData();
    return (
        <>
            <div className={clsx('w-[100%] h-[100vh] pt-[122px] ml-[300px] pl-[22px]')}>
                <Secondcommon title={title} />
                <YellowNav firstpath="/trending" secondpath="/trending/suno" thirdpath="/trending/udio" />
                <Common data={trendingList} />
            </div>
        </>
    )
}
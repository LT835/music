import Common from "../components/common"
import Secondcommon from "../components/second-common";
import YellowNav from "../components/yellow-nav";
import clsx from "clsx";

async function fetchData() {
    const response = await fetch('http://localhost:3000/api/newest');
    const data = await response.json();
    console.log(data);
    return data.message;
}

export default async function Newest() {
    const newestList = await fetchData();
    return (
        <>
            <div className={clsx('w-[100%] h-[100vh] pt-[122px] pl-[320px]',
            )}>
                <div className=''>
                    <Secondcommon title="Newest" />
                    <YellowNav firstpath="/newest" secondpath="/newest/suno" thirdpath="/newest/udio" />
                    <Common data={newestList} />
                </div>
            </div>
        </>
    )
}
'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";
interface Navtitle {
    firstpath: string,
    secondpath: string,
    thirdpath: string
}

const YellowNav: React.FC<Navtitle> = ({ firstpath, secondpath, thirdpath }) => {
    const pathname = usePathname();
    return (
        <>
            <div className="bg-[rgb(229,230,230)] w-[327px] h-11 rounded-md flex items-center mb-6">
                <Link href={firstpath} className={clsx(
                    'py-1 px-3 ml-1 rounded-md',
                    {
                        'bg-yellow-400': pathname === firstpath
                    }
                )}>
                    All
                </Link>
                <Link href={secondpath} className={clsx(
                    'py-1 px-3 ml-1 rounded-md',
                    {
                        'bg-yellow-400': pathname === secondpath
                    }
                )}>
                    Suno AI Songs
                </Link>
                <Link href={thirdpath} className={clsx(
                    'py-1 px-3 ml-1 rounded-md',
                    {
                        'bg-yellow-400': pathname === thirdpath
                    }
                )}>
                    Udio AI Songs
                </Link>
            </div>
        </>
    )
}
export default YellowNav
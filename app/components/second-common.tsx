import Link from "next/link"

interface DiscoverProps {
    title: string
}

const Secondcommon:React.FC<DiscoverProps> = ({title}) => {
    return(
        <div className="">
            <div className="flex">
                <Link href="/">
                    Home
                </Link>
                <div className="px-4">{">"}</div>
                <div className="text-[rgb(250,204,21)]">{title}</div>
            </div>
            <div className="font-bold text-2xl my-6">{title}</div>
        </div>
    ) 
}
export default Secondcommon;
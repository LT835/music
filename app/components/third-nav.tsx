import Link from "next/link"
interface third {
    title:string,
    subtitle:string,
    first:string,
    second:string
}
const ThirdNav : React.FC<third> = ({title,subtitle,first,second}) => {
    return (
        <div className="">
            <div className="flex">
                <Link href="/">
                    Home
                </Link>
                <div className="px-4">{">"}</div>
                <Link href={first}>
                    <div className="hover:text-[rgb(250,204,21)]">{title}</div>
                </Link>
                <div className="px-4">{">"}</div>
                <Link href={second}>
                    <div className="text-[rgb(250,204,21)]">{subtitle}</div>
                </Link>
            </div>
            <div className="font-bold text-2xl my-6">{title}</div>
        </div>
    )
}
export default ThirdNav;
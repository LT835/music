// "use client"
import Discover from "../app/discover/page"
import clsx from "clsx";
// import modestore from "./data"

 
export default async function Page() {
  // const { mode } = modestore();
  return (
    <div className={clsx('w-[100%] h-[100vh]')}>
      <Discover />
    </div>
  )
}

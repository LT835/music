'use client'
import { playstore } from "../data"
import Play from "./play"

export default function Player() {
    const { play,setplay } = playstore()
    return <>
        {
            play ? <Play /> : <></>
        }
    </>
}
import { useState } from "react";
import { Inter } from "next/font/google";
import { setHttpClientAndAgentOptions } from "next/dist/server/config";

const inter = Inter({ subsets: ['latin'] })

export default function Shop({ setClickFactor, setCps }: { setClickFactor: Function, setCps: Function }) {
    const [pointers, setPointers] = useState(0);
    const [mouseBooster, setMouseBoosters] = useState(0);
    const [grandmas, setGrandmas] = useState(0);
    const resetFactors = () => {
        setClickFactor(mouseBooster + 1);
        setCps(pointers * 0.1 + grandmas * 10);
    }
    return (
        <div className="w-96 bg-gray-700 h-screen absolute left-[calc(100%-24rem)] top-0 flex flex-col">
            <div className="w-96 bg-gray-400 h-24 flex flex-row justify-evenly items-center" onClick={() => {setPointers(pointers+1); resetFactors()}}>
                <span className={inter.className + " text-black font-bold text-lg"}>Pointer</span>
                <span className={inter.className + " text-green-700 font-bold text-xl"}>${pointers * 5 * pointers + 10}</span>
                <span className={inter.className + " text-black font-bold text-lg"}>{pointers}</span>
            </div>
        </div>
    )
}
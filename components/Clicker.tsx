import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function Clicker({ clicker, cats }: { clicker: Function, cats: number }) {
    return (
        <div className='w-96 h-screen bg-blue-700 flex items-center justify-center flex-col'>
            <span className={inter.className + " text-white font-bold text-2xl"}>Cats: {cats.toFixed(0)}</span>
            <Image src={'/cat.webp'} alt="cat" width={200} height={200} onClick={() => clicker()}/>
        </div>
    )
}
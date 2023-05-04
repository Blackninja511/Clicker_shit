import Clicker from "@/components/Clicker";
import Shop from "@/components/Shop";
import Head from "next/head";
import { useEffect, useState } from "react";

export default  function Home() {
    const [cats, setCats] = useState(0);
    const [clickFactor, setClickFactor] = useState(1);
    const [cps, setCps] = useState(0);
    const click = () => {
        setCats(cats * clickFactor);
    }
    let init = false;
    useEffect(() => {
        console.log("init!")
        if(init) return;
        console.log("first!")
        setInterval(() => {
            console.log("interval!")
            console.log(getCps());
            setCats(cats + getCps());
        }, 1000);
        init = true;
    }, [])

    const getCps = () => cps;

    return (
        <>
            <Head>
                <title>Bea</title>
            </Head>
            <div>
                <Clicker clicker={click} cats={cats}/>
                <Shop setClickFactor={setClickFactor} setCps={setCps} />
            </div>
        </>
    )
}
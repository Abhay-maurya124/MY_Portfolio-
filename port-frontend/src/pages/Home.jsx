import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
const Home = () => {
    //     useGSAP(()=>{
    //     gsap.to("#box",
    //         { rotation: "760", duration: 10 }
    //     )
    // })

    const [toggle, settoggle] = useState(true)
    return (
        <div className='  h-screen bg-black text-white'>
            {toggle ?
                <div className='w-[500px] h-[500px] flex justify-center items-center rounded-[50%] bg-amber-400'>
                    Navigate

                </div> :
                <div className='w-[500px] h-[500px] flex justify-center items-center rounded-[50%] bg-amber-400' >
                    Home
                    projects
                    Socials
                    Contact
                </div>
            }
            <button onClick={() => settoggle(!toggle)}>click</button>
        </div>
    )
}

export default Home
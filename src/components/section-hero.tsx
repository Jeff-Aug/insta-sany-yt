'use client'
import { GridContainer } from "./grid";

import IconFile from '/public/icon-file.svg';
import IconHand from '/public/icon-hand.svg';
import IconHand02 from '/public/icon-hand-02.svg';
import IconMockup from '/public/mockup.svg';
import { gsap } from 'gsap';

import Image from 'next/image';

import { useEffect, useRef } from "react";


export function SectionHero() {

    const textHeroRef = useRef(null);
    const mockupLeftRef = useRef(null);
    const mockupRigthRef = useRef(null);

    useEffect(() => {
        const textHero = textHeroRef.current;
        const mLeft = mockupLeftRef.current;
        const mRigth = mockupRigthRef.current;
        gsap.fromTo(textHero, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });

        gsap.fromTo(mLeft, { rotate: 0 }, { rotate: 11, y: 0, duration: 1, delay: 1 });
        gsap.fromTo(mRigth, { rotate: 0}, { rotate: -13, y: 0, duration: 1, delay: 1 });
    }, []);
return (
    <section className="w-full h-sectoin-hero bg-green-primary border-t bg-hero bg-no-repeat bg-top border-t-green-border pt-16 overflow-hidden " >
        <GridContainer className="flex flex-col items-center" >
            <div className=" w-full max-w-text-hero text-center opacity-0" ref={textHeroRef} >
                <h3 className="text-xl font-medium text-green-actived mb-4" >Novo curso focado em instagram</h3>
                <h1 className=" text-white text-7xl/normal font-semibold mb-2 " >Destrave as suas habilidades</h1>
                <div className=" flex items-center justify-center gap-10 " >
                    <button className=" flex items-center gap-2 " >
                        <Image src={IconFile} alt="icon file" />
                        <span>Assinar lista de espera</span>
                    </button>
                    <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold" > Começar agora </button>
                </div>
            </div>
            <div className="relative w-full max-w-area-icons h-28 mt-4" >
                <Image src={IconHand} className="absolute left-0 bottom-0" alt="icon hand" />
                <Image src={IconHand02} className="absolute right-0 top-0" alt="icon hand02" />
            </div>
            <div className="-bottom-44 w-full max-x-area-mockup flex justify-evenly" >
                <Image src={IconMockup} className="relative top-[1.1rem] left-[3.3rem] " ref={mockupRigthRef} alt="Mockup" />
                <Image src={IconMockup} className="relative  top-[1.1rem] rigth-[3.3rem] " ref={mockupLeftRef} alt="Mockup" />
            </div>
        </GridContainer>
    </section>
)
}
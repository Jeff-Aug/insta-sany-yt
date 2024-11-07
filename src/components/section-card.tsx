'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

import Mockup from "/public/mockup-main.png";
import Card01 from "/public/image-01.png";
import Card02 from "/public/image-02.png";
import Card03 from "/public/image-03.png";
import Card04 from "/public/image-04.png";
import Card05 from "/public/image-05.png";
import Card06 from "/public/image-06.png";

gsap.registerPlugin(ScrollTrigger);

export function SectionCards() {
    const mockupRef = useRef(null);
    const titleRef = useRef(null);
    const sectionRef = useRef(null);

    const card01Ref = useRef(null);
    const card02Ref = useRef(null);
    const card03Ref = useRef(null);
    const card04Ref = useRef(null);
    const card05Ref = useRef(null);
    const card06Ref = useRef(null);

    function animateCards(images: null[], position: number) {
        gsap.fromTo(images, { opacity: 0, x: position }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.3, scrollTrigger: { trigger: sectionRef.current, start: "center center" } });
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mockupPhone = mockupRef.current;
            const title = titleRef.current;

            gsap.fromTo(mockupPhone, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1, delay: 1, ease: "power5.out" });
            gsap.fromTo(title, { opacity: 0, y: 105 }, { opacity: 1, y: 0, scrollTrigger: { trigger: sectionRef.current, start: "65% center" } });

            const leftImages = [card01Ref.current, card02Ref.current, card03Ref.current];
            const rightImages = [card04Ref.current, card05Ref.current, card06Ref.current];

            animateCards(leftImages, 50);
            animateCards(rightImages, -50);
        }
    }, []);

    return (
        <section className="w-full" ref={sectionRef}>
            <Image src={Mockup} alt="mockup main" className="sticky top-56 z-10 mx-auto -mt-[30rem] opacity-0 mb-16" ref={mockupRef} />
            <h2 className="sticky text-center text-7xl font-semibold text-black mb-56 opacity-0" ref={titleRef}>
                Faça
                <span className="text-green-title-card"> você </span>
                mesmo de casa
            </h2>
            <div className="relative flex justify-center w-[80rem] h-[32rem] p-2 mx-auto">
                <Image src={Card01} alt="imagem 1" ref={card01Ref} className="opacity-0 absolute top-22 left-44" />
                <Image src={Card02} alt="imagem 2" ref={card02Ref} className="opacity-0 absolute left-0 bottom-32" />
                <Image src={Card03} alt="imagem 3" ref={card03Ref} className="opacity-0 absolute bottom-0 left-80" />
                <Image src={Card04} alt="imagem 4" ref={card04Ref} className="opacity-0 absolute top-0 right-32" />
                <Image src={Card05} alt="imagem 5" ref={card05Ref} className="opacity-0 absolute right-0 bottom-28" />
                <Image src={Card06} alt="imagem 6" ref={card06Ref} className="opacity-0 absolute bottom-0 right-80" />
            </div>
        </section>
    );
}
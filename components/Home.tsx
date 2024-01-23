'use client'
import { CgTag } from "react-icons/cg";
import LinkCard from "./link-card";
import Link from "next/link";
import { useEffect } from "react";

function addHoverAnimation(element: HTMLElement) {
  element.addEventListener('mouseover', () => {
    element.style.transform = 'rotate(180deg) scale(1.2)';
    
  });

  element.addEventListener('mouseout', () => {
    element.style.transform = 'rotate(0deg)';
    setTimeout(() => {
      element.style.transform = 'rotate(-35deg)';
    }, 50);
    setTimeout(() => {
      element.style.transform = 'rotate(35deg)';
    }, 100);
    setTimeout(() => {
      element.style.transform = 'rotate(-15deg)';
    }, 150);
    setTimeout(() => {
      element.style.transform = 'rotate(15deg)';
    }, 200);
    setTimeout(() => {
      element.style.transform = 'rotate(-5deg)';
    }, 250);
    setTimeout(() => {
      element.style.transform = 'rotate(5deg)';
    }, 300);
    setTimeout(() => {
      element.style.transform = 'rotate(0deg)';
    }, 350);
  });
}

const Home = () => {
    useEffect(() => {
      const memoji = document.getElementById('memoji') as HTMLElement;
      if (memoji) {
        addHoverAnimation(memoji);
      }
    }, []);
  
  return (
    <>
      <div className="flex flex-wrap max-w-[850px] w-full justify-evenly items-center gap-3 z-10 mb-10">
        <div>
          <div className="flex w-[350px] items-center justify-start">
            <div className="p-2 text-4xl font-bold text-teal-600">Zach</div>
            <div className="text-4xl font-bold">Wong</div>
          </div>
          <div className="text-4xl w-[350px] px-2 font-thin">
            full stack developer
          </div>
          <div className="flex w-[350px] justify-end items-center px-2 gap-1">
            I like to <span className="text-teal-600 ">build</span> cool stuff
          </div>
        </div>
        <img
          src="../memoji.png"
          className="w-[150px] transition-transform duration-100 ease-in-out transition-margin-left 
          "
          id="memoji"
        />
      </div>
      <div className="z-10">
        <span className="text-base">Currently: DIMS @</span>
        <Link href="https://www.bestbuy.ca/en-ca" target="_blank">
          <LinkCard
            icon={<CgTag className="rotate-180" />}
            title="BestBuy"
            bg="bg-yellow-300"
            color="text-black"
          ></LinkCard>
        </Link>
      </div>
    </>
  );
};

export default Home;

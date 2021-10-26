/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from "next/image";
import { Button } from "src/component/Button";

export const Achivment = () => {
  return (
    <section>
      <div className=" grid grid-rows-2 py-[5em] px-[100px] min-h-screen bg-[#FAFBFD]">
        <div className="flex relative justify-center">
          <div className="flex absolute top-1/2 left-1/2 z-40 justify-evenly w-[654px] h-[117px] font-bold bg-white rounded-2xl shadow-md transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col justify-center items-center h-full">
              <span className="text-[#EC5863] text-4xl tracking-[0.2em] leading-[43px]">2m</span>
              <p className="text-[12px] tracking-[0.45em] leading-[13px] uppercase">Users</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <span className="text-[#EC5863] text-4xl tracking-[0.2em] leading-[43px]">78</span>
              <p className="text-[12px] tracking-[0.45em] leading-[13px] uppercase">Countries</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <span className="text-[#EC5863] text-4xl tracking-[0.2em] leading-[43px]">10.000+</span>
              <p className="text-[12px] tracking-[0.45em] leading-[13px] uppercase">Medical Experts</p>
            </div>
          </div>
          <Image width={760} height={200} src="/images/rectangle.svg" alt="" className="" />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex z-20 justify-start items-center py-12 w-full">
            <div>
              <h2 className="text-4xl sm:text-[44px] font-bold leading-[55px] text-black dark:text-white">
                <span className="">Talk to</span>
                <span className=" text-[#4285F4]"> experts.</span>
              </h2>
              <p className="mt-4 text-[16px] tracking-wider leading-[20px] text-gray-400">
                Book appointments or submit queries into thousands of <br />
                forums concerning health issues and prevention <br />
                against noval Corona Virus.
              </p>
              <div className="lg:flex-shrink-0 lg:mt-0">
                <div className="inline-flex mt-12 rounded-md shadow">
                  <Button label="Features" color="red" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <Image width={521} height={284} alt="" src="/images/illustration2.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

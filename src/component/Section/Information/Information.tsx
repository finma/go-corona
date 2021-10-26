/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from "next/image";
import Link from "next/link";

export const Information = () => {
  return (
    <section>
      <div className="grid grid-rows-3 py-[5em] px-[100px] min-h-screen bg-white">
        <div className="text-center">
          <h2 className="text-4xl sm:text-[44px] font-bold leading-[55px] text-black dark:text-white">
            <span className=" text-[#EC5863]">Healthcare</span>
            <span className=""> at your Fingertips.</span>
          </h2>
          <p className="mt-4 text-[16px] tracking-wider leading-[20px] text-gray-400">
            Bringing premium healthcare features to your fingertips. User friendly mobile <br />
            platform to bringhealthcare to your fingertips. Signup <br /> and be a part of the new culture.
          </p>
        </div>
        <div className="relative py-10 w-full">
          <div className="flex absolute z-10 justify-between w-full">
            <div className=" flex flex-col justify-center items-center space-y-10 w-[278px] h-[276px] bg-white rounded-lg shadow-lg">
              <Image width={66} height={72} src="/icons/icon1.svg" alt="icon" />
              <div className="flex flex-col space-y-1 text-center">
                <span className=" text-base font-bold">Symptom Checker</span>
                <p className="text-xs text-[#616161] font-normal">
                  Check if you are infected by <br /> COVID-19 with our Symptom Checker
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-10 w-[278px] h-[276px] bg-white rounded-lg shadow-lg">
              <Image width={66} height={72} src="/icons/icon2.svg" alt="icon" />
              <div className="flex flex-col space-y-1 text-center">
                <span className=" text-base font-bold">24x7 Medical support</span>
                <p className="text-xs text-[#616161] font-normal">
                  Consult with 10,000+ health <br /> workers about your concerns.
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-10 w-[278px] h-[276px] bg-white rounded-lg shadow-lg">
              <Image width={66} height={72} src="/icons/icon3.svg" alt="icon" />
              <div className="flex flex-col space-y-1 text-center">
                <span className=" text-base font-bold">Conditions</span>
                <p className="text-xs text-[#616161] font-normal">
                  Bringing premium healthcare <br /> features to your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className="absolute top-10 left-[230px]">
              <Image width={97} height={97} src="/images/rectangle1.svg" alt="" />
            </div>
            <div className="absolute top-0 left-[1100px]">
              <Image width={65} height={65} src="/images/rectangle2.svg" alt="" className="absolute top-0 left-0" />
            </div>
            <div className="absolute top-[300px] left-[56px]">
              <Image width={65} height={65} src="/images/rectangle3.svg" alt="" className="absolute top-0 left-0" />
            </div>
            <div className="absolute top-[200px] left-[750px]">
              <Image width={127} height={127} src="/images/rectangle4.svg" alt="" className="absolute top-0 left-0" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[10em] space-x-12 w-full">
          <Link href="/">
            <a>
              <Image width={160} height={55} src="/icons/app-store.png" alt="App Store" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image width={160} height={55} src="/icons/google-play.png" alt="Google Play" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

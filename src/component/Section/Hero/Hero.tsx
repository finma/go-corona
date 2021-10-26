import Image from "next/image";
import Link from "next/link";
import { Button } from "src/component/Button";

import { FluidLayout } from "../../../layout";

export const Hero = () => {
  return (
    <section>
      <div className="grid overflow-hidden relative grid-cols-2 py-[150px] px-[100px] mx-auto h-full bg-[#FAFBFD] dark:bg-gray-800">
        <div className="absolute right-0 z-0 w-[370px] h-full bg-[#EC5863] rounded-l-[30px]"></div>
        <div className="flex z-20 justify-start items-center py-12 w-full">
          <div>
            <h2 className="text-4xl sm:text-[44px] font-bold leading-[55px] text-black dark:text-white">
              <span className="">
                Take care of yours <br />
                family’s
              </span>
              <span className=" text-[#4285F4]"> health.</span>
            </h2>
            <p className="mt-4 text-[16px] tracking-wider leading-[20px] text-gray-400">
              All in one destination for COVID-19 health queries. <br />
              Consult 10,000+ health workers about your concerns.
            </p>
            <div className="lg:flex-shrink-0 lg:mt-0">
              <div className="inline-flex mt-12 rounded-md shadow">
                <Button label="Get Started" color="red" />
              </div>
            </div>
          </div>
        </div>

        <Image
          alt="illustration"
          width={547}
          height={366}
          src="/images/illustration.svg"
          className="hidden lg:block absolute top-0 right-0"
        />

        <div className="mt-20">
          <Link href="/">
            <a>
              <Image alt="Play Video" width={228} height={44} src="/images/playVideo.svg" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

Hero.getLayout = FluidLayout;

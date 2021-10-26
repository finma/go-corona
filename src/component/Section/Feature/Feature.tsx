import Image from "next/image";
import { Button } from "src/component/Button";

import { FluidLayout } from "../../../layout";

export const Feature = () => {
  return (
    <section id="feature">
      <div className="grid grid-cols-2 py-[5em] px-[100px] w-full min-h-screen bg-white">
        <div className="pl-6">
          <Image alt="Feature" width={350} height={560} src="/images/feature.png" />
        </div>
        <div className="flex z-20 justify-start items-center py-12 w-full">
          <div>
            <h2 className="text-4xl sm:text-[44px] font-bold leading-[55px] text-black dark:text-white">
              <span className="">
                Stay safe with <br />
                Go
              </span>
              <span className=" text-[#EC5863]">Corona.</span>
            </h2>
            <p className="mt-4 text-[16px] tracking-wider leading-[20px] text-gray-400">
              24x7 Support and user friendly mobile platform to bring <br />
              healthcare to your fingertips. Signup and be a part of <br />
              the new health culture.
            </p>
            <div className="lg:flex-shrink-0 lg:mt-0">
              <div className="inline-flex mt-12 rounded-md shadow">
                <Button label="Features" color="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Feature.getLayout = FluidLayout;

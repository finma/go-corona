import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

import { Achivment, Feature, Hero, Information } from "../../component/Section";

const Index: CustomNextPage = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Achivment />
      <Information />
    </div>
  );
};

Index.getLayout = FluidLayout;

export default Index;

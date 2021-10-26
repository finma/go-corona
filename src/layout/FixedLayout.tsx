import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FixedLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] mx-auto w-[1152px] max-w-screen-md min-h-screen">
      <Header />
      <main className="bg-blue-300">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

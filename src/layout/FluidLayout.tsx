import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FluidLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] mx-auto max-w-full min-h-screen">
      <Header />
      <main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

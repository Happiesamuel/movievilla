import Load from "@/app/_components/Load";
import TrendContainer from "@/app/_components/TrendContainer";

import { Suspense } from "react";
export async function generateMetadata() {
  return {
    title: `Trending movies and series`,
  };
}

async function Page({ searchParams }) {
  const pages = searchParams?.page ?? 1;

  return (
    <Suspense fallback={<Load />} key={pages}>
      <TrendContainer pages={pages} />
    </Suspense>
  );
}

export default Page;

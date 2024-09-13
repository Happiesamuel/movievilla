import Load from "@/app/_components/Load";
import PageButtons from "@/app/_components/PageButtons";
import TrendContainer from "@/app/_components/TrendContainer";
import TrendList from "@/app/_components/TrendList";
import { getLatestMovie } from "@/app/_services/tmbd-data-services";
import { Suspense } from "react";

async function Page({ searchParams }) {
  const pages = searchParams?.page ?? 1;

  return (
    <Suspense fallback={<Load />} key={pages}>
      <TrendContainer pages={pages} />
    </Suspense>
  );
}

export default Page;

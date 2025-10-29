"use client";

import { Divider } from "@digdir/designsystemet-react";
import Header from "./komponenter/Header";
import SokStilling from "./komponenter/SokStilling";
import SokFelt from "./komponenter/SokFelt";
import FilterChip from "./komponenter/FilterChip";
import SorterTreff from "./komponenter/SorterTreff";
import Jobber from "./komponenter/Jobber";

export default function Home() {
  return (
    <>
      <Header />
      <SokStilling />

      <h1 className="flex justify-center items-center text-3xl font-semibold mt-10">
        Legg til filter:
      </h1>

      <SokFelt />

      <Divider className="my-7 border-1 border-black" />

      <FilterChip />

      <Divider className="relative mt-7 border-1 border-black" />

      <SorterTreff />

      <Jobber />
    </>
  );
}

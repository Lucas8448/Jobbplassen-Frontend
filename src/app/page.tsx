"use client";

import { Divider } from "@digdir/designsystemet-react";
import Header from "./komponenter/Header";
import SokStilling from "./komponenter/SokStilling";
import SokFelt from "./komponenter/SokFelt";
import FilterChip from "./komponenter/FilterChip";
import SorterTreff from "./komponenter/SorterTreff";
import JobbBoks from "./komponenter/JobbBoks";

export default function Home() {
  return (
    <>
      <Header />
      <SokStilling />

      <h1 className="flex justify-center items-center text-4xl font-semibold mt-6 p-3">
        Legg til filter:
      </h1>

      <SokFelt />

      <Divider className="my-12 border-1 border-black" />

      <FilterChip />

      <Divider className="relative mt-12 border-1 border-black" />

      <SorterTreff />

      <JobbBoks />
    </>
  );
}

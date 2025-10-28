"use client";

import { useState } from "react";
import {
  Divider,
  Card,
  CardBlock,
  Paragraph,
} from "@digdir/designsystemet-react";
import SokFelt from "./komponenter/SokFelt";
import JobbBoks from "./komponenter/JobbBoks";
import FilterChip from "./komponenter/FilterChip";
import SorterTreff from "./komponenter/SorterTreff";
import Header from "./komponenter/Header";
import SokStilling from "./komponenter/SokStilling";


export default function Home() {

  return (
    <>
    <Header />

    <SokStilling />


  

      {/* Undertittel */}
      <h1 className="flex justify-center items-center text-xl font-semibold mt-6 text-4xl p-3">
        legg til filter:
      </h1>

     <SokFelt />

      {/* Første divider */}
      <Divider className="my-12 border-1 border-black" />

      <FilterChip />

      {/* Andre divider */}
      <Divider className="relative mt-12 border-1 border-black " />

      <SorterTreff />
      
      <JobbBoks />
    </>
  );
}

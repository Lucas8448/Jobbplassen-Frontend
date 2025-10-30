"use client";

import { useState } from "react";
import { Divider } from "@digdir/designsystemet-react";
import Header from "./komponenter/Header";
import SokStilling from "./komponenter/SokStilling";
import SokFelt from "./komponenter/SokFelt";
import FilterChip from "./komponenter/FilterChip";
import Jobber from "./komponenter/Jobber";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <SokStilling />

      <SokFelt onSearchChange={setSearch} />

      <h1 className="flex justify-center items-center text-3xl font-semibold mt-10">
        Legg til filter:
      </h1>

      <Divider className="my-7 border-1 border-black" />

      {search && (
        <FilterChip label={`Søk: ${search}`} onRemove={() => setSearch("")} />
      )}

      <Divider className="relative mt-20 border-1 border-black" />

      <Jobber searchQuery={search} />
    </>
  );
}

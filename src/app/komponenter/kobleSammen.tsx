"use client";
import { useState } from "react";
import SokFelt from "./SokFelt";
import FilterChip from "./FilterChip";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div>
      {/* 👇 send funksjonen som prop */}
      <SokFelt onSearchSubmit={setSearch} />

      {/* 👇 vis filteret hvis søk har verdi */}
      {search && (
        <FilterChip
          label={search}
          onRemove={() => setSearch("")}
        />
      )}
    </div>
  );
}

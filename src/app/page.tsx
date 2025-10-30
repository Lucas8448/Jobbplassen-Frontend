"use client";

import { useState } from "react";
import { Divider } from "@digdir/designsystemet-react";
import Header from "./komponenter/Header";
import SokStilling from "./komponenter/SokStilling";
import SokFelt from "./komponenter/SokFelt";
import FilterChip from "./komponenter/FilterChip";
import Jobber from "./komponenter/Jobber";

export default function Home() {
  const [filters, setFilters] = useState<string[]>([]);

  const handleSearchSubmit = (value: string) => {
    if (!filters.includes(value)) {
      setFilters((prev) => [...prev, value]);
    }
  };

  const handleRemove = (label: string) => {
    setFilters((prev) => prev.filter((f) => f !== label));
  };

  return (
    <>
      <Header />
      <SokStilling />

      <SokFelt onSearchSubmit={handleSearchSubmit} />

      <h1 className="flex justify-center items-center text-3xl font-semibold mt-10">
        Legg til filter:
      </h1>

      <div style={{ minHeight: '100px', display: 'flex', flexDirection: 'column' }}>
            <Divider className="my-7 border-1 border-black" />

          <div className="flex flex-wrap justify-center mt-4 min-h-[60px] ">
            {filters.map((filter, i) => (
              <FilterChip key={i} label={filter} onRemove={() => handleRemove(filter)} />
            ))}
          </div>

          <Divider className="mt-10 border-1 border-black" />
      </div>


      <Jobber searchQuery={filters.join(", ")} />
    </>
  );
}

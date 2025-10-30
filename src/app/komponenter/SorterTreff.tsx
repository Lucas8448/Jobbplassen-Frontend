"use client";

import {
  Paragraph,
  Dropdown,
} from "@digdir/designsystemet-react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';

export type SortType = "nyeste" | "eldste" | "alfabetisk";

interface SorterTreffProps {
  antallTreff: number;
  onFilterChange?: (sort: SortType) => void;
  currentSort: SortType;
}

export default function SorterTreff({ antallTreff, onFilterChange, currentSort }: SorterTreffProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-end mt-10 w-full">
      {/* Result count */}
      <Paragraph className="absolute left-1/2 -translate-x-1/2 text-3xl">
        {antallTreff} treff
      </Paragraph>

      {/* Sort by */}
      <div className="flex items-center space-x-3 mr-5 border-2 border-black rounded-md">
        <Dropdown.TriggerContext>
          <Dropdown.Trigger onClick={() => setOpen(!open)} className="px-3">
            Sorter etter: {currentSort === "nyeste" ? "Nyeste" : currentSort === "eldste" ? "Eldste" : "Alfabetisk rekkefølge"}
            {open ? <ChevronUp aria-hidden /> : <ChevronDown aria-hidden />}
          </Dropdown.Trigger>
          <Dropdown open={open} onClose={() => setOpen(false)}>
            <Dropdown.List>
              <Dropdown.Item>
                <Dropdown.Button onClick={() => {
                  onFilterChange?.("nyeste");
                  setOpen(false);
                }}>
                  Nyeste
                </Dropdown.Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.Button onClick={() => {
                  onFilterChange?.("eldste");
                  setOpen(false);
                }}>
                  Eldste
                </Dropdown.Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.Button onClick={() => {
                  onFilterChange?.("alfabetisk");
                  setOpen(false);
                }}>
                  Alfabetisk rekkefølge
                </Dropdown.Button>
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </Dropdown.TriggerContext>
      </div>
    </div>
  );
}

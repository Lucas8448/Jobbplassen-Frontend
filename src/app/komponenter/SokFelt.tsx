"use client";
import { Search, SearchInput, SearchClear, SearchButton } from "@digdir/designsystemet-react";
import { useState } from "react";

interface SokFeltProps {
  onSearchSubmit: (value: string) => void;
}

export default function SokFelt({ onSearchSubmit }: SokFeltProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearchSubmit(input.trim());
      setInput(""); // Clear the input field after submission
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] flex justify-center items-center border-2 border-black rounded-md text-white focus-within:border-black"
      >
        <Search>
          <SearchInput
            aria-label="Søk"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-black pl-2 border-none focus:ring-0 focus:outline-none"
          />
          <SearchClear />
          <SearchButton
            type="submit"
            className="bg-blue-600 hover:text-gray-200"
          />
        </Search>
      </form>
    </div>
  );
}
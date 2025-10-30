"use client";
import { useState } from "react";
import { Card, Paragraph } from "@digdir/designsystemet-react";

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

export default function FilterChip({ label, onRemove }: FilterChipProps) {
  const [hover, setHover] = useState(false);

  return (
    <Card
      className="flex flex-row items-center gap-2 w-fit border-2 border-black ml-3 bg-blue-600 text-white py-2 rounded-md cursor-pointer max-h-50px"
    >
      <Paragraph>{label}</Paragraph>
      <button
        onClick={onRemove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`m-0 cursor-pointer ${
          hover ? "text-black text-xl" : "text-white text-xl"
        }`}
      >
        X
      </button>
    </Card>
  );
}
"use client";

import { useState } from "react";
import { Card, Paragraph } from "@digdir/designsystemet-react";

export default function FilterChip() {
  const [hover, setHover] = useState(false);

  return (
    <Card className="flex flex-row items-center gap-2 w-fit h-auto border-2 border-black ml-10 bg-blue-600 text-white p-4 rounded-md hover:text-gray-200 cursor-pointer">
      <Paragraph>Oslo</Paragraph>
      <button
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

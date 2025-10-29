// src/app/komponenter/SokFelt.tsx
"use client";
import { useState } from "react";

type Props = {
  onSearchChange: (value: string) => void;
};

export default function SokFelt({ onSearchChange }: Props) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    onSearchChange(v);
  };

  const handleClear = () => {
    setValue("");
    onSearchChange("");
  };

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", width: "100%" }}>
      <input
        aria-label="Søk"
        value={value}
        onChange={handleChange}
        placeholder="Søk..."
        style={{
          padding: "8px 12px",
          borderRadius: 6,
          border: "1px solid #ccc",
          minWidth: 200,
        }}
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Fjern søk"
          style={{
            padding: "6px 10px",
            borderRadius: 6,
            border: "1px solid #ddd",
            background: "#f5f5f5",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}
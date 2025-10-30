"use client";

type Props = {
  label: string;
  onRemove: () => void;
};

export default function FilterChip({ label, onRemove }: Props) {
  return (
    <div
      role="status"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 999,
        background: "#eef2ff",
        color: "#1e293b",
        border: "1px solid #dbeafe",
      }}
    >
      <span>{label}</span>
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Fjern filter ${label}`}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 4,
          fontSize: 14,
          lineHeight: 1,
        }}
      >
        ✕
      </button>
    </div>
  );
}
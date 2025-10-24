"use client";
import { useMemo, useState } from "react";

export default function YearFilter({ years, onChange }: { years: number[]; onChange: (year: number | null) => void }) {
  const opts = useMemo(() => Array.from(new Set(years)).sort((a, b) => b - a), [years]);
  const [value, setValue] = useState<string>("");
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span className="muted">Year</span>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          const v = e.target.value ? parseInt(e.target.value, 10) : null;
          onChange(v);
        }}
      >
        <option value="">All</option>
        {opts.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </label>
  );
}


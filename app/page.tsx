"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const generate = async () => {
    const res = await fetch("/api/generate", { method: "POST" });
    setData(await res.json());
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>🔥 Viral Dashboard</h1>

      <button onClick={generate}>
        Generate
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
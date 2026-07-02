"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST"
    });

    const json = await res.json();
    setData(json);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>🔥 Viral Dashboard LIVE</h1>

      <button onClick={generate}>
        Generate Content
      </button>

      <pre style={{ marginTop: 20 }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
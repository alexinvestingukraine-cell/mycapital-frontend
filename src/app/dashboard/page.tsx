"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRaw = localStorage.getItem("user");

    if (!token || !userRaw) {
      router.replace("/login");
      return;
    }

    try {
      const user = JSON.parse(userRaw);
      setEmail(user.email);
    } catch {
      router.replace("/login");
    }
  }, [router]);

  if (!email) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Ты залогинен как <b>{email}</b> 🎉</p>
    </div>
  );
}

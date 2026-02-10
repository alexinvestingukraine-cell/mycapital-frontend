"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.replace("/login");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Ты залогинен 🎉</p>

      <button
        onClick={handleLogout}
        style={{ marginTop: 20 }}
      >
        Logout
      </button>
    </div>
  );
}

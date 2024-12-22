"use client"
import { usePathname } from "next/navigation";

export default function DashboardPage() {
    const pathname = usePathname();
    return (
      <div>
        <h1>Dashboard Page</h1>
        <p>{pathname}</p>
      </div>
    );
  }
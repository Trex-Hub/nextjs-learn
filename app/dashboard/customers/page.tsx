"use client"
import { usePathname } from "next/navigation";

export default function CustomerPage() {
    const pathname = usePathname();
    return (
      <div>
        <h1>Customer Page</h1>
        <p>{pathname}</p>
      </div>
    );
  }

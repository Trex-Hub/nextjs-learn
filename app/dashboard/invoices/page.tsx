"use client"
import { usePathname } from "next/navigation";

export default function InvoicesPage() {
    const pathname = usePathname();
    return (
      <div>
        <h1>Invoices Page</h1>
        <p>{pathname}</p>
      </div>
    );
  }

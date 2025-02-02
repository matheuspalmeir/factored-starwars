"use client";
import { usePathname } from "next/navigation";

export default function DarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="min-h-full">
      <main>
        <div className="max-w-full sm:px-6 lg:px-2 bg-black">{children}</div>
      </main>
    </div>
  );
}

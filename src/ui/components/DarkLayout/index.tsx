export default function DarkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full">
      <main>
        <div className="max-w-full px-4 py-2 sm:px-6 lg:px-2 bg-black">
          {children}
        </div>
      </main>
    </div>
  );
}

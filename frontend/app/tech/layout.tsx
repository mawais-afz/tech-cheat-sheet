import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Cheat Sheets",
  description: "Technical reference guides and cheat sheets for developers",
};

export default function TechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-8 pb-20 px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Tech Resources
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Comprehensive cheat sheets and reference guides for developers
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

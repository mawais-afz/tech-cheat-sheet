import Link from "next/link";

import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
    <Sidebar />
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Tech Cheat Sheet</h1>
        <p className="text-xl">Your quick reference guide for technical concepts</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Programming</h2>
            <ul className="space-y-2">
              <li><Link href="/programming/data-structures" className="hover:text-blue-600 hover:underline">Data Structures</Link></li>
              <li><Link href="/programming/algorithms" className="hover:text-blue-600 hover:underline">Algorithms</Link></li>
              <li><Link href="/programming/design-patterns" className="hover:text-blue-600 hover:underline">Design Patterns</Link></li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Cloud</h2>
            <ul className="space-y-2">
              <li><Link href="/cloud/aws" className="hover:text-blue-600 hover:underline">AWS Services</Link></li>
              <li><Link href="/cloud/azure" className="hover:text-blue-600 hover:underline">Azure Basics</Link></li>
              <li><Link href="/cloud/gcp" className="hover:text-blue-600 hover:underline">GCP Fundamentals</Link></li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">DevOps</h2>
            <ul className="space-y-2">
              <li><Link href="/devops/cicd" className="hover:text-blue-600 hover:underline">CI/CD</Link></li>
              <li><Link href="/devops/iac" className="hover:text-blue-600 hover:underline">Infrastructure as Code</Link></li>
              <li><Link href="/devops/containers" className="hover:text-blue-600 hover:underline">Containerization</Link></li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="row-start-3 text-center text-sm text-gray-600">
        <p>Built with Next.js and Tailwind CSS</p>
      </footer>
    </div>
    </>
  );
}

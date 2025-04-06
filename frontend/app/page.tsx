import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-8 pb-20 px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-7xl mx-auto flex flex-col gap-8 mt-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-4">Tech Cheat Sheet</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Your comprehensive reference guide for mastering technical concepts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Programming</h2>
            </div>
            <ul className="space-y-3">
              {[
                { href: "/tech/programming/data-structures", title: "Data Structures" },
                { href: "/tech/programming/algorithms", title: "Algorithms" },
                { href: "/tech/programming/design-patterns", title: "Design Patterns" }
              ].map((item) => (
                <li key={item.href} className="pl-2 border-l-2 border-indigo-200 dark:border-indigo-800">
                  <Link href={item.href} className="block py-2 px-3 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Cloud</h2>
            </div>
            <ul className="space-y-3">
              {[
                { href: "/tech/cloud/aws", title: "AWS Services" },
                { href: "/tech/cloud/azure", title: "Azure Basics" },
                { href: "/tech/cloud/gcp", title: "GCP Fundamentals" }
              ].map((item) => (
                <li key={item.href} className="pl-2 border-l-2 border-blue-200 dark:border-blue-800">
                  <Link href={item.href} className="block py-2 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">DevOps</h2>
            </div>
            <ul className="space-y-3">
              {[
                { href: "/tech/devops/cicd", title: "CI/CD" },
                { href: "/tech/devops/iac", title: "Infrastructure as Code" },
                { href: "/tech/devops/containers", title: "Containerization" }
              ].map((item) => (
                <li key={item.href} className="pl-2 border-l-2 border-teal-200 dark:border-teal-800">
                  <Link href={item.href} className="block py-2 px-3 rounded-md hover:bg-teal-50 dark:hover:bg-teal-900/20 text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          Built with <span className="text-indigo-500 dark:text-indigo-400">Next.js</span> and <span className="text-blue-500 dark:text-blue-400">Tailwind CSS</span>
        </p>
      </footer>
    </div>
  );
}

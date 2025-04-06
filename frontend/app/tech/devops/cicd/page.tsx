import Sidebar from "@/components/Sidebar";

export default function CICD() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500 dark:from-orange-400 dark:to-red-300">CI/CD Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Continuous Integration */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-600 dark:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Continuous Integration
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-orange-50 dark:hover:bg-orange-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Key Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Frequent code commits</li>
                  <li>Automated builds</li>
                  <li>Automated testing</li>
                  <li>Code quality checks</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-orange-50 dark:hover:bg-orange-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Popular CI Tools</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">Jenkins</span> - Self-hosted automation server</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">GitHub Actions</span> - GitHub&apos;s built-in CI/CD</li>
                  <li><span className="font-medium text-orange-600 dark:text-orange-400">GitLab CI</span> - GitLab&apos;s integrated CI/CD</li>
                  <li><span className="font-medium text-teal-600 dark:text-teal-400">CircleCI</span> - Cloud-based CI/CD platform</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Continuous Delivery */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              Continuous Delivery
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Pipeline Stages</h3>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-2">1</div>
                    <p className="text-gray-600 dark:text-gray-400"><span className="font-medium">Build</span> - Compile and package code</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-2">2</div>
                    <p className="text-gray-600 dark:text-gray-400"><span className="font-medium">Test</span> - Run automated tests</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-2">3</div>
                    <p className="text-gray-600 dark:text-gray-400"><span className="font-medium">Deploy</span> - Push to staging environment</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-2">4</div>
                    <p className="text-gray-600 dark:text-gray-400"><span className="font-medium">Validate</span> - Verify deployment</p>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Automated deployment scripts</li>
                  <li>Environment configuration management</li>
                  <li>Rollback procedures</li>
                  <li>Monitoring and logging</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Continuous Deployment */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-600 dark:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Continuous Deployment
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-green-50 dark:hover:bg-green-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Key Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Automated release process</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Feature flags/toggles</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Blue-green deployments</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Canary releases</p>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-green-50 dark:hover:bg-green-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Monitoring & Feedback</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Performance metrics</li>
                  <li>Error tracking</li>
                  <li>User feedback collection</li>
                  <li>System health monitoring</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

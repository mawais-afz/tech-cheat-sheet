import Sidebar from "@/components/Sidebar";

export default function Azure() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-300">Azure Cloud Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Compute Services */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
              Compute Services
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Virtual Machines</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>IaaS compute instances</li>
                  <li>Multiple VM sizes and series</li>
                  <li>Windows and Linux support</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">App Services</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>PaaS web hosting</li>
                  <li>Auto-scaling capabilities</li>
                  <li>Multiple language support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Storage Services */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-600 dark:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              Storage Services
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Blob Storage</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Object storage solution</li>
                  <li>Hot, cool, and archive tiers</li>
                  <li>Scalable and secure</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Azure Files</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Managed file shares</li>
                  <li>SMB and NFS support</li>
                  <li>Cloud-native sharing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Database Services */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-600 dark:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              Database Services
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-green-50 dark:hover:bg-green-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Azure SQL Database</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Managed SQL Server</li>
                  <li>Built-in intelligence</li>
                  <li>Automatic tuning</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-green-50 dark:hover:bg-green-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Cosmos DB</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Multi-model database</li>
                  <li>Global distribution</li>
                  <li>Multiple APIs supported</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Networking */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-cyan-600 dark:text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              Networking
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-cyan-50 dark:hover:bg-cyan-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Virtual Network</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Isolated cloud networks</li>
                  <li>Network security groups</li>
                  <li>VPN and ExpressRoute</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-cyan-50 dark:hover:bg-cyan-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Load Balancer</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Traffic distribution</li>
                  <li>High availability</li>
                  <li>Health probes</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

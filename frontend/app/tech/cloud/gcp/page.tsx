import Sidebar from "@/components/Sidebar";

export default function GCP() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-300">Google Cloud Platform (GCP) Cheat Sheet</h1>

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
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Compute Engine</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Virtual machines (IaaS)</li>
                  <li>Custom machine types</li>
                  <li>Per-second billing</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Cloud Run</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Serverless container platform</li>
                  <li>Auto-scaling</li>
                  <li>Pay-per-use pricing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Storage Services */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-600 dark:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              Storage Services
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-green-50 dark:hover:bg-green-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Cloud Storage</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Object storage service</li>
                  <li>Multiple storage classes</li>
                  <li>Global accessibility</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-green-50 dark:hover:bg-green-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Persistent Disk</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Block storage for VMs</li>
                  <li>SSD and HDD options</li>
                  <li>Automatic encryption</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Database Services */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-yellow-600 dark:text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              Database Services
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-yellow-50 dark:hover:bg-yellow-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Cloud SQL</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Managed relational database</li>
                  <li>MySQL, PostgreSQL, SQL Server</li>
                  <li>Automated backups</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-yellow-50 dark:hover:bg-yellow-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Cloud Firestore</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>NoSQL document database</li>
                  <li>Real-time updates</li>
                  <li>Automatic scaling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Networking */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-600 dark:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Networking
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Virtual Private Cloud (VPC)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Global private network</li>
                  <li>Software-defined networking</li>
                  <li>Firewall rules</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Cloud Load Balancing</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Global load distribution</li>
                  <li>Multi-region failover</li>
                  <li>SSL/TLS termination</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

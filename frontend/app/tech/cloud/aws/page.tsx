import Sidebar from "@/components/Sidebar";

export default function AWSServices() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">AWS Services Cheat Sheet</h1>

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
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">EC2 (Elastic Compute Cloud)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Virtual servers in the cloud</li>
                  <li>Multiple instance types for different workloads</li>
                  <li>Auto Scaling capabilities</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Lambda</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Serverless compute service</li>
                  <li>Pay only for compute time used</li>
                  <li>Supports multiple programming languages</li>
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
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">S3 (Simple Storage Service)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Object storage service</li>
                  <li>Highly scalable and durable</li>
                  <li>Various storage classes available</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-green-50 dark:hover:bg-green-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">EBS (Elastic Block Store)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Block-level storage volumes</li>
                  <li>Persistent storage for EC2 instances</li>
                  <li>Multiple volume types available</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Database Services */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-600 dark:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              Database Services
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">RDS (Relational Database Service)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Managed relational databases</li>
                  <li>Multiple database engines supported</li>
                  <li>Automated backups and maintenance</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">DynamoDB</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Managed NoSQL database</li>
                  <li>Serverless with automatic scaling</li>
                  <li>Single-digit millisecond performance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Networking Services */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-600 dark:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              Networking Services
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-orange-50 dark:hover:bg-orange-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">VPC (Virtual Private Cloud)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Isolated cloud network</li>
                  <li>Custom IP address ranges</li>
                  <li>Security groups and NACLs</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-orange-50 dark:hover:bg-orange-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Route 53</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>DNS web service</li>
                  <li>Domain registration</li>
                  <li>Health checking and routing policies</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

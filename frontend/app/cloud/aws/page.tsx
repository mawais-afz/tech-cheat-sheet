import Sidebar from "@/components/Sidebar";

export default function AWSServices() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8">AWS Services Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Compute Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Compute Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">EC2 (Elastic Compute Cloud)</h3>
                <p className="text-gray-600 dark:text-gray-400">Virtual servers in the cloud</p>
                <p className="text-gray-600 dark:text-gray-400">Multiple instance types for different workloads</p>
                <p className="text-gray-600 dark:text-gray-400">Auto Scaling capabilities</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Lambda</h3>
                <p className="text-gray-600 dark:text-gray-400">Serverless compute service</p>
                <p className="text-gray-600 dark:text-gray-400">Pay only for compute time used</p>
                <p className="text-gray-600 dark:text-gray-400">Supports multiple programming languages</p>
              </div>
            </div>
          </section>

          {/* Storage Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Storage Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">S3 (Simple Storage Service)</h3>
                <p className="text-gray-600 dark:text-gray-400">Object storage service</p>
                <p className="text-gray-600 dark:text-gray-400">Highly scalable and durable</p>
                <p className="text-gray-600 dark:text-gray-400">Various storage classes available</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">EBS (Elastic Block Store)</h3>
                <p className="text-gray-600 dark:text-gray-400">Block-level storage volumes</p>
                <p className="text-gray-600 dark:text-gray-400">Persistent storage for EC2 instances</p>
                <p className="text-gray-600 dark:text-gray-400">Multiple volume types available</p>
              </div>
            </div>
          </section>

          {/* Database Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Database Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">RDS (Relational Database Service)</h3>
                <p className="text-gray-600 dark:text-gray-400">Managed relational databases</p>
                <p className="text-gray-600 dark:text-gray-400">Multiple database engines supported</p>
                <p className="text-gray-600 dark:text-gray-400">Automated backups and maintenance</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">DynamoDB</h3>
                <p className="text-gray-600 dark:text-gray-400">Managed NoSQL database</p>
                <p className="text-gray-600 dark:text-gray-400">Serverless with automatic scaling</p>
                <p className="text-gray-600 dark:text-gray-400">Single-digit millisecond performance</p>
              </div>
            </div>
          </section>

          {/* Networking Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Networking Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">VPC (Virtual Private Cloud)</h3>
                <p className="text-gray-600 dark:text-gray-400">Isolated cloud network</p>
                <p className="text-gray-600 dark:text-gray-400">Custom IP address ranges</p>
                <p className="text-gray-600 dark:text-gray-400">Security groups and NACLs</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Route 53</h3>
                <p className="text-gray-600 dark:text-gray-400">DNS web service</p>
                <p className="text-gray-600 dark:text-gray-400">Domain registration</p>
                <p className="text-gray-600 dark:text-gray-400">Health checking and routing policies</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

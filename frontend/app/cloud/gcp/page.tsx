import Sidebar from "@/components/Sidebar";

export default function GCP() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8">Google Cloud Platform (GCP) Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Compute Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Compute Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Compute Engine</h3>
                <p className="text-gray-600 dark:text-gray-400">Virtual machines (IaaS)</p>
                <p className="text-gray-600 dark:text-gray-400">Custom machine types</p>
                <p className="text-gray-600 dark:text-gray-400">Per-second billing</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Cloud Run</h3>
                <p className="text-gray-600 dark:text-gray-400">Serverless container platform</p>
                <p className="text-gray-600 dark:text-gray-400">Auto-scaling</p>
                <p className="text-gray-600 dark:text-gray-400">Pay-per-use pricing</p>
              </div>
            </div>
          </section>

          {/* Storage Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Storage Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Cloud Storage</h3>
                <p className="text-gray-600 dark:text-gray-400">Object storage service</p>
                <p className="text-gray-600 dark:text-gray-400">Multiple storage classes</p>
                <p className="text-gray-600 dark:text-gray-400">Global accessibility</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Persistent Disk</h3>
                <p className="text-gray-600 dark:text-gray-400">Block storage for VMs</p>
                <p className="text-gray-600 dark:text-gray-400">SSD and HDD options</p>
                <p className="text-gray-600 dark:text-gray-400">Automatic encryption</p>
              </div>
            </div>
          </section>

          {/* Database Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Database Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Cloud SQL</h3>
                <p className="text-gray-600 dark:text-gray-400">Managed relational database</p>
                <p className="text-gray-600 dark:text-gray-400">MySQL, PostgreSQL, SQL Server</p>
                <p className="text-gray-600 dark:text-gray-400">Automated backups</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Cloud Firestore</h3>
                <p className="text-gray-600 dark:text-gray-400">NoSQL document database</p>
                <p className="text-gray-600 dark:text-gray-400">Real-time updates</p>
                <p className="text-gray-600 dark:text-gray-400">Automatic scaling</p>
              </div>
            </div>
          </section>

          {/* Networking */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Networking</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Virtual Private Cloud (VPC)</h3>
                <p className="text-gray-600 dark:text-gray-400">Global private network</p>
                <p className="text-gray-600 dark:text-gray-400">Software-defined networking</p>
                <p className="text-gray-600 dark:text-gray-400">Firewall rules</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Cloud Load Balancing</h3>
                <p className="text-gray-600 dark:text-gray-400">Global load distribution</p>
                <p className="text-gray-600 dark:text-gray-400">Multi-region failover</p>
                <p className="text-gray-600 dark:text-gray-400">SSL/TLS termination</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

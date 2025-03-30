import Sidebar from "@/components/Sidebar";

export default function Azure() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8">Azure Cloud Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Compute Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Compute Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Virtual Machines</h3>
                <p className="text-gray-600 dark:text-gray-400">IaaS compute instances</p>
                <p className="text-gray-600 dark:text-gray-400">Multiple VM sizes and series</p>
                <p className="text-gray-600 dark:text-gray-400">Windows and Linux support</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">App Services</h3>
                <p className="text-gray-600 dark:text-gray-400">PaaS web hosting</p>
                <p className="text-gray-600 dark:text-gray-400">Auto-scaling capabilities</p>
                <p className="text-gray-600 dark:text-gray-400">Multiple language support</p>
              </div>
            </div>
          </section>

          {/* Storage Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Storage Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Blob Storage</h3>
                <p className="text-gray-600 dark:text-gray-400">Object storage solution</p>
                <p className="text-gray-600 dark:text-gray-400">Hot, cool, and archive tiers</p>
                <p className="text-gray-600 dark:text-gray-400">Scalable and secure</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Azure Files</h3>
                <p className="text-gray-600 dark:text-gray-400">Managed file shares</p>
                <p className="text-gray-600 dark:text-gray-400">SMB and NFS support</p>
                <p className="text-gray-600 dark:text-gray-400">Cloud-native sharing</p>
              </div>
            </div>
          </section>

          {/* Database Services */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Database Services</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Azure SQL Database</h3>
                <p className="text-gray-600 dark:text-gray-400">Managed SQL Server</p>
                <p className="text-gray-600 dark:text-gray-400">Built-in intelligence</p>
                <p className="text-gray-600 dark:text-gray-400">Automatic tuning</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Cosmos DB</h3>
                <p className="text-gray-600 dark:text-gray-400">Multi-model database</p>
                <p className="text-gray-600 dark:text-gray-400">Global distribution</p>
                <p className="text-gray-600 dark:text-gray-400">Multiple APIs supported</p>
              </div>
            </div>
          </section>

          {/* Networking */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Networking</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Virtual Network</h3>
                <p className="text-gray-600 dark:text-gray-400">Isolated cloud networks</p>
                <p className="text-gray-600 dark:text-gray-400">Network security groups</p>
                <p className="text-gray-600 dark:text-gray-400">VPN and ExpressRoute</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Load Balancer</h3>
                <p className="text-gray-600 dark:text-gray-400">Traffic distribution</p>
                <p className="text-gray-600 dark:text-gray-400">High availability</p>
                <p className="text-gray-600 dark:text-gray-400">Health probes</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

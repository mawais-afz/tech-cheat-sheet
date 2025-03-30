import Sidebar from "@/components/Sidebar";

export default function CICD() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8">CI/CD Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Continuous Integration */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Continuous Integration</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Key Practices</h3>
                <p className="text-gray-600 dark:text-gray-400">Frequent code commits</p>
                <p className="text-gray-600 dark:text-gray-400">Automated builds</p>
                <p className="text-gray-600 dark:text-gray-400">Automated testing</p>
                <p className="text-gray-600 dark:text-gray-400">Code quality checks</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Popular CI Tools</h3>
                <p className="text-gray-600 dark:text-gray-400">Jenkins - Self-hosted automation server</p>
                <p className="text-gray-600 dark:text-gray-400">GitHub Actions - GitHub&apos;s built-in CI/CD</p>
                <p className="text-gray-600 dark:text-gray-400">GitLab CI - GitLab&apos;s integrated CI/CD</p>
                <p className="text-gray-600 dark:text-gray-400">CircleCI - Cloud-based CI/CD platform</p>
              </div>
            </div>
          </section>

          {/* Continuous Delivery */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Continuous Delivery</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Pipeline Stages</h3>
                <p className="text-gray-600 dark:text-gray-400">Build - Compile and package code</p>
                <p className="text-gray-600 dark:text-gray-400">Test - Run automated tests</p>
                <p className="text-gray-600 dark:text-gray-400">Deploy - Push to staging environment</p>
                <p className="text-gray-600 dark:text-gray-400">Validate - Verify deployment</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Best Practices</h3>
                <p className="text-gray-600 dark:text-gray-400">Automated deployment scripts</p>
                <p className="text-gray-600 dark:text-gray-400">Environment configuration management</p>
                <p className="text-gray-600 dark:text-gray-400">Rollback procedures</p>
                <p className="text-gray-600 dark:text-gray-400">Monitoring and logging</p>
              </div>
            </div>
          </section>

          {/* Continuous Deployment */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Continuous Deployment</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Key Components</h3>
                <p className="text-gray-600 dark:text-gray-400">Automated release process</p>
                <p className="text-gray-600 dark:text-gray-400">Feature flags/toggles</p>
                <p className="text-gray-600 dark:text-gray-400">Blue-green deployments</p>
                <p className="text-gray-600 dark:text-gray-400">Canary releases</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Monitoring & Feedback</h3>
                <p className="text-gray-600 dark:text-gray-400">Performance metrics</p>
                <p className="text-gray-600 dark:text-gray-400">Error tracking</p>
                <p className="text-gray-600 dark:text-gray-400">User feedback collection</p>
                <p className="text-gray-600 dark:text-gray-400">System health monitoring</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

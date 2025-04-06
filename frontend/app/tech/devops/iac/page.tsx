import Sidebar from "@/components/Sidebar";

export default function InfrastructureAsCode() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">Infrastructure as Code (IaC) Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Terraform */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-600 dark:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Terraform
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Basic Commands</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">terraform init</span> - Initialize working directory</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">terraform plan</span> - Preview changes</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">terraform apply</span> - Apply changes</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">terraform destroy</span> - Destroy infrastructure</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Key Concepts</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">Providers</span> - Cloud service plugins</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">Resources</span> - Infrastructure components</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">Variables</span> - Reusable values</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">State</span> - Infrastructure tracking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AWS CloudFormation */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              AWS CloudFormation
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Template Structure</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">Parameters</span> - Input values</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">Resources</span> - AWS resources to create</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">Outputs</span> - Return values</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">Mappings</span> - Key-value mappings</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Stack Operations</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">Create Stack</span> - Deploy new infrastructure</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">Update Stack</span> - Modify existing resources</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">Delete Stack</span> - Remove infrastructure</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Azure ARM Templates */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-cyan-600 dark:text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Azure ARM Templates
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-cyan-50 dark:hover:bg-cyan-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Template Components</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-cyan-600 dark:text-cyan-400">Parameters</span> - Template inputs</li>
                  <li><span className="font-medium text-cyan-600 dark:text-cyan-400">Variables</span> - Internal template values</li>
                  <li><span className="font-medium text-cyan-600 dark:text-cyan-400">Resources</span> - Azure resources</li>
                  <li><span className="font-medium text-cyan-600 dark:text-cyan-400">Outputs</span> - Return values</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-cyan-50 dark:hover:bg-cyan-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Deployment Commands</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-cyan-600 dark:text-cyan-400">New-AzResourceGroupDeployment</span> - Create deployment</li>
                  <li><span className="font-medium text-cyan-600 dark:text-cyan-400">Test-AzResourceGroupDeployment</span> - Validate template</li>
                  <li><span className="font-medium text-cyan-600 dark:text-cyan-400">Remove-AzResourceGroupDeployment</span> - Remove deployment</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

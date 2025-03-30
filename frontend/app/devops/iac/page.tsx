import Sidebar from "@/components/Sidebar";

export default function InfrastructureAsCode() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8">Infrastructure as Code (IaC) Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Terraform */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Terraform</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Basic Commands</h3>
                <p className="text-gray-600 dark:text-gray-400">terraform init - Initialize working directory</p>
                <p className="text-gray-600 dark:text-gray-400">terraform plan - Preview changes</p>
                <p className="text-gray-600 dark:text-gray-400">terraform apply - Apply changes</p>
                <p className="text-gray-600 dark:text-gray-400">terraform destroy - Destroy infrastructure</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Key Concepts</h3>
                <p className="text-gray-600 dark:text-gray-400">Providers - Cloud service plugins</p>
                <p className="text-gray-600 dark:text-gray-400">Resources - Infrastructure components</p>
                <p className="text-gray-600 dark:text-gray-400">Variables - Reusable values</p>
                <p className="text-gray-600 dark:text-gray-400">State - Infrastructure tracking</p>
              </div>
            </div>
          </section>

          {/* AWS CloudFormation */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">AWS CloudFormation</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Template Structure</h3>
                <p className="text-gray-600 dark:text-gray-400">Parameters - Input values</p>
                <p className="text-gray-600 dark:text-gray-400">Resources - AWS resources to create</p>
                <p className="text-gray-600 dark:text-gray-400">Outputs - Return values</p>
                <p className="text-gray-600 dark:text-gray-400">Mappings - Key-value mappings</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Stack Operations</h3>
                <p className="text-gray-600 dark:text-gray-400">Create Stack - Deploy new infrastructure</p>
                <p className="text-gray-600 dark:text-gray-400">Update Stack - Modify existing resources</p>
                <p className="text-gray-600 dark:text-gray-400">Delete Stack - Remove infrastructure</p>
              </div>
            </div>
          </section>

          {/* Azure ARM Templates */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Azure ARM Templates</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Template Components</h3>
                <p className="text-gray-600 dark:text-gray-400">Parameters - Template inputs</p>
                <p className="text-gray-600 dark:text-gray-400">Variables - Internal template values</p>
                <p className="text-gray-600 dark:text-gray-400">Resources - Azure resources</p>
                <p className="text-gray-600 dark:text-gray-400">Outputs - Return values</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Deployment Commands</h3>
                <p className="text-gray-600 dark:text-gray-400">New-AzResourceGroupDeployment - Create deployment</p>
                <p className="text-gray-600 dark:text-gray-400">Test-AzResourceGroupDeployment - Validate template</p>
                <p className="text-gray-600 dark:text-gray-400">Remove-AzResourceGroupDeployment - Remove deployment</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

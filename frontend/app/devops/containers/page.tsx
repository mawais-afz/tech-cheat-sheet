import Sidebar from "@/components/Sidebar";

export default function Containerization() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8">Containerization Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Docker */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Docker</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Basic Commands</h3>
                <p className="text-gray-600 dark:text-gray-400">docker build - Build an image from a Dockerfile</p>
                <p className="text-gray-600 dark:text-gray-400">docker run - Create and start a container</p>
                <p className="text-gray-600 dark:text-gray-400">docker ps - List running containers</p>
                <p className="text-gray-600 dark:text-gray-400">docker stop - Stop a running container</p>
                <p className="text-gray-600 dark:text-gray-400">docker rm - Remove a container</p>
                <p className="text-gray-600 dark:text-gray-400">docker images - List images</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Dockerfile Instructions</h3>
                <p className="text-gray-600 dark:text-gray-400">FROM - Base image</p>
                <p className="text-gray-600 dark:text-gray-400">WORKDIR - Working directory</p>
                <p className="text-gray-600 dark:text-gray-400">COPY/ADD - Copy files</p>
                <p className="text-gray-600 dark:text-gray-400">RUN - Execute commands</p>
                <p className="text-gray-600 dark:text-gray-400">CMD/ENTRYPOINT - Container startup</p>
              </div>
            </div>
          </section>

          {/* Kubernetes */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Kubernetes</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Core Concepts</h3>
                <p className="text-gray-600 dark:text-gray-400">Pods - Smallest deployable units</p>
                <p className="text-gray-600 dark:text-gray-400">Services - Network abstraction</p>
                <p className="text-gray-600 dark:text-gray-400">Deployments - Declarative updates</p>
                <p className="text-gray-600 dark:text-gray-400">ConfigMaps/Secrets - Configuration</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">kubectl Commands</h3>
                <p className="text-gray-600 dark:text-gray-400">kubectl get - List resources</p>
                <p className="text-gray-600 dark:text-gray-400">kubectl apply - Apply manifest</p>
                <p className="text-gray-600 dark:text-gray-400">kubectl delete - Remove resources</p>
                <p className="text-gray-600 dark:text-gray-400">kubectl logs - View logs</p>
              </div>
            </div>
          </section>

          {/* Container Registry */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Container Registry</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Common Operations</h3>
                <p className="text-gray-600 dark:text-gray-400">docker login - Authenticate to registry</p>
                <p className="text-gray-600 dark:text-gray-400">docker push - Upload images</p>
                <p className="text-gray-600 dark:text-gray-400">docker pull - Download images</p>
                <p className="text-gray-600 dark:text-gray-400">docker tag - Tag images</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Popular Registries</h3>
                <p className="text-gray-600 dark:text-gray-400">Docker Hub - Public registry</p>
                <p className="text-gray-600 dark:text-gray-400">Amazon ECR - AWS registry</p>
                <p className="text-gray-600 dark:text-gray-400">Azure Container Registry</p>
                <p className="text-gray-600 dark:text-gray-400">Google Container Registry</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

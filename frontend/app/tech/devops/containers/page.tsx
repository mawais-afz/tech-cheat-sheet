import Sidebar from "@/components/Sidebar";

export default function Containerization() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">Containerization Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Docker */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
              Docker
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Basic Commands</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">docker build</span> - Build an image from a Dockerfile</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">docker run</span> - Create and start a container</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">docker ps</span> - List running containers</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">docker stop</span> - Stop a running container</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">docker rm</span> - Remove a container</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">docker images</span> - List images</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Dockerfile Instructions</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">FROM</span> - Base image</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">WORKDIR</span> - Working directory</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">COPY/ADD</span> - Copy files</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">RUN</span> - Execute commands</li>
                  <li><span className="font-medium text-blue-600 dark:text-blue-400">CMD/ENTRYPOINT</span> - Container startup</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Kubernetes */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-teal-600 dark:text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Kubernetes
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-teal-50 dark:hover:bg-teal-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Core Concepts</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-teal-600 dark:text-teal-400">Pods</span> - Smallest deployable units</li>
                  <li><span className="font-medium text-teal-600 dark:text-teal-400">Services</span> - Network abstraction</li>
                  <li><span className="font-medium text-teal-600 dark:text-teal-400">Deployments</span> - Declarative updates</li>
                  <li><span className="font-medium text-teal-600 dark:text-teal-400">ConfigMaps/Secrets</span> - Configuration</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-teal-50 dark:hover:bg-teal-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">kubectl Commands</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-teal-600 dark:text-teal-400">kubectl get</span> - List resources</li>
                  <li><span className="font-medium text-teal-600 dark:text-teal-400">kubectl apply</span> - Apply manifest</li>
                  <li><span className="font-medium text-teal-600 dark:text-teal-400">kubectl delete</span> - Remove resources</li>
                  <li><span className="font-medium text-teal-600 dark:text-teal-400">kubectl logs</span> - View logs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Container Registry */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-600 dark:text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              Container Registry
            </h2>
            <div className="grid gap-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Common Operations</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">docker login</span> - Authenticate to registry</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">docker push</span> - Upload images</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">docker pull</span> - Download images</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">docker tag</span> - Tag images</li>
                </ul>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 p-3 rounded-md transition-colors">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Popular Registries</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">Docker Hub</span> - Public registry</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">Amazon ECR</span> - AWS registry</li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">Azure Container Registry</span></li>
                  <li><span className="font-medium text-purple-600 dark:text-purple-400">Google Container Registry</span></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

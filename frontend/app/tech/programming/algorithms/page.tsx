import Sidebar from "@/components/Sidebar";

export default function Algorithms() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-indigo-700 dark:text-indigo-400 border-b pb-4">Algorithms Cheat Sheet</h1>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {/* Sorting Algorithms */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-500">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Sorting Algorithms
            </h2>
            <div className="grid gap-4">
              <div className="border-b pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Quick Sort</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Time:</span> O(n log n) average, O(n²) worst
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Space:</span> O(log n)
                </p>
              </div>
              <div className="border-b pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Merge Sort</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Time:</span> O(n log n)
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Space:</span> O(n)
                </p>
              </div>
              <div className="border-b pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Bubble Sort</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Time:</span> O(n²)
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Space:</span> O(1)
                </p>
              </div>
            </div>
          </section>

          {/* Search Algorithms */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
            <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Algorithms
            </h2>
            <div className="grid gap-4">
              <div className="border-b pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Binary Search</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Time:</span> O(log n)
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Space:</span> O(1)
                </p>
              </div>
              <div className="border-b pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Linear Search</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Time:</span> O(n)
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Space:</span> O(1)
                </p>
              </div>
            </div>
          </section>

          {/* Graph Algorithms */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Graph Algorithms
            </h2>
            <div className="grid gap-4">
              <div className="border-b pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Dijkstra&apos;s Algorithm</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Time:</span> O((V + E) log V)
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Space:</span> O(V)
                </p>
              </div>
              <div className="border-b pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Breadth First Search (BFS)</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Time:</span> O(V + E)
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Space:</span> O(V)
                </p>
              </div>
              <div className="border-b pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Depth First Search (DFS)</h3>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Time:</span> O(V + E)
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="font-semibold mr-2">Space:</span> O(V)
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

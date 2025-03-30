import Sidebar from "@/components/Sidebar";

export default function Algorithms() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8">Algorithms Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Sorting Algorithms */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Sorting Algorithms</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Quick Sort</h3>
                <p className="text-gray-600 dark:text-gray-400">Time Complexity: O(n log n) average, O(n²) worst</p>
                <p className="text-gray-600 dark:text-gray-400">Space Complexity: O(log n)</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Merge Sort</h3>
                <p className="text-gray-600 dark:text-gray-400">Time Complexity: O(n log n)</p>
                <p className="text-gray-600 dark:text-gray-400">Space Complexity: O(n)</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Bubble Sort</h3>
                <p className="text-gray-600 dark:text-gray-400">Time Complexity: O(n²)</p>
                <p className="text-gray-600 dark:text-gray-400">Space Complexity: O(1)</p>
              </div>
            </div>
          </section>

          {/* Search Algorithms */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Search Algorithms</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Binary Search</h3>
                <p className="text-gray-600 dark:text-gray-400">Time Complexity: O(log n)</p>
                <p className="text-gray-600 dark:text-gray-400">Space Complexity: O(1)</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Linear Search</h3>
                <p className="text-gray-600 dark:text-gray-400">Time Complexity: O(n)</p>
                <p className="text-gray-600 dark:text-gray-400">Space Complexity: O(1)</p>
              </div>
            </div>
          </section>

          {/* Graph Algorithms */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Graph Algorithms</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Dijkstra&apos;s Algorithm</h3>
                <p className="text-gray-600 dark:text-gray-400">Time Complexity: O((V + E) log V)</p>
                <p className="text-gray-600 dark:text-gray-400">Space Complexity: O(V)</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Breadth First Search (BFS)</h3>
                <p className="text-gray-600 dark:text-gray-400">Time Complexity: O(V + E)</p>
                <p className="text-gray-600 dark:text-gray-400">Space Complexity: O(V)</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Depth First Search (DFS)</h3>
                <p className="text-gray-600 dark:text-gray-400">Time Complexity: O(V + E)</p>
                <p className="text-gray-600 dark:text-gray-400">Space Complexity: O(V)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

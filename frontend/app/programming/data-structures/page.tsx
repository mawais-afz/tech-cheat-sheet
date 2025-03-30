import Sidebar from "@/components/Sidebar";

export default function DataStructures() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pl-64 p-8">
        <h1 className="text-4xl font-bold mb-8">Data Structures Cheat Sheet</h1>

        <div className="grid gap-8">
          {/* Arrays and Lists */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Arrays and Lists</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Array</h3>
                <p className="text-gray-600 dark:text-gray-400">Access: O(1)</p>
                <p className="text-gray-600 dark:text-gray-400">Search: O(n)</p>
                <p className="text-gray-600 dark:text-gray-400">Insertion: O(n)</p>
                <p className="text-gray-600 dark:text-gray-400">Deletion: O(n)</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Linked List</h3>
                <p className="text-gray-600 dark:text-gray-400">Access: O(n)</p>
                <p className="text-gray-600 dark:text-gray-400">Search: O(n)</p>
                <p className="text-gray-600 dark:text-gray-400">Insertion: O(1)</p>
                <p className="text-gray-600 dark:text-gray-400">Deletion: O(1)</p>
              </div>
            </div>
          </section>

          {/* Trees */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Trees</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Binary Search Tree</h3>
                <p className="text-gray-600 dark:text-gray-400">Search: O(log n) average, O(n) worst</p>
                <p className="text-gray-600 dark:text-gray-400">Insertion: O(log n) average, O(n) worst</p>
                <p className="text-gray-600 dark:text-gray-400">Deletion: O(log n) average, O(n) worst</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">AVL Tree</h3>
                <p className="text-gray-600 dark:text-gray-400">Search: O(log n)</p>
                <p className="text-gray-600 dark:text-gray-400">Insertion: O(log n)</p>
                <p className="text-gray-600 dark:text-gray-400">Deletion: O(log n)</p>
              </div>
            </div>
          </section>

          {/* Hash Tables */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Hash Tables</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Hash Table</h3>
                <p className="text-gray-600 dark:text-gray-400">Search: O(1) average, O(n) worst</p>
                <p className="text-gray-600 dark:text-gray-400">Insertion: O(1) average, O(n) worst</p>
                <p className="text-gray-600 dark:text-gray-400">Deletion: O(1) average, O(n) worst</p>
              </div>
            </div>
          </section>

          {/* Graphs */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Graphs</h2>
            <div className="grid gap-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Adjacency List</h3>
                <p className="text-gray-600 dark:text-gray-400">Storage: O(V + E)</p>
                <p className="text-gray-600 dark:text-gray-400">Add Vertex: O(1)</p>
                <p className="text-gray-600 dark:text-gray-400">Add Edge: O(1)</p>
                <p className="text-gray-600 dark:text-gray-400">Remove Vertex: O(V + E)</p>
                <p className="text-gray-600 dark:text-gray-400">Remove Edge: O(E)</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Adjacency Matrix</h3>
                <p className="text-gray-600 dark:text-gray-400">Storage: O(V²)</p>
                <p className="text-gray-600 dark:text-gray-400">Add Vertex: O(V²)</p>
                <p className="text-gray-600 dark:text-gray-400">Add Edge: O(1)</p>
                <p className="text-gray-600 dark:text-gray-400">Remove Vertex: O(V²)</p>
                <p className="text-gray-600 dark:text-gray-400">Remove Edge: O(1)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

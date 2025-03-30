

export default function Docs() {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Documentation
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-900 dark:text-gray-900">
              Everything you need to know about using our cheat sheets.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Getting Started Card */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Getting Started</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Learn the basics and get up and running quickly with our platform.
              </p>
            </div>

            {/* Features Card */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Features</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Explore all the features and capabilities available to you.
              </p>
            </div>

            {/* API Reference Card */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">API Reference</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Detailed documentation for integrating with our API.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  How do I create a new cheat sheet?
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  You can create a new cheat sheet by navigating to the dashboard and clicking the &quot;New Cheat Sheet&quot; button.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Can I share my cheat sheets with others?
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Yes! You can share your cheat sheets by using the share button and generating a unique link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

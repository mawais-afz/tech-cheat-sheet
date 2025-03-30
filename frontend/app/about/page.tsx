

export default function About() {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Us
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Your go-to resource for quick reference guides and cheat sheets.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  We aim to provide developers with easily accessible, comprehensive cheat sheets 
                  to streamline their workflow and boost productivity.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
                <p className="text-gray-600">
                  Curated collections of cheat sheets covering various programming languages, 
                  frameworks, and development tools.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Community</h2>
                <p className="text-gray-600">
                  Join our growing community of developers sharing knowledge and 
                  contributing to our collection of resources.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Have questions or suggestions? We&apos;d love to hear from you. 
                Feel free to reach out to our team for any inquiries or feedback.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:contact@cheatsheet.com"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

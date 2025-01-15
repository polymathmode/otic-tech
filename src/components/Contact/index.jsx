
const Contact = () => (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-4">Contact us</h1>
      
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let's Start a Business Together</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Do you have a new project idea and need help to make it a reality? Let's do business together and you will never regret you did.
        </p>
      </div>
  
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Your message"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors duration-300">
            SEND
          </button>
        </form>
      </div>
    </div>
  );


  export default Contact
  
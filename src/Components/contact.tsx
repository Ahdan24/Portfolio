const contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md px-8 py-6 mx-auto bg-gray-700 rounded-lg bg-opacity-35 shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-2">Contact me</h3>
        <p className="text-center text-white mb-6">
          Cultivating Connections: Reach Out And Connect
        </p>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-emerald-500 bg-opacity-50 text-white rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-emerald-500 bg-opacity-50 text-white rounded-md focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 bg-emerald-500 bg-opacity-50 text-white rounded-md focus:outline-none"/>
            <select className="w-full px-4 py-2 bg-emerald-500 bg-opacity-50 text-white rounded-md focus:outline-none">
              <option>Build server</option>
              <option>Maintenance Web</option>
              <option>Build Profile Company</option>
            </select>
          </div>

          <textarea
            placeholder="Project Details..."
            className="w-full h-24 px-4 py-2 bg-emerald-500 bg-opacity-50 text-white rounded-md focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray-8 hover:bg-emerald-500 rounded-md font-semibold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;

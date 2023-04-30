export default function ContactUs() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please fill the contact form.
          </p>
        </div>
        <div className="lg:max-w-xl mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className=" w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className=" w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 block"
                >
                  Task ID
                </label>
                <label className="leading-2 text-xs text-gray-400">
                  This may help us find your task faster.
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className=" w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <span className="leading-4 py-3 text-xs text-gray-500">
              Field marked with <span className="text-red-500">*</span> are
              required.
            </span>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-[color:var(--theme)] rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

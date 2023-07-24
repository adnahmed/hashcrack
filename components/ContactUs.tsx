export default function ContactUs() {
    return (
        <section className="body-font relative text-gray-600">
            <div className="container mx-auto items-center py-4">
                <div className="mb-2 flex w-full flex-col text-center">
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">Please fill the contact form.</p>
                </div>
                <div className="mx-5 lg:max-w-xl">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="relative">
                                <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
                            </div>
                        </div>
                        <div className="w-full py-2">
                            <div className="relative">
                                <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="relative">
                                <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                                    Confirm Email<span className="text-red-500">*</span>
                                </label>
                                <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
                            </div>
                        </div>
                        <div className="w-full py-2">
                            <div className="relative">
                                <label htmlFor="email" className="block text-sm text-gray-600">
                                    Task ID
                                </label>
                                <label className="leading-2 text-xs text-gray-400">This may help us find your task faster.</label>
                                <input type="text" id="task_id" name="task_id" className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="relative">
                                <label htmlFor="message" className="text-sm leading-7 text-gray-600">
                                    Message<span className="text-red-500">*</span>
                                </label>
                                <textarea id="message" name="message" className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea>
                            </div>
                        </div>
                        <span className="py-2 text-xs leading-4 text-gray-500">
                            Fields marked with <span className="text-red-500">*</span> are required.
                        </span>
                        <div className="w-full p-2">
                            <button className="mx-auto flex rounded border-0 bg-[var(--theme)] px-8 py-2 text-lg text-white hover:bg-[var(--theme-bg)] hover:text-[var(--theme)] focus:outline-none">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

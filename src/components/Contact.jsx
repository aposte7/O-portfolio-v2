const Contact = ({ submitted, handleSubmit }) => {
  return (
    <section id="contact">
      <div className="min-h-screen px-4 py-20 text-slate-800 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h2 className="my-20 text-center text-3xl font-bold text-white">
            Contact Me
          </h2>
          <p className="mb-10 text-center text-slate-500">
            Feel free to reach out for collaborations, project inquiries.
          </p>
          <div className="rounded-2xl bg-slate-800/70 p-8 shadow-lg">
            {submitted && (
              <p className="font-semibold text-green-500">
                Thank you! Your message has been sent.
              </p>
            )}
            <form
              name="contact"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border border-slate-300 p-2 text-slate-200 focus:border-sky-600 focus:ring-sky-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border border-slate-300 p-2 text-slate-200 focus:border-sky-600 focus:ring-sky-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border border-slate-300 p-2 text-slate-200 focus:border-sky-600 focus:ring-sky-600"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-sky-500 px-4 py-2 font-semibold text-white transition hover:bg-sky-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

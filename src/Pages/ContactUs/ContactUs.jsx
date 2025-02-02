import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="flex justify-center lg:mt-40 mb-20  items-center min-h-screen bg-[#F8FCFF] p-4">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">First Name *</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Last Name *</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">Job Title *</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Job Title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Company Name *</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Company Name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600">Email *</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Message</label>
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Let us know how we can help you!"
                  rows="4"
                ></textarea>
              </div>
              <p className="text-sm text-gray-600">
                By submitting this form, you confirm that you agree to the
                processing of your personal data by{" "}
                <span className="font-semibold">AnyTech</span> as described in
                the{" "}
                <a href="#" className="text-blue-500 underline">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white p-2 rounded shadow hover:bg-orange-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;

import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-20" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center text-black-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-black-600 mb-12">
          Feel free to reach out to us for inquiries or assistance!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-cream shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-black-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-black-600 mb-6">
              We would love to hear from you! Contact us via any of the channels
              below:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="bx bx-phone text-black text-2xl mr-4"></i>
                <span className="text-black-700">+254 721-772473</span>
              </li>
              <li className="flex items-center">
                <i className="bx bx-envelope text-black text-2xl mr-4"></i>
                <span className="text-black">magicalcontinentltd@outlook.com</span>
              </li>
              <li className="flex items-center">
                <i className="bx bx-map text-black text-2xl mr-4"></i>
                <span className="text-black">
                  Kirichwa Gardens Road, Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Our Location
            </h3>
            <p className="black mb-6">
              Find us at our office or contact us for more details.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.19164414426!2d36.77627532582244!3d-1.2922792237227505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a52a1cbd07d%3A0x794f3b7c1b8f9c38!2sKirichwa%20Gardens%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1692211510117!5m2!1sen!2ske
"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

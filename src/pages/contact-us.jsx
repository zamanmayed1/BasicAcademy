import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#f8f8f8] py-8 min-h-screen">
      <div className="container mx-auto flex justify-center">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions or need assistance, please feel free to
            contact us using the information below.
          </p>
          <p className="text-gray-600 mb-2">Email: example@example.com</p>
          <p className="text-gray-600 mb-2">Phone: +1 (123) 456-7890</p>
          <p className="text-gray-600 mb-6">Address: 123 Main Street, City, Country</p>
          <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-semibold mb-1">Name:</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">Email:</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 font-semibold mb-1">Message:</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

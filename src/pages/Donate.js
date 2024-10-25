import React, { useState } from "react";

function Donate() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically integrate with a payment processor
    console.log("Donation submitted:", { amount, paymentMethod });
    alert(`Thank you for your donation of $${amount}!`);
    setAmount("");
    setPaymentMethod("");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        Donate to Al Kalaam
      </h1>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Your Support Makes a Difference
        </h2>
        <p className="text-gray-600 mb-4">
          Your generous donations help us maintain our mosque, run educational
          programs, and support our community projects. Every contribution, big
          or small, is valuable and appreciated.
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 font-semibold mb-2"
          >
            Donation Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="paymentMethod"
            className="block text-gray-700 font-semibold mb-2"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select a payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Donate Now
        </button>
      </form>

      <section className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Other Ways to Give
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Set up a recurring monthly donation</li>
          <li>Donate stocks or securities</li>
          <li>Include Al Kalaam in your will or estate planning</li>
          <li>Organize a fundraising event</li>
        </ul>
        <p className="mt-4 text-gray-700">
          For more information on these options, please contact our finance
          department at finance@alkalaam.org or call (123) 456-7890.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          How Your Donation Helps
        </h2>
        <ul className="space-y-2 text-gray-600">
          <li>🕌 Mosque maintenance and improvements</li>
          <li>📚 Islamic education programs for all ages</li>
          <li>🍲 Community food bank and meal services</li>
          <li>👥 Youth mentorship and development programs</li>
          <li>🤝 Interfaith dialogue and community outreach</li>
        </ul>
      </section>

      <div className="text-center text-gray-600">
        <p>Al Kalaam is a registered 501(c)(3) non-profit organization.</p>
        <p>All donations are tax-deductible to the extent allowed by law.</p>
      </div>
    </div>
  );
}

export default Donate;

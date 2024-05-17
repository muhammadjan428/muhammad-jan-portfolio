import { useState } from 'react';
import { sendEmail } from '@/lib/email';

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendEmail({
      from: formData.email,
      to: "mjan23925@gmail.com",
      subject: formData.subject,
      body: formData.message,
    });
    setIsSubmitting(false); 
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  

  return (
    <main className="items-center md:w-1/2 md:mt-24 mt-16">
      <form onSubmit={handleSubmit} className="space-y-6 md:p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-xs font-semibold uppercase text-gray-600 mb-2">Your email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs font-semibold uppercase text-gray-600 mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs font-semibold uppercase text-gray-600 mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md h-20"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 text-xl"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Email'}
        </button>
      </form>
    </main>
  );
}

import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_time: '',
    message: '',
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  // HANDLE FIELD CHANGES (TS Safe)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setStatus('Message sent successfully ✅');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_time: '',
        message: '',
        consent: false,
      });

    } catch (error) {
      setStatus('Something went wrong ❌ Please try again.');
    }
  };

  // SUCCESS MESSAGE
  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-4 font-serif">
          Thank You!
        </h3>
        <p className="text-green-700 mb-6">
          We'll contact you soon to confirm your free 15-minute consultation.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-green-600 hover:text-green-800 font-medium"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  // MAIN FORM
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#2B2B2B] mb-6 font-serif text-center">
        Book Your Free 15-Minute Consultation – We'll Call You Back
      </h3>

      <div className="space-y-6">

        {/* NAME */}
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="Enter your full name"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="block text-sm font-medium mb-2">Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="Enter your phone number"
          />
        </div>

        {/* TIME SLOT */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Preferred Consultation Time *
          </label>
          <select
            name="preferred_time"
            required
            value={formData.preferred_time}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          >
            <option value="">Select preferred time</option>
            <option>Morning (8 AM – 12 PM)</option>
            <option>Afternoon (12 PM – 5 PM)</option>
            <option>Evening (5 PM – 8 PM)</option>
            <option>Flexible</option>
          </select>
        </div>

        {/* MESSAGE (Required 🟥) */}
        <div>
          <label className="block text-sm font-medium mb-2">Message *</label>
          <textarea
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="Please describe your request or any specific needs."
          />
        </div>

        {/* CONSENT */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
          />
          <span className="text-sm text-gray-600">
            I agree to be contacted by Linette Nurse regarding my inquiry.
          </span>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={!formData.consent}
          className="w-full bg-[#8B2E2E] text-white py-3 rounded-lg font-semibold"
        >
          Schedule Free Consultation
        </button>

        {/* STATUS MESSAGE */}
        {status && (
          <p className="text-center font-medium mt-3">{status}</p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;

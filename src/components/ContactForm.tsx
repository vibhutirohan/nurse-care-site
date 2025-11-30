import { useState } from 'react';

function ContactForm() {

 const GOOGLE_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSfqmAo7sctthXTDaxM6u4TKFSTF8ul3StYnNqVHK8PCACCB2A/viewform?usp=sharing";


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_time: '',
    message: '',
    consent: false,
  });

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

  // MAIN FORM (now redirects instead of submitting)
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
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

        {/* MESSAGE */}
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

        {/* REDIRECT BUTTON (instead of submit) */}
        <a
          href={GOOGLE_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full block text-center bg-[#8B2E2E] text-white py-3 rounded-lg font-semibold ${
            !formData.consent ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={(e) => {
            if (!formData.consent) {
              e.preventDefault();
            }
          }}
        >
          Fill Google Consultation Form
        </a>

      </div>
    </div>
  );
}

export default ContactForm;

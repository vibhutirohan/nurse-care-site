import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
    message: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

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

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#2B2B2B] mb-6 font-serif text-center">
        Book Your Free 15-Minute Consultation
      </h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#2B2B2B] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2E2E] focus:border-transparent transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#2B2B2B] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2E2E] focus:border-transparent transition-colors"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#2B2B2B] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2E2E] focus:border-transparent transition-colors"
            placeholder="(123) 456-7890"
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-[#2B2B2B] mb-2">
            Preferred Visit Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2E2E] focus:border-transparent transition-colors"
          >
            <option value="">Select preferred time</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
            <option value="evening">Evening (5 PM - 8 PM)</option>
            <option value="overnight">Overnight Care</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#2B2B2B] mb-2">
            Brief Message (Non-sensitive information only)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2E2E] focus:border-transparent transition-colors resize-none"
            placeholder="Tell us briefly about your care needs or any questions you have..."
          />
          <p className="text-xs text-[#6C6C6C] mt-2">
            Please do not include personal health details in this form.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#8B2E2E] border-gray-300 rounded focus:ring-[#8B2E2E]"
          />
          <label htmlFor="consent" className="text-sm text-[#6C6C6C]">
            I agree to be contacted by Linette Nurse regarding my inquiry. *
          </label>
        </div>

        <button
          type="submit"
          disabled={!formData.consent}
          className="w-full bg-[#8B2E2E] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#B85C5C] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Schedule Free Consultation
        </button>
      </div>

      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-sm text-red-700 text-center">
          <strong>⚠️ For emergencies, call 911</strong><br />
          This form is not monitored 24/7. For urgent medical needs, contact emergency services immediately.
        </p>
      </div>
    </form>
  );
}

export default ContactForm;
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

function Contact() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F4F5F7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 font-serif">
              Contact & Free Consultation
            </h1>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto mb-4">
              Ready to discuss your care needs? Schedule your free 15-minute consultation to learn how our in-home nursing services can support you and your family.
            </p>

            {/* LIVE TIMESTAMP */}
            <p className="text-sm text-[#6C6C6C] mt-2">
              🕒: <span className="font-semibold">{currentTime}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Info Panel */}
            <div>
              <h2 className="text-3xl font-bold text-[#2B2B2B] mb-8 font-serif">
                Get In Touch
              </h2>

              <div className="space-y-8">

                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-[#8B2E2E] rounded-full flex items-center justify-center">📞</div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+14758378323" className="text-[#6C6C6C] hover:text-[#8B2E2E]">
                      (475) 837-8323
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-[#8B2E2E] rounded-full flex items-center justify-center">📧</div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:Nursenettiepdn@gmail.com" className="text-[#6C6C6C] hover:text-[#8B2E2E]">
                      Nursenettiepdn@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-[#8B2E2E] rounded-full flex items-center justify-center">📍</div>
                  <div>
                    <h3 className="font-semibold">Service Area</h3>
                    <p className="text-[#6C6C6C]">All Over Connecticut</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-[#8B2E2E] rounded-full flex items-center justify-center">⏰</div>
                  <div>
                    <h3 className="font-semibold">Availability</h3>
                    <p className="text-[#6C6C6C]">
                      Flexible scheduling including evenings, overnight & emergency support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                <p className="text-red-700">
                  ⚠️ <strong>For medical emergencies, call 911 immediately.</strong>
                </p>
              </div>
            </div>

            {/* Google Form Button Instead of Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-[#2B2B2B] mb-6 font-serif text-center">
                Book Your Free 15-Minute Consultation
              </h3>

              <p className="text-gray-600 mb-8 text-center max-w-md">
                Click the button below to fill out our secure consultation form. We will contact you shortly.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfqmAo7sctthXTDaxM6u4TKFSTF8ul3StYnNqVHK8PCACCB2A/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8B2E2E] hover:bg-[#B85C5C] transition text-white font-semibold py-3 px-6 rounded-lg shadow-lg text-center w-full"
              >
                Fill Out Consultation Form
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <a
          href="tel:+14758378323"
          className="block bg-[#8B2E2E] text-white text-center py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-[#B85C5C]"
        >
          Call Now: (475) 837-8323
        </a>
      </div>
    </Layout>
  );
}

export default Contact;

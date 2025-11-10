import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F4F5F7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 font-serif">
              Contact & Free Consultation
            </h1>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto mb-8">
              Ready to discuss your care needs? Schedule your free 15-minute consultation to learn how our in-home nursing services can support you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#2B2B2B] mb-8 font-serif">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8B2E2E] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">Phone</h3>
                    <p className="text-[#6C6C6C] mb-2">
                      <a href="tel:+1234567890" className="hover:text-[#8B2E2E] transition-colors">
                        (475)837-8323
                      </a>
                    </p>
                    <p className="text-sm text-[#6C6C6C]">Available for calls and consultations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8B2E2E] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">Email</h3>
                    <p className="text-[#6C6C6C] mb-2">
                      <a href="mailto:linette@example.com" className="hover:text-[#8B2E2E] transition-colors">
                        Nursenettiepdn@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-[#6C6C6C]">For non-urgent inquiries and scheduling</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8B2E2E] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">Service Area</h3>
                    <p className="text-[#6C6C6C] mb-2">All Over Connecticut</p>
                    
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8B2E2E] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">Availability</h3>
                    <p className="text-[#6C6C6C] mb-2">Flexible scheduling available</p>
                    <p className="text-sm text-[#6C6C6C]">
                      Daytime, evenings, overnights, and emergency response when needed
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">⚠️</div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 mb-2">Emergency Notice</h4>
                    <p className="text-red-700">
                      <strong>For medical emergencies, call 911 immediately.</strong><br />
                      This service is not intended for emergency situations. If you're experiencing a medical emergency, do not use this form - call emergency services right away.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Scheduler Placeholder */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Alternative Scheduling Options
            </h2>
            <p className="text-xl text-[#6C6C6C]">
              Prefer to schedule directly? Use our online calendar or call us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                Online Scheduler
              </h3>
              <p className="text-[#6C6C6C] mb-6">
                Book your consultation directly using our online scheduling system.
              </p>
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8">
                <p className="text-gray-500 text-sm">
                  Calendly/Cal.com integration placeholder<br />
                  (To be configured with actual scheduling service)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                Call Directly
              </h3>
              <p className="text-[#6C6C6C] mb-6">
                Speak with Linette directly to schedule your consultation and discuss your needs.
              </p>
              <a
                href="tel:+1234567890"
                className="inline-block bg-[#8B2E2E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B85C5C] transition-colors shadow-lg"
              >
                Call Now : (475)837-8323
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <a
          href="tel:+1234567890"
          className="block bg-[#8B2E2E] text-white text-center py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-[#B85C5C] transition-colors"
        >
          Call Now: (475)837-8323
        </a>
      </div>
    </Layout>
  );
}

export default Contact;
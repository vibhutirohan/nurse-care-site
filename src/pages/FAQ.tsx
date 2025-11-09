import Layout from '../components/Layout';
import FAQAccordion from '../components/FAQAccordion';
import { Link } from 'react-router-dom';

function FAQ() {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "I primarily serve All over Connecticut surrounding all communities. Please contact me to confirm service availability in your specific area."
    },
    {
      question: "What should I expect during the first visit?",
      answer: "Your first visit is a comprehensive 60-90 minute assessment that includes a complete medical history review, medication reconciliation, vital signs check, and development of a personalized care plan. We'll discuss your specific needs, concerns, and goals for care. This visit helps establish a baseline and ensures all future care is tailored to your unique situation."
    },
    {
      question: "How do the free 15-minute consultations work?",
      answer: "The free consultation is a brief phone or video call where we discuss your care needs, answer any questions you have about my services, and determine if in-home nursing care is right for you. There's no obligation, and it's a great way to get to know me and my approach to care before scheduling your first visit."
    },
    {
      question: "What is your emergency protocol?",
      answer: "For true medical emergencies, always call 911 immediately. My services are not intended for emergency situations. However, I do offer flexible scheduling including overnight care and can provide emergency response when needed as part of a planned care arrangement. During our consultation, we'll discuss appropriate emergency protocols specific to your situation."
    },
    {
      question: "Do you accept insurance?",
      answer: "I work as an out-of-network provider and can provide detailed receipts for insurance reimbursement. All services are eligible for HSA/FSA reimbursement. I'm happy to provide the necessary documentation to help you work with your insurance company for potential reimbursement."
    },
    {
      question: "What makes your pediatric care different?",
      answer: "With over 20 years of pediatric nursing experience, I understand that children have unique needs. I use age-appropriate communication, involve parents in all aspects of care, and can coordinate with schools when necessary. My approach is gentle, patient, and designed to make children feel comfortable and safe during visits."
    },
    {
      question: "How often will I need visits?",
      answer: "Visit frequency depends entirely on your individual needs and care plan. Some patients benefit from weekly visits, others may need bi-weekly or monthly check-ins. During our initial assessment, we'll develop a schedule that works for your health needs, lifestyle, and budget."
    },
    {
      question: "Can you coordinate with my existing healthcare providers?",
      answer: "Absolutely! Coordination with your existing healthcare team is an essential part of my service. I can communicate with your doctors, share visit notes and assessments, and ensure that all aspects of your care are working together effectively. This helps prevent gaps in care and ensures everyone is on the same page."
    },
    {
      question: "What if I need to cancel or reschedule a visit?",
      answer: "I understand that life happens and schedules change. I ask for at least 24 hours notice when possible for cancellations or rescheduling. My goal is to be as flexible as possible while maintaining a schedule that allows me to serve all my patients effectively."
    },
    {
      question: "Do you provide overnight care?",
      answer: "Yes, I offer overnight care as part of my flexible scheduling options. This can include extended monitoring, medication management, or simply providing peace of mind for families during recovery periods. Overnight care is arranged based on specific needs and availability."
    },
    {
      question: "What should I have ready for my first visit?",
      answer: "Please have your current medications (including over-the-counter supplements), a list of your healthcare providers, recent medical records or test results, and any specific questions or concerns you'd like to discuss. Don't worry if you don't have everything - we can work together to gather what's needed."
    },
    {
      question: "How do you ensure patient privacy and confidentiality?",
      answer: "Patient privacy is paramount in my practice. I follow all HIPAA guidelines and maintain strict confidentiality. Information is only shared with your permission and as necessary for your care coordination. All documentation is kept secure, and I'm happy to discuss my privacy practices in detail during our consultation."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F4F5F7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 font-serif">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto mb-8">
              Find answers to common questions about our in-home nursing services, scheduling, and what to expect during your care.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#8B2E2E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B85C5C] transition-colors shadow-lg"
            >
              Still Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-16 bg-red-50 border-t-4 border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-800 mb-4 font-serif">
              Important Emergency Notice
            </h2>
            <p className="text-lg text-red-700 mb-6">
              This service is not intended for medical emergencies. For all medical emergencies, please call 911 immediately.
            </p>
            <p className="text-red-600">
              If you're experiencing chest pain, difficulty breathing, severe bleeding, loss of consciousness, or any other life-threatening symptoms, do not wait - call emergency services right away.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#8B2E2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Don't See Your Question?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            I'm here to help! Schedule a free 15-minute consultation to discuss your specific questions and care needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-white text-[#8B2E2E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#8B2E2E] transition-colors"
            >
              Call Now: (475)837-8323
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <Link
          to="/contact"
          className="block bg-[#8B2E2E] text-white text-center py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-[#B85C5C] transition-colors"
        >
          Free 15-min Consult
        </Link>
      </div>
    </Layout>
  );
}

export default FAQ;
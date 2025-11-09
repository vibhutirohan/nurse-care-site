import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function ChronicCare() {
  const conditions = [
    {
      name: "Diabetes Management",
      description: "Blood sugar monitoring, medication management, dietary guidance, and complication prevention.",
      icon: "🩸"
    },
    {
      name: "Asthma & Respiratory Care",
      description: "Breathing assessments, inhaler technique training, trigger identification, and emergency planning.",
      icon: "🫁"
    },
    {
      name: "COPD Support",
      description: "Oxygen therapy management, breathing exercises, medication compliance, and quality of life improvement.",
      icon: "💨"
    },
    {
      name: "Heart Conditions",
      description: "Cardiac monitoring, medication management, lifestyle modifications, and symptom tracking.",
      icon: "❤️"
    },
    {
      name: "Mental Health Support",
      description: "Medication compliance, emotional support, crisis intervention, and family education.",
      icon: "🧠"
    },
    {
      name: "Other Chronic Conditions",
      description: "Personalized care for various long-term health conditions requiring ongoing management.",
      icon: "🩺"
    }
  ];

  const careComponents = [
    "Regular vital signs monitoring",
    "Medication organization and education",
    "Symptom tracking and documentation",
    "Caregiver and family education",
    "Care plan coordination with physicians",
    "Emergency response planning",
    "Quality of life assessments",
    "Nutritional and hydration support"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F4F5F7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 font-serif">
              Chronic Illness Care — Adults & Pediatrics
            </h1>
            <p className="text-xl text-[#6C6C6C] max-w-4xl mx-auto mb-8">
              Long-term support for individuals managing diabetes, asthma, COPD, heart conditions, and other chronic illnesses. Regular vitals, medication organization, symptom tracking, and caregiver education ensuring peace of mind for your family.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#8B2E2E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B85C5C] transition-colors shadow-lg"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions We Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Conditions We Support
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              Comprehensive care for a wide range of chronic health conditions, tailored to each patient's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{condition.icon}</div>
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                  {condition.name}
                </h3>
                <p className="text-[#6C6C6C] leading-relaxed">
                  {condition.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Components */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6 font-serif">
                Comprehensive Care Approach
              </h2>
              <p className="text-lg text-[#6C6C6C] mb-8">
                Our chronic illness care goes beyond basic monitoring. We provide holistic support that addresses medical needs, family concerns, and quality of life improvements.
              </p>
              <div className="space-y-4">
                {careComponents.map((component, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8B2E2E] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#6C6C6C]">{component}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#B85C5C] to-[#8B2E2E] rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                  <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">Family-Centered Care</h3>
                  <p className="text-[#6C6C6C] mb-4">We believe in caring for the whole family, not just the patient.</p>
                  <div className="text-sm text-[#8B2E2E] font-medium">
                    Adults & Pediatrics • All Ages Welcome
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pediatric Specialization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Specialized Pediatric Care
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              Children with chronic conditions require specialized care that considers their developmental needs and family dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F4F5F7] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🧸</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                Child-Friendly Approach
              </h3>
              <p className="text-[#6C6C6C]">
                Age-appropriate communication and care techniques that help children feel comfortable and safe.
              </p>
            </div>

            <div className="bg-[#F4F5F7] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                Parent Education
              </h3>
              <p className="text-[#6C6C6C]">
                Comprehensive training for parents and caregivers on managing their child's condition at home.
              </p>
            </div>

            <div className="bg-[#F4F5F7] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                School Coordination
              </h3>
              <p className="text-[#6C6C6C]">
                Working with schools and teachers to ensure continuity of care during school hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-[#8B2E2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Ready to Discuss Your Care Needs?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Schedule your free 15-minute consultation to learn how our chronic illness care can support you and your family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-white text-[#8B2E2E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#8B2E2E] transition-colors"
            >
              View Pricing
            </Link>
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

export default ChronicCare;
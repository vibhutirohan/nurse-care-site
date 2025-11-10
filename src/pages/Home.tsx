  import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';

function Home() {
  const services = [
    {
      title: "Skilled Nursing for Chronic Illnesses",
      description: "Long-term support for conditions like diabetes, asthma, COPD, heart conditions, and mental-health-related care needs. Routine vitals, medication routines, symptom tracking, caregiver education.",
      icon: "❤️"
    },
    {
      title: "Post-Surgery Recovery Support",
      description: "Specialized care to help you heal safely at home after surgery. Includes wound care, pain management, mobility assistance, and recovery monitoring.",
      icon: "🏥"
    },
    {
      title: "Feeding Tube Management",
      description: "Expert care for patients with feeding tubes, ensuring proper nutrition and preventing complications. Note: Seizure management services are not provided.",
      icon: "🍼"
    },
    {
      title: "Emotional Support for Families",
      description: "Compassionate support during difficult times, helping families navigate health challenges with confidence and peace of mind.",
      icon: "🤗"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F4F5F7] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6 font-serif leading-tight">
                Compassionate In-Home Medical Care
              </h1>
              <p className="text-xl text-[#6C6C6C] mb-8 leading-relaxed">
                Flexible scheduling, including overnights and emergency response when needed.
              </p>
              
              {/* Service Bullets */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B2E2E] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6C6C6C]">Medication & pain support</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B2E2E] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6C6C6C]">Wound & drain care</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B2E2E] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6C6C6C]">Mobility & fall-risk prevention</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B2E2E] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6C6C6C]">Post-op monitoring & documentation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B2E2E] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6C6C6C]">Education for you and your caregivers</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-[#8B2E2E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B85C5C] transition-colors text-center shadow-lg"
                >
                  Book Free 15-Minute Consult
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-[#8B2E2E] text-[#8B2E2E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8B2E2E] hover:text-white transition-colors text-center"
                >
                  See Services
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#B85C5C] to-[#8B2E2E] rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">👩‍⚕️</div>
                  <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">20+ Years Experience</h3>
                  <p className="text-[#6C6C6C]">Trusted healthcare professional serving families across Connecticut</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              Professional medical care in the comfort of your home, tailored to your unique needs and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6 font-serif">
                Meet Linette
              </h2>
              <p className="text-lg text-[#6C6C6C] mb-6 leading-relaxed">
                Healthcare professional with over 20 years of nursing experience in pediatric nursing, mental health nursing, and chronic-illness care.
              </p>
              <p className="text-lg text-[#6C6C6C] mb-8 leading-relaxed">
                I believe that healing happens best at home, surrounded by family and familiar comforts. My approach combines clinical expertise with genuine compassion to provide the highest quality care for you and your loved ones.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#8B2E2E] font-semibold hover:text-[#B85C5C] transition-colors"
              >
                Learn more about my experience
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="text-5xl mb-4">🩺</div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#6C6C6C]">Pediatric Nursing</span>
                      <span className="text-[#8B2E2E] font-semibold">20+ years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6C6C6C]">Mental Health Care</span>
                      <span className="text-[#8B2E2E] font-semibold">15+ years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6C6C6C]">Chronic Illness Care</span>
                      <span className="text-[#8B2E2E] font-semibold">18+ years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 bg-[#8B2E2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Schedule your free 15-minute consultation to discuss your care needs and how I can help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#8B2E2E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book Free Consultation
          </Link>
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

export default Home;
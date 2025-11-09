    import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      title: "Skilled Nursing for Chronic Illnesses",
      description: "Comprehensive care for long-term health conditions including diabetes, asthma, COPD, and heart conditions. Includes routine vitals, medication management, symptom tracking, and caregiver education.",
      icon: "❤️",
      features: ["Medication management", "Vital signs monitoring", "Symptom tracking", "Caregiver education", "Care plan coordination"]
    },
    {
      title: "Post-Surgery Recovery Support",
      description: "Specialized care to help you heal safely at home after surgery. Includes wound care, pain management, mobility assistance, and recovery monitoring.",
      icon: "🏥",
      features: ["Wound & drain care", "Pain management support", "Mobility assistance", "Recovery monitoring", "Post-op documentation"]
    },
    {
      title: "Feeding Tube Management",
      description: "Expert care for patients with feeding tubes, ensuring proper nutrition and preventing complications. Includes tube maintenance, feeding schedules, and family education.",
      icon: "🍼",
      features: ["Tube maintenance", "Feeding schedules", "Nutrition monitoring", "Complication prevention", "Family training"]
    },
    {
      title: "Emotional Support for Families",
      description: "Compassionate support during difficult times, helping families navigate health challenges with confidence and peace of mind.",
      icon: "🤗",
      features: ["Family counseling", "Emotional guidance", "Stress management", "Communication support", "Resource coordination"]
    },
    {
      title: "Discreet, Compassionate, Professional Care",
      description: "All services provided with the highest level of professionalism, maintaining privacy and dignity while delivering exceptional care.",
      icon: "🌟",
      features: ["Privacy protection", "Dignified care", "Professional standards", "Confidentiality", "Respectful approach"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F4F5F7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 font-serif">
              Comprehensive In-Home Care Services
            </h1>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto mb-8">
              Professional nursing care tailored to your unique needs, delivered in the comfort of your home with flexibility and compassion.
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

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Comprehensive In-Home Care Services
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              Each visit follows your doctor's orders and your personal recovery needs. We integrate medical care and daily support to keep you safe, comfortable, and healing at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                  {service.title}
                </h3>
                <p className="text-[#6C6C6C] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-[#6C6C6C]">
                      <div className="w-1.5 h-1.5 bg-[#8B2E2E] rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Why Choose Linette Nurse
            </h2>
            <p className="text-xl text-[#6C6C6C]">
              Experience, expertise, and compassionate care you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">👩‍⚕️</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                RN with Pediatric & Mental Health Experience
              </h3>
              <p className="text-[#6C6C6C]">
                Over 20 years of specialized nursing experience in pediatric care and mental health support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                Flexible Scheduling
              </h3>
              <p className="text-[#6C6C6C]">
                Available full-time or part-time with flexible scheduling including daytime, evenings, and overnights.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                Comfort of Home
              </h3>
              <p className="text-[#6C6C6C]">
                Professional medical care delivered in the familiar, comfortable environment of your own home.
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
            Schedule your free 15-minute consultation to learn how our services can support your family.
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

export default Services;
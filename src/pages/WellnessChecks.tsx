import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function WellnessChecks() {
  const wellnessServices = [
    {
      title: "Vital Signs Assessment",
      description: "Comprehensive monitoring of blood pressure, heart rate, temperature, and respiratory rate.",
      icon: "🩺"
    },
    {
      title: "Medication Review",
      description: "Complete review of current medications, checking for interactions, compliance, and effectiveness.",
      icon: "💊"
    },
    {
      title: "Fall Risk Screening",
      description: "Assessment of mobility, balance, and home safety to prevent falls and injuries.",
      icon: "🚶‍♀️"
    },
    {
      title: "Nutrition & Hydration Assessment",
      description: "Evaluation of dietary habits, hydration status, and nutritional needs.",
      icon: "🥗"
    },
    {
      title: "Mental Health Check",
      description: "Screening for depression, anxiety, and cognitive changes with appropriate referrals.",
      icon: "🧠"
    },
    {
      title: "Family Updates",
      description: "Regular communication with family members about health status and care recommendations.",
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  const benefits = [
    "Early detection of health changes",
    "Prevention of emergency situations",
    "Medication optimization",
    "Peace of mind for families",
    "Continuity of care coordination",
    "Health education and empowerment"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F4F5F7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 font-serif">
              Family-Centered Wellness Checks
            </h1>
            <p className="text-xl text-[#6C6C6C] max-w-4xl mx-auto mb-8">
              Family-centered visits focused on early detection and prevention. We review medications, assess nutrition and hydration, perform vital checks, and share updates with loved ones.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#8B2E2E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B85C5C] transition-colors shadow-lg"
            >
              Schedule Wellness Check
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Comprehensive Wellness Assessment
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              Each wellness check is thorough yet comfortable, designed to catch potential issues early while promoting overall health and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                  {service.title}
                </h3>
                <p className="text-[#6C6C6C] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6 font-serif">
                The Benefits of Regular Wellness Checks
              </h2>
              <p className="text-lg text-[#6C6C6C] mb-8">
                Regular wellness visits help maintain optimal health and catch potential problems before they become serious. Our family-centered approach ensures everyone stays informed and involved in the care process.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#8B2E2E] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#6C6C6C]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#B85C5C] to-[#8B2E2E] rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">Prevention First</h3>
                  <p className="text-[#6C6C6C] mb-4">Regular wellness checks help prevent health issues before they become emergencies.</p>
                  <div className="text-sm text-[#8B2E2E] font-medium">
                    Early Detection • Peace of Mind • Family Involvement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Who Benefits from Wellness Checks?
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              Our wellness check services are valuable for individuals and families across all life stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F4F5F7] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">👴</div>
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3 font-serif">
                Seniors
              </h3>
              <p className="text-[#6C6C6C] text-sm">
                Regular monitoring for age-related health changes and medication management.
              </p>
            </div>

            <div className="bg-[#F4F5F7] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🧒</div>
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3 font-serif">
                Children
              </h3>
              <p className="text-[#6C6C6C] text-sm">
                Developmental assessments and health monitoring in a comfortable home environment.
              </p>
            </div>

            <div className="bg-[#F4F5F7] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🤱</div>
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3 font-serif">
                New Parents
              </h3>
              <p className="text-[#6C6C6C] text-sm">
                Support and guidance for new families navigating health and wellness concerns.
              </p>
            </div>

            <div className="bg-[#F4F5F7] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3 font-serif">
                Busy Families
              </h3>
              <p className="text-[#6C6C6C] text-sm">
                Convenient home visits that fit into busy schedules without clinic wait times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Options */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Flexible Scheduling Options
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              We work around your schedule to provide convenient, stress-free wellness care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                Daytime Visits
              </h3>
              <p className="text-[#6C6C6C] mb-4">
                Regular business hours for routine wellness checks and assessments.
              </p>
              <div className="text-sm text-[#8B2E2E] font-medium">
                Monday - Friday, 8 AM - 5 PM
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                Evening Hours
              </h3>
              <p className="text-[#6C6C6C] mb-4">
                After-work and after-school appointments for busy families.
              </p>
              <div className="text-sm text-[#8B2E2E] font-medium">
                Weekday evenings available
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
                Regular Schedule
              </h3>
              <p className="text-[#6C6C6C] mb-4">
                Weekly, bi-weekly, or monthly visits based on your needs.
              </p>
              <div className="text-sm text-[#8B2E2E] font-medium">
                Customized frequency
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#8B2E2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Schedule your free 15-minute consultation to discuss how regular wellness checks can benefit you and your family.
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

export default WellnessChecks;
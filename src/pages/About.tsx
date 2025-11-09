import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function About() {
  const qualifications = [
    {
      title: "Registered Nurse (RN)",
      description: "Licensed registered nurse with current certification and continuing education.",
      icon: "🩺"
    },
    {
      title: "Pediatric Nursing Experience",
      description: "Specialized training and 20+ years of experience caring for children of all ages.",
      icon: "🧸"
    },
    {
      title: "Mental Health Nursing",
      description: "Expertise in mental health support and crisis intervention for patients and families.",
      icon: "🧠"
    },
    {
      title: "Chronic Illness Management",
      description: "Extensive experience managing complex chronic conditions across all age groups.",
      icon: "❤️"
    }
  ];

  const values = [
    {
      title: "Compassionate Care",
      description: "Every interaction is guided by empathy, understanding, and genuine concern for your well-being.",
      icon: "💝"
    },
    {
      title: "Family-Centered Approach",
      description: "We believe in caring for the whole family, not just the patient, ensuring everyone feels supported.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Professional Excellence",
      description: "Maintaining the highest standards of nursing practice with ongoing education and certification.",
      icon: "⭐"
    },
    {
      title: "Personalized Care",
      description: "Every care plan is tailored to your unique needs, preferences, and doctor's orders.",
      icon: "🎯"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F4F5F7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 font-serif">
                Meet Linette
              </h1>
              <p className="text-xl text-[#6C6C6C] mb-8 leading-relaxed">
                Healthcare professional with over 20 years of nursing experience in pediatric, mental health, and chronic illness care. Dedicated to empowering families through compassionate, at-home medical support.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#8B2E2E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B85C5C] transition-colors shadow-lg"
              >
                Schedule Free Consultation
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#B85C5C] to-[#8B2E2E] rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">👩‍⚕️</div>
                  <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-4 font-serif">Linette</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[#6C6C6C]">Total Experience</span>
                      <span className="text-[#8B2E2E] font-semibold">20+ years</span>
                    </div>
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

      {/* My Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              My Story
            </h2>
            <p className="text-xl text-[#6C6C6C]">
              A passion for nursing that began with a simple belief: healing happens best at home.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-[#F4F5F7] rounded-2xl p-8 md:p-12">
              <p className="text-lg text-[#6C6C6C] mb-6 leading-relaxed">
                My journey in nursing began over two decades ago with a simple but powerful belief: that healing happens best when people are surrounded by the comfort of home and the love of family. This philosophy has guided every aspect of my career and continues to drive my passion for in-home medical care.
              </p>
              
              <p className="text-lg text-[#6C6C6C] mb-6 leading-relaxed">
                Throughout my 20+ years as a registered nurse, I've had the privilege of working in various healthcare settings, but I've always been drawn to the intimate, personalized care that's possible in the home environment. My specialization in pediatric and mental health nursing has taught me that every patient whether a child managing asthma or an adult recovering from surgery and deserves care that honors their unique needs and circumstances.
              </p>

              <p className="text-lg text-[#6C6C6C] mb-6 leading-relaxed">
                What sets my practice apart is the understanding that when we care for one person, we're really caring for an entire family. I've seen how chronic illness, post-operative recovery, and health challenges affect not just the patient, but everyone who loves them. That's why my approach is always family-centered, ensuring that caregivers feel confident, informed, and supported.
              </p>

              <p className="text-lg text-[#6C6C6C] leading-relaxed">
                Today, I'm proud to offer comprehensive in-home nursing services that combine clinical expertise with genuine compassion. Whether it's managing complex chronic conditions, providing post-surgical care, or conducting regular wellness checks, my goal is always the same: to help you and your loved ones live healthier, more comfortable lives in the place you call home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Professional Qualifications
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              Extensive training and experience across multiple nursing specialties, ensuring comprehensive care for all patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{qual.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3 font-serif">
                      {qual.title}
                    </h3>
                    <p className="text-[#6C6C6C] leading-relaxed">
                      {qual.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              My Core Values
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              The principles that guide every aspect of my nursing practice and patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[#F4F5F7] rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3 font-serif">
                      {value.title}
                    </h3>
                    <p className="text-[#6C6C6C] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Service Area
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              Proudly serving families throughout Connecticut with compassionate in-home care.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <div className="text-5xl mb-6">🗺️</div>
            <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-4 font-serif">
              All Over Connecticut
            </h3>
            
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#8B2E2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Ready to Experience Compassionate Care?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            I'd love to learn about your family's needs and discuss how my services can support your health and well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-white text-[#8B2E2E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#8B2E2E] transition-colors"
            >
              View Services
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

export default About;
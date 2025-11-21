import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Pricing() {
  const pricingTiers = [
    {
      category: "Initial Consultation & Assessment",
      icon: "📋",
      services: [
        {
          name: "Comprehensive Intake & Care Plan Development",
          duration: "60-90 minutes",
          description: "Includes medical history review, medication reconciliation, vitals, and plan of care",
          price: "$175"
        }
      ]
    },
    {
      category: "Routine In-Home Nursing Visits",
      icon: "🩺",
      services: [
        {
          name: "Standard RN Visit (Wellness Check or Chronic Condition Management)",
          duration: "45-80 minutes",
          description: "Regular monitoring and care management",
          price: "$125"
        },
        {
          name: "Extended RN Visit (Complex Needs)",
          duration: "90 minutes",
          description: "Great for post-discharge or new diagnosis",
          price: "$175"
        }
      ]
    },
    {
      category: "Medication Management",
      icon: "💊",
      services: [
        {
          name: "Weekly Medication Setup & Education",
          duration: "30-45 minutes",
          description: "Comprehensive medication organization and teaching",
          price: "$100"
        },
        {
          name: "One-Time Medication Reconciliation",
          duration: "Variable",
          description: "Great for clients recovering from diagnosis",
          price: "$125"
        }
      ]
    },
    {
      category: "Post-Operative Nursing Care",
      icon: "❤️",
      services: [
        {
          name: "Basic Post-Op Recovery Visit",
          duration: "45-80 minutes",
          description: "Essential post-surgical care and monitoring",
          price: "$135"
        },
        {
          name: "Deluxe Post-Op Support Package",
          duration: "3 visits",
          description: "3 visits for clients recovering from cosmetic surgery, orthopedic procedures, etc.",
          price: "$375"
        }
      ]
    },
    {
      category: "Concierge & On-Call RN Services",
      icon: "📞",
      services: [
        {
          name: "On-Call Nurse for 24-hour Support (Phone/Text)",
          duration: "Weekly",
          description: "Phone/text access for health questions & virtual check-ins",
          price: "$250/week"
        },
        {
          name: "Private Duty Hourly Nursing (2-8 hour blocks)",
          duration: "Hourly",
          description: "For high-acuity needs, respite care, or companionship",
          price: "$75-100/hr"
        }
      ]
    }
  ];

  const addOns = [
    { name: "IV Hydration (if certified)", price: "Call for pricing" },
    { name: "Travel Fee (outside 15 miles)", price: "Call for pricing" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F4F5F7] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6 font-serif">
              Transparent Pricing & Insurance
            </h1>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto mb-8">
              Clear, upfront pricing with receipts for HSA/FSA. Out-of-network support available. Contact us for a personalized plan.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Transparent Pricing
            </h2>
            <p className="text-xl text-[#6C6C6C] max-w-3xl mx-auto">
              Transparent pricing with receipts for HSA/FSA. Out-of-network support available. Contact us for a personalized plan.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-[#8B2E2E] text-white px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{tier.icon}</span>
                    <h3 className="text-2xl font-bold font-serif">{tier.category}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    {tier.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex flex-col lg:flex-row lg:items-center lg:justify-between border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                        <div className="flex-1 mb-4 lg:mb-0">
                          <h4 className="text-lg font-semibold text-[#2B2B2B] mb-2">
                            {service.name}
                          </h4>
                          <p className="text-[#6C6C6C] mb-2">{service.description}</p>
                          <p className="text-sm text-[#8B2E2E] font-medium">{service.duration}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-[#8B2E2E]">{service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-4 font-serif">
              Additional Services
            </h2>
            <p className="text-lg text-[#6C6C6C]">
              Optional add-on services available upon request
            </p>
          </div>

          <div className="bg-[#F4F5F7] rounded-2xl p-8">
            <div className="space-y-4">
              {addOns.map((addon, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="text-[#2B2B2B] font-medium">{addon.name}</span>
                  <span className="text-[#8B2E2E] font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-6 font-serif">
                Payment Options
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B2E2E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">Flexible Payment Plans</h3>
                    <p className="text-[#6C6C6C]">Payment plans available for extended care packages. Contact us to discuss options.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-6 font-serif text-center">
                Get Your Personalized Quote
              </h3>
              <div className="space-y-4 text-center">
                <p className="text-[#6C6C6C]">
                  Every family's needs are unique. Schedule a free consultation to discuss your specific requirements and receive a customized care plan with transparent pricing.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-[#8B2E2E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B85C5C] transition-colors shadow-lg w-full"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>
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

export default Pricing;
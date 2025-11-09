import { useState, useEffect } from 'react';

function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Linette provided exceptional care for my elderly mother. Her professionalism and compassion made all the difference during a difficult time.",
      author: "Sarah M.",
      location: "Petoskey, MI"
    },
    {
      quote: "The flexibility in scheduling was exactly what our family needed. Linette worked around our busy lives and provided excellent pediatric care for our son.",
      author: "Michael R.",
      location: "Charlevoix, MI"
    },
    {
      quote: "Having Linette manage my diabetes care at home has been life-changing. She's knowledgeable, reliable, and truly cares about her patients.",
      author: "Dorothy K.",
      location: "Harbor Springs, MI"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="text-center">
          <div className="text-4xl text-[#8B2E2E] mb-6">"</div>
          <blockquote className="text-xl md:text-2xl text-[#2B2B2B] mb-8 leading-relaxed font-serif">
            {testimonials[currentSlide].quote}
          </blockquote>
          <div className="text-[#6C6C6C]">
            <p className="font-semibold">{testimonials[currentSlide].author}</p>
            <p className="text-sm">{testimonials[currentSlide].location}</p>
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#8B2E2E]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;
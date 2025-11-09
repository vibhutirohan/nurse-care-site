interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4 font-serif">
        {title}
      </h3>
      <p className="text-[#6C6C6C] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
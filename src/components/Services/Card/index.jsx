const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white rounded-lg p-6 shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="w-16 h-16 mx-auto bg-pink-50 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-pink-600" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  export default ServiceCard
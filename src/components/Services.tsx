import { FaStethoscope, FaBuilding ,FaPills,FaAmbulance,FaBaby,FaHeart } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: FaStethoscope,
      title: "Consultas Médicas",
      description: "Acceso a consultas con especialistas sin costos adicionales"
    },
    {
      icon: FaBuilding,
      title: "Internación",
      description: "Cobertura completa en los mejores centros médicos"
    },
    {
      icon: FaPills,
      title: "Farmacia",
      description: "Descuentos de hasta 80% en medicamentos"
    },
    {
      icon: FaAmbulance,
      title: "Urgencias",
      description: "Atención de emergencias las 24 horas"
    },
    {
      icon: FaBaby,
      title: "Maternidad",
      description: "Programa integral de acompañamiento"
    },
    {
      icon: FaHeart,
      title: "Estudios",
      description: "Estudios y análisis sin límites"
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos para cuidar tu salud y la de tu familia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
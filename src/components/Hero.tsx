import { FaShieldAlt,FaUsers ,FaClock } from "react-icons/fa";


export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Tu salud es nuestra prioridad
            </h1>
            <p className="text-lg text-gray-600">
              Brindamos cobertura médica integral con los mejores profesionales y centros médicos del país.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Conocer Planes
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
                Más Información
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
              alt="Medical Team"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: FaShieldAlt,
              title: "Cobertura Total",
              description: "Protección integral para ti y tu familia"
            },
            {
              icon: FaUsers,
              title: "Red de Especialistas",
              description: "Acceso a los mejores profesionales"
            },
            {
              icon: FaClock,
              title: "Atención 24/7",
              description: "Estamos siempre disponibles para ti"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <item.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";


export default function Contact() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactanos</h2>
            <p className="text-gray-600 mb-8">
              Estamos aquí para responder tus consultas. Completa el formulario y nos pondremos en contacto contigo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaSquarePhone className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-600">0800-555-1234</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MdEmail className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contacto@medicare.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <FiMapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Dirección</h3>
                  <p className="text-gray-600">Av. Principal 1234, Ciudad</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6 bg-gray-50 p-8 rounded-xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
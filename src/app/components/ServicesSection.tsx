import { FaEye, FaGlasses, FaUserMd, FaHandHoldingMedical } from 'react-icons/fa'

const ServicesSection = () => {
  const services = [
    {
      icon: <FaUserMd className="text-4xl text-purple-600 mb-4" />,
      title: "Consultation",
      description: "Examens complets de la vue avec des équipements de dernière génération pour diagnostiquer et prévenir les troubles visuels."
    },
    {
      icon: <FaEye className="text-4xl text-purple-600 mb-4" />,
      title: "Thérapie visuelle",
      description: "Programmes personnalisés de rééducation visuelle pour améliorer les capacités visuelles et traiter les dysfonctionnements."
    },
    {
      icon: <FaGlasses className="text-4xl text-purple-600 mb-4" />,
      title: "Adaptation de lentilles",
      description: "Conseils experts et adaptation personnalisée de lentilles de contact pour tous types de corrections visuelles."
    },
    {
      icon: <FaHandHoldingMedical className="text-4xl text-purple-600 mb-4" />,
      title: "Ventes de lunettes",
      description: "Large sélection de montures tendance et verres haute qualité avec conseils personnalisés selon votre style."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mt-8 mb-4">Nos services</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
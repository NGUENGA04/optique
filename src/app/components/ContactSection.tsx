'use client'

import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData)
    alert('Merci pour votre message ! Nous vous contacterons bientôt.')
    setFormData({ nom: '', email: '', telephone: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section À propos */}
          <div id="a-propos" className="mb-16">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-purple-600 mb-6">À propos</h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  <strong>Pharmacie</strong>
                </p>
                <p>
                  Notre équipe composée de professionnels expérimentés, offre des soins oculaires complets et personnalisés. Nous utilisons les technologies les plus avancées pour diagnostiquer et traiter tous les types de troubles visuels. Notre approche centrée sur le patient nous permet de fournir des solutions adaptées à chaque besoin spécifique, que ce soit pour des examens de routine, des traitements spécialisés ou des conseils en matière d'équipements optiques. Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos services et à accompagner nos patients dans la préservation et l'amélioration de leur santé visuelle tout au long de leur vie.
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nous contacter</h2>
            <p className="text-gray-600">N'hésitez pas à nous contacter pour toute question</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Votre numéro de téléphone"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                placeholder="Votre message..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
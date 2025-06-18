import Image from 'next/image'

const HeroSection = () => {
  return (
    <section id="accueil" className="hero-section pt-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Votre santé visuelle, notre passion
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Expertise professionnelle et technologies de pointe pour prendre soin de vos yeux
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Découvrir nos services
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/img1.jpg"
                alt="Examen ophtalmologique professionnel"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
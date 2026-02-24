export default function AboutTab() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-bee-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-bee-yellow">Lowfin Bee</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn more about our mission and values
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-bee-dark">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Lowfin Bee, we are dedicated to providing innovative solutions that empower 
              businesses to succeed in the digital landscape. Our commitment to quality, 
              integrity, and customer satisfaction drives everything we do.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in building long-term relationships with our clients through 
              exceptional service and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-bee-dark">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality', desc: 'Excellence in everything we deliver' },
              { title: 'Innovation', desc: 'Creative solutions for complex problems' },
              { title: 'Integrity', desc: 'Honest and transparent partnerships' },
              { title: 'Customer Focus', desc: 'Your success is our priority' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-bee-amber rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">★</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-bee-dark">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

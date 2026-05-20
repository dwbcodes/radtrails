import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const galleryImages = [
    { src: '/images/gallery/img-6015.jpg', alt: 'Trail riding' },
    { src: '/images/gallery/kern.jpg', alt: 'Riders on trail' },
    { src: '/images/gallery/china-peak-8.jpg', alt: 'China Peak riders' },
    { src: '/images/gallery/mia-china-peak.jpg', alt: 'Mia at China Peak' },
    { src: '/images/gallery/kyle-vail.jpg', alt: 'Kyle on trail' },
    { src: '/images/gallery/kyle-podium.jpg', alt: 'Kyle podium' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-96 overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(/images/hero-china-peak.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Ride and Develop: Empowering stronger minds, capable riders, and purpose-driven lives through mountain bike racing, trail service, outdoor education, and community.
            </h1>
            <a
              href="https://giv.li/90m43b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#673de6] hover:bg-[#f2f3f6] px-8 py-3 rounded-lg font-semibold transition-colors mt-6"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <p className="text-[#36344d] text-lg leading-relaxed">
          Ride and Develop started because we know what a bike can do. Bikes turn a tough day around. Bikes teach resilience when you crash and get back up. Bikes connect people who might never meet otherwise.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-[#f2f3f6] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1d1e20]">
            Our Mission and Vision
          </h2>
          <p className="text-[#36344d] text-lg leading-relaxed">
            We are dedicated to harnessing the transformative power of outdoor experiences and mountain biking to develop confident athletes, foster mental resilience, build strong communities, and inspire purpose-driven lives. Through structured coaching, competitive racing opportunities, and inclusive community programming, we empower individuals to discover their potential both on and off the bike.
          </p>
        </div>
      </section>

      {/* Langtown Racing Academy Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src="/images/lta-logo.png"
              alt="Langtown Racing Academy"
              width={250}
              height={250}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1d1e20]">
              Welcome to Langtown Racing Academy
            </h2>
            <p className="text-[#36344d] mb-6 text-lg leading-relaxed">
              Discover the thrill of competitive racing with Langtown Racing Academy. Join our elite team and experience the challenge, growth, and camaraderie that comes with competitive mountain bike racing. From beginner racers to elite competitors, we have programs designed to help you reach your full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/racing"
                className="inline-block bg-[#673de6] hover:bg-[#5025d1] text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Join us
              </Link>
              <Link
                href="/racing"
                className="inline-block border-2 border-[#673de6] text-[#673de6] hover:bg-[#ebe4ff] px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                The Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Focused Learning Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1d1e20]">
          Skill Focused Learning
        </h2>
        <p className="text-[#36344d] text-lg mb-12 leading-relaxed max-w-3xl">
          We offer comprehensive coaching and community engagement programs designed to develop riders of all levels.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Coaching Services with Image */}
          <div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
              <Image
                src="/images/gallery/stage5.jpg"
                alt="Coaching Services"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#1d1e20]">
              Coaching Services
            </h3>
            <p className="text-[#36344d] mb-6 leading-relaxed">
              Work with our USA Cycling certified coaches for private lessons, group sessions, training programs, and guided rides. We offer specialized coaching in cross-country, downhill, enduro, and fitness riding.
            </p>
            <Link
              href="/services"
              className="inline-block text-[#673de6] hover:text-[#5025d1] font-semibold"
            >
              View Services & Pricing →
            </Link>
          </div>

          {/* Community Engagement with Image */}
          <div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
              <Image
                src="/images/gallery/joe-and-mia.jpg"
                alt="Community Engagement"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#1d1e20]">
              Community Engagement
            </h3>
            <p className="text-[#36344d] mb-6 leading-relaxed">
              Participate in community trail work, youth programs, and racing events. We're committed to building an inclusive mountain biking community in Ventura County and beyond.
            </p>
            <Link
              href="/support"
              className="inline-block text-[#673de6] hover:text-[#5025d1] font-semibold"
            >
              Get Involved →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#1d1e20]">
          Gallery
        </h2>
        <p className="text-center text-[#727586] mb-12 text-lg">
          Explore our empowering journey through mountain biking and recreation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div key={idx} className="relative h-56 md:h-64 rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="bg-[#673de6] py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Outdoor Community
          </h2>
          <p className="text-lg mb-8 text-[#ebe4ff]">
            Stay updated on events, programs, and trail work opportunities.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-lg text-[#1d1e20] flex-1 max-w-sm focus:outline-none focus:ring-2 focus:ring-[#ebe4ff]"
              required
            />
            <button
              type="submit"
              className="bg-white text-[#673de6] hover:bg-[#f2f3f6] px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

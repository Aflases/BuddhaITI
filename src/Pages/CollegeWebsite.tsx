
import AboutUs from "../component/AboutUs";
import AntiRagging from "../component/AntiRagging";
import ContactUs from "../component/ContactUs";
import Download from "../component/Download";
import Faculties from "../component/Faculties";
import Gallery from "../component/Gallery";
import Header from "../component/Header";
import Trade from "../component/Trade";


const CollegeWebsite = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Home Section - Jumbotron */}
      <section
  id="home"
  className="relative h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${import.meta.env.BASE_URL}/assets/Entrance.jpeg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  }}
>
      
        <div className="relative z-10 text-center md:mt-8 text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4  animate-fade-in">
            Welcome to Buddha Pvt. I.T.I
          </h1>
          
          
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50 scroll-mt-60">
        <AboutUs/>
      </section>

      <section id="trade" className="py-20 bg-white scroll-mt-60">
        <Trade/>
      </section>


      {/* Faculties Section */}
      <section id="faculties" className="py-20 bg-white scroll-mt-60">
        <Faculties/>
      </section>

      <section id ="gallery" className="py-20 bg-gray-50 scroll-mt-60">
        <Gallery/>
      </section>

      <section id="antiragging" className="py-20 bg-white scroll-mt-60">
          <AntiRagging/>
        </section>
      
      <section id="download" className="py-20 bg-white scroll-mt-60">
      <Download/>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gray-50 scroll-mt-60">
        <ContactUs />
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <div>
                <h1 className="text-2xl font-bold text-orange-400">BUDDHA (PVT) Industrial Training Institute</h1>
                <p className="text-lg text-orange-800">Affiliated to National Council for Vocational Training (NCVT)</p>
                <p className="text-sm text-black-500">DGT, Ministry of skill development & Enterpreneurship, Govt. of India</p>
              </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400">© 2025 Buddha ITI College. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollegeWebsite;

import { Mail, Phone, MapPin } from 'lucide-react';
import React, { useState } from 'react'

const ContactUs = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    number:'',
  });
    const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">Get in touch with us for any inquiries or information</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <form  action="https://formsubmit.co/aflasesonami@gmail.com" 
  method="POST"  onSubmit={(e) => {
    if (formData.name === '' || formData.email === '' || formData.message === '' || formData.number === '') {
      e.preventDefault();  // Stop submission if invalid
      alert('Please fill in all fields before submitting.');
    } else {
      alert('Thank you for your inquiry! We will get back to you soon.');
      // No need to reset formData — FormSubmit.co will handle redirection
    }
  }}>
    <input type="hidden" name="_subject" value="New Inquiry from College Website"></input>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
               <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Enter your message or inquiry"
                    required
                  ></textarea>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-orange-600 to-green-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">www.buddhapvtiti@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Phone className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">9199898955</p>
                      <p className="text-gray-600">9223392455</p>
                      <p className='text-gray-600'>7903216852</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">Baisakhawa, Ward No: 1, Nagar Panchayat Kesariya</p>
                      <p className="text-gray-600">East Champaran - 845432</p>
                      <button
                        onClick={() => window.open('https://www.google.com/maps/place/Buddha+ITI,+Baisakhawa/@26.3670947,84.8835424,17z/data=!3m1!4b1!4m6!3m5!1s0x39932a4e4e010c91:0x2aee89c74963752a!8m2!3d26.3670899!4d84.8861173!16s%2Fg%2F11f15h5zfk?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                        className="text-blue-600 hover:text-blue-800 font-semibold mt-2 inline-flex items-center transition-colors duration-300"
                      >
                        View on Google Maps →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3574.744524619277!2d84.8861296!3d26.3671239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39932a4e4e010c91%3A0x2aee89c74963752a!2sBuddha%20ITI%2C%20Baisakhawa!5e0!3m2!1sen!2sin!4v1751745969883!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    className="rounded-lg"
                    allowFullScreen
                    title="Buddha I.T.I College "
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ContactUs
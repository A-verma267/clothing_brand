import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import { MapPin,Phone,Mail, Clock, CheckCircle, Send, } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "e59c2c93-8e5b-4298-84f7-670507c3c556");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      form.reset();
    } else {
      console.log("Error", data);
    }

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", date: "", message: "" });
      setSubmitted(false);
    }, 1000);
  };

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header Section */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
        <p className="text-gray-600 text-base mt-3 max-w-2xl mx-auto px-4">
          We'd love to hear from you. Our team is here to help with any questions or concerns.
        </p>
      </div>

      {/* Hero Image & Store Info */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-16 px-4 max-w-6xl mx-auto'>
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
          className='w-full md:max-w-[300px] lg:max-w-[480px] object-cover rounded-sm shadow-sm' 
          alt="Store front" 
        />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-800'>Our Store</p>
          <p className="text-gray-600">Visit us at our flagship location for a personalized shopping experience with our expert staff.</p>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p>54709 Willms Station, Suite 350</p>
                <p>Washington, DC 20004</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p>Tel: (415) 555-0132</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <p>support@yourstore.com</p>
            </div>
          </div>
          <p className='font-semibold text-xl text-gray-800 mt-2'>Careers at Our Store</p>
          <p className="text-gray-600">Join our passionate team and help us deliver exceptional experiences to our customers.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
            <Phone className="w-8 h-8 mx-auto mb-3 text-gray-700" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Call Us</h3>
            <p className="text-gray-600 text-sm mb-2">Mon-Fri: 9AM - 6PM EST</p>
            <p className="text-gray-800">(415) 555-0132</p>
          </div>
          <div className="border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
            <Mail className="w-8 h-8 mx-auto mb-3 text-gray-700" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Email Us</h3>
            <p className="text-gray-600 text-sm mb-2">We'll respond within 24 hours</p>
            <p className="text-gray-800">support@yourstore.com</p>
          </div>
          <div className="border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
            <Clock className="w-8 h-8 mx-auto mb-3 text-gray-700" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Store Hours</h3>
            <p className="text-gray-600 text-sm">Mon-Sat: 10AM - 8PM</p>
            <p className="text-gray-600 text-sm">Sunday: 11AM - 6PM</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Send Us a Message</h2>
            <p className="text-gray-600">Have a question? Fill out the form below and we'll get back to you soon.</p>
          </div>
          
          {submitted ? (
            <div className="bg-white border border-green-200 rounded-sm p-8 text-center">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your message has been sent successfully. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-600"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-600"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-600 resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-black text-white px-10 py-4 hover:bg-gray-800 transition-all duration-500 flex items-center justify-center gap-2 mx-auto"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

       {/* Map Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Visit Our Store</h2>
          <p className="text-gray-600">Find us on the map and plan your visit</p>
        </div>
        <div className="w-full h-96 bg-gray-200 rounded-sm overflow-hidden shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e5e9d3d%3A0x6b8c5e3a5c5a5a5a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location Map"
          ></iframe>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact

import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import { Shield, Package, ThumbsUp, Heart, Sparkles, Globe, Zap } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Countries Served' },
    { number: '500+', label: 'Products' },
    { number: '99%', label: 'Satisfaction Rate' }
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks to ensure you receive only the finest items that meet our high standards.'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Free Shipping',
      description: 'Enjoy complimentary shipping on all orders over $50. Fast, reliable delivery right to your doorstep.'
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We offer hassle-free returns and dedicated customer support to ensure your satisfaction.'
    }
  ]

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Customer First',
      description: 'We prioritize your needs and satisfaction in everything we do.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Quality Excellence',
      description: 'We curate only the finest products that meet our strict standards.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and ethical sourcing.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Constantly evolving to bring you the latest trends and technology.'
    }
  ]

  const team = [
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      name: 'Sarah Johnson',
      role: 'Founder & CEO'
    },
    {
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&q=80',
      name: 'Michael Chen',
      role: 'Head of Operations'
    },
    {
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
      name: 'Emily Rodriguez',
      role: 'Creative Director'
    }
  ]

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <div className='text-2xl text-center pt-8 border-t px-4'>
        <Title text1={'ABOUT'} text2={'US'} />
        <p className="text-gray-600 text-base mt-3 max-w-2xl mx-auto">
          Discover our story, values, and commitment to delivering exceptional experiences
        </p>
      </div>
      
      {/* Main About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-10 lg:gap-16 px-4 max-w-6xl mx-auto'>
        <img 
          className='w-full md:max-w-[300px] lg:max-w-[450px] object-cover rounded-sm shadow-sm' 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" 
          alt="About us" 
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className="leading-relaxed">
            Founded in 2015, we started with a simple vision: to create a curated shopping experience that combines quality, style, and affordability. What began as a small boutique has grown into a trusted destination for customers worldwide.
          </p>
          <p className="leading-relaxed">
            We believe that shopping should be more than just a transaction—it should be an experience that brings joy and confidence. Every product we offer is carefully selected to ensure it meets our high standards of quality and craftsmanship.
          </p>
          <b className='text-gray-800 text-lg'>Our Mission</b>
          <p className="leading-relaxed">
            To empower individuals through thoughtfully curated products that enhance their lifestyle, while maintaining our commitment to sustainability, ethical practices, and exceptional customer service. We strive to make quality accessible to everyone.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-12 lg:py-16 px-4 my-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-4 text-center px-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
        <p className="text-gray-600 text-base mt-3 max-w-2xl mx-auto">
          We go above and beyond to ensure your shopping experience is exceptional
        </p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-0 mb-16 lg:mb-20 max-w-6xl mx-auto px-4'>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className='border border-gray-200 px-6 lg:px-10 py-10 lg:py-16 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300'
          >
            <div className="text-gray-700">{feature.icon}</div>
            <b className="text-gray-800 text-lg">{feature.title}</b>
            <p className='text-gray-600 leading-relaxed text-sm lg:text-base'>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-12 lg:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 border border-gray-100 hover:border-gray-300 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 rounded-full mb-4 text-gray-700">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-base lg:text-lg">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 lg:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="py-12 lg:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">Our Journey</h2>
            <p className="text-gray-600">Milestones that shaped who we are today</p>
          </div>
          <div className="space-y-8 lg:space-y-12">
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <div className="w-full sm:w-32 font-bold text-gray-800 text-lg lg:text-xl">2015</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2 text-base lg:text-lg">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Started our journey with a small boutique, focusing on quality and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <div className="w-full sm:w-32 font-bold text-gray-800 text-lg lg:text-xl">2018</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2 text-base lg:text-lg">Going Digital</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Launched our online platform, expanding our reach to customers worldwide.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <div className="w-full sm:w-32 font-bold text-gray-800 text-lg lg:text-xl">2021</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2 text-base lg:text-lg">Sustainability Focus</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Committed to eco-friendly practices and partnered with sustainable brands.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <div className="w-full sm:w-32 font-bold text-gray-800 text-lg lg:text-xl">2025</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2 text-base lg:text-lg">Global Expansion</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Serving customers in over 50 countries with a catalog of 500+ curated products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsLetterBox />
      
    </div>
  )
}

export default About

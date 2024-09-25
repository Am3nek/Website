import React from 'react'
import { Mail, Phone } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import logoSrc from '@/assets/Asset5.png'

interface Service {
  id: number;
  title: string;
  description: React.ReactNode;
}

const LandingPage: React.FC = () => {
  const services: Service[] = [
    { 
      id: 1, 
      title: "Smart Homes", 
      description: (
        <>
          <p>Enhance your living space with our cutting-edge smart home solutions. Our products include:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Smart indoor pollution sensors</li>
            <li>Intelligent food storage containers</li>
          </ul>
        </>
      )
    },
    { 
      id: 2, 
      title: "Industrial", 
      description: (
        <>
          <p>Real time sensors for:   </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Meat processing plants</li>
            <li>Storages</li>
            <li>Transportation</li>
          </ul>
        </>
      )
    },
    {   
      id: 3, 
      title: "Safety Equipments ", 
      description: (
        <>
          <p>Safety wearable sensors for workers:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Mining operations</li>
            <li>Biogas plants</li>
            <li>Manufacturing industries</li>
            <li>Landfill sites</li>
          </ul>
        </>
      )
    },
  ]

  return (
    <div className="flex flex-col min-h-screen w-full bg-emerald-50">
      <header className="w-full bg-white border-b border-emerald-200 shadow-sm">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logoSrc}
              alt="ABC Logo"
              width={60}
              height={60}
              className="rounded-full mr-4 shadow-md"
            />
            <h1 className="text-4xl font-bold text-emerald-700">Nanovistar Pvt. Ltd.</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="text-emerald-600 hover:text-emerald-800">Services</a></li>
              <li><a href="#contact" className="text-emerald-600 hover:text-emerald-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full">
        <section className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-20">
          <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">Sensor for daily needs</h2>     
          </div>
        </section>

        <section id="services" className="w-full py-20">
          <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-emerald-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => (
                <Card key={service.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
                  <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-lg">
                    <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-emerald-700">{service.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0 text-center md:text-left md:w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
              <div className="flex items-center justify-center md:justify-start text-lg mb-2">
                <Phone className="mr-2 h-6 w-6" />
                <span>+91 9752571686  </span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-lg">
                <Mail className="mr-2 h-6 w-6" />
                <a href="mailto:info@nanovistar.com" className="hover:underline">info@nanovistar.com </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage          
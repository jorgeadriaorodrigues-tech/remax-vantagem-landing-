
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Home, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-slate-100">
          <Image
            src="https://cdn.abacus.ai/images/0acc6ef5-2c1a-48e3-9a98-4987a695abcd.jpg"
            alt="Paisagem urbana portuguesa"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      </div>
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <Image
                src="/favicon.svg"
                alt="RE/MAX Vantagem"
                width={80}
                height={80}
                className="mx-auto lg:mx-0 mb-4"
              />
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-red-600">Queres uma casa nova</span><br />
              mas ainda tens que<br />
              <span className="text-blue-700">vender a atual?</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-700 mb-8 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Recebe a <span className="text-red-600 font-bold">segurança</span> e{" "}
              <span className="text-blue-700 font-bold">transparência</span> que procuras.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToForm}
              >
                <Home className="mr-2 h-5 w-5" />
                Quero Ajuda Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg"
                onClick={scrollToForm}
              >
                <Shield className="mr-2 h-5 w-5" />
                Saber Mais
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="flex justify-center lg:justify-start gap-8 text-sm text-slate-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-red-600" />
                <span className="font-semibold">AMI 7771</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-blue-600" />
                <span className="font-semibold">100% Seguro</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/0878a056-4701-4f0c-81db-ba62c819f869.png"
                alt="Casal feliz com consultor imobiliário RE/MAX Vantagem"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">100%</div>
                <div className="text-xs text-slate-600">Transparência</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700">24/7</div>
                <div className="text-xs text-slate-600">Suporte</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

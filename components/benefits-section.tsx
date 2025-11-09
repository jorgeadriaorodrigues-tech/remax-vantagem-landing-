
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Shield, 
  Search, 
  HandHeart, 
  Clock, 
  Star, 
  CheckCircle,
  Home,
  TrendingUp,
  Users
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Licença AMI 7771 - Garantimos total segurança e conformidade legal em todas as transações.",
    color: "text-red-600"
  },
  {
    icon: Search,
    title: "Procura Personalizada",
    description: "Encontramos a casa dos teus sonhos com base nas tuas necessidades específicas.",
    color: "text-blue-600"
  },
  {
    icon: HandHeart,
    title: "Venda Facilitada",
    description: "Ajudamos-te a vender a tua casa atual de forma rápida e pelo melhor preço.",
    color: "text-red-600"
  },
  {
    icon: Clock,
    title: "Processo Rápido",
    description: "Coordenamos todo o processo para que possas mudar-te rapidamente.",
    color: "text-blue-600"
  },
  {
    icon: Star,
    title: "Experiência Premium",
    description: "Serviço personalizado com a qualidade RE/MAX que já conheces e confias.",
    color: "text-red-600"
  },
  {
    icon: TrendingUp,
    title: "Melhor Valorização",
    description: "Maximizamos o valor da tua propriedade atual com estratégias comprovadas.",
    color: "text-blue-600"
  }
];

const stats = [
  { icon: Users, number: "1000+", label: "Clientes Satisfeitos", color: "text-red-600" },
  { icon: Home, number: "500+", label: "Casas Vendidas", color: "text-blue-600" },
  { icon: CheckCircle, number: "98%", label: "Taxa de Sucesso", color: "text-red-600" },
  { icon: Clock, number: "30", label: "Dias Médios", color: "text-blue-600" }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Porque Escolher a <span className="text-red-600">RE/MAX</span>{" "}
            <span className="text-blue-700">Vantagem?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos uma solução completa para quem quer comprar uma casa nova 
            sem as complicações de vender a atual primeiro.
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${benefit.color} bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`${stat.color} bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <motion.div 
                    className={`text-3xl font-bold ${stat.color} mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Section */}
        <motion.div 
          className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Confia na Nossa <span className="text-red-600">Experiência</span>
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Com anos de experiência no mercado imobiliário português, a RE/MAX Vantagem 
              especializou-se em resolver o dilema de quem precisa de uma casa nova mas 
              ainda tem que vender a atual.
            </p>
            <div className="space-y-4">
              {[
                "Avaliação gratuita da tua propriedade atual",
                "Estratégia personalizada de venda e compra",
                "Acompanhamento completo em todo o processo",
                "Suporte jurídico e financeiro especializado"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://cdn.abacus.ai/images/39efd887-99f3-4946-9acd-f6b8659db211.png"
                alt="Consultor imobiliário profissional da RE/MAX Vantagem"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

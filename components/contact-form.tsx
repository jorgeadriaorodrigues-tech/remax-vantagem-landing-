
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, User, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  tipoPropriedade: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    tipoPropriedade: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Substitua pelo seu endpoint do Formspree
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblqrqvz";

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nome?.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }
    
    if (!formData.email?.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!formData.telefone?.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (!/^[0-9\s\+\-\(\)]+$/.test(formData.telefone)) {
      newErrors.telefone = "Telefone inválido";
    }

    if (!formData.tipoPropriedade) {
      newErrors.tipoPropriedade = "Tipo de propriedade é obrigatório";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Removido handleSubmit, pois o envio será feito pelo próprio HTML do formulário

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-20 min-h-[60vh] flex items-center justify-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="bg-white/90 rounded-2xl shadow-xl p-8 text-center border border-slate-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Obrigado!
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              O seu formulário foi enviado com sucesso.<br/>
              Nossa equipe entrará em contato com você dentro de 24 horas.
            </p>
            <a href="#contact-form" className="inline-block mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow transition-all duration-300">
              Voltar
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Começa Hoje a Tua <span className="text-red-600">Nova Jornada</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Deixa os teus dados e a nossa equipa especializada entrará em contacto 
            contigo para uma consulta gratuita e personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <motion.div 
            className="lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Porque Milhares Confiam na RE/MAX?
            </h3>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Consulta Gratuita",
                  description: "Avaliação completa da tua situação sem qualquer custo"
                },
                {
                  icon: Phone,
                  title: "Resposta Rápida",
                  description: "Contactamos-te nas próximas 24 horas"
                },
                {
                  icon: User,
                  title: "Consultor Dedicado",
                  description: "Um especialista acompanha todo o teu processo"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="bg-slate-100 rounded-lg p-6">
              <p className="text-sm text-slate-600 mb-2">
                <span className="font-semibold">RE/MAX Vantagem</span> • AMI 7771
              </p>
              <p className="text-xs text-slate-500">
                Licenciado pelo Instituto da Habitação e da Reabilitação Urbana
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-6">
                
                {/* Nome Field */}
                <div>
                  <Label htmlFor="nome" className="text-slate-900 font-medium">
                    Nome Completo *
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="O teu nome completo"
                      required
                      className="pl-12 h-12 border-2 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 border-slate-200"
                    />
                    {errors.nome && (
                      <div className="flex items-center mt-2">
                        <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm text-red-600">{errors.nome}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-slate-900 font-medium">
                    Email *
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="o.teu.email@exemplo.com"
                      required
                      className="pl-12 h-12 border-2 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 border-slate-200"
                    />
                    {errors.email && (
                      <div className="flex items-center mt-2">
                        <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm text-red-600">{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Telefone Field */}
                <div>
                  <Label htmlFor="telefone" className="text-slate-900 font-medium">
                    Telefone *
                  </Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="+351 xxx xxx xxx"
                      required
                      className="pl-12 h-12 border-2 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 border-slate-200"
                    />
                    {errors.telefone && (
                      <div className="flex items-center mt-2">
                        <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm text-red-600">{errors.telefone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tipo de Propriedade Field */}
                <div>
                  <Label htmlFor="tipoPropriedade" className="text-slate-900 font-medium">
                    Tens uma casa para vender? *
                  </Label>
                  <div className="mt-2">
                    <select
                      id="tipoPropriedade"
                      name="tipoPropriedade"
                      required
                      className="h-12 border-2 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 border-slate-200 w-full px-3"
                    >
                      <option value="" disabled selected>Selecione uma opção</option>
                      <option value="apartamento">Sim, tenho um apartamento</option>
                      <option value="moradia">Sim, tenho uma moradia</option>
                      <option value="terreno">Sim, tenho um terreno</option>
                      <option value="comercial">Sim, tenho um espaço comercial</option>
                      <option value="nao">Não, procuro comprar/alugar</option>
                    </select>
                    {errors.tipoPropriedade && (
                      <div className="flex items-center mt-2">
                        <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm text-red-600">{errors.tipoPropriedade}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Quero a Minha Consulta Gratuita
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  Ao enviares este formulário, concordas que a RE/MAX Vantagem te contacte 
                  para fornecer informações sobre os nossos serviços.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

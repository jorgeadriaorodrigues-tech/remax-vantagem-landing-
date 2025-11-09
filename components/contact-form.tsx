
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, User, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Por favor, corrige os erros do formulário");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response?.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setIsSubmitted(true);
      toast.success("Pedido enviado com sucesso! Entraremos em contacto em breve.");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ nome: "", email: "", telefone: "", tipoPropriedade: "" });
        setIsSubmitted(false);
        setErrors({});
      }, 3000);
      
    } catch (error) {
      console.error("Erro ao submeter formulário:", error);
      toast.error("Erro ao enviar formulário. Tenta novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section id="contact-form" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Pedido Enviado com Sucesso!
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Obrigado pelo teu interesse, <span className="font-semibold text-red-600">{formData.nome}</span>! 
              Um dos nossos agentes especializados irá entrar em contacto contigo nas próximas 24 horas para discutir as tuas necessidades em detalhe.
            </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-500">
                  📧 Confirma o teu email: {formData.email}<br />
                  📱 Contacto: {formData.telefone}<br />
                  🏠 Tipo de Propriedade: {
                    formData.tipoPropriedade === "apartamento" ? "Apartamento" :
                    formData.tipoPropriedade === "moradia" ? "Moradia" :
                    formData.tipoPropriedade === "terreno" ? "Terreno" :
                    formData.tipoPropriedade === "comercial" ? "Espaço Comercial" :
                    formData.tipoPropriedade === "nao" ? "Procura comprar/alugar" : ""
                  }
              </p>
            </div>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nome Field */}
                <div>
                  <Label htmlFor="nome" className="text-slate-900 font-medium">
                    Nome Completo *
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="nome"
                      type="text"
                      placeholder="O teu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange("nome")}
                      className={`pl-12 h-12 border-2 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                        errors.nome ? "border-red-300" : "border-slate-200"
                      }`}
                      disabled={isSubmitting}
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
                      type="email"
                      placeholder="o.teu.email@exemplo.com"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      className={`pl-12 h-12 border-2 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                        errors.email ? "border-red-300" : "border-slate-200"
                      }`}
                      disabled={isSubmitting}
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
                      type="tel"
                      placeholder="+351 xxx xxx xxx"
                      value={formData.telefone}
                      onChange={handleInputChange("telefone")}
                      className={`pl-12 h-12 border-2 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                        errors.telefone ? "border-red-300" : "border-slate-200"
                      }`}
                      disabled={isSubmitting}
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
                    <Select
                      value={formData.tipoPropriedade}
                      onValueChange={(value) => {
                        setFormData(prev => ({
                          ...prev,
                          tipoPropriedade: value
                        }));
                        if (errors.tipoPropriedade) {
                          setErrors(prev => ({
                            ...prev,
                            tipoPropriedade: undefined
                          }));
                        }
                      }}
                    >
                      <SelectTrigger className={`h-12 border-2 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                        errors.tipoPropriedade ? "border-red-300" : "border-slate-200"
                      }`}>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartamento">Sim, tenho um apartamento</SelectItem>
                        <SelectItem value="moradia">Sim, tenho uma moradia</SelectItem>
                        <SelectItem value="terreno">Sim, tenho um terreno</SelectItem>
                        <SelectItem value="comercial">Sim, tenho um espaço comercial</SelectItem>
                        <SelectItem value="nao">Não, procuro comprar/alugar</SelectItem>
                      </SelectContent>
                    </Select>
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
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                      A Enviar...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3 h-5 w-5" />
                      Quero a Minha Consulta Gratuita
                    </>
                  )}
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

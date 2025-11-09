
import { Building2, Shield, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">RE/MAX Vantagem</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A tua confiança é a nossa prioridade. Ajudamos-te a encontrar a casa 
              perfeita com total segurança e transparência.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="font-medium">Licença AMI 7771</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contactos</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <a href="tel:+351910043175" className="flex items-center space-x-3 hover:text-white">
                <Phone className="h-4 w-4 text-blue-500" />
                <span>+351 910 043 175</span>
              </a>
              <a href="mailto:jorgerodrigues@remax.pt" className="flex items-center space-x-3 hover:text-white">
                <Mail className="h-4 w-4 text-blue-500" />
                <span>jorgerodrigues@remax.pt</span>
              </a>
            </div>
          </div>

          {/* Legal Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Informação Legal</h3>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                <span className="font-medium text-white">RE/MAX Vantagem</span><br />
                Licença AMI 7771
              </p>
              <p>
                Licenciado pelo Instituto da Habitação e da Reabilitação Urbana, I.P.
              </p>
              <p>
                Todas as transações são realizadas em conformidade com a legislação portuguesa.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} RE/MAX Vantagem. Todos os direitos reservados.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Site gerenciado e promovido pelo agente imobiliário Jorge Rodrigues — RE/MAX Vantagem
          </p>
        </div>
      </div>
    </footer>
  );
}


import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Search, 
  Mail, 
  Calendar, 
  Clock, 
  ChevronDown,
  X,
  AlertCircle
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Supabase Client initialization
const supabaseUrl = 'https://wvvxstgpjodmfxpekhkf.supabase.co';
const supabaseKey = 'sb_publishable_-HQPmdJtVkte0Uxh2d-wkg_tMCSmwZD';
const supabase = createClient(supabaseUrl, supabaseKey);

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-[32px] max-w-lg w-full shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6">
              <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  sourceType: 'cpsi_request' | 'cabinet_request';
  id?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  title = "Solicitar apresentação da Legisfy", 
  subtitle = "Preencha o formulário abaixo para entender como a Legisfy pode ser implementada.",
  sourceType,
  id = "contato"
}) => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    estado_id: '',
    cidade_id: '',
    melhor_dia: '',
    melhor_horario: ''
  });

  const [estados, setEstados] = useState<{id: string, nome: string, sigla: string}[]>([]);
  const [cidades, setCidades] = useState<{id: string, nome: string}[]>([]);
  const [citySearch, setCitySearch] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [loadingCidades, setLoadingCidades] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEstados = async () => {
      const { data } = await supabase
        .from('estados')
        .select('id, nome, sigla')
        .order('nome');
      if (data) setEstados(data);
    };
    fetchEstados();
  }, []);

  useEffect(() => {
    const fetchCidades = async () => {
      if (!formData.estado_id) {
        setCidades([]);
        return;
      }
      setLoadingCidades(true);
      const { data } = await supabase
        .from('cidades')
        .select('id, nome')
        .eq('estado_id', formData.estado_id)
        .order('nome');
      if (data) setCidades(data);
      setLoadingCidades(false);
    };
    fetchCidades();
  }, [formData.estado_id]);

  const filteredCidades = useMemo(() => {
    return cidades.filter(c => 
      c.nome.toLowerCase().includes(citySearch.toLowerCase())
    ).slice(0, 100);
  }, [cidades, citySearch]);

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    }
    return value;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      setFormData(prev => ({ ...prev, [name]: formatWhatsApp(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (name === 'estado_id') {
      setFormData(prev => ({ ...prev, cidade_id: '' }));
      setCitySearch('');
    }
  };

  const handleCitySelect = (cidade: {id: string, nome: string}) => {
    setFormData(prev => ({ ...prev, cidade_id: cidade.id }));
    setCitySearch(cidade.nome);
    setShowCityDropdown(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const selectedEstado = estados.find(e => e.id === formData.estado_id);
      
      const { data, error } = await supabase.functions.invoke('mail-dispatcher', {
        body: {
          type: sourceType,
          nome: formData.nome,
          whatsapp: formData.whatsapp,
          email: formData.email,
          cidade: citySearch,
          estado: selectedEstado?.sigla || '',
          melhor_dia: formData.melhor_dia,
          melhor_horario: formData.melhor_horario,
          source: sourceType
        }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setShowSuccessModal(true);
      
      // Resetar formulário
      setFormData({
        nome: '',
        whatsapp: '',
        email: '',
        estado_id: '',
        cidade_id: '',
        melhor_dia: '',
        melhor_horario: ''
      });
      setCitySearch('');
    } catch (err: any) {
      console.error('Erro ao enviar formulário:', err);
      setSubmitError(err.message || 'Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
  const intervalosHorario = [
    "Manhã (08:00 às 12:00)",
    "Tarde (13:00 às 18:00)",
    "Qualquer horário",
    "Comercial (08:00 às 18:00)"
  ];

  return (
    <>
      <div id={id} className="relative group text-white">
        <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full group-hover:bg-blue-500/15 transition-colors duration-500" />
        
        <div className="text-center mb-8">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">{title}</h2>
           <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
             {subtitle}
           </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[32px] shadow-2xl max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {submitError && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400">
                <AlertCircle className="w-5 h-5" />
                <span>{submitError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Nome completo</label>
                <input required type="text" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Como devemos te chamar?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 transition-all outline-none text-base" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Telefone / WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input required type="text" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="(00) 00000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-blue-500 transition-all outline-none text-base" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-blue-500 transition-all outline-none text-base" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Estado (UF)</label>
                <div className="relative">
                  <select required name="estado_id" value={formData.estado_id} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 transition-all outline-none appearance-none text-base">
                    <option value="" className="bg-gray-900">Selecione o estado</option>
                    {estados.map(est => <option key={est.id} value={est.id} className="bg-gray-900">{est.nome} ({est.sigla})</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3 relative">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cidade</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input type="text" placeholder={loadingCidades ? "Carregando..." : "Buscar cidade..."} value={citySearch} onChange={(e) => { setCitySearch(e.target.value); setShowCityDropdown(true); }} onFocus={() => setShowCityDropdown(true)} disabled={!formData.estado_id} className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-blue-500 transition-all outline-none disabled:opacity-50 text-base" />
                </div>
                <AnimatePresence>
                  {showCityDropdown && filteredCidades.length > 0 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 right-0 top-full mt-2 bg-gray-900 border border-white/20 rounded-xl max-h-64 overflow-y-auto z-50 shadow-2xl">
                      {filteredCidades.map(cidade => (
                        <button key={cidade.id} type="button" onClick={() => handleCitySelect(cidade)} className="w-full text-left px-4 py-3 hover:bg-blue-500/10 transition-colors border-b border-white/5 last:border-0 text-sm">
                          {cidade.nome}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Melhor dia para contato</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select required name="melhor_dia" value={formData.melhor_dia} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-blue-500 transition-all outline-none appearance-none text-base">
                    <option value="" className="bg-gray-900">Selecione o dia</option>
                    {diasSemana.map(dia => <option key={dia} value={dia} className="bg-gray-900">{dia}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Melhor horário</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select required name="melhor_horario" value={formData.melhor_horario} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-blue-500 transition-all outline-none appearance-none text-base">
                    <option value="" className="bg-gray-900">Selecione o intervalo</option>
                    {intervalosHorario.map(horario => <option key={horario} value={horario} className="bg-gray-900">{horario}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-black text-lg rounded-xl hover:bg-gray-200 transition-all transform active:scale-[0.98] shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-8 h-8 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    {title}
                    <Send className="w-6 h-6" />
                  </>
                )}
              </button>
              <p className="text-center text-gray-500 text-sm mt-6 italic">
                Ao enviar o formulário, nossa equipe entrará em contato para apresentar a plataforma.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <div className="text-center">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Recebemos sua solicitação!</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Suas informações foram recebidas com sucesso. <br />
            Enviamos uma confirmação para seu e-mail e nossa equipe entrará em contato em breve para realizar a apresentação.
          </p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all"
          >
            Entendido
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ContactForm;

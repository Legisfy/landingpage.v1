
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  MessageSquare, 
  ChevronDown, 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Zap, 
  Users,
  Calendar,
  Clock,
  Search,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Supabase Client initialization
const supabaseUrl = 'https://wvvxstgpjodmfxpekhkf.supabase.co';
const supabaseKey = 'sb_publishable_-HQPmdJtVkte0Uxh2d-wkg_tMCSmwZD';
const supabase = createClient(supabaseUrl, supabaseKey);

const CPSIPage: React.FC = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchEstados = async () => {
      const { data, error } = await supabase
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
      const { data, error } = await supabase
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
    ).slice(0, 100); // Limit results for performance
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
    
    // Simulate API call for email sending
    console.log('Dados do formulário:', formData);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </motion.button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-xl">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Legisfy</span>
          </div>
          
          <div className="w-20"></div> {/* Spacer */}
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8"
              >
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">Segurança Jurídica</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-8 text-gradient leading-tight"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                CPSI: O Caminho Legal <br /> para Inovação na Câmara
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-xl leading-relaxed mb-12"
              >
                O Contrato Público para Solução Inovadora (CPSI) é a modalidade ideal para Câmaras Municipais que desejam adotar a Legisfy com total transparência e amparo no Marco Legal das Startups.
              </motion.p>

              <div className="space-y-8">
                {[
                  { icon: <Zap className="text-yellow-400" />, title: "Agilidade na Contratação", desc: "Processo simplificado voltado para resolver problemas públicos com tecnologia." },
                  { icon: <Building2 className="text-blue-400" />, title: "Foco no Resultado", desc: "A contratação é baseada nos ganhos de eficiência e modernização da casa." },
                  { icon: <FileText className="text-purple-400" />, title: "Previsão Legal", desc: "Totalmente amparado pela Lei Complementar 182/2021 (Marco Legal das Startups)." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div id="contato" className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl"
              >
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="text-2xl font-bold mb-2">Solicitar apresentação</h2>
                      <p className="text-gray-400 mb-8">Preencha os campos para agendarmos uma conversa institucional.</p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Nome completo</label>
                            <input
                              required
                              type="text"
                              name="nome"
                              value={formData.nome}
                              onChange={handleInputChange}
                              placeholder="Como devemos te chamar?"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-blue-500 transition-colors outline-none"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Telefone / WhatsApp</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input
                                required
                                type="text"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleInputChange}
                                placeholder="(00) 00000-0000"
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 focus:border-blue-500 transition-colors outline-none"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-400">E-mail</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                              required
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="seu@email.com"
                              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 focus:border-blue-500 transition-colors outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Estado (UF)</label>
                            <div className="relative">
                              <select
                                required
                                name="estado_id"
                                value={formData.estado_id}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-blue-500 transition-colors outline-none appearance-none"
                              >
                                <option value="" className="bg-gray-900">Selecione o estado</option>
                                {estados.map(est => (
                                  <option key={est.id} value={est.id} className="bg-gray-900">
                                    {est.nome} ({est.sigla})
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                            </div>
                          </div>
                          
                          <div className="space-y-2 relative">
                            <label className="text-sm font-medium text-gray-400">Cidade</label>
                            <div className="relative">
                              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input
                                type="text"
                                placeholder={loadingCidades ? "Carregando..." : "Buscar cidade..."}
                                value={citySearch}
                                onChange={(e) => {
                                  setCitySearch(e.target.value);
                                  setShowCityDropdown(true);
                                }}
                                onFocus={() => setShowCityDropdown(true)}
                                disabled={!formData.estado_id}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 focus:border-blue-500 transition-colors outline-none disabled:opacity-50"
                              />
                            </div>
                            
                            {/* City Dropdown */}
                            <AnimatePresence>
                              {showCityDropdown && filteredCidades.length > 0 && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  className="absolute left-0 right-0 top-full mt-2 bg-gray-900 border border-white/10 rounded-xl max-h-60 overflow-y-auto z-50 shadow-2xl"
                                >
                                  {filteredCidades.map(cidade => (
                                    <button
                                      key={cidade.id}
                                      type="button"
                                      onClick={() => handleCitySelect(cidade)}
                                      className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                    >
                                      {cidade.nome}
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Melhor dia</label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input
                                required
                                type="date"
                                name="melhor_dia"
                                value={formData.melhor_dia}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 focus:border-blue-500 transition-colors outline-none [color-scheme:dark]"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Melhor horário</label>
                            <div className="relative">
                              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input
                                required
                                type="time"
                                name="melhor_horario"
                                value={formData.melhor_horario}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 focus:border-blue-500 transition-colors outline-none [color-scheme:dark]"
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          disabled={isSubmitting}
                          className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all transform active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <div className="w-6 h-6 border-3 border-black/20 border-t-black rounded-full animate-spin" />
                          ) : (
                            <>
                              Solicitar apresentação da Legisfy
                              <Send className="w-5 h-5" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">Solicitação enviada!</h2>
                      <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                        Recebemos seus dados. Nossa equipe institucional entrará em contato em breve para agendar a apresentação.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 mx-auto"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar ao formulário
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      {/* FAQ Section could follow here... */}
    </div>
  );
};

export default CPSIPage;

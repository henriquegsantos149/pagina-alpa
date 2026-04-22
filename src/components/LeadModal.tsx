import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
}

export default function LeadModal({ isOpen, onClose, checkoutUrl }: LeadModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    formacao: '',
    area: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        formacao: '',
        area: ''
      });
      setError('');
    }
  }, [isOpen]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.nome || !formData.email || !formData.telefone || !formData.formacao) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (formData.formacao === 'Sim' && !formData.area) {
      setError('Por favor, informe sua área de formação.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Fire and forget approach to avoid waiting for slow Apps Script response
      fetch('https://script.google.com/macros/s/AKfycbzoQQtPl_TazLAIbacOSLYyq_fCulFa10Dv_Wd1DOR96Xsurd9_HeSKgsv9axxm9l4PTg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          course: 'pós-alpa'
        }),
      });

      // Redirect quickly while the request is being processed in parallel
      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 200);

    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Ocorreu um erro ao enviar os dados. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-white/5">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight font-primary mb-2">
              Falta Pouco!
            </h2>
            <p className="text-[var(--color-brand-light)]/60 font-secondary">
              Preencha os dados abaixo para continuar sua inscrição na Pós-ALPA.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg"
              >
                {error}
              </motion.div>
            )}

            {/* Nome */}
            <div className="space-y-1.5">
              <label htmlFor="nome" className="block text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-widest">
                Nome Completo
              </label>
              <input
                id="nome"
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-widest">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors"
                  placeholder="email@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Telefone */}
              <div className="space-y-1.5">
                <label htmlFor="telefone" className="block text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-widest">
                  Telefone / WhatsApp
                </label>
                <input
                  id="telefone"
                  type="tel"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                />
              </div>
            </div>

            {/* Possui formação? */}
            <div className="space-y-1.5">
              <label htmlFor="formacao" className="block text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-widest">
                Possui formação?
              </label>
              <select
                id="formacao"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors appearance-none cursor-pointer"
                value={formData.formacao}
                onChange={(e) => setFormData({ ...formData, formacao: e.target.value, area: e.target.value === 'Não' ? '' : formData.area })}
              >
                <option value="" className="bg-[#0d1117]">Selecione...</option>
                <option value="Sim" className="bg-[#0d1117]">Sim</option>
                <option value="Não" className="bg-[#0d1117]">Não</option>
              </select>
            </div>

            {/* Área de formação (Conditional) */}
            <AnimatePresence>
              {formData.formacao === 'Sim' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5 overflow-hidden"
                >
                  <label htmlFor="area" className="block text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-widest">
                    Área de formação
                  </label>
                  <input
                    id="area"
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors"
                    placeholder="Sua área de especialidade"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-brand-gradient text-[var(--color-brand-dark)] font-bold py-5 rounded-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(184,204,59,0.3)]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  Continuar para Inscrição
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

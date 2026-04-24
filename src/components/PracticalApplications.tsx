import { motion } from 'framer-motion';

const apps = [
  {
    image: `${import.meta.env.BASE_URL}applications/app_judicial.png?v=2`,
    title: "Perícia Judicial",
    desc: "Atuação estratégica como perito nomeado pelo juiz ou assistente técnico das partes em tribunais."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/app_consultoria.png?v=3`,
    title: "Consultoria Ambiental",
    desc: "Elaboração de estudos de impacto, planos de remediação e condução de processos de licenciamento."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/app_industrial.png?v=2`,
    title: "Setor Industrial",
    desc: "Auditoria interna de conformidade legal e implementação de sistemas de gestão ambiental (ISO)."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/app_fiscalizacao.png?v=2`,
    title: "Fiscalização e Gestão",
    desc: "Atuação em órgãos públicos na análise técnica de licenciamentos e auditorias governamentais."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/app_agronegocio.png?v=2`,
    title: "Agronegócio",
    desc: "Certificações de sustentabilidade, regularização de passivos e auditoria para exportação."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/app_escritorios.png?v=2`,
    title: "Escritórios Jurídicos",
    desc: "Suporte técnico pericial para defesa ou proposição de ações ligadas a danos ambientais."
  }
];

export default function PracticalApplications() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-brand-dark)] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
              Aplicações <span className="text-brand-gradient">Práticas</span>
            </h2>
            <p className="text-[var(--color-brand-light)]/70">Onde e como você poderá aplicar seu conhecimento no dia a dia profissional.</p>
          </div>
          <div className="h-px flex-1 bg-white/10 mb-4 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-brand-primary)] hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-black/20">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-3 font-primary uppercase tracking-wide group-hover:text-[var(--color-brand-secondary)] transition-colors">
                  {app.title}
                </h3>
                <p className="text-[var(--color-brand-light)]/60 font-secondary text-sm md:text-base leading-relaxed">
                  {app.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

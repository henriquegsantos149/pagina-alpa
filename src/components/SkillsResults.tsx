import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Globe, Layers, Map as MapIcon, Database } from 'lucide-react';

const skills = [
  {
    icon: Globe,
    title: "Auditoria Ambiental",
    desc: "Domínio completo de normas ISO 14001 e ISO 19011 para auditoria de conformidade."
  },
  {
    icon: MapIcon,
    title: "Perícia Ambiental",
    desc: "Capacidade de elaboração de laudos periciais com validade jurídica no âmbito judicial e extrajudicial."
  },
  {
    icon: Cpu,
    title: "Licenciamento Ambiental",
    desc: "Gestão técnica de processos de licenciamento em todas as suas etapas (LP, LI e LO)."
  },
  {
    icon: Layers,
    title: "Avaliação de Impactos",
    desc: "Execução e análise de EIA/RIMA e outros estudos de impacto ambiental complexos."
  },
  {
    icon: Database,
    title: "Gestão de Resíduos",
    desc: "Implementação estratégica de PGRS em conformidade com a Política Nacional de Resíduos Sólidos."
  },
  {
    icon: CheckCircle2,
    title: "Geoprocessamento Aplicado",
    desc: "Uso de ferramentas SIG para suporte à perícia, mapeamento de danos e análise de áreas."
  }
];

export default function SkillsResults() {
  return (
    <section className="py-16 md:py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Habilidades e <span className="text-brand-gradient">Resultados Esperados</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto">Desenvolva as competências mais valorizadas pelo mercado de geotecnologias.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 shape-leaf bg-[var(--color-brand-dark)] border border-white/5 hover:border-[var(--color-brand-primary)]/40 transition-all"
            >
              <div className="w-12 h-12 shape-leaf bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-gradient group-hover:text-white transition-all">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-primary uppercase tracking-wide group-hover:text-[var(--color-brand-primary)] transition-colors">
                {skill.title}
              </h3>
              <p className="text-[var(--color-brand-light)]/60 font-secondary leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

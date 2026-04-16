import { motion } from 'framer-motion';

const base = import.meta.env.BASE_URL;

const facultyMembers = [
  {
    name: "Henrique Gonzalez",
    title: "Engenheiro Ambiental (UFRJ)",
    image: `${base}faculty/henrique.png`,
    resume: "Engenheiro Ambiental na UFRJ com parte da graduação na University of Technology de Sydney, Austrália. Especialista em Geotecnologias, já tendo ministrado formações para mais de 70.000 profissionais."
  },
  {
    name: "Rafael Timbola",
    title: "Mestre e Doutor em Engenharia",
    image: `${base}faculty/rafael.png`,
    resume: "Engenheiro ambiental com 14 anos de experiência. Responsável pela empresa O Perito Ambiental, atuando como consultor e professor em diversos cursos de pós-graduação."
  },
  {
    name: "Bruna Balestrin Piaia",
    title: "Doutora em Engenharia Florestal",
    image: `${base}faculty/bruna.png`,
    resume: "Mestre e Doutora pela UFSM com pós-doutorado em Eng. Agrícola. Especialista em Perícia e Auditoria Ambiental com mais de 10 anos de experiência em restauração ecológica."
  },
  {
    name: "Hugo Ferreira",
    title: "Mestre em Gestão de Riscos (UFPA)",
    image: `${base}faculty/hugo.png`,
    resume: "Técnico em Cartografia no SGB. Especialista em Perícia Ambiental, Geoprocessamento e Educação Ambiental, com foco em Gestão de Riscos e Mudanças Climáticas."
  },
  {
    name: "Anelise Gomes da Silva",
    title: "Doutoranda em Ciências Ambientais (USP)",
    image: `${base}faculty/anelise.png`,
    resume: "Mestre em Eng. Ambiental e graduada em Ciências Sociais. Especialista em políticas públicas ambientais, economia ecológica e valoração de serviços ecossistêmicos."
  },
  {
    name: "Relva Beltrão",
    title: "Mestre em Tecnologia Ambiental",
    image: `${base}faculty/relva.png`,
    resume: "Bióloga, auditora SGI e Lixo Zero. Especialista em gestão de resíduos e auditoria ambiental com mais de 15 anos de experiência e criadora do Método PGRS Descomplicado."
  },
  {
    name: "Jéssica Michalak Besen",
    title: "Engenheira Ambiental (PUC-PR)",
    image: `${base}faculty/jessica.png`,
    resume: "Especialista em Segurança do Trabalho. Atua desde 2011 em consultoria com experiência em licenciamento, estudos de impacto ambiental e saneamento."
  }
];

export default function Faculty() {
  return (
    <section id="professores" className="py-16 md:py-24 bg-[var(--color-brand-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Conheça alguns de <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">nossos professores</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto">Aprenda com especialistas de mercado e acadêmicos renomados nas melhores instituições do país.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shape-leaf bg-white/[0.03] backdrop-blur-sm border border-white/20 overflow-hidden hover:border-[var(--color-brand-accent)]/50 transition-all group hover:shadow-[0_0_30px_rgba(184,204,59,0.15)] flex flex-col shadow-lg shadow-black/40"
            >
              {/* Image container must also follow the shape or part of it */}
              <div className="h-64 overflow-hidden relative shrink-0">
                <img 
                  src={member.image} 
                  alt={`${member.name} – Professor da Pós-Graduação em Auditoria, Licenciamento e Perícia Ambiental`} 
                  className="w-full h-full object-cover grayscale-0 md:grayscale opacity-100 md:opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-[var(--color-brand-light)] mb-1 font-primary group-hover:text-[var(--color-brand-primary)] transition-colors">{member.name}</h3>
                    <p className="text-sm text-[var(--color-brand-secondary)] mb-4 font-semibold uppercase tracking-wider">{member.title}</p>
                </div>
                <p className="text-sm text-[var(--color-brand-light)]/60 leading-relaxed border-t border-white/10 pt-4">{member.resume}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: "Perícia Ambiental (Processo e Metodologia)",
    objective: "Apresentar o papel do perito ambiental e as fases de um processo pericial, incluindo coleta de evidências, elaboração de laudos e atuação junto ao Poder Judiciário ou arbitragens.",
    practicalFocus: "Elaboração de laudos periciais em casos reais ou simulados, análise de provas documentais e participação em \"simulações\" de audiências."
  },
  {
    title: "Licenciamento Ambiental",
    objective: "Proporcionar conhecimento aprofundado sobre a legislação ambiental brasileira (e principais convenções internacionais), bem como compreender todas as etapas do licenciamento ambiental.",
    practicalFocus: "Análise de casos de licenciamento, discussão de jurisprudência, elaboração de documentos de forma a atender órgãos reguladores."
  },
  {
    title: "Avaliação de Riscos e Impactos Ambientais",
    objective: "Capacitar para o desenvolvimento e a análise de Estudos de Impacto Ambiental (EIA) e Relatórios de Impacto ao Meio Ambiente (RIMA).",
    practicalFocus: "Elaboração de termos de referência e recomendações de mitigação, aplicação de metodologias de previsão de impactos (checklist, matrizes e mapas temáticos)."
  },
  {
    title: "Fundamentos de controle e prevenção da poluição ambiental",
    objective: "Capacitar o aluno a identificar fontes de poluição ambiental e aplicar estratégias de monitoramento, controle e prevenção para minimizar impactos ambientais.",
    practicalFocus: "Utilização de ferramentas e técnicas para o monitoramento e controle da poluição do ar, água e solo. Aplicação de medidas mitigadoras e remediadoras para conformidade com padrões ambientais."
  },
  {
    title: "Gestão de Resíduos Sólidos",
    objective: "Discutir o gerenciamento de resíduos em todas as etapas (geração, coleta, transporte, tratamento e disposição final), segundo as políticas nacionais e internacionais.",
    practicalFocus: "Criação de planos de gestão de resíduos sólidos para empresas, simulação de cenários e cálculo de custos e benefícios ambientais."
  },
  {
    title: "Geoprocessamento e Sensoriamento Remoto",
    objective: "Capacitar o aluno a utilizar ferramentas de geoprocessamento (SIG) para análises ambientais e confecção de mapas temáticos.",
    practicalFocus: "Uso de softwares (ArcGIS, QGIS, etc.) para análise de dados geoespaciais, elaboração de mapas de risco e identificação de impactos em áreas de influência."
  },
  {
    title: "Aerofotogrametria aplicada à Perícias Ambientais",
    objective: "Capacitar profissionais a utilizar técnicas de aerofotogrametria para coleta, processamento e análise de dados geoespaciais em perícias ambientais, visando identificar e documentar danos, monitorar áreas degradadas e embasar laudos técnicos com precisão científica.",
    practicalFocus: "Processamento de imagens aéreas (obtidas por drones, satélites ou aeronaves) para geração de modelos 3D, ortomosaicos e mapas de alta resolução. Aplicação de softwares especializados na análise de mudanças ambientais, erosão, desmatamento e ocupação irregular. Simulação de casos reais de perícia ambiental, como identificação de passivos ambientais, delimitação de áreas contaminadas e reconstituição de cenários para laudos judiciais."
  },
  {
    title: "Auditoria Ambiental",
    objective: "Entender os objetivos, métodos e requisitos de uma auditoria ambiental, desde a preparação até a emissão de relatórios de conformidade.",
    practicalFocus: "Estudo de normas (ISO 14001, ISO 19011) e realização de auditorias simuladas, com práticas de levantamento de dados em campo e entrevistas."
  },
  {
    title: "Recuperação de Áreas Degradadas",
    objective: "Apresentar técnicas de remediação ambiental e recuperação de áreas contaminadas ou degradadas, abordando tecnologias e custos envolvidos.",
    practicalFocus: "Estudos de caso sobre contaminação do solo e da água, elaboração de Planos de Recuperação de Áreas Degradadas (PRAD)."
  },
  {
    title: "Valoração Econômica de Recursos Naturais e Danos Ambientais",
    objective: "Desenvolver a habilidade de atribuir valor econômico a recursos naturais e calcular os custos de danos ambientais (indenizações, compensações, etc.).",
    practicalFocus: "Aplicação de metodologias de valoração (método do custo de viagem, disposição a pagar, entre outras) em cenários reais ou simulados."
  },
  {
    title: "Elaboração e Contestação de Laudos Ambientais",
    objective: "Capacitar o aluno na redação adequada de laudos, pareceres e relatórios ambientais, bem como na capacidade de contestar e avaliar criticamente documentos produzidos por outras partes.",
    practicalFocus: "Exercícios de escrita de laudos e realização de 'críticas técnicas' a laudos fictícios ou emitidos em processos reais."
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculo" className="py-16 md:py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      {/* background grid again for continuity */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Conteúdo <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Programático</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">11 módulos desenhados para conectar a teoria à prática, com foco absoluto no que o mercado exige.</p>
        </div>

        <div className="space-y-4">
          {modules.map((mod, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-primary)] shadow-[0_0_25px_rgba(184,204,59,0.2)]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/40 shadow-lg shadow-black/40'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 shape-leaf flex items-center justify-center font-bold font-impact text-xl transition-all duration-300 ${isOpen ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(88,174,105,0.4)]' : 'bg-white/5 text-[var(--color-brand-light)]/40 group-hover:bg-white/10'}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className={`text-xl font-bold font-primary uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-light)]'}`}>
                      {mod.title}
                    </h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-light)]/40'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0 md:pl-26 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] mt-2.5 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                        <strong className="text-[var(--color-brand-primary)] uppercase text-xs tracking-widest block mb-1">Objetivo</strong>
                        {mod.objective}
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mt-2.5 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                        <strong className="text-[var(--color-brand-accent)] uppercase text-xs tracking-widest block mb-1">Foco Prático</strong>
                        {mod.practicalFocus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

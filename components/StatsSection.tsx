
import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: "45%", label: "Redução em desperdícios" },
    { value: "3x", label: "Mais velocidade no inventário" },
    { value: "12k+", label: "Usuários ativos" },
    { value: "99.9%", label: "Uptime garantido" }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">{s.value}</div>
              <div className="text-gray-500 font-medium uppercase tracking-widest text-xs md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

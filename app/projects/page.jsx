export default function Projects() {
  const projects = [
    { title: "Modern Konut Projesi", desc: "Enerji verimli akıllı yaşam alanları." },
    { title: "Ticari Ofis Bloğu", desc: "Modüler ve esnek çalışma alanı merkezi." },
    { title: "Villa Tasarım Serisi", desc: "Özel mimari ve premium detaylar." }
  ];

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h1 className="text-4xl font-extrabold mb-6">Projeler</h1>
      <p className="text-lg text-gray-700 mb-8">
        Devam eden ve tamamlanan çalışmalarımızdan bir seçki. Detaylı bilgi için lütfen bizimle iletişime geçin.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map(p => (
          <div key={p.title} className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-600 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

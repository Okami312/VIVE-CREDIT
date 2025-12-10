import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andrei I.",
    role: "Client VIVE CREDIT",
    text: "Proces extrem de rapid și ușor. Am primit aprobarea în câteva minute, iar tot fluxul a fost intuitiv.",
  },
  {
    name: "Maria P.",
    role: "Client VIVE CREDIT",
    text: "Platforma este modernă și ușor de folosit. Mi-au plăcut transparența și lipsa birocrației.",
  },
  {
    name: "George L.",
    role: "Client VIVE CREDIT",
    text: "Experiență mult peste alte IFN-uri. Totul digital, clar și profesionist. Recomand!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-white dark:bg-slate-900 transition">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
          Ce spun clienții noștri
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-center mt-3">
          Experiențe reale de la utilizatorii noștri
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 dark:bg-slate-800 
                         p-8 rounded-2xl shadow-md 
                         border border-slate-200 dark:border-slate-700 
                         transition flex flex-col h-full justify-between"
            >
              <div className="flex flex-col gap-6 h-full justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    “{t.text}”
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white mt-6">
                    {t.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

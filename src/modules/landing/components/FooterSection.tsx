import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="mt-20 bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-300 pt-16 pb-10 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow">
              V
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Vive Credit
            </h3>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs">
            Soluții moderne de creditare, 100% digitale și rapide. Transparență,
            siguranță și flexibilitate pentru toți clienții.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Navigație
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Acasă
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Produse
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Despre noi
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/terms"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Termeni și Condiții
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Politica de Confidențialitate
              </Link>
            </li>
            <li>
              <Link
                to="/cookies"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Politica Cookie-uri
              </Link>
            </li>
            <li>
              <Link
                to="/anpc"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                ANPC / Soluționare litigii
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} Vive Credit. Toate drepturile rezervate.
      </div>
    </footer>
  );
};

export default FooterSection;

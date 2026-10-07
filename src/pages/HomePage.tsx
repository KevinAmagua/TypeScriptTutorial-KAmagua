import { Link } from "react-router-dom";

export const HomePage = () => {
    const modules = [
        { id: 1, 
            title: "Módulo 1",
            desc: "Tipos basicos, inferencia, arrays y tuplas",
            path: "/modulo1",
        },
        { id: 2, 
            title: "Módulo 2",
            desc: "Props opcionales, defaults y useState tipado",
            path: "/modulo2",
        },
    ]
  return (
    <main className="min-h-screen flex flex-col items-center  bg-neutral-950 text-neutral-100">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-500">React con TypeScript</h1>
          <p className="text-gray-400 mb-6">Navega por los módulos para aprender más sobre TypeScript en React.</p>
        </header>

        <nav className="space-y-3">
          {modules.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="group block rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4 transition hover:bg-neutral-800/40 hover:border-blue-500/40 hover:bg-neutral-900"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span>Modulo</span>
                  <h2 className="mt-1 text-lg font-medium text-neutral-100">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <div></div>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
};
import { useEffect, useState } from "react";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    universe: "",
    power: "",
  });

  useEffect(() => {
    async function loadHeroes() {
      try {
        const response = await fetch("http://localhost:3000/heroes");

        if (!response.ok) {
          throw new Error(`ERRO HTTP: ${response.status}`);
        }

        const data = await response.json();
        setHeroes(data);
      } catch (requestError) {
        console.error(requestError);
        setError("Erro ao carregar Heroes");
      } finally {
        setLoading(false);
      }
    }

    loadHeroes();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
            Universo de heróis
          </p>
          <h1 className="mt-2 text-3xl font-bold">Painel de personagens</h1>
          <p className="mt-2 text-slate-400">
            Cadastre e consulte heróis e filmes.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-8">
        {showForm && (
          <form
            className="mt-6 mb-6 grid gap-4 rounded-xl border border-slate-800 bg-slate-900 p-6"
            onSubmit={async (event) => {
              event.preventDefault();

              try {
                const response = await fetch("http://localhost:3000/heroes", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
                });

                if (!response.ok) {
                  throw new Error(`Erro HTTP: ${response.status}`);
                }

                const newHero = await response.json();
                setHeroes((currentHeroes) => [...currentHeroes, newHero]);
                setFormData({ name: "", universe: "", power: "" });
                setShowForm(false);
                setError("");
              } catch (requestError) {
                console.error(requestError);
                setError("Não foi possível cadastrar o herói.");
              }
            }}
          >
            <label className="grid gap-1">
              Nome
              <input
                className="rounded border border-slate-700 bg-slate-950 px-3 py-2"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                required
              />
            </label>

            <label className="grid gap-1">
              Universo
              <input
                className="rounded border border-slate-700 bg-slate-950 px-3 py-2"
                value={formData.universe}
                onChange={(event) =>
                  setFormData({ ...formData, universe: event.target.value })
                }
                required
              />
            </label>

            <label className="grid gap-1">
              Poder
              <input
                className="rounded border border-slate-700 bg-slate-950 px-3 py-2"
                value={formData.power}
                onChange={(event) =>
                  setFormData({ ...formData, power: event.target.value })
                }
                required
              />
            </label>

            <div className="flex gap-3">
              <button
                type="submit"
                className="rounded-lg bg-purple-600 px-4 py-2 font-semibold hover:bg-purple-500"
              >
                Salvar herói
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-lg border border-slate-700 px-4 py-2"
              >
                Cancelar
              </button>
            </div>
          </form>
        )}

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Heróis</h2>
            <p className="mt-1 text-slate-400">Seus personagens cadastrados</p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-purple-600 px-4 py-2 font-semibold hover:bg-purple-500"
            onClick={() => setShowForm(true)}
          >
            Novo herói
          </button>
        </div>

        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="text-slate-400">
            {loading && <p className="text-slate-400">Carregando heróis...</p>}

            {error && <p className="text-red-400">{error}</p>}
            {!loading && !error && heroes.length === 0 && (
              <p className="text-slate-400">Ainda não há heróis cadastrados.</p>
            )}

            {!loading && !error && heroes.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {heroes.map((hero) => (
                  <article
                    key={hero.id}
                    className="rounded-lg border border-slate-700 p-4"
                  >
                    <h3 className="text-lg font-semibold">{hero.name}</h3>
                    <p className="mt-2 text-slate-400">ID: {hero.id}</p>
                    <p className="text-slate-400">Universo: {hero.universe}</p>
                    <p className="text-slate-400">Poder: {hero.power}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

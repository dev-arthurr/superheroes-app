function App() {
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
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Heróis</h2>
            <p className="mt-1 text-slate-400">Seus personagens cadastrados</p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-purple-600 px-4 py-2 font-semibold hover:bg-purple-500"
          >
            Novo herói
          </button>
        </div>

        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">
            A lista de heróis aparecerá aqui.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App;

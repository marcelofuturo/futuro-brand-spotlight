import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/credito-com-garantia-de-imovel")({
  head: () => ({
    meta: [
      { title: "Crédito com Garantia de Imóvel — Futuro" },
      {
        name: "description",
        content:
          "Use seu imóvel como garantia e acesse taxas menores, prazos de até 240 meses e valores de até 60% do imóvel. Processo 100% digital.",
      },
      { property: "og:title", content: "Crédito com Garantia de Imóvel — Futuro" },
      {
        property: "og:description",
        content:
          "Use seu imóvel como garantia e acesse taxas menores, prazos de até 240 meses e valores de até 60% do imóvel.",
      },
    ],
  }),
  component: CreditoPage,
});

function formatBRL(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  const num = Number(digits) / 100;
  return num.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

function CreditoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ContentWithSidebarSimulator />
      <Steps />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Simulator() {
  const [valorImovel, setValorImovel] = useState("");
  const [emprestimo, setEmprestimo] = useState("");
  const [prazo, setPrazo] = useState("180");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-3xl border border-border bg-card p-6 md:p-7 shadow-soft space-y-5"
    >
      <div>
        <h2 className="text-xl font-semibold">Simule seu crédito</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Estimativa rápida, sem compromisso.
        </p>
      </div>

      <div>
        <label htmlFor="cgi-imovel" className="block text-sm font-medium mb-2">
          Valor do imóvel
        </label>
        <input
          id="cgi-imovel"
          inputMode="numeric"
          placeholder="R$ 0,00"
          value={valorImovel}
          onChange={(e) => setValorImovel(formatBRL(e.target.value))}
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta"
        />
      </div>

      <div>
        <label htmlFor="cgi-emprestimo" className="block text-sm font-medium mb-2">
          Empréstimo pretendido
        </label>
        <input
          id="cgi-emprestimo"
          inputMode="numeric"
          placeholder="R$ 0,00"
          value={emprestimo}
          onChange={(e) => setEmprestimo(formatBRL(e.target.value))}
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta"
        />
      </div>

      <div>
        <label htmlFor="cgi-prazo" className="block text-sm font-medium mb-2">
          Prazo: <span className="text-magenta">{prazo} meses</span>
        </label>
        <input
          id="cgi-prazo"
          type="range"
          min={12}
          max={240}
          step={12}
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
          className="w-full accent-magenta"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>12 meses</span>
          <span>240 meses</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-foreground text-background px-6 py-3 font-semibold hover:opacity-90 transition"
      >
        Simular
      </button>
    </form>
  );
}

function ContentWithSidebarSimulator() {
  const advantages = [
    {
      t: "Taxas a partir de 1,07% a.m. + IPCA",
      d: "Uma das melhores condições de empréstimo do mercado.",
    },
    {
      t: "Funciona com financiamento ativo",
      d: "Liquidamos o financiamento atual para você conseguir o novo crédito.",
    },
    {
      t: "Até 240 meses para pagar",
      d: "Prazo maior significa parcelas mais leves — até 20 anos.",
    },
    {
      t: "Crédito de até 60% do imóvel",
      d: "Valores mais altos para os seus projetos.",
    },
    {
      t: "Processo descomplicado",
      d: "Cuidamos de tudo, do início à liberação do dinheiro na sua conta.",
    },
    {
      t: "100% digital",
      d: "Quanto mais digital, mais rápido o dinheiro cai na sua conta.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 pt-12 pb-20 md:pt-16 md:pb-24">
      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        {/* Simulator: top on mobile, right on desktop */}
        <aside className="order-first md:order-last md:col-span-1">
          <div className="md:sticky md:top-24">
            <Simulator />
          </div>
        </aside>

        <div className="md:col-span-2">
          <p className="text-sm font-medium text-magenta uppercase tracking-widest">
            Crédito com Garantia de Imóvel
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05] text-balance lowercase">
            seu imóvel a favor <span className="text-gradient-brand">dos seus planos</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Use seu imóvel como garantia e conquiste as melhores condições do
            mercado: prazos longos, taxas menores e valores altos — sem abrir
            mão do bem.
          </p>

          <h2 className="mt-14 text-2xl md:text-3xl font-bold text-balance">
            Vantagens
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {advantages.map((a, i) => (
              <article
                key={a.t}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-magenta font-bold text-sm tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-balance">{a.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-sm">
                  {a.d}
                </p>
              </article>
            ))}
          </div>

          <h2 className="mt-14 text-2xl md:text-3xl font-bold text-balance">
            O que é o Crédito com Garantia de Imóvel?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Também conhecido como <em>Home Equity</em>, é uma forma de acessar
            condições melhores de empréstimo colocando o imóvel como garantia
            para a instituição financeira. Com isso, você consegue taxas mais
            baixas, prazos de até 20 anos e valores que podem chegar a 60% do
            valor do imóvel — continuando com a propriedade e podendo morar
            nele.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nossas instituições parceiras oferecem condições que se adaptam à
            sua necessidade, incluindo carência de até 180 dias na primeira
            parcela. O processo é 100% digital, e taxas de registro e impostos
            podem ser incorporadas ao saldo devedor — sem precisar desembolsar
            nada para conseguir o crédito.
          </p>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { t: "Simulação", d: "Simulação e análise de crédito." },
    { t: "Documentação", d: "Coleta de documentos para o contrato." },
    { t: "Contrato", d: "Análise e emissão do contrato." },
    { t: "Registro", d: "Registro do contrato em cartório." },
    { t: "Liberação", d: "Liberação dos recursos na sua conta." },
    {
      t: "E tem mais…",
      d: "Alguns parceiros conseguem antecipar a liberação antes do registro.",
    },
  ];

  return (
    <section className="bg-gradient-brand text-cream">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-magenta-soft uppercase tracking-widest">
            Etapas do processo
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Do primeiro contato à liberação.
          </h2>
        </div>
        <ol className="mt-14 grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <li key={s.t}>
              <div className="text-magenta-soft text-sm font-mono">0{i + 1}</div>
              <div className="mt-2 h-px bg-cream/25" />
              <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-cream/75 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-28">
      <div className="rounded-3xl border border-border bg-card p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-balance">
          Vamos conversar?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Um consultor entra em contato para entender seu objetivo e desenhar a
          melhor condição para você.
        </p>
        <Link
          to="/"
          hash="contato"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition"
        >
          Falar com um consultor
        </Link>
      </div>
    </section>
  );
}

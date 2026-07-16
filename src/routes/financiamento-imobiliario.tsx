import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import heroBg from "@/assets/futuro-hero.jpg";

export const Route = createFileRoute("/financiamento-imobiliario")({
  head: () => ({
    meta: [
      { title: "Financiamento Imobiliário — Futuro" },
      {
        name: "description",
        content:
          "Assessoria completa em financiamento imobiliário: análise rápida, várias instituições, uso do FGTS e acompanhamento até a liberação.",
      },
      { property: "og:title", content: "Financiamento Imobiliário — Futuro" },
      {
        property: "og:description",
        content:
          "Assessoria completa em financiamento imobiliário: análise rápida, várias instituições, uso do FGTS e acompanhamento até a liberação.",
      },
    ],
  }),
  component: FinanciamentoPage,
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

function FinanciamentoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroWithSimulator />
      <Advantages />
      <Steps />
      <About />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function HeroWithSimulator() {
  const [valorImovel, setValorImovel] = useState("");
  const [valorFin, setValorFin] = useState("");
  const [prazo, setPrazo] = useState("30");

  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-magenta uppercase tracking-widest">
              Financiamento Imobiliário
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05] text-balance lowercase">
              a chave do seu <span className="text-gradient-brand">próximo capítulo</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-balance leading-relaxed">
              Assessoria completa, na palma da sua mão. Análise em até 24 horas,
              acesso às melhores taxas do mercado e acompanhamento de ponta a
              ponta — sem custo pela assessoria.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-5"
          >
            <div>
              <h2 className="text-2xl font-semibold">Simule seu financiamento</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Preencha os dados para uma estimativa inicial.
              </p>
            </div>

            <div>
              <label htmlFor="valor-imovel" className="block text-sm font-medium mb-2">
                Valor do imóvel
              </label>
              <input
                id="valor-imovel"
                inputMode="numeric"
                placeholder="R$ 0,00"
                value={valorImovel}
                onChange={(e) => setValorImovel(formatBRL(e.target.value))}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta"
              />
            </div>

            <div>
              <label htmlFor="valor-financiamento" className="block text-sm font-medium mb-2">
                Valor do financiamento
              </label>
              <input
                id="valor-financiamento"
                inputMode="numeric"
                placeholder="R$ 0,00"
                value={valorFin}
                onChange={(e) => setValorFin(formatBRL(e.target.value))}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta"
              />
            </div>

            <div>
              <label htmlFor="prazo" className="block text-sm font-medium mb-2">
                Prazo para pagar: <span className="text-magenta">{prazo} anos</span>
              </label>
              <input
                id="prazo"
                type="range"
                min={1}
                max={35}
                value={prazo}
                onChange={(e) => setPrazo(e.target.value)}
                className="w-full accent-magenta"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1 ano</span>
                <span>35 anos</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-foreground text-background px-6 py-3.5 font-semibold hover:opacity-90 transition"
            >
              Simular
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Simulação sem compromisso. Um consultor entra em contato.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const items = [
    {
      t: "Análise em até 24 horas",
      d: "Aprovação rápida para você tomar decisões com segurança.",
    },
    {
      t: "Acesso às melhores taxas",
      d: "Diversas instituições cotadas para encontrar a condição ideal ao seu perfil.",
    },
    {
      t: "Use seu FGTS",
      d: "Cuidamos de todo o processo de saque do FGTS, sem complicação.",
    },
    {
      t: "Até 35 anos para pagar",
      d: "Prazos maiores e até 90% de financiamento. Sujeito a análise.",
    },
    {
      t: "Financie as despesas",
      d: "ITBI e emolumentos de registro podem entrar no crédito.",
    },
    {
      t: "SAC ou PRICE",
      d: "Escolha a tabela que faz mais sentido para você, com transparência.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-magenta uppercase tracking-widest">Vantagens</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
          Feito para simplificar sua conquista.
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <article
            key={it.t}
            className="rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-soft transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-magenta font-bold text-sm tabular-nums">
                0{i + 1}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-balance">{it.t}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{it.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { t: "Simulação", d: "Simulação do crédito, sem compromisso." },
    { t: "Aprovação", d: "Coleta de documentação para aprovação do crédito." },
    { t: "Contratação", d: "Documentos para elaboração e emissão do contrato." },
    { t: "Registro", d: "Suporte na etapa de ITBI e registro, sem custo extra." },
    { t: "Liberação", d: "Solicitação e liberação dos recursos às partes." },
    { t: "Comemoração", d: "Finalização do processo e início do seu sonho." },
  ];

  return (
    <section className="bg-gradient-brand text-cream">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-magenta-soft uppercase tracking-widest">
            Etapas do processo
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Do primeiro passo à chave na mão.
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

function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-28">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-magenta uppercase tracking-widest">
          O que é
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
          O que é o Financiamento Imobiliário?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          É um crédito concedido por instituições financeiras para viabilizar a
          aquisição de imóveis como casas, apartamentos ou terrenos. Muito
          utilizado por quem deseja comprar um imóvel sem dispor do valor
          integral no ato da compra.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          A principal vantagem são os prazos mais longos e as taxas de juros
          mais competitivas — o imóvel fica como garantia no formato de
          alienação fiduciária, o que abre espaço para condições melhores.
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 md:pb-32">
      <div className="rounded-3xl border border-border bg-card p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-balance">
          Ainda tem dúvidas?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Entre em contato e receba uma estimativa clara em até 24 horas úteis.
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

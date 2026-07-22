import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import brazilMap from "@/assets/brazil-map.png";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Futuro" },
      {
        name: "description",
        content:
          "A Futuro transforma o crédito imobiliário em uma experiência simples, transparente e previsível — do primeiro contato à liberação dos recursos.",
      },
      { property: "og:title", content: "Sobre Nós — Futuro" },
      {
        property: "og:description",
        content:
          "Uma plataforma completa de crédito imobiliário: transparência, agilidade e acompanhamento humano do início ao fim.",
      },
    ],
  }),
  component: SobreNosPage,
});

function SobreNosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Missao />
      <Manifesto />
      <Fundadores />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="relative mx-auto max-w-4xl px-5 pt-16 pb-20 md:pt-24 md:pb-28 text-center">
        <div>
          <p className="text-sm font-medium text-magenta uppercase tracking-widest">
            Sobre nós
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05] text-balance lowercase">
            por que a <span className="text-gradient-brand">Futuro</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance leading-relaxed">
            Transformamos uma jornada complexa em uma experiência simples,
            transparente e previsível.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#missao"
              className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Conheça nossa plataforma
            </a>
            <Link
              to="/"
              hash="contato"
              className="inline-flex items-center rounded-full border border-magenta/30 text-magenta px-6 py-3 text-sm font-semibold hover:bg-magenta hover:text-white transition"
            >
              Falar com um consultor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Missao() {
  const valores = [
    { t: "Transparência", d: "Cada etapa explicada com clareza — sem letras miúdas, sem surpresas." },
    { t: "Agilidade", d: "Processos organizados e prazos previsíveis para você decidir com segurança." },
    { t: "Segurança", d: "Um caminho estruturado, com acompanhamento técnico em cada decisão." },
    { t: "Do início ao fim", d: "Da análise de crédito à liberação dos recursos, tudo em um só lugar." },
    { t: "Tecnologia", d: "Uma plataforma que centraliza documentos, status e atualizações em tempo real." },
    { t: "Atendimento humano", d: "Especialistas próximos, que traduzem o financeirês em decisões possíveis." },
  ];

  return (
    <section id="missao" className="mx-auto max-w-6xl px-5 py-24 md:py-28">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-sm font-medium text-magenta uppercase tracking-widest">
            Nossa missão
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Um crédito imobiliário como deveria ser.
          </h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            A Futuro é uma plataforma completa de crédito imobiliário que
            acompanha toda a jornada do financiamento, da análise de crédito à
            liberação dos recursos.
          </p>
          <p>
            Centralizamos todas as etapas em um único lugar para oferecer mais
            transparência, previsibilidade e agilidade. Cada pendência é
            explicada, cada atualização acontece de forma organizada — segurança
            para clientes e parceiros.
          </p>
          <p className="text-foreground font-medium">
            Nosso objetivo é transformar um processo tradicionalmente
            burocrático em uma experiência simples, humana e eficiente.
          </p>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {valores.map((v, i) => (
          <article
            key={v.t}
            className="rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-soft transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-magenta font-bold text-sm tabular-nums">0{i + 1}</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-balance">{v.t}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{v.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-28">
      <div className="rounded-[2rem] border border-border bg-card p-8 md:p-14 lg:p-18">
        <p className="text-sm font-medium text-magenta uppercase tracking-widest">
          Nosso Manifesto
        </p>

        <div className="mt-8 space-y-6 text-xl md:text-2xl text-foreground leading-relaxed text-balance">
          <p>
            Crédito é mais do que viabilizar uma compra. É abrir espaço para
            crescer: dar o primeiro passo, expandir a casa, trocar o carro para
            trabalhar melhor, investir no que aumenta renda, colocar a empresa
            em movimento. É a diferença entre adiar a vida e construir o próximo
            capítulo com intenção.
          </p>
          <p>
            A Futuro existe para transformar esse “sim” em caminho. Para que
            crescimento não dependa de sorte, de silêncio ou de ansiedade. Aqui,
            cada etapa tem nome, cada pendência tem explicação, cada prazo tem
            compromisso de atualização. Previsibilidade não é detalhe: é o que
            dá calma para decidir e seguir.
          </p>
          <p>
            A gente acredita que quem busca crédito não está pedindo favor,
            está escolhendo futuro. E futuro se constrói com confiança, clareza
            e ritmo. A Futuro é isso: um conector de oportunidades que coloca o
            crédito para trabalhar a favor do seu crescimento, com um processo
            humano, seguro e transparente do início ao fim.
          </p>
        </div>

        <div className="mt-12 pt-10 border-t border-border">
          <p className="text-3xl md:text-5xl font-bold text-gradient-brand">
            Futuro.
          </p>
          <p className="mt-3 text-lg md:text-xl font-medium text-foreground">
            Mais crédito, mais Futuro.
          </p>
        </div>
      </div>
    </section>
  );
}

function Fundadores() {
  const founders = [
    {
      name: "Marcelo Roldo",
      role: "Cofundador",
      bio: [
        "Formado em Administração pela Universidade do Estado de Santa Catarina (UDESC) e atualmente cursando MBA em Bancos e Instituições Financeiras pela FGV.",
        "Atua no mercado de crédito imobiliário desde 2019 e já intermediou mais de R$ 500 milhões em financiamentos imobiliários.",
      ],
      initials: "MR",
    },
    {
      name: "Thiago Lima",
      role: "Cofundador",
      bio: [
        "Formado em Gestão Comercial.",
        "Mais de 10 anos de experiência no mercado imobiliário de Florianópolis e atuação no mercado financeiro desde 2013.",
      ],
      initials: "TL",
    },
  ];

  return (
    <section className="bg-gradient-brand text-cream">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-magenta-soft uppercase tracking-widest">
            Fundadores
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Quem constrói a Futuro.
          </h2>
          <p className="mt-6 text-lg text-cream/75 leading-relaxed">
            Uma dupla que une visão de mercado, experiência prática e
            proximidade com o cliente.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {founders.map((f) => (
            <article
              key={f.name}
              className="rounded-3xl bg-cream/[0.04] border border-cream/10 p-8 md:p-10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-5">
                <div
                  aria-hidden
                  className="h-20 w-20 rounded-2xl bg-cream/10 border border-cream/15 flex items-center justify-center text-cream/80 font-semibold text-xl tracking-widest"
                >
                  {f.initials}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{f.name}</h3>
                  <p className="text-sm text-magenta-soft mt-1">{f.role}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-cream/80 leading-relaxed text-[15px]">
                {f.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-28">
      <div className="rounded-3xl border border-border bg-card p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-balance">
          Pronto para começar sua jornada?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Converse com um especialista da Futuro e receba um caminho claro para
          o seu próximo passo.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            hash="contato"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition"
          >
            Falar com um consultor
          </Link>
          <Link
            to="/financiamento-imobiliario"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium hover:bg-secondary transition"
          >
            Ver nossos produtos
          </Link>
        </div>
      </div>
    </section>
  );
}

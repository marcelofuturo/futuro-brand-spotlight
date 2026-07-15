import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/futuro-hero.jpg";
import family from "@/assets/futuro-family.jpg";
import keys from "@/assets/futuro-keys.jpg";
import portrait1 from "@/assets/futuro-portrait-1.jpg";
import portrait2 from "@/assets/futuro-portrait-2.jpg";
import bankLogos from "@/assets/bank-logos.jpg.asset.json";
import logoAsset from "@/assets/logo-pos-site-v2.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Futuro"
      className={`h-7 w-auto object-contain ${className}`}
    />
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <WhyFuturo />
      <Products />
      <Partners />
      <HowItWorks />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const links = [
    ["Por que a Futuro", "#por-que"],
    ["Produtos", "#produtos"],
    ["Como funciona", "#como-funciona"],
    ["Contato", "#contato"],
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Logo className="text-xl" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground transition">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Quero simular
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
          Assessoria de crédito imobiliário
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.02] text-balance lowercase">
          mais crédito,
          <br />
          <span className="text-gradient-brand">mais futuro.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground text-balance">
          Financiamento imobiliário e crédito com garantia de imóvel, guiados por gente de verdade.
          Você sempre sabe o próximo passo, o prazo e o custo antes de decidir —
          com clareza, confiança e ritmo.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition shadow-soft"
          >
            Quero fazer uma simulação
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur px-6 py-3 font-medium hover:bg-card transition"
          >
            Como funciona
          </a>
        </div>

        {/* Clean divider between hero and next section */}
        <div className="mt-16 flex items-center justify-center px-6">
          <div className="h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
}

function WhyFuturo() {
  const items = [
    {
      title: "Acompanhamento de ponta a ponta",
      body: "Cuidamos do processo da simulação até a liberação dos recursos e você acompanha cada etapa — sem custo adicional pela assessoria.",
    },
    {
      title: "Vários bancos, uma jornada só",
      body: "Cotamos a sua operação nas principais instituições do mercado para encontrar a condição que se encaixa no seu perfil.",
    },
    {
      title: "Comunicação que não some",
      body: "Retorno rápido, pendências explicadas e atualização proativa. Aqui, ninguém fica no escuro.",
    },
  ];

  return (
    <section id="por-que" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-magenta uppercase tracking-widest">Por que a Futuro</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
          Clareza que destrava o crédito.
        </h2>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="group relative rounded-3xl border border-border bg-card p-8 hover:-translate-y-1 hover:shadow-soft transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-magenta font-bold text-sm tabular-nums">0{i + 1}</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-balance">{it.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      name: "Financiamento Imobiliário",
      pitch: "A conquista do seu imóvel com um processo guiado, do crédito ao registro.",
      bullets: [
        "Análise inicial em até 24 horas",
        "Cotação em vários bancos parceiros",
        "Use seu FGTS — a gente cuida do resto",
        "Até 420 meses para pagar",
        "ITBI e custos de registro podem entrar",
      ],
    },
    {
      name: "Crédito com Garantia de Imóvel",
      pitch: "Use o valor do seu imóvel para destravar seus projetos, com taxas menores e prazos longos.",
      bullets: [
        "A partir de 1,07% a.m. + IPCA (sujeito a análise)",
        "Até 60% do valor do imóvel",
        "Até 240 meses para pagar",
        "Funciona mesmo com financiamento ativo",
        "Carência de até 180 dias na 1ª parcela",
      ],
    },
  ];

  return (
    <section id="produtos" className="bg-secondary/50 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-magenta uppercase tracking-widest">Nossos produtos</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Financiamento e crédito sob medida.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="relative rounded-3xl bg-card border border-border p-8 md:p-10 flex flex-col"
            >
              <span className="inline-flex self-start text-xs font-mono text-magenta">
                0{i + 1} · Produto
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-balance">{p.name}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.pitch}</p>

              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm">
                    <span
                      aria-hidden
                      className="mt-1 h-4 w-4 rounded-full border border-magenta flex items-center justify-center shrink-0"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="mt-8 inline-flex self-start items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                Saiba mais
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="text-center">
        <p className="text-sm font-medium text-magenta uppercase tracking-widest">
          Instituições parceiras
        </p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-balance">
          Uma cotação em várias das principais instituições do mercado.
        </h2>
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-10">
        <img
          src={bankLogos.url}
          alt="Itaú, Bradesco, Caixa, Pontte e Inter — instituições parceiras da Futuro"
          loading="lazy"
          className="mx-auto w-full max-w-3xl h-auto opacity-80"
        />
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { t: "Simulação", d: "Você envia dados básicos e recebe uma estimativa clara de custos e prazos, sem compromisso." },
    { t: "Aprovação", d: "Coleta de documentos do imóvel e das partes. Você sabe exatamente o que falta." },
    { t: "Contratação", d: "Checklist simples de documentos. Devolutiva com prazo estimado e pendências explicadas." },
    { t: "Liberação", d: "Acompanhamento até a confirmação da liberação. O próximo capítulo começa." },
  ];

  return (
    <section id="como-funciona" className="bg-gradient-brand text-cream">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-magenta-soft uppercase tracking-widest">Como funciona</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Do primeiro contato até a conquista.
          </h2>
        </div>

        <ol className="mt-14 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.t} className="relative">
              <div className="text-magenta-soft text-sm font-mono">
                0{i + 1}
              </div>
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
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Photo collage: one large family moment + one warm detail shot */}
        <div className="md:col-span-6 relative">
          <div className="rounded-[2rem] overflow-hidden aspect-[5/6] shadow-soft">
            <img
              src={family}
              alt="Família em casa, uma tarde comum depois da mudança"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-10 -right-6 md:-right-10 w-48 md:w-60 rounded-2xl overflow-hidden ring-8 ring-background shadow-soft rotate-3">
            <img
              src={keys}
              alt="Chaves passando de mão em mão"
              width={1600}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover aspect-[5/4]"
            />
          </div>
          <div className="absolute -top-5 -left-5 hidden md:flex items-center gap-2 rounded-full bg-background border border-border px-4 py-2 shadow-soft text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
            Um caso real. Um dia comum depois da conquista.
          </div>
        </div>

        <div className="md:col-span-6">
          <p className="text-sm font-medium text-magenta uppercase tracking-widest">Sobre a Futuro</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance leading-[1.05]">
            Quem busca crédito não está pedindo favor, está{" "}
            <span className="text-gradient-brand">escolhendo futuro</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance leading-relaxed">
            Crédito é mais do que viabilizar uma compra. É abrir espaço para crescer —
            dar o primeiro passo, expandir a casa, colocar a vida em movimento.
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-balance leading-relaxed">
            Por aqui, cada etapa tem nome, cada pendência tem explicação e cada prazo tem
            compromisso de atualização. Você nunca fica no escuro.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 text-foreground font-medium border-b border-magenta pb-1 hover:gap-3 transition-all"
          >
            Conheça a nossa história
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "O processo foi muito mais tranquilo do que eu esperava. Sempre soube o que estava acontecendo e o que precisava enviar. A equipe foi presente do início ao fim.",
      name: "Isabella Oliveira",
      role: "Compra do primeiro apê · Florianópolis",
      avatar: portrait1,
    },
    {
      quote:
        "O diferencial é a comunicação. Nenhuma etapa sem resposta, nenhuma pendência sem explicação. Para quem quer evitar surpresas, recomendo muito.",
      name: "Carlos Henrique",
      role: "Crédito com garantia de imóvel · São José",
      avatar: portrait2,
    },
  ];

  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-magenta uppercase tracking-widest">Depoimentos</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Escute de quem já viveu o Futuro.
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            Histórias reais de quem escolheu construir o próximo capítulo com a gente por perto.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="group relative rounded-3xl bg-card border border-border overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 shrink-0 aspect-[4/5] md:aspect-auto md:min-h-[22rem] relative overflow-hidden">
                <img
                  src={t.avatar}
                  alt={`Retrato de ${t.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>
              <div className="p-8 md:p-9 flex flex-col justify-between flex-1">
                <div>
                  <div aria-label="5 estrelas" className="flex gap-1 text-magenta text-lg">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <blockquote className="mt-5 text-base md:text-lg leading-relaxed text-balance">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{t.role}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <div className="md:col-span-2">
          <p className="text-sm font-medium text-magenta uppercase tracking-widest">Contato</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance leading-[1.05]">
            Ainda tem dúvidas?
          </h2>
          <p className="mt-5 text-muted-foreground text-balance">
            Entre em contato e receba uma estimativa clara em até 24 horas.
            Sem custo, sem compromisso.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-muted-foreground">Telefone / WhatsApp</dt>
              <dd className="mt-1 text-lg font-semibold">(48) 99179-4104</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">E-mail</dt>
              <dd className="mt-1 text-lg font-semibold">escrevapara@futuro.com.vc</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Endereço</dt>
              <dd className="mt-1 leading-relaxed">
                Rua Doutor Heitor Blum, 310, Sala 713
                <br />
                Estreito · Florianópolis, SC · 88075-110
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="md:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5"
        >
          <Field label="Nome completo" name="name" placeholder="Como podemos te chamar?" />
          <Field label="Telefone ou WhatsApp" name="phone" placeholder="(00) 00000-0000" />
          <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" />
          <div>
            <label htmlFor="produto" className="block text-sm font-medium mb-2">
              Produto de interesse
            </label>
            <select
              id="produto"
              name="produto"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta"
              defaultValue=""
            >
              <option value="" disabled>Escolha uma opção</option>
              <option>Financiamento Imobiliário</option>
              <option>Crédito com Garantia de Imóvel</option>
              <option>Ainda não sei — quero orientação</option>
            </select>
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              placeholder="Conte um pouco sobre o seu objetivo."
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-foreground text-background px-6 py-3.5 font-semibold hover:opacity-90 transition"
          >
            Enviar mensagem
          </button>
          <p className="text-xs text-muted-foreground text-center">
            A gente responde em até 24 horas úteis.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo className="h-10 w-auto object-contain" />
            <p className="mt-2 text-cream/70 text-sm">Mais crédito, mais futuro.</p>
            <p className="mt-6 text-sm text-cream/60 max-w-sm leading-relaxed">
              Assessoria de crédito imobiliário especializada em Financiamento Imobiliário e
              Crédito com Garantia de Imóvel. Processo humano e transparente.
            </p>

            <p className="mt-6 text-sm text-cream/70 max-w-sm leading-relaxed italic">
              &ldquo;Somos conectores de oportunidades — para o hoje e para o seu futuro.&rdquo;
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream/50">Produtos</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/85">
              <li><a href="#produtos" className="hover:text-magenta transition">Financiamento Imobiliário</a></li>
              <li><a href="#produtos" className="hover:text-magenta transition">Crédito com Garantia</a></li>
              <li><a href="#contato" className="hover:text-magenta transition">Para Parceiros</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream/50">Empresa</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/85">
              <li><a href="#" className="hover:text-magenta transition">Sobre a Futuro</a></li>
              <li><a href="#" className="hover:text-magenta transition">Blog</a></li>
              <li><a href="#contato" className="hover:text-magenta transition">Contato</a></li>
              <li><a href="#" className="hover:text-magenta transition">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Futuro — Todos os direitos reservados.</span>
          <span>futuro.com.vc</span>
        </div>
      </div>
    </footer>
  );
}

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

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").replace(/[-\s]$/, "");
  }
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").replace(/[-\s]$/, "");
}

function Simulator() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    valorImovel: "",
    emprestimo: "",
    prazo: "180",
    financiamentoAtual: "nao",
    consentimento: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.nome.trim()) next.nome = "Informe seu nome completo";
    if (!form.telefone.trim() || form.telefone.replace(/\D/g, "").length < 10) {
      next.telefone = "Informe um telefone válido";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Informe um e-mail válido";
    }
    if (!form.cidade.trim()) next.cidade = "Informe a cidade do imóvel";
    if (!form.valorImovel) next.valorImovel = "Informe o valor do imóvel";
    if (!form.emprestimo) next.emprestimo = "Informe o valor pretendido";
    if (!form.consentimento) next.consentimento = "Aceite o consentimento para continuar";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-magenta/10 text-magenta text-2xl">
          ✓
        </div>
        <h2 className="text-2xl font-semibold">Solicitação enviada!</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Em breve um consultor entrará em contato usando os dados informados.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({
              nome: "",
              telefone: "",
              email: "",
              cidade: "",
              valorImovel: "",
              emprestimo: "",
              prazo: "180",
              financiamentoAtual: "nao",
              consentimento: false,
            });
          }}
          className="mt-8 text-base font-medium text-magenta hover:underline"
        >
          Enviar nova solicitação
        </button>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border ${hasError ? "border-destructive" : "border-border"} bg-background px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-magenta`;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-soft space-y-6"
      noValidate
    >
      <div>
        <h2 className="text-2xl font-semibold">Solicitar simulação</h2>
        <p className="mt-2 text-base text-muted-foreground">
          Preencha os dados abaixo e receba uma proposta personalizada.
        </p>
      </div>

      <div>
        <label htmlFor="cgi-nome" className="block text-base font-medium mb-3">
          Nome completo
        </label>
        <input
          id="cgi-nome"
          type="text"
          placeholder="Seu nome"
          value={form.nome}
          onChange={(e) => update("nome", e.target.value)}
          className={inputClass(!!errors.nome)}
        />
        {errors.nome && <p className="mt-2 text-sm text-destructive">{errors.nome}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cgi-telefone" className="block text-base font-medium mb-3">
            Telefone
          </label>
          <input
            id="cgi-telefone"
            type="tel"
            inputMode="tel"
            placeholder="(00) 00000-0000"
            value={form.telefone}
            onChange={(e) => update("telefone", formatPhone(e.target.value))}
            className={inputClass(!!errors.telefone)}
          />
          {errors.telefone && <p className="mt-2 text-sm text-destructive">{errors.telefone}</p>}
        </div>
        <div>
          <label htmlFor="cgi-email" className="block text-base font-medium mb-3">
            E-mail
          </label>
          <input
            id="cgi-email"
            type="email"
            inputMode="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(!!errors.email)}
          />
          {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cgi-cidade" className="block text-base font-medium mb-3">
          Cidade do imóvel
        </label>
        <input
          id="cgi-cidade"
          type="text"
          placeholder="Ex: São Paulo - SP"
          value={form.cidade}
          onChange={(e) => update("cidade", e.target.value)}
          className={inputClass(!!errors.cidade)}
        />
        {errors.cidade && <p className="mt-2 text-sm text-destructive">{errors.cidade}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cgi-imovel" className="block text-base font-medium mb-3">
            Valor do imóvel
          </label>
          <input
            id="cgi-imovel"
            inputMode="numeric"
            placeholder="R$ 0,00"
            value={form.valorImovel}
            onChange={(e) => update("valorImovel", formatBRL(e.target.value))}
            className={inputClass(!!errors.valorImovel)}
          />
          {errors.valorImovel && <p className="mt-2 text-sm text-destructive">{errors.valorImovel}</p>}
        </div>
        <div>
          <label htmlFor="cgi-emprestimo" className="block text-base font-medium mb-3">
            Empréstimo pretendido
          </label>
          <input
            id="cgi-emprestimo"
            inputMode="numeric"
            placeholder="R$ 0,00"
            value={form.emprestimo}
            onChange={(e) => update("emprestimo", formatBRL(e.target.value))}
            className={inputClass(!!errors.emprestimo)}
          />
          {errors.emprestimo && <p className="mt-2 text-sm text-destructive">{errors.emprestimo}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cgi-prazo" className="block text-base font-medium mb-3">
          Prazo desejado: <span className="text-magenta">{form.prazo} meses</span>
        </label>
        <input
          id="cgi-prazo"
          type="range"
          min={12}
          max={240}
          step={12}
          value={form.prazo}
          onChange={(e) => update("prazo", e.target.value)}
          className="w-full accent-magenta"
        />
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>12 meses</span>
          <span>240 meses</span>
        </div>
      </div>

      <fieldset>
        <legend className="block text-base font-medium mb-3">Possui financiamento atual no imóvel?</legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-base text-muted-foreground cursor-pointer">
            <input
              type="radio"
              name="financiamento"
              value="sim"
              checked={form.financiamentoAtual === "sim"}
              onChange={() => update("financiamentoAtual", "sim")}
              className="accent-magenta"
            />
            Sim
          </label>
          <label className="flex items-center gap-2 text-base text-muted-foreground cursor-pointer">
            <input
              type="radio"
              name="financiamento"
              value="nao"
              checked={form.financiamentoAtual === "nao"}
              onChange={() => update("financiamentoAtual", "nao")}
              className="accent-magenta"
            />
            Não
          </label>
        </div>
      </fieldset>

      <label className="flex items-start gap-3 text-base text-muted-foreground cursor-pointer">
        <input
          type="checkbox"
          checked={form.consentimento}
          onChange={(e) => update("consentimento", e.target.checked)}
          className="mt-1 accent-magenta"
        />
        <span>
          Autorizo a Futuro a entrar em contato pelos canais informados para envio da simulação e ofertas de crédito.{" "}
          <span className="text-foreground">Concordo com a Política de Privacidade.</span>
        </span>
      </label>
      {errors.consentimento && <p className="-mt-4 text-sm text-destructive">{errors.consentimento}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-foreground text-background px-6 py-4 text-base font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : "Solicitar Simulação"}
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
      <div className="grid md:grid-cols-12 gap-10 md:gap-12">
        {/* Simulator: top on mobile, right on desktop */}
        <aside className="order-first md:order-last md:col-span-5">
          <div className="md:sticky md:top-24">
            <Simulator />
          </div>
        </aside>

        <div className="md:col-span-7">
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

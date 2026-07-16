import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/logo-pos-site-v2.png.asset.json";
import footerLogoAsset from "@/assets/logo-mono-neg-v1.png.asset.json";

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Futuro"
      className={`h-7 w-auto object-contain ${className}`}
    />
  );
}

function FooterLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={footerLogoAsset.url}
      alt="Futuro"
      className={`h-7 w-auto object-contain ${className}`}
    />
  );
}

export function SiteHeader() {
  const [openProducts, setOpenProducts] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="text-xl" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/sobre-nos" className="hover:text-foreground transition">
            Sobre Nós
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenProducts(true)}
            onMouseLeave={() => setOpenProducts(false)}
          >
            <button
              type="button"
              onClick={() => setOpenProducts((v) => !v)}
              className="hover:text-foreground transition inline-flex items-center gap-1"
              aria-haspopup="menu"
              aria-expanded={openProducts}
            >
              Produtos
              <span aria-hidden className="text-xs">▾</span>
            </button>
            {openProducts && (
              <div
                role="menu"
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72"
              >
                <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
                  <Link
                    to="/financiamento-imobiliario"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-secondary transition"
                    role="menuitem"
                  >
                    <div className="font-semibold">Financiamento Imobiliário</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Conquiste seu imóvel com assessoria completa.
                    </div>
                  </Link>
                  <div className="h-px bg-border" />
                  <Link
                    to="/credito-com-garantia-de-imovel"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-secondary transition"
                    role="menuitem"
                  >
                    <div className="font-semibold">Crédito com Garantia de Imóvel</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Use seu imóvel para destravar novos projetos.
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a href="/#como-funciona" className="hover:text-foreground transition">
            Como funciona
          </a>
          <a href="/#contato" className="hover:text-foreground transition">
            Contato
          </a>
        </nav>
        <a
          href="/#contato"
          className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Quero simular
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <FooterLogo className="h-10 w-auto object-contain" />
            <p className="mt-2 text-cream/70 text-sm">Mais crédito, mais futuro.</p>
            <p className="mt-6 text-sm text-cream/60 max-w-sm leading-relaxed">
              Assessoria de crédito imobiliário especializada em Financiamento
              Imobiliário e Crédito com Garantia de Imóvel. Processo humano e
              transparente.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream/50">Produtos</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/85">
              <li>
                <Link to="/financiamento-imobiliario" className="hover:text-magenta transition">
                  Financiamento Imobiliário
                </Link>
              </li>
              <li>
                <Link to="/credito-com-garantia-de-imovel" className="hover:text-magenta transition">
                  Crédito com Garantia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cream/50">Empresa</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/85">
              <li><Link to="/sobre-nos" className="hover:text-magenta transition">Sobre Nós</Link></li>
              
              <li><a href="/#contato" className="hover:text-magenta transition">Contato</a></li>
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

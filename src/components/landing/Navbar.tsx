import { useState, useEffect } from "react";
import logoDiplomata from "@/assets/logo-diplomata.png";

const NAV_LINKS = [
  { href: "#pista", label: "Pista" },
  { href: "#conheca", label: "Estrutura" },
  { href: "#servicos", label: "Serviços" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-[6%] h-[60px] flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled ? '#fff' : 'transparent',
          borderBottom: scrolled ? '1px solid hsl(var(--border))' : 'none',
        }}
      >
        <a href="#" className="flex items-center">
          <img
            src={logoDiplomata}
            alt="Aeródromo Diplomata"
            className="h-9 md:h-10 w-auto"
          />
        </a>

        <div className="hidden md:flex gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-semibold tracking-[0.1em] uppercase no-underline transition-colors duration-200"
              style={{
                color: scrolled ? 'hsl(var(--dark) / 0.5)' : 'rgba(255,255,255,0.65)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? 'hsl(var(--dark))' : '#fff')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? 'hsl(var(--dark) / 0.5)'
                  : 'rgba(255,255,255,0.65)')
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden md:inline-block bg-primary text-primary-foreground rounded-sm px-4 py-[7px] text-[10px] font-bold tracking-[0.12em] uppercase no-underline hover:opacity-90 transition-opacity"
        >
          Contato
        </a>

        <button
          className="md:hidden bg-transparent border-none cursor-pointer text-xl p-1"
          style={{ color: scrolled ? 'hsl(var(--dark))' : '#fff' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed top-[60px] left-0 right-0 z-[99] bg-background border-b border-border p-[20px_6%] flex flex-col gap-5 md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-semibold tracking-[0.1em] uppercase no-underline text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;

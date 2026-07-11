"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { colors } from "../../lib/design/colors";
import { radius } from "../../lib/design/radius";
import { spacing } from "../../lib/design/spacing";
import { shadows } from "../../lib/design/shadows";
import { animation } from "../../lib/design/animations";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Galería", href: "#gallery" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        aria-label="Navegación principal"
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(10, 10, 10, 0.96)" : "rgba(10, 10, 10, 0)",
          borderColor: scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: animation.duration.fast, ease: animation.easing.standard }}
        className="mx-auto w-full border-b"
      >
        <Container className="flex items-center justify-between py-4">
          <a
            href="#hero"
            className="flex items-center gap-3 text-left"
            aria-label="SERVIMÓVIL DOMINICK METAL inicio"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold text-white"
              style={{
                borderColor: "rgba(181,58,52,0.7)",
                backgroundColor: colors.grafito,
                borderRadius: radius.full,
              }}
            >
              SM
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/65">SERVIMÓVIL</p>
              <p className="text-sm font-semibold text-white">DOMINICK METAL</p>
            </div>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/72 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="#contact" variant="primary" className="gap-2 px-4 py-2">
              <Phone size={16} />
              Cotizar
              <ArrowRight size={16} />
            </Button>
            <Button
              href="https://wa.me/?text=Hola%20SERVIMÓVIL%20DOMINICK%20METAL%2C%20quiero%20coordinar%20un%20servicio."
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp para coordinar servicio"
              variant="outline"
              className="h-10 w-10 rounded-full p-0"
            >
              <MessageCircle size={18} />
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </Container>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: animation.duration.fast }}
              className="border-t border-white/10 bg-[#0a0a0a]/98 lg:hidden"
            >
              <Container className="flex flex-col gap-3 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  href="#contact"
                  variant="primary"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 w-full justify-center gap-2"
                >
                  <Phone size={16} />
                  Cotizar
                </Button>
                <Button
                  href="https://wa.me/?text=Hola%20SERVIMÓVIL%20DOMINICK%20METAL%2C%20quiero%20coordinar%20un%20servicio."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  variant="outline"
                  className="w-full justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </Button>
              </Container>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

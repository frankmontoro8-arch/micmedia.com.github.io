/*
MicMidia Landing — Single-file React component (Tailwind + shadcn/ui + lucide-react + framer-motion)

How to use:
1. Create a React project (Vite recommended):
   npm create vite@latest micmidia --template react
   cd micmidia
2. Install dependencies:
   npm install tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install @radix-ui/react-icons lucide-react framer-motion recharts
   npm install @/components/ui --save-dev  // if using shadcn/ui components from your repo
   // If you don't have shadcn/ui in your project, keep the imports but replace with your preferred components.
3. Configure Tailwind (see Tailwind docs). Add this component to src/components/MicMidiaLanding.jsx and import in App.jsx.
4. Deploy to GitHub Pages / Vercel / Netlify. For GitHub Pages, build and push the project and enable Pages.

Notes:
- All labels and copy are in Portuguese (pt-PT / pt-AO friendly). Adjust tone as desired.
- Replace placeholder images and logo paths with real assets in /public.
*/

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu, X, Search, SendPaper } from "lucide-react";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const features = [
  {
    title: "Design Profissional",
    desc: "Layouts modernos, responsivo e focado em conversão para o seu público.",
    icon: "🎨",
  },
  {
    title: "Otimizado para SEO",
    desc: "Estrutura semântica, carregamento rápido e melhores práticas para buscadores.",
    icon: "🚀",
  },
  {
    title: "Integração GitHub",
    desc: "Workflows prontos para deploy automático (GitHub Actions).",
    icon: "⚙️",
  },
  {
    title: "Análises & Crescimento",
    desc: "Painel simples com métricas para acompanhar o desempenho do site.",
    icon: "📈",
  },
];

const sampleMetrics = [
  { month: "Mai", value: 120 },
  { month: "Jun", value: 210 },
  { month: "Jul", value: 320 },
  { month: "Ago", value: 430 },
  { month: "Set", value: 520 },
  { month: "Out", value: 680 },
];

export default function MicMidiaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold">Mi</div>
              <div>
                <h1 className="text-lg font-extrabold leading-none">MicMidia</h1>
                <p className="text-xs text-slate-500 -mt-0.5">Conteúdo. Design. Resultados.</p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-slate-700" href="#features">Serviços</a>
            <a className="hover:text-slate-700" href="#portfolio">Portfólio</a>
            <a className="hover:text-slate-700" href="#pricing">Preços</a>
            <a className="hover:text-slate-700" href="#contact">Contacto</a>
            <Button className="ml-2">Ver Demo</Button>
          </nav>

          <div className="md:hidden">
            <button aria-label="menu" className="p-2 rounded-md border">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">MicMidia — Transformamos sua presença digital</h2>
            <p className="mt-4 text-lg text-slate-600">Design que encanta, conteúdo que converte e deploys automáticos via GitHub. Ideal para empresas que querem crescer com credibilidade.</p>

            <div className="mt-6 flex gap-3">
              <Button>Iniciar Projeto</Button>
              <Button variant="ghost">Ver Portfólio</Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="p-4">
                <CardContent>
                  <p className="text-sm text-slate-500">Clientes satisfeitos</p>
                  <p className="text-2xl font-bold">+134</p>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent>
                  <p className="text-sm text-slate-500">Projetos entregues</p>
                  <p className="text-2xl font-bold">+98</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="order-first md:order-last">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-50 to-white p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-500">Visitas mensais</p>
                  <h3 className="text-2xl font-bold">68.4k</h3>
                </div>
                <div className="w-28 h-28 bg-gradient-to-tr from-black to-slate-700 text-white rounded-xl flex items-center justify-center">Logo</div>
              </div>

              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sampleMetrics} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopOpacity={0.3} />
                        <stop offset="100%" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area type="monotone" dataKey="value" strokeWidth={2} stroke="#111827" fillOpacity={1} fill="url(#grad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-extrabold">O que fazemos de melhor</h3>
            <p className="mt-2 text-slate-600">Soluções completas — desde design até deployment, com foco em resultados mensuráveis.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="p-6">
                  <CardContent>
                    <div className="text-3xl">{f.icon}</div>
                    <h4 className="mt-3 font-semibold">{f.title}</h4>
                    <p className="mt-2 text-slate-500 text-sm">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-extrabold">Portfólio recente</h3>
          <p className="mt-2 text-slate-600">Alguns projetos de destaque preparados para mostrar o que podemos construir para você.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div whileHover={{ y: -6 }} key={i} className="rounded-xl overflow-hidden shadow">
                <div className="h-44 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">Projeto {i}</div>
                <div className="p-4">
                  <h5 className="font-semibold">Projeto {i} — Campanha digital</h5>
                  <p className="text-sm text-slate-500 mt-2">Landing page + SEO + integração com Analytics e GitHub Actions.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-gradient-to-b from-white to-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-extrabold">Planos pensados para crescer</h3>
            <p className="mt-2 text-slate-600">Escolha o plano que encaixa no seu momento — todos com deploys via GitHub e suporte técnico.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <CardContent>
                  <h4 className="text-xl font-bold">Starter</h4>
                  <p className="mt-2 text-slate-500">Para quem está começando</p>
                  <p className="mt-4 text-3xl font-extrabold">$199</p>
                  <ul className="mt-4 text-left text-sm space-y-2">
                    <li>Landing page</li>
                    <li>SEO básico</li>
                    <li>1 mês de suporte</li>
                  </ul>
                  <div className="mt-6">
                    <Button>Contratar</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center ring-2 ring-black">
                <CardContent>
                  <h4 className="text-xl font-bold">Business</h4>
                  <p className="mt-2 text-slate-500">Para pequenas e médias empresas</p>
                  <p className="mt-4 text-3xl font-extrabold">$499</p>
                  <ul className="mt-4 text-left text-sm space-y-2">
                    <li>Site multi-página</li>
                    <li>SEO avançado</li>
                    <li>Integração com CRM</li>
                  </ul>
                  <div className="mt-6">
                    <Button>Contratar</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent>
                  <h4 className="text-xl font-bold">Enterprise</h4>
                  <p className="mt-2 text-slate-500">Soluções à medida e suporte dedicado</p>
                  <p className="mt-4 text-3xl font-extrabold">Sob consulta</p>
                  <ul className="mt-4 text-left text-sm space-y-2">
                    <li>Arquitetura personalizada</li>
                    <li>Garantia de uptime</li>
                    <li>Equipe dedicada</li>
                  </ul>
                  <div className="mt-6">
                    <Button>Solicitar proposta</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-extrabold">Fale connosco</h3>
              <p className="mt-2 text-slate-600">Quer um orçamento ou tem dúvidas? Envie uma mensagem e respondemos em 24-48h úteis.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <Label>Nome</Label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input placeholder="email@exemplo.com" />
                </div>
                <div>
                  <Label>Mensagem</Label>
                  <textarea className="w-full p-3 rounded-md border" rows={5} placeholder="O que deseja..." />
                </div>
                <div className="pt-2">
                  <Button>
                    Enviar <SendPaper className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Nossa localização</h4>
              <p className="mt-2 text-sm text-slate-500">Luanda, Angola — Atendimento remoto e presencial mediante agendamento.</p>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <Card className="p-4">
                  <CardContent>
                    <p className="text-sm text-slate-500">Telefone</p>
                    <p className="font-semibold">+244 9XX XXX XXX</p>
                  </CardContent>
                </Card>
                <Card className="p-4">
                  <CardContent>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-semibold">contact@micmidia.com</p>
                  </CardContent>
                </Card>

                <Card className="p-4">
                  <CardContent>
                    <p className="text-sm text-slate-500">Horário</p>
                    <p className="font-semibold">Seg — Sex, 09:00 — 18:00 (WAT)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold">MicMidia</p>
              <p className="text-sm text-slate-500">© {new Date().getFullYear()} MicMidia. Todos os direitos reservados.</p>
            </div>

            <div className="flex gap-4">
              <a className="text-sm hover:underline">Política de Privacidade</a>
              <a className="text-sm hover:underline">Termos</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


'use client';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, Download, Menu, X } from "lucide-react"
import { SimpleThemeToggle } from "@/components/SimpleThemeToggle"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const downloadCv = () => {
  const link = document.createElement('a');
  link.href = 'src/pages/Erick Bonifácio.pdf';
  link.download = 'Erick-Bonifacio.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const copyEmail = () => {
  navigator.clipboard.writeText('erickalvarengabonifacio@hotmail.com');
}

export default function Portfolio() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
          {/* Nome */}
          <a href="#home" className="font-bold text-foreground text-sm sm:text-base">
            Erick Bonifácio
          </a>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-foreground/80 text-foreground" onClick={closeMenu}>Início</a>
            <a href="#experience" className="hover:text-foreground/80 text-foreground" onClick={closeMenu}>Experiência</a>
            <a href="#projects" className="hover:text-foreground/80 text-foreground" onClick={closeMenu}>Projetos</a>
            <a href="#contact" className="hover:text-foreground/80 text-foreground" onClick={closeMenu}>Contato</a>
          </nav>

          {/* Toggle + Hamburguer */}
          <div className="flex items-center gap-4 md:gap-6">
            <SimpleThemeToggle />

            {/* Botão hamburguer - só mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 focus:outline-none"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-background border-t px-4 py-4 space-y-4 text-sm font-medium"
            >
              {["#home", "#experience", "#projects", "#contact"].map((href, i) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="block text-foreground hover:text-foreground/80 transition-colors duration-200"
                >
                  {["Início", "Experiência", "Projetos", "Contato"][i]}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>


      {/* Hero Section */}
      <section id="home" className="py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground">
                Olá, eu sou <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Erick Bonifácio</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Desenvolvedor Fullstack
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center animate-fade-in">
              <Badge variant="secondary" className="hover-scale">React</Badge>
              <Badge variant="secondary" className="hover-scale">jQuery</Badge>
              <Badge variant="secondary" className="hover-scale">PHP</Badge>
              <Badge variant="secondary" className="hover-scale">Laravel</Badge>
              <Badge variant="secondary" className="hover-scale">Python</Badge>
            </div>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
              <Button className="hover-scale" title="Copiar email" onClick={copyEmail}>
                <Mail className="mr-2 h-4 w-4" />
                <a href="#contact" >Entre em Contato</a>
              </Button>
              <Button variant="outline" className="hover-scale">
                <Github className="mr-2 h-4 w-4" />
                <a href="https://github.com/Erick-Bonifacio" target="_blank">Ver GitHub</a>
              </Button>
              <Button variant="secondary" onClick={downloadCv} className="hover-scale">
                <Download className="mr-2 h-4 w-4"/>
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Experiência Profissional
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Minha jornada profissional e principais conquistas
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2">
            <Card className="min-h-fit md:min-h-[300px] hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-wrap gap-1 items-center justify-end">
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" />
                    05/2024 - Hoje
                  </Badge>
                </div>
                <CardTitle className="text-foreground">Desenvolvedor Fullstack</CardTitle>
                <CardDescription>Support Informática</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Atuando na correção de bugs e criação de novas funcionalidades nos sistemas web da empresa, utilizandoferramentas como PHP (Laravel) e Javascript (JQuery), além de HTML, CSS e manipulação de bancos de dados relacionais como PostgreSQL. Ademais, tenho contato diário com ferramentas de versionamento (Git) e conteineirização (Docker).
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">JQuery</Badge>
                  <Badge variant="secondary" className="text-xs">PHP</Badge>
                  <Badge variant="secondary" className="text-xs">Laravel</Badge>
                  <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="min-h-fit md:min-h-[300px] hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-wrap gap-1 items-center justify-end">
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" />
                    2023 - 2024
                  </Badge>
                </div>
                <CardTitle className="text-foreground">Agente de Inovação</CardTitle>
                <CardDescription>Centro de Empreendedorismo UNIFEI (CEU)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Manutenção da comunidade empreendedora da região, atuando na organização de eventos e projetos deextensão e desenvolvendo habilidades importantes, como comunicação e proatividade.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Proatividade</Badge>
                  <Badge variant="secondary" className="text-xs">Comunicação</Badge>
                  <Badge variant="secondary" className="text-xs">Liderança</Badge>
                  <Badge variant="secondary" className="text-xs">Autogerenciamento</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="min-h-fit md:min-h-[300px] hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-wrap gap-1 items-center justify-end">
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" />
                    2024 - hoje
                  </Badge>
                </div>
                <CardTitle className="text-foreground">Projetos Pessoais</CardTitle>
                <CardDescription>By Erick Bonifácio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Criação de projetos pessoais visando aperfeiçoamento, como API's Restful, site gerador de QR Codes e Landing Pages. 
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Java</Badge>
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">React</Badge>
                  <Badge variant="secondary" className="text-xs">JWT e SMTP</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="min-h-fit md:min-h-[300px] hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-wrap gap-1 items-center justify-end">
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" />
                    2023 - hoje
                  </Badge>
                </div>
                <CardTitle className="text-foreground">Sistemas de Informação</CardTitle>
                <CardDescription>Universidade Federal de Itajubá - UNIFEI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Bacharelado em Sistemas de Informação com foco em desenvolvimento de software e engenharia de sistemas. 
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Algoritmos e Estruturas de Dados</Badge>
                  <Badge variant="secondary" className="text-xs">Banco de Dados</Badge>
                  <Badge variant="secondary" className="text-xs">Análise de Dados</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Projetos em Destaque
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Alguns dos meus trabalhos mais recentes
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2">
            <Card className="min-h-fit md:min-h-[550px] hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  QR Code Generator
                  <div className="flex gap-2">
                    <a href="https://scan-it-simple.vercel.app/" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    {/* <Button size="sm" variant="outline" className="hover-scale"> */}
                    {/* </Button> */}
                  </div>
                </CardTitle>
                <CardDescription>Scan It Simple</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center ">
                  <img src="/image.png" alt="Preview do projeto QR Code Generator" className="rounded-lg"/>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Sistema de geração de QR Codes personalizados, que não expiram e com estastísticas de scans! O sistema possui autenticação JWT e envio de emails (SMTP).
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">React</Badge>
                  <Badge variant="secondary" className="text-xs">Flask</Badge>
                  <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
                  <Badge variant="secondary" className="text-xs">Vercel - Render.io - Retool</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="min-h-fit md:min-h-[550px] hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  Landing Page Nutricional
                  <div className="flex gap-2">
                    <a href="https://matheus-izidro-nutri-lp.vercel.app/" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    {/* <Button size="sm" variant="outline" className="hover-scale">
                      <ExternalLink className="h-4 w-4" />
                    </Button> */}
                  </div>
                </CardTitle>
                <CardDescription>Apresentação e contatos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg mb-4 flex items-center justify-center">
                  <img src="/image2.png" alt="Preview do projeto Landing Page Nutricional" className="rounded-lg"/>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Aplicação estática visando área nutricional, expondo seções de contato, formação e apresentação. Desenvolvida com React e hospedada com Vercel.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">React</Badge>
                  <Badge variant="secondary" className="text-xs">Vercel</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Entre em Contato
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Vamos conversar sobre seu próximo projeto ou oportunidade
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 hover-scale transition-all duration-200">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>erickalvarengabonifacio@hotmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 hover-scale transition-all duration-200">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+55 (11) 99381-1704</span>
                    </div>
                    <div className="flex items-center space-x-3 hover-scale transition-all duration-200">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Minas Gerais, Itajubá - Brasil</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Redes Sociais</h3>
                  <div className="flex space-x-4 justify-left">
                     <a
                        href="https://github.com/Erick-Bonifacio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-scale inline-flex items-center justify-center rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/erick-bonifacio-b7a898273"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-scale inline-flex items-center justify-center rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              2025 - Erick Bonifácio
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Erick-Bonifacio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale inline-flex items-center justify-center rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/erick-bonifacio-b7a898273"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale inline-flex items-center justify-center rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

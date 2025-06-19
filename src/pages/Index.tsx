
'use client';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, Download } from "lucide-react"
import { SimpleThemeToggle } from "@/components/SimpleThemeToggle"

const downloadCv = () => {
  const link = document.createElement('a');
  link.href = '/Erick-Bonifacio.pdf';
  link.download = 'Erick-Bonifacio.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="#home">
              <span className="font-bold text-foreground">Erick Bonifácio</span>
            </a>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#home" className="transition-colors hover:text-foreground/80 text-foreground story-link">
              Início
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-foreground/80 text-foreground story-link"
            >
              Experiência
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground story-link">
              Projetos
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground story-link">
              Contato
            </a>
          </nav>
          <div className="ml-auto">
            <SimpleThemeToggle />
          </div>
        </div>
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
                Desenvolvedor Fullstack focado em criar soluções robustas e confiáveis.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center animate-fade-in">
              <Badge variant="secondary" className="hover-scale">React</Badge>
              <Badge variant="secondary" className="hover-scale">jQuery</Badge>
              <Badge variant="secondary" className="hover-scale">PHP</Badge>
              <Badge variant="secondary" className="hover-scale">Laravel</Badge>
              <Badge variant="secondary" className="hover-scale">Python</Badge>
            </div>
            <div className="space-x-4 animate-fade-in">
              <Button className="hover-scale">
                <Mail className="mr-2 h-4 w-4" />
                Entre em Contato
              </Button>
              <Button variant="outline" className="hover-scale">
                <Github className="mr-2 h-4 w-4" />
                Ver GitHub
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
            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground">Desenvolvedor Fullstack</CardTitle>
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" />
                    05/2024 - Hoje
                  </Badge>
                </div>
                <CardDescription>Support Informática</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Lidero o desenvolvimento de aplicações web modernas usando React, Next.js e Node.js. Responsável por
                  arquitetar soluções escaláveis e mentorear desenvolvedores júnior.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">React</Badge>
                  <Badge variant="secondary" className="text-xs">Next.js</Badge>
                  <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                  <Badge variant="secondary" className="text-xs">AWS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground">Desenvolvedor Frontend</CardTitle>
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" />
                    2020 - 2022
                  </Badge>
                </div>
                <CardDescription>StartupXYZ</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Desenvolvi interfaces de usuário responsivas e interativas para aplicações SaaS. Colaborei
                  estreitamente com designers UX/UI para implementar designs pixel-perfect.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Vue.js</Badge>
                  <Badge variant="secondary" className="text-xs">JavaScript</Badge>
                  <Badge variant="secondary" className="text-xs">CSS</Badge>
                  <Badge variant="secondary" className="text-xs">Figma</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground">Desenvolvedor Junior</CardTitle>
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" />
                    2019 - 2020
                  </Badge>
                </div>
                <CardDescription>WebDev Agency</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Iniciei minha carreira desenvolvendo websites e aplicações web para diversos clientes. Aprendi as
                  bases do desenvolvimento web e boas práticas de programação.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">HTML</Badge>
                  <Badge variant="secondary" className="text-xs">CSS</Badge>
                  <Badge variant="secondary" className="text-xs">JavaScript</Badge>
                  <Badge variant="secondary" className="text-xs">PHP</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground">Formação Acadêmica</CardTitle>
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" />
                    2016 - 2019
                  </Badge>
                </div>
                <CardDescription>Universidade Federal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Bacharelado em Ciência da Computação com foco em desenvolvimento de software e engenharia de sistemas.
                  Participei de projetos de pesquisa em IA e machine learning.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Algoritmos</Badge>
                  <Badge variant="secondary" className="text-xs">Estruturas de Dados</Badge>
                  <Badge variant="secondary" className="text-xs">IA</Badge>
                  <Badge variant="secondary" className="text-xs">Banco de Dados</Badge>
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
              Alguns dos meus trabalhos mais recentes e impactantes
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2">
            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  E-commerce Platform
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="hover-scale">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="hover-scale">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Plataforma completa de e-commerce com painel administrativo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <span className="text-muted-foreground">Preview do Projeto</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Sistema completo de e-commerce com carrinho de compras, processamento de pagamentos, gestão de
                  produtos e painel administrativo. Desenvolvido com Next.js e Stripe.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Next.js</Badge>
                  <Badge variant="secondary" className="text-xs">Stripe</Badge>
                  <Badge variant="secondary" className="text-xs">Prisma</Badge>
                  <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  Task Management App
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="hover-scale">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="hover-scale">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Aplicativo de gerenciamento de tarefas com colaboração em tempo real</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <span className="text-muted-foreground">Preview do Projeto</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Aplicação de produtividade com recursos de colaboração em tempo real, notificações push e
                  sincronização entre dispositivos.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">React</Badge>
                  <Badge variant="secondary" className="text-xs">Socket.io</Badge>
                  <Badge variant="secondary" className="text-xs">Node.js</Badge>
                  <Badge variant="secondary" className="text-xs">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  Weather Dashboard
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="hover-scale">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="hover-scale">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Dashboard interativo de previsão do tempo com mapas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <span className="text-muted-foreground">Preview do Projeto</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Dashboard responsivo que exibe dados meteorológicos em tempo real com visualizações interativas e
                  mapas integrados.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Vue.js</Badge>
                  <Badge variant="secondary" className="text-xs">Chart.js</Badge>
                  <Badge variant="secondary" className="text-xs">OpenWeather API</Badge>
                  <Badge variant="secondary" className="text-xs">Mapbox</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  Blog CMS
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="hover-scale">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="hover-scale">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Sistema de gerenciamento de conteúdo para blogs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <span className="text-muted-foreground">Preview do Projeto</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  CMS completo para blogs com editor rich text, sistema de comentários, SEO otimizado e painel
                  administrativo intuitivo.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Next.js</Badge>
                  <Badge variant="secondary" className="text-xs">Sanity</Badge>
                  <Badge variant="secondary" className="text-xs">Tailwind CSS</Badge>
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
                      <span>erick.bonifacio@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3 hover-scale transition-all duration-200">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+55 (11) 99999-9999</span>
                    </div>
                    <div className="flex items-center space-x-3 hover-scale transition-all duration-200">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>São Paulo, SP - Brasil</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Redes Sociais</h3>
                  <div className="flex space-x-4 justify-center">
                    <Button variant="outline" size="icon" className="hover-scale">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover-scale">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover-scale">
                      <Mail className="h-4 w-4" />
                    </Button>
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
              © 2024 Erick Bonifácio. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover-scale">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

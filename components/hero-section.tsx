"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blob Top Right */}
        <div className="absolute -top-40 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl" />
        
        {/* Gradient Blob Bottom Left */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 md:w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/25 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary/15 rounded-full animate-pulse delay-700" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                Olá, eu sou
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
                Desenvolvedor{" "}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Criativo
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 text-pretty">
              Transformo ideias em experiências digitais memoráveis. 
              Especializado em criar interfaces modernas, acessíveis e 
              de alta performance.
            </p>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
            >
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-card border-border/50 focus:border-primary"
                required
              />
              <Button
                type="submit"
                className="h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium gap-2 group"
              >
                Começar
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Projetos entregues</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">Clientes felizes</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
            </div>
            
            {/* Image Container */}
            <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-3xl rotate-6" />
              
              {/* Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-sm font-medium text-foreground">Disponível para projetos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Moderne",
    description: "Plateforme e-commerce complète avec panier, paiement et dashboard administrateur.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser des données en temps réel avec graphiques dynamiques.",
    tags: ["TypeScript", "Tailwind", "Chart.js"],
    link: "#",
  },
  {
    title: "Application Mobile",
    description: "Application cross-platform de gestion de tâches avec synchronisation cloud.",
    tags: ["React Native", "Supabase"],
    link: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Index = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative z-10 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-xs font-semibold tracking-[0.35em] uppercase text-primary"
          >
            Développeur Web Fullstack
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-2 text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Baye Abdoulaye Chimére Touré
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mb-10 h-[2px] w-24 bg-primary/60"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-14 max-w-xl text-xl leading-[1.8] text-muted-foreground"
          >
            Développeur web fullstack formé par GOMYCODE.sn passionné par la création
            d'expériences utilisateur intuitives et accessibles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="hero"
              size="lg"
              className="group text-base tracking-wide"
              onClick={() => {
                const el = document.getElementById("projets");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Voir mes projets
              <ArrowRight className="ml-2.5 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="relative bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-primary">
              Portfolio
            </p>
            <h2
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Mes Projets
            </h2>
            <div className="mx-auto mt-6 h-[2px] w-16 bg-primary/60" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="group h-full border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader className="pb-3">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] tracking-wide uppercase">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl font-semibold tracking-tight text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <CardDescription className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </CardDescription>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Voir le projet
                      <ExternalLink className="ml-1.5 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import {
  Code,
  Database,
  GitMerge,
  Globe,
  Server,
  Smartphone
} from "lucide-react";

export const skills = [
  {
    title: "languages",
    icon: Code,
    items: ["javascript", "typescript", "kotlin", "php"]
  },
  {
    title: "client side",
    icon: Globe,
    items: ["vue.js", "react.js", "next.js", "inertia"]
  },
  {
    title: "server side",
    icon: Server,
    items: ["laravel", "node.js"]
  },
  {
    title: "database & cloud",
    icon: Database,
    items: ["mysql", "sqlite", "mongodb"]
  },
  {
    title: "mobile development",
    icon: Smartphone,
    items: ["react native", "jetpack compose"]
  },
  {
    title: "other technologies",
    icon: GitMerge,
    items: ["git", "docker", "linux"]
  }
];

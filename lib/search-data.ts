import { 
  Layout, BarChart3, Zap, Rocket, Building2, Heart, 
  BookOpen, FileText, Newspaper, CreditCard, Home, Info
} from "lucide-react";

export const SEARCH_DATA = [
  // Pages
  { title: "Home", href: "/", icon: Home, category: "Page" },
  { title: "Pricing", href: "/pricing", icon: CreditCard, category: "Page" },
  { title: "Contact", href: "/contact", icon: Info, category: "Page" },
  
  // Features
  { title: "Program Management", href: "/features#program-management", icon: Layout, category: "Feature" },
  { title: "Performance Analytics", href: "/features#analytics", icon: BarChart3, category: "Feature" },
  { title: "Workflow Automation", href: "/features#automation", icon: Zap, category: "Feature" },
  
  // Solutions
  { title: "Bootcamps", href: "/solutions/bootcamps", icon: Rocket, category: "Solution" },
  { title: "Enterprise Solutions", href: "/solutions/corporate", icon: Building2, category: "Solution" },
  { title: "NGO & Non-Profit", href: "/solutions/programs", icon: Heart, category: "Solution" },
  
  // Resources
  { title: "Insights Blog", href: "/blog", icon: Newspaper, category: "Resource" },
  { title: "Customer Success Stories", href: "/solutions", icon: FileText, category: "Resource" },
  { title: "Platform Documentation", href: "/docs", icon: BookOpen, category: "Resource" },
];

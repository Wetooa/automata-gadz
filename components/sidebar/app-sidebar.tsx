import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Home,
  Search,
  Settings,
  Regex,
  LucideIcon,
  Languages,
  CassetteTape,
  Workflow,
  TrendingUpDownIcon,
  Network,
  Layers,
} from "lucide-react";
import AppSidebarGroup from "./app-sidebar-group";

export interface SidebarItemProps {
  title: string;
  url: string;
  icon: LucideIcon;
}

const items: SidebarItemProps[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Language Generator",
    url: "/language",
    icon: Languages,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const midtermLessons: SidebarItemProps[] = [
  {
    title: "Regex",
    url: "/regex",
    icon: Regex,
  },

  {
    title: "DFA",
    url: "/dfa",
    icon: TrendingUpDownIcon,
  },

  {
    title: "NFA",
    url: "/nfa",
    icon: Workflow,
  },
];

const finalsLessons: SidebarItemProps[] = [
  {
    title: "CFG",
    url: "/cfg",
    icon: Network,
  },
  {
    title: "PDA",
    url: "/pda",
    icon: Layers,
  },

  {
    title: "Turing",
    url: "/turing",
    icon: CassetteTape,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <AppSidebarGroup label="Application" content={items} />
        <AppSidebarGroup label="Midterm Lessons" content={midtermLessons} />
        <AppSidebarGroup label="Finals Lessons" content={finalsLessons} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

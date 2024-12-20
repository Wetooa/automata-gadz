import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  Regex,
  LucideIcon,
  Languages,
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
    title: "Lanaguage Generator",
    url: "/language",
    icon: Languages,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const midtermLessons: SidebarItemProps[] = [
  {
    title: "Regex",
    url: "regex",
    icon: Regex,
  },

  {
    title: "DFA",
    url: "dfa",
    icon: Regex,
  },

  {
    title: "NFA",
    url: "nfa",
    icon: Regex,
  },
];

const finalsLessons: SidebarItemProps[] = [
  {
    title: "Turing",
    url: "regex",
    icon: Regex,
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

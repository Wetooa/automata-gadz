import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CassetteTape,
  Home,
  Languages,
  Layers,
  LucideIcon,
  Network,
  Regex,
  Search,
  Settings,
  TrendingUpDownIcon,
  Workflow,
} from "lucide-react";
import AppSidebarFooter from "./app-sidebar-footer";
import AppSidebarSubGroup from "./app-sidebar-group";

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
    <Sidebar collapsible="offcanvas">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Lessons</SidebarGroupLabel>
          <AppSidebarSubGroup
            label="Midterm Lessons"
            content={midtermLessons}
          />
          <AppSidebarSubGroup label="Finals Lessons" content={finalsLessons} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}

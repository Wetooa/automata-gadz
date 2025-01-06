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
  BookOpen,
  CassetteTape,
  ChevronDown,
  FrownIcon,
  Home,
  Languages,
  Layers,
  LucideIcon,
  Network,
  Regex,
  Search,
  Settings,
  SmileIcon,
  TrendingUpDownIcon,
  Workflow,
} from "lucide-react";
import AppSidebarFooter from "./app-sidebar-footer";
import AppSidebarSubGroup from "./app-sidebar-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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
    <Sidebar variant="floating" side="left" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <BookOpen />
                  Automata Gadz
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
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
            groupIcon={<SmileIcon />}
            label="Midterm Lessons"
            content={midtermLessons}
          />
          <AppSidebarSubGroup
            groupIcon={<FrownIcon />}
            label="Finals Lessons"
            content={finalsLessons}
          />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}

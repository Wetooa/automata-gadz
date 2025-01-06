import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <SidebarProvider
      name="app-sidebar"
      defaultOpen={defaultOpen}
      className="w-full h-full"
    >
      <AppSidebar />
      <main className="box-border w-full h-full">
        <SidebarTrigger className="absolute z-10" />
        {children}
      </main>
    </SidebarProvider>
  );
}

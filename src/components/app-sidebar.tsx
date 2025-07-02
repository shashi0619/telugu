"use client";

import * as React from "react";
import {
  BookOpen,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon; // Changed to non-optional to match NavMain
  isActive?: boolean;
  items?: { title: string; url: string; onClick?: () => void; isActive?: boolean }[];
}

interface Project {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface SidebarData {
  user: User;
  navMain: NavItem[];
  navSecondary: { title: string; url: string; icon: LucideIcon }[];
  projects: Project[];
}

const data: SidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "All OTTs", url: "#" },
        { title: "Amazon Prime", url: "#" },
        { title: "Netflix", url: "#" },
        { title: "JioHotstar", url: "#" },
        { title: "Aha", url: "#" },
        { title: "Sun Nxt", url: "#" },
        { title: "Sony Liv", url: "#" },
      ],
    },
    {
      title: "Select Year",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "2025", url: "#" },
        { title: "2024", url: "#" },
        { title: "2023", url: "#" },
        { title: "2022", url: "#" },
        { title: "2021", url: "#" },
        { title: "2020", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
  navSecondary: [
    { title: "Support", url: "#", icon: LifeBuoy },
    { title: "Feedback", url: "#", icon: Send },
  ],
  projects: [
    { name: "Design Engineering", url: "#", icon: Frame },
    { name: "Sales & Marketing", url: "#", icon: PieChart },
    { name: "Travel", url: "#", icon: Map },
  ],
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  selectedOtt: string;
  setSelectedOtt: React.Dispatch<React.SetStateAction<string>>;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
}

export function AppSidebar({
  selectedOtt,
  setSelectedOtt,
  selectedYear,
  setSelectedYear,
  ...props
}: AppSidebarProps) {
  const ottValueMap: { [key: string]: string } = {
    "All OTTs": "",
    "Amazon Prime": "amazon-prime",
    Netflix: "netflix",
    JioHotstar: "jiohotstar",
    Aha: "aha",
    "Sun Nxt": "sun-nxt",
    "Sony Liv": "sony-liv",
  };

  const handleOttClick = (title: string) => {
    console.log("Clicked OTT:", title, "Mapped to:", ottValueMap[title] || ""); // Debug log
    setSelectedOtt(ottValueMap[title] || "");
  };

  const handleYearClick = (title: string) => {
    console.log("Clicked Year:", title); // Debug log
    setSelectedYear(title === selectedYear ? "" : title);
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={data.navMain.map((section) => ({
            ...section,
            items: section.items?.map((item) => ({
              ...item,
              onClick:
                section.title === "Playground"
                  ? () => handleOttClick(item.title)
                  : section.title === "Select Year"
                  ? () => handleYearClick(item.title)
                  : undefined,
              isActive:
                section.title === "Playground"
                  ? ottValueMap[item.title] === selectedOtt
                  : section.title === "Select Year"
                  ? item.title === selectedYear
                  : false,
            })),
          }))}
        />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

interface NavMainProps {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: { title: string; url: string; onClick?: () => void; isActive?: boolean }[];
  }[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarMenu>
      {items.map((section) => (
        <SidebarMenuItem key={section.title}>
          <SidebarMenuButton asChild isActive={section.isActive}>
            <a href={section.url}>
              <section.icon />
              <span>{section.title}</span>
            </a>
          </SidebarMenuButton>
          {section.items && (
            <SidebarMenuSub>
              {section.items.map((item) => (
                <SidebarMenuSubButton
                  key={item.title}
                  asChild
                  isActive={item.isActive}
                  onClick={item.onClick}
                >
                  <a href={item.url}>{item.title}</a>
                </SidebarMenuSubButton>
              ))}
            </SidebarMenuSub>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
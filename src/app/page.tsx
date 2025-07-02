"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ExampleCombobox } from "@/components/ui/combobox";
import {
  frameworks,
  items2025,
  items2024,
  items2023,
  items2022,
  items2021,
  items2020,
} from "@/components/data";

export default function Page() {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedOtt, setSelectedOtt] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const allItems = [
    ...items2025,
    ...items2024,
    ...items2023,
    ...items2022,
    ...items2021,
    ...items2020,
  ];

  const filteredItems = selectedYear
    ? allItems.filter(
        (item) =>
          item.year === selectedYear &&
          (selectedOtt ? item.category === selectedOtt : true)
      )
    : allItems.filter((item) =>
        selectedOtt ? item.category === selectedOtt : true
      );

  const renderItems = () => {
    if (filteredItems.length === 0) {
      return (
        <div className="text-muted-foreground text-center">
          No movies available for the selected year or OTT platform.
        </div>
      );
    }

    return viewMode === "grid" ? (
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredItems.map((item) => (
          <div
            key={item.title}
            className="bg-muted/50 border border-transparent hover:border-primary/50 shadow-md hover:shadow-2xl rounded-xl p-3 flex flex-row items-start transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-muted/70 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-md mr-3"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {item.description}
              </p>
              <p className="text-[11px] text-muted-foreground mt-1">
                {frameworks.find((f) => f.value === item.category)?.label ||
                  item.category}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Year: {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-slate-800 text-sm">
        <thead className="bg-slate-100 dark:bg-transparent">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-muted-foreground">
              Title
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-muted-foreground">
              Description
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-muted-foreground">
              Category
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-muted-foreground">
              Year
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100 dark:bg-transparent dark:divide-muted">
          {filteredItems.map((item) => (
            <tr
              key={item.title}
              className="even:bg-slate-50 dark:even:bg-transparent hover:bg-slate-100 dark:hover:bg-muted/30 transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-[0.98]"
            >
              <td className="px-4 py-2 font-semibold text-black dark:text-white">{item.title}</td>
              <td className="px-4 py-2 text-slate-600 dark:text-muted-foreground">
                {item.description}
              </td>
              <td className="px-4 py-2 text-slate-600 dark:text-muted-foreground">
                {frameworks.find((f) => f.value === item.category)?.label || item.category}
              </td>
              <td className="px-4 py-2 text-slate-600 dark:text-muted-foreground">{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    
    
    


    );
  };

  return (
    <SidebarProvider>
      <AppSidebar
        selectedOtt={selectedOtt}
        setSelectedOtt={setSelectedOtt}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <SidebarInset>
        <header className="flex h-auto min-h-16 shrink-0 items-center justify-between border-b px-4 py-2 flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block text-xl md:text-2xl font-bold text-black dark:text-white">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <ExampleCombobox
              value={selectedOtt}
              setValue={setSelectedOtt}
              frameworks={frameworks}
            />
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-1.5">
              <button
                className={`rizzui-action-icon-root inline-flex items-center justify-center p-0.5 w-7 h-7 rounded-md ${
                  viewMode === "table"
                    ? "bg-gray-900 dark:bg-gray-200 text-white"
                    : "bg-transparent"
                }`}
                onClick={() => setViewMode("table")}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z" />
                </svg>
              </button>
              <button
                className={`rizzui-action-icon-root inline-flex items-center justify-center p-0.5 w-7 h-7 rounded-md ${
                  viewMode === "grid"
                    ? "bg-gray-900 dark:bg-gray-200 text-white"
                    : "bg-transparent"
                }`}
                onClick={() => setViewMode("grid")}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Always show theme toggle */}
            <ThemeToggle />

            {/* Hide these on mobile (show on sm and up) */}
            <div className="hidden sm:flex items-center gap-2">
              <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1 right-1 inline-block h-2 w-2 rounded-full bg-red-500" />
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      className="rounded-full w-8 h-8"
                      src="https://github.com/shadcn.png"
                    />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{renderItems()}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

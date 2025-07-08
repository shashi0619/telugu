"use client";

import { useState, useMemo } from "react";
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

type Category = (typeof frameworks)[number]["value"];
type ColorClass = string;

const categoryColors: Record<Category | string, ColorClass> = {
  "amazon-prime": "bg-amber-100 hover:bg-amber-200 active:bg-amber-200",
  netflix: "bg-red-100 hover:bg-red-200 active:bg-red-200",
  jiohotstar: "bg-green-100 hover:bg-green-200 active:bg-green-200",
  aha: "bg-blue-100 hover:bg-blue-200 active:bg-blue-200",
  "sun-nxt": "bg-orange-100 hover:bg-orange-200 active:bg-orange-200",
  "sony-liv": "bg-purple-100 hover:bg-purple-200 active:bg-purple-200",
  "": "bg-gray-100 hover:bg-gray-200 active:bg-gray-200",
  zee5: "bg-teal-100 hover:bg-teal-200 active:bg-teal-200",
  "etv-win": "bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-200",
  "lionsgate-play": "bg-pink-100 hover:bg-pink-200 active:bg-pink-200",
  "bms-stream": "bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-200",
  "disney-hotstar": "bg-blue-200 hover:bg-blue-300 active:bg-blue-300",
  jiocinema: "bg-red-200 hover:bg-red-300 active:bg-red-300",
  "hungama-play": "bg-green-200 hover:bg-green-300 active:bg-green-300",
  "galaxy-ott": "bg-purple-200 hover:bg-purple-300 active:bg-purple-300",
};

export default function Page() {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedOtt, setSelectedOtt] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  interface Framework {
    value: string;
    label: string;
  }

  interface Item {
    title: string;
    description: string;
    category: string;
    year: string;
    image: string;
  }

  const allItems = useMemo<Item[]>(() => [
    ...items2025,
    ...items2024,
    ...items2023,
    ...items2022,
    ...items2021,
    ...items2020,
  ], []);

  const extractYear = (date: string): string => {
    if (!date) return "";
    const parts = date.split("-");
    return parts.length === 3 && parts[2].length === 4 ? parts[2] : "";
  };

  const countWords = (title: string): number => {
    return title.trim().split(/\s+/).length;
  };

  const filteredItems = allItems.filter((item: Item) => {
    const itemYear = extractYear(item.year);
    const yearMatch = selectedYear ? itemYear === selectedYear : true;
    const ottMatch = selectedOtt ? item.category === selectedOtt : true;
    const searchMatch = searchQuery
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return yearMatch && ottMatch && searchMatch;
  });

  const renderItems = () => {
    if (filteredItems.length === 0) {
      return (
        <div className="text-muted-foreground text-center">
          {searchQuery
            ? `Unable to find movies matching "${searchQuery}"`
            : "No movies available for the selected year or OTT platform."}
        </div>
      );
    }

    if (viewMode === "grid") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredItems.map((item: Item) => {
            const bgColorClass =
              categoryColors[item.category] ||
              "bg-gray-100 hover:bg-gray-200 active:bg-gray-200";
            const isLongTitle = countWords(item.title) > 15;

            return (
              <div
                key={`${item.title}-${item.year}`}
                className={`border border-transparent hover:border-primary/50 shadow-md hover:shadow-2xl rounded-xl p-3 flex flex-row items-center transition-all duration-300 ease-in-out transform hover:scale-[1.02] bg-white dark:bg-gray-800 ${bgColorClass} cursor-pointer min-h-[120px]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md mr-3 flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/100x100?text=Fallback";
                  }}
                />
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-semibold text-foreground text-sm sm:text-base ${
                      isLongTitle ? "line-clamp-2" : "truncate"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1 truncate">
                    OTT Streaming:{" "}
                    {frameworks.find((f: Framework) => f.value === item.category)?.label ||
                      item.category}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                    OTT Release Date: {item.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="overflow-x-hidden rounded-lg border border-slate-200 shadow-xl">
        <table className="min-w-full divide-y divide-slate-200 text-slate-800 text-[7px] sm:text-sm">
          <thead className="bg-black dark:bg-transparent">
            <tr>
              <th className="px-1 sm:px-3 py-1 sm:py-2 text-left text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider dark:text-muted-foreground w-[30%] sm:w-[20%]">
                Title
              </th>
              <th className="px-1 sm:px-3 py-1 sm:py-2 text-left text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider dark:text-muted-foreground w-[20%] sm:w-[15%]">
                Release Date
              </th>
              <th className="px-1 sm:px-3 py-1 sm:py-2 text-left text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider dark:text-muted-foreground w-[25%] sm:w-[20%]">
                Category
              </th>
              <th className="px-1 sm:px-3 py-1 sm:py-2 text-left text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider dark:text-muted-foreground w-[25%] sm:w-[40%]">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200 dark:bg-transparent dark:divide-muted">
            {filteredItems.map((item: Item) => {
              const isLongTitle = countWords(item.title) > 15;

              return (
                <tr
                  key={`${item.title}-${item.year}`}
                  className="even:bg-slate-50 dark:even:bg-transparent hover:bg-slate-100 dark:hover:bg-muted/30 transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-[1.01] active:bg-slate-100"
                >
                  <td
                    className={`px-1 sm:px-3 py-1 sm:py-2 font-semibold text-black dark:text-white ${
                      isLongTitle ? "line-clamp-2" : "truncate"
                    }`}
                  >
                    {item.title}
                  </td>
                  <td className="px-1 sm:px-3 py-1 sm:py-2 text-slate-600 dark:text-muted-foreground whitespace-nowrap">
                    {item.year}
                  </td>
                  <td className="px-1 sm:px-3 py-1 sm:py-2 text-slate-600 dark:text-muted-foreground truncate">
                    {frameworks.find((f: Framework) => f.value === item.category)?.label ||
                      item.category}
                  </td>
                  <td className="px-1 sm:px-3 py-1 sm:py-2 text-slate-600 dark:text-muted-foreground line-clamp-2">
                    {item.description}
                  </td>
                </tr>
              );
            })}
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
        <header className="flex flex-wrap sm:flex-nowrap sm:items-center sm:justify-between border-b px-4 py-2 gap-y-3">
          <div className="flex flex-col gap-y-2 w-full sm:flex-row sm:items-center sm:gap-2 sm:w-auto">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block text-lg md:text-xl font-bold text-black dark:text-white truncate">
                    <BreadcrumbLink href="#">Welcome to OTT Biriyani!</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Separator
                orientation="vertical"
                className="hidden sm:block h-4"
              />
              <ExampleCombobox
                value={selectedOtt}
                setValue={setSelectedOtt}
                frameworks={frameworks}
              />
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-2 sm:hidden">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-1.5 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white dark:border-gray-600 w-full"
              />
              <div className="flex items-center gap-1 rounded-lg border border-gray-200 dark:border-gray-700 p-1.5">
                <button
                  className={`inline-flex items-center justify-center p-0.5 w-7 h-7 rounded-md ${
                    viewMode === "table"
                      ? "bg-gray-900 dark:bg-gray-200 text-white"
                      : "bg-transparent"
                  } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 hover:scale-105`}
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
                  className={`inline-flex items-center justify-center p-0.5 w-7 h-7 rounded-md ${
                    viewMode === "grid"
                      ? "bg-gray-900 dark:bg-gray-200 text-white"
                      : "bg-transparent"
                  } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 hover:scale-105`}
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
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white dark:border-gray-600 w-64"
            />
            <div className="flex items-center gap-1 rounded-lg border border-gray-200 dark:border-gray-700 p-1.5">
              <button
                className={`inline-flex items-center justify-center p-0.5 w-7 h-7 rounded-md ${
                  viewMode === "table"
                    ? "bg-gray-900 dark:bg-gray-200 text-white"
                    : "bg-transparent"
                } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 hover:scale-105`}
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
                className={`inline-flex items-center justify-center p-0.5 w-7 h-7 rounded-md ${
                  viewMode === "grid"
                    ? "bg-gray-900 dark:bg-gray-200 text-white"
                    : "bg-transparent"
                } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 hover:scale-105`}
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
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 sm:p-6">
          {renderItems()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
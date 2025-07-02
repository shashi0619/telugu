"use client";

import { useState } from 'react';
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
import searchBar from "@/components/ui/searchbar";

// Framework type definition
interface Framework {
  value: string;
  label: string;
}

// OTT platforms
const frameworks: Framework[] = [
  { value: "amazon-prime", label: "Amazon Prime" },
  { value: "netflix", label: "Netflix" },
  { value: "jiohotstar", label: "JioHotstar" },
  { value: "aha", label: "Aha" },
  { value: "sun-nxt", label: "Sun Nxt" },
  { value: "sony-liv", label: "Sony Liv" },
];

// Sample data for demonstration
interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
}

const items: Item[] = [
  { id: 1, title: "Movie A", description: "Action blockbuster", category: "amazon-prime" },
  { id: 2, title: "Series B", description: "Crime drama series", category: "netflix" },
  { id: 3, title: "Show C", description: "Romantic comedy", category: "jiohotstar" },
  { id: 4, title: "Film D", description: "Sci-fi adventure", category: "aha" },
  { id: 5, title: "Drama E", description: "Historical drama", category: "sun-nxt" },
  { id: 6, title: "Thriller F", description: "Psychological thriller", category: "sony-liv" },
  { id: 7, title: "Movie G", description: "Family comedy", category: "amazon-prime" },
  { id: 8, title: "Series H", description: "Fantasy epic", category: "netflix" },
  { id: 9, title: "Show I", description: "Reality TV", category: "jiohotstar" },
  { id: 10, title: "Film J", description: "Horror movie", category: "aha" },
  { id: 11, title: "Drama K", description: "Social drama", category: "sun-nxt" },
  { id: 12, title: "Thriller L", description: "Mystery thriller", category: "sony-liv" },
  { id: 13, title: "Movie M", description: "Adventure film", category: "amazon-prime" },
  { id: 14, title: "Series N", description: "Sci-fi series", category: "netflix" },
  { id: 15, title: "Show O", description: "Comedy show", category: "jiohotstar" },
  { id: 16, title: "Film P", description: "Action thriller", category: "aha" },
  { id: 17, title: "Drama Q", description: "Biographical drama", category: "sun-nxt" },
  { id: 18, title: "Thriller R", description: "Crime thriller", category: "sony-liv" },
  { id: 19, title: "Movie S", description: "Romantic drama", category: "amazon-prime" },
  { id: 20, title: "Series T", description: "Documentary series", category: "netflix" },
];

export default function Page() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedOtt, setSelectedOtt] = useState('');

  // Filter items based on selected OTT platform
  const filteredItems = selectedOtt
    ? items.filter((item) => item.category === selectedOtt)
    : items;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block text-2xl font-bold text-black dark:text-white">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <ExampleCombobox value={selectedOtt} setValue={setSelectedOtt} frameworks={frameworks} />
            {/* View Toggle Buttons */}
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-1.5 px-1.5">
              <button
                className={`rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 p-0.5 w-7 h-7 rounded-md border-transparent focus-visible:ring-offset-2 focus-visible:ring-gray-900/30 text-gray-1000 group hover:enabled:bg-gray-100 dark:hover:enabled:bg-gray-200 ${viewMode === 'table' ? 'bg-gray-900 dark:bg-gray-200 text-white' : 'bg-transparent'}`}
                type="button"
                aria-label="Show Table View"
                onClick={() => setViewMode('table')}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  className={`h-5 w-5 transition-colors ${viewMode === 'table' ? 'text-white' : 'group-hover:text-gray-900'}`}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path>
                </svg>
              </button>
              <button
                className={`rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 p-0.5 w-7 h-7 rounded-md border-transparent focus-visible:ring-offset-2 focus-visible:ring-gray-900/30 text-gray-1000 group hover:enabled:bg-gray-100 dark:hover:enabled:bg-gray-200 ${viewMode === 'grid' ? 'bg-gray-900 dark:bg-gray-200 text-white' : 'bg-transparent'}`}
                type="button"
                aria-label="Show Card View"
                onClick={() => setViewMode('grid')}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  className={`h-5 w-5 transition-colors ${viewMode === 'grid' ? 'text-white' : 'group-hover:text-gray-900'}`}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
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

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Profile Dropdown */}
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
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          {viewMode === 'grid' ? (
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-muted/50 aspect-video rounded-xl p-4">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {frameworks.find((f) => f.value === item.category)?.label || item.category}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-muted">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Category</th>
                  </tr>
                </thead>
                <tbody className="bg-background divide-y divide-muted">
                  {filteredItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{item.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{item.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        {frameworks.find((f) => f.value === item.category)?.label || item.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
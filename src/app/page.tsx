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
} from "@radix-ui/react-dropdown-menu"; // Updated import
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ExampleCombobox } from "@/components/ui/combobox";
import searchBar from "@/components/ui/searchbar";

// Sample data for demonstration
const items = [
  { id: 1, title: "Item 1", description: "Description 1", category: "Category A" },
  { id: 2, title: "Item 2", description: "Description 2", category: "Category B" },
  { id: 3, title: "Item 3", description: "Description 3", category: "Category A" },
  { id: 4, title: "Item 4", description: "Description 4", category: "Category B" },
  { id: 5, title: "Item 5", description: "Description 5", category: "Category A" },
  { id: 6, title: "Item 6", description: "Description 6", category: "Category B" },
  { id: 7, title: "Item 7", description: "Description 7", category: "Category A" },
  { id: 8, title: "Item 8", description: "Description 8", category: "Category B" },
  { id: 9, title: "Item 9", description: "Description 9", category: "Category A" },
  { id: 10, title: "Item 10", description: "Description 10", category: "Category B" },
  { id: 11, title: "Item 11", description: "Description 11", category: "Category A" },
  { id: 12, title: "Item 12", description: "Description 12", category: "Category B" },
  { id: 13, title: "Item 13", description: "Description 13", category: "Category A" },
  { id: 14, title: "Item 14", description: "Description 14", category: "Category B" },
  { id: 15, title: "Item 15", description: "Description 15", category: "Category A" },
  { id: 16, title: "Item 16", description: "Description 16", category: "Category B" },
  { id: 17, title: "Item 17", description: "Description 17", category: "Category A" },
  { id: 18, title: "Item 18", description: "Description 18", category: "Category B" },
  { id: 19, title: "Item 19", description: "Description 19", category: "Category A" },
  { id: 20, title: "Item 20", description: "Description 20", category: "Category B" },
];

export default function Page() {
  const [viewMode, setViewMode] = useState('grid');

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
            <ExampleCombobox />
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
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6 text-gray-600"
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
              {items.map((item) => (
                <div key={item.id} className="bg-muted/50 aspect-video rounded-xl p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-xs text-gray-500 mt-2">{item.category}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
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
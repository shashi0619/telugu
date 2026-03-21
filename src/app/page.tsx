"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
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
import { frameworks, items2026, items2025, items2024, items2023, items2022 } from "@/components/data";

// Module-level: built once, included in SSR HTML so Google can crawl it
const allItemsStatic = [...items2026, ...items2025, ...items2024, ...items2023, ...items2022];
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "New Telugu Movies on OTT 2025 & 2026",
  "description": "Latest Telugu movies released on OTT platforms this week and this month",
  "numberOfItems": allItemsStatic.length,
  "itemListElement": allItemsStatic.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.title,
    "url": `https://www.ottbiryani.com/movie/${encodeURIComponent(item.title.replace(/\s+/g, "-").toLowerCase())}`,
  })),
};

const categoryColors: Record<string, string> = {
  "amazon-prime": "bg-amber-100 hover:bg-amber-200 active:bg-amber-200 dark:bg-amber-500/25 dark:hover:bg-amber-500/35 text-amber-800 dark:text-amber-300",
  netflix: "bg-red-100 hover:bg-red-200 active:bg-red-200 dark:bg-red-500/25 dark:hover:bg-red-500/35 text-red-800 dark:text-red-300",
  jiohotstar: "bg-green-100 hover:bg-green-200 active:bg-green-200 dark:bg-green-500/25 dark:hover:bg-green-500/35 text-green-800 dark:text-green-300",
  aha: "bg-blue-100 hover:bg-blue-200 active:bg-blue-200 dark:bg-blue-500/25 dark:hover:bg-blue-500/35 text-blue-800 dark:text-blue-300",
  "sun-nxt": "bg-orange-100 hover:bg-orange-200 active:bg-orange-200 dark:bg-orange-500/25 dark:hover:bg-orange-500/35 text-orange-800 dark:text-orange-300",
  "sony-liv": "bg-purple-100 hover:bg-purple-200 active:bg-purple-200 dark:bg-purple-500/25 dark:hover:bg-purple-500/35 text-purple-800 dark:text-purple-300",
  "": "bg-gray-100 hover:bg-gray-200 active:bg-gray-200 dark:bg-gray-600/40 dark:hover:bg-gray-600/60 text-gray-700 dark:text-gray-300",
  zee5: "bg-teal-100 hover:bg-teal-200 active:bg-teal-200 dark:bg-teal-500/25 dark:hover:bg-teal-500/35 text-teal-800 dark:text-teal-300",
  "etv-win": "bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-200 dark:bg-indigo-500/25 dark:hover:bg-indigo-500/35 text-indigo-800 dark:text-indigo-300",
  "lionsgate-play": "bg-pink-100 hover:bg-pink-200 active:bg-pink-200 dark:bg-pink-500/25 dark:hover:bg-pink-500/35 text-pink-800 dark:text-pink-300",
  "bms-stream": "bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-100 dark:bg-yellow-500/20 dark:hover:bg-yellow-500/30 text-yellow-800 dark:text-yellow-300",
  "disney-hotstar": "bg-blue-200 hover:bg-blue-300 active:bg-blue-300 dark:bg-blue-600/30 dark:hover:bg-blue-600/40 text-blue-900 dark:text-blue-200",
  jiocinema: "bg-red-200 hover:bg-red-300 active:bg-red-300 dark:bg-red-600/30 dark:hover:bg-red-600/40 text-red-900 dark:text-red-200",
  "hungama-play": "bg-green-200 hover:bg-green-300 active:bg-green-300 dark:bg-green-600/30 dark:hover:bg-green-600/40 text-green-900 dark:text-green-200",
  "galaxy-ott": "bg-purple-200 hover:bg-purple-300 active:bg-purple-300 dark:bg-purple-600/30 dark:hover:bg-purple-600/40 text-purple-900 dark:text-purple-200",
};

export default function Page() {
  const router = useRouter();
  const [selectedOtt, setSelectedOtt] = useState("");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const allItems = useMemo(() => [...items2026, ...items2025, ...items2024, ...items2023, ...items2022], []);

  const extractYear = (date: string): string => {
    const parts = date.split("-");
    return parts.length === 3 && parts[2].length === 4 ? parts[2] : "";
  };

  const filteredItems = allItems.filter((item) => {
    const itemYear = extractYear(item.year);
    const yearMatch = selectedYear ? itemYear === selectedYear : true;
    const ottMatch = selectedOtt ? item.category === selectedOtt : true;
    const searchMatch = searchQuery
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return yearMatch && ottMatch && searchMatch;
  });

  const handleCardClick = (title: string) => {
    const encodedTitle = encodeURIComponent(
      title.replace(/\s+/g, "-").toLowerCase()
    );
    router.push(`/movie/${encodedTitle}`);
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
    />
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
                    <BreadcrumbLink href="/" aria-label="OTT Biryani Home">
                      OTT Biryani
                    </BreadcrumbLink>
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
          </div>
          <div className="flex items-center gap-2">
            <input
              type="search"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search Telugu movies"
              className="px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 w-48 sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="button"
              onClick={() => setViewMode(viewMode === "grid" ? "table" : "grid")}
              className="ml-2 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium transition"
              title={viewMode === "grid" ? "Switch to Table View" : "Switch to Grid View"}
            >
              {viewMode === "grid" ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <rect x="3" y="3" width="6" height="6" rx="1" fill="currentColor"/>
                  <rect x="11" y="3" width="6" height="6" rx="1" fill="currentColor"/>
                  <rect x="3" y="11" width="6" height="6" rx="1" fill="currentColor"/>
                  <rect x="11" y="11" width="6" height="6" rx="1" fill="currentColor"/>
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <rect x="3" y="5" width="14" height="2" rx="1" fill="currentColor"/>
                  <rect x="3" y="9" width="14" height="2" rx="1" fill="currentColor"/>
                  <rect x="3" y="13" width="14" height="2" rx="1" fill="currentColor"/>
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* SEO H1 + intro */}
        <div className="px-4 pt-4 pb-0 sm:px-6">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Telugu OTT Release Dates
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Latest Telugu movies on Amazon Prime, Netflix, JioHotstar, Aha, ZEE5 and more — updated regularly.
          </p>

          {/* Year tabs */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {["All", "2026", "2025", "2024", "2023", "2022"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year === "All" ? "" : year)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  (year === "All" ? selectedYear === "" : selectedYear === year)
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "bg-white text-gray-700 border-gray-300 hover:border-black dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:border-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-4 sm:p-6">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {filteredItems.map((item) => {
                const bgColorClass =
                  categoryColors[item.category] ||
                  "bg-gray-100 hover:bg-gray-200 active:bg-gray-200";

                return (
                  <div key={`${item.title}-${item.year}`} className="contents">
                    <div
                      className="relative hidden md:flex  w-55 h-75 mb-12 flex-col rounded-xl bg-white dark:bg-gray-800/90 dark:border dark:border-gray-700/60 bg-clip-border text-gray-700 dark:text-gray-200 shadow-md dark:shadow-gray-900/60 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl dark:hover:shadow-gray-900 dark:hover:border-gray-500 mt-10"
                      onClick={() => handleCardClick(item.title)}
                    >
                      <div
                        className={`relative mx-4 -mt-8 h-36 w-36 self-center overflow-hidden rounded-xl bg-gradient-to-r ${bgColorClass} bg-clip-border text-white shadow-lg flex-shrink-0`}
                        style={{ marginBottom: "-1.5rem", zIndex: 2 }}
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full w-full text-sm font-bold opacity-60">
                            No Image
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col px-4 pt-10 pb-2">
                        <h5 className="mb-2 block font-sans text-base font-semibold leading-snug tracking-normal text-gray-900 dark:text-white antialiased truncate" title={item.title}>
                          {item.title}
                        </h5>
                        <div className="mt-2 flex flex-wrap gap-2">
                            <span
                            className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${
                              categoryColors[item.category] || "bg-gray-100 text-gray-700"
                            }`}
                            >
                            {frameworks.find((f) => f.value === item.category)?.label || item.category || "Unknown"}
                            </span>
                          <span className="inline-block rounded bg-blue-100 dark:bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
                            {item.year}
                          </span>
                          {item.genre && (
                            <span className="inline-block rounded bg-green-100 dark:bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-300">
                              {item.genre}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{item.description}</p>
                      </div>
                      <div className="px-4 pb-4 pt-0 mt-auto">
                        <button
                          type="button"
                          className="w-full select-none rounded-lg bg-white dark:bg-gray-700/60 text-black dark:text-white border border-black dark:border-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase shadow-md transition-all duration-200 hover:bg-black dark:hover:bg-red-600 hover:text-white dark:hover:border-red-600 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(item.title);
                          }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>


                   {/* mobile version */}


                    <div
                      className="border border-transparent hover:border-primary/50 shadow-md hover:shadow-2xl rounded-xl p-3 flex flex-row items-center transition-all duration-300 ease-in-out transform hover:scale-[1.02] bg-white dark:bg-gray-800 md:hidden cursor-pointer min-h-[120px]"
                      onClick={() => handleCardClick(item.title)}
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md mr-3 flex-shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-md mr-3 flex-shrink-0 flex items-center justify-center text-[10px] font-semibold text-white text-center px-1 ${bgColorClass.split(" ")[0]}`}>
                          No Image
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base truncate" title={item.title}>
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-1 truncate">
                          {item.genre}
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          OTT Streaming:{" "}
                          <span
                            className={`inline-block px-2 py-0.5 rounded bg-opacity-80 font-medium text-xs ${
                              categoryColors[item.category] || "bg-gray-100"
                            }`}
                          >
                            {frameworks.find((f) => f.value === item.category)?.label || item.category}
                          </span>
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                          OTT Release Date: {item.year}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="overflow-x-auto w-full">
              <table className="w-full border border-black dark:border-gray-700 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 text-sm">
                <thead className="bg-black dark:bg-gray-800">
                  <tr>
                    <th className="px-3 py-2 text-left font-bold text-white border-b border-black dark:border-gray-700">
                      Title
                    </th>
                    <th className="px-3 py-2 text-left font-bold text-white border-b border-black dark:border-gray-700 whitespace-nowrap">
                      Date
                    </th>
                    <th className="px-3 py-2 text-left font-bold text-white border-b border-black dark:border-gray-700 whitespace-nowrap">
                      OTT
                    </th>
                    <th className="hidden sm:table-cell px-3 py-2 text-left font-bold text-white border-b border-black dark:border-gray-700">
                      Genre
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, idx) => (
                    <tr
                      key={`${item.title}-${item.year}`}
                      className={`transition-all duration-200 cursor-pointer ${
                        idx % 2 === 0
                          ? "bg-gray-50 dark:bg-gray-800"
                          : "bg-white dark:bg-gray-900"
                      } hover:bg-gray-200 dark:hover:bg-gray-700`}
                      onClick={() => handleCardClick(item.title)}
                    >
                      <td className="px-3 py-2 font-semibold text-black dark:text-white border-b border-black/10 dark:border-gray-700">
                        {item.title}
                      </td>
                      <td className="px-3 py-2 text-gray-700 dark:text-gray-300 border-b border-black/10 dark:border-gray-700 whitespace-nowrap">
                        {item.year}
                      </td>
                      <td className="px-3 py-2 text-gray-700 dark:text-gray-300 border-b border-black/10 dark:border-gray-700 whitespace-nowrap">
                        {frameworks.find((f) => f.value === item.category)?.label || item.category}
                      </td>
                      <td className="hidden sm:table-cell px-3 py-2 text-gray-600 dark:text-gray-400 border-b border-black/10 dark:border-gray-700">
                        <div className="line-clamp-1">{item.genre}</div>
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
    </>
  );
}
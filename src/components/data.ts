export interface Framework {
  value: string;
  label: string;
}

export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
}

export const frameworks: Framework[] = [
  { value: "", label: "All OTTs" },
  { value: "amazon-prime", label: "Amazon Prime" },
  { value: "netflix", label: "Netflix" },
  { value: "jiohotstar", label: "JioHotstar" },
  { value: "aha", label: "Aha" },
  { value: "sun-nxt", label: "Sun Nxt" },
  { value: "sony-liv", label: "Sony Liv" },
];

export const items2025: Item[] = [
  { id: 1, title: "Movie A", description: "Action blockbuster", category: "amazon-prime", year: "2025", image: "https://placehold.co/100x100?text=Movie+A" },
  { id: 7, title: "Movie G", description: "Family comedy", category: "amazon-prime", year: "2025", image: "https://placehold.co/100x100?text=Movie+G" },
  { id: 13, title: "Movie M", description: "Adventure film", category: "amazon-prime", year: "2025", image: "https://placehold.co/100x100?text=Movie+M" },
  { id: 19, title: "Movie S", description: "Romantic drama", category: "amazon-prime", year: "2025", image: "https://placehold.co/100x100?text=Movie+S" },
];

export const items2024: Item[] = [
  { id: 2, title: "Series B", description: "Crime drama series", category: "netflix", year: "2024", image: "https://placehold.co/100x100?text=Series+B" },
  { id: 8, title: "Series H", description: "Fantasy epic", category: "netflix", year: "2024", image: "https://placehold.co/100x100?text=Series+H" },
  { id: 14, title: "Series N", description: "Sci-fi series", category: "netflix", year: "2024", image: "https://placehold.co/100x100?text=Series+N" },
  { id: 20, title: "Series T", description: "Documentary series", category: "netflix", year: "2024", image: "https://placehold.co/100x100?text=Series+T" },
];

export const items2023: Item[] = [
  { id: 3, title: "Show C", description: "Romantic comedy", category: "jiohotstar", year: "2023", image: "https://placehold.co/100x100?text=Show+C" },
  { id: 9, title: "Show I", description: "Reality TV", category: "jiohotstar", year: "2023", image: "https://placehold.co/100x100?text=Show+I" },
  { id: 15, title: "Show O", description: "Comedy show", category: "jiohotstar", year: "2023", image: "https://placehold.co/100x100?text=Show+O" },
];

export const items2022: Item[] = [
  { id: 4, title: "Film D", description: "Sci-fi adventure", category: "aha", year: "2022", image: "https://placehold.co/100x100?text=Film+D" },
  { id: 10, title: "Film J", description: "Horror movie", category: "aha", year: "2022", image: "https://placehold.co/100x100?text=Film+J" },
  { id: 16, title: "Film P", description: "Action thriller", category: "aha", year: "2022", image: "https://placehold.co/100x100?text=Film+P" },
];

export const items2021: Item[] = [
  { id: 5, title: "Drama E", description: "Historical drama", category: "sun-nxt", year: "2021", image: "https://placehold.co/100x100?text=Drama+E" },
  { id: 11, title: "Drama K", description: "Social drama", category: "sun-nxt", year: "2021", image: "https://placehold.co/100x100?text=Drama+K" },
  { id: 17, title: "Drama Q", description: "Biographical drama", category: "sun-nxt", year: "2021", image: "https://placehold.co/100x100?text=Drama+Q" },
];

export const items2020: Item[] = [
  { id: 6, title: "Thriller F", description: "Psychological thriller", category: "sony-liv", year: "2020", image: "https://placehold.co/100x100?text=Thriller+F" },
  { id: 12, title: "Thriller L", description: "Mystery thriller", category: "sony-liv", year: "2020", image: "https://placehold.co/100x100?text=Thriller+L" },
  { id: 18, title: "Thriller R", description: "Crime thriller", category: "sony-liv", year: "2020", image: "https://placehold.co/100x100?text=Thriller+R" },
];
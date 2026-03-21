import { items2026, items2025, items2024, items2023, items2022, frameworks } from "@/components/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import SafeImage from "@/components/SafeImage";

interface Props {
  params: Promise<{ slug: string }>;
}

const allItems = [...items2026, ...items2025, ...items2024, ...items2023, ...items2022];

function findMovie(slug: string) {
  const decodedSlug = decodeURIComponent(slug).replace(/-/g, " ").toLowerCase();
  return allItems.find(
    (item) => item.title.replace(/\s+/g, " ").trim().toLowerCase() === decodedSlug
  );
}

// Generate static paths for all movies (critical for sitemap + SEO)
export async function generateStaticParams() {
  return allItems.map((item) => ({
    slug: encodeURIComponent(item.title.replace(/\s+/g, "-").toLowerCase()),
  }));
}

function toSlug(title: string) {
  return encodeURIComponent(title.replace(/\s+/g, "-").toLowerCase());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const movie = findMovie(slug);

  if (!movie) {
    return {
      title: "Movie Not Found",
      description: "The requested movie could not be found on OTT Biryani.",
    };
  }

  const fullImageUrl = movie.image?.startsWith("http")
    ? movie.image
    : `https://www.ottbiryani.com${movie.image}`;

  const platformLabel =
    frameworks.find((f) => f.value === movie.category?.toLowerCase())?.label ||
    movie.category ||
    "OTT";

  const castText = Array.isArray(movie.cast)
    ? movie.cast.slice(0, 3).map((c) => c.split(" as ")[0].trim()).join(", ")
    : "";

  const releaseYear = movie.year?.split("-")?.[2] || "2026";

  return {
    title: `${movie.title} OTT Release Date (${releaseYear}) – ${platformLabel}, Cast & Streaming Details`,
    description: `${movie.title} is now streaming on ${platformLabel} (released ${movie.year}). Telugu ${movie.genre || "film"} with cast: ${castText}. Get OTT release date, platform, trailer & full details.`,
    keywords: Array.isArray(movie.tags) ? movie.tags : [],
    alternates: {
      canonical: `https://www.ottbiryani.com/movie/${toSlug(movie.title)}`,
    },
    openGraph: {
      title: `${movie.title} | OTT Biryani`,
      description: movie.description,
      url: `https://www.ottbiryani.com/movie/${toSlug(movie.title)}`,
      type: "video.movie",
      siteName: "OTT Biryani",
      images: [
        {
          url: fullImageUrl,
          width: 800,
          height: 600,
          alt: `${movie.title} OTT Release Poster`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${movie.title} | OTT Biryani`,
      description: movie.description,
      images: [fullImageUrl],
    },
  };
}

export default async function MovieDetailsPage({ params }: Props) {
  const { slug } = await params;
  const movie = findMovie(slug);

  if (!movie) return notFound();

  const fullImageUrl = movie.image?.startsWith("http")
    ? movie.image
    : `https://www.ottbiryani.com${movie.image}`;

  const platformLabel =
    frameworks.find((f) => f.value === movie.category?.toLowerCase())?.label ||
    movie.category ||
    "OTT";

  const castList = Array.isArray(movie.cast) ? movie.cast : [];
  const tagList = Array.isArray(movie.tags) ? movie.tags : [];
  const releaseYear = movie.year?.split("-")?.[2] || "2026";

  // Related movies: same platform first, then same genre, exclude current
  const relatedMovies = allItems
    .filter((m) => m.title !== movie.title)
    .sort((a, b) => {
      const aScore = (a.category === movie.category ? 2 : 0) + (a.genre === movie.genre ? 1 : 0);
      const bScore = (b.category === movie.category ? 2 : 0) + (b.genre === movie.genre ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, 4);

  const movieJsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.title,
    "description": movie.description,
    "image": fullImageUrl,
    "genre": movie.genre,
    "datePublished": movie.year,
    "url": `https://www.ottbiryani.com/movie/${toSlug(movie.title)}`,
    "actor": castList.map((c) => ({
      "@type": "Person",
      "name": c.split(" as ")[0].trim(),
    })),
    "keywords": tagList.join(", "),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the OTT release date of ${movie.title}?`,
        "acceptedAnswer": { "@type": "Answer", "text": `${movie.title} was released on OTT on ${movie.year} on ${platformLabel}.` },
      },
      {
        "@type": "Question",
        "name": `Which OTT platform is ${movie.title} available on?`,
        "acceptedAnswer": { "@type": "Answer", "text": `${movie.title} is available on ${platformLabel} (${releaseYear}).` },
      },
      {
        "@type": "Question",
        "name": `Is ${movie.title} available in Telugu?`,
        "acceptedAnswer": { "@type": "Answer", "text": `Yes, ${movie.title} is a Telugu ${movie.genre || "film"} streaming on ${platformLabel}.` },
      },
      {
        "@type": "Question",
        "name": `What is the genre of ${movie.title}?`,
        "acceptedAnswer": { "@type": "Answer", "text": `${movie.title} is a ${movie.genre || "Telugu"} film, now streaming on ${platformLabel}.` },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ottbiryani.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": movie.title,
        "item": `https://www.ottbiryani.com/movie/${toSlug(movie.title)}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movieJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Back Button */}
        <div className="px-4 pt-4 pb-2 max-w-5xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all shadow-sm">
              <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Back to all movies
          </a>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-12">
          {/* Hero Section */}
          <div className="mt-4 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col md:flex-row gap-0">
              {/* Poster */}
              <div className="w-full md:w-72 md:min-w-[18rem] flex-shrink-0">
                <SafeImage
                  src={movie.image}
                  alt={`${movie.title} poster`}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  {/* Platform badge */}
                  <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    {platformLabel}
                  </span>

                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {movie.title}
                  </h1>

                  {/* Genre pills */}
                  {movie.genre && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {movie.genre.split(",").map((g) => (
                        <span
                          key={g}
                          className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium"
                        >
                          {g.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta info */}
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📅</span>
                      <span><strong className="text-gray-800 dark:text-gray-200">OTT Release:</strong> {movie.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📺</span>
                      <span><strong className="text-gray-800 dark:text-gray-200">Platform:</strong> {platformLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Cast chips */}
                {castList.length > 0 && (
                  <div className="mt-5">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Cast</p>
                    <div className="flex flex-wrap gap-1.5">
                      {castList.slice(0, 6).map((c, i) => {
                        const name = c.split(" as ")[0].trim();
                        const role = c.includes(" as ") ? c.split(" as ")[1]?.trim() : null;
                        return (
                          <span
                            key={i}
                            title={role || name}
                            className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 font-medium"
                          >
                            {name}
                          </span>
                        );
                      })}
                      {castList.length > 6 && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          +{castList.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">About {movie.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
              {movie.description}
            </p>
          </div>

          {/* OTT Release Date & Platform Details */}
          <div className="mt-4 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">{movie.title} OTT Release Date &amp; Platform</h2>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p><strong className="text-gray-800 dark:text-gray-200">{movie.title} OTT Release Date:</strong> {movie.year}</p>
              <p><strong className="text-gray-800 dark:text-gray-200">{movie.title} OTT Platform:</strong> {platformLabel}</p>
              {movie.genre && <p><strong className="text-gray-800 dark:text-gray-200">Genre:</strong> {movie.genre}</p>}
              {castList.length > 0 && (
                <p><strong className="text-gray-800 dark:text-gray-200">Cast:</strong> {castList.slice(0, 4).map((c) => c.split(" as ")[0].trim()).join(", ")}</p>
              )}
            </div>
          </div>

          {/* Trailer */}
          {movie.trailerUrl && (
            <div className="mt-4 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Official Trailer</h2>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src={movie.trailerUrl.replace("watch?v=", "embed/")}
                  title={`${movie.title} Official Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Tags / Keywords */}
          {tagList.length > 0 && (
            <div className="mt-4 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Related Searches</h2>
              <div className="flex flex-wrap gap-2">
                {tagList.slice(0, 12).map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-4 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: `What is the OTT release date of ${movie.title}?`,
                  a: `${movie.title} was released on OTT on ${movie.year} on ${platformLabel}.`,
                },
                {
                  q: `Which OTT platform is ${movie.title} available on?`,
                  a: `${movie.title} is available on ${platformLabel}.`,
                },
                {
                  q: `Is ${movie.title} available in Telugu?`,
                  a: `Yes, ${movie.title} is a Telugu ${movie.genre || "film"} streaming on ${platformLabel}.`,
                },
                {
                  q: `What is the genre of ${movie.title}?`,
                  a: `${movie.title} is a ${movie.genre || "Telugu"} film, streaming on ${platformLabel} from ${movie.year}.`,
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
                  <p className="font-medium text-sm text-gray-900 dark:text-white mb-1">{q}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* You may also like */}
          {relatedMovies.length > 0 && (
            <div className="mt-4 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-4">You May Also Like</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {relatedMovies.map((m) => {
                  const mPlatform = frameworks.find((f) => f.value === m.category)?.label || m.category;
                  return (
                    <a
                      key={m.title}
                      href={`/movie/${encodeURIComponent(m.title.replace(/\s+/g, "-").toLowerCase())}`}
                      className="group flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 overflow-hidden transition-all hover:shadow-md"
                    >
                      {m.image && (
                        <SafeImage
                          src={m.image}
                          alt={m.title}
                          className="w-full h-28 object-cover group-hover:opacity-90 transition-opacity"
                        />
                      )}
                      <div className="p-2">
                        <p className="text-xs font-semibold text-gray-900 dark:text-white line-clamp-2 leading-snug">{m.title}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">{mPlatform} · {m.year}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

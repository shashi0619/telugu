import { items2025, items2024, items2023, items2022 } from "@/components/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import SafeImage from "@/components/SafeImage";

// Define Props type with params as a Promise
interface Props {
  params: Promise<{ slug: string }>;
}

// Server-side SEO metadata generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await params to get the slug
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug)
    .replace(/-/g, " ")
    .toLowerCase();

  const allItems = [...items2025, ...items2024, ...items2023, ...items2022];
  const movie = allItems.find(
    (item) => item.title.replace(/\s+/g, " ").trim().toLowerCase() === decodedSlug
  );

  if (!movie) {
    return {
      title: "Movie Not Found - OTT Biryani",
      description: "The requested movie could not be found.",
    };
  }

  const fullImageUrl = movie.image.startsWith("http")
    ? movie.image
    : `https://ottbiryani.com${movie.image}`;

  return {
    title: `${movie.title} - OTT Biryani`,
    description: movie.description,
    openGraph: {
      title: movie.title,
      description: movie.description,
      url: `https://ottbiryani.com/movies/${slug}`,
      type: "video.movie",
      images: [
        {
          url: fullImageUrl,
          width: 800,
          height: 600,
          alt: `${movie.title} Poster`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: movie.title,
      description: movie.description,
      images: [fullImageUrl],
    },
  };
}

// Server component
export default async function MovieDetailsPage({ params }: Props) {
  // Await params to get the slug
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug)
    .replace(/-/g, " ")
    .toLowerCase();

  // Search across all years for the movie
  const allItems = [...items2025, ...items2024, ...items2023, ...items2022];
  const movie = allItems.find(
    (item) => item.title.replace(/\s+/g, " ").trim().toLowerCase() === decodedSlug
  );

  if (!movie) return notFound();

  return (
    <>
      <div className="mb-4 mx-4 mt-4">
        <a
          href="/"
          className="inline-block px-2 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-black transition"
        >
          ← Back to Home
        </a>
      </div>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="bg-blue-50 rounded-md p-4">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <SafeImage
            src={movie.image}
            alt={movie.title}
            className="w-full h-96 object-cover rounded-md mb-6"
          />
        </div>

        <div className="bg-green-50 rounded-md p-4">
          <p className="text-md text-gray-500">
            <strong>Release Date:</strong> {movie.year}
          </p>
          <p className="text-md text-gray-500">
            <strong>Genre:</strong> {movie.genre}
          </p>
        </div>

        <div className="bg-yellow-50 rounded-md p-4">
          <p className="text-md text-gray-500">
            <strong>Cast:</strong> {movie.cast}
          </p>
        </div>

        <div className="bg-purple-50 rounded-md p-4">
          <p className="text-lg text-gray-700 mb-2">
            <strong>Description:</strong> {movie.description}
          </p>
        </div>

        <div className="bg-pink-50 rounded-md p-4">
          <p className="text-md text-gray-500">
            <strong>Category:</strong> {movie.category}
          </p>
          <p className="text-md text-gray-500">
            <strong>Tags:</strong> {movie.tags}
          </p>
        </div>

        <div className="bg-orange-50 rounded-md p-4">
          <p className="text-md text-gray-500">
            <strong>Trailer:</strong>
            {movie.trailerUrl ? (
              <div className="mt-2 flex justify-center">
                <iframe
                  width="75%"
                  height="315"
                  src={movie.trailerUrl.replace("watch?v=", "embed/")}
                  title={`${movie.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            ) : (
              <span> Not available</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
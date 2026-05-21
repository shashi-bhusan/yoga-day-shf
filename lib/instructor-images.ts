import manifest from "@/data/instructor-images-manifest.json";

export type InstructorImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  name: string;
  instagram?: string;
  social?: string;
  socialLabel?: string;
  greeting?: string;
  bio: string[];
};

type ManifestEntry = {
  file: string;
  width: number;
  height: number;
  label: string;
  name?: string;
  instagram?: string;
  social?: string;
  socialLabel?: string;
  greeting?: string;
  bio?: string[];
};

export function instructorImages(): InstructorImage[] {
  const list = manifest as ManifestEntry[];
  if (!Array.isArray(list)) return [];
  return list.map((entry) => {
    const name = entry.name ?? entry.label;
    return {
      src: `/images/mix/${encodeURIComponent(entry.file)}`,
      width: entry.width,
      height: entry.height,
      label: entry.label,
      name,
      instagram: entry.instagram,
      social: entry.social,
      socialLabel: entry.socialLabel,
      greeting: entry.greeting,
      bio: Array.isArray(entry.bio) ? entry.bio : [],
      alt: `Featured instructor — ${name}`,
    };
  });
}

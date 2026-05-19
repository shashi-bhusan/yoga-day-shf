import manifest from "@/data/instructor-images-manifest.json";

export type InstructorImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
};

type ManifestEntry = {
  file: string;
  width: number;
  height: number;
  label: string;
};

export function instructorImages(): InstructorImage[] {
  const list = manifest as ManifestEntry[];
  if (!Array.isArray(list)) return [];
  return list.map((entry) => ({
    src: `/images/mix/${encodeURIComponent(entry.file)}`,
    width: entry.width,
    height: entry.height,
    label: entry.label,
    alt: `Featured instructor — ${entry.label}`,
  }));
}

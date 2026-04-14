import Link from "next/link";
import { MarkdownBody } from "@/components/markdown-body";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function InfoPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main">
        <p className="mx-auto max-w-3xl px-5 pt-6 text-center text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline underline-offset-4">
            ← Back to the full site
          </Link>
        </p>
        <MarkdownBody />
      </main>
      <SiteFooter />
    </>
  );
}

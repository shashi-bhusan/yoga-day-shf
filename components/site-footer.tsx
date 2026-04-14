export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__orgs">
          <span>Scottish Hindu Foundation</span>
          <span className="site-footer__dot" aria-hidden>
            ·
          </span>
          <span>The Shankaracharya Foundation</span>
        </p>
        <p className="site-footer__note">
          Scotland&apos;s International Yoga Day — June 20, 2026
        </p>
        <p className="site-footer__note" style={{ marginTop: "0.5rem" }}>
          {
            "© 2026 Designed and Maintained by beenaIT Solutions. All rights reserved."
          }
        </p>
      </div>
    </footer>
  );
}

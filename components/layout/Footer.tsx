import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="font-semibold tracking-wide focus-visible:outline-none"
          >
            Zariya
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link
                  href="/consulting"
                  className="transition-colors hover:text-accent focus-visible:outline-none"
                >
                  Consulting
                </Link>
              </li>

              <li>
                <Link
                  href="/architecture"
                  className="transition-colors hover:text-accent focus-visible:outline-none"
                >
                  Architecture
                </Link>
              </li>

              <li>
                <Link
                  href="/academy"
                  className="transition-colors hover:text-accent focus-visible:outline-none"
                >
                  Academy
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-accent focus-visible:outline-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Zariya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
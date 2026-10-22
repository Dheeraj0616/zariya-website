
"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const frame = window.requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div
      className="page-transition"
      data-visible={visible ? "true" : "false"}
    >
      {children}
    </div>
  );
}

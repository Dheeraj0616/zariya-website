
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

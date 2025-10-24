"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteMarquee() {
  const pathname = usePathname();
  const mounted = useRef(false);
  const [tick, setTick] = useState(0);

  useEffect(() => { mounted.current = true; }, []);
  useEffect(() => {
    if (!mounted.current) return;
    setTick((t) => t + 1);
  }, [pathname]);

  return (
    <div className="header-marquee" aria-hidden>
      {/* key 变化以重启 CSS 动画 */}
      <div key={tick} className="header-marquee-strip" />
    </div>
  );
}


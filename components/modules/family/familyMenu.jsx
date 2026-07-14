import React, { useState, useEffect, useRef } from "react";
import FancyLink from "@/components/utils/fancyLink";

const FamilyMenu = ({
  familyListAPI,
  className = "",
  bgColor = "#FFF",
  onFamilyHover = false,
  ...props
}) => {
  const menuRef = useRef(null);
  // check family list data
  const getFillerNumber = () => {
    const data = familyListAPI.length;
    const gridTotal = Math.ceil(data / 3) * 3;
    return gridTotal - data;
  };

  // Mouse Leave & Enter for Family Button
  const familybutton_enter = (slug) => {
    if (!("ontouchstart" in window)) {
      const familyCards = document.querySelectorAll(".family-card");
      familyCards.forEach((card, id) => {
        if (card.getAttribute("data-store") === slug) {
          card.classList.add("show");
        }
      });
    }
  };

  const familybutton_leave = (id) => {
    const familyCards = document.querySelectorAll(".family-card");
    familyCards.forEach((card, id) => {
      card.classList.remove("show");
    });
  };

  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch("ontouchstart" in window);
    return () => {};
  }, []);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    let raf = 0;
    let applied = 0;
    const snap = () => {
      raf = 0;
      const dpr = window.devicePixelRatio || 1;
      const layoutTop = el.getBoundingClientRect().top - applied;
      const deviceTop = layoutTop * dpr;
      const frac = deviceTop - Math.round(deviceTop);
      const next = -frac / dpr;
      if (next !== applied) {
        applied = next;
        el.style.transform = next ? `translateY(${next}px)` : "";
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(snap);
    };

    snap();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={`sticky max-sm:hidden top-20 z-40 max-w-5xl mx-auto flex flex-wrap mb-12 items-stretch ${className}`}
      id="family-menu"
      {...props}
    >
      {familyListAPI.map((familydata, id) => (
        <FancyLink
          key={id}
          destination={`/family/${familydata.slug.current}`}
          onMouseEnter={() =>
            onFamilyHover && familybutton_enter(familydata.slug.current)
          }
          onMouseLeave={() => onFamilyHover && familybutton_leave(0)}
          className="group relative text-center uppercase overflow-hidden text-grayFont text-sm py-1 px-4 rounded-full"
          style={{
            backgroundColor: `${bgColor}`,
          }}
        >
          <div className="relative z-2">{familydata.title}</div>
          <div
            className={`absolute -inset-px w-[calc(100%+2px)] h-[calc(100%+2px)] z-0 ${
              touch
                ? "opacity-100"
                : " opacity-0 betterhover:group-hover:opacity-100"
            }`}
            style={{ backgroundColor: familydata.bgColor.hex }}
          />
          <div className="pointer-events-none absolute inset-0 z-3 rounded-full border border-black" />
        </FancyLink>
      ))}

      {[...Array(getFillerNumber())].map((content, i) => (
        <div
          className="relative rounded-full border border-black overflow-hidden"
          key={i}
          style={{
            backgroundColor: `${bgColor}`,
          }}
        >
          <div className="block w-full h-full bg-neutral-600 opacity-30" />
        </div>
      ))}
    </div>
  );
};

export default FamilyMenu;

import { useEffect } from "react";
import lax from "lax.js";

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "~/styles/laxjs.example.scroll.css";
import { cssBundleHref } from "@remix-run/css-bundle";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export default function LaxJSExampleHTMLInline() {
  useEffect(() => {
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    const container = document.querySelector(".container")!;
    const count = 100;

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "circle";
      container.appendChild(el);
    }

    lax.addElements(".circle", {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, "screenWidth/2", "screenWidth"],
          {
            easing: "easeInOutQuart",
          },
        ],
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
          {
            easing: "easeInOutCubic",
          },
        ],
        "border-radius": [
          ["elInY+200", "elCenterY", "elOutY-200"],
          [0, 100, 0],
          {
            easing: "easeInOutQuint",
          },
        ],
        "box-shadow": [
          ["elInY+200", "elCenterY", "elOutY-200"],
          [50, 0, 50],
          {
            easing: "easeInOutQuint",
            cssFn: (val) => {
              return `${val}px ${val}px ${val}px rgba(0,0,0,0.5)`;
            },
          },
        ],
      },
    });
  }, []);
  return (
    <div>
      <div className="container"></div>
    </div>
  );
}

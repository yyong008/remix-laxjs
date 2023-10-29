import { useEffect } from "react";
import lax from "lax.js";

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "~/styles/laxjs.example.sprite.css";
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

    const frameWidth = 370;
    const frameCount = 12;

    lax.addElements(".sprite", {
      scrollY: {
        "background-position": [
          [0, 1e9],
          [0, 1e9],
          {
            cssFn: function (val) {
              const frame = Math.floor(val / 10) % frameCount;
              const x = frame * frameWidth;

              return `-${x}px 0px`;
            },
          },
        ],
      },
    });
  }, []);
  return (
    <>
      <div className="sprite"></div>
    </>
  );
}

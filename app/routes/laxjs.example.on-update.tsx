import { useEffect } from "react";
import lax from "lax.js";

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "~/styles/laxjs.example.on-update.css";
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

    lax.addElements(
      "#text",
      {},
      {
        onUpdate: function (driverValues, domElement) {
          const scrollY = driverValues.scrollY[0];

          const oCount = Math.floor(scrollY / 10 + 1);
          const oString = Array.from({ length: oCount }, (v, i) => "o").join(
            ""
          );
          domElement.innerHTML = "scr" + oString + "ll";

          if (scrollY > 1000) {
            domElement.classList.add("pink");
          } else {
            domElement.classList.remove("pink");
          }
        },
      }
    );
  }, []);
  return (
    <div>
      <div id="text"></div>
    </div>
  );
}

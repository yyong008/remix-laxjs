import { useEffect, useLayoutEffect } from "react";
import lax from "lax.js";

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "~/styles/laxjs.example.html-inline.css";
import { cssBundleHref } from "@remix-run/css-bundle";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export default function LaxJSExampleHTMLInline() {
  useLayoutEffect(() => {
    lax.init();
    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });
  }, []);
  return (
    <>
      <div className="square lax lax_preset_spin:400:360 lax_preset_flipX"></div>
    </>
  );
}

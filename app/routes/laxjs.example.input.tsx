import { useEffect, useRef } from "react";
import lax from "lax.js";

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "~/styles/laxjs.example.input.css";
import { cssBundleHref } from "@remix-run/css-bundle";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export default function LaxJSExampleHTMLInline() {
  const inputRef = useRef();
  useEffect(() => {
    lax.init();

    // Add lax driver for inputLength
    lax.addDriver("inputLength", function () {
      return inputRef.current?.value.length;
    });

    lax.addElements("#input", {
      inputLength: {
        rotate: [
          [0, 100],
          [0, 360],
        ],
      },
    });
  }, []);
  return (
    <div>
      <input
        ref={inputRef}
        id="input"
        placeholder="type something..."
        autoComplete="false"
        autoFocus
      />
    </div>
  );
}

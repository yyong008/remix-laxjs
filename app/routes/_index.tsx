import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <Link to="/laxjs/example/cursor">laxjs.example.cursor</Link>
      <br />
      <Link to="/laxjs/example/html-inline">laxjs.example.html-inline</Link>
      <br />
      <Link to="/laxjs/example/inertia">laxjs.example.inertia</Link>
      <br />
      <Link to="/laxjs/example/input">laxjs.example.input</Link>
      <br />
      <Link to="/laxjs/example/on-update">laxjs.example.on-update</Link>
      <br />
      <Link to="/laxjs/example/scroll">laxjs.example.scroll</Link>
      <br />
      <Link to="/laxjs/example/snap-scroll">laxjs.example.snap-scroll</Link>
      <br />
      <Link to="/laxjs/example/sprite">laxjs.example.sprite</Link>
    </div>
  );
}

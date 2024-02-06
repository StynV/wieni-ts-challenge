import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const NotFound = () => (
  <main>
    <h1 className="text-3xl">
      Looks like you've stirred the wrong drink. This page must be on the rocks.
      Let's shake things up and get you{" "}
      <Link to="/" className="font-bold">
        back to the homepage
      </Link>
      , where the real party is! 🍸
    </h1>
  </main>
);
export default NotFound;

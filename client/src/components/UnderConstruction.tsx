import React from "react";
import "../styles/components/under-construction.scss";

type Props = {
  title?: string;
  message?: string;
  bg?: string; // optional background image URL
};

export default function UnderConstruction({
  title = "Page Under Construction",
  message = "We’re building this page. Please check back soon.",
  bg,
}: Props) {
  const defaultBg =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"; // fallback nature image

  return (
    <div
      className="uc-component"
      style={{ backgroundImage: `url(${bg || defaultBg})` }}
    >
      <div className="uc-overlay">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

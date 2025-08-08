import { useEffect, useState } from "react";
import ResourceSlider from "./ResourceSlider";

const CATEGORIES = ["meal", "workout", "nutrition"];

function getTitle(category: string) {
  switch (category) {
    case "meal":
      return "Meal Prep Guides";
    case "workout":
      return "Workout Routines";
    case "nutrition":
      return "Nutritional Education";
    default:
      return category;
  }
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    const fetchResources = async () => {
      const results: { [key: string]: any[] } = {};
      for (const category of CATEGORIES) {
        const res = await fetch(`/api/resources?category=${category}`);
        results[category] = await res.json();
      }
      setResources(results);
    };
    fetchResources();
  }, []);

  return (
    <div>
      {CATEGORIES.map((category) => (
        <section key={category} className="section">
          <h1>{getTitle(category)}</h1>
          <ResourceSlider resources={resources[category] || []} />
        </section>
      ))}
    </div>
  );
}

import Card from "../Card";

const services = [
  {
    title: "Personal Training",
    description: "1-on-1 fitness sessions tailored to your goals.",
  },
  {
    title: "Group Training",
    description: "Train with others and get access to shared resources.",
  },
  {
    title: "Whole Being Mentorship",
    description: "Holistic coaching for mind, body, and soul.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services">
      {services.map((s) => (
        <Card key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </Card>
      ))}
    </section>
  );
}

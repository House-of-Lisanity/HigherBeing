import UnderConstruction from "../../components/UnderConstruction";

export default function About() {
  return (
    <main>
      <UnderConstruction
        title="Flagship Program"
        message="Details coming soon — stay tuned!"
        bg="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
      />
    </main>
  );
}

// import { useEffect, useState } from "react";
// import Card from "../../components/Card";
// import { useQuery } from "@apollo/client";
// import { GET_ALL_SERVICES } from "../../graphql/queries/services";

// interface Service {
//   _id: string;
//   title: string;
//   description: string;
//   price: string;
//   features: string[];
// }

// function renderFeatures(features: string[]) {
//   return (
//     <ul>
//       {features.map((feature) => (
//         <li key={feature}>• {feature}</li>
//       ))}
//     </ul>
//   );
// }

// export default function ServicesPage() {
//   const [services, setServices] = useState<Service[]>([]);

//   const { loading, error, data } = useQuery(GET_ALL_SERVICES);

//   useEffect(() => {
//     if (data && data.allServices) {
//       setServices(data.allServices);
//     }
//   }, [data]);

//   return (
//     <div>
//       {services.map(({ _id, title, description, price, features }) => (
//         <section key={_id} className="section">
//           <Card>
//             <h2>{title}</h2>
//             <p>{description}</p>
//             {renderFeatures(features)}
//             <p>
//               <strong>Pricing:</strong> {price}
//             </p>
//           </Card>
//         </section>
//       ))}
//     </div>
//   );
// }

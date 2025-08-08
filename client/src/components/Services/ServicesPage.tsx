import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useQuery } from "@apollo/client";
import { GET_ALL_SERVICES } from "../../graphql/queries/services";

interface Service {
  _id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

function renderFeatures(features: string[]) {
  return (
    <ul>
      {features.map((feature) => (
        <li key={feature}>• {feature}</li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  const { loading, error, data } = useQuery(GET_ALL_SERVICES);

  useEffect(() => {
    if (data && data.allServices) {
      setServices(data.allServices);
    }
  }, [data]);

  return (
    <div>
      {services.map(({ _id, title, description, price, features }) => (
        <section key={_id} className="section">
          <Card>
            <h2>{title}</h2>
            <p>{description}</p>
            {renderFeatures(features)}
            <p>
              <strong>Pricing:</strong> {price}
            </p>
          </Card>
        </section>
      ))}
    </div>
  );
}

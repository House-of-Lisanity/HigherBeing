import Card from "../Card";

interface Resource {
  _id: string;
  title: string;
  description: string;
  type: string;
  url: string;
}

export default function ResourceSlider({
  resources,
}: {
  resources: Resource[];
}) {
  return (
    <div className="resource-slider">
      {resources.map((res) => (
        <Card key={res._id}>
          <h3>{res.title}</h3>
          <p>{res.description}</p>
          {renderPreview(res)}
        </Card>
      ))}
    </div>
  );
}

function renderPreview(resource: Resource) {
  const { type, url, title } = resource;

  if (type === "pdf") {
    return <iframe src={url} title={title} className="preview-frame" />;
  }
  if (type === "youtube") {
    return <iframe src={url} title={title} className="preview-frame" />;
  }
  if (type === "excel" || type === "spreadsheet") {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        Download Spreadsheet
      </a>
    );
  }
  if (type === "video") {
    return <video controls src={url} className="preview-video" />;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      Download
    </a>
  );
}

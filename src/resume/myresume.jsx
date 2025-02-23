export default function Myresume() {
  return (
    <div className="container-fluid  text-center cvhead">
      <h1 className="mb-4">My Resume</h1>
      <p>Click the button below to view my resume.</p>
      <a
        href="raunakgaggar.pdf" // File is inside "public" folder
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-3"
      >
        View Resume
      </a>
    </div>
  );
}

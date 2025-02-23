export default function Skills() {
  const skills = [
    "Python",
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "Node.js",
    "React",
    "Flutter",
    "Git & GitHub",
  ];

  return (
    <div className="container text-center my-5 myskill-container">
      <div className="row project">
        <h2 className="mb-4">My Skills</h2>
        <div className=" flex-wrap myskills">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card me-3 my-2 p-3 rounded shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="container-fluid about mt-5">
      <div className="row g-0 align-items-center">
        {/* Left Section (Image) */}
        <div className="col-sm-6 d-flex flex-column align-items-center p-2">
          <h1 className="fname mt-5">Raunak Gaggar</h1>
          <img src="rama.jpeg" alt="My profile" className="raunakimg" />
          <p className="email my-2">raunakgaggar94@gmail.com</p>
        </div>

        {/* Right Section (Text) */}
        <div className="col-sm-6 d-flex align-items-center justify-content-center p-2">
          <div>
            <p className="about-text">
              I am a web developer passionate about building modern,
              interactive, and scalable applications. Transitioning from a
              background in hardware networking, I specialize in creating web
              and mobile applications using <strong>React</strong> and{" "}
              <strong>Flutter</strong>. I also have experience working with
              UI/UX design and immersive technologies.
            </p>
            <br />
            <p className="about-text">
              I am currently seeking opportunities in web and mobile
              development. Check out my projects and let’s connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

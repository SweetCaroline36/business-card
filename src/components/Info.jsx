import selfie from "../assets/caroline.jpeg";

export default function Info() {
  return (
    <div className="info">
      <img src={selfie} className="photo" alt="Caroline Conner" />
      <div className="text">
        <h1>Caroline Conner</h1>
        <h3>Fullstack Developer</h3>
        <div className="buttons">
          <a href="mailto:6caroline6@gmail.com" target="_blank">
            <button className="email">
              <i className="fa-solid fa-envelope"></i>Email
            </button>
          </a>
          <a
            href="#https://www.linkedin.com/in/caroline-conner-a277a4144/"
            target="_blank"
          >
            <button className="linkedin">
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

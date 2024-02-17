import selfie from "../assets/caroline.jpeg";

export default function Info() {
  return (
    <div className="info">
      <img src={selfie} className="photo" alt="Caroline Conner" />
      <div className="text">
        <h1>Caroline Conner</h1>
        <h3>Fullstack Developer</h3>
        <div className="buttons">
          <a href="#" target="_blank">
            <button className="email">
              <i className="fa-solid fa-envelope"></i>Email
            </button>
          </a>
          <a href="#" target="_blank">
            <button className="linkedin">
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

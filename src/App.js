import "./App.css";
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="main">
      <div
        style={{ border: "solid 1px black", maxWidth: "100vw" }}
        className="submain"
      >
        <h1 className="title red">Squid game</h1>
        <br />
        <img src={imageInSrc} alt="pic" />
        <br />
        <img src="/imageInPublic.jpg" alt="pic2" />
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;

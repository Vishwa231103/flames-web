import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="app-container">
      <div className="card">
        <div className="hearts">
          <span>💖</span>
          <span>💘</span>
          <span>💕</span>
          <span>💓</span>
          <span>❤️</span>
        </div>
        <h1 className="title">💖 FLAMES</h1>
        <p className="subtitle">
          A nostalgic love game from school days,<br />
          reborn as a web experience ✨
        </p>

        <p style={{ marginBottom: "20px", fontSize: "14px", opacity: 0.9 }}>
          Enter two names and discover your relationship vibe 😌
        </p>

        <Link to="/flames">
          <button>💘 Start Playing</button>
        </Link>
          <Footer />
      </div>
    </div>
  );
}

export default Home;

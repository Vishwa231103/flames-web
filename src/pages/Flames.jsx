import { useState } from "react";
import FlamesForm from "../components/FlamesForm";
import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";  
import { Link } from "react-router-dom";

function Flames() {
  const [result, setResult] = useState(null);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">🔥 FLAMES</h1>
        <p className="subtitle">A tiny love experiment 💘</p>

        {!result && <FlamesForm onResult={setResult} />}

        {result && (
          <ResultCard
            result={result}
            onReset={() => setResult(null)}
          />
        )}

        <Link to="/" style={{ marginTop: "15px", display: "block" }}>
          ← Back to Home
        </Link>
          <Footer />
      </div>
    </div>
  );
}

export default Flames; // 🔥 THIS LINE IS MANDATORY

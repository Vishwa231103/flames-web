import { useState } from "react";
import { calculateFlames } from "../utils/flamesLogic";

function FlamesForm({ onResult }) {
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!yourName.trim() || !partnerName.trim()) {
      alert("Both names are required 😤");
      return;
    }

    const result = calculateFlames(yourName, partnerName);onResult(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Crush / Lover Name"
        value={partnerName}
        onChange={(e) => setPartnerName(e.target.value)}
      />

      <button type="submit">🔥 Check FLAMES</button>
    </form>
  );
}
<p>✨ Just for fun. Don’t take it seriously.</p>
export default FlamesForm;

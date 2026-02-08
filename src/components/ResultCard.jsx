function ResultCard({ result, onReset }) {
  const flamesData = {
    F: { text: "Friends 🤝", msg: "Besties forever… don’t overthink 😌" },
    L: { text: "Love ❤️", msg: "Uh-oh… butterflies incoming 🦋" },
    A: { text: "Affection 💕", msg: "Soft corner unlocked 🥰" },
    M: { text: "Marriage 💍", msg: "Start wedding savings 💸" },
    E: { text: "Enemies 😡", msg: "Avoid eye contact. Run." },
    S: { text: "Siblings 🧑‍🤝‍🧑", msg: "Bro-zoned permanently 😭" }
  };

  const data = flamesData[result];

  return (
    <div className="result-card">
      <h2>{data.text}</h2>
      <p>{data.msg}</p>

      <button onClick={onReset}>🔄 Try Again</button>
    </div>
  );
}

export default ResultCard;

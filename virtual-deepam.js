(() => {
  // ---------------------- Virtual Deepam Script (Realistic Edition - No Poster) ----------------------
  // Author: Sandeep Miriyala
  // -------------------------------------------------------------------
  const API_URL = "https://api.npoint.io/bf85e164f3b5719309ae"; // ✅ Your live endpoint

  document.addEventListener("DOMContentLoaded", async () => {
    const countEl = document.getElementById("deepamCount");
    const lightBtn = document.getElementById("lightBtn");
    const diya = document.getElementById("diya");
    const sparkle = document.getElementById("sparkle");
    const nameInput = document.getElementById("nameInput");

    // 🔥 Add realistic glowing and blessing styles
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes flicker {
        0% { text-shadow: 0 0 10px #ffcc33, 0 0 20px #ff9933, 0 0 30px #ff6600; }
        50% { text-shadow: 0 0 15px #ffd966, 0 0 25px #ffb84d, 0 0 40px #ff8000; }
        100% { text-shadow: 0 0 10px #ffcc33, 0 0 20px #ff9933, 0 0 30px #ff6600; }
      }
      .real-flame {
        animation: flicker 1s infinite alternate;
      }
      .blessing {
        position:absolute;
        top:0;
        left:50%;
        transform:translateX(-50%);
        color:#d97706;
        font-weight:600;
        opacity:0;
        font-family:'Noto Serif Telugu', serif;
        text-shadow:0 0 10px gold, 0 0 25px orange;
        pointer-events:none;
      }
      @keyframes blessingFloat {
        0% { opacity:1; transform:translate(-50%, 0); }
        100% { opacity:0; transform:translate(-50%, -80px); }
      }
      @keyframes floatUp {
        0% { transform: translate(-50%, 10px); opacity:1; }
        100% { transform: translate(-50%, -40px); opacity:0; }
      }
    `;
    document.head.appendChild(style);

    // 🪔 Load count
    async function loadCount() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        countEl.textContent = `మొత్తం వెలిగించిన దీపాలు: ${data.deepamCount}`;
        return data.deepamCount;
      } catch {
        countEl.textContent = "లెక్కను పొందలేకపోయాము 🙏";
        return 0;
      }
    }

    // 💾 Save count
    async function saveCount(newCount) {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deepamCount: newCount })
      });
    }

    // ✨ Glow & blessing animation
    function glowEffect() {
      diya.classList.add("real-flame");
      diya.style.transform = "scale(1.2)";
      sparkle.style.opacity = "1";
      sparkle.style.animation = "floatUp 1s ease-out";

      // Blessing animation
      const blessing = document.createElement("div");
      blessing.textContent = "✨ శుభమస్తు ✨";
      blessing.className = "blessing";
      document.getElementById("deepamContainer").appendChild(blessing);
      blessing.style.animation = "blessingFloat 2s ease-out forwards";

      setTimeout(() => {
        diya.classList.remove("real-flame");
        diya.style.transform = "scale(1)";
        sparkle.style.opacity = "0";
        blessing.remove();
      }, 2000);
    }

    // 🪔 Initialize and attach logic
    let count = await loadCount();

    lightBtn.addEventListener("click", async () => {
      const name = nameInput.value.trim() || "Anonymous";
      glowEffect();
      count++;
      countEl.textContent = `మొత్తం వెలిగించిన దీపాలు: ${count}`;
      await saveCount(count);

      // Feedback UI
      lightBtn.textContent = "🪔 వెలిగించబడింది!";
      lightBtn.style.backgroundColor = "#9c27b0";
      setTimeout(() => {
        lightBtn.textContent = "దీపం వెలిగించు";
        lightBtn.style.backgroundColor = "#ff9800";
      }, 2000);
    });
  });
})();

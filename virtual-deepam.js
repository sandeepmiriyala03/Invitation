(() => {
  // ---------------------- Virtual Deepam Script (Twin Deepams + Center Maharshi Image) ----------------------
  // Author: Sandeep Miriyala
  // Theme: Traditional Hindu Style – Twin Deepams, Aura, Blessings, Maharshi Image
  // -------------------------------------------------------------------
  const API_URL = "https://api.npoint.io/bf85e164f3b5719309ae"; // ✅ your live counter endpoint

  document.addEventListener("DOMContentLoaded", async () => {
    const countEl = document.getElementById("deepamCount");
    const lightBtn = document.getElementById("lightBtn");
    const deepamContainer = document.getElementById("deepamContainer");

    // 🪔 Create Deepams + Center Maharshi Image dynamically
    deepamContainer.innerHTML = `
      <div class="deepam-pair">
        <div id="diyaLeft" class="diya">🪔</div>
        <img src="Image 1.jpg" 
             alt="శ్రీ యాజ్ఞవల్క్య మహర్షి" 
             id="maharshiImage"
             class="maharshi-image">
        <div id="diyaRight" class="diya">🪔</div>
        <div id="sparkle" class="sparkle">✨</div>
      </div>
    `;
    const diyaLeft = document.getElementById("diyaLeft");
    const diyaRight = document.getElementById("diyaRight");
    const sparkle = document.getElementById("sparkle");
    const maharshiImage = document.getElementById("maharshiImage");

    // 🌸 Add glowing animation styles
    const style = document.createElement("style");
    style.innerHTML = `
      .deepam-pair {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        position: relative;
        flex-wrap: wrap;
      }

      .diya {
        font-size: 4.5rem;
        transition: transform 0.4s ease;
        filter: drop-shadow(0 0 12px gold);
        cursor: pointer;
      }

      @keyframes flameFlicker {
        0%, 100% { text-shadow: 0 0 10px #ffcc33, 0 0 20px #ff9933, 0 0 30px #ff6600; }
        50% { text-shadow: 0 0 25px #ffd966, 0 0 40px #ffb84d, 0 0 60px #ff8000; }
      }

      .real-flame {
        animation: flameFlicker 1.2s infinite alternate;
      }

      /* Center Image */
      .maharshi-image {
        width: 160px;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 0 25px rgba(255, 153, 0, 0.6), 0 0 50px rgba(255, 204, 0, 0.4);
        transition: transform 0.6s ease, box-shadow 0.6s ease;
      }

      .maharshi-image:hover {
        transform: scale(1.05);
        box-shadow: 0 0 35px rgba(255, 204, 0, 0.8), 0 0 70px rgba(255, 255, 0, 0.4);
      }

      .sparkle {
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.8rem;
        color: gold;
        opacity: 0;
        pointer-events: none;
      }

      @keyframes sparkleTrail {
        0% { opacity: 1; transform: translate(-50%, 10px) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -60px) scale(1.5); }
      }

      .blessing {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        color: #c27b00;
        font-weight: 600;
        opacity: 0;
        font-family: 'Noto Serif Telugu', serif;
        text-shadow: 0 0 10px gold, 0 0 25px orange;
        pointer-events: none;
      }

      @keyframes blessingFloat {
        0% { opacity: 1; transform: translate(-50%, 0); }
        100% { opacity: 0; transform: translate(-50%, -80px); }
      }

      /* Subtle Aura Glow */
      .aura {
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 40px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,204,0,0.4), transparent);
        filter: blur(6px);
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      @media (max-width: 600px) {
        .maharshi-image { width: 120px; }
        .diya { font-size: 3rem; }
        .deepam-pair { gap: 25px; }
      }
    `;
    document.head.appendChild(style);

    // Add glowing aura under lamps
    const aura = document.createElement("div");
    aura.className = "aura";
    deepamContainer.appendChild(aura);

    // 🕉️ Optional bell sound
    const bellSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_3de49d2608.mp3?filename=temple-bell-112141.mp3");

    // 🔢 Load existing count
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

    // 💾 Save new count
    async function saveCount(newCount) {
      try {
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ deepamCount: newCount })
        });
      } catch {
        console.warn("Count update failed, offline mode only");
      }
    }

    // ✨ Animate Deepams & Blessing
    function animateDeepams() {
      diyaLeft.classList.add("real-flame");
      diyaRight.classList.add("real-flame");
      sparkle.style.opacity = "1";
      sparkle.style.animation = "sparkleTrail 1.2s ease-out";

      aura.style.opacity = "1";

      const blessing = document.createElement("div");
      blessing.textContent = "🕉️ శుభమస్తు 🕉️";
      blessing.className = "blessing";
      deepamContainer.appendChild(blessing);
      blessing.style.animation = "blessingFloat 2s ease-out forwards";

      setTimeout(() => {
        diyaLeft.classList.remove("real-flame");
        diyaRight.classList.remove("real-flame");
        sparkle.style.opacity = "0";
        aura.style.opacity = "0";
        blessing.remove();
      }, 2000);
    }

    // 🌟 Initialize
    let count = await loadCount();

    // 🪔 Button action
    lightBtn.addEventListener("click", async () => {
      animateDeepams();

      try { bellSound.play(); } catch { /* ignore autoplay restrictions */ }

      count++;
      countEl.textContent = `మొత్తం వెలిగించిన దీపాలు: ${count}`;
      await saveCount(count);

      // Feedback message
      lightBtn.textContent = "🪔 వెలిగించబడింది!";
      lightBtn.style.backgroundColor = "#9c27b0";
      setTimeout(() => {
        lightBtn.textContent = "🪔 దీపం వెలిగించు";
        lightBtn.style.backgroundColor = "#ff9800";
      }, 2200);
    });
  });
})();

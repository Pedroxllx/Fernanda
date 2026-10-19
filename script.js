/* ==========================================================
   CONFIGURAÇÕES FÁCEIS DE PERSONALIZAR
   Pedro, você pode alterar essas informações abaixo!
   ========================================================== */
const CONFIG = {
  // Nome dos dois
  girlfriendName: "Fernanda",
  boyfriendName: "Pedro",

  // Data em que começaram a namorar: 6 de Julho de 2025 (Ano, Mês [0-11], Dia, Hora, Minuto, Segundo)
  // Lembrando: Julho é mês 6 no JavaScript (Janeiro = 0, ..., Julho = 6)
  startDate: new Date(2025, 6, 6, 0, 0, 0),

  // Lista de músicas do Spotify com suas legendas personalizadas!
  // Para colocar outra música: no Spotify, clique em Compartilhar -> Copiar Link da Música
  // Pegue o código final do link (ex: 0tgV2Di06FyKpA1z0VMD4v) e coloque no campo spotifyId!
  spotifyTracks: [
    {
      id: 1,
      title: "Preciso Dizer Que Te Amo",
      artist: "Cazuza",
      spotifyId: "0zLs0xjw4MYcMiXHsOvSgk",
      caption: "Essa música tem a sinceridade mais pura de tudo o que sinto por você. Não importa o dia ou o momento, o meu coração sempre transborda e precisa dizer o quanto eu te amo.",
      lyrics: "“E mesmo você não querendo me ver, eu preciso dizer que te amo... tanto, tanto.”"
    },
    {
      id: 2,
      title: "O Arquiteto",
      artist: "Jão",
      spotifyId: "18H6Y3x3tn786lEU4f17Oe",
      caption: "Planejar o nosso futuro, desenhar a nossa história e sonhar com cada capítulo ao seu lado é a minha maior certeza na vida. Tudo faz sentido com você.",
      lyrics: "“E eu já imaginei a nossa casa, os nossos planos... e não quero nada disso se não for com você.”"
    },
    {
      id: 3,
      title: "Monalisa",
      artist: "Jorge Vercillo",
      spotifyId: "35lcN4HxxsiwIq6ILSKVSh",
      caption: "A sua beleza, o seu jeito encantador e o seu sorriso iluminam tudo ao redor. Nenhuma obra de arte no mundo se compara a você.",
      lyrics: "“Monalisa não é mais mistério pra mim... Tão linda, a perfeição em forma de mulher.”"
    },
    {
      id: 4,
      title: "Raios da Manhã",
      artist: "Jorge Vercillo",
      spotifyId: "4KkCwVPKIAHGi0hsEFDZtM",
      caption: "Você traz o calor, a paz e a luz mais doce para a minha vida. Ter você por perto é como a brisa suave e a claridade de um lindo amanhecer.",
      lyrics: "“Como os primeiros raios da manhã, você ilumina tudo ao redor e aquece o meu coração.”"
    }
  ],

  // Lista inicial de fotos com títulos e legendas
  // Você pode colocar fotos suas na pasta "images/" (ex: 'images/minha-foto.jpg')
  // ou adicionar pelo botão na página!
  defaultPhotos: [

  ],

  // Motivos para te amar (Pote dos Motivos)
  reasons: [
    "Você gostar de sprite(eu tambem gosto).",
    "A sua risada.",
    "Seu cabelo castanho lindo perfeirto.",
    "Seus olhos castanhos maravilhosos.",
    "A sua maturidade.",
    "Seu jeitinho.",
    "Seu olhar.",

  ]
};

/* ==========================================================
   INICIALIZAÇÃO QUANDO A PÁGINA CARREGA
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar ícones Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Iniciar módulos
  initParticles();
  initCounter();
  initEnvelope();
  initPhotos();
  initSpotifyShowcase();
  initReasonsJar();
  initCelebrationButtons();
});

/* ==========================================================
   1. CANVAS DE CORAÇÕES & PARTÍCULAS INTERATIVAS
   ========================================================== */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(width < 768 ? 25 : 55, 60);

  // Paleta romântica de corações e brilhos
  const colors = ["#ff758f", "#ff4d6d", "#ffb3c1", "#ffccd5", "#c9184a"];

  class HeartParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 12 + 8;
      this.speedY = Math.random() * 0.8 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y < -30 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;

      // Desenho suave de coração
      ctx.beginPath();
      const s = this.size;
      ctx.moveTo(0, s / 4);
      ctx.quadraticCurveTo(0, 0, s / 4, 0);
      ctx.quadraticCurveTo(s / 2, 0, s / 2, s / 3);
      ctx.quadraticCurveTo(s / 2, 0, (3 * s) / 4, 0);
      ctx.quadraticCurveTo(s, 0, s, s / 4);
      ctx.quadraticCurveTo(s, s / 2, (3 * s) / 4, (3 * s) / 4);
      ctx.lineTo(s / 2, s);
      ctx.lineTo(s / 4, (3 * s) / 4);
      ctx.quadraticCurveTo(0, s / 2, 0, s / 4);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new HeartParticle());
  }

  // Interação do mouse soltando faíscas sutis
  window.addEventListener("pointermove", (e) => {
    if (Math.random() < 0.2) {
      const p = new HeartParticle();
      p.x = e.clientX;
      p.y = e.clientY;
      p.speedY = Math.random() * 1.5 + 0.5;
      p.size = Math.random() * 10 + 6;
      particles.push(p);
      if (particles.length > particleCount + 20) {
        particles.shift();
      }
    }
  });

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================
   2. CONTADOR DE TEMPO JUNTOS
   ========================================================== */
function initCounter() {
  const elYears = document.getElementById("count-years");
  const elMonths = document.getElementById("count-months");
  const elDays = document.getElementById("count-days");
  const elHours = document.getElementById("count-hours");
  const elMinutes = document.getElementById("count-minutes");
  const elSeconds = document.getElementById("count-seconds");

  function update() {
    const now = new Date();
    const start = CONFIG.startDate;

    let diff = now.getTime() - start.getTime();
    if (diff < 0) {
      if (elYears) elYears.textContent = "0";
      if (elMonths) elMonths.textContent = "0";
      if (elDays) elDays.textContent = "0";
      if (elHours) elHours.textContent = "00";
      if (elMinutes) elMinutes.textContent = "00";
      if (elSeconds) elSeconds.textContent = "00";
      return;
    }

    // Cálculo exato de anos, meses, dias, horas, minutos e segundos decorridos
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    if (elYears) elYears.textContent = Math.max(0, years);
    if (elMonths) elMonths.textContent = Math.max(0, months);
    if (elDays) elDays.textContent = Math.max(0, days);
    if (elHours) elHours.textContent = String(hours).padStart(2, "0");
    if (elMinutes) elMinutes.textContent = String(minutes).padStart(2, "0");
    if (elSeconds) elSeconds.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================
   3. CARTA DE AMOR INTERATIVA (ENVELOPE)
   ========================================================== */
function initEnvelope() {
  const envelopeWrapper = document.getElementById("envelopeWrapper");
  const envelope = document.getElementById("envelope");
  const closeBtn = document.getElementById("closeLetterBtn");

  if (!envelopeWrapper || !envelope) return;

  envelope.addEventListener("click", () => {
    envelopeWrapper.classList.add("open");
    // Disparar uma leve chuva de confetes quando abrir a cartinha!
    triggerRomanticConfetti();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      envelopeWrapper.classList.remove("open");
    });
  }
}

/* ==========================================================
   4. GALERIA DE FOTOS POLAROID & LIGHTBOX
   ========================================================== */
let activePhotoIndex = 0;
let currentPhotos = [];

// Identifica se uma foto é de exemplo/placeholder
function isExamplePhoto(photo) {
  if (!photo || !photo.url) return true;
  const url = String(photo.url).toLowerCase();
  if (
    url.includes("unsplash.com") ||
    url.includes("images.unsplash") ||
    url.includes("picsum.photos") ||
    url.includes("via.placeholder") ||
    url.includes("placeholder")
  ) {
    return true;
  }
  if (photo.isExample === true) {
    return true;
  }
  return false;
}

function initPhotos() {
  const savedPhotos = localStorage.getItem("fernanda_photos");

  if (savedPhotos) {
    try {
      const parsed = JSON.parse(savedPhotos);
      if (Array.isArray(parsed)) {
        // Remove automaticamente qualquer foto de exemplo antiga que tenha ficado no localStorage
        currentPhotos = parsed.filter(p => !isExamplePhoto(p));
        localStorage.setItem("fernanda_photos", JSON.stringify(currentPhotos));
      } else {
        currentPhotos = (CONFIG.defaultPhotos || []).filter(p => !isExamplePhoto(p));
      }
    } catch (e) {
      currentPhotos = (CONFIG.defaultPhotos || []).filter(p => !isExamplePhoto(p));
    }
  } else {
    currentPhotos = (CONFIG.defaultPhotos || []).filter(p => !isExamplePhoto(p));
  }

  renderPolaroids();
  initLightbox();
  initCustomizerModal();
}

function renderPolaroids() {
  const grid = document.getElementById("polaroidGrid");
  if (!grid) return;
  grid.innerHTML = "";

  if (currentPhotos.length === 0) {
    grid.innerHTML = `
      <div class="polaroid-empty-state">
        <div class="empty-icon">📷</div>
        <h3 class="empty-title">Nenhuma foto no álbum ainda</h3>
        <p class="empty-desc">Clique no botão abaixo para adicionar as fotos de vocês!</p>
        <button class="btn btn-primary btn-sm" onclick="document.getElementById('openAddPhotoModalBtn').click()">
          <i data-lucide="plus-circle"></i> Adicionar Foto
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  currentPhotos.forEach((photo, index) => {
    // Rotação leve e aleatória para o estilo natural de polaroids penduradas
    const rotations = [-2.5, 1.8, -1.2, 2.4, -3, 2];
    const rot = rotations[index % rotations.length];

    const card = document.createElement("div");
    card.className = "polaroid-card";
    card.style.transform = `rotate(${rot}deg)`;
    card.setAttribute("tabindex", "0");

    card.innerHTML = `
      <button class="delete-photo-btn" title="Excluir esta foto" aria-label="Excluir foto" type="button">
        <i data-lucide="trash-2"></i>
      </button>
      <div class="polaroid-image-wrapper">
        <img src="${photo.url}" alt="${photo.title || 'Foto'}" class="polaroid-img" loading="lazy">
      </div>
      <div class="polaroid-caption">
        <h3 class="polaroid-title">${photo.title || 'Nosso Momento'}</h3>
        <span class="polaroid-date">${photo.date || "❤️"}</span>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".delete-photo-btn")) return;
      openLightbox(index);
    });

    const delBtn = card.querySelector(".delete-photo-btn");
    if (delBtn) {
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (confirm(`Deseja remover a foto "${photo.title || 'selecionada'}" do álbum?`)) {
          deletePhoto(index);
        }
      });
    }

    grid.appendChild(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function deletePhoto(index) {
  if (index < 0 || index >= currentPhotos.length) return;
  currentPhotos.splice(index, 1);
  try {
    localStorage.setItem("fernanda_photos", JSON.stringify(currentPhotos));
  } catch (e) {
    console.warn("Storage update failed", e);
  }
  renderPolaroids();
  renderCustomizerPhotoList();

  const modal = document.getElementById("lightboxModal");
  if (modal && modal.classList.contains("active")) {
    if (currentPhotos.length === 0) {
      modal.classList.remove("active");
    } else {
      activePhotoIndex = Math.min(activePhotoIndex, currentPhotos.length - 1);
      updateLightboxContent();
    }
  }
}

function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const overlay = document.getElementById("lightboxOverlay");
  const closeBtn = document.getElementById("lightboxCloseBtn");
  const prevBtn = document.getElementById("lightboxPrevBtn");
  const nextBtn = document.getElementById("lightboxNextBtn");
  const deleteBtn = document.getElementById("lightboxDeleteBtn");

  if (!modal) return;

  const close = () => modal.classList.remove("active");

  overlay.addEventListener("click", close);
  closeBtn.addEventListener("click", close);

  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      const photo = currentPhotos[activePhotoIndex];
      if (confirm(`Deseja excluir a foto "${photo ? photo.title : 'selecionada'}" do álbum?`)) {
        deletePhoto(activePhotoIndex);
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    if (!currentPhotos.length) return;
    activePhotoIndex = (activePhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
    updateLightboxContent();
  });

  nextBtn.addEventListener("click", () => {
    if (!currentPhotos.length) return;
    activePhotoIndex = (activePhotoIndex + 1) % currentPhotos.length;
    updateLightboxContent();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });
}

function openLightbox(index) {
  if (!currentPhotos.length || !currentPhotos[index]) return;
  activePhotoIndex = index;
  updateLightboxContent();
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.add("active");
}

function updateLightboxContent() {
  const photo = currentPhotos[activePhotoIndex];
  if (!photo) return;

  const img = document.getElementById("lightboxImg");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxDesc");

  if (img) img.src = photo.url;
  if (title) title.textContent = photo.title || "Nosso Momento";
  if (desc) desc.textContent = photo.caption || "";
}

function renderCustomizerPhotoList() {
  const listEl = document.getElementById("customizerPhotoList");
  const countBadge = document.getElementById("photoCountBadge");
  if (countBadge) countBadge.textContent = currentPhotos.length;
  if (!listEl) return;

  listEl.innerHTML = "";

  if (currentPhotos.length === 0) {
    listEl.innerHTML = `<p class="empty-list-note">Nenhuma foto no álbum. Adicione uma foto acima!</p>`;
    return;
  }

  currentPhotos.forEach((photo, index) => {
    const item = document.createElement("div");
    item.className = "customizer-photo-item";
    item.innerHTML = `
      <img src="${photo.url}" alt="${photo.title || 'Foto'}" class="customizer-thumb">
      <div class="customizer-photo-info">
        <strong>${photo.title || "Momento Especial"}</strong>
        <span>${photo.date || "❤️"}</span>
      </div>
      <button type="button" class="btn-delete-item" title="Excluir foto" aria-label="Excluir">
        <i data-lucide="trash-2"></i>
      </button>
    `;

    const delBtn = item.querySelector(".btn-delete-item");
    if (delBtn) {
      delBtn.addEventListener("click", () => {
        if (confirm(`Remover "${photo.title || 'esta foto'}"?`)) {
          deletePhoto(index);
        }
      });
    }

    listEl.appendChild(item);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initCustomizerModal() {
  const modal = document.getElementById("customizerModal");
  const openBtn = document.getElementById("openAddPhotoModalBtn");
  const closeBtn = document.getElementById("customizerCloseBtn");
  const overlay = document.getElementById("customizerOverlay");
  const form = document.getElementById("addPhotoForm");
  const cleanExamplesBtn = document.getElementById("cleanExamplesBtn");
  const exportPhotosBtn = document.getElementById("exportPhotosBtn");

  if (!modal || !openBtn) return;

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    renderCustomizerPhotoList();
  });

  const closeModal = () => modal.classList.remove("active");

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  if (cleanExamplesBtn) {
    cleanExamplesBtn.addEventListener("click", () => {
      const beforeCount = currentPhotos.length;
      currentPhotos = currentPhotos.filter(p => !isExamplePhoto(p));
      try {
        localStorage.setItem("fernanda_photos", JSON.stringify(currentPhotos));
      } catch (e) {
        console.warn("Storage update error", e);
      }
      renderPolaroids();
      renderCustomizerPhotoList();
      const removed = beforeCount - currentPhotos.length;
      if (removed > 0) {
        alert(`${removed} foto(s) de exemplo foram removidas! Restaram apenas as fotos que você adicionou.`);
      } else {
        alert("Nenhuma foto de exemplo encontrada. Apenas as suas fotos estão no álbum!");
      }
    });
  }

  if (exportPhotosBtn) {
    exportPhotosBtn.addEventListener("click", () => {
      if (currentPhotos.length === 0) {
        alert("Adicione fotos antes de copiar o código!");
        return;
      }
      const codeSnippet = "defaultPhotos: " + JSON.stringify(currentPhotos, null, 2) + ",";
      navigator.clipboard.writeText(codeSnippet).then(() => {
        alert("Código das fotos copiado com sucesso! Você pode colar no script.js no lugar de defaultPhotos para fixá-las no site.");
      }).catch(() => {
        prompt("Copie o código abaixo e cole no script.js em CONFIG.defaultPhotos:", codeSnippet);
      });
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("newPhotoTitle").value.trim();
    const caption = document.getElementById("newPhotoCaption").value.trim();
    const fileInput = document.getElementById("newPhotoFile");
    const urlInput = document.getElementById("newPhotoUrl").value.trim();

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        addNewPhoto({
          title,
          caption,
          date: "Novo Momento",
          url: event.target.result
        });
        closeModal();
        form.reset();
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else if (urlInput) {
      addNewPhoto({
        title,
        caption,
        date: "Novo Momento",
        url: urlInput
      });
      closeModal();
      form.reset();
    } else {
      alert("Por favor, selecione uma foto ou insira uma URL!");
    }
  });
}

function addNewPhoto(photoObj) {
  currentPhotos.unshift(photoObj);
  try {
    localStorage.setItem("fernanda_photos", JSON.stringify(currentPhotos));
  } catch (e) {
    console.warn("Storage quota exceeded", e);
  }
  renderPolaroids();
  renderCustomizerPhotoList();
  triggerRomanticConfetti();
}

/* ==========================================================
   5. SPOTIFY SHOWCASE & LEGENDAS ROMÂNTICAS
   ========================================================== */
function initSpotifyShowcase() {
  const trackSelector = document.getElementById("trackSelector");
  const activeTrackTitle = document.getElementById("activeTrackTitle");
  const activeTrackArtist = document.getElementById("activeTrackArtist");
  const activeTrackCaption = document.getElementById("activeTrackCaption");
  const activeTrackLyrics = document.getElementById("activeTrackLyrics");
  const spotifyIframe = document.getElementById("spotifyIframe");

  if (!trackSelector || !CONFIG.spotifyTracks.length) return;

  trackSelector.innerHTML = "";

  CONFIG.spotifyTracks.forEach((track, index) => {
    const pill = document.createElement("button");
    pill.className = `track-pill ${index === 0 ? "active" : ""}`;
    pill.innerHTML = `
      <span class="track-pill-icon">🎵</span>
      <span class="track-pill-title">${track.title}</span>
    `;

    pill.addEventListener("click", () => {
      document.querySelectorAll(".track-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      selectTrack(track);
    });

    trackSelector.appendChild(pill);
  });

  function selectTrack(track) {
    if (activeTrackTitle) activeTrackTitle.textContent = track.title;
    if (activeTrackArtist) activeTrackArtist.textContent = track.artist;
    if (activeTrackCaption) {
      activeTrackCaption.style.opacity = 0;
      setTimeout(() => {
        activeTrackCaption.textContent = track.caption;
        activeTrackCaption.style.opacity = 1;
      }, 150);
    }
    if (activeTrackLyrics) activeTrackLyrics.textContent = track.lyrics;

    // Atualiza o player embed do Spotify oficial
    if (spotifyIframe) {
      spotifyIframe.src = `https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`;
    }
  }

  // Carregar a primeira faixa como padrão
  selectTrack(CONFIG.spotifyTracks[0]);
}

/* ==========================================================
   6. POTE DOS MOTIVOS PARA TE AMAR
   ========================================================== */
let lastReasonIndex = -1;

function initReasonsJar() {
  const jarBtn = document.getElementById("loveJarBtn");
  const nextBtn = document.getElementById("nextReasonBtn");
  const reasonText = document.getElementById("reasonText");
  const reasonIndex = document.getElementById("reasonIndex");

  if (!jarBtn || !nextBtn) return;

  function pullReason() {
    const list = CONFIG.reasons;
    let idx;
    do {
      idx = Math.floor(Math.random() * list.length);
    } while (idx === lastReasonIndex && list.length > 1);

    lastReasonIndex = idx;

    if (reasonText) {
      reasonText.style.opacity = 0;
      setTimeout(() => {
        reasonText.textContent = `“${list[idx]}”`;
        reasonText.style.opacity = 1;
      }, 150);
    }

    if (reasonIndex) {
      reasonIndex.textContent = `Motivo #${idx + 1}`;
    }

    triggerRomanticConfetti(0.2);
  }

  jarBtn.addEventListener("click", pullReason);
  nextBtn.addEventListener("click", pullReason);
}

/* ==========================================================
   7. CELEBRAÇÕES COM CONFETES E CORAÇÕES
   ========================================================== */
function initCelebrationButtons() {
  const navBtn = document.getElementById("navCelebrateBtn");
  const grandBtn = document.getElementById("grandCelebrateBtn");

  if (navBtn) {
    navBtn.addEventListener("click", () => triggerRomanticConfetti());
  }

  if (grandBtn) {
    grandBtn.addEventListener("click", () => {
      triggerGrandCelebration();
    });
  }
}

// Confetes delicados de amor
function triggerRomanticConfetti(scalar = 1) {
  if (typeof confetti !== "function") return;

  confetti({
    particleCount: Math.floor(40 * scalar),
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff4d6d", "#ff758f", "#c9184a", "#ffd166", "#ffffff"]
  });
}

// Super celebração final de aniversário com múltiplos canhões de confetes
function triggerGrandCelebration() {
  if (typeof confetti !== "function") return;

  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#ff4d6d", "#ff758f", "#ffb3c1", "#f72585", "#7209b7", "#ffb703"]
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#ff4d6d", "#ff758f", "#ffb3c1", "#f72585", "#7209b7", "#ffb703"]
      })
    );
  }, 250);
}

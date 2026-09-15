/*
  ============================================================
  6 MONTHS OF US — CUSTOMIZATION AREA
  ============================================================
  Replace image paths with your own files:
    images/photo1.jpg
    images/photo2.jpg
    etc.

  Replace the music file with:
    music/our-song.mp3

  You can also edit all messages below.
*/

/*
MEDIA CONFIGURATION
- Image: {type:"image", src:"images/photo.jpg", caption:"..."}
- GIF:   {type:"gif",   src:"images/cute.gif",  caption:"..."}
- Video: {type:"video", src:"videos/memory.mp4", poster:"images/poster.jpg", caption:"..."}
Plain paths such as "images/photo.jpg" still work.
For collage/photoWall pages, use media:[ ... ] instead of photos:[ ... ].
For a featured page, use media:{...} instead of photo:"...".
Videos use native controls and pause automatically when you turn the page.
*/

const CONFIG = {
  girlfriendName: "Rene",
  nickname: "Bbyy",
  anniversaryLabel: "6 Months",

  pages: [
    {
      title: "It all started here...",
      tag: "01 · THE BEGINNING",
      type: "beginning",
      date: "16th MARCH 2026",
      message: "I still remember the little moments that slowly turned into something so special. Somehow, six months later, here we are. ❤️",
     

     media: [
              {type:"image", src:"images/photo1.jpg", caption:"Our first date ❤️"},
              
              {type:"video", src:"videos/memory1.mp4", caption:"We getting closer to eachother❤"}
]
    },


    {
      title: "Our favorite moments",
      tag: "02 · LITTLE MEMORIES",
      type: "collage",
      message: "Some of my favorite memories are the random little moments that probably seemed ordinary at the time.",
      
        media: [

               {type:"image", src:"images/photo3.jpg", caption:"i love us❤️"},
               {type:"image", src:"images/photo4.jpg", caption:"look at us ❤️"},
               {type:"image", src:"images/photo5.jpg", caption:"hope to forever hold those hands ❤️"}
               
  ]
    },
    {
      title: "Little things I love",
      tag: "03 · ABOUT YOU",
      type: "notes",
      notes: [
        ["Your smile", "It makes everything feel a little better."],
        ["Our random conversations", "I could talk to you forever."],
        ["The way you make me feel safe", "your my home❤"],
        ["Just being with you", "Honestly, that's enough."]
      ]
    },
    {
      title: "Our photo wall",
      tag: "04 · US",
      type: "photoWall",
        media: [
              {type:"image", src:"images/photo6.jpg", caption:"hold you forever ❤️"},
              {type:"image", src:"images/photo7.jpg", caption:"everything is worth it for that hug❤️"},  
              {type:"video", src:"videos/memory2.mp4", caption:"Will be by your side always❤"},
              {type:"image", src:"images/photo8.jpg", caption:"we can be soo goofy😂❤️"},
              {type:"image", src:"images/photo10.jpg", caption:"We were made for eachother❤️"},
              {type:"video", src:"videos/memory3.mp4", caption:"together forever❤"}
]
    },
    {
      title: "A memory I'll keep",
      tag: "05 · FAVORITE MEMORY",
      type: "featured",
      date: "27TH APRIL 2026",
      message: "Out of all the memories we've made, this one will always have a special place in my heart. ❤️",
       media: [
              {type:"gif",   src:"images/cute.gif",  caption:"Will kiss you like this forever❤❤❤"}
]
    },
    {
      title: "Six months",
      tag: "06 · SIX MONTHS",
      type: "six"
    },
    {
      title: "Our little timeline",
      tag: "07 · MONTH BY MONTH",
      type: "timeline",
      months: [
        ["MONTH 1", "You were a wish come true❤❤"],
        ["MONTH 2", "You started to feel like home❤💖"],
        ["MONTH 3", "Every time spent felt like we were falling even more for eachother❤💖"],
        ["MONTH 4", "We CHOSE EACH OTHER THROUGH HARD TIMES❤💖"],
        ["MONTH 5", "WE BECAME INSEPERABLE❤ "],
        ["MONTH 6", "IN A BLINK OF AN EYE HALF A YEAR PASSED❤💖"]
      ]
    },
    {
      title: "Things we've done",
      tag: "08 · THE CHECKLIST",
      type: "checklist",
      items: [
        "Random conversations",
        "Laughing at stupid things",
        "Making memories",
        "Taking way too many pictures",
        "Spending time together",
        "Surviving each other's moods 😂",
        "Making six months feel like something much bigger"
      ]
    },
    {
      title: "My favorite photos of us",
      tag: "09 · PHOTO DUMP",
      type: "photoWall",
       media: [
              {type:"image", src:"images/photo13.jpg", caption:"my cutiepiee❤️"},
              {type:"image", src:"images/photo14.jpg", caption:"everything is worth it for that hug❤️"},  
              {type:"gif",   src:"images/cute.gif",  caption:"Will kiss you like this forever❤❤❤"},
              {type:"image", src:"images/photo15.jpg", caption:"we look sooso cuteeee❤️"},
              {type:"image", src:"images/photo17.jpg", caption:"MUAHH❤️"},
              {type:"image", src:"images/photo1.jpg", caption:"your hands only look good with mine❤️"}
]
    },
    {
      title: "One last thing...",
      tag: "10 · MY LETTER",
      type: "letter",
      letter: `Dear Rene💖❤,

Six months.

It honestly feels crazy how many memories we've managed to make in such a short amount of time.A blink of an eye and half a year together with the love of my life❤❤

You've become such a special part of my life, and I'm grateful for every laugh, every conversation, every random moment, and every memory we've created together.

I don't know exactly what the future holds, but I know I'm really happy that you're part of my story.

Happy 6 months, bbyy. ❤️

Here's to all the memories we've already made...

and all the ones we haven't made yet.

I LOVE YOU ❤️

LOOKING FORWARD TO SPEND THE REST OF MY LIFE WITH YOU ❤❤ MUAHHH
    }
  ]
};

const leftPage = document.getElementById("left-page");
const rightPage = document.getElementById("right-page");
const book = document.getElementById("book");
const cover = document.getElementById("cover");
const album = document.getElementById("album");
const openBtn = document.getElementById("open-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const prevBottom = document.getElementById("prev-bottom");
const nextBottom = document.getElementById("next-bottom");
const pageNumber = document.getElementById("page-number");
const totalPages = document.getElementById("total-pages");
const music = document.getElementById("bg-music");
const musicPanel = document.getElementById("music-panel");
const musicToggle = document.getElementById("music-toggle");
const playBtn = document.getElementById("play-btn");
const muteBtn = document.getElementById("mute-btn");
const volume = document.getElementById("volume");
const musicStatus = document.getElementById("music-status");
const memoryBtn = document.getElementById("memory-btn");
const drawer = document.getElementById("memory-drawer");
const closeDrawer = document.getElementById("close-drawer");
const thumbnails = document.getElementById("page-thumbnails");
const heartsLayer = document.getElementById("hearts-layer");
const toast = document.getElementById("toast");

let current = 0;
let busy = false;
let touchStartX = null;

totalPages.textContent = CONFIG.pages.length;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function mediaTypeFromPath(src) {
  const clean = String(src).split("?")[0].toLowerCase();
  if (/\.(mp4|webm|mov|m4v)$/.test(clean)) return "video";
  if (/\.gif$/.test(clean)) return "gif";
  return "image";
}

function mediaHTML(media, className = "", caption = "") {
  // Backward compatible: a plain string is treated as an image path.
  const item = typeof media === "string" ? { src: media } : (media || {});
  const src = item.src || "";
  const safeSrc = escapeHTML(src);
  const safeCaption = escapeHTML(item.caption ?? caption ?? "");
  const type = (item.type || mediaTypeFromPath(src)).toLowerCase();
  const alt = escapeHTML(item.alt || safeCaption || "Memory");

  if (type === "video") {
    const poster = item.poster ? ` poster="${escapeHTML(item.poster)}"` : "";
    const videoClass = item.contain ? "media-video media-contain" : "media-video";
    return `
      <figure class="media-frame video-frame ${className}">
        <video class="${videoClass}" controls playsinline preload="metadata"${poster}>
          <source src="${safeSrc}" type="${escapeHTML(item.mime || "video/mp4")}">
          Your browser does not support HTML5 video.
        </video>
        ${safeCaption ? `<figcaption>${safeCaption}</figcaption>` : ""}
      </figure>
    `;
  }

  return `
    <figure class="polaroid ${className}">
      <img src="${safeSrc}" alt="${alt}" loading="lazy">
      ${safeCaption ? `<figcaption>${safeCaption}</figcaption>` : ""}
    </figure>
  `;
}

function imageHTML(src, className = "", caption = "") {
  // Compatibility alias for existing page code.
  return mediaHTML(src, className, caption);
}

function contentFor(page, index) {
  const common = `<div class="page-content">`;

  if (page.type === "beginning") {
    return common + `
      <div class="two-photo">
        <div class="copy">
          <div class="page-tag">${escapeHTML(page.tag)}</div>
          <h2 class="page-title">${escapeHTML(page.title)}</h2>
          <p class="message">${escapeHTML(page.message)}</p>
          <p class="date">${escapeHTML(page.date)}</p>
        </div>
        <div class="photo" style="height:72%; width:50%; transform:rotate(3deg)">
          ${mediaHTML(
            (page.media && page.media.length ? page.media[0] : (page.photos && page.photos[0])),
            "",
            "us ♡"
          )}
        </div>
      </div>
      <div class="tape t1"></div>
      <div class="sticker" style="right:7%;top:10%">made with love ♡</div>
    ` + "</div>";
  }

  if (page.type === "collage" || page.type === "photoWall") {
    return common + `
      <div class="page-tag">${escapeHTML(page.tag)}</div>
      <h2 class="page-title">${escapeHTML(page.title)}</h2>
      ${page.message ? `<p class="message" style="margin:0 0 4px">${escapeHTML(page.message)}</p>` : ""}
      <div class="polaroid-grid">
        ${(page.media && page.media.length
          ? page.media
          : (page.photos || [])
        ).slice(0, 6).map((item, i) =>
          mediaHTML(
            item,
            "",
            typeof item === "object" && item.caption
              ? item.caption
              : ["one of my favorites", "this day ♡", "look at us", "memory", "you + me", "another one"][i]
          )
        ).join("")}
      </div>
      <div class="doodle" style="right:5%;bottom:8%">♡</div>
    ` + "</div>";
  }

  if (page.type === "notes") {
    return common + `
      <div class="page-tag">${escapeHTML(page.tag)}</div>
      <h2 class="page-title">${escapeHTML(page.title)}</h2>
      <p class="message" style="margin:0">A few things I could never stop loving about you...</p>
      <div class="note-grid">
        ${page.notes.map(n => `
          <div class="note">
            <strong>${escapeHTML(n[0])}</strong>
            <span>${escapeHTML(n[1])}</span>
          </div>
        `).join("")}
      </div>
      <div class="sticker" style="right:7%;bottom:8%">♡♡♡</div>
    ` + "</div>";
  }

  if (page.type === "featured") {
    return common + `
      <div class="page-tag">${escapeHTML(page.tag)}</div>
      <h2 class="page-title">${escapeHTML(page.title)}</h2>
      <div style="display:flex;align-items:center;gap:25px;height:78%">
        <div style="width:52%">
          <p class="message">${escapeHTML(page.message)}</p>
          <p class="date">${escapeHTML(page.date)}</p>
        </div>
        <div class="photo" style="position:relative;width:46%;height:85%;transform:rotate(-3deg)">
          ${mediaHTML(
            (page.media && page.media.length ? page.media[0] : page.photo),
            "",
            "keep this one ♡"
          )}
        </div>
      </div>
      <div class="tape" style="right:19%;top:13%;transform:rotate(4deg)"></div>
    ` + "</div>";
  }

  if (page.type === "six") {
    return common + `
      <div class="six-months">
        <div>
          <div class="page-tag">${escapeHTML(page.tag)}</div>
          <div class="big-six">6</div>
          <h2 class="page-title" style="margin-top:15px">MONTHS</h2>
          <div class="six-copy">
            Six months of laughs.<br>
            Six months of memories.<br>
            Six months of random conversations.<br>
            Six months of being us.<br><br>
            <b>Six months... and I'd still choose you. ❤️</b>
          </div>
        </div>
      </div>
    ` + "</div>";
  }

  if (page.type === "timeline") {
    return common + `
      <div class="page-tag">${escapeHTML(page.tag)}</div>
      <h2 class="page-title">${escapeHTML(page.title)}</h2>
      <div class="timeline">
        ${page.months.map(m => `
          <div class="timeline-row">
            <b>${escapeHTML(m[0])}</b>
            <span>${escapeHTML(m[1])}</span>
          </div>
        `).join("")}
      </div>
      <p class="message" style="text-align:center;margin-top:20px">And somehow every month keeps getting better. ♡</p>
    ` + "</div>";
  }

  if (page.type === "checklist") {
    return common + `
      <div class="page-tag">${escapeHTML(page.tag)}</div>
      <h2 class="page-title">${escapeHTML(page.title)}</h2>
      <div class="checklist">
        ${page.items.map(item => `<div class="check">☑ ${escapeHTML(item)}</div>`).join("")}
      </div>
    ` + "</div>";
  }

  if (page.type === "letter") {
    return common + `
      <div class="letter-wrap">
        <div class="letter">
          <h3>${escapeHTML(page.title)}</h3>
          ${escapeHTML(page.letter).split("\n").map(line => line.trim() ? `<p>${escapeHTML(line)}</p>` : `<div style="height:5px"></div>`).join("")}
        </div>
      </div>
    ` + "</div>";
  }

  return common + `<h2 class="page-title">${escapeHTML(page.title)}</h2></div>`;
}

function pauseAllVideos() {
  document.querySelectorAll("video").forEach(video => {
    try { video.pause(); } catch (_) {}
  });
}

function renderPage(index, direction = "next") {
  const page = CONFIG.pages[index];
  const html = contentFor(page, index);

  // On mobile, show only the current page.
  leftPage.classList.remove("page-active");
  rightPage.classList.remove("page-active");

  if (window.innerWidth <= 800) {
    rightPage.innerHTML = html;
    rightPage.classList.add("page-active");
    leftPage.innerHTML = "";
  } else {
    // Desktop uses the current page on the right and a previous page on the left.
    rightPage.innerHTML = html;
    rightPage.classList.add(direction === "next" ? "flip-next" : "flip-prev");

    if (index > 0) {
      leftPage.innerHTML = contentFor(CONFIG.pages[index - 1], index - 1);
    } else {
      leftPage.innerHTML = `
        <div class="page-content final">
          <div>
            <div class="page-tag">♡ OUR STORY</div>
            <h2 class="page-title">Every good story<br>has a beginning.</h2>
            <p class="message">And this one is ours.</p>
          </div>
        </div>`;
    }

    setTimeout(() => rightPage.classList.remove("flip-next", "flip-prev"), 600);
  }

  pauseAllVideos();

  current = index;
  pageNumber.textContent = current + 1;
  updateNav();
  updateThumbnails();
}

function updateNav() {
  const atStart = current === 0;
  const atEnd = current === CONFIG.pages.length - 1;

  prevBtn.disabled = atStart;
  prevBottom.disabled = atStart;
  nextBtn.disabled = atEnd;
  nextBottom.disabled = atEnd;

  [prevBtn, prevBottom].forEach(el => el.style.opacity = atStart ? ".35" : "1");
  [nextBtn, nextBottom].forEach(el => el.style.opacity = atEnd ? ".35" : "1");
}

function goTo(index, direction = "next") {
  if (busy || index < 0 || index >= CONFIG.pages.length || index === current) return;
  busy = true;
  renderPage(index, direction);
  setTimeout(() => {
    busy = false;
  }, 560);

  if (direction === "next") burstHearts(4);
}

function nextPage() {
  if (current < CONFIG.pages.length - 1) goTo(current + 1, "next");
  else showToast("You've reached the last page ❤️");
}

function prevPage() {
  if (current > 0) goTo(current - 1, "prev");
}

function burstHearts(amount = 6) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > .25 ? "♥" : "♡";
    heart.style.left = `${35 + Math.random() * 30}%`;
    heart.style.fontSize = `${12 + Math.random() * 16}px`;
    heart.style.setProperty("--duration", `${2.4 + Math.random() * 2}s`);
    heartsLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

function createBackgroundHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .25 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 13}px`;
  heart.style.setProperty("--duration", `${5 + Math.random() * 5}s`);
  heart.style.opacity = ".35";
  heartsLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 11000);
}

setInterval(() => {
  if (!album.classList.contains("hidden")) createBackgroundHeart();
}, 1800);

openBtn.addEventListener("click", async () => {
  cover.classList.add("hidden");
  album.classList.remove("hidden");
  renderPage(0);

  // Browser-safe music start: this is triggered by a user click.
  try {
    await music.play();
    setPlayingUI(true);
  } catch {
    setPlayingUI(false);
    showToast("Tap ♫ to play our song");
  }

  burstHearts(10);
});

nextBtn.addEventListener("click", nextPage);
nextBottom.addEventListener("click", nextPage);
prevBtn.addEventListener("click", prevPage);
prevBottom.addEventListener("click", prevPage);

book.addEventListener("click", (event) => {
  if (window.innerWidth <= 800) return;

  const rect = book.getBoundingClientRect();
  const x = event.clientX - rect.left;

  if (x > rect.width * .57) nextPage();
  else if (x < rect.width * .43) prevPage();
});

book.addEventListener("touchstart", event => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

book.addEventListener("touchend", event => {
  if (touchStartX === null) return;
  const endX = event.changedTouches[0].screenX;
  const diff = endX - touchStartX;

  if (Math.abs(diff) > 45) {
    if (diff < 0) nextPage();
    else prevPage();
  }

  touchStartX = null;
}, { passive: true });

// MUSIC
music.volume = Number(volume.value);

function setPlayingUI(playing) {
  playBtn.textContent = playing ? "❚❚" : "▶";
  musicStatus.textContent = playing ? "Playing our song" : "Tap play to start";
  document.querySelector(".record")?.classList.toggle("playing", playing);
}

playBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      setPlayingUI(true);
    } catch {
      showToast("Your browser blocked playback — tap again");
    }
  } else {
    music.pause();
    setPlayingUI(false);
  }
});

muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
  if (!music.muted && Number(volume.value) === 0) {
    volume.value = "0.55";
    music.volume = .55;
  }
});

volume.addEventListener("input", () => {
  music.volume = Number(volume.value);
  if (music.volume > 0) {
    music.muted = false;
    muteBtn.textContent = "🔊";
  }
});

music.addEventListener("play", () => setPlayingUI(true));
music.addEventListener("pause", () => setPlayingUI(false));

musicToggle.addEventListener("click", () => {
  musicPanel.classList.toggle("open");
});

// MEMORY DRAWER
function updateThumbnails() {
  thumbnails.innerHTML = CONFIG.pages.map((page, i) => `
    <button class="thumb ${i === current ? "active" : ""}" data-index="${i}">
      <b>${String(i + 1).padStart(2, "0")}</b>
      <small>${escapeHTML(page.tag.replace(/^\d+\s·\s/, ""))}</small>
    </button>
  `).join("");

  thumbnails.querySelectorAll(".thumb").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = Number(btn.dataset.index);
      goTo(target, target > current ? "next" : "prev");
      drawer.classList.add("hidden");
    });
  });
}

memoryBtn.addEventListener("click", () => {
  updateThumbnails();
  drawer.classList.remove("hidden");
});

closeDrawer.addEventListener("click", () => drawer.classList.add("hidden"));

drawer.addEventListener("click", e => {
  if (e.target === drawer) drawer.classList.add("hidden");
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// Keyboard controls
document.addEventListener("keydown", e => {
  if (cover.classList.contains("hidden") === false) return;

  if (e.key === "ArrowRight") nextPage();
  if (e.key === "ArrowLeft") prevPage();
  if (e.key === "Escape") drawer.classList.add("hidden");
});

// Keep the current page usable if device orientation/size changes.
window.addEventListener("resize", () => renderPage(current));

renderPage(0);
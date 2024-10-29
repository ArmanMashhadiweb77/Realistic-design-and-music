const image = document.querySelector("#cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const background = document.getElementById("background");

// Music
const songs = [
  {
    path:
      "media/Haamim - Roze Sefid.m4a",
    displayName: "RoseSefid Man Shima",
    artist: "Haamim",
    cover:
      "https://mypmcmusic.com/wp-content/uploads/2022/03/Haamim%20-%20Roze%20Sefid.jpg",
  },
  {
    path: "media/MOSSS-IDK_Gratomic.com.m4a",
    displayName: "IDK",
    artist: "Mosss",
    cover: "https://th.bing.com/th/id/OIP.OD5ZDQ9sz9RcRZu_5mot_wHaHa?rs=1&pid=ImgDetMain",
  },
  {
    path:
      "media/thenightwemet.m4a",
    displayName: "The Night We Met 5a",
    artist: "Lord Huron",
    cover:
      "https://th.bing.com/th/id/R.38d928748838fa3b122b82098e8e229b?rik=HQ5I5JU43Hz%2bXg&pid=ImgRaw&r=0"
  },
  {
    path:
    "media/09.summertime_sadness.m4a",
  displayName: "Summertime Sadness",
  artist: "Lana Del Rey ",
  cover:"https://th.bing.com/th/id/OIP.9BjmjaXPpx-2_JXKHwMFUgHaI3?rs=1&pid=ImgDetMain"
  },
  {
    path:
    "media/Shadmehr Aghili - Setareh.m4a",
  displayName: "Setareh",
  artist: "Shadmehr Aghili ",
  cover:"https://musiceto.com/wp-content/uploads/2021/11/Shadmehr-Aghili-Setareh.jpg"
  },
{
  path:
  "media/Ali Yasini - Nesfe Shab.m4a",
displayName: "Nesfe Shab",
artist: "Ali Yasini ",
cover:"https://tabamusic.com/wp-content/uploads/2023/02/Ali-Yasini-Nesfe-Shab.jpg"
},
{
  path:
  "media/cigarettes_after_sex_-_apocalypse.m4a",
displayName: "Apocalypse",
artist: "Cigarettes_After_Sex ",
cover:"https://ts8.tarafdari.com/contents/user628719/content-sound/t7nd_5ceeba85520b7fa74e5fe4702c02afb9.jpg"
},
{
  path:
  "media/15. Icimdeki Duman (Bonus Track).m4a",
displayName: "Icimdeki_Duman",
artist: "Ilyas_Yalcintas ",
cover:"https://th.bing.com/th/id/R.af56e72421d58e2ce0ed4910a3030e0b?rik=TY1On6z5E5QUBQ&pid=ImgRaw&r=0"
},
{
  path:
  "media/Mah.m4a",
displayName: "Shima(Mah)",
artist: "Mehrshad & Hera ",
cover:"https://th.bing.com/th/id/R.7e7b9f67c03d49b0b9ab8fa51cb71824?rik=JsMxOGU2ZU5EeQ&pid=ImgRaw&r=0"
},
{
  path:
  "../media/02.born_to_die.m4a",
displayName: "Born To Die",
artist: "Lana Del Rey ",
cover:"https://th.bing.com/th/id/R.7a184644c45592835be0b93c4ae0b0f7?rik=5gJ92Rmr8CAdXg&pid=ImgRaw&r=0"
},
{
  path:
  "media/Shadmehr Taghdir 320.m4a",
displayName: "Taghdir",
artist: "Shadmehr Aghili ",
cover:"https://th.bing.com/th/id/R.45e98813b0075eda25d7530b0e1f80d7?rik=uT95wqZdsTZoFQ&pid=ImgRaw&r=0"
},
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener("click", function () {
  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

// Update DOM
function loadSong(song) {
  console.log(song);
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = song.path;
  changeCover(song.cover);
}

function changeCover(cover) {
  image.classList.remove("active");
  setTimeout(() => {
    image.src = cover;
    image.classList.add("active");
  }, 100);
  background.src = cover;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const duration = e.srcElement.duration;
    const currentTime = e.srcElement.currentTime;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + "%";
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = durationMinutes + ":" + durationSeconds;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = music.duration;
  music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);
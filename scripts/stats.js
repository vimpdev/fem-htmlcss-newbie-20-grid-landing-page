const DATA_URL = "./data/stats.json";

async function fetchStats() {
  const response = await fetch(DATA_URL);

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
  }

  return response.json();
}


function createStat(stat) {
  const statCard = document.createElement("li");
  statCard.classList.add("stat", "stack");

  /* ******** */
  /* Stat Top */
  /* ******** */

  const statTop = document.createElement("div");
  statTop.classList.add("stat__top", "cluster");

  const statIcon = document.createElement("img");
  statIcon.src = stat.icon;
  statIcon.alt = "";

  const statValue = document.createElement("strong");
  statValue.textContent = stat.value;

  statTop.append(statIcon, statValue);

  /* *********** */
  /* Stat Bottom */
  /* *********** */
  const statBottom = document.createElement("div");
  statBottom.classList.add("stat__bottom", "stack");

  const statTitle = document.createElement("h3");
  statTitle.textContent = stat.title;

  const statDescription = document.createElement("p");
  statDescription.textContent = stat.description;

  statBottom.append(statTitle, statDescription);

  /* ********* */
  /* Stat Link */
  /* ********* */
  const statLink = document.createElement("a");
  statLink.classList.add("stat__link");
  statLink.href = stat.href;
  statLink.setAttribute("aria-label", stat.title);

  /* *********** */
  statCard.append(statTop, statBottom, statLink);

  return statCard;
}


function renderStats(stats) {
  const statsList = document.querySelector(".stats__list");
  if (!statsList) return;

  const fragment = document.createDocumentFragment();

  stats.forEach(stat => fragment.append(createStat(stat)));

  statsList.textContent = "";
  statsList.append(fragment);
}


export async function initStats() {
  try {
    const stats = await fetchStats();
    renderStats(stats);
  } catch (error) {
    console.error(error);
  }
}
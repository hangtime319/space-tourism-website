// ELEMENTS
const menuMobile = document.getElementById("menu_mobile");
const menu = document.getElementById("nav_menu");
const closeMenu = document.getElementById("close_menu");

// OPEN AND CLOSE MENU
menuMobile.addEventListener("click", () => {
  menuMobile.classList.add("max-sm:hidden");
  menu.classList.remove("max-sm:hidden");
  menu.classList.add("max-sm:animate-slide-in");
  closeMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  menu.classList.add("max-sm:hidden");
  menuMobile.classList.remove("max-sm:hidden");
});


// =======================================================

// DESTINATIONS

const listPlanet = document.querySelectorAll(".list_planet li");
const planetImage = document.getElementById("image_planet");
const namePlanet = document.getElementById("name_planet");
const descPlanet = document.getElementById("description_planet");
const distancePlanet = document.getElementById("distance_planet");
const travelPlanet = document.getElementById("travel_planet");

// console.log(travelPlanet);

async function loadDestinationsData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.destinations;
  } catch (error) {
    console.error("Não foi possível carregar dados:", error);
    return [];
  }
}

function updateDestinationInfo(destination) {
  // Adiciona a classe de animação aos elementos antes de atualizar o conteúdo
  planetImage.classList.add("animate-fade-in");
  namePlanet.classList.add("animate-fade-in");
  descPlanet.classList.add("animate-fade-in");
  distancePlanet.classList.add("animate-fade-in");
  travelPlanet.classList.add("animate-fade-in");

  namePlanet.textContent = destination.name;
  descPlanet.textContent = destination.description;
  distancePlanet.textContent = destination.distance;
  travelPlanet.textContent = destination.travel;
  planetImage.src = destination.images.png;
  planetImage.alt = destination.name;

  setTimeout(() => {
    planetImage.classList.remove("animate-fade-in");
    namePlanet.classList.remove("animate-fade-in");
    descPlanet.classList.remove("animate-fade-in");
    distancePlanet.classList.remove("animate-fade-in");
    travelPlanet.classList.remove("animate-fade-in");
  }, 500); // Ajuste o tempo conforme a duração da sua animação
}

document.addEventListener("DOMContentLoaded", async () => {
  const destinationsData = await loadDestinationsData();

  function handlePlanetClick(event, index) {
    event.preventDefault();

    listPlanet.forEach((li) =>
      li.querySelector("a").classList.remove("active__bottom")
    );

    event.target.classList.add("active__bottom");

    if (destinationsData && destinationsData[index]) {
      updateDestinationInfo(destinationsData[index]);
    }
  }

  listPlanet.forEach((item, index) => {
    const link = item.querySelector("a");
    link.addEventListener("click", (event) => handlePlanetClick(event, index));

    if (index === 0) {
      link.classList.add("active__bottom");
      if (destinationsData && destinationsData[0]) {
        updateDestinationInfo(destinationsData[0]);
      }
    }
  });
});

// ===============================================================================

// CREW
const roleCrew = document.getElementById("role_crew");
const nameCrew = document.getElementById("name_crew");
const bioCrew = document.getElementById("bio_crew");
const imageCrew = document.getElementById("image_crew");
const listCrew = document.querySelectorAll(".list_crew span");

async function loadCrewData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.crew;
  } catch (error) {
    console.error("Não foi possível carregar dados:", error);
    return [];
  }
}

function updateCrewInfo(crew) {
  roleCrew.classList.add("animate-fade-in");
  nameCrew.classList.add("animate-fade-in");
  bioCrew.classList.add("animate-fade-in");
  imageCrew.classList.add("animate-fade-in");

  roleCrew.textContent = crew.role;
  nameCrew.textContent = crew.name;
  bioCrew.textContent = crew.bio;
  imageCrew.src = crew.images.png;
  imageCrew.alt = crew.name;

  setTimeout(() => {
    roleCrew.classList.remove("animate-fade-in");
    nameCrew.classList.remove("animate-fade-in");
    bioCrew.classList.remove("animate-fade-in");
    imageCrew.classList.remove("animate-fade-in");
  }, 500); // Ajuste o tempo conforme a duração da sua animação
}

document.addEventListener("DOMContentLoaded", async () => {
  const crewData = await loadCrewData();

  function handleCrewClik(index) {
    listCrew.forEach((span) => span.classList.remove("active__span"));

    listCrew[index].classList.add("active__span");

    if (crewData && crewData[index]) {
      updateCrewInfo(crewData[index]);
    }
  }

  listCrew.forEach((item, index) => {
    item.addEventListener("click", () => handleCrewClik(index));

    if (listCrew.length > 0 && crewData && crewData.length > 0) {
      listCrew[0].classList.add("active__span");
      updateCrewInfo(crewData[0]);
    }
  });
});

// ===============================================================================

// TECHNOLOGY

const nameTec = document.getElementById("name_technology");
const descriptionTec = document.getElementById("description_technology");
const imageTec = document.getElementById("image_technology");
const listTecButtons = document.querySelectorAll(".list_technology button");

async function loadTechnologyData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.technology;
  } catch (error) {
    console.error("Não foi possível carregar dados:", error);
    return [];
  }
}

function updateTechnologyInfo(technology) {
  nameTec.classList.add("animate-fade-in");
  descriptionTec.classList.add("animate-fade-in");
  imageTec.classList.add("animate-fade-in");

  nameTec.textContent = technology.name;
  descriptionTec.textContent = technology.description;
  imageTec.src = technology.images.portrait;
  imageTec.alt = technology.name;

  setTimeout(() => {
    nameTec.classList.remove("animate-fade-in");
    descriptionTec.classList.remove("animate-fade-in");
    imageTec.classList.remove("animate-fade-in");
  }, 500); // Ajuste o tempo conforme a duração da sua animação
}

document.addEventListener("DOMContentLoaded", async () => {
  const technologyData = await loadTechnologyData();

  function handleTechnologyClick(event, index) {
    event.preventDefault();

    listTecButtons.forEach((button) => {
      button.classList.remove("active__number");
    });

    event.target.classList.add("active__number");

    if (technologyData && technologyData[index]) {
      updateTechnologyInfo(technologyData[index]);
    }
  }

  listTecButtons.forEach((button, index) => {
    button.addEventListener("click", (event) =>
      handleTechnologyClick(event, index)
    );

    if (index === 0) {
      button.classList.add("active__number");
      if (technologyData && technologyData[0]) {
        updateTechnologyInfo(technologyData[0]);
      }
    }
  });
});

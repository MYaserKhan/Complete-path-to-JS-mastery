const hamburger = document.querySelector('.hamburger-container');
const navbar = document.querySelector('.nav-list-items');

hamburger.addEventListener(('click'), () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('action');
});

// Array of project objects
const seeMore = document.querySelector('.seemore');
const seeInstructor = document.querySelector('.instructor-section');
const instructorSection = document.querySelector('.instructor-container');

seeMore.addEventListener(('click'), () => {
  seeInstructor.classList.toggle('setoff');
});

const instructorContainer = [
  {
    name: 'Joseph Gonzalez',
    title: 'Main Instructor',
    description: 'Joseph has been leading open-source projects at GitHub. Mostly related to JavaScript',
    Image: 'img/joseph.jpg',
  },
  {
    name: 'Jurica Koletic',
    title: '1th Instructor',
    description: 'Jurica is CEO of the marketing platform HubSpot, which he co-founded in 2006. ',
    Image: 'img/jurica.jpg',
  },
  {
    name: 'Sara Dam',
    title: '2nd Instructor',
    description: 'Fine artist-turned-coder, Sara Dam took a total immersion approach to learning web development.',
    Image: 'img/sara.jpg',
  },
  {
    name: 'Ayo Ogunseinde',
    title: '3st Instructor',
    description: 'Ayo the CEO of Smartsheet, a software-as-service (SaaS) company that offers applications for collaboration.',
    Image: 'img/ayo.jpg',
  },
];

instructorContainer.forEach((cardArtist) => {
  const content = ` 
    <div class="instructor">
    <div>
     <img class="image-instructor" src="${cardArtist.Image}" alt="Instructor-image">
    </div>
    <div class="cards">
     <h2>${cardArtist.name}</h2>
        <h3>${cardArtist.title}</h3>

        <p class="demo-text">${cardArtist.description}</p>
    </div>
            </div>
    `;
  instructorSection.innerHTML += content;
});
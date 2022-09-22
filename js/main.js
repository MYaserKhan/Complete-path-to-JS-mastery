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
    title: 'Leading open-source projects at GitHub',
    description: 'Joseph has been leading open-source projects at GitHub. Mostly related to JavaScript',
    Image: 'img/joseph.jpg',
    backImage: 'img/joseph.jpg',
  },
  {
    name: 'Jurica Koletic',
    title: 'CEO of the marketing platform HubSpot',
    description: 'Jurica is CEO of the marketing platform HubSpot, which he co-founded in 2006. ',
    Image: 'img/jurica.jpg',
  },
  {
    name: 'Sara Dam',
    title: 'Fine artist-turned-coder',
    description: 'Fine artist-turned-coder, Sara Dam took a total immersion approach to learning web development.',
    Image: 'img/sara.jpg',
  },
  {
    name: 'Ayo Ogunseinde',
    title: 'CEO of Smartsheet',
    description: 'Ayo the CEO of Smartsheet, a software-as-service (SaaS) company that offers applications for collaboration.',
    Image: 'img/ayo.jpg',
  },
  {
    name: 'Julia Leda',
    title: 'CEO & co-founder of Canva',
    description: 'Julia raised one of Australia’s early stage investment rounds, a disruptive online design and publishing tool.',
    Image: 'img/leda.jpg',
  },
  {
    name: 'Ryan Merkley',
    title: 'CEO of Creative Commons',
    description: 'Ryan has been leading open-source projects at the Mozilla Foundations such as open-source movement.',
    Image: 'img/Ryan.jpg',
  },
];

instructorContainer.forEach((cardInstructor) => {
  const content = ` 
    <div class="instructor">
    <div>
     <img class="image-instructor" src="${cardInstructor.Image}" alt="Instructor-image">
    </div>
    <div class="cards">
     <h2>${cardInstructor.name}</h2>
        <h3>${cardInstructor.title}</h3>
        <p class="demo-text">${cardInstructor.description}</p>
    </div>
            </div>
    `;
  instructorSection.innerHTML += content;
});
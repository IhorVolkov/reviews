const reviews = [
  {
    id: 1,
    name: 'Ihor Volkov',
    job: 'Junior FrontEnd Developer',
    img: './iv1.jpg',
    text: 'I`m Ihor Volkov and I`m just practicing my JS code to become a specialist in this area, so if read this simple example of my work and my skills are suit you, i am waiting for you offer',
  },
  {
    id: 2,
    name: 'Margarita Volkova',
    job: 'QA tester',
    img: './mv.jpg',
    text: 'Margo Volkova, I am a wife of Ihor Volkov. Early I used to be a master of nightshift at Zdorovja plant. I have an experince working as QA Tester in LLC Tester Company half a year',
  },
  {
    id: 3,
    name: 'Oleh Volkov',
    job: 'Senior FrontEnd Developer',
    img: './ov1.jpg',
    text: 'Oleh Volkov, I am the oldest brother of Ihor Volkov, I`m working as Senior JavaScript Developer at the some company(dont say) even if you trying to ask me this again, i tell you only if i want',
  },
  {
    id: 4,
    name: 'Valeria Volkova',
    job: 'Lawyer',
    img: './vv.jpg',
    text: 'I`m Valery Volkova and I am a wife of Oleh Volkov. Working at jurisprudence as lawyer more than 5 years, so I have much experience in this area. I am confident in my power, so dont play with me',
  },
  {
    id: 5,
    name: 'Vladislav Volkov',
    job: 'Project Manager',
    img: './vlv.jpg',
    text: 'I am the youngest cousin of Oleh, Ihor, Vycheslav. Now Iam working as Project manager at LLC Company. Early I used to be a teacher, I teached children such school subjects as Physics and Math',
  },
  {
    id: 6,
    name: 'Vyacheslav Khrushkov',
    job: 'Taxist',
    img: './sk.jpg',
    text: 'I am the middle cousin between Oleh, Ihor and Vladislav. I am still working as a taxist for a long time, I tryed to be JS Dev, but i throw it, cause havent enough patient to learn it',
  },
];

const img = document.getElementById('person-img');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const info = document.querySelector('.info');

const prevBtn = document.querySelector('.prev_btn');
const nxtBtn = document.querySelector('.next_btn');
const randomBtn = document.querySelector('.random_btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

function showPerson(person) {
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nxtBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener('click', function () {
  // console.log(getRandomNumber());
  showPerson(getRandomNumber());
});
function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}

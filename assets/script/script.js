const speakerDIV = document.querySelector('#speakers');
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const popupCloseBtn = document.querySelector('#popup-close-btn');
const popupMenuUl = document.querySelectorAll('.popup-menu ul li');

const speakers = [
  {
    name: 'Gbenga Omolokun',
    position: 'MD, VFD Microfinance Bank',
    about:
      'Integrate CRM with other SendPulse products seamlessly. Reach out to your leads and customers via email or chatbot directly from their contact card in your CRM.',
    image: 'assets/images/profile/profile1.jpg',
  },
  {
    name: 'Kehinde Ogundare',
    position: 'Country Manager, Nigeria,',
    about:
      'Integrate CRM with other SendPulse products seamlessly. Reach out to your leads and customers via email or chatbot directly from their contact card in your CRM.',
    image: 'assets/images/profile/profile2.jpg',
  },
  {
    name: 'Paul Okunaiya',
    position: 'Group Chief Investment Officer,',
    about:
      'Integrate CRM with other SendPulse products seamlessly. Reach out to your leads and customers via email or chatbot directly from their contact card in your CRM.',
    image: 'assets/images/profile/profile3.jpg',
  },
  {
    name: 'Damilola Teidi',
    position: '',
    about:
      'Integrate CRM with other SendPulse products seamlessly. Reach out to your leads and customers via email or chatbot directly from their contact card in your CRM.',
    image: 'assets/images/profile/profile4.jpg',
  },

  {
    name: 'Yvonne Obike',
    position: 'Co-Founder & COO, Payday',
    about:
      'Integrate CRM with other SendPulse products seamlessly. Reach out to your leads and customers via email or chatbot directly from their contact card in your CRM.',
    image: 'assets/images/profile/profile5.jpg',
  },
  {
    name: 'Tolu Adetuyi',
    position: 'Co-Founder, IdentityPass',
    about:
      'Integrate CRM with other SendPulse products seamlessly. Reach out to your leads and customers via email or chatbot directly from their contact card in your CRM.',
    image: 'assets/images/profile/profile6.jpg',
  },
];

speakerDIV.innerHTML = '';
for (let i = 0; i < speakers.length; i += 1) {
  const speaker = speakers[i];
  let html = '';
  html += '<div class="speaker col-lg-6 col-sm-12">';
  html
    += '<img class="image" src="./assets/images/presenter_effect.png" /> <div class="d-flex ">';
  html += '<div class="pic">';
  html += `<img src="${speaker.image}"/>`;
  html += '</div>';
  html += '<div class="detail">';
  html += `<h2>${speaker.name}</h2>`;
  html += `<h6>${speaker.position}</h6>`;
  html += `<p>${speaker.about}</p>`;
  html += '</div>';
  html += '</div>';
  html += '</div>';

  speakerDIV.innerHTML += html;
}

mobileMenuBtn.addEventListener('click', () => {
  const d = document.getElementsByClassName('popup-menu');
  for (let i = 0; i < d.length; i += 1) {
    d[i].className += ' popup-menu-active';
  }
});

popupCloseBtn.addEventListener('click', () => {
  const d = document.getElementsByClassName('popup-menu');
  for (let i = 0; i < d.length; i += 1) {
    d[i].classList.remove('popup-menu-active');
  }
});

popupMenuUl.forEach((menu) => {
  menu.addEventListener('click', () => {
    const d = document.getElementsByClassName('popup-menu');
    for (let i = 0; i < d.length; i += 1) {
      d[i].classList.remove('popup-menu-active');
    }
  });
});

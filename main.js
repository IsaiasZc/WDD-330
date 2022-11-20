const links = [
  {
    label: 'Week-1 notes',
    url: './week1/'
  },
  {
    label: 'Week-2 notes',
    url: './week2/'
  },
  {
    label: 'Week-3 notes',
    url: './week3/'
  },
  {
    label: 'Week-4 notes',
    url: './week4/'
  },
  {
    label: 'Week-5 notes',
    url: './week5/'
  },
  {
    label: 'Week-6 notes',
    url: './week6/'
  },
  {
    label: 'Week-7 notes',
    url: './week7/'
  },
  {
    label: 'Week-8 notes',
    url: './week8/'
  },
  {
    label: 'Week-9 notes',
    url: './week9/'
  },
  {
    label: 'Week-10 notes',
    url: './week10/'
  },
];

const LIST = document.getElementById('list');

links.forEach((link) => {
  
  LIST.innerHTML +=  newLi(link);

})


// Function to create a list item with a link
function newLi (link) {
  return `
    <li class="list__item"><a class="item__link" href="${link.url}">${link.label}</a></li>
  `
}

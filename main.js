const links = [
  {
    label: 'Week-1 notes',
    url: './week1/'
  }
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

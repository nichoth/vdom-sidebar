var createElement = require('virtual-dom/create-element');
var Sidebar = require('../Sidebar.js');

var items = {
  examplePage: {
    href: '/example',
    itemName: 'Example',
    children: {
      nestedPage: {
        itemName: 'nested page',
        href: '/example/nested'
      }
    }
  },
  anotherPage: { href: '/another-page', itemName: 'Another Page' }
};

var sidebarState = Sidebar({
  items: items,
  activeItem: 'nestedPage'
});

var virtualEl = Sidebar.render(sidebarState());
var el = createElement(virtualEl);

document.getElementById('content').appendChild(el);

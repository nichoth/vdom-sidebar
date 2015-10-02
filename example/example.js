var createElement = require('virtual-dom/create-element');
var Sidebar = require('../Sidebar.js');

var items = {
  examplePage: { href: '/example', name: 'Example' },
  anotherPage: { href: '/another-page', name: 'Another Page' }
};

var sidebarState = Sidebar({
  items: items
});

var virtualEl = Sidebar.render(sidebarState);
var el = createElement(virtualEl);

document.getElementById('content').appendChild(el);

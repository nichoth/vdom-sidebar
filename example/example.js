var createElement = require('virtual-dom/create-element');
var Sidebar = require('../Sidebar.js');

var items = {
  examplePage: { href: '/example', name: 'Example' },
  anotherPage: { href: '/another-page', name: 'Another Page' }
};

var sidebarState = Sidebar({
  items: items
});

var vel = Sidebar.render(sidebarState);
var el = createElement(vel);

document.getElementById('content').appendChild(el);

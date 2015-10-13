var vdom = require('virtual-dom');
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

var loop = require('main-loop')(sidebarState(), Sidebar.render, vdom);
sidebarState(loop.update);

// var virtualEl = Sidebar.render(sidebarState());
// var el = createElement(virtualEl);

document.getElementById('content').appendChild(loop.target);

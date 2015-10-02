# vdom sidebar

virtual-dom sidebar component

## install

    $ npm install vdom-sidebar

## example

```js
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
```

## demo

https://1b2b483006caf4a3a131e4ab0150fcec25b38e7d.htmlb.in

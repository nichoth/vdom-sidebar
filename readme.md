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

https://191260844b2013f02187905a867b75c6d5e1ea2c.htmlb.in

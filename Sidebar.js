var h = require('virtual-dom/h');
var map = require('lodash.map');
var state = require('@nichoth/state');
var observ = require('observ');
var struct = require('observ-struct');

var spinner = require('./lib/spinner.js');

module.exports = Sidebar;

/**
 * opts = {
 *   loading: false,
 *   activeItem: 'myItem',
 *   items: {
 *     myItem: { href: '', itemName: '' }
 *   }
 * }
 */
function Sidebar(opts) {

  var s = state({
    loading: observ(opts.loading || false),
    activeItem: observ(opts.activeItem || null),
    items: struct(opts.items)
  });

  return s;
}

Sidebar.render = function render(state) {
  console.log(state);
  var activeItem = state.activeItem;
  var items = state.items;

  var links = map(items, function(item, k) {

    var active = activeItem ? (k === activeItem) : false;

    var children = map(item.children || {}, function(child, key) {
      var active = activeItem ? (key === activeItem) : false;
      return h('li.vdom-sidebar-child'+(active ? '.active' : ''), [
        h('a', {href: child.href}, [child.itemName])
      ]);
    });
    var childrenEl = h('ul.vdom-sidebar-children', children);

    return h('li'+(active ? '.active' : ''), {key: k}, [
      h( 'a', { href: item.href }, [item.itemName] ),
      (state.loading && active ? spinner() : ''),
      childrenEl
    ]);

  });

  return h('div.vdom-sidebar', [
    h('ul.vdom-sidebar-nav', links)
  ]);
};

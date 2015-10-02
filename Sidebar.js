var h = require('virtual-dom/h');
var map = require('lodash.map');

var spinner = require('./lib/spinner.js');

module.exports = Sidebar;

/**
 * opts = {
 *   loading: false,
 *   activeItem: 'myItem',
 *   items: {
 *     myItem: { href: '', name: '' }
 *   }
 * }
 */
function Sidebar(opts) {
  var state = {
    loading: opts.loading,
    activeItem: opts.activeItem,
    items: opts.items
  };

  return state;
}

Sidebar.render = function render(state) {
  var activeItem = state.activeItem;
  var items = state.items;

  var links = map(items, function(item, k) {

    var active = activeItem ? (k === activeItem) : false;

    return h('li'+(active ? '.active' : ''), {key: k}, [
      h( 'a', { href: item.href }, [item.name] ),
      (state.loading && active ? spinner() : '')
    ]);

  });

  return h('div.vdom-sidebar', [
    h('ul.vdom-sidebar-nav', links)
  ]);
};
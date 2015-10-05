var h = require('virtual-dom/h');
var map = require('lodash.map');
var extend = require('xtend');
var observ = require('observ');
var observStruct = require('observ-struct');

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
  var copy = extend(opts);
  var state = observStruct({
    loading: observ(copy.loading || false),
    activeItem: observ(copy.activeItem),
    items: observStruct(copy.items || {})
  });

  return state;
}

Sidebar.render = function render(observableState) {
  var state = observableState();
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

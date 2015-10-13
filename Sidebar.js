var h = require('virtual-dom/h');
var map = require('lodash.map');
var reduce = require('lodash.reduce');
var state = require('@nichoth/state');
var struct = require('observ-struct');

var spinner = require('./lib/spinner.js');
var SidebarItem = require('./lib/SidebarItem.js');

module.exports = Sidebar;


function Sidebar(opts) {

  var itemsState = struct(
    reduce(opts.items || {}, function(acc, item, k) {
      acc[k] = SidebarItem({
        item: item,
        active: (k === opts.activeItem)
      });
      return acc;
    }, {})
  );

  var s = state({
    items: itemsState
  });

  return s;
}

Sidebar.render = function render(state) {

  var links = map(state.items, function(item) {
    return SidebarItem.render(item);
  });

  return h('div.vdom-sidebar', [
    h('ul.vdom-sidebar-nav', links)
  ]);
};

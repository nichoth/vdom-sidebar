var h = require('virtual-dom/h');
var state = require('@nichoth/state');
var observ = require('observ');

module.exports = SidebarItem.js;

function SidebarItem(opts) {
  var s = state({
    isExpanded: observ(opts.isExpanded || false)
  });
  return s;
}

SidebarItem.render = function(state) {
  return h('div', []);
};

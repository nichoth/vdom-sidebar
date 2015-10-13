var h = require('virtual-dom/h');
var state = require('@nichoth/state');
var observ = require('observ');
var struct = require('observ-struct');
var reduce = require('lodash.reduce');
var map = require('lodash.map');

module.exports = SidebarItem;

function SidebarItem(opts) {
  var s = state({
    isExpanded: observ(opts.isExpanded || false),
    itemName: observ(opts.item.itemName || ''),
    href: observ(opts.item.href || ''),
    active: observ(opts.active || false),
    children: struct(
      reduce(opts.item.children || {}, function(acc, child, key) {
        acc[key] = SidebarItem({item: child});
        return acc;
      }, {})
    ),
    handles: {
      toggle: toggle
    }
  });

  function toggle() {
    s.isExpanded.set(!s.isExpanded());
  }

  return s;
}

SidebarItem.render = function(state) {

  var active = state.active;

  var children = map(state.children || {}, function(child, key) {
    return SidebarItem.render(child);
  });
  var childrenEl = h('ul.vdom-sidebar-children', {
    className: state.isExpanded ? 'is-expanded' : ''
  }, children);

  var expandButton = h('a.button-expand', {
      href: '#',
      onclick: expandMenu
    }, ['+'])
  ;

  var link = h('li'+(active ? '.active' : ''), [
    h( 'a', { href: state.href }, [state.itemName] ),
    Object.keys(state.children).length ? expandButton : '',
    // (state.loading && active ? spinner() : ''),
    childrenEl
  ]);


  function expandMenu(ev) {
    ev.preventDefault();
    state.handles.toggle();
  }

  return link;
};

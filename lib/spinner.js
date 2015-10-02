module.exports = spinner;

function spinner() {
  return h("div.small.progress", [ h("div", [ "Loading…" ]) ]);
}

function OrangeTreePresenter(selector) {
  this.selector = selector;
  this.tree = new OrangeTree();
  this.listen();
}

OrangeTreePresenter.prototype.listen = function() {
  var self = this;
  $(document).on('click', this.selector + ' button', function() {
    self.processClick();
  });
}

// additional callback to supply additional events
OrangeTreePresenter.prototype.processClick = function() {
  this.tree.ageOneYear();
  this.redrawList();
}

OrangeTreePresenter.prototype.redrawList = function() {
  $(this.selector + ' .list').text(this.tree.oranges);
}

function OrangeTree() {
  this.age = 0;
  this.height = 0;
  this.oranges = [];
}

OrangeTree.prototype.getOlder = function() {
  this.age += 1;
}

OrangeTree.prototype.ofFruitBearingAge = function() {
  return this.age > 10;
}

OrangeTree.prototype.produceFruit = function() {
  this.oranges += ["Juicy Orange"];
}

OrangeTree.prototype.ageOneYear = function() {
  this.getOlder();
  if(this.ofFruitBearingAge()) {
    this.produceFruit();
  }
}

$(document).ready(function() {
  window.treePresenter = new OrangeTreePresenter('#tree');
});

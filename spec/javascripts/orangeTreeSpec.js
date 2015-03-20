describe("orange tree", function() {
  describe("#initialize", function() {
    var tree;

    beforeEach(function() {
      tree = new OrangeTree();
    })

    it("creates orange trees", function() {
      expect(tree.constructor).toBe(OrangeTree);
    })

    it("sets age to 0", function() {
      expect(tree.age).toEqual(0);
    })

    it("sets height to 0", function() {
      expect(tree.height).toEqual(0);
    })

    it("sets oranges to be empty", function() {
      expect(tree.oranges).toEqual([]);
    })
  })

  describe("#ageOneYear", function() {
    var tree;

    beforeEach(function() {
      tree = new OrangeTree();
    })

    it("calls #getOlder", function() {
      spyOn(tree, "getOlder");
      tree.ageOneYear();
      expect(tree.getOlder).toHaveBeenCalled();
    })

    it("calls #produceFruit if tree is old enough", function() {
      spyOn(tree, "produceFruit");
      spyOn(tree, "ofFruitBearingAge").and.returnValue(true);
      tree.ageOneYear();
      expect(tree.produceFruit).toHaveBeenCalled();
    })
  })

  describe("#ageButton", function() {
    var $tree, $list, $button;

    beforeEach(function() {
      $tree = affix('#tree');
      $list = $tree.affix('.list');
      $button = $tree.affix('button');

      // $("<div id='tree'><div class='list'></div><button></button></div>").appendTo('body');
    })

    it("calls age on button click", function() {
      var orangeTreePresenter = new OrangeTreePresenter('#tree');

      spyOn(orangeTreePresenter.tree, "ageOneYear").and.callThrough();
      spyOn(orangeTreePresenter.tree, "ofFruitBearingAge").and.returnValue(true);

      $('button').click();
      expect(orangeTreePresenter.tree.ageOneYear).toHaveBeenCalled();
      expect($list.text()).toMatch(/Juicy Orange/);
    })
  })
})


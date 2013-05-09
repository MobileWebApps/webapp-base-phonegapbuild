
loader.register('tests/ember-trek_tests', function(require) {
//REQUIRECORE

module("webapp");

test("App is defined", function () {
  ok(typeof App !== 'undefined', "App is undefined");
});

});

var makeTwinkie = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step(timeBetweenSteps);
  this.$node.addClass('twinkie');
};

makeTwinkie.prototype = Object.create(makeDancer.prototype);
makeTwinkie.prototype.constructor = makeTwinkie;

makeTwinkie.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
  this.$node.toggle();
};

var makeGuyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
this.$node.addClass('guy');  
this.step(timeBetweenSteps);
};

makeGuyDancer.prototype = Object.create(makeDancer.prototype);
makeGuyDancer.prototype.constructor = makeGuyDancer;

makeGuyDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
  // this.$node.toggle();
};

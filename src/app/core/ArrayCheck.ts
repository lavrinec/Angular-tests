export function ArrayCheck( arrays = [] ) {

  const staticInjector = StaticInjector.resolveAndCreate();
  return (target) => {
    const originalDoCheck = target.prototype.ngDoCheck;

    target.prototype.ngDoCheck = function() {
      console.log('Test', this.type);
      for (const array of arrays) {
        console.log(this[array]);
        // this[array] = [...this[array]];

      }
      if (originalDoCheck && typeof originalDoCheck === 'function') {
        originalDoCheck.apply(this, arguments);
      }
    };
  };
}

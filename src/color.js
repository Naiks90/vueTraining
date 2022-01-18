export default {
  bind(el, bindings) {
    const arg = bindings.arg;
    el.style[arg] = bindings.value;

    const foontModifier = bindings.modifiers['font'];
    if (foontModifier) {
      el.style.fontSize = '45px';
    }

    // console.log('bind');
  },
  //   inserted() {
  //     console.log('inserted');
  //   },
  //   update() {
  //     console.log('update');
  //   },
  //   componentUpdated() {
  //     console.log('componentUpdated');
  //   },
  //   undind() {
  //     console.log('undind');
  //   },
};

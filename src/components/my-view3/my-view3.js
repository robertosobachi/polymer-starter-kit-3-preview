import {Element as PolymerElement}
    from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class MyView3 extends PolymerElement {
  // Define a string template instead of a `<template>` element.
  static get template() {
    return `
      <link rel="stylesheet" href="/src/components/my-view3/my-view3.css">
      <link rel="stylesheet" href="/src/components/shared-styles/shared.css">

      <div class="card">
        <div class="circle">3</div>
        <h1>View Three</h1>
        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
      </div>`;
  }
}

customElements.define('my-view3', MyView3);

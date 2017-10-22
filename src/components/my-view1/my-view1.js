import {Element as PolymerElement}
    from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class MyView1 extends PolymerElement {
  // Define a string template instead of a `<template>` element.
  static get template() {
    return `
      <link rel="stylesheet" href="/src/components/my-view1/my-view1.css">
      <link rel="stylesheet" href="/src/components/shared-styles/shared.css">

      <div class="card">
        <div class="circle">1</div>
        <h1>View One</h1>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
      </div>`;
  }
}

customElements.define('my-view1', MyView1);

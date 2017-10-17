import {Element as PolymerElement}
    from "../../../node_modules/@polymer/polymer/polymer-element.js";

export default class MyView1 extends PolymerElement {
  // Define a string template instead of a `<template>` element.
  static get template() {
    return `<div class="card">
      <div class="circle">1</div>
      <h1>View One</h1>
      <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
      <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
    </div>`;
  }
}

customElements.define('my-view1', MyView1);

import {Element as PolymerElement}
    from "../../../node_modules/@polymer/polymer/polymer-element.js";

export default class MyView3 extends PolymerElement {
  // Define a string template instead of a `<template>` element.
  static get template() {
    return `<style>
      .card {
        padding: 16px;
        margin: 24px;
        color: #757575;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        font-size: 30px;
        line-height: 64px;
        color: #555;
        text-align: center;
        background: #ddd;
        border-radius: 50%; }

      h1 {
        margin: 16px 0;
        font-size: 22px;
        color: #212121; }

      :host {
        display: block;
        padding: 30px; }
      </style>
      <div class="card">
        <div class="circle">3</div>
        <h1>View Three</h1>
        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
      </div>`;
  }
}

customElements.define('my-view3', MyView3);

import {Element as PolymerElement}
    from "../../../node_modules/@polymer/polymer/polymer-element.js";

export default class MyView404 extends PolymerElement {
  // Define a string template instead of a `<template>` element.
  static get template() {
    return `<style>
      :host {
        display: block;
        padding: 10px 20px; }
      </style>
      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>`;
  }
}

customElements.define('my-view404', MyView404);

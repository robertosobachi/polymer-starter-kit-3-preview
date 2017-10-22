import {Element as PolymerElement}
    from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '../../../node_modules/@polymer/app-layout/app-drawer/app-drawer.js';
import '../../../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '../../../node_modules/@polymer/app-layout/app-header/app-header.js';
import '../../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '../../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '../../../node_modules/@polymer/app-route/app-location.js';
import '../../../node_modules/@polymer/app-route/app-route.js';
import '../../../node_modules/@polymer/iron-lazy-pages/iron-lazy-pages.js';
import '../../../node_modules/@polymer/iron-selector/iron-selector.js';
import '../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js';

export class MyApp extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return `
    <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;
        display: block; }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none; }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color); }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white; }

      .drawer-list {
        margin: 0 20px; }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        line-height: 40px;
        color: var(--app-secondary-color);
        text-decoration: none; }

      .drawer-list .iron-selected {
        font-weight: bold;
        color: black; }
    </style>

    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="[[rootPattern]]:page"
        data="{{routeData}}"
        tail="{{subroute}}"></app-route>

    <app-drawer-layout fullbleed>
      <!-- Drawer content -->
      <app-drawer id="drawer" slot="drawer">
        <app-toolbar>Menu</app-toolbar>
        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
          <a name="view1" href="view1">View One</a>
          <a name="view2" href="view2">View Two</a>
          <a name="view3" href="view3">View Three</a>
        </iron-selector>
      </app-drawer>

      <!-- Main content -->
      <app-header-layout has-scrolling-region>

        <app-header slot="header" condenses reveals effects="waterfall">
          <app-toolbar>
            <paper-icon-button icon="my-icons:menu" drawer-toggle></paper-icon-button>
            <div main-title>My App</div>
          </app-toolbar>
      </app-header>

      <iron-lazy-pages
          selected="[[page]]"
          attr-for-selected="data-route"
          fallback-selection="view404"
          role="main">
          <my-view1 data-route="view1" data-path="/src/components/my-view1/my-view1.js"
          ></my-view1>
          <my-view2 data-route="view2" data-path="/src/components/my-view2/my-view2.js"
          ></my-view2>
          <my-view3 data-route="view3" data-path="/src/components/my-view3/my-view3.js"
          ></my-view3>
          <my-view404 data-route="view404" data-path="/src/components/my-view404/my-view404.js"
          ></my-view404>
      </iron-lazy-pages>
    </app-header-layout>
  </app-drawer-layout>`;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      rootPattern: String,
      routeData: Object,
      subroute: String,
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  constructor() {
    super();

    // Get root pattern for app-route, for more info about `rootPath` see:
    // https://www.polymer-project.org/2.0/docs/upgrade#urls-in-templates
    this.rootPattern = (new URL(this.rootPath)).pathname;
  }

  _routePageChanged(page) {
    // Polymer 2.0 will call with `undefined` on initialization.
    // Ignore until we are properly called with a string.
    if (page === undefined) {
      return;
    }

    // If no page was found in the route data, page will be an empty string.
    // Deault to 'view1' in that case.
    this.page = page || 'view1';

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Load page import on demand. Show 404 page if fails
    let resolvedPageUrl =
        this.resolveUrl('../my-' + page + '/my-' + page + '.html');
  }

  _showPage404() {
    this.page = 'view404';
  }

}

customElements.define('my-app', MyApp);

import {Element as PolymerElement}
    from "../../../node_modules/@polymer/polymer/polymer-element.js"

export class MyApp extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return `<app-location route="{{route}}"></app-location>
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
                    attr-for-selected="name"
                    fallback-selection="view404"
                    role="main">
                  <my-view1 name="view1"></my-view1>
                  <my-view2 name="view2"></my-view2>
                  <my-view3 name="view3"></my-view3>
                  <my-view404 name="view404"></my-view404>
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
    var resolvedPageUrl =
        this.resolveUrl('../my-' + page + '/my-' + page + '.html');
    Polymer.importHref(
        resolvedPageUrl,
        null,
        this._showPage404.bind(this),
        true);
  }

  _showPage404() {
    this.page = 'view404';
  }
}

customElements.define('my-app', MyApp);

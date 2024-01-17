/*
 * The MIT License - http://www.opensource.org/licenses/mit-license
 * Copyright (c) 2016 Bruce Schubert.
 */

/*global WorldWind*/

define(["knockout", "jquery"], function (ko, $) {
  "use strict";
  /**
   * @constructor
   * @param {String} viewFragment HTML
   * @param {String} appendToId Parent element id
   * @returns {ExplanationsViewModel}
   */
  function ExplanationsViewModel(viewFragment, appendToId) {
    var domNodes = $.parseHTML(viewFragment);

    // Load the view html into the specified DOM element
    $("#" + appendToId).append(domNodes);
    this.view = domNodes[0];

    // Binds the view to this view model.
    ko.applyBindings(this, this.view);
  }

  return ExplanationsViewModel;
});

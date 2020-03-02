import StateMachine from "javascript-state-machine";

import template from './template'
import $ from 'jquery';
import BaseComponent from '../base-component';
import Controller from '../../controller';
import TimeTravelService from '../../services/time-travel';

/**
* @module components/playback-controls
* This component handles the playback controls buttons.
*/
let TimeTravelComponent = new StateMachine($.extend({}, BaseComponent, {
  methods: {
    /**
    * @function onBeforeInit
    * This function creates component div container and appends it to the page.
    */
    onBeforeInit() {
      $("#pathfinder").append("<div id='time-travel-component'></div>");
    },

    /**
    * @function onLeaveNone
    * This function fills the component container with the template file and initiates event binding.
    */
    onLeaveNone() {
      $("#time-travel-component").html(template);
      this.bindEvents();
    },

    /**
    * @function bindEvents
    * This function calls the PlaybackService callbacks as per the button clicked
    */
    bindEvents() {
      $("#travel-backward").on('click', (e) => {
        let backVal = $('#travel-backward-input').val();
        TimeTravelService.goBackwards(Controller, backVal);
      });
      $("#travel-forward").on('click', (e) => {
        let frontVal = $('#travel-forward-input').val();
        TimeTravelService.goForwards(Controller, frontVal);
      });
    },

  }
}));

export default TimeTravelComponent;

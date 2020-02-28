import Store from '../services/store';
import config from '../config';
import tracerParser from '../utils/tracer-parser';
import $ from 'jquery';
import environment from '../environment';

/** Class representing a tracer of the algorithm */
class Tracer {
  /**
  * Create a tracer for the search algorithm
  * @param {object} debugFile - Algorithm Debug file uploaded by the user
  */
  constructor(debugFile) {
    /**
    * _id is unique id of the grid that is set to 0.
    * @type  {number}
    * @private
    */
    this._id = 0;

    /**
    * debugFile is file of the algorithm that is set from the param.
    * @type  {object}
    * @public
    */
    this.debugFile = debugFile;

    /**
    * _debugJson is cache and promise object that resolves to data contained in debug file which is in json format.
    * @type {object}
    * @private
    */
    this._debugJson = null;

    /**
    * _steps is cache and promise object of array of Step object of the algorithm
    * @type {Promise}
    * @private
    */
    this._steps = null;

    /**
    * maxX is maximum value of x explored by the algorithm. Default value is step to -1.
    * @type {number}
    * @public
    */
    this.maxX = -1;

    /**
    * maxY is maximum value of y explored by the algorithm. Default value is step to -1.
    * @type {number}
    * @public
    */
    this.maxY = -1;
  }

  /**
  * debugJson returns _debugJson if it is resolved. Else, sets it.
  * @type {object}
  * @public
  */
  get debugJson(){
    if(!this._debugJson){
      let that = this;
      this._debugJson = new Promise((resolve, reject) => {
        try{
          tracerParser(that.debugFile, resolve);
        }
        catch(e){
          reject(e);
        }
      });
    }
    return this._debugJson;
  }

  /**
  * steps returns _steps if it is resolved. Else, sets it. This also sets maxX, maxY, source and destination of the tracer.
  * @type {object}
  * @public
  */
  get steps() {
    if(!this._steps){
      this._steps = this.debugJson.then((json) => {
        this.nodeStructure = json.nodeStructure;
        let eventsList = json.eventList;
        eventsList.forEach((event) => {
          event.tracer = this;
          let step = Store.createRecord('Step', event);
          this.checkMax(step.node);
          if(event.type=="source"){
            this.source = step;
          }
          if(event.type=="destination"){
            this.destination = step;
          }
        });
        return Store.data.Step;
      });
    }
    return this._steps;
  }

  checkMax(node){
    if(node.maxX > this.maxX){
      this.maxX = node.maxX;
    }
    if(node.maxY > this.maxY){
      this.maxY = node.maxY;
    }
  }

  /**
  * width returns width required for visualising the tracer.
  * @type {number}
  * @public
  */
  get width() {
    return this.maxX * config.nodeSize
  }

  /**
  * height returns height required for visualising the tracer.
  * @type {number}
  * @public
  */
  get height() {
    return this.maxY * config.nodeSize
  }

}

export default Tracer;

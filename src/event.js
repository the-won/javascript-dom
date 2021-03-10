import Util from './util.js'
import Dom from './dom.js'

class Event  { 
    
    constructor() {
        this.util = Util.create();
        this.dom = Dom.create();
    }

    static create = () => new Event;
    /**
     * @method  evt()
     * @param { selector, eventType, function }
     * @returns { null }
     * @description 
     */
    evt= (s, en, fn) => {
        const {isFunction, isString, isElement} = this.util;
        const {get} = this.dom;
        return !isFunction(fn) ? false : (()=> {
            const el = isString(s) ? get(s) : s;
            return !isElement(el) ? false : (()=> {
                el.addEventListener(en, fn, false)
            })()
        })()
    }

    /**
     * @method  click()
     * @param { selector, function }
     * @returns { null }
     * @description 
     */
    click =  (s, fn) => {
        (s.length === undefined)
        ? this.evt(s, 'click', fn)
        : s.forEach(s => this.evt(s, 'click', fn))
    };

    /**
     * @method  mouseover()
     * @param { selector, function }
     * @returns { null }
     * @description 
     */
    mouseover =  (s, fn) => {
        (s.length === undefined)
        ? this.evt(s, 'mouseover', fn)
        : s.forEach(s => this.evt(s, 'mouseover', fn))
    };

    /**
     * @method  mouseout()
     * @param { selector, function }
     * @returns { null }
     * @description 
     */
    mouseout =  (s, fn) => {
        (s.length === undefined)
        ? this.evt(s, 'mouseout', fn)
        : s.forEach(s => this.evt(s, 'mouseout', fn))
    };

    /**
     * @method  change()
     * @param { selector, function }
     * @returns { null }
     * @description 
     */
    change =  (s, fn) => {
        (s.length === undefined)
        ? this.evt(s, 'change', fn)
        : s.forEach(s => this.evt(s, 'change', fn))
    };

    /**
     * @method  scroll()
     * @param { selector, function }
     * @returns { null }
     * @description 
     */
    scroll =  (s, fn) => {
        (s.length === undefined)
        ? this.evt(s, 'scroll', fn)
        : s.forEach(s => this.evt(s, 'scroll', fn))
    };
}

export default Event;
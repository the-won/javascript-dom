import Util from './util.js'

export default class Dom {

    constructor() {
        this.anchor = {
            attachBehaviors: () => {},
        }
        this.win = window;
        this.doc = document;
        this.util = Util.create();

        this.anchor.attachBehaviors = (p) => {
            if(p && this.util.isElement(p)) {
                /**
                 * @method  $()
                 * @param { string }
                 * @returns { Object }
                 * @description 
                 */
                p.$ = (s) => {
                    return this.$(s, p);
                }

                /**
                 * @method  hasClass()
                 * @param { string }
                 * @returns { boolean }
                 * @description 
                 */
                p.hasClass = (...cn) => cn.every(cn => !cn ? false : p.classList.contains(cn) === true)

                /**
                 * @method  addClass()
                 * @param { string }
                 * @returns { Object }
                 * @description 
                 */
                p.addClass = (...args) => {
                    p.classList.add(...args);
                    return p;
                };

                /**
                 * @method  removeClass()
                 * @param { string }
                 * @returns { Object }
                 * @description 
                 */
                p.removeClass = (...args) => {
                    p.classList.remove(...args);
                    return p;
                };

                /**
                 * @method  toggleClass()
                 * @param { string }
                 * @returns { Object }
                 * @description 
                 */
                p.toggleClass = (...args) => {
                    args.forEach(c => p.classList.toggle(c))
                    return p;
                };

                /**
                 * @method  replaceClass()
                 * @param { string, string }
                 * @returns { Object }
                 * @description 
                 */
                p.replaceClass = (o = '', n = '') => {
                    const _o = o.trim();
                    const _n = n.trim();
                    p.removeClass(_o);
                    p.addClass(_n);
                    return p;
                };

                /**
                 * @method  empty()
                 * @param { }
                 * @returns { Object }
                 * @description 
                 */
                p.empty = () => {
                    while (p.lastChild) {
                        p.removeChild(p.lastChild);
                    }
                    return p;
                };

                /**
                 * @method  html()
                 * @param { string }
                 * @returns { Object }
                 * @description 
                 */
                p.html = (s) => {
                    if (this.util.isNil(s)) return p.innerHTML;
                    p.innerHTML = s;
                    return p;
                };

                /**
                 * @method  destroy()
                 * @param {  }
                 * @returns {  }
                 * @description 
                 */
                p.destroy = () => {
                    if (p.parentNode) {
                        p.parentNode.removeChild(p);
                    }
                };

                 /**
                 * @method  setStyle()
                 * @param {  }
                 * @returns {  }
                 * @description 
                 */
                p.setStyle = (o = {}) => {
                    const props = this.util.isString(o) ? o.split(';') : this.util.isObject(o) ? ((input) => {
                        console.log(Object.keys(input))
                        return Object.keys(input).map((k) => {
                            const v = input[k];
                            if (this.util.isString(v) || this.utilisNumber(v)) {
                            const x = this.util.normalize(k, v);
                            console.log(x)
                            return [x.key, x.value].join(':');
                            }
                            return null;
                        }).filter((item) => {
                            return !this.util.isNil(item);
                        });
                    })(o) : [];
                
                    console.log(props)
            
                    const currStyle = p.getAttribute('style') || '';
                    const currStyleList = currStyle.split(';');
                    const combinedPropes = [...currStyleList, ...props, ''];
            
                    const st = combinedPropes.filter((item) => {
                        return item.trim().length > 0;
                    }).map((item) => {
                        const parts = item.split(':');
                        return parts.map((part) => {
                            return part.trim();
                        }).join(':');
                    }).join('; ');
            
                    p.setAttribute('style', this.fixStyle(st));
                    console.log('완료', p)
                    return p;
                };

                p.___BEHAVIORS_ATTACHED = 1;
            }
            
            return p;
        }
    }

    static create = function() {
        return new Dom();
    }

    /**
     * @method  get()
     * @param { string }
     * @returns { Object }
     * @description 
     */
    get = (el) => {
        const p = (this.util.isString(el) ? this.doc.getElementById(el) : el) || null;
        
        if(p && !p.__BEHAVIORS_ATTACHED) {
            return this.anchor.attachBehaviors(p);
        }
        return p;
    }

    /**
     * @method  $()
     * @param { string }
     * @returns { Object }
     * @description 
     */
    $ = (tag, root = this.doc) => {
        const tmp = root.querySelectorAll(tag);
        
        if(tmp.length === 1)  return this.get(root.querySelector(tag))
        else return !tmp ? [] : [...tmp].map(el => this.get(el))
    }

    /**
     * @method  createEl()
     * @param { string }
     * @returns { Object }
     * @description 
     */
    createEl = (tag) => {
        return this.get(this.doc.createElement(tag));
    }

    /**
     * @method  append()
     * @param { string, string }
     * @returns { Object }
     * @description 
     */
    append = (tag, parent) => {
        const p = parent ? this.get(parent) : this.doc.body;
        const d = this.util.isElement(tag) ? tag : this.doc.createElement(tag);
        p.appendChild(d);
        return this.get(d);
    }

    /**
     * @method  fixStyle()
     * @param { string }
     * @returns { Object }
     * @description 
     */
    fixStyle = (s) => {
        console.log('fixstyle',s)
        return s.replace(/;+/gi, ';').replace(/:/gi, ': ') + ';';
    };

}

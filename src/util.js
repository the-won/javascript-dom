
export default class Util {
   
    static create = function() {
        return new Util();
    }

    ob2Str = (val) => {
        return Object.prototype.toString.call(val);
    }

    isString = (val) => {
        return  String(val) === val;
    }

    isNumber = (val) => {
        return Number(val) === val;
    }

    isNil = (val) => {
        return val === null || val === undefined;
    }
    
    isArray = (val) => {
        return Array.isArray(val) === val;
    }

    isFunction = (val) => {
        return this.ob2Str(val) === '[object Function]'
    }

    isObject = (val) => {
        return this.ob2Str(val) === '[object Object]' && !this.isArray(val);
    }

    isElement = (val) => {
        return this.ob2Str(val).match(/^\[object HTML\w*Element]$/) !== null;
    }

    getNormalize = (k, v) => {
        const reg = /^([a-z]+)([A-Z]{1})([a-z]+)$/;
        const mat = k.match(reg);

        if(mat || mat.index === 0) {
            const a = [];
            a.push(mat[1])
            a.push('-')
            a.push(mat[2])
            a.push(mat[3])
            k = a.join('').toLowerCase();
        }

        if(this.isNumber(v)) v += 'px';
        
        return {
            key: k,
            value: v
        }
    }

    normalize = (k, v) => {
        const reg = /^([a-z]+)([A-Z]{1})([a-z]+)$/;
        const mat = k.match(reg); //fontSize 이러한 경우 소문자 뒤에 대분자의 경우 
      
        if (mat && mat.index === 0) {
          
          const a = [];
          a.push(mat[1]);
          a.push('-');
          a.push(mat[2]);
          a.push(mat[3]);
          k = a.join('').toLowerCase();
        }
      
        if (this.isNumber(v)) {
          v += 'px';
        }
      
        return {
          key: k,
          value: v,
        };
    };
}



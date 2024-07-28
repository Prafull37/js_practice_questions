/**
 * @param {string} selector
 * @return {{css: Function}}
 */
export default function $(selector) {
    let item;
  
      item = document.querySelector(selector);
  
    return {
      item: item,
      css :function (property,value){
        if(value===undefined) {
          return this.item?this.item.style[property]||undefined:undefined;
        }
  
        if(this.item!==undefined||this.item!==null) {
          this.item.style[property]=value
        }
        return this;
      }
    }
  }


$('no-such-thing').css('color', 'red').css('fontSize', '12px');
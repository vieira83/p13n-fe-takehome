//Vladimir Fernandes
'use strict'

var columnsCollection = function() {
  var columns = document.querySelectorAll('.column');

  var initEventHandler = function(){
    window.addEventListener('scroll', checkPosition);
  };

  /**
   * Return useful methods for Col 
   * @param {Dom} col 
   */
  var getColDetails = function (col) {
    return { 
      elem: col,
      id: col.getAttribute('id'),
      position: function(){
        return this.elem.getBoundingClientRect();
      },
      getStyle: function(styl) {
        return window.getComputedStyle(this.elem).getPropertyValue(styl);
      },
      hasClass: function(className) {
        return this.elem.classList.contains(className);
      },
      addClass: function(className) {
        return this.elem.classList.add(className)
      },
      removeClass: function(classNames) {
        return this.elem.classList.remove(classNames);
      }
    }
  };

  var logger = function(className, col,  message) {
    console.log('Column with id: ' + col.id + ' ' + message);
    col.addClass(className);
  };

  var resetClasses = function(col) {
    col.removeClass("start-visible", "half-visible", "visible");
  }

  /**
   * check visibilty position of Col 
   * and add correspondent class 
   * 
   * @param {*} event 
   */
  var checkPosition = function (event) {
    event.preventDefault();
    event.stopPropagation();
    
      columns.forEach(function(col){
        var colInfo = getColDetails(col);
        var colHeight = colInfo.position().height;
        var paddingTop = parseInt(colInfo.getStyle('padding-top'), 10); 
        var paddingBot = parseInt(colInfo.getStyle('padding-bottom'), 10); 
        var colTop = colInfo.position().top + paddingTop; // Add padding to calc to get top of the box
        var colBottom = colInfo.position().bottom - paddingBot; // remove padding to calc to get bottom of the box
  
        if(colTop < window.innerHeight && colBottom > 0 && !colInfo.hasClass('start-visible')){
          logger('start-visible', colInfo , 'started to become visible on the page.');
        }

        if(colTop - paddingTop < (window.innerHeight - colHeight/2) && colBottom > 0 && !colInfo.hasClass('half-visible')){
          logger('half-visible', colInfo , 'is now more than 50% visible on the page.');
        }

        if(colTop >= 0 && colBottom <= window.innerHeight  && !colInfo.hasClass('visible')){
          logger('visible', colInfo ,'is now fully visible on the page');
        }
    });
  };

  var destroyEventHandlers = function () {
    window.removeEventListener('scroll', checkPosition);
  };

  return {
    init:  function() {
      initEventHandler();
    },
    destroy: function() {
      destroyEventHandlers();
    }
  };
}();

document.addEventListener("DOMContentLoaded", function(){
  columnsCollection.init();
});
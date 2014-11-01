angular.module('koganei.onselected', []).
directive('onSelected', [function() { 


    function getSelection(global) {
        if(global.getSelection
            && global.getSelection().toString()
            && angular.element(global.getSelection()).attr('type') != "Caret";) {
            
            return global.getSelection();
        }
        
        return false;
    }
    
    function getSelectionRange() {
        var selection = document.selection && document.selection.createRange();

        if (!(typeof selection === "undefined")
            && selection.text
            && selection.text.toString()) {
            
            return selection.text;
        }
        
        return false;
    }

    function getSelected() {
        return getSelection(window) ||
               getSelection(document) ||
               getSelectionRange() ||
               false;
    }

    return {
        restrict: 'A',

        replace: false,

        link: function(scope, element, attrs) {
          element.bind('mouseup', function() {
            if(angular.isFunction(scope.onSelected)) {

              var selected = getSelected();
              scope.onSelected.apply(this, [selected.toString(), selected]);
            }
          });

        },
        scope: {
          onSelected: '='
        }
      };
  }]);

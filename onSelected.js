angular.module('koganei.onselected', []).
directive('onSelected', [function() { 

    function getSelected() {
        var text = "";
        if (window.getSelection
        && window.getSelection().toString()
        && angular.element(window.getSelection()).attr('type') != "Caret") {
            text = window.getSelection();
            return text;
        }
        else if (document.getSelection
        && document.getSelection().toString()
        && angular.element(document.getSelection()).attr('type') != "Caret") {
            text = document.getSelection();
            return text;
        }
        else {
            var selection = document.selection && document.selection.createRange();

            if (!(typeof selection === "undefined")
            && selection.text
            && selection.text.toString()) {
                text = selection.text;
                return text;
            }
        }

        return false;
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

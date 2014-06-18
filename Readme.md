# Angular Directive: onSelected

    bower install koganei/angular-onselected

Super easy to implement

    <div on-selected="myFunction"></div>

Then in your controller
    
    // loaded module koganei.onselected
    scope.myFunction = function(word, selection) {};

Got the basic selection code from http://stackoverflow.com/a/10180367

## Example:

For showing my dictionary directive on selected text:

    scope.selectedWord = function(word, selection) {
      scope.$apply(function() {
        var newEl = angular.element('<span nf-dictionary="' + word + '">test</span>'); // applies to the whole parent element
        var $popover = angular.element(selection.anchorNode).parent().append(newEl);
        $compile(newEl)(scope);
      });
    };

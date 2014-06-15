# Angular Directive: onSelected

Super easy to implement

    <div on-selected="myFunction"></div>

Then in your controller
    
    // loaded module koganei.onselected
    scope.myFunction = function(word, selection) {};

Got the basic selection code from http://stackoverflow.com/a/10180367
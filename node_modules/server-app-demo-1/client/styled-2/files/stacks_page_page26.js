
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};


// this call to jQuery gives us access to the globaal
// jQuery object. 
// 'noConflict' removes the '$' variable.
// 'true' removes the 'jQuery' variable.
// removing these globals reduces conflicts with other 
// jQuery versions that might be running on this page.
stacks.jQuery = jQuery.noConflict(true);

// Javascript for stacks_in_211_page26
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_211_page26 = {};

// A closure is defined and assined to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for refering
// to this object from elsewhere.
stacks.stacks_in_211_page26 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

  

  jQuery(document).ready(function($){

function findPlainTextExceptInLinks(element, substring, callback) {
    for (var childi= element.childNodes.length; childi-->0;) {
        var child= element.childNodes[childi];
        if (child.nodeType===1) {
            if (child.tagName.toLowerCase()!=='a')
                findPlainTextExceptInLinks(child, substring, callback);
        } else if (child.nodeType===3) {
            var index= child.data.length;
            while (true) {
                index= child.data.lastIndexOf(substring, index);
                if (index===-1)
                    break;
                callback.call(window, child, index)
            }
        }
    }
}

var substring= 'Footsy';
findPlainTextExceptInLinks(document.body, substring, function(node, index) {
    node.splitText(index+substring.length);
    var span= document.createElement('span');
    span.className = "teleportHere";
    span.appendChild(node.splitText(index));
    node.parentNode.insertBefore(span, node.nextSibling);
});


var injectionStack = $("#stacks_in_211_page26 .teleportMe").html();


$(".teleportHere").replaceWith(injectionStack);
$("#stacks_in_211_page26 .teleportMe").hide();

});
	return stack;
})(stacks.stacks_in_211_page26);




if (typeof YHAccordion == 'undefined') {
	var YHAccordion = function (
								uid,
								duration,
								display,
								trigger,
								opacity,
								alwaysHide,
								initialDisplayFx
								) {
		
		this.uid = uid;
		this.duration =	duration;
		this.display = display;						//(integer: defaults to 0) The index of the element to show at start (with a transition). To force all elements to be closed by default, pass in -1.
		this.trigger = trigger;						//(string: defaults to 'click') The event that triggers a change in element display.
		this.opacity = opacity;						//(boolean: defaults to true) If set to true, an opacity transition effect will take place when switching between displayed elements.
		this.alwaysHide = alwaysHide;				//(boolean: defaults to false) If set to true, it will be possible to close all displayable elements. Otherwise, one will remain open at all time.
		this.initialDisplayFx = initialDisplayFx;	//(boolean; defaults to true) If set to false, the initial item displayed will not display with an effect but will just be shown immediately.
		
		// now that things are set up add an event to rebuild the page after the DOM tree is ready
		window.addEvent('domready', function() {
						this.go();
						}.bind(this));
		
		return this;
	};
	
	
	YHAccordion.prototype.go = function () {
		this.accordion = new Fx.Accordion (
										   $$('#acWrapper_' + this.uid + ' .acToggle'), 
										   $$('#acWrapper_' + this.uid + ' .acStretchOut'
											  ), {
										   duration:			this.duration,
										   display:			this.display,
										   trigger:			this.trigger,
										   opacity:			this.opacity,
										   alwaysHide:			this.alwaysHide,
										   initialDisplayFx:	this.initialDisplayFx,
										   onActive: function (el) {$(el).addClass ("active");},
										   onBackground: function (el) {$(el).removeClass ("active");}
										   });
	};
	
	
	YHAccordion.prototype.display = function (i) {
		this.accordion.display (i);
	}
	
}
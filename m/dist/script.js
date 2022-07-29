console.clear();
TweenLite.defaultEase = Linear.easeNone;
TweenMax.set(".wrap, .article-block, .colors", {autoAlpha:1});
var targets = document.querySelectorAll("li");
var articles = document.querySelectorAll(".article");
var colorArray = ["#1bb1a5", "#94c356", "#e3aa59", "#777", "#a63ba0", "#cf5b21", "#46a4cc", "#000"];
var colorSwatches = document.querySelectorAll(".colorBubble");
var activeTab = 0;
var old = 0;
var heights = [];
var widths = [];
var dur = 0.4;
var burstDur = 0.2;
var animation;
var loopStart = 0;
var loopEnd = 0;
var activeColor = colorArray[0];

for (let i = 0; i < targets.length; i++) {
  targets[i].index = i;
  heights.push(articles[i].offsetHeight); // get height of each article
  widths.push(targets[i].offsetWidth); // get width of each tab
  TweenMax.set(articles[i], {top: 0, y:-heights[i]}); // push all articles up out of view
  targets[i].addEventListener("click", doCoolStuff);
}

// set initial article and position stretchy bubble slider on first tab 
TweenMax.set(articles[0], {y:0});
TweenMax.set(".slider", {x:targets[0].offsetLeft, width:targets[0].offsetWidth});
TweenMax.set(targets[0], {color:"#fff"});
TweenMax.set(".article-block", {height:heights[0]});
TweenMax.set("#burst", {stroke:activeColor});
TweenMax.set("line", {drawSVG:0});

function doCoolStuff() {
  // check if clicked target is new and if the timeline is currently active
  if(this.index != activeTab) {
    //if there's an animation in-progress, jump to the end immediately so there aren't weird overlaps. 
    if (animation && animation.isActive()) {
      animation.progress(1);
    }
    animation = new TimelineMax();
    old = activeTab;
    activeTab = this.index;
    stretch = 0;
    
    if (activeTab > old) {
      loopStart = old;
      loopEnd = activeTab;
      // moving left to right position the impact burst on the right side of target
      animation.set("#impactBurst", {x:targets[activeTab].offsetLeft + widths[activeTab], scaleX:1}); 
    } else {
      loopStart = activeTab;
      loopEnd = old;
      // moving right to left position the impact burst on the left side of target and scaleX:-1
      animation.set("#impactBurst", {x:targets[activeTab].offsetLeft, scaleX:-1, transformOrigin:"left center"});
      // if moving slider bubble right to left, also animate new x position while stretching
      animation.to(".slider", dur, {x:targets[activeTab].offsetLeft, ease:Power2.easeIn}, 0);
    }
    // get total width of all tabs between new and old (inclusive)
     for (let i = loopStart; i < loopEnd + 1; i++) {
      stretch += widths[i];
    }   
    // stretch the slider bubble to the start of the new target
    animation.to(".slider", dur, {width:stretch, ease:Power2.easeIn}, 0);
    // animate the lines of the impact burst
    animation.fromTo("line", burstDur/3, {drawSVG:"0% 0%"}, {drawSVG:"0% 40%"}, "springBack");
    animation.to("line", burstDur/3, {drawSVG:"70% 100%"});
    animation.to("line", burstDur/3, {drawSVG:"100% 100%", ease:Sine.easeOut});
    // animate bubble slider to clicked target
    animation.to(".slider", dur, {x:targets[activeTab].offsetLeft, width:widths[activeTab], ease:Power2.easeOut}, "springBack");
    // change text color on old and new tab targets
    animation.to(targets[old], dur, {color:activeColor}, "springBack");
    animation.to(targets[activeTab], dur, {color:"#fff"}, "springBack");
    // slide current article down out of view and then set it to starting position at top
    animation.to(articles[old], dur, {y:heights[old], ease:Back.easeIn }, "springBack");
    animation.set(articles[old], {y:-heights[old]});
    // resize article block to accommodate new content
    animation.to(".article-block", dur, {height:heights[activeTab], ease:Power2.easeOut});
    // slide in new article
    animation.to(articles[activeTab], 1, {y:0, ease: Elastic.easeOut}, "-=0.25");
  }
}

// just stuff related to the color change swatches down here
for (let i = 0; i < colorSwatches.length; i++) {
  TweenMax.set(colorSwatches[i], { backgroundColor: colorArray[i] });
  colorSwatches[i].index = i;
  colorSwatches[i].addEventListener("click", colorChange);
}

function colorChange() {
  activeColor = colorArray[this.index];
  TweenMax.to(".slider", dur, { backgroundColor: activeColor });
  TweenMax.to("h1, li", dur, { color: activeColor });
  TweenMax.to(targets[activeTab], dur, { color: "#fff" });
  TweenMax.to(".article-block", dur, {borderBottom: "1px solid " + activeColor});
  TweenMax.to("#burst", dur, {stroke:activeColor});
}
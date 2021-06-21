
var tl =gsap.timeline()
tl
.from('.section_left',{
    opacity:0,
    x:-150,
    duration:.75,
    delay:.2
})
.from('.section_right',{
    opacity:0,
    x:150,
   duration:.75
})

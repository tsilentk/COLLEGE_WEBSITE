function closeContactTab() {
    document.getElementById('contactContent').style.right = '-250px';
}

document.getElementById('contactTab').addEventListener('click', function () {
    document.getElementById('contactContent').style.right = '0';
});




var tl = gsap.timeline();

tl.to("#bar",{
    y:"-100vh",
    scale:0.6,
    duration:0
})
tl.to("#bar",{
    y:"-20vh",
    duration:1,
    delay:0,
})
tl.to("#bar",{
    
    x:"ovh",
    y:"0vh",
    scale:1,
    duration:0.8
})

tl.to("#botimg",{
   
    x:"100vh",
    y:"-100vh",
    rotate:1440,
    scale:0.6,
    duration:0
})
tl.to("#botimg",{

    x:"20vh",
    y:"20vh",
    rotate:1440,
    duration:0.5,
    delay:0,
})
tl.to("#botimg",{

    x:"0vh",
    y:"0vh",
    rotate:-720,
    scale:1,
    duration:0.2
})

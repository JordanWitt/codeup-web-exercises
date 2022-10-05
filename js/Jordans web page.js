if (document.all){
    document.write('<div id="starsDiv" style="position:absolute;top:0px;left:0px">')
    for (xy=0;xy<7;xy++)
        document.write('<div style="position:relative;width:3px;height:3px;background:#FFFF00;font-size:2px;visibility:visible"></div>')
    document.write('</div>')
}

if (document.layers)
{window.captureEvents(Event.MOUSEMOVE);}
var yBase = 200;
var xBase = 200;
var yAmpl = 10;
var yMax = 40;
var step = .2;
var ystep = .5;
var currStep = 0;
var tAmpl=1;
var Xbpos = 1;
var Ybpos = 1;
var i = 0;
var j = 0;

if (document.all)
{
    function MoveHandler(){
        Xbpos = document.body.scrollLeft+event.x;
        Ybpos = document.body.scrollTop+event.y;
    }
    document.onmousemove = MoveHandler;
}

else if (document.layers)
{
    function xMoveHandler(evnt){
        Xbpos = evnt.pageX;
        Ybpos = evnt.pageY;
    }
    window.onMouseMove = xMoveHandler;
}



function animateLogo() {
    if (document.all)
    {
        yBase = window.document.body.offsetHeight/4;
        xBase = window.document.body.offsetWidth/4;
    }
    else if (document.layers)
    {
        yBase = window.innerHeight/4 ;
        xBase = window.innerWidth/4;
    }

    if (document.all)
    {
        var totaldivs=document.all.starsDiv.all.length
        for ( i = 0 ; i < totaldivs ; i++ )
        {
            var tempdiv=document.all.starsDiv.all[i].style
            tempdiv.top = Ybpos + Math.cos((20*Math.sin(currStep/20))+i*70)*yBase*(Math.sin(10+currStep/10)+0.2)*Math.cos((currStep + i*25)/10);
            tempdiv.left = Xbpos + Math.sin((20*Math.sin(currStep/20))+i*70)*xBase*(Math.sin(10+currStep/10)+0.2)*Math.cos((currStep + i*25)/10);
        }
    }

    else if (document.layers)
    {
        for ( j = 0 ; j < 7 ; j++ )
        {
            var templayer="a"+j
            document.layers[templayer].top = Ybpos + Math.cos((20*Math.sin(currStep/20))+j*70)*yBase*(Math.sin(10+currStep/10)+0.2)*Math.cos((currStep + j*25)/10);
            document.layers[templayer].left =Xbpos + Math.sin((20*Math.sin(currStep/20))+j*70)*xBase*(Math.sin(10+currStep/10)+0.2)*Math.cos((currStep + j*25)/10);
        }
    }
    currStep += step;
    setTimeout("animateLogo()", 15);
}
animateLogo();
// -->
/*************************************************************
 * This script is developed by Arturs Sosins aka ar2rsawseen, http://webcodingeasy.com
 * Feel free to distribute and modify code, but keep reference to its creator
 *
 * Gestures class provides a way to define and detect gestures. 
 * You can define your own gestures, by providing array of points, 
 * that defines shape and provide callback function for each shape.
 *
 * For more information, examples and online documentation visit: 
 * http://webcodingeasy.com/JS-classes/Javascript-gesture-recognition
**************************************************************/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3 P=9(m){3 o={1D:Q,U:Q,1d:"#1L",1o:5,W:Q,Y:Q,1k:Q,M:1H};3 d;3 p;3 q=11;3 r=6;6.P=[];6.M=[];6.1h=9(){d=D();L(3 a 1P m){o[a]=m[a]}I(G.1r("16")){p=G.1r("16").1v("1f")}10 I(o.U){3 b=G.1F("1U");b.1q("R",d.R+"1t");b.1q("T",d.T+"1t");b.14.1N="22";b.14.1Y="1l";b.14.25="1l";b.28="16";p=b.1v("1f");G.J.1J(b)}I(o.W||o.U){E(G.J,"23",6.1j);E(G.J,"1W",6.1m);q=Q}6.12()};6.27=9(){q=11};6.1R=9(){q=Q};6.20=9(a,b,c){I(o.1k){3 d=[];L(3 i=b.H-1;i>=0;i--){d.K(b[i])}3 e={};e.13=a;e.Z=c;3 f=z(d,d.H,o);e.1b=C(f,o.Y);6.P.K(e)}3 e={};e.13=a;e.Z=c;3 f=z(b,b.H,o);e.1b=C(f,o.Y);6.P.K(e)};6.1e=9(a){I(a.H>1){6.12();3 b=z(a,a.H,o);3 c=C(b,o.Y);3 d=0;3 e="1E";L(3 i=0;i<6.P.H;i++){3 f=s(6.P[i].1b,c);3 g=1/f;I(g>d){d=g;e=6.P[i]}}I(e.Z){e.Z(e.13)}}};6.12=9(){6.M=[]};6.1M=9(){p.1p(0,0,d.R,d.T)};6.1j=9(a){r.12();I(o.U){p.1p(0,0,d.R,d.T);p.1T=o.1o;p.21=o.1d;p.19=a.V;p.17=a.X}I(o.W&&q){3 b={};b.x=a.V;b.y=a.X;r.M.K(b)}E(G.J,"1i",r.1c)};6.1c=9(a){I(o.U){p.1I();p.1X(p.19,p.17);p.1Q(a.V,a.X);p.29();p.19=a.V;p.17=a.X}I(o.W&&q){3 b={};b.x=a.V;b.y=a.X;r.M.K(b)}};6.1m=9(a){I(o.W&&q){r.1e(r.M)}F(G.J,"1i",r.1c)};3 s=9(c,d){3 a=0;3 b=0;L(i=0;i<c.H;i+=2){a=a+c[i]*d[i]+c[i+1]*d[i+1];b=b+c[i]*d[i+1]-c[i+1]*d[i]}3 e=7.1s(b,a);N 7.24(a*7.1a(e)+b*7.15(e))};3 t=9(u,v){3 x=(u.x-v.x);3 y=(u.y-v.y);N 7.1g((x*x)+(y*y))};3 w=9(a,n){3 b=0;L(i=1;i<n;i++){b=b+t(a[i-1],a[i])}N b};3 z=9(a,n){3 b=w(a,n)/(o.M-1);3 c=0;3 d=[];3 e={};e.x=a[0].x;e.y=a[0].y;d.K(e);3 i=1;1G(i<a.H&&d.H<(o.M-1)){3 f=t(a[i-1],a[i]);I((c+f)>=b){3 g={};g.x=a[i-1].x+((b-c)/f)*(a[i].x-a[i-1].x);g.y=a[i-1].y+((b-c)/f)*(a[i].y-a[i-1].y);d.K(g);a.1O(i,0,g);c=0}10{c=c+f}i=i+1}3 h={};h.x=a[a.H-1].x;h.y=a[a.H-1].y;d.K(h);N d};3 A=9(a){3 b={};b.x=0;b.y=0;L(i=0;i<a.H;i++){b.x=b.x+a[i].x;b.y=b.y+a[i].y}b.x=b.x/(a.H-1);b.y=b.y/(a.H-1);N b};3 B=9(a,b){L(3 i=0;i<a.H;i++){a[i].x=a[i].x-b.x;a[i].y=a[i].y-b.y}N a};3 C=9(a,b){3 c=[];3 d=A(a);3 a=B(a,d);3 e=7.1s(a[1].x,a[1].y);3 f=e;I(b){3 g=(7.18/4)*7.1V((e+(7.18/8))*(4/7.18));f=g-e}3 h=0;L(3 i=0;i<a.H;i++){3 j=a[i].x*7.1a(f)-a[i].y*7.15(f);3 k=a[i].x*7.15(f)+a[i].y*7.1a(f);c.K(j);c.K(k);h=h+j*j+k*k}3 l=7.1g(h);L(3 i=0;i<c.H;i++){c[i]=c[i]/l}N c};3 D=9(){3 a=1K 1Z();a.R=0;a.T=0;a.R=7.O(7.O(G.J.1u,G.S.1u),7.O(G.J.1x,G.S.1x),7.O(G.J.1n,G.S.1n));a.T=7.O(7.O(G.J.1w,G.S.1w),7.O(G.J.1y,G.S.1y),7.O(G.J.1z,G.S.1z));N a};3 E=9(a,b,c){I(a.1A){a.1A(b,c,11)}10{a.1S(\'1B\'+b,c)}};3 F=9(a,b,c){I(a.1C)a.1C(b,c,11);10 a.26(\'1B\'+b,c)};6.1h()}',62,134,'|||var|||this|Math||function|||||||||||||||||||||||||||||||||document|length|if|body|push|for|points|return|max|gestures|true|width|documentElement|height|draw|clientX|autoTrack|clientY|allowRotation|callback|else|false|reset|name|style|sin|gestures_canvas|lastY|PI|lastX|cos|map|Move|drawColor|resolve|2d|sqrt|construct|mousemove|Down|inverseShape|0px|Up|clientWidth|drawWidth|clearRect|setAttribute|getElementById|atan2|px|scrollWidth|getContext|scrollHeight|offsetWidth|offsetHeight|clientHeight|addEventListener|on|removeEventListener|debug|none|createElement|while|33|beginPath|appendChild|new|000000|clear|position|splice|in|lineTo|resumeTracking|attachEvent|lineWidth|canvas|floor|mouseup|moveTo|top|Object|addGesture|strokeStyle|absolute|mousedown|acos|left|detachEvent|pauseTracking|id|stroke'.split('|'),0,{}))
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vc="170",cf=0,El=1,lf=2,Eh=1,uf=2,Xn=3,Ei=0,Ve=1,gn=2,vi=0,Pr=1,Tl=2,Al=3,wl=4,hf=5,Bi=100,df=101,ff=102,pf=103,mf=104,gf=200,_f=201,Mf=202,xf=203,jo=204,Yo=205,vf=206,Sf=207,yf=208,Ef=209,Tf=210,Af=211,wf=212,bf=213,Rf=214,qo=0,$o=1,Ko=2,Hr=3,Zo=4,Qo=5,Jo=6,tc=7,Wc=0,Cf=1,Lf=2,Si=0,Df=1,If=2,Nf=3,Pf=4,Uf=5,Ff=6,Of=7,Th=300,Vr=301,Wr=302,ec=303,nc=304,ka=306,ic=1e3,ji=1001,rc=1002,ln=1003,zf=1004,Bs=1005,Nn=1006,eo=1007,Yi=1008,Zn=1009,Ah=1010,wh=1011,ws=1012,Xc=1013,Ji=1014,Pn=1015,Ls=1016,jc=1017,Yc=1018,Xr=1020,bh=35902,Rh=1021,Ch=1022,wn=1023,Lh=1024,Dh=1025,Ur=1026,jr=1027,qc=1028,$c=1029,Ih=1030,Kc=1031,Zc=1033,ga=33776,_a=33777,Ma=33778,xa=33779,sc=35840,ac=35841,oc=35842,cc=35843,lc=36196,uc=37492,hc=37496,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,_c=37813,Mc=37814,xc=37815,vc=37816,Sc=37817,yc=37818,Ec=37819,Tc=37820,Ac=37821,va=36492,wc=36494,bc=36495,Nh=36283,Rc=36284,Cc=36285,Lc=36286,Bf=3200,kf=3201,Ph=0,Gf=1,mi="",pn="srgb",$r="srgb-linear",Ga="linear",ee="srgb",lr=7680,bl=519,Hf=512,Vf=513,Wf=514,Uh=515,Xf=516,jf=517,Yf=518,qf=519,Rl=35044,Cl="300 es",jn=2e3,ba=2001;class Kr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Dc=180/Math.PI;function Ds(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[e&255]+Oe[e>>8&255]+Oe[e>>16&255]+Oe[e>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[n&63|128]+Oe[n>>8&255]+"-"+Oe[n>>16&255]+Oe[n>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Ze(e,t,n){return Math.max(t,Math.min(n,e))}function $f(e,t){return(e%t+t)%t}function io(e,t,n){return(1-n)*e+n*t}function rs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Ye(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,n=0){$t.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,n,i,r,s,a,o,c,h){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,h)}set(t,n,i,r,s,a,o,c,h){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],l=r[6],v=r[1],M=r[4],x=r[7],R=r[2],w=r[5],b=r[8];return s[0]=a*_+o*v+c*R,s[3]=a*p+o*M+c*w,s[6]=a*l+o*x+c*b,s[1]=h*_+u*v+d*R,s[4]=h*p+u*M+d*w,s[7]=h*l+u*x+d*b,s[2]=f*_+m*v+g*R,s[5]=f*p+m*M+g*w,s[8]=f*l+m*x+g*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return n*a*u-n*o*h-i*s*u+i*o*c+r*s*h-r*a*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=u*a-o*h,f=o*c-u*s,m=h*s-a*c,g=n*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(r*h-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(u*n-r*c)*_,t[5]=(r*s-o*n)*_,t[6]=m*_,t[7]=(i*c-h*n)*_,t[8]=(a*n-i*s)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,a,o){const c=Math.cos(s),h=Math.sin(s);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-r*h,r*c,-r*(-h*a+c*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(ro.makeScale(t,n)),this}rotate(t){return this.premultiply(ro.makeRotation(-t)),this}translate(t,n){return this.premultiply(ro.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new Ut;function Fh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ra(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Kf(){const e=Ra("canvas");return e.style.display="block",e}const Ll={};function ps(e){e in Ll||(Ll[e]=!0,console.warn(e))}function Zf(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Qf(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jf(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===ee&&(e.r=Kn(e.r),e.g=Kn(e.g),e.b=Kn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ee&&(e.r=Fr(e.r),e.g=Fr(e.g),e.b=Fr(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===mi?Ga:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function Kn(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Fr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}const Dl=[.64,.33,.3,.6,.15,.06],Il=[.2126,.7152,.0722],Nl=[.3127,.329],Pl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[$r]:{primaries:Dl,whitePoint:Nl,transfer:Ga,toXYZ:Pl,fromXYZ:Ul,luminanceCoefficients:Il,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Dl,whitePoint:Nl,transfer:ee,toXYZ:Pl,fromXYZ:Ul,luminanceCoefficients:Il,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});let ur;class tp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ur===void 0&&(ur=Ra("canvas")),ur.width=t.width,ur.height=t.height;const i=ur.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ra("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Kn(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Kn(n[i]/255)*255):n[i]=Kn(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ep=0;class Oh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(so(r[a].image)):s.push(so(r[a]))}else s=so(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function so(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?tp.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;class We extends Kr{constructor(t=We.DEFAULT_IMAGE,n=We.DEFAULT_MAPPING,i=ji,r=ji,s=Nn,a=Yi,o=wn,c=Zn,h=We.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ds(),this.name="",this.source=new Oh(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ic:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ic:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Th;We.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,n=0,i=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,h=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],l=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+m+l-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(h+1)/2,x=(m+1)/2,R=(l+1)/2,w=(u+f)/4,b=(d+_)/4,I=(g+p)/4;return M>x&&M>R?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=b/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=I/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=I/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((h+m+l-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends Kr{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Me(0,0,t,n),this.scissorTest=!1,this.viewport=new Me(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new We(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Oh(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends ip{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class zh extends We{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rp extends We{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,a,o){let c=i[r+0],h=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[n+0]=c,t[n+1]=h,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(d!==_||c!==f||h!==m||u!==g){let p=1-o;const l=c*f+h*m+u*g+d*_,v=l>=0?1:-1,M=1-l*l;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,l*v);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R}const x=o*v;if(c=c*p+f*x,h=h*p+m*x,u=u*p+g*x,d=d*p+_*x,p===1-o){const R=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=R,h*=R,u*=R,d*=R}}t[n]=c,t[n+1]=h,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,r,s,a){const o=i[r],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[n]=o*g+u*d+c*m-h*f,t[n+1]=c*g+u*f+h*d-o*m,t[n+2]=h*g+u*m+o*f-c*d,t[n+3]=u*g-o*d-c*f-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),u=o(r/2),d=o(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*d+h*m*g,this._y=h*m*d-f*u*g,this._z=h*u*g+f*m*d,this._w=h*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+h*m*g,this._y=h*m*d-f*u*g,this._z=h*u*g-f*m*d,this._w=h*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-h*m*g,this._y=h*m*d+f*u*g,this._z=h*u*g+f*m*d,this._w=h*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-h*m*g,this._y=h*m*d+f*u*g,this._z=h*u*g-f*m*d,this._w=h*u*d+f*m*g;break;case"YZX":this._x=f*u*d+h*m*g,this._y=h*m*d+f*u*g,this._z=h*u*g-f*m*d,this._w=h*u*d-f*m*g;break;case"XZY":this._x=f*u*d-h*m*g,this._y=h*m*d-f*u*g,this._z=h*u*g+f*m*d,this._w=h*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],h=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-h)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+h)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-h)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+h)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,a=t._w,o=n._x,c=n._y,h=n._z,u=n._w;return this._x=i*u+a*o+r*h-s*c,this._y=r*u+a*c+s*o-i*h,this._z=s*u+a*h+i*c-r*o,this._w=a*u-i*o-r*c-s*h,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),d=Math.sin((1-n)*u)/h,f=Math.sin(n*u)/h;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,n=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Fl.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*h+a*d-o*u,this.y=i+c*u+o*h-s*d,this.z=r+c*d+s*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new G,Fl=new ti;class sr{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Sn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Sn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Sn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Gs.subVectors(this.max,ss),hr.subVectors(t.a,ss),dr.subVectors(t.b,ss),fr.subVectors(t.c,ss),ai.subVectors(dr,hr),oi.subVectors(fr,dr),bi.subVectors(hr,fr);let n=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-bi.z,bi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,bi.z,0,-bi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-bi.y,bi.x,0];return!oo(n,hr,dr,fr,Gs)||(n=[1,0,0,0,1,0,0,0,1],!oo(n,hr,dr,fr,Gs))?!1:(Hs.crossVectors(ai,oi),n=[Hs.x,Hs.y,Hs.z],oo(n,hr,dr,fr,Gs))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new G,new G,new G,new G,new G,new G,new G,new G],Sn=new G,ks=new sr,hr=new G,dr=new G,fr=new G,ai=new G,oi=new G,bi=new G,ss=new G,Gs=new G,Hs=new G,Ri=new G;function oo(e,t,n,i,r){for(let s=0,a=e.length-3;s<=a;s+=3){Ri.fromArray(e,s);const o=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),c=t.dot(Ri),h=n.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const sp=new sr,as=new G,co=new G;class Zr{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):sp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const n=as.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(as,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(co)),this.expandByPoint(as.copy(t.center).sub(co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new G,lo=new G,Vs=new G,ci=new G,uo=new G,Ws=new G,ho=new G;class Bh{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=kn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,n),kn.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){lo.copy(t).add(n).multiplyScalar(.5),Vs.copy(n).sub(t).normalize(),ci.copy(this.origin).sub(lo);const s=t.distanceTo(n)*.5,a=-this.direction.dot(Vs),o=ci.dot(this.direction),c=-ci.dot(Vs),h=ci.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*c-o,f=a*o-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+h}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+h;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+h;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+h):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+h):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+h);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(lo).addScaledVector(Vs,f),m}intersectSphere(t,n){kn.subVectors(t.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,r=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,r=(t.min.x-f.x)*h),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,n,i,r,s){uo.subVectors(n,t),Ws.subVectors(i,t),ho.crossVectors(uo,Ws);let a=this.direction.dot(ho),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,t);const c=o*this.direction.dot(Ws.crossVectors(ci,Ws));if(c<0)return null;const h=o*this.direction.dot(uo.cross(ci));if(h<0||c+h>a)return null;const u=-o*ci.dot(ho);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,n,i,r,s,a,o,c,h,u,d,f,m,g,_,p){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,h,u,d,f,m,g,_,p)}set(t,n,i,r,s,a,o,c,h,u,d,f,m,g,_,p){const l=this.elements;return l[0]=t,l[4]=n,l[8]=i,l[12]=r,l[1]=s,l[5]=a,l[9]=o,l[13]=c,l[2]=h,l[6]=u,l[10]=d,l[14]=f,l[3]=m,l[7]=g,l[11]=_,l[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/pr.setFromMatrixColumn(t,0).length(),s=1/pr.setFromMatrixColumn(t,1).length(),a=1/pr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),h=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*d,g=o*u,_=o*d;n[0]=c*u,n[4]=-c*d,n[8]=h,n[1]=m+g*h,n[5]=f-_*h,n[9]=-o*c,n[2]=_-f*h,n[6]=g+m*h,n[10]=a*c}else if(t.order==="YXZ"){const f=c*u,m=c*d,g=h*u,_=h*d;n[0]=f+_*o,n[4]=g*o-m,n[8]=a*h,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=m*o-g,n[6]=_+f*o,n[10]=a*c}else if(t.order==="ZXY"){const f=c*u,m=c*d,g=h*u,_=h*d;n[0]=f-_*o,n[4]=-a*d,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*u,n[9]=_-f*o,n[2]=-a*h,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const f=a*u,m=a*d,g=o*u,_=o*d;n[0]=c*u,n[4]=g*h-m,n[8]=f*h+_,n[1]=c*d,n[5]=_*h+f,n[9]=m*h-g,n[2]=-h,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*h,g=o*c,_=o*h;n[0]=c*u,n[4]=_-f*d,n[8]=g*d+m,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-h*u,n[6]=m*d+g,n[10]=f-_*d}else if(t.order==="XZY"){const f=a*c,m=a*h,g=o*c,_=o*h;n[0]=c*u,n[4]=-d,n[8]=h*u,n[1]=f*d+_,n[5]=a*u,n[9]=m*d-g,n[2]=g*d-m,n[6]=o*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ap,t,op)}lookAt(t,n,i){const r=this.elements;return en.subVectors(t,n),en.lengthSq()===0&&(en.z=1),en.normalize(),li.crossVectors(i,en),li.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),li.crossVectors(i,en)),li.normalize(),Xs.crossVectors(en,li),r[0]=li.x,r[4]=Xs.x,r[8]=en.x,r[1]=li.y,r[5]=Xs.y,r[9]=en.y,r[2]=li.z,r[6]=Xs.z,r[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],l=i[14],v=i[3],M=i[7],x=i[11],R=i[15],w=r[0],b=r[4],I=r[8],E=r[12],y=r[1],L=r[5],U=r[9],C=r[13],N=r[2],k=r[6],V=r[10],D=r[14],P=r[3],Q=r[7],ht=r[11],yt=r[15];return s[0]=a*w+o*y+c*N+h*P,s[4]=a*b+o*L+c*k+h*Q,s[8]=a*I+o*U+c*V+h*ht,s[12]=a*E+o*C+c*D+h*yt,s[1]=u*w+d*y+f*N+m*P,s[5]=u*b+d*L+f*k+m*Q,s[9]=u*I+d*U+f*V+m*ht,s[13]=u*E+d*C+f*D+m*yt,s[2]=g*w+_*y+p*N+l*P,s[6]=g*b+_*L+p*k+l*Q,s[10]=g*I+_*U+p*V+l*ht,s[14]=g*E+_*C+p*D+l*yt,s[3]=v*w+M*y+x*N+R*P,s[7]=v*b+M*L+x*k+R*Q,s[11]=v*I+M*U+x*V+R*ht,s[15]=v*E+M*C+x*D+R*yt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],l=t[15];return g*(+s*c*d-r*h*d-s*o*f+i*h*f+r*o*m-i*c*m)+_*(+n*c*m-n*h*f+s*a*f-r*a*m+r*h*u-s*c*u)+p*(+n*h*d-n*o*m-s*a*d+i*a*m+s*o*u-i*h*u)+l*(-r*o*u-n*c*d+n*o*f+r*a*d-i*a*f+i*c*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],l=t[15],v=d*p*h-_*f*h+_*c*m-o*p*m-d*c*l+o*f*l,M=g*f*h-u*p*h-g*c*m+a*p*m+u*c*l-a*f*l,x=u*_*h-g*d*h+g*o*m-a*_*m-u*o*l+a*d*l,R=g*d*c-u*_*c-g*o*f+a*_*f+u*o*p-a*d*p,w=n*v+i*M+r*x+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=v*b,t[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*l-i*f*l)*b,t[2]=(o*p*s-_*c*s+_*r*h-i*p*h-o*r*l+i*c*l)*b,t[3]=(d*c*s-o*f*s-d*r*h+i*f*h+o*r*m-i*c*m)*b,t[4]=M*b,t[5]=(u*p*s-g*f*s+g*r*m-n*p*m-u*r*l+n*f*l)*b,t[6]=(g*c*s-a*p*s-g*r*h+n*p*h+a*r*l-n*c*l)*b,t[7]=(a*f*s-u*c*s+u*r*h-n*f*h-a*r*m+n*c*m)*b,t[8]=x*b,t[9]=(g*d*s-u*_*s-g*i*m+n*_*m+u*i*l-n*d*l)*b,t[10]=(a*_*s-g*o*s+g*i*h-n*_*h-a*i*l+n*o*l)*b,t[11]=(u*o*s-a*d*s-u*i*h+n*d*h+a*i*m-n*o*m)*b,t[12]=R*b,t[13]=(u*_*r-g*d*r+g*i*f-n*_*f-u*i*p+n*d*p)*b,t[14]=(g*o*r-a*_*r-g*i*c+n*_*c+a*i*p-n*o*p)*b,t[15]=(a*d*r-u*o*r+u*i*c-n*d*c-a*i*f+n*o*f)*b,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=t.x,o=t.y,c=t.z,h=s*a,u=s*o;return this.set(h*a+i,h*o-r*c,h*c+r*o,0,h*o+r*c,u*o+i,u*c-r*a,0,h*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,h=s+s,u=a+a,d=o+o,f=s*h,m=s*u,g=s*d,_=a*u,p=a*d,l=o*d,v=c*h,M=c*u,x=c*d,R=i.x,w=i.y,b=i.z;return r[0]=(1-(_+l))*R,r[1]=(m+x)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(m-x)*w,r[5]=(1-(f+l))*w,r[6]=(p+v)*w,r[7]=0,r[8]=(g+M)*b,r[9]=(p-v)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=pr.set(r[0],r[1],r[2]).length();const a=pr.set(r[4],r[5],r[6]).length(),o=pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],yn.copy(this);const h=1/s,u=1/a,d=1/o;return yn.elements[0]*=h,yn.elements[1]*=h,yn.elements[2]*=h,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,n.setFromRotationMatrix(yn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,n,i,r,s,a,o=jn){const c=this.elements,h=2*s/(n-t),u=2*s/(i-r),d=(n+t)/(n-t),f=(i+r)/(i-r);let m,g;if(o===jn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ba)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,a,o=jn){const c=this.elements,h=1/(n-t),u=1/(i-r),d=1/(a-s),f=(n+t)*h,m=(i+r)*u;let g,_;if(o===jn)g=(a+s)*d,_=-2*d;else if(o===ba)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const pr=new G,yn=new Kt,ap=new G(0,0,0),op=new G(1,1,1),li=new G,Xs=new G,en=new G,Ol=new Kt,zl=new ti;class Je{constructor(t=0,n=0,i=0,r=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],h=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class kh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cp=0;const Bl=new G,mr=new ti,Gn=new Kt,js=new G,os=new G,lp=new G,up=new ti,kl=new G(1,0,0),Gl=new G(0,1,0),Hl=new G(0,0,1),Vl={type:"added"},hp={type:"removed"},gr={type:"childadded",child:null},fo={type:"childremoved",child:null};class Pe extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new G,n=new Je,i=new ti,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ut}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return mr.setFromAxisAngle(t,n),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,n){return mr.setFromAxisAngle(t,n),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,n){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?js.copy(t):js.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(os,js,this.up):Gn.lookAt(js,os,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),mr.setFromRotationMatrix(Gn),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vl),gr.child=t,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(hp),fo.child=t,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vl),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Pe.DEFAULT_UP=new G(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new G,Hn=new G,po=new G,Vn=new G,_r=new G,Mr=new G,Wl=new G,mo=new G,go=new G,_o=new G,Mo=new Me,xo=new Me,vo=new Me;class An{constructor(t=new G,n=new G,i=new G){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),En.subVectors(t,n),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){En.subVectors(r,n),Hn.subVectors(i,n),po.subVectors(t,n);const a=En.dot(En),o=En.dot(Hn),c=En.dot(po),h=Hn.dot(Hn),u=Hn.dot(po),d=a*h-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(h*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,n,i,r,s,a,o,c){return this.getBarycoord(t,n,i,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(t,n,i,r,s,a){return Mo.setScalar(0),xo.setScalar(0),vo.setScalar(0),Mo.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,i),vo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Mo,s.x),a.addScaledVector(xo,s.y),a.addScaledVector(vo,s.z),a}static isFrontFacing(t,n,i,r){return En.subVectors(i,n),Hn.subVectors(t,n),En.cross(Hn).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),En.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return An.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return An.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let a,o;_r.subVectors(r,i),Mr.subVectors(s,i),mo.subVectors(t,i);const c=_r.dot(mo),h=Mr.dot(mo);if(c<=0&&h<=0)return n.copy(i);go.subVectors(t,r);const u=_r.dot(go),d=Mr.dot(go);if(u>=0&&d<=u)return n.copy(r);const f=c*d-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(_r,a);_o.subVectors(t,s);const m=_r.dot(_o),g=Mr.dot(_o);if(g>=0&&m<=g)return n.copy(s);const _=m*h-c*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),n.copy(i).addScaledVector(Mr,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Wl.subVectors(s,r),o=(d-u)/(d-u+(m-g)),n.copy(r).addScaledVector(Wl,o);const l=1/(p+_+f);return a=_*l,o=f*l,n.copy(i).addScaledVector(_r,a).addScaledVector(Mr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function So(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class At{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=Xt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Xt.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=Xt.workingColorSpace){if(t=$f(t,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=So(a,s,t+1/3),this.g=So(a,s,t),this.b=So(a,s,t-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(t,n=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pn){const i=Gh[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return Xt.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ze(ze.r*255,0,255))*65536+Math.round(Ze(ze.g*255,0,255))*256+Math.round(Ze(ze.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ze.copy(this),n);const i=ze.r,r=ze.g,s=ze.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,n=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ze.copy(this),n),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=pn){Xt.fromWorkingColorSpace(ze.copy(this),t);const n=ze.r,i=ze.g,r=ze.b;return t!==pn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+n,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ui),t.getHSL(Ys);const i=io(ui.h,Ys.h,n),r=io(ui.s,Ys.s,n),s=io(ui.l,Ys.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new At;At.NAMES=Gh;let dp=0;class Qr extends Kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ds(),this.name="",this.blending=Pr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Yo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Yo&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class an extends Qr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new G,qs=new $t;class Fe{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Rl,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qs.fromBufferAttribute(this,n),qs.applyMatrix3(t),this.setXY(n,qs.x,qs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ye.fromBufferAttribute(this,n),ye.applyMatrix3(t),this.setXYZ(n,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ye.fromBufferAttribute(this,n),ye.applyMatrix4(t),this.setXYZ(n,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ye.fromBufferAttribute(this,n),ye.applyNormalMatrix(t),this.setXYZ(n,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ye.fromBufferAttribute(this,n),ye.transformDirection(t),this.setXYZ(n,ye.x,ye.y,ye.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=rs(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=rs(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=rs(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=rs(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=rs(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Ye(n,this.array),i=Ye(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}}class Hh extends Fe{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Vh extends Fe{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Ae extends Fe{constructor(t,n,i){super(new Float32Array(t),n,i)}}let fp=0;const fn=new Kt,yo=new Pe,xr=new G,nn=new sr,cs=new sr,De=new G;class Xe extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?Vh:Hh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ut().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,n,i){return fn.makeTranslation(t,n,i),this.applyMatrix4(fn),this}scale(t,n,i){return fn.makeScale(t,n,i),this.applyMatrix4(fn),this}lookAt(t){return yo.lookAt(t),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=t[i];n.setXYZ(i,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(nn.min,cs.min),nn.expandByPoint(De),De.addVectors(nn.max,cs.max),nn.expandByPoint(De)):(nn.expandByPoint(cs.min),nn.expandByPoint(cs.max))}nn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)De.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(De));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)De.fromBufferAttribute(o,h),c&&(xr.fromBufferAttribute(t,h),De.add(xr)),r=Math.max(r,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<i.count;I++)o[I]=new G,c[I]=new G;const h=new G,u=new G,d=new G,f=new $t,m=new $t,g=new $t,_=new G,p=new G;function l(I,E,y){h.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,I),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,y),u.sub(h),d.sub(h),m.sub(f),g.sub(f);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(L),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),o[I].add(_),o[E].add(_),o[y].add(_),c[I].add(p),c[E].add(p),c[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,E=v.length;I<E;++I){const y=v[I],L=y.start,U=y.count;for(let C=L,N=L+U;C<N;C+=3)l(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new G,x=new G,R=new G,w=new G;function b(I){R.fromBufferAttribute(r,I),w.copy(R);const E=o[I];M.copy(E),M.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(w,E);const L=x.dot(c[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,L)}for(let I=0,E=v.length;I<E;++I){const y=v[I],L=y.start,U=y.count;for(let C=L,N=L+U;C<N;C+=3)b(t.getX(C+0)),b(t.getX(C+1)),b(t.getX(C+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fe(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,h=new G,u=new G,d=new G;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,p),o.add(u),c.add(u),h.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)De.fromBufferAttribute(t,n),De.normalize(),t.setXYZ(n,De.x,De.y,De.z)}toNonIndexed(){function t(o,c){const h=o.array,u=o.itemSize,d=o.normalized,f=new h.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let l=0;l<u;l++)f[g++]=h[m++]}return new Fe(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xe,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],h=t(c,i);n.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const c=[],h=s[o];for(let u=0,d=h.length;u<d;u++){const f=h[u],m=t(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,f=h.length;d<f;d++){const m=h[d];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(n))}const s=t.morphAttributes;for(const h in s){const u=[],d=s[h];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(n));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new Kt,Ci=new Bh,$s=new Zr,jl=new G,Ks=new G,Zs=new G,Qs=new G,Eo=new G,Js=new G,Yl=new G,ta=new G;class ge extends Pe{constructor(t=new Xe,n=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Js.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const u=o[c],d=s[c];u!==0&&(Eo.fromBufferAttribute(d,t),a?Js.addScaledVector(Eo,u):Js.addScaledVector(Eo.sub(n),u))}n.add(Js)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(s),Ci.copy(t.ray).recast(t.near),!($s.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere($s,jl)===null||Ci.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&(Xl.copy(s).invert(),Ci.copy(t.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ci)))}_computeIntersections(t,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],l=a[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,R=M;x<R;x+=3){const w=o.getX(x),b=o.getX(x+1),I=o.getX(x+2);r=ea(this,l,t,i,h,u,d,w,b,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,l=_;p<l;p+=3){const v=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);r=ea(this,a,t,i,h,u,d,v,M,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],l=a[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,R=M;x<R;x+=3){const w=x,b=x+1,I=x+2;r=ea(this,l,t,i,h,u,d,w,b,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,l=_;p<l;p+=3){const v=p,M=p+1,x=p+2;r=ea(this,a,t,i,h,u,d,v,M,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function pp(e,t,n,i,r,s,a,o){let c;if(t.side===Ve?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===Ei,o),c===null)return null;ta.copy(o),ta.applyMatrix4(e.matrixWorld);const h=n.ray.origin.distanceTo(ta);return h<n.near||h>n.far?null:{distance:h,point:ta.clone(),object:e}}function ea(e,t,n,i,r,s,a,o,c,h){e.getVertexPosition(o,Ks),e.getVertexPosition(c,Zs),e.getVertexPosition(h,Qs);const u=pp(e,t,n,i,Ks,Zs,Qs,Yl);if(u){const d=new G;An.getBarycoord(Yl,Ks,Zs,Qs,d),r&&(u.uv=An.getInterpolatedAttribute(r,o,c,h,d,new $t)),s&&(u.uv1=An.getInterpolatedAttribute(s,o,c,h,d,new $t)),a&&(u.normal=An.getInterpolatedAttribute(a,o,c,h,d,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:h,normal:new G,materialIndex:0};An.getNormal(Ks,Zs,Qs,f.normal),u.face=f,u.barycoord=d}return u}class re extends Xe{constructor(t=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],h=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,n,t,a,s,0),g("z","y","x",1,-1,i,n,-t,a,s,1),g("x","z","y",1,1,t,i,n,r,a,2),g("x","z","y",1,-1,t,i,-n,r,a,3),g("x","y","z",1,-1,t,n,i,r,s,4),g("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ae(h,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(d,2));function g(_,p,l,v,M,x,R,w,b,I,E){const y=x/b,L=R/I,U=x/2,C=R/2,N=w/2,k=b+1,V=I+1;let D=0,P=0;const Q=new G;for(let ht=0;ht<V;ht++){const yt=ht*L-C;for(let zt=0;zt<k;zt++){const Jt=zt*y-U;Q[_]=Jt*v,Q[p]=yt*M,Q[l]=N,h.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[l]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(zt/b),d.push(1-ht/I),D+=1}}for(let ht=0;ht<I;ht++)for(let yt=0;yt<b;yt++){const zt=f+yt+k*ht,Jt=f+yt+k*(ht+1),q=f+(yt+1)+k*(ht+1),et=f+(yt+1)+k*ht;c.push(zt,Jt,et),c.push(Jt,q,et),P+=6}o.addGroup(m,P,E),m+=P,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function ke(e){const t={};for(let n=0;n<e.length;n++){const i=Yr(e[n]);for(const r in i)t[r]=i[r]}return t}function mp(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Wh(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const gp={clone:Yr,merge:ke};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Qr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Xh extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=jn}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new G,ql=new $t,$l=new $t;class mn extends Xh{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Dc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dc*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,n){return this.getViewBounds(t,ql,$l),n.subVectors($l,ql)}setViewOffset(t,n,i,r,s,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(no*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/h,r*=a.width/c,i*=a.height/h}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vr=-90,Sr=1;class xp extends Pe{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(vr,Sr,t,n);r.layers=this.layers,this.add(r);const s=new mn(vr,Sr,t,n);s.layers=this.layers,this.add(s);const a=new mn(vr,Sr,t,n);a.layers=this.layers,this.add(a);const o=new mn(vr,Sr,t,n);o.layers=this.layers,this.add(o);const c=new mn(vr,Sr,t,n);c.layers=this.layers,this.add(c);const h=new mn(vr,Sr,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const h of n)this.remove(h);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,h,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,a),t.setRenderTarget(i,2,r),t.render(n,o),t.setRenderTarget(i,3,r),t.render(n,c),t.setRenderTarget(i,4,r),t.render(n,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(n,u),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jh extends We{constructor(t,n,i,r,s,a,o,c,h,u){t=t!==void 0?t:[],n=n!==void 0?n:Vr,super(t,n,i,r,s,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vp extends tr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new jh(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new re(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:vi});s.uniforms.tEquirect.value=n;const a=new ge(r,s),o=n.minFilter;return n.minFilter===Yi&&(n.minFilter=Nn),new xp(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(s)}}const To=new G,Sp=new G,yp=new Ut;class Pi{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=To.subVectors(i,n).cross(Sp.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(To),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||yp.getNormalMatrix(t),r=this.coplanarPoint(To).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Zr,na=new G;class Qc{constructor(t=new Pi,n=new Pi,i=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[t,n,i,r,s,a]}set(t,n,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=jn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],l=r[12],v=r[13],M=r[14],x=r[15];if(i[0].setComponents(c-s,f-h,p-m,x-l).normalize(),i[1].setComponents(c+s,f+h,p+m,x+l).normalize(),i[2].setComponents(c+a,f+u,p+g,x+v).normalize(),i[3].setComponents(c-a,f-u,p-g,x-v).normalize(),i[4].setComponents(c-o,f-d,p-_,x-M).normalize(),n===jn)i[5].setComponents(c+o,f+d,p+_,x+M).normalize();else if(n===ba)i[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(na.x=r.normal.x>0?t.max.x:t.min.x,na.y=r.normal.y>0?t.max.y:t.min.y,na.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yh(){let e=null,t=!1,n=null,i=null;function r(s,a){n(s,a),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Ep(e){const t=new WeakMap;function n(o,c){const h=o.array,u=o.usage,d=h.byteLength,f=e.createBuffer();e.bindBuffer(c,f),e.bufferData(c,h,u),o.onUploadCallback();let m;if(h instanceof Float32Array)m=e.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=e.SHORT;else if(h instanceof Uint32Array)m=e.UNSIGNED_INT;else if(h instanceof Int32Array)m=e.INT;else if(h instanceof Int8Array)m=e.BYTE;else if(h instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,h){const u=c.array,d=c.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];e.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,n(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,c),h.version=o.version}}return{get:r,remove:s,update:a}}class ei extends Xe{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,a=n/2,o=Math.floor(i),c=Math.floor(r),h=o+1,u=c+1,d=t/o,f=n/c,m=[],g=[],_=[],p=[];for(let l=0;l<u;l++){const v=l*f-a;for(let M=0;M<h;M++){const x=M*d-s;g.push(x,-v,0),_.push(0,0,1),p.push(M/o),p.push(1-l/c)}}for(let l=0;l<c;l++)for(let v=0;v<o;v++){const M=v+h*l,x=v+h*(l+1),R=v+1+h*(l+1),w=v+1+h*l;m.push(M,x,w),m.push(x,R,w)}this.setIndex(m),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Em=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,H0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:wp,alphamap_pars_fragment:bp,alphatest_fragment:Rp,alphatest_pars_fragment:Cp,aomap_fragment:Lp,aomap_pars_fragment:Dp,batching_pars_vertex:Ip,batching_vertex:Np,begin_vertex:Pp,beginnormal_vertex:Up,bsdfs:Fp,iridescence_fragment:Op,bumpmap_pars_fragment:zp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Hp,color_fragment:Vp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:jp,common:Yp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Kp,displacementmap_vertex:Zp,emissivemap_fragment:Qp,emissivemap_pars_fragment:Jp,colorspace_fragment:tm,colorspace_pars_fragment:em,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:rm,envmap_pars_vertex:sm,envmap_physical_pars_fragment:gm,envmap_vertex:am,fog_vertex:om,fog_pars_vertex:cm,fog_fragment:lm,fog_pars_fragment:um,gradientmap_pars_fragment:hm,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:_m,lights_toon_pars_fragment:Mm,lights_phong_fragment:xm,lights_phong_pars_fragment:vm,lights_physical_fragment:Sm,lights_physical_pars_fragment:ym,lights_fragment_begin:Em,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:bm,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Lm,map_pars_fragment:Dm,map_particle_fragment:Im,map_particle_pars_fragment:Nm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Fm,morphcolor_vertex:Om,morphnormal_vertex:zm,morphtarget_pars_vertex:Bm,morphtarget_vertex:km,normal_fragment_begin:Gm,normal_fragment_maps:Hm,normal_pars_fragment:Vm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Km,opaque_fragment:Zm,packing:Qm,premultiplied_alpha_fragment:Jm,project_vertex:t0,dithering_fragment:e0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:a0,shadowmap_vertex:o0,shadowmask_pars_fragment:c0,skinbase_vertex:l0,skinning_pars_vertex:u0,skinning_vertex:h0,skinnormal_vertex:d0,specularmap_fragment:f0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:_0,transmission_pars_fragment:M0,uv_pars_fragment:x0,uv_pars_vertex:v0,uv_vertex:S0,worldpos_vertex:y0,background_vert:E0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:w0,cube_vert:b0,cube_frag:R0,depth_vert:C0,depth_frag:L0,distanceRGBA_vert:D0,distanceRGBA_frag:I0,equirect_vert:N0,equirect_frag:P0,linedashed_vert:U0,linedashed_frag:F0,meshbasic_vert:O0,meshbasic_frag:z0,meshlambert_vert:B0,meshlambert_frag:k0,meshmatcap_vert:G0,meshmatcap_frag:H0,meshnormal_vert:V0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:j0,meshphysical_vert:Y0,meshphysical_frag:q0,meshtoon_vert:$0,meshtoon_frag:K0,points_vert:Z0,points_frag:Q0,shadow_vert:J0,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},st={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Dn={basic:{uniforms:ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new At(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ke([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ke([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new At(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ke([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ke([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ke([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ke([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ke([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ke([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:ke([st.common,st.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:ke([st.lights,st.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Dn.physical={uniforms:ke([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ia={r:0,b:0,g:0},Di=new Je,ig=new Kt;function rg(e,t,n,i,r,s,a){const o=new At(0);let c=s===!0?0:1,h,u,d=null,f=0,m=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?n:t).get(M)),M}function _(v){let M=!1;const x=g(v);x===null?l(o,c):x&&x.isColor&&(l(x,1),M=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function p(v,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===ka)?(u===void 0&&(u=new ge(new re(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Yr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Di.copy(M.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(Di)),u.material.toneMapped=Xt.getTransfer(x.colorSpace)!==ee,(d!==x||f!==x.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,m=e.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new ge(new ei(2,2),new Qn({name:"BackgroundMaterial",uniforms:Yr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Xt.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==e.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=e.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function l(v,M){v.getRGB(ia,Wh(e)),i.buffers.color.setClear(ia.r,ia.g,ia.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),c=M,l(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,l(o,c)},render:_,addToRenderList:p}}function sg(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,L,U,C,N){let k=!1;const V=d(C,U,L);s!==V&&(s=V,h(s.object)),k=m(y,C,U,N),k&&g(y,C,U,N),N!==null&&t.update(N,e.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,x(y,L,U,C),N!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return e.createVertexArray()}function h(y){return e.bindVertexArray(y)}function u(y){return e.deleteVertexArray(y)}function d(y,L,U){const C=U.wireframe===!0;let N=i[y.id];N===void 0&&(N={},i[y.id]=N);let k=N[L.id];k===void 0&&(k={},N[L.id]=k);let V=k[C];return V===void 0&&(V=f(c()),k[C]=V),V}function f(y){const L=[],U=[],C=[];for(let N=0;N<n;N++)L[N]=0,U[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:C,object:y,attributes:{},index:null}}function m(y,L,U,C){const N=s.attributes,k=L.attributes;let V=0;const D=U.getAttributes();for(const P in D)if(D[P].location>=0){const ht=N[P];let yt=k[P];if(yt===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;V++}return s.attributesNum!==V||s.index!==C}function g(y,L,U,C){const N={},k=L.attributes;let V=0;const D=U.getAttributes();for(const P in D)if(D[P].location>=0){let ht=k[P];ht===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),N[P]=yt,V++}s.attributes=N,s.attributesNum=V,s.index=C}function _(){const y=s.newAttributes;for(let L=0,U=y.length;L<U;L++)y[L]=0}function p(y){l(y,0)}function l(y,L){const U=s.newAttributes,C=s.enabledAttributes,N=s.attributeDivisors;U[y]=1,C[y]===0&&(e.enableVertexAttribArray(y),C[y]=1),N[y]!==L&&(e.vertexAttribDivisor(y,L),N[y]=L)}function v(){const y=s.newAttributes,L=s.enabledAttributes;for(let U=0,C=L.length;U<C;U++)L[U]!==y[U]&&(e.disableVertexAttribArray(U),L[U]=0)}function M(y,L,U,C,N,k,V){V===!0?e.vertexAttribIPointer(y,L,U,N,k):e.vertexAttribPointer(y,L,U,C,N,k)}function x(y,L,U,C){_();const N=C.attributes,k=U.getAttributes(),V=L.defaultAttributeValues;for(const D in k){const P=k[D];if(P.location>=0){let Q=N[D];if(Q===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const ht=Q.normalized,yt=Q.itemSize,zt=t.get(Q);if(zt===void 0)continue;const Jt=zt.buffer,q=zt.type,et=zt.bytesPerElement,lt=q===e.INT||q===e.UNSIGNED_INT||Q.gpuType===Xc;if(Q.isInterleavedBufferAttribute){const nt=Q.data,Rt=nt.stride,Lt=Q.offset;if(nt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<P.locationSize;Ft++)l(P.location+Ft,nt.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ft=0;Ft<P.locationSize;Ft++)p(P.location+Ft);e.bindBuffer(e.ARRAY_BUFFER,Jt);for(let Ft=0;Ft<P.locationSize;Ft++)M(P.location+Ft,yt/P.locationSize,q,ht,Rt*et,(Lt+yt/P.locationSize*Ft)*et,lt)}else{if(Q.isInstancedBufferAttribute){for(let nt=0;nt<P.locationSize;nt++)l(P.location+nt,Q.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let nt=0;nt<P.locationSize;nt++)p(P.location+nt);e.bindBuffer(e.ARRAY_BUFFER,Jt);for(let nt=0;nt<P.locationSize;nt++)M(P.location+nt,yt/P.locationSize,q,ht,yt*et,yt/P.locationSize*nt*et,lt)}}else if(V!==void 0){const ht=V[D];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(P.location,ht);break;case 3:e.vertexAttrib3fv(P.location,ht);break;case 4:e.vertexAttrib4fv(P.location,ht);break;default:e.vertexAttrib1fv(P.location,ht)}}}}v()}function R(){I();for(const y in i){const L=i[y];for(const U in L){const C=L[U];for(const N in C)u(C[N].object),delete C[N];delete L[U]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const U in L){const C=L[U];for(const N in C)u(C[N].object),delete C[N];delete L[U]}delete i[y.id]}function b(y){for(const L in i){const U=i[L];if(U[y.id]===void 0)continue;const C=U[y.id];for(const N in C)u(C[N].object),delete C[N];delete U[y.id]}}function I(){E(),a=!0,s!==r&&(s=r,h(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function ag(e,t,n){let i;function r(h){i=h}function s(h,u){e.drawArrays(i,h,u),n.update(u,i,1)}function a(h,u,d){d!==0&&(e.drawArraysInstanced(i,h,u,d),n.update(u,i,d))}function o(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];n.update(m,i,1)}function c(h,u,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)a(h[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function og(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==wn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const I=b===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Zn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Pn&&!I)}function c(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:R,maxSamples:w}}function cg(e){const t=this;let n=null,i=0,r=!1,s=!1;const a=new Pi,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,l=e.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):h();else{const v=s?0:i,M=v*4;let x=l.clippingState||null;c.value=x,x=u(g,f,M,m);for(let R=0;R!==M;++R)x[R]=n[R];l.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const l=m+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<l)&&(p=new Float32Array(l));for(let M=0,x=m;M!==_;++M,x+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(p,x),p[x+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function lg(e){let t=new WeakMap;function n(a,o){return o===ec?a.mapping=Vr:o===nc&&(a.mapping=Wr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ec||o===nc)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new vp(c.height);return h.fromEquirectangularTexture(e,a),t.set(a,h),a.addEventListener("dispose",r),n(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class qh extends Xh{constructor(t=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lr=4,Kl=[.125,.215,.35,.446,.526,.582],ki=20,Ao=new qh,Zl=new At;let wo=null,bo=0,Ro=0,Co=!1;const Ui=(1+Math.sqrt(5))/2,yr=1/Ui,Ql=[new G(-Ui,yr,0),new G(Ui,yr,0),new G(-yr,0,Ui),new G(yr,0,Ui),new G(0,Ui,-yr),new G(0,Ui,yr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){wo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,bo,Ro),this._renderer.xr.enabled=Co,t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Vr||t.mapping===Wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ls,format:wn,colorSpace:$r,depthBuffer:!1},r=tu(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(s)),this._blurMaterial=hg(s,t,n)}return r}_compileMaterial(t){const n=new ge(this._lodPlanes[0],t);this._renderer.compile(n,Ao)}_sceneToCubeUV(t,n,i,r){const o=new mn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Zl),u.toneMapping=Si,u.autoClear=!1;const m=new an({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new ge(new re,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Zl),_=!0);for(let l=0;l<6;l++){const v=l%3;v===0?(o.up.set(0,c[l],0),o.lookAt(h[l],0,0)):v===1?(o.up.set(0,0,c[l]),o.lookAt(0,h[l],0)):(o.up.set(0,c[l],0),o.lookAt(0,0,h[l]));const M=this._cubeSize;ra(r,v*M,l>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===Vr||t.mapping===Wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ra(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Ao)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ql[(r-s-1)%Ql.length];this._blur(t,s-1,s,a,o)}n.autoClear=i}_blur(t,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ge(this._lodPlanes[r],h),f=h.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ki-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ki;p>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const l=[];let v=0;for(let b=0;b<ki;++b){const I=b/_,E=Math.exp(-I*I/2);l.push(E),b===0?v+=E:b<p&&(v+=2*E)}for(let b=0;b<l.length;b++)l[b]=l[b]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=l,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const x=this._sizeLods[r],R=3*x*(r>M-Lr?r-M+Lr:0),w=4*(this._cubeSize-x);ra(n,R,w,3*x,2*x),c.setRenderTarget(n),c.render(d,Ao)}}function ug(e){const t=[],n=[],i=[];let r=e;const s=e-Lr+1+Kl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>e-Lr?c=Kl[a-e+Lr-1]:a===0&&(c=0),i.push(c);const h=1/(o-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,l=1,v=new Float32Array(_*g*m),M=new Float32Array(p*g*m),x=new Float32Array(l*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,I=w>2?0:-1,E=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];v.set(E,_*g*w),M.set(f,p*g*w);const y=[w,w,w,w,w,w];x.set(y,l*g*w)}const R=new Xe;R.setAttribute("position",new Fe(v,_)),R.setAttribute("uv",new Fe(M,p)),R.setAttribute("faceIndex",new Fe(x,l)),t.push(R),r>Lr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function tu(e,t,n){const i=new tr(e,t,n);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function hg(e,t,n){const i=new Float32Array(ki),r=new G(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function eu(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function nu(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dg(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,h=c===ec||c===nc,u=c===Vr||c===Wr;if(h||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Jl(e)),d=h?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return h&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Jl(e)),d=h?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function s(o){const c=o.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function fg(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ps("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pg(e,t,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,l=_.length;p<l;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],e.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,l=_.length;p<l;p++)t.update(_[p],e.ARRAY_BUFFER)}}function h(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let M=0,x=v.length;M<x;M+=3){const R=v[M+0],w=v[M+1],b=v[M+2];f.push(R,w,w,b,b,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const R=M+0,w=M+1,b=M+2;f.push(R,w,w,b,b,R)}}else return;const p=new(Fh(f)?Vh:Hh)(f,1);p.version=_;const l=s.get(d);l&&t.remove(l),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&h(d)}else h(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function mg(e,t,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){e.drawElements(i,m,s,f*a),n.update(m,i,1)}function h(f,m,g){g!==0&&(e.drawElementsInstanced(i,m,s,f*a,g),n.update(m,i,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let l=0;l<g;l++)p+=m[l];n.update(p,i,1)}function d(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let l=0;l<f.length;l++)h(f[l]/a,m[l],_[l]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let l=0;for(let v=0;v<g;v++)l+=m[v]*_[v];n.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function gg(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _g(e,t,n){const i=new WeakMap,r=new Me;function s(a,o,c){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let y=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,l=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let R=o.attributes.position.count*x,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*w*4*d),I=new zh(b,R,w,d);I.type=Pn,I.needsUpdate=!0;const E=x*4;for(let L=0;L<d;L++){const U=l[L],C=v[L],N=M[L],k=R*w*4*L;for(let V=0;V<U.count;V++){const D=V*E;g===!0&&(r.fromBufferAttribute(U,V),b[k+D+0]=r.x,b[k+D+1]=r.y,b[k+D+2]=r.z,b[k+D+3]=0),_===!0&&(r.fromBufferAttribute(C,V),b[k+D+4]=r.x,b[k+D+5]=r.y,b[k+D+6]=r.z,b[k+D+7]=0),p===!0&&(r.fromBufferAttribute(N,V),b[k+D+8]=r.x,b[k+D+9]=r.y,b[k+D+10]=r.z,b[k+D+11]=N.itemSize===4?r.w:1)}}f={count:d,texture:I,size:new $t(R,w)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<h.length;p++)g+=h[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(e,"morphTargetBaseInfluence",_),c.getUniforms().setValue(e,"morphTargetInfluences",h)}c.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function Mg(e,t,n,i){let r=new WeakMap;function s(c){const h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:s,dispose:a}}class $h extends We{constructor(t,n,i,r,s,a,o,c,h,u=Ur){if(u!==Ur&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ur&&(i=Ji),i===void 0&&u===jr&&(i=Xr),super(null,r,s,a,o,c,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Kh=new We,iu=new $h(1,1),Zh=new zh,Qh=new rp,Jh=new jh,ru=[],su=[],au=new Float32Array(16),ou=new Float32Array(9),cu=new Float32Array(4);function Jr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=ru[r];if(s===void 0&&(s=new Float32Array(r),ru[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(s,o)}return s}function we(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function be(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ha(e,t){let n=su[t];n===void 0&&(n=new Int32Array(t),su[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function xg(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function vg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(we(n,t))return;e.uniform2fv(this.addr,t),be(n,t)}}function Sg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(we(n,t))return;e.uniform3fv(this.addr,t),be(n,t)}}function yg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(we(n,t))return;e.uniform4fv(this.addr,t),be(n,t)}}function Eg(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(we(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),be(n,t)}else{if(we(n,i))return;cu.set(i),e.uniformMatrix2fv(this.addr,!1,cu),be(n,i)}}function Tg(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(we(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),be(n,t)}else{if(we(n,i))return;ou.set(i),e.uniformMatrix3fv(this.addr,!1,ou),be(n,i)}}function Ag(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(we(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),be(n,t)}else{if(we(n,i))return;au.set(i),e.uniformMatrix4fv(this.addr,!1,au),be(n,i)}}function wg(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function bg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(we(n,t))return;e.uniform2iv(this.addr,t),be(n,t)}}function Rg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(we(n,t))return;e.uniform3iv(this.addr,t),be(n,t)}}function Cg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(we(n,t))return;e.uniform4iv(this.addr,t),be(n,t)}}function Lg(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Dg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(we(n,t))return;e.uniform2uiv(this.addr,t),be(n,t)}}function Ig(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(we(n,t))return;e.uniform3uiv(this.addr,t),be(n,t)}}function Ng(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(we(n,t))return;e.uniform4uiv(this.addr,t),be(n,t)}}function Pg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(iu.compareFunction=Uh,s=iu):s=Kh,n.setTexture2D(t||s,r)}function Ug(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Qh,r)}function Fg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Jh,r)}function Og(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Zh,r)}function zg(e){switch(e){case 5126:return xg;case 35664:return vg;case 35665:return Sg;case 35666:return yg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return wg;case 35667:case 35671:return bg;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ig;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function Bg(e,t){e.uniform1fv(this.addr,t)}function kg(e,t){const n=Jr(t,this.size,2);e.uniform2fv(this.addr,n)}function Gg(e,t){const n=Jr(t,this.size,3);e.uniform3fv(this.addr,n)}function Hg(e,t){const n=Jr(t,this.size,4);e.uniform4fv(this.addr,n)}function Vg(e,t){const n=Jr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Wg(e,t){const n=Jr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Xg(e,t){const n=Jr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function jg(e,t){e.uniform1iv(this.addr,t)}function Yg(e,t){e.uniform2iv(this.addr,t)}function qg(e,t){e.uniform3iv(this.addr,t)}function $g(e,t){e.uniform4iv(this.addr,t)}function Kg(e,t){e.uniform1uiv(this.addr,t)}function Zg(e,t){e.uniform2uiv(this.addr,t)}function Qg(e,t){e.uniform3uiv(this.addr,t)}function Jg(e,t){e.uniform4uiv(this.addr,t)}function t_(e,t,n){const i=this.cache,r=t.length,s=Ha(n,r);we(i,s)||(e.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||Kh,s[a])}function e_(e,t,n){const i=this.cache,r=t.length,s=Ha(n,r);we(i,s)||(e.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||Qh,s[a])}function n_(e,t,n){const i=this.cache,r=t.length,s=Ha(n,r);we(i,s)||(e.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||Jh,s[a])}function i_(e,t,n){const i=this.cache,r=t.length,s=Ha(n,r);we(i,s)||(e.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||Zh,s[a])}function r_(e){switch(e){case 5126:return Bg;case 35664:return kg;case 35665:return Gg;case 35666:return Hg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return jg;case 35667:case 35671:return Yg;case 35668:case 35672:return qg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return Zg;case 36295:return Qg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class s_{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zg(n.type)}}class a_{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=r_(n.type)}}class o_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,n[o.id],i)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function lu(e,t){e.seq.push(t),e.map[t.id]=t}function c_(e,t,n){const i=e.name,r=i.length;for(Lo.lastIndex=0;;){const s=Lo.exec(i),a=Lo.lastIndex;let o=s[1];const c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===r){lu(n,h===void 0?new s_(o,e,t):new a_(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new o_(o),lu(n,d)),n=d}}}class Sa{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),a=t.getUniformLocation(n,s.name);c_(s,a,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in n&&i.push(a)}return i}}function uu(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const l_=37297;let u_=0;function h_(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const hu=new Ut;function d_(e){Xt._getMatrix(hu,Xt.workingColorSpace,e);const t=`mat3( ${hu.elements.map(n=>n.toFixed(4))} )`;switch(Xt.getTransfer(e)){case Ga:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function du(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+h_(e.getShaderSource(t),a)}else return r}function f_(e,t){const n=d_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function p_(e,t){let n;switch(t){case Df:n="Linear";break;case If:n="Reinhard";break;case Nf:n="Cineon";break;case Pf:n="ACESFilmic";break;case Ff:n="AgX";break;case Of:n="Neutral";break;case Uf:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const sa=new G;function m_(){Xt.getLuminanceCoefficients(sa);const e=sa.x.toFixed(4),t=sa.y.toFixed(4),n=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function __(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function M_(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ms(e){return e!==""}function fu(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const x_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(e){return e.replace(x_,S_)}const v_=new Map;function S_(e,t){let n=Ot[t];if(n===void 0){const i=v_.get(t);if(i!==void 0)n=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ic(n)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(e){return e.replace(y_,E_)}function E_(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function T_(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===uf?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function A_(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Vr:case Wr:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function w_(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Wr:t="ENVMAP_MODE_REFRACTION";break}return t}function b_(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Wc:t="ENVMAP_BLENDING_MULTIPLY";break;case Cf:t="ENVMAP_BLENDING_MIX";break;case Lf:t="ENVMAP_BLENDING_ADD";break}return t}function R_(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function C_(e,t,n,i){const r=e.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=T_(n),h=A_(n),u=w_(n),d=b_(n),f=R_(n),m=g_(n),g=__(s),_=r.createProgram();let p,l,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ms).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ms).join(`
`),l.length>0&&(l+=`
`)):(p=[gu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),l=[gu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Ot.tonemapping_pars_fragment:"",n.toneMapping!==Si?p_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,f_("linearToOutputTexel",n.outputColorSpace),m_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ms).join(`
`)),a=Ic(a),a=fu(a,n),a=pu(a,n),o=Ic(o),o=fu(o,n),o=pu(o,n),a=mu(a),o=mu(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",n.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const M=v+p+a,x=v+l+o,R=uu(r,r.VERTEX_SHADER,M),w=uu(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(L){if(e.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),C=r.getShaderInfoLog(R).trim(),N=r.getShaderInfoLog(w).trim();let k=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,_,R,w);else{const D=du(r,R,"vertex"),P=du(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+D+`
`+P)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(C===""||N==="")&&(V=!1);V&&(L.diagnostics={runnable:k,programLog:U,vertexShader:{log:C,prefix:p},fragmentShader:{log:N,prefix:l}})}r.deleteShader(R),r.deleteShader(w),I=new Sa(r,_),E=M_(r,_)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,l_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=u_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let L_=0;class D_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new I_(t),n.set(t,i)),i}}class I_{constructor(t){this.id=L_++,this.code=t,this.usedTimes=0}}function N_(e,t,n,i,r,s,a){const o=new kh,c=new D_,h=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return h.add(E),E===0?"uv":`uv${E}`}function p(E,y,L,U,C){const N=U.fog,k=C.geometry,V=E.isMeshStandardMaterial?U.environment:null,D=(E.isMeshStandardMaterial?n:t).get(E.envMap||V),P=D&&D.mapping===ka?D.image.height:null,Q=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,yt=ht!==void 0?ht.length:0;let zt=0;k.morphAttributes.position!==void 0&&(zt=1),k.morphAttributes.normal!==void 0&&(zt=2),k.morphAttributes.color!==void 0&&(zt=3);let Jt,q,et,lt;if(Q){const wt=Dn[Q];Jt=wt.vertexShader,q=wt.fragmentShader}else Jt=E.vertexShader,q=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),lt=c.getFragmentShaderID(E);const nt=e.getRenderTarget(),Rt=e.state.buffers.depth.getReversed(),Lt=C.isInstancedMesh===!0,Ft=C.isBatchedMesh===!0,ae=!!E.map,Gt=!!E.matcap,le=!!D,F=!!E.aoMap,Re=!!E.lightMap,Bt=!!E.bumpMap,gt=!!E.normalMap,bt=!!E.displacementMap,ne=!!E.emissiveMap,Et=!!E.metalnessMap,A=!!E.roughnessMap,S=E.anisotropy>0,H=E.clearcoat>0,$=E.dispersion>0,Z=E.iridescence>0,Y=E.sheen>0,xt=E.transmission>0,ot=S&&!!E.anisotropyMap,dt=H&&!!E.clearcoatMap,Ht=H&&!!E.clearcoatNormalMap,tt=H&&!!E.clearcoatRoughnessMap,pt=Z&&!!E.iridescenceMap,Mt=Z&&!!E.iridescenceThicknessMap,Ct=Y&&!!E.sheenColorMap,ft=Y&&!!E.sheenRoughnessMap,kt=!!E.specularMap,Nt=!!E.specularColorMap,te=!!E.specularIntensityMap,O=xt&&!!E.transmissionMap,at=xt&&!!E.thicknessMap,j=!!E.gradientMap,K=!!E.alphaMap,ut=E.alphaTest>0,ct=!!E.alphaHash,Dt=!!E.extensions;let ue=Si;E.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ue=e.toneMapping);const Te={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:Jt,fragmentShader:q,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:lt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&C._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&C.instanceColor!==null,instancingMorph:Lt&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$r,alphaToCoverage:!!E.alphaToCoverage,map:ae,matcap:Gt,envMap:le,envMapMode:le&&D.mapping,envMapCubeUVHeight:P,aoMap:F,lightMap:Re,bumpMap:Bt,normalMap:gt,displacementMap:f&&bt,emissiveMap:ne,normalMapObjectSpace:gt&&E.normalMapType===Gf,normalMapTangentSpace:gt&&E.normalMapType===Ph,metalnessMap:Et,roughnessMap:A,anisotropy:S,anisotropyMap:ot,clearcoat:H,clearcoatMap:dt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:tt,dispersion:$,iridescence:Z,iridescenceMap:pt,iridescenceThicknessMap:Mt,sheen:Y,sheenColorMap:Ct,sheenRoughnessMap:ft,specularMap:kt,specularColorMap:Nt,specularIntensityMap:te,transmission:xt,transmissionMap:O,thicknessMap:at,gradientMap:j,opaque:E.transparent===!1&&E.blending===Pr&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ct,combine:E.combine,mapUv:ae&&_(E.map.channel),aoMapUv:F&&_(E.aoMap.channel),lightMapUv:Re&&_(E.lightMap.channel),bumpMapUv:Bt&&_(E.bumpMap.channel),normalMapUv:gt&&_(E.normalMap.channel),displacementMapUv:bt&&_(E.displacementMap.channel),emissiveMapUv:ne&&_(E.emissiveMap.channel),metalnessMapUv:Et&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:ot&&_(E.anisotropyMap.channel),clearcoatMapUv:dt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(E.sheenRoughnessMap.channel),specularMapUv:kt&&_(E.specularMap.channel),specularColorMapUv:Nt&&_(E.specularColorMap.channel),specularIntensityMapUv:te&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:at&&_(E.thicknessMap.channel),alphaMapUv:K&&_(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!k.attributes.uv&&(ae||K),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:C.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:ue,decodeVideoTexture:ae&&E.map.isVideoTexture===!0&&Xt.getTransfer(E.map.colorSpace)===ee,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(E.emissiveMap.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gn,flipSided:E.side===Ve,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Te.vertexUv1s=h.has(1),Te.vertexUv2s=h.has(2),Te.vertexUv3s=h.has(3),h.clear(),Te}function l(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)y.push(L),y.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(v(y,E),M(y,E),y.push(e.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function v(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const y=g[E.type];let L;if(y){const U=Dn[y];L=gp.clone(U.uniforms)}else L=E.uniforms;return L}function R(E,y){let L;for(let U=0,C=u.length;U<C;U++){const N=u[U];if(N.cacheKey===y){L=N,++L.usedTimes;break}}return L===void 0&&(L=new C_(e,y,E,s),u.push(L)),L}function w(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function b(E){c.remove(E)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:l,getUniforms:x,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:I}}function P_(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function r(a,o,c){e.get(a)[o]=c}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function U_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function _u(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Mu(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function a(d,f,m,g,_,p){let l=e[t];return l===void 0?(l={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},e[t]=l):(l.id=d.id,l.object=d,l.geometry=f,l.material=m,l.groupOrder=g,l.renderOrder=d.renderOrder,l.z=_,l.group=p),t++,l}function o(d,f,m,g,_,p){const l=a(d,f,m,g,_,p);m.transmission>0?i.push(l):m.transparent===!0?r.push(l):n.push(l)}function c(d,f,m,g,_,p){const l=a(d,f,m,g,_,p);m.transmission>0?i.unshift(l):m.transparent===!0?r.unshift(l):n.unshift(l)}function h(d,f){n.length>1&&n.sort(d||U_),i.length>1&&i.sort(f||_u),r.length>1&&r.sort(f||_u)}function u(){for(let d=t,f=e.length;d<f;d++){const m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:h}}function F_(){let e=new WeakMap;function t(i,r){const s=e.get(i);let a;return s===void 0?(a=new Mu,e.set(i,[a])):r>=s.length?(a=new Mu,s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function O_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new G,color:new At};break;case"SpotLight":n={position:new G,direction:new G,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new G,halfWidth:new G,halfHeight:new G};break}return e[t.id]=n,n}}}function z_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let B_=0;function k_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function G_(e){const t=new O_,n=z_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new G);const r=new G,s=new Kt,a=new Kt;function o(h){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,l=0,v=0,M=0,x=0,R=0,w=0,b=0;h.sort(k_);for(let E=0,y=h.length;E<y;E++){const L=h[E],U=L.color,C=L.intensity,N=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=U.r*C,d+=U.g*C,f+=U.b*C;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],C);b++}else if(L.isDirectionalLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const D=L.shadow,P=n.get(L);P.shadowIntensity=D.intensity,P.shadowBias=D.bias,P.shadowNormalBias=D.normalBias,P.shadowRadius=D.radius,P.shadowMapSize=D.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=L.shadow.matrix,v++}i.directional[m]=V,m++}else if(L.isSpotLight){const V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(U).multiplyScalar(C),V.distance=N,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[_]=V;const D=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,D.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=D.matrix,L.castShadow){const P=n.get(L);P.shadowIntensity=D.intensity,P.shadowBias=D.bias,P.shadowNormalBias=D.normalBias,P.shadowRadius=D.radius,P.shadowMapSize=D.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=k,x++}_++}else if(L.isRectAreaLight){const V=t.get(L);V.color.copy(U).multiplyScalar(C),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=V,p++}else if(L.isPointLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const D=L.shadow,P=n.get(L);P.shadowIntensity=D.intensity,P.shadowBias=D.bias,P.shadowNormalBias=D.normalBias,P.shadowRadius=D.radius,P.shadowMapSize=D.mapSize,P.shadowCameraNear=D.camera.near,P.shadowCameraFar=D.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=V,g++}else if(L.isHemisphereLight){const V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(C),V.groundColor.copy(L.groundColor).multiplyScalar(C),i.hemi[l]=V,l++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==l||I.numDirectionalShadows!==v||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==R||I.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=l,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=l,I.numDirectionalShadows=v,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=R,I.numLightProbes=b,i.version=B_++)}function c(h,u){let d=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let l=0,v=h.length;l<v;l++){const M=h[l];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),d++}else if(M.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:i}}function xu(e){const t=new G_(e),n=[],i=[];function r(u){h.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){t.setup(n)}function c(u){t.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function H_(e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new xu(e),t.set(r,[o])):s>=a.length?(o=new xu(e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class V_ extends Qr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class W_ extends Qr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y_(e,t,n){let i=new Qc;const r=new $t,s=new $t,a=new Me,o=new V_({depthPacking:kf}),c=new W_,h={},u=n.maxTextureSize,d={[Ei]:Ve,[Ve]:Ei,[gn]:gn},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:X_,fragmentShader:j_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ge(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let l=this.type;this.render=function(w,b,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const E=e.getRenderTarget(),y=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),U=e.state;U.setBlending(vi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const C=l!==Xn&&this.type===Xn,N=l===Xn&&this.type!==Xn;for(let k=0,V=w.length;k<V;k++){const D=w[k],P=D.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const Q=P.getFrameExtents();if(r.multiply(Q),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,P.mapSize.y=s.y)),P.map===null||C===!0||N===!0){const yt=this.type!==Xn?{minFilter:ln,magFilter:ln}:{};P.map!==null&&P.map.dispose(),P.map=new tr(r.x,r.y,yt),P.map.texture.name=D.name+".shadowMap",P.camera.updateProjectionMatrix()}e.setRenderTarget(P.map),e.clear();const ht=P.getViewportCount();for(let yt=0;yt<ht;yt++){const zt=P.getViewport(yt);a.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),U.viewport(a),P.updateMatrices(D,yt),i=P.getFrustum(),x(b,I,P.camera,D,this.type)}P.isPointLightShadow!==!0&&this.type===Xn&&v(P,I),P.needsUpdate=!1}l=this.type,p.needsUpdate=!1,e.setRenderTarget(E,y,L)};function v(w,b){const I=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new tr(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(b,null,I,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(b,null,I,m,_,null)}function M(w,b,I,E){let y=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=I.isPointLight===!0?c:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=y.uuid,C=b.uuid;let N=h[U];N===void 0&&(N={},h[U]=N);let k=N[C];k===void 0&&(k=y.clone(),N[C]=k,b.addEventListener("dispose",R)),y=k}if(y.visible=b.visible,y.wireframe=b.wireframe,E===Xn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=e.properties.get(y);U.light=I}return y}function x(w,b,I,E,y){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Xn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const C=t.update(w),N=w.material;if(Array.isArray(N)){const k=C.groups;for(let V=0,D=k.length;V<D;V++){const P=k[V],Q=N[P.materialIndex];if(Q&&Q.visible){const ht=M(w,Q,E,y);w.onBeforeShadow(e,w,b,I,C,ht,P),e.renderBufferDirect(I,null,C,ht,w,P),w.onAfterShadow(e,w,b,I,C,ht,P)}}}else if(N.visible){const k=M(w,N,E,y);w.onBeforeShadow(e,w,b,I,C,k,null),e.renderBufferDirect(I,null,C,k,w,null),w.onAfterShadow(e,w,b,I,C,k,null)}}const U=w.children;for(let C=0,N=U.length;C<N;C++)x(U[C],b,I,E,y)}function R(w){w.target.removeEventListener("dispose",R);for(const I in h){const E=h[I],y=w.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const q_={[qo]:$o,[Ko]:Jo,[Zo]:tc,[Hr]:Qo,[$o]:qo,[Jo]:Ko,[tc]:Zo,[Qo]:Hr};function $_(e,t){function n(){let O=!1;const at=new Me;let j=null;const K=new Me(0,0,0,0);return{setMask:function(ut){j!==ut&&!O&&(e.colorMask(ut,ut,ut,ut),j=ut)},setLocked:function(ut){O=ut},setClear:function(ut,ct,Dt,ue,Te){Te===!0&&(ut*=ue,ct*=ue,Dt*=ue),at.set(ut,ct,Dt,ue),K.equals(at)===!1&&(e.clearColor(ut,ct,Dt,ue),K.copy(at))},reset:function(){O=!1,j=null,K.set(-1,0,0,0)}}}function i(){let O=!1,at=!1,j=null,K=null,ut=null;return{setReversed:function(ct){if(at!==ct){const Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ut;ut=null,this.setClear(ue)}at=ct},getReversed:function(){return at},setTest:function(ct){ct?nt(e.DEPTH_TEST):Rt(e.DEPTH_TEST)},setMask:function(ct){j!==ct&&!O&&(e.depthMask(ct),j=ct)},setFunc:function(ct){if(at&&(ct=q_[ct]),K!==ct){switch(ct){case qo:e.depthFunc(e.NEVER);break;case $o:e.depthFunc(e.ALWAYS);break;case Ko:e.depthFunc(e.LESS);break;case Hr:e.depthFunc(e.LEQUAL);break;case Zo:e.depthFunc(e.EQUAL);break;case Qo:e.depthFunc(e.GEQUAL);break;case Jo:e.depthFunc(e.GREATER);break;case tc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}K=ct}},setLocked:function(ct){O=ct},setClear:function(ct){ut!==ct&&(at&&(ct=1-ct),e.clearDepth(ct),ut=ct)},reset:function(){O=!1,j=null,K=null,ut=null,at=!1}}}function r(){let O=!1,at=null,j=null,K=null,ut=null,ct=null,Dt=null,ue=null,Te=null;return{setTest:function(wt){O||(wt?nt(e.STENCIL_TEST):Rt(e.STENCIL_TEST))},setMask:function(wt){at!==wt&&!O&&(e.stencilMask(wt),at=wt)},setFunc:function(wt,jt,me){(j!==wt||K!==jt||ut!==me)&&(e.stencilFunc(wt,jt,me),j=wt,K=jt,ut=me)},setOp:function(wt,jt,me){(ct!==wt||Dt!==jt||ue!==me)&&(e.stencilOp(wt,jt,me),ct=wt,Dt=jt,ue=me)},setLocked:function(wt){O=wt},setClear:function(wt){Te!==wt&&(e.clearStencil(wt),Te=wt)},reset:function(){O=!1,at=null,j=null,K=null,ut=null,ct=null,Dt=null,ue=null,Te=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,h=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,l=null,v=null,M=null,x=null,R=null,w=null,b=new At(0,0,0),I=0,E=!1,y=null,L=null,U=null,C=null,N=null;const k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,D=0;const P=e.getParameter(e.VERSION);P.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(P)[1]),V=D>=1):P.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),V=D>=2);let Q=null,ht={};const yt=e.getParameter(e.SCISSOR_BOX),zt=e.getParameter(e.VIEWPORT),Jt=new Me().fromArray(yt),q=new Me().fromArray(zt);function et(O,at,j,K){const ut=new Uint8Array(4),ct=e.createTexture();e.bindTexture(O,ct),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Dt=0;Dt<j;Dt++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,K,0,e.RGBA,e.UNSIGNED_BYTE,ut):e.texImage2D(at+Dt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ut);return ct}const lt={};lt[e.TEXTURE_2D]=et(e.TEXTURE_2D,e.TEXTURE_2D,1),lt[e.TEXTURE_CUBE_MAP]=et(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[e.TEXTURE_2D_ARRAY]=et(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),lt[e.TEXTURE_3D]=et(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(e.DEPTH_TEST),a.setFunc(Hr),Bt(!1),gt(El),nt(e.CULL_FACE),F(vi);function nt(O){u[O]!==!0&&(e.enable(O),u[O]=!0)}function Rt(O){u[O]!==!1&&(e.disable(O),u[O]=!1)}function Lt(O,at){return d[O]!==at?(e.bindFramebuffer(O,at),d[O]=at,O===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=at),O===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=at),!0):!1}function Ft(O,at){let j=m,K=!1;if(O){j=f.get(at),j===void 0&&(j=[],f.set(at,j));const ut=O.textures;if(j.length!==ut.length||j[0]!==e.COLOR_ATTACHMENT0){for(let ct=0,Dt=ut.length;ct<Dt;ct++)j[ct]=e.COLOR_ATTACHMENT0+ct;j.length=ut.length,K=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,K=!0);K&&e.drawBuffers(j)}function ae(O){return g!==O?(e.useProgram(O),g=O,!0):!1}const Gt={[Bi]:e.FUNC_ADD,[df]:e.FUNC_SUBTRACT,[ff]:e.FUNC_REVERSE_SUBTRACT};Gt[pf]=e.MIN,Gt[mf]=e.MAX;const le={[gf]:e.ZERO,[_f]:e.ONE,[Mf]:e.SRC_COLOR,[jo]:e.SRC_ALPHA,[Tf]:e.SRC_ALPHA_SATURATE,[yf]:e.DST_COLOR,[vf]:e.DST_ALPHA,[xf]:e.ONE_MINUS_SRC_COLOR,[Yo]:e.ONE_MINUS_SRC_ALPHA,[Ef]:e.ONE_MINUS_DST_COLOR,[Sf]:e.ONE_MINUS_DST_ALPHA,[Af]:e.CONSTANT_COLOR,[wf]:e.ONE_MINUS_CONSTANT_COLOR,[bf]:e.CONSTANT_ALPHA,[Rf]:e.ONE_MINUS_CONSTANT_ALPHA};function F(O,at,j,K,ut,ct,Dt,ue,Te,wt){if(O===vi){_===!0&&(Rt(e.BLEND),_=!1);return}if(_===!1&&(nt(e.BLEND),_=!0),O!==hf){if(O!==p||wt!==E){if((l!==Bi||x!==Bi)&&(e.blendEquation(e.FUNC_ADD),l=Bi,x=Bi),wt)switch(O){case Pr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Tl:e.blendFunc(e.ONE,e.ONE);break;case Al:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case wl:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Pr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Tl:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Al:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case wl:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,M=null,R=null,w=null,b.set(0,0,0),I=0,p=O,E=wt}return}ut=ut||at,ct=ct||j,Dt=Dt||K,(at!==l||ut!==x)&&(e.blendEquationSeparate(Gt[at],Gt[ut]),l=at,x=ut),(j!==v||K!==M||ct!==R||Dt!==w)&&(e.blendFuncSeparate(le[j],le[K],le[ct],le[Dt]),v=j,M=K,R=ct,w=Dt),(ue.equals(b)===!1||Te!==I)&&(e.blendColor(ue.r,ue.g,ue.b,Te),b.copy(ue),I=Te),p=O,E=!1}function Re(O,at){O.side===gn?Rt(e.CULL_FACE):nt(e.CULL_FACE);let j=O.side===Ve;at&&(j=!j),Bt(j),O.blending===Pr&&O.transparent===!1?F(vi):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const K=O.stencilWrite;o.setTest(K),K&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ne(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):Rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(O){y!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),y=O)}function gt(O){O!==cf?(nt(e.CULL_FACE),O!==L&&(O===El?e.cullFace(e.BACK):O===lf?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Rt(e.CULL_FACE),L=O}function bt(O){O!==U&&(V&&e.lineWidth(O),U=O)}function ne(O,at,j){O?(nt(e.POLYGON_OFFSET_FILL),(C!==at||N!==j)&&(e.polygonOffset(at,j),C=at,N=j)):Rt(e.POLYGON_OFFSET_FILL)}function Et(O){O?nt(e.SCISSOR_TEST):Rt(e.SCISSOR_TEST)}function A(O){O===void 0&&(O=e.TEXTURE0+k-1),Q!==O&&(e.activeTexture(O),Q=O)}function S(O,at,j){j===void 0&&(Q===null?j=e.TEXTURE0+k-1:j=Q);let K=ht[j];K===void 0&&(K={type:void 0,texture:void 0},ht[j]=K),(K.type!==O||K.texture!==at)&&(Q!==j&&(e.activeTexture(j),Q=j),e.bindTexture(O,at||lt[O]),K.type=O,K.texture=at)}function H(){const O=ht[Q];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{e.compressedTexImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{e.compressedTexImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{e.texSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{e.texSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{e.texStorage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{e.texStorage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{e.texImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{e.texImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(O){Jt.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),Jt.copy(O))}function ft(O){q.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),q.copy(O))}function kt(O,at){let j=h.get(at);j===void 0&&(j=new WeakMap,h.set(at,j));let K=j.get(O);K===void 0&&(K=e.getUniformBlockIndex(at,O.name),j.set(O,K))}function Nt(O,at){const K=h.get(at).get(O);c.get(at)!==K&&(e.uniformBlockBinding(at,K,O.__bindingPointIndex),c.set(at,K))}function te(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},Q=null,ht={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,l=null,v=null,M=null,x=null,R=null,w=null,b=new At(0,0,0),I=0,E=!1,y=null,L=null,U=null,C=null,N=null,Jt.set(0,0,e.canvas.width,e.canvas.height),q.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:Rt,bindFramebuffer:Lt,drawBuffers:Ft,useProgram:ae,setBlending:F,setMaterial:Re,setFlipSided:Bt,setCullFace:gt,setLineWidth:bt,setPolygonOffset:ne,setScissorTest:Et,activeTexture:A,bindTexture:S,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:pt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Nt,texStorage2D:Ht,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Ct,viewport:ft,reset:te}}function vu(e,t,n,i){const r=K_(i);switch(n){case Rh:return e*t;case Lh:return e*t;case Dh:return e*t*2;case qc:return e*t/r.components*r.byteLength;case $c:return e*t/r.components*r.byteLength;case Ih:return e*t*2/r.components*r.byteLength;case Kc:return e*t*2/r.components*r.byteLength;case Ch:return e*t*3/r.components*r.byteLength;case wn:return e*t*4/r.components*r.byteLength;case Zc:return e*t*4/r.components*r.byteLength;case ga:case _a:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ma:case xa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ac:case cc:return Math.max(e,16)*Math.max(t,8)/4;case sc:case oc:return Math.max(e,8)*Math.max(t,8)/2;case lc:case uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _c:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case vc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case va:case wc:case bc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Nh:case Rc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Cc:case Lc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function K_(e){switch(e){case Zn:case Ah:return{byteLength:1,components:1};case ws:case wh:case Ls:return{byteLength:2,components:1};case jc:case Yc:return{byteLength:2,components:4};case Ji:case Xc:case Pn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function Z_(e,t,n,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $t,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):Ra("canvas")}function _(A,S,H){let $=1;const Z=Et(A);if((Z.width>H||Z.height>H)&&($=H/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor($*Z.width),xt=Math.floor($*Z.height);d===void 0&&(d=g(Y,xt));const ot=S?g(Y,xt):d;return ot.width=Y,ot.height=xt,ot.getContext("2d").drawImage(A,0,0,Y,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+xt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function l(A){e.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(A,S,H,$,Z=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===e.RED&&(H===e.FLOAT&&(Y=e.R32F),H===e.HALF_FLOAT&&(Y=e.R16F),H===e.UNSIGNED_BYTE&&(Y=e.R8)),S===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.R8UI),H===e.UNSIGNED_SHORT&&(Y=e.R16UI),H===e.UNSIGNED_INT&&(Y=e.R32UI),H===e.BYTE&&(Y=e.R8I),H===e.SHORT&&(Y=e.R16I),H===e.INT&&(Y=e.R32I)),S===e.RG&&(H===e.FLOAT&&(Y=e.RG32F),H===e.HALF_FLOAT&&(Y=e.RG16F),H===e.UNSIGNED_BYTE&&(Y=e.RG8)),S===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.RG8UI),H===e.UNSIGNED_SHORT&&(Y=e.RG16UI),H===e.UNSIGNED_INT&&(Y=e.RG32UI),H===e.BYTE&&(Y=e.RG8I),H===e.SHORT&&(Y=e.RG16I),H===e.INT&&(Y=e.RG32I)),S===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),H===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),H===e.UNSIGNED_INT&&(Y=e.RGB32UI),H===e.BYTE&&(Y=e.RGB8I),H===e.SHORT&&(Y=e.RGB16I),H===e.INT&&(Y=e.RGB32I)),S===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),H===e.UNSIGNED_INT&&(Y=e.RGBA32UI),H===e.BYTE&&(Y=e.RGBA8I),H===e.SHORT&&(Y=e.RGBA16I),H===e.INT&&(Y=e.RGBA32I)),S===e.RGB&&H===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),S===e.RGBA){const xt=Z?Ga:Xt.getTransfer($);H===e.FLOAT&&(Y=e.RGBA32F),H===e.HALF_FLOAT&&(Y=e.RGBA16F),H===e.UNSIGNED_BYTE&&(Y=xt===ee?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(A,S){let H;return A?S===null||S===Ji||S===Xr?H=e.DEPTH24_STENCIL8:S===Pn?H=e.DEPTH32F_STENCIL8:S===ws&&(H=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ji||S===Xr?H=e.DEPTH_COMPONENT24:S===Pn?H=e.DEPTH_COMPONENT32F:S===ws&&(H=e.DEPTH_COMPONENT16),H}function R(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==Nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),I(S),S.isVideoTexture&&u.delete(S)}function b(A){const S=A.target;S.removeEventListener("dispose",b),y(S)}function I(A){const S=i.get(A);if(S.__webglInit===void 0)return;const H=A.source,$=f.get(H);if($){const Z=$[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(A),Object.keys($).length===0&&f.delete(H)}i.remove(A)}function E(A){const S=i.get(A);e.deleteTexture(S.__webglTexture);const H=A.source,$=f.get(H);delete $[S.__cacheKey],a.memory.textures--}function y(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Z=0;Z<S.__webglFramebuffer[$].length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[$][Z]);else e.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)e.deleteFramebuffer(S.__webglFramebuffer[$]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=A.textures;for(let $=0,Z=H.length;$<Z;$++){const Y=i.get(H[$]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(H[$])}i.remove(A)}let L=0;function U(){L=0}function C(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function N(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function k(A,S){const H=i.get(A);if(A.isVideoTexture&&bt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,A,S);return}}n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+S)}function V(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){q(H,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+S)}function D(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){q(H,A,S);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+S)}function P(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){et(H,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+S)}const Q={[ic]:e.REPEAT,[ji]:e.CLAMP_TO_EDGE,[rc]:e.MIRRORED_REPEAT},ht={[ln]:e.NEAREST,[zf]:e.NEAREST_MIPMAP_NEAREST,[Bs]:e.NEAREST_MIPMAP_LINEAR,[Nn]:e.LINEAR,[eo]:e.LINEAR_MIPMAP_NEAREST,[Yi]:e.LINEAR_MIPMAP_LINEAR},yt={[Hf]:e.NEVER,[qf]:e.ALWAYS,[Vf]:e.LESS,[Uh]:e.LEQUAL,[Wf]:e.EQUAL,[Yf]:e.GEQUAL,[Xf]:e.GREATER,[jf]:e.NOTEQUAL};function zt(A,S){if(S.type===Pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Nn||S.magFilter===eo||S.magFilter===Bs||S.magFilter===Yi||S.minFilter===Nn||S.minFilter===eo||S.minFilter===Bs||S.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Q[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Q[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Q[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,ht[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==Bs&&S.minFilter!==Yi||S.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Jt(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const $=S.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const Y=N(S);if(Y!==A.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[Y].usedTimes++;const xt=Z[A.__cacheKey];xt!==void 0&&(Z[A.__cacheKey].usedTimes--,xt.usedTimes===0&&E(S)),A.__cacheKey=Y,A.__webglTexture=Z[Y].texture}return H}function q(A,S,H){let $=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=e.TEXTURE_3D);const Z=Jt(A,S),Y=S.source;n.bindTexture($,A.__webglTexture,e.TEXTURE0+H);const xt=i.get(Y);if(Y.version!==xt.__version||Z===!0){n.activeTexture(e.TEXTURE0+H);const ot=Xt.getPrimaries(Xt.workingColorSpace),dt=S.colorSpace===mi?null:Xt.getPrimaries(S.colorSpace),Ht=S.colorSpace===mi||ot===dt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let tt=_(S.image,!1,r.maxTextureSize);tt=ne(S,tt);const pt=s.convert(S.format,S.colorSpace),Mt=s.convert(S.type);let Ct=M(S.internalFormat,pt,Mt,S.colorSpace,S.isVideoTexture);zt($,S);let ft;const kt=S.mipmaps,Nt=S.isVideoTexture!==!0,te=xt.__version===void 0||Z===!0,O=Y.dataReady,at=R(S,tt);if(S.isDepthTexture)Ct=x(S.format===jr,S.type),te&&(Nt?n.texStorage2D(e.TEXTURE_2D,1,Ct,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,Mt,null));else if(S.isDataTexture)if(kt.length>0){Nt&&te&&n.texStorage2D(e.TEXTURE_2D,at,Ct,kt[0].width,kt[0].height);for(let j=0,K=kt.length;j<K;j++)ft=kt[j],Nt?O&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ft.width,ft.height,pt,Mt,ft.data):n.texImage2D(e.TEXTURE_2D,j,Ct,ft.width,ft.height,0,pt,Mt,ft.data);S.generateMipmaps=!1}else Nt?(te&&n.texStorage2D(e.TEXTURE_2D,at,Ct,tt.width,tt.height),O&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Mt,tt.data)):n.texImage2D(e.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,Mt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,Ct,kt[0].width,kt[0].height,tt.depth);for(let j=0,K=kt.length;j<K;j++)if(ft=kt[j],S.format!==wn)if(pt!==null)if(Nt){if(O)if(S.layerUpdates.size>0){const ut=vu(ft.width,ft.height,S.format,S.type);for(const ct of S.layerUpdates){const Dt=ft.data.subarray(ct*ut/ft.data.BYTES_PER_ELEMENT,(ct+1)*ut/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,ct,ft.width,ft.height,1,pt,Dt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,tt.depth,pt,ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,Ct,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?O&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,tt.depth,pt,Mt,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,Ct,ft.width,ft.height,tt.depth,0,pt,Mt,ft.data)}else{Nt&&te&&n.texStorage2D(e.TEXTURE_2D,at,Ct,kt[0].width,kt[0].height);for(let j=0,K=kt.length;j<K;j++)ft=kt[j],S.format!==wn?pt!==null?Nt?O&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,ft.width,ft.height,pt,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,j,Ct,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?O&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ft.width,ft.height,pt,Mt,ft.data):n.texImage2D(e.TEXTURE_2D,j,Ct,ft.width,ft.height,0,pt,Mt,ft.data)}else if(S.isDataArrayTexture)if(Nt){if(te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,Ct,tt.width,tt.height,tt.depth),O)if(S.layerUpdates.size>0){const j=vu(tt.width,tt.height,S.format,S.type);for(const K of S.layerUpdates){const ut=tt.data.subarray(K*j/tt.data.BYTES_PER_ELEMENT,(K+1)*j/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,pt,Mt,ut)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Mt,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,pt,Mt,tt.data);else if(S.isData3DTexture)Nt?(te&&n.texStorage3D(e.TEXTURE_3D,at,Ct,tt.width,tt.height,tt.depth),O&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Mt,tt.data)):n.texImage3D(e.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,pt,Mt,tt.data);else if(S.isFramebufferTexture){if(te)if(Nt)n.texStorage2D(e.TEXTURE_2D,at,Ct,tt.width,tt.height);else{let j=tt.width,K=tt.height;for(let ut=0;ut<at;ut++)n.texImage2D(e.TEXTURE_2D,ut,Ct,j,K,0,pt,Mt,null),j>>=1,K>>=1}}else if(kt.length>0){if(Nt&&te){const j=Et(kt[0]);n.texStorage2D(e.TEXTURE_2D,at,Ct,j.width,j.height)}for(let j=0,K=kt.length;j<K;j++)ft=kt[j],Nt?O&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,pt,Mt,ft):n.texImage2D(e.TEXTURE_2D,j,Ct,pt,Mt,ft);S.generateMipmaps=!1}else if(Nt){if(te){const j=Et(tt);n.texStorage2D(e.TEXTURE_2D,at,Ct,j.width,j.height)}O&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,pt,Mt,tt)}else n.texImage2D(e.TEXTURE_2D,0,Ct,pt,Mt,tt);p(S)&&l($),xt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function et(A,S,H){if(S.image.length!==6)return;const $=Jt(A,S),Z=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+H);const Y=i.get(Z);if(Z.version!==Y.__version||$===!0){n.activeTexture(e.TEXTURE0+H);const xt=Xt.getPrimaries(Xt.workingColorSpace),ot=S.colorSpace===mi?null:Xt.getPrimaries(S.colorSpace),dt=S.colorSpace===mi||xt===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!Ht&&!tt?pt[K]=_(S.image[K],!0,r.maxCubemapSize):pt[K]=tt?S.image[K].image:S.image[K],pt[K]=ne(S,pt[K]);const Mt=pt[0],Ct=s.convert(S.format,S.colorSpace),ft=s.convert(S.type),kt=M(S.internalFormat,Ct,ft,S.colorSpace),Nt=S.isVideoTexture!==!0,te=Y.__version===void 0||$===!0,O=Z.dataReady;let at=R(S,Mt);zt(e.TEXTURE_CUBE_MAP,S);let j;if(Ht){Nt&&te&&n.texStorage2D(e.TEXTURE_CUBE_MAP,at,kt,Mt.width,Mt.height);for(let K=0;K<6;K++){j=pt[K].mipmaps;for(let ut=0;ut<j.length;ut++){const ct=j[ut];S.format!==wn?Ct!==null?Nt?O&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ct.width,ct.height,Ct,ct.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,kt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ct.width,ct.height,Ct,ft,ct.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,kt,ct.width,ct.height,0,Ct,ft,ct.data)}}}else{if(j=S.mipmaps,Nt&&te){j.length>0&&at++;const K=Et(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,at,kt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Nt?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Ct,ft,pt[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,pt[K].width,pt[K].height,0,Ct,ft,pt[K].data);for(let ut=0;ut<j.length;ut++){const Dt=j[ut].image[K].image;Nt?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Dt.width,Dt.height,Ct,ft,Dt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,kt,Dt.width,Dt.height,0,Ct,ft,Dt.data)}}else{Nt?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,ft,pt[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,Ct,ft,pt[K]);for(let ut=0;ut<j.length;ut++){const ct=j[ut];Nt?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Ct,ft,ct.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,kt,Ct,ft,ct.image[K])}}}p(S)&&l(e.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function lt(A,S,H,$,Z,Y){const xt=s.convert(H.format,H.colorSpace),ot=s.convert(H.type),dt=M(H.internalFormat,xt,ot,H.colorSpace),Ht=i.get(S),tt=i.get(H);if(tt.__renderTarget=S,!Ht.__hasExternalTextures){const pt=Math.max(1,S.width>>Y),Mt=Math.max(1,S.height>>Y);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,Y,dt,pt,Mt,S.depth,0,xt,ot,null):n.texImage2D(Z,Y,dt,pt,Mt,0,xt,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),gt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,Z,tt.__webglTexture,0,Bt(S)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,Z,tt.__webglTexture,Y),n.bindFramebuffer(e.FRAMEBUFFER,null)}function nt(A,S,H){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=x(S.stencilBuffer,Z),xt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=Bt(S);gt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,Y,S.width,S.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xt,e.RENDERBUFFER,A)}else{const $=S.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],xt=s.convert(Y.format,Y.colorSpace),ot=s.convert(Y.type),dt=M(Y.internalFormat,xt,ot,Y.colorSpace),Ht=Bt(S);H&&gt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ht,dt,S.width,S.height):gt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ht,dt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,dt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Rt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const Z=$.__webglTexture,Y=Bt(S);if(S.depthTexture.format===Ur)gt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0);else if(S.depthTexture.format===jr)gt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const S=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Rt(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=e.createRenderbuffer(),nt(S.__webglDepthbuffer[$],A,!1);else{const Z=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),nt(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,Z)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ft(A,S,H){const $=i.get(A);S!==void 0&&lt($.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&Lt(A)}function ae(A){const S=A.texture,H=i.get(A),$=i.get(S);A.addEventListener("dispose",b);const Z=A.textures,Y=A.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=S.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ot]=[];for(let dt=0;dt<S.mipmaps.length;dt++)H.__webglFramebuffer[ot][dt]=e.createFramebuffer()}else H.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)H.__webglFramebuffer[ot]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(xt)for(let ot=0,dt=Z.length;ot<dt;ot++){const Ht=i.get(Z[ot]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=e.createTexture(),a.memory.textures++)}if(A.samples>0&&gt(A)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const dt=Z[ot];H.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[ot]);const Ht=s.convert(dt.format,dt.colorSpace),tt=s.convert(dt.type),pt=M(dt.internalFormat,Ht,tt,dt.colorSpace,A.isXRRenderTarget===!0),Mt=Bt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Mt,pt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,H.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),zt(e.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)lt(H.__webglFramebuffer[ot][dt],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else lt(H.__webglFramebuffer[ot],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(S)&&l(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xt){for(let ot=0,dt=Z.length;ot<dt;ot++){const Ht=Z[ot],tt=i.get(Ht);n.bindTexture(e.TEXTURE_2D,tt.__webglTexture),zt(e.TEXTURE_2D,Ht),lt(H.__webglFramebuffer,A,Ht,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,0),p(Ht)&&l(e.TEXTURE_2D)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,$.__webglTexture),zt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)lt(H.__webglFramebuffer[dt],A,S,e.COLOR_ATTACHMENT0,ot,dt);else lt(H.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,ot,0);p(S)&&l(ot),n.unbindTexture()}A.depthBuffer&&Lt(A)}function Gt(A){const S=A.textures;for(let H=0,$=S.length;H<$;H++){const Z=S[H];if(p(Z)){const Y=v(A),xt=i.get(Z).__webglTexture;n.bindTexture(Y,xt),l(Y),n.unbindTexture()}}}const le=[],F=[];function Re(A){if(A.samples>0){if(gt(A)===!1){const S=A.textures,H=A.width,$=A.height;let Z=e.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xt=i.get(A),ot=S.length>1;if(ot)for(let dt=0;dt<S.length;dt++)n.bindFramebuffer(e.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,xt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Ht=i.get(S[dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ht,0)}e.blitFramebuffer(0,0,H,$,0,0,H,$,Z,e.NEAREST),c===!0&&(le.length=0,F.length=0,le.push(e.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(le.push(Y),F.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,F)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,le))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<S.length;dt++){n.bindFramebuffer(e.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Ht=i.get(S[dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,xt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,Ht,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Bt(A){return Math.min(r.maxSamples,A.samples)}function gt(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function bt(A){const S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ne(A,S){const H=A.colorSpace,$=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==$r&&H!==mi&&(Xt.getTransfer(H)===ee?($!==wn||Z!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=C,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=D,this.setTextureCube=P,this.rebindTextures=Ft,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=gt}function Q_(e,t){function n(i,r=mi){let s;const a=Xt.getTransfer(r);if(i===Zn)return e.UNSIGNED_BYTE;if(i===jc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Yc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===bh)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ah)return e.BYTE;if(i===wh)return e.SHORT;if(i===ws)return e.UNSIGNED_SHORT;if(i===Xc)return e.INT;if(i===Ji)return e.UNSIGNED_INT;if(i===Pn)return e.FLOAT;if(i===Ls)return e.HALF_FLOAT;if(i===Rh)return e.ALPHA;if(i===Ch)return e.RGB;if(i===wn)return e.RGBA;if(i===Lh)return e.LUMINANCE;if(i===Dh)return e.LUMINANCE_ALPHA;if(i===Ur)return e.DEPTH_COMPONENT;if(i===jr)return e.DEPTH_STENCIL;if(i===qc)return e.RED;if(i===$c)return e.RED_INTEGER;if(i===Ih)return e.RG;if(i===Kc)return e.RG_INTEGER;if(i===Zc)return e.RGBA_INTEGER;if(i===ga||i===_a||i===Ma||i===xa)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sc||i===ac||i===oc||i===cc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lc||i===uc||i===hc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lc||i===uc)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===Mc||i===xc||i===vc||i===Sc||i===yc||i===Ec||i===Tc||i===Ac)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===va||i===wc||i===bc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===va)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nh||i===Rc||i===Cc||i===Lc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===va)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class J_ extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mi extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tM={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const p=n.getJointPose(_,i),l=this._getHandJoint(h,_);p!==null&&(l.matrix.fromArray(p.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=p.radius),l.visible=p!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;h.inputState.pinching&&f>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const eM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new We,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Qn({vertexShader:eM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ge(new ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rM extends Kr{constructor(t,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,h=null,u=null,d=null,f=null,m=null,g=null;const _=new iM,p=n.getContextAttributes();let l=null,v=null;const M=[],x=[],R=new $t;let w=null;const b=new mn;b.viewport=new Me;const I=new mn;I.viewport=new Me;const E=[b,I],y=new J_;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=M[q];return et===void 0&&(et=new Do,M[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=M[q];return et===void 0&&(et=new Do,M[q]=et),et.getGripSpace()},this.getHand=function(q){let et=M[q];return et===void 0&&(et=new Do,M[q]=et),et.getHandSpace()};function C(q){const et=x.indexOf(q.inputSource);if(et===-1)return;const lt=M[et];lt!==void 0&&(lt.update(q.inputSource,q.frame,h||a),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",k);for(let q=0;q<M.length;q++){const et=x[q];et!==null&&(x[q]=null,M[q].disconnect(et))}L=null,U=null,_.reset(),t.setRenderTarget(l),m=null,f=null,d=null,r=null,v=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(l=t.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",N),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await n.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,et),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new tr(m.framebufferWidth,m.framebufferHeight,{format:wn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,lt=null,nt=null;p.depth&&(nt=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,et=p.stencil?jr:Ur,lt=p.stencil?Xr:Ji);const Rt={colorFormat:n.RGBA8,depthFormat:nt,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Rt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new tr(f.textureWidth,f.textureHeight,{format:wn,type:Zn,depthTexture:new $h(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await r.requestReferenceSpace(o),Jt.setContext(r),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(q){for(let et=0;et<q.removed.length;et++){const lt=q.removed[et],nt=x.indexOf(lt);nt>=0&&(x[nt]=null,M[nt].disconnect(lt))}for(let et=0;et<q.added.length;et++){const lt=q.added[et];let nt=x.indexOf(lt);if(nt===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=x.length){x.push(lt),nt=Lt;break}else if(x[Lt]===null){x[Lt]=lt,nt=Lt;break}if(nt===-1)break}const Rt=M[nt];Rt&&Rt.connect(lt)}}const V=new G,D=new G;function P(q,et,lt){V.setFromMatrixPosition(et.matrixWorld),D.setFromMatrixPosition(lt.matrixWorld);const nt=V.distanceTo(D),Rt=et.projectionMatrix.elements,Lt=lt.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),ae=Rt[14]/(Rt[10]+1),Gt=(Rt[9]+1)/Rt[5],le=(Rt[9]-1)/Rt[5],F=(Rt[8]-1)/Rt[0],Re=(Lt[8]+1)/Lt[0],Bt=Ft*F,gt=Ft*Re,bt=nt/(-F+Re),ne=bt*-F;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ne),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=Ft+bt,A=ae+bt,S=Bt-ne,H=gt+(nt-ne),$=Gt*ae/A*Et,Z=le*ae/A*Et;q.projectionMatrix.makePerspective(S,H,$,Z,Et,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let et=q.near,lt=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),y.near=I.near=b.near=et,y.far=I.far=b.far=lt,(L!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,U=y.far),b.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,y.layers.mask=b.layers.mask|I.layers.mask;const nt=q.parent,Rt=y.cameras;Q(y,nt);for(let Lt=0;Lt<Rt.length;Lt++)Q(Rt[Lt],nt);Rt.length===2?P(y,b,I):y.projectionMatrix.copy(b.projectionMatrix),ht(q,y,nt)};function ht(q,et,lt){lt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Dc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let yt=null;function zt(q,et){if(u=et.getViewerPose(h||a),g=et,u!==null){const lt=u.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let nt=!1;lt.length!==y.cameras.length&&(y.cameras.length=0,nt=!0);for(let Lt=0;Lt<lt.length;Lt++){const Ft=lt[Lt];let ae=null;if(m!==null)ae=m.getViewport(Ft);else{const le=d.getViewSubImage(f,Ft);ae=le.viewport,Lt===0&&(t.setRenderTargetTextures(v,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(v))}let Gt=E[Lt];Gt===void 0&&(Gt=new mn,Gt.layers.enable(Lt),Gt.viewport=new Me,E[Lt]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ae.x,ae.y,ae.width,ae.height),Lt===0&&(y.matrix.copy(Gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),nt===!0&&y.cameras.push(Gt)}const Rt=r.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Lt=d.getDepthInformation(lt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,r.renderState)}}for(let lt=0;lt<M.length;lt++){const nt=x[lt],Rt=M[lt];nt!==null&&Rt!==void 0&&Rt.update(nt,et,h||a)}yt&&yt(q,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const Jt=new Yh;Jt.setAnimationLoop(zt),this.setAnimationLoop=function(q){yt=q},this.dispose=function(){}}}const Ii=new Je,sM=new Kt;function aM(e,t){function n(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function i(p,l){l.color.getRGB(p.fogColor.value,Wh(e)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function r(p,l,v,M,x){l.isMeshBasicMaterial||l.isMeshLambertMaterial?s(p,l):l.isMeshToonMaterial?(s(p,l),d(p,l)):l.isMeshPhongMaterial?(s(p,l),u(p,l)):l.isMeshStandardMaterial?(s(p,l),f(p,l),l.isMeshPhysicalMaterial&&m(p,l,x)):l.isMeshMatcapMaterial?(s(p,l),g(p,l)):l.isMeshDepthMaterial?s(p,l):l.isMeshDistanceMaterial?(s(p,l),_(p,l)):l.isMeshNormalMaterial?s(p,l):l.isLineBasicMaterial?(a(p,l),l.isLineDashedMaterial&&o(p,l)):l.isPointsMaterial?c(p,l,v,M):l.isSpriteMaterial?h(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function s(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,n(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,n(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,n(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===Ve&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,n(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===Ve&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,n(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,n(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,n(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const v=t.get(l),M=v.envMap,x=v.envMapRotation;M&&(p.envMap.value=M,Ii.copy(x),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),p.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(Ii)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,n(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,n(l.aoMap,p.aoMapTransform))}function a(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,n(l.map,p.mapTransform))}function o(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function c(p,l,v,M){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*v,p.scale.value=M*.5,l.map&&(p.map.value=l.map,n(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,n(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function h(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,n(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,n(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function u(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function d(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function f(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,n(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,n(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function m(p,l,v){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,n(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,n(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,n(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,n(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,n(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Ve&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,n(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,n(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,n(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,n(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,n(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,n(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,n(l.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,l){l.matcap&&(p.matcap.value=l.matcap)}function _(p,l){const v=t.get(l).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oM(e,t,n,i){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function h(v,M){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",p));const R=M.program;i.updateUBOMapping(v,R);const w=t.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function u(v){const M=d();v.__bindingPointIndex=M;const x=e.createBuffer(),R=v.__size,w=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,R,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,x),x}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=r[v.id],x=v.uniforms,R=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let w=0,b=x.length;w<b;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,y=I.length;E<y;E++){const L=I[E];if(m(L,w,E,R)===!0){const U=L.__offset,C=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let k=0;k<C.length;k++){const V=C[k],D=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,U+N,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,U,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(v,M,x,R){const w=v.value,b=M+"_"+x;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const I=R[b];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[b]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(v){const M=v.uniforms;let x=0;const R=16;for(let b=0,I=M.length;b<I;b++){const E=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,L=E.length;y<L;y++){const U=E[y],C=Array.isArray(U.value)?U.value:[U.value];for(let N=0,k=C.length;N<k;N++){const V=C[N],D=_(V),P=x%R,Q=P%D.boundary,ht=P+Q;x+=Q,ht!==0&&R-ht<D.storage&&(x+=R-ht),U.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=D.storage}}}const w=x%R;return w>0&&(x+=R-w),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){const M=v.target;M.removeEventListener("dispose",p);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),e.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function l(){for(const v in r)e.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:h,dispose:l}}class cM{constructor(t={}){const{canvas:n=Kf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,l=null;const v=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let R=!1,w=0,b=0,I=null,E=-1,y=null;const L=new Me,U=new Me;let C=null;const N=new At(0);let k=0,V=n.width,D=n.height,P=1,Q=null,ht=null;const yt=new Me(0,0,V,D),zt=new Me(0,0,V,D);let Jt=!1;const q=new Qc;let et=!1,lt=!1;const nt=new Kt,Rt=new Kt,Lt=new G,Ft=new Me,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function le(){return I===null?P:1}let F=i;function Re(T,B){return n.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vc}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",ct,!1),F===null){const B="webgl2";if(F=Re(B,T),F===null)throw Re(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Bt,gt,bt,ne,Et,A,S,H,$,Z,Y,xt,ot,dt,Ht,tt,pt,Mt,Ct,ft,kt,Nt,te,O;function at(){Bt=new fg(F),Bt.init(),Nt=new Q_(F,Bt),gt=new og(F,Bt,t,Nt),bt=new $_(F,Bt),gt.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),ne=new gg(F),Et=new P_,A=new Z_(F,Bt,bt,Et,gt,Nt,ne),S=new lg(x),H=new dg(x),$=new Ep(F),te=new sg(F,$),Z=new pg(F,$,ne,te),Y=new Mg(F,Z,$,ne),Ct=new _g(F,gt,A),tt=new cg(Et),xt=new N_(x,S,H,Bt,gt,te,tt),ot=new aM(x,Et),dt=new F_,Ht=new H_(Bt),Mt=new rg(x,S,H,bt,Y,m,c),pt=new Y_(x,Y,gt),O=new oM(F,ne,gt,bt),ft=new ag(F,Bt,ne),kt=new mg(F,Bt,ne),ne.programs=xt.programs,x.capabilities=gt,x.extensions=Bt,x.properties=Et,x.renderLists=dt,x.shadowMap=pt,x.state=bt,x.info=ne}at();const j=new rM(x,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(V,D,!1))},this.getSize=function(T){return T.set(V,D)},this.setSize=function(T,B,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,D=B,n.width=Math.floor(T*P),n.height=Math.floor(B*P),X===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(V*P,D*P).floor()},this.setDrawingBufferSize=function(T,B,X){V=T,D=B,P=X,n.width=Math.floor(T*X),n.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,B,X,W){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,B,X,W),bt.viewport(L.copy(yt).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(zt)},this.setScissor=function(T,B,X,W){T.isVector4?zt.set(T.x,T.y,T.z,T.w):zt.set(T,B,X,W),bt.scissor(U.copy(zt).multiplyScalar(P).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(T){bt.setScissorTest(Jt=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(T=!0,B=!0,X=!0){let W=0;if(T){let z=!1;if(I!==null){const J=I.texture.format;z=J===Zc||J===Kc||J===$c}if(z){const J=I.texture.type,it=J===Zn||J===Ji||J===ws||J===Xr||J===jc||J===Yc,mt=Mt.getClearColor(),vt=Mt.getClearAlpha(),It=mt.r,Pt=mt.g,St=mt.b;it?(g[0]=It,g[1]=Pt,g[2]=St,g[3]=vt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=It,_[1]=Pt,_[2]=St,_[3]=vt,F.clearBufferiv(F.COLOR,0,_))}else W|=F.COLOR_BUFFER_BIT}B&&(W|=F.DEPTH_BUFFER_BIT),X&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Ht.dispose(),Et.dispose(),S.dispose(),H.dispose(),Y.dispose(),te.dispose(),O.dispose(),xt.dispose(),j.dispose(),j.removeEventListener("sessionstart",ie),j.removeEventListener("sessionend",Ce),Le.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=ne.autoReset,B=pt.enabled,X=pt.autoUpdate,W=pt.needsUpdate,z=pt.type;at(),ne.autoReset=T,pt.enabled=B,pt.autoUpdate=X,pt.needsUpdate=W,pt.type=z}function ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dt(T){const B=T.target;B.removeEventListener("dispose",Dt),ue(B)}function ue(T){Te(T),Et.remove(T)}function Te(T){const B=Et.get(T).programs;B!==void 0&&(B.forEach(function(X){xt.releaseProgram(X)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,W,z,J){B===null&&(B=ae);const it=z.isMesh&&z.matrixWorld.determinant()<0,mt=Ja(T,B,X,W,z);bt.setMaterial(W,it);let vt=X.index,It=1;if(W.wireframe===!0){if(vt=Z.getWireframeAttribute(X),vt===void 0)return;It=2}const Pt=X.drawRange,St=X.attributes.position;let Yt=Pt.start*It,oe=(Pt.start+Pt.count)*It;J!==null&&(Yt=Math.max(Yt,J.start*It),oe=Math.min(oe,(J.start+J.count)*It)),vt!==null?(Yt=Math.max(Yt,0),oe=Math.min(oe,vt.count)):St!=null&&(Yt=Math.max(Yt,0),oe=Math.min(oe,St.count));const de=oe-Yt;if(de<0||de===1/0)return;te.setup(z,W,mt,X,vt);let je,Zt=ft;if(vt!==null&&(je=$.get(vt),Zt=kt,Zt.setIndex(je)),z.isMesh)W.wireframe===!0?(bt.setLineWidth(W.wireframeLinewidth*le()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(z.isLine){let Tt=W.linewidth;Tt===void 0&&(Tt=1),bt.setLineWidth(Tt*le()),z.isLineSegments?Zt.setMode(F.LINES):z.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else z.isPoints?Zt.setMode(F.POINTS):z.isSprite&&Zt.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Zt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Tt=z._multiDrawStarts,zn=z._multiDrawCounts,Qt=z._multiDrawCount,vn=vt?$.get(vt).bytesPerElement:1,cr=Et.get(W).currentProgram.getUniforms();for(let tn=0;tn<Qt;tn++)cr.setValue(F,"_gl_DrawID",tn),Zt.render(Tt[tn]/vn,zn[tn])}else if(z.isInstancedMesh)Zt.renderInstances(Yt,de,z.count);else if(X.isInstancedBufferGeometry){const Tt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,zn=Math.min(X.instanceCount,Tt);Zt.renderInstances(Yt,de,zn)}else Zt.render(Yt,de)};function wt(T,B,X){T.transparent===!0&&T.side===gn&&T.forceSinglePass===!1?(T.side=Ve,T.needsUpdate=!0,ii(T,B,X),T.side=Ei,T.needsUpdate=!0,ii(T,B,X),T.side=gn):ii(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),l=Ht.get(X),l.init(B),M.push(l),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(l.pushLight(z),z.castShadow&&l.pushShadow(z))}),T!==X&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(l.pushLight(z),z.castShadow&&l.pushShadow(z))}),l.setupLights();const W=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const J=z.material;if(J)if(Array.isArray(J))for(let it=0;it<J.length;it++){const mt=J[it];wt(mt,X,z),W.add(mt)}else wt(J,X,z),W.add(J)}),M.pop(),l=null,W},this.compileAsync=function(T,B,X=null){const W=this.compile(T,B,X);return new Promise(z=>{function J(){if(W.forEach(function(it){Et.get(it).currentProgram.isReady()&&W.delete(it)}),W.size===0){z(T);return}setTimeout(J,10)}Bt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let jt=null;function me(T){jt&&jt(T)}function ie(){Le.stop()}function Ce(){Le.start()}const Le=new Yh;Le.setAnimationLoop(me),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(T){jt=T,j.setAnimationLoop(T),T===null?Le.stop():Le.start()},j.addEventListener("sessionstart",ie),j.addEventListener("sessionend",Ce),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,I),l=Ht.get(T,M.length),l.init(B),M.push(l),Rt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),q.setFromProjectionMatrix(Rt),lt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,lt),p=dt.get(T,v.length),p.init(),v.push(p),j.enabled===!0&&j.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&he(J,B,-1/0,x.sortObjects)}he(T,B,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(Q,ht),Gt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Gt&&Mt.addToRenderList(p,T),this.info.render.frame++,et===!0&&tt.beginShadows();const X=l.state.shadowsArray;pt.render(X,T,B),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,z=p.transmissive;if(l.setupLights(),B.isArrayCamera){const J=B.cameras;if(z.length>0)for(let it=0,mt=J.length;it<mt;it++){const vt=J[it];un(W,z,T,vt)}Gt&&Mt.render(T);for(let it=0,mt=J.length;it<mt;it++){const vt=J[it];Ue(p,T,vt,vt.viewport)}}else z.length>0&&un(W,z,T,B),Gt&&Mt.render(T),Ue(p,T,B);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(x,T,B),te.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(l=M[M.length-1],et===!0&&tt.setGlobalState(x.clippingPlanes,l.state.camera)):l=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function he(T,B,X,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)l.pushLight(T),T.castShadow&&l.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){W&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Rt);const it=Y.update(T),mt=T.material;mt.visible&&p.push(T,it,mt,X,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const it=Y.update(T),mt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),Ft.copy(it.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(Rt)),Array.isArray(mt)){const vt=it.groups;for(let It=0,Pt=vt.length;It<Pt;It++){const St=vt[It],Yt=mt[St.materialIndex];Yt&&Yt.visible&&p.push(T,it,Yt,X,Ft.z,St)}}else mt.visible&&p.push(T,it,mt,X,Ft.z,null)}}const J=T.children;for(let it=0,mt=J.length;it<mt;it++)he(J[it],B,X,W)}function Ue(T,B,X,W){const z=T.opaque,J=T.transmissive,it=T.transparent;l.setupLightsView(X),et===!0&&tt.setGlobalState(x.clippingPlanes,X),W&&bt.viewport(L.copy(W)),z.length>0&&hn(z,B,X),J.length>0&&hn(J,B,X),it.length>0&&hn(it,B,X),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function un(T,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[W.id]===void 0&&(l.state.transmissionRenderTarget[W.id]=new tr(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Ls:Zn,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const J=l.state.transmissionRenderTarget[W.id],it=W.viewport||L;J.setSize(it.z,it.w);const mt=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(N),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&Mt.render(X);const vt=x.toneMapping;x.toneMapping=Si;const It=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),l.setupLightsView(W),et===!0&&tt.setGlobalState(x.clippingPlanes,W),hn(T,X,W),A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let St=0,Yt=B.length;St<Yt;St++){const oe=B[St],de=oe.object,je=oe.geometry,Zt=oe.material,Tt=oe.group;if(Zt.side===gn&&de.layers.test(W.layers)){const zn=Zt.side;Zt.side=Ve,Zt.needsUpdate=!0,Ai(de,X,W,je,Zt,Tt),Zt.side=zn,Zt.needsUpdate=!0,Pt=!0}}Pt===!0&&(A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J))}x.setRenderTarget(mt),x.setClearColor(N,k),It!==void 0&&(W.viewport=It),x.toneMapping=vt}function hn(T,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let z=0,J=T.length;z<J;z++){const it=T[z],mt=it.object,vt=it.geometry,It=W===null?it.material:W,Pt=it.group;mt.layers.test(X.layers)&&Ai(mt,B,X,vt,It,Pt)}}function Ai(T,B,X,W,z,J){T.onBeforeRender(x,B,X,W,z,J),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,B,X,W,T,J),z.transparent===!0&&z.side===gn&&z.forceSinglePass===!1?(z.side=Ve,z.needsUpdate=!0,x.renderBufferDirect(X,B,W,z,T,J),z.side=Ei,z.needsUpdate=!0,x.renderBufferDirect(X,B,W,z,T,J),z.side=gn):x.renderBufferDirect(X,B,W,z,T,J),T.onAfterRender(x,B,X,W,z,J)}function ii(T,B,X){B.isScene!==!0&&(B=ae);const W=Et.get(T),z=l.state.lights,J=l.state.shadowsArray,it=z.state.version,mt=xt.getParameters(T,z.state,J,B,X),vt=xt.getProgramCacheKey(mt);let It=W.programs;W.environment=T.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(T.isMeshStandardMaterial?H:S).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",Dt),It=new Map,W.programs=It);let Pt=It.get(vt);if(Pt!==void 0){if(W.currentProgram===Pt&&W.lightsStateVersion===it)return zs(T,mt),Pt}else mt.uniforms=xt.getUniforms(T),T.onBeforeCompile(mt,x),Pt=xt.acquireProgram(mt,vt),It.set(vt,Pt),W.uniforms=mt.uniforms;const St=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(St.clippingPlanes=tt.uniform),zs(T,mt),W.needsLights=to(T),W.lightsStateVersion=it,W.needsLights&&(St.ambientLightColor.value=z.state.ambient,St.lightProbe.value=z.state.probe,St.directionalLights.value=z.state.directional,St.directionalLightShadows.value=z.state.directionalShadow,St.spotLights.value=z.state.spot,St.spotLightShadows.value=z.state.spotShadow,St.rectAreaLights.value=z.state.rectArea,St.ltc_1.value=z.state.rectAreaLTC1,St.ltc_2.value=z.state.rectAreaLTC2,St.pointLights.value=z.state.point,St.pointLightShadows.value=z.state.pointShadow,St.hemisphereLights.value=z.state.hemi,St.directionalShadowMap.value=z.state.directionalShadowMap,St.directionalShadowMatrix.value=z.state.directionalShadowMatrix,St.spotShadowMap.value=z.state.spotShadowMap,St.spotLightMatrix.value=z.state.spotLightMatrix,St.spotLightMap.value=z.state.spotLightMap,St.pointShadowMap.value=z.state.pointShadowMap,St.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Pt,W.uniformsList=null,Pt}function wi(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Sa.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function zs(T,B){const X=Et.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Ja(T,B,X,W,z){B.isScene!==!0&&(B=ae),A.resetTextureUnits();const J=B.fog,it=W.isMeshStandardMaterial?B.environment:null,mt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:$r,vt=(W.isMeshStandardMaterial?H:S).get(W.envMap||it),It=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pt=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),St=!!X.morphAttributes.position,Yt=!!X.morphAttributes.normal,oe=!!X.morphAttributes.color;let de=Si;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(de=x.toneMapping);const je=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=je!==void 0?je.length:0,Tt=Et.get(W),zn=l.state.lights;if(et===!0&&(lt===!0||T!==y)){const dn=T===y&&W.id===E;tt.setState(W,T,dn)}let Qt=!1;W.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==zn.state.version||Tt.outputColorSpace!==mt||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==vt||W.fog===!0&&Tt.fog!==J||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==tt.numPlanes||Tt.numIntersection!==tt.numIntersection)||Tt.vertexAlphas!==It||Tt.vertexTangents!==Pt||Tt.morphTargets!==St||Tt.morphNormals!==Yt||Tt.morphColors!==oe||Tt.toneMapping!==de||Tt.morphTargetsCount!==Zt)&&(Qt=!0):(Qt=!0,Tt.__version=W.version);let vn=Tt.currentProgram;Qt===!0&&(vn=ii(W,B,z));let cr=!1,tn=!1,ns=!1;const fe=vn.getUniforms(),Ln=Tt.uniforms;if(bt.useProgram(vn.program)&&(cr=!0,tn=!0,ns=!0),W.id!==E&&(E=W.id,tn=!0),cr||y!==T){bt.buffers.depth.getReversed()?(nt.copy(T.projectionMatrix),Qf(nt),Jf(nt),fe.setValue(F,"projectionMatrix",nt)):fe.setValue(F,"projectionMatrix",T.projectionMatrix),fe.setValue(F,"viewMatrix",T.matrixWorldInverse);const ri=fe.map.cameraPosition;ri!==void 0&&ri.setValue(F,Lt.setFromMatrixPosition(T.matrixWorld)),gt.logarithmicDepthBuffer&&fe.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fe.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,tn=!0,ns=!0)}if(z.isSkinnedMesh){fe.setOptional(F,z,"bindMatrix"),fe.setOptional(F,z,"bindMatrixInverse");const dn=z.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),fe.setValue(F,"boneTexture",dn.boneTexture,A))}z.isBatchedMesh&&(fe.setOptional(F,z,"batchingTexture"),fe.setValue(F,"batchingTexture",z._matricesTexture,A),fe.setOptional(F,z,"batchingIdTexture"),fe.setValue(F,"batchingIdTexture",z._indirectTexture,A),fe.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&fe.setValue(F,"batchingColorTexture",z._colorsTexture,A));const is=X.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&Ct.update(z,X,vn),(tn||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,fe.setValue(F,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ln.envMap.value=vt,Ln.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Ln.envMapIntensity.value=B.environmentIntensity),tn&&(fe.setValue(F,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&or(Ln,ns),J&&W.fog===!0&&ot.refreshFogUniforms(Ln,J),ot.refreshMaterialUniforms(Ln,W,P,D,l.state.transmissionRenderTarget[T.id]),Sa.upload(F,wi(Tt),Ln,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Sa.upload(F,wi(Tt),Ln,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fe.setValue(F,"center",z.center),fe.setValue(F,"modelViewMatrix",z.modelViewMatrix),fe.setValue(F,"normalMatrix",z.normalMatrix),fe.setValue(F,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const dn=W.uniformsGroups;for(let ri=0,si=dn.length;ri<si;ri++){const yl=dn[ri];O.update(yl,vn),O.bind(yl,vn)}}return vn}function or(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function to(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,B,X){Et.get(T.texture).__webglTexture=B,Et.get(T.depthTexture).__webglTexture=X;const W=Et.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=X===void 0,W.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const X=Et.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){I=T,w=B,b=X;let W=!0,z=null,J=!1,it=!1;if(T){const vt=Et.get(T);if(vt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(F.FRAMEBUFFER,null),W=!1;else if(vt.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(vt.__hasExternalTextures)A.rebindTextures(T,Et.get(T.texture).__webglTexture,Et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const St=T.depthTexture;if(vt.__boundDepthTexture!==St){if(St!==null&&Et.has(St)&&(T.width!==St.image.width||T.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(it=!0);const Pt=Et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pt[B])?z=Pt[B][X]:z=Pt[B],J=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?z=Et.get(T).__webglMultisampledFramebuffer:Array.isArray(Pt)?z=Pt[X]:z=Pt,L.copy(T.viewport),U.copy(T.scissor),C=T.scissorTest}else L.copy(yt).multiplyScalar(P).floor(),U.copy(zt).multiplyScalar(P).floor(),C=Jt;if(bt.bindFramebuffer(F.FRAMEBUFFER,z)&&W&&bt.drawBuffers(T,z),bt.viewport(L),bt.scissor(U),bt.setScissorTest(C),J){const vt=Et.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,vt.__webglTexture,X)}else if(it){const vt=Et.get(T.texture),It=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,X||0,It)}E=-1},this.readRenderTargetPixels=function(T,B,X,W,z,J,it){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&it!==void 0&&(mt=mt[it]),mt){bt.bindFramebuffer(F.FRAMEBUFFER,mt);try{const vt=T.texture,It=vt.format,Pt=vt.type;if(!gt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&X>=0&&X<=T.height-z&&F.readPixels(B,X,W,z,Nt.convert(It),Nt.convert(Pt),J)}finally{const vt=I!==null?Et.get(I).__webglFramebuffer:null;bt.bindFramebuffer(F.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(T,B,X,W,z,J,it){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&it!==void 0&&(mt=mt[it]),mt){const vt=T.texture,It=vt.format,Pt=vt.type;if(!gt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-W&&X>=0&&X<=T.height-z){bt.bindFramebuffer(F.FRAMEBUFFER,mt);const St=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.bufferData(F.PIXEL_PACK_BUFFER,J.byteLength,F.STREAM_READ),F.readPixels(B,X,W,z,Nt.convert(It),Nt.convert(Pt),0);const Yt=I!==null?Et.get(I).__webglFramebuffer:null;bt.bindFramebuffer(F.FRAMEBUFFER,Yt);const oe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zf(F,oe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,J),F.deleteBuffer(St),F.deleteSync(oe),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,X=0){T.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-X),z=Math.floor(T.image.width*W),J=Math.floor(T.image.height*W),it=B!==null?B.x:0,mt=B!==null?B.y:0;A.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,it,mt,z,J),bt.unbindTexture()},this.copyTextureToTexture=function(T,B,X=null,W=null,z=0){T.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],B=arguments[2],z=arguments[3]||0,X=null);let J,it,mt,vt,It,Pt,St,Yt,oe;const de=T.isCompressedTexture?T.mipmaps[z]:T.image;X!==null?(J=X.max.x-X.min.x,it=X.max.y-X.min.y,mt=X.isBox3?X.max.z-X.min.z:1,vt=X.min.x,It=X.min.y,Pt=X.isBox3?X.min.z:0):(J=de.width,it=de.height,mt=de.depth||1,vt=0,It=0,Pt=0),W!==null?(St=W.x,Yt=W.y,oe=W.z):(St=0,Yt=0,oe=0);const je=Nt.convert(B.format),Zt=Nt.convert(B.type);let Tt;B.isData3DTexture?(A.setTexture3D(B,0),Tt=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Tt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Tt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const zn=F.getParameter(F.UNPACK_ROW_LENGTH),Qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),vn=F.getParameter(F.UNPACK_SKIP_PIXELS),cr=F.getParameter(F.UNPACK_SKIP_ROWS),tn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,de.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vt),F.pixelStorei(F.UNPACK_SKIP_ROWS,It),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pt);const ns=T.isDataArrayTexture||T.isData3DTexture,fe=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Ln=Et.get(T),is=Et.get(B),dn=Et.get(Ln.__renderTarget),ri=Et.get(is.__renderTarget);bt.bindFramebuffer(F.READ_FRAMEBUFFER,dn.__webglFramebuffer),bt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let si=0;si<mt;si++)ns&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(T).__webglTexture,z,Pt+si),T.isDepthTexture?(fe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(B).__webglTexture,z,oe+si),F.blitFramebuffer(vt,It,J,it,St,Yt,J,it,F.DEPTH_BUFFER_BIT,F.NEAREST)):fe?F.copyTexSubImage3D(Tt,z,St,Yt,oe+si,vt,It,J,it):F.copyTexSubImage2D(Tt,z,St,Yt,oe+si,vt,It,J,it);bt.bindFramebuffer(F.READ_FRAMEBUFFER,null),bt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else fe?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Tt,z,St,Yt,oe,J,it,mt,je,Zt,de.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,z,St,Yt,oe,J,it,mt,je,de.data):F.texSubImage3D(Tt,z,St,Yt,oe,J,it,mt,je,Zt,de):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,St,Yt,J,it,je,Zt,de.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,St,Yt,de.width,de.height,je,de.data):F.texSubImage2D(F.TEXTURE_2D,z,St,Yt,J,it,je,Zt,de);F.pixelStorei(F.UNPACK_ROW_LENGTH,zn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vn),F.pixelStorei(F.UNPACK_SKIP_ROWS,cr),F.pixelStorei(F.UNPACK_SKIP_IMAGES,tn),z===0&&B.generateMipmaps&&F.generateMipmap(Tt),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,B,X=null,W=null,z=0){return T.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,W=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,X,W,z)},this.initRenderTarget=function(T){Et.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){w=0,b=0,I=null,bt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Xt._getUnpackColorSpace()}}class tl{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=n,this.far=i}clone(){return new tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lM extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class uM extends We{constructor(t=null,n=1,i=1,r,s,a,o,c,h=ln,u=ln,d,f){super(null,a,o,c,h,u,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Su extends Fe{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Er=new Kt,yu=new Kt,aa=[],Eu=new sr,hM=new Kt,ls=new ge,us=new Zr;class Is extends ge{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Su(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,hM)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new sr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Er),Eu.copy(t.boundingBox).applyMatrix4(Er),this.boundingBox.union(Eu)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Er),us.copy(t.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(us)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,n){const i=this.matrixWorld,r=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(i),t.ray.intersectsSphere(us)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Er),yu.multiplyMatrices(i,Er),ls.matrixWorld=yu,ls.raycast(t,aa);for(let a=0,o=aa.length;a<o;a++){const c=aa[a];c.instanceId=s,c.object=this,n.push(c)}aa.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Su(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new uM(new Float32Array(r*this.count),r,this.count,qc,Pn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class td extends Qr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tu=new Kt,Nc=new Bh,oa=new Zr,ca=new G;class dM extends Pe{constructor(t=new Xe,n=new td){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,t.ray.intersectsSphere(oa)===!1)return;Tu.copy(r).invert(),Nc.copy(t.ray).applyMatrix4(Tu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const p=h.getX(g);ca.fromBufferAttribute(d,p),Au(ca,p,c,r,t,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)ca.fromBufferAttribute(d,g),Au(ca,g,c,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Au(e,t,n,i,r,s,a){const o=Nc.distanceSqToPoint(e);if(o<n){const c=new G;Nc.closestPointToPoint(e,c),c.applyMatrix4(i);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Va extends Xe{constructor(t=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],c=[],h=new G,u=new $t;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const m=i+d/n*r;h.x=t*Math.cos(m),h.y=t*Math.sin(m),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class er extends Xe{constructor(t=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const h=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],m=[];let g=0;const _=[],p=i/2;let l=0;v(),a===!1&&(t>0&&M(!0),n>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(m,2));function v(){const x=new G,R=new G;let w=0;const b=(n-t)/i;for(let I=0;I<=s;I++){const E=[],y=I/s,L=y*(n-t)+t;for(let U=0;U<=r;U++){const C=U/r,N=C*c+o,k=Math.sin(N),V=Math.cos(N);R.x=L*k,R.y=-y*i+p,R.z=L*V,d.push(R.x,R.y,R.z),x.set(k,b,V).normalize(),f.push(x.x,x.y,x.z),m.push(C,1-y),E.push(g++)}_.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const y=_[E][I],L=_[E+1][I],U=_[E+1][I+1],C=_[E][I+1];(t>0||E!==0)&&(u.push(y,L,C),w+=3),(n>0||E!==s-1)&&(u.push(L,U,C),w+=3)}h.addGroup(l,w,0),l+=w}function M(x){const R=g,w=new $t,b=new G;let I=0;const E=x===!0?t:n,y=x===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),g++;const L=g;for(let U=0;U<=r;U++){const N=U/r*c+o,k=Math.cos(N),V=Math.sin(N);b.x=E*V,b.y=p*y,b.z=E*k,d.push(b.x,b.y,b.z),f.push(0,y,0),w.x=k*.5+.5,w.y=V*.5*y+.5,m.push(w.x,w.y),g++}for(let U=0;U<r;U++){const C=R+U,N=L+U;x===!0?u.push(N,N+1,C):u.push(N+1,N,C),I+=3}h.addGroup(l,I,x===!0?1:2),l+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class el extends er{constructor(t=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new el(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nl extends Xe{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let h=0;const u=[],d=new G,f=new G,m=[],g=[],_=[],p=[];for(let l=0;l<=i;l++){const v=[],M=l/i;let x=0;l===0&&a===0?x=.5/n:l===i&&c===Math.PI&&(x=-.5/n);for(let R=0;R<=n;R++){const w=R/n;d.x=-t*Math.cos(r+w*s)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(r+w*s)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(w+x,1-M),v.push(h++)}u.push(v)}for(let l=0;l<i;l++)for(let v=0;v<n;v++){const M=u[l][v+1],x=u[l][v],R=u[l+1][v],w=u[l+1][v+1];(l!==0||a>0)&&m.push(M,x,w),(l!==i-1||c<Math.PI)&&m.push(x,R,w)}this.setIndex(m),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class il extends Xe{constructor(t=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],h=[],u=new G,d=new G,f=new G;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const _=g/r*s,p=m/i*Math.PI*2;d.x=(t+n*Math.cos(p))*Math.cos(_),d.y=(t+n*Math.cos(p))*Math.sin(_),d.z=n*Math.sin(p),o.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),h.push(g/r),h.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const _=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,l=(r+1)*(m-1)+g,v=(r+1)*m+g;a.push(_,p,v),a.push(p,l,v)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class bn extends Qr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ed extends Pe{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class fM extends ed{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Io=new Kt,wu=new G,bu=new G;class pM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;wu.setFromMatrixPosition(t.matrixWorld),n.position.copy(wu),bu.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(bu),n.updateMatrixWorld(),Io.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mM extends pM{constructor(){super(new qh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gM extends ed{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new mM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);const _M={driftMaxR:130,sweeperMaxR:175,driftEntryAdvance:30,driftExitRunoff:40,sweeperEntryAdvance:18,sweeperExitRunoff:22,decreasingInsideLen:30,startOpen:200,finishOpen:150,crestHalfGap:55,mergeGap:12,maxSpans:64};function Ru(e,t,n){return Math.max(t,Math.min(n,e))}function Or(e){return typeof e=="number"&&isFinite(e)}function MM(e){return e==="L"?1:-1}function xM(e){return e==="L"?-1:1}function vM(e){return!(typeof e!="object"||e===null||e.dir!=="L"&&e.dir!=="R"||!Or(e.startS)||!Or(e.endS)||!Or(e.medR)||e.medR<=0||e.endS-e.startS<30||e.endS<=0)}function SM(e,t,n=[],i=_M){const r=i;if(!Or(e)||e<500||e>1e4)return{spans:[],length:0};const s=r.startOpen,a=e-r.finishOpen;if(!(a>s+60))return{spans:[],length:e};const o=[],c=[];for(const d of n)Or(d)&&d>0&&d<e&&c.push(d);c.sort((d,f)=>d-f);const h=(d,f,m)=>{let g=Ru(d,s,a),_=Ru(f,s,a);if(_-g>=20){for(const p of c){const l=p-r.crestHalfGap,v=p+r.crestHalfGap;if(_<=l||g>=v)continue;const M=l-g,x=_-v;if(M>=20&&x>=20?(o.push({aS:g,bS:l,side:m}),g=v):M>=x?_=Math.min(_,l):g=Math.max(g,v),!(_-g>=20))return}o.push({aS:g,bS:_,side:m})}};if(Array.isArray(t))for(const d of t){if(!vM(d))continue;const f=MM(d.dir);if(d.medR<=r.driftMaxR){if(h(d.startS-r.driftEntryAdvance,d.endS+r.driftExitRunoff,f),d.decreasing===!0){const m=(d.startS+d.endS)/2;h(m-r.decreasingInsideLen/2,m+r.decreasingInsideLen/2,xM(d.dir))}}else d.medR<=r.sweeperMaxR&&h(d.startS-r.sweeperEntryAdvance,d.endS+r.sweeperExitRunoff,f)}o.sort((d,f)=>d.side-f.side||d.aS-f.aS);const u=[];for(const d of o){const f=u[u.length-1];f&&f.side===d.side&&d.aS-f.bS<=r.mergeGap?d.bS>f.bS&&(f.bS=d.bS):u.push({aS:d.aS,bS:d.bS,side:d.side})}u.sort((d,f)=>d.aS-f.aS||d.side-f.side),u.length>r.maxSpans&&(u.sort((d,f)=>f.bS-f.aS-(d.bS-d.aS)||d.aS-f.aS),u.length=r.maxSpans,u.sort((d,f)=>d.aS-f.aS||d.side-f.side));for(const d of u)d.aS=Math.round(d.aS*10)/10,d.bS=Math.round(d.bS*10)/10;return{spans:u,length:e}}function rl(e,t,n){if(!e||!Or(t)||n!==1&&n!==-1)return!1;const i=e.spans;for(let r=0;r<i.length;r++){const s=i[r];if(s.side===n){if(t<s.aS){if(s.aS>t){let a=!1;for(let o=r+1;o<i.length;o++)if(i[o].side===n&&i[o].aS<s.aS){a=!0;break}if(!a)return!1}continue}if(t<=s.bS)return!0}}return!1}const nd=18,id=1.5,No=60,Dr=18,yM=.6;function Ts(e){return[0,3.6,7.2,10.8,14.4,18,Math.max(e,nd)]}function EM(e,t,n,i){const r=e.length,s=new Array(r);for(let u=0;u<r;u++){const d=t[Math.max(0,u-2)],f=t[Math.min(r-1,u+2)],m=Math.max(n[Math.min(r-1,u+2)]-n[Math.max(0,u-2)],1e-6);s[u]=TM(AM(d,f,m))}if(r<2)return s;const a=(u,d,f)=>e[u].x+e[u].nx*f*(i+d),o=(u,d,f)=>e[u].z+e[u].nz*f*(i+d),c=(u,d,f,m,g,_)=>{const p=(f-u)*(_-d)-(g-u)*(m-d);return p>1e-9?1:p<-1e-9?-1:0},h=(u,d,f)=>{const m=Ts(s[u]),g=Ts(s[u+1]);if(d+1>=m.length||d+1>=g.length)return!0;const _=c(a(u,m[d],f),o(u,m[d],f),a(u,m[d+1],f),o(u,m[d+1],f),a(u+1,g[d],f),o(u+1,g[d],f)),p=c(a(u,m[d+1],f),o(u,m[d+1],f),a(u+1,g[d+1],f),o(u+1,g[d+1],f),a(u+1,g[d],f),o(u+1,g[d],f));return!(_!==0&&_!==-f||p!==0&&p!==-f)};for(let u=0;u<80;u++){let d=!1;for(let f=0;f<r-1;f++)for(const m of[1,-1]){const g=Ts(s[f]).length;for(let _=0;_<g-1;_++)h(f,_,m)||(s[f]>=s[f+1]&&s[f]>Dr?s[f]=Math.max(s[f]*.9,Dr):s[f+1]>Dr&&(s[f+1]=Math.max(s[f+1]*.9,Dr)),d=!0)}if(!d)break}return s}function rd(e){return e-id}function TM(e){if(!(e>0))return No;const t=e*yM;return t<Dr?Dr:t>No?No:t}function AM(e,t,n){let i=t-e;for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return Math.abs(i)<1e-9?1/0:n/Math.abs(i)}function zr(e,t,n){const i=Math.abs(t);if(i<=n)return e;const r=Math.min((i-n)/nd,1),s=r*r*(3-2*r);return e-id*s}const wM=3,bM=1,sd=3,ad=2,RM=120,od=4e3,cd=2,Br=5e3,Ca=36e5,Pc=1,CM=8192,sl=1650;function Po(e,t,n){return e+(t-e)*n}function LM(e){return Math.atan2(Math.sin(e),Math.cos(e))}function al(e){return typeof e=="number"&&isFinite(e)}function DM(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function IM(e){for(e=e.replace(/-/g,"+").replace(/_/g,"/");e.length%4;)e+="=";return atob(e)}function Cu(e){return[Math.round(e[0]*2)/2,Math.round(e[1]*2)/2,Math.round(e[2]*2)/2,Math.round(e[3]*100)/100]}function NM(e,t){const n=Math.max(1,Math.floor(t)),i=[],r=[];for(let a=0;a<e.p.length;a+=n)i.push(Cu(e.p[a])),r.push(Math.round(e.ts[a]));const s=e.p.length-1;return s%n!==0&&s>=0&&(i.push(Cu(e.p[s])),r.push(Math.round(e.ts[s]))),{p:i,ts:r}}function ld(e,t,n=sl,i){let r=1,s="";for(;;){const a=NM(e,r),o=i?{v:sd,t:Math.round(t),p:a.p,ts:a.ts,track:{...i}}:{v:2,t:Math.round(t),p:a.p,ts:a.ts};if(s=DM(JSON.stringify(o)),s.length<n||e.p.length<40||r>=16)break;r*=2}return s}function Lu(e,t){let n=0,i=1;for(let r=0;r<5;r++){if(t>=e.length)return null;const s=e[t++];if(n+=(s&127)*i,!(s&128))return[n,t];i*=128}return null}function PM(e){if(e.length<2||e.charCodeAt(0)!==67||e.charCodeAt(1)!==49)return null;const t=new Uint8Array(e.length);for(let _=0;_<e.length;_++)t[_]=e.charCodeAt(_)&255;let n=2;const i=Lu(t,n);if(!i)return null;n=i[1];const r=Lu(t,n);if(!r)return null;n=r[1];const s=i[0],a=r[0];if(s<0||s>Ca||a<cd||a>od)return null;const o=()=>{if(n+2>t.length)return null;let _=t[n]+t[n+1]*256;return n+=2,_>=32768?_-65536:_},c=[],h=[];let u=0,d=0,f=0,m=0,g=0;for(let _=0;_<a;_++){const p=o(),l=o(),v=o(),M=o();if(p===null||l===null||v===null||M===null)return null;if(_===0)u=p,d=l,f=v,m=M,g=0;else{if(n+2>t.length)return null;const b=t[n]+t[n+1]*256;if(n+=2,u+=p,d+=l,f+=v,m+=M,g+=b,g<0||g>Ca)return null}const x=u/2,R=d/2,w=f/2;if(Math.abs(x)>Br||Math.abs(R)>Br||Math.abs(w)>Br)return null;c.push([x,R,w,m/100]),h.push(g)}return n!==t.length||Math.abs(h[a-1]-s)>Pc?null:{t:s,p:c,ts:h}}function UM(e){if(!Array.isArray(e)||e.length<cd||e.length>od)return!1;for(const t of e){if(!Array.isArray(t)||t.length!==4)return!1;for(const i of t)if(!al(i))return!1;const n=t;if(Math.abs(n[0])>Br||Math.abs(n[1])>Br||Math.abs(n[2])>Br)return!1}return!0}function FM(e){const t=[];for(let n=0;n<e;n++)t.push(n*RM);return t}function OM(e,t){if(!Array.isArray(e)||e.length!==t)return!1;for(const n of e)if(!al(n)||n<0||n>Ca)return!1;for(let n=1;n<e.length;n++){const i=e[n],r=e[n-1];if(i<r)return!1}return!0}function zM(e){if(!e)return{ok:!1,error:"empty"};if(typeof e!="string")return{ok:!1,error:"not-string"};if(e.length>CM)return{ok:!1,error:"too-long"};let t;try{t=IM(e)}catch{return{ok:!1,error:"bad-encoding"}}if(t.length>=2&&t.charCodeAt(0)===67&&t.charCodeAt(1)===49){const c=PM(t);return c?{ok:!0,ghost:c}:{ok:!1,error:"bad-encoding"}}let n;try{n=JSON.parse(t)}catch{return{ok:!1,error:"bad-encoding"}}if(typeof n!="object"||n===null)return{ok:!1,error:"bad-shape"};const i=n;if(i.v!==void 0&&i.v!==wM&&i.v!==2&&i.v!==bM)return{ok:!1,error:"bad-version"};let r;if(i.v===sd){if(!ud(i.track))return{ok:!1,error:"bad-track"};const c=i.track;r={day:c.day,course:c.course,gen:c.gen}}if(!al(i.t)||i.t<0||i.t>Ca)return{ok:!1,error:"bad-time"};if(!UM(i.p))return{ok:!1,error:"bad-points"};const s=i.p;let a;if(i.ts===void 0){if(a=FM(s.length),a[a.length-1]>i.t+Pc)return{ok:!1,error:"legacy-finish-mismatch"}}else{if(!OM(i.ts,s.length))return{ok:!1,error:"bad-timestamps"};if(a=i.ts.slice(),Math.abs(a[a.length-1]-i.t)>Pc)return{ok:!1,error:"finish-mismatch"}}return{ok:!0,ghost:r?{t:i.t,p:s,ts:a,track:r}:{t:i.t,p:s,ts:a}}}function ud(e){if(typeof e!="object"||e===null)return!1;const t=e;return!(typeof t.day!="string"||t.day.length<1||t.day.length>32||typeof t.course!="string"||!/^[0-9a-fA-F]{1,64}$/.test(t.course)||typeof t.gen!="number"||!isFinite(t.gen)||Math.floor(t.gen)!==t.gen||t.gen<0||t.gen>2147483647)}function BM(e,t,n=ad){return{day:e,course:t,gen:n}}function Du(e,t){return e?!e.track||!ud(e.track)?"legacy":e.track.course.toLowerCase()===t.course.toLowerCase()&&e.track.gen===t.gen?"match":"mismatch":"none"}function Uo(e,t){return t==="match"||t==="none"?"":e==="friend"&&t==="mismatch"?"Friend link is for a different course.":e==="friend"?"Friend link predates course checks — ask for a fresh one.":t==="mismatch"?"Saved best is for a different course.":"Saved best predates course checks."}function Iu(e){return e==="match"||e==="none"?"none":e}function kM(e){const t=Du(e.shared,e.expected),n=Du(e.pb,e.expected);if(t==="match"&&e.shared&&e.shared.p.length>1)return{rival:{ghost:e.shared,kind:"friend",racingPB:!1},status:"ready",notice:""};if(n==="match"&&e.pb&&e.pb.p.length>1){const a=[];if(e.shared){const o=Uo("friend",t);o&&a.push(o),a.push("Racing your best instead.")}return{rival:{ghost:e.pb,kind:"pb",racingPB:!0},status:"ready",notice:a.join(" ")}}const i=[],r=Uo("friend",t);r&&i.push(r);const s=Uo("pb",n);return s&&i.push(s),e.shared?{rival:null,status:Iu(t),notice:i.join(" ")}:e.pb?{rival:null,status:Iu(n),notice:i.join(" ")}:{rival:null,status:"none",notice:""}}function Ns(e){const t=zM(e);return t.ok?t.ghost:null}function Fo(e,t){const n=e.p,i=e.ts,r=n[0],s=n[n.length-1];if(t<=i[0])return{x:r[0],y:r[1],z:r[2],h:r[3]};const a=i.length-1;if(t>=i[a])return{x:s[0],y:s[1],z:s[2],h:s[3]};let o=0,c=a;for(;c-o>1;){const m=o+c>>1;i[m]<=t?o=m:c=m}const h=i[c]-i[o]||1,u=(t-i[o])/h,d=n[o],f=n[c];return{x:Po(d[0],f[0],u),y:Po(d[1],f[1],u),z:Po(d[2],f[2],u),h:d[3]+LM(f[3]-d[3])*u}}function GM(e,t){return e&&e.kind==="friend"?"Racing a shared ghost":e&&e.kind==="pb"?"Racing your daily best ghost":t>0?"Friend time, no ghost":"No rival ghost"}const HM=36e5,VM=/^\d{4}-\d{2}-\d{2}$/;function WM(e){return e instanceof DOMException&&e.name==="AbortError"}function hd(e){if(!VM.test(e))return!1;const[t,n,i]=e.split("-").map(Number);if(n<1||n>12||i<1||i>31)return!1;const r=new Date(Date.UTC(t,n-1,i));return r.getUTCFullYear()===t&&r.getUTCMonth()===n-1&&r.getUTCDate()===i}function dd(e){const t=typeof e=="string"&&e.trim()!==""?Number(e):e;return typeof t!="number"||!isFinite(t)||t<0||t>HM?0:Math.floor(t)}function xe(e){if(!isFinite(e)||e<0)return"—";const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3),i=Math.floor(e%1e3/10);return`${t}:${String(n).padStart(2,"0")}.${String(i).padStart(2,"0")}`}function XM(e,t,n){return`🏁 CANYON DAILY ${e} — ${xe(t)}
Beat my run: ${n}`}function jM(e,t,n){const i=hd(n.day)?n.day:"",r=dd(n.timeMs);let s=typeof n.ghost=="string"?n.ghost:"";s&&!Ns(s)&&(s="");const a=`?d=${encodeURIComponent(i)}&t=${r}${s?`&g=${s}`:""}`;return`${e}${t}${a}`}function YM(e){const t={day:"",timeMs:0,ghost:null,ghostRaw:"",errors:[]};try{if(!e)return t.errors.push("empty"),t;let n=e;const i=e.indexOf("?");i>=0&&(n=e.slice(i)),n.startsWith("?")||(n=`?${n}`);const r=new URLSearchParams(n),s=r.get("d")||"";hd(s)?t.day=s:s&&t.errors.push("bad-day"),t.timeMs=dd(r.get("t")||0);const a=r.get("g")||"";if(t.ghostRaw=a,a){const o=Ns(a);o?t.ghost=o:t.errors.push("bad-ghost")}return t}catch{return t.errors.push("parse-failed"),t}}function qM(e,t){return e&&t}async function $M(e,t,n){if(n&&e.requestNativeShare)try{return await e.requestNativeShare({title:t.title,text:t.text,url:t.url}),t.hasGhost?{kind:"shared-with-ghost",message:"Shared with ghost — good luck!"}:{kind:"shared-no-ghost",message:"Shared — no ghost saved yet"}}catch(i){if(WM(i))return{kind:"dismissed",message:"Share dismissed"}}if(e.copyText)try{return await e.copyText(t.text),t.hasGhost?{kind:"copied-with-ghost",message:"Link + ghost copied — send it!"}:t.isFinish?{kind:"copied-time-only",message:"Time copied — send it!"}:{kind:"copied-time-only",message:"Time copied — link has no ghost (finish a run first)"}}catch{return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}const Nu={entrySteer:.18,entryMinSpeed:25,tapMaxS:.35,sloppyScale:.4,slideAttack:3.5,slideRelease:4,exitOppSteer:.35,rearmDeadband:.12,earlyEnd:.45,optEnd:1.8,lateEnd:3.2,timeoutS:4,peakLoDeg:8,peakHiDeg:28,spinDeg:45,alignDeg:20,speedLo:25,speedHi:70,counterLo:.2,counterHi:.7,abortSpeed:15,cooldownS:1.2,boostTime:.7,boostAccelMax:24,kickRad:.11,pendFreq:7,pendDecay:1.8,pendYaw:1.8,chainWindow:.8,chainHold:.35,chainMin:.25,chainBoost:1.5},ya=162;function fd(){return{phase:"idle",entryDir:0,slideAge:0,peakSlipDeg:0,slideBlend:0,cooldownT:0,boostT:0,boostAccel:0,lastQuality:0,lastGrade:"none",spamCount:0,needNeutral:!1,cleanTap:!0,handHeldS:0,prevHand:!1,pendAmp:0,pendPhase:0,chainDir:0,chainT:0,chainHoldT:0}}function ol(){return{phase:"idle",slideBlend:0,boostAccel:0,event:"none",quality:0,grade:"none",yawKick:0,pendRate:0,pendAmp:0,chainArmed:!1}}function pd(e){const t=fd();e.phase=t.phase,e.entryDir=t.entryDir,e.slideAge=t.slideAge,e.peakSlipDeg=t.peakSlipDeg,e.slideBlend=t.slideBlend,e.cooldownT=t.cooldownT,e.boostT=t.boostT,e.boostAccel=t.boostAccel,e.lastQuality=t.lastQuality,e.lastGrade=t.lastGrade,e.spamCount=t.spamCount,e.needNeutral=t.needNeutral,e.cleanTap=t.cleanTap,e.handHeldS=t.handHeldS,e.prevHand=t.prevHand,e.pendAmp=t.pendAmp,e.pendPhase=t.pendPhase,e.chainDir=t.chainDir,e.chainT=t.chainT,e.chainHoldT=t.chainHoldT}function Fi(e,t,n){return Math.max(t,Math.min(n,e))}function la(e){return typeof e=="number"&&isFinite(e)}function Oo(e){return e>0?1:e<0?-1:0}function KM(e,t,n,i,r,s){if(t<3||t>e.spinDeg||r>=e.timeoutS||i<e.entryMinSpeed)return 0;const a=t<=e.peakLoDeg?(t-3)/(e.peakLoDeg-3):t<=e.peakHiDeg?1:1-(t-e.peakHiDeg)/(e.spinDeg-e.peakHiDeg),o=1-Fi(n/e.alignDeg,0,1),c=Fi((i-e.speedLo)/(e.speedHi-e.speedLo),0,1),h=Fi((s-e.counterLo)/(e.counterHi-e.counterLo),0,1),u=.4*Fi(a,0,1)+.3*o+.15*c+.15*h,d=r<.15?0:r<e.earlyEnd?(r-.15)/(e.earlyEnd-.15):r<=e.optEnd?1:r<=e.lateEnd?1-.75*((r-e.optEnd)/(e.lateEnd-e.optEnd)):.25*(1-(r-e.lateEnd)/(e.timeoutS-e.lateEnd));return Fi(u*Fi(d,0,1),0,1)}function ZM(e){return e>=.8?"perfect":e>=.55?"good":e>.05?"weak":"none"}function QM(e,t,n,i){if(i.event="none",i.quality=0,i.grade="none",i.yawKick=0,i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=e.chainT>0&&e.chainDir!==0,!la(n.dt)||n.dt<=0||!la(n.steer)||!la(n.speed)||!la(n.slipDeg)){i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}const r=n.dt>.1?.1:n.dt,s=Fi(n.steer,-1,1),a=n.handbrake===!0,o=a&&!e.prevHand,c=!a&&e.prevHand;if(e.prevHand=a,c&&e.phase==="sliding"&&(e.cleanTap=e.handHeldS<=t.tapMaxS),a?e.handHeldS+=r:e.handHeldS=0,e.boostT>0&&(e.boostT=Math.max(0,e.boostT-r)),e.boostAccel=e.boostT>0?e.boostAccel:0,!n.onRoad){e.boostT=0,e.boostAccel=0,e.lastQuality=0,e.lastGrade="none",e.phase="idle",e.slideAge=0,e.peakSlipDeg=0,e.needNeutral=!1,e.chainDir=0,e.chainT=0,e.chainHoldT=0,e.pendAmp=0,e.pendPhase=0,e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),i.phase="idle",i.slideBlend=e.slideBlend,i.boostAccel=0;return}if(!n.grounded){e.phase==="sliding"&&(i.pendRate=-e.entryDir*e.pendAmp*Math.sin(e.pendPhase)*t.pendYaw),i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.phase==="cooldown"){if(e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),e.cooldownT-=r,e.chainT>0&&(e.chainT-=r),e.cooldownT<=0&&(e.phase="idle",e.cooldownT=0,e.chainDir=0,e.chainT=0,e.chainHoldT=0),e.chainDir!==0&&e.chainT>0&&Oo(s)===e.chainDir&&Math.abs(s)>=t.entrySteer){if(o){Pu(e,t,n,i);return}if(e.chainHoldT+=r,e.chainHoldT>=t.chainHold){Pu(e,t,n,i);return}}else e.chainHoldT=0,o&&(e.spamCount++,i.event="rejected");i.chainArmed=e.chainT>0&&e.chainDir!==0,i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.phase==="idle"){if(e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),Math.abs(s)<t.rearmDeadband&&(e.needNeutral=!1),o){const u=Oo(s);e.needNeutral||u===0||Math.abs(s)<t.entrySteer||n.speed<t.entryMinSpeed?!e.needNeutral&&e.cooldownT<=0||(e.spamCount++,i.event="rejected"):(e.phase="sliding",e.entryDir=u,e.slideAge=0,e.peakSlipDeg=Math.abs(n.slipDeg),e.cleanTap=!0,e.pendAmp=1,e.pendPhase=0,i.yawKick=-u*t.kickRad,i.pendAmp=e.pendAmp,i.event="entered")}i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.slideAge+=r,e.peakSlipDeg=Math.max(e.peakSlipDeg,Math.abs(n.slipDeg)),e.slideBlend=Math.min(1,e.slideBlend+t.slideAttack*r),e.pendPhase+=t.pendFreq*r,e.pendAmp*=Math.exp(-t.pendDecay*r),a&&e.handHeldS>t.tapMaxS&&(e.cleanTap=!1),i.pendRate=-e.entryDir*e.pendAmp*Math.sin(e.pendPhase)*t.pendYaw,i.pendAmp=e.pendAmp,Oo(s)===-e.entryDir&&Math.abs(s)>=t.exitOppSteer){let u=KM(t,e.peakSlipDeg,Math.abs(n.slipDeg),n.speed,e.slideAge,Math.abs(s));e.cleanTap||(u*=t.sloppyScale);const d=ZM(u),f=Math.cos(e.pendPhase);let m=f>.3?0:f<-.3?Math.min(e.pendAmp*t.chainBoost,1.5):e.pendAmp*.4;u<.3&&(m=Math.max(m,e.pendAmp)),e.lastQuality=u,e.lastGrade=d,e.phase="cooldown",e.cooldownT=t.cooldownS,e.needNeutral=!0,e.pendAmp=m,m>t.chainMin?(e.chainDir=-e.entryDir,e.chainT=t.chainWindow,e.chainHoldT=0):(e.chainDir=0,e.chainT=0,e.chainHoldT=0),e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),u>0?(e.boostT=t.boostTime,e.boostAccel=u*t.boostAccelMax):(e.boostT=0,e.boostAccel=0),i.event="exit",i.quality=u,i.grade=d,i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=e.chainDir!==0,i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.slideAge>=t.timeoutS||n.speed<t.abortSpeed){e.lastQuality=0,e.lastGrade="none",e.boostT=0,e.boostAccel=0,n.speed<t.abortSpeed?(e.phase="idle",e.chainDir=0,e.chainT=0,e.chainHoldT=0):(e.phase="cooldown",e.cooldownT=t.cooldownS,e.needNeutral=!0,e.pendAmp*=.4,e.pendAmp>t.chainMin?(e.chainDir=-e.entryDir,e.chainT=t.chainWindow,e.chainHoldT=0):(e.chainDir=0,e.chainT=0,e.chainHoldT=0)),e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),i.event="expired",i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=e.chainDir!==0,i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel}function Pu(e,t,n,i){e.phase="sliding",e.entryDir=e.chainDir,e.slideAge=0,e.peakSlipDeg=Math.abs(n.slipDeg),e.cleanTap=!0,e.pendPhase=0,e.chainDir=0,e.chainT=0,e.chainHoldT=0,i.yawKick=-e.entryDir*t.kickRad,i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=!1,i.event="entered",i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel}const JM=120,tx=3e3,ex=26,nx=11,ix=20,rx=5.5,sx=6.5,ax=5e3,ox=48,Uu=10,cx=85,lx=55,Fu=.35,ux=60,hx=16,gs=140,dx=112,fx=44,px=4,mx=25,gx=.18,_x=6,Mx=9,xx=3.5,vx=2.5,Sx=4.5,yx=.12,Ex=.35,Tx=.94,Ou=1,Ax=.1,wx=.3,bx=.4,Rx=.8,Cx=5,Lx=.5,Dx=32,Ix=.7,Nx=.35,Px=.35,Ux=9,zu=.61,Fx=2,Bu=.44,Ox=4,zx=.3,Bx=.25,kx=.4,Gx=.007,Hx=.62,Vx=1.2,Wx=2,Xx=.275,jx=.3;function Yx(e){return e+Wx-Xx-Vx-jx}const qx=4,Tr=6,ku=.02,Gu=.15,$x=6,Hu=.25,Kx=.35,Vu=.5,Zx=.6,Qx=.6,Wu=2.5,Jx=55,tv=.85,ev=.18,nv=2.2,iv=.9,rv=5,sv=25,av=.35,ov=1,cv=.4,lv=2,uv=4,hv=6,dv=4,fv=60,pv=45,mv=2,Xu=40,Vt=(e,t,n)=>Math.max(t,Math.min(n,e)),on=(e,t,n)=>e+(t-e)*n;function Wa(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Xa(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Ea(e){return Math.atan2(Math.sin(e),Math.cos(e))}function gv(e,t){const n=e.length,i=e.map(f=>f.x),r=e.map(f=>f.y),s=e.map(f=>f.z),a=[],o=[],c=[],h=[],u=[];for(let f=0;f<n;f++){const m=e[Math.max(f-1,0)],g=e[Math.min(f+1,n-1)];let _=g.x-m.x,p=g.z-m.z;const l=Math.hypot(_,p);l<1e-9?(_=1,p=0):(_/=l,p/=l),a.push(_),o.push(p),c.push(-p),h.push(_),u.push(Math.atan2(_,p))}const d=[0];for(let f=1;f<n;f++)d.push(d[f-1]+Math.hypot(i[f]-i[f-1],s[f]-s[f-1]));return{n,x:i,y:r,z:s,tx:a,tz:o,nx:c,nz:h,yaw:u,halfW:t,cum:d,barrier:null}}class _v{constructor(){this.stickId=-1,this.stickX0=0,this.joy=0,this.joyOn=!1,this.drift=!1,this.driftId=-1}stickDown(t,n){this.stickId===-1&&(this.stickId=t,this.stickX0=n,this.joyOn=!0,this.joy=0)}stickMove(t,n){t===this.stickId&&(this.joy=Vt((n-this.stickX0)/ox,-1,1))}stickUp(t){t===this.stickId&&(this.stickId=-1,this.joyOn=!1,this.joy=0)}driftDown(t){this.driftId===-1&&(this.driftId=t,this.drift=!0)}driftUp(t){t===this.driftId&&(this.driftId=-1,this.drift=!1)}get steer(){return this.joyOn?this.joy:0}}function Mv(){return{heading:0,px:0,py:0,pz:0,vx:0,vz:0,vy:0,grounded:!0,lastIdx:0,groundIdx:0,raceMs:0,pitch:0,finished:!1,finishCount:0,prevFinD:0,px0:0,py0:0,pz0:0,h0:0,pitch0:0,prevRaceMs:0,approach:[],rec:{t:0,p:[],ts:[]},recLastMs:0,snap:{i:0,x:0,y:0,z:0,h:0,vx:0,vz:0},snapTimer:0,snaps:[],rescueStreak:0,rescueIdx:-1,steer:0,driftAmt:0,wasOffroad:!1,scrapeLowMs:0,breakT:0,wallCool:0,crashT:0,crashAmp:0,scrapeT:0,kickT:0,oobMs:0,driftHold:0,exitT:0,rhythm:fd(),rhythmOut:ol(),rhythmExitLatch:0,justLaunched:!1,airSteps:0}}function xv(e,t){const n=t.n-1;return(e.px-t.x[n])*t.tx[n]+(e.pz-t.z[n])*t.tz[n]}function vv(e,t,n=100){let i=e.lastIdx,r=1/0;for(let s=-100;s<=n;s++){const a=Vt(e.lastIdx+s,0,t.n-1),o=t.x[a]-e.px,c=t.z[a]-e.pz,h=o*o+c*c;h<r&&(r=h,i=a)}return i}function Sv(e,t,n){const i=Vt(e.lastIdx,0,t.n-1),r=Vt(e.lastIdx+1,0,t.n-1),s=i===r?2:Math.max(di(t,i,r),.5),a=Math.hypot(e.vx,e.vz);return Math.min(2,1+Math.ceil(a*n/s))}function yv(e,t,n){let i=0,r=1/0;for(let s=0;s<e.n;s++){const a=e.x[s]-t,o=e.z[s]-n,c=a*a+o*o;c<r&&(r=c,i=s)}return i}function ju(e,t,n){const i=vv(e,t,Sv(e,t,n));return i>e.lastIdx&&Math.hypot(t.x[i]-e.px,t.z[i]-e.pz)>Math.hypot(e.vx,e.vz)*n+12?e.lastIdx:i}function di(e,t,n){return Math.hypot(e.x[n]-e.x[t],e.z[n]-e.z[t])||1e-6}function Ev(e,t,n){e.lastIdx=n,e.groundIdx=n,e.px=t.x[n],e.pz=t.z[n],e.py=t.y[n]+.2,e.heading=t.yaw[n],e.vx=t.tx[n]*Uu,e.vz=t.tz[n]*Uu,e.vy=0,e.grounded=!0,e.steer=0,e.driftAmt=0,e.wasOffroad=!1,e.raceMs=0,e.finished=!1,e.finishCount=0,e.prevFinD=xv(e,t),e.approach=[],e.rec={t:0,p:[[e.px,e.py,e.pz,e.heading]],ts:[0]},e.recLastMs=0,e.snap={i:n,x:e.px,y:e.py,z:e.pz,h:e.heading,vx:e.vx,vz:e.vz},e.snaps=[e.snap],e.rescueStreak=0,e.rescueIdx=-1,e.snapTimer=0,e.scrapeLowMs=0,e.breakT=0,e.wallCool=0,e.crashT=0,e.crashAmp=0,e.scrapeT=0,e.kickT=0,e.driftHold=0,e.exitT=0,pd(e.rhythm),e.rhythmOut=ol(),e.rhythmExitLatch=0,e.justLaunched=!1,e.airSteps=0,e.oobMs=0;const i=(t.y[Math.min(n+1,t.n-1)]-t.y[Math.max(n-1,0)])/di(t,Math.max(n-1,0),Math.min(n+1,t.n-1));e.pitch=Math.atan(Vt(i,-.5,.5)),e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch}function Tv(e){if(e.finished)return;const t=e.snaps.length,n=t>1?Math.min(e.rescueStreak,t-1):0,i=t-1-n,r=t>0?e.snaps[i]:e.snap;t>0&&i<t-1&&(e.snaps.length=i+1,e.snap=r),e.lastIdx=r.i,e.groundIdx=r.i,e.px=r.x,e.py=r.y,e.pz=r.z,e.heading=r.h,e.vx=r.vx,e.vz=r.vz,e.vy=0,e.grounded=!0,e.driftAmt=0,e.wasOffroad=!1,e.justLaunched=!1,e.scrapeLowMs=0,e.breakT=0,e.wallCool=0,e.crashT=0,e.crashAmp=0,e.scrapeT=0,e.kickT=0,e.driftHold=0,e.exitT=0,pd(e.rhythm),e.rhythmOut=ol(),e.rhythmExitLatch=0,e.oobMs=0,e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch,e.rescueIdx=r.i,e.rescueStreak++,e.raceMs+=tx}const Yu=8,Av=12;function qu(e){e.exitT=0,e.rhythm.boostT=0,e.rhythm.boostAccel=0,e.rhythmExitLatch=0,e.rhythmOut.boostAccel=0,e.rhythmOut.event==="exit"&&(e.rhythmOut.event="none",e.rhythmOut.quality=0,e.rhythmOut.grade="none")}function wv(e,t,n,i){const r={spd:Math.hypot(e.vx,e.vz),drifting:!1,sIdx:e.lastIdx,gIdx:e.groundIdx,pitch:e.pitch,launched:!1,landed:!1,finished:!0,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:e.grounded?"road":"air",landV:0,impact:0,scraping:!1,stuckMs:e.scrapeLowMs,wallHit:!1,wallSev:0,wallNx:0,wallNz:0,wallCool:e.wallCool,oobMs:e.oobMs};if(e.finished)return r;e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch,e.prevRaceMs=e.raceMs;let s=0;const a=e.lastIdx,o=(e.px-t.x[a])*t.nx[a]+(e.pz-t.z[a])*t.nz[a],c=o+(e.vx*t.nx[a]+e.vz*t.nz[a])*i,h=Math.abs(o)<=t.halfW&&Math.abs(c)<=t.halfW;h||qu(e);const u=Vt(n.steer,-1,1),d=Math.abs(u)>Math.abs(e.steer)?_x:Mx;e.steer+=Vt(u-e.steer,-d*i,d*i);const f=e.steer,m=Math.hypot(e.vx,e.vz),g=Math.sin(e.heading),_=Math.cos(e.heading),p=Math.atan2(e.vx*_-e.vz*g,Math.abs(e.vx*g+e.vz*_)+1e-6),l=!n.drift&&e.grounded&&m>=Jx&&Math.abs(f)>=tv;l?e.breakT+=i:e.breakT=0;const v=l&&(e.breakT>.45||Math.abs(p)>=ev),M=n.drift&&e.grounded&&m>=mx&&Math.abs(f)>=gx||v,x=e.driftAmt,R=Math.sin(e.heading),w=Math.cos(e.heading),b=Math.atan2(e.vx*w-e.vz*R,Math.abs(e.vx*R+e.vz*w)+1e-6),I=f*b<-.02?Vt(-f*b/.12,.35,1):0;QM(e.rhythm,Nu,{dt:i,steer:f,handbrake:n.drift,speed:m,slipDeg:b*180/Math.PI,grounded:e.grounded,onRoad:h},e.rhythmOut),e.rhythmOut.event==="exit"?e.rhythmExitLatch=1:e.rhythmExitLatch>0&&(e.rhythmExitLatch=Math.max(0,e.rhythmExitLatch-i));const E=e.grounded&&e.rhythmOut.phase==="sliding";E&&(e.driftAmt=Math.max(e.driftAmt,e.rhythmOut.slideBlend));const y=e.rhythmOut.event==="entered",L=e.rhythmOut.yawKick,U=e.rhythmOut.pendRate;if(M||E)e.driftAmt=Math.min(1,e.driftAmt+(v?nv:xx)*i);else if(e.driftAmt>0){const wt=Math.max(I,Math.abs(f)<.25?.6:0);e.driftAmt=Math.max(0,e.driftAmt-on(vx,Sx,wt)*i),x>.4&&e.driftAmt<=.4&&e.grounded&&h&&Math.abs(b)<Nx&&e.driftHold>.25&&e.rhythmExitLatch<=0&&(e.exitT=Ix)}e.driftAmt>.5?e.driftHold+=i:e.driftAmt<=0&&(e.driftHold=0),e.exitT>0&&(e.exitT=Math.max(0,e.exitT-i));const N=ju(e,t,i);e.lastIdx=N;const k=Math.min(N+Yu,t.n-1),V=Math.max(N-Yu,0),D=Math.min(N+1,t.n-1),P=Math.max(N-1,0),Q=(t.y[D]-t.y[P])/di(t,P,D),ht=(t.y[k]-t.y[N])/di(t,N,k),yt=(t.y[N]-t.y[V])/di(t,V,N),zt=(ht-yt)/(di(t,N,k)+di(t,V,N)),Jt=e.px-t.x[N],q=e.pz-t.z[N],et=Jt*t.nx[N]+q*t.nz[N],lt=Math.abs(et)>t.halfW;let nt=Math.hypot(e.vx,e.vz);const Rt=e.driftAmt>.4;let Lt=!1,Ft=!1,ae=0,Gt=0,le=!1;if(e.grounded){const wt=Math.min(Math.max(nt,8)/10,1),jt=nt<=30?1:Math.max(.3+.08*Vt((nt-100)/40,0,1),1-(nt-30)/95),me=on(2.3*jt,1.9,e.driftAmt)*wt;e.heading-=f*me*i;const ie=Math.abs(et)>t.halfW+.2;if(y&&!ie&&(e.kickT=yx,e.heading+=L),ie||(e.heading+=U*i),e.kickT>0&&(e.kickT=Math.max(0,e.kickT-i)),e.crashT>0&&(e.heading+=e.crashAmp*Math.sin(e.crashT*25)*i,e.crashT=Math.max(0,e.crashT-i),e.crashT<=0&&(e.crashAmp=0)),l&&e.driftAmt<1){const it=e.breakT>.45?.35:.1+Math.min(e.breakT,.45)*.55;e.heading+=Math.sin(e.raceMs*.045)*iv*it*i}const Ce=Math.sin(e.heading),Le=Math.cos(e.heading);let he=e.vx*Ce+e.vz*Le,Ue=e.vx*Le-e.vz*Ce;lt&&!e.wasOffroad&&(he*=.92),e.wasOffroad=lt,s=e.rhythm.boostT>0?e.rhythm.boostAccel:0;const un=lt?fx:s>0?ya:Rt?dx:gs,hn=e.crashT>0?Math.min(Math.abs(e.crashAmp)/Wu,1):0,Ai=s>0?0:e.exitT>0?Dx:0,ii=!lt&&(s>0||e.exitT>0)?lx:0,wi=s>0||e.exitT>0,zs=!lt&&!wi?Fu+(1-Fu)*Math.min(Math.max(he,0)/ux,1):1,Ja=(lt?hx:cx*zs+ii+Ai+s)*(1-Qx*hn);he<un&&(he=Math.min(un,he+Ja*i)),s<=0&&e.exitT<=0&&!lt&&he>gs&&(he=gs+(he-gs)*Math.exp(-2*i)),x<.15&&e.driftAmt>=.15&&(he*=Tx);const or=Math.abs(et)>t.halfW+1,to=!or&&e.driftAmt>.5?Math.min(Math.max(e.driftHold-Ou,0)*bx,Rx):0,B=((lt?px:on(9,4.8,e.driftAmt))+(lt||or?0:(Cx*I-to)*e.driftAmt))*(e.kickT>0&&!or?Ex:1);Ue*=Math.exp(-B*i);const X=Math.atan2(Ue,Math.abs(he)+1e-6),W=Math.abs(X);let z=0;if(W>Bu&&(z+=Fx*(W-Bu)),W>zu&&(z+=Ux*(W-zu)),z>0&&(he*=Math.exp(-z*(lt||or?1:1-Lx*I)*i)),e.driftAmt>.5){const it=Math.min(Math.max(e.driftHold-Ou,0)*Ax,wx);he*=Math.exp(-(Px+it)*i)}if(lt&&(he*=Math.exp(-.5*i)),e.vx=Ce*he+Le*Ue,e.vz=Le*he-Ce*Ue,s>0){const it=Math.hypot(e.vx,e.vz);if(it>ya){const mt=ya/it;e.vx*=mt,e.vz*=mt}}nt=Math.hypot(e.vx,e.vz),e.approach.push(Q),e.approach.length>Av&&e.approach.shift();const J=Math.hypot(e.vx,e.vz);if(!lt&&J>ix&&-zt*J*J>nx){let it=.08;for(const mt of e.approach)mt>it&&(it=mt);e.vy=Vt(J*it,rx,sx),e.grounded=!1,e.justLaunched=!0,e.airSteps=0,Lt=!0}}else e.heading-=u*1.1*i,e.vy-=ex*i;e.px+=e.vx*i,e.pz+=e.vz*i;const F=yv(t,e.px,e.pz);e.groundIdx=F;const Re=(e.px-t.x[F])*t.nx[F]+(e.pz-t.z[F])*t.nz[F],Bt=zr(t.y[F],Re,t.halfW)+.2;if(Math.abs(Re)>t.halfW&&qu(e),e.grounded)if(e.py=Bt,Math.abs(Re)>t.halfW){const wt=Math.min(F+1,t.n-1),jt=Math.max(F-1,0),me=(t.y[wt]-t.y[jt])/di(t,jt,wt),ie=Math.sin(e.heading),Ce=Math.cos(e.heading),Le=1.5,he=(ie*t.tx[F]+Ce*t.tz[F])*Le,Ue=(ie*t.nx[F]+Ce*t.nz[F])*Le,un=zr(t.y[F]+me*he,Re+Ue,t.halfW),hn=zr(t.y[F]-me*he,Re-Ue,t.halfW);e.pitch=Math.atan(Vt((un-hn)/(2*Le),-.5,.5))}else e.pitch=Math.atan(Vt(Q,-.5,.5));else e.py+=e.vy*i,e.airSteps++,!e.justLaunched&&e.vy<=0&&e.py<=Bt&&(ae=e.vy,e.py=Bt,e.grounded=!0,e.vy=0,Ft=!0,e.airSteps>1&&(e.rhythm.slideBlend=Math.max(0,e.rhythm.slideBlend-Nu.slideRelease*e.airSteps*i))),e.pitch=Vt(Math.atan2(e.vy,Math.max(Math.hypot(e.vx,e.vz),1)),-.6,.6);e.justLaunched=!1;const gt=ju(e,t,i);e.lastIdx=gt;const bt=e.px-t.x[gt],ne=e.pz-t.z[gt],Et=bt*t.nx[gt]+ne*t.nz[gt],A=Yx(t.halfW);e.wallCool=Math.max(0,e.wallCool-i);let S=!1,H=0,$=0,Z=0;const Y=e.scrapeT<=0,xt=Et>=0?1:-1,ot=e.px-t.x[gt],dt=e.pz-t.z[gt],Ht=t.cum?Vt(t.cum[gt]+ot*t.tx[gt]+dt*t.tz[gt],0,t.barrier?t.barrier.length:t.cum[t.cum.length-1]):0,tt=t.barrier&&t.cum?rl(t.barrier,Ht,xt):!0,pt=t.barrier!=null&&Math.abs(Et)-A>qx;if(Math.abs(Et)>A&&tt&&!pt){const wt=Math.abs(Et)-A,jt=Math.sign(Et);e.px-=t.nx[gt]*jt*wt,e.pz-=t.nz[gt]*jt*wt,$=-t.nx[gt]*jt,Z=-t.nz[gt]*jt;const me=e.vx*t.nx[gt]+e.vz*t.nz[gt],ie=me*jt;if(ie>0){e.vx-=t.nx[gt]*me,e.vz-=t.nz[gt]*me;const Ue=Y&&ie<=Tr?Math.max(ie,wt*12):ie;if(Ue>Tr&&e.wallCool<=0&&(Y||ie>2*Tr)){const un=Vt(kx+Ue*Gx,0,Hx),hn=Vt((Ue-Tr)/$x,0,1),Ai=hn*hn*(3-2*hn),ii=Vt(Tr*ku,0,Gu),wi=on(ii,un,Ai);e.vx*=1-wi,e.vz*=1-wi,e.vx-=t.nx[gt]*jt*Ue*Vu,e.vz-=t.nz[gt]*jt*Ue*Vu,H=Vt(Ue/25,0,1),Gt=H,S=!0,e.wallCool=Kx,e.crashT=Zx*(Hu+(1-Hu)*Ai),e.crashAmp=jt*Wu*H}else if(ie<=Tr&&Y){const un=Vt(ie*ku,0,Gu);e.vx*=1-un,e.vz*=1-un,H=Vt(ie/25,0,1)}else H=Vt(ie/25,0,1)}e.scrapeT+=i;const Ce=Vt(e.scrapeT/Bx,0,1),Le=f*jt<-.05,he=Math.exp(-(Le?zx:Ox)*Ce*i);e.vx*=he,e.vz*=he,le=!0,nt=Math.hypot(e.vx,e.vz)}else e.scrapeT=0;{const wt=(e.px-t.x[gt])*t.nx[gt]+(e.pz-t.z[gt])*t.nz[gt];Math.abs(wt)>t.halfW+pv?e.oobMs+=i*1e3:e.oobMs=Math.max(0,e.oobMs-mv*i*1e3)}{const wt=e.px-t.x[0],jt=e.pz-t.z[0],me=wt*t.tx[0]+jt*t.tz[0];if(me<-3&&wt*wt+jt*jt<Xu*Xu){e.px-=t.tx[0]*(me+3),e.pz-=t.tz[0]*(me+3);const ie=e.vx*t.tx[0]+e.vz*t.tz[0];ie<0&&(e.vx-=t.tx[0]*ie,e.vz-=t.tz[0]*ie)}}const Mt=e.lastIdx;e.snapTimer+=i;const Ct=Math.hypot(e.vx,e.vz),ft=Math.sin(e.heading),kt=Math.cos(e.heading),Nt=Math.abs(Math.atan2(e.vx*kt-e.vz*ft,Math.abs(e.vx*ft+e.vz*kt)+1e-6)),te=(e.px-t.x[Mt])*t.nx[Mt]+(e.pz-t.z[Mt])*t.nz[Mt],O=te>=0?1:-1,at=(e.vx*t.nx[Mt]+e.vz*t.nz[Mt])*O,j=Math.abs(Ea(e.heading-t.yaw[Mt])),K=e.grounded&&t.halfW-Math.abs(te)>=ov&&Ct>=sv&&Nt<=av&&j<=cv&&at<=lv&&e.scrapeT<=0&&e.crashT<=0&&Mt<=t.n-1-uv;if(e.snapTimer>.75&&K&&(e.rescueStreak<=0||Mt>=e.rescueIdx+dv)){e.snapTimer=0;const wt={i:Mt,x:e.px,y:e.py,z:e.pz,h:e.heading,vx:e.vx,vz:e.vz};for(e.snap=wt,e.snaps.push(wt);e.snaps.length>hv+1;)e.snaps.splice(1,1);e.rescueStreak=0}let ut=!1;{const wt=t.n-1,jt=(e.px-t.x[gt])*t.nx[gt]+(e.pz-t.z[gt])*t.nz[gt],me=Math.abs(jt)<=t.halfW,ie=(e.px-t.x[wt])*t.tx[wt]+(e.pz-t.z[wt])*t.tz[wt];if(me&&e.prevFinD<=0&&ie>0&&e.prevRaceMs+i*1e3>ax&&e.lastIdx>=t.n-fv){const Ce=Vt(-e.prevFinD/(ie-e.prevFinD||1e-9),0,1);e.raceMs=e.prevRaceMs+Ce*i*1e3,e.px=e.px0+(e.px-e.px0)*Ce,e.py=e.py0+(e.py-e.py0)*Ce,e.pz=e.pz0+(e.pz-e.pz0)*Ce,e.heading=e.h0+Ea(e.heading-e.h0)*Ce,e.rec.p.push([e.px,e.py,e.pz,e.heading]),e.rec.ts.push(e.raceMs),e.rec.t=Math.round(e.raceMs),e.finished=!0,e.finishCount++,e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch,ut=!0}else e.raceMs=e.prevRaceMs+i*1e3;e.prevFinD=e.prevFinD<=0&&ie>0?e.prevFinD:ie}e.finished||e.raceMs-e.recLastMs>=JM-1e-6&&(e.recLastMs=e.raceMs,e.rec.p.push([e.px,e.py,e.pz,e.heading]),e.rec.ts.push(e.raceMs)),nt=Math.hypot(e.vx,e.vz),le&&nt<rv?e.scrapeLowMs+=i*1e3:e.scrapeLowMs=0;const ct=Math.sin(e.heading),Dt=Math.cos(e.heading),ue=e.vx*ct+e.vz*Dt,Te=e.vx*Dt-e.vz*ct;return{spd:nt,drifting:Rt,sIdx:Mt,gIdx:e.groundIdx,pitch:e.pitch,launched:Lt,landed:Ft,finished:ut,fSpeed:ue,lSpeed:Te,slip:Math.atan2(Te,Math.abs(ue)+1e-6),yawRate:Ea(e.heading-e.h0)/i,offroad:lt,surface:e.grounded?lt?"offroad":"road":"air",landV:ae,impact:Gt,scraping:le,stuckMs:e.scrapeLowMs,wallHit:S,wallSev:H,wallNx:$,wallNz:Z,wallCool:e.wallCool,driftPhase:e.rhythmOut.phase,rhythmBoost:s,exitQuality:e.rhythm.lastQuality,pendAmp:e.rhythm.pendAmp,kickT:e.kickT,chainArmed:e.rhythm.chainT>0&&e.rhythm.chainDir!==0,oobMs:e.oobMs}}function bv(e,t){const n=Vt(t,0,1);return{x:on(e.px0,e.px,n),y:on(e.py0,e.py,n),z:on(e.pz0,e.pz,n),h:e.h0+Ea(e.heading-e.h0)*n,pitch:on(e.pitch0,e.pitch,n)}}function Rv(e,t,n){return t>0?n:e}function Cv(e){if(e.length===0)return[];const t=[.25,.5,.75],n=[];for(const i of t){const r=Math.min(e.length-1,Math.max(0,Math.floor(e.length*i))),s=e[r].endS;(n.length===0||s>n[n.length-1]+1)&&n.push(s)}return n}function Lv(e,t){let n=0,i=1/0;for(let r=0;r<e.length;r++){const s=Math.abs(e[r]-t);s<i&&(i=s,n=r)}return n}function Uc(e,t,n){if(!e||e.p.length<2||e.ts.length!==e.p.length)return-1;let i=0,r=1/0;for(let a=0;a<e.p.length;a++){const o=e.p[a][0]-t,c=e.p[a][2]-n,h=o*o+c*c;h<r&&(r=h,i=a)}const s=e.ts[i];return typeof s=="number"&&isFinite(s)&&s>=0?s:-1}function Dv(e){const t=e/1e3,n=t<0?"-":"+",i=Math.abs(t);return`${n}${i.toFixed(2)}`}function $u(e,t,n){if(!isFinite(e)||!isFinite(t)||t<0)return"";const i=Math.round(Math.abs(e)/1e3*t);return`${Dv(e)} · ${i}m vs ${n}`}const Ku=.1;function Iv(e){return!isFinite(e)||e<0?0:e>Ku?Ku:e}const Nv=11.5,Zu=2,Pv=2400,Uv=3850,Fv=140,Ov=240,zv=40,Bv=.3,Ta=40,kv=11,Gv=14,Hv=8,Vv=10,Wv=2,Xv=3;function jv(){const e=(n,i,r,s)=>({kind:"corner",corner:{dir:n,r0:i,r1:r,angleDeg:s}}),t=n=>({kind:"straight",len:n});return[t(180),e("R",150,150,48),t(90),e("L",100,100,118),t(90),e("R",72,72,96),t(140),e("L",78,78,162),t(95),e("R",108,108,122),t(240),e("L",155,155,44),t(85),e("R",76,76,100),t(90),e("L",112,112,120),t(130),e("R",80,42,96),t(240),e("L",185,185,28),t(90),e("R",80,80,158),t(85),e("L",98,98,112),t(190)]}const Ar=[{cls:"hairpin",rMin:72,rMax:86,aMin:150,aMax:170},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"tight",rMin:62,rMax:78,aMin:85,aMax:110},{cls:"tight",rMin:62,rMax:78,aMin:85,aMax:110},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"dec",rMin:78,rMax:85,aMin:88,aMax:102},{cls:"sweep",rMin:145,rMax:170,aMin:40,aMax:55},{cls:"sweep",rMin:145,rMax:170,aMin:40,aMax:55},{cls:"kink",rMin:180,rMax:200,aMin:24,aMax:32}];function Yv(e,t){return e==="hairpin"?130+t()*30:e==="tight"?115+t()*25:e==="dec"||e==="drift"?110+t()*25:e==="sweep"?65+t()*20:e==="kink"?60+t()*20:100+t()*25}function Qu(e,t){const n=jv();if(t>=Ta)return n;const i=Xa(Wa(`canyon-${e}#${t}`)),r=D=>D[Math.floor(i()*D.length)],s=Ar.map((D,P)=>D.cls==="sweep"?P:-1).filter(D=>D>=0),a=Ar.map((D,P)=>D.cls==="sweep"||D.cls==="kink"?P:-1).filter(D=>D>=0),o=Ar.findIndex(D=>D.cls==="dec"),c=Ar.map((D,P)=>D.cls==="hairpin"?P:-1).filter(D=>D>=0),h=Ar.map((D,P)=>P),u=(D,P)=>{const Q=r(P);return D.splice(D.indexOf(Q),1),Q},d=new Array(12).fill(-1);d[0]=u(h,s),d[11]=u(h,a.filter(D=>h.includes(D)));const f=2+Math.floor(i()*8);d[f]=o,h.splice(h.indexOf(o),1);for(const D of c){let P=2+Math.floor(i()*8),Q=0;for(;d[P]>=0&&Q++<20;)P=2+Math.floor(i()*8);d[P]>=0&&(P=d.indexOf(-1)),d[P]=D,h.splice(h.indexOf(D),1)}const m=d.map((D,P)=>D<0?P:-1).filter(D=>D>=0);for(let D=m.length-1;D>=0;D--)d[m[D]]=h.splice(Math.floor(i()*h.length),1)[0];const g=D=>Ar[d[D]],_=D=>{const P=g(D);return(P.aMin+P.aMax)/2*Math.PI/180},p=[];p.push(i()<.5?"L":"R");for(let D=1;D<12;D++)p.push(i()<.7?p[D-1]==="L"?"R":"L":p[D-1]);const l=()=>{let D=0;for(let P=0;P<12;P++)D+=(p[P]==="L"?1:-1)*_(P);return D};for(let D=0;D<32&&Math.abs(l())>40*Math.PI/180;D++){const P=1+Math.floor(i()*10),Q=Math.abs(l());p[P]=p[P]==="L"?"R":"L",Math.abs(l())>=Q&&(p[P]=p[P]==="L"?"R":"L")}p.includes("L")||(p[5]="L"),p.includes("R")||(p[6]="R");const v=[];v.push({kind:"straight",len:165+i()*25});const M=[];for(let D=0;D<12;D++){const P=g(D),Q=P.rMin+i()*(P.rMax-P.rMin),ht=P.aMin+i()*(P.aMax-P.aMin),yt=P.cls==="dec"?{dir:p[D],r0:Q,r1:Math.max(32,Q*(.5+i()*.08)),angleDeg:ht}:{dir:p[D],r0:Q,r1:Math.max(32,Q+(i()*8-4)),angleDeg:ht};v.push({kind:"corner",corner:yt}),D<11&&(M.push(v.length),v.push({kind:"straight",len:Yv(g(D+1).cls,i)}))}v.push({kind:"straight",len:175+i()*30});const x=d.indexOf(o),R=x===0?0:M[x-1],w=x===11?v.length-1:M[x],b=[[R,110],[w,120]];for(const D of c){const P=d.indexOf(D);P>0&&b.push([M[P-1],130])}for(let D=0;D<11;D++){const P=g(D+1);P.cls!=="hairpin"&&(P.cls!=="drift"&&P.cls!=="dec"&&P.cls!=="tight"||p[D+1]!==p[D]&&b.push([M[D],85]))}const I=new Set;for(let D=0;D<11;D++){const P=g(D+1);P.cls==="hairpin"||P.cls==="dec"||P.cls!=="drift"&&P.cls!=="tight"||p[D+1]!==p[D]&&I.add(M[D])}for(const[D,P]of b){const Q=v[D];Q.kind==="straight"&&Q.len<P&&(Q.len=P+i()*10)}const E=M.filter((D,P)=>{const Q=g(P+1).cls;return Q==="sweep"||Q==="kink"}),y=E.filter(D=>{const P=g(M.indexOf(D)).cls;return P==="sweep"||P==="kink"}),L=y.length>=2?y:E.length>=2?E:M,U=L[Math.floor(i()*L.length)];let C=L[Math.floor(i()*L.length)];for(;C===U;)C=L[Math.floor(i()*L.length)];for(const D of[U,C]){const P=v[D];P.kind==="straight"&&P.len<Ju&&(P.len=Ju+i()*20)}for(const D of I){if(D===U||D===C)continue;const P=v[D];P.kind==="straight"&&P.len>95&&(P.len=85+i()*10)}const N=D=>v[1+D*2].corner.dir,k=D=>v[2+D*2].len;let V=0;for(let D=0;D<11;D++)N(D)!==N(D+1)&&k(D)<=110&&V++;for(let D=0;D<11&&V<2;D++)if(N(D)===N(D+1)&&k(D)<=110){const P=v[1+(D+1)*2];P.corner.dir=P.corner.dir==="L"?"R":"L",V++}return v}function md(){return{climbTop:14,rollerAmp:.8,rollerLen:260,rollerPhase:0}}function qv(e,t){const n=Xa(Wa(`canyon-elev-${e}#${t}`));return{climbTop:10+n()*6,rollerAmp:.4+n()*.4,rollerLen:240+n()*80,rollerPhase:n()*Math.PI*2}}function $v(e,t){const n=Xa(Wa(`canyon-mark-${e}#${t}`));return[.26+n()*.08,.5+n()*.1,.74+n()*.08]}function Kv(e,t){return cl(e,t,md(),[.3,.55,.8])}const Zv=205,gd=4.5,Ju=245;function cl(e,t,n,i,r=gd,s=2){const a=[{x:0,z:0,s:0}];let o=0,c=0,h=0,u=0;const d=[];for(const M of e)if(M.kind==="straight"){d.push({a:u,b:u+M.len});let x=M.len;for(;x>1e-9;){const R=Math.min(Zu,x);o+=Math.sin(h)*R,c+=Math.cos(h)*R,u+=R,x-=R,a.push({x:o,z:c,s:u})}}else{const{dir:x,r0:R,r1:w,angleDeg:b}=M.corner,I=x==="L"?1:-1,E=b*Math.PI/180;let y=0;for(;y<E-1e-9;){const L=R+(w-R)*(y/E),U=Math.min(Zu/L,E-y),C=L*U;h+=I*U,o+=Math.sin(h)*C,c+=Math.cos(h)*C,u+=C,y+=U,a.push({x:o,z:c,s:u})}}const f=u,m=d.slice(1,-1).map((M,x)=>({r:M,len:M.b-M.a,k:x})).sort((M,x)=>x.len-M.len),_=m.slice(0,Math.max(1,Math.min(s,m.length))).map(M=>M.r).map((M,x)=>Math.max(M.b-Zv-t%3*5,M.a+40)),p=(M,x,R)=>{const w=Vt((R-M)/(x-M),0,1);return w*w*(3-2*w)},l=M=>{const x=f-350,R=6+(Vt(M,250,x)-250)/Math.max(x-250,1)*(n.climbTop-6)+Math.sin((Vt(M,250,x)-250)/n.rollerLen*Math.PI*2+n.rollerPhase)*n.rollerAmp,w=14-(Vt(M,x,f-150)-x)/200*7;let b=on(6,R,p(210,290,M));b=on(b,w,p(x-60,x+60,M)),b=on(b,7,p(f-260,f-140,M));for(const I of _){const E=(M-I)/18;b+=r*Math.exp(-E*E)}return b};return{points:a.map(M=>({x:M.x,y:l(M.s),z:M.z})),s:a.map(M=>M.s),crestS:_,straightRanges:d,landmarkS:i.map(M=>M*f)}}function Qv(e){const t=[0];for(let n=1;n<e.length;n++)t.push(t[n-1]+Math.hypot(e[n].x-e[n-1].x,e[n].z-e[n-1].z));return t}function Jv(e,t){const n=[];let i=e[0]+t;for(let r=1;r<e.length-1;r++)e[r]>=i&&(n.push(r),i=e[r]+t);return n}function Fc(e){const t=e.length,n=[0];for(let l=1;l<t;l++)n.push(n[l-1]+Math.hypot(e[l].x-e[l-1].x,e[l].z-e[l-1].z));const i=n[t-1],r=[];for(let l=0;l<t;l++){const v=e[Math.max(l-2,0)],M=e[Math.min(l+2,t-1)];r.push(Math.atan2(M.x-v.x,M.z-v.z))}const s=[r[0]];for(let l=1;l<t;l++){let v=r[l]-s[l-1];for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;s.push(s[l-1]+v)}const a=7,o=[];for(let l=0;l<t;l++){let v=0,M=0;for(let x=-a;x<=a;x++){const R=l+x;R>=0&&R<t&&(v+=s[R],M++)}o.push(v/M)}const c=new Array(t).fill(1/0);for(let l=1;l<t-1;l++){const v=n[l+1]-n[l-1],M=Math.abs(o[l+1]-o[l-1]);M>1e-6&&v>1e-9&&(c[l]=v/M)}const h=[];let u=0;const d=l=>c[l]<200;for(;u<t;){if(!d(u)){u++;continue}let l=u;for(;l<t&&d(l);)l++;let v=l;for(;v<t&&!d(v)&&(v<l||n[v]-n[l-1]<25);)v++;if(v<t&&d(v)&&n[v]-n[l-1]<25)for(l=v;l<t&&d(l);)l++;if(n[l-1]-n[u]>=30){const M=c.slice(u,l).filter(C=>isFinite(C)),x=M.slice().sort((C,N)=>C-N),R=x.length?x[Math.floor(x.length/2)]:1/0,w=Math.min(8,Math.floor(M.length/4)),b=M.slice(w,M.length-w),I=C=>{const N=C.slice().sort((k,V)=>k-V);return N.length?N[Math.floor(N.length/2)]:R},E=Math.max(1,Math.floor(b.length/3)),y=I(b.slice(0,E)),L=I(b.slice(-E));let U=0;for(let C=u;C<l-1;C++)U+=s[C+1]-s[C];h.push({startS:n[u],endS:n[l-1],dir:U>=0?"L":"R",medR:R,entryR:y,exitR:L,decreasing:L<.8*y})}u=l}let f=1/0;for(let l=0;l<t;l+=2)for(let v=l+150;v<t;v+=2){const M=Math.hypot(e[l].x-e[v].x,e[l].z-e[v].z);M<f&&(f=M)}let m=0,g=1/0,_=-1/0;for(let l=0;l<t;l++)if(g=Math.min(g,e[l].y),_=Math.max(_,e[l].y),l>0){const v=n[l]-n[l-1];v>1e-9&&(m=Math.max(m,Math.abs((e[l].y-e[l-1].y)/v)))}let p=0;for(let l=2;l<t-2;l++){const v=e[l].y;if(v<=e[l-1].y||v<=e[l+1].y||v<=e[l-2].y||v<=e[l+2].y)continue;let M=1/0;for(let b=-60;b<=60;b++){const I=l+b;I>=0&&I<t&&(M=Math.min(M,e[I].y))}if(v-M<2.5)continue;const x=(v+M)/2;let R=l,w=l;for(;R>0&&e[R-1].y>x;)R--;for(;w<t-1&&e[w+1].y>x;)w++;n[w]-n[R]<=70&&p++}return{length:i,n:t,events:h,clearance:f,maxGrade:m,elevMin:g,elevMax:_,crestCount:p}}function Oc(e){let t=2166136261;const n=i=>{const r=Math.round(i*1e3);t^=r&65535,t=Math.imul(t,16777619),t^=r>>>16&65535,t=Math.imul(t,16777619)};for(const i of e)n(i.x),n(i.y),n(i.z);return(t>>>0).toString(16)}const tS=140,eS=112;function zc(e){const t=e.length,n=[0];for(let o=1;o<t;o++)n.push(n[o-1]+Math.hypot(e[o].x-e[o-1].x,e[o].z-e[o-1].z));const i=[];for(let o=0;o<t;o++){const c=e[Math.max(o-3,0)],h=e[Math.min(o+3,t-1)];i.push(Math.atan2(h.x-c.x,h.z-c.z))}const r=[];for(let o=0;o<t;o++){const c=Math.max(o-3,0),h=Math.min(o+3,t-1);let u=Math.abs(i[h]-i[c]);for(;u>Math.PI;)u=2*Math.PI-u;const f=Math.max(n[h]-n[c],1e-6)/Math.max(u,1e-6),m=f<=130?eS:tS,g=f<=130?212:122;r.push(Math.min(m,Math.sqrt(g*Math.min(f,1e6))))}const s=r.slice();s[0]=Math.min(s[0],10);for(let o=1;o<t;o++){const c=Math.max(n[o]-n[o-1],1e-6);s[o]=Math.min(r[o],Math.sqrt(s[o-1]*s[o-1]+260*c))}for(let o=t-2;o>=0;o--){const c=Math.max(n[o+1]-n[o],1e-6);s[o]=Math.min(s[o],Math.sqrt(s[o+1]*s[o+1]+200*c))}let a=0;for(let o=1;o<t;o++){const c=n[o]-n[o-1];a+=2*c/Math.max(s[o]+s[o-1],1e-6)}return a}function nS(e,t){if(e.length<Pv||e.length>Uv)return!1;const n=e.events;if(n.length<kv||n.length>Gv)return!1;const i=n.filter(a=>a.medR>=45&&a.medR<=130);if(i.length<Hv||i.length>Vv)return!1;const r=n.filter(a=>a.medR>130&&a.medR<=175);if(r.length<Wv||r.length>Xv||!n.some(a=>a.dir==="L")||!n.some(a=>a.dir==="R"))return!1;let s=0;for(let a=1;a<n.length;a++)n[a].dir!==n[a-1].dir&&n[a].startS-n[a-1].endS<=110&&s++;if(s<2||!n.some(a=>a.decreasing)||n[0].startS<Fv||n[0].startS>Ov||e.clearance<zv||e.maxGrade>Bv||e.crestCount<1||e.crestCount>2)return!1;for(const a of t.crestS){const o=n.find(c=>c.startS>a);if(!o){if(e.length-(a+65)<60)return!1;continue}if(o.startS-(a+65)<60||!(o.medR>130))return!1}return!0}function iS(e){for(let i=0;i<Ta;i++){const r=cl(Qu(e,i),i,qv(e,i),$v(e,i)),s=Fc(r.points);if(nS(s,r))return{points:r.points,stats:s,attempt:i,fallback:!1,crestS:r.crestS,estTimeS:zc(r.points),checksum:Oc(r.points),landmarkS:r.landmarkS}}const t=Kv(Qu(e,Ta),0),n=Fc(t.points);return{points:t.points,stats:n,attempt:Ta,fallback:!0,crestS:t.crestS,estTimeS:zc(t.points),checksum:Oc(t.points),landmarkS:t.landmarkS}}const rS=2,sS={practice:"eyJ2IjozLCJ0Ijo5NTQwLCJwIjpbWzAsNiwwLDBdLFswLDYsMS41LDBdLFswLDYsNC41LDBdLFswLDYsNy41LDBdLFswLDYsMTIsMF0sWzAsNiwxNy41LDBdLFswLDYsMjQuNSwwXSxbMCw2LDMyLjUsMF0sWzAsNiw0Mi41LDBdLFswLDYsNTMuNSwwXSxbMCw2LDY2LjUsMF0sWzAsNiw4MC41LDBdLFswLDYsOTYuNSwwXSxbMCw2LDExNCwtMC4wMV0sWy0wLjUsNiwxMzEuNSwtMC4wNl0sWy0xLDYsMTQ4LjUsLTAuMTRdLFstMi41LDYsMTY1LC0wLjI0XSxbLTUsNiwxODAuNSwtMC4zNF0sWy05LDYsMTk1LC0wLjQ3XSxbLTE0LjUsNiwyMDksLTAuNl0sWy0yMS41LDYsMjIyLC0wLjc2XSxbLTMwLjUsNiwyMzQuNSwtMC45Nl0sWy00Miw2LjUsMjQ1LC0xLjE3XSxbLTU0LjUsNywyNTMuNSwtMS4zNV0sWy02OSw3LjUsMjU5LC0xLjUxXSxbLTgzLjUsOCwyNjIuNSwtMS42M10sWy05OSw4LDI2NCwtMS43M10sWy0xMTQsOC41LDI2My41LC0xLjc5XSxbLTEyOC41LDguNSwyNjEuNSwtMS44M10sWy0xNDUsOC41LDI1Ny41LC0xLjk4XSxbLTE2MSw4LjUsMjUyLjUsLTIuMDVdLFstMTc3LDguNSwyNDYsLTEuOTddLFstMTk0LDguNSwyMzksLTEuOTFdLFstMjEyLjUsOC41LDIzMiwtMS43Ml0sWy0yMzIuNSw5LDIyNiwtMS41OF0sWy0yNTQsOS41LDIyMi41LC0xLjQyXSxbLTI3NC41LDEwLjUsMjIyLC0xLjMyXSxbLTI5MywxMSwyMjMuNSwtMS4yOV0sWy0zMDkuNSwxMS41LDIyNiwtMS4yNF0sWy0zMjUsMTIsMjI5LjUsLTEuMTJdLFstMzM5LDEyLjUsMjM0LjUsLTAuOTFdLFstMzUyLDEyLjUsMjQxLC0wLjY3XSxbLTM2My41LDEyLjUsMjUwLC0wLjQ3XSxbLTM3Mi41LDEyLjUsMjYwLjUsLTAuMzJdLFstMzc5LjUsMTIuNSwyNzEuNSwtMC4yXSxbLTM4NC41LDEyLjUsMjg0LC0wLjA5XSxbLTM4OCwxMi41LDI5Ni41LC0wLjAxXSxbLTM5MCwxMi41LDMxMCwwLjA1XSxbLTM5MC41LDEyLjUsMzIzLjUsMC4xXSxbLTM5MC41LDEzLDMzNywwLjE1XSxbLTM4OS41LDEzLjUsMzUxLDAuMThdLFstMzg4LDEzLjUsMzY1LDAuMThdLFstMzg2LDE0LjUsMzc5LDAuMTddLFstMzg0LDE0LjUsMzkzLjUsMC4xNl0sWy0zODIsMTQuNSw0MDcuNSwwLjE0XSxbLTM4MCwxNCw0MjEuNSwwLjExXSxbLTM3OCwxMyw0MzYsMC4wOF0sWy0zNzYsMTEuNSw0NTAsMC4wNF0sWy0zNzQuNSwxMSw0NjYsLTAuMDJdLFstMzc0LjUsMTAsNDgzLC0wLjE0XSxbLTM3Ni41LDksNTAyLC0wLjI5XSxbLTM4MSw4LDUyMS41LC0wLjQyXSxbLTM4Ny41LDcuNSw1NDIsLTAuNTJdLFstMzk2LDcsNTYxLC0wLjU5XSxbLTQwNS41LDcsNTc4LC0wLjYxXSxbLTQxNS41LDcsNTk0LC0wLjY0XSxbLTQyNi41LDcsNjA5LC0wLjY3XSxbLTQzOCw3LDYyNCwtMC43XSxbLTQ0OS41LDcsNjM4LjUsLTAuNzJdLFstNDYyLDcsNjUyLjUsLTAuNzNdLFstNDc0LjUsNyw2NjYuNSwtMC43NV0sWy00ODcsNyw2ODAsLTAuNzddLFstNDk0LDcsNjg3LjUsLTAuOF1dLCJ0cyI6WzAsMTMzLDI2Nyw0MDAsNTMzLDY2Nyw4MDAsOTMzLDEwNjcsMTIwMCwxMzMzLDE0NjcsMTYwMCwxNzMzLDE4NjcsMjAwMCwyMTMzLDIyNjcsMjQwMCwyNTMzLDI2NjcsMjgwMCwyOTMzLDMwNjcsMzIwMCwzMzMzLDM0NjcsMzYwMCwzNzMzLDM4NjcsNDAwMCw0MTMzLDQyNjcsNDQwMCw0NTMzLDQ2NjcsNDgwMCw0OTMzLDUwNjcsNTIwMCw1MzMzLDU0NjcsNTYwMCw1NzMzLDU4NjcsNjAwMCw2MTMzLDYyNjcsNjQwMCw2NTMzLDY2NjcsNjgwMCw2OTMzLDcwNjcsNzIwMCw3MzMzLDc0NjcsNzYwMCw3NzMzLDc4NjcsODAwMCw4MTMzLDgyNjcsODQwMCw4NTMzLDg2NjcsODgwMCw4OTMzLDkwNjcsOTIwMCw5MzMzLDk0NjcsOTU0MF0sInRyYWNrIjp7ImRheSI6IjIwMjYtMDEtMDEiLCJjb3Vyc2UiOiIyOWU5ZmMzYiIsImdlbiI6Mn19",benchmark:"eyJ2IjozLCJ0IjoxNjA4OSwicCI6W1swLDYsMCwwXSxbMCw2LDEuNSwwXSxbMCw2LDQuNSwwXSxbMCw2LDcuNSwwXSxbMCw2LDEyLDBdLFswLDYsMTcuNSwwXSxbMCw2LDI0LjUsMF0sWzAsNiwzMi41LDBdLFswLDYsNDIuNSwwXSxbMCw2LDUzLjUsMF0sWzAsNiw2Ni41LDBdLFswLDYsODAuNSwwXSxbMCw2LDk2LjUsMF0sWzAsNiwxMTQsMF0sWzAsNiwxMzIsMC4wM10sWzAuNSw2LDE1MCwwLjA4XSxbMS41LDYsMTY3LDAuMTddLFszLjUsNiwxODMuNSwwLjI2XSxbNi41LDYsMTk4LjUsMC4zN10sWzExLDYsMjEzLDAuNDldLFsxNi41LDYsMjI3LDAuNjFdLFsyNCw2LDI0MCwwLjc1XSxbMzMsNi41LDI1Mi41LDAuOTJdLFs0My41LDcsMjYzLDEuMTFdLFs1Niw3LDI3MiwxLjI5XSxbNzAsNy41LDI3OC41LDEuNDZdLFs4NSw3LjUsMjgyLjUsMS42XSxbMTAwLDcuNSwyODQuNSwxLjczXSxbMTE1LDcuNSwyODQuNSwxLjgyXSxbMTMwLDcsMjgyLjUsMS45XSxbMTQ0LjUsNywyNzksMS45NF0sWzE1OSw3LDI3NC41LDIuMDldLFsxNzMsNi41LDI2OC41LDIuMTVdLFsxODcsNi41LDI2MSwyLjA4XSxbMjAyLDcsMjUzLDJdLFsyMTksNywyNDUsMS43OF0sWzIzNyw3LjUsMjM3LjUsMS42Ml0sWzI1Ni41LDgsMjMzLjUsMS40NV0sWzI3NS41LDguNSwyMzIsMS4zNF0sWzI5Myw5LDIzMi41LDEuMjldLFszMDguNSw5LDIzNC41LDEuMjFdLFszMjMsOSwyMzgsMS4wNV0sWzMzNyw5LDI0MywwLjgzXSxbMzQ5LjUsOSwyNTAuNSwwLjYyXSxbMzYwLDksMjU5LjUsMC40NF0sWzM2OC41LDksMjcwLDAuM10sWzM3NC41LDguNSwyODEuNSwwLjE4XSxbMzc5LjUsOC41LDI5My41LDAuMDldLFszODIuNSw4LjUsMzA2LjUsMC4wMV0sWzM4NC41LDguNSwzMTkuNSwtMC4wNl0sWzM4NSw4LjUsMzMzLC0wLjFdLFszODUsOSwzNDYuNSwtMC4xNF0sWzM4NCwxMC41LDM2MC41LC0wLjE2XSxbMzgyLjUsMTIsMzc0LjUsLTAuMTddLFszODEsMTIuNSwzODguNSwtMC4xN10sWzM3OS41LDEyLjUsNDAyLjUsLTAuMTddLFszNzgsMTEuNSw0MTYuNSwtMC4xNl0sWzM3Ni41LDEwLjUsNDMwLjUsLTAuMTVdLFszNzUsMTAuNSw0NDQuNSwtMC4xNV0sWzM3MywxMSw0NTksLTAuMTNdLFszNzEsMTEsNDc0LC0wLjEyXSxbMzY5LDExLDQ4OC41LC0wLjExXSxbMzY3LjUsMTEsNTAzLjUsLTAuMV0sWzM2NiwxMC41LDUxOCwtMC4wOF0sWzM2NC41LDEwLjUsNTMzLC0wLjA2XSxbMzYzLjUsMTAuNSw1NDcuNSwtMC4wMl0sWzM2Mi41LDEwLDU2Mi41LDAuMDNdLFszNjIuNSwxMCw1NzcuNSwwLjA5XSxbMzYzLjUsMTAsNTkyLjUsMC4xN10sWzM2NSwxMC41LDYwNywwLjI1XSxbMzY3LjUsMTAuNSw2MjIsMC4zM10sWzM3MS41LDExLDYzNiwwLjQxXSxbMzc2LjUsMTEuNSw2NTAuNSwwLjQ4XSxbMzgyLDExLjUsNjY0LDAuNTRdLFszODksMTIsNjc3LjUsMC41OV0sWzM5Ni41LDEyLjUsNjkwLjUsMC42Ml0sWzQwNiwxMi41LDcwNC41LDAuNjNdLFs0MTYuNSwxMi41LDcxOS41LDAuNjJdLFs0MjcuNSwxMi41LDczNC41LDAuNThdLFs0MzcuNSwxMi41LDc0OS41LDAuNDhdLFs0NDYsMTIuNSw3NjQuNSwwLjMzXSxbNDUyLjUsMTIsNzc5LjUsMC4yMV0sWzQ1Ny41LDEyLDc5Mi41LDAuMV0sWzQ2MS41LDEyLDgwMy41LC0wLjA0XSxbNDYzLDEyLDgxNC41LC0wLjIyXSxbNDYyLDEyLDgyNiwtMC40NV0sWzQ1OSwxMiw4MzcuNSwtMC42OF0sWzQ1MywxMi41LDg0OCwtMC44NV0sWzQ0NS41LDEyLjUsODU3LjUsLTAuOTZdLFs0MzYsMTMsODY2LjUsLTEuMDJdLFs0MjQsMTMuNSw4NzQuNSwtMS4wN10sWzQwOSwxNCw4ODMsLTEuMV0sWzM5Mi41LDE0LDg5MiwtMS4xM10sWzM3NiwxNC41LDkwMCwtMS4xNV0sWzM1OSwxNC41LDkwNy41LC0xLjE2XSxbMzQyLDE0LjUsOTE1LjUsLTEuMTVdLFszMjQuNSwxNCw5MjMsLTEuMTRdLFszMDgsMTQsOTMwLjUsLTEuMTJdLFsyOTIsMTQsOTM4LjUsLTEuMDhdLFsyNzYuNSwxMy41LDk0Ni41LC0xLjAyXSxbMjYyLjUsMTMsOTU0LjUsLTAuOTVdLFsyNDksMTIuNSw5NjMsLTAuOV0sWzIzNywxMiw5NzIsLTAuODVdLFsyMjQuNSwxMSw5ODIuNSwtMC42NF0sWzIxMy41LDEwLjUsOTkzLjUsLTAuNDhdLFsyMDUsMTAsMTAwNiwtMC40MV0sWzE5OCw5LDEwMTksLTAuNDVdLFsxOTEsOCwxMDMyLjUsLTAuNTJdLFsxODQsNy41LDEwNDUuNSwtMC41Nl0sWzE3Ni41LDcuNSwxMDU4LC0wLjU0XSxbMTY5LDcsMTA3MSwtMC40OV0sWzE2MS41LDcsMTA4NCwtMC40NF0sWzE1NSw3LDEwOTcsLTAuNDJdLFsxNDguNSw3LDExMTAuNSwtMC40Ml0sWzE0Miw3LDExMjQsLTAuNDNdLFsxMzYsNywxMTM3LjUsLTAuNDNdLFsxMjkuNSw3LDExNTEsLTAuNDJdLFsxMjMuNSw3LDExNjQuNSwtMC40MV0sWzExNy41LDcsMTE3OCwtMC40XSxbMTExLjUsNywxMTkxLjUsLTAuMzldLFsxMDYsNywxMjA1LC0wLjM4XSxbMTAyLDcsMTIxNCwtMC4zNV1dLCJ0cyI6WzAsMTMzLDI2Nyw0MDAsNTMzLDY2Nyw4MDAsOTMzLDEwNjcsMTIwMCwxMzMzLDE0NjcsMTYwMCwxNzMzLDE4NjcsMjAwMCwyMTMzLDIyNjcsMjQwMCwyNTMzLDI2NjcsMjgwMCwyOTMzLDMwNjcsMzIwMCwzMzMzLDM0NjcsMzYwMCwzNzMzLDM4NjcsNDAwMCw0MTMzLDQyNjcsNDQwMCw0NTMzLDQ2NjcsNDgwMCw0OTMzLDUwNjcsNTIwMCw1MzMzLDU0NjcsNTYwMCw1NzMzLDU4NjcsNjAwMCw2MTMzLDYyNjcsNjQwMCw2NTMzLDY2NjcsNjgwMCw2OTMzLDcwNjcsNzIwMCw3MzMzLDc0NjcsNzYwMCw3NzMzLDc4NjcsODAwMCw4MTMzLDgyNjcsODQwMCw4NTMzLDg2NjcsODgwMCw4OTMzLDkwNjcsOTIwMCw5MzMzLDk0NjcsOTYwMCw5NzMzLDk4NjcsMTAwMDAsMTAxMzMsMTAyNjcsMTA0MDAsMTA1MzMsMTA2NjcsMTA4MDAsMTA5MzMsMTEwNjcsMTEyMDAsMTEzMzMsMTE0NjcsMTE2MDAsMTE3MzMsMTE4NjcsMTIwMDAsMTIxMzMsMTIyNjcsMTI0MDAsMTI1MzMsMTI2NjcsMTI4MDAsMTI5MzMsMTMwNjcsMTMyMDAsMTMzMzMsMTM0NjcsMTM2MDAsMTM3MzMsMTM4NjcsMTQwMDAsMTQxMzMsMTQyNjcsMTQ0MDAsMTQ1MzMsMTQ2NjcsMTQ4MDAsMTQ5MzMsMTUwNjcsMTUyMDAsMTUzMzMsMTU0NjcsMTU2MDAsMTU3MzMsMTU4NjcsMTYwMDAsMTYwODldLCJ0cmFjayI6eyJkYXkiOiIyMDI2LTAxLTAyIiwiY291cnNlIjoiMWVjYzEzMjMiLCJnZW4iOjJ9fQ"},aS={practice:"2026-01-01",benchmark:"2026-01-02"},zo={gold:1.08,silver:1.2,bronze:1.36},Bo={gold:1.1,silver:1.22,bronze:1.4},oS=ad,cS=1,lS=[{kind:"straight",len:180},{kind:"corner",corner:{dir:"R",r0:84,r1:84,angleDeg:105}},{kind:"straight",len:170},{kind:"corner",corner:{dir:"L",r0:90,r1:90,angleDeg:108}},{kind:"straight",len:160},{kind:"corner",corner:{dir:"R",r0:150,r1:150,angleDeg:40}},{kind:"straight",len:150}],uS=[{kind:"straight",len:190},{kind:"corner",corner:{dir:"L",r0:96,r1:96,angleDeg:112}},{kind:"straight",len:130},{kind:"corner",corner:{dir:"R",r0:92,r1:92,angleDeg:116}},{kind:"straight",len:260},{kind:"corner",corner:{dir:"L",r0:150,r1:150,angleDeg:42}},{kind:"straight",len:110},{kind:"corner",corner:{dir:"R",r0:68,r1:38,angleDeg:100}},{kind:"straight",len:220},{kind:"corner",corner:{dir:"L",r0:160,r1:160,angleDeg:38}},{kind:"straight",len:200}],hS={practice:lS,benchmark:uS},dS={practice:{amp:0,hosts:2},benchmark:{amp:gd,hosts:1}};function fS(e){const t=(e||"").replace(/^\?/,"");for(const n of t.split("&")){if(!n)continue;const i=n.indexOf("="),r=i<0?n:n.slice(0,i),s=i<0?"":n.slice(i+1);let a=r,o=s;try{a=decodeURIComponent(r),o=decodeURIComponent(s)}catch{}if(a!=="m"&&a!=="mode"&&a!=="course")continue;const c=o.trim().toLowerCase();if(c==="practice"||c==="benchmark")return c;if(c==="daily")return"daily"}return"daily"}function th(e,t,n){const i=`v${rS}.${cS}`;return e==="daily"?`canyon-course-${e}-${n}-${t}-${i}`:`canyon-course-${e}-${n}-${i}`}function pS(e,t){const n=dS[e],i=cl(t,0,md(),[.3,.55,.8],n.amp,n.hosts),r=Fc(i.points);return{points:i.points,stats:r,attempt:0,fallback:!1,crestS:i.crestS,estTimeS:zc(i.points),checksum:Oc(i.points),landmarkS:i.landmarkS}}function mS(e){return{bronzeMs:Math.round(e*zo.bronze),silverMs:Math.round(e*zo.silver),goldMs:Math.round(e*zo.gold)}}function gS(e){const t=e*1e3;return{bronzeMs:Math.round(t*Bo.bronze),silverMs:Math.round(t*Bo.silver),goldMs:Math.round(t*Bo.gold)}}function eh(e,t){return e==="practice"?{title:"Drift Practice",description:"Short committed drifts with long power straights. Steer, tap the handbrake, then countersteer to surge out clean."}:e==="benchmark"?{title:"Benchmark Sprint",description:"Fast sprint: committed drifts, linked reversal, a crest landing, a tightening challenge, and long power exits."}:{title:"Canyon Daily",description:`Seeded sprint for ${t} — the same course for everyone.`}}const nh=new Map;function _S(e,t){const n=e==="daily"?`daily|${t}`:e,i=nh.get(n);if(i)return i;const r=MS(e,t);return nh.set(n,r),r}function MS(e,t){if(e==="daily"){const h=iS(t),{title:u,description:d}=eh(e,t);return{mode:e,title:u,description:d,identityDay:t,storageKey:th(e,t,h.checksum),track:h,targets:gS(h.estTimeS),reference:null}}const n=pS(e,hS[e]),i=aS[e],r=Ns(sS[e]),s=r&&r.track&&r.track.course.toLowerCase()===n.checksum.toLowerCase()&&r.track.gen===oS?r:null,a=s?s.t:Math.round(n.estTimeS*1e3),{title:o,description:c}=eh(e,t);return{mode:e,title:o,description:c,identityDay:i,storageKey:th(e,i,n.checksum),track:n,targets:mS(a),reference:s}}function xS(e,t){return e!=="exit"?"":t==="perfect"?"PERFECT EXIT":t==="good"?"CLEAN EXIT":""}const vS=.6;function SS(){return{step:"steerTap"}}function yS(e,t){return e.step==="steerTap"?t.event==="entered"&&(e.step="sustain"):e.step==="sustain"?t.phase==="sliding"&&t.slideAge>=vS&&(e.step="counter"):e.step==="counter"&&t.event==="exit"&&(t.grade==="good"||t.grade==="perfect")&&(e.step="complete"),e.step}function ES(e,t){const n=t?"DRIFT":"DRIFT (↓ / space)",i=t?"steer with the stick":"hold ← / →";switch(e){case"steerTap":return`1/3 ${i}, tap ${n}`;case"sustain":return"2/3 hold the slide — countersteer when settled";case"counter":return"3/3 flick opposite to exit with a slingshot";default:return""}}function TS(e=5){return{clean:0,perfect:0,goal:Math.max(1,Math.floor(e))}}function AS(e,t,n){return t!=="exit"||n!=="good"&&n!=="perfect"?!1:(e.clean++,n==="perfect"&&e.perfect++,!0)}function wS(e){return e.clean>=e.goal}function _d(e,t){const n=Math.min(e.clean,e.goal);if(wS(e))return`PRACTICE COMPLETE · ${e.perfect} perfect · progress saved`;const i=t?"slide + countersteer exit":"tap DRIFT + countersteer";return`PRACTICE ${n}/${e.goal} · retries keep progress · ${i}`}function ih(e){return!isFinite(e)||e<0?0:Math.round(e*3.6)}function Md(e,t){return!isFinite(e)||e<=0?"none":e<=t.goldMs?"gold":e<=t.silverMs?"silver":e<=t.bronzeMs?"bronze":"none"}function bS(e,t){return!isFinite(e)||e<=0?"":e<=t.goldMs?"GOLD — now chase the reference":e<=t.silverMs?`next GOLD by ${xe(t.goldMs-e)}`:e<=t.bronzeMs?`next SILVER by ${xe(t.silverMs-e)}`:`next BRONZE by ${xe(t.bronzeMs-e)}`}function RS(e,t){const n=[];let i=0,r=0;const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const o=e[a],c=t[a];o===null||c===null||!isFinite(o)||!isFinite(c)||(n.push({index:a,deltaMs:o-i-(c-r)}),i=o,r=c)}return n}function CS(e){if(e.length===0)return"";let t=e[0],n=e[0];for(const r of e)r.deltaMs<t.deltaMs&&(t=r),r.deltaMs>n.deltaMs&&(n=r);const i=[];return n.deltaMs>40&&i.push(`S${n.index+1} cost ${xe(n.deltaMs)}`),t.deltaMs<-40&&i.push(`S${t.index+1} gained ${xe(-t.deltaMs)}`),i.join(" · ")}function LS(e,t){if(t==="daily")return e;const n=e.includes("?")?"&":"?";return`${e}${n}mode=${t}`}const xd="canyon-audio-muted",rh=.6,ua=55,DS=480,IS=4;function wr(e,t,n,i){e.setTargetAtTime?e.setTargetAtTime(t,n,i):e.linearRampToValueAtTime?e.linearRampToValueAtTime(t,n+i):e.value=t}function NS(e){if(!e)return!1;try{return e.getItem(xd)==="1"}catch{return!1}}class PS{constructor(t){this.deps=t,this.ctx=null,this.master=null,this.engineOsc=null,this.engineGain=null,this.subOsc=null,this.subGain=null,this.noise=null,this.slipGain=null,this.voices=[],this.suspended=!1,this.muted=NS(t.storage)}get ready(){return this.ctx!==null}isMuted(){return this.muted}isSuspended(){return this.suspended}start(){if(this.ctx)return;const t=this.deps.createContext();this.ctx=t;const n=t.currentTime,i=t.createGain();i.gain.value=this.muted?0:rh,i.connect(t.destination),this.master=i;const r=t.createOscillator();r.type="sawtooth",r.frequency.value=ua;const s=t.createGain();s.gain.value=0,r.connect(s),s.connect(i),r.start(n),this.engineOsc=r,this.engineGain=s;const a=t.createOscillator();a.type="sine",a.frequency.value=ua*.5;const o=t.createGain();o.gain.value=0,a.connect(o),o.connect(i),a.start(n),this.subOsc=a,this.subGain=o;const c=t.createBufferSource(),h=Math.max(1,Math.floor(t.sampleRate*.5)),u=t.createBuffer(1,h,t.sampleRate),d=u.getChannelData(0);for(let g=0;g<h;g++)d[g]=Math.random()*2-1;c.buffer=u,c.loop=!0;const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=900,f.Q.value=.7;const m=t.createGain();m.gain.value=0,c.connect(f),f.connect(m),m.connect(i),c.start(n),this.noise=c,this.slipGain=m;for(let g=0;g<IS;g++){const _=t.createOscillator();_.type="triangle",_.frequency.value=220;const p=t.createGain();p.gain.value=0,_.connect(p),p.connect(i),_.start(n),this.voices.push({osc:_,gain:p,active:!1,endsAt:0})}this.muted||t.resume()}setMuted(t){this.muted=t;try{this.deps.storage?.setItem(xd,t?"1":"0")}catch{}this.ctx&&this.master&&wr(this.master.gain,t?0:rh,this.ctx.currentTime,.02),!t&&this.ctx&&!this.suspended&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMuted(){return this.setMuted(!this.muted),this.muted}suspend(){!this.ctx||this.suspended||(this.suspended=!0,this.ctx.suspend())}resume(){!this.ctx||!this.suspended||(this.suspended=!1,this.ctx.resume())}activeVoiceCount(){const t=this.ctx?this.ctx.currentTime:0;let n=0;for(const i of this.voices)i.active&&i.endsAt>t&&n++;return n}update(t,n){if(!this.ctx||!this.engineOsc||!this.engineGain||!this.subOsc||!this.subGain||!this.slipGain||!(t>0)||this.suspended)return;const i=this.ctx.currentTime,r=Math.max(1,n.maxSpeed),s=Math.max(0,Math.min(n.speed,r)),a=Math.pow(s/r,.7),o=Math.max(0,Math.min(n.load,1)),c=ua+(DS-ua)*a+o*40;wr(this.engineOsc.frequency,c,i,.05),wr(this.subOsc.frequency,c*.5,i,.05);const h=(.05+.16*a+.1*o)*(n.grounded?1:.35);wr(this.engineGain.gain,h,i,.08),wr(this.subGain.gain,h*.5,i,.08);const u=n.drifting?Math.max(0,Math.min(n.slip,1)):0;wr(this.slipGain.gain,u*.22,i,.05)}oneShot(t,n=.6){if(!this.ctx||this.muted||this.suspended||this.voices.length===0)return!1;const r=this.ctx.currentTime;let s=this.voices.find(u=>!u.active||r>=u.endsAt);s||(s=this.voices.reduce((u,d)=>u.endsAt<=d.endsAt?u:d));const a=Math.max(.05,Math.min(n,1));let o=220,c=140,h=.25;return t==="land"?(o=190,c=70,h=.22):t==="crash"?(o=130,c=38,h=.4):(o=620,c=1050,h=.18),s.osc.type=t==="crash"?"square":"triangle",s.osc.frequency.cancelScheduledValues?.(r),s.osc.frequency.setValueAtTime(o,r),s.osc.frequency.linearRampToValueAtTime(c,r+h),s.gain.gain.cancelScheduledValues?.(r),s.gain.gain.setValueAtTime(0,r),s.gain.gain.linearRampToValueAtTime(a*.8,r+.012),s.gain.gain.linearRampToValueAtTime(0,r+h),s.active=!0,s.endsAt=r+h+.02,!0}reset(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const n of this.voices)n.gain.gain.cancelScheduledValues?.(t),n.gain.gain.value=0,n.active=!1,n.endsAt=0;this.engineGain&&(this.engineGain.gain.value=0),this.subGain&&(this.subGain.gain.value=0),this.slipGain&&(this.slipGain.gain.value=0)}}function US(e){return new PS(e)}function FS(e={}){const t=e.mobile??!1;return{halfW:e.halfW??8,guardSpacing:e.guardSpacing??(t?16:10),tickSpacing:e.tickSpacing??(t?40:25),chevronAdvance:e.chevronAdvance??[70,50,30],chevronRepeater:e.chevronRepeater??40,dustN:e.dustN??(t?80:160),mobile:t,barriers:e.barriers??null}}const nr={MAX_GUARDRAILS:640,MAX_CHEVRONS:128,MAX_TICKS:260,MAX_DUST:220},_n={BOARD_W:2.4,BOARD_H:1.3,ARROW_W:1.5,ARROW_H:1.05,ARROW_NOTCH:.55,TIGHT_MED_R:62,SEVERE_MED_R:130,DOUBLE_GAP:.5,FACE_OFFSET:.05};function La(e,t){let n=0,i=e.length-1;if(t<=e[0])return 0;if(t>=e[i])return i;for(;n+1<i;){const r=n+i>>1;e[r]<t?n=r:i=r}return i}function vd(e,t,n=t.barriers??null){const i=[],r=[];if(e.length<2)return{idx:i,side:r};const s=e[e.length-1];if(n)for(const a of[1,-1]){let o=t.guardSpacing;for(let c=1;c<e.length-1&&o<s-8;c++)e[c]>=o&&(rl(n,e[c],a)&&(i.push(c),r.push(a)),o=e[c]+t.guardSpacing)}else{let a=t.guardSpacing;for(let o=1;o<e.length-1&&a<s-8;o++)e[o]>=a&&(i.push(o,o),r.push(1,-1),a=e[o]+t.guardSpacing)}if(i.length>nr.MAX_GUARDRAILS){let a=i.length-(i.length-nr.MAX_GUARDRAILS);a-=a%2,i.length=a,r.length=a}return{idx:i,side:r}}function Sd(e,t){const n=[];if(e.length<2)return n;const i=e[e.length-1],r=Math.floor(nr.MAX_TICKS/2);let s=t.tickSpacing;for(let a=1;a<e.length-1&&s<i-8&&!(e[a]>=s&&(n.push(a),s=e[a]+t.tickSpacing,n.length>=r));a++);return n}function yd(e,t,n){const i=[];if(e.length<2)return i;const r=e[e.length-1];for(const s of t){if(!isFinite(s.startS)||!isFinite(s.endS))continue;const a=s.dir==="L"?1:-1,o=s.dir==="L"?"L":"R",c=s.medR<=_n.SEVERE_MED_R,h=s.decreasing===!0&&s.medR<_n.TIGHT_MED_R;for(const u of n.chevronAdvance){const d=s.startS-u;d>10&&d<r-10&&i.push({s:d,side:a,dir:o,severe:c,tight:h})}for(let u=s.startS+10;u<s.endS-5;u+=n.chevronRepeater)i.push({s:u,side:a,dir:o,severe:c,tight:h})}return i.sort((s,a)=>s.s-a.s),i.length>nr.MAX_CHEVRONS&&(i.length=nr.MAX_CHEVRONS),i}function Ed(e){return e.dir==="R"?1:-1}function Td(e){const t=[];for(const n of e)t.push({chevron:n,offset:0}),n.tight&&t.push({chevron:n,offset:Ed(n)*_n.DOUBLE_GAP});return t}function OS(e,t,n){if(e.length<2)return{guardrails:0,chevrons:0,signArrows:0,ticks:0,dust:0};const i=yd(e,t,n);return{guardrails:vd(e,n).idx.length,chevrons:i.length,signArrows:Td(i).length,ticks:Sd(e,n).length*2,dust:Math.min(n.dustN,nr.MAX_DUST)}}const Ge={GATE_SPEED:10,GATE_MIX:.25,WIDTH_MIN:.16,WIDTH_MAX:.45,LEN_MIN:.7,LEN_MAX:1.4,DUST_SPREAD_MIN:.8,DUST_SPREAD_MAX:2,ATTACK:5,RELEASE:2.5};function yi(e){return e<0?0:e>1?1:e}function zS(e,t,n,i,r){if(!i||!r||n<Ge.GATE_SPEED||e<Ge.GATE_MIX)return 0;const s=yi((e-Ge.GATE_MIX)/(1-Ge.GATE_MIX)),a=s*s*(3-2*s),o=yi(Math.abs(t)/.5);return yi(a*(.35+.65*o))}function BS(e,t,n){const i=t>e?Ge.ATTACK:Ge.RELEASE,r=t-e,s=i*Math.max(0,n);return r>s?e+s:r<-s?e-s:t}function kS(e){return Ge.WIDTH_MIN+(Ge.WIDTH_MAX-Ge.WIDTH_MIN)*yi(e)}function GS(e){return Ge.LEN_MIN+(Ge.LEN_MAX-Ge.LEN_MIN)*yi(e)}function HS(e){return yi(.1+.6*yi(e))}function VS(e){return e<.12?0:e<.35?3:e<.65?2:1}function WS(e){return e<.15?0:e<.55?1:2}function XS(e){return Ge.DUST_SPREAD_MIN+(Ge.DUST_SPREAD_MAX-Ge.DUST_SPREAD_MIN)*yi(e)}class jS{constructor(t){this.head=0,this.n=Math.max(0,Math.min(Math.floor(t),nr.MAX_DUST)),this.positions=new Float32Array(this.n*3),this.life=new Float32Array(this.n);for(let n=0;n<this.n;n++)this.positions[n*3+1]=-100}spawn(t,n,i,r){if(this.n===0)return;const s=this.head,a=(s*2654435761>>>0)/4294967296-.5,o=(s*40503+7)%100/100,c=(s*65599+13)%100/100-.5;this.positions[s*3]=t+a*r,this.positions[s*3+1]=n+o*1.2,this.positions[s*3+2]=i+c*r,this.life[s]=1,this.head=(s+1)%this.n}update(t){const n=t*1.4,i=t*2;for(let r=0;r<this.n;r++)this.life[r]>0&&(this.life[r]-=n,this.positions[r*3+1]+=i,this.life[r]<=0&&(this.positions[r*3+1]=-100))}}const sh=new WeakMap;function YS(e){const t=new e.PlaneGeometry(_n.ARROW_W,_n.ARROW_H),n=typeof t.getAttribute=="function"?t.getAttribute("position"):void 0;if(!n||n.count<4||typeof n.setX!="function")return t;const i=_n.ARROW_W,r=_n.ARROW_H,s=_n.ARROW_NOTCH;return n.setX(0,-i/2),n.setY(0,r/2),n.setX(1,i/2),n.setY(1,0),n.setX(2,-i/2+s),n.setY(2,0),n.setX(3,-i/2),n.setY(3,-r/2),n.needsUpdate=!0,typeof t.computeBoundingSphere=="function"&&t.computeBoundingSphere(),t}function qS(e,t){let n=sh.get(e);if(!n){const i=r=>{const s=new e.BoxGeometry(1,1,1),a=new e.PlaneGeometry(_n.BOARD_W,_n.BOARD_H),o=YS(e),c=new e.PlaneGeometry(1.4,.5);c.rotateX(-Math.PI/2);const h=new e.MeshLambertMaterial({color:16777215}),u=new e.MeshBasicMaterial({color:16777215,side:e.DoubleSide}),d=new e.MeshBasicMaterial({color:1052688,side:e.DoubleSide}),f=new e.MeshBasicMaterial({color:16117725,transparent:!0,opacity:r?.55:.8});return{guardGeo:s,boardGeo:a,arrowGeo:o,tickGeo:c,guardMat:h,boardMat:u,arrowMat:d,tickMat:f}};n={desk:i(!1),mob:i(!0)},sh.set(e,n)}return t?n.mob:n.desk}function $S(e,t,n,i={}){const r=FS(i),s=n.events??[],a=OS(n.cum,s,r),o=qS(e,r.mobile),c=new e.Group;c.name="canyon-visuals",t.add(c);const h=new e.Matrix4,u=new e.Quaternion,d=new e.Euler,f=new e.Vector3,m=new e.Vector3,g=new e.Vector3(1,1,1),_=new e.Color,p=U=>Math.atan2(n.tangents[U].x,n.tangents[U].z),l=[];let v=null,M=null,x=null,R=null;const w=vd(n.cum,r),b=[[],[]];for(let U=0;U<w.idx.length;U++)b[w.side[U]>0?0:1].push(w.idx[U]);const I=[];for(let U=0;U<2;U++){const C=U===0?1:-1,N=b[U];for(let k=0;k+1<N.length;k++){if(n.cum[N[k+1]]-n.cum[N[k]]>r.guardSpacing*1.6)continue;const V=n.points[N[k]],D=n.normals[N[k]],P=n.points[N[k+1]],Q=n.normals[N[k+1]];I.push({ax:V.x+D.x*C*(r.halfW+2),ay:V.y,az:V.z+D.z*C*(r.halfW+2),bx:P.x+Q.x*C*(r.halfW+2),by:P.y,bz:P.z+Q.z*C*(r.halfW+2),side:C})}}if(I.length>0){v=new e.InstancedMesh(o.guardGeo,o.guardMat,I.length);for(let U=0;U<I.length;U++){const C=I[U],N=C.bx-C.ax,k=C.bz-C.az,V=Math.sqrt(N*N+k*k);d.set(0,Math.atan2(N,k),0),u.setFromEuler(d),f.set((C.ax+C.bx)/2,(C.ay+C.by)/2+.35,(C.az+C.bz)/2),m.set(.55,1,V+1.5),h.compose(f,u,m),v.setMatrixAt(U,h),v.setColorAt(U,_.set(U%4===3?14170666:15327954))}v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),c.add(v),l.push(v)}const E=yd(n.cum,s,r);if(E.length>0){M=new e.InstancedMesh(o.boardGeo,o.boardMat,E.length);for(let C=0;C<E.length;C++){const N=La(n.cum,E[C].s),k=n.points[N],V=n.normals[N];d.set(0,p(N)+Math.PI,0),u.setFromEuler(d),f.set(k.x+V.x*E[C].side*(r.halfW+4.5),k.y+1.5,k.z+V.z*E[C].side*(r.halfW+4.5)),m.set(1,1,1),h.compose(f,u,m),M.setMatrixAt(C,h);const D=E[C].tight?13703695:E[C].severe?14170666:15902010;M.setColorAt(C,_.set(D))}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M);const U=Td(E);if(U.length>0){x=new e.InstancedMesh(o.arrowGeo,o.arrowMat,U.length);for(let C=0;C<U.length;C++){const N=U[C],k=La(n.cum,N.chevron.s),V=n.points[k],D=n.normals[k],P=N.chevron.side*(r.halfW+4.5),Q=n.tangents[k];d.set(0,p(k)+Math.PI,0),u.setFromEuler(d),f.set(V.x+D.x*(P+N.offset)-Q.x*_n.FACE_OFFSET,V.y+1.5,V.z+D.z*(P+N.offset)-Q.z*_n.FACE_OFFSET),m.set(Ed(N.chevron),1,1),h.compose(f,u,m),x.setMatrixAt(C,h)}x.instanceMatrix.needsUpdate=!0,c.add(x),l.push(x)}}const y=Sd(n.cum,r);if(y.length>0){R=new e.InstancedMesh(o.tickGeo,o.tickMat,y.length*2);let U=0;for(const C of y){const N=n.points[C],k=n.normals[C];d.set(0,p(C),0),u.setFromEuler(d);for(const V of[1,-1])f.set(N.x+k.x*V*(r.halfW-1.2),N.y+.17,N.z+k.z*V*(r.halfW-1.2)),h.compose(f,u,g),R.setMatrixAt(U++,h)}R.count=U,R.instanceMatrix.needsUpdate=!0,c.add(R),l.push(R)}const L=new jS(r.dustN);return{counts:a,dust:L,setQuality(U){R&&(R.visible=!U),v&&(v.visible=!0),M&&(M.visible=!0),x&&(x.visible=!0)},update(U){L.update(U)},dispose(){for(const U of l)c.remove(U),U.dispose();t.remove(c)}}}const Ad=Math.max(gs,ya),Ps={posLambda:7,lookLambda:10,headLambda:5,fovLambda:5,driftLambda:6,feedforward:1,maxImpulse:1.2,impulseDecay:5,camDist:8.8,camHeight:3.5,lookAhead:12,lookHeight:1.2,baseFov:60,speedFov:32,driftFov:7,fullSpeed:Ad,maxDt:.05};function KS(){return{px:0,py:0,pz:0,pvx:0,pvy:0,pvz:0,lx:0,ly:0,lz:0,lvx:0,lvy:0,lvz:0,fov:Ps.baseFov,fovV:0,camH:0,driftMix:0,impx:0,impy:0,impz:0,ready:!1}}function Da(e){return Math.atan2(Math.sin(e),Math.cos(e))}function xi(e,t,n){return Math.max(t,Math.min(n,e))}function Wn(e){return typeof e=="number"&&isFinite(e)}function Ni(e,t,n,i,r,s){const a=i*i,o=2*i,c=t+((n-e)*a-t*o)*r;s[0]=e+c*r,s[1]=c}function ja(e,t,n,i,r,s){const a=Math.sin(s),o=Math.cos(s);e.px=n-a*t.camDist,e.py=i+t.camHeight,e.pz=r-o*t.camDist,e.pvx=0,e.pvy=0,e.pvz=0,e.lx=n+a*t.lookAhead,e.ly=i+t.lookHeight,e.lz=r+o*t.lookAhead,e.lvx=0,e.lvy=0,e.lvz=0,e.fov=t.baseFov,e.fovV=0,e.camH=Da(s),e.driftMix=0,e.impx=0,e.impy=0,e.impz=0,e.ready=!0}function ZS(e,t,n,i,r,s,a,o){let c=e;i>8?c=Math.atan2(t,n):a&&(r!==0||s!==0)&&(c=Math.atan2(r,s));const h=Da(e-c),u=xi(i/8,0,1),d=(1-.75*xi(o,0,1))*u;return c+h*d}function QS(e,t,n){return e.baseFov+xi(t/e.fullSpeed,0,1)*e.speedFov+xi(n,0,1)*e.driftFov}const ve=[0,0];function JS(e,t,n){const i=n.dt;if(!Wn(i)||i<=0||!Wn(n.px)||!Wn(n.py)||!Wn(n.pz)||!Wn(n.heading)||!Wn(n.vx)||!Wn(n.vz))return;if(!e.ready){ja(e,t,n.px,n.py,n.pz,n.heading);return}const r=i>t.maxDt?t.maxDt:i,s=xi(n.speed,0,200),a=n.drifting?1:0;e.driftMix+=(a-e.driftMix)*(1-Math.exp(-t.driftLambda*r)),e.driftMix=xi(e.driftMix,0,1);const o=ZS(n.heading,n.vx,n.vz,s,n.tangentX,n.tangentZ,n.hasTangent,e.driftMix);e.camH+=Da(o-e.camH)*(1-Math.exp(-t.headLambda*r)),e.camH=Da(e.camH);const c=Math.sin(e.camH),h=Math.cos(e.camH),u=Math.max(t.feedforward*(2/t.posLambda)-r,0),d=n.px-c*t.camDist+n.vx*u,f=n.py+t.camHeight,m=n.pz-h*t.camDist+n.vz*u;Ni(e.px,e.pvx,d,t.posLambda,r,ve),e.px=ve[0],e.pvx=ve[1],Ni(e.py,e.pvy,f,t.posLambda,r,ve),e.py=ve[0],e.pvy=ve[1],Ni(e.pz,e.pvz,m,t.posLambda,r,ve),e.pz=ve[0],e.pvz=ve[1];const g=Math.max(t.feedforward*(2/t.lookLambda)-r,0),_=n.px+c*t.lookAhead+n.vx*g,p=n.py+t.lookHeight,l=n.pz+h*t.lookAhead+n.vz*g;if(Ni(e.lx,e.lvx,_,t.lookLambda,r,ve),e.lx=ve[0],e.lvx=ve[1],Ni(e.ly,e.lvy,p,t.lookLambda,r,ve),e.ly=ve[0],e.lvy=ve[1],Ni(e.lz,e.lvz,l,t.lookLambda,r,ve),e.lz=ve[0],e.lvz=ve[1],Ni(e.fov,e.fovV,QS(t,s,e.driftMix),t.fovLambda,r,ve),e.fov=ve[0],e.fovV=ve[1],n.landed&&Wn(n.landV)&&n.landV<0&&(e.impy-=xi(-n.landV/22,0,1)*.9),n.wallHit&&Wn(n.wallVn)&&n.wallVn>0){const x=xi(n.wallVn/25,0,1)*.8,R=Math.hypot(n.vx,n.vz);R>1e-6&&(e.impx-=n.vx/R*x,e.impz-=n.vz/R*x)}const v=Math.hypot(e.impx,e.impy,e.impz);if(v>t.maxImpulse&&v>0){const x=t.maxImpulse/v;e.impx*=x,e.impy*=x,e.impz*=x}const M=Math.exp(-t.impulseDecay*r);e.impx*=M,e.impy*=M,e.impz*=M}function ty(e,t){t.x=e.px+e.impx,t.y=e.py+e.impy,t.z=e.pz+e.impz}function ey(e){return Math.hypot(e.impx,e.impy,e.impz)}const ny=3.1,iy=.7;function ry(e,t){return e&&t?iy:ny}function sy(e){e.stickId!==-1&&e.stickUp(e.stickId),e.joy=0,e.joyOn=!1,e.driftId!==-1&&e.driftUp(e.driftId),e.drift=!1}const wd=3;function ay(e){return e?"RESCUE":"R RESCUE"}function bd(e){return e?"RETRY":"ENTER RETRY"}function Rd(e){return`${ay(e)} (+${wd}s) · ${bd(e)}`}function oy(e){return`STUCK — ${Rd(e)}`}function cy(e){return`OFF COURSE — ${Rd(e)}`}function ly(){return`RESCUE +${wd}s`}function uy(){return{time:xe(0),progressPct:0,delta:"",split:"",debug:""}}function Cd(){return{spd:0,drifting:!1,sIdx:0,gIdx:0,pitch:0,launched:!1,landed:!1,finished:!1,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:"road",landV:0,impact:0,scraping:!1,stuckMs:0,oobMs:0}}function hy(e={}){const t=e.mobile??!1;return{halfW:e.halfW??8,wallStep:e.wallStep??14,scrubStep:e.scrubStep??(t?28:16),mobile:t}}const Ti={MAX_WALLS:700,MAX_MESAS:40,MAX_ARCHES:4,MAX_SCRUB:420},dy=8e3,fy=500;function py(e,t=1200){if(e.length===0)return{cx:0,cz:0,size:t*2,minY:0,maxY:0};let n=1/0,i=-1/0,r=1/0,s=-1/0,a=1/0,o=-1/0;for(const d of e)d.x<n&&(n=d.x),d.x>i&&(i=d.x),d.z<r&&(r=d.z),d.z>s&&(s=d.z),d.y<a&&(a=d.y),d.y>o&&(o=d.y);const c=(n+i)/2,h=(r+s)/2,u=Math.max(i-n,s-r);return{cx:c,cz:h,size:u+t*2,minY:a,maxY:o}}const gi={MIN_WALL_LATERAL:17,INSIDE_LATERAL:26,INSIDE_HEIGHT_CAP:22,MAX_SCRUB_H:1.6,MIN_ARCH_LATERAL:22},Ld=4,my=4,Ki=180,gy=80,Ir=150,_y=195,My=240,Bc=300,Gi=8,ah=220,oh=250,xy=15380867,Qe={GUARD_OUT:2.6,SHOULDER:2,SCRUB_OUT:3.1,CURVE_EXTRA:3,JITTER:.6,PUSHBACK:14};function Mn(e){return e+Qe.GUARD_OUT+Qe.SHOULDER}function Rr(e,t,n){const i=e*Math.abs(Math.cos(n)),r=t*.4*Math.abs(Math.sin(n));return Math.sqrt(i*i+r*r)+Qe.JITTER}function Cr(e,t){return Math.max(e,t)*1+Qe.JITTER}function Dd(e){return e*1.28+Qe.JITTER}function vy(e,t){return e-Gi+t*.5}function _s(e,t,n){return t<Ki?Math.max(n,e):n}function Sy(e,t){if(e<Ki)return Math.max(t,My);const n=Math.min(1,(e-Ki)/220);return t+(1-n)*110}function Id(e){return .9*e+.3}function _t(e){let t=Math.imul(e|0,2654435761);return t^=t>>>15,t=Math.imul(t,2246822519),t^=t>>>13,(t>>>0)/4294967296}function yy(e){const t=[[.4,.19,.1],[.6,.3,.15],[.75,.43,.23],[.87,.59,.37],[.84,.79,.7]],n=Math.min(.999,Math.max(0,e))*(t.length-1),i=Math.floor(n),r=n-i,s=t[i],a=t[i+1];return[s[0]+(a[0]-s[0])*r,s[1]+(a[1]-s[1])*r,s[2]+(a[2]-s[2])*r]}function br(e){return e.dir==="L"?-1:1}function ch(e,t){for(const n of e)if(t>=n.startS-20&&t<=n.endS)return n;return null}const ha=!0,Nd=300,ko=[1.25,1.18,1.08];function Ey(e){return e>=Nd}function Ty(e){const t=Math.floor(e/Ld);if(t===0)return"vista";const n=t%2;return(_t(t*131+7)<.35?n===1:n===0)?"cut":"vista"}function Pd(e,t,n){const i=[],r=[];if(e.length<2)return{near:i,far:r};const s=e[e.length-1];let a=0,o=0,c=0,h=n.wallStep;for(let f=1;f<e.length-1&&h<s-10;f++){if(e[f]<h)continue;h=e[f]+n.wallStep;const m=e[f],g=ch(t,m),_=m<Ki,p=!_&&m<Ki+gy;let l=_||p?"vista":Ty(o);if(!_&&!p&&l==="cut"&&c>=my&&(l="vista"),o++,c=l==="vista"?0:c+1,_){if(o%2===0){a++;const v=_t(o*29+1)<.5?-1:1,M=1.5+_t(a*2+2)*3,x=10+_t(a*2+3)*10,R=n.wallStep*1.6,w=(_t(a*3+5)-.5)*.9,b=Math.max(22+_t(a*2+1)*16,Mn(n.halfW)+Rr(x,R,w));i.push({idx:f,side:v,lateral:b,h:M,w:x,segLen:R,tint:a,yaw:w})}}else if(p){a++;const v=_t(o*29+1)<.5?-1:1;let M=10+_t(a*2+2)*12;g&&v===br(g)&&(M=Math.min(M,gi.INSIDE_HEIGHT_CAP));const x=12+_t(a*2+3)*16,R=n.wallStep*2,w=(_t(a*3+5)-.5)*.9,b=g!==null&&v===br(g),I=Math.max(74+_t(a*2+1)*50,Mn(n.halfW)+Rr(x,R,w)+(b?Qe.CURVE_EXTRA:0));i.push({idx:f,side:v,lateral:I,h:M,w:x,segLen:R,tint:a,yaw:w})}else if(l==="vista"){a++;const v=_t(o*29+1)<.5?-1:1;let M=16+_t(a*2+2)*26;g&&v===br(g)&&(M=Math.min(M,gi.INSIDE_HEIGHT_CAP));const x=12+_t(a*2+3)*18,R=n.wallStep*2.4,w=(_t(a*3+5)-.5)*.9,b=g!==null&&v===br(g),I=Math.max(58+_t(a*2+1)*80,Mn(n.halfW)+Rr(x,R,w)+(b?Qe.CURVE_EXTRA:0));i.push({idx:f,side:v,lateral:I,h:M,w:x,segLen:R,tint:a,yaw:w})}else{const M=.72+_t(Math.floor(o/Ld)*57+3)*.65;for(const x of[1,-1]){a++;const R=_t(a*5+11)<.5?1.25:.75;let w=(15+_t(a*2+2)*15)*M*R;const b=g!==null&&x===br(g);b&&(w=Math.min(w,gi.INSIDE_HEIGHT_CAP));const I=6+_t(a*2+3)*8,E=n.wallStep*1.6,y=(_t(a*3+5)-.5)*.9,L=Math.max(17+_t(a*2+1)*17,b?gi.INSIDE_LATERAL:gi.MIN_WALL_LATERAL,Mn(n.halfW)+Rr(I,E,y)+(b?Qe.CURVE_EXTRA:0))+Qe.PUSHBACK;i.push({idx:f,side:x,lateral:L,h:w,w:I,segLen:E,tint:a,yaw:y})}}}let u=0,d=70;for(let f=1;f<e.length-1&&d<s-10;f++){if(e[f]<d)continue;d=e[f]+90,u++;const m=_t(u*37+5)<.5?-1:1,g=30+_t(1299709+u)*40,_=90,p=(_t((5e3+u)*3+5)-.5)*.9,l=ch(t,e[f]),v=l!==null&&m===br(l),M=Math.max(90+_t(7919+u*2)*70,Mn(n.halfW)+Rr(g,_,p)+(v?Qe.CURVE_EXTRA:0)),x=Math.min(1,Math.max(0,(e[f]-Ki)/220));r.push({idx:f,side:m,lateral:Sy(e[f],M),h:(30+_t(104729+u*2)*50)*(.55+.45*x),w:g,segLen:_,tint:5e3+u,yaw:p})}return i.length+r.length>Ti.MAX_WALLS&&(i.length=Math.max(0,Ti.MAX_WALLS-r.length)),{near:i,far:r}}function Hi(e,t){return t*(.7+_t(e*13+4)*.5)}function Ud(e,t=8){const n=[],i=e.points.length;if(i<2)return n;const r=g=>La(e.cum,e.cum[i-1]*g);[.12,.25,.4,.55,.7,.85].forEach((g,_)=>{const p=r(g),l=e.points[p],v=e.normals[p],M=_%2?-1:1,x=40+_t(77+_*13)*50,R=_s(Ir,e.cum[p],Math.max(90+_t(31+_*7)*120,Mn(t)+Cr(x,Hi(_,x))));n.push({x:l.x+v.x*M*R,y:l.y-Gi,z:l.z+v.z*M*R,w:x,h:50+_t(101+_*17)*40,haze:0,tint:_})});let a=1/0,o=-1/0,c=1/0,h=-1/0,u=1/0;for(const g of e.points)g.x<a&&(a=g.x),g.x>o&&(o=g.x),g.z<c&&(c=g.z),g.z>h&&(h=g.z),g.y<u&&(u=g.y);const d=(a+o)/2,f=(c+h)/2;let m=0;for(const g of e.points)m=Math.max(m,Math.hypot(g.x-d,g.z-f));for(let g=0;g<8;g++){const _=g/8*Math.PI*2+_t(1001+g)*.5,p=Math.max(420,m+Bc)+_t(2002+g*3)*200;n.push({x:d+Math.cos(_)*p,y:u-20-_t(3003+g)*20,z:f+Math.sin(_)*p,w:120+_t(4004+g*5)*110,h:90+_t(5005+g*7)*70,haze:.55,tint:100+g})}[.33,.66].forEach((g,_)=>{const p=r(g),l=e.points[p],v=e.normals[p],M=_===0?1:-1,x=6+_t(7007+_)*3,R=_s(Ir,e.cum[p],Math.max(55+_t(6006+_)*20,Mn(t)+Cr(x,Hi(200+_,x))));n.push({x:l.x+v.x*M*R,y:l.y-Gi,z:l.z+v.z*M*R,w:x,h:70+_t(8008+_)*25,haze:0,tint:200+_})}),[.12,.5].forEach((g,_)=>{const p=r(g),l=e.points[p],v=e.normals[p];for(const M of[1,-1]){const x=Nd+_*2+(M<0?1:0),R=3+_t(6100+x)*1.5,w=_s(Ir,e.cum[p],Math.max(Mn(t)+Cr(R,Hi(x,R))+1.5,gi.MIN_WALL_LATERAL));n.push({x:l.x+v.x*M*w,y:l.y-Gi,z:l.z+v.z*M*w,w:R,h:30+_t(6200+x)*12,haze:0,tint:x})}}),[.06,.18,.31,.45,.58,.72,.88].forEach((g,_)=>{const p=r(g),l=e.points[p],v=e.normals[p],M=_%2?-1:1,x=16+_t(14e3+_*17)*20,R=_s(Ir,e.cum[p],Math.max(52+_t(14200+_*23)*70,Mn(t)+Cr(x,Hi(ah+_,x))+4));n.push({x:l.x+v.x*M*R,y:l.y-Gi,z:l.z+v.z*M*R,w:x,h:14+_t(14100+_*19)*18,haze:0,tint:ah+_})});{const g=r(.08),_=e.points[g],p=e.normals[g],l=1,v=42+_t(15e3+i)*14,M=50+_t(15001+i)*18,x=Math.max(_y+_t(15002+i)*60,Mn(t)+Cr(v,Hi(oh,v))+8);n.push({x:_.x+p.x*l*x,y:_.y-Gi,z:_.z+p.z*l*x,w:v,h:M,haze:0,tint:oh})}return n.length>Ti.MAX_MESAS&&(n.length=Ti.MAX_MESAS),n}function Fd(e,t){const n=[];if(e.length<2)return n;const i=e[e.length-1];return[.3,.55,.8].forEach((r,s)=>{const a=i*r;if(a<30||a>i-30)return;const o=8+_t(9111+s*13)*4,c=_s(Ir,a,Math.max(24+_t(9009+s*11)*8,gi.MIN_ARCH_LATERAL,Mn(t.halfW)+Dd(o))+Qe.PUSHBACK);n.push({idx:La(e,a),side:s%2?-1:1,lateral:c,r:o})}),n.length>Ti.MAX_ARCHES&&(n.length=Ti.MAX_ARCHES),n}function Od(e,t){const n=[];if(e.length<2)return n;const i=e[e.length-1];let r=0,s=t.scrubStep;for(let a=1;a<e.length-1&&s<i-8;a++)if(!(e[a]<s)){s=e[a]+t.scrubStep;for(const o of[1,-1]){r++;const c=_t(11011+r*7+(o>0?0:91));if(c<.25)continue;const h=c>.72?2:1;for(let u=0;u<h;u++){const d=r*5+u*131,f=.7+_t(12004+d)*1.7,m=u===0?0:.9;n.push({idx:a,side:o,lateral:Math.max(t.halfW+3.5+_t(11003+d)*3+m,t.halfW+Qe.SCRUB_OUT+Id(f)),w:f,h:Math.min(.35+_t(13005+d)*1.25,gi.MAX_SCRUB_H),tint:d})}}}return n.length>Ti.MAX_SCRUB&&(n.length=Ti.MAX_SCRUB),n}function hs(e,t,n,i){let r=1/0,s=t,a=0,o=n,c=-1;const h=e.points;for(let u=0;u<h.length;u++){const d=t-h[u].x,f=n-h[u].z,m=Math.sqrt(d*d+f*f);m<r&&(r=m,s=h[u].x,a=h[u].y,o=h[u].z,c=u)}return i.x=s,i.y=a,i.z=o,i.i=c,r}const ds=8;function zd(e,t,n,i,r,s){const a=Mn(s),o=s+Qe.SCRUB_OUT,c={x:0,y:0,z:0,i:-1},h=(p,l,v)=>{const M=e.points[p],x=e.normals[p];return{x:M.x+x.x*l*v,z:M.z+x.z*l*v}},u=p=>a+Rr(p.w,p.segLen,p.yaw)+Qe.CURVE_EXTRA,d=[],f=[];for(const p of[t.near,t.far]){const l=p===t.near?d:f;for(const v of p){let M=v,x=!1;for(let R=0;R<ds;R++){const w=h(M.idx,M.side,M.lateral),b=hs(e,w.x,w.z,c);if(b>=u(M)){x=!0;break}const I=u(M)-b+.5;M={...M,lateral:M.lateral+I}}x&&l.push(M)}}const m=[];for(const p of n){if(p.haze>0){let R=p.x,w=p.z;for(let b=0;b<ds;b++){const I=hs(e,R,w,c);if(I>=Bc)break;const E=Bc-I+1;let y=R-c.x,L=w-c.z;const U=Math.sqrt(y*y+L*L);U<1e-6?(y=1,L=0):(y/=U,L/=U),R+=y*E,w+=L*E}m.push({...p,x:R,z:w});continue}let l=p.x,v=p.z;const M=Cr(p.w,Hi(p.tint,p.w));let x=!1;for(let R=0;R<ds;R++){const w=hs(e,l,v,c),I=e.cum&&c.i>=0&&e.cum[c.i]<Ki?Math.max(a+M,Ir):a+M;if(w>=I){x=!0;break}const E=I-w+.5;let y=l-c.x,L=v-c.z;const U=Math.sqrt(y*y+L*L);U<1e-6?(y=1,L=0):(y/=U,L/=U),l+=y*E,v+=L*E}if(x){const R=Math.min(p.y,c.y-Gi);m.push({...p,x:l,y:R,z:v})}}const g=[];for(const p of i){let l=p;const v=a+Dd(l.r);let M=!1;for(let x=0;x<ds;x++){const R=h(l.idx,l.side,l.lateral),w=hs(e,R.x,R.z,c);if(w>=v){M=!0;break}l={...l,lateral:l.lateral+(v-w)+.5}}M&&g.push(l)}const _=[];for(const p of r){let l=p;const v=o+Id(l.w);let M=!1;for(let x=0;x<ds;x++){const R=h(l.idx,l.side,l.lateral),w=hs(e,R.x,R.z,c);if(w>=v){M=!0;break}l={...l,lateral:l.lateral+(v-w)+.5}}M&&_.push(l)}return{walls:{near:d,far:f},mesas:m,arches:g,scrub:_}}function Ay(e,t,n){if(e.cum.length<2)return{walls:0,farWalls:0,mesas:0,arches:0,scrub:0};const i=zd(e,Pd(e.cum,t,n),Ud(e,n.halfW),Fd(e.cum,n),Od(e.cum,n),n.halfW);return{walls:i.walls.near.length+i.walls.far.length,farWalls:i.walls.far.length,mesas:i.mesas.length,arches:i.arches.length,scrub:i.scrub.length}}const lh=new WeakMap;function Go(e,t){const n=e.getAttribute("position");for(let i=0;i<n.count;i++){const r=.5+Math.abs(n.getY(i));n.setX(i,n.getX(i)+(_t(t+i*3+1)-.5)*.24*r),n.setZ(i,n.getZ(i)+(_t(t+i*3+2)-.5)*.24*r),n.setY(i,n.getY(i)+(_t(t+i*3+3)-.5)*.1)}n.needsUpdate=!0,e.computeVertexNormals()}function Ho(e,t,n){const i=t.getAttribute("position"),r=new Float32Array(i.count*3);t.computeBoundingBox();const s=t.boundingBox,a=s?s.min.y:0,o=s&&s.max.y-s.min.y>1e-6?s.max.y-s.min.y:1;for(let c=0;c<i.count;c++){const h=Math.min(.999,Math.max(0,(i.getY(c)-a)/o)),u=yy(Math.floor(h*n)/(n-1));r[c*3]=u[0],r[c*3+1]=u[1],r[c*3+2]=u[2]}t.setAttribute("color",new e.BufferAttribute(r,3))}function wy(e){let t=lh.get(e);if(!t){const n=new e.CylinderGeometry(.58,1,1,5,2);n.translate(0,.5,0),Go(n,211),Ho(e,n,4);const i=new e.CylinderGeometry(.7,1,1,7,1);i.translate(0,.5,0),Go(i,412),Ho(e,i,4);const r=new e.CylinderGeometry(.72,1,1,8,3);r.translate(0,.5,0),Go(r,977),Ho(e,r,4);const s=new e.TorusGeometry(1,.28,6,12),a=new e.ConeGeometry(.9,1,6);a.translate(0,.5,0),t={wallGeo:n,farGeo:i,mesaGeo:r,archGeo:s,scrubGeo:a,wallMat:new e.MeshLambertMaterial({vertexColors:!0,flatShading:ha}),farMat:new e.MeshLambertMaterial({vertexColors:!0,flatShading:ha}),mesaMat:new e.MeshLambertMaterial({vertexColors:!0,flatShading:ha}),archMat:new e.MeshLambertMaterial({color:12876357,flatShading:ha}),scrubMat:new e.MeshLambertMaterial({color:16777215})},lh.set(e,t)}return t}function by(e,t,n,i={}){const r=hy(i),s=n.events??[],a=Ay(n,s,r),o=wy(e),c=new e.Group;c.name="canyon-environment",t.add(c);const h=new e.Matrix4,u=new e.Quaternion,d=new e.Euler,f=new e.Vector3,m=new e.Vector3,g=new e.Color,_=new e.Color(xy),p=C=>Math.atan2(n.tangents[C].x,n.tangents[C].z),l=[];let v=null,M=null,x=0,R=0,w=0;const b=(C,N,k)=>{const V=n.points[N.idx],D=n.normals[N.idx];d.set(0,p(N.idx)+N.yaw,0),u.setFromEuler(d),f.set(V.x+D.x*N.side*N.lateral,V.y-10,V.z+D.z*N.side*N.lateral),m.set(N.w,N.h,N.segLen*.4),h.compose(f,u,m),C.setMatrixAt(k,h);const P=.85+_t(N.tint*7+1)*.3;C.setColorAt(k,g.setRGB(P,P*.98,P*.95))},I=zd(n,Pd(n.cum,s,r),Ud(n,r.halfW),Fd(n.cum,r),Od(n.cum,r),r.halfW),E=I.walls;if(E.near.length>0){const C=new e.InstancedMesh(o.wallGeo,o.wallMat,E.near.length);for(let N=0;N<E.near.length;N++)b(C,E.near[N],N);C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0),c.add(C),l.push(C)}if(x=E.far.length,E.far.length>0){v=new e.InstancedMesh(o.farGeo,o.farMat,E.far.length);for(let C=0;C<E.far.length;C++)b(v,E.far[C],C);v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),c.add(v),l.push(v)}const y=I.mesas;if(y.length>0){const C=new e.InstancedMesh(o.mesaGeo,o.mesaMat,y.length);for(let N=0;N<y.length;N++){const k=y[N];if(d.set(0,_t(k.tint*11+2)*Math.PI,0),u.setFromEuler(d),f.set(k.x,k.y,k.z),m.set(k.w,k.h,Hi(k.tint,k.w)),h.compose(f,u,m),C.setMatrixAt(N,h),Ey(k.tint))g.setRGB(ko[0],ko[1],ko[2]);else{const V=.85+_t(k.tint*17+6)*.3;g.setRGB(V,V*.98,V*.95)}k.haze>0&&g.lerp(_,k.haze),C.setColorAt(N,g)}C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0),c.add(C),l.push(C)}const L=I.arches;if(L.length>0){const C=new e.InstancedMesh(o.archGeo,o.archMat,L.length);for(let N=0;N<L.length;N++){const k=L[N],V=n.points[k.idx],D=n.normals[k.idx];d.set(0,p(k.idx),0),u.setFromEuler(d),f.set(V.x+D.x*k.side*k.lateral,vy(V.y,k.r),V.z+D.z*k.side*k.lateral),m.set(k.r,k.r*1.2,k.r),h.compose(f,u,m),C.setMatrixAt(N,h)}C.instanceMatrix.needsUpdate=!0,c.add(C),l.push(C)}const U=I.scrub;if(R=U.length,w=Math.floor(U.length/2),U.length>0){M=new e.InstancedMesh(o.scrubGeo,o.scrubMat,U.length);for(let C=0;C<U.length;C++){const N=U[C],k=n.points[N.idx],V=n.normals[N.idx];d.set(0,_t(N.tint*19+8)*Math.PI*2,0),u.setFromEuler(d),f.set(k.x+V.x*N.side*N.lateral,zr(k.y,N.side*N.lateral,r.halfW)-.1,k.z+V.z*N.side*N.lateral),m.set(N.w,N.h,N.w),h.compose(f,u,m),M.setMatrixAt(C,h),M.setColorAt(C,g.setHSL(.13+_t(N.tint*23+9)*.06,.3+_t(N.tint*29+3)*.2,.24+_t(N.tint*31+7)*.1))}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M)}return{counts:a,setQuality(C){v&&(v.count=C?0:x),M&&(M.count=C?w:R)},update(C){},dispose(){for(const C of l)c.remove(C),C.dispose();t.remove(c)}}}function Ry(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function ts(e){try{return localStorage.getItem(e)}catch{return null}}function Ia(e,t){try{localStorage.setItem(e,t)}catch{}}const Ya=YM(location.search),Cy=Ya.day||Ry(),Jn=fS(location.search),Ee=_S(Jn,Cy),ir=Ee.identityDay,Yn=Ya.timeMs,Bd=`${Ee.storageKey}-best`,Na=`${Ee.storageKey}-ghost`;let ll=null;{const e=Ns(ts(Na));e&&e.p.length>1&&(ll=e)}let qi=null,rn=null,fi="",qn=!1,Pa=!1;const kd=document.getElementById("game"),Be=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Be&&document.body.classList.add("touchmode");const qa=new cM({canvas:kd,antialias:!Be,powerPreference:"high-performance"});qa.setPixelRatio(Math.min(devicePixelRatio||1,Be?1.5:2));qa.setSize(innerWidth,innerHeight);const ce=new lM;ce.background=new At(16172169);ce.fog=new tl(15380867,120,700);{const e=new Qn({side:Ve,depthWrite:!1,fog:!1,uniforms:{top:{value:new At(3042264)},mid:{value:new At(10470382)},bot:{value:new At(16172169)}},vertexShader:`
      varying vec3 vP;
      void main() {
        vP = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec3 vP;
      uniform vec3 top;
      uniform vec3 mid;
      uniform vec3 bot;
      void main() {
        vec3 d = normalize(vP);
        vec3 c = d.y > 0.12
          ? mix(mid, top, smoothstep(0.12, 0.65, d.y))
          : mix(bot, mid, smoothstep(-0.08, 0.12, d.y));
        vec3 sd = normalize(vec3(-0.55, 0.32, 0.28));
        float s = max(dot(d, sd), 0.0);
        c += vec3(1.0, 0.85, 0.6) * pow(s, 220.0) * 1.2 + vec3(1.0, 0.7, 0.4) * pow(s, 8.0) * 0.18;
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new ge(new nl(1500,24,12),e);t.frustumCulled=!1,ce.add(t)}const Se=new mn(64,innerWidth/innerHeight,.1,2e3);ce.add(new fM(16769216,8010530,1));const Gd=new gM(16767400,1.6);Gd.position.set(-120,180,60);ce.add(Gd);addEventListener("resize",()=>{Se.aspect=innerWidth/innerHeight,Se.updateProjectionMatrix(),qa.setSize(innerWidth,innerHeight)});const Ie=Xa(Wa("canyon-"+Jn+"-"+ir)),He=Ee.track;typeof console<"u"&&console.log("[canyon-debug] course",Jn,ir,"attempt",He.attempt,"fallback",He.fallback,"len",He.stats.length.toFixed(0),"est",He.estTimeS.toFixed(1)+"s");const Wt=He.points.map(e=>new G(e.x,e.y,e.z)),xn=Nv,ul=BM(ir,He.checksum),se=gv(Wt.map(e=>({x:e.x,y:e.y,z:e.z})),xn),Un=se.tx.map((e,t)=>new G(e,0,se.tz[t])),Fn=se.nx.map((e,t)=>new G(e,0,se.nz[t])),On=Qv(He.points);se.barrier=SM(On[On.length-1],He.stats.events,He.crestS);typeof console<"u"&&console.log("[canyon-debug] barriers",`spans=${se.barrier.spans.length}`);const kr=Cv(He.stats.events).map(e=>Lv(On,e));let Vi=kr.map(()=>null),kc=0,Ms=null;const uh=12480568;{const e=py(He.points,1200),t=Math.max(e.size,dy),n=new ge(new ei(t,t),new bn({color:uh}));n.rotation.x=-Math.PI/2,n.position.set(e.cx,rd(Wt[0].y)-.05,e.cz),ce.add(n),Ms=n;const i=Wt.map((a,o)=>Math.atan2(se.tx[o],se.tz[o])),r=EM(Wt.map((a,o)=>({x:a.x,z:a.z,nx:Fn[o].x,nz:Fn[o].z})),i,On,xn),s=a=>{const o=Wt.length,c=Ts(r[0]).length,h=new Float32Array(o*c*3),u=new Float32Array(o*c*3),d=[],f=new At,m=new At(13208916),g=new At(10510131),_=new At(uh);for(let l=0;l<o;l++){const v=Ts(r[l]);for(let M=0;M<c;M++){const x=v[M],R=a*(xn+x),w=l*c+M;h.set([Wt[l].x+Fn[l].x*R,zr(Wt[l].y,R,xn),Wt[l].z+Fn[l].z*R],w*3);const b=Math.min(1,x/Math.max(r[l],1e-6));b<.7?f.copy(m).lerp(g,b/.7):f.copy(g).lerp(_,(b-.7)/.3),u.set([f.r,f.g,f.b],w*3)}if(l<o-1)for(let M=0;M<c-1;M++){const x=l*c+M,R=x+1,w=(l+1)*c+M,b=w+1;d.push(x,R,w,R,b,w)}}const p=new Xe;return p.setAttribute("position",new Fe(h,3)),p.setAttribute("color",new Fe(u,3)),p.setIndex(d),p.computeVertexNormals(),new ge(p,new bn({vertexColors:!0,side:gn}))};ce.add(s(1)),ce.add(s(-1))}function hl(e,t,n){const i=Wt.length,r=new Float32Array(i*2*3),s=new Float32Array(i*2*3),a=[],o=new At;for(let h=0;h<i;h++){for(let u=0;u<2;u++){const d=u===0?1:-1,f=Wt[h].clone().addScaledVector(Fn[h],d*e);r.set([f.x,Wt[h].y+t,f.z],(h*2+u)*3),o.copy(n(h,d)),s.set([o.r,o.g,o.b],(h*2+u)*3)}if(h<i-1){const u=h*2,d=h*2+1,f=(h+1)*2,m=(h+1)*2+1;a.push(u,d,f,d,m,f)}}const c=new Xe;return c.setAttribute("position",new Fe(r,3)),c.setAttribute("color",new Fe(s,3)),c.setIndex(a),c.computeVertexNormals(),new ge(c,new bn({vertexColors:!0,side:gn}))}const Ly=new At(4012608),Dy=new At(4538954);ce.add(hl(xn,.15,e=>Math.floor(On[e]/40)%2?Ly:Dy));ce.add(hl(xn+4,.05,()=>new At(13208916)));const Iy=new At(15258536),Ny=new At(14170666),Py=new At(15920610);ce.add(hl(xn+1.1,.12,(e,t)=>{const i=Math.floor(On[e]/14)%2?Ny:Py;return se.barrier&&!rl(se.barrier,On[e],t>=0?1:-1)?i.clone().lerp(Iy,.6):i}));{const e=new ei(.35,3);e.rotateX(-Math.PI/2);const t=new an({color:16117725}),n=Jv(On,16).filter(c=>c>=6&&c<Wt.length-6),i=new Is(e,t,n.length),r=new Kt,s=new ti,a=new Je,o=new G(1,1,1);n.forEach((c,h)=>{a.set(0,Math.atan2(Un[c].x,Un[c].z),0),s.setFromEuler(a),r.compose(new G(Wt[c].x,Wt[c].y+.19,Wt[c].z),s,o),i.setMatrixAt(h,r)}),i.instanceMatrix.needsUpdate=!0,ce.add(i)}const Hd=new ei(2,1.15);Hd.rotateX(-Math.PI/2);const Uy=new an({color:15920610}),Fy=new an({color:1315860});function Oy(e){const t=Math.atan2(Un[e].x,Un[e].z);for(let n=0;n<2;n++)for(let i=0;i<8;i++){const r=new ge(Hd,(n+i)%2?Fy:Uy),s=(i-3.5)*2,a=(n-.5)*1.15;r.position.set(Wt[e].x+Fn[e].x*s+Un[e].x*a,Wt[e].y+.21,Wt[e].z+Fn[e].z*s+Un[e].z*a),r.rotation.y=t,ce.add(r)}}const Vd={BoxGeometry:re,PlaneGeometry:ei,MeshLambertMaterial:bn,MeshBasicMaterial:an,InstancedMesh:Is,Group:Mi,Matrix4:Kt,Quaternion:ti,Euler:Je,Vector3:G,Color:At,DoubleSide:gn},$n=$S(Vd,ce,{points:Wt,tangents:Un,normals:Fn,cum:On,events:He.stats.events,crestS:He.crestS},{mobile:Be,halfW:xn,barriers:se.barrier});$n.setQuality(Be);const zy={...Vd,CylinderGeometry:er,ConeGeometry:el,TorusGeometry:il,BufferAttribute:Fe},By=by(zy,ce,{points:Wt,tangents:Un,normals:Fn,cum:On,events:He.stats.events,crestS:He.crestS},{mobile:Be,halfW:xn});By.setQuality(Be);typeof console<"u"&&console.log("[canyon-debug] visuals",`guards=${$n.counts.guardrails} chevrons=${$n.counts.chevrons} ticks=${$n.counts.ticks} dust=${$n.counts.dust}`);{const e=new Va(1,10);e.rotateX(-Math.PI/2);const t=new bn({color:16777215}),n=70,i=new Is(e,t,n),r=new Kt,s=new At;let a=0,o=0;for(;a<n&&o++<2e3;){const c=(Ie()-.5)*1100,h=(Ie()-.5)*1100;let u=1e9;for(let f=0;f<Wt.length;f+=12){const m=Wt[f].x-c,g=Wt[f].z-h,_=m*m+g*g;_<u&&(u=_)}if(u<1600)continue;const d=6+Ie()*22;r.makeScale(d,1,d*(.6+Ie()*.6)),r.setPosition(c,-2.35,h),i.setMatrixAt(a,r),i.setColorAt(a,s.setHSL(.03+Ie()*.04,.5+Ie()*.2,.22+Ie()*.1)),a++}i.count=a,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),ce.add(i)}{const e=new er(.35,.55,1,7);e.translate(0,.5,0);const t=new bn({color:16777215}),n=Be?70:120,i=new Is(e,t,n),r=new Kt,s=new ti,a=new Je,o=new G,c=new G,h=new At;let u=0,d=0;for(;u<n&&d++<6e3;){const f=(Ie()-.5)*1e3,m=(Ie()-.5)*1e3;let g=1e9;for(let p=0;p<Wt.length;p+=12){const l=Wt[p].x-f,v=Wt[p].z-m,M=l*l+v*v;M<g&&(g=M)}if(g<1600)continue;const _=3+Ie()*4;a.set((Ie()-.5)*.14,Ie()*3,(Ie()-.5)*.14),s.setFromEuler(a),o.set(f,-2.5,m),c.set(.8+Ie()*.9,_,.8+Ie()*.9),r.compose(o,s,c),i.setMatrixAt(u,r),i.setColorAt(u,h.setHSL(.29+Ie()*.04,.4+Ie()*.2,.26+Ie()*.1)),u++}i.count=u,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),ce.add(i)}function Wd(e,t){const n=Wt[e],i=Fn[e],r=Math.atan2(Un[e].x,Un[e].z),s=-Math.cos(r),a=Math.sin(r),o=new bn({color:2236962});for(const c of[1,-1]){const h=new ge(new re(1.4,9,1.4),o),u=n.clone().addScaledVector(i,c*(xn+1.5));h.position.set(u.x,n.y+4.5,u.z),ce.add(h)}if(t)for(let c=0;c<10;c++){const h=new ge(new re(1.9,1.4,1.4),new an({color:c%2?1118481:16777215})),u=(c-4.5)*1.9;h.position.set(n.x+s*u,n.y+9,n.z+a*u),h.rotation.y=r,ce.add(h)}else{const c=new ge(new re((xn+1.5)*2,1.4,1.4),o);c.position.set(n.x,n.y+9,n.z),c.rotation.y=r,ce.add(c)}Oy(e)}Wd(0,!1);Wd(Wt.length-1,!0);function Xd(e,t=!1){const n=new Mi,i=t?new an({color:e,transparent:!0,opacity:.45}):new bn({color:e}),r=t?i:new bn({color:2302762}),s=t?i:new bn({color:10475775}),a=(f,m,g,_,p)=>{const l=new ge(f,m);return l.position.set(g,_,p),n.add(l),l};if(a(new re(2.3,.55,4.6),i,0,.8,0),a(new re(2,.3,1),i,0,.55,2.5),a(new re(2.34,.22,4),r,0,.42,0),a(new re(.18,.3,1.4),i,-1.2,.95,.9),a(new re(.18,.3,1.4),i,1.2,.95,.9),a(new re(1.6,.55,1.9),s,0,1.3,-.2),a(new re(1.7,.1,2),i,0,1.62,-.2),a(new re(2.4,.12,.7),r,0,1.72,-2),a(new re(.14,.5,.4),r,-.8,1.4,-2),a(new re(.14,.5,.4),r,.8,1.4,-2),a(new re(.3,.18,.5),i,-1.05,1.35,.6),a(new re(.3,.18,.5),i,1.05,1.35,.6),a(new re(.5,.28,.3),r,-.5,.6,-2.35),a(new re(.5,.28,.3),r,.5,.6,-2.35),!t){const f=new an({color:16774080}),m=new an({color:16722474});a(new re(.45,.18,.1),f,-.7,.82,2.32),a(new re(.45,.18,.1),f,.7,.82,2.32),a(new re(.45,.16,.1),m,-.7,.85,-2.32),a(new re(.45,.16,.1),m,.7,.85,-2.32),n.userData.tail=m}const o=new er(.45,.45,.4,12);o.rotateZ(Math.PI/2);const c=t?i:new bn({color:1315860}),h=t?i:new an({color:14211294}),u=[],d=[];for(const[f,m,g]of[[-1.15,1.5,1],[1.15,1.5,1],[-1.15,-1.5,0],[1.15,-1.5,0]]){const _=new Mi;_.position.set(f,.45,m);const p=new Mi;p.add(new ge(o,c));const l=new ge(new er(.2,.2,.44,8).rotateZ(Math.PI/2),h);p.add(l),_.add(p),n.add(_),d.push(p),g&&u.push(_)}return n.userData.wheels={steer:u,spin:d},n}const Rn=Xd(16742938);Rn.rotation.order="YXZ";ce.add(Rn);const In=Xd(3528447,!0);ce.add(In);function dl(){const e=kM({shared:Ya.ghost,pb:ll,expected:ul}),t=Ee.reference&&Ee.reference.p.length>1?Ee.reference:null;qn=!1;let n=e.rival;Pa&&t?(n={ghost:t,kind:"pb",racingPB:!1},qn=!0):!n&&t&&(n={ghost:t,kind:"pb",racingPB:!1},qn=!0),qi=n,rn=n?n.ghost:null,fi=e.notice,qn&&(fi=(fi?fi+" ":"")+"Racing the REFERENCE run."),In.visible=!!rn,fi&&typeof console<"u"&&console.log("[canyon-debug] rival",e.status,fi)}dl();const hh=Rn.userData.wheels,bs=new ge((()=>{const e=new Va(2.4,20);return e.rotateX(-Math.PI/2),e})(),new an({color:0,transparent:!0,opacity:.32,depthWrite:!1}));ce.add(bs);const fl=500,sn=new Is((()=>{const e=new ei(1,1);return e.rotateX(-Math.PI/2),e})(),new an({transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),fl);sn.frustumCulled=!1;sn.renderOrder=1;ce.add(sn);let xs=0;const jd=new At(4867920),ky=new At(920846),dh=new At,Gy=new Kt().makeScale(0,0,0);function Yd(){for(let e=0;e<fl;e++)sn.setMatrixAt(e,Gy),sn.setColorAt(e,jd);sn.instanceMatrix.needsUpdate=!0,sn.instanceColor&&(sn.instanceColor.needsUpdate=!0),xs=0}Yd();const fh=new Kt,ph=new ti,mh=new Je,gh=new G,_h=new G;function Hy(e,t,n,i,r,s,a){mh.set(0,i,0),ph.setFromEuler(mh),gh.set(e,t,n),_h.set(r,1,s),fh.compose(gh,ph,_h),sn.setMatrixAt(xs,fh),dh.copy(jd).lerp(ky,a),sn.setColorAt(xs,dh),xs=(xs+1)%fl,sn.instanceMatrix.needsUpdate=!0,sn.instanceColor&&(sn.instanceColor.needsUpdate=!0)}let Tn=0,As=0;const pl=new Xe;pl.setAttribute("position",new Fe($n.dust.positions,3));const qd=new dM(pl,new td({color:15254682,size:1.1,transparent:!0,opacity:.45}));qd.frustumCulled=!1;ce.add(qd);const pe={steer:0,drift:!1,left:!1,right:!1,keyDrift:!1},Cn=new _v;addEventListener("keydown",e=>{ni(),(e.key==="Escape"||e.key==="p"||e.key==="P")&&(es(!ar),e.preventDefault()),(e.key==="f"||e.key==="F")&&(Aa=!Aa,gl.classList.toggle("hidden",!Aa)),!e.repeat&&((e.key==="ArrowLeft"||e.key==="a")&&(pe.left=!0),(e.key==="ArrowRight"||e.key==="d")&&(pe.right=!0),(e.key==="ArrowDown"||e.key===" ")&&(pe.keyDrift=!0,e.preventDefault()),(e.key==="r"||e.key==="R")&&af(),e.key==="Enter"&&qt==="menu"&&Qi(!1),e.key==="Enter"&&qt==="finish"&&Qi(!0),e.key==="Enter"&&qt==="run"&&Qi(!0))});addEventListener("keyup",e=>{(e.key==="ArrowLeft"||e.key==="a")&&(pe.left=!1),(e.key==="ArrowRight"||e.key==="d")&&(pe.right=!1),(e.key==="ArrowDown"||e.key===" ")&&(pe.keyDrift=!1)});const $a=document.getElementById("stick"),ml=document.getElementById("knob"),Zi=document.getElementById("driftbtn"),Vy=document.getElementById("resetbtn");Vy.addEventListener("pointerdown",e=>{e.preventDefault(),ni(),af()});$a.addEventListener("pointerdown",e=>{ni(),Cn.stickDown(e.pointerId,e.clientX);try{e.target.setPointerCapture(e.pointerId)}catch{}});$a.addEventListener("pointermove",e=>{Cn.stickMove(e.pointerId,e.clientX),ml.style.transform=`translate(calc(-50% + ${Cn.joy*34}px), -50%)`});const $d=e=>{Cn.stickUp(e.pointerId),Cn.joyOn||(ml.style.transform="translate(-50%,-50%)")};$a.addEventListener("pointerup",$d);$a.addEventListener("pointercancel",$d);Zi.addEventListener("pointerdown",e=>{ni(),Cn.driftDown(e.pointerId);try{Zi.setPointerCapture(e.pointerId)}catch{}Zi.classList.add("on"),e.preventDefault()});const Kd=e=>{Cn.driftUp(e.pointerId),Cn.drift||Zi.classList.remove("on")};Zi.addEventListener("pointerup",Kd);Zi.addEventListener("pointercancel",Kd);function Us(){pe.left=!1,pe.right=!1,pe.keyDrift=!1,pe.steer=0,pe.drift=!1,sy(Cn),ml.style.transform="translate(-50%,-50%)",Zi.classList.remove("on")}addEventListener("blur",Us);document.addEventListener("visibilitychange",()=>{document.hidden?(Us(),cn.suspend(),(qt==="run"||qt==="countdown"||qt==="watch")&&es(!0)):cn.resume()});addEventListener("pagehide",Us);const Zd=document.getElementById("retrybtn");Zd.textContent=`↻ ${bd(Be)}`;Zd.addEventListener("click",()=>{ni(),(qt==="run"||qt==="countdown")&&Qi(!0)});function Wy(){pe.left&&!pe.right?pe.steer=-1:pe.right&&!pe.left?pe.steer=1:pe.steer=Cn.steer,pe.drift=pe.keyDrift||Cn.drift}let qt="menu",vs=0,Gc=0,Ss=0,ar=!1;const rt=Mv();let Rs=!0;const _e=KS(),da={x:0,y:0,z:0};let Aa=!1,Vo=60,Oi=0,zi=0,Ua=0;function Xy(e){Fa.textContent=ly(),Fa.classList.add("show"),Ua=e+1800}function Ka(){Fa.textContent="",Fa.classList.remove("show"),Ua=0}let ys=Cd(),Ne=Number(ts(Bd)||0);const Fs=document.getElementById("time"),Gr=document.getElementById("speed"),Wo=document.getElementById("best"),$i=document.getElementById("msg"),Fa=document.getElementById("penalty"),Nr=document.getElementById("exitfb"),_i=document.getElementById("lesson"),Cs=document.getElementById("progfill"),Ke=document.getElementById("delta"),Wi=document.getElementById("split"),Os=document.getElementById("panel"),qr=document.getElementById("presult"),Qd=document.getElementById("ptitle"),jy=document.getElementById("pdate"),qe=document.getElementById("ptargets"),Yy=document.getElementById("psub"),qy=document.getElementById("phint"),gl=document.getElementById("debug"),Hc=document.getElementById("racebtn"),Jd=document.getElementById("referencebtn"),tf=document.getElementById("mutebtn"),$y=document.getElementById("fsbtn"),Za=document.getElementById("pauseoverlay"),Ky=document.getElementById("resumebtn"),Zy=document.getElementById("pausemenubtn"),_l=document.getElementById("pauseplaybtn");function $e(e,t=!1,n=!1){$i.textContent=e,$i.classList.toggle("count",t),$i.classList.toggle("go",n)}function Ml(e){const t=document.createElement("span");return t.className=e==="gold"?"mgold":e==="silver"?"msilver":"mbronze",t.textContent=e.toUpperCase(),t}function fa(e,t){const n=document.createElement("span");n.className="tpair";const i=document.createElement("span");return i.className="mtime",i.textContent=xe(t),n.append(Ml(e),document.createTextNode(" "),i),n}function Oa(e){const t=document.createElement("span");return t.className="tchunk",t.textContent=e,t}let za="";function Qy(){const e=`menu:${Ne}`;if(e===za)return;za=e,qe.replaceChildren();const t=Ee.targets;if(Ne>0){const i=Md(Ne,t);qe.append(Oa(`BEST ${xe(Ne)}`)),i==="none"?qe.append(Oa("NO MEDAL YET")):qe.append(Ml(i)),qe.append(fa("gold",t.goldMs));return}const n=document.createElement("span");n.className="tlabel",n.textContent="TARGETS —",qe.append(n),qe.append(fa("gold",t.goldMs)),qe.append(fa("silver",t.silverMs)),qe.append(fa("bronze",t.bronzeMs))}function Jy(e,t,n){const i=`finish:${e}|${t}|${n}`;if(i===za)return;za=i,qe.replaceChildren();const r=e.replace(/\s*·\s*$/,"");if(r&&qe.append(Oa(r)),t){const s=t.match(/^(next )?((?:GOLD|SILVER|BRONZE))([\s\S]*)$/);if(s){const a=document.createElement("span");a.className="tchunk",s[1]&&a.append(document.createTextNode(s[1])),a.append(Ml(s[2].toLowerCase())),a.append(document.createTextNode(s[3])),qe.append(a)}else qe.append(document.createTextNode(t))}n&&qe.append(Oa(n))}const tE=document.getElementById("stopbtn");document.getElementById("day").textContent=Jn==="daily"?`CANYON DAILY · ${ir}`:Ee.title.toUpperCase();function ef(){Ne>0?Wo.textContent=`BEST ${xe(Ne)}`:Yn>0?Wo.textContent=`FRIEND ${xe(Yn)}`:Wo.textContent="BEST —"}ef();const cn=US({createContext:()=>{const e=window,t=e.AudioContext||e.webkitAudioContext;if(!t)throw new Error("no AudioContext");return new t},storage:(()=>{try{return localStorage}catch{return null}})()});let Mh=!1;function xl(){tf.textContent=cn.isMuted()?"SOUND OFF":"SOUND ON"}function ni(){if(!Mh){Mh=!0;try{cn.start()}catch{}xl()}}const Xo=SS();let xh=ts("canyon-drift-lesson-seen")==="1";const nf=`${Ee.storageKey}-practice`,rr=TS(5);{const e=ts(nf);if(e){const[t,n]=e.split(","),i=Number(t),r=Number(n);isFinite(i)&&i>=0&&(rr.clean=Math.floor(i)),isFinite(r)&&r>=0&&(rr.perfect=Math.floor(r))}}function eE(){Ia(nf,`${rr.clean},${rr.perfect}`)}let Xi=null,Es=0;function Qa(){Nr.textContent="",Nr.classList.remove("show"),Es=0}function nE(e){const t=new URL(location.href);e==="daily"?t.searchParams.delete("mode"):t.searchParams.set("mode",e),location.assign(t.toString())}const vh={daily:document.getElementById("modedaily"),practice:document.getElementById("modepractice"),benchmark:document.getElementById("modebenchmark")};for(const e of["daily","practice","benchmark"])vh[e].onclick=()=>nE(e),vh[e].classList.toggle("active",e===Jn);function vl(){const e=!!Ee.reference,t=Ne>0||!!Ya.ghost||Yn>0;Hc.classList.toggle("hidden",!(e&&t)),Jd.classList.toggle("hidden",!e),e&&(Hc.textContent=Pa?"RACE MY BEST":"RACE REFERENCE")}vl();Hc.onclick=()=>{Pa=!Pa,dl(),vl()};Jd.onclick=()=>rE();tf.onclick=()=>{ni(),cn.toggleMuted(),xl()};xl();$y.onclick=()=>{const e=document.documentElement;document.fullscreenElement?document.exitFullscreen?.():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?.()};Ky.onclick=()=>es(!1);Zy.onclick=()=>{es(!1),Ba()};function iE(){const e=[];return Ne>0&&e.push(`Your best ${xe(Ne)}`),Yn>0&&e.push(`Friend ${xe(Yn)}`),fi&&e.push(fi),!qn&&(qi||Yn)?e.push(GM(qi,Yn)):qn||e.push(Ee.reference?"Race the reference, then watch it":"Point-to-point sprint · flat out, drift the hairpins"),e.join(" · ")}function es(e){qt!=="run"&&qt!=="countdown"&&qt!=="watch"||(ar=e,Za.classList.toggle("hidden",!e),_l.textContent=e?"RESUME":"PAUSE",e?cn.suspend():cn.resume())}function Ba(){ar=!1,Za.classList.add("hidden"),_l.textContent="PAUSE",qt="menu",document.body.classList.remove("racing","watching"),Os.classList.remove("hidden"),Rn.visible=!0,In.visible=!!rn,$e(""),Ke.textContent="",Ke.className="",Fs.textContent="0:00.00",Gr.textContent="0 km/h",Cs.style.width="0%",Qa(),cn.reset()}function rE(){!Ee.reference||Ee.reference.p.length<2||(ni(),Us(),Os.classList.add("hidden"),document.body.classList.add("racing","watching"),ar=!1,Za.classList.add("hidden"),Ss=0,qt="watch",Rn.visible=!1,In.visible=!0,$e("REFERENCE — DEMONSTRATION"),_i.textContent="",Wi.textContent="",Ke.textContent="REPLAY",Ke.className="",Fs.textContent="0:00.00",Gr.textContent="0 km/h",Cs.style.width="0%",Qa(),Ka())}tE.onclick=()=>{es(!1),Ba()};_l.onclick=()=>es(!ar);function Sl(e,t,n){const i=(t-se.x[e])*se.nx[e]+(n-se.z[e])*se.nz[e];return zr(se.y[e],i,xn)}function rf(){Rn.position.set(rt.px,rt.py,rt.pz),Rn.rotation.set(rt.pitch,rt.heading,0);const e=Sl(rt.groundIdx,rt.px,rt.pz)+.2;bs.position.set(rt.px,e+.06,rt.pz),bs.scale.setScalar(1+Vt(rt.py-e,0,12)*.04)}function sf(e){Ev(rt,se,e),rf(),ja(_e,Ps,rt.px,rt.py,rt.pz,rt.heading),Tn=0,As=0,Rs=!0}function af(){if(qt==="finish"){Qi(!0);return}qt==="run"&&(Tv(rt),rf(),ja(_e,Ps,rt.px,rt.py,rt.pz,rt.heading),Tn=0,As=0,Rs=!0,Xy(performance.now()),$e(""))}sf(0);Se.position.set(rt.px-10,rt.py+6,rt.pz-10);Se.lookAt(rt.px,rt.py+1,rt.pz);let Sh=!1,wa=3.1;function Qi(e=!1){Us(),Os.classList.add("hidden"),document.body.classList.add("racing"),document.body.classList.remove("watching"),Rn.visible=!0,qt="countdown",vs=0,pi=0,wa=ry(e,Sh),Sh=!0,sf(0),Oi=0,zi=0,kc=0;const t=uy();Fs.textContent=t.time,Cs.style.width=`${t.progressPct}%`,Ke.textContent=t.delta,Ke.className="",Wi.textContent=t.split,gl.textContent=t.debug,ys=Cd(),$e(""),Ka(),Yd(),Qa(),Xi=null,ar=!1,Za.classList.add("hidden"),cn.reset(),Gr.textContent="0 km/h",_i.textContent="",Vi=kr.map(()=>null),Se.position.set(_e.px,_e.py,_e.pz),Se.lookAt(_e.lx,_e.ly,_e.lz),Se.fov=_e.fov,Se.updateProjectionMatrix(),In.visible=!!rn}document.getElementById("drivebtn").onclick=()=>{ni(),Qi(qt==="finish")};kd.addEventListener("pointerdown",()=>{ni(),qt==="menu"&&Qi()});document.getElementById("sharebtn").onclick=async()=>{const e=qt==="finish",t=e?Gc:Ne;let n="";e?n=ld(rt.rec,Gc,sl,ul):n=ts(Na)||"";const i=LS(jM(location.origin,location.pathname,{day:ir,timeMs:t,ghost:n}),Jn),r=i.includes("&g="),s=XM(ir,t,i),a=await $M({requestNativeShare:o=>navigator.share(o),copyText:o=>navigator.clipboard.writeText(o)},{title:Ee.title,text:s,url:i,hasGhost:r,isFinish:e},qM(Be,typeof navigator.share=="function"));qr.textContent=a.message,qr.classList.remove("finish")};const sE=new G;function aE(e){Wy();const t=Vt(pe.steer,-1,1),n=wv(rt,se,{steer:t,drift:pe.drift},e);rt.rhythmOut.event!=="none"&&(Xi={event:rt.rhythmOut.event,grade:rt.rhythmOut.grade}),n.finished&&oE(),Tn=BS(Tn,zS(rt.driftAmt,Math.abs(n.slip),n.spd,rt.grounded,n.drifting),e),As++;const i=WS(Tn);if(i>0){const s=XS(Tn);for(let a=0;a<i;a++)$n.dust.spawn(rt.px,rt.py,rt.pz,s)}const r=VS(Tn);if(r>0&&As%r===0){const s=Sl(rt.groundIdx,rt.px,rt.pz)+.2,a=Math.sin(rt.heading),o=Math.cos(rt.heading),c=-o,h=a,u=kS(Tn),d=GS(Tn),f=HS(Tn);for(const m of[1,-1])Hy(rt.px-a*1.5+c*1*m,s+.22,rt.pz-o*1.5+h*1*m,rt.heading,u,d,f)}return n.offroad&&rt.grounded&&n.spd>12&&As%2===0&&$n.dust.spawn(rt.px,rt.py+.1,rt.pz,2.4),sE.set(rt.vx,0,rt.vz),n}function oE(){if(qt!=="run")return;qt="finish",pi=0,ja(_e,Ps,rt.px,rt.py,rt.pz,rt.heading),Rs=!0;const e=Math.round(rt.raceMs);Gc=e;const t=Ne;if(!Ne||e<Ne){Ne=e,Ia(Bd,String(Ne));const h=ld(rt.rec,e,sl,ul);Ia(Na,h);try{const u=Ns(ts(Na));ll=u&&u.p.length>1?u:null,dl()}catch{}}ef(),vl();const n=Ne===e,i=Md(e,Ee.targets);Qd.textContent=n?"NEW BEST!":"FINISH!";const r=!t||n?t?`by ${xe(t-e)}`:"first finished run!":`+${xe(e-t)} vs best`,s=i==="none"?"no medal":`${i.toUpperCase()} medal`;qr.textContent=`${xe(e)} · ${s} · ${r} · best ${xe(Ne)}${Yn?` · friend ${xe(Yn)}`:""}`,qr.classList.add("finish");const a=rn?kr.map(h=>Uc(rn,se.x[h],se.z[h])):[],o=CS(RS(Vi,a));Jy(qn?"REFERENCE · ":"",bS(Ne,Ee.targets),o),document.body.classList.remove("racing"),Os.classList.remove("hidden");const c=document.getElementById("drivebtn");c.textContent="RETRY (Enter)",c.focus(),$e(""),Ka(),Qa(),Jn==="practice"&&(_i.textContent=_d(rr,Be))}const cE=Fs;let yh=performance.now(),pi=0;const pa=1/60,ma=fy;function lE(){if(!Ms)return;Ms.position.x=Math.round(Se.position.x/ma)*ma,Ms.position.z=Math.round(Se.position.z/ma)*ma;const e=Math.min(Math.max(rt.groundIdx|0,0),se.n-1);Ms.position.y=rd(se.y[e])-.05}function fs(){lE(),qa.render(ce,Se)}function of(e){requestAnimationFrame(of);let t=Math.min((e-yh)/1e3,.1);if(yh=e,t>0&&(Vo=on(Vo,1/t,.05)),ar&&(qt==="countdown"||qt==="run"||qt==="watch")){fs();return}if(qt==="watch"){const n=Ee.reference;if(!n){Ba();return}Ss+=t*1e3;const i=n.t,r=Math.min(Ss,i),s=Fo(n,r),a=Fo(n,Math.max(0,r-60)),o=Math.hypot(s.x-a.x,s.z-a.z)/.06;if(Fs.textContent=xe(r),Gr.textContent=`${ih(o)} km/h`,Cs.style.width=`${i>0?Math.min(100,r/i*100):0}%`,In.visible=!0,In.position.set(s.x,s.y,s.z),In.rotation.set(0,s.h,0),Se.position.set(s.x-Math.sin(s.h)*12,s.y+5,s.z-Math.cos(s.h)*12),Se.lookAt(s.x,s.y+1,s.z),Ss>i+700&&($e("REFERENCE COMPLETE"),Ss>i+1600)){Ba();return}fs();return}if(qt==="menu"){const n=e/1e3;Se.position.set(Wt[0].x+Math.cos(n*.15)*58,Wt[0].y+24,Wt[0].z+Math.sin(n*.15)*58),Se.lookAt(Wt[0].x,Wt[0].y+1,Wt[0].z),Qd.textContent=Ee.title.toUpperCase(),jy.textContent=Jn==="daily"?ir:"",Yy.textContent=Ee.description,Qy(),qr.textContent=iE(),qr.classList.remove("finish"),qy.innerHTML=Be?"Mobile: left stick steers · tap DRIFT to slide · steer back the other way to exit · RESCUE returns to the track (+3s)<br/>Controls: tap PAUSE to stop the clock · MENU to quit · RETRY restarts":"PC: ← → steer · ↓ / space drift · R rescue (+3s) · Enter retry · Esc / P pause<br/>Drift: hold a direction, tap DRIFT to start the slide, hold it, then countersteer to exit",Os.classList.remove("hidden"),document.getElementById("drivebtn").textContent="DRIVE",Ke.textContent="",Ke.className="",Wi.textContent="",Gr.textContent="0 km/h",_i.textContent="",fs();return}if(qt==="countdown"){if(vs+=t,wa>1){const n=3-Math.floor(vs);$e(n>0?String(n):"GO!",!0,n<=0)}else{const n=vs>wa-.25;$e(n?"GO!":"READY",!0,n)}vs>wa&&(qt="run",$e("")),fs();return}if(qt==="run"||qt==="finish"){if(qt==="run"){pi+=t;let n=0,i=null;for(;pi>=pa&&n<4&&qt==="run";)i=aE(pa),pi-=pa,n++;pi=Iv(pi),ys=Rv(ys,n,i??ys);const r=ys;i&&i.wallHit===!0&&(Oi=Math.min(1,(i.wallSev??0)+.25));const s=Rs?1:Vt(pi/pa,0,1);Rs=!1;const a=bv(rt,s),o=on(rt.prevRaceMs,rt.raceMs,s);if(cE.textContent=xe(rt.raceMs),Gr.textContent=`${ih(r.spd)} km/h`,Cs.style.width=`${r.sIdx/(se.n-1)*100}%`,rn&&qi){const p=Uc(rn,rt.px,rt.pz);if(p>=0){const l=rt.raceMs-p,v=qn?"REF":qi.kind==="friend"?"FRIEND":"PB";Ke.textContent=$u(l,r.spd,v),Ke.className=l<0?"ahead":"behind"}else Ke.textContent="",Ke.className=""}else Ke.textContent="",Ke.className="";for(let p=0;p<kr.length;p++)if(Vi[p]===null&&r.sIdx>=kr[p]){if(Vi[p]=Math.round(rt.raceMs),rn){const l=kr[p],v=Uc(rn,se.x[l],se.z[l]),M=qn?"REF":qi&&qi.kind==="friend"?"FRIEND":"PB";Wi.textContent=v>=0?`S${p+1} ${$u(Vi[p]-v,r.spd,M)}`:`S${p+1} ${xe(Vi[p])}`}else Wi.textContent=`S${p+1} ${xe(Vi[p])}`;kc=e+1500}Wi.textContent!==""&&e>kc&&(Wi.textContent=""),Ua&&e>Ua&&Ka();const c=Xi?Xi.event:"none",h=Xi?Xi.grade:"none";Xi=null;const u=xS(c,h);if(u&&(Nr.textContent=u,Nr.classList.add("show"),Es=e+1200,cn.oneShot("cleanExit",.5),zi=Math.min(1,.35+(rt.rhythm.lastQuality??0)*.65)),Es&&e>Es&&(Nr.classList.remove("show"),Nr.textContent="",Es=0),Jn==="practice"?(AS(rr,c,h)&&eE(),_i.textContent=_d(rr,Be)):xh?_i.textContent="":(yS(Xo,{event:c,grade:h,phase:rt.rhythmOut.phase,slideAge:rt.rhythm.slideAge}),Xo.step==="complete"?(xh=!0,Ia("canyon-drift-lesson-seen","1"),_i.textContent=""):_i.textContent=ES(Xo.step,Be)),cn.update(t,{speed:r.spd,maxSpeed:Ad,load:r.offroad?.8:Math.min(1,rt.driftAmt),slip:Math.min(1,rt.driftAmt),drifting:r.drifting,grounded:rt.grounded}),i&&(i.wallHit===!0?cn.oneShot("crash",Vt(i.wallSev??.5,.2,1)):i.landed&&cn.oneShot("land",Vt(Math.abs(i.landV)/12,.2,1))),r.stuckMs>1500?$e(oy(Be)):r.oobMs>900?$e(cy(Be)):r.offroad&&rt.grounded&&r.spd>12?$e("LOW GRIP — DIRT"):r.drifting?$e("DRIFT"):($i.textContent==="DRIFT"||$i.textContent.startsWith("STUCK")||$i.textContent.startsWith("OFF COURSE")||$i.textContent==="LOW GRIP — DIRT")&&$e(""),rn&&rn.p.length>1){const p=Fo(rn,o);In.position.set(p.x,p.y,p.z),In.rotation.set(0,p.h,0)}Rn.position.set(a.x,a.y,a.z),Oi*=Math.exp(-5*t),Oi<.001&&(Oi=0),zi*=Math.exp(-4.5*t),zi<.001&&(zi=0);const d=Oi>0?Math.sin(e*.09)*.18*Oi:0,m=-Vt(r.slip,-.9,.9)*(.15+.35*_e.driftMix);Rn.rotation.set(a.pitch-zi*.05,a.h+m,-pe.steer*(.06+_e.driftMix*.16)-zi*.07+d);const g=Rn.userData.tail;g&&g.color.setHex(_e.driftMix>.4||pe.drift?16734762:16722474);const _=Sl(r.gIdx??r.sIdx,a.x,a.z)+.2;bs.position.set(a.x,_+.06,a.z),bs.scale.setScalar(1+Vt(a.y-_,0,12)*.04),JS(_e,Ps,{dt:t,px:a.x,py:a.y,pz:a.z,heading:a.h,vx:rt.vx,vz:rt.vz,speed:r.spd,drifting:r.drifting,tangentX:se.tx[r.sIdx],tangentZ:se.tz[r.sIdx],hasTangent:!0,landed:i?i.landed:!1,landV:i?i.landV:0,wallHit:i?i.wallHit===!0:!1,wallVn:i?(i.wallSev??0)*25:0}),ty(_e,da),Se.position.set(da.x,da.y,da.z),Se.lookAt(_e.lx,_e.ly,_e.lz),Math.abs(Se.fov-_e.fov)>.001&&(Se.fov=_e.fov,Se.updateProjectionMatrix());for(const p of hh.steer)p.rotation.y=pe.steer*.42;for(const p of hh.spin)p.rotation.x+=r.spd/.45*t;if(Aa){const p=(r.slip*180/Math.PI).toFixed(1),l=(r.yawRate*180/Math.PI).toFixed(0);gl.textContent=`FPS ${Vo.toFixed(0)} dt ${(t*1e3).toFixed(2)}ms steps ${n} a ${s.toFixed(2)} | spd ${r.spd.toFixed(1)} f ${r.fSpeed.toFixed(1)} l ${r.lSpeed.toFixed(1)} slip ${p} yaw ${l}/s ${r.surface}${r.drifting?" DRIFT":""} fov ${Se.fov.toFixed(1)} hold ${rt.driftHold.toFixed(2)} exit ${rt.exitT.toFixed(2)} ${r.driftPhase??"idle"} q ${(r.exitQuality??0).toFixed(2)} rb ${(r.rhythmBoost??0).toFixed(1)} trl ${Tn.toFixed(2)} ch ${_e.camH.toFixed(2)} imp ${ey(_e).toFixed(2)} oob ${(r.oobMs/1e3).toFixed(1)}s`}}$n.update(t),pl.attributes.position.needsUpdate=!0,fs()}}requestAnimationFrame(of);

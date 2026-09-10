(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="170",_u=0,ac=1,xu=2,$l=1,vu=2,Pn=3,ai=0,Ce=1,dn=2,ei=0,Ji=1,oc=2,cc=3,lc=4,Mu=5,yi=100,Su=101,yu=102,Eu=103,Tu=104,Au=200,bu=201,wu=202,Ru=203,Ba=204,za=205,Cu=206,Lu=207,Pu=208,Du=209,Iu=210,Uu=211,Nu=212,Fu=213,Ou=214,Ha=0,Ga=1,ka=2,ar=3,Va=4,Wa=5,Xa=6,qa=7,Po=0,Bu=1,zu=2,ni=0,Hu=1,Gu=2,ku=3,Vu=4,Wu=5,Xu=6,qu=7,Kl=300,or=301,cr=302,Ya=303,$a=304,Vs=306,Ka=1e3,Ai=1001,ja=1002,$e=1003,Yu=1004,Wr=1005,Mn=1006,Qs=1007,bi=1008,Un=1009,jl=1010,Zl=1011,Ir=1012,Do=1013,Ri=1014,Sn=1015,Br=1016,Io=1017,Uo=1018,lr=1020,Jl=35902,Ql=1021,th=1022,mn=1023,eh=1024,nh=1025,Qi=1026,hr=1027,No=1028,Fo=1029,ih=1030,Oo=1031,Bo=1033,As=33776,bs=33777,ws=33778,Rs=33779,Za=35840,Ja=35841,Qa=35842,to=35843,eo=36196,no=37492,io=37496,ro=37808,so=37809,ao=37810,oo=37811,co=37812,lo=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,Cs=36492,vo=36494,Mo=36495,rh=36283,So=36284,yo=36285,Eo=36286,$u=3200,Ku=3201,sh=0,ju=1,jn="",tn="srgb",dr="srgb-linear",Ws="linear",te="srgb",Ii=7680,hc=519,Zu=512,Ju=513,Qu=514,ah=515,tf=516,ef=517,nf=518,rf=519,uc=35044,fc="300 es",Dn=2e3,Fs=2001;class pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,To=180/Math.PI;function zr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function sf(n,t){return(n%t+t)%t}function ea(n,t,e){return(1-e)*n+e*t}function Mr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,i,r,s,a,o,c,h){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,h)}set(t,e,i,r,s,a,o,c,h){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],l=r[6],x=r[1],M=r[4],v=r[7],D=r[2],C=r[5],w=r[8];return s[0]=a*_+o*x+c*D,s[3]=a*m+o*M+c*C,s[6]=a*l+o*v+c*w,s[1]=h*_+u*x+f*D,s[4]=h*m+u*M+f*C,s[7]=h*l+u*v+f*w,s[2]=d*_+p*x+g*D,s[5]=d*m+p*M+g*C,s[8]=d*l+p*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-i*s*u+i*o*c+r*s*h-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],f=u*a-o*h,d=o*c-u*s,p=h*s-a*c,g=e*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*h-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=d*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(i*c-h*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),h=Math.sin(s);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-r*h,r*c,-r*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Bt;function oh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function af(){const n=Os("canvas");return n.style.display="block",n}const dc={};function Rr(n){n in dc||(dc[n]=!0,console.warn(n))}function of(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function cf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(n.r=In(n.r),n.g=In(n.g),n.b=In(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===jn?Ws:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const pc=[.64,.33,.3,.6,.15,.06],mc=[.2126,.7152,.0722],gc=[.3127,.329],_c=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[dr]:{primaries:pc,whitePoint:gc,transfer:Ws,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:mc,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:pc,whitePoint:gc,transfer:te,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:mc,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});let Ui;class hf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Os("canvas")),Ui.width=t.width,Ui.height=t.height;const i=Ui.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Os("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=In(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(In(e[i]/255)*255):e[i]=In(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uf=0;class ch{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=zr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ia(r[a].image)):s.push(ia(r[a]))}else s=ia(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;class Le extends pr{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=Ai,r=Ai,s=Mn,a=bi,o=mn,c=Un,h=Le.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=zr(),this.name="",this.source=new ch(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Kl;Le.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,h=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],l=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+l-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,v=(p+1)/2,D=(l+1)/2,C=(u+d)/4,w=(f+_)/4,P=(g+m)/4;return M>v&&M>D?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=w/i):v>D?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=P/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=P/s),this.set(i,r,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((h+p+l-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends pr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Le(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ch(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends df{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lh extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],h=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==d||h!==p||u!==g){let m=1-o;const l=c*d+h*p+u*g+f*_,x=l>=0?1:-1,M=1-l*l;if(M>Number.EPSILON){const D=Math.sqrt(M),C=Math.atan2(D,l*x);m=Math.sin(m*C)/D,o=Math.sin(o*C)/D}const v=o*x;if(c=c*m+d*v,h=h*m+p*v,u=u*m+g*v,f=f*m+_*v,m===1-o){const D=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=D,h*=D,u*=D,f*=D}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],h=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*f+c*p-h*d,t[e+1]=c*g+u*d+h*f-o*p,t[e+2]=h*g+u*p+o*d-c*f,t[e+3]=u*g-o*f-c*d-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+h*p*g,this._y=h*p*f-d*u*g,this._z=h*u*g+d*p*f,this._w=h*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+h*p*g,this._y=h*p*f-d*u*g,this._z=h*u*g-d*p*f,this._w=h*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-h*p*g,this._y=h*p*f+d*u*g,this._z=h*u*g+d*p*f,this._w=h*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-h*p*g,this._y=h*p*f+d*u*g,this._z=h*u*g-d*p*f,this._w=h*u*f+d*p*g;break;case"YZX":this._x=d*u*f+h*p*g,this._y=h*p*f+d*u*g,this._z=h*u*g-d*p*f,this._w=h*u*f-d*p*g;break;case"XZY":this._x=d*u*f-h*p*g,this._y=h*p*f-d*u*g,this._z=h*u*g+d*p*f,this._w=h*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-h)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+h)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-h)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+h)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=i*u+a*o+r*h-s*c,this._y=r*u+a*c+s*o-i*h,this._z=s*u+a*h+i*c-r*o,this._w=a*u-i*o-r*c-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),f=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*h+a*f-o*u,this.y=i+c*u+o*h-s*f,this.z=r+c*f+s*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new H,vc=new On;class Pi{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),qr.subVectors(this.max,Sr),Ni.subVectors(t.a,Sr),Fi.subVectors(t.b,Sr),Oi.subVectors(t.c,Sr),Vn.subVectors(Fi,Ni),Wn.subVectors(Oi,Fi),fi.subVectors(Ni,Oi);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-fi.z,fi.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,fi.z,0,-fi.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-fi.y,fi.x,0];return!sa(e,Ni,Fi,Oi,qr)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,Ni,Fi,Oi,qr))?!1:(Yr.crossVectors(Vn,Wn),e=[Yr.x,Yr.y,Yr.z],sa(e,Ni,Fi,Oi,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new H,new H,new H,new H,new H,new H,new H,new H],cn=new H,Xr=new Pi,Ni=new H,Fi=new H,Oi=new H,Vn=new H,Wn=new H,fi=new H,Sr=new H,qr=new H,Yr=new H,di=new H;function sa(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){di.fromArray(n,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),c=t.dot(di),h=e.dot(di),u=i.dot(di);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const mf=new Pi,yr=new H,aa=new H;class mr{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):mf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);const e=yr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(yr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(aa)),this.expandByPoint(yr.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new H,oa=new H,$r=new H,Xn=new H,ca=new H,Kr=new H,la=new H;class hh{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){oa.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(oa);const s=t.distanceTo(e)*.5,a=-this.direction.dot($r),o=Xn.dot(this.direction),c=-Xn.dot($r),h=Xn.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+h}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+h;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+h):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+h);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(oa).addScaledVector($r,d),p}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const i=bn.dot(this.direction),r=bn.dot(bn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,r=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,r=(t.min.x-d.x)*h),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,i,r,s){ca.subVectors(e,t),Kr.subVectors(i,t),la.crossVectors(ca,Kr);let a=this.direction.dot(la),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const c=o*this.direction.dot(Kr.crossVectors(Xn,Kr));if(c<0)return null;const h=o*this.direction.dot(ca.cross(Xn));if(h<0||c+h>a)return null;const u=-o*Xn.dot(la);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,i,r,s,a,o,c,h,u,f,d,p,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,h,u,f,d,p,g,_,m)}set(t,e,i,r,s,a,o,c,h,u,f,d,p,g,_,m){const l=this.elements;return l[0]=t,l[4]=e,l[8]=i,l[12]=r,l[1]=s,l[5]=a,l[9]=o,l[13]=c,l[2]=h,l[6]=u,l[10]=f,l[14]=d,l[3]=p,l[7]=g,l[11]=_,l[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Bi.setFromMatrixColumn(t,0).length(),s=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),h=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*f,g=o*u,_=o*f;e[0]=c*u,e[4]=-c*f,e[8]=h,e[1]=p+g*h,e[5]=d-_*h,e[9]=-o*c,e[2]=_-d*h,e[6]=g+p*h,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*f,g=h*u,_=h*f;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*h,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*f,g=h*u,_=h*f;e[0]=d-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*f,g=o*u,_=o*f;e[0]=c*u,e[4]=g*h-p,e[8]=d*h+_,e[1]=c*f,e[5]=_*h+d,e[9]=p*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*h,g=o*c,_=o*h;e[0]=c*u,e[4]=_-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=p*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=a*c,p=a*h,g=o*c,_=o*h;e[0]=c*u,e[4]=-f,e[8]=h*u,e[1]=d*f+_,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gf,t,_f)}lookAt(t,e,i){const r=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),qn.crossVectors(i,ke),qn.lengthSq()===0&&(Math.abs(i.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),qn.crossVectors(i,ke)),qn.normalize(),jr.crossVectors(ke,qn),r[0]=qn.x,r[4]=jr.x,r[8]=ke.x,r[1]=qn.y,r[5]=jr.y,r[9]=ke.y,r[2]=qn.z,r[6]=jr.z,r[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],l=i[14],x=i[3],M=i[7],v=i[11],D=i[15],C=r[0],w=r[4],P=r[8],T=r[12],S=r[1],b=r[5],z=r[9],L=r[13],U=r[2],R=r[6],N=r[10],q=r[14],X=r[3],rt=r[7],ht=r[11],mt=r[15];return s[0]=a*C+o*S+c*U+h*X,s[4]=a*w+o*b+c*R+h*rt,s[8]=a*P+o*z+c*N+h*ht,s[12]=a*T+o*L+c*q+h*mt,s[1]=u*C+f*S+d*U+p*X,s[5]=u*w+f*b+d*R+p*rt,s[9]=u*P+f*z+d*N+p*ht,s[13]=u*T+f*L+d*q+p*mt,s[2]=g*C+_*S+m*U+l*X,s[6]=g*w+_*b+m*R+l*rt,s[10]=g*P+_*z+m*N+l*ht,s[14]=g*T+_*L+m*q+l*mt,s[3]=x*C+M*S+v*U+D*X,s[7]=x*w+M*b+v*R+D*rt,s[11]=x*P+M*z+v*N+D*ht,s[15]=x*T+M*L+v*q+D*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],l=t[15];return g*(+s*c*f-r*h*f-s*o*d+i*h*d+r*o*p-i*c*p)+_*(+e*c*p-e*h*d+s*a*d-r*a*p+r*h*u-s*c*u)+m*(+e*h*f-e*o*p-s*a*f+i*a*p+s*o*u-i*h*u)+l*(-r*o*u-e*c*f+e*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],l=t[15],x=f*m*h-_*d*h+_*c*p-o*m*p-f*c*l+o*d*l,M=g*d*h-u*m*h-g*c*p+a*m*p+u*c*l-a*d*l,v=u*_*h-g*f*h+g*o*p-a*_*p-u*o*l+a*f*l,D=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,C=e*x+i*M+r*v+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=x*w,t[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*l-i*d*l)*w,t[2]=(o*m*s-_*c*s+_*r*h-i*m*h-o*r*l+i*c*l)*w,t[3]=(f*c*s-o*d*s-f*r*h+i*d*h+o*r*p-i*c*p)*w,t[4]=M*w,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*l+e*d*l)*w,t[6]=(g*c*s-a*m*s-g*r*h+e*m*h+a*r*l-e*c*l)*w,t[7]=(a*d*s-u*c*s+u*r*h-e*d*h-a*r*p+e*c*p)*w,t[8]=v*w,t[9]=(g*f*s-u*_*s-g*i*p+e*_*p+u*i*l-e*f*l)*w,t[10]=(a*_*s-g*o*s+g*i*h-e*_*h-a*i*l+e*o*l)*w,t[11]=(u*o*s-a*f*s-u*i*h+e*f*h+a*i*p-e*o*p)*w,t[12]=D*w,t[13]=(u*_*r-g*f*r+g*i*d-e*_*d-u*i*m+e*f*m)*w,t[14]=(g*o*r-a*_*r-g*i*c+e*_*c+a*i*m-e*o*m)*w,t[15]=(a*f*r-u*o*r+u*i*c-e*f*c-a*i*d+e*o*d)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,h=s*a,u=s*o;return this.set(h*a+i,h*o-r*c,h*c+r*o,0,h*o+r*c,u*o+i,u*c-r*a,0,h*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,h=s+s,u=a+a,f=o+o,d=s*h,p=s*u,g=s*f,_=a*u,m=a*f,l=o*f,x=c*h,M=c*u,v=c*f,D=i.x,C=i.y,w=i.z;return r[0]=(1-(_+l))*D,r[1]=(p+v)*D,r[2]=(g-M)*D,r[3]=0,r[4]=(p-v)*C,r[5]=(1-(d+l))*C,r[6]=(m+x)*C,r[7]=0,r[8]=(g+M)*w,r[9]=(m-x)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const a=Bi.set(r[4],r[5],r[6]).length(),o=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ln.copy(this);const h=1/s,u=1/a,f=1/o;return ln.elements[0]*=h,ln.elements[1]*=h,ln.elements[2]*=h,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,e.setFromRotationMatrix(ln),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Dn){const c=this.elements,h=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let p,g;if(o===Dn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Fs)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Dn){const c=this.elements,h=1/(e-t),u=1/(i-r),f=1/(a-s),d=(e+t)*h,p=(i+r)*u;let g,_;if(o===Dn)g=(a+s)*f,_=-2*f;else if(o===Fs)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Bi=new H,ln=new $t,gf=new H(0,0,0),_f=new H(1,1,1),qn=new H,jr=new H,ke=new H,Mc=new $t,Sc=new On;class Be{constructor(t=0,e=0,i=0,r=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],h=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xf=0;const yc=new H,zi=new On,wn=new $t,Zr=new H,Er=new H,vf=new H,Mf=new On,Ec=new H(1,0,0),Tc=new H(0,1,0),Ac=new H(0,0,1),bc={type:"added"},Sf={type:"removed"},Hi={type:"childadded",child:null},ha={type:"childremoved",child:null};class Ee extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new H,e=new Be,i=new On,r=new H(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new Bt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Ec,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ec,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zr.copy(t):Zr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Er,Zr,this.up):wn.lookAt(Zr,Er,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(wn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const f=c[h];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new H(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new H,Rn=new H,ua=new H,Cn=new H,Gi=new H,ki=new H,wc=new H,fa=new H,da=new H,pa=new H,ma=new he,ga=new he,_a=new he;class pn{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),hn.subVectors(t,e),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){hn.subVectors(r,e),Rn.subVectors(i,e),ua.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(Rn),c=hn.dot(ua),h=Rn.dot(Rn),u=Rn.dot(ua),f=a*h-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(h*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return ma.setScalar(0),ga.setScalar(0),_a.setScalar(0),ma.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,i),_a.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ma,s.x),a.addScaledVector(ga,s.y),a.addScaledVector(_a,s.z),a}static isFrontFacing(t,e,i,r){return hn.subVectors(i,e),Rn.subVectors(t,e),hn.cross(Rn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),hn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return pn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Gi.subVectors(r,i),ki.subVectors(s,i),fa.subVectors(t,i);const c=Gi.dot(fa),h=ki.dot(fa);if(c<=0&&h<=0)return e.copy(i);da.subVectors(t,r);const u=Gi.dot(da),f=ki.dot(da);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*h;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(Gi,a);pa.subVectors(t,s);const p=Gi.dot(pa),g=ki.dot(pa);if(g>=0&&p<=g)return e.copy(s);const _=p*h-c*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(ki,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return wc.subVectors(s,r),o=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(wc,o);const l=1/(m+_+d);return a=_*l,o=d*l,e.copy(i).addScaledVector(Gi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function xa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Wt.workingColorSpace){if(t=sf(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=xa(a,s,t+1/3),this.g=xa(a,s,t),this.b=xa(a,s,t-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(t,e=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const i=fh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Wt.fromWorkingColorSpace(be.copy(this),t),Math.round(Fe(be.r*255,0,255))*65536+Math.round(Fe(be.g*255,0,255))*256+Math.round(Fe(be.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(be.copy(this),e);const i=be.r,r=be.g,s=be.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=tn){Wt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,i=be.g,r=be.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Jr);const i=ea(Yn.h,Jr.h,e),r=ea(Yn.s,Jr.s,e),s=ea(Yn.l,Jr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new bt;bt.NAMES=fh;let yf=0;class gr extends pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=zr(),this.name="",this.blending=Ji,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ba&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qe extends gr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new H,Qr=new Yt;class Pe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Mr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),r=Ne(r,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}}class dh extends Pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ph extends Pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends Pe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ef=0;const Je=new $t,va=new Ee,Vi=new H,Ve=new Pi,Tr=new Pi,Se=new H;class ze extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?ph:dh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Ve.min,Tr.min),Ve.expandByPoint(Se),Se.addVectors(Ve.max,Tr.max),Ve.expandByPoint(Se)):(Ve.expandByPoint(Tr.min),Ve.expandByPoint(Tr.max))}Ve.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Se.fromBufferAttribute(o,h),c&&(Vi.fromBufferAttribute(t,h),Se.add(Vi)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new H,c[P]=new H;const h=new H,u=new H,f=new H,d=new Yt,p=new Yt,g=new Yt,_=new H,m=new H;function l(P,T,S){h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),u.sub(h),f.sub(h),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(b),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(b),o[P].add(_),o[T].add(_),o[S].add(_),c[P].add(m),c[T].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,T=x.length;P<T;++P){const S=x[P],b=S.start,z=S.count;for(let L=b,U=b+z;L<U;L+=3)l(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const M=new H,v=new H,D=new H,C=new H;function w(P){D.fromBufferAttribute(r,P),C.copy(D);const T=o[P];M.copy(T),M.sub(D.multiplyScalar(D.dot(T))).normalize(),v.crossVectors(C,T);const b=v.dot(c[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,b)}for(let P=0,T=x.length;P<T;++P){const S=x[P],b=S.start,z=S.count;for(let L=b,U=b+z;L<U;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,h=new H,u=new H,f=new H;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,m),o.add(u),c.add(u),h.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const h=o.array,u=o.itemSize,f=o.normalized,d=new h.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let l=0;l<u;l++)d[g++]=h[p++]}return new Pe(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],h=t(c,i);e.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const c=[],h=s[o];for(let u=0,f=h.length;u<f;u++){const d=h[u],p=t(d,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let f=0,d=h.length;f<d;f++){const p=h[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(e))}const s=t.morphAttributes;for(const h in s){const u=[],f=s[h];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new $t,pi=new hh,ts=new mr,Cc=new H,es=new H,ns=new H,is=new H,Ma=new H,rs=new H,Lc=new H,ss=new H;class le extends Ee{constructor(t=new ze,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const u=o[c],f=s[c];u!==0&&(Ma.fromBufferAttribute(f,t),a?rs.addScaledVector(Ma,u):rs.addScaledVector(Ma.sub(e),u))}e.add(rs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(s),pi.copy(t.ray).recast(t.near),!(ts.containsPoint(pi.origin)===!1&&(pi.intersectSphere(ts,Cc)===null||pi.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Rc.copy(s).invert(),pi.copy(t.ray).applyMatrix4(Rc),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],l=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,D=M;v<D;v+=3){const C=o.getX(v),w=o.getX(v+1),P=o.getX(v+2);r=as(this,l,t,i,h,u,f,C,w,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,l=_;m<l;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);r=as(this,a,t,i,h,u,f,x,M,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],l=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,D=M;v<D;v+=3){const C=v,w=v+1,P=v+2;r=as(this,l,t,i,h,u,f,C,w,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,l=_;m<l;m+=3){const x=m,M=m+1,v=m+2;r=as(this,a,t,i,h,u,f,x,M,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Tf(n,t,e,i,r,s,a,o){let c;if(t.side===Ce?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ai,o),c===null)return null;ss.copy(o),ss.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(ss);return h<e.near||h>e.far?null:{distance:h,point:ss.clone(),object:n}}function as(n,t,e,i,r,s,a,o,c,h){n.getVertexPosition(o,es),n.getVertexPosition(c,ns),n.getVertexPosition(h,is);const u=Tf(n,t,e,i,es,ns,is,Lc);if(u){const f=new H;pn.getBarycoord(Lc,es,ns,is,f),r&&(u.uv=pn.getInterpolatedAttribute(r,o,c,h,f,new Yt)),s&&(u.uv1=pn.getInterpolatedAttribute(s,o,c,h,f,new Yt)),a&&(u.normal=pn.getInterpolatedAttribute(a,o,c,h,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new H,materialIndex:0};pn.getNormal(es,ns,is,d.normal),u.face=d,u.barycoord=f}return u}class ne extends ze{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],h=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(f,2));function g(_,m,l,x,M,v,D,C,w,P,T){const S=v/w,b=D/P,z=v/2,L=D/2,U=C/2,R=w+1,N=P+1;let q=0,X=0;const rt=new H;for(let ht=0;ht<N;ht++){const mt=ht*b-L;for(let Rt=0;Rt<R;Rt++){const Kt=Rt*S-z;rt[_]=Kt*x,rt[m]=mt*M,rt[l]=U,h.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[l]=C>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(Rt/w),f.push(1-ht/P),q+=1}}for(let ht=0;ht<P;ht++)for(let mt=0;mt<w;mt++){const Rt=d+mt+R*ht,Kt=d+mt+R*(ht+1),Y=d+(mt+1)+R*(ht+1),Q=d+(mt+1)+R*ht;c.push(Rt,Kt,Q),c.push(Kt,Y,Q),X+=6}o.addGroup(p,X,T),p+=X,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function we(n){const t={};for(let e=0;e<n.length;e++){const i=ur(n[e]);for(const r in i)t[r]=i[r]}return t}function Af(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const bf={clone:ur,merge:we};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends gr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class gh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new H,Pc=new Yt,Dc=new Yt;class nn extends gh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=To*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return To*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Pc,Dc),e.subVectors(Dc,Pc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ta*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/h,r*=a.width/c,i*=a.height/h}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Cf extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const s=new nn(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const a=new nn(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const o=new nn(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const c=new nn(Wi,Xi,t,e);c.layers=this.layers,this.add(c);const h=new nn(Wi,Xi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const h of e)this.remove(h);if(t===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,h,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _h extends Le{constructor(t,e,i,r,s,a,o,c,h,u){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,i,r,s,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lf extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new _h(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ne(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ce,blending:ei});s.uniforms.tEquirect.value=e;const a=new le(r,s),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=Mn),new Cf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Sa=new H,Pf=new H,Df=new Bt;class vi{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Sa.subVectors(i,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Df.getNormalMatrix(t),r=this.coplanarPoint(Sa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new mr,os=new H;class zo{constructor(t=new vi,e=new vi,i=new vi,r=new vi,s=new vi,a=new vi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Dn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],l=r[12],x=r[13],M=r[14],v=r[15];if(i[0].setComponents(c-s,d-h,m-p,v-l).normalize(),i[1].setComponents(c+s,d+h,m+p,v+l).normalize(),i[2].setComponents(c+a,d+u,m+g,v+x).normalize(),i[3].setComponents(c-a,d-u,m-g,v-x).normalize(),i[4].setComponents(c-o,d-f,m-_,v-M).normalize(),e===Dn)i[5].setComponents(c+o,d+f,m+_,v+M).normalize();else if(e===Fs)i[5].setComponents(o,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(os.x=r.normal.x>0?t.max.x:t.min.x,os.y=r.normal.y>0?t.max.y:t.min.y,os.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function If(n){const t=new WeakMap;function e(o,c){const h=o.array,u=o.usage,f=h.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,h,u),o.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,h){const u=c.array,f=c.updateRanges;if(n.bindBuffer(h,o),f.length===0)n.bufferSubData(h,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,c),h.version=o.version}}return{get:r,remove:s,update:a}}class Bn extends ze{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),h=o+1,u=c+1,f=t/o,d=e/c,p=[],g=[],_=[],m=[];for(let l=0;l<u;l++){const x=l*d-a;for(let M=0;M<h;M++){const v=M*f-s;g.push(v,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-l/c)}}for(let l=0;l<c;l++)for(let x=0;x<o;x++){const M=x+h*l,v=x+h*(l+1),D=x+1+h*(l+1),C=x+1+h*l;p.push(M,v,C),p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nf=`#ifdef USE_ALPHAHASH
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
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
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
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
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
#endif`,$f=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,id=`#define PI 3.141592653589793
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
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sd=`vec3 transformedNormal = objectNormal;
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
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
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
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pd=`PhysicalMaterial material;
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
#endif`,Dd=`struct PhysicalMaterial {
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
}`,Id=`
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vd=`#if defined( USE_POINTS_UV )
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
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xp=`float getShadowMask() {
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
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,Hp=`#if DEPTH_PACKING == 3200
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
}`,Gp=`#define DISTANCE
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
}`,kp=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,em=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,rm=`#define STANDARD
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
}`,sm=`#define TOON
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
}`,am=`#define TOON
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
}`,om=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,fm=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Uf,alphahash_pars_fragment:Nf,alphamap_fragment:Ff,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:zf,aomap_fragment:Hf,aomap_pars_fragment:Gf,batching_pars_vertex:kf,batching_vertex:Vf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:Yf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Jf,color_fragment:Qf,color_pars_fragment:td,color_pars_vertex:ed,color_vertex:nd,common:id,cube_uv_reflection_fragment:rd,defaultnormal_vertex:sd,displacementmap_pars_vertex:ad,displacementmap_vertex:od,emissivemap_fragment:cd,emissivemap_pars_fragment:ld,colorspace_fragment:hd,colorspace_pars_fragment:ud,envmap_fragment:fd,envmap_common_pars_fragment:dd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:bd,envmap_vertex:gd,fog_vertex:_d,fog_pars_vertex:xd,fog_fragment:vd,fog_pars_fragment:Md,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:yd,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Td,lights_pars_begin:Ad,lights_toon_fragment:wd,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Ld,lights_physical_fragment:Pd,lights_physical_pars_fragment:Dd,lights_fragment_begin:Id,lights_fragment_maps:Ud,lights_fragment_end:Nd,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Bd,logdepthbuf_vertex:zd,map_fragment:Hd,map_pars_fragment:Gd,map_particle_fragment:kd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphinstance_vertex:qd,morphcolor_vertex:Yd,morphnormal_vertex:$d,morphtarget_pars_vertex:Kd,morphtarget_vertex:jd,normal_fragment_begin:Zd,normal_fragment_maps:Jd,normal_pars_fragment:Qd,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:sp,iridescence_pars_fragment:ap,opaque_fragment:op,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:fp,roughnessmap_fragment:dp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:_p,shadowmask_pars_fragment:xp,skinbase_vertex:vp,skinning_pars_vertex:Mp,skinning_vertex:Sp,skinnormal_vertex:yp,specularmap_fragment:Ep,specularmap_pars_fragment:Tp,tonemapping_fragment:Ap,tonemapping_pars_fragment:bp,transmission_fragment:wp,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Lp,uv_vertex:Pp,worldpos_vertex:Dp,background_vert:Ip,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:Fp,cube_vert:Op,cube_frag:Bp,depth_vert:zp,depth_frag:Hp,distanceRGBA_vert:Gp,distanceRGBA_frag:kp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:$p,meshlambert_vert:Kp,meshlambert_frag:jp,meshmatcap_vert:Zp,meshmatcap_frag:Jp,meshnormal_vert:Qp,meshnormal_frag:tm,meshphong_vert:em,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:rm,meshtoon_vert:sm,meshtoon_frag:am,points_vert:om,points_frag:cm,shadow_vert:lm,shadow_frag:hm,sprite_vert:um,sprite_frag:fm},st={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},vn={basic:{uniforms:we([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:we([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new bt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:we([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:we([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:we([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new bt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:we([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:we([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:we([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:we([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:we([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:we([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:we([st.common,st.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:we([st.lights,st.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};vn.physical={uniforms:we([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const cs={r:0,b:0,g:0},gi=new Be,dm=new $t;function pm(n,t,e,i,r,s,a){const o=new bt(0);let c=s===!0?0:1,h,u,f=null,d=0,p=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=g(x);v===null?l(o,c):v&&v.isColor&&(l(v,1),M=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Vs)?(u===void 0&&(u=new le(new ne(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ur(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gi.copy(M.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(gi)),u.material.toneMapped=Wt.getTransfer(v.colorSpace)!==te,(f!==v||d!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new le(new Bn(2,2),new Nn({name:"BackgroundMaterial",uniforms:ur(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,p=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function l(x,M){x.getRGB(cs,mh(n)),i.buffers.color.setClear(cs.r,cs.g,cs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),c=M,l(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,l(o,c)},render:_,addToRenderList:m}}function mm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,b,z,L,U){let R=!1;const N=f(L,z,b);s!==N&&(s=N,h(s.object)),R=p(S,L,z,U),R&&g(S,L,z,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,v(S,b,z,L),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return n.createVertexArray()}function h(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,b,z){const L=z.wireframe===!0;let U=i[S.id];U===void 0&&(U={},i[S.id]=U);let R=U[b.id];R===void 0&&(R={},U[b.id]=R);let N=R[L];return N===void 0&&(N=d(c()),R[L]=N),N}function d(S){const b=[],z=[],L=[];for(let U=0;U<e;U++)b[U]=0,z[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,b,z,L){const U=s.attributes,R=b.attributes;let N=0;const q=z.getAttributes();for(const X in q)if(q[X].location>=0){const ht=U[X];let mt=R[X];if(mt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor)),ht===void 0||ht.attribute!==mt||mt&&ht.data!==mt.data)return!0;N++}return s.attributesNum!==N||s.index!==L}function g(S,b,z,L){const U={},R=b.attributes;let N=0;const q=z.getAttributes();for(const X in q)if(q[X].location>=0){let ht=R[X];ht===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const mt={};mt.attribute=ht,ht&&ht.data&&(mt.data=ht.data),U[X]=mt,N++}s.attributes=U,s.attributesNum=N,s.index=L}function _(){const S=s.newAttributes;for(let b=0,z=S.length;b<z;b++)S[b]=0}function m(S){l(S,0)}function l(S,b){const z=s.newAttributes,L=s.enabledAttributes,U=s.attributeDivisors;z[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),U[S]!==b&&(n.vertexAttribDivisor(S,b),U[S]=b)}function x(){const S=s.newAttributes,b=s.enabledAttributes;for(let z=0,L=b.length;z<L;z++)b[z]!==S[z]&&(n.disableVertexAttribArray(z),b[z]=0)}function M(S,b,z,L,U,R,N){N===!0?n.vertexAttribIPointer(S,b,z,U,R):n.vertexAttribPointer(S,b,z,L,U,R)}function v(S,b,z,L){_();const U=L.attributes,R=z.getAttributes(),N=b.defaultAttributeValues;for(const q in R){const X=R[q];if(X.location>=0){let rt=U[q];if(rt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),rt!==void 0){const ht=rt.normalized,mt=rt.itemSize,Rt=t.get(rt);if(Rt===void 0)continue;const Kt=Rt.buffer,Y=Rt.type,Q=Rt.bytesPerElement,dt=Y===n.INT||Y===n.UNSIGNED_INT||rt.gpuType===Do;if(rt.isInterleavedBufferAttribute){const at=rt.data,wt=at.stride,Lt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Ft=0;Ft<X.locationSize;Ft++)l(X.location+Ft,at.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ft=0;Ft<X.locationSize;Ft++)m(X.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let Ft=0;Ft<X.locationSize;Ft++)M(X.location+Ft,mt/X.locationSize,Y,ht,wt*Q,(Lt+mt/X.locationSize*Ft)*Q,dt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<X.locationSize;at++)l(X.location+at,rt.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<X.locationSize;at++)m(X.location+at);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let at=0;at<X.locationSize;at++)M(X.location+at,mt/X.locationSize,Y,ht,mt*Q,mt/X.locationSize*at*Q,dt)}}else if(N!==void 0){const ht=N[q];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(X.location,ht);break;case 3:n.vertexAttrib3fv(X.location,ht);break;case 4:n.vertexAttrib4fv(X.location,ht);break;default:n.vertexAttrib1fv(X.location,ht)}}}}x()}function D(){P();for(const S in i){const b=i[S];for(const z in b){const L=b[z];for(const U in L)u(L[U].object),delete L[U];delete b[z]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const z in b){const L=b[z];for(const U in L)u(L[U].object),delete L[U];delete b[z]}delete i[S.id]}function w(S){for(const b in i){const z=i[b];if(z[S.id]===void 0)continue;const L=z[S.id];for(const U in L)u(L[U].object),delete L[U];delete z[S.id]}}function P(){T(),a=!0,s!==r&&(s=r,h(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function gm(n,t,e){let i;function r(h){i=h}function s(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function a(h,u,f){f!==0&&(n.drawArraysInstanced(i,h,u,f),e.update(u,i,f))}function o(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function c(h,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)a(h[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,h,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _m(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==mn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Sn&&!P)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),l=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:l,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:D,maxSamples:C}}function xm(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new vi,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,l=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):h();else{const x=s?0:i,M=x*4;let v=l.clippingState||null;c.value=v,v=u(g,d,M,p);for(let D=0;D!==M;++D)v[D]=e[D];l.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const l=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<l)&&(m=new Float32Array(l));for(let M=0,v=p;M!==_;++M,v+=4)a.copy(f[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function vm(n){let t=new WeakMap;function e(a,o){return o===Ya?a.mapping=or:o===$a&&(a.mapping=cr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===$a)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Lf(c.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",r),e(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class vh extends gh{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Ic=[.125,.215,.35,.446,.526,.582],Ei=20,ya=new vh,Uc=new bt;let Ea=null,Ta=0,Aa=0,ba=!1;const Mi=(1+Math.sqrt(5))/2,qi=1/Mi,Nc=[new H(-Mi,qi,0),new H(Mi,qi,0),new H(-qi,0,Mi),new H(qi,0,Mi),new H(0,Mi,-qi),new H(0,Mi,qi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,Ta,Aa),this._renderer.xr.enabled=ba,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Br,format:mn,colorSpace:dr,depthBuffer:!1},r=Oc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(s)),this._blurMaterial=Sm(s,t,e)}return r}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,i,r){const o=new nn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Uc),u.toneMapping=ni,u.autoClear=!1;const p=new qe({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new le(new ne,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Uc),_=!0);for(let l=0;l<6;l++){const x=l%3;x===0?(o.up.set(0,c[l],0),o.lookAt(h[l],0,0)):x===1?(o.up.set(0,0,c[l]),o.lookAt(0,h[l],0)):(o.up.set(0,c[l],0),o.lookAt(0,0,h[l]));const M=this._cubeSize;ls(r,x*M,l>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===or||t.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ls(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ya)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nc[(r-s-1)%Nc.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new le(this._lodPlanes[r],h),d=h.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const l=[];let x=0;for(let w=0;w<Ei;++w){const P=w/_,T=Math.exp(-P*P/2);l.push(T),w===0?x+=T:w<m&&(x+=2*T)}for(let w=0;w<l.length;w++)l[w]=l[w]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=l,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const v=this._sizeLods[r],D=3*v*(r>M-Zi?r-M+Zi:0),C=4*(this._cubeSize-v);ls(e,D,C,3*v,2*v),c.setRenderTarget(e),c.render(f,ya)}}function Mm(n){const t=[],e=[],i=[];let r=n;const s=n-Zi+1+Ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Zi?c=Ic[a-n+Zi-1]:a===0&&(c=0),i.push(c);const h=1/(o-2),u=-h,f=1+h,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,l=1,x=new Float32Array(_*g*p),M=new Float32Array(m*g*p),v=new Float32Array(l*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,P=C>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(T,_*g*C),M.set(d,m*g*C);const S=[C,C,C,C,C,C];v.set(S,l*g*C)}const D=new ze;D.setAttribute("position",new Pe(x,_)),D.setAttribute("uv",new Pe(M,m)),D.setAttribute("faceIndex",new Pe(v,l)),t.push(D),r>Zi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Oc(n,t,e){const i=new Ci(n,t,e);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ls(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Sm(n,t,e){const i=new Float32Array(Ei),r=new H(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Bc(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function zc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function ym(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,h=c===Ya||c===$a,u=c===or||c===cr;if(h||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Fc(n)),f=h?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return h&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Fc(n)),f=h?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function s(o){const c=o.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Em(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Rr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Tm(n,t,e,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,l=_.length;m<l;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,l=_.length;m<l;m++)t.update(_[m],n.ARRAY_BUFFER)}}function h(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let M=0,v=x.length;M<v;M+=3){const D=x[M+0],C=x[M+1],w=x[M+2];d.push(D,C,C,w,w,D)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const D=M+0,C=M+1,w=M+2;d.push(D,C,C,w,w,D)}}else return;const m=new(oh(d)?ph:dh)(d,1);m.version=_;const l=s.get(f);l&&t.remove(l),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&h(f)}else h(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Am(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*a),e.update(p,i,1)}function h(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let l=0;l<g;l++)m+=p[l];e.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let l=0;l<d.length;l++)h(d[l]/a,p[l],_[l]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let l=0;for(let x=0;x<g;x++)l+=p[x]*_[x];e.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function wm(n,t,e){const i=new WeakMap,r=new he;function s(a,o,c){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,l=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let D=o.attributes.position.count*v,C=1;D>t.maxTextureSize&&(C=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const w=new Float32Array(D*C*4*f),P=new lh(w,D,C,f);P.type=Sn,P.needsUpdate=!0;const T=v*4;for(let b=0;b<f;b++){const z=l[b],L=x[b],U=M[b],R=D*C*4*b;for(let N=0;N<z.count;N++){const q=N*T;g===!0&&(r.fromBufferAttribute(z,N),w[R+q+0]=r.x,w[R+q+1]=r.y,w[R+q+2]=r.z,w[R+q+3]=0),_===!0&&(r.fromBufferAttribute(L,N),w[R+q+4]=r.x,w[R+q+5]=r.y,w[R+q+6]=r.z,w[R+q+7]=0),m===!0&&(r.fromBufferAttribute(U,N),w[R+q+8]=r.x,w[R+q+9]=r.y,w[R+q+10]=r.z,w[R+q+11]=U.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new Yt(D,C)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Rm(n,t,e,i){let r=new WeakMap;function s(c){const h=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}class Mh extends Le{constructor(t,e,i,r,s,a,o,c,h,u=Qi){if(u!==Qi&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qi&&(i=Ri),i===void 0&&u===hr&&(i=lr),super(null,r,s,a,o,c,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sh=new Le,Hc=new Mh(1,1),yh=new lh,Eh=new pf,Th=new _h,Gc=[],kc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function _r(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Gc[r];if(s===void 0&&(s=new Float32Array(r),Gc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xs(n,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Cm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function Pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function Dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function Im(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;Xc.set(i),n.uniformMatrix2fv(this.addr,!1,Xc),Me(e,i)}}function Um(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;Wc.set(i),n.uniformMatrix3fv(this.addr,!1,Wc),Me(e,i)}}function Nm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),Me(e,i)}}function Fm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function Bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function Hm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function Wm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hc.compareFunction=ah,s=Hc):s=Sh,e.setTexture2D(t||s,r)}function Xm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Eh,r)}function qm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Th,r)}function Ym(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||yh,r)}function $m(n){switch(n){case 5126:return Cm;case 35664:return Lm;case 35665:return Pm;case 35666:return Dm;case 35674:return Im;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return Hm;case 36294:return Gm;case 36295:return km;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}function Km(n,t){n.uniform1fv(this.addr,t)}function jm(n,t){const e=_r(t,this.size,2);n.uniform2fv(this.addr,e)}function Zm(n,t){const e=_r(t,this.size,3);n.uniform3fv(this.addr,e)}function Jm(n,t){const e=_r(t,this.size,4);n.uniform4fv(this.addr,e)}function Qm(n,t){const e=_r(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function tg(n,t){const e=_r(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function eg(n,t){const e=_r(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ng(n,t){n.uniform1iv(this.addr,t)}function ig(n,t){n.uniform2iv(this.addr,t)}function rg(n,t){n.uniform3iv(this.addr,t)}function sg(n,t){n.uniform4iv(this.addr,t)}function ag(n,t){n.uniform1uiv(this.addr,t)}function og(n,t){n.uniform2uiv(this.addr,t)}function cg(n,t){n.uniform3uiv(this.addr,t)}function lg(n,t){n.uniform4uiv(this.addr,t)}function hg(n,t,e){const i=this.cache,r=t.length,s=Xs(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Sh,s[a])}function ug(n,t,e){const i=this.cache,r=t.length,s=Xs(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Eh,s[a])}function fg(n,t,e){const i=this.cache,r=t.length,s=Xs(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Th,s[a])}function dg(n,t,e){const i=this.cache,r=t.length,s=Xs(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Me(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||yh,s[a])}function pg(n){switch(n){case 5126:return Km;case 35664:return jm;case 35665:return Zm;case 35666:return Jm;case 35674:return Qm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return rg;case 35669:case 35673:return sg;case 5125:return ag;case 36294:return og;case 36295:return cg;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return dg}}class mg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$m(e.type)}}class gg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pg(e.type)}}class _g{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function qc(n,t){n.seq.push(t),n.map[t.id]=t}function xg(n,t,e){const i=n.name,r=i.length;for(wa.lastIndex=0;;){const s=wa.exec(i),a=wa.lastIndex;let o=s[1];const c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===r){qc(e,h===void 0?new mg(o,n,t):new gg(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new _g(o),qc(e,f)),e=f}}}class Ls{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);xg(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Yc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vg=37297;let Mg=0;function Sg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const $c=new Bt;function yg(n){Wt._getMatrix($c,Wt.workingColorSpace,n);const t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case Ws:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Kc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Sg(n.getShaderSource(t),a)}else return r}function Eg(n,t){const e=yg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tg(n,t){let e;switch(t){case Hu:e="Linear";break;case Gu:e="Reinhard";break;case ku:e="Cineon";break;case Vu:e="ACESFilmic";break;case Xu:e="AgX";break;case qu:e="Neutral";break;case Wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hs=new H;function Ag(){Wt.getLuminanceCoefficients(hs);const n=hs.x.toFixed(4),t=hs.y.toFixed(4),e=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function wg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Rg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Cr(n){return n!==""}function jc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(n){return n.replace(Cg,Pg)}const Lg=new Map;function Pg(n,t){let e=zt[t];if(e===void 0){const i=Lg.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ao(e)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(n){return n.replace(Dg,Ig)}function Ig(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ug(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case cr:t="ENVMAP_TYPE_CUBE";break;case Vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cr:t="ENVMAP_MODE_REFRACTION";break}return t}function Og(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Po:t="ENVMAP_BLENDING_MULTIPLY";break;case Bu:t="ENVMAP_BLENDING_MIX";break;case zu:t="ENVMAP_BLENDING_ADD";break}return t}function Bg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function zg(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ug(e),h=Ng(e),u=Fg(e),f=Og(e),d=Bg(e),p=bg(e),g=wg(s),_=r.createProgram();let m,l,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),l=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cr).join(`
`),l.length>0&&(l+=`
`)):(m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),l=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?zt.tonemapping_pars_fragment:"",e.toneMapping!==ni?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Eg("linearToOutputTexel",e.outputColorSpace),Ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Ao(a),a=jc(a,e),a=Zc(a,e),o=Ao(o),o=jc(o,e),o=Zc(o,e),a=Jc(a),o=Jc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,l=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const M=x+m+a,v=x+l+o,D=Yc(r,r.VERTEX_SHADER,M),C=Yc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,D),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(b){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(D).trim(),U=r.getShaderInfoLog(C).trim();let R=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(R=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,D,C);else{const q=Kc(r,D,"vertex"),X=Kc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+q+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||U==="")&&(N=!1);N&&(b.diagnostics={runnable:R,programLog:z,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:l}})}r.deleteShader(D),r.deleteShader(C),P=new Ls(r,_),T=Rg(r,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,vg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=C,this}let Hg=0;class Gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new kg(t),e.set(t,i)),i}}class kg{constructor(t){this.id=Hg++,this.code=t,this.usedTimes=0}}function Vg(n,t,e,i,r,s,a){const o=new uh,c=new Gg,h=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return h.add(T),T===0?"uv":`uv${T}`}function m(T,S,b,z,L){const U=z.fog,R=L.geometry,N=T.isMeshStandardMaterial?z.environment:null,q=(T.isMeshStandardMaterial?e:t).get(T.envMap||N),X=q&&q.mapping===Vs?q.image.height:null,rt=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ht=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,mt=ht!==void 0?ht.length:0;let Rt=0;R.morphAttributes.position!==void 0&&(Rt=1),R.morphAttributes.normal!==void 0&&(Rt=2),R.morphAttributes.color!==void 0&&(Rt=3);let Kt,Y,Q,dt;if(rt){const jt=vn[rt];Kt=jt.vertexShader,Y=jt.fragmentShader}else Kt=T.vertexShader,Y=T.fragmentShader,c.update(T),Q=c.getVertexShaderID(T),dt=c.getFragmentShaderID(T);const at=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Lt=L.isInstancedMesh===!0,Ft=L.isBatchedMesh===!0,se=!!T.map,kt=!!T.matcap,It=!!q,B=!!T.aoMap,De=!!T.lightMap,Ht=!!T.bumpMap,Gt=!!T.normalMap,Tt=!!T.displacementMap,Xt=!!T.emissiveMap,Et=!!T.metalnessMap,A=!!T.roughnessMap,y=T.anisotropy>0,G=T.clearcoat>0,j=T.dispersion>0,Z=T.iridescence>0,K=T.sheen>0,pt=T.transmission>0,ot=y&&!!T.anisotropyMap,ut=G&&!!T.clearcoatMap,Vt=G&&!!T.clearcoatNormalMap,J=G&&!!T.clearcoatRoughnessMap,ft=Z&&!!T.iridescenceMap,At=Z&&!!T.iridescenceThicknessMap,Ct=K&&!!T.sheenColorMap,et=K&&!!T.sheenRoughnessMap,Mt=!!T.specularMap,St=!!T.specularColorMap,Ut=!!T.specularIntensityMap,I=pt&&!!T.transmissionMap,nt=pt&&!!T.thicknessMap,k=!!T.gradientMap,$=!!T.alphaMap,it=T.alphaTest>0,ct=!!T.alphaHash,Nt=!!T.extensions;let ce=ni;T.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=n.toneMapping);const ue={shaderID:rt,shaderType:T.type,shaderName:T.name,vertexShader:Kt,fragmentShader:Y,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:dt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&L._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&L.instanceColor!==null,instancingMorph:Lt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:dr,alphaToCoverage:!!T.alphaToCoverage,map:se,matcap:kt,envMap:It,envMapMode:It&&q.mapping,envMapCubeUVHeight:X,aoMap:B,lightMap:De,bumpMap:Ht,normalMap:Gt,displacementMap:d&&Tt,emissiveMap:Xt,normalMapObjectSpace:Gt&&T.normalMapType===ju,normalMapTangentSpace:Gt&&T.normalMapType===sh,metalnessMap:Et,roughnessMap:A,anisotropy:y,anisotropyMap:ot,clearcoat:G,clearcoatMap:ut,clearcoatNormalMap:Vt,clearcoatRoughnessMap:J,dispersion:j,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:At,sheen:K,sheenColorMap:Ct,sheenRoughnessMap:et,specularMap:Mt,specularColorMap:St,specularIntensityMap:Ut,transmission:pt,transmissionMap:I,thicknessMap:nt,gradientMap:k,opaque:T.transparent===!1&&T.blending===Ji&&T.alphaToCoverage===!1,alphaMap:$,alphaTest:it,alphaHash:ct,combine:T.combine,mapUv:se&&_(T.map.channel),aoMapUv:B&&_(T.aoMap.channel),lightMapUv:De&&_(T.lightMap.channel),bumpMapUv:Ht&&_(T.bumpMap.channel),normalMapUv:Gt&&_(T.normalMap.channel),displacementMapUv:Tt&&_(T.displacementMap.channel),emissiveMapUv:Xt&&_(T.emissiveMap.channel),metalnessMapUv:Et&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:ot&&_(T.anisotropyMap.channel),clearcoatMapUv:ut&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:et&&_(T.sheenRoughnessMap.channel),specularMapUv:Mt&&_(T.specularMap.channel),specularColorMapUv:St&&_(T.specularColorMap.channel),specularIntensityMapUv:Ut&&_(T.specularIntensityMap.channel),transmissionMapUv:I&&_(T.transmissionMap.channel),thicknessMapUv:nt&&_(T.thicknessMap.channel),alphaMapUv:$&&_(T.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Gt||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(se||$),fog:!!U,useFog:T.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:wt,skinning:L.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:se&&T.map.isVideoTexture===!0&&Wt.getTransfer(T.map.colorSpace)===te,decodeVideoTextureEmissive:Xt&&T.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(T.emissiveMap.colorSpace)===te,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===dn,flipSided:T.side===Ce,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Nt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&T.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ue.vertexUv1s=h.has(1),ue.vertexUv2s=h.has(2),ue.vertexUv3s=h.has(3),h.clear(),ue}function l(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)S.push(b),S.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(x(S,T),M(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function x(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const S=g[T.type];let b;if(S){const z=vn[S];b=bf.clone(z.uniforms)}else b=T.uniforms;return b}function D(T,S){let b;for(let z=0,L=u.length;z<L;z++){const U=u[z];if(U.cacheKey===S){b=U,++b.usedTimes;break}}return b===void 0&&(b=new zg(n,S,T,s),u.push(b)),b}function C(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function w(T){c.remove(T)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:l,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:P}}function Wg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Xg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function tl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function el(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,d,p,g,_,m){let l=n[t];return l===void 0?(l={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=l):(l.id=f.id,l.object=f,l.geometry=d,l.material=p,l.groupOrder=g,l.renderOrder=f.renderOrder,l.z=_,l.group=m),t++,l}function o(f,d,p,g,_,m){const l=a(f,d,p,g,_,m);p.transmission>0?i.push(l):p.transparent===!0?r.push(l):e.push(l)}function c(f,d,p,g,_,m){const l=a(f,d,p,g,_,m);p.transmission>0?i.unshift(l):p.transparent===!0?r.unshift(l):e.unshift(l)}function h(f,d){e.length>1&&e.sort(f||Xg),i.length>1&&i.sort(d||tl),r.length>1&&r.sort(d||tl)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:h}}function qg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new el,n.set(i,[a])):r>=s.length?(a=new el,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Yg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new bt};break;case"SpotLight":e={position:new H,direction:new H,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function $g(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Kg=0;function jg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Zg(n){const t=new Yg,e=$g(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new H);const r=new H,s=new $t,a=new $t;function o(h){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,l=0,x=0,M=0,v=0,D=0,C=0,w=0;h.sort(jg);for(let T=0,S=h.length;T<S;T++){const b=h[T],z=b.color,L=b.intensity,U=b.distance,R=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=z.r*L,f+=z.g*L,d+=z.b*L;else if(b.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(b.sh.coefficients[N],L);w++}else if(b.isDirectionalLight){const N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,X=e.get(b);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=R,i.directionalShadowMatrix[p]=b.shadow.matrix,x++}i.directional[p]=N,p++}else if(b.isSpotLight){const N=t.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(z).multiplyScalar(L),N.distance=U,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,i.spot[_]=N;const q=b.shadow;if(b.map&&(i.spotLightMap[D]=b.map,D++,q.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[_]=q.matrix,b.castShadow){const X=e.get(b);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=R,v++}_++}else if(b.isRectAreaLight){const N=t.get(b);N.color.copy(z).multiplyScalar(L),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=N,m++}else if(b.isPointLight){const N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){const q=b.shadow,X=e.get(b);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=R,i.pointShadowMatrix[g]=b.shadow.matrix,M++}i.point[g]=N,g++}else if(b.isHemisphereLight){const N=t.get(b);N.skyColor.copy(b.color).multiplyScalar(L),N.groundColor.copy(b.groundColor).multiplyScalar(L),i.hemi[l]=N,l++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==l||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=l,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=l,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=w,i.version=Kg++)}function c(h,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let l=0,x=h.length;l<x;l++){const M=h[l];if(M.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(M.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function nl(n){const t=new Zg(n),e=[],i=[];function r(u){h.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Jg(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new nl(n),t.set(r,[o])):s>=a.length?(o=new nl(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Qg extends gr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class t0 extends gr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`;function i0(n,t,e){let i=new zo;const r=new Yt,s=new Yt,a=new he,o=new Qg({depthPacking:Ku}),c=new t0,h={},u=e.maxTextureSize,f={[ai]:Ce,[Ce]:ai,[dn]:dn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:e0,fragmentShader:n0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let l=this.type;this.render=function(C,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ei),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const L=l!==Pn&&this.type===Pn,U=l===Pn&&this.type!==Pn;for(let R=0,N=C.length;R<N;R++){const q=C[R],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const rt=X.getFrameExtents();if(r.multiply(rt),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/rt.x),r.x=s.x*rt.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/rt.y),r.y=s.y*rt.y,X.mapSize.y=s.y)),X.map===null||L===!0||U===!0){const mt=this.type!==Pn?{minFilter:$e,magFilter:$e}:{};X.map!==null&&X.map.dispose(),X.map=new Ci(r.x,r.y,mt),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ht=X.getViewportCount();for(let mt=0;mt<ht;mt++){const Rt=X.getViewport(mt);a.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),z.viewport(a),X.updateMatrices(q,mt),i=X.getFrustum(),v(w,P,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Pn&&x(X,P),X.needsUpdate=!1}l=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,b)};function x(C,w){const P=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ci(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,P,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,P,p,_,null)}function M(C,w,P,T){let S=null;const b=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)S=b;else if(S=P.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=S.uuid,L=w.uuid;let U=h[z];U===void 0&&(U={},h[z]=U);let R=U[L];R===void 0&&(R=S.clone(),U[L]=R,w.addEventListener("dispose",D)),S=R}if(S.visible=w.visible,S.wireframe=w.wireframe,T===Pn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=P}return S}function v(C,w,P,T,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Pn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const L=t.update(C),U=C.material;if(Array.isArray(U)){const R=L.groups;for(let N=0,q=R.length;N<q;N++){const X=R[N],rt=U[X.materialIndex];if(rt&&rt.visible){const ht=M(C,rt,T,S);C.onBeforeShadow(n,C,w,P,L,ht,X),n.renderBufferDirect(P,null,L,ht,C,X),C.onAfterShadow(n,C,w,P,L,ht,X)}}}else if(U.visible){const R=M(C,U,T,S);C.onBeforeShadow(n,C,w,P,L,R,null),n.renderBufferDirect(P,null,L,R,C,null),C.onAfterShadow(n,C,w,P,L,R,null)}}const z=C.children;for(let L=0,U=z.length;L<U;L++)v(z[L],w,P,T,S)}function D(C){C.target.removeEventListener("dispose",D);for(const P in h){const T=h[P],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const r0={[Ha]:Ga,[ka]:Xa,[Va]:qa,[ar]:Wa,[Ga]:Ha,[Xa]:ka,[qa]:Va,[Wa]:ar};function s0(n,t){function e(){let I=!1;const nt=new he;let k=null;const $=new he(0,0,0,0);return{setMask:function(it){k!==it&&!I&&(n.colorMask(it,it,it,it),k=it)},setLocked:function(it){I=it},setClear:function(it,ct,Nt,ce,ue){ue===!0&&(it*=ce,ct*=ce,Nt*=ce),nt.set(it,ct,Nt,ce),$.equals(nt)===!1&&(n.clearColor(it,ct,Nt,ce),$.copy(nt))},reset:function(){I=!1,k=null,$.set(-1,0,0,0)}}}function i(){let I=!1,nt=!1,k=null,$=null,it=null;return{setReversed:function(ct){if(nt!==ct){const Nt=t.get("EXT_clip_control");nt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const ce=it;it=null,this.setClear(ce)}nt=ct},getReversed:function(){return nt},setTest:function(ct){ct?at(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(ct){k!==ct&&!I&&(n.depthMask(ct),k=ct)},setFunc:function(ct){if(nt&&(ct=r0[ct]),$!==ct){switch(ct){case Ha:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case ar:n.depthFunc(n.LEQUAL);break;case Va:n.depthFunc(n.EQUAL);break;case Wa:n.depthFunc(n.GEQUAL);break;case Xa:n.depthFunc(n.GREATER);break;case qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ct}},setLocked:function(ct){I=ct},setClear:function(ct){it!==ct&&(nt&&(ct=1-ct),n.clearDepth(ct),it=ct)},reset:function(){I=!1,k=null,$=null,it=null,nt=!1}}}function r(){let I=!1,nt=null,k=null,$=null,it=null,ct=null,Nt=null,ce=null,ue=null;return{setTest:function(jt){I||(jt?at(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(jt){nt!==jt&&!I&&(n.stencilMask(jt),nt=jt)},setFunc:function(jt,He,an){(k!==jt||$!==He||it!==an)&&(n.stencilFunc(jt,He,an),k=jt,$=He,it=an)},setOp:function(jt,He,an){(ct!==jt||Nt!==He||ce!==an)&&(n.stencilOp(jt,He,an),ct=jt,Nt=He,ce=an)},setLocked:function(jt){I=jt},setClear:function(jt){ue!==jt&&(n.clearStencil(jt),ue=jt)},reset:function(){I=!1,nt=null,k=null,$=null,it=null,ct=null,Nt=null,ce=null,ue=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,h=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,l=null,x=null,M=null,v=null,D=null,C=null,w=new bt(0,0,0),P=0,T=!1,S=null,b=null,z=null,L=null,U=null;const R=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,q=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=q>=2);let rt=null,ht={};const mt=n.getParameter(n.SCISSOR_BOX),Rt=n.getParameter(n.VIEWPORT),Kt=new he().fromArray(mt),Y=new he().fromArray(Rt);function Q(I,nt,k,$){const it=new Uint8Array(4),ct=n.createTexture();n.bindTexture(I,ct),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<k;Nt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,it):n.texImage2D(nt+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,it);return ct}const dt={};dt[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(ar),Ht(!1),Gt(ac),at(n.CULL_FACE),B(ei);function at(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function wt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Lt(I,nt){return f[I]!==nt?(n.bindFramebuffer(I,nt),f[I]=nt,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=nt),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ft(I,nt){let k=p,$=!1;if(I){k=d.get(nt),k===void 0&&(k=[],d.set(nt,k));const it=I.textures;if(k.length!==it.length||k[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Nt=it.length;ct<Nt;ct++)k[ct]=n.COLOR_ATTACHMENT0+ct;k.length=it.length,$=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,$=!0);$&&n.drawBuffers(k)}function se(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const kt={[yi]:n.FUNC_ADD,[Su]:n.FUNC_SUBTRACT,[yu]:n.FUNC_REVERSE_SUBTRACT};kt[Eu]=n.MIN,kt[Tu]=n.MAX;const It={[Au]:n.ZERO,[bu]:n.ONE,[wu]:n.SRC_COLOR,[Ba]:n.SRC_ALPHA,[Iu]:n.SRC_ALPHA_SATURATE,[Pu]:n.DST_COLOR,[Cu]:n.DST_ALPHA,[Ru]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[Du]:n.ONE_MINUS_DST_COLOR,[Lu]:n.ONE_MINUS_DST_ALPHA,[Uu]:n.CONSTANT_COLOR,[Nu]:n.ONE_MINUS_CONSTANT_COLOR,[Fu]:n.CONSTANT_ALPHA,[Ou]:n.ONE_MINUS_CONSTANT_ALPHA};function B(I,nt,k,$,it,ct,Nt,ce,ue,jt){if(I===ei){_===!0&&(wt(n.BLEND),_=!1);return}if(_===!1&&(at(n.BLEND),_=!0),I!==Mu){if(I!==m||jt!==T){if((l!==yi||v!==yi)&&(n.blendEquation(n.FUNC_ADD),l=yi,v=yi),jt)switch(I){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFunc(n.ONE,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,M=null,D=null,C=null,w.set(0,0,0),P=0,m=I,T=jt}return}it=it||nt,ct=ct||k,Nt=Nt||$,(nt!==l||it!==v)&&(n.blendEquationSeparate(kt[nt],kt[it]),l=nt,v=it),(k!==x||$!==M||ct!==D||Nt!==C)&&(n.blendFuncSeparate(It[k],It[$],It[ct],It[Nt]),x=k,M=$,D=ct,C=Nt),(ce.equals(w)===!1||ue!==P)&&(n.blendColor(ce.r,ce.g,ce.b,ue),w.copy(ce),P=ue),m=I,T=!1}function De(I,nt){I.side===dn?wt(n.CULL_FACE):at(n.CULL_FACE);let k=I.side===Ce;nt&&(k=!k),Ht(k),I.blending===Ji&&I.transparent===!1?B(ei):B(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Xt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function Gt(I){I!==_u?(at(n.CULL_FACE),I!==b&&(I===ac?n.cullFace(n.BACK):I===xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),b=I}function Tt(I){I!==z&&(N&&n.lineWidth(I),z=I)}function Xt(I,nt,k){I?(at(n.POLYGON_OFFSET_FILL),(L!==nt||U!==k)&&(n.polygonOffset(nt,k),L=nt,U=k)):wt(n.POLYGON_OFFSET_FILL)}function Et(I){I?at(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function A(I){I===void 0&&(I=n.TEXTURE0+R-1),rt!==I&&(n.activeTexture(I),rt=I)}function y(I,nt,k){k===void 0&&(rt===null?k=n.TEXTURE0+R-1:k=rt);let $=ht[k];$===void 0&&($={type:void 0,texture:void 0},ht[k]=$),($.type!==I||$.texture!==nt)&&(rt!==k&&(n.activeTexture(k),rt=k),n.bindTexture(I,nt||dt[I]),$.type=I,$.texture=nt)}function G(){const I=ht[rt];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(I){Kt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Kt.copy(I))}function et(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Mt(I,nt){let k=h.get(nt);k===void 0&&(k=new WeakMap,h.set(nt,k));let $=k.get(I);$===void 0&&($=n.getUniformBlockIndex(nt,I.name),k.set(I,$))}function St(I,nt){const $=h.get(nt).get(I);c.get(nt)!==$&&(n.uniformBlockBinding(nt,$,I.__bindingPointIndex),c.set(nt,$))}function Ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},rt=null,ht={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,l=null,x=null,M=null,v=null,D=null,C=null,w=new bt(0,0,0),P=0,T=!1,S=null,b=null,z=null,L=null,U=null,Kt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:at,disable:wt,bindFramebuffer:Lt,drawBuffers:Ft,useProgram:se,setBlending:B,setMaterial:De,setFlipSided:Ht,setCullFace:Gt,setLineWidth:Tt,setPolygonOffset:Xt,setScissorTest:Et,activeTexture:A,bindTexture:y,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:ft,texImage3D:At,updateUBOMapping:Mt,uniformBlockBinding:St,texStorage2D:Vt,texStorage3D:J,texSubImage2D:K,texSubImage3D:pt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Ct,viewport:et,reset:Ut}}function il(n,t,e,i){const r=a0(i);switch(e){case Ql:return n*t;case eh:return n*t;case nh:return n*t*2;case No:return n*t/r.components*r.byteLength;case Fo:return n*t/r.components*r.byteLength;case ih:return n*t*2/r.components*r.byteLength;case Oo:return n*t*2/r.components*r.byteLength;case th:return n*t*3/r.components*r.byteLength;case mn:return n*t*4/r.components*r.byteLength;case Bo:return n*t*4/r.components*r.byteLength;case As:case bs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ws:case Rs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:case to:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Cs:case vo:case Mo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rh:case So:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yo:case Eo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a0(n){switch(n){case Un:case jl:return{byteLength:1,components:1};case Ir:case Zl:case Br:return{byteLength:2,components:1};case Io:case Uo:return{byteLength:2,components:4};case Ri:case Do:case Sn:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function o0(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Yt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):Os("canvas")}function _(A,y,G){let j=1;const Z=Et(A);if((Z.width>G||Z.height>G)&&(j=G/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(j*Z.width),pt=Math.floor(j*Z.height);f===void 0&&(f=g(K,pt));const ot=y?g(K,pt):f;return ot.width=K,ot.height=pt,ot.getContext("2d").drawImage(A,0,0,K,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+pt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function l(A){n.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,y,G,j,Z=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=y;if(y===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),y===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),y===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),y===n.RGBA){const pt=Z?Ws:Wt.getTransfer(j);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=pt===te?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(A,y){let G;return A?y===null||y===Ri||y===lr?G=n.DEPTH24_STENCIL8:y===Sn?G=n.DEPTH32F_STENCIL8:y===Ir&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ri||y===lr?G=n.DEPTH_COMPONENT24:y===Sn?G=n.DEPTH_COMPONENT32F:y===Ir&&(G=n.DEPTH_COMPONENT16),G}function D(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==Mn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),P(y),y.isVideoTexture&&u.delete(y)}function w(A){const y=A.target;y.removeEventListener("dispose",w),S(y)}function P(A){const y=i.get(A);if(y.__webglInit===void 0)return;const G=A.source,j=d.get(G);if(j){const Z=j[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(A),Object.keys(j).length===0&&d.delete(G)}i.remove(A)}function T(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const G=A.source,j=d.get(G);delete j[y.__cacheKey],a.memory.textures--}function S(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let Z=0;Z<y.__webglFramebuffer[j].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[j][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=A.textures;for(let j=0,Z=G.length;j<Z;j++){const K=i.get(G[j]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(G[j])}i.remove(A)}let b=0;function z(){b=0}function L(){const A=b;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),b+=1,A}function U(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function R(A,y){const G=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,A,y);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+y)}function N(A,y){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Y(G,A,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+y)}function q(A,y){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Y(G,A,y);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+y)}function X(A,y){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Q(G,A,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+y)}const rt={[Ka]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},ht={[$e]:n.NEAREST,[Yu]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Qs]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},mt={[Zu]:n.NEVER,[rf]:n.ALWAYS,[Ju]:n.LESS,[ah]:n.LEQUAL,[Qu]:n.EQUAL,[nf]:n.GEQUAL,[tf]:n.GREATER,[ef]:n.NOTEQUAL};function Rt(A,y){if(y.type===Sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Mn||y.magFilter===Qs||y.magFilter===Wr||y.magFilter===bi||y.minFilter===Mn||y.minFilter===Qs||y.minFilter===Wr||y.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,rt[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,rt[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,rt[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ht[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ht[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$e||y.minFilter!==Wr&&y.minFilter!==bi||y.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Kt(A,y){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const j=y.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const K=U(y);if(K!==A.__cacheKey){Z[K]===void 0&&(Z[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Z[K].usedTimes++;const pt=Z[A.__cacheKey];pt!==void 0&&(Z[A.__cacheKey].usedTimes--,pt.usedTimes===0&&T(y)),A.__cacheKey=K,A.__webglTexture=Z[K].texture}return G}function Y(A,y,G){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);const Z=Kt(A,y),K=y.source;e.bindTexture(j,A.__webglTexture,n.TEXTURE0+G);const pt=i.get(K);if(K.version!==pt.__version||Z===!0){e.activeTexture(n.TEXTURE0+G);const ot=Wt.getPrimaries(Wt.workingColorSpace),ut=y.colorSpace===jn?null:Wt.getPrimaries(y.colorSpace),Vt=y.colorSpace===jn||ot===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let J=_(y.image,!1,r.maxTextureSize);J=Xt(y,J);const ft=s.convert(y.format,y.colorSpace),At=s.convert(y.type);let Ct=M(y.internalFormat,ft,At,y.colorSpace,y.isVideoTexture);Rt(j,y);let et;const Mt=y.mipmaps,St=y.isVideoTexture!==!0,Ut=pt.__version===void 0||Z===!0,I=K.dataReady,nt=D(y,J);if(y.isDepthTexture)Ct=v(y.format===hr,y.type),Ut&&(St?e.texStorage2D(n.TEXTURE_2D,1,Ct,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,Ct,J.width,J.height,0,ft,At,null));else if(y.isDataTexture)if(Mt.length>0){St&&Ut&&e.texStorage2D(n.TEXTURE_2D,nt,Ct,Mt[0].width,Mt[0].height);for(let k=0,$=Mt.length;k<$;k++)et=Mt[k],St?I&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,et.width,et.height,ft,At,et.data):e.texImage2D(n.TEXTURE_2D,k,Ct,et.width,et.height,0,ft,At,et.data);y.generateMipmaps=!1}else St?(Ut&&e.texStorage2D(n.TEXTURE_2D,nt,Ct,J.width,J.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,ft,At,J.data)):e.texImage2D(n.TEXTURE_2D,0,Ct,J.width,J.height,0,ft,At,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){St&&Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,nt,Ct,Mt[0].width,Mt[0].height,J.depth);for(let k=0,$=Mt.length;k<$;k++)if(et=Mt[k],y.format!==mn)if(ft!==null)if(St){if(I)if(y.layerUpdates.size>0){const it=il(et.width,et.height,y.format,y.type);for(const ct of y.layerUpdates){const Nt=et.data.subarray(ct*it/et.data.BYTES_PER_ELEMENT,(ct+1)*it/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,ct,et.width,et.height,1,ft,Nt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,et.width,et.height,J.depth,ft,et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Ct,et.width,et.height,J.depth,0,et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,et.width,et.height,J.depth,ft,At,et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,k,Ct,et.width,et.height,J.depth,0,ft,At,et.data)}else{St&&Ut&&e.texStorage2D(n.TEXTURE_2D,nt,Ct,Mt[0].width,Mt[0].height);for(let k=0,$=Mt.length;k<$;k++)et=Mt[k],y.format!==mn?ft!==null?St?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,et.width,et.height,ft,et.data):e.compressedTexImage2D(n.TEXTURE_2D,k,Ct,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?I&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,et.width,et.height,ft,At,et.data):e.texImage2D(n.TEXTURE_2D,k,Ct,et.width,et.height,0,ft,At,et.data)}else if(y.isDataArrayTexture)if(St){if(Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,nt,Ct,J.width,J.height,J.depth),I)if(y.layerUpdates.size>0){const k=il(J.width,J.height,y.format,y.type);for(const $ of y.layerUpdates){const it=J.data.subarray($*k/J.data.BYTES_PER_ELEMENT,($+1)*k/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,ft,At,it)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,At,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,J.width,J.height,J.depth,0,ft,At,J.data);else if(y.isData3DTexture)St?(Ut&&e.texStorage3D(n.TEXTURE_3D,nt,Ct,J.width,J.height,J.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,At,J.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,J.width,J.height,J.depth,0,ft,At,J.data);else if(y.isFramebufferTexture){if(Ut)if(St)e.texStorage2D(n.TEXTURE_2D,nt,Ct,J.width,J.height);else{let k=J.width,$=J.height;for(let it=0;it<nt;it++)e.texImage2D(n.TEXTURE_2D,it,Ct,k,$,0,ft,At,null),k>>=1,$>>=1}}else if(Mt.length>0){if(St&&Ut){const k=Et(Mt[0]);e.texStorage2D(n.TEXTURE_2D,nt,Ct,k.width,k.height)}for(let k=0,$=Mt.length;k<$;k++)et=Mt[k],St?I&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,ft,At,et):e.texImage2D(n.TEXTURE_2D,k,Ct,ft,At,et);y.generateMipmaps=!1}else if(St){if(Ut){const k=Et(J);e.texStorage2D(n.TEXTURE_2D,nt,Ct,k.width,k.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,At,J)}else e.texImage2D(n.TEXTURE_2D,0,Ct,ft,At,J);m(y)&&l(j),pt.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Q(A,y,G){if(y.image.length!==6)return;const j=Kt(A,y),Z=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const K=i.get(Z);if(Z.version!==K.__version||j===!0){e.activeTexture(n.TEXTURE0+G);const pt=Wt.getPrimaries(Wt.workingColorSpace),ot=y.colorSpace===jn?null:Wt.getPrimaries(y.colorSpace),ut=y.colorSpace===jn||pt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Vt=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Vt&&!J?ft[$]=_(y.image[$],!0,r.maxCubemapSize):ft[$]=J?y.image[$].image:y.image[$],ft[$]=Xt(y,ft[$]);const At=ft[0],Ct=s.convert(y.format,y.colorSpace),et=s.convert(y.type),Mt=M(y.internalFormat,Ct,et,y.colorSpace),St=y.isVideoTexture!==!0,Ut=K.__version===void 0||j===!0,I=Z.dataReady;let nt=D(y,At);Rt(n.TEXTURE_CUBE_MAP,y);let k;if(Vt){St&&Ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,nt,Mt,At.width,At.height);for(let $=0;$<6;$++){k=ft[$].mipmaps;for(let it=0;it<k.length;it++){const ct=k[it];y.format!==mn?Ct!==null?St?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,Mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,0,0,ct.width,ct.height,Ct,et,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,Mt,ct.width,ct.height,0,Ct,et,ct.data)}}}else{if(k=y.mipmaps,St&&Ut){k.length>0&&nt++;const $=Et(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,nt,Mt,$.width,$.height)}for(let $=0;$<6;$++)if(J){St?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Ct,et,ft[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Mt,ft[$].width,ft[$].height,0,Ct,et,ft[$].data);for(let it=0;it<k.length;it++){const Nt=k[it].image[$].image;St?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,0,0,Nt.width,Nt.height,Ct,et,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,Mt,Nt.width,Nt.height,0,Ct,et,Nt.data)}}else{St?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct,et,ft[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Mt,Ct,et,ft[$]);for(let it=0;it<k.length;it++){const ct=k[it];St?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,0,0,Ct,et,ct.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,Mt,Ct,et,ct.image[$])}}}m(y)&&l(n.TEXTURE_CUBE_MAP),K.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function dt(A,y,G,j,Z,K){const pt=s.convert(G.format,G.colorSpace),ot=s.convert(G.type),ut=M(G.internalFormat,pt,ot,G.colorSpace),Vt=i.get(y),J=i.get(G);if(J.__renderTarget=y,!Vt.__hasExternalTextures){const ft=Math.max(1,y.width>>K),At=Math.max(1,y.height>>K);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,K,ut,ft,At,y.depth,0,pt,ot,null):e.texImage2D(Z,K,ut,ft,At,0,pt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Gt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,J.__webglTexture,0,Ht(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,J.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(A,y,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const j=y.depthTexture,Z=j&&j.isDepthTexture?j.type:null,K=v(y.stencilBuffer,Z),pt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=Ht(y);Gt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,K,y.width,y.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,A)}else{const j=y.textures;for(let Z=0;Z<j.length;Z++){const K=j[Z],pt=s.convert(K.format,K.colorSpace),ot=s.convert(K.type),ut=M(K.internalFormat,pt,ot,K.colorSpace),Vt=Ht(y);G&&Gt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,ut,y.width,y.height):Gt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt,ut,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ut,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),R(y.depthTexture,0);const Z=j.__webglTexture,K=Ht(y);if(y.depthTexture.format===Qi)Gt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===hr)Gt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const y=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=j}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");wt(y.__webglFramebuffer,A)}else if(G){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),at(y.__webglDepthbuffer[j],A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),at(y.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(A,y,G){const j=i.get(A);y!==void 0&&dt(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Lt(A)}function se(A){const y=A.texture,G=i.get(A),j=i.get(y);A.addEventListener("dispose",w);const Z=A.textures,K=A.isWebGLCubeRenderTarget===!0,pt=Z.length>1;if(pt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,a.memory.textures++),K){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let ut=0;ut<y.mipmaps.length;ut++)G.__webglFramebuffer[ot][ut]=n.createFramebuffer()}else G.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)G.__webglFramebuffer[ot]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(pt)for(let ot=0,ut=Z.length;ot<ut;ot++){const Vt=i.get(Z[ot]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Gt(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const ut=Z[ot];G.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);const Vt=s.convert(ut.format,ut.colorSpace),J=s.convert(ut.type),ft=M(ut.internalFormat,Vt,J,ut.colorSpace,A.isXRRenderTarget===!0),At=Ht(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,ft,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),at(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Rt(n.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)dt(G.__webglFramebuffer[ot][ut],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else dt(G.__webglFramebuffer[ot],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(y)&&l(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ot=0,ut=Z.length;ot<ut;ot++){const Vt=Z[ot],J=i.get(Vt);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),Rt(n.TEXTURE_2D,Vt),dt(G.__webglFramebuffer,A,Vt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Vt)&&l(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),Rt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)dt(G.__webglFramebuffer[ut],A,y,n.COLOR_ATTACHMENT0,ot,ut);else dt(G.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,ot,0);m(y)&&l(ot),e.unbindTexture()}A.depthBuffer&&Lt(A)}function kt(A){const y=A.textures;for(let G=0,j=y.length;G<j;G++){const Z=y[G];if(m(Z)){const K=x(A),pt=i.get(Z).__webglTexture;e.bindTexture(K,pt),l(K),e.unbindTexture()}}}const It=[],B=[];function De(A){if(A.samples>0){if(Gt(A)===!1){const y=A.textures,G=A.width,j=A.height;let Z=n.COLOR_BUFFER_BIT;const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(A),ot=y.length>1;if(ot)for(let ut=0;ut<y.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ut=0;ut<y.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);const Vt=i.get(y[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Vt,0)}n.blitFramebuffer(0,0,G,j,0,0,G,j,Z,n.NEAREST),c===!0&&(It.length=0,B.length=0,It.push(n.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(It.push(K),B.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<y.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);const Vt=i.get(y[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ht(A){return Math.min(r.maxSamples,A.samples)}function Gt(A){const y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Tt(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function Xt(A,y){const G=A.colorSpace,j=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==dr&&G!==jn&&(Wt.getTransfer(G)===te?(j!==mn||Z!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function Et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=R,this.setTexture2DArray=N,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Ft,this.setupRenderTarget=se,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Gt}function c0(n,t){function e(i,r=jn){let s;const a=Wt.getTransfer(r);if(i===Un)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jl)return n.BYTE;if(i===Zl)return n.SHORT;if(i===Ir)return n.UNSIGNED_SHORT;if(i===Do)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Br)return n.HALF_FLOAT;if(i===Ql)return n.ALPHA;if(i===th)return n.RGB;if(i===mn)return n.RGBA;if(i===eh)return n.LUMINANCE;if(i===nh)return n.LUMINANCE_ALPHA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===No)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===ih)return n.RG;if(i===Oo)return n.RG_INTEGER;if(i===Bo)return n.RGBA_INTEGER;if(i===As||i===bs||i===ws||i===Rs)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===As)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===As)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Qa||i===to)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eo||i===no||i===io)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eo||i===no)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===io)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ro||i===so||i===ao||i===oo||i===co||i===lo||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ro)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===so)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ao)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===co)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_o)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xo)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cs||i===vo||i===Mo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Cs)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===So||i===yo||i===Eo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===So)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class l0 extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zn extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),l=this._getHandJoint(h,_);m!==null&&(l.matrix.fromArray(m.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=m.radius),l.visible=m!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;h.inputState.pinching&&d>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
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

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Le,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Nn({vertexShader:u0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends pr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,h=null,u=null,f=null,d=null,p=null,g=null;const _=new d0,m=e.getContextAttributes();let l=null,x=null;const M=[],v=[],D=new Yt;let C=null;const w=new nn;w.viewport=new he;const P=new nn;P.viewport=new he;const T=[w,P],S=new l0;let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=M[Y];return Q===void 0&&(Q=new Ra,M[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=M[Y];return Q===void 0&&(Q=new Ra,M[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=M[Y];return Q===void 0&&(Q=new Ra,M[Y]=Q),Q.getHandSpace()};function L(Y){const Q=v.indexOf(Y.inputSource);if(Q===-1)return;const dt=M[Q];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,h||a),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",R);for(let Y=0;Y<M.length;Y++){const Q=v[Y];Q!==null&&(v[Y]=null,M[Y].disconnect(Q))}b=null,z=null,_.reset(),t.setRenderTarget(l),p=null,d=null,f=null,r=null,x=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(l=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",U),r.addEventListener("inputsourceschange",R),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ci(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,dt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?hr:Qi,dt=m.stencil?lr:Ri);const wt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(wt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ci(d.textureWidth,d.textureHeight,{format:mn,type:Un,depthTexture:new Mh(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await r.requestReferenceSpace(o),Kt.setContext(r),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function R(Y){for(let Q=0;Q<Y.removed.length;Q++){const dt=Y.removed[Q],at=v.indexOf(dt);at>=0&&(v[at]=null,M[at].disconnect(dt))}for(let Q=0;Q<Y.added.length;Q++){const dt=Y.added[Q];let at=v.indexOf(dt);if(at===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=v.length){v.push(dt),at=Lt;break}else if(v[Lt]===null){v[Lt]=dt,at=Lt;break}if(at===-1)break}const wt=M[at];wt&&wt.connect(dt)}}const N=new H,q=new H;function X(Y,Q,dt){N.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(dt.matrixWorld);const at=N.distanceTo(q),wt=Q.projectionMatrix.elements,Lt=dt.projectionMatrix.elements,Ft=wt[14]/(wt[10]-1),se=wt[14]/(wt[10]+1),kt=(wt[9]+1)/wt[5],It=(wt[9]-1)/wt[5],B=(wt[8]-1)/wt[0],De=(Lt[8]+1)/Lt[0],Ht=Ft*B,Gt=Ft*De,Tt=at/(-B+De),Xt=Tt*-B;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Xt),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Et=Ft+Tt,A=se+Tt,y=Ht-Xt,G=Gt+(at-Xt),j=kt*se/A*Et,Z=It*se/A*Et;Y.projectionMatrix.makePerspective(y,G,j,Z,Et,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Q=Y.near,dt=Y.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),S.near=P.near=w.near=Q,S.far=P.far=w.far=dt,(b!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,z=S.far),w.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,S.layers.mask=w.layers.mask|P.layers.mask;const at=Y.parent,wt=S.cameras;rt(S,at);for(let Lt=0;Lt<wt.length;Lt++)rt(wt[Lt],at);wt.length===2?X(S,w,P):S.projectionMatrix.copy(w.projectionMatrix),ht(Y,S,at)};function ht(Y,Q,dt){dt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=To*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let mt=null;function Rt(Y,Q){if(u=Q.getViewerPose(h||a),g=Q,u!==null){const dt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let at=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,at=!0);for(let Lt=0;Lt<dt.length;Lt++){const Ft=dt[Lt];let se=null;if(p!==null)se=p.getViewport(Ft);else{const It=f.getViewSubImage(d,Ft);se=It.viewport,Lt===0&&(t.setRenderTargetTextures(x,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(x))}let kt=T[Lt];kt===void 0&&(kt=new nn,kt.layers.enable(Lt),kt.viewport=new he,T[Lt]=kt),kt.matrix.fromArray(Ft.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ft.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(se.x,se.y,se.width,se.height),Lt===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),at===!0&&S.cameras.push(kt)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Lt=f.getDepthInformation(dt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,r.renderState)}}for(let dt=0;dt<M.length;dt++){const at=v[dt],wt=M[dt];at!==null&&wt!==void 0&&wt.update(at,Q,h||a)}mt&&mt(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Kt=new xh;Kt.setAnimationLoop(Rt),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}}const _i=new Be,m0=new $t;function g0(n,t){function e(m,l){m.matrixAutoUpdate===!0&&m.updateMatrix(),l.value.copy(m.matrix)}function i(m,l){l.color.getRGB(m.fogColor.value,mh(n)),l.isFog?(m.fogNear.value=l.near,m.fogFar.value=l.far):l.isFogExp2&&(m.fogDensity.value=l.density)}function r(m,l,x,M,v){l.isMeshBasicMaterial||l.isMeshLambertMaterial?s(m,l):l.isMeshToonMaterial?(s(m,l),f(m,l)):l.isMeshPhongMaterial?(s(m,l),u(m,l)):l.isMeshStandardMaterial?(s(m,l),d(m,l),l.isMeshPhysicalMaterial&&p(m,l,v)):l.isMeshMatcapMaterial?(s(m,l),g(m,l)):l.isMeshDepthMaterial?s(m,l):l.isMeshDistanceMaterial?(s(m,l),_(m,l)):l.isMeshNormalMaterial?s(m,l):l.isLineBasicMaterial?(a(m,l),l.isLineDashedMaterial&&o(m,l)):l.isPointsMaterial?c(m,l,x,M):l.isSpriteMaterial?h(m,l):l.isShadowMaterial?(m.color.value.copy(l.color),m.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function s(m,l){m.opacity.value=l.opacity,l.color&&m.diffuse.value.copy(l.color),l.emissive&&m.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(m.map.value=l.map,e(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,e(l.alphaMap,m.alphaMapTransform)),l.bumpMap&&(m.bumpMap.value=l.bumpMap,e(l.bumpMap,m.bumpMapTransform),m.bumpScale.value=l.bumpScale,l.side===Ce&&(m.bumpScale.value*=-1)),l.normalMap&&(m.normalMap.value=l.normalMap,e(l.normalMap,m.normalMapTransform),m.normalScale.value.copy(l.normalScale),l.side===Ce&&m.normalScale.value.negate()),l.displacementMap&&(m.displacementMap.value=l.displacementMap,e(l.displacementMap,m.displacementMapTransform),m.displacementScale.value=l.displacementScale,m.displacementBias.value=l.displacementBias),l.emissiveMap&&(m.emissiveMap.value=l.emissiveMap,e(l.emissiveMap,m.emissiveMapTransform)),l.specularMap&&(m.specularMap.value=l.specularMap,e(l.specularMap,m.specularMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest);const x=t.get(l),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(_i)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=l.reflectivity,m.ior.value=l.ior,m.refractionRatio.value=l.refractionRatio),l.lightMap&&(m.lightMap.value=l.lightMap,m.lightMapIntensity.value=l.lightMapIntensity,e(l.lightMap,m.lightMapTransform)),l.aoMap&&(m.aoMap.value=l.aoMap,m.aoMapIntensity.value=l.aoMapIntensity,e(l.aoMap,m.aoMapTransform))}function a(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,l.map&&(m.map.value=l.map,e(l.map,m.mapTransform))}function o(m,l){m.dashSize.value=l.dashSize,m.totalSize.value=l.dashSize+l.gapSize,m.scale.value=l.scale}function c(m,l,x,M){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.size.value=l.size*x,m.scale.value=M*.5,l.map&&(m.map.value=l.map,e(l.map,m.uvTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,e(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function h(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.rotation.value=l.rotation,l.map&&(m.map.value=l.map,e(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,e(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function u(m,l){m.specular.value.copy(l.specular),m.shininess.value=Math.max(l.shininess,1e-4)}function f(m,l){l.gradientMap&&(m.gradientMap.value=l.gradientMap)}function d(m,l){m.metalness.value=l.metalness,l.metalnessMap&&(m.metalnessMap.value=l.metalnessMap,e(l.metalnessMap,m.metalnessMapTransform)),m.roughness.value=l.roughness,l.roughnessMap&&(m.roughnessMap.value=l.roughnessMap,e(l.roughnessMap,m.roughnessMapTransform)),l.envMap&&(m.envMapIntensity.value=l.envMapIntensity)}function p(m,l,x){m.ior.value=l.ior,l.sheen>0&&(m.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),m.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(m.sheenColorMap.value=l.sheenColorMap,e(l.sheenColorMap,m.sheenColorMapTransform)),l.sheenRoughnessMap&&(m.sheenRoughnessMap.value=l.sheenRoughnessMap,e(l.sheenRoughnessMap,m.sheenRoughnessMapTransform))),l.clearcoat>0&&(m.clearcoat.value=l.clearcoat,m.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(m.clearcoatMap.value=l.clearcoatMap,e(l.clearcoatMap,m.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,e(l.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(m.clearcoatNormalMap.value=l.clearcoatNormalMap,e(l.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Ce&&m.clearcoatNormalScale.value.negate())),l.dispersion>0&&(m.dispersion.value=l.dispersion),l.iridescence>0&&(m.iridescence.value=l.iridescence,m.iridescenceIOR.value=l.iridescenceIOR,m.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(m.iridescenceMap.value=l.iridescenceMap,e(l.iridescenceMap,m.iridescenceMapTransform)),l.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=l.iridescenceThicknessMap,e(l.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),l.transmission>0&&(m.transmission.value=l.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),l.transmissionMap&&(m.transmissionMap.value=l.transmissionMap,e(l.transmissionMap,m.transmissionMapTransform)),m.thickness.value=l.thickness,l.thicknessMap&&(m.thicknessMap.value=l.thicknessMap,e(l.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=l.attenuationDistance,m.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(m.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(m.anisotropyMap.value=l.anisotropyMap,e(l.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=l.specularIntensity,m.specularColor.value.copy(l.specularColor),l.specularColorMap&&(m.specularColorMap.value=l.specularColorMap,e(l.specularColorMap,m.specularColorMapTransform)),l.specularIntensityMap&&(m.specularIntensityMap.value=l.specularIntensityMap,e(l.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,l){l.matcap&&(m.matcap.value=l.matcap)}function _(m,l){const x=t.get(l).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;i.uniformBlockBinding(x,v)}function h(x,M){let v=r[x.id];v===void 0&&(g(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",m));const D=M.program;i.updateUBOMapping(x,D);const C=t.render.frame;s[x.id]!==C&&(d(x),s[x.id]=C)}function u(x){const M=f();x.__bindingPointIndex=M;const v=n.createBuffer(),D=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=r[x.id],v=x.uniforms,D=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,w=v.length;C<w;C++){const P=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,S=P.length;T<S;T++){const b=P[T];if(p(b,C,T,D)===!0){const z=b.__offset,L=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let R=0;R<L.length;R++){const N=L[R],q=_(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,z+U,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,v,D){const C=x.value,w=M+"_"+v;if(D[w]===void 0)return typeof C=="number"||typeof C=="boolean"?D[w]=C:D[w]=C.clone(),!0;{const P=D[w];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return D[w]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(x){const M=x.uniforms;let v=0;const D=16;for(let w=0,P=M.length;w<P;w++){const T=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,b=T.length;S<b;S++){const z=T[S],L=Array.isArray(z.value)?z.value:[z.value];for(let U=0,R=L.length;U<R;U++){const N=L[U],q=_(N),X=v%D,rt=X%q.boundary,ht=X+rt;v+=rt,ht!==0&&D-ht<q.storage&&(v+=D-ht),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=q.storage}}}const C=v%D;return C>0&&(v+=D-C),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function l(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:h,dispose:l}}class x0{constructor(t={}){const{canvas:e=af(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,l=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=ni,this.toneMappingExposure=1;const v=this;let D=!1,C=0,w=0,P=null,T=-1,S=null;const b=new he,z=new he;let L=null;const U=new bt(0);let R=0,N=e.width,q=e.height,X=1,rt=null,ht=null;const mt=new he(0,0,N,q),Rt=new he(0,0,N,q);let Kt=!1;const Y=new zo;let Q=!1,dt=!1;const at=new $t,wt=new $t,Lt=new H,Ft=new he,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function It(){return P===null?X:1}let B=i;function De(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lo}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",ct,!1),B===null){const F="webgl2";if(B=De(F,E),B===null)throw De(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ht,Gt,Tt,Xt,Et,A,y,G,j,Z,K,pt,ot,ut,Vt,J,ft,At,Ct,et,Mt,St,Ut,I;function nt(){Ht=new Em(B),Ht.init(),St=new c0(B,Ht),Gt=new _m(B,Ht,t,St),Tt=new s0(B,Ht),Gt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),Xt=new bm(B),Et=new Wg,A=new o0(B,Ht,Tt,Et,Gt,St,Xt),y=new vm(v),G=new ym(v),j=new If(B),Ut=new mm(B,j),Z=new Tm(B,j,Xt,Ut),K=new Rm(B,Z,j,Xt),Ct=new wm(B,Gt,A),J=new xm(Et),pt=new Vg(v,y,G,Ht,Gt,Ut,J),ot=new g0(v,Et),ut=new qg,Vt=new Jg(Ht),At=new pm(v,y,G,Tt,K,p,c),ft=new i0(v,K,Gt),I=new _0(B,Xt,Gt,Tt),et=new gm(B,Ht,Xt),Mt=new Am(B,Ht,Xt),Xt.programs=pt.programs,v.capabilities=Gt,v.extensions=Ht,v.properties=Et,v.renderLists=ut,v.shadowMap=ft,v.state=Tt,v.info=Xt}nt();const k=new p0(v,B);this.xr=k,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=Ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(N,q,!1))},this.getSize=function(E){return E.set(N,q)},this.setSize=function(E,F,V=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,q=F,e.width=Math.floor(E*X),e.height=Math.floor(F*X),V===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(N*X,q*X).floor()},this.setDrawingBufferSize=function(E,F,V){N=E,q=F,X=V,e.width=Math.floor(E*V),e.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,F,V,W){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,F,V,W),Tt.viewport(b.copy(mt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,F,V,W){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,F,V,W),Tt.scissor(z.copy(Rt).multiplyScalar(X).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){Tt.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(E=!0,F=!0,V=!0){let W=0;if(E){let O=!1;if(P!==null){const tt=P.texture.format;O=tt===Bo||tt===Oo||tt===Fo}if(O){const tt=P.texture.type,lt=tt===Un||tt===Ri||tt===Ir||tt===lr||tt===Io||tt===Uo,gt=At.getClearColor(),_t=At.getClearAlpha(),Pt=gt.r,Ot=gt.g,xt=gt.b;lt?(g[0]=Pt,g[1]=Ot,g[2]=xt,g[3]=_t,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Pt,_[1]=Ot,_[2]=xt,_[3]=_t,B.clearBufferiv(B.COLOR,0,_))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ut.dispose(),Vt.dispose(),Et.dispose(),y.dispose(),G.dispose(),K.dispose(),Ut.dispose(),I.dispose(),pt.dispose(),k.dispose(),k.removeEventListener("sessionstart",hi),k.removeEventListener("sessionend",ui),je.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Xt.autoReset,F=ft.enabled,V=ft.autoUpdate,W=ft.needsUpdate,O=ft.type;nt(),Xt.autoReset=E,ft.enabled=F,ft.autoUpdate=V,ft.needsUpdate=W,ft.type=O}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Nt(E){const F=E.target;F.removeEventListener("dispose",Nt),ce(F)}function ce(E){ue(E),Et.remove(E)}function ue(E){const F=Et.get(E).programs;F!==void 0&&(F.forEach(function(V){pt.releaseProgram(V)}),E.isShaderMaterial&&pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,W,O,tt){F===null&&(F=se);const lt=O.isMesh&&O.matrixWorld.determinant()<0,gt=pu(E,F,V,W,O);Tt.setMaterial(W,lt);let _t=V.index,Pt=1;if(W.wireframe===!0){if(_t=Z.getWireframeAttribute(V),_t===void 0)return;Pt=2}const Ot=V.drawRange,xt=V.attributes.position;let qt=Ot.start*Pt,re=(Ot.start+Ot.count)*Pt;tt!==null&&(qt=Math.max(qt,tt.start*Pt),re=Math.min(re,(tt.start+tt.count)*Pt)),_t!==null?(qt=Math.max(qt,0),re=Math.min(re,_t.count)):xt!=null&&(qt=Math.max(qt,0),re=Math.min(re,xt.count));const ae=re-qt;if(ae<0||ae===1/0)return;Ut.setup(O,W,gt,V,_t);let Ue,Jt=et;if(_t!==null&&(Ue=j.get(_t),Jt=Mt,Jt.setIndex(Ue)),O.isMesh)W.wireframe===!0?(Tt.setLineWidth(W.wireframeLinewidth*It()),Jt.setMode(B.LINES)):Jt.setMode(B.TRIANGLES);else if(O.isLine){let yt=W.linewidth;yt===void 0&&(yt=1),Tt.setLineWidth(yt*It()),O.isLineSegments?Jt.setMode(B.LINES):O.isLineLoop?Jt.setMode(B.LINE_LOOP):Jt.setMode(B.LINE_STRIP)}else O.isPoints?Jt.setMode(B.POINTS):O.isSprite&&Jt.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Jt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Jt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const yt=O._multiDrawStarts,Tn=O._multiDrawCounts,Qt=O._multiDrawCount,on=_t?j.get(_t).bytesPerElement:1,Di=Et.get(W).currentProgram.getUniforms();for(let Ge=0;Ge<Qt;Ge++)Di.setValue(B,"_gl_DrawID",Ge),Jt.render(yt[Ge]/on,Tn[Ge])}else if(O.isInstancedMesh)Jt.renderInstances(qt,ae,O.count);else if(V.isInstancedBufferGeometry){const yt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Tn=Math.min(V.instanceCount,yt);Jt.renderInstances(qt,ae,Tn)}else Jt.render(qt,ae)};function jt(E,F,V){E.transparent===!0&&E.side===dn&&E.forceSinglePass===!1?(E.side=Ce,E.needsUpdate=!0,Vr(E,F,V),E.side=ai,E.needsUpdate=!0,Vr(E,F,V),E.side=dn):Vr(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),l=Vt.get(V),l.init(F),M.push(l),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(l.pushLight(O),O.castShadow&&l.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(l.pushLight(O),O.castShadow&&l.pushShadow(O))}),l.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const tt=O.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const gt=tt[lt];jt(gt,V,O),W.add(gt)}else jt(tt,V,O),W.add(tt)}),M.pop(),l=null,W},this.compileAsync=function(E,F,V=null){const W=this.compile(E,F,V);return new Promise(O=>{function tt(){if(W.forEach(function(lt){Et.get(lt).currentProgram.isReady()&&W.delete(lt)}),W.size===0){O(E);return}setTimeout(tt,10)}Ht.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let He=null;function an(E){He&&He(E)}function hi(){je.stop()}function ui(){je.start()}const je=new xh;je.setAnimationLoop(an),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(E){He=E,k.setAnimationLoop(E),E===null?je.stop():je.start()},k.addEventListener("sessionstart",hi),k.addEventListener("sessionend",ui),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(F),F=k.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,P),l=Vt.get(E,M.length),l.init(F),M.push(l),wt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(wt),dt=this.localClippingEnabled,Q=J.init(this.clippingPlanes,dt),m=ut.get(E,x.length),m.init(),x.push(m),k.enabled===!0&&k.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&Ie(tt,F,-1/0,v.sortObjects)}Ie(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,ht),kt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,kt&&At.addToRenderList(m,E),this.info.render.frame++,Q===!0&&J.beginShadows();const V=l.state.shadowsArray;ft.render(V,E,F),Q===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(l.setupLights(),F.isArrayCamera){const tt=F.cameras;if(O.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];ec(W,O,E,_t)}kt&&At.render(E);for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];Hn(m,E,_t,_t.viewport)}}else O.length>0&&ec(W,O,E,F),kt&&At.render(E),Hn(m,E,F);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,F),Ut.resetDefaultState(),T=-1,S=null,M.pop(),M.length>0?(l=M[M.length-1],Q===!0&&J.setGlobalState(v.clippingPlanes,l.state.camera)):l=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ie(E,F,V,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)l.pushLight(E),E.castShadow&&l.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){W&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);const lt=K.update(E),gt=E.material;gt.visible&&m.push(E,lt,gt,V,Ft.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const lt=K.update(E),gt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ft.copy(lt.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(gt)){const _t=lt.groups;for(let Pt=0,Ot=_t.length;Pt<Ot;Pt++){const xt=_t[Pt],qt=gt[xt.materialIndex];qt&&qt.visible&&m.push(E,lt,qt,V,Ft.z,xt)}}else gt.visible&&m.push(E,lt,gt,V,Ft.z,null)}}const tt=E.children;for(let lt=0,gt=tt.length;lt<gt;lt++)Ie(tt[lt],F,V,W)}function Hn(E,F,V,W){const O=E.opaque,tt=E.transmissive,lt=E.transparent;l.setupLightsView(V),Q===!0&&J.setGlobalState(v.clippingPlanes,V),W&&Tt.viewport(b.copy(W)),O.length>0&&kr(O,F,V),tt.length>0&&kr(tt,F,V),lt.length>0&&kr(lt,F,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ec(E,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[W.id]===void 0&&(l.state.transmissionRenderTarget[W.id]=new Ci(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Br:Un,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const tt=l.state.transmissionRenderTarget[W.id],lt=W.viewport||b;tt.setSize(lt.z,lt.w);const gt=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(U),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear(),kt&&At.render(V);const _t=v.toneMapping;v.toneMapping=ni;const Pt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),l.setupLightsView(W),Q===!0&&J.setGlobalState(v.clippingPlanes,W),kr(E,V,W),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let xt=0,qt=F.length;xt<qt;xt++){const re=F[xt],ae=re.object,Ue=re.geometry,Jt=re.material,yt=re.group;if(Jt.side===dn&&ae.layers.test(W.layers)){const Tn=Jt.side;Jt.side=Ce,Jt.needsUpdate=!0,nc(ae,V,W,Ue,Jt,yt),Jt.side=Tn,Jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}v.setRenderTarget(gt),v.setClearColor(U,R),Pt!==void 0&&(W.viewport=Pt),v.toneMapping=_t}function kr(E,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,tt=E.length;O<tt;O++){const lt=E[O],gt=lt.object,_t=lt.geometry,Pt=W===null?lt.material:W,Ot=lt.group;gt.layers.test(V.layers)&&nc(gt,F,V,_t,Pt,Ot)}}function nc(E,F,V,W,O,tt){E.onBeforeRender(v,F,V,W,O,tt),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,F,V,W,E,tt),O.transparent===!0&&O.side===dn&&O.forceSinglePass===!1?(O.side=Ce,O.needsUpdate=!0,v.renderBufferDirect(V,F,W,O,E,tt),O.side=ai,O.needsUpdate=!0,v.renderBufferDirect(V,F,W,O,E,tt),O.side=dn):v.renderBufferDirect(V,F,W,O,E,tt),E.onAfterRender(v,F,V,W,O,tt)}function Vr(E,F,V){F.isScene!==!0&&(F=se);const W=Et.get(E),O=l.state.lights,tt=l.state.shadowsArray,lt=O.state.version,gt=pt.getParameters(E,O.state,tt,F,V),_t=pt.getProgramCacheKey(gt);let Pt=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?G:y).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",Nt),Pt=new Map,W.programs=Pt);let Ot=Pt.get(_t);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===lt)return rc(E,gt),Ot}else gt.uniforms=pt.getUniforms(E),E.onBeforeCompile(gt,v),Ot=pt.acquireProgram(gt,_t),Pt.set(_t,Ot),W.uniforms=gt.uniforms;const xt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xt.clippingPlanes=J.uniform),rc(E,gt),W.needsLights=gu(E),W.lightsStateVersion=lt,W.needsLights&&(xt.ambientLightColor.value=O.state.ambient,xt.lightProbe.value=O.state.probe,xt.directionalLights.value=O.state.directional,xt.directionalLightShadows.value=O.state.directionalShadow,xt.spotLights.value=O.state.spot,xt.spotLightShadows.value=O.state.spotShadow,xt.rectAreaLights.value=O.state.rectArea,xt.ltc_1.value=O.state.rectAreaLTC1,xt.ltc_2.value=O.state.rectAreaLTC2,xt.pointLights.value=O.state.point,xt.pointLightShadows.value=O.state.pointShadow,xt.hemisphereLights.value=O.state.hemi,xt.directionalShadowMap.value=O.state.directionalShadowMap,xt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,xt.spotShadowMap.value=O.state.spotShadowMap,xt.spotLightMatrix.value=O.state.spotLightMatrix,xt.spotLightMap.value=O.state.spotLightMap,xt.pointShadowMap.value=O.state.pointShadowMap,xt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function ic(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ls.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function rc(E,F){const V=Et.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function pu(E,F,V,W,O){F.isScene!==!0&&(F=se),A.resetTextureUnits();const tt=F.fog,lt=W.isMeshStandardMaterial?F.environment:null,gt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:dr,_t=(W.isMeshStandardMaterial?G:y).get(W.envMap||lt),Pt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ot=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),xt=!!V.morphAttributes.position,qt=!!V.morphAttributes.normal,re=!!V.morphAttributes.color;let ae=ni;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=v.toneMapping);const Ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Jt=Ue!==void 0?Ue.length:0,yt=Et.get(W),Tn=l.state.lights;if(Q===!0&&(dt===!0||E!==S)){const Ze=E===S&&W.id===T;J.setState(W,E,Ze)}let Qt=!1;W.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Tn.state.version||yt.outputColorSpace!==gt||O.isBatchedMesh&&yt.batching===!1||!O.isBatchedMesh&&yt.batching===!0||O.isBatchedMesh&&yt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&yt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&yt.instancing===!1||!O.isInstancedMesh&&yt.instancing===!0||O.isSkinnedMesh&&yt.skinning===!1||!O.isSkinnedMesh&&yt.skinning===!0||O.isInstancedMesh&&yt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&yt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&yt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&yt.instancingMorph===!1&&O.morphTexture!==null||yt.envMap!==_t||W.fog===!0&&yt.fog!==tt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==J.numPlanes||yt.numIntersection!==J.numIntersection)||yt.vertexAlphas!==Pt||yt.vertexTangents!==Ot||yt.morphTargets!==xt||yt.morphNormals!==qt||yt.morphColors!==re||yt.toneMapping!==ae||yt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,yt.__version=W.version);let on=yt.currentProgram;Qt===!0&&(on=Vr(W,F,O));let Di=!1,Ge=!1,xr=!1;const oe=on.getUniforms(),_n=yt.uniforms;if(Tt.useProgram(on.program)&&(Di=!0,Ge=!0,xr=!0),W.id!==T&&(T=W.id,Ge=!0),Di||S!==E){Tt.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),cf(at),lf(at),oe.setValue(B,"projectionMatrix",at)):oe.setValue(B,"projectionMatrix",E.projectionMatrix),oe.setValue(B,"viewMatrix",E.matrixWorldInverse);const Gn=oe.map.cameraPosition;Gn!==void 0&&Gn.setValue(B,Lt.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&oe.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&oe.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Ge=!0,xr=!0)}if(O.isSkinnedMesh){oe.setOptional(B,O,"bindMatrix"),oe.setOptional(B,O,"bindMatrixInverse");const Ze=O.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),oe.setValue(B,"boneTexture",Ze.boneTexture,A))}O.isBatchedMesh&&(oe.setOptional(B,O,"batchingTexture"),oe.setValue(B,"batchingTexture",O._matricesTexture,A),oe.setOptional(B,O,"batchingIdTexture"),oe.setValue(B,"batchingIdTexture",O._indirectTexture,A),oe.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&oe.setValue(B,"batchingColorTexture",O._colorsTexture,A));const vr=V.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Ct.update(O,V,on),(Ge||yt.receiveShadow!==O.receiveShadow)&&(yt.receiveShadow=O.receiveShadow,oe.setValue(B,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(_n.envMap.value=_t,_n.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),Ge&&(oe.setValue(B,"toneMappingExposure",v.toneMappingExposure),yt.needsLights&&mu(_n,xr),tt&&W.fog===!0&&ot.refreshFogUniforms(_n,tt),ot.refreshMaterialUniforms(_n,W,X,q,l.state.transmissionRenderTarget[E.id]),Ls.upload(B,ic(yt),_n,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ls.upload(B,ic(yt),_n,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&oe.setValue(B,"center",O.center),oe.setValue(B,"modelViewMatrix",O.modelViewMatrix),oe.setValue(B,"normalMatrix",O.normalMatrix),oe.setValue(B,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ze=W.uniformsGroups;for(let Gn=0,kn=Ze.length;Gn<kn;Gn++){const sc=Ze[Gn];I.update(sc,on),I.bind(sc,on)}}return on}function mu(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function gu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,V){Et.get(E.texture).__webglTexture=F,Et.get(E.depthTexture).__webglTexture=V;const W=Et.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const V=Et.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){P=E,C=F,w=V;let W=!0,O=null,tt=!1,lt=!1;if(E){const _t=Et.get(E);if(_t.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(_t.__hasExternalTextures)A.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const xt=E.depthTexture;if(_t.__boundDepthTexture!==xt){if(xt!==null&&Et.has(xt)&&(E.width!==xt.image.width||E.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(lt=!0);const Ot=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?O=Ot[F][V]:O=Ot[F],tt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?O=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?O=Ot[V]:O=Ot,b.copy(E.viewport),z.copy(E.scissor),L=E.scissorTest}else b.copy(mt).multiplyScalar(X).floor(),z.copy(Rt).multiplyScalar(X).floor(),L=Kt;if(Tt.bindFramebuffer(B.FRAMEBUFFER,O)&&W&&Tt.drawBuffers(E,O),Tt.viewport(b),Tt.scissor(z),Tt.setScissorTest(L),tt){const _t=Et.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,V)}else if(lt){const _t=Et.get(E.texture),Pt=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,_t.__webglTexture,V||0,Pt)}T=-1},this.readRenderTargetPixels=function(E,F,V,W,O,tt,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){Tt.bindFramebuffer(B.FRAMEBUFFER,gt);try{const _t=E.texture,Pt=_t.format,Ot=_t.type;if(!Gt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O&&B.readPixels(F,V,W,O,St.convert(Pt),St.convert(Ot),tt)}finally{const _t=P!==null?Et.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,W,O,tt,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const _t=E.texture,Pt=_t.format,Ot=_t.type;if(!Gt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O){Tt.bindFramebuffer(B.FRAMEBUFFER,gt);const xt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.bufferData(B.PIXEL_PACK_BUFFER,tt.byteLength,B.STREAM_READ),B.readPixels(F,V,W,O,St.convert(Pt),St.convert(Ot),0);const qt=P!==null?Et.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,qt);const re=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await of(B,re,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,tt),B.deleteBuffer(xt),B.deleteSync(re),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,V=0){E.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(E.image.width*W),tt=Math.floor(E.image.height*W),lt=F!==null?F.x:0,gt=F!==null?F.y:0;A.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,lt,gt,O,tt),Tt.unbindTexture()},this.copyTextureToTexture=function(E,F,V=null,W=null,O=0){E.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let tt,lt,gt,_t,Pt,Ot,xt,qt,re;const ae=E.isCompressedTexture?E.mipmaps[O]:E.image;V!==null?(tt=V.max.x-V.min.x,lt=V.max.y-V.min.y,gt=V.isBox3?V.max.z-V.min.z:1,_t=V.min.x,Pt=V.min.y,Ot=V.isBox3?V.min.z:0):(tt=ae.width,lt=ae.height,gt=ae.depth||1,_t=0,Pt=0,Ot=0),W!==null?(xt=W.x,qt=W.y,re=W.z):(xt=0,qt=0,re=0);const Ue=St.convert(F.format),Jt=St.convert(F.type);let yt;F.isData3DTexture?(A.setTexture3D(F,0),yt=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),yt=B.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),yt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const Tn=B.getParameter(B.UNPACK_ROW_LENGTH),Qt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),on=B.getParameter(B.UNPACK_SKIP_PIXELS),Di=B.getParameter(B.UNPACK_SKIP_ROWS),Ge=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ae.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ae.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_t),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot);const xr=E.isDataArrayTexture||E.isData3DTexture,oe=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const _n=Et.get(E),vr=Et.get(F),Ze=Et.get(_n.__renderTarget),Gn=Et.get(vr.__renderTarget);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let kn=0;kn<gt;kn++)xr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,O,Ot+kn),E.isDepthTexture?(oe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(F).__webglTexture,O,re+kn),B.blitFramebuffer(_t,Pt,tt,lt,xt,qt,tt,lt,B.DEPTH_BUFFER_BIT,B.NEAREST)):oe?B.copyTexSubImage3D(yt,O,xt,qt,re+kn,_t,Pt,tt,lt):B.copyTexSubImage2D(yt,O,xt,qt,re+kn,_t,Pt,tt,lt);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else oe?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(yt,O,xt,qt,re,tt,lt,gt,Ue,Jt,ae.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(yt,O,xt,qt,re,tt,lt,gt,Ue,ae.data):B.texSubImage3D(yt,O,xt,qt,re,tt,lt,gt,Ue,Jt,ae):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,xt,qt,tt,lt,Ue,Jt,ae.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,xt,qt,ae.width,ae.height,Ue,ae.data):B.texSubImage2D(B.TEXTURE_2D,O,xt,qt,tt,lt,Ue,Jt,ae);B.pixelStorei(B.UNPACK_ROW_LENGTH,Tn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,on),B.pixelStorei(B.UNPACK_SKIP_ROWS,Di),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge),O===0&&F.generateMipmaps&&B.generateMipmap(yt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V=null,W=null,O=0){return E.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,V,W,O)},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){C=0,w=0,P=null,Tt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class Go{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=i}clone(){return new Go(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class v0 extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class M0 extends Le{constructor(t=null,e=1,i=1,r,s,a,o,c,h=$e,u=$e,f,d){super(null,a,o,c,h,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl extends Pe{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new $t,sl=new $t,us=[],al=new Pi,S0=new $t,Ar=new le,br=new mr;class Hr extends le{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,S0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Yi),al.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(al)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Yi),br.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(i),t.ray.intersectsSphere(br)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Yi),sl.multiplyMatrices(i,Yi),Ar.matrixWorld=sl,Ar.raycast(t,us);for(let a=0,o=us.length;a<o;a++){const c=us[a];c.instanceId=s,c.object=this,e.push(c)}us.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new M0(new Float32Array(r*this.count),r,this.count,No,Sn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ah extends gr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ol=new $t,bo=new hh,fs=new mr,ds=new H;class y0 extends Ee{constructor(t=new ze,e=new Ah){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere),fs.applyMatrix4(r),fs.radius+=s,t.ray.intersectsSphere(fs)===!1)return;ol.copy(r).invert(),bo.copy(t.ray).applyMatrix4(ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=h.getX(g);ds.fromBufferAttribute(f,m),cl(ds,m,c,r,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,_=p;g<_;g++)ds.fromBufferAttribute(f,g),cl(ds,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cl(n,t,e,i,r,s,a){const o=bo.distanceSqToPoint(n);if(o<e){const c=new H;bo.closestPointToPoint(n,c),c.applyMatrix4(i);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class qs extends ze{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],h=new H,u=new Yt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const p=i+f/e*r;h.x=t*Math.cos(p),h.y=t*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oi extends ze{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const h=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let l=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(p,2));function x(){const v=new H,D=new H;let C=0;const w=(e-t)/i;for(let P=0;P<=s;P++){const T=[],S=P/s,b=S*(e-t)+t;for(let z=0;z<=r;z++){const L=z/r,U=L*c+o,R=Math.sin(U),N=Math.cos(U);D.x=b*R,D.y=-S*i+m,D.z=b*N,f.push(D.x,D.y,D.z),v.set(R,w,N).normalize(),d.push(v.x,v.y,v.z),p.push(L,1-S),T.push(g++)}_.push(T)}for(let P=0;P<r;P++)for(let T=0;T<s;T++){const S=_[T][P],b=_[T+1][P],z=_[T+1][P+1],L=_[T][P+1];(t>0||T!==0)&&(u.push(S,b,L),C+=3),(e>0||T!==s-1)&&(u.push(b,z,L),C+=3)}h.addGroup(l,C,0),l+=C}function M(v){const D=g,C=new Yt,w=new H;let P=0;const T=v===!0?t:e,S=v===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const b=g;for(let z=0;z<=r;z++){const U=z/r*c+o,R=Math.cos(U),N=Math.sin(U);w.x=T*N,w.y=m*S,w.z=T*R,f.push(w.x,w.y,w.z),d.push(0,S,0),C.x=R*.5+.5,C.y=N*.5*S+.5,p.push(C.x,C.y),g++}for(let z=0;z<r;z++){const L=D+z,U=b+z;v===!0?u.push(U,U+1,L):u.push(U+1,U,L),P+=3}h.addGroup(l,P,v===!0?1:2),l+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ko extends oi{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ko(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vo extends ze{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let h=0;const u=[],f=new H,d=new H,p=[],g=[],_=[],m=[];for(let l=0;l<=i;l++){const x=[],M=l/i;let v=0;l===0&&a===0?v=.5/e:l===i&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const C=D/e;f.x=-t*Math.cos(r+C*s)*Math.sin(a+M*o),f.y=t*Math.cos(a+M*o),f.z=t*Math.sin(r+C*s)*Math.sin(a+M*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-M),x.push(h++)}u.push(x)}for(let l=0;l<i;l++)for(let x=0;x<e;x++){const M=u[l][x+1],v=u[l][x],D=u[l+1][x],C=u[l+1][x+1];(l!==0||a>0)&&p.push(M,v,C),(l!==i-1||c<Math.PI)&&p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wo extends ze{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],h=[],u=new H,f=new H,d=new H;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),h.push(g/r),h.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,l=(r+1)*(p-1)+g,x=(r+1)*p+g;a.push(_,m,x),a.push(m,l,x)}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gn extends gr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bh extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class E0 extends bh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ca=new $t,ll=new H,hl=new H;class T0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hl),e.updateMatrixWorld(),Ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class A0 extends T0{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b0 extends bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new A0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);const w0={driftMaxR:130,sweeperMaxR:175,driftEntryAdvance:30,driftExitRunoff:40,sweeperEntryAdvance:18,sweeperExitRunoff:22,decreasingInsideLen:30,startOpen:200,finishOpen:150,crestHalfGap:55,mergeGap:12,maxSpans:64};function ul(n,t,e){return Math.max(t,Math.min(e,n))}function er(n){return typeof n=="number"&&isFinite(n)}function R0(n){return n==="L"?1:-1}function C0(n){return n==="L"?-1:1}function L0(n){return!(typeof n!="object"||n===null||n.dir!=="L"&&n.dir!=="R"||!er(n.startS)||!er(n.endS)||!er(n.medR)||n.medR<=0||n.endS-n.startS<30||n.endS<=0)}function P0(n,t,e=[],i=w0){const r=i;if(!er(n)||n<500||n>1e4)return{spans:[],length:0};const s=r.startOpen,a=n-r.finishOpen;if(!(a>s+60))return{spans:[],length:n};const o=[],c=[];for(const f of e)er(f)&&f>0&&f<n&&c.push(f);c.sort((f,d)=>f-d);const h=(f,d,p)=>{let g=ul(f,s,a),_=ul(d,s,a);if(_-g>=20){for(const m of c){const l=m-r.crestHalfGap,x=m+r.crestHalfGap;if(_<=l||g>=x)continue;const M=l-g,v=_-x;if(M>=20&&v>=20?(o.push({aS:g,bS:l,side:p}),g=x):M>=v?_=Math.min(_,l):g=Math.max(g,x),!(_-g>=20))return}o.push({aS:g,bS:_,side:p})}};if(Array.isArray(t))for(const f of t){if(!L0(f))continue;const d=R0(f.dir);if(f.medR<=r.driftMaxR){if(h(f.startS-r.driftEntryAdvance,f.endS+r.driftExitRunoff,d),f.decreasing===!0){const p=(f.startS+f.endS)/2;h(p-r.decreasingInsideLen/2,p+r.decreasingInsideLen/2,C0(f.dir))}}else f.medR<=r.sweeperMaxR&&h(f.startS-r.sweeperEntryAdvance,f.endS+r.sweeperExitRunoff,d)}o.sort((f,d)=>f.side-d.side||f.aS-d.aS);const u=[];for(const f of o){const d=u[u.length-1];d&&d.side===f.side&&f.aS-d.bS<=r.mergeGap?f.bS>d.bS&&(d.bS=f.bS):u.push({aS:f.aS,bS:f.bS,side:f.side})}u.sort((f,d)=>f.aS-d.aS||f.side-d.side),u.length>r.maxSpans&&(u.sort((f,d)=>d.bS-d.aS-(f.bS-f.aS)||f.aS-d.aS),u.length=r.maxSpans,u.sort((f,d)=>f.aS-d.aS||f.side-d.side));for(const f of u)f.aS=Math.round(f.aS*10)/10,f.bS=Math.round(f.bS*10)/10;return{spans:u,length:n}}function Xo(n,t,e){if(!n||!er(t)||e!==1&&e!==-1)return!1;const i=n.spans;for(let r=0;r<i.length;r++){const s=i[r];if(s.side===e){if(t<s.aS){if(s.aS>t){let a=!1;for(let o=r+1;o<i.length;o++)if(i[o].side===e&&i[o].aS<s.aS){a=!0;break}if(!a)return!1}continue}if(t<=s.bS)return!0}}return!1}const D0=3,I0=1,wh=3,U0=1,N0=120,Rh=4e3,Ch=2,nr=5e3,Bs=36e5,wo=1,F0=8192,qo=1650;function La(n,t,e){return n+(t-n)*e}function O0(n){return Math.atan2(Math.sin(n),Math.cos(n))}function Yo(n){return typeof n=="number"&&isFinite(n)}function B0(n){return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function z0(n){for(n=n.replace(/-/g,"+").replace(/_/g,"/");n.length%4;)n+="=";return atob(n)}function fl(n){return[Math.round(n[0]*2)/2,Math.round(n[1]*2)/2,Math.round(n[2]*2)/2,Math.round(n[3]*100)/100]}function H0(n,t){const e=Math.max(1,Math.floor(t)),i=[],r=[];for(let a=0;a<n.p.length;a+=e)i.push(fl(n.p[a])),r.push(Math.round(n.ts[a]));const s=n.p.length-1;return s%e!==0&&s>=0&&(i.push(fl(n.p[s])),r.push(Math.round(n.ts[s]))),{p:i,ts:r}}function Lh(n,t,e=qo,i){let r=1,s="";for(;;){const a=H0(n,r),o=i?{v:wh,t:Math.round(t),p:a.p,ts:a.ts,track:{...i}}:{v:2,t:Math.round(t),p:a.p,ts:a.ts};if(s=B0(JSON.stringify(o)),s.length<e||n.p.length<40||r>=16)break;r*=2}return s}function dl(n,t){let e=0,i=1;for(let r=0;r<5;r++){if(t>=n.length)return null;const s=n[t++];if(e+=(s&127)*i,!(s&128))return[e,t];i*=128}return null}function G0(n){if(n.length<2||n.charCodeAt(0)!==67||n.charCodeAt(1)!==49)return null;const t=new Uint8Array(n.length);for(let _=0;_<n.length;_++)t[_]=n.charCodeAt(_)&255;let e=2;const i=dl(t,e);if(!i)return null;e=i[1];const r=dl(t,e);if(!r)return null;e=r[1];const s=i[0],a=r[0];if(s<0||s>Bs||a<Ch||a>Rh)return null;const o=()=>{if(e+2>t.length)return null;let _=t[e]+t[e+1]*256;return e+=2,_>=32768?_-65536:_},c=[],h=[];let u=0,f=0,d=0,p=0,g=0;for(let _=0;_<a;_++){const m=o(),l=o(),x=o(),M=o();if(m===null||l===null||x===null||M===null)return null;if(_===0)u=m,f=l,d=x,p=M,g=0;else{if(e+2>t.length)return null;const w=t[e]+t[e+1]*256;if(e+=2,u+=m,f+=l,d+=x,p+=M,g+=w,g<0||g>Bs)return null}const v=u/2,D=f/2,C=d/2;if(Math.abs(v)>nr||Math.abs(D)>nr||Math.abs(C)>nr)return null;c.push([v,D,C,p/100]),h.push(g)}return e!==t.length||Math.abs(h[a-1]-s)>wo?null:{t:s,p:c,ts:h}}function k0(n){if(!Array.isArray(n)||n.length<Ch||n.length>Rh)return!1;for(const t of n){if(!Array.isArray(t)||t.length!==4)return!1;for(const i of t)if(!Yo(i))return!1;const e=t;if(Math.abs(e[0])>nr||Math.abs(e[1])>nr||Math.abs(e[2])>nr)return!1}return!0}function V0(n){const t=[];for(let e=0;e<n;e++)t.push(e*N0);return t}function W0(n,t){if(!Array.isArray(n)||n.length!==t)return!1;for(const e of n)if(!Yo(e)||e<0||e>Bs)return!1;for(let e=1;e<n.length;e++){const i=n[e],r=n[e-1];if(i<r)return!1}return!0}function X0(n){if(!n)return{ok:!1,error:"empty"};if(typeof n!="string")return{ok:!1,error:"not-string"};if(n.length>F0)return{ok:!1,error:"too-long"};let t;try{t=z0(n)}catch{return{ok:!1,error:"bad-encoding"}}if(t.length>=2&&t.charCodeAt(0)===67&&t.charCodeAt(1)===49){const c=G0(t);return c?{ok:!0,ghost:c}:{ok:!1,error:"bad-encoding"}}let e;try{e=JSON.parse(t)}catch{return{ok:!1,error:"bad-encoding"}}if(typeof e!="object"||e===null)return{ok:!1,error:"bad-shape"};const i=e;if(i.v!==void 0&&i.v!==D0&&i.v!==2&&i.v!==I0)return{ok:!1,error:"bad-version"};let r;if(i.v===wh){if(!Ph(i.track))return{ok:!1,error:"bad-track"};const c=i.track;r={day:c.day,course:c.course,gen:c.gen}}if(!Yo(i.t)||i.t<0||i.t>Bs)return{ok:!1,error:"bad-time"};if(!k0(i.p))return{ok:!1,error:"bad-points"};const s=i.p;let a;if(i.ts===void 0){if(a=V0(s.length),a[a.length-1]>i.t+wo)return{ok:!1,error:"legacy-finish-mismatch"}}else{if(!W0(i.ts,s.length))return{ok:!1,error:"bad-timestamps"};if(a=i.ts.slice(),Math.abs(a[a.length-1]-i.t)>wo)return{ok:!1,error:"finish-mismatch"}}return{ok:!0,ghost:r?{t:i.t,p:s,ts:a,track:r}:{t:i.t,p:s,ts:a}}}function Ph(n){if(typeof n!="object"||n===null)return!1;const t=n;return!(typeof t.day!="string"||t.day.length<1||t.day.length>32||typeof t.course!="string"||!/^[0-9a-fA-F]{1,64}$/.test(t.course)||typeof t.gen!="number"||!isFinite(t.gen)||Math.floor(t.gen)!==t.gen||t.gen<0||t.gen>2147483647)}function q0(n,t,e=U0){return{day:n,course:t,gen:e}}function pl(n,t){return n?!n.track||!Ph(n.track)?"legacy":n.track.course.toLowerCase()===t.course.toLowerCase()&&n.track.gen===t.gen?"match":"mismatch":"none"}function Pa(n,t){return t==="match"||t==="none"?"":n==="friend"&&t==="mismatch"?"Friend link is for a different course.":n==="friend"?"Friend link predates course checks — ask for a fresh one.":t==="mismatch"?"Saved best is for a different course.":"Saved best predates course checks."}function ml(n){return n==="match"||n==="none"?"none":n}function Dh(n){const t=pl(n.shared,n.expected),e=pl(n.pb,n.expected);if(t==="match"&&n.shared&&n.shared.p.length>1)return{rival:{ghost:n.shared,kind:"friend",racingPB:!1},status:"ready",notice:""};if(e==="match"&&n.pb&&n.pb.p.length>1){const a=[];if(n.shared){const o=Pa("friend",t);o&&a.push(o),a.push("Racing your best instead.")}return{rival:{ghost:n.pb,kind:"pb",racingPB:!0},status:"ready",notice:a.join(" ")}}const i=[],r=Pa("friend",t);r&&i.push(r);const s=Pa("pb",e);return s&&i.push(s),n.shared?{rival:null,status:ml(t),notice:i.join(" ")}:n.pb?{rival:null,status:ml(e),notice:i.join(" ")}:{rival:null,status:"none",notice:""}}function Ys(n){const t=X0(n);return t.ok?t.ghost:null}function Y0(n,t){const e=n.p,i=n.ts,r=e[0],s=e[e.length-1];if(t<=i[0])return{x:r[0],y:r[1],z:r[2],h:r[3]};const a=i.length-1;if(t>=i[a])return{x:s[0],y:s[1],z:s[2],h:s[3]};let o=0,c=a;for(;c-o>1;){const p=o+c>>1;i[p]<=t?o=p:c=p}const h=i[c]-i[o]||1,u=(t-i[o])/h,f=e[o],d=e[c];return{x:La(f[0],d[0],u),y:La(f[1],d[1],u),z:La(f[2],d[2],u),h:f[3]+O0(d[3]-f[3])*u}}function $0(n,t){return n&&n.kind==="friend"?"Racing a shared ghost":n&&n.kind==="pb"?"Racing your daily best ghost":t>0?"Friend time, no ghost":"No rival ghost"}const K0=36e5,j0=/^\d{4}-\d{2}-\d{2}$/;function Z0(n){return n instanceof DOMException&&n.name==="AbortError"}function Ih(n){if(!j0.test(n))return!1;const[t,e,i]=n.split("-").map(Number);if(e<1||e>12||i<1||i>31)return!1;const r=new Date(Date.UTC(t,e-1,i));return r.getUTCFullYear()===t&&r.getUTCMonth()===e-1&&r.getUTCDate()===i}function Uh(n){const t=typeof n=="string"&&n.trim()!==""?Number(n):n;return typeof t!="number"||!isFinite(t)||t<0||t>K0?0:Math.floor(t)}function We(n){if(!isFinite(n)||n<0)return"—";const t=Math.floor(n/6e4),e=Math.floor(n%6e4/1e3),i=Math.floor(n%1e3/10);return`${t}:${String(e).padStart(2,"0")}.${String(i).padStart(2,"0")}`}function J0(n,t,e){return`🏁 CANYON DAILY ${n} — ${We(t)}
Beat my run: ${e}`}function Q0(n,t,e){const i=Ih(e.day)?e.day:"",r=Uh(e.timeMs);let s=typeof e.ghost=="string"?e.ghost:"";s&&!Ys(s)&&(s="");const a=`?d=${encodeURIComponent(i)}&t=${r}${s?`&g=${s}`:""}`;return`${n}${t}${a}`}function t_(n){const t={day:"",timeMs:0,ghost:null,ghostRaw:"",errors:[]};try{if(!n)return t.errors.push("empty"),t;let e=n;const i=n.indexOf("?");i>=0&&(e=n.slice(i)),e.startsWith("?")||(e=`?${e}`);const r=new URLSearchParams(e),s=r.get("d")||"";Ih(s)?t.day=s:s&&t.errors.push("bad-day"),t.timeMs=Uh(r.get("t")||0);const a=r.get("g")||"";if(t.ghostRaw=a,a){const o=Ys(a);o?t.ghost=o:t.errors.push("bad-ghost")}return t}catch{return t.errors.push("parse-failed"),t}}function e_(n,t){return n&&t}async function n_(n,t,e){if(e&&n.requestNativeShare)try{return await n.requestNativeShare({title:t.title,text:t.text,url:t.url}),t.hasGhost?{kind:"shared-with-ghost",message:"Shared with ghost — good luck!"}:{kind:"shared-no-ghost",message:"Shared — no ghost saved yet"}}catch(i){if(Z0(i))return{kind:"dismissed",message:"Share dismissed"}}if(n.copyText)try{return await n.copyText(t.text),t.hasGhost?{kind:"copied-with-ghost",message:"Link + ghost copied — send it!"}:t.isFinish?{kind:"copied-time-only",message:"Time copied — send it!"}:{kind:"copied-time-only",message:"Time copied — link has no ghost (finish a run first)"}}catch{return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}const gl={entrySteer:.18,entryMinSpeed:25,tapMaxS:.35,sloppyScale:.4,slideAttack:3.5,slideRelease:4,exitOppSteer:.35,rearmDeadband:.12,earlyEnd:.45,optEnd:1.8,lateEnd:3.2,timeoutS:4,peakLoDeg:8,peakHiDeg:28,spinDeg:45,alignDeg:20,speedLo:25,speedHi:70,counterLo:.2,counterHi:.7,abortSpeed:15,cooldownS:1.2,boostTime:.6,boostAccelMax:20,kickRad:.09,pendFreq:7,pendDecay:1.8,pendYaw:1.6,chainWindow:.8,chainHold:.35,chainMin:.25,chainBoost:1.5},Da=84;function Nh(){return{phase:"idle",entryDir:0,slideAge:0,peakSlipDeg:0,slideBlend:0,cooldownT:0,boostT:0,boostAccel:0,lastQuality:0,lastGrade:"none",spamCount:0,needNeutral:!1,cleanTap:!0,handHeldS:0,prevHand:!1,pendAmp:0,pendPhase:0,chainDir:0,chainT:0,chainHoldT:0}}function $o(){return{phase:"idle",slideBlend:0,boostAccel:0,event:"none",quality:0,grade:"none",yawKick:0,pendRate:0,pendAmp:0,chainArmed:!1}}function Fh(n){const t=Nh();n.phase=t.phase,n.entryDir=t.entryDir,n.slideAge=t.slideAge,n.peakSlipDeg=t.peakSlipDeg,n.slideBlend=t.slideBlend,n.cooldownT=t.cooldownT,n.boostT=t.boostT,n.boostAccel=t.boostAccel,n.lastQuality=t.lastQuality,n.lastGrade=t.lastGrade,n.spamCount=t.spamCount,n.needNeutral=t.needNeutral,n.cleanTap=t.cleanTap,n.handHeldS=t.handHeldS,n.prevHand=t.prevHand,n.pendAmp=t.pendAmp,n.pendPhase=t.pendPhase,n.chainDir=t.chainDir,n.chainT=t.chainT,n.chainHoldT=t.chainHoldT}function Si(n,t,e){return Math.max(t,Math.min(e,n))}function ps(n){return typeof n=="number"&&isFinite(n)}function Ia(n){return n>0?1:n<0?-1:0}function i_(n,t,e,i,r,s){if(t<3||t>n.spinDeg||r>=n.timeoutS||i<n.entryMinSpeed)return 0;const a=t<=n.peakLoDeg?(t-3)/(n.peakLoDeg-3):t<=n.peakHiDeg?1:1-(t-n.peakHiDeg)/(n.spinDeg-n.peakHiDeg),o=1-Si(e/n.alignDeg,0,1),c=Si((i-n.speedLo)/(n.speedHi-n.speedLo),0,1),h=Si((s-n.counterLo)/(n.counterHi-n.counterLo),0,1),u=.4*Si(a,0,1)+.3*o+.15*c+.15*h,f=r<.15?0:r<n.earlyEnd?(r-.15)/(n.earlyEnd-.15):r<=n.optEnd?1:r<=n.lateEnd?1-.75*((r-n.optEnd)/(n.lateEnd-n.optEnd)):.25*(1-(r-n.lateEnd)/(n.timeoutS-n.lateEnd));return Si(u*Si(f,0,1),0,1)}function r_(n){return n>=.8?"perfect":n>=.55?"good":n>.05?"weak":"none"}function s_(n,t,e,i){if(i.event="none",i.quality=0,i.grade="none",i.yawKick=0,i.pendRate=0,i.pendAmp=n.pendAmp,i.chainArmed=n.chainT>0&&n.chainDir!==0,!ps(e.dt)||e.dt<=0||!ps(e.steer)||!ps(e.speed)||!ps(e.slipDeg)){i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}const r=e.dt>.1?.1:e.dt,s=Si(e.steer,-1,1),a=e.handbrake===!0,o=a&&!n.prevHand,c=!a&&n.prevHand;if(n.prevHand=a,c&&n.phase==="sliding"&&(n.cleanTap=n.handHeldS<=t.tapMaxS),a?n.handHeldS+=r:n.handHeldS=0,n.boostT>0&&(n.boostT=Math.max(0,n.boostT-r)),n.boostAccel=n.boostT>0?n.boostAccel:0,!e.grounded){n.phase==="sliding"&&(i.pendRate=-n.entryDir*n.pendAmp*Math.sin(n.pendPhase)*t.pendYaw),i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}if(n.phase==="cooldown"){if(n.slideBlend=Math.max(0,n.slideBlend-t.slideRelease*r),n.cooldownT-=r,n.chainT>0&&(n.chainT-=r),n.cooldownT<=0&&(n.phase="idle",n.cooldownT=0,n.chainDir=0,n.chainT=0,n.chainHoldT=0),n.chainDir!==0&&n.chainT>0&&Ia(s)===n.chainDir&&Math.abs(s)>=t.entrySteer){if(o){_l(n,t,e,i);return}if(n.chainHoldT+=r,n.chainHoldT>=t.chainHold){_l(n,t,e,i);return}}else n.chainHoldT=0,o&&(n.spamCount++,i.event="rejected");i.chainArmed=n.chainT>0&&n.chainDir!==0,i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}if(n.phase==="idle"){if(n.slideBlend=Math.max(0,n.slideBlend-t.slideRelease*r),Math.abs(s)<t.rearmDeadband&&(n.needNeutral=!1),o){const u=Ia(s);n.needNeutral||u===0||Math.abs(s)<t.entrySteer||e.speed<t.entryMinSpeed?!n.needNeutral&&n.cooldownT<=0||(n.spamCount++,i.event="rejected"):(n.phase="sliding",n.entryDir=u,n.slideAge=0,n.peakSlipDeg=Math.abs(e.slipDeg),n.cleanTap=!0,n.pendAmp=1,n.pendPhase=0,i.yawKick=-u*t.kickRad,i.pendAmp=n.pendAmp,i.event="entered")}i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}if(n.slideAge+=r,n.peakSlipDeg=Math.max(n.peakSlipDeg,Math.abs(e.slipDeg)),n.slideBlend=Math.min(1,n.slideBlend+t.slideAttack*r),n.pendPhase+=t.pendFreq*r,n.pendAmp*=Math.exp(-t.pendDecay*r),a&&n.handHeldS>t.tapMaxS&&(n.cleanTap=!1),i.pendRate=-n.entryDir*n.pendAmp*Math.sin(n.pendPhase)*t.pendYaw,i.pendAmp=n.pendAmp,Ia(s)===-n.entryDir&&Math.abs(s)>=t.exitOppSteer){let u=i_(t,n.peakSlipDeg,Math.abs(e.slipDeg),e.speed,n.slideAge,Math.abs(s));n.cleanTap||(u*=t.sloppyScale);const f=r_(u),d=Math.cos(n.pendPhase);let p=d>.3?0:d<-.3?Math.min(n.pendAmp*t.chainBoost,1.5):n.pendAmp*.4;u<.3&&(p=Math.max(p,n.pendAmp)),n.lastQuality=u,n.lastGrade=f,n.phase="cooldown",n.cooldownT=t.cooldownS,n.needNeutral=!0,n.pendAmp=p,p>t.chainMin?(n.chainDir=-n.entryDir,n.chainT=t.chainWindow,n.chainHoldT=0):(n.chainDir=0,n.chainT=0,n.chainHoldT=0),n.slideBlend=Math.max(0,n.slideBlend-t.slideRelease*r),u>0?(n.boostT=t.boostTime,n.boostAccel=u*t.boostAccelMax):(n.boostT=0,n.boostAccel=0),i.event="exit",i.quality=u,i.grade=f,i.pendRate=0,i.pendAmp=n.pendAmp,i.chainArmed=n.chainDir!==0,i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}if(n.slideAge>=t.timeoutS||e.speed<t.abortSpeed){n.lastQuality=0,n.lastGrade="none",n.boostT=0,n.boostAccel=0,e.speed<t.abortSpeed?(n.phase="idle",n.chainDir=0,n.chainT=0,n.chainHoldT=0):(n.phase="cooldown",n.cooldownT=t.cooldownS,n.needNeutral=!0,n.pendAmp*=.4,n.pendAmp>t.chainMin?(n.chainDir=-n.entryDir,n.chainT=t.chainWindow,n.chainHoldT=0):(n.chainDir=0,n.chainT=0,n.chainHoldT=0)),n.slideBlend=Math.max(0,n.slideBlend-t.slideRelease*r),i.event="expired",i.pendRate=0,i.pendAmp=n.pendAmp,i.chainArmed=n.chainDir!==0,i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel}function _l(n,t,e,i){n.phase="sliding",n.entryDir=n.chainDir,n.slideAge=0,n.peakSlipDeg=Math.abs(e.slipDeg),n.cleanTap=!0,n.pendPhase=0,n.chainDir=0,n.chainT=0,n.chainHoldT=0,i.yawKick=-n.entryDir*t.kickRad,i.pendRate=0,i.pendAmp=n.pendAmp,i.chainArmed=!1,i.event="entered",i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel}const a_=120,o_=3e3,c_=26,l_=11,h_=20,u_=5.5,f_=13,d_=5e3,p_=48,xl=10,m_=75,g_=14,ms=80,__=74,x_=26,v_=25,M_=.18,S_=6,y_=9,E_=3.5,T_=2.5,A_=4.5,b_=.12,w_=.35,R_=.94,vl=1,C_=.1,L_=.3,P_=.4,D_=.8,I_=5,U_=.5,N_=32,F_=.7,O_=.35,B_=.35,z_=9,Ml=.61,H_=2,Sl=.44,G_=4,k_=.3,V_=.25,W_=.4,X_=.007,q_=.62,Y_=1.2,$_=2,K_=.275,j_=.3;function Z_(n){return n+$_-K_-Y_-j_}const gs=6,J_=.02,Q_=.15,tx=.35,yl=.5,ex=.6,nx=.6,El=2.5,ix=55,rx=.85,sx=.18,ax=2.2,ox=.9,cx=5,lx=8,hx=.6,ux=60,fx=3.5,Tl=40,dx=15,px=10,ee=(n,t,e)=>Math.max(t,Math.min(e,n)),sn=(n,t,e)=>n+(t-n)*e;function $s(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Ks(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ro(n){return Math.atan2(Math.sin(n),Math.cos(n))}function mx(n,t){const e=n.length,i=n.map(d=>d.x),r=n.map(d=>d.y),s=n.map(d=>d.z),a=[],o=[],c=[],h=[],u=[];for(let d=0;d<e;d++){const p=n[Math.max(d-1,0)],g=n[Math.min(d+1,e-1)];let _=g.x-p.x,m=g.z-p.z;const l=Math.hypot(_,m);l<1e-9?(_=1,m=0):(_/=l,m/=l),a.push(_),o.push(m),c.push(-m),h.push(_),u.push(Math.atan2(_,m))}const f=[0];for(let d=1;d<e;d++)f.push(f[d-1]+Math.hypot(i[d]-i[d-1],s[d]-s[d-1]));return{n:e,x:i,y:r,z:s,tx:a,tz:o,nx:c,nz:h,yaw:u,halfW:t,cum:f,barrier:null}}class gx{constructor(){this.stickId=-1,this.stickX0=0,this.joy=0,this.joyOn=!1,this.drift=!1,this.driftId=-1}stickDown(t,e){this.stickId===-1&&(this.stickId=t,this.stickX0=e,this.joyOn=!0,this.joy=0)}stickMove(t,e){t===this.stickId&&(this.joy=ee((e-this.stickX0)/p_,-1,1))}stickUp(t){t===this.stickId&&(this.stickId=-1,this.joyOn=!1,this.joy=0)}driftDown(t){this.driftId===-1&&(this.driftId=t,this.drift=!0)}driftUp(t){t===this.driftId&&(this.driftId=-1,this.drift=!1)}get steer(){return this.joyOn?this.joy:0}}function _x(){return{heading:0,px:0,py:0,pz:0,vx:0,vz:0,vy:0,grounded:!0,lastIdx:0,raceMs:0,pitch:0,finished:!1,finishCount:0,prevFinD:0,px0:0,py0:0,pz0:0,h0:0,pitch0:0,prevRaceMs:0,approach:[],rec:{t:0,p:[],ts:[]},recLastMs:0,snap:{i:0,x:0,y:0,z:0,h:0,vx:0,vz:0},snapTimer:0,steer:0,driftAmt:0,wasOffroad:!1,scrapeLowMs:0,breakT:0,wallCool:0,crashT:0,crashAmp:0,scrapeT:0,kickT:0,oobMs:0,driftHold:0,exitT:0,rhythm:Nh(),rhythmOut:$o(),rhythmExitLatch:0,justLaunched:!1,airSteps:0}}function xx(n,t){const e=t.n-1;return(n.px-t.x[e])*t.tx[e]+(n.pz-t.z[e])*t.tz[e]}function vx(n,t,e=100){let i=n.lastIdx,r=1/0;for(let s=-100;s<=e;s++){const a=ee(n.lastIdx+s,0,t.n-1),o=t.x[a]-n.px,c=t.z[a]-n.pz,h=o*o+c*c;h<r&&(r=h,i=a)}return i}function Mx(n,t,e){const i=ee(n.lastIdx,0,t.n-1),r=ee(n.lastIdx+1,0,t.n-1),s=i===r?2:Math.max(Ti(t,i,r),.5),a=Math.hypot(n.vx,n.vz);return Math.min(2,1+Math.ceil(a*e/s))}function Al(n,t,e){const i=vx(n,t,Mx(n,t,e));return i>n.lastIdx&&Math.hypot(t.x[i]-n.px,t.z[i]-n.pz)>Math.hypot(n.vx,n.vz)*e+12?n.lastIdx:i}function Ti(n,t,e){return Math.hypot(n.x[e]-n.x[t],n.z[e]-n.z[t])||1e-6}function Sx(n,t,e){n.lastIdx=e,n.px=t.x[e],n.pz=t.z[e],n.py=t.y[e]+.2,n.heading=t.yaw[e],n.vx=t.tx[e]*xl,n.vz=t.tz[e]*xl,n.vy=0,n.grounded=!0,n.steer=0,n.driftAmt=0,n.wasOffroad=!1,n.raceMs=0,n.finished=!1,n.finishCount=0,n.prevFinD=xx(n,t),n.approach=[],n.rec={t:0,p:[[n.px,n.py,n.pz,n.heading]],ts:[0]},n.recLastMs=0,n.snap={i:e,x:n.px,y:n.py,z:n.pz,h:n.heading,vx:n.vx,vz:n.vz},n.snapTimer=0,n.scrapeLowMs=0,n.breakT=0,n.wallCool=0,n.crashT=0,n.crashAmp=0,n.scrapeT=0,n.kickT=0,n.driftHold=0,n.exitT=0,Fh(n.rhythm),n.rhythmOut=$o(),n.rhythmExitLatch=0,n.justLaunched=!1,n.airSteps=0,n.oobMs=0;const i=(t.y[Math.min(e+1,t.n-1)]-t.y[Math.max(e-1,0)])/Ti(t,Math.max(e-1,0),Math.min(e+1,t.n-1));n.pitch=Math.atan(ee(i,-.5,.5)),n.px0=n.px,n.py0=n.py,n.pz0=n.pz,n.h0=n.heading,n.pitch0=n.pitch}function yx(n){n.finished||(n.lastIdx=n.snap.i,n.px=n.snap.x,n.py=n.snap.y,n.pz=n.snap.z,n.heading=n.snap.h,n.vx=n.snap.vx,n.vz=n.snap.vz,n.vy=0,n.grounded=!0,n.driftAmt=0,n.wasOffroad=!1,n.justLaunched=!1,n.scrapeLowMs=0,n.breakT=0,n.wallCool=0,n.crashT=0,n.crashAmp=0,n.scrapeT=0,n.kickT=0,n.driftHold=0,n.exitT=0,Fh(n.rhythm),n.rhythmOut=$o(),n.rhythmExitLatch=0,n.oobMs=0,n.px0=n.px,n.py0=n.py,n.pz0=n.pz,n.h0=n.heading,n.pitch0=n.pitch,n.raceMs+=o_)}const bl=8,Ex=12;function Tx(n,t,e,i){const r={spd:Math.hypot(n.vx,n.vz),drifting:!1,sIdx:n.lastIdx,pitch:n.pitch,launched:!1,landed:!1,finished:!0,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:n.grounded?"road":"air",landV:0,impact:0,scraping:!1,stuckMs:n.scrapeLowMs,wallHit:!1,wallSev:0,wallNx:0,wallNz:0,wallCool:n.wallCool,oobMs:n.oobMs};if(n.finished)return r;n.px0=n.px,n.py0=n.py,n.pz0=n.pz,n.h0=n.heading,n.pitch0=n.pitch,n.prevRaceMs=n.raceMs;let s=0;const a=ee(e.steer,-1,1),o=Math.abs(a)>Math.abs(n.steer)?S_:y_;n.steer+=ee(a-n.steer,-o*i,o*i);const c=n.steer,h=Math.hypot(n.vx,n.vz),u=Math.sin(n.heading),f=Math.cos(n.heading),d=Math.atan2(n.vx*f-n.vz*u,Math.abs(n.vx*u+n.vz*f)+1e-6),p=!e.drift&&n.grounded&&h>=ix&&Math.abs(c)>=rx;p?n.breakT+=i:n.breakT=0;const g=p&&(n.breakT>.45||Math.abs(d)>=sx),_=e.drift&&n.grounded&&h>=v_&&Math.abs(c)>=M_||g,m=n.driftAmt,l=Math.sin(n.heading),x=Math.cos(n.heading),M=Math.atan2(n.vx*x-n.vz*l,Math.abs(n.vx*l+n.vz*x)+1e-6),v=c*M<-.02?ee(-c*M/.12,.35,1):0;s_(n.rhythm,gl,{dt:i,steer:c,handbrake:e.drift,speed:h,slipDeg:M*180/Math.PI,grounded:n.grounded},n.rhythmOut),n.rhythmOut.event==="exit"?n.rhythmExitLatch=1:n.rhythmExitLatch>0&&(n.rhythmExitLatch=Math.max(0,n.rhythmExitLatch-i));const D=n.grounded&&n.rhythmOut.phase==="sliding";D&&(n.driftAmt=Math.max(n.driftAmt,n.rhythmOut.slideBlend));const C=n.rhythmOut.event==="entered",w=n.rhythmOut.yawKick,P=n.rhythmOut.pendRate;if(_||D)n.driftAmt=Math.min(1,n.driftAmt+(g?ax:E_)*i);else if(n.driftAmt>0){const et=Math.max(v,Math.abs(c)<.25?.6:0);n.driftAmt=Math.max(0,n.driftAmt-sn(T_,A_,et)*i),m>.4&&n.driftAmt<=.4&&n.grounded&&Math.abs(M)<O_&&n.driftHold>.25&&n.rhythmExitLatch<=0&&(n.exitT=F_)}n.driftAmt>.5?n.driftHold+=i:n.driftAmt<=0&&(n.driftHold=0),n.exitT>0&&(n.exitT=Math.max(0,n.exitT-i));const S=Al(n,t,i);n.lastIdx=S;const b=Math.min(S+bl,t.n-1),z=Math.max(S-bl,0),L=Math.min(S+1,t.n-1),U=Math.max(S-1,0),R=(t.y[L]-t.y[U])/Ti(t,U,L),N=(t.y[b]-t.y[S])/Ti(t,S,b),q=(t.y[S]-t.y[z])/Ti(t,z,S),X=(N-q)/(Ti(t,S,b)+Ti(t,z,S)),rt=n.px-t.x[S],ht=n.pz-t.z[S],mt=rt*t.nx[S]+ht*t.nz[S],Rt=Math.abs(mt)>t.halfW,Kt=t.y[S]+.2;let Y=Math.hypot(n.vx,n.vz);const Q=n.driftAmt>.4;let dt=!1,at=!1,wt=0,Lt=0,Ft=!1;if(n.grounded){const et=Math.min(Math.max(Y,8)/10,1),Mt=Y<=30?1:Math.max(.24,1-(Y-30)/68),St=sn(2.3*Mt,1.5,n.driftAmt)*et;n.heading-=c*St*i;const Ut=Math.abs(mt)>t.halfW+.2;if(C&&!Ut&&(n.kickT=b_,n.heading+=w),Ut||(n.heading+=P*i),n.kickT>0&&(n.kickT=Math.max(0,n.kickT-i)),n.crashT>0&&(n.heading+=n.crashAmp*Math.sin(n.crashT*25)*i,n.crashT=Math.max(0,n.crashT-i),n.crashT<=0&&(n.crashAmp=0)),p&&n.driftAmt<1){const Ie=n.breakT>.45?.35:.1+Math.min(n.breakT,.45)*.55;n.heading+=Math.sin(n.raceMs*.045)*ox*Ie*i}const I=Math.sin(n.heading),nt=Math.cos(n.heading);let k=n.vx*I+n.vz*nt,$=n.vx*nt-n.vz*I;Rt&&!n.wasOffroad&&(k*=.92),n.wasOffroad=Rt,s=n.rhythm.boostT>0?n.rhythm.boostAccel:0;const it=s>0?Da:Rt?x_:Q?__:ms,ct=n.crashT>0?Math.min(Math.abs(n.crashAmp)/El,1):0,Nt=s>0?0:n.exitT>0?N_:0,ce=(Rt?g_:m_+Nt+s)*(1-nx*ct);k<it&&(k=Math.min(it,k+ce*i)),s<=0&&n.exitT<=0&&!Rt&&k>ms&&(k=ms+(k-ms)*Math.exp(-2*i)),m<.15&&n.driftAmt>=.15&&(k*=R_);const ue=Math.abs(mt)>t.halfW+1,jt=!ue&&n.driftAmt>.5?Math.min(Math.max(n.driftHold-vl,0)*P_,D_):0,He=(sn(Rt?5.5:9,4.8,n.driftAmt)+(Rt||ue?0:(I_*v-jt)*n.driftAmt))*(n.kickT>0&&!ue?w_:1);$*=Math.exp(-He*i);const an=Math.atan2($,Math.abs(k)+1e-6),hi=Math.abs(an);let ui=0;if(hi>Sl&&(ui+=H_*(hi-Sl)),hi>Ml&&(ui+=z_*(hi-Ml)),ui>0&&(k*=Math.exp(-ui*(Rt||ue?1:1-U_*v)*i)),n.driftAmt>.5){const Ie=Math.min(Math.max(n.driftHold-vl,0)*C_,L_);k*=Math.exp(-(B_+Ie)*i)}if(Rt&&(k*=Math.exp(-.55*i)),n.vx=I*k+nt*$,n.vz=nt*k-I*$,s>0){const Ie=Math.hypot(n.vx,n.vz);if(Ie>Da){const Hn=Da/Ie;n.vx*=Hn,n.vz*=Hn}}Y=Math.hypot(n.vx,n.vz),n.approach.push(R),n.approach.length>Ex&&n.approach.shift();const je=Math.hypot(n.vx,n.vz);if(je>h_&&-X*je*je>l_){let Ie=.08;for(const Hn of n.approach)Hn>Ie&&(Ie=Hn);n.vy=ee(je*Ie,u_,f_),n.grounded=!1,n.justLaunched=!0,n.airSteps=0,dt=!0}}else n.heading-=a*1.1*i,n.vy-=c_*i;n.px+=n.vx*i,n.pz+=n.vz*i;const se=(n.px-t.x[S])*t.nx[S]+(n.pz-t.z[S])*t.nz[S],kt=Math.abs(se)<=t.halfW+fx;n.grounded?kt?(n.py=Kt,n.pitch=Math.atan(ee(R,-.5,.5))):(n.grounded=!1,n.vy=0,n.airSteps=0,n.justLaunched=!1,n.pitch=ee(Math.atan2(n.vy,Math.max(Math.hypot(n.vx,n.vz),1)),-.6,.6)):(n.py+=n.vy*i,n.airSteps++,kt&&!n.justLaunched&&n.vy<=0&&n.py<=Kt&&(wt=n.vy,n.py=Kt,n.grounded=!0,n.vy=0,at=!0,n.airSteps>1&&(n.rhythm.slideBlend=Math.max(0,n.rhythm.slideBlend-gl.slideRelease*n.airSteps*i))),n.pitch=ee(Math.atan2(n.vy,Math.max(Math.hypot(n.vx,n.vz),1)),-.6,.6)),n.justLaunched=!1;const It=Al(n,t,i);n.lastIdx=It;const B=n.px-t.x[It],De=n.pz-t.z[It],Ht=B*t.nx[It]+De*t.nz[It],Gt=Z_(t.halfW);n.wallCool=Math.max(0,n.wallCool-i);let Tt=!1,Xt=0,Et=0,A=0;const y=n.scrapeT<=0,G=Ht>=0?1:-1,j=t.barrier&&t.cum?Xo(t.barrier,t.cum[It]??0,G):!0;if(Math.abs(Ht)>Gt&&j){const et=Math.abs(Ht)-Gt,Mt=Math.sign(Ht);n.px-=t.nx[It]*Mt*et,n.pz-=t.nz[It]*Mt*et,Et=-t.nx[It]*Mt,A=-t.nz[It]*Mt;const St=n.vx*t.nx[It]+n.vz*t.nz[It],Ut=St*Mt;if(Ut>0){n.vx-=t.nx[It]*St,n.vz-=t.nz[It]*St;const $=y&&Ut<=gs?Math.max(Ut,et*12):Ut;if($>gs&&n.wallCool<=0&&(y||Ut>2*gs)){const it=ee(W_+$*X_,0,q_);n.vx*=1-it,n.vz*=1-it,n.vx-=t.nx[It]*Mt*$*yl,n.vz-=t.nz[It]*Mt*$*yl,Xt=ee($/25,0,1),Lt=Xt,Tt=!0,n.wallCool=tx,n.crashT=ex,n.crashAmp=Mt*El*Xt}else if(Ut<=gs&&y){const it=ee(Ut*J_,0,Q_);n.vx*=1-it,n.vz*=1-it,Xt=ee(Ut/25,0,1)}else Xt=ee(Ut/25,0,1)}n.scrapeT+=i;const I=ee(n.scrapeT/V_,0,1),nt=c*Mt<-.05,k=Math.exp(-(nt?k_:G_)*I*i);n.vx*=k,n.vz*=k,Ft=!0,Y=Math.hypot(n.vx,n.vz)}else n.scrapeT=0;{const et=(n.px-t.x[It])*t.nx[It]+(n.pz-t.z[It])*t.nz[It],Mt=t.y[It]+.2-n.py>px;Math.abs(et)>t.halfW+dx||Mt?n.oobMs+=i*1e3:n.oobMs=Math.max(0,n.oobMs-2*i*1e3)}{const et=n.px-t.x[0],Mt=n.pz-t.z[0],St=et*t.tx[0]+Mt*t.tz[0];if(St<-3&&et*et+Mt*Mt<Tl*Tl){n.px-=t.tx[0]*(St+3),n.pz-=t.tz[0]*(St+3);const Ut=n.vx*t.tx[0]+n.vz*t.tz[0];Ut<0&&(n.vx-=t.tx[0]*Ut,n.vz-=t.tz[0]*Ut)}}const Z=n.lastIdx;n.snapTimer+=i;const K=Math.hypot(n.vx,n.vz),pt=Math.sin(n.heading),ot=Math.cos(n.heading),ut=Math.abs(Math.atan2(n.vx*ot-n.vz*pt,Math.abs(n.vx*pt+n.vz*ot)+1e-6));n.snapTimer>.75&&n.grounded&&Math.abs(mt)<=t.halfW+.5&&K>=lx&&ut<=hx&&(n.snapTimer=0,n.snap={i:Z,x:n.px,y:n.py,z:n.pz,h:n.heading,vx:n.vx,vz:n.vz});let Vt=!1;{const et=t.n-1,Mt=(n.px-t.x[et])*t.tx[et]+(n.pz-t.z[et])*t.tz[et];if(n.prevFinD<=0&&Mt>0&&n.prevRaceMs+i*1e3>d_&&n.lastIdx>=t.n-ux){const St=ee(-n.prevFinD/(Mt-n.prevFinD||1e-9),0,1);n.raceMs=n.prevRaceMs+St*i*1e3,n.px=n.px0+(n.px-n.px0)*St,n.py=n.py0+(n.py-n.py0)*St,n.pz=n.pz0+(n.pz-n.pz0)*St,n.heading=n.h0+Ro(n.heading-n.h0)*St,n.rec.p.push([n.px,n.py,n.pz,n.heading]),n.rec.ts.push(n.raceMs),n.rec.t=Math.round(n.raceMs),n.finished=!0,n.finishCount++,n.px0=n.px,n.py0=n.py,n.pz0=n.pz,n.h0=n.heading,n.pitch0=n.pitch,Vt=!0}else n.raceMs=n.prevRaceMs+i*1e3;n.prevFinD=n.prevFinD<=0&&Mt>0?n.prevFinD:Mt}n.finished||n.raceMs-n.recLastMs>=a_-1e-6&&(n.recLastMs=n.raceMs,n.rec.p.push([n.px,n.py,n.pz,n.heading]),n.rec.ts.push(n.raceMs)),Y=Math.hypot(n.vx,n.vz),Ft&&Y<cx?n.scrapeLowMs+=i*1e3:n.scrapeLowMs=0;const J=Math.sin(n.heading),ft=Math.cos(n.heading),At=n.vx*J+n.vz*ft,Ct=n.vx*ft-n.vz*J;return{spd:Y,drifting:Q,sIdx:Z,pitch:n.pitch,launched:dt,landed:at,finished:Vt,fSpeed:At,lSpeed:Ct,slip:Math.atan2(Ct,Math.abs(At)+1e-6),yawRate:Ro(n.heading-n.h0)/i,offroad:Rt,surface:n.grounded?Rt?"offroad":"road":"air",landV:wt,impact:Lt,scraping:Ft,stuckMs:n.scrapeLowMs,wallHit:Tt,wallSev:Xt,wallNx:Et,wallNz:A,wallCool:n.wallCool,driftPhase:n.rhythmOut.phase,rhythmBoost:s,exitQuality:n.rhythm.lastQuality,pendAmp:n.rhythm.pendAmp,kickT:n.kickT,chainArmed:n.rhythm.chainT>0&&n.rhythm.chainDir!==0,oobMs:n.oobMs}}function Ax(n,t){const e=ee(t,0,1);return{x:sn(n.px0,n.px,e),y:sn(n.py0,n.py,e),z:sn(n.pz0,n.pz,e),h:n.h0+Ro(n.heading-n.h0)*e,pitch:sn(n.pitch0,n.pitch,e)}}function bx(n,t,e){return t>0?e:n}function wx(n){if(n.length===0)return[];const t=[.25,.5,.75],e=[];for(const i of t){const r=Math.min(n.length-1,Math.max(0,Math.floor(n.length*i))),s=n[r].endS;(e.length===0||s>e[e.length-1]+1)&&e.push(s)}return e}function Rx(n,t){let e=0,i=1/0;for(let r=0;r<n.length;r++){const s=Math.abs(n[r]-t);s<i&&(i=s,e=r)}return e}function wl(n,t,e){if(!n||n.p.length<2||n.ts.length!==n.p.length)return-1;let i=0,r=1/0;for(let a=0;a<n.p.length;a++){const o=n.p[a][0]-t,c=n.p[a][2]-e,h=o*o+c*c;h<r&&(r=h,i=a)}const s=n.ts[i];return typeof s=="number"&&isFinite(s)&&s>=0?s:-1}function Cx(n){const t=n/1e3,e=t<0?"-":"+",i=Math.abs(t);return`${e}${i.toFixed(2)}`}function Rl(n,t,e){if(!isFinite(n)||!isFinite(t)||t<0)return"";const i=Math.round(Math.abs(n)/1e3*t);return`${Cx(n)} · ${i}m vs ${e}`}const Cl=.1;function Lx(n){return!isFinite(n)||n<0?0:n>Cl?Cl:n}const Px=11.5,Ll=2,Dx=2400,Ix=3650,Ux=140,Nx=240,Fx=40,Ox=.3,Ps=40,Bx=11,zx=14,Hx=5,Gx=7,kx=3,Vx=4;function Wx(){const n=(e,i,r,s)=>({kind:"corner",corner:{dir:e,r0:i,r1:r,angleDeg:s}}),t=e=>({kind:"straight",len:e});return[t(175),n("R",145,145,45),t(50),n("L",116,116,120),t(45),n("R",118,118,125),t(50),n("L",150,150,48),t(55),n("R",66,38,92),t(190),n("L",155,155,45),t(50),n("R",112,112,115),t(185),n("L",188,188,28),t(50),n("R",120,120,120),t(55),n("L",140,140,50),t(50),n("R",186,186,30),t(55),n("L",118,118,118),t(150)]}const wr=[{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"dec",rMin:62,rMax:70,aMin:85,aMax:100},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"kink",rMin:180,rMax:198,aMin:24,aMax:34},{cls:"kink",rMin:180,rMax:198,aMin:24,aMax:34}];function Xx(n,t){return n==="sweep"?50+t()*12:n==="kink"?45+t()*12:n==="drift"?55+t()*12:45+t()*12}function Pl(n,t){const e=Wx();if(t>=Ps)return e;const i=Ks($s(`canyon-${n}#${t}`)),r=R=>R[Math.floor(i()*R.length)],s=wr.map((R,N)=>R.cls==="sweep"?N:-1).filter(R=>R>=0),a=wr.map((R,N)=>R.cls==="sweep"||R.cls==="kink"?N:-1).filter(R=>R>=0),o=wr.findIndex(R=>R.cls==="dec"),c=wr.map((R,N)=>N),h=(R,N)=>{const q=r(N);return R.splice(R.indexOf(q),1),q},u=new Array(12).fill(-1);u[0]=h(c,s),u[11]=h(c,a.filter(R=>c.includes(R)));const f=2+Math.floor(i()*8);u[f]=o,c.splice(c.indexOf(o),1);const d=u.map((R,N)=>R<0?N:-1).filter(R=>R>=0);for(let R=d.length-1;R>=0;R--)u[d[R]]=c.splice(Math.floor(i()*c.length),1)[0];const p=R=>wr[u[R]],g=R=>{const N=p(R);return(N.aMin+N.aMax)/2*Math.PI/180},_=[];_.push(i()<.5?"L":"R");for(let R=1;R<12;R++)_.push(i()<.7?_[R-1]==="L"?"R":"L":_[R-1]);const m=()=>{let R=0;for(let N=0;N<12;N++)R+=(_[N]==="L"?1:-1)*g(N);return R};for(let R=0;R<24&&Math.abs(m())>50*Math.PI/180;R++){const N=1+Math.floor(i()*10),q=Math.abs(m());_[N]=_[N]==="L"?"R":"L",Math.abs(m())>=q&&(_[N]=_[N]==="L"?"R":"L")}_.includes("L")||(_[5]="L"),_.includes("R")||(_[6]="R");const l=[];l.push({kind:"straight",len:155+i()*20});const x=[];for(let R=0;R<12;R++){const N=p(R),q=N.rMin+i()*(N.rMax-N.rMin),X=N.aMin+i()*(N.aMax-N.aMin),rt=N.cls==="dec"?{dir:_[R],r0:q,r1:Math.max(30,q*(.5+i()*.08)),angleDeg:X}:{dir:_[R],r0:q,r1:Math.max(30,q+(i()*8-4)),angleDeg:X};l.push({kind:"corner",corner:rt}),R<11&&(x.push(l.length),l.push({kind:"straight",len:Xx(p(R+1).cls,i)}))}l.push({kind:"straight",len:150+i()*20});const M=u.indexOf(o),v=M===0?0:x[M-1],D=M===11?l.length-1:x[M],C=[[v,80],[D,95]];for(let R=0;R<11;R++){const N=p(R+1);N.cls!=="drift"&&N.cls!=="dec"||_[R+1]!==_[R]&&C.push([x[R],85])}for(const[R,N]of C){const q=l[R];q.kind==="straight"&&q.len<N&&(q.len=N+i()*10)}const w=x.filter((R,N)=>{const q=p(N+1).cls;return q==="sweep"||q==="kink"}),P=w.filter(R=>{const N=p(x.indexOf(R)).cls;return N==="sweep"||N==="kink"}),T=P.length>=2?P:w.length>=2?w:x,S=T[Math.floor(i()*T.length)];let b=T[Math.floor(i()*T.length)];for(;b===S;)b=T[Math.floor(i()*T.length)];for(const R of[S,b]){const N=l[R];N.kind==="straight"&&N.len<180&&(N.len=180+i()*15)}const z=R=>l[1+R*2].corner.dir,L=R=>l[2+R*2].len;let U=0;for(let R=0;R<11;R++)z(R)!==z(R+1)&&L(R)<=110&&U++;for(let R=0;R<11&&U<2;R++)if(z(R)===z(R+1)&&L(R)<=110){const N=l[1+(R+1)*2];N.corner.dir=N.corner.dir==="L"?"R":"L",U++}return l}function qx(){return{climbTop:14,rollerAmp:.8,rollerLen:260,rollerPhase:0}}function Yx(n,t){const e=Ks($s(`canyon-elev-${n}#${t}`));return{climbTop:10+e()*6,rollerAmp:.4+e()*.4,rollerLen:240+e()*80,rollerPhase:e()*Math.PI*2}}function $x(n,t){const e=Ks($s(`canyon-mark-${n}#${t}`));return[.26+e()*.08,.5+e()*.1,.74+e()*.08]}function Kx(n,t){return Oh(n,t,qx(),[.3,.55,.8])}function Oh(n,t,e,i){const r=[{x:0,z:0,s:0}];let s=0,a=0,o=0,c=0;const h=[];for(const l of n)if(l.kind==="straight"){h.push({a:c,b:c+l.len});let x=l.len;for(;x>1e-9;){const M=Math.min(Ll,x);s+=Math.sin(o)*M,a+=Math.cos(o)*M,c+=M,x-=M,r.push({x:s,z:a,s:c})}}else{const{dir:x,r0:M,r1:v,angleDeg:D}=l.corner,C=x==="L"?1:-1,w=D*Math.PI/180;let P=0;for(;P<w-1e-9;){const T=M+(v-M)*(P/w),S=Math.min(Ll/T,w-P),b=T*S;o+=C*S,s+=Math.sin(o)*b,a+=Math.cos(o)*b,c+=b,P+=S,r.push({x:s,z:a,s:c})}}const u=c,f=h.slice(1,-1).map((l,x)=>({r:l,len:l.b-l.a,k:x})).sort((l,x)=>x.len-l.len),d=[f[0].r,f[1].r],p=d.map(l=>Math.min(l.b-150-t%3*5,l.b-150)).map((l,x)=>Math.max(l,d[x].a+40)),g=(l,x,M)=>{const v=ee((M-l)/(x-l),0,1);return v*v*(3-2*v)},_=l=>{const x=u-350,M=6+(ee(l,250,x)-250)/Math.max(x-250,1)*(e.climbTop-6)+Math.sin((ee(l,250,x)-250)/e.rollerLen*Math.PI*2+e.rollerPhase)*e.rollerAmp,v=14-(ee(l,x,u-150)-x)/200*7;let D=sn(6,M,g(210,290,l));D=sn(D,v,g(x-60,x+60,l)),D=sn(D,7,g(u-260,u-140,l));for(const C of p){const w=(l-C)/18;D+=4.5*Math.exp(-w*w)}return D};return{points:r.map(l=>({x:l.x,y:_(l.s),z:l.z})),s:r.map(l=>l.s),crestS:p,straightRanges:h,landmarkS:i.map(l=>l*u)}}function jx(n){const t=[0];for(let e=1;e<n.length;e++)t.push(t[e-1]+Math.hypot(n[e].x-n[e-1].x,n[e].z-n[e-1].z));return t}function Zx(n,t){const e=[];let i=n[0]+t;for(let r=1;r<n.length-1;r++)n[r]>=i&&(e.push(r),i=n[r]+t);return e}function Dl(n){const t=n.length,e=[0];for(let l=1;l<t;l++)e.push(e[l-1]+Math.hypot(n[l].x-n[l-1].x,n[l].z-n[l-1].z));const i=e[t-1],r=[];for(let l=0;l<t;l++){const x=n[Math.max(l-2,0)],M=n[Math.min(l+2,t-1)];r.push(Math.atan2(M.x-x.x,M.z-x.z))}const s=[r[0]];for(let l=1;l<t;l++){let x=r[l]-s[l-1];for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;s.push(s[l-1]+x)}const a=7,o=[];for(let l=0;l<t;l++){let x=0,M=0;for(let v=-a;v<=a;v++){const D=l+v;D>=0&&D<t&&(x+=s[D],M++)}o.push(x/M)}const c=new Array(t).fill(1/0);for(let l=1;l<t-1;l++){const x=e[l+1]-e[l-1],M=Math.abs(o[l+1]-o[l-1]);M>1e-6&&x>1e-9&&(c[l]=x/M)}const h=[];let u=0;const f=l=>c[l]<200;for(;u<t;){if(!f(u)){u++;continue}let l=u;for(;l<t&&f(l);)l++;let x=l;for(;x<t&&!f(x)&&(x<l||e[x]-e[l-1]<25);)x++;if(x<t&&f(x)&&e[x]-e[l-1]<25)for(l=x;l<t&&f(l);)l++;if(e[l-1]-e[u]>=30){const M=c.slice(u,l).filter(L=>isFinite(L)),v=M.slice().sort((L,U)=>L-U),D=v.length?v[Math.floor(v.length/2)]:1/0,C=Math.min(8,Math.floor(M.length/4)),w=M.slice(C,M.length-C),P=L=>{const U=L.slice().sort((R,N)=>R-N);return U.length?U[Math.floor(U.length/2)]:D},T=Math.max(1,Math.floor(w.length/3)),S=P(w.slice(0,T)),b=P(w.slice(-T));let z=0;for(let L=u;L<l-1;L++)z+=s[L+1]-s[L];h.push({startS:e[u],endS:e[l-1],dir:z>=0?"L":"R",medR:D,entryR:S,exitR:b,decreasing:b<.8*S})}u=l}let d=1/0;for(let l=0;l<t;l+=2)for(let x=l+150;x<t;x+=2){const M=Math.hypot(n[l].x-n[x].x,n[l].z-n[x].z);M<d&&(d=M)}let p=0,g=1/0,_=-1/0;for(let l=0;l<t;l++)if(g=Math.min(g,n[l].y),_=Math.max(_,n[l].y),l>0){const x=e[l]-e[l-1];x>1e-9&&(p=Math.max(p,Math.abs((n[l].y-n[l-1].y)/x)))}let m=0;for(let l=2;l<t-2;l++){const x=n[l].y;if(x<=n[l-1].y||x<=n[l+1].y||x<=n[l-2].y||x<=n[l+2].y)continue;let M=1/0;for(let w=-60;w<=60;w++){const P=l+w;P>=0&&P<t&&(M=Math.min(M,n[P].y))}if(x-M<2.5)continue;const v=(x+M)/2;let D=l,C=l;for(;D>0&&n[D-1].y>v;)D--;for(;C<t-1&&n[C+1].y>v;)C++;e[C]-e[D]<=70&&m++}return{length:i,n:t,events:h,clearance:d,maxGrade:p,elevMin:g,elevMax:_,crestCount:m}}function Il(n){let t=2166136261;const e=i=>{const r=Math.round(i*1e3);t^=r&65535,t=Math.imul(t,16777619),t^=r>>>16&65535,t=Math.imul(t,16777619)};for(const i of n)e(i.x),e(i.y),e(i.z);return(t>>>0).toString(16)}function Ul(n){const t=n.length,e=[0];for(let o=1;o<t;o++)e.push(e[o-1]+Math.hypot(n[o].x-n[o-1].x,n[o].z-n[o-1].z));const i=[];for(let o=0;o<t;o++){const c=n[Math.max(o-3,0)],h=n[Math.min(o+3,t-1)];i.push(Math.atan2(h.x-c.x,h.z-c.z))}const r=[];for(let o=0;o<t;o++){const c=Math.max(o-3,0),h=Math.min(o+3,t-1);let u=Math.abs(i[h]-i[c]);for(;u>Math.PI;)u=2*Math.PI-u;const d=Math.max(e[h]-e[c],1e-6)/Math.max(u,1e-6),p=d<=130?95:48;r.push(Math.min(80,Math.sqrt(p*Math.min(d,1e6))))}const s=r.slice();s[0]=Math.min(s[0],10);for(let o=1;o<t;o++){const c=Math.max(e[o]-e[o-1],1e-6);s[o]=Math.min(r[o],Math.sqrt(s[o-1]*s[o-1]+150*c))}for(let o=t-2;o>=0;o--){const c=Math.max(e[o+1]-e[o],1e-6);s[o]=Math.min(s[o],Math.sqrt(s[o+1]*s[o+1]+140*c))}let a=0;for(let o=1;o<t;o++){const c=e[o]-e[o-1];a+=2*c/Math.max(s[o]+s[o-1],1e-6)}return a}function Jx(n,t){if(n.length<Dx||n.length>Ix)return!1;const e=n.events;if(e.length<Bx||e.length>zx)return!1;const i=e.filter(a=>a.medR>=45&&a.medR<=130);if(i.length<Hx||i.length>Gx)return!1;const r=e.filter(a=>a.medR>130&&a.medR<=175);if(r.length<kx||r.length>Vx||!e.some(a=>a.dir==="L")||!e.some(a=>a.dir==="R"))return!1;let s=0;for(let a=1;a<e.length;a++)e[a].dir!==e[a-1].dir&&e[a].startS-e[a-1].endS<=110&&s++;if(s<2||!e.some(a=>a.decreasing)||e[0].startS<Ux||e[0].startS>Nx||n.clearance<Fx||n.maxGrade>Ox||n.crestCount<1||n.crestCount>2)return!1;for(const a of t.crestS){const o=e.find(c=>c.startS>a);if(!o){if(n.length-(a+65)<60)return!1;continue}if(o.startS-(a+65)<60||!(o.medR>130))return!1}return!0}function Qx(n){for(let i=0;i<Ps;i++){const r=Oh(Pl(n,i),i,Yx(n,i),$x(n,i)),s=Dl(r.points);if(Jx(s,r))return{points:r.points,stats:s,attempt:i,fallback:!1,crestS:r.crestS,estTimeS:Ul(r.points),checksum:Il(r.points),landmarkS:r.landmarkS}}const t=Kx(Pl(n,Ps),0),e=Dl(t.points);return{points:t.points,stats:e,attempt:Ps,fallback:!0,crestS:t.crestS,estTimeS:Ul(t.points),checksum:Il(t.points),landmarkS:t.landmarkS}}function tv(n={}){const t=n.mobile??!1;return{halfW:n.halfW??8,guardSpacing:n.guardSpacing??(t?16:10),tickSpacing:n.tickSpacing??(t?40:25),chevronAdvance:n.chevronAdvance??[70,50,30],chevronRepeater:n.chevronRepeater??40,dustN:n.dustN??(t?80:160),mobile:t,barriers:n.barriers??null}}const Li={MAX_GUARDRAILS:640,MAX_CHEVRONS:128,MAX_TICKS:260,MAX_DUST:220};function Ko(n,t){let e=0,i=n.length-1;if(t<=n[0])return 0;if(t>=n[i])return i;for(;e+1<i;){const r=e+i>>1;n[r]<t?e=r:i=r}return i}function Bh(n,t,e=t.barriers??null){const i=[],r=[];if(n.length<2)return{idx:i,side:r};const s=n[n.length-1];if(e)for(const a of[1,-1]){let o=t.guardSpacing;for(let c=1;c<n.length-1&&o<s-8;c++)n[c]>=o&&(Xo(e,n[c],a)&&(i.push(c),r.push(a)),o=n[c]+t.guardSpacing)}else{let a=t.guardSpacing;for(let o=1;o<n.length-1&&a<s-8;o++)n[o]>=a&&(i.push(o,o),r.push(1,-1),a=n[o]+t.guardSpacing)}if(i.length>Li.MAX_GUARDRAILS){let a=i.length-(i.length-Li.MAX_GUARDRAILS);a-=a%2,i.length=a,r.length=a}return{idx:i,side:r}}function zh(n,t){const e=[];if(n.length<2)return e;const i=n[n.length-1],r=Math.floor(Li.MAX_TICKS/2);let s=t.tickSpacing;for(let a=1;a<n.length-1&&s<i-8&&!(n[a]>=s&&(e.push(a),s=n[a]+t.tickSpacing,e.length>=r));a++);return e}function Hh(n,t,e){const i=[];if(n.length<2)return i;const r=n[n.length-1];for(const s of t){if(!isFinite(s.startS)||!isFinite(s.endS))continue;const a=s.dir==="L"?1:-1,o=s.medR<=130;for(const c of e.chevronAdvance){const h=s.startS-c;h>10&&h<r-10&&i.push({s:h,side:a,severe:o})}for(let c=s.startS+10;c<s.endS-5;c+=e.chevronRepeater)i.push({s:c,side:a,severe:o})}return i.sort((s,a)=>s.s-a.s),i.length>Li.MAX_CHEVRONS&&(i.length=Li.MAX_CHEVRONS),i}function ev(n,t,e){return n.length<2?{guardrails:0,chevrons:0,ticks:0,dust:0}:{guardrails:Bh(n,e).idx.length,chevrons:Hh(n,t,e).length,ticks:zh(n,e).length*2,dust:Math.min(e.dustN,Li.MAX_DUST)}}const Re={GATE_SPEED:10,GATE_MIX:.25,WIDTH_MIN:.16,WIDTH_MAX:.45,LEN_MIN:.7,LEN_MAX:1.4,DUST_SPREAD_MIN:.8,DUST_SPREAD_MAX:2,ATTACK:5,RELEASE:2.5};function ii(n){return n<0?0:n>1?1:n}function nv(n,t,e,i,r){if(!i||!r||e<Re.GATE_SPEED||n<Re.GATE_MIX)return 0;const s=ii((n-Re.GATE_MIX)/(1-Re.GATE_MIX)),a=s*s*(3-2*s),o=ii(Math.abs(t)/.5);return ii(a*(.35+.65*o))}function iv(n,t,e){const i=t>n?Re.ATTACK:Re.RELEASE,r=t-n,s=i*Math.max(0,e);return r>s?n+s:r<-s?n-s:t}function rv(n){return Re.WIDTH_MIN+(Re.WIDTH_MAX-Re.WIDTH_MIN)*ii(n)}function sv(n){return Re.LEN_MIN+(Re.LEN_MAX-Re.LEN_MIN)*ii(n)}function av(n){return ii(.1+.6*ii(n))}function ov(n){return n<.12?0:n<.35?3:n<.65?2:1}function cv(n){return n<.15?0:n<.55?1:2}function lv(n){return Re.DUST_SPREAD_MIN+(Re.DUST_SPREAD_MAX-Re.DUST_SPREAD_MIN)*ii(n)}class hv{constructor(t){this.head=0,this.n=Math.max(0,Math.min(Math.floor(t),Li.MAX_DUST)),this.positions=new Float32Array(this.n*3),this.life=new Float32Array(this.n);for(let e=0;e<this.n;e++)this.positions[e*3+1]=-100}spawn(t,e,i,r){if(this.n===0)return;const s=this.head,a=(s*2654435761>>>0)/4294967296-.5,o=(s*40503+7)%100/100,c=(s*65599+13)%100/100-.5;this.positions[s*3]=t+a*r,this.positions[s*3+1]=e+o*1.2,this.positions[s*3+2]=i+c*r,this.life[s]=1,this.head=(s+1)%this.n}update(t){const e=t*1.4,i=t*2;for(let r=0;r<this.n;r++)this.life[r]>0&&(this.life[r]-=e,this.positions[r*3+1]+=i,this.life[r]<=0&&(this.positions[r*3+1]=-100))}}const Nl=new WeakMap;function uv(n,t){let e=Nl.get(n);if(!e){const i=r=>{const s=new n.BoxGeometry(1,1,1),a=new n.PlaneGeometry(2.4,1.3),o=new n.PlaneGeometry(1.4,.5);o.rotateX(-Math.PI/2);const c=new n.MeshLambertMaterial({color:16777215}),h=new n.MeshBasicMaterial({color:16777215,side:n.DoubleSide}),u=new n.MeshBasicMaterial({color:16117725,transparent:!0,opacity:r?.55:.8});return{guardGeo:s,chevGeo:a,tickGeo:o,guardMat:c,chevMat:h,tickMat:u}};e={desk:i(!1),mob:i(!0)},Nl.set(n,e)}return t?e.mob:e.desk}function fv(n,t,e,i={}){const r=tv(i),s=e.events??[],a=ev(e.cum,s,r),o=uv(n,r.mobile),c=new n.Group;c.name="canyon-visuals",t.add(c);const h=new n.Matrix4,u=new n.Quaternion,f=new n.Euler,d=new n.Vector3,p=new n.Vector3,g=new n.Vector3(1,1,1),_=new n.Color,m=b=>Math.atan2(e.tangents[b].x,e.tangents[b].z),l=[];let x=null,M=null,v=null;const D=Bh(e.cum,r),C=[[],[]];for(let b=0;b<D.idx.length;b++)C[D.side[b]>0?0:1].push(D.idx[b]);const w=[];for(let b=0;b<2;b++){const z=b===0?1:-1,L=C[b];for(let U=0;U+1<L.length;U++){if(e.cum[L[U+1]]-e.cum[L[U]]>r.guardSpacing*1.6)continue;const R=e.points[L[U]],N=e.normals[L[U]],q=e.points[L[U+1]],X=e.normals[L[U+1]];w.push({ax:R.x+N.x*z*(r.halfW+2),ay:R.y,az:R.z+N.z*z*(r.halfW+2),bx:q.x+X.x*z*(r.halfW+2),by:q.y,bz:q.z+X.z*z*(r.halfW+2),side:z})}}if(w.length>0){x=new n.InstancedMesh(o.guardGeo,o.guardMat,w.length);for(let b=0;b<w.length;b++){const z=w[b],L=z.bx-z.ax,U=z.bz-z.az,R=Math.sqrt(L*L+U*U);f.set(0,Math.atan2(L,U),0),u.setFromEuler(f),d.set((z.ax+z.bx)/2,(z.ay+z.by)/2+.35,(z.az+z.bz)/2),p.set(.55,1,R+1.5),h.compose(d,u,p),x.setMatrixAt(b,h),x.setColorAt(b,_.set(b%4===3?14170666:15327954))}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),c.add(x),l.push(x)}const P=Hh(e.cum,s,r);if(P.length>0){M=new n.InstancedMesh(o.chevGeo,o.chevMat,P.length);for(let b=0;b<P.length;b++){const z=Ko(e.cum,P[b].s),L=e.points[z],U=e.normals[z];f.set(0,m(z)+Math.PI,0),u.setFromEuler(f),d.set(L.x+U.x*P[b].side*(r.halfW+4.5),L.y+1.5,L.z+U.z*P[b].side*(r.halfW+4.5)),p.set(1,1,1),h.compose(d,u,p),M.setMatrixAt(b,h),M.setColorAt(b,_.set(P[b].severe?14170666:15902010))}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M)}const T=zh(e.cum,r);if(T.length>0){v=new n.InstancedMesh(o.tickGeo,o.tickMat,T.length*2);let b=0;for(const z of T){const L=e.points[z],U=e.normals[z];f.set(0,m(z),0),u.setFromEuler(f);for(const R of[1,-1])d.set(L.x+U.x*R*(r.halfW-1.2),L.y+.17,L.z+U.z*R*(r.halfW-1.2)),h.compose(d,u,g),v.setMatrixAt(b++,h)}v.count=b,v.instanceMatrix.needsUpdate=!0,c.add(v),l.push(v)}const S=new hv(r.dustN);return{counts:a,dust:S,setQuality(b){v&&(v.visible=!b),x&&(x.visible=!0),M&&(M.visible=!0)},update(b){S.update(b)},dispose(){for(const b of l)c.remove(b),b.dispose();t.remove(c)}}}const Gr={posLambda:7,lookLambda:10,headLambda:5,fovLambda:5,driftLambda:6,feedforward:1,maxImpulse:1.2,impulseDecay:5,camDist:11.5,camHeight:4.6,lookAhead:9,lookHeight:1.4,baseFov:62,speedFov:14,driftFov:5,fullSpeed:60,maxDt:.05};function dv(){return{px:0,py:0,pz:0,pvx:0,pvy:0,pvz:0,lx:0,ly:0,lz:0,lvx:0,lvy:0,lvz:0,fov:Gr.baseFov,fovV:0,camH:0,driftMix:0,impx:0,impy:0,impz:0,ready:!1}}function zs(n){return Math.atan2(Math.sin(n),Math.cos(n))}function Jn(n,t,e){return Math.max(t,Math.min(e,n))}function Ln(n){return typeof n=="number"&&isFinite(n)}function xi(n,t,e,i,r,s){const a=i*i,o=2*i,c=t+((e-n)*a-t*o)*r;s[0]=n+c*r,s[1]=c}function js(n,t,e,i,r,s){const a=Math.sin(s),o=Math.cos(s);n.px=e-a*t.camDist,n.py=i+t.camHeight,n.pz=r-o*t.camDist,n.pvx=0,n.pvy=0,n.pvz=0,n.lx=e+a*t.lookAhead,n.ly=i+t.lookHeight,n.lz=r+o*t.lookAhead,n.lvx=0,n.lvy=0,n.lvz=0,n.fov=t.baseFov,n.fovV=0,n.camH=zs(s),n.driftMix=0,n.impx=0,n.impy=0,n.impz=0,n.ready=!0}function pv(n,t,e,i,r,s,a,o){let c=n;i>8?c=Math.atan2(t,e):a&&(r!==0||s!==0)&&(c=Math.atan2(r,s));const h=zs(n-c),u=Jn(i/8,0,1),f=(1-.75*Jn(o,0,1))*u;return c+h*f}function mv(n,t,e){return n.baseFov+Jn(t/n.fullSpeed,0,1)*n.speedFov+Jn(e,0,1)*n.driftFov}const fe=[0,0];function gv(n,t,e){const i=e.dt;if(!Ln(i)||i<=0||!Ln(e.px)||!Ln(e.py)||!Ln(e.pz)||!Ln(e.heading)||!Ln(e.vx)||!Ln(e.vz))return;if(!n.ready){js(n,t,e.px,e.py,e.pz,e.heading);return}const r=i>t.maxDt?t.maxDt:i,s=Jn(e.speed,0,200),a=e.drifting?1:0;n.driftMix+=(a-n.driftMix)*(1-Math.exp(-t.driftLambda*r)),n.driftMix=Jn(n.driftMix,0,1);const o=pv(e.heading,e.vx,e.vz,s,e.tangentX,e.tangentZ,e.hasTangent,n.driftMix);n.camH+=zs(o-n.camH)*(1-Math.exp(-t.headLambda*r)),n.camH=zs(n.camH);const c=Math.sin(n.camH),h=Math.cos(n.camH),u=Math.max(t.feedforward*(2/t.posLambda)-r,0),f=e.px-c*t.camDist+e.vx*u,d=e.py+t.camHeight,p=e.pz-h*t.camDist+e.vz*u;xi(n.px,n.pvx,f,t.posLambda,r,fe),n.px=fe[0],n.pvx=fe[1],xi(n.py,n.pvy,d,t.posLambda,r,fe),n.py=fe[0],n.pvy=fe[1],xi(n.pz,n.pvz,p,t.posLambda,r,fe),n.pz=fe[0],n.pvz=fe[1];const g=Math.max(t.feedforward*(2/t.lookLambda)-r,0),_=e.px+c*t.lookAhead+e.vx*g,m=e.py+t.lookHeight,l=e.pz+h*t.lookAhead+e.vz*g;if(xi(n.lx,n.lvx,_,t.lookLambda,r,fe),n.lx=fe[0],n.lvx=fe[1],xi(n.ly,n.lvy,m,t.lookLambda,r,fe),n.ly=fe[0],n.lvy=fe[1],xi(n.lz,n.lvz,l,t.lookLambda,r,fe),n.lz=fe[0],n.lvz=fe[1],xi(n.fov,n.fovV,mv(t,s,n.driftMix),t.fovLambda,r,fe),n.fov=fe[0],n.fovV=fe[1],e.landed&&Ln(e.landV)&&e.landV<0&&(n.impy-=Jn(-e.landV/22,0,1)*.9),e.wallHit&&Ln(e.wallVn)&&e.wallVn>0){const v=Jn(e.wallVn/25,0,1)*.8,D=Math.hypot(e.vx,e.vz);D>1e-6&&(n.impx-=e.vx/D*v,n.impz-=e.vz/D*v)}const x=Math.hypot(n.impx,n.impy,n.impz);if(x>t.maxImpulse&&x>0){const v=t.maxImpulse/x;n.impx*=v,n.impy*=v,n.impz*=v}const M=Math.exp(-t.impulseDecay*r);n.impx*=M,n.impy*=M,n.impz*=M}function _v(n,t){t.x=n.px+n.impx,t.y=n.py+n.impy,t.z=n.pz+n.impz}function xv(n){return Math.hypot(n.impx,n.impy,n.impz)}function vv(n={}){const t=n.mobile??!1;return{halfW:n.halfW??8,wallStep:n.wallStep??14,scrubStep:n.scrubStep??(t?20:12),mobile:t}}const ci={MAX_WALLS:700,MAX_MESAS:40,MAX_ARCHES:4,MAX_SCRUB:420},wi={MIN_WALL_LATERAL:17,INSIDE_LATERAL:26,INSIDE_HEIGHT_CAP:22,MAX_SCRUB_H:1.6,MIN_ARCH_LATERAL:22},Mv=15380867,Ye={GUARD_OUT:2.6,SHOULDER:2,SCRUB_OUT:3.1,CURVE_EXTRA:3,JITTER:.6,PUSHBACK:6};function ri(n){return n+Ye.GUARD_OUT+Ye.SHOULDER}function Ds(n,t,e){const i=n*Math.abs(Math.cos(e)),r=t*.4*Math.abs(Math.sin(e));return Math.sqrt(i*i+r*r)+Ye.JITTER}function Is(n,t){return Math.max(n,t)*1+Ye.JITTER}function Gh(n){return n*1.28+Ye.JITTER}function kh(n){return .9*n+.3}function Dt(n){let t=Math.imul(n|0,2654435761);return t^=t>>>15,t=Math.imul(t,2246822519),t^=t>>>13,(t>>>0)/4294967296}function Sv(n){const t=[[.4,.19,.1],[.6,.3,.15],[.75,.43,.23],[.87,.59,.37],[.84,.79,.7]],e=Math.min(.999,Math.max(0,n))*(t.length-1),i=Math.floor(e),r=e-i,s=t[i],a=t[i+1];return[s[0]+(a[0]-s[0])*r,s[1]+(a[1]-s[1])*r,s[2]+(a[2]-s[2])*r]}function _s(n){return n.dir==="L"?-1:1}function Fl(n,t){for(const e of n)if(t>=e.startS-20&&t<=e.endS)return e;return null}const xs=!0,Vh=300,Ua=[1.25,1.18,1.08];function yv(n){return n>=Vh}function Ev(n){const t=Math.floor(n/3);return Dt(t*131+7)<.36?"vista":"cut"}function Wh(n,t,e){const i=[],r=[];if(n.length<2)return{near:i,far:r};const s=n[n.length-1];let a=0,o=0,c=0,h=e.wallStep;for(let d=1;d<n.length-1&&h<s-10;d++){if(n[d]<h)continue;h=n[d]+e.wallStep;const p=n[d],g=Fl(t,p);let _=Ev(o);if(_==="cut"&&c>=4&&(_="vista"),o++,c=_==="vista"?0:c+1,_==="vista"){a++;const m=Dt(o*29+1)<.5?-1:1;let l=18+Dt(a*2+2)*36;g&&m===_s(g)&&(l=Math.min(l,wi.INSIDE_HEIGHT_CAP));const x=14+Dt(a*2+3)*22,M=e.wallStep*2.6,v=(Dt(a*3+5)-.5)*.9,D=g!==null&&m===_s(g),C=Math.max(48+Dt(a*2+1)*45,ri(e.halfW)+Ds(x,M,v)+(D?Ye.CURVE_EXTRA:0));i.push({idx:d,side:m,lateral:C,h:l,w:x,segLen:M,tint:a,yaw:v})}else{const l=.72+Dt(Math.floor(o/5)*57+3)*.65;for(const x of[1,-1]){a++;let M=(22+Dt(a*2+2)*30)*l;const v=g!==null&&x===_s(g);v&&(M=Math.min(M,wi.INSIDE_HEIGHT_CAP));const D=10+Dt(a*2+3)*14,C=e.wallStep*2.2,w=(Dt(a*3+5)-.5)*.9,P=Math.max(17+Dt(a*2+1)*17,v?wi.INSIDE_LATERAL:wi.MIN_WALL_LATERAL,ri(e.halfW)+Ds(D,C,w)+(v?Ye.CURVE_EXTRA:0))+Ye.PUSHBACK;i.push({idx:d,side:x,lateral:P,h:M,w:D,segLen:C,tint:a,yaw:w})}}}let u=0,f=60;for(let d=1;d<n.length-1&&f<s-10;d++)if(!(n[d]<f)){f=n[d]+60;for(const p of[1,-1]){u++;const g=30+Dt(1299709+u)*40,_=90,m=(Dt((5e3+u)*3+5)-.5)*.9,l=Fl(t,n[d]),x=l!==null&&p===_s(l);r.push({idx:d,side:p,lateral:Math.max(70+Dt(7919+u*2)*60,ri(e.halfW)+Ds(g,_,m)+(x?Ye.CURVE_EXTRA:0)),h:40+Dt(104729+u*2)*50,w:g,segLen:_,tint:5e3+u,yaw:m})}}return i.length+r.length>ci.MAX_WALLS&&(i.length=Math.max(0,ci.MAX_WALLS-r.length)),{near:i,far:r}}function Pr(n,t){return t*(.7+Dt(n*13+4)*.5)}function Xh(n,t=8){const e=[],i=n.points.length;if(i<2)return e;const r=p=>Ko(n.cum,n.cum[i-1]*p);[.12,.25,.4,.55,.7,.85].forEach((p,g)=>{const _=r(p),m=n.points[_],l=n.normals[_],x=g%2?-1:1,M=40+Dt(77+g*13)*50,v=Math.max(90+Dt(31+g*7)*120,ri(t)+Is(M,Pr(g,M)));e.push({x:m.x+l.x*x*v,y:m.y-8,z:m.z+l.z*x*v,w:M,h:50+Dt(101+g*17)*40,haze:0,tint:g})});let a=1/0,o=-1/0,c=1/0,h=-1/0,u=1/0;for(const p of n.points)p.x<a&&(a=p.x),p.x>o&&(o=p.x),p.z<c&&(c=p.z),p.z>h&&(h=p.z),p.y<u&&(u=p.y);const f=(a+o)/2,d=(c+h)/2;for(let p=0;p<8;p++){const g=p/8*Math.PI*2+Dt(1001+p)*.5,_=420+Dt(2002+p*3)*320;e.push({x:f+Math.cos(g)*_,y:u-20-Dt(3003+p)*20,z:d+Math.sin(g)*_,w:120+Dt(4004+p*5)*110,h:90+Dt(5005+p*7)*70,haze:.55,tint:100+p})}return[.33,.66].forEach((p,g)=>{const _=r(p),m=n.points[_],l=n.normals[_],x=g===0?1:-1,M=6+Dt(7007+g)*3,v=Math.max(55+Dt(6006+g)*20,ri(t)+Is(M,Pr(200+g,M)));e.push({x:m.x+l.x*x*v,y:m.y-6,z:m.z+l.z*x*v,w:M,h:70+Dt(8008+g)*25,haze:0,tint:200+g})}),[.03,.5].forEach((p,g)=>{const _=r(p),m=n.points[_],l=n.normals[_];for(const x of[1,-1]){const M=Vh+g*2+(x<0?1:0),v=3+Dt(6100+M)*1.5,D=Math.max(ri(t)+Is(v,Pr(M,v))+1.5,wi.MIN_WALL_LATERAL);e.push({x:m.x+l.x*x*D,y:m.y-4,z:m.z+l.z*x*D,w:v,h:30+Dt(6200+M)*12,haze:0,tint:M})}}),e.length>ci.MAX_MESAS&&(e.length=ci.MAX_MESAS),e}function qh(n,t){const e=[];if(n.length<2)return e;const i=n[n.length-1];return[.3,.55,.8].forEach((r,s)=>{const a=i*r;if(a<30||a>i-30)return;const o=8+Dt(9111+s*13)*4,c=Math.max(24+Dt(9009+s*11)*8,wi.MIN_ARCH_LATERAL,ri(t.halfW)+Gh(o))+Ye.PUSHBACK;e.push({idx:Ko(n,a),side:s%2?-1:1,lateral:c,r:o})}),e.length>ci.MAX_ARCHES&&(e.length=ci.MAX_ARCHES),e}function Yh(n,t){const e=[];if(n.length<2)return e;const i=n[n.length-1];let r=0,s=t.scrubStep;for(let a=1;a<n.length-1&&s<i-8;a++)if(!(n[a]<s)){s=n[a]+t.scrubStep;for(const o of[1,-1]){r++;const c=1+Dt(12004+r*5)*1.6;e.push({idx:a,side:o,lateral:Math.max(t.halfW+3.5+Dt(11003+r*3)*4.5,t.halfW+Ye.SCRUB_OUT+kh(c)),w:c,h:Math.min(.8+Dt(13005+r*7)*.8,wi.MAX_SCRUB_H),tint:r})}}return e.length>ci.MAX_SCRUB&&(e.length=ci.MAX_SCRUB),e}function vs(n,t,e,i){let r=1/0,s=t,a=e;const o=n.points;for(let c=0;c<o.length;c++){const h=t-o[c].x,u=e-o[c].z,f=Math.sqrt(h*h+u*u);f<r&&(r=f,s=o[c].x,a=o[c].z)}return i.x=s,i.z=a,r}const Ms=8;function $h(n,t,e,i,r,s){const a=ri(s),o=s+Ye.SCRUB_OUT,c={x:0,z:0},h=(m,l,x)=>{const M=n.points[m],v=n.normals[m];return{x:M.x+v.x*l*x,z:M.z+v.z*l*x}},u=m=>a+Ds(m.w,m.segLen,m.yaw)+Ye.CURVE_EXTRA,f=[],d=[];for(const m of[t.near,t.far]){const l=m===t.near?f:d;for(const x of m){let M=x,v=!1;for(let D=0;D<Ms;D++){const C=h(M.idx,M.side,M.lateral),w=vs(n,C.x,C.z,c);if(w>=u(M)){v=!0;break}const P=u(M)-w+.5;M={...M,lateral:M.lateral+P}}v&&l.push(M)}}const p=[];for(const m of e){if(m.haze>0){p.push(m);continue}let l=m.x,x=m.z;const M=Is(m.w,Pr(m.tint,m.w));let v=!1;for(let D=0;D<Ms;D++){const C=vs(n,l,x,c);if(C>=a+M){v=!0;break}const w=a+M-C+.5;let P=l-c.x,T=x-c.z;const S=Math.sqrt(P*P+T*T);S<1e-6?(P=1,T=0):(P/=S,T/=S),l+=P*w,x+=T*w}v&&p.push({...m,x:l,z:x})}const g=[];for(const m of i){let l=m;const x=a+Gh(l.r);let M=!1;for(let v=0;v<Ms;v++){const D=h(l.idx,l.side,l.lateral),C=vs(n,D.x,D.z,c);if(C>=x){M=!0;break}l={...l,lateral:l.lateral+(x-C)+.5}}M&&g.push(l)}const _=[];for(const m of r){let l=m;const x=o+kh(l.w);let M=!1;for(let v=0;v<Ms;v++){const D=h(l.idx,l.side,l.lateral),C=vs(n,D.x,D.z,c);if(C>=x){M=!0;break}l={...l,lateral:l.lateral+(x-C)+.5}}M&&_.push(l)}return{walls:{near:f,far:d},mesas:p,arches:g,scrub:_}}function Tv(n,t,e){if(n.cum.length<2)return{walls:0,farWalls:0,mesas:0,arches:0,scrub:0};const i=$h(n,Wh(n.cum,t,e),Xh(n,e.halfW),qh(n.cum,e),Yh(n.cum,e),e.halfW);return{walls:i.walls.near.length+i.walls.far.length,farWalls:i.walls.far.length,mesas:i.mesas.length,arches:i.arches.length,scrub:i.scrub.length}}const Ol=new WeakMap;function Na(n,t){const e=n.getAttribute("position");for(let i=0;i<e.count;i++){const r=.5+Math.abs(e.getY(i));e.setX(i,e.getX(i)+(Dt(t+i*3+1)-.5)*.24*r),e.setZ(i,e.getZ(i)+(Dt(t+i*3+2)-.5)*.24*r),e.setY(i,e.getY(i)+(Dt(t+i*3+3)-.5)*.1)}e.needsUpdate=!0,n.computeVertexNormals()}function Fa(n,t,e){const i=t.getAttribute("position"),r=new Float32Array(i.count*3);t.computeBoundingBox();const s=t.boundingBox,a=s?s.min.y:0,o=s&&s.max.y-s.min.y>1e-6?s.max.y-s.min.y:1;for(let c=0;c<i.count;c++){const h=Math.min(.999,Math.max(0,(i.getY(c)-a)/o)),u=Sv(Math.floor(h*e)/(e-1));r[c*3]=u[0],r[c*3+1]=u[1],r[c*3+2]=u[2]}t.setAttribute("color",new n.BufferAttribute(r,3))}function Av(n){let t=Ol.get(n);if(!t){const e=new n.CylinderGeometry(.58,1,1,5,2);e.translate(0,.5,0),Na(e,211),Fa(n,e,4);const i=new n.CylinderGeometry(.7,1,1,7,1);i.translate(0,.5,0),Na(i,412),Fa(n,i,4);const r=new n.CylinderGeometry(.72,1,1,8,3);r.translate(0,.5,0),Na(r,977),Fa(n,r,4);const s=new n.TorusGeometry(1,.28,6,12),a=new n.ConeGeometry(.9,1,6);a.translate(0,.5,0),t={wallGeo:e,farGeo:i,mesaGeo:r,archGeo:s,scrubGeo:a,wallMat:new n.MeshLambertMaterial({vertexColors:!0,flatShading:xs}),farMat:new n.MeshLambertMaterial({vertexColors:!0,flatShading:xs}),mesaMat:new n.MeshLambertMaterial({vertexColors:!0,flatShading:xs}),archMat:new n.MeshLambertMaterial({color:12876357,flatShading:xs}),scrubMat:new n.MeshLambertMaterial({color:16777215})},Ol.set(n,t)}return t}function bv(n,t,e,i={}){const r=vv(i),s=e.events??[],a=Tv(e,s,r),o=Av(n),c=new n.Group;c.name="canyon-environment",t.add(c);const h=new n.Matrix4,u=new n.Quaternion,f=new n.Euler,d=new n.Vector3,p=new n.Vector3,g=new n.Color,_=new n.Color(Mv),m=L=>Math.atan2(e.tangents[L].x,e.tangents[L].z),l=[];let x=null,M=null,v=0,D=0,C=0;const w=(L,U,R)=>{const N=e.points[U.idx],q=e.normals[U.idx];f.set(0,m(U.idx)+U.yaw,0),u.setFromEuler(f),d.set(N.x+q.x*U.side*U.lateral,N.y-10,N.z+q.z*U.side*U.lateral),p.set(U.w,U.h,U.segLen*.4),h.compose(d,u,p),L.setMatrixAt(R,h);const X=.85+Dt(U.tint*7+1)*.3;L.setColorAt(R,g.setRGB(X,X*.98,X*.95))},P=$h(e,Wh(e.cum,s,r),Xh(e,r.halfW),qh(e.cum,r),Yh(e.cum,r),r.halfW),T=P.walls;if(T.near.length>0){const L=new n.InstancedMesh(o.wallGeo,o.wallMat,T.near.length);for(let U=0;U<T.near.length;U++)w(L,T.near[U],U);L.instanceMatrix.needsUpdate=!0,L.instanceColor&&(L.instanceColor.needsUpdate=!0),c.add(L),l.push(L)}if(v=T.far.length,T.far.length>0){x=new n.InstancedMesh(o.farGeo,o.farMat,T.far.length);for(let L=0;L<T.far.length;L++)w(x,T.far[L],L);x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),c.add(x),l.push(x)}const S=P.mesas;if(S.length>0){const L=new n.InstancedMesh(o.mesaGeo,o.mesaMat,S.length);for(let U=0;U<S.length;U++){const R=S[U];if(f.set(0,Dt(R.tint*11+2)*Math.PI,0),u.setFromEuler(f),d.set(R.x,R.y,R.z),p.set(R.w,R.h,Pr(R.tint,R.w)),h.compose(d,u,p),L.setMatrixAt(U,h),yv(R.tint))g.setRGB(Ua[0],Ua[1],Ua[2]);else{const N=.85+Dt(R.tint*17+6)*.3;g.setRGB(N,N*.98,N*.95)}R.haze>0&&g.lerp(_,R.haze),L.setColorAt(U,g)}L.instanceMatrix.needsUpdate=!0,L.instanceColor&&(L.instanceColor.needsUpdate=!0),c.add(L),l.push(L)}const b=P.arches;if(b.length>0){const L=new n.InstancedMesh(o.archGeo,o.archMat,b.length);for(let U=0;U<b.length;U++){const R=b[U],N=e.points[R.idx],q=e.normals[R.idx];f.set(0,m(R.idx),0),u.setFromEuler(f),d.set(N.x+q.x*R.side*R.lateral,N.y+R.r*.9,N.z+q.z*R.side*R.lateral),p.set(R.r,R.r*1.2,R.r),h.compose(d,u,p),L.setMatrixAt(U,h)}L.instanceMatrix.needsUpdate=!0,c.add(L),l.push(L)}const z=P.scrub;if(D=z.length,C=Math.floor(z.length/2),z.length>0){M=new n.InstancedMesh(o.scrubGeo,o.scrubMat,z.length);for(let L=0;L<z.length;L++){const U=z[L],R=e.points[U.idx],N=e.normals[U.idx];f.set(0,Dt(U.tint*19+8)*Math.PI*2,0),u.setFromEuler(f),d.set(R.x+N.x*U.side*U.lateral,R.y-.1,R.z+N.z*U.side*U.lateral),p.set(U.w,U.h,U.w),h.compose(d,u,p),M.setMatrixAt(L,h),M.setColorAt(L,g.setHSL(.13+Dt(U.tint*23+9)*.06,.3+Dt(U.tint*29+3)*.2,.24+Dt(U.tint*31+7)*.1))}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M)}return{counts:a,setQuality(L){x&&(x.count=L?0:v),M&&(M.count=L?C:D)},update(L){},dispose(){for(const L of l)c.remove(L),L.dispose();t.remove(c)}}}function wv(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}const Zs=t_(location.search),Ke=Zs.day||wv(),Qn=Zs.timeMs;let Hs=null;try{const n=Ys(localStorage.getItem(`canyon-ghost-${Ke}`));n&&n.p.length>1&&(Hs=n)}catch{}let rn=null,fn=null,ir="";const Kh=document.getElementById("game"),zn=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;zn&&document.body.classList.add("touchmode");const rr=new x0({canvas:Kh,antialias:!zn,powerPreference:"high-performance"});rr.setPixelRatio(Math.min(devicePixelRatio||1,zn?1.5:2));rr.setSize(innerWidth,innerHeight);const ie=new v0;ie.background=new bt(16172169);ie.fog=new Go(15380867,120,700);{const n=new Nn({side:Ce,depthWrite:!1,fog:!1,uniforms:{top:{value:new bt(3042264)},mid:{value:new bt(10470382)},bot:{value:new bt(16172169)}},vertexShader:`
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
      }`}),t=new le(new Vo(1500,24,12),n);t.frustumCulled=!1,ie.add(t)}const ge=new nn(64,innerWidth/innerHeight,.1,2e3);ie.add(new E0(16769216,8010530,1));const jh=new b0(16767400,1.6);jh.position.set(-120,180,60);ie.add(jh);addEventListener("resize",()=>{ge.aspect=innerWidth/innerHeight,ge.updateProjectionMatrix(),rr.setSize(innerWidth,innerHeight)});const ye=Ks($s("canyon-"+Ke)),Oe=Qx(Ke);typeof console<"u"&&console.log("[canyon-debug] track",Ke,"attempt",Oe.attempt,"fallback",Oe.fallback,"len",Oe.stats.length.toFixed(0),"est",Oe.estTimeS.toFixed(1)+"s");const Zt=Oe.points.map(n=>new H(n.x,n.y,n.z)),li=Px,Gs=q0(Ke,Oe.checksum);{const n=Dh({shared:Zs.ghost,pb:Hs,expected:Gs});rn=n.rival,fn=rn?rn.ghost:null,ir=n.notice,ir&&typeof console<"u"&&console.log("[canyon-debug] rival",n.status,ir)}const _e=mx(Zt.map(n=>({x:n.x,y:n.y,z:n.z})),li),yn=_e.tx.map((n,t)=>new H(n,0,_e.tz[t])),fr=_e.nx.map((n,t)=>new H(n,0,_e.nz[t])),Fn=jx(Oe.points);_e.barrier=P0(Fn[Fn.length-1],Oe.stats.events,Oe.crestS);typeof console<"u"&&console.log("[canyon-debug] barriers",`spans=${_e.barrier.spans.length}`);const Dr=wx(Oe.stats.events).map(n=>Rx(Fn,n));let Ki=Dr.map(()=>null),Bl=0;{const n=Zt[Zt.length-1],t=(Zt[0].x+n.x)/2,e=(Zt[0].z+n.z)/2,i=new le(new Bn(2600,2600),new gn({color:13201215}));i.rotation.x=-Math.PI/2,i.position.set(t,-2.5,e),ie.add(i);const r=new le(new oi(760,820,24,28),new gn({color:11096108}));r.position.set(t,-14,e),ie.add(r)}function jo(n,t,e){const i=Zt.length,r=new Float32Array(i*2*3),s=new Float32Array(i*2*3),a=[],o=new bt;for(let h=0;h<i;h++){for(let u=0;u<2;u++){const f=u===0?1:-1,d=Zt[h].clone().addScaledVector(fr[h],f*n);r.set([d.x,Zt[h].y+t,d.z],(h*2+u)*3),o.copy(e(h,f)),s.set([o.r,o.g,o.b],(h*2+u)*3)}if(h<i-1){const u=h*2,f=h*2+1,d=(h+1)*2,p=(h+1)*2+1;a.push(u,f,d,f,p,d)}}const c=new ze;return c.setAttribute("position",new Pe(r,3)),c.setAttribute("color",new Pe(s,3)),c.setIndex(a),c.computeVertexNormals(),new le(c,new gn({vertexColors:!0,side:dn}))}const Rv=new bt(4012608),Cv=new bt(4538954);ie.add(jo(li,.15,n=>Math.floor(Fn[n]/40)%2?Rv:Cv));ie.add(jo(li+4,.05,()=>new bt(13208916)));const Lv=new bt(15258536),Pv=new bt(14170666),Dv=new bt(15920610);ie.add(jo(li+1.1,.12,(n,t)=>{const i=Math.floor(Fn[n]/14)%2?Pv:Dv;return _e.barrier&&!Xo(_e.barrier,Fn[n],t>=0?1:-1)?i.clone().lerp(Lv,.6):i}));{const n=new Bn(.35,3);n.rotateX(-Math.PI/2);const t=new qe({color:16117725}),e=Zx(Fn,16).filter(c=>c>=6&&c<Zt.length-6),i=new Hr(n,t,e.length),r=new $t,s=new On,a=new Be,o=new H(1,1,1);e.forEach((c,h)=>{a.set(0,Math.atan2(yn[c].x,yn[c].z),0),s.setFromEuler(a),r.compose(new H(Zt[c].x,Zt[c].y+.19,Zt[c].z),s,o),i.setMatrixAt(h,r)}),i.instanceMatrix.needsUpdate=!0,ie.add(i)}const Zh=new Bn(2,1.15);Zh.rotateX(-Math.PI/2);const Iv=new qe({color:15920610}),Uv=new qe({color:1315860});function Nv(n){const t=Math.atan2(yn[n].x,yn[n].z);for(let e=0;e<2;e++)for(let i=0;i<8;i++){const r=new le(Zh,(e+i)%2?Uv:Iv),s=(i-3.5)*2,a=(e-.5)*1.15;r.position.set(Zt[n].x+fr[n].x*s+yn[n].x*a,Zt[n].y+.21,Zt[n].z+fr[n].z*s+yn[n].z*a),r.rotation.y=t,ie.add(r)}}const Jh={BoxGeometry:ne,PlaneGeometry:Bn,MeshLambertMaterial:gn,MeshBasicMaterial:qe,InstancedMesh:Hr,Group:Zn,Matrix4:$t,Quaternion:On,Euler:Be,Vector3:H,Color:bt,DoubleSide:dn},ti=fv(Jh,ie,{points:Zt,tangents:yn,normals:fr,cum:Fn,events:Oe.stats.events,crestS:Oe.crestS},{mobile:zn,halfW:li,barriers:_e.barrier});ti.setQuality(zn);const Fv={...Jh,CylinderGeometry:oi,ConeGeometry:ko,TorusGeometry:Wo,BufferAttribute:Pe},Ov=bv(Fv,ie,{points:Zt,tangents:yn,normals:fr,cum:Fn,events:Oe.stats.events,crestS:Oe.crestS},{mobile:zn,halfW:li});Ov.setQuality(zn);typeof console<"u"&&console.log("[canyon-debug] visuals",`guards=${ti.counts.guardrails} chevrons=${ti.counts.chevrons} ticks=${ti.counts.ticks} dust=${ti.counts.dust}`);{const n=new qs(1,10);n.rotateX(-Math.PI/2);const t=new gn({color:16777215}),e=70,i=new Hr(n,t,e),r=new $t,s=new bt;let a=0,o=0;for(;a<e&&o++<2e3;){const c=(ye()-.5)*1100,h=(ye()-.5)*1100;let u=1e9;for(let d=0;d<Zt.length;d+=12){const p=Zt[d].x-c,g=Zt[d].z-h,_=p*p+g*g;_<u&&(u=_)}if(u<1600)continue;const f=6+ye()*22;r.makeScale(f,1,f*(.6+ye()*.6)),r.setPosition(c,-2.35,h),i.setMatrixAt(a,r),i.setColorAt(a,s.setHSL(.03+ye()*.04,.5+ye()*.2,.22+ye()*.1)),a++}i.count=a,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),ie.add(i)}{const n=new oi(.35,.55,1,7);n.translate(0,.5,0);const t=new gn({color:16777215}),e=zn?70:120,i=new Hr(n,t,e),r=new $t,s=new On,a=new Be,o=new H,c=new H,h=new bt;let u=0,f=0;for(;u<e&&f++<6e3;){const d=(ye()-.5)*1e3,p=(ye()-.5)*1e3;let g=1e9;for(let m=0;m<Zt.length;m+=12){const l=Zt[m].x-d,x=Zt[m].z-p,M=l*l+x*x;M<g&&(g=M)}if(g<1600)continue;const _=3+ye()*4;a.set((ye()-.5)*.14,ye()*3,(ye()-.5)*.14),s.setFromEuler(a),o.set(d,-2.5,p),c.set(.8+ye()*.9,_,.8+ye()*.9),r.compose(o,s,c),i.setMatrixAt(u,r),i.setColorAt(u,h.setHSL(.29+ye()*.04,.4+ye()*.2,.26+ye()*.1)),u++}i.count=u,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),ie.add(i)}function Qh(n,t){const e=Zt[n],i=fr[n],r=Math.atan2(yn[n].x,yn[n].z),s=-Math.cos(r),a=Math.sin(r),o=new gn({color:2236962});for(const c of[1,-1]){const h=new le(new ne(1.4,9,1.4),o),u=e.clone().addScaledVector(i,c*(li+1.5));h.position.set(u.x,e.y+4.5,u.z),ie.add(h)}if(t)for(let c=0;c<10;c++){const h=new le(new ne(1.9,1.4,1.4),new qe({color:c%2?1118481:16777215})),u=(c-4.5)*1.9;h.position.set(e.x+s*u,e.y+9,e.z+a*u),h.rotation.y=r,ie.add(h)}else{const c=new le(new ne((li+1.5)*2,1.4,1.4),o);c.position.set(e.x,e.y+9,e.z),c.rotation.y=r,ie.add(c)}Nv(n)}Qh(0,!1);Qh(Zt.length-1,!0);function tu(n,t=!1){const e=new Zn,i=t?new qe({color:n,transparent:!0,opacity:.45}):new gn({color:n}),r=t?i:new gn({color:2302762}),s=t?i:new gn({color:10475775}),a=(d,p,g,_,m)=>{const l=new le(d,p);return l.position.set(g,_,m),e.add(l),l};if(a(new ne(2.3,.55,4.6),i,0,.8,0),a(new ne(2,.3,1),i,0,.55,2.5),a(new ne(2.34,.22,4),r,0,.42,0),a(new ne(.18,.3,1.4),i,-1.2,.95,.9),a(new ne(.18,.3,1.4),i,1.2,.95,.9),a(new ne(1.6,.55,1.9),s,0,1.3,-.2),a(new ne(1.7,.1,2),i,0,1.62,-.2),a(new ne(2.4,.12,.7),r,0,1.72,-2),a(new ne(.14,.5,.4),r,-.8,1.4,-2),a(new ne(.14,.5,.4),r,.8,1.4,-2),a(new ne(.3,.18,.5),i,-1.05,1.35,.6),a(new ne(.3,.18,.5),i,1.05,1.35,.6),a(new ne(.5,.28,.3),r,-.5,.6,-2.35),a(new ne(.5,.28,.3),r,.5,.6,-2.35),!t){const d=new qe({color:16774080}),p=new qe({color:16722474});a(new ne(.45,.18,.1),d,-.7,.82,2.32),a(new ne(.45,.18,.1),d,.7,.82,2.32),a(new ne(.45,.16,.1),p,-.7,.85,-2.32),a(new ne(.45,.16,.1),p,.7,.85,-2.32),e.userData.tail=p}const o=new oi(.45,.45,.4,12);o.rotateZ(Math.PI/2);const c=t?i:new gn({color:1315860}),h=t?i:new qe({color:14211294}),u=[],f=[];for(const[d,p,g]of[[-1.15,1.5,1],[1.15,1.5,1],[-1.15,-1.5,0],[1.15,-1.5,0]]){const _=new Zn;_.position.set(d,.45,p);const m=new Zn;m.add(new le(o,c));const l=new le(new oi(.2,.2,.44,8).rotateZ(Math.PI/2),h);m.add(l),_.add(m),e.add(_),f.push(m),g&&u.push(_)}return e.userData.wheels={steer:u,spin:f},e}const si=tu(16742938);si.rotation.order="YXZ";ie.add(si);const Ur=tu(3528447,!0);Ur.visible=!!fn;ie.add(Ur);const zl=si.userData.wheels,Nr=new le((()=>{const n=new qs(2.4,20);return n.rotateX(-Math.PI/2),n})(),new qe({color:0,transparent:!0,opacity:.32,depthWrite:!1}));ie.add(Nr);const Zo=500,Xe=new Hr((()=>{const n=new Bn(1,1);return n.rotateX(-Math.PI/2),n})(),new qe({transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Zo);Xe.frustumCulled=!1;Xe.renderOrder=1;ie.add(Xe);let Ss=0;const eu=new bt(4867920),Bv=new bt(920846),Hl=new bt;{const n=new $t().makeScale(0,0,0);for(let t=0;t<Zo;t++)Xe.setMatrixAt(t,n),Xe.setColorAt(t,eu);Xe.instanceMatrix.needsUpdate=!0,Xe.instanceColor&&(Xe.instanceColor.needsUpdate=!0)}const Gl=new $t,kl=new On,Vl=new Be,Wl=new H,Xl=new H;function zv(n,t,e,i,r,s,a){Vl.set(0,i,0),kl.setFromEuler(Vl),Wl.set(n,t,e),Xl.set(r,1,s),Gl.compose(Wl,kl,Xl),Xe.setMatrixAt(Ss,Gl),Hl.copy(eu).lerp(Bv,a),Xe.setColorAt(Ss,Hl),Ss=(Ss+1)%Zo,Xe.instanceMatrix.needsUpdate=!0,Xe.instanceColor&&(Xe.instanceColor.needsUpdate=!0)}let un=0,ks=0;const Jo=new ze;Jo.setAttribute("position",new Pe(ti.dust.positions,3));const nu=new y0(Jo,new Ah({color:15254682,size:1.1,transparent:!0,opacity:.45}));nu.frustumCulled=!1;ie.add(nu);const me={steer:0,drift:!1,left:!1,right:!1,keyDrift:!1},En=new gx;addEventListener("keydown",n=>{(n.key==="f"||n.key==="F")&&(Us=!Us,cu.classList.toggle("hidden",!Us)),!n.repeat&&((n.key==="ArrowLeft"||n.key==="a")&&(me.left=!0),(n.key==="ArrowRight"||n.key==="d")&&(me.right=!0),(n.key==="ArrowDown"||n.key===" ")&&(me.keyDrift=!0,n.preventDefault()),(n.key==="r"||n.key==="R")&&fu(),n.key==="Enter"&&Te==="menu"&&Or(!1),n.key==="Enter"&&Te==="finish"&&Or(!0))});addEventListener("keyup",n=>{(n.key==="ArrowLeft"||n.key==="a")&&(me.left=!1),(n.key==="ArrowRight"||n.key==="d")&&(me.right=!1),(n.key==="ArrowDown"||n.key===" ")&&(me.keyDrift=!1)});const Js=document.getElementById("stick"),iu=document.getElementById("knob"),sr=document.getElementById("driftbtn"),Hv=document.getElementById("resetbtn");Hv.addEventListener("pointerdown",n=>{n.preventDefault(),fu()});Js.addEventListener("pointerdown",n=>{En.stickDown(n.pointerId,n.clientX);try{n.target.setPointerCapture(n.pointerId)}catch{}});Js.addEventListener("pointermove",n=>{En.stickMove(n.pointerId,n.clientX),iu.style.transform=`translate(calc(-50% + ${En.joy*34}px), -50%)`});const ru=n=>{En.stickUp(n.pointerId),En.joyOn||(iu.style.transform="translate(-50%,-50%)")};Js.addEventListener("pointerup",ru);Js.addEventListener("pointercancel",ru);sr.addEventListener("pointerdown",n=>{En.driftDown(n.pointerId);try{sr.setPointerCapture(n.pointerId)}catch{}sr.classList.add("on"),n.preventDefault()});const su=n=>{En.driftUp(n.pointerId),En.drift||sr.classList.remove("on")};sr.addEventListener("pointerup",su);sr.addEventListener("pointercancel",su);function Gv(){me.left&&!me.right?me.steer=-1:me.right&&!me.left?me.steer=1:me.steer=En.steer,me.drift=me.keyDrift||En.drift}let Te="menu",Lr=0,Co=0;const vt=_x();let Fr=!0;const de=dv(),ys={x:0,y:0,z:0};let Us=!1,Oa=60,$i=0,Es={spd:0,drifting:!1,sIdx:0,pitch:0,launched:!1,landed:!1,finished:!1,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:"road",landV:0,impact:0,scraping:!1,stuckMs:0,oobMs:0};const au=`canyon-best-${Ke}`;let en=Number(localStorage.getItem(au)||0);const kv=document.getElementById("time"),Vv=document.getElementById("best"),Qe=document.getElementById("msg"),Wv=document.getElementById("progfill"),xn=document.getElementById("delta"),ji=document.getElementById("split"),Qo=document.getElementById("panel"),tc=document.getElementById("presult"),ou=document.getElementById("ptitle"),cu=document.getElementById("debug");document.getElementById("day").textContent=`CANYON DAILY · ${Ke}`;function lu(){Vv.textContent=en>0?`BEST ${We(en)}`:Qn>0?`FRIEND ${We(Qn)}`:"BEST —"}lu();function hu(){si.position.set(vt.px,vt.py,vt.pz),si.rotation.set(vt.pitch,vt.heading,0);const n=_e.y[vt.lastIdx]+.2;Nr.position.set(vt.px,n+.06,vt.pz),Nr.scale.setScalar(1+ee(vt.py-n,0,12)*.04)}function uu(n){Sx(vt,_e,n),hu(),js(de,Gr,vt.px,vt.py,vt.pz,vt.heading),un=0,ks=0,Fr=!0}function fu(){if(Te==="finish"){Or(!0);return}Te==="run"&&(yx(vt),hu(),js(de,Gr,vt.px,vt.py,vt.pz,vt.heading),un=0,ks=0,Fr=!0,Qe.textContent="")}uu(0);ge.position.set(vt.px-10,vt.py+6,vt.pz-10);ge.lookAt(vt.px,vt.py+1,vt.pz);let ql=!1,Ns=3.1;function Or(n=!1){Qo.classList.add("hidden"),Te="countdown",Lr=0,Kn=0,Ns=n&&ql?.7:3.1,ql=!0,uu(0),xn.textContent="",xn.className="",ji.textContent="",Ki=Dr.map(()=>null),ge.position.set(de.px,de.py,de.pz),ge.lookAt(de.lx,de.ly,de.lz),ge.fov=de.fov,ge.updateProjectionMatrix(),Ur.visible=!!fn}document.getElementById("drivebtn").onclick=()=>Or(Te==="finish");Kh.addEventListener("pointerdown",()=>{Te==="menu"&&Or()});document.getElementById("sharebtn").onclick=async()=>{const n=Te==="finish",t=n?Co:en;let e="";if(n)e=Lh(vt.rec,Co,qo,Gs);else try{e=localStorage.getItem(`canyon-ghost-${Ke}`)||""}catch{e=""}const i=Q0(location.origin,location.pathname,{day:Ke,timeMs:t,ghost:e}),r=i.includes("&g="),s=J0(Ke,t,i),a=await n_({requestNativeShare:o=>navigator.share(o),copyText:o=>navigator.clipboard.writeText(o)},{title:"Canyon Daily",text:s,url:i,hasGhost:r,isFinish:n},e_(zn,typeof navigator.share=="function"));tc.textContent=a.message};const Xv=new H;function qv(n){Gv();const t=ee(me.steer,-1,1),e=Tx(vt,_e,{steer:t,drift:me.drift},n);e.finished&&Yv(),un=iv(un,nv(vt.driftAmt,Math.abs(e.slip),e.spd,vt.grounded,e.drifting),n),ks++;const i=cv(un);if(i>0){const s=lv(un);for(let a=0;a<i;a++)ti.dust.spawn(vt.px,vt.py,vt.pz,s)}const r=ov(un);if(r>0&&ks%r===0){const s=_e.y[vt.lastIdx]+.2,a=Math.sin(vt.heading),o=Math.cos(vt.heading),c=-o,h=a,u=rv(un),f=sv(un),d=av(un);for(const p of[1,-1])zv(vt.px-a*1.5+c*1*p,s+.22,vt.pz-o*1.5+h*1*p,vt.heading,u,f,d)}return Xv.set(vt.vx,0,vt.vz),e}function Yv(){if(Te!=="run")return;Te="finish",Kn=0,js(de,Gr,vt.px,vt.py,vt.pz,vt.heading),Fr=!0;const n=Math.round(vt.raceMs);Co=n;const t=en;if(!en||n<en){en=n;try{localStorage.setItem(au,String(en))}catch{}try{localStorage.setItem(`canyon-ghost-${Ke}`,Lh(vt.rec,n,qo,Gs))}catch{}try{const s=Ys(localStorage.getItem(`canyon-ghost-${Ke}`));Hs=s&&s.p.length>1?s:null;const a=Dh({shared:Zs.ghost,pb:Hs,expected:Gs});rn=a.rival,fn=rn?rn.ghost:null,ir=a.notice}catch{}}lu();const e=en===n;ou.textContent=e?"NEW BEST!":"FINISH!";const i=!t||e?t?`by ${We(t-n)}`:"first finished run!":`+${We(n-t)} vs best`;tc.textContent=`${We(n)} · ${i} · best ${We(en)}${Qn?` · friend ${We(Qn)}`:""}`,Qo.classList.remove("hidden");const r=document.getElementById("drivebtn");r.textContent="RETRY (Enter)",r.focus(),Qe.textContent=""}const $v=kv;let Yl=performance.now(),Kn=0;const Ts=1/60;function du(n){requestAnimationFrame(du);let t=Math.min((n-Yl)/1e3,.1);if(Yl=n,t>0&&(Oa=sn(Oa,1/t,.05)),Te==="menu"){const e=n/1e3;ge.position.set(Zt[0].x+Math.cos(e*.15)*58,Zt[0].y+24,Zt[0].z+Math.sin(e*.15)*58),ge.lookAt(Zt[0].x,Zt[0].y+1,Zt[0].z),ou.textContent=`CANYON DAILY · ${Ke}`,tc.textContent=`${en?`Your best ${We(en)} · `:""}${Qn?`Friend ${We(Qn)} · `:""}${ir?ir+" ":""}${rn||Qn?$0(rn,Qn):"Point-to-point sprint · flat out, drift the hairpins"}`,Qo.classList.remove("hidden"),document.getElementById("drivebtn").textContent="DRIVE",xn.textContent="",xn.className="",ji.textContent="",rr.render(ie,ge);return}if(Te==="countdown"){if(Lr+=t,Ns>1){const e=3-Math.floor(Lr);Qe.textContent=e>0?String(e):"GO!"}else Qe.textContent=Lr>Ns-.25?"GO!":"READY";Lr>Ns&&(Te="run",Qe.textContent=""),rr.render(ie,ge);return}if(Te==="run"||Te==="finish"){if(Te==="run"){Kn+=t;let e=0,i=null;for(;Kn>=Ts&&e<4&&Te==="run";)i=qv(Ts),Kn-=Ts,e++;Kn=Lx(Kn),Es=bx(Es,e,i??Es);const r=Es;i&&i.wallHit===!0&&($i=Math.min(1,(i.wallSev??0)+.25));const s=Fr?1:ee(Kn/Ts,0,1);Fr=!1;const a=Ax(vt,s),o=sn(vt.prevRaceMs,vt.raceMs,s);if($v.textContent=We(vt.raceMs),Wv.style.width=`${r.sIdx/(_e.n-1)*100}%`,fn&&rn){const f=wl(fn,vt.px,vt.pz);if(f>=0){const d=vt.raceMs-f,p=rn.kind==="friend"?"FRIEND":"PB";xn.textContent=Rl(d,r.spd,p),xn.className=d<0?"ahead":"behind"}else xn.textContent="",xn.className=""}else xn.textContent="",xn.className="";for(let f=0;f<Dr.length;f++)if(Ki[f]===null&&r.sIdx>=Dr[f]){if(Ki[f]=Math.round(vt.raceMs),fn){const d=Dr[f],p=wl(fn,_e.x[d],_e.z[d]);ji.textContent=p>=0?`S${f+1} ${Rl(Ki[f]-p,r.spd,rn&&rn.kind==="friend"?"FRIEND":"PB")}`:`S${f+1} ${We(Ki[f])}`}else ji.textContent=`S${f+1} ${We(Ki[f])}`;Bl=n+1500}if(ji.textContent!==""&&n>Bl&&(ji.textContent=""),r.stuckMs>1500?Qe.textContent="STUCK — R RESET":r.oobMs>900?Qe.textContent="OFF COURSE — R RESET":r.drifting?Qe.textContent="DRIFT":(Qe.textContent==="DRIFT"||Qe.textContent.startsWith("STUCK")||Qe.textContent.startsWith("OFF COURSE"))&&(Qe.textContent=""),fn&&fn.p.length>1){const f=Y0(fn,o);Ur.position.set(f.x,f.y,f.z),Ur.rotation.set(0,f.h,0)}si.position.set(a.x,a.y,a.z),$i*=Math.exp(-5*t),$i<.001&&($i=0);const c=$i>0?Math.sin(n*.09)*.18*$i:0;si.rotation.set(a.pitch,a.h,-me.steer*(.05+de.driftMix*.09)+c);const h=si.userData.tail;h&&h.color.setHex(de.driftMix>.4||me.drift?16734762:16722474);const u=_e.y[r.sIdx]+.2;Nr.position.set(a.x,u+.06,a.z),Nr.scale.setScalar(1+ee(a.y-u,0,12)*.04),gv(de,Gr,{dt:t,px:a.x,py:a.y,pz:a.z,heading:a.h,vx:vt.vx,vz:vt.vz,speed:r.spd,drifting:r.drifting,tangentX:_e.tx[r.sIdx],tangentZ:_e.tz[r.sIdx],hasTangent:!0,landed:i?i.landed:!1,landV:i?i.landV:0,wallHit:i?i.wallHit===!0:!1,wallVn:i?(i.wallSev??0)*25:0}),_v(de,ys),ge.position.set(ys.x,ys.y,ys.z),ge.lookAt(de.lx,de.ly,de.lz),Math.abs(ge.fov-de.fov)>.001&&(ge.fov=de.fov,ge.updateProjectionMatrix());for(const f of zl.steer)f.rotation.y=me.steer*.42;for(const f of zl.spin)f.rotation.x+=r.spd/.45*t;if(Us){const f=(r.slip*180/Math.PI).toFixed(1),d=(r.yawRate*180/Math.PI).toFixed(0);cu.textContent=`FPS ${Oa.toFixed(0)} dt ${(t*1e3).toFixed(2)}ms steps ${e} a ${s.toFixed(2)} | spd ${r.spd.toFixed(1)} f ${r.fSpeed.toFixed(1)} l ${r.lSpeed.toFixed(1)} slip ${f} yaw ${d}/s ${r.surface}${r.drifting?" DRIFT":""} fov ${ge.fov.toFixed(1)} hold ${vt.driftHold.toFixed(2)} exit ${vt.exitT.toFixed(2)} ${r.driftPhase??"idle"} q ${(r.exitQuality??0).toFixed(2)} rb ${(r.rhythmBoost??0).toFixed(1)} trl ${un.toFixed(2)} ch ${de.camH.toFixed(2)} imp ${xv(de).toFixed(2)} oob ${(r.oobMs/1e3).toFixed(1)}s`}}ti.update(t),Jo.attributes.position.needsUpdate=!0,rr.render(ie,ge)}}requestAnimationFrame(du);

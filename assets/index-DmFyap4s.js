(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="170",_u=0,ac=1,xu=2,$l=1,vu=2,Pn=3,oi=0,Le=1,fn=2,ni=0,Qi=1,oc=2,cc=3,lc=4,Mu=5,Ei=100,Su=101,yu=102,Eu=103,Tu=104,Au=200,bu=201,wu=202,Ru=203,Ha=204,Ga=205,Cu=206,Lu=207,Pu=208,Du=209,Iu=210,Uu=211,Nu=212,Fu=213,Ou=214,ka=0,Va=1,Wa=2,or=3,Xa=4,qa=5,Ya=6,$a=7,Io=0,zu=1,Bu=2,ii=0,Hu=1,Gu=2,ku=3,Vu=4,Wu=5,Xu=6,qu=7,Kl=300,cr=301,lr=302,Ka=303,ja=304,Xs=306,Za=1e3,bi=1001,Ja=1002,Ke=1003,Yu=1004,qr=1005,vn=1006,ea=1007,wi=1008,Un=1009,jl=1010,Zl=1011,Ur=1012,Uo=1013,Ci=1014,Mn=1015,Br=1016,No=1017,Fo=1018,hr=1020,Jl=35902,Ql=1021,th=1022,pn=1023,eh=1024,nh=1025,tr=1026,ur=1027,Oo=1028,zo=1029,ih=1030,Bo=1031,Ho=1033,ws=33776,Rs=33777,Cs=33778,Ls=33779,Qa=35840,to=35841,eo=35842,no=35843,io=36196,ro=37492,so=37496,ao=37808,oo=37809,co=37810,lo=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,vo=37820,Mo=37821,Ps=36492,So=36494,yo=36495,rh=36283,Eo=36284,To=36285,Ao=36286,$u=3200,Ku=3201,sh=0,ju=1,Zn="",tn="srgb",pr="srgb-linear",qs="linear",ne="srgb",Ui=7680,hc=519,Zu=512,Ju=513,Qu=514,ah=515,tf=516,ef=517,nf=518,rf=519,uc=35044,fc="300 es",Dn=2e3,zs=2001;class mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,bo=180/Math.PI;function Hr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Oe(n,t,e){return Math.max(t,Math.min(e,n))}function sf(n,t){return(n%t+t)%t}function ia(n,t,e){return(1-e)*n+e*t}function Sr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,r,s,a,o,c,h){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,h)}set(t,e,i,r,s,a,o,c,h){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],l=r[6],x=r[1],M=r[4],v=r[7],D=r[2],C=r[5],w=r[8];return s[0]=a*_+o*x+c*D,s[3]=a*m+o*M+c*C,s[6]=a*l+o*v+c*w,s[1]=h*_+u*x+f*D,s[4]=h*m+u*M+f*C,s[7]=h*l+u*v+f*w,s[2]=d*_+p*x+g*D,s[5]=d*m+p*M+g*C,s[8]=d*l+p*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-i*s*u+i*o*c+r*s*h-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],f=u*a-o*h,d=o*c-u*s,p=h*s-a*c,g=e*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*h-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=d*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(i*c-h*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),h=Math.sin(s);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-r*h,r*c,-r*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Ot;function oh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function af(){const n=Bs("canvas");return n.style.display="block",n}const dc={};function Cr(n){n in dc||(dc[n]=!0,console.warn(n))}function of(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function cf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(n.r=In(n.r),n.g=In(n.g),n.b=In(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(n.r=er(n.r),n.g=er(n.g),n.b=er(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Zn?qs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const pc=[.64,.33,.3,.6,.15,.06],mc=[.2126,.7152,.0722],gc=[.3127,.329],_c=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[pr]:{primaries:pc,whitePoint:gc,transfer:qs,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:mc,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:pc,whitePoint:gc,transfer:ne,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:mc,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});let Ni;class hf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=Bs("canvas")),Ni.width=t.width,Ni.height=t.height;const i=Ni.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=In(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(In(e[i]/255)*255):e[i]=In(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uf=0;class ch{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sa(r[a].image)):s.push(sa(r[a]))}else s=sa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;class Pe extends mr{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,i=bi,r=bi,s=vn,a=wi,o=pn,c=Un,h=Pe.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Hr(),this.name="",this.source=new ch(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Za:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Za:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Kl;Pe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,h=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],l=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+l-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,v=(p+1)/2,D=(l+1)/2,C=(u+d)/4,w=(f+_)/4,P=(g+m)/4;return M>v&&M>D?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=w/i):v>D?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=P/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=P/s),this.set(i,r,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((h+p+l-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends mr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ch(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends df{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lh extends Pe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends Pe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],h=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==d||h!==p||u!==g){let m=1-o;const l=c*d+h*p+u*g+f*_,x=l>=0?1:-1,M=1-l*l;if(M>Number.EPSILON){const D=Math.sqrt(M),C=Math.atan2(D,l*x);m=Math.sin(m*C)/D,o=Math.sin(o*C)/D}const v=o*x;if(c=c*m+d*v,h=h*m+p*v,u=u*m+g*v,f=f*m+_*v,m===1-o){const D=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=D,h*=D,u*=D,f*=D}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],h=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*f+c*p-h*d,t[e+1]=c*g+u*d+h*f-o*p,t[e+2]=h*g+u*p+o*d-c*f,t[e+3]=u*g-o*f-c*d-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+h*p*g,this._y=h*p*f-d*u*g,this._z=h*u*g+d*p*f,this._w=h*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+h*p*g,this._y=h*p*f-d*u*g,this._z=h*u*g-d*p*f,this._w=h*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-h*p*g,this._y=h*p*f+d*u*g,this._z=h*u*g+d*p*f,this._w=h*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-h*p*g,this._y=h*p*f+d*u*g,this._z=h*u*g-d*p*f,this._w=h*u*f+d*p*g;break;case"YZX":this._x=d*u*f+h*p*g,this._y=h*p*f+d*u*g,this._z=h*u*g-d*p*f,this._w=h*u*f-d*p*g;break;case"XZY":this._x=d*u*f-h*p*g,this._y=h*p*f-d*u*g,this._z=h*u*g+d*p*f,this._w=h*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-h)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+h)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-h)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+h)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=i*u+a*o+r*h-s*c,this._y=r*u+a*c+s*o-i*h,this._z=s*u+a*h+i*c-r*o,this._w=a*u-i*o-r*c-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),f=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*h+a*f-o*u,this.y=i+c*u+o*h-s*f,this.z=r+c*f+s*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new H,vc=new On;class Di{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),$r.subVectors(this.max,yr),Fi.subVectors(t.a,yr),Oi.subVectors(t.b,yr),zi.subVectors(t.c,yr),Wn.subVectors(Oi,Fi),Xn.subVectors(zi,Oi),di.subVectors(Fi,zi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-di.z,di.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,di.z,0,-di.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-di.y,di.x,0];return!oa(e,Fi,Oi,zi,$r)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,Fi,Oi,zi,$r))?!1:(Kr.crossVectors(Wn,Xn),e=[Kr.x,Kr.y,Kr.z],oa(e,Fi,Oi,zi,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new H,new H,new H,new H,new H,new H,new H,new H],on=new H,Yr=new Di,Fi=new H,Oi=new H,zi=new H,Wn=new H,Xn=new H,di=new H,yr=new H,$r=new H,Kr=new H,pi=new H;function oa(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){pi.fromArray(n,s);const o=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),c=t.dot(pi),h=e.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const mf=new Di,Er=new H,ca=new H;class gr{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):mf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(ca)),this.expandByPoint(Er.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new H,la=new H,jr=new H,qn=new H,ha=new H,Zr=new H,ua=new H;class hh{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){la.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(la);const s=t.distanceTo(e)*.5,a=-this.direction.dot(jr),o=qn.dot(this.direction),c=-qn.dot(jr),h=qn.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+h}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+h;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+h):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+h);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(la).addScaledVector(jr,d),p}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const i=bn.dot(this.direction),r=bn.dot(bn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,r=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,r=(t.min.x-d.x)*h),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,i,r,s){ha.subVectors(e,t),Zr.subVectors(i,t),ua.crossVectors(ha,Zr);let a=this.direction.dot(ua),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const c=o*this.direction.dot(Zr.crossVectors(qn,Zr));if(c<0)return null;const h=o*this.direction.dot(ha.cross(qn));if(h<0||c+h>a)return null;const u=-o*qn.dot(ua);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,i,r,s,a,o,c,h,u,f,d,p,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,h,u,f,d,p,g,_,m)}set(t,e,i,r,s,a,o,c,h,u,f,d,p,g,_,m){const l=this.elements;return l[0]=t,l[4]=e,l[8]=i,l[12]=r,l[1]=s,l[5]=a,l[9]=o,l[13]=c,l[2]=h,l[6]=u,l[10]=f,l[14]=d,l[3]=p,l[7]=g,l[11]=_,l[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Bi.setFromMatrixColumn(t,0).length(),s=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),h=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*f,g=o*u,_=o*f;e[0]=c*u,e[4]=-c*f,e[8]=h,e[1]=p+g*h,e[5]=d-_*h,e[9]=-o*c,e[2]=_-d*h,e[6]=g+p*h,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*f,g=h*u,_=h*f;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*h,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*f,g=h*u,_=h*f;e[0]=d-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*f,g=o*u,_=o*f;e[0]=c*u,e[4]=g*h-p,e[8]=d*h+_,e[1]=c*f,e[5]=_*h+d,e[9]=p*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*h,g=o*c,_=o*h;e[0]=c*u,e[4]=_-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=p*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=a*c,p=a*h,g=o*c,_=o*h;e[0]=c*u,e[4]=-f,e[8]=h*u,e[1]=d*f+_,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gf,t,_f)}lookAt(t,e,i){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Yn.crossVectors(i,Ve),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Yn.crossVectors(i,Ve)),Yn.normalize(),Jr.crossVectors(Ve,Yn),r[0]=Yn.x,r[4]=Jr.x,r[8]=Ve.x,r[1]=Yn.y,r[5]=Jr.y,r[9]=Ve.y,r[2]=Yn.z,r[6]=Jr.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],l=i[14],x=i[3],M=i[7],v=i[11],D=i[15],C=r[0],w=r[4],P=r[8],T=r[12],S=r[1],b=r[5],B=r[9],L=r[13],U=r[2],R=r[6],N=r[10],q=r[14],X=r[3],rt=r[7],lt=r[11],pt=r[15];return s[0]=a*C+o*S+c*U+h*X,s[4]=a*w+o*b+c*R+h*rt,s[8]=a*P+o*B+c*N+h*lt,s[12]=a*T+o*L+c*q+h*pt,s[1]=u*C+f*S+d*U+p*X,s[5]=u*w+f*b+d*R+p*rt,s[9]=u*P+f*B+d*N+p*lt,s[13]=u*T+f*L+d*q+p*pt,s[2]=g*C+_*S+m*U+l*X,s[6]=g*w+_*b+m*R+l*rt,s[10]=g*P+_*B+m*N+l*lt,s[14]=g*T+_*L+m*q+l*pt,s[3]=x*C+M*S+v*U+D*X,s[7]=x*w+M*b+v*R+D*rt,s[11]=x*P+M*B+v*N+D*lt,s[15]=x*T+M*L+v*q+D*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],l=t[15];return g*(+s*c*f-r*h*f-s*o*d+i*h*d+r*o*p-i*c*p)+_*(+e*c*p-e*h*d+s*a*d-r*a*p+r*h*u-s*c*u)+m*(+e*h*f-e*o*p-s*a*f+i*a*p+s*o*u-i*h*u)+l*(-r*o*u-e*c*f+e*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],l=t[15],x=f*m*h-_*d*h+_*c*p-o*m*p-f*c*l+o*d*l,M=g*d*h-u*m*h-g*c*p+a*m*p+u*c*l-a*d*l,v=u*_*h-g*f*h+g*o*p-a*_*p-u*o*l+a*f*l,D=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,C=e*x+i*M+r*v+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=x*w,t[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*l-i*d*l)*w,t[2]=(o*m*s-_*c*s+_*r*h-i*m*h-o*r*l+i*c*l)*w,t[3]=(f*c*s-o*d*s-f*r*h+i*d*h+o*r*p-i*c*p)*w,t[4]=M*w,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*l+e*d*l)*w,t[6]=(g*c*s-a*m*s-g*r*h+e*m*h+a*r*l-e*c*l)*w,t[7]=(a*d*s-u*c*s+u*r*h-e*d*h-a*r*p+e*c*p)*w,t[8]=v*w,t[9]=(g*f*s-u*_*s-g*i*p+e*_*p+u*i*l-e*f*l)*w,t[10]=(a*_*s-g*o*s+g*i*h-e*_*h-a*i*l+e*o*l)*w,t[11]=(u*o*s-a*f*s-u*i*h+e*f*h+a*i*p-e*o*p)*w,t[12]=D*w,t[13]=(u*_*r-g*f*r+g*i*d-e*_*d-u*i*m+e*f*m)*w,t[14]=(g*o*r-a*_*r-g*i*c+e*_*c+a*i*m-e*o*m)*w,t[15]=(a*f*r-u*o*r+u*i*c-e*f*c-a*i*d+e*o*d)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,h=s*a,u=s*o;return this.set(h*a+i,h*o-r*c,h*c+r*o,0,h*o+r*c,u*o+i,u*c-r*a,0,h*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,h=s+s,u=a+a,f=o+o,d=s*h,p=s*u,g=s*f,_=a*u,m=a*f,l=o*f,x=c*h,M=c*u,v=c*f,D=i.x,C=i.y,w=i.z;return r[0]=(1-(_+l))*D,r[1]=(p+v)*D,r[2]=(g-M)*D,r[3]=0,r[4]=(p-v)*C,r[5]=(1-(d+l))*C,r[6]=(m+x)*C,r[7]=0,r[8]=(g+M)*w,r[9]=(m-x)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const a=Bi.set(r[4],r[5],r[6]).length(),o=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const h=1/s,u=1/a,f=1/o;return cn.elements[0]*=h,cn.elements[1]*=h,cn.elements[2]*=h,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,e.setFromRotationMatrix(cn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Dn){const c=this.elements,h=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let p,g;if(o===Dn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===zs)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Dn){const c=this.elements,h=1/(e-t),u=1/(i-r),f=1/(a-s),d=(e+t)*h,p=(i+r)*u;let g,_;if(o===Dn)g=(a+s)*f,_=-2*f;else if(o===zs)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Bi=new H,cn=new $t,gf=new H(0,0,0),_f=new H(1,1,1),Yn=new H,Jr=new H,Ve=new H,Mc=new $t,Sc=new On;class Be{constructor(t=0,e=0,i=0,r=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],h=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xf=0;const yc=new H,Hi=new On,wn=new $t,Qr=new H,Tr=new H,vf=new H,Mf=new On,Ec=new H(1,0,0),Tc=new H(0,1,0),Ac=new H(0,0,1),bc={type:"added"},Sf={type:"removed"},Gi={type:"childadded",child:null},fa={type:"childremoved",child:null};class Ee extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new H,e=new Be,i=new On,r=new H(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ot}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Ec,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ec,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qr.copy(t):Qr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Tr,Qr,this.up):wn.lookAt(Qr,Tr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Hi.setFromRotationMatrix(wn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const f=c[h];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new H(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new H,Rn=new H,da=new H,Cn=new H,ki=new H,Vi=new H,wc=new H,pa=new H,ma=new H,ga=new H,_a=new he,xa=new he,va=new he;class dn{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ln.subVectors(r,e),Rn.subVectors(i,e),da.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(Rn),c=ln.dot(da),h=Rn.dot(Rn),u=Rn.dot(da),f=a*h-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(h*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return _a.setScalar(0),xa.setScalar(0),va.setScalar(0),_a.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,i),va.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(_a,s.x),a.addScaledVector(xa,s.y),a.addScaledVector(va,s.z),a}static isFrontFacing(t,e,i,r){return ln.subVectors(i,e),Rn.subVectors(t,e),ln.cross(Rn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),ln.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return dn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;ki.subVectors(r,i),Vi.subVectors(s,i),pa.subVectors(t,i);const c=ki.dot(pa),h=Vi.dot(pa);if(c<=0&&h<=0)return e.copy(i);ma.subVectors(t,r);const u=ki.dot(ma),f=Vi.dot(ma);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*h;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(ki,a);ga.subVectors(t,s);const p=ki.dot(ga),g=Vi.dot(ga);if(g>=0&&p<=g)return e.copy(s);const _=p*h-c*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(Vi,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return wc.subVectors(s,r),o=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(wc,o);const l=1/(m+_+d);return a=_*l,o=d*l,e.copy(i).addScaledVector(ki,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ts={h:0,s:0,l:0};function Ma(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class At{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Wt.workingColorSpace){if(t=sf(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ma(a,s,t+1/3),this.g=Ma(a,s,t),this.b=Ma(a,s,t-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(t,e=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const i=fh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Wt.fromWorkingColorSpace(be.copy(this),t),Math.round(Oe(be.r*255,0,255))*65536+Math.round(Oe(be.g*255,0,255))*256+Math.round(Oe(be.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(be.copy(this),e);const i=be.r,r=be.g,s=be.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=tn){Wt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,i=be.g,r=be.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(ts);const i=ia($n.h,ts.h,e),r=ia($n.s,ts.s,e),s=ia($n.l,ts.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new At;At.NAMES=fh;let yf=0;class _r extends mr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Hr(),this.name="",this.blending=Qi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Ga,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ha&&(i.blendSrc=this.blendSrc),this.blendDst!==Ga&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ye extends _r{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new H,es=new Yt;class De{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),r=Fe(r,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}}class dh extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ph extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _e extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ef=0;const Je=new $t,Sa=new Ee,Wi=new H,We=new Di,Ar=new Di,Se=new H;class He extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?ph:dh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];We.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(We.min,Ar.min),We.expandByPoint(Se),Se.addVectors(We.max,Ar.max),We.expandByPoint(Se)):(We.expandByPoint(Ar.min),We.expandByPoint(Ar.max))}We.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Se.fromBufferAttribute(o,h),c&&(Wi.fromBufferAttribute(t,h),Se.add(Wi)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new H,c[P]=new H;const h=new H,u=new H,f=new H,d=new Yt,p=new Yt,g=new Yt,_=new H,m=new H;function l(P,T,S){h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),u.sub(h),f.sub(h),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(b),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(b),o[P].add(_),o[T].add(_),o[S].add(_),c[P].add(m),c[T].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,T=x.length;P<T;++P){const S=x[P],b=S.start,B=S.count;for(let L=b,U=b+B;L<U;L+=3)l(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const M=new H,v=new H,D=new H,C=new H;function w(P){D.fromBufferAttribute(r,P),C.copy(D);const T=o[P];M.copy(T),M.sub(D.multiplyScalar(D.dot(T))).normalize(),v.crossVectors(C,T);const b=v.dot(c[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,b)}for(let P=0,T=x.length;P<T;++P){const S=x[P],b=S.start,B=S.count;for(let L=b,U=b+B;L<U;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,h=new H,u=new H,f=new H;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,m),o.add(u),c.add(u),h.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const h=o.array,u=o.itemSize,f=o.normalized,d=new h.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let l=0;l<u;l++)d[g++]=h[p++]}return new De(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],h=t(c,i);e.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const c=[],h=s[o];for(let u=0,f=h.length;u<f;u++){const d=h[u],p=t(d,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let f=0,d=h.length;f<d;f++){const p=h[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(e))}const s=t.morphAttributes;for(const h in s){const u=[],f=s[h];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new $t,mi=new hh,ns=new gr,Cc=new H,is=new H,rs=new H,ss=new H,ya=new H,as=new H,Lc=new H,os=new H;class le extends Ee{constructor(t=new He,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){as.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const u=o[c],f=s[c];u!==0&&(ya.fromBufferAttribute(f,t),a?as.addScaledVector(ya,u):as.addScaledVector(ya.sub(e),u))}e.add(as)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),mi.copy(t.ray).recast(t.near),!(ns.containsPoint(mi.origin)===!1&&(mi.intersectSphere(ns,Cc)===null||mi.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Rc.copy(s).invert(),mi.copy(t.ray).applyMatrix4(Rc),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],l=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,D=M;v<D;v+=3){const C=o.getX(v),w=o.getX(v+1),P=o.getX(v+2);r=cs(this,l,t,i,h,u,f,C,w,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,l=_;m<l;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);r=cs(this,a,t,i,h,u,f,x,M,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],l=a[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,D=M;v<D;v+=3){const C=v,w=v+1,P=v+2;r=cs(this,l,t,i,h,u,f,C,w,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,l=_;m<l;m+=3){const x=m,M=m+1,v=m+2;r=cs(this,a,t,i,h,u,f,x,M,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Tf(n,t,e,i,r,s,a,o){let c;if(t.side===Le?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===oi,o),c===null)return null;os.copy(o),os.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(os);return h<e.near||h>e.far?null:{distance:h,point:os.clone(),object:n}}function cs(n,t,e,i,r,s,a,o,c,h){n.getVertexPosition(o,is),n.getVertexPosition(c,rs),n.getVertexPosition(h,ss);const u=Tf(n,t,e,i,is,rs,ss,Lc);if(u){const f=new H;dn.getBarycoord(Lc,is,rs,ss,f),r&&(u.uv=dn.getInterpolatedAttribute(r,o,c,h,f,new Yt)),s&&(u.uv1=dn.getInterpolatedAttribute(s,o,c,h,f,new Yt)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,c,h,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new H,materialIndex:0};dn.getNormal(is,rs,ss,d.normal),u.face=d,u.barycoord=f}return u}class ie extends He{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],h=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(f,2));function g(_,m,l,x,M,v,D,C,w,P,T){const S=v/w,b=D/P,B=v/2,L=D/2,U=C/2,R=w+1,N=P+1;let q=0,X=0;const rt=new H;for(let lt=0;lt<N;lt++){const pt=lt*b-L;for(let wt=0;wt<R;wt++){const Kt=wt*S-B;rt[_]=Kt*x,rt[m]=pt*M,rt[l]=U,h.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[l]=C>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(wt/w),f.push(1-lt/P),q+=1}}for(let lt=0;lt<P;lt++)for(let pt=0;pt<w;pt++){const wt=d+pt+R*lt,Kt=d+pt+R*(lt+1),Y=d+(pt+1)+R*(lt+1),et=d+(pt+1)+R*lt;c.push(wt,Kt,et),c.push(Kt,Y,et),X+=6}o.addGroup(p,X,T),p+=X,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Re(n){const t={};for(let e=0;e<n.length;e++){const i=fr(n[e]);for(const r in i)t[r]=i[r]}return t}function Af(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const bf={clone:fr,merge:Re};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends _r{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=Af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class gh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new H,Pc=new Yt,Dc=new Yt;class nn extends gh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Pc,Dc),e.subVectors(Dc,Pc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(na*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/h,r*=a.width/c,i*=a.height/h}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class Cf extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Xi,qi,t,e);r.layers=this.layers,this.add(r);const s=new nn(Xi,qi,t,e);s.layers=this.layers,this.add(s);const a=new nn(Xi,qi,t,e);a.layers=this.layers,this.add(a);const o=new nn(Xi,qi,t,e);o.layers=this.layers,this.add(o);const c=new nn(Xi,qi,t,e);c.layers=this.layers,this.add(c);const h=new nn(Xi,qi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const h of e)this.remove(h);if(t===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,h,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _h extends Pe{constructor(t,e,i,r,s,a,o,c,h,u){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,i,r,s,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lf extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new _h(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ie(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:ni});s.uniforms.tEquirect.value=e;const a=new le(r,s),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=vn),new Cf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Ea=new H,Pf=new H,Df=new Ot;class Mi{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ea.subVectors(i,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ea),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Df.getNormalMatrix(t),r=this.coplanarPoint(Ea).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new gr,ls=new H;class Go{constructor(t=new Mi,e=new Mi,i=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Dn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],l=r[12],x=r[13],M=r[14],v=r[15];if(i[0].setComponents(c-s,d-h,m-p,v-l).normalize(),i[1].setComponents(c+s,d+h,m+p,v+l).normalize(),i[2].setComponents(c+a,d+u,m+g,v+x).normalize(),i[3].setComponents(c-a,d-u,m-g,v-x).normalize(),i[4].setComponents(c-o,d-f,m-_,v-M).normalize(),e===Dn)i[5].setComponents(c+o,d+f,m+_,v+M).normalize();else if(e===zs)i[5].setComponents(o,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ls.x=r.normal.x>0?t.max.x:t.min.x,ls.y=r.normal.y>0?t.max.y:t.min.y,ls.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function If(n){const t=new WeakMap;function e(o,c){const h=o.array,u=o.usage,f=h.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,h,u),o.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,h){const u=c.array,f=c.updateRanges;if(n.bindBuffer(h,o),f.length===0)n.bufferSubData(h,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,c),h.version=o.version}}return{get:r,remove:s,update:a}}class zn extends He{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),h=o+1,u=c+1,f=t/o,d=e/c,p=[],g=[],_=[],m=[];for(let l=0;l<u;l++){const x=l*d-a;for(let M=0;M<h;M++){const v=M*f-s;g.push(v,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-l/c)}}for(let l=0;l<c;l++)for(let x=0;x<o;x++){const M=x+h*l,v=x+h*(l+1),D=x+1+h*(l+1),C=x+1+h*l;p.push(M,v,C),p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bf=`#ifdef USE_ALPHATEST
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
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
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
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
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
}`,zt={alphahash_fragment:Uf,alphahash_pars_fragment:Nf,alphamap_fragment:Ff,alphamap_pars_fragment:Of,alphatest_fragment:zf,alphatest_pars_fragment:Bf,aomap_fragment:Hf,aomap_pars_fragment:Gf,batching_pars_vertex:kf,batching_vertex:Vf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:Yf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Jf,color_fragment:Qf,color_pars_fragment:td,color_pars_vertex:ed,color_vertex:nd,common:id,cube_uv_reflection_fragment:rd,defaultnormal_vertex:sd,displacementmap_pars_vertex:ad,displacementmap_vertex:od,emissivemap_fragment:cd,emissivemap_pars_fragment:ld,colorspace_fragment:hd,colorspace_pars_fragment:ud,envmap_fragment:fd,envmap_common_pars_fragment:dd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:bd,envmap_vertex:gd,fog_vertex:_d,fog_pars_vertex:xd,fog_fragment:vd,fog_pars_fragment:Md,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:yd,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Td,lights_pars_begin:Ad,lights_toon_fragment:wd,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Ld,lights_physical_fragment:Pd,lights_physical_pars_fragment:Dd,lights_fragment_begin:Id,lights_fragment_maps:Ud,lights_fragment_end:Nd,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Bd,map_fragment:Hd,map_pars_fragment:Gd,map_particle_fragment:kd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphinstance_vertex:qd,morphcolor_vertex:Yd,morphnormal_vertex:$d,morphtarget_pars_vertex:Kd,morphtarget_vertex:jd,normal_fragment_begin:Zd,normal_fragment_maps:Jd,normal_pars_fragment:Qd,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:sp,iridescence_pars_fragment:ap,opaque_fragment:op,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:fp,roughnessmap_fragment:dp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:_p,shadowmask_pars_fragment:xp,skinbase_vertex:vp,skinning_pars_vertex:Mp,skinning_vertex:Sp,skinnormal_vertex:yp,specularmap_fragment:Ep,specularmap_pars_fragment:Tp,tonemapping_fragment:Ap,tonemapping_pars_fragment:bp,transmission_fragment:wp,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Lp,uv_vertex:Pp,worldpos_vertex:Dp,background_vert:Ip,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:Fp,cube_vert:Op,cube_frag:zp,depth_vert:Bp,depth_frag:Hp,distanceRGBA_vert:Gp,distanceRGBA_frag:kp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:$p,meshlambert_vert:Kp,meshlambert_frag:jp,meshmatcap_vert:Zp,meshmatcap_frag:Jp,meshnormal_vert:Qp,meshnormal_frag:tm,meshphong_vert:em,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:rm,meshtoon_vert:sm,meshtoon_frag:am,points_vert:om,points_frag:cm,shadow_vert:lm,shadow_frag:hm,sprite_vert:um,sprite_frag:fm},st={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},xn={basic:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Re([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Re([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Re([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Re([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Re([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Re([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Re([st.common,st.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Re([st.lights,st.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};xn.physical={uniforms:Re([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const hs={r:0,b:0,g:0},_i=new Be,dm=new $t;function pm(n,t,e,i,r,s,a){const o=new At(0);let c=s===!0?0:1,h,u,f=null,d=0,p=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=g(x);v===null?l(o,c):v&&v.isColor&&(l(v,1),M=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Xs)?(u===void 0&&(u=new le(new ie(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:fr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_i.copy(M.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(_i)),u.material.toneMapped=Wt.getTransfer(v.colorSpace)!==ne,(f!==v||d!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new le(new zn(2,2),new Nn({name:"BackgroundMaterial",uniforms:fr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,p=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function l(x,M){x.getRGB(hs,mh(n)),i.buffers.color.setClear(hs.r,hs.g,hs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),c=M,l(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,l(o,c)},render:_,addToRenderList:m}}function mm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,b,B,L,U){let R=!1;const N=f(L,B,b);s!==N&&(s=N,h(s.object)),R=p(S,L,B,U),R&&g(S,L,B,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,v(S,b,B,L),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return n.createVertexArray()}function h(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,b,B){const L=B.wireframe===!0;let U=i[S.id];U===void 0&&(U={},i[S.id]=U);let R=U[b.id];R===void 0&&(R={},U[b.id]=R);let N=R[L];return N===void 0&&(N=d(c()),R[L]=N),N}function d(S){const b=[],B=[],L=[];for(let U=0;U<e;U++)b[U]=0,B[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,b,B,L){const U=s.attributes,R=b.attributes;let N=0;const q=B.getAttributes();for(const X in q)if(q[X].location>=0){const lt=U[X];let pt=R[X];if(pt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),lt===void 0||lt.attribute!==pt||pt&&lt.data!==pt.data)return!0;N++}return s.attributesNum!==N||s.index!==L}function g(S,b,B,L){const U={},R=b.attributes;let N=0;const q=B.getAttributes();for(const X in q)if(q[X].location>=0){let lt=R[X];lt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor));const pt={};pt.attribute=lt,lt&&lt.data&&(pt.data=lt.data),U[X]=pt,N++}s.attributes=U,s.attributesNum=N,s.index=L}function _(){const S=s.newAttributes;for(let b=0,B=S.length;b<B;b++)S[b]=0}function m(S){l(S,0)}function l(S,b){const B=s.newAttributes,L=s.enabledAttributes,U=s.attributeDivisors;B[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),U[S]!==b&&(n.vertexAttribDivisor(S,b),U[S]=b)}function x(){const S=s.newAttributes,b=s.enabledAttributes;for(let B=0,L=b.length;B<L;B++)b[B]!==S[B]&&(n.disableVertexAttribArray(B),b[B]=0)}function M(S,b,B,L,U,R,N){N===!0?n.vertexAttribIPointer(S,b,B,U,R):n.vertexAttribPointer(S,b,B,L,U,R)}function v(S,b,B,L){_();const U=L.attributes,R=B.getAttributes(),N=b.defaultAttributeValues;for(const q in R){const X=R[q];if(X.location>=0){let rt=U[q];if(rt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),rt!==void 0){const lt=rt.normalized,pt=rt.itemSize,wt=t.get(rt);if(wt===void 0)continue;const Kt=wt.buffer,Y=wt.type,et=wt.bytesPerElement,dt=Y===n.INT||Y===n.UNSIGNED_INT||rt.gpuType===Uo;if(rt.isInterleavedBufferAttribute){const at=rt.data,bt=at.stride,Lt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Nt=0;Nt<X.locationSize;Nt++)l(X.location+Nt,at.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Nt=0;Nt<X.locationSize;Nt++)m(X.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let Nt=0;Nt<X.locationSize;Nt++)M(X.location+Nt,pt/X.locationSize,Y,lt,bt*et,(Lt+pt/X.locationSize*Nt)*et,dt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<X.locationSize;at++)l(X.location+at,rt.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<X.locationSize;at++)m(X.location+at);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let at=0;at<X.locationSize;at++)M(X.location+at,pt/X.locationSize,Y,lt,pt*et,pt/X.locationSize*at*et,dt)}}else if(N!==void 0){const lt=N[q];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(X.location,lt);break;case 3:n.vertexAttrib3fv(X.location,lt);break;case 4:n.vertexAttrib4fv(X.location,lt);break;default:n.vertexAttrib1fv(X.location,lt)}}}}x()}function D(){P();for(const S in i){const b=i[S];for(const B in b){const L=b[B];for(const U in L)u(L[U].object),delete L[U];delete b[B]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const B in b){const L=b[B];for(const U in L)u(L[U].object),delete L[U];delete b[B]}delete i[S.id]}function w(S){for(const b in i){const B=i[b];if(B[S.id]===void 0)continue;const L=B[S.id];for(const U in L)u(L[U].object),delete L[U];delete B[S.id]}}function P(){T(),a=!0,s!==r&&(s=r,h(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function gm(n,t,e){let i;function r(h){i=h}function s(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function a(h,u,f){f!==0&&(n.drawArraysInstanced(i,h,u,f),e.update(u,i,f))}function o(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function c(h,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)a(h[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,h,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _m(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==pn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mn&&!P)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),l=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:l,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:D,maxSamples:C}}function xm(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Mi,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,l=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):h();else{const x=s?0:i,M=x*4;let v=l.clippingState||null;c.value=v,v=u(g,d,M,p);for(let D=0;D!==M;++D)v[D]=e[D];l.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const l=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<l)&&(m=new Float32Array(l));for(let M=0,v=p;M!==_;++M,v+=4)a.copy(f[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function vm(n){let t=new WeakMap;function e(a,o){return o===Ka?a.mapping=cr:o===ja&&(a.mapping=lr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ka||o===ja)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Lf(c.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",r),e(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class vh extends gh{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,Ic=[.125,.215,.35,.446,.526,.582],Ti=20,Ta=new vh,Uc=new At;let Aa=null,ba=0,wa=0,Ra=!1;const Si=(1+Math.sqrt(5))/2,Yi=1/Si,Nc=[new H(-Si,Yi,0),new H(Si,Yi,0),new H(-Yi,0,Si),new H(Yi,0,Si),new H(0,Si,-Yi),new H(0,Si,Yi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Aa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,ba,wa),this._renderer.xr.enabled=Ra,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Br,format:pn,colorSpace:pr,depthBuffer:!1},r=Oc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(s)),this._blurMaterial=Sm(s,t,e)}return r}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,i,r){const o=new nn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Uc),u.toneMapping=ii,u.autoClear=!1;const p=new Ye({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new le(new ie,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Uc),_=!0);for(let l=0;l<6;l++){const x=l%3;x===0?(o.up.set(0,c[l],0),o.lookAt(h[l],0,0)):x===1?(o.up.set(0,0,c[l]),o.lookAt(0,h[l],0)):(o.up.set(0,c[l],0),o.lookAt(0,0,h[l]));const M=this._cubeSize;us(r,x*M,l>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===cr||t.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;us(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nc[(r-s-1)%Nc.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new le(this._lodPlanes[r],h),d=h.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const l=[];let x=0;for(let w=0;w<Ti;++w){const P=w/_,T=Math.exp(-P*P/2);l.push(T),w===0?x+=T:w<m&&(x+=2*T)}for(let w=0;w<l.length;w++)l[w]=l[w]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=l,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const v=this._sizeLods[r],D=3*v*(r>M-Ji?r-M+Ji:0),C=4*(this._cubeSize-v);us(e,D,C,3*v,2*v),c.setRenderTarget(e),c.render(f,Ta)}}function Mm(n){const t=[],e=[],i=[];let r=n;const s=n-Ji+1+Ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Ji?c=Ic[a-n+Ji-1]:a===0&&(c=0),i.push(c);const h=1/(o-2),u=-h,f=1+h,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,l=1,x=new Float32Array(_*g*p),M=new Float32Array(m*g*p),v=new Float32Array(l*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,P=C>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(T,_*g*C),M.set(d,m*g*C);const S=[C,C,C,C,C,C];v.set(S,l*g*C)}const D=new He;D.setAttribute("position",new De(x,_)),D.setAttribute("uv",new De(M,m)),D.setAttribute("faceIndex",new De(v,l)),t.push(D),r>Ji&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Oc(n,t,e){const i=new Li(n,t,e);return i.texture.mapping=Xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Sm(n,t,e){const i=new Float32Array(Ti),r=new H(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ko(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function zc(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Bc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}function ym(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,h=c===Ka||c===ja,u=c===cr||c===lr;if(h||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Fc(n)),f=h?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return h&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Fc(n)),f=h?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function s(o){const c=o.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Em(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Tm(n,t,e,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,l=_.length;m<l;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,l=_.length;m<l;m++)t.update(_[m],n.ARRAY_BUFFER)}}function h(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let M=0,v=x.length;M<v;M+=3){const D=x[M+0],C=x[M+1],w=x[M+2];d.push(D,C,C,w,w,D)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const D=M+0,C=M+1,w=M+2;d.push(D,C,C,w,w,D)}}else return;const m=new(oh(d)?ph:dh)(d,1);m.version=_;const l=s.get(f);l&&t.remove(l),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&h(f)}else h(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Am(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*a),e.update(p,i,1)}function h(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let l=0;l<g;l++)m+=p[l];e.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let l=0;l<d.length;l++)h(d[l]/a,p[l],_[l]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let l=0;for(let x=0;x<g;x++)l+=p[x]*_[x];e.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function wm(n,t,e){const i=new WeakMap,r=new he;function s(a,o,c){const h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,l=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let D=o.attributes.position.count*v,C=1;D>t.maxTextureSize&&(C=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const w=new Float32Array(D*C*4*f),P=new lh(w,D,C,f);P.type=Mn,P.needsUpdate=!0;const T=v*4;for(let b=0;b<f;b++){const B=l[b],L=x[b],U=M[b],R=D*C*4*b;for(let N=0;N<B.count;N++){const q=N*T;g===!0&&(r.fromBufferAttribute(B,N),w[R+q+0]=r.x,w[R+q+1]=r.y,w[R+q+2]=r.z,w[R+q+3]=0),_===!0&&(r.fromBufferAttribute(L,N),w[R+q+4]=r.x,w[R+q+5]=r.y,w[R+q+6]=r.z,w[R+q+7]=0),m===!0&&(r.fromBufferAttribute(U,N),w[R+q+8]=r.x,w[R+q+9]=r.y,w[R+q+10]=r.z,w[R+q+11]=U.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new Yt(D,C)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Rm(n,t,e,i){let r=new WeakMap;function s(c){const h=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}class Mh extends Pe{constructor(t,e,i,r,s,a,o,c,h,u=tr){if(u!==tr&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===tr&&(i=Ci),i===void 0&&u===ur&&(i=hr),super(null,r,s,a,o,c,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sh=new Pe,Hc=new Mh(1,1),yh=new lh,Eh=new pf,Th=new _h,Gc=[],kc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function xr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Gc[r];if(s===void 0&&(s=new Float32Array(r),Gc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ys(n,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Cm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function Pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function Dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function Im(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;Xc.set(i),n.uniformMatrix2fv(this.addr,!1,Xc),ve(e,i)}}function Um(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;Wc.set(i),n.uniformMatrix3fv(this.addr,!1,Wc),ve(e,i)}}function Nm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),ve(e,i)}}function Fm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function Bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function Hm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function Wm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hc.compareFunction=ah,s=Hc):s=Sh,e.setTexture2D(t||s,r)}function Xm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Eh,r)}function qm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Th,r)}function Ym(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||yh,r)}function $m(n){switch(n){case 5126:return Cm;case 35664:return Lm;case 35665:return Pm;case 35666:return Dm;case 35674:return Im;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return zm;case 35669:case 35673:return Bm;case 5125:return Hm;case 36294:return Gm;case 36295:return km;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}function Km(n,t){n.uniform1fv(this.addr,t)}function jm(n,t){const e=xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Zm(n,t){const e=xr(t,this.size,3);n.uniform3fv(this.addr,e)}function Jm(n,t){const e=xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Qm(n,t){const e=xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function tg(n,t){const e=xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function eg(n,t){const e=xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ng(n,t){n.uniform1iv(this.addr,t)}function ig(n,t){n.uniform2iv(this.addr,t)}function rg(n,t){n.uniform3iv(this.addr,t)}function sg(n,t){n.uniform4iv(this.addr,t)}function ag(n,t){n.uniform1uiv(this.addr,t)}function og(n,t){n.uniform2uiv(this.addr,t)}function cg(n,t){n.uniform3uiv(this.addr,t)}function lg(n,t){n.uniform4uiv(this.addr,t)}function hg(n,t,e){const i=this.cache,r=t.length,s=Ys(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Sh,s[a])}function ug(n,t,e){const i=this.cache,r=t.length,s=Ys(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Eh,s[a])}function fg(n,t,e){const i=this.cache,r=t.length,s=Ys(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Th,s[a])}function dg(n,t,e){const i=this.cache,r=t.length,s=Ys(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||yh,s[a])}function pg(n){switch(n){case 5126:return Km;case 35664:return jm;case 35665:return Zm;case 35666:return Jm;case 35674:return Qm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return rg;case 35669:case 35673:return sg;case 5125:return ag;case 36294:return og;case 36295:return cg;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return dg}}class mg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$m(e.type)}}class gg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pg(e.type)}}class _g{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function qc(n,t){n.seq.push(t),n.map[t.id]=t}function xg(n,t,e){const i=n.name,r=i.length;for(Ca.lastIndex=0;;){const s=Ca.exec(i),a=Ca.lastIndex;let o=s[1];const c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===r){qc(e,h===void 0?new mg(o,n,t):new gg(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new _g(o),qc(e,f)),e=f}}}class Ds{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);xg(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Yc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vg=37297;let Mg=0;function Sg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const $c=new Ot;function yg(n){Wt._getMatrix($c,Wt.workingColorSpace,n);const t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case qs:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Kc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Sg(n.getShaderSource(t),a)}else return r}function Eg(n,t){const e=yg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tg(n,t){let e;switch(t){case Hu:e="Linear";break;case Gu:e="Reinhard";break;case ku:e="Cineon";break;case Vu:e="ACESFilmic";break;case Xu:e="AgX";break;case qu:e="Neutral";break;case Wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fs=new H;function Ag(){Wt.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),t=fs.y.toFixed(4),e=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function wg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Rg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Lr(n){return n!==""}function jc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(n){return n.replace(Cg,Pg)}const Lg=new Map;function Pg(n,t){let e=zt[t];if(e===void 0){const i=Lg.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wo(e)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(n){return n.replace(Dg,Ig)}function Ig(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ug(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cr:case lr:t="ENVMAP_TYPE_CUBE";break;case Xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function Og(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Io:t="ENVMAP_BLENDING_MULTIPLY";break;case zu:t="ENVMAP_BLENDING_MIX";break;case Bu:t="ENVMAP_BLENDING_ADD";break}return t}function zg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Bg(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ug(e),h=Ng(e),u=Fg(e),f=Og(e),d=zg(e),p=bg(e),g=wg(s),_=r.createProgram();let m,l,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),l=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),l.length>0&&(l+=`
`)):(m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),l=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?zt.tonemapping_pars_fragment:"",e.toneMapping!==ii?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Eg("linearToOutputTexel",e.outputColorSpace),Ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),a=wo(a),a=jc(a,e),a=Zc(a,e),o=wo(o),o=jc(o,e),o=Zc(o,e),a=Jc(a),o=Jc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,l=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const M=x+m+a,v=x+l+o,D=Yc(r,r.VERTEX_SHADER,M),C=Yc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,D),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(b){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(D).trim(),U=r.getShaderInfoLog(C).trim();let R=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(R=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,D,C);else{const q=Kc(r,D,"vertex"),X=Kc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+B+`
`+q+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(L===""||U==="")&&(N=!1);N&&(b.diagnostics={runnable:R,programLog:B,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:l}})}r.deleteShader(D),r.deleteShader(C),P=new Ds(r,_),T=Rg(r,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,vg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=C,this}let Hg=0;class Gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new kg(t),e.set(t,i)),i}}class kg{constructor(t){this.id=Hg++,this.code=t,this.usedTimes=0}}function Vg(n,t,e,i,r,s,a){const o=new uh,c=new Gg,h=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return h.add(T),T===0?"uv":`uv${T}`}function m(T,S,b,B,L){const U=B.fog,R=L.geometry,N=T.isMeshStandardMaterial?B.environment:null,q=(T.isMeshStandardMaterial?e:t).get(T.envMap||N),X=q&&q.mapping===Xs?q.image.height:null,rt=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const lt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,pt=lt!==void 0?lt.length:0;let wt=0;R.morphAttributes.position!==void 0&&(wt=1),R.morphAttributes.normal!==void 0&&(wt=2),R.morphAttributes.color!==void 0&&(wt=3);let Kt,Y,et,dt;if(rt){const Zt=xn[rt];Kt=Zt.vertexShader,Y=Zt.fragmentShader}else Kt=T.vertexShader,Y=T.fragmentShader,c.update(T),et=c.getVertexShaderID(T),dt=c.getFragmentShaderID(T);const at=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Lt=L.isInstancedMesh===!0,Nt=L.isBatchedMesh===!0,ae=!!T.map,kt=!!T.matcap,Ct=!!q,z=!!T.aoMap,Ie=!!T.lightMap,Bt=!!T.bumpMap,Ht=!!T.normalMap,yt=!!T.displacementMap,Xt=!!T.emissiveMap,St=!!T.metalnessMap,A=!!T.roughnessMap,y=T.anisotropy>0,G=T.clearcoat>0,j=T.dispersion>0,Z=T.iridescence>0,$=T.sheen>0,mt=T.transmission>0,ot=y&&!!T.anisotropyMap,ht=G&&!!T.clearcoatMap,Vt=G&&!!T.clearcoatNormalMap,J=G&&!!T.clearcoatRoughnessMap,ft=Z&&!!T.iridescenceMap,Tt=Z&&!!T.iridescenceThicknessMap,Rt=$&&!!T.sheenColorMap,ut=$&&!!T.sheenRoughnessMap,Gt=!!T.specularMap,Ut=!!T.specularColorMap,Pt=!!T.specularIntensityMap,I=mt&&!!T.transmissionMap,Q=mt&&!!T.thicknessMap,k=!!T.gradientMap,K=!!T.alphaMap,it=T.alphaTest>0,tt=!!T.alphaHash,Et=!!T.extensions;let jt=ii;T.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(jt=n.toneMapping);const Me={shaderID:rt,shaderType:T.type,shaderName:T.name,vertexShader:Kt,fragmentShader:Y,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&L._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&L.instanceColor!==null,instancingMorph:Lt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:pr,alphaToCoverage:!!T.alphaToCoverage,map:ae,matcap:kt,envMap:Ct,envMapMode:Ct&&q.mapping,envMapCubeUVHeight:X,aoMap:z,lightMap:Ie,bumpMap:Bt,normalMap:Ht,displacementMap:d&&yt,emissiveMap:Xt,normalMapObjectSpace:Ht&&T.normalMapType===ju,normalMapTangentSpace:Ht&&T.normalMapType===sh,metalnessMap:St,roughnessMap:A,anisotropy:y,anisotropyMap:ot,clearcoat:G,clearcoatMap:ht,clearcoatNormalMap:Vt,clearcoatRoughnessMap:J,dispersion:j,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:$,sheenColorMap:Rt,sheenRoughnessMap:ut,specularMap:Gt,specularColorMap:Ut,specularIntensityMap:Pt,transmission:mt,transmissionMap:I,thicknessMap:Q,gradientMap:k,opaque:T.transparent===!1&&T.blending===Qi&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:it,alphaHash:tt,combine:T.combine,mapUv:ae&&_(T.map.channel),aoMapUv:z&&_(T.aoMap.channel),lightMapUv:Ie&&_(T.lightMap.channel),bumpMapUv:Bt&&_(T.bumpMap.channel),normalMapUv:Ht&&_(T.normalMap.channel),displacementMapUv:yt&&_(T.displacementMap.channel),emissiveMapUv:Xt&&_(T.emissiveMap.channel),metalnessMapUv:St&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:ot&&_(T.anisotropyMap.channel),clearcoatMapUv:ht&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(T.sheenRoughnessMap.channel),specularMapUv:Gt&&_(T.specularMap.channel),specularColorMapUv:Ut&&_(T.specularColorMap.channel),specularIntensityMapUv:Pt&&_(T.specularIntensityMap.channel),transmissionMapUv:I&&_(T.transmissionMap.channel),thicknessMapUv:Q&&_(T.thicknessMap.channel),alphaMapUv:K&&_(T.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ht||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(ae||K),fog:!!U,useFog:T.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:L.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:jt,decodeVideoTexture:ae&&T.map.isVideoTexture===!0&&Wt.getTransfer(T.map.colorSpace)===ne,decodeVideoTextureEmissive:Xt&&T.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(T.emissiveMap.colorSpace)===ne,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fn,flipSided:T.side===Le,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Et&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&T.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=h.has(1),Me.vertexUv2s=h.has(2),Me.vertexUv3s=h.has(3),h.clear(),Me}function l(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)S.push(b),S.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(x(S,T),M(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function x(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const S=g[T.type];let b;if(S){const B=xn[S];b=bf.clone(B.uniforms)}else b=T.uniforms;return b}function D(T,S){let b;for(let B=0,L=u.length;B<L;B++){const U=u[B];if(U.cacheKey===S){b=U,++b.usedTimes;break}}return b===void 0&&(b=new Bg(n,S,T,s),u.push(b)),b}function C(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function w(T){c.remove(T)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:l,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:P}}function Wg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Xg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function tl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function el(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,d,p,g,_,m){let l=n[t];return l===void 0?(l={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=l):(l.id=f.id,l.object=f,l.geometry=d,l.material=p,l.groupOrder=g,l.renderOrder=f.renderOrder,l.z=_,l.group=m),t++,l}function o(f,d,p,g,_,m){const l=a(f,d,p,g,_,m);p.transmission>0?i.push(l):p.transparent===!0?r.push(l):e.push(l)}function c(f,d,p,g,_,m){const l=a(f,d,p,g,_,m);p.transmission>0?i.unshift(l):p.transparent===!0?r.unshift(l):e.unshift(l)}function h(f,d){e.length>1&&e.sort(f||Xg),i.length>1&&i.sort(d||tl),r.length>1&&r.sort(d||tl)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:h}}function qg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new el,n.set(i,[a])):r>=s.length?(a=new el,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Yg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new At};break;case"SpotLight":e={position:new H,direction:new H,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function $g(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Kg=0;function jg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Zg(n){const t=new Yg,e=$g(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new H);const r=new H,s=new $t,a=new $t;function o(h){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,l=0,x=0,M=0,v=0,D=0,C=0,w=0;h.sort(jg);for(let T=0,S=h.length;T<S;T++){const b=h[T],B=b.color,L=b.intensity,U=b.distance,R=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=B.r*L,f+=B.g*L,d+=B.b*L;else if(b.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(b.sh.coefficients[N],L);w++}else if(b.isDirectionalLight){const N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,X=e.get(b);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=R,i.directionalShadowMatrix[p]=b.shadow.matrix,x++}i.directional[p]=N,p++}else if(b.isSpotLight){const N=t.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(B).multiplyScalar(L),N.distance=U,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,i.spot[_]=N;const q=b.shadow;if(b.map&&(i.spotLightMap[D]=b.map,D++,q.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[_]=q.matrix,b.castShadow){const X=e.get(b);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=R,v++}_++}else if(b.isRectAreaLight){const N=t.get(b);N.color.copy(B).multiplyScalar(L),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=N,m++}else if(b.isPointLight){const N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){const q=b.shadow,X=e.get(b);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=R,i.pointShadowMatrix[g]=b.shadow.matrix,M++}i.point[g]=N,g++}else if(b.isHemisphereLight){const N=t.get(b);N.skyColor.copy(b.color).multiplyScalar(L),N.groundColor.copy(b.groundColor).multiplyScalar(L),i.hemi[l]=N,l++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==l||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=l,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=l,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=w,i.version=Kg++)}function c(h,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let l=0,x=h.length;l<x;l++){const M=h[l];if(M.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(M.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function nl(n){const t=new Zg(n),e=[],i=[];function r(u){h.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Jg(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new nl(n),t.set(r,[o])):s>=a.length?(o=new nl(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Qg extends _r{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class t0 extends _r{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e0=`void main() {
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
}`;function i0(n,t,e){let i=new Go;const r=new Yt,s=new Yt,a=new he,o=new Qg({depthPacking:Ku}),c=new t0,h={},u=e.maxTextureSize,f={[oi]:Le,[Le]:oi,[fn]:fn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:e0,fragmentShader:n0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let l=this.type;this.render=function(C,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ni),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const L=l!==Pn&&this.type===Pn,U=l===Pn&&this.type!==Pn;for(let R=0,N=C.length;R<N;R++){const q=C[R],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const rt=X.getFrameExtents();if(r.multiply(rt),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/rt.x),r.x=s.x*rt.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/rt.y),r.y=s.y*rt.y,X.mapSize.y=s.y)),X.map===null||L===!0||U===!0){const pt=this.type!==Pn?{minFilter:Ke,magFilter:Ke}:{};X.map!==null&&X.map.dispose(),X.map=new Li(r.x,r.y,pt),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const lt=X.getViewportCount();for(let pt=0;pt<lt;pt++){const wt=X.getViewport(pt);a.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),B.viewport(a),X.updateMatrices(q,pt),i=X.getFrustum(),v(w,P,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Pn&&x(X,P),X.needsUpdate=!1}l=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,b)};function x(C,w){const P=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Li(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,P,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,P,p,_,null)}function M(C,w,P,T){let S=null;const b=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)S=b;else if(S=P.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=S.uuid,L=w.uuid;let U=h[B];U===void 0&&(U={},h[B]=U);let R=U[L];R===void 0&&(R=S.clone(),U[L]=R,w.addEventListener("dispose",D)),S=R}if(S.visible=w.visible,S.wireframe=w.wireframe,T===Pn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=P}return S}function v(C,w,P,T,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Pn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const L=t.update(C),U=C.material;if(Array.isArray(U)){const R=L.groups;for(let N=0,q=R.length;N<q;N++){const X=R[N],rt=U[X.materialIndex];if(rt&&rt.visible){const lt=M(C,rt,T,S);C.onBeforeShadow(n,C,w,P,L,lt,X),n.renderBufferDirect(P,null,L,lt,C,X),C.onAfterShadow(n,C,w,P,L,lt,X)}}}else if(U.visible){const R=M(C,U,T,S);C.onBeforeShadow(n,C,w,P,L,R,null),n.renderBufferDirect(P,null,L,R,C,null),C.onAfterShadow(n,C,w,P,L,R,null)}}const B=C.children;for(let L=0,U=B.length;L<U;L++)v(B[L],w,P,T,S)}function D(C){C.target.removeEventListener("dispose",D);for(const P in h){const T=h[P],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const r0={[ka]:Va,[Wa]:Ya,[Xa]:$a,[or]:qa,[Va]:ka,[Ya]:Wa,[$a]:Xa,[qa]:or};function s0(n,t){function e(){let I=!1;const Q=new he;let k=null;const K=new he(0,0,0,0);return{setMask:function(it){k!==it&&!I&&(n.colorMask(it,it,it,it),k=it)},setLocked:function(it){I=it},setClear:function(it,tt,Et,jt,Me){Me===!0&&(it*=jt,tt*=jt,Et*=jt),Q.set(it,tt,Et,jt),K.equals(Q)===!1&&(n.clearColor(it,tt,Et,jt),K.copy(Q))},reset:function(){I=!1,k=null,K.set(-1,0,0,0)}}}function i(){let I=!1,Q=!1,k=null,K=null,it=null;return{setReversed:function(tt){if(Q!==tt){const Et=t.get("EXT_clip_control");Q?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT);const jt=it;it=null,this.setClear(jt)}Q=tt},getReversed:function(){return Q},setTest:function(tt){tt?at(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(tt){k!==tt&&!I&&(n.depthMask(tt),k=tt)},setFunc:function(tt){if(Q&&(tt=r0[tt]),K!==tt){switch(tt){case ka:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Wa:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case qa:n.depthFunc(n.GEQUAL);break;case Ya:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=tt}},setLocked:function(tt){I=tt},setClear:function(tt){it!==tt&&(Q&&(tt=1-tt),n.clearDepth(tt),it=tt)},reset:function(){I=!1,k=null,K=null,it=null,Q=!1}}}function r(){let I=!1,Q=null,k=null,K=null,it=null,tt=null,Et=null,jt=null,Me=null;return{setTest:function(Zt){I||(Zt?at(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(Zt){Q!==Zt&&!I&&(n.stencilMask(Zt),Q=Zt)},setFunc:function(Zt,Ge,Ue){(k!==Zt||K!==Ge||it!==Ue)&&(n.stencilFunc(Zt,Ge,Ue),k=Zt,K=Ge,it=Ue)},setOp:function(Zt,Ge,Ue){(tt!==Zt||Et!==Ge||jt!==Ue)&&(n.stencilOp(Zt,Ge,Ue),tt=Zt,Et=Ge,jt=Ue)},setLocked:function(Zt){I=Zt},setClear:function(Zt){Me!==Zt&&(n.clearStencil(Zt),Me=Zt)},reset:function(){I=!1,Q=null,k=null,K=null,it=null,tt=null,Et=null,jt=null,Me=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,h=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,l=null,x=null,M=null,v=null,D=null,C=null,w=new At(0,0,0),P=0,T=!1,S=null,b=null,B=null,L=null,U=null;const R=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,q=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=q>=2);let rt=null,lt={};const pt=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Kt=new he().fromArray(pt),Y=new he().fromArray(wt);function et(I,Q,k,K){const it=new Uint8Array(4),tt=n.createTexture();n.bindTexture(I,tt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<k;Et++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,it):n.texImage2D(Q+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,it);return tt}const dt={};dt[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(or),Bt(!1),Ht(ac),at(n.CULL_FACE),z(ni);function at(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function bt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Lt(I,Q){return f[I]!==Q?(n.bindFramebuffer(I,Q),f[I]=Q,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Q),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Nt(I,Q){let k=p,K=!1;if(I){k=d.get(Q),k===void 0&&(k=[],d.set(Q,k));const it=I.textures;if(k.length!==it.length||k[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,Et=it.length;tt<Et;tt++)k[tt]=n.COLOR_ATTACHMENT0+tt;k.length=it.length,K=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,K=!0);K&&n.drawBuffers(k)}function ae(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const kt={[Ei]:n.FUNC_ADD,[Su]:n.FUNC_SUBTRACT,[yu]:n.FUNC_REVERSE_SUBTRACT};kt[Eu]=n.MIN,kt[Tu]=n.MAX;const Ct={[Au]:n.ZERO,[bu]:n.ONE,[wu]:n.SRC_COLOR,[Ha]:n.SRC_ALPHA,[Iu]:n.SRC_ALPHA_SATURATE,[Pu]:n.DST_COLOR,[Cu]:n.DST_ALPHA,[Ru]:n.ONE_MINUS_SRC_COLOR,[Ga]:n.ONE_MINUS_SRC_ALPHA,[Du]:n.ONE_MINUS_DST_COLOR,[Lu]:n.ONE_MINUS_DST_ALPHA,[Uu]:n.CONSTANT_COLOR,[Nu]:n.ONE_MINUS_CONSTANT_COLOR,[Fu]:n.CONSTANT_ALPHA,[Ou]:n.ONE_MINUS_CONSTANT_ALPHA};function z(I,Q,k,K,it,tt,Et,jt,Me,Zt){if(I===ni){_===!0&&(bt(n.BLEND),_=!1);return}if(_===!1&&(at(n.BLEND),_=!0),I!==Mu){if(I!==m||Zt!==T){if((l!==Ei||v!==Ei)&&(n.blendEquation(n.FUNC_ADD),l=Ei,v=Ei),Zt)switch(I){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFunc(n.ONE,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,M=null,D=null,C=null,w.set(0,0,0),P=0,m=I,T=Zt}return}it=it||Q,tt=tt||k,Et=Et||K,(Q!==l||it!==v)&&(n.blendEquationSeparate(kt[Q],kt[it]),l=Q,v=it),(k!==x||K!==M||tt!==D||Et!==C)&&(n.blendFuncSeparate(Ct[k],Ct[K],Ct[tt],Ct[Et]),x=k,M=K,D=tt,C=Et),(jt.equals(w)===!1||Me!==P)&&(n.blendColor(jt.r,jt.g,jt.b,Me),w.copy(jt),P=Me),m=I,T=!1}function Ie(I,Q){I.side===fn?bt(n.CULL_FACE):at(n.CULL_FACE);let k=I.side===Le;Q&&(k=!k),Bt(k),I.blending===Qi&&I.transparent===!1?z(ni):z(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Xt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function Ht(I){I!==_u?(at(n.CULL_FACE),I!==b&&(I===ac?n.cullFace(n.BACK):I===xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),b=I}function yt(I){I!==B&&(N&&n.lineWidth(I),B=I)}function Xt(I,Q,k){I?(at(n.POLYGON_OFFSET_FILL),(L!==Q||U!==k)&&(n.polygonOffset(Q,k),L=Q,U=k)):bt(n.POLYGON_OFFSET_FILL)}function St(I){I?at(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function A(I){I===void 0&&(I=n.TEXTURE0+R-1),rt!==I&&(n.activeTexture(I),rt=I)}function y(I,Q,k){k===void 0&&(rt===null?k=n.TEXTURE0+R-1:k=rt);let K=lt[k];K===void 0&&(K={type:void 0,texture:void 0},lt[k]=K),(K.type!==I||K.texture!==Q)&&(rt!==k&&(n.activeTexture(k),rt=k),n.bindTexture(I,Q||dt[I]),K.type=I,K.texture=Q)}function G(){const I=lt[rt];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(I){Kt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Kt.copy(I))}function ut(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Gt(I,Q){let k=h.get(Q);k===void 0&&(k=new WeakMap,h.set(Q,k));let K=k.get(I);K===void 0&&(K=n.getUniformBlockIndex(Q,I.name),k.set(I,K))}function Ut(I,Q){const K=h.get(Q).get(I);c.get(Q)!==K&&(n.uniformBlockBinding(Q,K,I.__bindingPointIndex),c.set(Q,K))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},rt=null,lt={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,l=null,x=null,M=null,v=null,D=null,C=null,w=new At(0,0,0),P=0,T=!1,S=null,b=null,B=null,L=null,U=null,Kt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:at,disable:bt,bindFramebuffer:Lt,drawBuffers:Nt,useProgram:ae,setBlending:z,setMaterial:Ie,setFlipSided:Bt,setCullFace:Ht,setLineWidth:yt,setPolygonOffset:Xt,setScissorTest:St,activeTexture:A,bindTexture:y,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:ft,texImage3D:Tt,updateUBOMapping:Gt,uniformBlockBinding:Ut,texStorage2D:Vt,texStorage3D:J,texSubImage2D:$,texSubImage3D:mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ht,scissor:Rt,viewport:ut,reset:Pt}}function il(n,t,e,i){const r=a0(i);switch(e){case Ql:return n*t;case eh:return n*t;case nh:return n*t*2;case Oo:return n*t/r.components*r.byteLength;case zo:return n*t/r.components*r.byteLength;case ih:return n*t*2/r.components*r.byteLength;case Bo:return n*t*2/r.components*r.byteLength;case th:return n*t*3/r.components*r.byteLength;case pn:return n*t*4/r.components*r.byteLength;case Ho:return n*t*4/r.components*r.byteLength;case ws:case Rs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cs:case Ls:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case to:case no:return Math.max(n,16)*Math.max(t,8)/4;case Qa:case eo:return Math.max(n,8)*Math.max(t,8)/2;case io:case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case so:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case co:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ho:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case fo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case mo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case go:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case _o:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case xo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case vo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ps:case So:case yo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rh:case Eo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case To:case Ao:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a0(n){switch(n){case Un:case jl:return{byteLength:1,components:1};case Ur:case Zl:case Br:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case Ci:case Uo:case Mn:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function o0(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Yt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):Bs("canvas")}function _(A,y,G){let j=1;const Z=St(A);if((Z.width>G||Z.height>G)&&(j=G/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(j*Z.width),mt=Math.floor(j*Z.height);f===void 0&&(f=g($,mt));const ot=y?g($,mt):f;return ot.width=$,ot.height=mt,ot.getContext("2d").drawImage(A,0,0,$,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+mt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function l(A){n.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,y,G,j,Z=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=y;if(y===n.RED&&(G===n.FLOAT&&($=n.R32F),G===n.HALF_FLOAT&&($=n.R16F),G===n.UNSIGNED_BYTE&&($=n.R8)),y===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.R8UI),G===n.UNSIGNED_SHORT&&($=n.R16UI),G===n.UNSIGNED_INT&&($=n.R32UI),G===n.BYTE&&($=n.R8I),G===n.SHORT&&($=n.R16I),G===n.INT&&($=n.R32I)),y===n.RG&&(G===n.FLOAT&&($=n.RG32F),G===n.HALF_FLOAT&&($=n.RG16F),G===n.UNSIGNED_BYTE&&($=n.RG8)),y===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RG8UI),G===n.UNSIGNED_SHORT&&($=n.RG16UI),G===n.UNSIGNED_INT&&($=n.RG32UI),G===n.BYTE&&($=n.RG8I),G===n.SHORT&&($=n.RG16I),G===n.INT&&($=n.RG32I)),y===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGB8UI),G===n.UNSIGNED_SHORT&&($=n.RGB16UI),G===n.UNSIGNED_INT&&($=n.RGB32UI),G===n.BYTE&&($=n.RGB8I),G===n.SHORT&&($=n.RGB16I),G===n.INT&&($=n.RGB32I)),y===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGBA8UI),G===n.UNSIGNED_SHORT&&($=n.RGBA16UI),G===n.UNSIGNED_INT&&($=n.RGBA32UI),G===n.BYTE&&($=n.RGBA8I),G===n.SHORT&&($=n.RGBA16I),G===n.INT&&($=n.RGBA32I)),y===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),y===n.RGBA){const mt=Z?qs:Wt.getTransfer(j);G===n.FLOAT&&($=n.RGBA32F),G===n.HALF_FLOAT&&($=n.RGBA16F),G===n.UNSIGNED_BYTE&&($=mt===ne?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(A,y){let G;return A?y===null||y===Ci||y===hr?G=n.DEPTH24_STENCIL8:y===Mn?G=n.DEPTH32F_STENCIL8:y===Ur&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ci||y===hr?G=n.DEPTH_COMPONENT24:y===Mn?G=n.DEPTH_COMPONENT32F:y===Ur&&(G=n.DEPTH_COMPONENT16),G}function D(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ke&&A.minFilter!==vn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),P(y),y.isVideoTexture&&u.delete(y)}function w(A){const y=A.target;y.removeEventListener("dispose",w),S(y)}function P(A){const y=i.get(A);if(y.__webglInit===void 0)return;const G=A.source,j=d.get(G);if(j){const Z=j[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(A),Object.keys(j).length===0&&d.delete(G)}i.remove(A)}function T(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const G=A.source,j=d.get(G);delete j[y.__cacheKey],a.memory.textures--}function S(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let Z=0;Z<y.__webglFramebuffer[j].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[j][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=A.textures;for(let j=0,Z=G.length;j<Z;j++){const $=i.get(G[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(G[j])}i.remove(A)}let b=0;function B(){b=0}function L(){const A=b;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),b+=1,A}function U(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function R(A,y){const G=i.get(A);if(A.isVideoTexture&&yt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,A,y);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+y)}function N(A,y){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Y(G,A,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+y)}function q(A,y){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Y(G,A,y);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+y)}function X(A,y){const G=i.get(A);if(A.version>0&&G.__version!==A.version){et(G,A,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+y)}const rt={[Za]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},lt={[Ke]:n.NEAREST,[Yu]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},pt={[Zu]:n.NEVER,[rf]:n.ALWAYS,[Ju]:n.LESS,[ah]:n.LEQUAL,[Qu]:n.EQUAL,[nf]:n.GEQUAL,[tf]:n.GREATER,[ef]:n.NOTEQUAL};function wt(A,y){if(y.type===Mn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===vn||y.magFilter===ea||y.magFilter===qr||y.magFilter===wi||y.minFilter===vn||y.minFilter===ea||y.minFilter===qr||y.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,rt[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,rt[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,rt[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,lt[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,pt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ke||y.minFilter!==qr&&y.minFilter!==wi||y.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Kt(A,y){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const j=y.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const $=U(y);if($!==A.__cacheKey){Z[$]===void 0&&(Z[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Z[$].usedTimes++;const mt=Z[A.__cacheKey];mt!==void 0&&(Z[A.__cacheKey].usedTimes--,mt.usedTimes===0&&T(y)),A.__cacheKey=$,A.__webglTexture=Z[$].texture}return G}function Y(A,y,G){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);const Z=Kt(A,y),$=y.source;e.bindTexture(j,A.__webglTexture,n.TEXTURE0+G);const mt=i.get($);if($.version!==mt.__version||Z===!0){e.activeTexture(n.TEXTURE0+G);const ot=Wt.getPrimaries(Wt.workingColorSpace),ht=y.colorSpace===Zn?null:Wt.getPrimaries(y.colorSpace),Vt=y.colorSpace===Zn||ot===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let J=_(y.image,!1,r.maxTextureSize);J=Xt(y,J);const ft=s.convert(y.format,y.colorSpace),Tt=s.convert(y.type);let Rt=M(y.internalFormat,ft,Tt,y.colorSpace,y.isVideoTexture);wt(j,y);let ut;const Gt=y.mipmaps,Ut=y.isVideoTexture!==!0,Pt=mt.__version===void 0||Z===!0,I=$.dataReady,Q=D(y,J);if(y.isDepthTexture)Rt=v(y.format===ur,y.type),Pt&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Rt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,Rt,J.width,J.height,0,ft,Tt,null));else if(y.isDataTexture)if(Gt.length>0){Ut&&Pt&&e.texStorage2D(n.TEXTURE_2D,Q,Rt,Gt[0].width,Gt[0].height);for(let k=0,K=Gt.length;k<K;k++)ut=Gt[k],Ut?I&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,ut.width,ut.height,ft,Tt,ut.data):e.texImage2D(n.TEXTURE_2D,k,Rt,ut.width,ut.height,0,ft,Tt,ut.data);y.generateMipmaps=!1}else Ut?(Pt&&e.texStorage2D(n.TEXTURE_2D,Q,Rt,J.width,J.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,ft,Tt,J.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,J.width,J.height,0,ft,Tt,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ut&&Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Rt,Gt[0].width,Gt[0].height,J.depth);for(let k=0,K=Gt.length;k<K;k++)if(ut=Gt[k],y.format!==pn)if(ft!==null)if(Ut){if(I)if(y.layerUpdates.size>0){const it=il(ut.width,ut.height,y.format,y.type);for(const tt of y.layerUpdates){const Et=ut.data.subarray(tt*it/ut.data.BYTES_PER_ELEMENT,(tt+1)*it/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,tt,ut.width,ut.height,1,ft,Et)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,ut.width,ut.height,J.depth,ft,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Rt,ut.width,ut.height,J.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,ut.width,ut.height,J.depth,ft,Tt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,k,Rt,ut.width,ut.height,J.depth,0,ft,Tt,ut.data)}else{Ut&&Pt&&e.texStorage2D(n.TEXTURE_2D,Q,Rt,Gt[0].width,Gt[0].height);for(let k=0,K=Gt.length;k<K;k++)ut=Gt[k],y.format!==pn?ft!==null?Ut?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,ut.width,ut.height,ft,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,k,Rt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?I&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,ut.width,ut.height,ft,Tt,ut.data):e.texImage2D(n.TEXTURE_2D,k,Rt,ut.width,ut.height,0,ft,Tt,ut.data)}else if(y.isDataArrayTexture)if(Ut){if(Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Q,Rt,J.width,J.height,J.depth),I)if(y.layerUpdates.size>0){const k=il(J.width,J.height,y.format,y.type);for(const K of y.layerUpdates){const it=J.data.subarray(K*k/J.data.BYTES_PER_ELEMENT,(K+1)*k/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,ft,Tt,it)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,Tt,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,J.width,J.height,J.depth,0,ft,Tt,J.data);else if(y.isData3DTexture)Ut?(Pt&&e.texStorage3D(n.TEXTURE_3D,Q,Rt,J.width,J.height,J.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,Tt,J.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,J.width,J.height,J.depth,0,ft,Tt,J.data);else if(y.isFramebufferTexture){if(Pt)if(Ut)e.texStorage2D(n.TEXTURE_2D,Q,Rt,J.width,J.height);else{let k=J.width,K=J.height;for(let it=0;it<Q;it++)e.texImage2D(n.TEXTURE_2D,it,Rt,k,K,0,ft,Tt,null),k>>=1,K>>=1}}else if(Gt.length>0){if(Ut&&Pt){const k=St(Gt[0]);e.texStorage2D(n.TEXTURE_2D,Q,Rt,k.width,k.height)}for(let k=0,K=Gt.length;k<K;k++)ut=Gt[k],Ut?I&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,ft,Tt,ut):e.texImage2D(n.TEXTURE_2D,k,Rt,ft,Tt,ut);y.generateMipmaps=!1}else if(Ut){if(Pt){const k=St(J);e.texStorage2D(n.TEXTURE_2D,Q,Rt,k.width,k.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Tt,J)}else e.texImage2D(n.TEXTURE_2D,0,Rt,ft,Tt,J);m(y)&&l(j),mt.__version=$.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function et(A,y,G){if(y.image.length!==6)return;const j=Kt(A,y),Z=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const $=i.get(Z);if(Z.version!==$.__version||j===!0){e.activeTexture(n.TEXTURE0+G);const mt=Wt.getPrimaries(Wt.workingColorSpace),ot=y.colorSpace===Zn?null:Wt.getPrimaries(y.colorSpace),ht=y.colorSpace===Zn||mt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Vt=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Vt&&!J?ft[K]=_(y.image[K],!0,r.maxCubemapSize):ft[K]=J?y.image[K].image:y.image[K],ft[K]=Xt(y,ft[K]);const Tt=ft[0],Rt=s.convert(y.format,y.colorSpace),ut=s.convert(y.type),Gt=M(y.internalFormat,Rt,ut,y.colorSpace),Ut=y.isVideoTexture!==!0,Pt=$.__version===void 0||j===!0,I=Z.dataReady;let Q=D(y,Tt);wt(n.TEXTURE_CUBE_MAP,y);let k;if(Vt){Ut&&Pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Gt,Tt.width,Tt.height);for(let K=0;K<6;K++){k=ft[K].mipmaps;for(let it=0;it<k.length;it++){const tt=k[it];y.format!==pn?Rt!==null?Ut?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,tt.width,tt.height,Rt,tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Gt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,tt.width,tt.height,Rt,ut,tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Gt,tt.width,tt.height,0,Rt,ut,tt.data)}}}else{if(k=y.mipmaps,Ut&&Pt){k.length>0&&Q++;const K=St(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Gt,K.width,K.height)}for(let K=0;K<6;K++)if(J){Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Rt,ut,ft[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,ft[K].width,ft[K].height,0,Rt,ut,ft[K].data);for(let it=0;it<k.length;it++){const Et=k[it].image[K].image;Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,Et.width,Et.height,Rt,ut,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Gt,Et.width,Et.height,0,Rt,ut,Et.data)}}else{Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,ut,ft[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,Rt,ut,ft[K]);for(let it=0;it<k.length;it++){const tt=k[it];Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,Rt,ut,tt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Gt,Rt,ut,tt.image[K])}}}m(y)&&l(n.TEXTURE_CUBE_MAP),$.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function dt(A,y,G,j,Z,$){const mt=s.convert(G.format,G.colorSpace),ot=s.convert(G.type),ht=M(G.internalFormat,mt,ot,G.colorSpace),Vt=i.get(y),J=i.get(G);if(J.__renderTarget=y,!Vt.__hasExternalTextures){const ft=Math.max(1,y.width>>$),Tt=Math.max(1,y.height>>$);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,ht,ft,Tt,y.depth,0,mt,ot,null):e.texImage2D(Z,$,ht,ft,Tt,0,mt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Ht(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,J.__webglTexture,0,Bt(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,J.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(A,y,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const j=y.depthTexture,Z=j&&j.isDepthTexture?j.type:null,$=v(y.stencilBuffer,Z),mt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=Bt(y);Ht(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,$,y.width,y.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,A)}else{const j=y.textures;for(let Z=0;Z<j.length;Z++){const $=j[Z],mt=s.convert($.format,$.colorSpace),ot=s.convert($.type),ht=M($.internalFormat,mt,ot,$.colorSpace),Vt=Bt(y);G&&Ht(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,ht,y.width,y.height):Ht(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt,ht,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),R(y.depthTexture,0);const Z=j.__webglTexture,$=Bt(y);if(y.depthTexture.format===tr)Ht(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===ur)Ht(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const y=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=j}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");bt(y.__webglFramebuffer,A)}else if(G){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),at(y.__webglDepthbuffer[j],A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),at(y.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(A,y,G){const j=i.get(A);y!==void 0&&dt(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Lt(A)}function ae(A){const y=A.texture,G=i.get(A),j=i.get(y);A.addEventListener("dispose",w);const Z=A.textures,$=A.isWebGLCubeRenderTarget===!0,mt=Z.length>1;if(mt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,a.memory.textures++),$){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let ht=0;ht<y.mipmaps.length;ht++)G.__webglFramebuffer[ot][ht]=n.createFramebuffer()}else G.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)G.__webglFramebuffer[ot]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(mt)for(let ot=0,ht=Z.length;ot<ht;ot++){const Vt=i.get(Z[ot]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Ht(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const ht=Z[ot];G.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);const Vt=s.convert(ht.format,ht.colorSpace),J=s.convert(ht.type),ft=M(ht.internalFormat,Vt,J,ht.colorSpace,A.isXRRenderTarget===!0),Tt=Bt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,ft,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),at(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),wt(n.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)dt(G.__webglFramebuffer[ot][ht],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else dt(G.__webglFramebuffer[ot],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(y)&&l(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ot=0,ht=Z.length;ot<ht;ot++){const Vt=Z[ot],J=i.get(Vt);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),wt(n.TEXTURE_2D,Vt),dt(G.__webglFramebuffer,A,Vt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Vt)&&l(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),wt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)dt(G.__webglFramebuffer[ht],A,y,n.COLOR_ATTACHMENT0,ot,ht);else dt(G.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,ot,0);m(y)&&l(ot),e.unbindTexture()}A.depthBuffer&&Lt(A)}function kt(A){const y=A.textures;for(let G=0,j=y.length;G<j;G++){const Z=y[G];if(m(Z)){const $=x(A),mt=i.get(Z).__webglTexture;e.bindTexture($,mt),l($),e.unbindTexture()}}}const Ct=[],z=[];function Ie(A){if(A.samples>0){if(Ht(A)===!1){const y=A.textures,G=A.width,j=A.height;let Z=n.COLOR_BUFFER_BIT;const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(A),ot=y.length>1;if(ot)for(let ht=0;ht<y.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ht=0;ht<y.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ht]);const Vt=i.get(y[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Vt,0)}n.blitFramebuffer(0,0,G,j,0,0,G,j,Z,n.NEAREST),c===!0&&(Ct.length=0,z.length=0,Ct.push(n.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ct.push($),z.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ht=0;ht<y.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ht]);const Vt=i.get(y[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Bt(A){return Math.min(r.maxSamples,A.samples)}function Ht(A){const y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function yt(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function Xt(A,y){const G=A.colorSpace,j=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==pr&&G!==Zn&&(Wt.getTransfer(G)===ne?(j!==pn||Z!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=R,this.setTexture2DArray=N,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Nt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Ht}function c0(n,t){function e(i,r=Zn){let s;const a=Wt.getTransfer(r);if(i===Un)return n.UNSIGNED_BYTE;if(i===No)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jl)return n.BYTE;if(i===Zl)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===Uo)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===Br)return n.HALF_FLOAT;if(i===Ql)return n.ALPHA;if(i===th)return n.RGB;if(i===pn)return n.RGBA;if(i===eh)return n.LUMINANCE;if(i===nh)return n.LUMINANCE_ALPHA;if(i===tr)return n.DEPTH_COMPONENT;if(i===ur)return n.DEPTH_STENCIL;if(i===Oo)return n.RED;if(i===zo)return n.RED_INTEGER;if(i===ih)return n.RG;if(i===Bo)return n.RG_INTEGER;if(i===Ho)return n.RGBA_INTEGER;if(i===ws||i===Rs||i===Cs||i===Ls)if(a===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===to||i===eo||i===no)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===to)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===no)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===io||i===ro||i===so)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===io||i===ro)return a===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===so)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ao||i===oo||i===co||i===lo||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===vo||i===Mo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ao)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===co)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ho)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===po)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===go)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_o)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ps||i===So||i===yo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ps)return a===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===So)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===Eo||i===To||i===Ao)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ps)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Eo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===To)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ao)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class l0 extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jn extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),l=this._getHandJoint(h,_);m!==null&&(l.matrix.fromArray(m.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=m.radius),l.visible=m!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;h.inputState.pinching&&d>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const u0=`
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

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Pe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Nn({vertexShader:u0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends mr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,h=null,u=null,f=null,d=null,p=null,g=null;const _=new d0,m=e.getContextAttributes();let l=null,x=null;const M=[],v=[],D=new Yt;let C=null;const w=new nn;w.viewport=new he;const P=new nn;P.viewport=new he;const T=[w,P],S=new l0;let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=M[Y];return et===void 0&&(et=new La,M[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=M[Y];return et===void 0&&(et=new La,M[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=M[Y];return et===void 0&&(et=new La,M[Y]=et),et.getHandSpace()};function L(Y){const et=v.indexOf(Y.inputSource);if(et===-1)return;const dt=M[et];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,h||a),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",R);for(let Y=0;Y<M.length;Y++){const et=v[Y];et!==null&&(v[Y]=null,M[Y].disconnect(et))}b=null,B=null,_.reset(),t.setRenderTarget(l),p=null,d=null,f=null,r=null,x=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(l=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",U),r.addEventListener("inputsourceschange",R),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Li(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,dt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?ur:tr,dt=m.stencil?hr:Ci);const bt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(bt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Li(d.textureWidth,d.textureHeight,{format:pn,type:Un,depthTexture:new Mh(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await r.requestReferenceSpace(o),Kt.setContext(r),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function R(Y){for(let et=0;et<Y.removed.length;et++){const dt=Y.removed[et],at=v.indexOf(dt);at>=0&&(v[at]=null,M[at].disconnect(dt))}for(let et=0;et<Y.added.length;et++){const dt=Y.added[et];let at=v.indexOf(dt);if(at===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=v.length){v.push(dt),at=Lt;break}else if(v[Lt]===null){v[Lt]=dt,at=Lt;break}if(at===-1)break}const bt=M[at];bt&&bt.connect(dt)}}const N=new H,q=new H;function X(Y,et,dt){N.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(dt.matrixWorld);const at=N.distanceTo(q),bt=et.projectionMatrix.elements,Lt=dt.projectionMatrix.elements,Nt=bt[14]/(bt[10]-1),ae=bt[14]/(bt[10]+1),kt=(bt[9]+1)/bt[5],Ct=(bt[9]-1)/bt[5],z=(bt[8]-1)/bt[0],Ie=(Lt[8]+1)/Lt[0],Bt=Nt*z,Ht=Nt*Ie,yt=at/(-z+Ie),Xt=yt*-z;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Xt),Y.translateZ(yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const St=Nt+yt,A=ae+yt,y=Bt-Xt,G=Ht+(at-Xt),j=kt*ae/A*St,Z=Ct*ae/A*St;Y.projectionMatrix.makePerspective(y,G,j,Z,St,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let et=Y.near,dt=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),S.near=P.near=w.near=et,S.far=P.far=w.far=dt,(b!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,B=S.far),w.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,S.layers.mask=w.layers.mask|P.layers.mask;const at=Y.parent,bt=S.cameras;rt(S,at);for(let Lt=0;Lt<bt.length;Lt++)rt(bt[Lt],at);bt.length===2?X(S,w,P):S.projectionMatrix.copy(w.projectionMatrix),lt(Y,S,at)};function lt(Y,et,dt){dt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let pt=null;function wt(Y,et){if(u=et.getViewerPose(h||a),g=et,u!==null){const dt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let at=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,at=!0);for(let Lt=0;Lt<dt.length;Lt++){const Nt=dt[Lt];let ae=null;if(p!==null)ae=p.getViewport(Nt);else{const Ct=f.getViewSubImage(d,Nt);ae=Ct.viewport,Lt===0&&(t.setRenderTargetTextures(x,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(x))}let kt=T[Lt];kt===void 0&&(kt=new nn,kt.layers.enable(Lt),kt.viewport=new he,T[Lt]=kt),kt.matrix.fromArray(Nt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Nt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ae.x,ae.y,ae.width,ae.height),Lt===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),at===!0&&S.cameras.push(kt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Lt=f.getDepthInformation(dt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,r.renderState)}}for(let dt=0;dt<M.length;dt++){const at=v[dt],bt=M[dt];at!==null&&bt!==void 0&&bt.update(at,et,h||a)}pt&&pt(Y,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const Kt=new xh;Kt.setAnimationLoop(wt),this.setAnimationLoop=function(Y){pt=Y},this.dispose=function(){}}}const xi=new Be,m0=new $t;function g0(n,t){function e(m,l){m.matrixAutoUpdate===!0&&m.updateMatrix(),l.value.copy(m.matrix)}function i(m,l){l.color.getRGB(m.fogColor.value,mh(n)),l.isFog?(m.fogNear.value=l.near,m.fogFar.value=l.far):l.isFogExp2&&(m.fogDensity.value=l.density)}function r(m,l,x,M,v){l.isMeshBasicMaterial||l.isMeshLambertMaterial?s(m,l):l.isMeshToonMaterial?(s(m,l),f(m,l)):l.isMeshPhongMaterial?(s(m,l),u(m,l)):l.isMeshStandardMaterial?(s(m,l),d(m,l),l.isMeshPhysicalMaterial&&p(m,l,v)):l.isMeshMatcapMaterial?(s(m,l),g(m,l)):l.isMeshDepthMaterial?s(m,l):l.isMeshDistanceMaterial?(s(m,l),_(m,l)):l.isMeshNormalMaterial?s(m,l):l.isLineBasicMaterial?(a(m,l),l.isLineDashedMaterial&&o(m,l)):l.isPointsMaterial?c(m,l,x,M):l.isSpriteMaterial?h(m,l):l.isShadowMaterial?(m.color.value.copy(l.color),m.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function s(m,l){m.opacity.value=l.opacity,l.color&&m.diffuse.value.copy(l.color),l.emissive&&m.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(m.map.value=l.map,e(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,e(l.alphaMap,m.alphaMapTransform)),l.bumpMap&&(m.bumpMap.value=l.bumpMap,e(l.bumpMap,m.bumpMapTransform),m.bumpScale.value=l.bumpScale,l.side===Le&&(m.bumpScale.value*=-1)),l.normalMap&&(m.normalMap.value=l.normalMap,e(l.normalMap,m.normalMapTransform),m.normalScale.value.copy(l.normalScale),l.side===Le&&m.normalScale.value.negate()),l.displacementMap&&(m.displacementMap.value=l.displacementMap,e(l.displacementMap,m.displacementMapTransform),m.displacementScale.value=l.displacementScale,m.displacementBias.value=l.displacementBias),l.emissiveMap&&(m.emissiveMap.value=l.emissiveMap,e(l.emissiveMap,m.emissiveMapTransform)),l.specularMap&&(m.specularMap.value=l.specularMap,e(l.specularMap,m.specularMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest);const x=t.get(l),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,xi.copy(v),xi.x*=-1,xi.y*=-1,xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(xi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=l.reflectivity,m.ior.value=l.ior,m.refractionRatio.value=l.refractionRatio),l.lightMap&&(m.lightMap.value=l.lightMap,m.lightMapIntensity.value=l.lightMapIntensity,e(l.lightMap,m.lightMapTransform)),l.aoMap&&(m.aoMap.value=l.aoMap,m.aoMapIntensity.value=l.aoMapIntensity,e(l.aoMap,m.aoMapTransform))}function a(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,l.map&&(m.map.value=l.map,e(l.map,m.mapTransform))}function o(m,l){m.dashSize.value=l.dashSize,m.totalSize.value=l.dashSize+l.gapSize,m.scale.value=l.scale}function c(m,l,x,M){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.size.value=l.size*x,m.scale.value=M*.5,l.map&&(m.map.value=l.map,e(l.map,m.uvTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,e(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function h(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.rotation.value=l.rotation,l.map&&(m.map.value=l.map,e(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,e(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function u(m,l){m.specular.value.copy(l.specular),m.shininess.value=Math.max(l.shininess,1e-4)}function f(m,l){l.gradientMap&&(m.gradientMap.value=l.gradientMap)}function d(m,l){m.metalness.value=l.metalness,l.metalnessMap&&(m.metalnessMap.value=l.metalnessMap,e(l.metalnessMap,m.metalnessMapTransform)),m.roughness.value=l.roughness,l.roughnessMap&&(m.roughnessMap.value=l.roughnessMap,e(l.roughnessMap,m.roughnessMapTransform)),l.envMap&&(m.envMapIntensity.value=l.envMapIntensity)}function p(m,l,x){m.ior.value=l.ior,l.sheen>0&&(m.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),m.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(m.sheenColorMap.value=l.sheenColorMap,e(l.sheenColorMap,m.sheenColorMapTransform)),l.sheenRoughnessMap&&(m.sheenRoughnessMap.value=l.sheenRoughnessMap,e(l.sheenRoughnessMap,m.sheenRoughnessMapTransform))),l.clearcoat>0&&(m.clearcoat.value=l.clearcoat,m.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(m.clearcoatMap.value=l.clearcoatMap,e(l.clearcoatMap,m.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,e(l.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(m.clearcoatNormalMap.value=l.clearcoatNormalMap,e(l.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Le&&m.clearcoatNormalScale.value.negate())),l.dispersion>0&&(m.dispersion.value=l.dispersion),l.iridescence>0&&(m.iridescence.value=l.iridescence,m.iridescenceIOR.value=l.iridescenceIOR,m.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(m.iridescenceMap.value=l.iridescenceMap,e(l.iridescenceMap,m.iridescenceMapTransform)),l.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=l.iridescenceThicknessMap,e(l.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),l.transmission>0&&(m.transmission.value=l.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),l.transmissionMap&&(m.transmissionMap.value=l.transmissionMap,e(l.transmissionMap,m.transmissionMapTransform)),m.thickness.value=l.thickness,l.thicknessMap&&(m.thicknessMap.value=l.thicknessMap,e(l.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=l.attenuationDistance,m.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(m.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(m.anisotropyMap.value=l.anisotropyMap,e(l.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=l.specularIntensity,m.specularColor.value.copy(l.specularColor),l.specularColorMap&&(m.specularColorMap.value=l.specularColorMap,e(l.specularColorMap,m.specularColorMapTransform)),l.specularIntensityMap&&(m.specularIntensityMap.value=l.specularIntensityMap,e(l.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,l){l.matcap&&(m.matcap.value=l.matcap)}function _(m,l){const x=t.get(l).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;i.uniformBlockBinding(x,v)}function h(x,M){let v=r[x.id];v===void 0&&(g(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",m));const D=M.program;i.updateUBOMapping(x,D);const C=t.render.frame;s[x.id]!==C&&(d(x),s[x.id]=C)}function u(x){const M=f();x.__bindingPointIndex=M;const v=n.createBuffer(),D=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=r[x.id],v=x.uniforms,D=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,w=v.length;C<w;C++){const P=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,S=P.length;T<S;T++){const b=P[T];if(p(b,C,T,D)===!0){const B=b.__offset,L=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let R=0;R<L.length;R++){const N=L[R],q=_(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,B+U,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,v,D){const C=x.value,w=M+"_"+v;if(D[w]===void 0)return typeof C=="number"||typeof C=="boolean"?D[w]=C:D[w]=C.clone(),!0;{const P=D[w];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return D[w]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(x){const M=x.uniforms;let v=0;const D=16;for(let w=0,P=M.length;w<P;w++){const T=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,b=T.length;S<b;S++){const B=T[S],L=Array.isArray(B.value)?B.value:[B.value];for(let U=0,R=L.length;U<R;U++){const N=L[U],q=_(N),X=v%D,rt=X%q.boundary,lt=X+rt;v+=rt,lt!==0&&D-lt<q.storage&&(v+=D-lt),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=q.storage}}}const C=v%D;return C>0&&(v+=D-C),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function l(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:h,dispose:l}}class x0{constructor(t={}){const{canvas:e=af(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,l=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=ii,this.toneMappingExposure=1;const v=this;let D=!1,C=0,w=0,P=null,T=-1,S=null;const b=new he,B=new he;let L=null;const U=new At(0);let R=0,N=e.width,q=e.height,X=1,rt=null,lt=null;const pt=new he(0,0,N,q),wt=new he(0,0,N,q);let Kt=!1;const Y=new Go;let et=!1,dt=!1;const at=new $t,bt=new $t,Lt=new H,Nt=new he,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Ct(){return P===null?X:1}let z=i;function Ie(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",tt,!1),z===null){const F="webgl2";if(z=Ie(F,E),z===null)throw Ie(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Bt,Ht,yt,Xt,St,A,y,G,j,Z,$,mt,ot,ht,Vt,J,ft,Tt,Rt,ut,Gt,Ut,Pt,I;function Q(){Bt=new Em(z),Bt.init(),Ut=new c0(z,Bt),Ht=new _m(z,Bt,t,Ut),yt=new s0(z,Bt),Ht.reverseDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),Xt=new bm(z),St=new Wg,A=new o0(z,Bt,yt,St,Ht,Ut,Xt),y=new vm(v),G=new ym(v),j=new If(z),Pt=new mm(z,j),Z=new Tm(z,j,Xt,Pt),$=new Rm(z,Z,j,Xt),Rt=new wm(z,Ht,A),J=new xm(St),mt=new Vg(v,y,G,Bt,Ht,Pt,J),ot=new g0(v,St),ht=new qg,Vt=new Jg(Bt),Tt=new pm(v,y,G,yt,$,p,c),ft=new i0(v,$,Ht),I=new _0(z,Xt,Ht,yt),ut=new gm(z,Bt,Xt),Gt=new Am(z,Bt,Xt),Xt.programs=mt.programs,v.capabilities=Ht,v.extensions=Bt,v.properties=St,v.renderLists=ht,v.shadowMap=ft,v.state=yt,v.info=Xt}Q();const k=new p0(v,z);this.xr=k,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(N,q,!1))},this.getSize=function(E){return E.set(N,q)},this.setSize=function(E,F,V=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,q=F,e.width=Math.floor(E*X),e.height=Math.floor(F*X),V===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(N*X,q*X).floor()},this.setDrawingBufferSize=function(E,F,V){N=E,q=F,X=V,e.width=Math.floor(E*V),e.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,F,V,W){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,F,V,W),yt.viewport(b.copy(pt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(wt)},this.setScissor=function(E,F,V,W){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,F,V,W),yt.scissor(B.copy(wt).multiplyScalar(X).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){yt.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(E=!0,F=!0,V=!0){let W=0;if(E){let O=!1;if(P!==null){const nt=P.texture.format;O=nt===Ho||nt===Bo||nt===zo}if(O){const nt=P.texture.type,ct=nt===Un||nt===Ci||nt===Ur||nt===hr||nt===No||nt===Fo,gt=Tt.getClearColor(),_t=Tt.getClearAlpha(),Dt=gt.r,Ft=gt.g,xt=gt.b;ct?(g[0]=Dt,g[1]=Ft,g[2]=xt,g[3]=_t,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=Dt,_[1]=Ft,_[2]=xt,_[3]=_t,z.clearBufferiv(z.COLOR,0,_))}else W|=z.COLOR_BUFFER_BIT}F&&(W|=z.DEPTH_BUFFER_BIT),V&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),ht.dispose(),Vt.dispose(),St.dispose(),y.dispose(),G.dispose(),$.dispose(),Pt.dispose(),I.dispose(),mt.dispose(),k.dispose(),k.removeEventListener("sessionstart",Vr),k.removeEventListener("sessionend",Wr),En.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Xt.autoReset,F=ft.enabled,V=ft.autoUpdate,W=ft.needsUpdate,O=ft.type;Q(),Xt.autoReset=E,ft.enabled=F,ft.autoUpdate=V,ft.needsUpdate=W,ft.type=O}function tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Et(E){const F=E.target;F.removeEventListener("dispose",Et),jt(F)}function jt(E){Me(E),St.remove(E)}function Me(E){const F=St.get(E).programs;F!==void 0&&(F.forEach(function(V){mt.releaseProgram(V)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,W,O,nt){F===null&&(F=ae);const ct=O.isMesh&&O.matrixWorld.determinant()<0,gt=pu(E,F,V,W,O);yt.setMaterial(W,ct);let _t=V.index,Dt=1;if(W.wireframe===!0){if(_t=Z.getWireframeAttribute(V),_t===void 0)return;Dt=2}const Ft=V.drawRange,xt=V.attributes.position;let qt=Ft.start*Dt,se=(Ft.start+Ft.count)*Dt;nt!==null&&(qt=Math.max(qt,nt.start*Dt),se=Math.min(se,(nt.start+nt.count)*Dt)),_t!==null?(qt=Math.max(qt,0),se=Math.min(se,_t.count)):xt!=null&&(qt=Math.max(qt,0),se=Math.min(se,xt.count));const oe=se-qt;if(oe<0||oe===1/0)return;Pt.setup(O,W,gt,V,_t);let Ne,Qt=ut;if(_t!==null&&(Ne=j.get(_t),Qt=Gt,Qt.setIndex(Ne)),O.isMesh)W.wireframe===!0?(yt.setLineWidth(W.wireframeLinewidth*Ct()),Qt.setMode(z.LINES)):Qt.setMode(z.TRIANGLES);else if(O.isLine){let Mt=W.linewidth;Mt===void 0&&(Mt=1),yt.setLineWidth(Mt*Ct()),O.isLineSegments?Qt.setMode(z.LINES):O.isLineLoop?Qt.setMode(z.LINE_LOOP):Qt.setMode(z.LINE_STRIP)}else O.isPoints?Qt.setMode(z.POINTS):O.isSprite&&Qt.setMode(z.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Mt=O._multiDrawStarts,Tn=O._multiDrawCounts,te=O._multiDrawCount,an=_t?j.get(_t).bytesPerElement:1,Ii=St.get(W).currentProgram.getUniforms();for(let ke=0;ke<te;ke++)Ii.setValue(z,"_gl_DrawID",ke),Qt.render(Mt[ke]/an,Tn[ke])}else if(O.isInstancedMesh)Qt.renderInstances(qt,oe,O.count);else if(V.isInstancedBufferGeometry){const Mt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Tn=Math.min(V.instanceCount,Mt);Qt.renderInstances(qt,oe,Tn)}else Qt.render(qt,oe)};function Zt(E,F,V){E.transparent===!0&&E.side===fn&&E.forceSinglePass===!1?(E.side=Le,E.needsUpdate=!0,Xr(E,F,V),E.side=oi,E.needsUpdate=!0,Xr(E,F,V),E.side=fn):Xr(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),l=Vt.get(V),l.init(F),M.push(l),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(l.pushLight(O),O.castShadow&&l.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(l.pushLight(O),O.castShadow&&l.pushShadow(O))}),l.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const nt=O.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const gt=nt[ct];Zt(gt,V,O),W.add(gt)}else Zt(nt,V,O),W.add(nt)}),M.pop(),l=null,W},this.compileAsync=function(E,F,V=null){const W=this.compile(E,F,V);return new Promise(O=>{function nt(){if(W.forEach(function(ct){St.get(ct).currentProgram.isReady()&&W.delete(ct)}),W.size===0){O(E);return}setTimeout(nt,10)}Bt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ge=null;function Ue(E){Ge&&Ge(E)}function Vr(){En.stop()}function Wr(){En.start()}const En=new xh;En.setAnimationLoop(Ue),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(E){Ge=E,k.setAnimationLoop(E),E===null?En.stop():En.start()},k.addEventListener("sessionstart",Vr),k.addEventListener("sessionend",Wr),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(F),F=k.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,P),l=Vt.get(E,M.length),l.init(F),M.push(l),bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(bt),dt=this.localClippingEnabled,et=J.init(this.clippingPlanes,dt),m=ht.get(E,x.length),m.init(),x.push(m),k.enabled===!0&&k.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Hn(nt,F,-1/0,v.sortObjects)}Hn(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,lt),kt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,kt&&Tt.addToRenderList(m,E),this.info.render.frame++,et===!0&&J.beginShadows();const V=l.state.shadowsArray;ft.render(V,E,F),et===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(l.setupLights(),F.isArrayCamera){const nt=F.cameras;if(O.length>0)for(let ct=0,gt=nt.length;ct<gt;ct++){const _t=nt[ct];fi(W,O,E,_t)}kt&&Tt.render(E);for(let ct=0,gt=nt.length;ct<gt;ct++){const _t=nt[ct];ui(m,E,_t,_t.viewport)}}else O.length>0&&fi(W,O,E,F),kt&&Tt.render(E),ui(m,E,F);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,F),Pt.resetDefaultState(),T=-1,S=null,M.pop(),M.length>0?(l=M[M.length-1],et===!0&&J.setGlobalState(v.clippingPlanes,l.state.camera)):l=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Hn(E,F,V,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)l.pushLight(E),E.castShadow&&l.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){W&&Nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(bt);const ct=$.update(E),gt=E.material;gt.visible&&m.push(E,ct,gt,V,Nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const ct=$.update(E),gt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Nt.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Nt.copy(ct.boundingSphere.center)),Nt.applyMatrix4(E.matrixWorld).applyMatrix4(bt)),Array.isArray(gt)){const _t=ct.groups;for(let Dt=0,Ft=_t.length;Dt<Ft;Dt++){const xt=_t[Dt],qt=gt[xt.materialIndex];qt&&qt.visible&&m.push(E,ct,qt,V,Nt.z,xt)}}else gt.visible&&m.push(E,ct,gt,V,Nt.z,null)}}const nt=E.children;for(let ct=0,gt=nt.length;ct<gt;ct++)Hn(nt[ct],F,V,W)}function ui(E,F,V,W){const O=E.opaque,nt=E.transmissive,ct=E.transparent;l.setupLightsView(V),et===!0&&J.setGlobalState(v.clippingPlanes,V),W&&yt.viewport(b.copy(W)),O.length>0&&we(O,F,V),nt.length>0&&we(nt,F,V),ct.length>0&&we(ct,F,V),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function fi(E,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[W.id]===void 0&&(l.state.transmissionRenderTarget[W.id]=new Li(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Br:Un,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const nt=l.state.transmissionRenderTarget[W.id],ct=W.viewport||b;nt.setSize(ct.z,ct.w);const gt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(U),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear(),kt&&Tt.render(V);const _t=v.toneMapping;v.toneMapping=ii;const Dt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),l.setupLightsView(W),et===!0&&J.setGlobalState(v.clippingPlanes,W),we(E,V,W),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let xt=0,qt=F.length;xt<qt;xt++){const se=F[xt],oe=se.object,Ne=se.geometry,Qt=se.material,Mt=se.group;if(Qt.side===fn&&oe.layers.test(W.layers)){const Tn=Qt.side;Qt.side=Le,Qt.needsUpdate=!0,Gn(oe,V,W,Ne,Qt,Mt),Qt.side=Tn,Qt.needsUpdate=!0,Ft=!0}}Ft===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}v.setRenderTarget(gt),v.setClearColor(U,R),Dt!==void 0&&(W.viewport=Dt),v.toneMapping=_t}function we(E,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,nt=E.length;O<nt;O++){const ct=E[O],gt=ct.object,_t=ct.geometry,Dt=W===null?ct.material:W,Ft=ct.group;gt.layers.test(V.layers)&&Gn(gt,F,V,_t,Dt,Ft)}}function Gn(E,F,V,W,O,nt){E.onBeforeRender(v,F,V,W,O,nt),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,F,V,W,E,nt),O.transparent===!0&&O.side===fn&&O.forceSinglePass===!1?(O.side=Le,O.needsUpdate=!0,v.renderBufferDirect(V,F,W,O,E,nt),O.side=oi,O.needsUpdate=!0,v.renderBufferDirect(V,F,W,O,E,nt),O.side=fn):v.renderBufferDirect(V,F,W,O,E,nt),E.onAfterRender(v,F,V,W,O,nt)}function Xr(E,F,V){F.isScene!==!0&&(F=ae);const W=St.get(E),O=l.state.lights,nt=l.state.shadowsArray,ct=O.state.version,gt=mt.getParameters(E,O.state,nt,F,V),_t=mt.getProgramCacheKey(gt);let Dt=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?G:y).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Et),Dt=new Map,W.programs=Dt);let Ft=Dt.get(_t);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===ct)return rc(E,gt),Ft}else gt.uniforms=mt.getUniforms(E),E.onBeforeCompile(gt,v),Ft=mt.acquireProgram(gt,_t),Dt.set(_t,Ft),W.uniforms=gt.uniforms;const xt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xt.clippingPlanes=J.uniform),rc(E,gt),W.needsLights=gu(E),W.lightsStateVersion=ct,W.needsLights&&(xt.ambientLightColor.value=O.state.ambient,xt.lightProbe.value=O.state.probe,xt.directionalLights.value=O.state.directional,xt.directionalLightShadows.value=O.state.directionalShadow,xt.spotLights.value=O.state.spot,xt.spotLightShadows.value=O.state.spotShadow,xt.rectAreaLights.value=O.state.rectArea,xt.ltc_1.value=O.state.rectAreaLTC1,xt.ltc_2.value=O.state.rectAreaLTC2,xt.pointLights.value=O.state.point,xt.pointLightShadows.value=O.state.pointShadow,xt.hemisphereLights.value=O.state.hemi,xt.directionalShadowMap.value=O.state.directionalShadowMap,xt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,xt.spotShadowMap.value=O.state.spotShadowMap,xt.spotLightMatrix.value=O.state.spotLightMatrix,xt.spotLightMap.value=O.state.spotLightMap,xt.pointShadowMap.value=O.state.pointShadowMap,xt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function ic(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ds.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function rc(E,F){const V=St.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function pu(E,F,V,W,O){F.isScene!==!0&&(F=ae),A.resetTextureUnits();const nt=F.fog,ct=W.isMeshStandardMaterial?F.environment:null,gt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:pr,_t=(W.isMeshStandardMaterial?G:y).get(W.envMap||ct),Dt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),xt=!!V.morphAttributes.position,qt=!!V.morphAttributes.normal,se=!!V.morphAttributes.color;let oe=ii;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(oe=v.toneMapping);const Ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qt=Ne!==void 0?Ne.length:0,Mt=St.get(W),Tn=l.state.lights;if(et===!0&&(dt===!0||E!==S)){const Ze=E===S&&W.id===T;J.setState(W,E,Ze)}let te=!1;W.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Tn.state.version||Mt.outputColorSpace!==gt||O.isBatchedMesh&&Mt.batching===!1||!O.isBatchedMesh&&Mt.batching===!0||O.isBatchedMesh&&Mt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Mt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Mt.instancing===!1||!O.isInstancedMesh&&Mt.instancing===!0||O.isSkinnedMesh&&Mt.skinning===!1||!O.isSkinnedMesh&&Mt.skinning===!0||O.isInstancedMesh&&Mt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Mt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Mt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Mt.instancingMorph===!1&&O.morphTexture!==null||Mt.envMap!==_t||W.fog===!0&&Mt.fog!==nt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==J.numPlanes||Mt.numIntersection!==J.numIntersection)||Mt.vertexAlphas!==Dt||Mt.vertexTangents!==Ft||Mt.morphTargets!==xt||Mt.morphNormals!==qt||Mt.morphColors!==se||Mt.toneMapping!==oe||Mt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Mt.__version=W.version);let an=Mt.currentProgram;te===!0&&(an=Xr(W,F,O));let Ii=!1,ke=!1,vr=!1;const ce=an.getUniforms(),gn=Mt.uniforms;if(yt.useProgram(an.program)&&(Ii=!0,ke=!0,vr=!0),W.id!==T&&(T=W.id,ke=!0),Ii||S!==E){yt.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),cf(at),lf(at),ce.setValue(z,"projectionMatrix",at)):ce.setValue(z,"projectionMatrix",E.projectionMatrix),ce.setValue(z,"viewMatrix",E.matrixWorldInverse);const kn=ce.map.cameraPosition;kn!==void 0&&kn.setValue(z,Lt.setFromMatrixPosition(E.matrixWorld)),Ht.logarithmicDepthBuffer&&ce.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ce.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,ke=!0,vr=!0)}if(O.isSkinnedMesh){ce.setOptional(z,O,"bindMatrix"),ce.setOptional(z,O,"bindMatrixInverse");const Ze=O.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ce.setValue(z,"boneTexture",Ze.boneTexture,A))}O.isBatchedMesh&&(ce.setOptional(z,O,"batchingTexture"),ce.setValue(z,"batchingTexture",O._matricesTexture,A),ce.setOptional(z,O,"batchingIdTexture"),ce.setValue(z,"batchingIdTexture",O._indirectTexture,A),ce.setOptional(z,O,"batchingColorTexture"),O._colorsTexture!==null&&ce.setValue(z,"batchingColorTexture",O._colorsTexture,A));const Mr=V.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&Rt.update(O,V,an),(ke||Mt.receiveShadow!==O.receiveShadow)&&(Mt.receiveShadow=O.receiveShadow,ce.setValue(z,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gn.envMap.value=_t,gn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(gn.envMapIntensity.value=F.environmentIntensity),ke&&(ce.setValue(z,"toneMappingExposure",v.toneMappingExposure),Mt.needsLights&&mu(gn,vr),nt&&W.fog===!0&&ot.refreshFogUniforms(gn,nt),ot.refreshMaterialUniforms(gn,W,X,q,l.state.transmissionRenderTarget[E.id]),Ds.upload(z,ic(Mt),gn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ds.upload(z,ic(Mt),gn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ce.setValue(z,"center",O.center),ce.setValue(z,"modelViewMatrix",O.modelViewMatrix),ce.setValue(z,"normalMatrix",O.normalMatrix),ce.setValue(z,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ze=W.uniformsGroups;for(let kn=0,Vn=Ze.length;kn<Vn;kn++){const sc=Ze[kn];I.update(sc,an),I.bind(sc,an)}}return an}function mu(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function gu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,V){St.get(E.texture).__webglTexture=F,St.get(E.depthTexture).__webglTexture=V;const W=St.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const V=St.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){P=E,C=F,w=V;let W=!0,O=null,nt=!1,ct=!1;if(E){const _t=St.get(E);if(_t.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(z.FRAMEBUFFER,null),W=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(_t.__hasExternalTextures)A.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const xt=E.depthTexture;if(_t.__boundDepthTexture!==xt){if(xt!==null&&St.has(xt)&&(E.width!==xt.image.width||E.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ct=!0);const Ft=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?O=Ft[F][V]:O=Ft[F],nt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?O=St.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[V]:O=Ft,b.copy(E.viewport),B.copy(E.scissor),L=E.scissorTest}else b.copy(pt).multiplyScalar(X).floor(),B.copy(wt).multiplyScalar(X).floor(),L=Kt;if(yt.bindFramebuffer(z.FRAMEBUFFER,O)&&W&&yt.drawBuffers(E,O),yt.viewport(b),yt.scissor(B),yt.setScissorTest(L),nt){const _t=St.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,V)}else if(ct){const _t=St.get(E.texture),Dt=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,_t.__webglTexture,V||0,Dt)}T=-1},this.readRenderTargetPixels=function(E,F,V,W,O,nt,ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){yt.bindFramebuffer(z.FRAMEBUFFER,gt);try{const _t=E.texture,Dt=_t.format,Ft=_t.type;if(!Ht.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O&&z.readPixels(F,V,W,O,Ut.convert(Dt),Ut.convert(Ft),nt)}finally{const _t=P!==null?St.get(P).__webglFramebuffer:null;yt.bindFramebuffer(z.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,W,O,nt,ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){const _t=E.texture,Dt=_t.format,Ft=_t.type;if(!Ht.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O){yt.bindFramebuffer(z.FRAMEBUFFER,gt);const xt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,xt),z.bufferData(z.PIXEL_PACK_BUFFER,nt.byteLength,z.STREAM_READ),z.readPixels(F,V,W,O,Ut.convert(Dt),Ut.convert(Ft),0);const qt=P!==null?St.get(P).__webglFramebuffer:null;yt.bindFramebuffer(z.FRAMEBUFFER,qt);const se=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await of(z,se,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,xt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,nt),z.deleteBuffer(xt),z.deleteSync(se),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,V=0){E.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(E.image.width*W),nt=Math.floor(E.image.height*W),ct=F!==null?F.x:0,gt=F!==null?F.y:0;A.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,ct,gt,O,nt),yt.unbindTexture()},this.copyTextureToTexture=function(E,F,V=null,W=null,O=0){E.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let nt,ct,gt,_t,Dt,Ft,xt,qt,se;const oe=E.isCompressedTexture?E.mipmaps[O]:E.image;V!==null?(nt=V.max.x-V.min.x,ct=V.max.y-V.min.y,gt=V.isBox3?V.max.z-V.min.z:1,_t=V.min.x,Dt=V.min.y,Ft=V.isBox3?V.min.z:0):(nt=oe.width,ct=oe.height,gt=oe.depth||1,_t=0,Dt=0,Ft=0),W!==null?(xt=W.x,qt=W.y,se=W.z):(xt=0,qt=0,se=0);const Ne=Ut.convert(F.format),Qt=Ut.convert(F.type);let Mt;F.isData3DTexture?(A.setTexture3D(F,0),Mt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Mt=z.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Mt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);const Tn=z.getParameter(z.UNPACK_ROW_LENGTH),te=z.getParameter(z.UNPACK_IMAGE_HEIGHT),an=z.getParameter(z.UNPACK_SKIP_PIXELS),Ii=z.getParameter(z.UNPACK_SKIP_ROWS),ke=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,oe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_t),z.pixelStorei(z.UNPACK_SKIP_ROWS,Dt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ft);const vr=E.isDataArrayTexture||E.isData3DTexture,ce=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const gn=St.get(E),Mr=St.get(F),Ze=St.get(gn.__renderTarget),kn=St.get(Mr.__renderTarget);yt.bindFramebuffer(z.READ_FRAMEBUFFER,Ze.__webglFramebuffer),yt.bindFramebuffer(z.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Vn=0;Vn<gt;Vn++)vr&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.get(E).__webglTexture,O,Ft+Vn),E.isDepthTexture?(ce&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.get(F).__webglTexture,O,se+Vn),z.blitFramebuffer(_t,Dt,nt,ct,xt,qt,nt,ct,z.DEPTH_BUFFER_BIT,z.NEAREST)):ce?z.copyTexSubImage3D(Mt,O,xt,qt,se+Vn,_t,Dt,nt,ct):z.copyTexSubImage2D(Mt,O,xt,qt,se+Vn,_t,Dt,nt,ct);yt.bindFramebuffer(z.READ_FRAMEBUFFER,null),yt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ce?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Mt,O,xt,qt,se,nt,ct,gt,Ne,Qt,oe.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Mt,O,xt,qt,se,nt,ct,gt,Ne,oe.data):z.texSubImage3D(Mt,O,xt,qt,se,nt,ct,gt,Ne,Qt,oe):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,xt,qt,nt,ct,Ne,Qt,oe.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,xt,qt,oe.width,oe.height,Ne,oe.data):z.texSubImage2D(z.TEXTURE_2D,O,xt,qt,nt,ct,Ne,Qt,oe);z.pixelStorei(z.UNPACK_ROW_LENGTH,Tn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,te),z.pixelStorei(z.UNPACK_SKIP_PIXELS,an),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ii),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ke),O===0&&F.generateMipmaps&&z.generateMipmap(Mt),yt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V=null,W=null,O=0){return E.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,V,W,O)},this.initRenderTarget=function(E){St.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){C=0,w=0,P=null,yt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class Vo{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=i}clone(){return new Vo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class v0 extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class M0 extends Pe{constructor(t=null,e=1,i=1,r,s,a,o,c,h=Ke,u=Ke,f,d){super(null,a,o,c,h,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl extends De{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new $t,sl=new $t,ds=[],al=new Di,S0=new $t,br=new le,wr=new gr;class Gr extends le{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,S0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$i),al.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(al)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$i),wr.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(i),t.ray.intersectsSphere(wr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,$i),sl.multiplyMatrices(i,$i),br.matrixWorld=sl,br.raycast(t,ds);for(let a=0,o=ds.length;a<o;a++){const c=ds[a];c.instanceId=s,c.object=this,e.push(c)}ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new M0(new Float32Array(r*this.count),r,this.count,Oo,Mn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ah extends _r{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ol=new $t,Ro=new hh,ps=new gr,ms=new H;class y0 extends Ee{constructor(t=new He,e=new Ah){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(r),ps.radius+=s,t.ray.intersectsSphere(ps)===!1)return;ol.copy(r).invert(),Ro.copy(t.ray).applyMatrix4(ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=h.getX(g);ms.fromBufferAttribute(f,m),cl(ms,m,c,r,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,_=p;g<_;g++)ms.fromBufferAttribute(f,g),cl(ms,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cl(n,t,e,i,r,s,a){const o=Ro.distanceSqToPoint(n);if(o<e){const c=new H;Ro.closestPointToPoint(n,c),c.applyMatrix4(i);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class $s extends He{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],h=new H,u=new Yt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const p=i+f/e*r;h.x=t*Math.cos(p),h.y=t*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ci extends He{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const h=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let l=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2));function x(){const v=new H,D=new H;let C=0;const w=(e-t)/i;for(let P=0;P<=s;P++){const T=[],S=P/s,b=S*(e-t)+t;for(let B=0;B<=r;B++){const L=B/r,U=L*c+o,R=Math.sin(U),N=Math.cos(U);D.x=b*R,D.y=-S*i+m,D.z=b*N,f.push(D.x,D.y,D.z),v.set(R,w,N).normalize(),d.push(v.x,v.y,v.z),p.push(L,1-S),T.push(g++)}_.push(T)}for(let P=0;P<r;P++)for(let T=0;T<s;T++){const S=_[T][P],b=_[T+1][P],B=_[T+1][P+1],L=_[T][P+1];(t>0||T!==0)&&(u.push(S,b,L),C+=3),(e>0||T!==s-1)&&(u.push(b,B,L),C+=3)}h.addGroup(l,C,0),l+=C}function M(v){const D=g,C=new Yt,w=new H;let P=0;const T=v===!0?t:e,S=v===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const b=g;for(let B=0;B<=r;B++){const U=B/r*c+o,R=Math.cos(U),N=Math.sin(U);w.x=T*N,w.y=m*S,w.z=T*R,f.push(w.x,w.y,w.z),d.push(0,S,0),C.x=R*.5+.5,C.y=N*.5*S+.5,p.push(C.x,C.y),g++}for(let B=0;B<r;B++){const L=D+B,U=b+B;v===!0?u.push(U,U+1,L):u.push(U+1,U,L),P+=3}h.addGroup(l,P,v===!0?1:2),l+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wo extends ci{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Wo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xo extends He{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let h=0;const u=[],f=new H,d=new H,p=[],g=[],_=[],m=[];for(let l=0;l<=i;l++){const x=[],M=l/i;let v=0;l===0&&a===0?v=.5/e:l===i&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const C=D/e;f.x=-t*Math.cos(r+C*s)*Math.sin(a+M*o),f.y=t*Math.cos(a+M*o),f.z=t*Math.sin(r+C*s)*Math.sin(a+M*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-M),x.push(h++)}u.push(x)}for(let l=0;l<i;l++)for(let x=0;x<e;x++){const M=u[l][x+1],v=u[l][x],D=u[l+1][x],C=u[l+1][x+1];(l!==0||a>0)&&p.push(M,v,C),(l!==i-1||c<Math.PI)&&p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qo extends He{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],h=[],u=new H,f=new H,d=new H;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),h.push(g/r),h.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,l=(r+1)*(p-1)+g,x=(r+1)*p+g;a.push(_,m,x),a.push(m,l,x)}this.setIndex(a),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class mn extends _r{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bh extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class E0 extends bh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Pa=new $t,ll=new H,hl=new H;class T0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hl),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class A0 extends T0{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b0 extends bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new A0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);const w0={driftMaxR:130,sweeperMaxR:175,driftEntryAdvance:30,driftExitRunoff:40,sweeperEntryAdvance:18,sweeperExitRunoff:22,decreasingInsideLen:30,startOpen:200,finishOpen:150,crestHalfGap:55,mergeGap:12,maxSpans:64};function ul(n,t,e){return Math.max(t,Math.min(e,n))}function nr(n){return typeof n=="number"&&isFinite(n)}function R0(n){return n==="L"?1:-1}function C0(n){return n==="L"?-1:1}function L0(n){return!(typeof n!="object"||n===null||n.dir!=="L"&&n.dir!=="R"||!nr(n.startS)||!nr(n.endS)||!nr(n.medR)||n.medR<=0||n.endS-n.startS<30||n.endS<=0)}function P0(n,t,e=[],i=w0){const r=i;if(!nr(n)||n<500||n>1e4)return{spans:[],length:0};const s=r.startOpen,a=n-r.finishOpen;if(!(a>s+60))return{spans:[],length:n};const o=[],c=[];for(const f of e)nr(f)&&f>0&&f<n&&c.push(f);c.sort((f,d)=>f-d);const h=(f,d,p)=>{let g=ul(f,s,a),_=ul(d,s,a);if(_-g>=20){for(const m of c){const l=m-r.crestHalfGap,x=m+r.crestHalfGap;if(_<=l||g>=x)continue;const M=l-g,v=_-x;if(M>=20&&v>=20?(o.push({aS:g,bS:l,side:p}),g=x):M>=v?_=Math.min(_,l):g=Math.max(g,x),!(_-g>=20))return}o.push({aS:g,bS:_,side:p})}};if(Array.isArray(t))for(const f of t){if(!L0(f))continue;const d=R0(f.dir);if(f.medR<=r.driftMaxR){if(h(f.startS-r.driftEntryAdvance,f.endS+r.driftExitRunoff,d),f.decreasing===!0){const p=(f.startS+f.endS)/2;h(p-r.decreasingInsideLen/2,p+r.decreasingInsideLen/2,C0(f.dir))}}else f.medR<=r.sweeperMaxR&&h(f.startS-r.sweeperEntryAdvance,f.endS+r.sweeperExitRunoff,d)}o.sort((f,d)=>f.side-d.side||f.aS-d.aS);const u=[];for(const f of o){const d=u[u.length-1];d&&d.side===f.side&&f.aS-d.bS<=r.mergeGap?f.bS>d.bS&&(d.bS=f.bS):u.push({aS:f.aS,bS:f.bS,side:f.side})}u.sort((f,d)=>f.aS-d.aS||f.side-d.side),u.length>r.maxSpans&&(u.sort((f,d)=>d.bS-d.aS-(f.bS-f.aS)||f.aS-d.aS),u.length=r.maxSpans,u.sort((f,d)=>f.aS-d.aS||f.side-d.side));for(const f of u)f.aS=Math.round(f.aS*10)/10,f.bS=Math.round(f.bS*10)/10;return{spans:u,length:n}}function Yo(n,t,e){if(!n||!nr(t)||e!==1&&e!==-1)return!1;const i=n.spans;for(let r=0;r<i.length;r++){const s=i[r];if(s.side===e){if(t<s.aS){if(s.aS>t){let a=!1;for(let o=r+1;o<i.length;o++)if(i[o].side===e&&i[o].aS<s.aS){a=!0;break}if(!a)return!1}continue}if(t<=s.bS)return!0}}return!1}const D0=3,I0=1,wh=3,U0=1,N0=120,Rh=4e3,Ch=2,ir=5e3,Hs=36e5,Co=1,F0=8192,$o=1650;function Da(n,t,e){return n+(t-n)*e}function O0(n){return Math.atan2(Math.sin(n),Math.cos(n))}function Ko(n){return typeof n=="number"&&isFinite(n)}function z0(n){return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function B0(n){for(n=n.replace(/-/g,"+").replace(/_/g,"/");n.length%4;)n+="=";return atob(n)}function fl(n){return[Math.round(n[0]*2)/2,Math.round(n[1]*2)/2,Math.round(n[2]*2)/2,Math.round(n[3]*100)/100]}function H0(n,t){const e=Math.max(1,Math.floor(t)),i=[],r=[];for(let a=0;a<n.p.length;a+=e)i.push(fl(n.p[a])),r.push(Math.round(n.ts[a]));const s=n.p.length-1;return s%e!==0&&s>=0&&(i.push(fl(n.p[s])),r.push(Math.round(n.ts[s]))),{p:i,ts:r}}function Lh(n,t,e=$o,i){let r=1,s="";for(;;){const a=H0(n,r),o=i?{v:wh,t:Math.round(t),p:a.p,ts:a.ts,track:{...i}}:{v:2,t:Math.round(t),p:a.p,ts:a.ts};if(s=z0(JSON.stringify(o)),s.length<e||n.p.length<40||r>=16)break;r*=2}return s}function dl(n,t){let e=0,i=1;for(let r=0;r<5;r++){if(t>=n.length)return null;const s=n[t++];if(e+=(s&127)*i,!(s&128))return[e,t];i*=128}return null}function G0(n){if(n.length<2||n.charCodeAt(0)!==67||n.charCodeAt(1)!==49)return null;const t=new Uint8Array(n.length);for(let _=0;_<n.length;_++)t[_]=n.charCodeAt(_)&255;let e=2;const i=dl(t,e);if(!i)return null;e=i[1];const r=dl(t,e);if(!r)return null;e=r[1];const s=i[0],a=r[0];if(s<0||s>Hs||a<Ch||a>Rh)return null;const o=()=>{if(e+2>t.length)return null;let _=t[e]+t[e+1]*256;return e+=2,_>=32768?_-65536:_},c=[],h=[];let u=0,f=0,d=0,p=0,g=0;for(let _=0;_<a;_++){const m=o(),l=o(),x=o(),M=o();if(m===null||l===null||x===null||M===null)return null;if(_===0)u=m,f=l,d=x,p=M,g=0;else{if(e+2>t.length)return null;const w=t[e]+t[e+1]*256;if(e+=2,u+=m,f+=l,d+=x,p+=M,g+=w,g<0||g>Hs)return null}const v=u/2,D=f/2,C=d/2;if(Math.abs(v)>ir||Math.abs(D)>ir||Math.abs(C)>ir)return null;c.push([v,D,C,p/100]),h.push(g)}return e!==t.length||Math.abs(h[a-1]-s)>Co?null:{t:s,p:c,ts:h}}function k0(n){if(!Array.isArray(n)||n.length<Ch||n.length>Rh)return!1;for(const t of n){if(!Array.isArray(t)||t.length!==4)return!1;for(const i of t)if(!Ko(i))return!1;const e=t;if(Math.abs(e[0])>ir||Math.abs(e[1])>ir||Math.abs(e[2])>ir)return!1}return!0}function V0(n){const t=[];for(let e=0;e<n;e++)t.push(e*N0);return t}function W0(n,t){if(!Array.isArray(n)||n.length!==t)return!1;for(const e of n)if(!Ko(e)||e<0||e>Hs)return!1;for(let e=1;e<n.length;e++){const i=n[e],r=n[e-1];if(i<r)return!1}return!0}function X0(n){if(!n)return{ok:!1,error:"empty"};if(typeof n!="string")return{ok:!1,error:"not-string"};if(n.length>F0)return{ok:!1,error:"too-long"};let t;try{t=B0(n)}catch{return{ok:!1,error:"bad-encoding"}}if(t.length>=2&&t.charCodeAt(0)===67&&t.charCodeAt(1)===49){const c=G0(t);return c?{ok:!0,ghost:c}:{ok:!1,error:"bad-encoding"}}let e;try{e=JSON.parse(t)}catch{return{ok:!1,error:"bad-encoding"}}if(typeof e!="object"||e===null)return{ok:!1,error:"bad-shape"};const i=e;if(i.v!==void 0&&i.v!==D0&&i.v!==2&&i.v!==I0)return{ok:!1,error:"bad-version"};let r;if(i.v===wh){if(!Ph(i.track))return{ok:!1,error:"bad-track"};const c=i.track;r={day:c.day,course:c.course,gen:c.gen}}if(!Ko(i.t)||i.t<0||i.t>Hs)return{ok:!1,error:"bad-time"};if(!k0(i.p))return{ok:!1,error:"bad-points"};const s=i.p;let a;if(i.ts===void 0){if(a=V0(s.length),a[a.length-1]>i.t+Co)return{ok:!1,error:"legacy-finish-mismatch"}}else{if(!W0(i.ts,s.length))return{ok:!1,error:"bad-timestamps"};if(a=i.ts.slice(),Math.abs(a[a.length-1]-i.t)>Co)return{ok:!1,error:"finish-mismatch"}}return{ok:!0,ghost:r?{t:i.t,p:s,ts:a,track:r}:{t:i.t,p:s,ts:a}}}function Ph(n){if(typeof n!="object"||n===null)return!1;const t=n;return!(typeof t.day!="string"||t.day.length<1||t.day.length>32||typeof t.course!="string"||!/^[0-9a-fA-F]{1,64}$/.test(t.course)||typeof t.gen!="number"||!isFinite(t.gen)||Math.floor(t.gen)!==t.gen||t.gen<0||t.gen>2147483647)}function q0(n,t,e=U0){return{day:n,course:t,gen:e}}function pl(n,t){return n?!n.track||!Ph(n.track)?"legacy":n.track.course.toLowerCase()===t.course.toLowerCase()&&n.track.gen===t.gen?"match":"mismatch":"none"}function Ia(n,t){return t==="match"||t==="none"?"":n==="friend"&&t==="mismatch"?"Friend link is for a different course.":n==="friend"?"Friend link predates course checks — ask for a fresh one.":t==="mismatch"?"Saved best is for a different course.":"Saved best predates course checks."}function ml(n){return n==="match"||n==="none"?"none":n}function Dh(n){const t=pl(n.shared,n.expected),e=pl(n.pb,n.expected);if(t==="match"&&n.shared&&n.shared.p.length>1)return{rival:{ghost:n.shared,kind:"friend",racingPB:!1},status:"ready",notice:""};if(e==="match"&&n.pb&&n.pb.p.length>1){const a=[];if(n.shared){const o=Ia("friend",t);o&&a.push(o),a.push("Racing your best instead.")}return{rival:{ghost:n.pb,kind:"pb",racingPB:!0},status:"ready",notice:a.join(" ")}}const i=[],r=Ia("friend",t);r&&i.push(r);const s=Ia("pb",e);return s&&i.push(s),n.shared?{rival:null,status:ml(t),notice:i.join(" ")}:n.pb?{rival:null,status:ml(e),notice:i.join(" ")}:{rival:null,status:"none",notice:""}}function Ks(n){const t=X0(n);return t.ok?t.ghost:null}function Y0(n,t){const e=n.p,i=n.ts,r=e[0],s=e[e.length-1];if(t<=i[0])return{x:r[0],y:r[1],z:r[2],h:r[3]};const a=i.length-1;if(t>=i[a])return{x:s[0],y:s[1],z:s[2],h:s[3]};let o=0,c=a;for(;c-o>1;){const p=o+c>>1;i[p]<=t?o=p:c=p}const h=i[c]-i[o]||1,u=(t-i[o])/h,f=e[o],d=e[c];return{x:Da(f[0],d[0],u),y:Da(f[1],d[1],u),z:Da(f[2],d[2],u),h:f[3]+O0(d[3]-f[3])*u}}function $0(n,t){return n&&n.kind==="friend"?"Racing a shared ghost":n&&n.kind==="pb"?"Racing your daily best ghost":t>0?"Friend time, no ghost":"No rival ghost"}const K0=36e5,j0=/^\d{4}-\d{2}-\d{2}$/;function Z0(n){return n instanceof DOMException&&n.name==="AbortError"}function Ih(n){if(!j0.test(n))return!1;const[t,e,i]=n.split("-").map(Number);if(e<1||e>12||i<1||i>31)return!1;const r=new Date(Date.UTC(t,e-1,i));return r.getUTCFullYear()===t&&r.getUTCMonth()===e-1&&r.getUTCDate()===i}function Uh(n){const t=typeof n=="string"&&n.trim()!==""?Number(n):n;return typeof t!="number"||!isFinite(t)||t<0||t>K0?0:Math.floor(t)}function Xe(n){if(!isFinite(n)||n<0)return"—";const t=Math.floor(n/6e4),e=Math.floor(n%6e4/1e3),i=Math.floor(n%1e3/10);return`${t}:${String(e).padStart(2,"0")}.${String(i).padStart(2,"0")}`}function J0(n,t,e){return`🏁 CANYON DAILY ${n} — ${Xe(t)}
Beat my run: ${e}`}function Q0(n,t,e){const i=Ih(e.day)?e.day:"",r=Uh(e.timeMs);let s=typeof e.ghost=="string"?e.ghost:"";s&&!Ks(s)&&(s="");const a=`?d=${encodeURIComponent(i)}&t=${r}${s?`&g=${s}`:""}`;return`${n}${t}${a}`}function t_(n){const t={day:"",timeMs:0,ghost:null,ghostRaw:"",errors:[]};try{if(!n)return t.errors.push("empty"),t;let e=n;const i=n.indexOf("?");i>=0&&(e=n.slice(i)),e.startsWith("?")||(e=`?${e}`);const r=new URLSearchParams(e),s=r.get("d")||"";Ih(s)?t.day=s:s&&t.errors.push("bad-day"),t.timeMs=Uh(r.get("t")||0);const a=r.get("g")||"";if(t.ghostRaw=a,a){const o=Ks(a);o?t.ghost=o:t.errors.push("bad-ghost")}return t}catch{return t.errors.push("parse-failed"),t}}function e_(n,t){return n&&t}async function n_(n,t,e){if(e&&n.requestNativeShare)try{return await n.requestNativeShare({title:t.title,text:t.text,url:t.url}),t.hasGhost?{kind:"shared-with-ghost",message:"Shared with ghost — good luck!"}:{kind:"shared-no-ghost",message:"Shared — no ghost saved yet"}}catch(i){if(Z0(i))return{kind:"dismissed",message:"Share dismissed"}}if(n.copyText)try{return await n.copyText(t.text),t.hasGhost?{kind:"copied-with-ghost",message:"Link + ghost copied — send it!"}:t.isFinish?{kind:"copied-time-only",message:"Time copied — send it!"}:{kind:"copied-time-only",message:"Time copied — link has no ghost (finish a run first)"}}catch{return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}const gl={entrySteer:.18,entryMinSpeed:25,tapMaxS:.35,sloppyScale:.4,slideAttack:3.5,slideRelease:4,exitOppSteer:.35,rearmDeadband:.12,earlyEnd:.45,optEnd:1.8,lateEnd:3.2,timeoutS:4,peakLoDeg:8,peakHiDeg:28,spinDeg:45,alignDeg:20,speedLo:25,speedHi:70,counterLo:.2,counterHi:.7,abortSpeed:15,cooldownS:1.2,boostTime:.6,boostAccelMax:20,kickRad:.09,pendFreq:7,pendDecay:1.8,pendYaw:1.6,chainWindow:.8,chainHold:.35,chainMin:.25,chainBoost:1.5},Ua=84;function Nh(){return{phase:"idle",entryDir:0,slideAge:0,peakSlipDeg:0,slideBlend:0,cooldownT:0,boostT:0,boostAccel:0,lastQuality:0,lastGrade:"none",spamCount:0,needNeutral:!1,cleanTap:!0,handHeldS:0,prevHand:!1,pendAmp:0,pendPhase:0,chainDir:0,chainT:0,chainHoldT:0}}function jo(){return{phase:"idle",slideBlend:0,boostAccel:0,event:"none",quality:0,grade:"none",yawKick:0,pendRate:0,pendAmp:0,chainArmed:!1}}function Fh(n){const t=Nh();n.phase=t.phase,n.entryDir=t.entryDir,n.slideAge=t.slideAge,n.peakSlipDeg=t.peakSlipDeg,n.slideBlend=t.slideBlend,n.cooldownT=t.cooldownT,n.boostT=t.boostT,n.boostAccel=t.boostAccel,n.lastQuality=t.lastQuality,n.lastGrade=t.lastGrade,n.spamCount=t.spamCount,n.needNeutral=t.needNeutral,n.cleanTap=t.cleanTap,n.handHeldS=t.handHeldS,n.prevHand=t.prevHand,n.pendAmp=t.pendAmp,n.pendPhase=t.pendPhase,n.chainDir=t.chainDir,n.chainT=t.chainT,n.chainHoldT=t.chainHoldT}function yi(n,t,e){return Math.max(t,Math.min(e,n))}function gs(n){return typeof n=="number"&&isFinite(n)}function Na(n){return n>0?1:n<0?-1:0}function i_(n,t,e,i,r,s){if(t<3||t>n.spinDeg||r>=n.timeoutS||i<n.entryMinSpeed)return 0;const a=t<=n.peakLoDeg?(t-3)/(n.peakLoDeg-3):t<=n.peakHiDeg?1:1-(t-n.peakHiDeg)/(n.spinDeg-n.peakHiDeg),o=1-yi(e/n.alignDeg,0,1),c=yi((i-n.speedLo)/(n.speedHi-n.speedLo),0,1),h=yi((s-n.counterLo)/(n.counterHi-n.counterLo),0,1),u=.4*yi(a,0,1)+.3*o+.15*c+.15*h,f=r<.15?0:r<n.earlyEnd?(r-.15)/(n.earlyEnd-.15):r<=n.optEnd?1:r<=n.lateEnd?1-.75*((r-n.optEnd)/(n.lateEnd-n.optEnd)):.25*(1-(r-n.lateEnd)/(n.timeoutS-n.lateEnd));return yi(u*yi(f,0,1),0,1)}function r_(n){return n>=.8?"perfect":n>=.55?"good":n>.05?"weak":"none"}function s_(n,t,e,i){if(i.event="none",i.quality=0,i.grade="none",i.yawKick=0,i.pendRate=0,i.pendAmp=n.pendAmp,i.chainArmed=n.chainT>0&&n.chainDir!==0,!gs(e.dt)||e.dt<=0||!gs(e.steer)||!gs(e.speed)||!gs(e.slipDeg)){i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}const r=e.dt>.1?.1:e.dt,s=yi(e.steer,-1,1),a=e.handbrake===!0,o=a&&!n.prevHand,c=!a&&n.prevHand;if(n.prevHand=a,c&&n.phase==="sliding"&&(n.cleanTap=n.handHeldS<=t.tapMaxS),a?n.handHeldS+=r:n.handHeldS=0,n.boostT>0&&(n.boostT=Math.max(0,n.boostT-r)),n.boostAccel=n.boostT>0?n.boostAccel:0,!e.grounded){n.phase==="sliding"&&(i.pendRate=-n.entryDir*n.pendAmp*Math.sin(n.pendPhase)*t.pendYaw),i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}if(n.phase==="cooldown"){if(n.slideBlend=Math.max(0,n.slideBlend-t.slideRelease*r),n.cooldownT-=r,n.chainT>0&&(n.chainT-=r),n.cooldownT<=0&&(n.phase="idle",n.cooldownT=0,n.chainDir=0,n.chainT=0,n.chainHoldT=0),n.chainDir!==0&&n.chainT>0&&Na(s)===n.chainDir&&Math.abs(s)>=t.entrySteer){if(o){_l(n,t,e,i);return}if(n.chainHoldT+=r,n.chainHoldT>=t.chainHold){_l(n,t,e,i);return}}else n.chainHoldT=0,o&&(n.spamCount++,i.event="rejected");i.chainArmed=n.chainT>0&&n.chainDir!==0,i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}if(n.phase==="idle"){if(n.slideBlend=Math.max(0,n.slideBlend-t.slideRelease*r),Math.abs(s)<t.rearmDeadband&&(n.needNeutral=!1),o){const u=Na(s);n.needNeutral||u===0||Math.abs(s)<t.entrySteer||e.speed<t.entryMinSpeed?!n.needNeutral&&n.cooldownT<=0||(n.spamCount++,i.event="rejected"):(n.phase="sliding",n.entryDir=u,n.slideAge=0,n.peakSlipDeg=Math.abs(e.slipDeg),n.cleanTap=!0,n.pendAmp=1,n.pendPhase=0,i.yawKick=-u*t.kickRad,i.pendAmp=n.pendAmp,i.event="entered")}i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}if(n.slideAge+=r,n.peakSlipDeg=Math.max(n.peakSlipDeg,Math.abs(e.slipDeg)),n.slideBlend=Math.min(1,n.slideBlend+t.slideAttack*r),n.pendPhase+=t.pendFreq*r,n.pendAmp*=Math.exp(-t.pendDecay*r),a&&n.handHeldS>t.tapMaxS&&(n.cleanTap=!1),i.pendRate=-n.entryDir*n.pendAmp*Math.sin(n.pendPhase)*t.pendYaw,i.pendAmp=n.pendAmp,Na(s)===-n.entryDir&&Math.abs(s)>=t.exitOppSteer){let u=i_(t,n.peakSlipDeg,Math.abs(e.slipDeg),e.speed,n.slideAge,Math.abs(s));n.cleanTap||(u*=t.sloppyScale);const f=r_(u),d=Math.cos(n.pendPhase);let p=d>.3?0:d<-.3?Math.min(n.pendAmp*t.chainBoost,1.5):n.pendAmp*.4;u<.3&&(p=Math.max(p,n.pendAmp)),n.lastQuality=u,n.lastGrade=f,n.phase="cooldown",n.cooldownT=t.cooldownS,n.needNeutral=!0,n.pendAmp=p,p>t.chainMin?(n.chainDir=-n.entryDir,n.chainT=t.chainWindow,n.chainHoldT=0):(n.chainDir=0,n.chainT=0,n.chainHoldT=0),n.slideBlend=Math.max(0,n.slideBlend-t.slideRelease*r),u>0?(n.boostT=t.boostTime,n.boostAccel=u*t.boostAccelMax):(n.boostT=0,n.boostAccel=0),i.event="exit",i.quality=u,i.grade=f,i.pendRate=0,i.pendAmp=n.pendAmp,i.chainArmed=n.chainDir!==0,i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}if(n.slideAge>=t.timeoutS||e.speed<t.abortSpeed){n.lastQuality=0,n.lastGrade="none",n.boostT=0,n.boostAccel=0,e.speed<t.abortSpeed?(n.phase="idle",n.chainDir=0,n.chainT=0,n.chainHoldT=0):(n.phase="cooldown",n.cooldownT=t.cooldownS,n.needNeutral=!0,n.pendAmp*=.4,n.pendAmp>t.chainMin?(n.chainDir=-n.entryDir,n.chainT=t.chainWindow,n.chainHoldT=0):(n.chainDir=0,n.chainT=0,n.chainHoldT=0)),n.slideBlend=Math.max(0,n.slideBlend-t.slideRelease*r),i.event="expired",i.pendRate=0,i.pendAmp=n.pendAmp,i.chainArmed=n.chainDir!==0,i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel;return}i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel}function _l(n,t,e,i){n.phase="sliding",n.entryDir=n.chainDir,n.slideAge=0,n.peakSlipDeg=Math.abs(e.slipDeg),n.cleanTap=!0,n.pendPhase=0,n.chainDir=0,n.chainT=0,n.chainHoldT=0,i.yawKick=-n.entryDir*t.kickRad,i.pendRate=0,i.pendAmp=n.pendAmp,i.chainArmed=!1,i.event="entered",i.phase=n.phase,i.slideBlend=n.slideBlend,i.boostAccel=n.boostAccel}const a_=120,o_=3e3,c_=26,l_=11,h_=20,u_=5.5,f_=13,d_=5e3,p_=48,xl=10,m_=75,g_=14,_s=80,__=74,x_=26,v_=25,M_=.18,S_=6,y_=9,E_=3.5,T_=2.5,A_=4.5,b_=.12,w_=.35,R_=.94,vl=1,C_=.1,L_=.3,P_=.4,D_=.8,I_=5,U_=.5,N_=32,F_=.7,O_=.35,z_=.35,B_=9,Ml=.61,H_=2,Sl=.44,G_=4,k_=.3,V_=.25,W_=.4,X_=.007,q_=.62,Y_=1.2,$_=2,K_=.275,j_=.3;function Z_(n){return n+$_-K_-Y_-j_}const xs=6,J_=.02,Q_=.15,tx=.35,yl=.5,ex=.6,nx=.6,El=2.5,ix=55,rx=.85,sx=.18,ax=2.2,ox=.9,cx=5,lx=8,hx=.6,ux=60,fx=3.5,Tl=40,dx=15,px=10,ee=(n,t,e)=>Math.max(t,Math.min(e,n)),sn=(n,t,e)=>n+(t-n)*e;function js(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Zs(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Lo(n){return Math.atan2(Math.sin(n),Math.cos(n))}function mx(n,t){const e=n.length,i=n.map(d=>d.x),r=n.map(d=>d.y),s=n.map(d=>d.z),a=[],o=[],c=[],h=[],u=[];for(let d=0;d<e;d++){const p=n[Math.max(d-1,0)],g=n[Math.min(d+1,e-1)];let _=g.x-p.x,m=g.z-p.z;const l=Math.hypot(_,m);l<1e-9?(_=1,m=0):(_/=l,m/=l),a.push(_),o.push(m),c.push(-m),h.push(_),u.push(Math.atan2(_,m))}const f=[0];for(let d=1;d<e;d++)f.push(f[d-1]+Math.hypot(i[d]-i[d-1],s[d]-s[d-1]));return{n:e,x:i,y:r,z:s,tx:a,tz:o,nx:c,nz:h,yaw:u,halfW:t,cum:f,barrier:null}}class gx{constructor(){this.stickId=-1,this.stickX0=0,this.joy=0,this.joyOn=!1,this.drift=!1,this.driftId=-1}stickDown(t,e){this.stickId===-1&&(this.stickId=t,this.stickX0=e,this.joyOn=!0,this.joy=0)}stickMove(t,e){t===this.stickId&&(this.joy=ee((e-this.stickX0)/p_,-1,1))}stickUp(t){t===this.stickId&&(this.stickId=-1,this.joyOn=!1,this.joy=0)}driftDown(t){this.driftId===-1&&(this.driftId=t,this.drift=!0)}driftUp(t){t===this.driftId&&(this.driftId=-1,this.drift=!1)}get steer(){return this.joyOn?this.joy:0}}function _x(){return{heading:0,px:0,py:0,pz:0,vx:0,vz:0,vy:0,grounded:!0,lastIdx:0,raceMs:0,pitch:0,finished:!1,finishCount:0,prevFinD:0,px0:0,py0:0,pz0:0,h0:0,pitch0:0,prevRaceMs:0,approach:[],rec:{t:0,p:[],ts:[]},recLastMs:0,snap:{i:0,x:0,y:0,z:0,h:0,vx:0,vz:0},snapTimer:0,steer:0,driftAmt:0,wasOffroad:!1,scrapeLowMs:0,breakT:0,wallCool:0,crashT:0,crashAmp:0,scrapeT:0,kickT:0,oobMs:0,driftHold:0,exitT:0,rhythm:Nh(),rhythmOut:jo(),rhythmExitLatch:0,justLaunched:!1,airSteps:0}}function xx(n,t){const e=t.n-1;return(n.px-t.x[e])*t.tx[e]+(n.pz-t.z[e])*t.tz[e]}function vx(n,t,e=100){let i=n.lastIdx,r=1/0;for(let s=-100;s<=e;s++){const a=ee(n.lastIdx+s,0,t.n-1),o=t.x[a]-n.px,c=t.z[a]-n.pz,h=o*o+c*c;h<r&&(r=h,i=a)}return i}function Mx(n,t,e){const i=ee(n.lastIdx,0,t.n-1),r=ee(n.lastIdx+1,0,t.n-1),s=i===r?2:Math.max(Ai(t,i,r),.5),a=Math.hypot(n.vx,n.vz);return Math.min(2,1+Math.ceil(a*e/s))}function Al(n,t,e){const i=vx(n,t,Mx(n,t,e));return i>n.lastIdx&&Math.hypot(t.x[i]-n.px,t.z[i]-n.pz)>Math.hypot(n.vx,n.vz)*e+12?n.lastIdx:i}function Ai(n,t,e){return Math.hypot(n.x[e]-n.x[t],n.z[e]-n.z[t])||1e-6}function Sx(n,t,e){n.lastIdx=e,n.px=t.x[e],n.pz=t.z[e],n.py=t.y[e]+.2,n.heading=t.yaw[e],n.vx=t.tx[e]*xl,n.vz=t.tz[e]*xl,n.vy=0,n.grounded=!0,n.steer=0,n.driftAmt=0,n.wasOffroad=!1,n.raceMs=0,n.finished=!1,n.finishCount=0,n.prevFinD=xx(n,t),n.approach=[],n.rec={t:0,p:[[n.px,n.py,n.pz,n.heading]],ts:[0]},n.recLastMs=0,n.snap={i:e,x:n.px,y:n.py,z:n.pz,h:n.heading,vx:n.vx,vz:n.vz},n.snapTimer=0,n.scrapeLowMs=0,n.breakT=0,n.wallCool=0,n.crashT=0,n.crashAmp=0,n.scrapeT=0,n.kickT=0,n.driftHold=0,n.exitT=0,Fh(n.rhythm),n.rhythmOut=jo(),n.rhythmExitLatch=0,n.justLaunched=!1,n.airSteps=0,n.oobMs=0;const i=(t.y[Math.min(e+1,t.n-1)]-t.y[Math.max(e-1,0)])/Ai(t,Math.max(e-1,0),Math.min(e+1,t.n-1));n.pitch=Math.atan(ee(i,-.5,.5)),n.px0=n.px,n.py0=n.py,n.pz0=n.pz,n.h0=n.heading,n.pitch0=n.pitch}function yx(n){n.finished||(n.lastIdx=n.snap.i,n.px=n.snap.x,n.py=n.snap.y,n.pz=n.snap.z,n.heading=n.snap.h,n.vx=n.snap.vx,n.vz=n.snap.vz,n.vy=0,n.grounded=!0,n.driftAmt=0,n.wasOffroad=!1,n.justLaunched=!1,n.scrapeLowMs=0,n.breakT=0,n.wallCool=0,n.crashT=0,n.crashAmp=0,n.scrapeT=0,n.kickT=0,n.driftHold=0,n.exitT=0,Fh(n.rhythm),n.rhythmOut=jo(),n.rhythmExitLatch=0,n.oobMs=0,n.px0=n.px,n.py0=n.py,n.pz0=n.pz,n.h0=n.heading,n.pitch0=n.pitch,n.raceMs+=o_)}const bl=8,Ex=12;function Tx(n,t,e,i){const r={spd:Math.hypot(n.vx,n.vz),drifting:!1,sIdx:n.lastIdx,pitch:n.pitch,launched:!1,landed:!1,finished:!0,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:n.grounded?"road":"air",landV:0,impact:0,scraping:!1,stuckMs:n.scrapeLowMs,wallHit:!1,wallSev:0,wallNx:0,wallNz:0,wallCool:n.wallCool,oobMs:n.oobMs};if(n.finished)return r;n.px0=n.px,n.py0=n.py,n.pz0=n.pz,n.h0=n.heading,n.pitch0=n.pitch,n.prevRaceMs=n.raceMs;let s=0;const a=ee(e.steer,-1,1),o=Math.abs(a)>Math.abs(n.steer)?S_:y_;n.steer+=ee(a-n.steer,-o*i,o*i);const c=n.steer,h=Math.hypot(n.vx,n.vz),u=Math.sin(n.heading),f=Math.cos(n.heading),d=Math.atan2(n.vx*f-n.vz*u,Math.abs(n.vx*u+n.vz*f)+1e-6),p=!e.drift&&n.grounded&&h>=ix&&Math.abs(c)>=rx;p?n.breakT+=i:n.breakT=0;const g=p&&(n.breakT>.45||Math.abs(d)>=sx),_=e.drift&&n.grounded&&h>=v_&&Math.abs(c)>=M_||g,m=n.driftAmt,l=Math.sin(n.heading),x=Math.cos(n.heading),M=Math.atan2(n.vx*x-n.vz*l,Math.abs(n.vx*l+n.vz*x)+1e-6),v=c*M<-.02?ee(-c*M/.12,.35,1):0;s_(n.rhythm,gl,{dt:i,steer:c,handbrake:e.drift,speed:h,slipDeg:M*180/Math.PI,grounded:n.grounded},n.rhythmOut),n.rhythmOut.event==="exit"?n.rhythmExitLatch=1:n.rhythmExitLatch>0&&(n.rhythmExitLatch=Math.max(0,n.rhythmExitLatch-i));const D=n.grounded&&n.rhythmOut.phase==="sliding";D&&(n.driftAmt=Math.max(n.driftAmt,n.rhythmOut.slideBlend));const C=n.rhythmOut.event==="entered",w=n.rhythmOut.yawKick,P=n.rhythmOut.pendRate;if(_||D)n.driftAmt=Math.min(1,n.driftAmt+(g?ax:E_)*i);else if(n.driftAmt>0){const Pt=Math.max(v,Math.abs(c)<.25?.6:0);n.driftAmt=Math.max(0,n.driftAmt-sn(T_,A_,Pt)*i),m>.4&&n.driftAmt<=.4&&n.grounded&&Math.abs(M)<O_&&n.driftHold>.25&&n.rhythmExitLatch<=0&&(n.exitT=F_)}n.driftAmt>.5?n.driftHold+=i:n.driftAmt<=0&&(n.driftHold=0),n.exitT>0&&(n.exitT=Math.max(0,n.exitT-i));const S=Al(n,t,i);n.lastIdx=S;const b=Math.min(S+bl,t.n-1),B=Math.max(S-bl,0),L=Math.min(S+1,t.n-1),U=Math.max(S-1,0),R=(t.y[L]-t.y[U])/Ai(t,U,L),N=(t.y[b]-t.y[S])/Ai(t,S,b),q=(t.y[S]-t.y[B])/Ai(t,B,S),X=(N-q)/(Ai(t,S,b)+Ai(t,B,S)),rt=n.px-t.x[S],lt=n.pz-t.z[S],pt=rt*t.nx[S]+lt*t.nz[S],wt=Math.abs(pt)>t.halfW,Kt=t.y[S]+.2;let Y=Math.hypot(n.vx,n.vz);const et=n.driftAmt>.4;let dt=!1,at=!1,bt=0,Lt=0,Nt=!1;if(n.grounded){const Pt=Math.min(Math.max(Y,8)/10,1),I=Y<=30?1:Math.max(.24,1-(Y-30)/68),Q=sn(2.3*I,1.5,n.driftAmt)*Pt;n.heading-=c*Q*i;const k=Math.abs(pt)>t.halfW+.2;if(C&&!k&&(n.kickT=b_,n.heading+=w),k||(n.heading+=P*i),n.kickT>0&&(n.kickT=Math.max(0,n.kickT-i)),n.crashT>0&&(n.heading+=n.crashAmp*Math.sin(n.crashT*25)*i,n.crashT=Math.max(0,n.crashT-i),n.crashT<=0&&(n.crashAmp=0)),p&&n.driftAmt<1){const we=n.breakT>.45?.35:.1+Math.min(n.breakT,.45)*.55;n.heading+=Math.sin(n.raceMs*.045)*ox*we*i}const K=Math.sin(n.heading),it=Math.cos(n.heading);let tt=n.vx*K+n.vz*it,Et=n.vx*it-n.vz*K;wt&&!n.wasOffroad&&(tt*=.92),n.wasOffroad=wt,s=n.rhythm.boostT>0?n.rhythm.boostAccel:0;const jt=s>0?Ua:wt?x_:et?__:_s,Me=n.crashT>0?Math.min(Math.abs(n.crashAmp)/El,1):0,Zt=s>0?0:n.exitT>0?N_:0,Ge=(wt?g_:m_+Zt+s)*(1-nx*Me);tt<jt&&(tt=Math.min(jt,tt+Ge*i)),s<=0&&n.exitT<=0&&!wt&&tt>_s&&(tt=_s+(tt-_s)*Math.exp(-2*i)),m<.15&&n.driftAmt>=.15&&(tt*=R_);const Ue=Math.abs(pt)>t.halfW+1,Vr=!Ue&&n.driftAmt>.5?Math.min(Math.max(n.driftHold-vl,0)*P_,D_):0,Wr=(sn(wt?5.5:9,4.8,n.driftAmt)+(wt||Ue?0:(I_*v-Vr)*n.driftAmt))*(n.kickT>0&&!Ue?w_:1);Et*=Math.exp(-Wr*i);const En=Math.atan2(Et,Math.abs(tt)+1e-6),Hn=Math.abs(En);let ui=0;if(Hn>Sl&&(ui+=H_*(Hn-Sl)),Hn>Ml&&(ui+=B_*(Hn-Ml)),ui>0&&(tt*=Math.exp(-ui*(wt||Ue?1:1-U_*v)*i)),n.driftAmt>.5){const we=Math.min(Math.max(n.driftHold-vl,0)*C_,L_);tt*=Math.exp(-(z_+we)*i)}if(wt&&(tt*=Math.exp(-.55*i)),n.vx=K*tt+it*Et,n.vz=it*tt-K*Et,s>0){const we=Math.hypot(n.vx,n.vz);if(we>Ua){const Gn=Ua/we;n.vx*=Gn,n.vz*=Gn}}Y=Math.hypot(n.vx,n.vz),n.approach.push(R),n.approach.length>Ex&&n.approach.shift();const fi=Math.hypot(n.vx,n.vz);if(fi>h_&&-X*fi*fi>l_){let we=.08;for(const Gn of n.approach)Gn>we&&(we=Gn);n.vy=ee(fi*we,u_,f_),n.grounded=!1,n.justLaunched=!0,n.airSteps=0,dt=!0}}else n.heading-=a*1.1*i,n.vy-=c_*i;n.px+=n.vx*i,n.pz+=n.vz*i;const ae=(n.px-t.x[S])*t.nx[S]+(n.pz-t.z[S])*t.nz[S],kt=Math.abs(ae)<=t.halfW+fx;n.grounded?kt?(n.py=Kt,n.pitch=Math.atan(ee(R,-.5,.5))):(n.grounded=!1,n.vy=0,n.airSteps=0,n.justLaunched=!1,n.pitch=ee(Math.atan2(n.vy,Math.max(Math.hypot(n.vx,n.vz),1)),-.6,.6)):(n.py+=n.vy*i,n.airSteps++,kt&&!n.justLaunched&&n.vy<=0&&n.py<=Kt&&(bt=n.vy,n.py=Kt,n.grounded=!0,n.vy=0,at=!0,n.airSteps>1&&(n.rhythm.slideBlend=Math.max(0,n.rhythm.slideBlend-gl.slideRelease*n.airSteps*i))),n.pitch=ee(Math.atan2(n.vy,Math.max(Math.hypot(n.vx,n.vz),1)),-.6,.6)),n.justLaunched=!1;const Ct=Al(n,t,i);n.lastIdx=Ct;const z=n.px-t.x[Ct],Ie=n.pz-t.z[Ct],Bt=z*t.nx[Ct]+Ie*t.nz[Ct],Ht=Z_(t.halfW);n.wallCool=Math.max(0,n.wallCool-i);let yt=!1,Xt=0,St=0,A=0;const y=n.scrapeT<=0,G=Bt>=0?1:-1,j=n.px-t.x[Ct],Z=n.pz-t.z[Ct],$=t.cum?ee(t.cum[Ct]+j*t.tx[Ct]+Z*t.tz[Ct],0,t.barrier?t.barrier.length:t.cum[t.cum.length-1]):0,mt=t.barrier&&t.cum?Yo(t.barrier,$,G):!0;if(Math.abs(Bt)>Ht&&mt){const Pt=Math.abs(Bt)-Ht,I=Math.sign(Bt);n.px-=t.nx[Ct]*I*Pt,n.pz-=t.nz[Ct]*I*Pt,St=-t.nx[Ct]*I,A=-t.nz[Ct]*I;const Q=n.vx*t.nx[Ct]+n.vz*t.nz[Ct],k=Q*I;if(k>0){n.vx-=t.nx[Ct]*Q,n.vz-=t.nz[Ct]*Q;const Et=y&&k<=xs?Math.max(k,Pt*12):k;if(Et>xs&&n.wallCool<=0&&(y||k>2*xs)){const jt=ee(W_+Et*X_,0,q_);n.vx*=1-jt,n.vz*=1-jt,n.vx-=t.nx[Ct]*I*Et*yl,n.vz-=t.nz[Ct]*I*Et*yl,Xt=ee(Et/25,0,1),Lt=Xt,yt=!0,n.wallCool=tx,n.crashT=ex,n.crashAmp=I*El*Xt}else if(k<=xs&&y){const jt=ee(k*J_,0,Q_);n.vx*=1-jt,n.vz*=1-jt,Xt=ee(k/25,0,1)}else Xt=ee(k/25,0,1)}n.scrapeT+=i;const K=ee(n.scrapeT/V_,0,1),it=c*I<-.05,tt=Math.exp(-(it?k_:G_)*K*i);n.vx*=tt,n.vz*=tt,Nt=!0,Y=Math.hypot(n.vx,n.vz)}else n.scrapeT=0;{const Pt=(n.px-t.x[Ct])*t.nx[Ct]+(n.pz-t.z[Ct])*t.nz[Ct],I=t.y[Ct]+.2-n.py>px;Math.abs(Pt)>t.halfW+dx||I?n.oobMs+=i*1e3:n.oobMs=Math.max(0,n.oobMs-2*i*1e3)}{const Pt=n.px-t.x[0],I=n.pz-t.z[0],Q=Pt*t.tx[0]+I*t.tz[0];if(Q<-3&&Pt*Pt+I*I<Tl*Tl){n.px-=t.tx[0]*(Q+3),n.pz-=t.tz[0]*(Q+3);const k=n.vx*t.tx[0]+n.vz*t.tz[0];k<0&&(n.vx-=t.tx[0]*k,n.vz-=t.tz[0]*k)}}const ot=n.lastIdx;n.snapTimer+=i;const ht=Math.hypot(n.vx,n.vz),Vt=Math.sin(n.heading),J=Math.cos(n.heading),ft=Math.abs(Math.atan2(n.vx*J-n.vz*Vt,Math.abs(n.vx*Vt+n.vz*J)+1e-6));n.snapTimer>.75&&n.grounded&&Math.abs(pt)<=t.halfW+.5&&ht>=lx&&ft<=hx&&(n.snapTimer=0,n.snap={i:ot,x:n.px,y:n.py,z:n.pz,h:n.heading,vx:n.vx,vz:n.vz});let Tt=!1;{const Pt=t.n-1,I=(n.px-t.x[Pt])*t.tx[Pt]+(n.pz-t.z[Pt])*t.tz[Pt];if(n.prevFinD<=0&&I>0&&n.prevRaceMs+i*1e3>d_&&n.lastIdx>=t.n-ux){const Q=ee(-n.prevFinD/(I-n.prevFinD||1e-9),0,1);n.raceMs=n.prevRaceMs+Q*i*1e3,n.px=n.px0+(n.px-n.px0)*Q,n.py=n.py0+(n.py-n.py0)*Q,n.pz=n.pz0+(n.pz-n.pz0)*Q,n.heading=n.h0+Lo(n.heading-n.h0)*Q,n.rec.p.push([n.px,n.py,n.pz,n.heading]),n.rec.ts.push(n.raceMs),n.rec.t=Math.round(n.raceMs),n.finished=!0,n.finishCount++,n.px0=n.px,n.py0=n.py,n.pz0=n.pz,n.h0=n.heading,n.pitch0=n.pitch,Tt=!0}else n.raceMs=n.prevRaceMs+i*1e3;n.prevFinD=n.prevFinD<=0&&I>0?n.prevFinD:I}n.finished||n.raceMs-n.recLastMs>=a_-1e-6&&(n.recLastMs=n.raceMs,n.rec.p.push([n.px,n.py,n.pz,n.heading]),n.rec.ts.push(n.raceMs)),Y=Math.hypot(n.vx,n.vz),Nt&&Y<cx?n.scrapeLowMs+=i*1e3:n.scrapeLowMs=0;const Rt=Math.sin(n.heading),ut=Math.cos(n.heading),Gt=n.vx*Rt+n.vz*ut,Ut=n.vx*ut-n.vz*Rt;return{spd:Y,drifting:et,sIdx:ot,pitch:n.pitch,launched:dt,landed:at,finished:Tt,fSpeed:Gt,lSpeed:Ut,slip:Math.atan2(Ut,Math.abs(Gt)+1e-6),yawRate:Lo(n.heading-n.h0)/i,offroad:wt,surface:n.grounded?wt?"offroad":"road":"air",landV:bt,impact:Lt,scraping:Nt,stuckMs:n.scrapeLowMs,wallHit:yt,wallSev:Xt,wallNx:St,wallNz:A,wallCool:n.wallCool,driftPhase:n.rhythmOut.phase,rhythmBoost:s,exitQuality:n.rhythm.lastQuality,pendAmp:n.rhythm.pendAmp,kickT:n.kickT,chainArmed:n.rhythm.chainT>0&&n.rhythm.chainDir!==0,oobMs:n.oobMs}}function Ax(n,t){const e=ee(t,0,1);return{x:sn(n.px0,n.px,e),y:sn(n.py0,n.py,e),z:sn(n.pz0,n.pz,e),h:n.h0+Lo(n.heading-n.h0)*e,pitch:sn(n.pitch0,n.pitch,e)}}function bx(n,t,e){return t>0?e:n}function wx(n){if(n.length===0)return[];const t=[.25,.5,.75],e=[];for(const i of t){const r=Math.min(n.length-1,Math.max(0,Math.floor(n.length*i))),s=n[r].endS;(e.length===0||s>e[e.length-1]+1)&&e.push(s)}return e}function Rx(n,t){let e=0,i=1/0;for(let r=0;r<n.length;r++){const s=Math.abs(n[r]-t);s<i&&(i=s,e=r)}return e}function wl(n,t,e){if(!n||n.p.length<2||n.ts.length!==n.p.length)return-1;let i=0,r=1/0;for(let a=0;a<n.p.length;a++){const o=n.p[a][0]-t,c=n.p[a][2]-e,h=o*o+c*c;h<r&&(r=h,i=a)}const s=n.ts[i];return typeof s=="number"&&isFinite(s)&&s>=0?s:-1}function Cx(n){const t=n/1e3,e=t<0?"-":"+",i=Math.abs(t);return`${e}${i.toFixed(2)}`}function Rl(n,t,e){if(!isFinite(n)||!isFinite(t)||t<0)return"";const i=Math.round(Math.abs(n)/1e3*t);return`${Cx(n)} · ${i}m vs ${e}`}const Cl=.1;function Lx(n){return!isFinite(n)||n<0?0:n>Cl?Cl:n}const Px=11.5,Ll=2,Dx=2400,Ix=3650,Ux=140,Nx=240,Fx=40,Ox=.3,Is=40,zx=11,Bx=14,Hx=5,Gx=7,kx=3,Vx=4;function Wx(){const n=(e,i,r,s)=>({kind:"corner",corner:{dir:e,r0:i,r1:r,angleDeg:s}}),t=e=>({kind:"straight",len:e});return[t(175),n("R",145,145,45),t(50),n("L",116,116,120),t(45),n("R",118,118,125),t(50),n("L",150,150,48),t(55),n("R",66,38,92),t(190),n("L",155,155,45),t(50),n("R",112,112,115),t(185),n("L",188,188,28),t(50),n("R",120,120,120),t(55),n("L",140,140,50),t(50),n("R",186,186,30),t(55),n("L",118,118,118),t(150)]}const Rr=[{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"dec",rMin:62,rMax:70,aMin:85,aMax:100},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"kink",rMin:180,rMax:198,aMin:24,aMax:34},{cls:"kink",rMin:180,rMax:198,aMin:24,aMax:34}];function Xx(n,t){return n==="sweep"?50+t()*12:n==="kink"?45+t()*12:n==="drift"?55+t()*12:45+t()*12}function Pl(n,t){const e=Wx();if(t>=Is)return e;const i=Zs(js(`canyon-${n}#${t}`)),r=R=>R[Math.floor(i()*R.length)],s=Rr.map((R,N)=>R.cls==="sweep"?N:-1).filter(R=>R>=0),a=Rr.map((R,N)=>R.cls==="sweep"||R.cls==="kink"?N:-1).filter(R=>R>=0),o=Rr.findIndex(R=>R.cls==="dec"),c=Rr.map((R,N)=>N),h=(R,N)=>{const q=r(N);return R.splice(R.indexOf(q),1),q},u=new Array(12).fill(-1);u[0]=h(c,s),u[11]=h(c,a.filter(R=>c.includes(R)));const f=2+Math.floor(i()*8);u[f]=o,c.splice(c.indexOf(o),1);const d=u.map((R,N)=>R<0?N:-1).filter(R=>R>=0);for(let R=d.length-1;R>=0;R--)u[d[R]]=c.splice(Math.floor(i()*c.length),1)[0];const p=R=>Rr[u[R]],g=R=>{const N=p(R);return(N.aMin+N.aMax)/2*Math.PI/180},_=[];_.push(i()<.5?"L":"R");for(let R=1;R<12;R++)_.push(i()<.7?_[R-1]==="L"?"R":"L":_[R-1]);const m=()=>{let R=0;for(let N=0;N<12;N++)R+=(_[N]==="L"?1:-1)*g(N);return R};for(let R=0;R<24&&Math.abs(m())>50*Math.PI/180;R++){const N=1+Math.floor(i()*10),q=Math.abs(m());_[N]=_[N]==="L"?"R":"L",Math.abs(m())>=q&&(_[N]=_[N]==="L"?"R":"L")}_.includes("L")||(_[5]="L"),_.includes("R")||(_[6]="R");const l=[];l.push({kind:"straight",len:155+i()*20});const x=[];for(let R=0;R<12;R++){const N=p(R),q=N.rMin+i()*(N.rMax-N.rMin),X=N.aMin+i()*(N.aMax-N.aMin),rt=N.cls==="dec"?{dir:_[R],r0:q,r1:Math.max(30,q*(.5+i()*.08)),angleDeg:X}:{dir:_[R],r0:q,r1:Math.max(30,q+(i()*8-4)),angleDeg:X};l.push({kind:"corner",corner:rt}),R<11&&(x.push(l.length),l.push({kind:"straight",len:Xx(p(R+1).cls,i)}))}l.push({kind:"straight",len:150+i()*20});const M=u.indexOf(o),v=M===0?0:x[M-1],D=M===11?l.length-1:x[M],C=[[v,80],[D,95]];for(let R=0;R<11;R++){const N=p(R+1);N.cls!=="drift"&&N.cls!=="dec"||_[R+1]!==_[R]&&C.push([x[R],85])}for(const[R,N]of C){const q=l[R];q.kind==="straight"&&q.len<N&&(q.len=N+i()*10)}const w=x.filter((R,N)=>{const q=p(N+1).cls;return q==="sweep"||q==="kink"}),P=w.filter(R=>{const N=p(x.indexOf(R)).cls;return N==="sweep"||N==="kink"}),T=P.length>=2?P:w.length>=2?w:x,S=T[Math.floor(i()*T.length)];let b=T[Math.floor(i()*T.length)];for(;b===S;)b=T[Math.floor(i()*T.length)];for(const R of[S,b]){const N=l[R];N.kind==="straight"&&N.len<180&&(N.len=180+i()*15)}const B=R=>l[1+R*2].corner.dir,L=R=>l[2+R*2].len;let U=0;for(let R=0;R<11;R++)B(R)!==B(R+1)&&L(R)<=110&&U++;for(let R=0;R<11&&U<2;R++)if(B(R)===B(R+1)&&L(R)<=110){const N=l[1+(R+1)*2];N.corner.dir=N.corner.dir==="L"?"R":"L",U++}return l}function qx(){return{climbTop:14,rollerAmp:.8,rollerLen:260,rollerPhase:0}}function Yx(n,t){const e=Zs(js(`canyon-elev-${n}#${t}`));return{climbTop:10+e()*6,rollerAmp:.4+e()*.4,rollerLen:240+e()*80,rollerPhase:e()*Math.PI*2}}function $x(n,t){const e=Zs(js(`canyon-mark-${n}#${t}`));return[.26+e()*.08,.5+e()*.1,.74+e()*.08]}function Kx(n,t){return Oh(n,t,qx(),[.3,.55,.8])}function Oh(n,t,e,i){const r=[{x:0,z:0,s:0}];let s=0,a=0,o=0,c=0;const h=[];for(const l of n)if(l.kind==="straight"){h.push({a:c,b:c+l.len});let x=l.len;for(;x>1e-9;){const M=Math.min(Ll,x);s+=Math.sin(o)*M,a+=Math.cos(o)*M,c+=M,x-=M,r.push({x:s,z:a,s:c})}}else{const{dir:x,r0:M,r1:v,angleDeg:D}=l.corner,C=x==="L"?1:-1,w=D*Math.PI/180;let P=0;for(;P<w-1e-9;){const T=M+(v-M)*(P/w),S=Math.min(Ll/T,w-P),b=T*S;o+=C*S,s+=Math.sin(o)*b,a+=Math.cos(o)*b,c+=b,P+=S,r.push({x:s,z:a,s:c})}}const u=c,f=h.slice(1,-1).map((l,x)=>({r:l,len:l.b-l.a,k:x})).sort((l,x)=>x.len-l.len),d=[f[0].r,f[1].r],p=d.map(l=>Math.min(l.b-150-t%3*5,l.b-150)).map((l,x)=>Math.max(l,d[x].a+40)),g=(l,x,M)=>{const v=ee((M-l)/(x-l),0,1);return v*v*(3-2*v)},_=l=>{const x=u-350,M=6+(ee(l,250,x)-250)/Math.max(x-250,1)*(e.climbTop-6)+Math.sin((ee(l,250,x)-250)/e.rollerLen*Math.PI*2+e.rollerPhase)*e.rollerAmp,v=14-(ee(l,x,u-150)-x)/200*7;let D=sn(6,M,g(210,290,l));D=sn(D,v,g(x-60,x+60,l)),D=sn(D,7,g(u-260,u-140,l));for(const C of p){const w=(l-C)/18;D+=4.5*Math.exp(-w*w)}return D};return{points:r.map(l=>({x:l.x,y:_(l.s),z:l.z})),s:r.map(l=>l.s),crestS:p,straightRanges:h,landmarkS:i.map(l=>l*u)}}function jx(n){const t=[0];for(let e=1;e<n.length;e++)t.push(t[e-1]+Math.hypot(n[e].x-n[e-1].x,n[e].z-n[e-1].z));return t}function Zx(n,t){const e=[];let i=n[0]+t;for(let r=1;r<n.length-1;r++)n[r]>=i&&(e.push(r),i=n[r]+t);return e}function Dl(n){const t=n.length,e=[0];for(let l=1;l<t;l++)e.push(e[l-1]+Math.hypot(n[l].x-n[l-1].x,n[l].z-n[l-1].z));const i=e[t-1],r=[];for(let l=0;l<t;l++){const x=n[Math.max(l-2,0)],M=n[Math.min(l+2,t-1)];r.push(Math.atan2(M.x-x.x,M.z-x.z))}const s=[r[0]];for(let l=1;l<t;l++){let x=r[l]-s[l-1];for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;s.push(s[l-1]+x)}const a=7,o=[];for(let l=0;l<t;l++){let x=0,M=0;for(let v=-a;v<=a;v++){const D=l+v;D>=0&&D<t&&(x+=s[D],M++)}o.push(x/M)}const c=new Array(t).fill(1/0);for(let l=1;l<t-1;l++){const x=e[l+1]-e[l-1],M=Math.abs(o[l+1]-o[l-1]);M>1e-6&&x>1e-9&&(c[l]=x/M)}const h=[];let u=0;const f=l=>c[l]<200;for(;u<t;){if(!f(u)){u++;continue}let l=u;for(;l<t&&f(l);)l++;let x=l;for(;x<t&&!f(x)&&(x<l||e[x]-e[l-1]<25);)x++;if(x<t&&f(x)&&e[x]-e[l-1]<25)for(l=x;l<t&&f(l);)l++;if(e[l-1]-e[u]>=30){const M=c.slice(u,l).filter(L=>isFinite(L)),v=M.slice().sort((L,U)=>L-U),D=v.length?v[Math.floor(v.length/2)]:1/0,C=Math.min(8,Math.floor(M.length/4)),w=M.slice(C,M.length-C),P=L=>{const U=L.slice().sort((R,N)=>R-N);return U.length?U[Math.floor(U.length/2)]:D},T=Math.max(1,Math.floor(w.length/3)),S=P(w.slice(0,T)),b=P(w.slice(-T));let B=0;for(let L=u;L<l-1;L++)B+=s[L+1]-s[L];h.push({startS:e[u],endS:e[l-1],dir:B>=0?"L":"R",medR:D,entryR:S,exitR:b,decreasing:b<.8*S})}u=l}let d=1/0;for(let l=0;l<t;l+=2)for(let x=l+150;x<t;x+=2){const M=Math.hypot(n[l].x-n[x].x,n[l].z-n[x].z);M<d&&(d=M)}let p=0,g=1/0,_=-1/0;for(let l=0;l<t;l++)if(g=Math.min(g,n[l].y),_=Math.max(_,n[l].y),l>0){const x=e[l]-e[l-1];x>1e-9&&(p=Math.max(p,Math.abs((n[l].y-n[l-1].y)/x)))}let m=0;for(let l=2;l<t-2;l++){const x=n[l].y;if(x<=n[l-1].y||x<=n[l+1].y||x<=n[l-2].y||x<=n[l+2].y)continue;let M=1/0;for(let w=-60;w<=60;w++){const P=l+w;P>=0&&P<t&&(M=Math.min(M,n[P].y))}if(x-M<2.5)continue;const v=(x+M)/2;let D=l,C=l;for(;D>0&&n[D-1].y>v;)D--;for(;C<t-1&&n[C+1].y>v;)C++;e[C]-e[D]<=70&&m++}return{length:i,n:t,events:h,clearance:d,maxGrade:p,elevMin:g,elevMax:_,crestCount:m}}function Il(n){let t=2166136261;const e=i=>{const r=Math.round(i*1e3);t^=r&65535,t=Math.imul(t,16777619),t^=r>>>16&65535,t=Math.imul(t,16777619)};for(const i of n)e(i.x),e(i.y),e(i.z);return(t>>>0).toString(16)}function Ul(n){const t=n.length,e=[0];for(let o=1;o<t;o++)e.push(e[o-1]+Math.hypot(n[o].x-n[o-1].x,n[o].z-n[o-1].z));const i=[];for(let o=0;o<t;o++){const c=n[Math.max(o-3,0)],h=n[Math.min(o+3,t-1)];i.push(Math.atan2(h.x-c.x,h.z-c.z))}const r=[];for(let o=0;o<t;o++){const c=Math.max(o-3,0),h=Math.min(o+3,t-1);let u=Math.abs(i[h]-i[c]);for(;u>Math.PI;)u=2*Math.PI-u;const d=Math.max(e[h]-e[c],1e-6)/Math.max(u,1e-6),p=d<=130?95:48;r.push(Math.min(80,Math.sqrt(p*Math.min(d,1e6))))}const s=r.slice();s[0]=Math.min(s[0],10);for(let o=1;o<t;o++){const c=Math.max(e[o]-e[o-1],1e-6);s[o]=Math.min(r[o],Math.sqrt(s[o-1]*s[o-1]+150*c))}for(let o=t-2;o>=0;o--){const c=Math.max(e[o+1]-e[o],1e-6);s[o]=Math.min(s[o],Math.sqrt(s[o+1]*s[o+1]+140*c))}let a=0;for(let o=1;o<t;o++){const c=e[o]-e[o-1];a+=2*c/Math.max(s[o]+s[o-1],1e-6)}return a}function Jx(n,t){if(n.length<Dx||n.length>Ix)return!1;const e=n.events;if(e.length<zx||e.length>Bx)return!1;const i=e.filter(a=>a.medR>=45&&a.medR<=130);if(i.length<Hx||i.length>Gx)return!1;const r=e.filter(a=>a.medR>130&&a.medR<=175);if(r.length<kx||r.length>Vx||!e.some(a=>a.dir==="L")||!e.some(a=>a.dir==="R"))return!1;let s=0;for(let a=1;a<e.length;a++)e[a].dir!==e[a-1].dir&&e[a].startS-e[a-1].endS<=110&&s++;if(s<2||!e.some(a=>a.decreasing)||e[0].startS<Ux||e[0].startS>Nx||n.clearance<Fx||n.maxGrade>Ox||n.crestCount<1||n.crestCount>2)return!1;for(const a of t.crestS){const o=e.find(c=>c.startS>a);if(!o){if(n.length-(a+65)<60)return!1;continue}if(o.startS-(a+65)<60||!(o.medR>130))return!1}return!0}function Qx(n){for(let i=0;i<Is;i++){const r=Oh(Pl(n,i),i,Yx(n,i),$x(n,i)),s=Dl(r.points);if(Jx(s,r))return{points:r.points,stats:s,attempt:i,fallback:!1,crestS:r.crestS,estTimeS:Ul(r.points),checksum:Il(r.points),landmarkS:r.landmarkS}}const t=Kx(Pl(n,Is),0),e=Dl(t.points);return{points:t.points,stats:e,attempt:Is,fallback:!0,crestS:t.crestS,estTimeS:Ul(t.points),checksum:Il(t.points),landmarkS:t.landmarkS}}function tv(n={}){const t=n.mobile??!1;return{halfW:n.halfW??8,guardSpacing:n.guardSpacing??(t?16:10),tickSpacing:n.tickSpacing??(t?40:25),chevronAdvance:n.chevronAdvance??[70,50,30],chevronRepeater:n.chevronRepeater??40,dustN:n.dustN??(t?80:160),mobile:t,barriers:n.barriers??null}}const Pi={MAX_GUARDRAILS:640,MAX_CHEVRONS:128,MAX_TICKS:260,MAX_DUST:220};function Zo(n,t){let e=0,i=n.length-1;if(t<=n[0])return 0;if(t>=n[i])return i;for(;e+1<i;){const r=e+i>>1;n[r]<t?e=r:i=r}return i}function zh(n,t,e=t.barriers??null){const i=[],r=[];if(n.length<2)return{idx:i,side:r};const s=n[n.length-1];if(e)for(const a of[1,-1]){let o=t.guardSpacing;for(let c=1;c<n.length-1&&o<s-8;c++)n[c]>=o&&(Yo(e,n[c],a)&&(i.push(c),r.push(a)),o=n[c]+t.guardSpacing)}else{let a=t.guardSpacing;for(let o=1;o<n.length-1&&a<s-8;o++)n[o]>=a&&(i.push(o,o),r.push(1,-1),a=n[o]+t.guardSpacing)}if(i.length>Pi.MAX_GUARDRAILS){let a=i.length-(i.length-Pi.MAX_GUARDRAILS);a-=a%2,i.length=a,r.length=a}return{idx:i,side:r}}function Bh(n,t){const e=[];if(n.length<2)return e;const i=n[n.length-1],r=Math.floor(Pi.MAX_TICKS/2);let s=t.tickSpacing;for(let a=1;a<n.length-1&&s<i-8&&!(n[a]>=s&&(e.push(a),s=n[a]+t.tickSpacing,e.length>=r));a++);return e}function Hh(n,t,e){const i=[];if(n.length<2)return i;const r=n[n.length-1];for(const s of t){if(!isFinite(s.startS)||!isFinite(s.endS))continue;const a=s.dir==="L"?1:-1,o=s.medR<=130;for(const c of e.chevronAdvance){const h=s.startS-c;h>10&&h<r-10&&i.push({s:h,side:a,severe:o})}for(let c=s.startS+10;c<s.endS-5;c+=e.chevronRepeater)i.push({s:c,side:a,severe:o})}return i.sort((s,a)=>s.s-a.s),i.length>Pi.MAX_CHEVRONS&&(i.length=Pi.MAX_CHEVRONS),i}function ev(n,t,e){return n.length<2?{guardrails:0,chevrons:0,ticks:0,dust:0}:{guardrails:zh(n,e).idx.length,chevrons:Hh(n,t,e).length,ticks:Bh(n,e).length*2,dust:Math.min(e.dustN,Pi.MAX_DUST)}}const Ce={GATE_SPEED:10,GATE_MIX:.25,WIDTH_MIN:.16,WIDTH_MAX:.45,LEN_MIN:.7,LEN_MAX:1.4,DUST_SPREAD_MIN:.8,DUST_SPREAD_MAX:2,ATTACK:5,RELEASE:2.5};function ri(n){return n<0?0:n>1?1:n}function nv(n,t,e,i,r){if(!i||!r||e<Ce.GATE_SPEED||n<Ce.GATE_MIX)return 0;const s=ri((n-Ce.GATE_MIX)/(1-Ce.GATE_MIX)),a=s*s*(3-2*s),o=ri(Math.abs(t)/.5);return ri(a*(.35+.65*o))}function iv(n,t,e){const i=t>n?Ce.ATTACK:Ce.RELEASE,r=t-n,s=i*Math.max(0,e);return r>s?n+s:r<-s?n-s:t}function rv(n){return Ce.WIDTH_MIN+(Ce.WIDTH_MAX-Ce.WIDTH_MIN)*ri(n)}function sv(n){return Ce.LEN_MIN+(Ce.LEN_MAX-Ce.LEN_MIN)*ri(n)}function av(n){return ri(.1+.6*ri(n))}function ov(n){return n<.12?0:n<.35?3:n<.65?2:1}function cv(n){return n<.15?0:n<.55?1:2}function lv(n){return Ce.DUST_SPREAD_MIN+(Ce.DUST_SPREAD_MAX-Ce.DUST_SPREAD_MIN)*ri(n)}class hv{constructor(t){this.head=0,this.n=Math.max(0,Math.min(Math.floor(t),Pi.MAX_DUST)),this.positions=new Float32Array(this.n*3),this.life=new Float32Array(this.n);for(let e=0;e<this.n;e++)this.positions[e*3+1]=-100}spawn(t,e,i,r){if(this.n===0)return;const s=this.head,a=(s*2654435761>>>0)/4294967296-.5,o=(s*40503+7)%100/100,c=(s*65599+13)%100/100-.5;this.positions[s*3]=t+a*r,this.positions[s*3+1]=e+o*1.2,this.positions[s*3+2]=i+c*r,this.life[s]=1,this.head=(s+1)%this.n}update(t){const e=t*1.4,i=t*2;for(let r=0;r<this.n;r++)this.life[r]>0&&(this.life[r]-=e,this.positions[r*3+1]+=i,this.life[r]<=0&&(this.positions[r*3+1]=-100))}}const Nl=new WeakMap;function uv(n,t){let e=Nl.get(n);if(!e){const i=r=>{const s=new n.BoxGeometry(1,1,1),a=new n.PlaneGeometry(2.4,1.3),o=new n.PlaneGeometry(1.4,.5);o.rotateX(-Math.PI/2);const c=new n.MeshLambertMaterial({color:16777215}),h=new n.MeshBasicMaterial({color:16777215,side:n.DoubleSide}),u=new n.MeshBasicMaterial({color:16117725,transparent:!0,opacity:r?.55:.8});return{guardGeo:s,chevGeo:a,tickGeo:o,guardMat:c,chevMat:h,tickMat:u}};e={desk:i(!1),mob:i(!0)},Nl.set(n,e)}return t?e.mob:e.desk}function fv(n,t,e,i={}){const r=tv(i),s=e.events??[],a=ev(e.cum,s,r),o=uv(n,r.mobile),c=new n.Group;c.name="canyon-visuals",t.add(c);const h=new n.Matrix4,u=new n.Quaternion,f=new n.Euler,d=new n.Vector3,p=new n.Vector3,g=new n.Vector3(1,1,1),_=new n.Color,m=b=>Math.atan2(e.tangents[b].x,e.tangents[b].z),l=[];let x=null,M=null,v=null;const D=zh(e.cum,r),C=[[],[]];for(let b=0;b<D.idx.length;b++)C[D.side[b]>0?0:1].push(D.idx[b]);const w=[];for(let b=0;b<2;b++){const B=b===0?1:-1,L=C[b];for(let U=0;U+1<L.length;U++){if(e.cum[L[U+1]]-e.cum[L[U]]>r.guardSpacing*1.6)continue;const R=e.points[L[U]],N=e.normals[L[U]],q=e.points[L[U+1]],X=e.normals[L[U+1]];w.push({ax:R.x+N.x*B*(r.halfW+2),ay:R.y,az:R.z+N.z*B*(r.halfW+2),bx:q.x+X.x*B*(r.halfW+2),by:q.y,bz:q.z+X.z*B*(r.halfW+2),side:B})}}if(w.length>0){x=new n.InstancedMesh(o.guardGeo,o.guardMat,w.length);for(let b=0;b<w.length;b++){const B=w[b],L=B.bx-B.ax,U=B.bz-B.az,R=Math.sqrt(L*L+U*U);f.set(0,Math.atan2(L,U),0),u.setFromEuler(f),d.set((B.ax+B.bx)/2,(B.ay+B.by)/2+.35,(B.az+B.bz)/2),p.set(.55,1,R+1.5),h.compose(d,u,p),x.setMatrixAt(b,h),x.setColorAt(b,_.set(b%4===3?14170666:15327954))}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),c.add(x),l.push(x)}const P=Hh(e.cum,s,r);if(P.length>0){M=new n.InstancedMesh(o.chevGeo,o.chevMat,P.length);for(let b=0;b<P.length;b++){const B=Zo(e.cum,P[b].s),L=e.points[B],U=e.normals[B];f.set(0,m(B)+Math.PI,0),u.setFromEuler(f),d.set(L.x+U.x*P[b].side*(r.halfW+4.5),L.y+1.5,L.z+U.z*P[b].side*(r.halfW+4.5)),p.set(1,1,1),h.compose(d,u,p),M.setMatrixAt(b,h),M.setColorAt(b,_.set(P[b].severe?14170666:15902010))}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M)}const T=Bh(e.cum,r);if(T.length>0){v=new n.InstancedMesh(o.tickGeo,o.tickMat,T.length*2);let b=0;for(const B of T){const L=e.points[B],U=e.normals[B];f.set(0,m(B),0),u.setFromEuler(f);for(const R of[1,-1])d.set(L.x+U.x*R*(r.halfW-1.2),L.y+.17,L.z+U.z*R*(r.halfW-1.2)),h.compose(d,u,g),v.setMatrixAt(b++,h)}v.count=b,v.instanceMatrix.needsUpdate=!0,c.add(v),l.push(v)}const S=new hv(r.dustN);return{counts:a,dust:S,setQuality(b){v&&(v.visible=!b),x&&(x.visible=!0),M&&(M.visible=!0)},update(b){S.update(b)},dispose(){for(const b of l)c.remove(b),b.dispose();t.remove(c)}}}const kr={posLambda:7,lookLambda:10,headLambda:5,fovLambda:5,driftLambda:6,feedforward:1,maxImpulse:1.2,impulseDecay:5,camDist:11.5,camHeight:4.6,lookAhead:9,lookHeight:1.4,baseFov:62,speedFov:14,driftFov:5,fullSpeed:60,maxDt:.05};function dv(){return{px:0,py:0,pz:0,pvx:0,pvy:0,pvz:0,lx:0,ly:0,lz:0,lvx:0,lvy:0,lvz:0,fov:kr.baseFov,fovV:0,camH:0,driftMix:0,impx:0,impy:0,impz:0,ready:!1}}function Gs(n){return Math.atan2(Math.sin(n),Math.cos(n))}function Qn(n,t,e){return Math.max(t,Math.min(e,n))}function Ln(n){return typeof n=="number"&&isFinite(n)}function vi(n,t,e,i,r,s){const a=i*i,o=2*i,c=t+((e-n)*a-t*o)*r;s[0]=n+c*r,s[1]=c}function Js(n,t,e,i,r,s){const a=Math.sin(s),o=Math.cos(s);n.px=e-a*t.camDist,n.py=i+t.camHeight,n.pz=r-o*t.camDist,n.pvx=0,n.pvy=0,n.pvz=0,n.lx=e+a*t.lookAhead,n.ly=i+t.lookHeight,n.lz=r+o*t.lookAhead,n.lvx=0,n.lvy=0,n.lvz=0,n.fov=t.baseFov,n.fovV=0,n.camH=Gs(s),n.driftMix=0,n.impx=0,n.impy=0,n.impz=0,n.ready=!0}function pv(n,t,e,i,r,s,a,o){let c=n;i>8?c=Math.atan2(t,e):a&&(r!==0||s!==0)&&(c=Math.atan2(r,s));const h=Gs(n-c),u=Qn(i/8,0,1),f=(1-.75*Qn(o,0,1))*u;return c+h*f}function mv(n,t,e){return n.baseFov+Qn(t/n.fullSpeed,0,1)*n.speedFov+Qn(e,0,1)*n.driftFov}const ue=[0,0];function gv(n,t,e){const i=e.dt;if(!Ln(i)||i<=0||!Ln(e.px)||!Ln(e.py)||!Ln(e.pz)||!Ln(e.heading)||!Ln(e.vx)||!Ln(e.vz))return;if(!n.ready){Js(n,t,e.px,e.py,e.pz,e.heading);return}const r=i>t.maxDt?t.maxDt:i,s=Qn(e.speed,0,200),a=e.drifting?1:0;n.driftMix+=(a-n.driftMix)*(1-Math.exp(-t.driftLambda*r)),n.driftMix=Qn(n.driftMix,0,1);const o=pv(e.heading,e.vx,e.vz,s,e.tangentX,e.tangentZ,e.hasTangent,n.driftMix);n.camH+=Gs(o-n.camH)*(1-Math.exp(-t.headLambda*r)),n.camH=Gs(n.camH);const c=Math.sin(n.camH),h=Math.cos(n.camH),u=Math.max(t.feedforward*(2/t.posLambda)-r,0),f=e.px-c*t.camDist+e.vx*u,d=e.py+t.camHeight,p=e.pz-h*t.camDist+e.vz*u;vi(n.px,n.pvx,f,t.posLambda,r,ue),n.px=ue[0],n.pvx=ue[1],vi(n.py,n.pvy,d,t.posLambda,r,ue),n.py=ue[0],n.pvy=ue[1],vi(n.pz,n.pvz,p,t.posLambda,r,ue),n.pz=ue[0],n.pvz=ue[1];const g=Math.max(t.feedforward*(2/t.lookLambda)-r,0),_=e.px+c*t.lookAhead+e.vx*g,m=e.py+t.lookHeight,l=e.pz+h*t.lookAhead+e.vz*g;if(vi(n.lx,n.lvx,_,t.lookLambda,r,ue),n.lx=ue[0],n.lvx=ue[1],vi(n.ly,n.lvy,m,t.lookLambda,r,ue),n.ly=ue[0],n.lvy=ue[1],vi(n.lz,n.lvz,l,t.lookLambda,r,ue),n.lz=ue[0],n.lvz=ue[1],vi(n.fov,n.fovV,mv(t,s,n.driftMix),t.fovLambda,r,ue),n.fov=ue[0],n.fovV=ue[1],e.landed&&Ln(e.landV)&&e.landV<0&&(n.impy-=Qn(-e.landV/22,0,1)*.9),e.wallHit&&Ln(e.wallVn)&&e.wallVn>0){const v=Qn(e.wallVn/25,0,1)*.8,D=Math.hypot(e.vx,e.vz);D>1e-6&&(n.impx-=e.vx/D*v,n.impz-=e.vz/D*v)}const x=Math.hypot(n.impx,n.impy,n.impz);if(x>t.maxImpulse&&x>0){const v=t.maxImpulse/x;n.impx*=v,n.impy*=v,n.impz*=v}const M=Math.exp(-t.impulseDecay*r);n.impx*=M,n.impy*=M,n.impz*=M}function _v(n,t){t.x=n.px+n.impx,t.y=n.py+n.impy,t.z=n.pz+n.impz}function xv(n){return Math.hypot(n.impx,n.impy,n.impz)}function vv(n={}){const t=n.mobile??!1;return{halfW:n.halfW??8,wallStep:n.wallStep??14,scrubStep:n.scrubStep??(t?20:12),mobile:t}}const li={MAX_WALLS:700,MAX_MESAS:40,MAX_ARCHES:4,MAX_SCRUB:420},Ri={MIN_WALL_LATERAL:17,INSIDE_LATERAL:26,INSIDE_HEIGHT_CAP:22,MAX_SCRUB_H:1.6,MIN_ARCH_LATERAL:22},Mv=15380867,$e={GUARD_OUT:2.6,SHOULDER:2,SCRUB_OUT:3.1,CURVE_EXTRA:3,JITTER:.6,PUSHBACK:14};function si(n){return n+$e.GUARD_OUT+$e.SHOULDER}function Us(n,t,e){const i=n*Math.abs(Math.cos(e)),r=t*.4*Math.abs(Math.sin(e));return Math.sqrt(i*i+r*r)+$e.JITTER}function Ns(n,t){return Math.max(n,t)*1+$e.JITTER}function Gh(n){return n*1.28+$e.JITTER}function kh(n){return .9*n+.3}function It(n){let t=Math.imul(n|0,2654435761);return t^=t>>>15,t=Math.imul(t,2246822519),t^=t>>>13,(t>>>0)/4294967296}function Sv(n){const t=[[.4,.19,.1],[.6,.3,.15],[.75,.43,.23],[.87,.59,.37],[.84,.79,.7]],e=Math.min(.999,Math.max(0,n))*(t.length-1),i=Math.floor(e),r=e-i,s=t[i],a=t[i+1];return[s[0]+(a[0]-s[0])*r,s[1]+(a[1]-s[1])*r,s[2]+(a[2]-s[2])*r]}function vs(n){return n.dir==="L"?-1:1}function Fl(n,t){for(const e of n)if(t>=e.startS-20&&t<=e.endS)return e;return null}const Ms=!0,Vh=300,Fa=[1.25,1.18,1.08];function yv(n){return n>=Vh}function Ev(n){const t=Math.floor(n/3);return It(t*131+7)<.36?"vista":"cut"}function Wh(n,t,e){const i=[],r=[];if(n.length<2)return{near:i,far:r};const s=n[n.length-1];let a=0,o=0,c=0,h=e.wallStep;for(let d=1;d<n.length-1&&h<s-10;d++){if(n[d]<h)continue;h=n[d]+e.wallStep;const p=n[d],g=Fl(t,p);let _=Ev(o);if(_==="cut"&&c>=4&&(_="vista"),o++,c=_==="vista"?0:c+1,_==="vista"){a++;const m=It(o*29+1)<.5?-1:1;let l=12+It(a*2+2)*20;g&&m===vs(g)&&(l=Math.min(l,Ri.INSIDE_HEIGHT_CAP));const x=8+It(a*2+3)*12,M=e.wallStep*2,v=(It(a*3+5)-.5)*.9,D=g!==null&&m===vs(g),C=Math.max(48+It(a*2+1)*45,si(e.halfW)+Us(x,M,v)+(D?$e.CURVE_EXTRA:0));i.push({idx:d,side:m,lateral:C,h:l,w:x,segLen:M,tint:a,yaw:v})}else{const l=.72+It(Math.floor(o/5)*57+3)*.65;for(const x of[1,-1]){a++;let M=(14+It(a*2+2)*18)*l;const v=g!==null&&x===vs(g);v&&(M=Math.min(M,Ri.INSIDE_HEIGHT_CAP));const D=6+It(a*2+3)*8,C=e.wallStep*1.6,w=(It(a*3+5)-.5)*.9,P=Math.max(17+It(a*2+1)*17,v?Ri.INSIDE_LATERAL:Ri.MIN_WALL_LATERAL,si(e.halfW)+Us(D,C,w)+(v?$e.CURVE_EXTRA:0))+$e.PUSHBACK;i.push({idx:d,side:x,lateral:P,h:M,w:D,segLen:C,tint:a,yaw:w})}}}let u=0,f=60;for(let d=1;d<n.length-1&&f<s-10;d++)if(!(n[d]<f)){f=n[d]+60;for(const p of[1,-1]){u++;const g=30+It(1299709+u)*40,_=90,m=(It((5e3+u)*3+5)-.5)*.9,l=Fl(t,n[d]),x=l!==null&&p===vs(l);r.push({idx:d,side:p,lateral:Math.max(70+It(7919+u*2)*60,si(e.halfW)+Us(g,_,m)+(x?$e.CURVE_EXTRA:0)),h:40+It(104729+u*2)*50,w:g,segLen:_,tint:5e3+u,yaw:m})}}return i.length+r.length>li.MAX_WALLS&&(i.length=Math.max(0,li.MAX_WALLS-r.length)),{near:i,far:r}}function Dr(n,t){return t*(.7+It(n*13+4)*.5)}function Xh(n,t=8){const e=[],i=n.points.length;if(i<2)return e;const r=p=>Zo(n.cum,n.cum[i-1]*p);[.12,.25,.4,.55,.7,.85].forEach((p,g)=>{const _=r(p),m=n.points[_],l=n.normals[_],x=g%2?-1:1,M=40+It(77+g*13)*50,v=Math.max(90+It(31+g*7)*120,si(t)+Ns(M,Dr(g,M)));e.push({x:m.x+l.x*x*v,y:m.y-8,z:m.z+l.z*x*v,w:M,h:50+It(101+g*17)*40,haze:0,tint:g})});let a=1/0,o=-1/0,c=1/0,h=-1/0,u=1/0;for(const p of n.points)p.x<a&&(a=p.x),p.x>o&&(o=p.x),p.z<c&&(c=p.z),p.z>h&&(h=p.z),p.y<u&&(u=p.y);const f=(a+o)/2,d=(c+h)/2;for(let p=0;p<8;p++){const g=p/8*Math.PI*2+It(1001+p)*.5,_=420+It(2002+p*3)*320;e.push({x:f+Math.cos(g)*_,y:u-20-It(3003+p)*20,z:d+Math.sin(g)*_,w:120+It(4004+p*5)*110,h:90+It(5005+p*7)*70,haze:.55,tint:100+p})}return[.33,.66].forEach((p,g)=>{const _=r(p),m=n.points[_],l=n.normals[_],x=g===0?1:-1,M=6+It(7007+g)*3,v=Math.max(55+It(6006+g)*20,si(t)+Ns(M,Dr(200+g,M)));e.push({x:m.x+l.x*x*v,y:m.y-6,z:m.z+l.z*x*v,w:M,h:70+It(8008+g)*25,haze:0,tint:200+g})}),[.03,.5].forEach((p,g)=>{const _=r(p),m=n.points[_],l=n.normals[_];for(const x of[1,-1]){const M=Vh+g*2+(x<0?1:0),v=3+It(6100+M)*1.5,D=Math.max(si(t)+Ns(v,Dr(M,v))+1.5,Ri.MIN_WALL_LATERAL);e.push({x:m.x+l.x*x*D,y:m.y-4,z:m.z+l.z*x*D,w:v,h:30+It(6200+M)*12,haze:0,tint:M})}}),e.length>li.MAX_MESAS&&(e.length=li.MAX_MESAS),e}function qh(n,t){const e=[];if(n.length<2)return e;const i=n[n.length-1];return[.3,.55,.8].forEach((r,s)=>{const a=i*r;if(a<30||a>i-30)return;const o=8+It(9111+s*13)*4,c=Math.max(24+It(9009+s*11)*8,Ri.MIN_ARCH_LATERAL,si(t.halfW)+Gh(o))+$e.PUSHBACK;e.push({idx:Zo(n,a),side:s%2?-1:1,lateral:c,r:o})}),e.length>li.MAX_ARCHES&&(e.length=li.MAX_ARCHES),e}function Yh(n,t){const e=[];if(n.length<2)return e;const i=n[n.length-1];let r=0,s=t.scrubStep;for(let a=1;a<n.length-1&&s<i-8;a++)if(!(n[a]<s)){s=n[a]+t.scrubStep;for(const o of[1,-1]){r++;const c=1+It(12004+r*5)*1.6;e.push({idx:a,side:o,lateral:Math.max(t.halfW+3.5+It(11003+r*3)*4.5,t.halfW+$e.SCRUB_OUT+kh(c)),w:c,h:Math.min(.8+It(13005+r*7)*.8,Ri.MAX_SCRUB_H),tint:r})}}return e.length>li.MAX_SCRUB&&(e.length=li.MAX_SCRUB),e}function Ss(n,t,e,i){let r=1/0,s=t,a=e;const o=n.points;for(let c=0;c<o.length;c++){const h=t-o[c].x,u=e-o[c].z,f=Math.sqrt(h*h+u*u);f<r&&(r=f,s=o[c].x,a=o[c].z)}return i.x=s,i.z=a,r}const ys=8;function $h(n,t,e,i,r,s){const a=si(s),o=s+$e.SCRUB_OUT,c={x:0,z:0},h=(m,l,x)=>{const M=n.points[m],v=n.normals[m];return{x:M.x+v.x*l*x,z:M.z+v.z*l*x}},u=m=>a+Us(m.w,m.segLen,m.yaw)+$e.CURVE_EXTRA,f=[],d=[];for(const m of[t.near,t.far]){const l=m===t.near?f:d;for(const x of m){let M=x,v=!1;for(let D=0;D<ys;D++){const C=h(M.idx,M.side,M.lateral),w=Ss(n,C.x,C.z,c);if(w>=u(M)){v=!0;break}const P=u(M)-w+.5;M={...M,lateral:M.lateral+P}}v&&l.push(M)}}const p=[];for(const m of e){if(m.haze>0){p.push(m);continue}let l=m.x,x=m.z;const M=Ns(m.w,Dr(m.tint,m.w));let v=!1;for(let D=0;D<ys;D++){const C=Ss(n,l,x,c);if(C>=a+M){v=!0;break}const w=a+M-C+.5;let P=l-c.x,T=x-c.z;const S=Math.sqrt(P*P+T*T);S<1e-6?(P=1,T=0):(P/=S,T/=S),l+=P*w,x+=T*w}v&&p.push({...m,x:l,z:x})}const g=[];for(const m of i){let l=m;const x=a+Gh(l.r);let M=!1;for(let v=0;v<ys;v++){const D=h(l.idx,l.side,l.lateral),C=Ss(n,D.x,D.z,c);if(C>=x){M=!0;break}l={...l,lateral:l.lateral+(x-C)+.5}}M&&g.push(l)}const _=[];for(const m of r){let l=m;const x=o+kh(l.w);let M=!1;for(let v=0;v<ys;v++){const D=h(l.idx,l.side,l.lateral),C=Ss(n,D.x,D.z,c);if(C>=x){M=!0;break}l={...l,lateral:l.lateral+(x-C)+.5}}M&&_.push(l)}return{walls:{near:f,far:d},mesas:p,arches:g,scrub:_}}function Tv(n,t,e){if(n.cum.length<2)return{walls:0,farWalls:0,mesas:0,arches:0,scrub:0};const i=$h(n,Wh(n.cum,t,e),Xh(n,e.halfW),qh(n.cum,e),Yh(n.cum,e),e.halfW);return{walls:i.walls.near.length+i.walls.far.length,farWalls:i.walls.far.length,mesas:i.mesas.length,arches:i.arches.length,scrub:i.scrub.length}}const Ol=new WeakMap;function Oa(n,t){const e=n.getAttribute("position");for(let i=0;i<e.count;i++){const r=.5+Math.abs(e.getY(i));e.setX(i,e.getX(i)+(It(t+i*3+1)-.5)*.24*r),e.setZ(i,e.getZ(i)+(It(t+i*3+2)-.5)*.24*r),e.setY(i,e.getY(i)+(It(t+i*3+3)-.5)*.1)}e.needsUpdate=!0,n.computeVertexNormals()}function za(n,t,e){const i=t.getAttribute("position"),r=new Float32Array(i.count*3);t.computeBoundingBox();const s=t.boundingBox,a=s?s.min.y:0,o=s&&s.max.y-s.min.y>1e-6?s.max.y-s.min.y:1;for(let c=0;c<i.count;c++){const h=Math.min(.999,Math.max(0,(i.getY(c)-a)/o)),u=Sv(Math.floor(h*e)/(e-1));r[c*3]=u[0],r[c*3+1]=u[1],r[c*3+2]=u[2]}t.setAttribute("color",new n.BufferAttribute(r,3))}function Av(n){let t=Ol.get(n);if(!t){const e=new n.CylinderGeometry(.58,1,1,5,2);e.translate(0,.5,0),Oa(e,211),za(n,e,4);const i=new n.CylinderGeometry(.7,1,1,7,1);i.translate(0,.5,0),Oa(i,412),za(n,i,4);const r=new n.CylinderGeometry(.72,1,1,8,3);r.translate(0,.5,0),Oa(r,977),za(n,r,4);const s=new n.TorusGeometry(1,.28,6,12),a=new n.ConeGeometry(.9,1,6);a.translate(0,.5,0),t={wallGeo:e,farGeo:i,mesaGeo:r,archGeo:s,scrubGeo:a,wallMat:new n.MeshLambertMaterial({vertexColors:!0,flatShading:Ms}),farMat:new n.MeshLambertMaterial({vertexColors:!0,flatShading:Ms}),mesaMat:new n.MeshLambertMaterial({vertexColors:!0,flatShading:Ms}),archMat:new n.MeshLambertMaterial({color:12876357,flatShading:Ms}),scrubMat:new n.MeshLambertMaterial({color:16777215})},Ol.set(n,t)}return t}function bv(n,t,e,i={}){const r=vv(i),s=e.events??[],a=Tv(e,s,r),o=Av(n),c=new n.Group;c.name="canyon-environment",t.add(c);const h=new n.Matrix4,u=new n.Quaternion,f=new n.Euler,d=new n.Vector3,p=new n.Vector3,g=new n.Color,_=new n.Color(Mv),m=L=>Math.atan2(e.tangents[L].x,e.tangents[L].z),l=[];let x=null,M=null,v=0,D=0,C=0;const w=(L,U,R)=>{const N=e.points[U.idx],q=e.normals[U.idx];f.set(0,m(U.idx)+U.yaw,0),u.setFromEuler(f),d.set(N.x+q.x*U.side*U.lateral,N.y-10,N.z+q.z*U.side*U.lateral),p.set(U.w,U.h,U.segLen*.4),h.compose(d,u,p),L.setMatrixAt(R,h);const X=.85+It(U.tint*7+1)*.3;L.setColorAt(R,g.setRGB(X,X*.98,X*.95))},P=$h(e,Wh(e.cum,s,r),Xh(e,r.halfW),qh(e.cum,r),Yh(e.cum,r),r.halfW),T=P.walls;if(T.near.length>0){const L=new n.InstancedMesh(o.wallGeo,o.wallMat,T.near.length);for(let U=0;U<T.near.length;U++)w(L,T.near[U],U);L.instanceMatrix.needsUpdate=!0,L.instanceColor&&(L.instanceColor.needsUpdate=!0),c.add(L),l.push(L)}if(v=T.far.length,T.far.length>0){x=new n.InstancedMesh(o.farGeo,o.farMat,T.far.length);for(let L=0;L<T.far.length;L++)w(x,T.far[L],L);x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),c.add(x),l.push(x)}const S=P.mesas;if(S.length>0){const L=new n.InstancedMesh(o.mesaGeo,o.mesaMat,S.length);for(let U=0;U<S.length;U++){const R=S[U];if(f.set(0,It(R.tint*11+2)*Math.PI,0),u.setFromEuler(f),d.set(R.x,R.y,R.z),p.set(R.w,R.h,Dr(R.tint,R.w)),h.compose(d,u,p),L.setMatrixAt(U,h),yv(R.tint))g.setRGB(Fa[0],Fa[1],Fa[2]);else{const N=.85+It(R.tint*17+6)*.3;g.setRGB(N,N*.98,N*.95)}R.haze>0&&g.lerp(_,R.haze),L.setColorAt(U,g)}L.instanceMatrix.needsUpdate=!0,L.instanceColor&&(L.instanceColor.needsUpdate=!0),c.add(L),l.push(L)}const b=P.arches;if(b.length>0){const L=new n.InstancedMesh(o.archGeo,o.archMat,b.length);for(let U=0;U<b.length;U++){const R=b[U],N=e.points[R.idx],q=e.normals[R.idx];f.set(0,m(R.idx),0),u.setFromEuler(f),d.set(N.x+q.x*R.side*R.lateral,N.y+R.r*.9,N.z+q.z*R.side*R.lateral),p.set(R.r,R.r*1.2,R.r),h.compose(d,u,p),L.setMatrixAt(U,h)}L.instanceMatrix.needsUpdate=!0,c.add(L),l.push(L)}const B=P.scrub;if(D=B.length,C=Math.floor(B.length/2),B.length>0){M=new n.InstancedMesh(o.scrubGeo,o.scrubMat,B.length);for(let L=0;L<B.length;L++){const U=B[L],R=e.points[U.idx],N=e.normals[U.idx];f.set(0,It(U.tint*19+8)*Math.PI*2,0),u.setFromEuler(f),d.set(R.x+N.x*U.side*U.lateral,R.y-.1,R.z+N.z*U.side*U.lateral),p.set(U.w,U.h,U.w),h.compose(d,u,p),M.setMatrixAt(L,h),M.setColorAt(L,g.setHSL(.13+It(U.tint*23+9)*.06,.3+It(U.tint*29+3)*.2,.24+It(U.tint*31+7)*.1))}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M)}return{counts:a,setQuality(L){x&&(x.count=L?0:v),M&&(M.count=L?C:D)},update(L){},dispose(){for(const L of l)c.remove(L),L.dispose();t.remove(c)}}}function wv(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}const Qs=t_(location.search),je=Qs.day||wv(),ti=Qs.timeMs;let ks=null;try{const n=Ks(localStorage.getItem(`canyon-ghost-${je}`));n&&n.p.length>1&&(ks=n)}catch{}let rn=null,un=null,rr="";const Kh=document.getElementById("game"),Bn=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Bn&&document.body.classList.add("touchmode");const sr=new x0({canvas:Kh,antialias:!Bn,powerPreference:"high-performance"});sr.setPixelRatio(Math.min(devicePixelRatio||1,Bn?1.5:2));sr.setSize(innerWidth,innerHeight);const re=new v0;re.background=new At(16172169);re.fog=new Vo(15380867,120,700);{const n=new Nn({side:Le,depthWrite:!1,fog:!1,uniforms:{top:{value:new At(3042264)},mid:{value:new At(10470382)},bot:{value:new At(16172169)}},vertexShader:`
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
      }`}),t=new le(new Xo(1500,24,12),n);t.frustumCulled=!1,re.add(t)}const me=new nn(64,innerWidth/innerHeight,.1,2e3);re.add(new E0(16769216,8010530,1));const jh=new b0(16767400,1.6);jh.position.set(-120,180,60);re.add(jh);addEventListener("resize",()=>{me.aspect=innerWidth/innerHeight,me.updateProjectionMatrix(),sr.setSize(innerWidth,innerHeight)});const ye=Zs(js("canyon-"+je)),ze=Qx(je);typeof console<"u"&&console.log("[canyon-debug] track",je,"attempt",ze.attempt,"fallback",ze.fallback,"len",ze.stats.length.toFixed(0),"est",ze.estTimeS.toFixed(1)+"s");const Jt=ze.points.map(n=>new H(n.x,n.y,n.z)),hi=Px,Vs=q0(je,ze.checksum);{const n=Dh({shared:Qs.ghost,pb:ks,expected:Vs});rn=n.rival,un=rn?rn.ghost:null,rr=n.notice,rr&&typeof console<"u"&&console.log("[canyon-debug] rival",n.status,rr)}const ge=mx(Jt.map(n=>({x:n.x,y:n.y,z:n.z})),hi),Sn=ge.tx.map((n,t)=>new H(n,0,ge.tz[t])),dr=ge.nx.map((n,t)=>new H(n,0,ge.nz[t])),Fn=jx(ze.points);ge.barrier=P0(Fn[Fn.length-1],ze.stats.events,ze.crestS);typeof console<"u"&&console.log("[canyon-debug] barriers",`spans=${ge.barrier.spans.length}`);const Ir=wx(ze.stats.events).map(n=>Rx(Fn,n));let ji=Ir.map(()=>null),zl=0;{const n=Jt[Jt.length-1],t=(Jt[0].x+n.x)/2,e=(Jt[0].z+n.z)/2,i=new le(new zn(2600,2600),new mn({color:13201215}));i.rotation.x=-Math.PI/2,i.position.set(t,-2.5,e),re.add(i);const r=new le(new ci(760,820,24,28),new mn({color:11096108}));r.position.set(t,-14,e),re.add(r)}function Jo(n,t,e){const i=Jt.length,r=new Float32Array(i*2*3),s=new Float32Array(i*2*3),a=[],o=new At;for(let h=0;h<i;h++){for(let u=0;u<2;u++){const f=u===0?1:-1,d=Jt[h].clone().addScaledVector(dr[h],f*n);r.set([d.x,Jt[h].y+t,d.z],(h*2+u)*3),o.copy(e(h,f)),s.set([o.r,o.g,o.b],(h*2+u)*3)}if(h<i-1){const u=h*2,f=h*2+1,d=(h+1)*2,p=(h+1)*2+1;a.push(u,f,d,f,p,d)}}const c=new He;return c.setAttribute("position",new De(r,3)),c.setAttribute("color",new De(s,3)),c.setIndex(a),c.computeVertexNormals(),new le(c,new mn({vertexColors:!0,side:fn}))}const Rv=new At(4012608),Cv=new At(4538954);re.add(Jo(hi,.15,n=>Math.floor(Fn[n]/40)%2?Rv:Cv));re.add(Jo(hi+4,.05,()=>new At(13208916)));const Lv=new At(15258536),Pv=new At(14170666),Dv=new At(15920610);re.add(Jo(hi+1.1,.12,(n,t)=>{const i=Math.floor(Fn[n]/14)%2?Pv:Dv;return ge.barrier&&!Yo(ge.barrier,Fn[n],t>=0?1:-1)?i.clone().lerp(Lv,.6):i}));{const n=new zn(.35,3);n.rotateX(-Math.PI/2);const t=new Ye({color:16117725}),e=Zx(Fn,16).filter(c=>c>=6&&c<Jt.length-6),i=new Gr(n,t,e.length),r=new $t,s=new On,a=new Be,o=new H(1,1,1);e.forEach((c,h)=>{a.set(0,Math.atan2(Sn[c].x,Sn[c].z),0),s.setFromEuler(a),r.compose(new H(Jt[c].x,Jt[c].y+.19,Jt[c].z),s,o),i.setMatrixAt(h,r)}),i.instanceMatrix.needsUpdate=!0,re.add(i)}const Zh=new zn(2,1.15);Zh.rotateX(-Math.PI/2);const Iv=new Ye({color:15920610}),Uv=new Ye({color:1315860});function Nv(n){const t=Math.atan2(Sn[n].x,Sn[n].z);for(let e=0;e<2;e++)for(let i=0;i<8;i++){const r=new le(Zh,(e+i)%2?Uv:Iv),s=(i-3.5)*2,a=(e-.5)*1.15;r.position.set(Jt[n].x+dr[n].x*s+Sn[n].x*a,Jt[n].y+.21,Jt[n].z+dr[n].z*s+Sn[n].z*a),r.rotation.y=t,re.add(r)}}const Jh={BoxGeometry:ie,PlaneGeometry:zn,MeshLambertMaterial:mn,MeshBasicMaterial:Ye,InstancedMesh:Gr,Group:Jn,Matrix4:$t,Quaternion:On,Euler:Be,Vector3:H,Color:At,DoubleSide:fn},ei=fv(Jh,re,{points:Jt,tangents:Sn,normals:dr,cum:Fn,events:ze.stats.events,crestS:ze.crestS},{mobile:Bn,halfW:hi,barriers:ge.barrier});ei.setQuality(Bn);const Fv={...Jh,CylinderGeometry:ci,ConeGeometry:Wo,TorusGeometry:qo,BufferAttribute:De},Ov=bv(Fv,re,{points:Jt,tangents:Sn,normals:dr,cum:Fn,events:ze.stats.events,crestS:ze.crestS},{mobile:Bn,halfW:hi});Ov.setQuality(Bn);typeof console<"u"&&console.log("[canyon-debug] visuals",`guards=${ei.counts.guardrails} chevrons=${ei.counts.chevrons} ticks=${ei.counts.ticks} dust=${ei.counts.dust}`);{const n=new $s(1,10);n.rotateX(-Math.PI/2);const t=new mn({color:16777215}),e=70,i=new Gr(n,t,e),r=new $t,s=new At;let a=0,o=0;for(;a<e&&o++<2e3;){const c=(ye()-.5)*1100,h=(ye()-.5)*1100;let u=1e9;for(let d=0;d<Jt.length;d+=12){const p=Jt[d].x-c,g=Jt[d].z-h,_=p*p+g*g;_<u&&(u=_)}if(u<1600)continue;const f=6+ye()*22;r.makeScale(f,1,f*(.6+ye()*.6)),r.setPosition(c,-2.35,h),i.setMatrixAt(a,r),i.setColorAt(a,s.setHSL(.03+ye()*.04,.5+ye()*.2,.22+ye()*.1)),a++}i.count=a,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),re.add(i)}{const n=new ci(.35,.55,1,7);n.translate(0,.5,0);const t=new mn({color:16777215}),e=Bn?70:120,i=new Gr(n,t,e),r=new $t,s=new On,a=new Be,o=new H,c=new H,h=new At;let u=0,f=0;for(;u<e&&f++<6e3;){const d=(ye()-.5)*1e3,p=(ye()-.5)*1e3;let g=1e9;for(let m=0;m<Jt.length;m+=12){const l=Jt[m].x-d,x=Jt[m].z-p,M=l*l+x*x;M<g&&(g=M)}if(g<1600)continue;const _=3+ye()*4;a.set((ye()-.5)*.14,ye()*3,(ye()-.5)*.14),s.setFromEuler(a),o.set(d,-2.5,p),c.set(.8+ye()*.9,_,.8+ye()*.9),r.compose(o,s,c),i.setMatrixAt(u,r),i.setColorAt(u,h.setHSL(.29+ye()*.04,.4+ye()*.2,.26+ye()*.1)),u++}i.count=u,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),re.add(i)}function Qh(n,t){const e=Jt[n],i=dr[n],r=Math.atan2(Sn[n].x,Sn[n].z),s=-Math.cos(r),a=Math.sin(r),o=new mn({color:2236962});for(const c of[1,-1]){const h=new le(new ie(1.4,9,1.4),o),u=e.clone().addScaledVector(i,c*(hi+1.5));h.position.set(u.x,e.y+4.5,u.z),re.add(h)}if(t)for(let c=0;c<10;c++){const h=new le(new ie(1.9,1.4,1.4),new Ye({color:c%2?1118481:16777215})),u=(c-4.5)*1.9;h.position.set(e.x+s*u,e.y+9,e.z+a*u),h.rotation.y=r,re.add(h)}else{const c=new le(new ie((hi+1.5)*2,1.4,1.4),o);c.position.set(e.x,e.y+9,e.z),c.rotation.y=r,re.add(c)}Nv(n)}Qh(0,!1);Qh(Jt.length-1,!0);function tu(n,t=!1){const e=new Jn,i=t?new Ye({color:n,transparent:!0,opacity:.45}):new mn({color:n}),r=t?i:new mn({color:2302762}),s=t?i:new mn({color:10475775}),a=(d,p,g,_,m)=>{const l=new le(d,p);return l.position.set(g,_,m),e.add(l),l};if(a(new ie(2.3,.55,4.6),i,0,.8,0),a(new ie(2,.3,1),i,0,.55,2.5),a(new ie(2.34,.22,4),r,0,.42,0),a(new ie(.18,.3,1.4),i,-1.2,.95,.9),a(new ie(.18,.3,1.4),i,1.2,.95,.9),a(new ie(1.6,.55,1.9),s,0,1.3,-.2),a(new ie(1.7,.1,2),i,0,1.62,-.2),a(new ie(2.4,.12,.7),r,0,1.72,-2),a(new ie(.14,.5,.4),r,-.8,1.4,-2),a(new ie(.14,.5,.4),r,.8,1.4,-2),a(new ie(.3,.18,.5),i,-1.05,1.35,.6),a(new ie(.3,.18,.5),i,1.05,1.35,.6),a(new ie(.5,.28,.3),r,-.5,.6,-2.35),a(new ie(.5,.28,.3),r,.5,.6,-2.35),!t){const d=new Ye({color:16774080}),p=new Ye({color:16722474});a(new ie(.45,.18,.1),d,-.7,.82,2.32),a(new ie(.45,.18,.1),d,.7,.82,2.32),a(new ie(.45,.16,.1),p,-.7,.85,-2.32),a(new ie(.45,.16,.1),p,.7,.85,-2.32),e.userData.tail=p}const o=new ci(.45,.45,.4,12);o.rotateZ(Math.PI/2);const c=t?i:new mn({color:1315860}),h=t?i:new Ye({color:14211294}),u=[],f=[];for(const[d,p,g]of[[-1.15,1.5,1],[1.15,1.5,1],[-1.15,-1.5,0],[1.15,-1.5,0]]){const _=new Jn;_.position.set(d,.45,p);const m=new Jn;m.add(new le(o,c));const l=new le(new ci(.2,.2,.44,8).rotateZ(Math.PI/2),h);m.add(l),_.add(m),e.add(_),f.push(m),g&&u.push(_)}return e.userData.wheels={steer:u,spin:f},e}const ai=tu(16742938);ai.rotation.order="YXZ";re.add(ai);const Nr=tu(3528447,!0);Nr.visible=!!un;re.add(Nr);const Bl=ai.userData.wheels,Fr=new le((()=>{const n=new $s(2.4,20);return n.rotateX(-Math.PI/2),n})(),new Ye({color:0,transparent:!0,opacity:.32,depthWrite:!1}));re.add(Fr);const Qo=500,qe=new Gr((()=>{const n=new zn(1,1);return n.rotateX(-Math.PI/2),n})(),new Ye({transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Qo);qe.frustumCulled=!1;qe.renderOrder=1;re.add(qe);let Es=0;const eu=new At(4867920),zv=new At(920846),Hl=new At;{const n=new $t().makeScale(0,0,0);for(let t=0;t<Qo;t++)qe.setMatrixAt(t,n),qe.setColorAt(t,eu);qe.instanceMatrix.needsUpdate=!0,qe.instanceColor&&(qe.instanceColor.needsUpdate=!0)}const Gl=new $t,kl=new On,Vl=new Be,Wl=new H,Xl=new H;function Bv(n,t,e,i,r,s,a){Vl.set(0,i,0),kl.setFromEuler(Vl),Wl.set(n,t,e),Xl.set(r,1,s),Gl.compose(Wl,kl,Xl),qe.setMatrixAt(Es,Gl),Hl.copy(eu).lerp(zv,a),qe.setColorAt(Es,Hl),Es=(Es+1)%Qo,qe.instanceMatrix.needsUpdate=!0,qe.instanceColor&&(qe.instanceColor.needsUpdate=!0)}let hn=0,Ws=0;const tc=new He;tc.setAttribute("position",new De(ei.dust.positions,3));const nu=new y0(tc,new Ah({color:15254682,size:1.1,transparent:!0,opacity:.45}));nu.frustumCulled=!1;re.add(nu);const pe={steer:0,drift:!1,left:!1,right:!1,keyDrift:!1},yn=new gx;addEventListener("keydown",n=>{(n.key==="f"||n.key==="F")&&(Fs=!Fs,cu.classList.toggle("hidden",!Fs)),!n.repeat&&((n.key==="ArrowLeft"||n.key==="a")&&(pe.left=!0),(n.key==="ArrowRight"||n.key==="d")&&(pe.right=!0),(n.key==="ArrowDown"||n.key===" ")&&(pe.keyDrift=!0,n.preventDefault()),(n.key==="r"||n.key==="R")&&fu(),n.key==="Enter"&&Te==="menu"&&zr(!1),n.key==="Enter"&&Te==="finish"&&zr(!0))});addEventListener("keyup",n=>{(n.key==="ArrowLeft"||n.key==="a")&&(pe.left=!1),(n.key==="ArrowRight"||n.key==="d")&&(pe.right=!1),(n.key==="ArrowDown"||n.key===" ")&&(pe.keyDrift=!1)});const ta=document.getElementById("stick"),iu=document.getElementById("knob"),ar=document.getElementById("driftbtn"),Hv=document.getElementById("resetbtn");Hv.addEventListener("pointerdown",n=>{n.preventDefault(),fu()});ta.addEventListener("pointerdown",n=>{yn.stickDown(n.pointerId,n.clientX);try{n.target.setPointerCapture(n.pointerId)}catch{}});ta.addEventListener("pointermove",n=>{yn.stickMove(n.pointerId,n.clientX),iu.style.transform=`translate(calc(-50% + ${yn.joy*34}px), -50%)`});const ru=n=>{yn.stickUp(n.pointerId),yn.joyOn||(iu.style.transform="translate(-50%,-50%)")};ta.addEventListener("pointerup",ru);ta.addEventListener("pointercancel",ru);ar.addEventListener("pointerdown",n=>{yn.driftDown(n.pointerId);try{ar.setPointerCapture(n.pointerId)}catch{}ar.classList.add("on"),n.preventDefault()});const su=n=>{yn.driftUp(n.pointerId),yn.drift||ar.classList.remove("on")};ar.addEventListener("pointerup",su);ar.addEventListener("pointercancel",su);function Gv(){pe.left&&!pe.right?pe.steer=-1:pe.right&&!pe.left?pe.steer=1:pe.steer=yn.steer,pe.drift=pe.keyDrift||yn.drift}let Te="menu",Pr=0,Po=0;const vt=_x();let Or=!0;const fe=dv(),Ts={x:0,y:0,z:0};let Fs=!1,Ba=60,Ki=0,As={spd:0,drifting:!1,sIdx:0,pitch:0,launched:!1,landed:!1,finished:!1,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:"road",landV:0,impact:0,scraping:!1,stuckMs:0,oobMs:0};const au=`canyon-best-${je}`;let en=Number(localStorage.getItem(au)||0);const kv=document.getElementById("time"),Vv=document.getElementById("best"),Qe=document.getElementById("msg"),Wv=document.getElementById("progfill"),_n=document.getElementById("delta"),Zi=document.getElementById("split"),ec=document.getElementById("panel"),nc=document.getElementById("presult"),ou=document.getElementById("ptitle"),cu=document.getElementById("debug");document.getElementById("day").textContent=`CANYON DAILY · ${je}`;function lu(){Vv.textContent=en>0?`BEST ${Xe(en)}`:ti>0?`FRIEND ${Xe(ti)}`:"BEST —"}lu();function hu(){ai.position.set(vt.px,vt.py,vt.pz),ai.rotation.set(vt.pitch,vt.heading,0);const n=ge.y[vt.lastIdx]+.2;Fr.position.set(vt.px,n+.06,vt.pz),Fr.scale.setScalar(1+ee(vt.py-n,0,12)*.04)}function uu(n){Sx(vt,ge,n),hu(),Js(fe,kr,vt.px,vt.py,vt.pz,vt.heading),hn=0,Ws=0,Or=!0}function fu(){if(Te==="finish"){zr(!0);return}Te==="run"&&(yx(vt),hu(),Js(fe,kr,vt.px,vt.py,vt.pz,vt.heading),hn=0,Ws=0,Or=!0,Qe.textContent="")}uu(0);me.position.set(vt.px-10,vt.py+6,vt.pz-10);me.lookAt(vt.px,vt.py+1,vt.pz);let ql=!1,Os=3.1;function zr(n=!1){ec.classList.add("hidden"),Te="countdown",Pr=0,jn=0,Os=n&&ql?.7:3.1,ql=!0,uu(0),_n.textContent="",_n.className="",Zi.textContent="",ji=Ir.map(()=>null),me.position.set(fe.px,fe.py,fe.pz),me.lookAt(fe.lx,fe.ly,fe.lz),me.fov=fe.fov,me.updateProjectionMatrix(),Nr.visible=!!un}document.getElementById("drivebtn").onclick=()=>zr(Te==="finish");Kh.addEventListener("pointerdown",()=>{Te==="menu"&&zr()});document.getElementById("sharebtn").onclick=async()=>{const n=Te==="finish",t=n?Po:en;let e="";if(n)e=Lh(vt.rec,Po,$o,Vs);else try{e=localStorage.getItem(`canyon-ghost-${je}`)||""}catch{e=""}const i=Q0(location.origin,location.pathname,{day:je,timeMs:t,ghost:e}),r=i.includes("&g="),s=J0(je,t,i),a=await n_({requestNativeShare:o=>navigator.share(o),copyText:o=>navigator.clipboard.writeText(o)},{title:"Canyon Daily",text:s,url:i,hasGhost:r,isFinish:n},e_(Bn,typeof navigator.share=="function"));nc.textContent=a.message};const Xv=new H;function qv(n){Gv();const t=ee(pe.steer,-1,1),e=Tx(vt,ge,{steer:t,drift:pe.drift},n);e.finished&&Yv(),hn=iv(hn,nv(vt.driftAmt,Math.abs(e.slip),e.spd,vt.grounded,e.drifting),n),Ws++;const i=cv(hn);if(i>0){const s=lv(hn);for(let a=0;a<i;a++)ei.dust.spawn(vt.px,vt.py,vt.pz,s)}const r=ov(hn);if(r>0&&Ws%r===0){const s=ge.y[vt.lastIdx]+.2,a=Math.sin(vt.heading),o=Math.cos(vt.heading),c=-o,h=a,u=rv(hn),f=sv(hn),d=av(hn);for(const p of[1,-1])Bv(vt.px-a*1.5+c*1*p,s+.22,vt.pz-o*1.5+h*1*p,vt.heading,u,f,d)}return Xv.set(vt.vx,0,vt.vz),e}function Yv(){if(Te!=="run")return;Te="finish",jn=0,Js(fe,kr,vt.px,vt.py,vt.pz,vt.heading),Or=!0;const n=Math.round(vt.raceMs);Po=n;const t=en;if(!en||n<en){en=n;try{localStorage.setItem(au,String(en))}catch{}try{localStorage.setItem(`canyon-ghost-${je}`,Lh(vt.rec,n,$o,Vs))}catch{}try{const s=Ks(localStorage.getItem(`canyon-ghost-${je}`));ks=s&&s.p.length>1?s:null;const a=Dh({shared:Qs.ghost,pb:ks,expected:Vs});rn=a.rival,un=rn?rn.ghost:null,rr=a.notice}catch{}}lu();const e=en===n;ou.textContent=e?"NEW BEST!":"FINISH!";const i=!t||e?t?`by ${Xe(t-n)}`:"first finished run!":`+${Xe(n-t)} vs best`;nc.textContent=`${Xe(n)} · ${i} · best ${Xe(en)}${ti?` · friend ${Xe(ti)}`:""}`,ec.classList.remove("hidden");const r=document.getElementById("drivebtn");r.textContent="RETRY (Enter)",r.focus(),Qe.textContent=""}const $v=kv;let Yl=performance.now(),jn=0;const bs=1/60;function du(n){requestAnimationFrame(du);let t=Math.min((n-Yl)/1e3,.1);if(Yl=n,t>0&&(Ba=sn(Ba,1/t,.05)),Te==="menu"){const e=n/1e3;me.position.set(Jt[0].x+Math.cos(e*.15)*58,Jt[0].y+24,Jt[0].z+Math.sin(e*.15)*58),me.lookAt(Jt[0].x,Jt[0].y+1,Jt[0].z),ou.textContent=`CANYON DAILY · ${je}`,nc.textContent=`${en?`Your best ${Xe(en)} · `:""}${ti?`Friend ${Xe(ti)} · `:""}${rr?rr+" ":""}${rn||ti?$0(rn,ti):"Point-to-point sprint · flat out, drift the hairpins"}`,ec.classList.remove("hidden"),document.getElementById("drivebtn").textContent="DRIVE",_n.textContent="",_n.className="",Zi.textContent="",sr.render(re,me);return}if(Te==="countdown"){if(Pr+=t,Os>1){const e=3-Math.floor(Pr);Qe.textContent=e>0?String(e):"GO!"}else Qe.textContent=Pr>Os-.25?"GO!":"READY";Pr>Os&&(Te="run",Qe.textContent=""),sr.render(re,me);return}if(Te==="run"||Te==="finish"){if(Te==="run"){jn+=t;let e=0,i=null;for(;jn>=bs&&e<4&&Te==="run";)i=qv(bs),jn-=bs,e++;jn=Lx(jn),As=bx(As,e,i??As);const r=As;i&&i.wallHit===!0&&(Ki=Math.min(1,(i.wallSev??0)+.25));const s=Or?1:ee(jn/bs,0,1);Or=!1;const a=Ax(vt,s),o=sn(vt.prevRaceMs,vt.raceMs,s);if($v.textContent=Xe(vt.raceMs),Wv.style.width=`${r.sIdx/(ge.n-1)*100}%`,un&&rn){const f=wl(un,vt.px,vt.pz);if(f>=0){const d=vt.raceMs-f,p=rn.kind==="friend"?"FRIEND":"PB";_n.textContent=Rl(d,r.spd,p),_n.className=d<0?"ahead":"behind"}else _n.textContent="",_n.className=""}else _n.textContent="",_n.className="";for(let f=0;f<Ir.length;f++)if(ji[f]===null&&r.sIdx>=Ir[f]){if(ji[f]=Math.round(vt.raceMs),un){const d=Ir[f],p=wl(un,ge.x[d],ge.z[d]);Zi.textContent=p>=0?`S${f+1} ${Rl(ji[f]-p,r.spd,rn&&rn.kind==="friend"?"FRIEND":"PB")}`:`S${f+1} ${Xe(ji[f])}`}else Zi.textContent=`S${f+1} ${Xe(ji[f])}`;zl=n+1500}if(Zi.textContent!==""&&n>zl&&(Zi.textContent=""),r.stuckMs>1500?Qe.textContent="STUCK — R RESET":r.oobMs>900?Qe.textContent="OFF COURSE — R RESET":r.drifting?Qe.textContent="DRIFT":(Qe.textContent==="DRIFT"||Qe.textContent.startsWith("STUCK")||Qe.textContent.startsWith("OFF COURSE"))&&(Qe.textContent=""),un&&un.p.length>1){const f=Y0(un,o);Nr.position.set(f.x,f.y,f.z),Nr.rotation.set(0,f.h,0)}ai.position.set(a.x,a.y,a.z),Ki*=Math.exp(-5*t),Ki<.001&&(Ki=0);const c=Ki>0?Math.sin(n*.09)*.18*Ki:0;ai.rotation.set(a.pitch,a.h,-pe.steer*(.05+fe.driftMix*.09)+c);const h=ai.userData.tail;h&&h.color.setHex(fe.driftMix>.4||pe.drift?16734762:16722474);const u=ge.y[r.sIdx]+.2;Fr.position.set(a.x,u+.06,a.z),Fr.scale.setScalar(1+ee(a.y-u,0,12)*.04),gv(fe,kr,{dt:t,px:a.x,py:a.y,pz:a.z,heading:a.h,vx:vt.vx,vz:vt.vz,speed:r.spd,drifting:r.drifting,tangentX:ge.tx[r.sIdx],tangentZ:ge.tz[r.sIdx],hasTangent:!0,landed:i?i.landed:!1,landV:i?i.landV:0,wallHit:i?i.wallHit===!0:!1,wallVn:i?(i.wallSev??0)*25:0}),_v(fe,Ts),me.position.set(Ts.x,Ts.y,Ts.z),me.lookAt(fe.lx,fe.ly,fe.lz),Math.abs(me.fov-fe.fov)>.001&&(me.fov=fe.fov,me.updateProjectionMatrix());for(const f of Bl.steer)f.rotation.y=pe.steer*.42;for(const f of Bl.spin)f.rotation.x+=r.spd/.45*t;if(Fs){const f=(r.slip*180/Math.PI).toFixed(1),d=(r.yawRate*180/Math.PI).toFixed(0);cu.textContent=`FPS ${Ba.toFixed(0)} dt ${(t*1e3).toFixed(2)}ms steps ${e} a ${s.toFixed(2)} | spd ${r.spd.toFixed(1)} f ${r.fSpeed.toFixed(1)} l ${r.lSpeed.toFixed(1)} slip ${f} yaw ${d}/s ${r.surface}${r.drifting?" DRIFT":""} fov ${me.fov.toFixed(1)} hold ${vt.driftHold.toFixed(2)} exit ${vt.exitT.toFixed(2)} ${r.driftPhase??"idle"} q ${(r.exitQuality??0).toFixed(2)} rb ${(r.rhythmBoost??0).toFixed(1)} trl ${hn.toFixed(2)} ch ${fe.camH.toFixed(2)} imp ${xv(fe).toFixed(2)} oob ${(r.oobMs/1e3).toFixed(1)}s`}}ei.update(t),tc.attributes.position.needsUpdate=!0,sr.render(re,me)}}requestAnimationFrame(du);

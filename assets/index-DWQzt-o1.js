(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="170",ef=0,Sl=1,nf=2,xh=1,rf=2,Vn=3,Si=0,Ge=1,dn=2,Mi=0,Ir=1,yl=2,El=3,Tl=4,sf=5,Oi=100,af=101,of=102,cf=103,lf=104,uf=200,hf=201,df=202,ff=203,Ho=204,Vo=205,pf=206,mf=207,gf=208,_f=209,Mf=210,xf=211,vf=212,Sf=213,yf=214,Wo=0,Xo=1,jo=2,Br=3,Yo=4,qo=5,$o=6,Ko=7,Gc=0,Ef=1,Tf=2,xi=0,Af=1,wf=2,bf=3,Cf=4,Rf=5,Lf=6,Df=7,vh=300,kr=301,Gr=302,Zo=303,Qo=304,Oa=306,Jo=1e3,Xi=1001,tc=1002,on=1003,If=1004,Us=1005,Dn=1006,Qa=1007,ji=1008,$n=1009,Sh=1010,yh=1011,ys=1012,Hc=1013,Qi=1014,In=1015,ws=1016,Vc=1017,Wc=1018,Hr=1020,Eh=35902,Th=1021,Ah=1022,yn=1023,wh=1024,bh=1025,Nr=1026,Vr=1027,Xc=1028,jc=1029,Ch=1030,Yc=1031,qc=1033,da=33776,fa=33777,pa=33778,ma=33779,ec=35840,nc=35841,ic=35842,rc=35843,sc=36196,ac=37492,oc=37496,cc=37808,lc=37809,uc=37810,hc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,_c=37817,Mc=37818,xc=37819,vc=37820,Sc=37821,ga=36492,yc=36494,Ec=36495,Rh=36283,Tc=36284,Ac=36285,wc=36286,Nf=3200,Pf=3201,Lh=0,Uf=1,fi="",un="srgb",jr="srgb-linear",za="linear",ie="srgb",cr=7680,Al=519,Ff=512,Of=513,zf=514,Dh=515,Bf=516,kf=517,Gf=518,Hf=519,wl=35044,bl="300 es",Wn=2e3,Ta=2001;class Yr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ja=Math.PI/180,bc=180/Math.PI;function bs(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[e&255]+Pe[e>>8&255]+Pe[e>>16&255]+Pe[e>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[n&63|128]+Pe[n>>8&255]+"-"+Pe[n>>16&255]+Pe[n>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function $e(e,t,n){return Math.max(t,Math.min(n,e))}function Vf(e,t){return(e%t+t)%t}function to(e,t,n){return(1-n)*e+n*t}function es(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Xe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,n=0){$t.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,n,i,r,s,a,o,c,u){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,u)}set(t,n,i,r,s,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],l=r[6],v=r[1],M=r[4],x=r[7],R=r[2],w=r[5],b=r[8];return s[0]=a*_+o*v+c*R,s[3]=a*p+o*M+c*w,s[6]=a*l+o*x+c*b,s[1]=u*_+h*v+d*R,s[4]=u*p+h*M+d*w,s[7]=u*l+h*x+d*b,s[2]=f*_+m*v+g*R,s[5]=f*p+m*M+g*w,s[8]=f*l+m*x+g*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return n*a*h-n*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],d=h*a-o*u,f=o*c-h*s,m=u*s-a*c,g=n*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(r*u-h*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(h*n-r*c)*_,t[5]=(r*s-o*n)*_,t[6]=m*_,t[7]=(i*c-u*n)*_,t[8]=(a*n-i*s)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+t,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(eo.makeScale(t,n)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,n){return this.premultiply(eo.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new Ft;function Ih(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Aa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Wf(){const e=Aa("canvas");return e.style.display="block",e}const Cl={};function hs(e){e in Cl||(Cl[e]=!0,console.warn(e))}function Xf(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function jf(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yf(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===ie&&(e.r=qn(e.r),e.g=qn(e.g),e.b=qn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ie&&(e.r=Pr(e.r),e.g=Pr(e.g),e.b=Pr(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===fi?za:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function qn(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Pr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}const Rl=[.64,.33,.3,.6,.15,.06],Ll=[.2126,.7152,.0722],Dl=[.3127,.329],Il=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[jr]:{primaries:Rl,whitePoint:Dl,transfer:za,toXYZ:Il,fromXYZ:Nl,luminanceCoefficients:Ll,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:Rl,whitePoint:Dl,transfer:ie,toXYZ:Il,fromXYZ:Nl,luminanceCoefficients:Ll,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});let lr;class qf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{lr===void 0&&(lr=Aa("canvas")),lr.width=t.width,lr.height=t.height;const i=lr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Aa("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qn(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qn(n[i]/255)*255):n[i]=qn(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $f=0;class Nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(no(r[a].image)):s.push(no(r[a]))}else s=no(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function no(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?qf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kf=0;class He extends Yr{constructor(t=He.DEFAULT_IMAGE,n=He.DEFAULT_MAPPING,i=Xi,r=Xi,s=Dn,a=ji,o=yn,c=$n,u=He.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=bs(),this.name="",this.source=new Nh(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jo:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jo:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=vh;He.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,n=0,i=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,u=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],l=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+l-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,x=(m+1)/2,R=(l+1)/2,w=(h+f)/4,b=(d+_)/4,N=(g+p)/4;return M>x&&M>R?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=b/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((u+m+l-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zf extends Yr{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Me(0,0,t,n),this.scissorTest=!1,this.viewport=new Me(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new He(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Nh(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Zf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Ph extends He{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qf extends He{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[n+0]=c,t[n+1]=u,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(d!==_||c!==f||u!==m||h!==g){let p=1-o;const l=c*f+u*m+h*g+d*_,v=l>=0?1:-1,M=1-l*l;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,l*v);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R}const x=o*v;if(c=c*p+f*x,u=u*p+m*x,h=h*p+g*x,d=d*p+_*x,p===1-o){const R=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=R,u*=R,h*=R,d*=R}}t[n]=c,t[n+1]=u,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[n]=o*g+h*d+c*m-u*f,t[n+1]=c*g+h*f+u*d-o*m,t[n+2]=u*g+h*m+o*f-c*d,t[n+3]=h*g-o*d-c*f-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),d=o(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*d+u*m*g,this._y=u*m*d-f*h*g,this._z=u*h*g+f*m*d,this._w=u*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+u*m*g,this._y=u*m*d-f*h*g,this._z=u*h*g-f*m*d,this._w=u*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-u*m*g,this._y=u*m*d+f*h*g,this._z=u*h*g+f*m*d,this._w=u*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-u*m*g,this._y=u*m*d+f*h*g,this._z=u*h*g-f*m*d,this._w=u*h*d+f*m*g;break;case"YZX":this._x=f*h*d+u*m*g,this._y=u*m*d+f*h*g,this._z=u*h*g-f*m*d,this._w=u*h*d-f*m*g;break;case"XZY":this._x=f*h*d-u*m*g,this._y=u*m*d-f*h*g,this._z=u*h*g+f*m*d,this._w=u*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,a=t._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),d=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,n=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Pl.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*u+a*d-o*h,this.y=i+c*h+o*u-s*d,this.z=r+c*d+s*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new G,Pl=new Jn;class rr{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(_n.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(_n.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=_n.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Os.subVectors(this.max,ns),ur.subVectors(t.a,ns),hr.subVectors(t.b,ns),dr.subVectors(t.c,ns),si.subVectors(hr,ur),ai.subVectors(dr,hr),Ai.subVectors(ur,dr);let n=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Ai.z,Ai.y,si.z,0,-si.x,ai.z,0,-ai.x,Ai.z,0,-Ai.x,-si.y,si.x,0,-ai.y,ai.x,0,-Ai.y,Ai.x,0];return!ro(n,ur,hr,dr,Os)||(n=[1,0,0,0,1,0,0,0,1],!ro(n,ur,hr,dr,Os))?!1:(zs.crossVectors(si,ai),n=[zs.x,zs.y,zs.z],ro(n,ur,hr,dr,Os))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new G,new G,new G,new G,new G,new G,new G,new G],_n=new G,Fs=new rr,ur=new G,hr=new G,dr=new G,si=new G,ai=new G,Ai=new G,ns=new G,Os=new G,zs=new G,wi=new G;function ro(e,t,n,i,r){for(let s=0,a=e.length-3;s<=a;s+=3){wi.fromArray(e,s);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),c=t.dot(wi),u=n.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Jf=new rr,is=new G,so=new G;class qr{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Jf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const n=is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(is,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(so)),this.expandByPoint(is.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new G,ao=new G,Bs=new G,oi=new G,oo=new G,ks=new G,co=new G;class Uh{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=zn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,n),zn.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){ao.copy(t).add(n).multiplyScalar(.5),Bs.copy(n).sub(t).normalize(),oi.copy(this.origin).sub(ao);const s=t.distanceTo(n)*.5,a=-this.direction.dot(Bs),o=oi.dot(this.direction),c=-oi.dot(Bs),u=oi.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=s*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+u}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+u;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+u;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ao).addScaledVector(Bs,f),m}intersectSphere(t,n){zn.subVectors(t.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,n,i,r,s){oo.subVectors(n,t),ks.subVectors(i,t),co.crossVectors(oo,ks);let a=this.direction.dot(co),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);const c=o*this.direction.dot(ks.crossVectors(oi,ks));if(c<0)return null;const u=o*this.direction.dot(oo.cross(oi));if(u<0||c+u>a)return null;const h=-o*oi.dot(co);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,n,i,r,s,a,o,c,u,h,d,f,m,g,_,p){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,u,h,d,f,m,g,_,p)}set(t,n,i,r,s,a,o,c,u,h,d,f,m,g,_,p){const l=this.elements;return l[0]=t,l[4]=n,l[8]=i,l[12]=r,l[1]=s,l[5]=a,l[9]=o,l[13]=c,l[2]=u,l[6]=h,l[10]=d,l[14]=f,l[3]=m,l[7]=g,l[11]=_,l[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/fr.setFromMatrixColumn(t,0).length(),s=1/fr.setFromMatrixColumn(t,1).length(),a=1/fr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*h,m=a*d,g=o*h,_=o*d;n[0]=c*h,n[4]=-c*d,n[8]=u,n[1]=m+g*u,n[5]=f-_*u,n[9]=-o*c,n[2]=_-f*u,n[6]=g+m*u,n[10]=a*c}else if(t.order==="YXZ"){const f=c*h,m=c*d,g=u*h,_=u*d;n[0]=f+_*o,n[4]=g*o-m,n[8]=a*u,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=m*o-g,n[6]=_+f*o,n[10]=a*c}else if(t.order==="ZXY"){const f=c*h,m=c*d,g=u*h,_=u*d;n[0]=f-_*o,n[4]=-a*d,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*h,n[9]=_-f*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const f=a*h,m=a*d,g=o*h,_=o*d;n[0]=c*h,n[4]=g*u-m,n[8]=f*u+_,n[1]=c*d,n[5]=_*u+f,n[9]=m*u-g,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*u,g=o*c,_=o*u;n[0]=c*h,n[4]=_-f*d,n[8]=g*d+m,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*d+g,n[10]=f-_*d}else if(t.order==="XZY"){const f=a*c,m=a*u,g=o*c,_=o*u;n[0]=c*h,n[4]=-d,n[8]=u*h,n[1]=f*d+_,n[5]=a*h,n[9]=m*d-g,n[2]=g*d-m,n[6]=o*h,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,n,i){const r=this.elements;return Je.subVectors(t,n),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ci.crossVectors(i,Je),ci.lengthSq()===0&&(Math.abs(i.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ci.crossVectors(i,Je)),ci.normalize(),Gs.crossVectors(Je,ci),r[0]=ci.x,r[4]=Gs.x,r[8]=Je.x,r[1]=ci.y,r[5]=Gs.y,r[9]=Je.y,r[2]=ci.z,r[6]=Gs.z,r[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],l=i[14],v=i[3],M=i[7],x=i[11],R=i[15],w=r[0],b=r[4],N=r[8],T=r[12],y=r[1],L=r[5],U=r[9],C=r[13],D=r[2],k=r[6],H=r[10],I=r[14],P=r[3],Q=r[7],dt=r[11],St=r[15];return s[0]=a*w+o*y+c*D+u*P,s[4]=a*b+o*L+c*k+u*Q,s[8]=a*N+o*U+c*H+u*dt,s[12]=a*T+o*C+c*I+u*St,s[1]=h*w+d*y+f*D+m*P,s[5]=h*b+d*L+f*k+m*Q,s[9]=h*N+d*U+f*H+m*dt,s[13]=h*T+d*C+f*I+m*St,s[2]=g*w+_*y+p*D+l*P,s[6]=g*b+_*L+p*k+l*Q,s[10]=g*N+_*U+p*H+l*dt,s[14]=g*T+_*C+p*I+l*St,s[3]=v*w+M*y+x*D+R*P,s[7]=v*b+M*L+x*k+R*Q,s[11]=v*N+M*U+x*H+R*dt,s[15]=v*T+M*C+x*I+R*St,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],l=t[15];return g*(+s*c*d-r*u*d-s*o*f+i*u*f+r*o*m-i*c*m)+_*(+n*c*m-n*u*f+s*a*f-r*a*m+r*u*h-s*c*h)+p*(+n*u*d-n*o*m-s*a*d+i*a*m+s*o*h-i*u*h)+l*(-r*o*h-n*c*d+n*o*f+r*a*d-i*a*f+i*c*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],l=t[15],v=d*p*u-_*f*u+_*c*m-o*p*m-d*c*l+o*f*l,M=g*f*u-h*p*u-g*c*m+a*p*m+h*c*l-a*f*l,x=h*_*u-g*d*u+g*o*m-a*_*m-h*o*l+a*d*l,R=g*d*c-h*_*c-g*o*f+a*_*f+h*o*p-a*d*p,w=n*v+i*M+r*x+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=v*b,t[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*l-i*f*l)*b,t[2]=(o*p*s-_*c*s+_*r*u-i*p*u-o*r*l+i*c*l)*b,t[3]=(d*c*s-o*f*s-d*r*u+i*f*u+o*r*m-i*c*m)*b,t[4]=M*b,t[5]=(h*p*s-g*f*s+g*r*m-n*p*m-h*r*l+n*f*l)*b,t[6]=(g*c*s-a*p*s-g*r*u+n*p*u+a*r*l-n*c*l)*b,t[7]=(a*f*s-h*c*s+h*r*u-n*f*u-a*r*m+n*c*m)*b,t[8]=x*b,t[9]=(g*d*s-h*_*s-g*i*m+n*_*m+h*i*l-n*d*l)*b,t[10]=(a*_*s-g*o*s+g*i*u-n*_*u-a*i*l+n*o*l)*b,t[11]=(h*o*s-a*d*s-h*i*u+n*d*u+a*i*m-n*o*m)*b,t[12]=R*b,t[13]=(h*_*r-g*d*r+g*i*f-n*_*f-h*i*p+n*d*p)*b,t[14]=(g*o*r-a*_*r-g*i*c+n*_*c+a*i*p-n*o*p)*b,t[15]=(a*d*r-h*o*r+h*i*c-n*d*c-a*i*f+n*o*f)*b,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=t.x,o=t.y,c=t.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,d=o+o,f=s*u,m=s*h,g=s*d,_=a*h,p=a*d,l=o*d,v=c*u,M=c*h,x=c*d,R=i.x,w=i.y,b=i.z;return r[0]=(1-(_+l))*R,r[1]=(m+x)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(m-x)*w,r[5]=(1-(f+l))*w,r[6]=(p+v)*w,r[7]=0,r[8]=(g+M)*b,r[9]=(p-v)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=fr.set(r[0],r[1],r[2]).length();const a=fr.set(r[4],r[5],r[6]).length(),o=fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Mn.copy(this);const u=1/s,h=1/a,d=1/o;return Mn.elements[0]*=u,Mn.elements[1]*=u,Mn.elements[2]*=u,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,n.setFromRotationMatrix(Mn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,n,i,r,s,a,o=Wn){const c=this.elements,u=2*s/(n-t),h=2*s/(i-r),d=(n+t)/(n-t),f=(i+r)/(i-r);let m,g;if(o===Wn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ta)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,a,o=Wn){const c=this.elements,u=1/(n-t),h=1/(i-r),d=1/(a-s),f=(n+t)*u,m=(i+r)*h;let g,_;if(o===Wn)g=(a+s)*d,_=-2*d;else if(o===Ta)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const fr=new G,Mn=new Kt,tp=new G(0,0,0),ep=new G(1,1,1),ci=new G,Gs=new G,Je=new G,Ul=new Kt,Fl=new Jn;class Ze{constructor(t=0,n=0,i=0,r=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let np=0;const Ol=new G,pr=new Jn,Bn=new Kt,Hs=new G,rs=new G,ip=new G,rp=new Jn,zl=new G(1,0,0),Bl=new G(0,1,0),kl=new G(0,0,1),Gl={type:"added"},sp={type:"removed"},mr={type:"childadded",child:null},lo={type:"childremoved",child:null};class De extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new G,n=new Ze,i=new Jn,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ft}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return pr.setFromAxisAngle(t,n),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,n){return pr.setFromAxisAngle(t,n),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,n){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Hs.copy(t):Hs.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(rs,Hs,this.up):Bn.lookAt(Hs,rs,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(Bn),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(sp),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}De.DEFAULT_UP=new G(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new G,kn=new G,uo=new G,Gn=new G,gr=new G,_r=new G,Hl=new G,ho=new G,fo=new G,po=new G,mo=new Me,go=new Me,_o=new Me;class Sn{constructor(t=new G,n=new G,i=new G){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),xn.subVectors(t,n),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){xn.subVectors(r,n),kn.subVectors(i,n),uo.subVectors(t,n);const a=xn.dot(xn),o=xn.dot(kn),c=xn.dot(uo),u=kn.dot(kn),h=kn.dot(uo),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(u*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,n,i,r,s,a,o,c){return this.getBarycoord(t,n,i,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(t,n,i,r,s,a){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,n),go.fromBufferAttribute(t,i),_o.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(mo,s.x),a.addScaledVector(go,s.y),a.addScaledVector(_o,s.z),a}static isFrontFacing(t,n,i,r){return xn.subVectors(i,n),kn.subVectors(t,n),xn.cross(kn).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Sn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return Sn.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let a,o;gr.subVectors(r,i),_r.subVectors(s,i),ho.subVectors(t,i);const c=gr.dot(ho),u=_r.dot(ho);if(c<=0&&u<=0)return n.copy(i);fo.subVectors(t,r);const h=gr.dot(fo),d=_r.dot(fo);if(h>=0&&d<=h)return n.copy(r);const f=c*d-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(gr,a);po.subVectors(t,s);const m=gr.dot(po),g=_r.dot(po);if(g>=0&&m<=g)return n.copy(s);const _=m*u-c*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(_r,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Hl.subVectors(s,r),o=(d-h)/(d-h+(m-g)),n.copy(r).addScaledVector(Hl,o);const l=1/(p+_+f);return a=_*l,o=f*l,n.copy(i).addScaledVector(gr,a).addScaledVector(_r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Mo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Tt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,jt.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=jt.workingColorSpace){if(t=Vf(t,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Mo(a,s,t+1/3),this.g=Mo(a,s,t),this.b=Mo(a,s,t-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(t,n=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=un){const i=Oh[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return jt.fromWorkingColorSpace(Ue.copy(this),t),Math.round($e(Ue.r*255,0,255))*65536+Math.round($e(Ue.g*255,0,255))*256+Math.round($e(Ue.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=jt.workingColorSpace){jt.fromWorkingColorSpace(Ue.copy(this),n);const i=Ue.r,r=Ue.g,s=Ue.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,n=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ue.copy(this),n),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=un){jt.fromWorkingColorSpace(Ue.copy(this),t);const n=Ue.r,i=Ue.g,r=Ue.b;return t!==un?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+n,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(li),t.getHSL(Vs);const i=to(li.h,Vs.h,n),r=to(li.s,Vs.s,n),s=to(li.l,Vs.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Tt;Tt.NAMES=Oh;let ap=0;class $r extends Yr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=bs(),this.name="",this.blending=Ir,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Vo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ho&&(i.blendSrc=this.blendSrc),this.blendDst!==Vo&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends $r{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new G,Ws=new $t;class Ie{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=wl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ws.fromBufferAttribute(this,n),Ws.applyMatrix3(t),this.setXY(n,Ws.x,Ws.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ye.fromBufferAttribute(this,n),ye.applyMatrix3(t),this.setXYZ(n,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ye.fromBufferAttribute(this,n),ye.applyMatrix4(t),this.setXYZ(n,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ye.fromBufferAttribute(this,n),ye.applyNormalMatrix(t),this.setXYZ(n,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ye.fromBufferAttribute(this,n),ye.transformDirection(t),this.setXYZ(n,ye.x,ye.y,ye.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Xe(n,this.array),i=Xe(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wl&&(t.usage=this.usage),t}}class zh extends Ie{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Bh extends Ie{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Te extends Ie{constructor(t,n,i){super(new Float32Array(t),n,i)}}let op=0;const ln=new Kt,xo=new De,Mr=new G,tn=new rr,ss=new rr,Ce=new G;class Ve extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?Bh:zh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,n,i){return ln.makeTranslation(t,n,i),this.applyMatrix4(ln),this}scale(t,n,i){return ln.makeScale(t,n,i),this.applyMatrix4(ln),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=t[i];n.setXYZ(i,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(tn.min,ss.min),tn.expandByPoint(Ce),Ce.addVectors(tn.max,ss.max),tn.expandByPoint(Ce)):(tn.expandByPoint(ss.min),tn.expandByPoint(ss.max))}tn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ce.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ce));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ce.fromBufferAttribute(o,u),c&&(Mr.fromBufferAttribute(t,u),Ce.add(Mr)),r=Math.max(r,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new G,c[N]=new G;const u=new G,h=new G,d=new G,f=new $t,m=new $t,g=new $t,_=new G,p=new G;function l(N,T,y){u.fromBufferAttribute(i,N),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,N),m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,y),h.sub(u),d.sub(u),m.sub(f),g.sub(f);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(L),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(L),o[N].add(_),o[T].add(_),o[y].add(_),c[N].add(p),c[T].add(p),c[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let N=0,T=v.length;N<T;++N){const y=v[N],L=y.start,U=y.count;for(let C=L,D=L+U;C<D;C+=3)l(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new G,x=new G,R=new G,w=new G;function b(N){R.fromBufferAttribute(r,N),w.copy(R);const T=o[N];M.copy(T),M.sub(R.multiplyScalar(R.dot(T))).normalize(),x.crossVectors(w,T);const L=x.dot(c[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,L)}for(let N=0,T=v.length;N<T;++N){const y=v[N],L=y.start,U=y.count;for(let C=L,D=L+U;C<D;C+=3)b(t.getX(C+0)),b(t.getX(C+1)),b(t.getX(C+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ie(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,u=new G,h=new G,d=new G;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),o.add(h),c.add(h),u.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ce.fromBufferAttribute(t,n),Ce.normalize(),t.setXYZ(n,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,d=o.normalized,f=new u.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let l=0;l<h;l++)f[g++]=u[m++]}return new Ie(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ve,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=t(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,d=u.length;h<d;h++){const f=u[h],m=t(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=t.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new Kt,bi=new Uh,Xs=new qr,Wl=new G,js=new G,Ys=new G,qs=new G,vo=new G,$s=new G,Xl=new G,Ks=new G;class ge extends De{constructor(t=new Ve,n=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){$s.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],d=s[c];h!==0&&(vo.fromBufferAttribute(d,t),a?$s.addScaledVector(vo,h):$s.addScaledVector(vo.sub(n),h))}n.add($s)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Xs.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Xs,Wl)===null||bi.origin.distanceToSquared(Wl)>(t.far-t.near)**2))&&(Vl.copy(s).invert(),bi.copy(t.ray).applyMatrix4(Vl),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,bi)))}_computeIntersections(t,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],l=a[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,R=M;x<R;x+=3){const w=o.getX(x),b=o.getX(x+1),N=o.getX(x+2);r=Zs(this,l,t,i,u,h,d,w,b,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,l=_;p<l;p+=3){const v=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);r=Zs(this,a,t,i,u,h,d,v,M,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],l=a[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,R=M;x<R;x+=3){const w=x,b=x+1,N=x+2;r=Zs(this,l,t,i,u,h,d,w,b,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,l=_;p<l;p+=3){const v=p,M=p+1,x=p+2;r=Zs(this,a,t,i,u,h,d,v,M,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function cp(e,t,n,i,r,s,a,o){let c;if(t.side===Ge?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===Si,o),c===null)return null;Ks.copy(o),Ks.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(Ks);return u<n.near||u>n.far?null:{distance:u,point:Ks.clone(),object:e}}function Zs(e,t,n,i,r,s,a,o,c,u){e.getVertexPosition(o,js),e.getVertexPosition(c,Ys),e.getVertexPosition(u,qs);const h=cp(e,t,n,i,js,Ys,qs,Xl);if(h){const d=new G;Sn.getBarycoord(Xl,js,Ys,qs,d),r&&(h.uv=Sn.getInterpolatedAttribute(r,o,c,u,d,new $t)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,o,c,u,d,new $t)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,c,u,d,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new G,materialIndex:0};Sn.getNormal(js,Ys,qs,f.normal),h.face=f,h.barycoord=d}return h}class ae extends Ve{constructor(t=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,n,t,a,s,0),g("z","y","x",1,-1,i,n,-t,a,s,1),g("x","z","y",1,1,t,i,n,r,a,2),g("x","z","y",1,-1,t,i,-n,r,a,3),g("x","y","z",1,-1,t,n,i,r,s,4),g("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function g(_,p,l,v,M,x,R,w,b,N,T){const y=x/b,L=R/N,U=x/2,C=R/2,D=w/2,k=b+1,H=N+1;let I=0,P=0;const Q=new G;for(let dt=0;dt<H;dt++){const St=dt*L-C;for(let Bt=0;Bt<k;Bt++){const ee=Bt*y-U;Q[_]=ee*v,Q[p]=St*M,Q[l]=D,u.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[l]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(Bt/b),d.push(1-dt/N),I+=1}}for(let dt=0;dt<N;dt++)for(let St=0;St<b;St++){const Bt=f+St+k*dt,ee=f+St+k*(dt+1),q=f+(St+1)+k*(dt+1),tt=f+(St+1)+k*dt;c.push(Bt,ee,tt),c.push(ee,q,tt),P+=6}o.addGroup(m,P,T),m+=P,f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function ze(e){const t={};for(let n=0;n<e.length;n++){const i=Wr(e[n]);for(const r in i)t[r]=i[r]}return t}function lp(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function kh(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const up={clone:Wr,merge:ze};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends $r{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Gh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Wn}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new G,jl=new $t,Yl=new $t;class hn extends Gh{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=bc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,n){return this.getViewBounds(t,jl,Yl),n.subVectors(Yl,jl)}setViewOffset(t,n,i,r,s,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ja*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xr=-90,vr=1;class fp extends De{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(xr,vr,t,n);r.layers=this.layers,this.add(r);const s=new hn(xr,vr,t,n);s.layers=this.layers,this.add(s);const a=new hn(xr,vr,t,n);a.layers=this.layers,this.add(a);const o=new hn(xr,vr,t,n);o.layers=this.layers,this.add(o);const c=new hn(xr,vr,t,n);c.layers=this.layers,this.add(c);const u=new hn(xr,vr,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,a),t.setRenderTarget(i,2,r),t.render(n,o),t.setRenderTarget(i,3,r),t.render(n,c),t.setRenderTarget(i,4,r),t.render(n,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(n,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hh extends He{constructor(t,n,i,r,s,a,o,c,u,h){t=t!==void 0?t:[],n=n!==void 0?n:kr,super(t,n,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pp extends Ji{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Hh(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ae(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Mi});s.uniforms.tEquirect.value=n;const a=new ge(r,s),o=n.minFilter;return n.minFilter===ji&&(n.minFilter=Dn),new fp(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(s)}}const So=new G,mp=new G,gp=new Ft;class Ii{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=So.subVectors(i,n).cross(mp.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(So),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||gp.getNormalMatrix(t),r=this.coplanarPoint(So).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new qr,Qs=new G;class $c{constructor(t=new Ii,n=new Ii,i=new Ii,r=new Ii,s=new Ii,a=new Ii){this.planes=[t,n,i,r,s,a]}set(t,n,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Wn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],l=r[12],v=r[13],M=r[14],x=r[15];if(i[0].setComponents(c-s,f-u,p-m,x-l).normalize(),i[1].setComponents(c+s,f+u,p+m,x+l).normalize(),i[2].setComponents(c+a,f+h,p+g,x+v).normalize(),i[3].setComponents(c-a,f-h,p-g,x-v).normalize(),i[4].setComponents(c-o,f-d,p-_,x-M).normalize(),n===Wn)i[5].setComponents(c+o,f+d,p+_,x+M).normalize();else if(n===Ta)i[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ci.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qs.x=r.normal.x>0?t.max.x:t.min.x,Qs.y=r.normal.y>0?t.max.y:t.min.y,Qs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vh(){let e=null,t=!1,n=null,i=null;function r(s,a){n(s,a),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function _p(e){const t=new WeakMap;function n(o,c){const u=o.array,h=o.usage,d=u.byteLength,f=e.createBuffer();e.bindBuffer(c,f),e.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=e.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=e.SHORT;else if(u instanceof Uint32Array)m=e.UNSIGNED_INT;else if(u instanceof Int32Array)m=e.INT;else if(u instanceof Int8Array)m=e.BYTE;else if(u instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,u){const h=c.array,d=c.updateRanges;if(e.bindBuffer(u,o),d.length===0)e.bufferSubData(u,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];e.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}class ti extends Ve{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,d=t/o,f=n/c,m=[],g=[],_=[],p=[];for(let l=0;l<h;l++){const v=l*f-a;for(let M=0;M<u;M++){const x=M*d-s;g.push(x,-v,0),_.push(0,0,1),p.push(M/o),p.push(1-l/c)}}for(let l=0;l<c;l++)for(let v=0;v<o;v++){const M=v+u*l,x=v+u*(l+1),R=v+1+u*(l+1),w=v+1+u*l;m.push(M,x,w),m.push(x,R,w)}this.setIndex(m),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,T0=`#if DEPTH_PACKING == 3200
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
}`,A0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,L0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,N0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
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
}`,U0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,O0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,G0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,V0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Mp,alphahash_pars_fragment:xp,alphamap_fragment:vp,alphamap_pars_fragment:Sp,alphatest_fragment:yp,alphatest_pars_fragment:Ep,aomap_fragment:Tp,aomap_pars_fragment:Ap,batching_pars_vertex:wp,batching_vertex:bp,begin_vertex:Cp,beginnormal_vertex:Rp,bsdfs:Lp,iridescence_fragment:Dp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:zp,color_pars_vertex:Bp,color_vertex:kp,common:Gp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:jp,emissivemap_pars_fragment:Yp,colorspace_fragment:qp,colorspace_pars_fragment:$p,envmap_fragment:Kp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Qp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:um,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:rm,gradientmap_pars_fragment:sm,lightmap_pars_fragment:am,lights_lambert_fragment:om,lights_lambert_pars_fragment:cm,lights_pars_begin:lm,lights_toon_fragment:hm,lights_toon_pars_fragment:dm,lights_phong_fragment:fm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:Mm,lights_fragment_end:xm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:Em,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:wm,map_particle_pars_fragment:bm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Lm,morphcolor_vertex:Dm,morphnormal_vertex:Im,morphtarget_pars_vertex:Nm,morphtarget_vertex:Pm,normal_fragment_begin:Um,normal_fragment_maps:Fm,normal_pars_fragment:Om,normal_pars_vertex:zm,normal_vertex:Bm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:jm,premultiplied_alpha_fragment:Ym,project_vertex:qm,dithering_fragment:$m,dithering_pars_fragment:Km,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:r0,skinning_vertex:s0,skinnormal_vertex:a0,specularmap_fragment:o0,specularmap_pars_fragment:c0,tonemapping_fragment:l0,tonemapping_pars_fragment:u0,transmission_fragment:h0,transmission_pars_fragment:d0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:_0,background_frag:M0,backgroundCube_vert:x0,backgroundCube_frag:v0,cube_vert:S0,cube_frag:y0,depth_vert:E0,depth_frag:T0,distanceRGBA_vert:A0,distanceRGBA_frag:w0,equirect_vert:b0,equirect_frag:C0,linedashed_vert:R0,linedashed_frag:L0,meshbasic_vert:D0,meshbasic_frag:I0,meshlambert_vert:N0,meshlambert_frag:P0,meshmatcap_vert:U0,meshmatcap_frag:F0,meshnormal_vert:O0,meshnormal_frag:z0,meshphong_vert:B0,meshphong_frag:k0,meshphysical_vert:G0,meshphysical_frag:H0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:X0,points_frag:j0,shadow_vert:Y0,shadow_frag:q0,sprite_vert:$0,sprite_frag:K0},st={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Rn={basic:{uniforms:ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ze([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ze([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ze([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ze([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ze([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ze([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ze([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ze([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ze([st.common,st.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ze([st.lights,st.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Rn.physical={uniforms:ze([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Js={r:0,b:0,g:0},Ri=new Ze,Z0=new Kt;function Q0(e,t,n,i,r,s,a){const o=new Tt(0);let c=s===!0?0:1,u,h,d=null,f=0,m=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?n:t).get(M)),M}function _(v){let M=!1;const x=g(v);x===null?l(o,c):x&&x.isColor&&(l(x,1),M=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function p(v,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===Oa)?(h===void 0&&(h=new ge(new ae(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Wr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ri.copy(M.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(Ri)),h.material.toneMapped=jt.getTransfer(x.colorSpace)!==ie,(d!==x||f!==x.version||m!==e.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=e.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ge(new ti(2,2),new Kn({name:"BackgroundMaterial",uniforms:Wr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=jt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,m=e.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function l(v,M){v.getRGB(Js,kh(e)),i.buffers.color.setClear(Js.r,Js.g,Js.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),c=M,l(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,l(o,c)},render:_,addToRenderList:p}}function J0(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,L,U,C,D){let k=!1;const H=d(C,U,L);s!==H&&(s=H,u(s.object)),k=m(y,C,U,D),k&&g(y,C,U,D),D!==null&&t.update(D,e.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,x(y,L,U,C),D!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return e.createVertexArray()}function u(y){return e.bindVertexArray(y)}function h(y){return e.deleteVertexArray(y)}function d(y,L,U){const C=U.wireframe===!0;let D=i[y.id];D===void 0&&(D={},i[y.id]=D);let k=D[L.id];k===void 0&&(k={},D[L.id]=k);let H=k[C];return H===void 0&&(H=f(c()),k[C]=H),H}function f(y){const L=[],U=[],C=[];for(let D=0;D<n;D++)L[D]=0,U[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:C,object:y,attributes:{},index:null}}function m(y,L,U,C){const D=s.attributes,k=L.attributes;let H=0;const I=U.getAttributes();for(const P in I)if(I[P].location>=0){const dt=D[P];let St=k[P];if(St===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;H++}return s.attributesNum!==H||s.index!==C}function g(y,L,U,C){const D={},k=L.attributes;let H=0;const I=U.getAttributes();for(const P in I)if(I[P].location>=0){let dt=k[P];dt===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),D[P]=St,H++}s.attributes=D,s.attributesNum=H,s.index=C}function _(){const y=s.newAttributes;for(let L=0,U=y.length;L<U;L++)y[L]=0}function p(y){l(y,0)}function l(y,L){const U=s.newAttributes,C=s.enabledAttributes,D=s.attributeDivisors;U[y]=1,C[y]===0&&(e.enableVertexAttribArray(y),C[y]=1),D[y]!==L&&(e.vertexAttribDivisor(y,L),D[y]=L)}function v(){const y=s.newAttributes,L=s.enabledAttributes;for(let U=0,C=L.length;U<C;U++)L[U]!==y[U]&&(e.disableVertexAttribArray(U),L[U]=0)}function M(y,L,U,C,D,k,H){H===!0?e.vertexAttribIPointer(y,L,U,D,k):e.vertexAttribPointer(y,L,U,C,D,k)}function x(y,L,U,C){_();const D=C.attributes,k=U.getAttributes(),H=L.defaultAttributeValues;for(const I in k){const P=k[I];if(P.location>=0){let Q=D[I];if(Q===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const dt=Q.normalized,St=Q.itemSize,Bt=t.get(Q);if(Bt===void 0)continue;const ee=Bt.buffer,q=Bt.type,tt=Bt.bytesPerElement,ut=q===e.INT||q===e.UNSIGNED_INT||Q.gpuType===Hc;if(Q.isInterleavedBufferAttribute){const nt=Q.data,wt=nt.stride,Lt=Q.offset;if(nt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<P.locationSize;Ot++)l(P.location+Ot,nt.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ot=0;Ot<P.locationSize;Ot++)p(P.location+Ot);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let Ot=0;Ot<P.locationSize;Ot++)M(P.location+Ot,St/P.locationSize,q,dt,wt*tt,(Lt+St/P.locationSize*Ot)*tt,ut)}else{if(Q.isInstancedBufferAttribute){for(let nt=0;nt<P.locationSize;nt++)l(P.location+nt,Q.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let nt=0;nt<P.locationSize;nt++)p(P.location+nt);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let nt=0;nt<P.locationSize;nt++)M(P.location+nt,St/P.locationSize,q,dt,St*tt,St/P.locationSize*nt*tt,ut)}}else if(H!==void 0){const dt=H[I];if(dt!==void 0)switch(dt.length){case 2:e.vertexAttrib2fv(P.location,dt);break;case 3:e.vertexAttrib3fv(P.location,dt);break;case 4:e.vertexAttrib4fv(P.location,dt);break;default:e.vertexAttrib1fv(P.location,dt)}}}}v()}function R(){N();for(const y in i){const L=i[y];for(const U in L){const C=L[U];for(const D in C)h(C[D].object),delete C[D];delete L[U]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const U in L){const C=L[U];for(const D in C)h(C[D].object),delete C[D];delete L[U]}delete i[y.id]}function b(y){for(const L in i){const U=i[L];if(U[y.id]===void 0)continue;const C=U[y.id];for(const D in C)h(C[D].object),delete C[D];delete U[y.id]}}function N(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function tg(e,t,n){let i;function r(u){i=u}function s(u,h){e.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,d){d!==0&&(e.drawArraysInstanced(i,u,h,d),n.update(h,i,d))}function o(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];n.update(m,i,1)}function c(u,h,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)a(u[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function eg(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==yn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const N=b===ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==$n&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==In&&!N)}function c(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:R,maxSamples:w}}function ng(e){const t=this;let n=null,i=0,r=!1,s=!1;const a=new Ii,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,l=e.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):u();else{const v=s?0:i,M=v*4;let x=l.clippingState||null;c.value=x,x=h(g,f,M,m);for(let R=0;R!==M;++R)x[R]=n[R];l.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const l=m+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<l)&&(p=new Float32Array(l));for(let M=0,x=m;M!==_;++M,x+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(p,x),p[x+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ig(e){let t=new WeakMap;function n(a,o){return o===Zo?a.mapping=kr:o===Qo&&(a.mapping=Gr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zo||o===Qo)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new pp(c.height);return u.fromEquirectangularTexture(e,a),t.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Wh extends Gh{constructor(t=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rr=4,ql=[.125,.215,.35,.446,.526,.582],zi=20,yo=new Wh,$l=new Tt;let Eo=null,To=0,Ao=0,wo=!1;const Ni=(1+Math.sqrt(5))/2,Sr=1/Ni,Kl=[new G(-Ni,Sr,0),new G(Ni,Sr,0),new G(-Sr,0,Ni),new G(Sr,0,Ni),new G(0,Ni,-Sr),new G(0,Ni,Sr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eo,To,Ao),this._renderer.xr.enabled=wo,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===kr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ws,format:yn,colorSpace:jr,depthBuffer:!1},r=Ql(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(s)),this._blurMaterial=sg(s,t,n)}return r}_compileMaterial(t){const n=new ge(this._lodPlanes[0],t);this._renderer.compile(n,yo)}_sceneToCubeUV(t,n,i,r){const o=new hn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($l),h.toneMapping=xi,h.autoClear=!1;const m=new rn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new ge(new ae,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy($l),_=!0);for(let l=0;l<6;l++){const v=l%3;v===0?(o.up.set(0,c[l],0),o.lookAt(u[l],0,0)):v===1?(o.up.set(0,0,c[l]),o.lookAt(0,u[l],0)):(o.up.set(0,c[l],0),o.lookAt(0,0,u[l]));const M=this._cubeSize;ta(r,v*M,l>2?M:0,M,M),h.setRenderTarget(r),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===kr||t.mapping===Gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ta(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,yo)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kl[(r-s-1)%Kl.length];this._blur(t,s-1,s,a,o)}n.autoClear=i}_blur(t,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ge(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zi-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):zi;p>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const l=[];let v=0;for(let b=0;b<zi;++b){const N=b/_,T=Math.exp(-N*N/2);l.push(T),b===0?v+=T:b<p&&(v+=2*T)}for(let b=0;b<l.length;b++)l[b]=l[b]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=l,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const x=this._sizeLods[r],R=3*x*(r>M-Rr?r-M+Rr:0),w=4*(this._cubeSize-x);ta(n,R,w,3*x,2*x),c.setRenderTarget(n),c.render(d,yo)}}function rg(e){const t=[],n=[],i=[];let r=e;const s=e-Rr+1+ql.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>e-Rr?c=ql[a-e+Rr-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,l=1,v=new Float32Array(_*g*m),M=new Float32Array(p*g*m),x=new Float32Array(l*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,N=w>2?0:-1,T=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];v.set(T,_*g*w),M.set(f,p*g*w);const y=[w,w,w,w,w,w];x.set(y,l*g*w)}const R=new Ve;R.setAttribute("position",new Ie(v,_)),R.setAttribute("uv",new Ie(M,p)),R.setAttribute("faceIndex",new Ie(x,l)),t.push(R),r>Rr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ql(e,t,n){const i=new Ji(e,t,n);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function sg(e,t,n){const i=new Float32Array(zi),r=new G(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Jl(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function tu(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function ag(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===Zo||c===Qo,h=c===kr||c===Gr;if(u||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Zl(e)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return u&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new Zl(e)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function og(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cg(e,t,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,l=_.length;p<l;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],e.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,l=_.length;p<l;p++)t.update(_[p],e.ARRAY_BUFFER)}}function u(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let M=0,x=v.length;M<x;M+=3){const R=v[M+0],w=v[M+1],b=v[M+2];f.push(R,w,w,b,b,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const R=M+0,w=M+1,b=M+2;f.push(R,w,w,b,b,R)}}else return;const p=new(Ih(f)?Bh:zh)(f,1);p.version=_;const l=s.get(d);l&&t.remove(l),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function lg(e,t,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){e.drawElements(i,m,s,f*a),n.update(m,i,1)}function u(f,m,g){g!==0&&(e.drawElementsInstanced(i,m,s,f*a,g),n.update(m,i,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let l=0;l<g;l++)p+=m[l];n.update(p,i,1)}function d(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let l=0;l<f.length;l++)u(f[l]/a,m[l],_[l]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let l=0;for(let v=0;v<g;v++)l+=m[v]*_[v];n.update(l,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ug(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hg(e,t,n){const i=new WeakMap,r=new Me;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let y=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,l=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let R=o.attributes.position.count*x,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*w*4*d),N=new Ph(b,R,w,d);N.type=In,N.needsUpdate=!0;const T=x*4;for(let L=0;L<d;L++){const U=l[L],C=v[L],D=M[L],k=R*w*4*L;for(let H=0;H<U.count;H++){const I=H*T;g===!0&&(r.fromBufferAttribute(U,H),b[k+I+0]=r.x,b[k+I+1]=r.y,b[k+I+2]=r.z,b[k+I+3]=0),_===!0&&(r.fromBufferAttribute(C,H),b[k+I+4]=r.x,b[k+I+5]=r.y,b[k+I+6]=r.z,b[k+I+7]=0),p===!0&&(r.fromBufferAttribute(D,H),b[k+I+8]=r.x,b[k+I+9]=r.y,b[k+I+10]=r.z,b[k+I+11]=D.itemSize===4?r.w:1)}}f={count:d,texture:N,size:new $t(R,w)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<u.length;p++)g+=u[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(e,"morphTargetBaseInfluence",_),c.getUniforms().setValue(e,"morphTargetInfluences",u)}c.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function dg(e,t,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class Xh extends He{constructor(t,n,i,r,s,a,o,c,u,h=Nr){if(h!==Nr&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Nr&&(i=Qi),i===void 0&&h===Vr&&(i=Hr),super(null,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const jh=new He,eu=new Xh(1,1),Yh=new Ph,qh=new Qf,$h=new Hh,nu=[],iu=[],ru=new Float32Array(16),su=new Float32Array(9),au=new Float32Array(4);function Kr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=nu[r];if(s===void 0&&(s=new Float32Array(r),nu[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(s,o)}return s}function Ae(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function we(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ba(e,t){let n=iu[t];n===void 0&&(n=new Int32Array(t),iu[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function fg(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function pg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ae(n,t))return;e.uniform2fv(this.addr,t),we(n,t)}}function mg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ae(n,t))return;e.uniform3fv(this.addr,t),we(n,t)}}function gg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ae(n,t))return;e.uniform4fv(this.addr,t),we(n,t)}}function _g(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ae(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),we(n,t)}else{if(Ae(n,i))return;au.set(i),e.uniformMatrix2fv(this.addr,!1,au),we(n,i)}}function Mg(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ae(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),we(n,t)}else{if(Ae(n,i))return;su.set(i),e.uniformMatrix3fv(this.addr,!1,su),we(n,i)}}function xg(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ae(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),we(n,t)}else{if(Ae(n,i))return;ru.set(i),e.uniformMatrix4fv(this.addr,!1,ru),we(n,i)}}function vg(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Sg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ae(n,t))return;e.uniform2iv(this.addr,t),we(n,t)}}function yg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ae(n,t))return;e.uniform3iv(this.addr,t),we(n,t)}}function Eg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ae(n,t))return;e.uniform4iv(this.addr,t),we(n,t)}}function Tg(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ag(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ae(n,t))return;e.uniform2uiv(this.addr,t),we(n,t)}}function wg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ae(n,t))return;e.uniform3uiv(this.addr,t),we(n,t)}}function bg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ae(n,t))return;e.uniform4uiv(this.addr,t),we(n,t)}}function Cg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(eu.compareFunction=Dh,s=eu):s=jh,n.setTexture2D(t||s,r)}function Rg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||qh,r)}function Lg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||$h,r)}function Dg(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Yh,r)}function Ig(e){switch(e){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return Mg;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return Sg;case 35668:case 35672:return yg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return Ag;case 36295:return wg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ng(e,t){e.uniform1fv(this.addr,t)}function Pg(e,t){const n=Kr(t,this.size,2);e.uniform2fv(this.addr,n)}function Ug(e,t){const n=Kr(t,this.size,3);e.uniform3fv(this.addr,n)}function Fg(e,t){const n=Kr(t,this.size,4);e.uniform4fv(this.addr,n)}function Og(e,t){const n=Kr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function zg(e,t){const n=Kr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Bg(e,t){const n=Kr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function kg(e,t){e.uniform1iv(this.addr,t)}function Gg(e,t){e.uniform2iv(this.addr,t)}function Hg(e,t){e.uniform3iv(this.addr,t)}function Vg(e,t){e.uniform4iv(this.addr,t)}function Wg(e,t){e.uniform1uiv(this.addr,t)}function Xg(e,t){e.uniform2uiv(this.addr,t)}function jg(e,t){e.uniform3uiv(this.addr,t)}function Yg(e,t){e.uniform4uiv(this.addr,t)}function qg(e,t,n){const i=this.cache,r=t.length,s=Ba(n,r);Ae(i,s)||(e.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||jh,s[a])}function $g(e,t,n){const i=this.cache,r=t.length,s=Ba(n,r);Ae(i,s)||(e.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||qh,s[a])}function Kg(e,t,n){const i=this.cache,r=t.length,s=Ba(n,r);Ae(i,s)||(e.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||$h,s[a])}function Zg(e,t,n){const i=this.cache,r=t.length,s=Ba(n,r);Ae(i,s)||(e.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||Yh,s[a])}function Qg(e){switch(e){case 5126:return Ng;case 35664:return Pg;case 35665:return Ug;case 35666:return Fg;case 35674:return Og;case 35675:return zg;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return jg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Jg{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ig(n.type)}}class t_{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Qg(n.type)}}class e_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,n[o.id],i)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function ou(e,t){e.seq.push(t),e.map[t.id]=t}function n_(e,t,n){const i=e.name,r=i.length;for(bo.lastIndex=0;;){const s=bo.exec(i),a=bo.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){ou(n,u===void 0?new Jg(o,e,t):new t_(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new e_(o),ou(n,d)),n=d}}}class _a{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),a=t.getUniformLocation(n,s.name);n_(s,a,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in n&&i.push(a)}return i}}function cu(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const i_=37297;let r_=0;function s_(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const lu=new Ft;function a_(e){jt._getMatrix(lu,jt.workingColorSpace,e);const t=`mat3( ${lu.elements.map(n=>n.toFixed(4))} )`;switch(jt.getTransfer(e)){case za:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function uu(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+s_(e.getShaderSource(t),a)}else return r}function o_(e,t){const n=a_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function c_(e,t){let n;switch(t){case Af:n="Linear";break;case wf:n="Reinhard";break;case bf:n="Cineon";break;case Cf:n="ACESFilmic";break;case Lf:n="AgX";break;case Df:n="Neutral";break;case Rf:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ea=new G;function l_(){jt.getLuminanceCoefficients(ea);const e=ea.x.toFixed(4),t=ea.y.toFixed(4),n=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function h_(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function d_(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ds(e){return e!==""}function hu(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(e){return e.replace(f_,m_)}const p_=new Map;function m_(e,t){let n=zt[t];if(n===void 0){const i=p_.get(t);if(i!==void 0)n=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cc(n)}const g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(e){return e.replace(g_,__)}function __(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pu(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function M_(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function x_(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case kr:case Gr:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v_(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Gr:t="ENVMAP_MODE_REFRACTION";break}return t}function S_(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Gc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ef:t="ENVMAP_BLENDING_MIX";break;case Tf:t="ENVMAP_BLENDING_ADD";break}return t}function y_(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function E_(e,t,n,i){const r=e.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=M_(n),u=x_(n),h=v_(n),d=S_(n),f=y_(n),m=u_(n),g=h_(s),_=r.createProgram();let p,l,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ds).join(`
`),l.length>0&&(l+=`
`)):(p=[pu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),l=[pu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?zt.tonemapping_pars_fragment:"",n.toneMapping!==xi?c_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,o_("linearToOutputTexel",n.outputColorSpace),l_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ds).join(`
`)),a=Cc(a),a=hu(a,n),a=du(a,n),o=Cc(o),o=hu(o,n),o=du(o,n),a=fu(a),o=fu(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",n.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const M=v+p+a,x=v+l+o,R=cu(r,r.VERTEX_SHADER,M),w=cu(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(L){if(e.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),C=r.getShaderInfoLog(R).trim(),D=r.getShaderInfoLog(w).trim();let k=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,_,R,w);else{const I=uu(r,R,"vertex"),P=uu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+I+`
`+P)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(C===""||D==="")&&(H=!1);H&&(L.diagnostics={runnable:k,programLog:U,vertexShader:{log:C,prefix:p},fragmentShader:{log:D,prefix:l}})}r.deleteShader(R),r.deleteShader(w),N=new _a(r,_),T=d_(r,_)}let N;this.getUniforms=function(){return N===void 0&&b(this),N};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,i_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=r_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let T_=0;class A_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new w_(t),n.set(t,i)),i}}class w_{constructor(t){this.id=T_++,this.code=t,this.usedTimes=0}}function b_(e,t,n,i,r,s,a){const o=new Fh,c=new A_,u=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return u.add(T),T===0?"uv":`uv${T}`}function p(T,y,L,U,C){const D=U.fog,k=C.geometry,H=T.isMeshStandardMaterial?U.environment:null,I=(T.isMeshStandardMaterial?n:t).get(T.envMap||H),P=I&&I.mapping===Oa?I.image.height:null,Q=g[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const dt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,St=dt!==void 0?dt.length:0;let Bt=0;k.morphAttributes.position!==void 0&&(Bt=1),k.morphAttributes.normal!==void 0&&(Bt=2),k.morphAttributes.color!==void 0&&(Bt=3);let ee,q,tt,ut;if(Q){const Ct=Rn[Q];ee=Ct.vertexShader,q=Ct.fragmentShader}else ee=T.vertexShader,q=T.fragmentShader,c.update(T),tt=c.getVertexShaderID(T),ut=c.getFragmentShaderID(T);const nt=e.getRenderTarget(),wt=e.state.buffers.depth.getReversed(),Lt=C.isInstancedMesh===!0,Ot=C.isBatchedMesh===!0,oe=!!T.map,kt=!!T.matcap,ue=!!I,B=!!T.aoMap,Ne=!!T.lightMap,mt=!!T.bumpMap,Gt=!!T.normalMap,At=!!T.displacementMap,Zt=!!T.emissiveMap,Et=!!T.metalnessMap,A=!!T.roughnessMap,S=T.anisotropy>0,V=T.clearcoat>0,$=T.dispersion>0,Z=T.iridescence>0,Y=T.sheen>0,_t=T.transmission>0,ot=S&&!!T.anisotropyMap,ft=V&&!!T.clearcoatMap,Vt=V&&!!T.clearcoatNormalMap,J=V&&!!T.clearcoatRoughnessMap,rt=Z&&!!T.iridescenceMap,bt=Z&&!!T.iridescenceThicknessMap,Rt=Y&&!!T.sheenColorMap,pt=Y&&!!T.sheenRoughnessMap,Ht=!!T.specularMap,Nt=!!T.specularColorMap,ne=!!T.specularIntensityMap,F=_t&&!!T.transmissionMap,at=_t&&!!T.thicknessMap,j=!!T.gradientMap,K=!!T.alphaMap,lt=T.alphaTest>0,ct=!!T.alphaHash,Dt=!!T.extensions;let he=xi;T.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(he=e.toneMapping);const Pt={shaderID:Q,shaderType:T.type,shaderName:T.name,vertexShader:ee,fragmentShader:q,defines:T.defines,customVertexShaderID:tt,customFragmentShaderID:ut,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&C._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&C.instanceColor!==null,instancingMorph:Lt&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:jr,alphaToCoverage:!!T.alphaToCoverage,map:oe,matcap:kt,envMap:ue,envMapMode:ue&&I.mapping,envMapCubeUVHeight:P,aoMap:B,lightMap:Ne,bumpMap:mt,normalMap:Gt,displacementMap:f&&At,emissiveMap:Zt,normalMapObjectSpace:Gt&&T.normalMapType===Uf,normalMapTangentSpace:Gt&&T.normalMapType===Lh,metalnessMap:Et,roughnessMap:A,anisotropy:S,anisotropyMap:ot,clearcoat:V,clearcoatMap:ft,clearcoatNormalMap:Vt,clearcoatRoughnessMap:J,dispersion:$,iridescence:Z,iridescenceMap:rt,iridescenceThicknessMap:bt,sheen:Y,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Ht,specularColorMap:Nt,specularIntensityMap:ne,transmission:_t,transmissionMap:F,thicknessMap:at,gradientMap:j,opaque:T.transparent===!1&&T.blending===Ir&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:ct,combine:T.combine,mapUv:oe&&_(T.map.channel),aoMapUv:B&&_(T.aoMap.channel),lightMapUv:Ne&&_(T.lightMap.channel),bumpMapUv:mt&&_(T.bumpMap.channel),normalMapUv:Gt&&_(T.normalMap.channel),displacementMapUv:At&&_(T.displacementMap.channel),emissiveMapUv:Zt&&_(T.emissiveMap.channel),metalnessMapUv:Et&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:ot&&_(T.anisotropyMap.channel),clearcoatMapUv:ft&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(T.sheenRoughnessMap.channel),specularMapUv:Ht&&_(T.specularMap.channel),specularColorMapUv:Nt&&_(T.specularColorMap.channel),specularIntensityMapUv:ne&&_(T.specularIntensityMap.channel),transmissionMapUv:F&&_(T.transmissionMap.channel),thicknessMapUv:at&&_(T.thicknessMap.channel),alphaMapUv:K&&_(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Gt||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!k.attributes.uv&&(oe||K),fog:!!D,useFog:T.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:wt,skinning:C.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:he,decodeVideoTexture:oe&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===ie,decodeVideoTextureEmissive:Zt&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===dn,flipSided:T.side===Ge,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Dt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&T.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=u.has(1),Pt.vertexUv2s=u.has(2),Pt.vertexUv3s=u.has(3),u.clear(),Pt}function l(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)y.push(L),y.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(v(y,T),M(y,T),y.push(e.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function v(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function M(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),T.push(o.mask)}function x(T){const y=g[T.type];let L;if(y){const U=Rn[y];L=up.clone(U.uniforms)}else L=T.uniforms;return L}function R(T,y){let L;for(let U=0,C=h.length;U<C;U++){const D=h[U];if(D.cacheKey===y){L=D,++L.usedTimes;break}}return L===void 0&&(L=new E_(e,y,T,s),h.push(L)),L}function w(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function b(T){c.remove(T)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:l,getUniforms:x,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:N}}function C_(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function r(a,o,c){e.get(a)[o]=c}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function R_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function mu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function gu(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function a(d,f,m,g,_,p){let l=e[t];return l===void 0?(l={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},e[t]=l):(l.id=d.id,l.object=d,l.geometry=f,l.material=m,l.groupOrder=g,l.renderOrder=d.renderOrder,l.z=_,l.group=p),t++,l}function o(d,f,m,g,_,p){const l=a(d,f,m,g,_,p);m.transmission>0?i.push(l):m.transparent===!0?r.push(l):n.push(l)}function c(d,f,m,g,_,p){const l=a(d,f,m,g,_,p);m.transmission>0?i.unshift(l):m.transparent===!0?r.unshift(l):n.unshift(l)}function u(d,f){n.length>1&&n.sort(d||R_),i.length>1&&i.sort(f||mu),r.length>1&&r.sort(f||mu)}function h(){for(let d=t,f=e.length;d<f;d++){const m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:u}}function L_(){let e=new WeakMap;function t(i,r){const s=e.get(i);let a;return s===void 0?(a=new gu,e.set(i,[a])):r>=s.length?(a=new gu,s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function D_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new G,color:new Tt};break;case"SpotLight":n={position:new G,direction:new G,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new G,halfWidth:new G,halfHeight:new G};break}return e[t.id]=n,n}}}function I_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let N_=0;function P_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function U_(e){const t=new D_,n=I_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new Kt,a=new Kt;function o(u){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,g=0,_=0,p=0,l=0,v=0,M=0,x=0,R=0,w=0,b=0;u.sort(P_);for(let T=0,y=u.length;T<y;T++){const L=u[T],U=L.color,C=L.intensity,D=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*C,d+=U.g*C,f+=U.b*C;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],C);b++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const I=L.shadow,P=n.get(L);P.shadowIntensity=I.intensity,P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=L.shadow.matrix,v++}i.directional[m]=H,m++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(U).multiplyScalar(C),H.distance=D,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[_]=H;const I=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,I.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=I.matrix,L.castShadow){const P=n.get(L);P.shadowIntensity=I.intensity,P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=k,x++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(U).multiplyScalar(C),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=H,p++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const I=L.shadow,P=n.get(L);P.shadowIntensity=I.intensity,P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,P.shadowCameraNear=I.camera.near,P.shadowCameraFar=I.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(C),H.groundColor.copy(L.groundColor).multiplyScalar(C),i.hemi[l]=H,l++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==l||N.numDirectionalShadows!==v||N.numPointShadows!==M||N.numSpotShadows!==x||N.numSpotMaps!==R||N.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=l,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=l,N.numDirectionalShadows=v,N.numPointShadows=M,N.numSpotShadows=x,N.numSpotMaps=R,N.numLightProbes=b,i.version=N_++)}function c(u,h){let d=0,f=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let l=0,v=u.length;l<v;l++){const M=u[l];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),d++}else if(M.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:i}}function _u(e){const t=new U_(e),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){t.setup(n)}function c(h){t.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function F_(e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new _u(e),t.set(r,[o])):s>=a.length?(o=new _u(e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class O_ extends $r{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z_ extends $r{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k_=`uniform sampler2D shadow_pass;
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
}`;function G_(e,t,n){let i=new $c;const r=new $t,s=new $t,a=new Me,o=new O_({depthPacking:Pf}),c=new z_,u={},h=n.maxTextureSize,d={[Si]:Ge,[Ge]:Si,[dn]:dn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:B_,fragmentShader:k_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ge(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let l=this.type;this.render=function(w,b,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const T=e.getRenderTarget(),y=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),U=e.state;U.setBlending(Mi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const C=l!==Vn&&this.type===Vn,D=l===Vn&&this.type!==Vn;for(let k=0,H=w.length;k<H;k++){const I=w[k],P=I.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const Q=P.getFrameExtents();if(r.multiply(Q),s.copy(P.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,P.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,P.mapSize.y=s.y)),P.map===null||C===!0||D===!0){const St=this.type!==Vn?{minFilter:on,magFilter:on}:{};P.map!==null&&P.map.dispose(),P.map=new Ji(r.x,r.y,St),P.map.texture.name=I.name+".shadowMap",P.camera.updateProjectionMatrix()}e.setRenderTarget(P.map),e.clear();const dt=P.getViewportCount();for(let St=0;St<dt;St++){const Bt=P.getViewport(St);a.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),U.viewport(a),P.updateMatrices(I,St),i=P.getFrustum(),x(b,N,P.camera,I,this.type)}P.isPointLightShadow!==!0&&this.type===Vn&&v(P,N),P.needsUpdate=!1}l=this.type,p.needsUpdate=!1,e.setRenderTarget(T,y,L)};function v(w,b){const N=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ji(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(b,null,N,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(b,null,N,m,_,null)}function M(w,b,N,T){let y=null;const L=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=N.isPointLight===!0?c:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=y.uuid,C=b.uuid;let D=u[U];D===void 0&&(D={},u[U]=D);let k=D[C];k===void 0&&(k=y.clone(),D[C]=k,b.addEventListener("dispose",R)),y=k}if(y.visible=b.visible,y.wireframe=b.wireframe,T===Vn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=e.properties.get(y);U.light=N}return y}function x(w,b,N,T,y){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Vn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const C=t.update(w),D=w.material;if(Array.isArray(D)){const k=C.groups;for(let H=0,I=k.length;H<I;H++){const P=k[H],Q=D[P.materialIndex];if(Q&&Q.visible){const dt=M(w,Q,T,y);w.onBeforeShadow(e,w,b,N,C,dt,P),e.renderBufferDirect(N,null,C,dt,w,P),w.onAfterShadow(e,w,b,N,C,dt,P)}}}else if(D.visible){const k=M(w,D,T,y);w.onBeforeShadow(e,w,b,N,C,k,null),e.renderBufferDirect(N,null,C,k,w,null),w.onAfterShadow(e,w,b,N,C,k,null)}}const U=w.children;for(let C=0,D=U.length;C<D;C++)x(U[C],b,N,T,y)}function R(w){w.target.removeEventListener("dispose",R);for(const N in u){const T=u[N],y=w.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const H_={[Wo]:Xo,[jo]:$o,[Yo]:Ko,[Br]:qo,[Xo]:Wo,[$o]:jo,[Ko]:Yo,[qo]:Br};function V_(e,t){function n(){let F=!1;const at=new Me;let j=null;const K=new Me(0,0,0,0);return{setMask:function(lt){j!==lt&&!F&&(e.colorMask(lt,lt,lt,lt),j=lt)},setLocked:function(lt){F=lt},setClear:function(lt,ct,Dt,he,Pt){Pt===!0&&(lt*=he,ct*=he,Dt*=he),at.set(lt,ct,Dt,he),K.equals(at)===!1&&(e.clearColor(lt,ct,Dt,he),K.copy(at))},reset:function(){F=!1,j=null,K.set(-1,0,0,0)}}}function i(){let F=!1,at=!1,j=null,K=null,lt=null;return{setReversed:function(ct){if(at!==ct){const Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const he=lt;lt=null,this.setClear(he)}at=ct},getReversed:function(){return at},setTest:function(ct){ct?nt(e.DEPTH_TEST):wt(e.DEPTH_TEST)},setMask:function(ct){j!==ct&&!F&&(e.depthMask(ct),j=ct)},setFunc:function(ct){if(at&&(ct=H_[ct]),K!==ct){switch(ct){case Wo:e.depthFunc(e.NEVER);break;case Xo:e.depthFunc(e.ALWAYS);break;case jo:e.depthFunc(e.LESS);break;case Br:e.depthFunc(e.LEQUAL);break;case Yo:e.depthFunc(e.EQUAL);break;case qo:e.depthFunc(e.GEQUAL);break;case $o:e.depthFunc(e.GREATER);break;case Ko:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}K=ct}},setLocked:function(ct){F=ct},setClear:function(ct){lt!==ct&&(at&&(ct=1-ct),e.clearDepth(ct),lt=ct)},reset:function(){F=!1,j=null,K=null,lt=null,at=!1}}}function r(){let F=!1,at=null,j=null,K=null,lt=null,ct=null,Dt=null,he=null,Pt=null;return{setTest:function(Ct){F||(Ct?nt(e.STENCIL_TEST):wt(e.STENCIL_TEST))},setMask:function(Ct){at!==Ct&&!F&&(e.stencilMask(Ct),at=Ct)},setFunc:function(Ct,re,Xt){(j!==Ct||K!==re||lt!==Xt)&&(e.stencilFunc(Ct,re,Xt),j=Ct,K=re,lt=Xt)},setOp:function(Ct,re,Xt){(ct!==Ct||Dt!==re||he!==Xt)&&(e.stencilOp(Ct,re,Xt),ct=Ct,Dt=re,he=Xt)},setLocked:function(Ct){F=Ct},setClear:function(Ct){Pt!==Ct&&(e.clearStencil(Ct),Pt=Ct)},reset:function(){F=!1,at=null,j=null,K=null,lt=null,ct=null,Dt=null,he=null,Pt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,l=null,v=null,M=null,x=null,R=null,w=null,b=new Tt(0,0,0),N=0,T=!1,y=null,L=null,U=null,C=null,D=null;const k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,I=0;const P=e.getParameter(e.VERSION);P.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(P)[1]),H=I>=1):P.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),H=I>=2);let Q=null,dt={};const St=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),ee=new Me().fromArray(St),q=new Me().fromArray(Bt);function tt(F,at,j,K){const lt=new Uint8Array(4),ct=e.createTexture();e.bindTexture(F,ct),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Dt=0;Dt<j;Dt++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,K,0,e.RGBA,e.UNSIGNED_BYTE,lt):e.texImage2D(at+Dt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,lt);return ct}const ut={};ut[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),ut[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ut[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(e.DEPTH_TEST),a.setFunc(Br),mt(!1),Gt(Sl),nt(e.CULL_FACE),B(Mi);function nt(F){h[F]!==!0&&(e.enable(F),h[F]=!0)}function wt(F){h[F]!==!1&&(e.disable(F),h[F]=!1)}function Lt(F,at){return d[F]!==at?(e.bindFramebuffer(F,at),d[F]=at,F===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=at),F===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=at),!0):!1}function Ot(F,at){let j=m,K=!1;if(F){j=f.get(at),j===void 0&&(j=[],f.set(at,j));const lt=F.textures;if(j.length!==lt.length||j[0]!==e.COLOR_ATTACHMENT0){for(let ct=0,Dt=lt.length;ct<Dt;ct++)j[ct]=e.COLOR_ATTACHMENT0+ct;j.length=lt.length,K=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,K=!0);K&&e.drawBuffers(j)}function oe(F){return g!==F?(e.useProgram(F),g=F,!0):!1}const kt={[Oi]:e.FUNC_ADD,[af]:e.FUNC_SUBTRACT,[of]:e.FUNC_REVERSE_SUBTRACT};kt[cf]=e.MIN,kt[lf]=e.MAX;const ue={[uf]:e.ZERO,[hf]:e.ONE,[df]:e.SRC_COLOR,[Ho]:e.SRC_ALPHA,[Mf]:e.SRC_ALPHA_SATURATE,[gf]:e.DST_COLOR,[pf]:e.DST_ALPHA,[ff]:e.ONE_MINUS_SRC_COLOR,[Vo]:e.ONE_MINUS_SRC_ALPHA,[_f]:e.ONE_MINUS_DST_COLOR,[mf]:e.ONE_MINUS_DST_ALPHA,[xf]:e.CONSTANT_COLOR,[vf]:e.ONE_MINUS_CONSTANT_COLOR,[Sf]:e.CONSTANT_ALPHA,[yf]:e.ONE_MINUS_CONSTANT_ALPHA};function B(F,at,j,K,lt,ct,Dt,he,Pt,Ct){if(F===Mi){_===!0&&(wt(e.BLEND),_=!1);return}if(_===!1&&(nt(e.BLEND),_=!0),F!==sf){if(F!==p||Ct!==T){if((l!==Oi||x!==Oi)&&(e.blendEquation(e.FUNC_ADD),l=Oi,x=Oi),Ct)switch(F){case Ir:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case yl:e.blendFunc(e.ONE,e.ONE);break;case El:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Tl:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case yl:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case El:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Tl:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,M=null,R=null,w=null,b.set(0,0,0),N=0,p=F,T=Ct}return}lt=lt||at,ct=ct||j,Dt=Dt||K,(at!==l||lt!==x)&&(e.blendEquationSeparate(kt[at],kt[lt]),l=at,x=lt),(j!==v||K!==M||ct!==R||Dt!==w)&&(e.blendFuncSeparate(ue[j],ue[K],ue[ct],ue[Dt]),v=j,M=K,R=ct,w=Dt),(he.equals(b)===!1||Pt!==N)&&(e.blendColor(he.r,he.g,he.b,Pt),b.copy(he),N=Pt),p=F,T=!1}function Ne(F,at){F.side===dn?wt(e.CULL_FACE):nt(e.CULL_FACE);let j=F.side===Ge;at&&(j=!j),mt(j),F.blending===Ir&&F.transparent===!1?B(Mi):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const K=F.stencilWrite;o.setTest(K),K&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):wt(e.SAMPLE_ALPHA_TO_COVERAGE)}function mt(F){y!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),y=F)}function Gt(F){F!==ef?(nt(e.CULL_FACE),F!==L&&(F===Sl?e.cullFace(e.BACK):F===nf?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):wt(e.CULL_FACE),L=F}function At(F){F!==U&&(H&&e.lineWidth(F),U=F)}function Zt(F,at,j){F?(nt(e.POLYGON_OFFSET_FILL),(C!==at||D!==j)&&(e.polygonOffset(at,j),C=at,D=j)):wt(e.POLYGON_OFFSET_FILL)}function Et(F){F?nt(e.SCISSOR_TEST):wt(e.SCISSOR_TEST)}function A(F){F===void 0&&(F=e.TEXTURE0+k-1),Q!==F&&(e.activeTexture(F),Q=F)}function S(F,at,j){j===void 0&&(Q===null?j=e.TEXTURE0+k-1:j=Q);let K=dt[j];K===void 0&&(K={type:void 0,texture:void 0},dt[j]=K),(K.type!==F||K.texture!==at)&&(Q!==j&&(e.activeTexture(j),Q=j),e.bindTexture(F,at||ut[F]),K.type=F,K.texture=at)}function V(){const F=dt[Q];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{e.compressedTexImage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{e.compressedTexImage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{e.texSubImage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{e.texSubImage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Vt(){try{e.texStorage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{e.texStorage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{e.texImage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{e.texImage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(F){ee.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),ee.copy(F))}function pt(F){q.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function Ht(F,at){let j=u.get(at);j===void 0&&(j=new WeakMap,u.set(at,j));let K=j.get(F);K===void 0&&(K=e.getUniformBlockIndex(at,F.name),j.set(F,K))}function Nt(F,at){const K=u.get(at).get(F);c.get(at)!==K&&(e.uniformBlockBinding(at,K,F.__bindingPointIndex),c.set(at,K))}function ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},Q=null,dt={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,l=null,v=null,M=null,x=null,R=null,w=null,b=new Tt(0,0,0),N=0,T=!1,y=null,L=null,U=null,C=null,D=null,ee.set(0,0,e.canvas.width,e.canvas.height),q.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:wt,bindFramebuffer:Lt,drawBuffers:Ot,useProgram:oe,setBlending:B,setMaterial:Ne,setFlipSided:mt,setCullFace:Gt,setLineWidth:At,setPolygonOffset:Zt,setScissorTest:Et,activeTexture:A,bindTexture:S,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:rt,texImage3D:bt,updateUBOMapping:Ht,uniformBlockBinding:Nt,texStorage2D:Vt,texStorage3D:J,texSubImage2D:Y,texSubImage3D:_t,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Rt,viewport:pt,reset:ne}}function Mu(e,t,n,i){const r=W_(i);switch(n){case Th:return e*t;case wh:return e*t;case bh:return e*t*2;case Xc:return e*t/r.components*r.byteLength;case jc:return e*t/r.components*r.byteLength;case Ch:return e*t*2/r.components*r.byteLength;case Yc:return e*t*2/r.components*r.byteLength;case Ah:return e*t*3/r.components*r.byteLength;case yn:return e*t*4/r.components*r.byteLength;case qc:return e*t*4/r.components*r.byteLength;case da:case fa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nc:case rc:return Math.max(e,16)*Math.max(t,8)/4;case ec:case ic:return Math.max(e,8)*Math.max(t,8)/2;case sc:case ac:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case hc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _c:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case vc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ga:case yc:case Ec:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Rh:case Tc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ac:case wc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function W_(e){switch(e){case $n:case Sh:return{byteLength:1,components:1};case ys:case yh:case ws:return{byteLength:2,components:1};case Vc:case Wc:return{byteLength:2,components:4};case Qi:case Hc:case In:return{byteLength:4,components:1};case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function X_(e,t,n,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $t,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):Aa("canvas")}function _(A,S,V){let $=1;const Z=Et(A);if((Z.width>V||Z.height>V)&&($=V/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor($*Z.width),_t=Math.floor($*Z.height);d===void 0&&(d=g(Y,_t));const ot=S?g(Y,_t):d;return ot.width=Y,ot.height=_t,ot.getContext("2d").drawImage(A,0,0,Y,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_t+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function l(A){e.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(A,S,V,$,Z=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===e.RED&&(V===e.FLOAT&&(Y=e.R32F),V===e.HALF_FLOAT&&(Y=e.R16F),V===e.UNSIGNED_BYTE&&(Y=e.R8)),S===e.RED_INTEGER&&(V===e.UNSIGNED_BYTE&&(Y=e.R8UI),V===e.UNSIGNED_SHORT&&(Y=e.R16UI),V===e.UNSIGNED_INT&&(Y=e.R32UI),V===e.BYTE&&(Y=e.R8I),V===e.SHORT&&(Y=e.R16I),V===e.INT&&(Y=e.R32I)),S===e.RG&&(V===e.FLOAT&&(Y=e.RG32F),V===e.HALF_FLOAT&&(Y=e.RG16F),V===e.UNSIGNED_BYTE&&(Y=e.RG8)),S===e.RG_INTEGER&&(V===e.UNSIGNED_BYTE&&(Y=e.RG8UI),V===e.UNSIGNED_SHORT&&(Y=e.RG16UI),V===e.UNSIGNED_INT&&(Y=e.RG32UI),V===e.BYTE&&(Y=e.RG8I),V===e.SHORT&&(Y=e.RG16I),V===e.INT&&(Y=e.RG32I)),S===e.RGB_INTEGER&&(V===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),V===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),V===e.UNSIGNED_INT&&(Y=e.RGB32UI),V===e.BYTE&&(Y=e.RGB8I),V===e.SHORT&&(Y=e.RGB16I),V===e.INT&&(Y=e.RGB32I)),S===e.RGBA_INTEGER&&(V===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),V===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),V===e.UNSIGNED_INT&&(Y=e.RGBA32UI),V===e.BYTE&&(Y=e.RGBA8I),V===e.SHORT&&(Y=e.RGBA16I),V===e.INT&&(Y=e.RGBA32I)),S===e.RGB&&V===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),S===e.RGBA){const _t=Z?za:jt.getTransfer($);V===e.FLOAT&&(Y=e.RGBA32F),V===e.HALF_FLOAT&&(Y=e.RGBA16F),V===e.UNSIGNED_BYTE&&(Y=_t===ie?e.SRGB8_ALPHA8:e.RGBA8),V===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),V===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(A,S){let V;return A?S===null||S===Qi||S===Hr?V=e.DEPTH24_STENCIL8:S===In?V=e.DEPTH32F_STENCIL8:S===ys&&(V=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qi||S===Hr?V=e.DEPTH_COMPONENT24:S===In?V=e.DEPTH_COMPONENT32F:S===ys&&(V=e.DEPTH_COMPONENT16),V}function R(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),N(S),S.isVideoTexture&&h.delete(S)}function b(A){const S=A.target;S.removeEventListener("dispose",b),y(S)}function N(A){const S=i.get(A);if(S.__webglInit===void 0)return;const V=A.source,$=f.get(V);if($){const Z=$[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(A),Object.keys($).length===0&&f.delete(V)}i.remove(A)}function T(A){const S=i.get(A);e.deleteTexture(S.__webglTexture);const V=A.source,$=f.get(V);delete $[S.__cacheKey],a.memory.textures--}function y(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Z=0;Z<S.__webglFramebuffer[$].length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[$][Z]);else e.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)e.deleteFramebuffer(S.__webglFramebuffer[$]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=A.textures;for(let $=0,Z=V.length;$<Z;$++){const Y=i.get(V[$]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(V[$])}i.remove(A)}let L=0;function U(){L=0}function C(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function D(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function k(A,S){const V=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,A,S);return}}n.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+S)}function H(A,S){const V=i.get(A);if(A.version>0&&V.__version!==A.version){q(V,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+S)}function I(A,S){const V=i.get(A);if(A.version>0&&V.__version!==A.version){q(V,A,S);return}n.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+S)}function P(A,S){const V=i.get(A);if(A.version>0&&V.__version!==A.version){tt(V,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+S)}const Q={[Jo]:e.REPEAT,[Xi]:e.CLAMP_TO_EDGE,[tc]:e.MIRRORED_REPEAT},dt={[on]:e.NEAREST,[If]:e.NEAREST_MIPMAP_NEAREST,[Us]:e.NEAREST_MIPMAP_LINEAR,[Dn]:e.LINEAR,[Qa]:e.LINEAR_MIPMAP_NEAREST,[ji]:e.LINEAR_MIPMAP_LINEAR},St={[Ff]:e.NEVER,[Hf]:e.ALWAYS,[Of]:e.LESS,[Dh]:e.LEQUAL,[zf]:e.EQUAL,[Gf]:e.GEQUAL,[Bf]:e.GREATER,[kf]:e.NOTEQUAL};function Bt(A,S){if(S.type===In&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===Qa||S.magFilter===Us||S.magFilter===ji||S.minFilter===Dn||S.minFilter===Qa||S.minFilter===Us||S.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Q[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Q[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Q[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,dt[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,St[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===on||S.minFilter!==Us&&S.minFilter!==ji||S.type===In&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ee(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const $=S.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const Y=D(S);if(Y!==A.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Z[Y].usedTimes++;const _t=Z[A.__cacheKey];_t!==void 0&&(Z[A.__cacheKey].usedTimes--,_t.usedTimes===0&&T(S)),A.__cacheKey=Y,A.__webglTexture=Z[Y].texture}return V}function q(A,S,V){let $=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=e.TEXTURE_3D);const Z=ee(A,S),Y=S.source;n.bindTexture($,A.__webglTexture,e.TEXTURE0+V);const _t=i.get(Y);if(Y.version!==_t.__version||Z===!0){n.activeTexture(e.TEXTURE0+V);const ot=jt.getPrimaries(jt.workingColorSpace),ft=S.colorSpace===fi?null:jt.getPrimaries(S.colorSpace),Vt=S.colorSpace===fi||ot===ft?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let J=_(S.image,!1,r.maxTextureSize);J=Zt(S,J);const rt=s.convert(S.format,S.colorSpace),bt=s.convert(S.type);let Rt=M(S.internalFormat,rt,bt,S.colorSpace,S.isVideoTexture);Bt($,S);let pt;const Ht=S.mipmaps,Nt=S.isVideoTexture!==!0,ne=_t.__version===void 0||Z===!0,F=Y.dataReady,at=R(S,J);if(S.isDepthTexture)Rt=x(S.format===Vr,S.type),ne&&(Nt?n.texStorage2D(e.TEXTURE_2D,1,Rt,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,Rt,J.width,J.height,0,rt,bt,null));else if(S.isDataTexture)if(Ht.length>0){Nt&&ne&&n.texStorage2D(e.TEXTURE_2D,at,Rt,Ht[0].width,Ht[0].height);for(let j=0,K=Ht.length;j<K;j++)pt=Ht[j],Nt?F&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,pt.width,pt.height,rt,bt,pt.data):n.texImage2D(e.TEXTURE_2D,j,Rt,pt.width,pt.height,0,rt,bt,pt.data);S.generateMipmaps=!1}else Nt?(ne&&n.texStorage2D(e.TEXTURE_2D,at,Rt,J.width,J.height),F&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,J.width,J.height,rt,bt,J.data)):n.texImage2D(e.TEXTURE_2D,0,Rt,J.width,J.height,0,rt,bt,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,Rt,Ht[0].width,Ht[0].height,J.depth);for(let j=0,K=Ht.length;j<K;j++)if(pt=Ht[j],S.format!==yn)if(rt!==null)if(Nt){if(F)if(S.layerUpdates.size>0){const lt=Mu(pt.width,pt.height,S.format,S.type);for(const ct of S.layerUpdates){const Dt=pt.data.subarray(ct*lt/pt.data.BYTES_PER_ELEMENT,(ct+1)*lt/pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,ct,pt.width,pt.height,1,rt,Dt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,J.depth,rt,pt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,Rt,pt.width,pt.height,J.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?F&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,J.depth,rt,bt,pt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,Rt,pt.width,pt.height,J.depth,0,rt,bt,pt.data)}else{Nt&&ne&&n.texStorage2D(e.TEXTURE_2D,at,Rt,Ht[0].width,Ht[0].height);for(let j=0,K=Ht.length;j<K;j++)pt=Ht[j],S.format!==yn?rt!==null?Nt?F&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,pt.width,pt.height,rt,pt.data):n.compressedTexImage2D(e.TEXTURE_2D,j,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?F&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,pt.width,pt.height,rt,bt,pt.data):n.texImage2D(e.TEXTURE_2D,j,Rt,pt.width,pt.height,0,rt,bt,pt.data)}else if(S.isDataArrayTexture)if(Nt){if(ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,Rt,J.width,J.height,J.depth),F)if(S.layerUpdates.size>0){const j=Mu(J.width,J.height,S.format,S.type);for(const K of S.layerUpdates){const lt=J.data.subarray(K*j/J.data.BYTES_PER_ELEMENT,(K+1)*j/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,rt,bt,lt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,rt,bt,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Rt,J.width,J.height,J.depth,0,rt,bt,J.data);else if(S.isData3DTexture)Nt?(ne&&n.texStorage3D(e.TEXTURE_3D,at,Rt,J.width,J.height,J.depth),F&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,rt,bt,J.data)):n.texImage3D(e.TEXTURE_3D,0,Rt,J.width,J.height,J.depth,0,rt,bt,J.data);else if(S.isFramebufferTexture){if(ne)if(Nt)n.texStorage2D(e.TEXTURE_2D,at,Rt,J.width,J.height);else{let j=J.width,K=J.height;for(let lt=0;lt<at;lt++)n.texImage2D(e.TEXTURE_2D,lt,Rt,j,K,0,rt,bt,null),j>>=1,K>>=1}}else if(Ht.length>0){if(Nt&&ne){const j=Et(Ht[0]);n.texStorage2D(e.TEXTURE_2D,at,Rt,j.width,j.height)}for(let j=0,K=Ht.length;j<K;j++)pt=Ht[j],Nt?F&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,rt,bt,pt):n.texImage2D(e.TEXTURE_2D,j,Rt,rt,bt,pt);S.generateMipmaps=!1}else if(Nt){if(ne){const j=Et(J);n.texStorage2D(e.TEXTURE_2D,at,Rt,j.width,j.height)}F&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,rt,bt,J)}else n.texImage2D(e.TEXTURE_2D,0,Rt,rt,bt,J);p(S)&&l($),_t.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function tt(A,S,V){if(S.image.length!==6)return;const $=ee(A,S),Z=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+V);const Y=i.get(Z);if(Z.version!==Y.__version||$===!0){n.activeTexture(e.TEXTURE0+V);const _t=jt.getPrimaries(jt.workingColorSpace),ot=S.colorSpace===fi?null:jt.getPrimaries(S.colorSpace),ft=S.colorSpace===fi||_t===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Vt=S.isCompressedTexture||S.image[0].isCompressedTexture,J=S.image[0]&&S.image[0].isDataTexture,rt=[];for(let K=0;K<6;K++)!Vt&&!J?rt[K]=_(S.image[K],!0,r.maxCubemapSize):rt[K]=J?S.image[K].image:S.image[K],rt[K]=Zt(S,rt[K]);const bt=rt[0],Rt=s.convert(S.format,S.colorSpace),pt=s.convert(S.type),Ht=M(S.internalFormat,Rt,pt,S.colorSpace),Nt=S.isVideoTexture!==!0,ne=Y.__version===void 0||$===!0,F=Z.dataReady;let at=R(S,bt);Bt(e.TEXTURE_CUBE_MAP,S);let j;if(Vt){Nt&&ne&&n.texStorage2D(e.TEXTURE_CUBE_MAP,at,Ht,bt.width,bt.height);for(let K=0;K<6;K++){j=rt[K].mipmaps;for(let lt=0;lt<j.length;lt++){const ct=j[lt];S.format!==yn?Rt!==null?Nt?F&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ct.width,ct.height,Rt,ct.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Ht,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ct.width,ct.height,Rt,pt,ct.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Ht,ct.width,ct.height,0,Rt,pt,ct.data)}}}else{if(j=S.mipmaps,Nt&&ne){j.length>0&&at++;const K=Et(rt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,at,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(J){Nt?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,rt[K].width,rt[K].height,Rt,pt,rt[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,rt[K].width,rt[K].height,0,Rt,pt,rt[K].data);for(let lt=0;lt<j.length;lt++){const Dt=j[lt].image[K].image;Nt?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Dt.width,Dt.height,Rt,pt,Dt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Ht,Dt.width,Dt.height,0,Rt,pt,Dt.data)}}else{Nt?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,pt,rt[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Rt,pt,rt[K]);for(let lt=0;lt<j.length;lt++){const ct=j[lt];Nt?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Rt,pt,ct.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Ht,Rt,pt,ct.image[K])}}}p(S)&&l(e.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ut(A,S,V,$,Z,Y){const _t=s.convert(V.format,V.colorSpace),ot=s.convert(V.type),ft=M(V.internalFormat,_t,ot,V.colorSpace),Vt=i.get(S),J=i.get(V);if(J.__renderTarget=S,!Vt.__hasExternalTextures){const rt=Math.max(1,S.width>>Y),bt=Math.max(1,S.height>>Y);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,Y,ft,rt,bt,S.depth,0,_t,ot,null):n.texImage2D(Z,Y,ft,rt,bt,0,_t,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Gt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,Z,J.__webglTexture,0,mt(S)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,Z,J.__webglTexture,Y),n.bindFramebuffer(e.FRAMEBUFFER,null)}function nt(A,S,V){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=x(S.stencilBuffer,Z),_t=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=mt(S);Gt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,Y,S.width,S.height):V?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,_t,e.RENDERBUFFER,A)}else{const $=S.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],_t=s.convert(Y.format,Y.colorSpace),ot=s.convert(Y.type),ft=M(Y.internalFormat,_t,ot,Y.colorSpace),Vt=mt(S);V&&Gt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Vt,ft,S.width,S.height):Gt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Vt,ft,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ft,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function wt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const Z=$.__webglTexture,Y=mt(S);if(S.depthTexture.format===Nr)Gt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Vr)Gt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const S=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");wt(S.__webglFramebuffer,A)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=e.createRenderbuffer(),nt(S.__webglDepthbuffer[$],A,!1);else{const Z=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),nt(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,Z)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ot(A,S,V){const $=i.get(A);S!==void 0&&ut($.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),V!==void 0&&Lt(A)}function oe(A){const S=A.texture,V=i.get(A),$=i.get(S);A.addEventListener("dispose",b);const Z=A.textures,Y=A.isWebGLCubeRenderTarget===!0,_t=Z.length>1;if(_t||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=S.version,a.memory.textures++),Y){V.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ot]=[];for(let ft=0;ft<S.mipmaps.length;ft++)V.__webglFramebuffer[ot][ft]=e.createFramebuffer()}else V.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)V.__webglFramebuffer[ot]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(_t)for(let ot=0,ft=Z.length;ot<ft;ot++){const Vt=i.get(Z[ot]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=e.createTexture(),a.memory.textures++)}if(A.samples>0&&Gt(A)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const ft=Z[ot];V.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[ot]);const Vt=s.convert(ft.format,ft.colorSpace),J=s.convert(ft.type),rt=M(ft.internalFormat,Vt,J,ft.colorSpace,A.isXRRenderTarget===!0),bt=mt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,bt,rt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,V.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=e.createRenderbuffer(),nt(V.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Bt(e.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)ut(V.__webglFramebuffer[ot][ft],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else ut(V.__webglFramebuffer[ot],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(S)&&l(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_t){for(let ot=0,ft=Z.length;ot<ft;ot++){const Vt=Z[ot],J=i.get(Vt);n.bindTexture(e.TEXTURE_2D,J.__webglTexture),Bt(e.TEXTURE_2D,Vt),ut(V.__webglFramebuffer,A,Vt,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,0),p(Vt)&&l(e.TEXTURE_2D)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,$.__webglTexture),Bt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)ut(V.__webglFramebuffer[ft],A,S,e.COLOR_ATTACHMENT0,ot,ft);else ut(V.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,ot,0);p(S)&&l(ot),n.unbindTexture()}A.depthBuffer&&Lt(A)}function kt(A){const S=A.textures;for(let V=0,$=S.length;V<$;V++){const Z=S[V];if(p(Z)){const Y=v(A),_t=i.get(Z).__webglTexture;n.bindTexture(Y,_t),l(Y),n.unbindTexture()}}}const ue=[],B=[];function Ne(A){if(A.samples>0){if(Gt(A)===!1){const S=A.textures,V=A.width,$=A.height;let Z=e.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_t=i.get(A),ot=S.length>1;if(ot)for(let ft=0;ft<S.length;ft++)n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const Vt=i.get(S[ft]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Vt,0)}e.blitFramebuffer(0,0,V,$,0,0,V,$,Z,e.NEAREST),c===!0&&(ue.length=0,B.length=0,ue.push(e.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(Y),B.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,B)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ue))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<S.length;ft++){n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const Vt=i.get(S[ft]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,Vt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function mt(A){return Math.min(r.maxSamples,A.samples)}function Gt(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Zt(A,S){const V=A.colorSpace,$=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==jr&&V!==fi&&(jt.getTransfer(V)===ie?($!==yn||Z!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=C,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=I,this.setTextureCube=P,this.rebindTextures=Ot,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Gt}function j_(e,t){function n(i,r=fi){let s;const a=jt.getTransfer(r);if(i===$n)return e.UNSIGNED_BYTE;if(i===Vc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Eh)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Sh)return e.BYTE;if(i===yh)return e.SHORT;if(i===ys)return e.UNSIGNED_SHORT;if(i===Hc)return e.INT;if(i===Qi)return e.UNSIGNED_INT;if(i===In)return e.FLOAT;if(i===ws)return e.HALF_FLOAT;if(i===Th)return e.ALPHA;if(i===Ah)return e.RGB;if(i===yn)return e.RGBA;if(i===wh)return e.LUMINANCE;if(i===bh)return e.LUMINANCE_ALPHA;if(i===Nr)return e.DEPTH_COMPONENT;if(i===Vr)return e.DEPTH_STENCIL;if(i===Xc)return e.RED;if(i===jc)return e.RED_INTEGER;if(i===Ch)return e.RG;if(i===Yc)return e.RG_INTEGER;if(i===qc)return e.RGBA_INTEGER;if(i===da||i===fa||i===pa||i===ma)if(a===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ec||i===nc||i===ic||i===rc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===ac||i===oc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sc||i===ac)return a===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cc||i===lc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===Mc||i===xc||i===vc||i===Sc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ga||i===yc||i===Ec)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ga)return a===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rh||i===Tc||i===Ac||i===wc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ga)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class Y_ extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gi extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q_={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const p=n.getJointPose(_,i),l=this._getHandJoint(u,_);p!==null&&(l.matrix.fromArray(p.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=p.radius),l.visible=p!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new gi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
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

}`;class Z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new He,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Kn({vertexShader:$_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ge(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q_ extends Yr{constructor(t,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,d=null,f=null,m=null,g=null;const _=new Z_,p=n.getContextAttributes();let l=null,v=null;const M=[],x=[],R=new $t;let w=null;const b=new hn;b.viewport=new Me;const N=new hn;N.viewport=new Me;const T=[b,N],y=new Y_;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=M[q];return tt===void 0&&(tt=new Co,M[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=M[q];return tt===void 0&&(tt=new Co,M[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=M[q];return tt===void 0&&(tt=new Co,M[q]=tt),tt.getHandSpace()};function C(q){const tt=x.indexOf(q.inputSource);if(tt===-1)return;const ut=M[tt];ut!==void 0&&(ut.update(q.inputSource,q.frame,u||a),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",k);for(let q=0;q<M.length;q++){const tt=x[q];tt!==null&&(x[q]=null,M[q].disconnect(tt))}L=null,U=null,_.reset(),t.setRenderTarget(l),m=null,f=null,d=null,r=null,v=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(l=t.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",D),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await n.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Ji(m.framebufferWidth,m.framebufferHeight,{format:yn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,ut=null,nt=null;p.depth&&(nt=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,tt=p.stencil?Vr:Nr,ut=p.stencil?Hr:Qi);const wt={colorFormat:n.RGBA8,depthFormat:nt,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(wt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ji(f.textureWidth,f.textureHeight,{format:yn,type:$n,depthTexture:new Xh(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(q){for(let tt=0;tt<q.removed.length;tt++){const ut=q.removed[tt],nt=x.indexOf(ut);nt>=0&&(x[nt]=null,M[nt].disconnect(ut))}for(let tt=0;tt<q.added.length;tt++){const ut=q.added[tt];let nt=x.indexOf(ut);if(nt===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=x.length){x.push(ut),nt=Lt;break}else if(x[Lt]===null){x[Lt]=ut,nt=Lt;break}if(nt===-1)break}const wt=M[nt];wt&&wt.connect(ut)}}const H=new G,I=new G;function P(q,tt,ut){H.setFromMatrixPosition(tt.matrixWorld),I.setFromMatrixPosition(ut.matrixWorld);const nt=H.distanceTo(I),wt=tt.projectionMatrix.elements,Lt=ut.projectionMatrix.elements,Ot=wt[14]/(wt[10]-1),oe=wt[14]/(wt[10]+1),kt=(wt[9]+1)/wt[5],ue=(wt[9]-1)/wt[5],B=(wt[8]-1)/wt[0],Ne=(Lt[8]+1)/Lt[0],mt=Ot*B,Gt=Ot*Ne,At=nt/(-B+Ne),Zt=At*-B;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Zt),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Et=Ot+At,A=oe+At,S=mt-Zt,V=Gt+(nt-Zt),$=kt*oe/A*Et,Z=ue*oe/A*Et;q.projectionMatrix.makePerspective(S,V,$,Z,Et,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let tt=q.near,ut=q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(ut=_.depthFar)),y.near=N.near=b.near=tt,y.far=N.far=b.far=ut,(L!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,U=y.far),b.layers.mask=q.layers.mask|2,N.layers.mask=q.layers.mask|4,y.layers.mask=b.layers.mask|N.layers.mask;const nt=q.parent,wt=y.cameras;Q(y,nt);for(let Lt=0;Lt<wt.length;Lt++)Q(wt[Lt],nt);wt.length===2?P(y,b,N):y.projectionMatrix.copy(b.projectionMatrix),dt(q,y,nt)};function dt(q,tt,ut){ut===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let St=null;function Bt(q,tt){if(h=tt.getViewerPose(u||a),g=tt,h!==null){const ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let nt=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,nt=!0);for(let Lt=0;Lt<ut.length;Lt++){const Ot=ut[Lt];let oe=null;if(m!==null)oe=m.getViewport(Ot);else{const ue=d.getViewSubImage(f,Ot);oe=ue.viewport,Lt===0&&(t.setRenderTargetTextures(v,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(v))}let kt=T[Lt];kt===void 0&&(kt=new hn,kt.layers.enable(Lt),kt.viewport=new Me,T[Lt]=kt),kt.matrix.fromArray(Ot.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ot.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(oe.x,oe.y,oe.width,oe.height),Lt===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),nt===!0&&y.cameras.push(kt)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Lt=d.getDepthInformation(ut[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,r.renderState)}}for(let ut=0;ut<M.length;ut++){const nt=x[ut],wt=M[ut];nt!==null&&wt!==void 0&&wt.update(nt,tt,u||a)}St&&St(q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const ee=new Vh;ee.setAnimationLoop(Bt),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}}const Li=new Ze,J_=new Kt;function tM(e,t){function n(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function i(p,l){l.color.getRGB(p.fogColor.value,kh(e)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function r(p,l,v,M,x){l.isMeshBasicMaterial||l.isMeshLambertMaterial?s(p,l):l.isMeshToonMaterial?(s(p,l),d(p,l)):l.isMeshPhongMaterial?(s(p,l),h(p,l)):l.isMeshStandardMaterial?(s(p,l),f(p,l),l.isMeshPhysicalMaterial&&m(p,l,x)):l.isMeshMatcapMaterial?(s(p,l),g(p,l)):l.isMeshDepthMaterial?s(p,l):l.isMeshDistanceMaterial?(s(p,l),_(p,l)):l.isMeshNormalMaterial?s(p,l):l.isLineBasicMaterial?(a(p,l),l.isLineDashedMaterial&&o(p,l)):l.isPointsMaterial?c(p,l,v,M):l.isSpriteMaterial?u(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function s(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,n(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,n(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,n(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===Ge&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,n(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===Ge&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,n(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,n(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,n(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const v=t.get(l),M=v.envMap,x=v.envMapRotation;M&&(p.envMap.value=M,Li.copy(x),Li.x*=-1,Li.y*=-1,Li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),p.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(Li)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,n(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,n(l.aoMap,p.aoMapTransform))}function a(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,n(l.map,p.mapTransform))}function o(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function c(p,l,v,M){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*v,p.scale.value=M*.5,l.map&&(p.map.value=l.map,n(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,n(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function u(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,n(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,n(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function h(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function d(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function f(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,n(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,n(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function m(p,l,v){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,n(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,n(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,n(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,n(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,n(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Ge&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,n(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,n(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,n(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,n(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,n(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,n(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,n(l.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,l){l.matcap&&(p.matcap.value=l.matcap)}function _(p,l){const v=t.get(l).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eM(e,t,n,i){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function u(v,M){let x=r[v.id];x===void 0&&(g(v),x=h(v),r[v.id]=x,v.addEventListener("dispose",p));const R=M.program;i.updateUBOMapping(v,R);const w=t.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function h(v){const M=d();v.__bindingPointIndex=M;const x=e.createBuffer(),R=v.__size,w=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,R,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,x),x}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=r[v.id],x=v.uniforms,R=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let w=0,b=x.length;w<b;w++){const N=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,y=N.length;T<y;T++){const L=N[T];if(m(L,w,T,R)===!0){const U=L.__offset,C=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let k=0;k<C.length;k++){const H=C[k],I=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,e.bufferSubData(e.UNIFORM_BUFFER,U+D,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,D),D+=I.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,U,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(v,M,x,R){const w=v.value,b=M+"_"+x;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const N=R[b];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return R[b]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(v){const M=v.uniforms;let x=0;const R=16;for(let b=0,N=M.length;b<N;b++){const T=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,L=T.length;y<L;y++){const U=T[y],C=Array.isArray(U.value)?U.value:[U.value];for(let D=0,k=C.length;D<k;D++){const H=C[D],I=_(H),P=x%R,Q=P%I.boundary,dt=P+Q;x+=Q,dt!==0&&R-dt<I.storage&&(x+=R-dt),U.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=I.storage}}}const w=x%R;return w>0&&(x+=R-w),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){const M=v.target;M.removeEventListener("dispose",p);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),e.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function l(){for(const v in r)e.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:u,dispose:l}}class nM{constructor(t={}){const{canvas:n=Wf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,l=null;const v=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=xi,this.toneMappingExposure=1;const x=this;let R=!1,w=0,b=0,N=null,T=-1,y=null;const L=new Me,U=new Me;let C=null;const D=new Tt(0);let k=0,H=n.width,I=n.height,P=1,Q=null,dt=null;const St=new Me(0,0,H,I),Bt=new Me(0,0,H,I);let ee=!1;const q=new $c;let tt=!1,ut=!1;const nt=new Kt,wt=new Kt,Lt=new G,Ot=new Me,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function ue(){return N===null?P:1}let B=i;function Ne(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kc}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",lt,!1),n.addEventListener("webglcontextcreationerror",ct,!1),B===null){const O="webgl2";if(B=Ne(O,E),B===null)throw Ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let mt,Gt,At,Zt,Et,A,S,V,$,Z,Y,_t,ot,ft,Vt,J,rt,bt,Rt,pt,Ht,Nt,ne,F;function at(){mt=new og(B),mt.init(),Nt=new j_(B,mt),Gt=new eg(B,mt,t,Nt),At=new V_(B,mt),Gt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),Zt=new ug(B),Et=new C_,A=new X_(B,mt,At,Et,Gt,Nt,Zt),S=new ig(x),V=new ag(x),$=new _p(B),ne=new J0(B,$),Z=new cg(B,$,Zt,ne),Y=new dg(B,Z,$,Zt),Rt=new hg(B,Gt,A),J=new ng(Et),_t=new b_(x,S,V,mt,Gt,ne,J),ot=new tM(x,Et),ft=new L_,Vt=new F_(mt),bt=new Q0(x,S,V,At,Y,m,c),rt=new G_(x,Y,Gt),F=new eM(B,Zt,Gt,At),pt=new tg(B,mt,Zt),Ht=new lg(B,mt,Zt),Zt.programs=_t.programs,x.capabilities=Gt,x.extensions=mt,x.properties=Et,x.renderLists=ft,x.shadowMap=rt,x.state=At,x.info=Zt}at();const j=new Q_(x,B);this.xr=j,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(E){E!==void 0&&(P=E,this.setSize(H,I,!1))},this.getSize=function(E){return E.set(H,I)},this.setSize=function(E,O,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,I=O,n.width=Math.floor(E*P),n.height=Math.floor(O*P),X===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(H*P,I*P).floor()},this.setDrawingBufferSize=function(E,O,X){H=E,I=O,P=X,n.width=Math.floor(E*X),n.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,O,X,W){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,O,X,W),At.viewport(L.copy(St).multiplyScalar(P).round())},this.getScissor=function(E){return E.copy(Bt)},this.setScissor=function(E,O,X,W){E.isVector4?Bt.set(E.x,E.y,E.z,E.w):Bt.set(E,O,X,W),At.scissor(U.copy(Bt).multiplyScalar(P).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){At.setScissorTest(ee=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(E=!0,O=!0,X=!0){let W=0;if(E){let z=!1;if(N!==null){const et=N.texture.format;z=et===qc||et===Yc||et===jc}if(z){const et=N.texture.type,ht=et===$n||et===Qi||et===ys||et===Hr||et===Vc||et===Wc,Mt=bt.getClearColor(),xt=bt.getClearAlpha(),It=Mt.r,Ut=Mt.g,vt=Mt.b;ht?(g[0]=It,g[1]=Ut,g[2]=vt,g[3]=xt,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=It,_[1]=Ut,_[2]=vt,_[3]=xt,B.clearBufferiv(B.COLOR,0,_))}else W|=B.COLOR_BUFFER_BIT}O&&(W|=B.DEPTH_BUFFER_BIT),X&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Vt.dispose(),Et.dispose(),S.dispose(),V.dispose(),Y.dispose(),ne.dispose(),F.dispose(),_t.dispose(),j.dispose(),j.removeEventListener("sessionstart",be),j.removeEventListener("sessionend",mn),se.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=Zt.autoReset,O=rt.enabled,X=rt.autoUpdate,W=rt.needsUpdate,z=rt.type;at(),Zt.autoReset=E,rt.enabled=O,rt.autoUpdate=X,rt.needsUpdate=W,rt.type=z}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const O=E.target;O.removeEventListener("dispose",Dt),he(O)}function he(E){Pt(E),Et.remove(E)}function Pt(E){const O=Et.get(E).programs;O!==void 0&&(O.forEach(function(X){_t.releaseProgram(X)}),E.isShaderMaterial&&_t.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,W,z,et){O===null&&(O=oe);const ht=z.isMesh&&z.matrixWorld.determinant()<0,Mt=xl(E,O,X,W,z);At.setMaterial(W,ht);let xt=X.index,It=1;if(W.wireframe===!0){if(xt=Z.getWireframeAttribute(X),xt===void 0)return;It=2}const Ut=X.drawRange,vt=X.attributes.position;let Yt=Ut.start*It,ce=(Ut.start+Ut.count)*It;et!==null&&(Yt=Math.max(Yt,et.start*It),ce=Math.min(ce,(et.start+et.count)*It)),xt!==null?(Yt=Math.max(Yt,0),ce=Math.min(ce,xt.count)):vt!=null&&(Yt=Math.max(Yt,0),ce=Math.min(ce,vt.count));const de=ce-Yt;if(de<0||de===1/0)return;ne.setup(z,W,Mt,X,xt);let We,Jt=pt;if(xt!==null&&(We=$.get(xt),Jt=Ht,Jt.setIndex(We)),z.isMesh)W.wireframe===!0?(At.setLineWidth(W.wireframeLinewidth*ue()),Jt.setMode(B.LINES)):Jt.setMode(B.TRIANGLES);else if(z.isLine){let yt=W.linewidth;yt===void 0&&(yt=1),At.setLineWidth(yt*ue()),z.isLineSegments?Jt.setMode(B.LINES):z.isLineLoop?Jt.setMode(B.LINE_LOOP):Jt.setMode(B.LINE_STRIP)}else z.isPoints?Jt.setMode(B.POINTS):z.isSprite&&Jt.setMode(B.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Jt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const yt=z._multiDrawStarts,Fn=z._multiDrawCounts,te=z._multiDrawCount,gn=xt?$.get(xt).bytesPerElement:1,or=Et.get(W).currentProgram.getUniforms();for(let Qe=0;Qe<te;Qe++)or.setValue(B,"_gl_DrawID",Qe),Jt.render(yt[Qe]/gn,Fn[Qe])}else if(z.isInstancedMesh)Jt.renderInstances(Yt,de,z.count);else if(X.isInstancedBufferGeometry){const yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Fn=Math.min(X.instanceCount,yt);Jt.renderInstances(Yt,de,Fn)}else Jt.render(Yt,de)};function Ct(E,O,X){E.transparent===!0&&E.side===dn&&E.forceSinglePass===!1?(E.side=Ge,E.needsUpdate=!0,Un(E,O,X),E.side=Si,E.needsUpdate=!0,Un(E,O,X),E.side=dn):Un(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),l=Vt.get(X),l.init(O),M.push(l),X.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(l.pushLight(z),z.castShadow&&l.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(l.pushLight(z),z.castShadow&&l.pushShadow(z))}),l.setupLights();const W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const et=z.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const Mt=et[ht];Ct(Mt,X,z),W.add(Mt)}else Ct(et,X,z),W.add(et)}),M.pop(),l=null,W},this.compileAsync=function(E,O,X=null){const W=this.compile(E,O,X);return new Promise(z=>{function et(){if(W.forEach(function(ht){Et.get(ht).currentProgram.isReady()&&W.delete(ht)}),W.size===0){z(E);return}setTimeout(et,10)}mt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let re=null;function Xt(E){re&&re(E)}function be(){se.stop()}function mn(){se.start()}const se=new Vh;se.setAnimationLoop(Xt),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(E){re=E,j.setAnimationLoop(E),E===null?se.stop():se.start()},j.addEventListener("sessionstart",be),j.addEventListener("sessionend",mn),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,N),l=Vt.get(E,M.length),l.init(O),M.push(l),wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(wt),ut=this.localClippingEnabled,tt=J.init(this.clippingPlanes,ut),p=ft.get(E,v.length),p.init(),v.push(p),j.enabled===!0&&j.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&Oe(et,O,-1/0,x.sortObjects)}Oe(E,O,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(Q,dt),kt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,kt&&bt.addToRenderList(p,E),this.info.render.frame++,tt===!0&&J.beginShadows();const X=l.state.shadowsArray;rt.render(X,E,O),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,z=p.transmissive;if(l.setupLights(),O.isArrayCamera){const et=O.cameras;if(z.length>0)for(let ht=0,Mt=et.length;ht<Mt;ht++){const xt=et[ht];ni(W,z,E,xt)}kt&&bt.render(E);for(let ht=0,Mt=et.length;ht<Mt;ht++){const xt=et[ht];bn(p,E,xt,xt.viewport)}}else z.length>0&&ni(W,z,E,O),kt&&bt.render(E),bn(p,E,O);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(x,E,O),ne.resetDefaultState(),T=-1,y=null,M.pop(),M.length>0?(l=M[M.length-1],tt===!0&&J.setGlobalState(x.clippingPlanes,l.state.camera)):l=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Oe(E,O,X,W){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)l.pushLight(E),E.castShadow&&l.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){W&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);const ht=Y.update(E),Mt=E.material;Mt.visible&&p.push(E,ht,Mt,X,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const ht=Y.update(E),Mt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ot.copy(ht.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(Mt)){const xt=ht.groups;for(let It=0,Ut=xt.length;It<Ut;It++){const vt=xt[It],Yt=Mt[vt.materialIndex];Yt&&Yt.visible&&p.push(E,ht,Yt,X,Ot.z,vt)}}else Mt.visible&&p.push(E,ht,Mt,X,Ot.z,null)}}const et=E.children;for(let ht=0,Mt=et.length;ht<Mt;ht++)Oe(et[ht],O,X,W)}function bn(E,O,X,W){const z=E.opaque,et=E.transmissive,ht=E.transparent;l.setupLightsView(X),tt===!0&&J.setGlobalState(x.clippingPlanes,X),W&&At.viewport(L.copy(W)),z.length>0&&Pn(z,O,X),et.length>0&&Pn(et,O,X),ht.length>0&&Pn(ht,O,X),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function ni(E,O,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[W.id]===void 0&&(l.state.transmissionRenderTarget[W.id]=new Ji(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?ws:$n,minFilter:ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const et=l.state.transmissionRenderTarget[W.id],ht=W.viewport||L;et.setSize(ht.z,ht.w);const Mt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(D),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),kt&&bt.render(X);const xt=x.toneMapping;x.toneMapping=xi;const It=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),l.setupLightsView(W),tt===!0&&J.setGlobalState(x.clippingPlanes,W),Pn(E,X,W),A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let vt=0,Yt=O.length;vt<Yt;vt++){const ce=O[vt],de=ce.object,We=ce.geometry,Jt=ce.material,yt=ce.group;if(Jt.side===dn&&de.layers.test(W.layers)){const Fn=Jt.side;Jt.side=Ge,Jt.needsUpdate=!0,ar(de,X,W,We,Jt,yt),Jt.side=Fn,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et))}x.setRenderTarget(Mt),x.setClearColor(D,k),It!==void 0&&(W.viewport=It),x.toneMapping=xt}function Pn(E,O,X){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,et=E.length;z<et;z++){const ht=E[z],Mt=ht.object,xt=ht.geometry,It=W===null?ht.material:W,Ut=ht.group;Mt.layers.test(X.layers)&&ar(Mt,O,X,xt,It,Ut)}}function ar(E,O,X,W,z,et){E.onBeforeRender(x,O,X,W,z,et),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,O,X,W,E,et),z.transparent===!0&&z.side===dn&&z.forceSinglePass===!1?(z.side=Ge,z.needsUpdate=!0,x.renderBufferDirect(X,O,W,z,E,et),z.side=Si,z.needsUpdate=!0,x.renderBufferDirect(X,O,W,z,E,et),z.side=dn):x.renderBufferDirect(X,O,W,z,E,et),E.onAfterRender(x,O,X,W,z,et)}function Un(E,O,X){O.isScene!==!0&&(O=oe);const W=Et.get(E),z=l.state.lights,et=l.state.shadowsArray,ht=z.state.version,Mt=_t.getParameters(E,z.state,et,O,X),xt=_t.getProgramCacheKey(Mt);let It=W.programs;W.environment=E.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(E.isMeshStandardMaterial?V:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,It===void 0&&(E.addEventListener("dispose",Dt),It=new Map,W.programs=It);let Ut=It.get(xt);if(Ut!==void 0){if(W.currentProgram===Ut&&W.lightsStateVersion===ht)return Ps(E,Mt),Ut}else Mt.uniforms=_t.getUniforms(E),E.onBeforeCompile(Mt,x),Ut=_t.acquireProgram(Mt,xt),It.set(xt,Ut),W.uniforms=Mt.uniforms;const vt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(vt.clippingPlanes=J.uniform),Ps(E,Mt),W.needsLights=Za(E),W.lightsStateVersion=ht,W.needsLights&&(vt.ambientLightColor.value=z.state.ambient,vt.lightProbe.value=z.state.probe,vt.directionalLights.value=z.state.directional,vt.directionalLightShadows.value=z.state.directionalShadow,vt.spotLights.value=z.state.spot,vt.spotLightShadows.value=z.state.spotShadow,vt.rectAreaLights.value=z.state.rectArea,vt.ltc_1.value=z.state.rectAreaLTC1,vt.ltc_2.value=z.state.rectAreaLTC2,vt.pointLights.value=z.state.point,vt.pointLightShadows.value=z.state.pointShadow,vt.hemisphereLights.value=z.state.hemi,vt.directionalShadowMap.value=z.state.directionalShadowMap,vt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,vt.spotShadowMap.value=z.state.spotShadowMap,vt.spotLightMatrix.value=z.state.spotLightMatrix,vt.spotLightMap.value=z.state.spotLightMap,vt.pointShadowMap.value=z.state.pointShadowMap,vt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ut,W.uniformsList=null,Ut}function Ti(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=_a.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Ps(E,O){const X=Et.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function xl(E,O,X,W,z){O.isScene!==!0&&(O=oe),A.resetTextureUnits();const et=O.fog,ht=W.isMeshStandardMaterial?O.environment:null,Mt=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:jr,xt=(W.isMeshStandardMaterial?V:S).get(W.envMap||ht),It=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ut=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),vt=!!X.morphAttributes.position,Yt=!!X.morphAttributes.normal,ce=!!X.morphAttributes.color;let de=xi;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(de=x.toneMapping);const We=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Jt=We!==void 0?We.length:0,yt=Et.get(W),Fn=l.state.lights;if(tt===!0&&(ut===!0||E!==y)){const cn=E===y&&W.id===T;J.setState(W,E,cn)}let te=!1;W.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Fn.state.version||yt.outputColorSpace!==Mt||z.isBatchedMesh&&yt.batching===!1||!z.isBatchedMesh&&yt.batching===!0||z.isBatchedMesh&&yt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&yt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&yt.instancing===!1||!z.isInstancedMesh&&yt.instancing===!0||z.isSkinnedMesh&&yt.skinning===!1||!z.isSkinnedMesh&&yt.skinning===!0||z.isInstancedMesh&&yt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&yt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&yt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&yt.instancingMorph===!1&&z.morphTexture!==null||yt.envMap!==xt||W.fog===!0&&yt.fog!==et||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==J.numPlanes||yt.numIntersection!==J.numIntersection)||yt.vertexAlphas!==It||yt.vertexTangents!==Ut||yt.morphTargets!==vt||yt.morphNormals!==Yt||yt.morphColors!==ce||yt.toneMapping!==de||yt.morphTargetsCount!==Jt)&&(te=!0):(te=!0,yt.__version=W.version);let gn=yt.currentProgram;te===!0&&(gn=Un(W,O,z));let or=!1,Qe=!1,Jr=!1;const fe=gn.getUniforms(),Cn=yt.uniforms;if(At.useProgram(gn.program)&&(or=!0,Qe=!0,Jr=!0),W.id!==T&&(T=W.id,Qe=!0),or||y!==E){At.buffers.depth.getReversed()?(nt.copy(E.projectionMatrix),jf(nt),Yf(nt),fe.setValue(B,"projectionMatrix",nt)):fe.setValue(B,"projectionMatrix",E.projectionMatrix),fe.setValue(B,"viewMatrix",E.matrixWorldInverse);const ii=fe.map.cameraPosition;ii!==void 0&&ii.setValue(B,Lt.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&fe.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fe.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Qe=!0,Jr=!0)}if(z.isSkinnedMesh){fe.setOptional(B,z,"bindMatrix"),fe.setOptional(B,z,"bindMatrixInverse");const cn=z.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),fe.setValue(B,"boneTexture",cn.boneTexture,A))}z.isBatchedMesh&&(fe.setOptional(B,z,"batchingTexture"),fe.setValue(B,"batchingTexture",z._matricesTexture,A),fe.setOptional(B,z,"batchingIdTexture"),fe.setValue(B,"batchingIdTexture",z._indirectTexture,A),fe.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&fe.setValue(B,"batchingColorTexture",z._colorsTexture,A));const ts=X.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&Rt.update(z,X,gn),(Qe||yt.receiveShadow!==z.receiveShadow)&&(yt.receiveShadow=z.receiveShadow,fe.setValue(B,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Cn.envMap.value=xt,Cn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Cn.envMapIntensity.value=O.environmentIntensity),Qe&&(fe.setValue(B,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&Ka(Cn,Jr),et&&W.fog===!0&&ot.refreshFogUniforms(Cn,et),ot.refreshMaterialUniforms(Cn,W,P,I,l.state.transmissionRenderTarget[E.id]),_a.upload(B,Ti(yt),Cn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_a.upload(B,Ti(yt),Cn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fe.setValue(B,"center",z.center),fe.setValue(B,"modelViewMatrix",z.modelViewMatrix),fe.setValue(B,"normalMatrix",z.normalMatrix),fe.setValue(B,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const cn=W.uniformsGroups;for(let ii=0,ri=cn.length;ii<ri;ii++){const vl=cn[ii];F.update(vl,gn),F.bind(vl,gn)}}return gn}function Ka(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Za(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,O,X){Et.get(E.texture).__webglTexture=O,Et.get(E.depthTexture).__webglTexture=X;const W=Et.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=X===void 0,W.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const X=Et.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,X=0){N=E,w=O,b=X;let W=!0,z=null,et=!1,ht=!1;if(E){const xt=Et.get(E);if(xt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(xt.__hasExternalTextures)A.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const vt=E.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&Et.has(vt)&&(E.width!==vt.image.width||E.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ht=!0);const Ut=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?z=Ut[O][X]:z=Ut[O],et=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?z=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?z=Ut[X]:z=Ut,L.copy(E.viewport),U.copy(E.scissor),C=E.scissorTest}else L.copy(St).multiplyScalar(P).floor(),U.copy(Bt).multiplyScalar(P).floor(),C=ee;if(At.bindFramebuffer(B.FRAMEBUFFER,z)&&W&&At.drawBuffers(E,z),At.viewport(L),At.scissor(U),At.setScissorTest(C),et){const xt=Et.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,X)}else if(ht){const xt=Et.get(E.texture),It=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,xt.__webglTexture,X||0,It)}T=-1},this.readRenderTargetPixels=function(E,O,X,W,z,et,ht){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht]),Mt){At.bindFramebuffer(B.FRAMEBUFFER,Mt);try{const xt=E.texture,It=xt.format,Ut=xt.type;if(!Gt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-W&&X>=0&&X<=E.height-z&&B.readPixels(O,X,W,z,Nt.convert(It),Nt.convert(Ut),et)}finally{const xt=N!==null?Et.get(N).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,W,z,et,ht){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(Mt=Mt[ht]),Mt){const xt=E.texture,It=xt.format,Ut=xt.type;if(!Gt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-W&&X>=0&&X<=E.height-z){At.bindFramebuffer(B.FRAMEBUFFER,Mt);const vt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.bufferData(B.PIXEL_PACK_BUFFER,et.byteLength,B.STREAM_READ),B.readPixels(O,X,W,z,Nt.convert(It),Nt.convert(Ut),0);const Yt=N!==null?Et.get(N).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,Yt);const ce=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xf(B,ce,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,et),B.deleteBuffer(vt),B.deleteSync(ce),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,X=0){E.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-X),z=Math.floor(E.image.width*W),et=Math.floor(E.image.height*W),ht=O!==null?O.x:0,Mt=O!==null?O.y:0;A.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,ht,Mt,z,et),At.unbindTexture()},this.copyTextureToTexture=function(E,O,X=null,W=null,z=0){E.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],O=arguments[2],z=arguments[3]||0,X=null);let et,ht,Mt,xt,It,Ut,vt,Yt,ce;const de=E.isCompressedTexture?E.mipmaps[z]:E.image;X!==null?(et=X.max.x-X.min.x,ht=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,xt=X.min.x,It=X.min.y,Ut=X.isBox3?X.min.z:0):(et=de.width,ht=de.height,Mt=de.depth||1,xt=0,It=0,Ut=0),W!==null?(vt=W.x,Yt=W.y,ce=W.z):(vt=0,Yt=0,ce=0);const We=Nt.convert(O.format),Jt=Nt.convert(O.type);let yt;O.isData3DTexture?(A.setTexture3D(O,0),yt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),yt=B.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),yt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const Fn=B.getParameter(B.UNPACK_ROW_LENGTH),te=B.getParameter(B.UNPACK_IMAGE_HEIGHT),gn=B.getParameter(B.UNPACK_SKIP_PIXELS),or=B.getParameter(B.UNPACK_SKIP_ROWS),Qe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,de.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,de.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xt),B.pixelStorei(B.UNPACK_SKIP_ROWS,It),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ut);const Jr=E.isDataArrayTexture||E.isData3DTexture,fe=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Cn=Et.get(E),ts=Et.get(O),cn=Et.get(Cn.__renderTarget),ii=Et.get(ts.__renderTarget);At.bindFramebuffer(B.READ_FRAMEBUFFER,cn.__webglFramebuffer),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let ri=0;ri<Mt;ri++)Jr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,z,Ut+ri),E.isDepthTexture?(fe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(O).__webglTexture,z,ce+ri),B.blitFramebuffer(xt,It,et,ht,vt,Yt,et,ht,B.DEPTH_BUFFER_BIT,B.NEAREST)):fe?B.copyTexSubImage3D(yt,z,vt,Yt,ce+ri,xt,It,et,ht):B.copyTexSubImage2D(yt,z,vt,Yt,ce+ri,xt,It,et,ht);At.bindFramebuffer(B.READ_FRAMEBUFFER,null),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(yt,z,vt,Yt,ce,et,ht,Mt,We,Jt,de.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(yt,z,vt,Yt,ce,et,ht,Mt,We,de.data):B.texSubImage3D(yt,z,vt,Yt,ce,et,ht,Mt,We,Jt,de):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,z,vt,Yt,et,ht,We,Jt,de.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,z,vt,Yt,de.width,de.height,We,de.data):B.texSubImage2D(B.TEXTURE_2D,z,vt,Yt,et,ht,We,Jt,de);B.pixelStorei(B.UNPACK_ROW_LENGTH,Fn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,te),B.pixelStorei(B.UNPACK_SKIP_PIXELS,gn),B.pixelStorei(B.UNPACK_SKIP_ROWS,or),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe),z===0&&O.generateMipmaps&&B.generateMipmap(yt),At.unbindTexture()},this.copyTextureToTexture3D=function(E,O,X=null,W=null,z=0){return E.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,W=arguments[1]||null,E=arguments[2],O=arguments[3],z=arguments[4]||0),hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,X,W,z)},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),At.unbindTexture()},this.resetState=function(){w=0,b=0,N=null,At.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=jt._getUnpackColorSpace()}}class Zc{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=n,this.far=i}clone(){return new Zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class iM extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class rM extends He{constructor(t=null,n=1,i=1,r,s,a,o,c,u=on,h=on,d,f){super(null,a,o,c,u,h,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xu extends Ie{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yr=new Kt,vu=new Kt,na=[],Su=new rr,sM=new Kt,as=new ge,os=new qr;class Cs extends ge{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new xu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,sM)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new rr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,yr),Su.copy(t.boundingBox).applyMatrix4(yr),this.boundingBox.union(Su)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new qr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,yr),os.copy(t.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(os)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,n){const i=this.matrixWorld,r=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(i),t.ray.intersectsSphere(os)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,yr),vu.multiplyMatrices(i,yr),as.matrixWorld=vu,as.raycast(t,na);for(let a=0,o=na.length;a<o;a++){const c=na[a];c.instanceId=s,c.object=this,n.push(c)}na.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new xu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new rM(new Float32Array(r*this.count),r,this.count,Xc,In));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Kh extends $r{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yu=new Kt,Rc=new Uh,ia=new qr,ra=new G;class aM extends De{constructor(t=new Ve,n=new Kh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(r),ia.radius+=s,t.ray.intersectsSphere(ia)===!1)return;yu.copy(r).invert(),Rc.copy(t.ray).applyMatrix4(yu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const p=u.getX(g);ra.fromBufferAttribute(d,p),Eu(ra,p,c,r,t,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)ra.fromBufferAttribute(d,g),Eu(ra,g,c,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Eu(e,t,n,i,r,s,a){const o=Rc.distanceSqToPoint(e);if(o<n){const c=new G;Rc.closestPointToPoint(e,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ka extends Ve{constructor(t=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],c=[],u=new G,h=new $t;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const m=i+d/n*r;u.x=t*Math.cos(m),u.y=t*Math.sin(m),a.push(u.x,u.y,u.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class tr extends Ve{constructor(t=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=i/2;let l=0;v(),a===!1&&(t>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(m,2));function v(){const x=new G,R=new G;let w=0;const b=(n-t)/i;for(let N=0;N<=s;N++){const T=[],y=N/s,L=y*(n-t)+t;for(let U=0;U<=r;U++){const C=U/r,D=C*c+o,k=Math.sin(D),H=Math.cos(D);R.x=L*k,R.y=-y*i+p,R.z=L*H,d.push(R.x,R.y,R.z),x.set(k,b,H).normalize(),f.push(x.x,x.y,x.z),m.push(C,1-y),T.push(g++)}_.push(T)}for(let N=0;N<r;N++)for(let T=0;T<s;T++){const y=_[T][N],L=_[T+1][N],U=_[T+1][N+1],C=_[T][N+1];(t>0||T!==0)&&(h.push(y,L,C),w+=3),(n>0||T!==s-1)&&(h.push(L,U,C),w+=3)}u.addGroup(l,w,0),l+=w}function M(x){const R=g,w=new $t,b=new G;let N=0;const T=x===!0?t:n,y=x===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),g++;const L=g;for(let U=0;U<=r;U++){const D=U/r*c+o,k=Math.cos(D),H=Math.sin(D);b.x=T*H,b.y=p*y,b.z=T*k,d.push(b.x,b.y,b.z),f.push(0,y,0),w.x=k*.5+.5,w.y=H*.5*y+.5,m.push(w.x,w.y),g++}for(let U=0;U<r;U++){const C=R+U,D=L+U;x===!0?h.push(D,D+1,C):h.push(D+1,D,C),N+=3}u.addGroup(l,N,x===!0?1:2),l+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qc extends tr{constructor(t=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jc extends Ve{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const h=[],d=new G,f=new G,m=[],g=[],_=[],p=[];for(let l=0;l<=i;l++){const v=[],M=l/i;let x=0;l===0&&a===0?x=.5/n:l===i&&c===Math.PI&&(x=-.5/n);for(let R=0;R<=n;R++){const w=R/n;d.x=-t*Math.cos(r+w*s)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(r+w*s)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(w+x,1-M),v.push(u++)}h.push(v)}for(let l=0;l<i;l++)for(let v=0;v<n;v++){const M=h[l][v+1],x=h[l][v],R=h[l+1][v],w=h[l+1][v+1];(l!==0||a>0)&&m.push(M,x,w),(l!==i-1||c<Math.PI)&&m.push(x,R,w)}this.setIndex(m),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tl extends Ve{constructor(t=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],u=[],h=new G,d=new G,f=new G;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const _=g/r*s,p=m/i*Math.PI*2;d.x=(t+n*Math.cos(p))*Math.cos(_),d.y=(t+n*Math.cos(p))*Math.sin(_),d.z=n*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),u.push(g/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const _=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,l=(r+1)*(m-1)+g,v=(r+1)*m+g;a.push(_,p,v),a.push(p,l,v)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class En extends $r{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zh extends De{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class oM extends Zh{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Ro=new Kt,Tu=new G,Au=new G;class cM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $c,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),n.position.copy(Tu),Au.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Au),n.updateMatrixWorld(),Ro.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lM extends cM{constructor(){super(new Wh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uM extends Zh{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new lM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);const hM={driftMaxR:130,sweeperMaxR:175,driftEntryAdvance:30,driftExitRunoff:40,sweeperEntryAdvance:18,sweeperExitRunoff:22,decreasingInsideLen:30,startOpen:200,finishOpen:150,crestHalfGap:55,mergeGap:12,maxSpans:64};function wu(e,t,n){return Math.max(t,Math.min(n,e))}function Ur(e){return typeof e=="number"&&isFinite(e)}function dM(e){return e==="L"?1:-1}function fM(e){return e==="L"?-1:1}function pM(e){return!(typeof e!="object"||e===null||e.dir!=="L"&&e.dir!=="R"||!Ur(e.startS)||!Ur(e.endS)||!Ur(e.medR)||e.medR<=0||e.endS-e.startS<30||e.endS<=0)}function mM(e,t,n=[],i=hM){const r=i;if(!Ur(e)||e<500||e>1e4)return{spans:[],length:0};const s=r.startOpen,a=e-r.finishOpen;if(!(a>s+60))return{spans:[],length:e};const o=[],c=[];for(const d of n)Ur(d)&&d>0&&d<e&&c.push(d);c.sort((d,f)=>d-f);const u=(d,f,m)=>{let g=wu(d,s,a),_=wu(f,s,a);if(_-g>=20){for(const p of c){const l=p-r.crestHalfGap,v=p+r.crestHalfGap;if(_<=l||g>=v)continue;const M=l-g,x=_-v;if(M>=20&&x>=20?(o.push({aS:g,bS:l,side:m}),g=v):M>=x?_=Math.min(_,l):g=Math.max(g,v),!(_-g>=20))return}o.push({aS:g,bS:_,side:m})}};if(Array.isArray(t))for(const d of t){if(!pM(d))continue;const f=dM(d.dir);if(d.medR<=r.driftMaxR){if(u(d.startS-r.driftEntryAdvance,d.endS+r.driftExitRunoff,f),d.decreasing===!0){const m=(d.startS+d.endS)/2;u(m-r.decreasingInsideLen/2,m+r.decreasingInsideLen/2,fM(d.dir))}}else d.medR<=r.sweeperMaxR&&u(d.startS-r.sweeperEntryAdvance,d.endS+r.sweeperExitRunoff,f)}o.sort((d,f)=>d.side-f.side||d.aS-f.aS);const h=[];for(const d of o){const f=h[h.length-1];f&&f.side===d.side&&d.aS-f.bS<=r.mergeGap?d.bS>f.bS&&(f.bS=d.bS):h.push({aS:d.aS,bS:d.bS,side:d.side})}h.sort((d,f)=>d.aS-f.aS||d.side-f.side),h.length>r.maxSpans&&(h.sort((d,f)=>f.bS-f.aS-(d.bS-d.aS)||d.aS-f.aS),h.length=r.maxSpans,h.sort((d,f)=>d.aS-f.aS||d.side-f.side));for(const d of h)d.aS=Math.round(d.aS*10)/10,d.bS=Math.round(d.bS*10)/10;return{spans:h,length:e}}function el(e,t,n){if(!e||!Ur(t)||n!==1&&n!==-1)return!1;const i=e.spans;for(let r=0;r<i.length;r++){const s=i[r];if(s.side===n){if(t<s.aS){if(s.aS>t){let a=!1;for(let o=r+1;o<i.length;o++)if(i[o].side===n&&i[o].aS<s.aS){a=!0;break}if(!a)return!1}continue}if(t<=s.bS)return!0}}return!1}const Qh=-2.5,Lc=18;function vs(e,t,n){const i=Math.abs(t);if(i<=n)return e;const r=Math.min((i-n)/Lc,1),s=r*r*(3-2*r);return e+(Qh-e)*s}const gM=3,_M=1,Jh=3,td=2,MM=120,ed=4e3,nd=2,Fr=5e3,wa=36e5,Dc=1,xM=8192,nl=1650;function Lo(e,t,n){return e+(t-e)*n}function vM(e){return Math.atan2(Math.sin(e),Math.cos(e))}function il(e){return typeof e=="number"&&isFinite(e)}function SM(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function yM(e){for(e=e.replace(/-/g,"+").replace(/_/g,"/");e.length%4;)e+="=";return atob(e)}function bu(e){return[Math.round(e[0]*2)/2,Math.round(e[1]*2)/2,Math.round(e[2]*2)/2,Math.round(e[3]*100)/100]}function EM(e,t){const n=Math.max(1,Math.floor(t)),i=[],r=[];for(let a=0;a<e.p.length;a+=n)i.push(bu(e.p[a])),r.push(Math.round(e.ts[a]));const s=e.p.length-1;return s%n!==0&&s>=0&&(i.push(bu(e.p[s])),r.push(Math.round(e.ts[s]))),{p:i,ts:r}}function id(e,t,n=nl,i){let r=1,s="";for(;;){const a=EM(e,r),o=i?{v:Jh,t:Math.round(t),p:a.p,ts:a.ts,track:{...i}}:{v:2,t:Math.round(t),p:a.p,ts:a.ts};if(s=SM(JSON.stringify(o)),s.length<n||e.p.length<40||r>=16)break;r*=2}return s}function Cu(e,t){let n=0,i=1;for(let r=0;r<5;r++){if(t>=e.length)return null;const s=e[t++];if(n+=(s&127)*i,!(s&128))return[n,t];i*=128}return null}function TM(e){if(e.length<2||e.charCodeAt(0)!==67||e.charCodeAt(1)!==49)return null;const t=new Uint8Array(e.length);for(let _=0;_<e.length;_++)t[_]=e.charCodeAt(_)&255;let n=2;const i=Cu(t,n);if(!i)return null;n=i[1];const r=Cu(t,n);if(!r)return null;n=r[1];const s=i[0],a=r[0];if(s<0||s>wa||a<nd||a>ed)return null;const o=()=>{if(n+2>t.length)return null;let _=t[n]+t[n+1]*256;return n+=2,_>=32768?_-65536:_},c=[],u=[];let h=0,d=0,f=0,m=0,g=0;for(let _=0;_<a;_++){const p=o(),l=o(),v=o(),M=o();if(p===null||l===null||v===null||M===null)return null;if(_===0)h=p,d=l,f=v,m=M,g=0;else{if(n+2>t.length)return null;const b=t[n]+t[n+1]*256;if(n+=2,h+=p,d+=l,f+=v,m+=M,g+=b,g<0||g>wa)return null}const x=h/2,R=d/2,w=f/2;if(Math.abs(x)>Fr||Math.abs(R)>Fr||Math.abs(w)>Fr)return null;c.push([x,R,w,m/100]),u.push(g)}return n!==t.length||Math.abs(u[a-1]-s)>Dc?null:{t:s,p:c,ts:u}}function AM(e){if(!Array.isArray(e)||e.length<nd||e.length>ed)return!1;for(const t of e){if(!Array.isArray(t)||t.length!==4)return!1;for(const i of t)if(!il(i))return!1;const n=t;if(Math.abs(n[0])>Fr||Math.abs(n[1])>Fr||Math.abs(n[2])>Fr)return!1}return!0}function wM(e){const t=[];for(let n=0;n<e;n++)t.push(n*MM);return t}function bM(e,t){if(!Array.isArray(e)||e.length!==t)return!1;for(const n of e)if(!il(n)||n<0||n>wa)return!1;for(let n=1;n<e.length;n++){const i=e[n],r=e[n-1];if(i<r)return!1}return!0}function CM(e){if(!e)return{ok:!1,error:"empty"};if(typeof e!="string")return{ok:!1,error:"not-string"};if(e.length>xM)return{ok:!1,error:"too-long"};let t;try{t=yM(e)}catch{return{ok:!1,error:"bad-encoding"}}if(t.length>=2&&t.charCodeAt(0)===67&&t.charCodeAt(1)===49){const c=TM(t);return c?{ok:!0,ghost:c}:{ok:!1,error:"bad-encoding"}}let n;try{n=JSON.parse(t)}catch{return{ok:!1,error:"bad-encoding"}}if(typeof n!="object"||n===null)return{ok:!1,error:"bad-shape"};const i=n;if(i.v!==void 0&&i.v!==gM&&i.v!==2&&i.v!==_M)return{ok:!1,error:"bad-version"};let r;if(i.v===Jh){if(!rd(i.track))return{ok:!1,error:"bad-track"};const c=i.track;r={day:c.day,course:c.course,gen:c.gen}}if(!il(i.t)||i.t<0||i.t>wa)return{ok:!1,error:"bad-time"};if(!AM(i.p))return{ok:!1,error:"bad-points"};const s=i.p;let a;if(i.ts===void 0){if(a=wM(s.length),a[a.length-1]>i.t+Dc)return{ok:!1,error:"legacy-finish-mismatch"}}else{if(!bM(i.ts,s.length))return{ok:!1,error:"bad-timestamps"};if(a=i.ts.slice(),Math.abs(a[a.length-1]-i.t)>Dc)return{ok:!1,error:"finish-mismatch"}}return{ok:!0,ghost:r?{t:i.t,p:s,ts:a,track:r}:{t:i.t,p:s,ts:a}}}function rd(e){if(typeof e!="object"||e===null)return!1;const t=e;return!(typeof t.day!="string"||t.day.length<1||t.day.length>32||typeof t.course!="string"||!/^[0-9a-fA-F]{1,64}$/.test(t.course)||typeof t.gen!="number"||!isFinite(t.gen)||Math.floor(t.gen)!==t.gen||t.gen<0||t.gen>2147483647)}function RM(e,t,n=td){return{day:e,course:t,gen:n}}function Ru(e,t){return e?!e.track||!rd(e.track)?"legacy":e.track.course.toLowerCase()===t.course.toLowerCase()&&e.track.gen===t.gen?"match":"mismatch":"none"}function Do(e,t){return t==="match"||t==="none"?"":e==="friend"&&t==="mismatch"?"Friend link is for a different course.":e==="friend"?"Friend link predates course checks — ask for a fresh one.":t==="mismatch"?"Saved best is for a different course.":"Saved best predates course checks."}function Lu(e){return e==="match"||e==="none"?"none":e}function LM(e){const t=Ru(e.shared,e.expected),n=Ru(e.pb,e.expected);if(t==="match"&&e.shared&&e.shared.p.length>1)return{rival:{ghost:e.shared,kind:"friend",racingPB:!1},status:"ready",notice:""};if(n==="match"&&e.pb&&e.pb.p.length>1){const a=[];if(e.shared){const o=Do("friend",t);o&&a.push(o),a.push("Racing your best instead.")}return{rival:{ghost:e.pb,kind:"pb",racingPB:!0},status:"ready",notice:a.join(" ")}}const i=[],r=Do("friend",t);r&&i.push(r);const s=Do("pb",n);return s&&i.push(s),e.shared?{rival:null,status:Lu(t),notice:i.join(" ")}:e.pb?{rival:null,status:Lu(n),notice:i.join(" ")}:{rival:null,status:"none",notice:""}}function Rs(e){const t=CM(e);return t.ok?t.ghost:null}function Io(e,t){const n=e.p,i=e.ts,r=n[0],s=n[n.length-1];if(t<=i[0])return{x:r[0],y:r[1],z:r[2],h:r[3]};const a=i.length-1;if(t>=i[a])return{x:s[0],y:s[1],z:s[2],h:s[3]};let o=0,c=a;for(;c-o>1;){const m=o+c>>1;i[m]<=t?o=m:c=m}const u=i[c]-i[o]||1,h=(t-i[o])/u,d=n[o],f=n[c];return{x:Lo(d[0],f[0],h),y:Lo(d[1],f[1],h),z:Lo(d[2],f[2],h),h:d[3]+vM(f[3]-d[3])*h}}function DM(e,t){return e&&e.kind==="friend"?"Racing a shared ghost":e&&e.kind==="pb"?"Racing your daily best ghost":t>0?"Friend time, no ghost":"No rival ghost"}const IM=36e5,NM=/^\d{4}-\d{2}-\d{2}$/;function PM(e){return e instanceof DOMException&&e.name==="AbortError"}function sd(e){if(!NM.test(e))return!1;const[t,n,i]=e.split("-").map(Number);if(n<1||n>12||i<1||i>31)return!1;const r=new Date(Date.UTC(t,n-1,i));return r.getUTCFullYear()===t&&r.getUTCMonth()===n-1&&r.getUTCDate()===i}function ad(e){const t=typeof e=="string"&&e.trim()!==""?Number(e):e;return typeof t!="number"||!isFinite(t)||t<0||t>IM?0:Math.floor(t)}function xe(e){if(!isFinite(e)||e<0)return"—";const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3),i=Math.floor(e%1e3/10);return`${t}:${String(n).padStart(2,"0")}.${String(i).padStart(2,"0")}`}function UM(e,t,n){return`🏁 CANYON DAILY ${e} — ${xe(t)}
Beat my run: ${n}`}function FM(e,t,n){const i=sd(n.day)?n.day:"",r=ad(n.timeMs);let s=typeof n.ghost=="string"?n.ghost:"";s&&!Rs(s)&&(s="");const a=`?d=${encodeURIComponent(i)}&t=${r}${s?`&g=${s}`:""}`;return`${e}${t}${a}`}function OM(e){const t={day:"",timeMs:0,ghost:null,ghostRaw:"",errors:[]};try{if(!e)return t.errors.push("empty"),t;let n=e;const i=e.indexOf("?");i>=0&&(n=e.slice(i)),n.startsWith("?")||(n=`?${n}`);const r=new URLSearchParams(n),s=r.get("d")||"";sd(s)?t.day=s:s&&t.errors.push("bad-day"),t.timeMs=ad(r.get("t")||0);const a=r.get("g")||"";if(t.ghostRaw=a,a){const o=Rs(a);o?t.ghost=o:t.errors.push("bad-ghost")}return t}catch{return t.errors.push("parse-failed"),t}}function zM(e,t){return e&&t}async function BM(e,t,n){if(n&&e.requestNativeShare)try{return await e.requestNativeShare({title:t.title,text:t.text,url:t.url}),t.hasGhost?{kind:"shared-with-ghost",message:"Shared with ghost — good luck!"}:{kind:"shared-no-ghost",message:"Shared — no ghost saved yet"}}catch(i){if(PM(i))return{kind:"dismissed",message:"Share dismissed"}}if(e.copyText)try{return await e.copyText(t.text),t.hasGhost?{kind:"copied-with-ghost",message:"Link + ghost copied — send it!"}:t.isFinish?{kind:"copied-time-only",message:"Time copied — send it!"}:{kind:"copied-time-only",message:"Time copied — link has no ghost (finish a run first)"}}catch{return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}const Du={entrySteer:.18,entryMinSpeed:25,tapMaxS:.35,sloppyScale:.4,slideAttack:3.5,slideRelease:4,exitOppSteer:.35,rearmDeadband:.12,earlyEnd:.45,optEnd:1.8,lateEnd:3.2,timeoutS:4,peakLoDeg:8,peakHiDeg:28,spinDeg:45,alignDeg:20,speedLo:25,speedHi:70,counterLo:.2,counterHi:.7,abortSpeed:15,cooldownS:1.2,boostTime:.7,boostAccelMax:24,kickRad:.11,pendFreq:7,pendDecay:1.8,pendYaw:1.8,chainWindow:.8,chainHold:.35,chainMin:.25,chainBoost:1.5},Ma=162;function od(){return{phase:"idle",entryDir:0,slideAge:0,peakSlipDeg:0,slideBlend:0,cooldownT:0,boostT:0,boostAccel:0,lastQuality:0,lastGrade:"none",spamCount:0,needNeutral:!1,cleanTap:!0,handHeldS:0,prevHand:!1,pendAmp:0,pendPhase:0,chainDir:0,chainT:0,chainHoldT:0}}function rl(){return{phase:"idle",slideBlend:0,boostAccel:0,event:"none",quality:0,grade:"none",yawKick:0,pendRate:0,pendAmp:0,chainArmed:!1}}function cd(e){const t=od();e.phase=t.phase,e.entryDir=t.entryDir,e.slideAge=t.slideAge,e.peakSlipDeg=t.peakSlipDeg,e.slideBlend=t.slideBlend,e.cooldownT=t.cooldownT,e.boostT=t.boostT,e.boostAccel=t.boostAccel,e.lastQuality=t.lastQuality,e.lastGrade=t.lastGrade,e.spamCount=t.spamCount,e.needNeutral=t.needNeutral,e.cleanTap=t.cleanTap,e.handHeldS=t.handHeldS,e.prevHand=t.prevHand,e.pendAmp=t.pendAmp,e.pendPhase=t.pendPhase,e.chainDir=t.chainDir,e.chainT=t.chainT,e.chainHoldT=t.chainHoldT}function Pi(e,t,n){return Math.max(t,Math.min(n,e))}function sa(e){return typeof e=="number"&&isFinite(e)}function No(e){return e>0?1:e<0?-1:0}function kM(e,t,n,i,r,s){if(t<3||t>e.spinDeg||r>=e.timeoutS||i<e.entryMinSpeed)return 0;const a=t<=e.peakLoDeg?(t-3)/(e.peakLoDeg-3):t<=e.peakHiDeg?1:1-(t-e.peakHiDeg)/(e.spinDeg-e.peakHiDeg),o=1-Pi(n/e.alignDeg,0,1),c=Pi((i-e.speedLo)/(e.speedHi-e.speedLo),0,1),u=Pi((s-e.counterLo)/(e.counterHi-e.counterLo),0,1),h=.4*Pi(a,0,1)+.3*o+.15*c+.15*u,d=r<.15?0:r<e.earlyEnd?(r-.15)/(e.earlyEnd-.15):r<=e.optEnd?1:r<=e.lateEnd?1-.75*((r-e.optEnd)/(e.lateEnd-e.optEnd)):.25*(1-(r-e.lateEnd)/(e.timeoutS-e.lateEnd));return Pi(h*Pi(d,0,1),0,1)}function GM(e){return e>=.8?"perfect":e>=.55?"good":e>.05?"weak":"none"}function HM(e,t,n,i){if(i.event="none",i.quality=0,i.grade="none",i.yawKick=0,i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=e.chainT>0&&e.chainDir!==0,!sa(n.dt)||n.dt<=0||!sa(n.steer)||!sa(n.speed)||!sa(n.slipDeg)){i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}const r=n.dt>.1?.1:n.dt,s=Pi(n.steer,-1,1),a=n.handbrake===!0,o=a&&!e.prevHand,c=!a&&e.prevHand;if(e.prevHand=a,c&&e.phase==="sliding"&&(e.cleanTap=e.handHeldS<=t.tapMaxS),a?e.handHeldS+=r:e.handHeldS=0,e.boostT>0&&(e.boostT=Math.max(0,e.boostT-r)),e.boostAccel=e.boostT>0?e.boostAccel:0,!n.onRoad){e.boostT=0,e.boostAccel=0,e.lastQuality=0,e.lastGrade="none",e.phase="idle",e.slideAge=0,e.peakSlipDeg=0,e.needNeutral=!1,e.chainDir=0,e.chainT=0,e.chainHoldT=0,e.pendAmp=0,e.pendPhase=0,e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),i.phase="idle",i.slideBlend=e.slideBlend,i.boostAccel=0;return}if(!n.grounded){e.phase==="sliding"&&(i.pendRate=-e.entryDir*e.pendAmp*Math.sin(e.pendPhase)*t.pendYaw),i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.phase==="cooldown"){if(e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),e.cooldownT-=r,e.chainT>0&&(e.chainT-=r),e.cooldownT<=0&&(e.phase="idle",e.cooldownT=0,e.chainDir=0,e.chainT=0,e.chainHoldT=0),e.chainDir!==0&&e.chainT>0&&No(s)===e.chainDir&&Math.abs(s)>=t.entrySteer){if(o){Iu(e,t,n,i);return}if(e.chainHoldT+=r,e.chainHoldT>=t.chainHold){Iu(e,t,n,i);return}}else e.chainHoldT=0,o&&(e.spamCount++,i.event="rejected");i.chainArmed=e.chainT>0&&e.chainDir!==0,i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.phase==="idle"){if(e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),Math.abs(s)<t.rearmDeadband&&(e.needNeutral=!1),o){const h=No(s);e.needNeutral||h===0||Math.abs(s)<t.entrySteer||n.speed<t.entryMinSpeed?!e.needNeutral&&e.cooldownT<=0||(e.spamCount++,i.event="rejected"):(e.phase="sliding",e.entryDir=h,e.slideAge=0,e.peakSlipDeg=Math.abs(n.slipDeg),e.cleanTap=!0,e.pendAmp=1,e.pendPhase=0,i.yawKick=-h*t.kickRad,i.pendAmp=e.pendAmp,i.event="entered")}i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.slideAge+=r,e.peakSlipDeg=Math.max(e.peakSlipDeg,Math.abs(n.slipDeg)),e.slideBlend=Math.min(1,e.slideBlend+t.slideAttack*r),e.pendPhase+=t.pendFreq*r,e.pendAmp*=Math.exp(-t.pendDecay*r),a&&e.handHeldS>t.tapMaxS&&(e.cleanTap=!1),i.pendRate=-e.entryDir*e.pendAmp*Math.sin(e.pendPhase)*t.pendYaw,i.pendAmp=e.pendAmp,No(s)===-e.entryDir&&Math.abs(s)>=t.exitOppSteer){let h=kM(t,e.peakSlipDeg,Math.abs(n.slipDeg),n.speed,e.slideAge,Math.abs(s));e.cleanTap||(h*=t.sloppyScale);const d=GM(h),f=Math.cos(e.pendPhase);let m=f>.3?0:f<-.3?Math.min(e.pendAmp*t.chainBoost,1.5):e.pendAmp*.4;h<.3&&(m=Math.max(m,e.pendAmp)),e.lastQuality=h,e.lastGrade=d,e.phase="cooldown",e.cooldownT=t.cooldownS,e.needNeutral=!0,e.pendAmp=m,m>t.chainMin?(e.chainDir=-e.entryDir,e.chainT=t.chainWindow,e.chainHoldT=0):(e.chainDir=0,e.chainT=0,e.chainHoldT=0),e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),h>0?(e.boostT=t.boostTime,e.boostAccel=h*t.boostAccelMax):(e.boostT=0,e.boostAccel=0),i.event="exit",i.quality=h,i.grade=d,i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=e.chainDir!==0,i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.slideAge>=t.timeoutS||n.speed<t.abortSpeed){e.lastQuality=0,e.lastGrade="none",e.boostT=0,e.boostAccel=0,n.speed<t.abortSpeed?(e.phase="idle",e.chainDir=0,e.chainT=0,e.chainHoldT=0):(e.phase="cooldown",e.cooldownT=t.cooldownS,e.needNeutral=!0,e.pendAmp*=.4,e.pendAmp>t.chainMin?(e.chainDir=-e.entryDir,e.chainT=t.chainWindow,e.chainHoldT=0):(e.chainDir=0,e.chainT=0,e.chainHoldT=0)),e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*r),i.event="expired",i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=e.chainDir!==0,i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel}function Iu(e,t,n,i){e.phase="sliding",e.entryDir=e.chainDir,e.slideAge=0,e.peakSlipDeg=Math.abs(n.slipDeg),e.cleanTap=!0,e.pendPhase=0,e.chainDir=0,e.chainT=0,e.chainHoldT=0,i.yawKick=-e.entryDir*t.kickRad,i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=!1,i.event="entered",i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel}const VM=120,WM=3e3,XM=26,jM=11,YM=20,qM=5.5,$M=6.5,KM=5e3,ZM=48,Nu=10,QM=110,JM=30,tx=16,fs=140,ex=112,nx=44,ix=4,rx=25,sx=.18,ax=6,ox=9,cx=3.5,lx=2.5,ux=4.5,hx=.12,dx=.35,fx=.94,Pu=1,px=.1,mx=.3,gx=.4,_x=.8,Mx=5,xx=.5,vx=32,Sx=.7,yx=.35,Ex=.35,Tx=9,Uu=.61,Ax=2,Fu=.44,wx=4,bx=.3,Cx=.25,Rx=.4,Lx=.007,Dx=.62,Ix=1.2,Nx=2,Px=.275,Ux=.3;function Fx(e){return e+Nx-Px-Ix-Ux}const Ox=4,Er=6,Ou=.02,zu=.15,zx=6,Bu=.25,Bx=.35,ku=.5,kx=.6,Gx=.6,Gu=2.5,Hx=55,Vx=.85,Wx=.18,Xx=2.2,jx=.9,Yx=5,qx=25,$x=.35,Kx=1,Zx=.4,Qx=2,Jx=4,tv=6,ev=4,nv=60,iv=45,rv=2,Hu=40,Wt=(e,t,n)=>Math.max(t,Math.min(n,e)),sn=(e,t,n)=>e+(t-e)*n;function Ga(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Ha(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function xa(e){return Math.atan2(Math.sin(e),Math.cos(e))}function sv(e,t){const n=e.length,i=e.map(f=>f.x),r=e.map(f=>f.y),s=e.map(f=>f.z),a=[],o=[],c=[],u=[],h=[];for(let f=0;f<n;f++){const m=e[Math.max(f-1,0)],g=e[Math.min(f+1,n-1)];let _=g.x-m.x,p=g.z-m.z;const l=Math.hypot(_,p);l<1e-9?(_=1,p=0):(_/=l,p/=l),a.push(_),o.push(p),c.push(-p),u.push(_),h.push(Math.atan2(_,p))}const d=[0];for(let f=1;f<n;f++)d.push(d[f-1]+Math.hypot(i[f]-i[f-1],s[f]-s[f-1]));return{n,x:i,y:r,z:s,tx:a,tz:o,nx:c,nz:u,yaw:h,halfW:t,cum:d,barrier:null}}class av{constructor(){this.stickId=-1,this.stickX0=0,this.joy=0,this.joyOn=!1,this.drift=!1,this.driftId=-1}stickDown(t,n){this.stickId===-1&&(this.stickId=t,this.stickX0=n,this.joyOn=!0,this.joy=0)}stickMove(t,n){t===this.stickId&&(this.joy=Wt((n-this.stickX0)/ZM,-1,1))}stickUp(t){t===this.stickId&&(this.stickId=-1,this.joyOn=!1,this.joy=0)}driftDown(t){this.driftId===-1&&(this.driftId=t,this.drift=!0)}driftUp(t){t===this.driftId&&(this.driftId=-1,this.drift=!1)}get steer(){return this.joyOn?this.joy:0}}function ov(){return{heading:0,px:0,py:0,pz:0,vx:0,vz:0,vy:0,grounded:!0,lastIdx:0,raceMs:0,pitch:0,finished:!1,finishCount:0,prevFinD:0,px0:0,py0:0,pz0:0,h0:0,pitch0:0,prevRaceMs:0,approach:[],rec:{t:0,p:[],ts:[]},recLastMs:0,snap:{i:0,x:0,y:0,z:0,h:0,vx:0,vz:0},snapTimer:0,snaps:[],rescueStreak:0,rescueIdx:-1,steer:0,driftAmt:0,wasOffroad:!1,scrapeLowMs:0,breakT:0,wallCool:0,crashT:0,crashAmp:0,scrapeT:0,kickT:0,oobMs:0,driftHold:0,exitT:0,rhythm:od(),rhythmOut:rl(),rhythmExitLatch:0,justLaunched:!1,airSteps:0}}function cv(e,t){const n=t.n-1;return(e.px-t.x[n])*t.tx[n]+(e.pz-t.z[n])*t.tz[n]}function lv(e,t,n=100){let i=e.lastIdx,r=1/0;for(let s=-100;s<=n;s++){const a=Wt(e.lastIdx+s,0,t.n-1),o=t.x[a]-e.px,c=t.z[a]-e.pz,u=o*o+c*c;u<r&&(r=u,i=a)}return i}function uv(e,t,n){const i=Wt(e.lastIdx,0,t.n-1),r=Wt(e.lastIdx+1,0,t.n-1),s=i===r?2:Math.max(Bi(t,i,r),.5),a=Math.hypot(e.vx,e.vz);return Math.min(2,1+Math.ceil(a*n/s))}function Vu(e,t,n){const i=lv(e,t,uv(e,t,n));return i>e.lastIdx&&Math.hypot(t.x[i]-e.px,t.z[i]-e.pz)>Math.hypot(e.vx,e.vz)*n+12?e.lastIdx:i}function Bi(e,t,n){return Math.hypot(e.x[n]-e.x[t],e.z[n]-e.z[t])||1e-6}function hv(e,t,n){e.lastIdx=n,e.px=t.x[n],e.pz=t.z[n],e.py=t.y[n]+.2,e.heading=t.yaw[n],e.vx=t.tx[n]*Nu,e.vz=t.tz[n]*Nu,e.vy=0,e.grounded=!0,e.steer=0,e.driftAmt=0,e.wasOffroad=!1,e.raceMs=0,e.finished=!1,e.finishCount=0,e.prevFinD=cv(e,t),e.approach=[],e.rec={t:0,p:[[e.px,e.py,e.pz,e.heading]],ts:[0]},e.recLastMs=0,e.snap={i:n,x:e.px,y:e.py,z:e.pz,h:e.heading,vx:e.vx,vz:e.vz},e.snaps=[e.snap],e.rescueStreak=0,e.rescueIdx=-1,e.snapTimer=0,e.scrapeLowMs=0,e.breakT=0,e.wallCool=0,e.crashT=0,e.crashAmp=0,e.scrapeT=0,e.kickT=0,e.driftHold=0,e.exitT=0,cd(e.rhythm),e.rhythmOut=rl(),e.rhythmExitLatch=0,e.justLaunched=!1,e.airSteps=0,e.oobMs=0;const i=(t.y[Math.min(n+1,t.n-1)]-t.y[Math.max(n-1,0)])/Bi(t,Math.max(n-1,0),Math.min(n+1,t.n-1));e.pitch=Math.atan(Wt(i,-.5,.5)),e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch}function dv(e){if(e.finished)return;const t=e.snaps.length,n=t>1?Math.min(e.rescueStreak,t-1):0,i=t-1-n,r=t>0?e.snaps[i]:e.snap;t>0&&i<t-1&&(e.snaps.length=i+1,e.snap=r),e.lastIdx=r.i,e.px=r.x,e.py=r.y,e.pz=r.z,e.heading=r.h,e.vx=r.vx,e.vz=r.vz,e.vy=0,e.grounded=!0,e.driftAmt=0,e.wasOffroad=!1,e.justLaunched=!1,e.scrapeLowMs=0,e.breakT=0,e.wallCool=0,e.crashT=0,e.crashAmp=0,e.scrapeT=0,e.kickT=0,e.driftHold=0,e.exitT=0,cd(e.rhythm),e.rhythmOut=rl(),e.rhythmExitLatch=0,e.oobMs=0,e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch,e.rescueIdx=r.i,e.rescueStreak++,e.raceMs+=WM}const Wu=8,fv=12;function Xu(e){e.exitT=0,e.rhythm.boostT=0,e.rhythm.boostAccel=0,e.rhythmExitLatch=0,e.rhythmOut.boostAccel=0,e.rhythmOut.event==="exit"&&(e.rhythmOut.event="none",e.rhythmOut.quality=0,e.rhythmOut.grade="none")}function pv(e,t,n,i){const r={spd:Math.hypot(e.vx,e.vz),drifting:!1,sIdx:e.lastIdx,pitch:e.pitch,launched:!1,landed:!1,finished:!0,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:e.grounded?"road":"air",landV:0,impact:0,scraping:!1,stuckMs:e.scrapeLowMs,wallHit:!1,wallSev:0,wallNx:0,wallNz:0,wallCool:e.wallCool,oobMs:e.oobMs};if(e.finished)return r;e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch,e.prevRaceMs=e.raceMs;let s=0;const a=e.lastIdx,o=(e.px-t.x[a])*t.nx[a]+(e.pz-t.z[a])*t.nz[a],c=o+(e.vx*t.nx[a]+e.vz*t.nz[a])*i,u=Math.abs(o)<=t.halfW&&Math.abs(c)<=t.halfW;u||Xu(e);const h=Wt(n.steer,-1,1),d=Math.abs(h)>Math.abs(e.steer)?ax:ox;e.steer+=Wt(h-e.steer,-d*i,d*i);const f=e.steer,m=Math.hypot(e.vx,e.vz),g=Math.sin(e.heading),_=Math.cos(e.heading),p=Math.atan2(e.vx*_-e.vz*g,Math.abs(e.vx*g+e.vz*_)+1e-6),l=!n.drift&&e.grounded&&m>=Hx&&Math.abs(f)>=Vx;l?e.breakT+=i:e.breakT=0;const v=l&&(e.breakT>.45||Math.abs(p)>=Wx),M=n.drift&&e.grounded&&m>=rx&&Math.abs(f)>=sx||v,x=e.driftAmt,R=Math.sin(e.heading),w=Math.cos(e.heading),b=Math.atan2(e.vx*w-e.vz*R,Math.abs(e.vx*R+e.vz*w)+1e-6),N=f*b<-.02?Wt(-f*b/.12,.35,1):0;HM(e.rhythm,Du,{dt:i,steer:f,handbrake:n.drift,speed:m,slipDeg:b*180/Math.PI,grounded:e.grounded,onRoad:u},e.rhythmOut),e.rhythmOut.event==="exit"?e.rhythmExitLatch=1:e.rhythmExitLatch>0&&(e.rhythmExitLatch=Math.max(0,e.rhythmExitLatch-i));const T=e.grounded&&e.rhythmOut.phase==="sliding";T&&(e.driftAmt=Math.max(e.driftAmt,e.rhythmOut.slideBlend));const y=e.rhythmOut.event==="entered",L=e.rhythmOut.yawKick,U=e.rhythmOut.pendRate;if(M||T)e.driftAmt=Math.min(1,e.driftAmt+(v?Xx:cx)*i);else if(e.driftAmt>0){const Pt=Math.max(N,Math.abs(f)<.25?.6:0);e.driftAmt=Math.max(0,e.driftAmt-sn(lx,ux,Pt)*i),x>.4&&e.driftAmt<=.4&&e.grounded&&u&&Math.abs(b)<yx&&e.driftHold>.25&&e.rhythmExitLatch<=0&&(e.exitT=Sx)}e.driftAmt>.5?e.driftHold+=i:e.driftAmt<=0&&(e.driftHold=0),e.exitT>0&&(e.exitT=Math.max(0,e.exitT-i));const D=Vu(e,t,i);e.lastIdx=D;const k=Math.min(D+Wu,t.n-1),H=Math.max(D-Wu,0),I=Math.min(D+1,t.n-1),P=Math.max(D-1,0),Q=(t.y[I]-t.y[P])/Bi(t,P,I),dt=(t.y[k]-t.y[D])/Bi(t,D,k),St=(t.y[D]-t.y[H])/Bi(t,H,D),Bt=(dt-St)/(Bi(t,D,k)+Bi(t,H,D)),ee=e.px-t.x[D],q=e.pz-t.z[D],tt=ee*t.nx[D]+q*t.nz[D],ut=Math.abs(tt)>t.halfW;let nt=Math.hypot(e.vx,e.vz);const wt=e.driftAmt>.4;let Lt=!1,Ot=!1,oe=0,kt=0,ue=!1;if(e.grounded){const Pt=Math.min(Math.max(nt,8)/10,1),Ct=nt<=30?1:Math.max(.3+.08*Wt((nt-100)/40,0,1),1-(nt-30)/95),re=sn(2.3*Ct,1.9,e.driftAmt)*Pt;e.heading-=f*re*i;const Xt=Math.abs(tt)>t.halfW+.2;if(y&&!Xt&&(e.kickT=hx,e.heading+=L),Xt||(e.heading+=U*i),e.kickT>0&&(e.kickT=Math.max(0,e.kickT-i)),e.crashT>0&&(e.heading+=e.crashAmp*Math.sin(e.crashT*25)*i,e.crashT=Math.max(0,e.crashT-i),e.crashT<=0&&(e.crashAmp=0)),l&&e.driftAmt<1){const W=e.breakT>.45?.35:.1+Math.min(e.breakT,.45)*.55;e.heading+=Math.sin(e.raceMs*.045)*jx*W*i}const be=Math.sin(e.heading),mn=Math.cos(e.heading);let se=e.vx*be+e.vz*mn,Oe=e.vx*mn-e.vz*be;ut&&!e.wasOffroad&&(se*=.92),e.wasOffroad=ut,s=e.rhythm.boostT>0?e.rhythm.boostAccel:0;const bn=ut?nx:s>0?Ma:wt?ex:fs,ni=e.crashT>0?Math.min(Math.abs(e.crashAmp)/Gu,1):0,Pn=s>0?0:e.exitT>0?vx:0,ar=!ut&&(s>0||e.exitT>0)?JM:0,Un=(ut?tx:QM+ar+Pn+s)*(1-Gx*ni);se<bn&&(se=Math.min(bn,se+Un*i)),s<=0&&e.exitT<=0&&!ut&&se>fs&&(se=fs+(se-fs)*Math.exp(-2*i)),x<.15&&e.driftAmt>=.15&&(se*=fx);const Ti=Math.abs(tt)>t.halfW+1,Ps=!Ti&&e.driftAmt>.5?Math.min(Math.max(e.driftHold-Pu,0)*gx,_x):0,Ka=((ut?ix:sn(9,4.8,e.driftAmt))+(ut||Ti?0:(Mx*N-Ps)*e.driftAmt))*(e.kickT>0&&!Ti?dx:1);Oe*=Math.exp(-Ka*i);const Za=Math.atan2(Oe,Math.abs(se)+1e-6),E=Math.abs(Za);let O=0;if(E>Fu&&(O+=Ax*(E-Fu)),E>Uu&&(O+=Tx*(E-Uu)),O>0&&(se*=Math.exp(-O*(ut||Ti?1:1-xx*N)*i)),e.driftAmt>.5){const W=Math.min(Math.max(e.driftHold-Pu,0)*px,mx);se*=Math.exp(-(Ex+W)*i)}if(ut&&(se*=Math.exp(-.5*i)),e.vx=be*se+mn*Oe,e.vz=mn*se-be*Oe,s>0){const W=Math.hypot(e.vx,e.vz);if(W>Ma){const z=Ma/W;e.vx*=z,e.vz*=z}}nt=Math.hypot(e.vx,e.vz),e.approach.push(Q),e.approach.length>fv&&e.approach.shift();const X=Math.hypot(e.vx,e.vz);if(!ut&&X>YM&&-Bt*X*X>jM){let W=.08;for(const z of e.approach)z>W&&(W=z);e.vy=Wt(X*W,qM,$M),e.grounded=!1,e.justLaunched=!0,e.airSteps=0,Lt=!0}}else e.heading-=h*1.1*i,e.vy-=XM*i;e.px+=e.vx*i,e.pz+=e.vz*i;const B=(e.px-t.x[D])*t.nx[D]+(e.pz-t.z[D])*t.nz[D],Ne=vs(t.y[D],B,t.halfW)+.2;if(Math.abs(B)>t.halfW&&Xu(e),e.grounded)if(e.py=Ne,Math.abs(B)>t.halfW){const Pt=Math.sin(e.heading),Ct=Math.cos(e.heading),re=1.5,Xt=(Pt*t.tx[D]+Ct*t.tz[D])*re,be=(Pt*t.nx[D]+Ct*t.nz[D])*re,mn=vs(t.y[D]+Q*Xt,B+be,t.halfW),se=vs(t.y[D]-Q*Xt,B-be,t.halfW);e.pitch=Math.atan(Wt((mn-se)/(2*re),-.5,.5))}else e.pitch=Math.atan(Wt(Q,-.5,.5));else e.py+=e.vy*i,e.airSteps++,!e.justLaunched&&e.vy<=0&&e.py<=Ne&&(oe=e.vy,e.py=Ne,e.grounded=!0,e.vy=0,Ot=!0,e.airSteps>1&&(e.rhythm.slideBlend=Math.max(0,e.rhythm.slideBlend-Du.slideRelease*e.airSteps*i))),e.pitch=Wt(Math.atan2(e.vy,Math.max(Math.hypot(e.vx,e.vz),1)),-.6,.6);e.justLaunched=!1;const mt=Vu(e,t,i);e.lastIdx=mt;const Gt=e.px-t.x[mt],At=e.pz-t.z[mt],Zt=Gt*t.nx[mt]+At*t.nz[mt],Et=Fx(t.halfW);e.wallCool=Math.max(0,e.wallCool-i);let A=!1,S=0,V=0,$=0;const Z=e.scrapeT<=0,Y=Zt>=0?1:-1,_t=e.px-t.x[mt],ot=e.pz-t.z[mt],ft=t.cum?Wt(t.cum[mt]+_t*t.tx[mt]+ot*t.tz[mt],0,t.barrier?t.barrier.length:t.cum[t.cum.length-1]):0,Vt=t.barrier&&t.cum?el(t.barrier,ft,Y):!0,J=t.barrier!=null&&Math.abs(Zt)-Et>Ox;if(Math.abs(Zt)>Et&&Vt&&!J){const Pt=Math.abs(Zt)-Et,Ct=Math.sign(Zt);e.px-=t.nx[mt]*Ct*Pt,e.pz-=t.nz[mt]*Ct*Pt,V=-t.nx[mt]*Ct,$=-t.nz[mt]*Ct;const re=e.vx*t.nx[mt]+e.vz*t.nz[mt],Xt=re*Ct;if(Xt>0){e.vx-=t.nx[mt]*re,e.vz-=t.nz[mt]*re;const Oe=Z&&Xt<=Er?Math.max(Xt,Pt*12):Xt;if(Oe>Er&&e.wallCool<=0&&(Z||Xt>2*Er)){const bn=Wt(Rx+Oe*Lx,0,Dx),ni=Wt((Oe-Er)/zx,0,1),Pn=ni*ni*(3-2*ni),ar=Wt(Er*Ou,0,zu),Un=sn(ar,bn,Pn);e.vx*=1-Un,e.vz*=1-Un,e.vx-=t.nx[mt]*Ct*Oe*ku,e.vz-=t.nz[mt]*Ct*Oe*ku,S=Wt(Oe/25,0,1),kt=S,A=!0,e.wallCool=Bx,e.crashT=kx*(Bu+(1-Bu)*Pn),e.crashAmp=Ct*Gu*S}else if(Xt<=Er&&Z){const bn=Wt(Xt*Ou,0,zu);e.vx*=1-bn,e.vz*=1-bn,S=Wt(Xt/25,0,1)}else S=Wt(Xt/25,0,1)}e.scrapeT+=i;const be=Wt(e.scrapeT/Cx,0,1),mn=f*Ct<-.05,se=Math.exp(-(mn?bx:wx)*be*i);e.vx*=se,e.vz*=se,ue=!0,nt=Math.hypot(e.vx,e.vz)}else e.scrapeT=0;{const Pt=(e.px-t.x[mt])*t.nx[mt]+(e.pz-t.z[mt])*t.nz[mt];Math.abs(Pt)>t.halfW+iv?e.oobMs+=i*1e3:e.oobMs=Math.max(0,e.oobMs-rv*i*1e3)}{const Pt=e.px-t.x[0],Ct=e.pz-t.z[0],re=Pt*t.tx[0]+Ct*t.tz[0];if(re<-3&&Pt*Pt+Ct*Ct<Hu*Hu){e.px-=t.tx[0]*(re+3),e.pz-=t.tz[0]*(re+3);const Xt=e.vx*t.tx[0]+e.vz*t.tz[0];Xt<0&&(e.vx-=t.tx[0]*Xt,e.vz-=t.tz[0]*Xt)}}const rt=e.lastIdx;e.snapTimer+=i;const bt=Math.hypot(e.vx,e.vz),Rt=Math.sin(e.heading),pt=Math.cos(e.heading),Ht=Math.abs(Math.atan2(e.vx*pt-e.vz*Rt,Math.abs(e.vx*Rt+e.vz*pt)+1e-6)),Nt=(e.px-t.x[rt])*t.nx[rt]+(e.pz-t.z[rt])*t.nz[rt],ne=Nt>=0?1:-1,F=(e.vx*t.nx[rt]+e.vz*t.nz[rt])*ne,at=Math.abs(xa(e.heading-t.yaw[rt])),j=e.grounded&&t.halfW-Math.abs(Nt)>=Kx&&bt>=qx&&Ht<=$x&&at<=Zx&&F<=Qx&&e.scrapeT<=0&&e.crashT<=0&&rt<=t.n-1-Jx;if(e.snapTimer>.75&&j&&(e.rescueStreak<=0||rt>=e.rescueIdx+ev)){e.snapTimer=0;const Pt={i:rt,x:e.px,y:e.py,z:e.pz,h:e.heading,vx:e.vx,vz:e.vz};for(e.snap=Pt,e.snaps.push(Pt);e.snaps.length>tv+1;)e.snaps.splice(1,1);e.rescueStreak=0}let K=!1;{const Pt=t.n-1,Ct=(e.px-t.x[mt])*t.nx[mt]+(e.pz-t.z[mt])*t.nz[mt],re=Math.abs(Ct)<=t.halfW,Xt=(e.px-t.x[Pt])*t.tx[Pt]+(e.pz-t.z[Pt])*t.tz[Pt];if(re&&e.prevFinD<=0&&Xt>0&&e.prevRaceMs+i*1e3>KM&&e.lastIdx>=t.n-nv){const be=Wt(-e.prevFinD/(Xt-e.prevFinD||1e-9),0,1);e.raceMs=e.prevRaceMs+be*i*1e3,e.px=e.px0+(e.px-e.px0)*be,e.py=e.py0+(e.py-e.py0)*be,e.pz=e.pz0+(e.pz-e.pz0)*be,e.heading=e.h0+xa(e.heading-e.h0)*be,e.rec.p.push([e.px,e.py,e.pz,e.heading]),e.rec.ts.push(e.raceMs),e.rec.t=Math.round(e.raceMs),e.finished=!0,e.finishCount++,e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch,K=!0}else e.raceMs=e.prevRaceMs+i*1e3;e.prevFinD=e.prevFinD<=0&&Xt>0?e.prevFinD:Xt}e.finished||e.raceMs-e.recLastMs>=VM-1e-6&&(e.recLastMs=e.raceMs,e.rec.p.push([e.px,e.py,e.pz,e.heading]),e.rec.ts.push(e.raceMs)),nt=Math.hypot(e.vx,e.vz),ue&&nt<Yx?e.scrapeLowMs+=i*1e3:e.scrapeLowMs=0;const lt=Math.sin(e.heading),ct=Math.cos(e.heading),Dt=e.vx*lt+e.vz*ct,he=e.vx*ct-e.vz*lt;return{spd:nt,drifting:wt,sIdx:rt,pitch:e.pitch,launched:Lt,landed:Ot,finished:K,fSpeed:Dt,lSpeed:he,slip:Math.atan2(he,Math.abs(Dt)+1e-6),yawRate:xa(e.heading-e.h0)/i,offroad:ut,surface:e.grounded?ut?"offroad":"road":"air",landV:oe,impact:kt,scraping:ue,stuckMs:e.scrapeLowMs,wallHit:A,wallSev:S,wallNx:V,wallNz:$,wallCool:e.wallCool,driftPhase:e.rhythmOut.phase,rhythmBoost:s,exitQuality:e.rhythm.lastQuality,pendAmp:e.rhythm.pendAmp,kickT:e.kickT,chainArmed:e.rhythm.chainT>0&&e.rhythm.chainDir!==0,oobMs:e.oobMs}}function mv(e,t){const n=Wt(t,0,1);return{x:sn(e.px0,e.px,n),y:sn(e.py0,e.py,n),z:sn(e.pz0,e.pz,n),h:e.h0+xa(e.heading-e.h0)*n,pitch:sn(e.pitch0,e.pitch,n)}}function gv(e,t,n){return t>0?n:e}function _v(e){if(e.length===0)return[];const t=[.25,.5,.75],n=[];for(const i of t){const r=Math.min(e.length-1,Math.max(0,Math.floor(e.length*i))),s=e[r].endS;(n.length===0||s>n[n.length-1]+1)&&n.push(s)}return n}function Mv(e,t){let n=0,i=1/0;for(let r=0;r<e.length;r++){const s=Math.abs(e[r]-t);s<i&&(i=s,n=r)}return n}function Ic(e,t,n){if(!e||e.p.length<2||e.ts.length!==e.p.length)return-1;let i=0,r=1/0;for(let a=0;a<e.p.length;a++){const o=e.p[a][0]-t,c=e.p[a][2]-n,u=o*o+c*c;u<r&&(r=u,i=a)}const s=e.ts[i];return typeof s=="number"&&isFinite(s)&&s>=0?s:-1}function xv(e){const t=e/1e3,n=t<0?"-":"+",i=Math.abs(t);return`${n}${i.toFixed(2)}`}function ju(e,t,n){if(!isFinite(e)||!isFinite(t)||t<0)return"";const i=Math.round(Math.abs(e)/1e3*t);return`${xv(e)} · ${i}m vs ${n}`}const Yu=.1;function vv(e){return!isFinite(e)||e<0?0:e>Yu?Yu:e}const Sv=11.5,qu=2,yv=2400,Ev=3850,Tv=140,Av=240,wv=40,bv=.3,va=40,Cv=11,Rv=14,Lv=8,Dv=10,Iv=2,Nv=3;function Pv(){const e=(n,i,r,s)=>({kind:"corner",corner:{dir:n,r0:i,r1:r,angleDeg:s}}),t=n=>({kind:"straight",len:n});return[t(180),e("R",150,150,48),t(90),e("L",100,100,118),t(90),e("R",72,72,96),t(140),e("L",78,78,162),t(95),e("R",108,108,122),t(240),e("L",155,155,44),t(85),e("R",76,76,100),t(90),e("L",112,112,120),t(130),e("R",80,42,96),t(240),e("L",185,185,28),t(90),e("R",80,80,158),t(85),e("L",98,98,112),t(190)]}const Tr=[{cls:"hairpin",rMin:72,rMax:86,aMin:150,aMax:170},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"tight",rMin:62,rMax:78,aMin:85,aMax:110},{cls:"tight",rMin:62,rMax:78,aMin:85,aMax:110},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"drift",rMin:90,rMax:120,aMin:100,aMax:135},{cls:"dec",rMin:78,rMax:85,aMin:88,aMax:102},{cls:"sweep",rMin:145,rMax:170,aMin:40,aMax:55},{cls:"sweep",rMin:145,rMax:170,aMin:40,aMax:55},{cls:"kink",rMin:180,rMax:200,aMin:24,aMax:32}];function Uv(e,t){return e==="hairpin"?130+t()*30:e==="tight"?115+t()*25:e==="dec"||e==="drift"?110+t()*25:e==="sweep"?65+t()*20:e==="kink"?60+t()*20:100+t()*25}function $u(e,t){const n=Pv();if(t>=va)return n;const i=Ha(Ga(`canyon-${e}#${t}`)),r=I=>I[Math.floor(i()*I.length)],s=Tr.map((I,P)=>I.cls==="sweep"?P:-1).filter(I=>I>=0),a=Tr.map((I,P)=>I.cls==="sweep"||I.cls==="kink"?P:-1).filter(I=>I>=0),o=Tr.findIndex(I=>I.cls==="dec"),c=Tr.map((I,P)=>I.cls==="hairpin"?P:-1).filter(I=>I>=0),u=Tr.map((I,P)=>P),h=(I,P)=>{const Q=r(P);return I.splice(I.indexOf(Q),1),Q},d=new Array(12).fill(-1);d[0]=h(u,s),d[11]=h(u,a.filter(I=>u.includes(I)));const f=2+Math.floor(i()*8);d[f]=o,u.splice(u.indexOf(o),1);for(const I of c){let P=2+Math.floor(i()*8),Q=0;for(;d[P]>=0&&Q++<20;)P=2+Math.floor(i()*8);d[P]>=0&&(P=d.indexOf(-1)),d[P]=I,u.splice(u.indexOf(I),1)}const m=d.map((I,P)=>I<0?P:-1).filter(I=>I>=0);for(let I=m.length-1;I>=0;I--)d[m[I]]=u.splice(Math.floor(i()*u.length),1)[0];const g=I=>Tr[d[I]],_=I=>{const P=g(I);return(P.aMin+P.aMax)/2*Math.PI/180},p=[];p.push(i()<.5?"L":"R");for(let I=1;I<12;I++)p.push(i()<.7?p[I-1]==="L"?"R":"L":p[I-1]);const l=()=>{let I=0;for(let P=0;P<12;P++)I+=(p[P]==="L"?1:-1)*_(P);return I};for(let I=0;I<32&&Math.abs(l())>40*Math.PI/180;I++){const P=1+Math.floor(i()*10),Q=Math.abs(l());p[P]=p[P]==="L"?"R":"L",Math.abs(l())>=Q&&(p[P]=p[P]==="L"?"R":"L")}p.includes("L")||(p[5]="L"),p.includes("R")||(p[6]="R");const v=[];v.push({kind:"straight",len:165+i()*25});const M=[];for(let I=0;I<12;I++){const P=g(I),Q=P.rMin+i()*(P.rMax-P.rMin),dt=P.aMin+i()*(P.aMax-P.aMin),St=P.cls==="dec"?{dir:p[I],r0:Q,r1:Math.max(32,Q*(.5+i()*.08)),angleDeg:dt}:{dir:p[I],r0:Q,r1:Math.max(32,Q+(i()*8-4)),angleDeg:dt};v.push({kind:"corner",corner:St}),I<11&&(M.push(v.length),v.push({kind:"straight",len:Uv(g(I+1).cls,i)}))}v.push({kind:"straight",len:175+i()*30});const x=d.indexOf(o),R=x===0?0:M[x-1],w=x===11?v.length-1:M[x],b=[[R,110],[w,120]];for(const I of c){const P=d.indexOf(I);P>0&&b.push([M[P-1],130])}for(let I=0;I<11;I++){const P=g(I+1);P.cls!=="hairpin"&&(P.cls!=="drift"&&P.cls!=="dec"&&P.cls!=="tight"||p[I+1]!==p[I]&&b.push([M[I],85]))}const N=new Set;for(let I=0;I<11;I++){const P=g(I+1);P.cls==="hairpin"||P.cls==="dec"||P.cls!=="drift"&&P.cls!=="tight"||p[I+1]!==p[I]&&N.add(M[I])}for(const[I,P]of b){const Q=v[I];Q.kind==="straight"&&Q.len<P&&(Q.len=P+i()*10)}const T=M.filter((I,P)=>{const Q=g(P+1).cls;return Q==="sweep"||Q==="kink"}),y=T.filter(I=>{const P=g(M.indexOf(I)).cls;return P==="sweep"||P==="kink"}),L=y.length>=2?y:T.length>=2?T:M,U=L[Math.floor(i()*L.length)];let C=L[Math.floor(i()*L.length)];for(;C===U;)C=L[Math.floor(i()*L.length)];for(const I of[U,C]){const P=v[I];P.kind==="straight"&&P.len<Ku&&(P.len=Ku+i()*20)}for(const I of N){if(I===U||I===C)continue;const P=v[I];P.kind==="straight"&&P.len>95&&(P.len=85+i()*10)}const D=I=>v[1+I*2].corner.dir,k=I=>v[2+I*2].len;let H=0;for(let I=0;I<11;I++)D(I)!==D(I+1)&&k(I)<=110&&H++;for(let I=0;I<11&&H<2;I++)if(D(I)===D(I+1)&&k(I)<=110){const P=v[1+(I+1)*2];P.corner.dir=P.corner.dir==="L"?"R":"L",H++}return v}function ld(){return{climbTop:14,rollerAmp:.8,rollerLen:260,rollerPhase:0}}function Fv(e,t){const n=Ha(Ga(`canyon-elev-${e}#${t}`));return{climbTop:10+n()*6,rollerAmp:.4+n()*.4,rollerLen:240+n()*80,rollerPhase:n()*Math.PI*2}}function Ov(e,t){const n=Ha(Ga(`canyon-mark-${e}#${t}`));return[.26+n()*.08,.5+n()*.1,.74+n()*.08]}function zv(e,t){return sl(e,t,ld(),[.3,.55,.8])}const Bv=205,ud=4.5,Ku=245;function sl(e,t,n,i,r=ud,s=2){const a=[{x:0,z:0,s:0}];let o=0,c=0,u=0,h=0;const d=[];for(const M of e)if(M.kind==="straight"){d.push({a:h,b:h+M.len});let x=M.len;for(;x>1e-9;){const R=Math.min(qu,x);o+=Math.sin(u)*R,c+=Math.cos(u)*R,h+=R,x-=R,a.push({x:o,z:c,s:h})}}else{const{dir:x,r0:R,r1:w,angleDeg:b}=M.corner,N=x==="L"?1:-1,T=b*Math.PI/180;let y=0;for(;y<T-1e-9;){const L=R+(w-R)*(y/T),U=Math.min(qu/L,T-y),C=L*U;u+=N*U,o+=Math.sin(u)*C,c+=Math.cos(u)*C,h+=C,y+=U,a.push({x:o,z:c,s:h})}}const f=h,m=d.slice(1,-1).map((M,x)=>({r:M,len:M.b-M.a,k:x})).sort((M,x)=>x.len-M.len),_=m.slice(0,Math.max(1,Math.min(s,m.length))).map(M=>M.r).map((M,x)=>Math.max(M.b-Bv-t%3*5,M.a+40)),p=(M,x,R)=>{const w=Wt((R-M)/(x-M),0,1);return w*w*(3-2*w)},l=M=>{const x=f-350,R=6+(Wt(M,250,x)-250)/Math.max(x-250,1)*(n.climbTop-6)+Math.sin((Wt(M,250,x)-250)/n.rollerLen*Math.PI*2+n.rollerPhase)*n.rollerAmp,w=14-(Wt(M,x,f-150)-x)/200*7;let b=sn(6,R,p(210,290,M));b=sn(b,w,p(x-60,x+60,M)),b=sn(b,7,p(f-260,f-140,M));for(const N of _){const T=(M-N)/18;b+=r*Math.exp(-T*T)}return b};return{points:a.map(M=>({x:M.x,y:l(M.s),z:M.z})),s:a.map(M=>M.s),crestS:_,straightRanges:d,landmarkS:i.map(M=>M*f)}}function kv(e){const t=[0];for(let n=1;n<e.length;n++)t.push(t[n-1]+Math.hypot(e[n].x-e[n-1].x,e[n].z-e[n-1].z));return t}function Gv(e,t){const n=[];let i=e[0]+t;for(let r=1;r<e.length-1;r++)e[r]>=i&&(n.push(r),i=e[r]+t);return n}function Nc(e){const t=e.length,n=[0];for(let l=1;l<t;l++)n.push(n[l-1]+Math.hypot(e[l].x-e[l-1].x,e[l].z-e[l-1].z));const i=n[t-1],r=[];for(let l=0;l<t;l++){const v=e[Math.max(l-2,0)],M=e[Math.min(l+2,t-1)];r.push(Math.atan2(M.x-v.x,M.z-v.z))}const s=[r[0]];for(let l=1;l<t;l++){let v=r[l]-s[l-1];for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;s.push(s[l-1]+v)}const a=7,o=[];for(let l=0;l<t;l++){let v=0,M=0;for(let x=-a;x<=a;x++){const R=l+x;R>=0&&R<t&&(v+=s[R],M++)}o.push(v/M)}const c=new Array(t).fill(1/0);for(let l=1;l<t-1;l++){const v=n[l+1]-n[l-1],M=Math.abs(o[l+1]-o[l-1]);M>1e-6&&v>1e-9&&(c[l]=v/M)}const u=[];let h=0;const d=l=>c[l]<200;for(;h<t;){if(!d(h)){h++;continue}let l=h;for(;l<t&&d(l);)l++;let v=l;for(;v<t&&!d(v)&&(v<l||n[v]-n[l-1]<25);)v++;if(v<t&&d(v)&&n[v]-n[l-1]<25)for(l=v;l<t&&d(l);)l++;if(n[l-1]-n[h]>=30){const M=c.slice(h,l).filter(C=>isFinite(C)),x=M.slice().sort((C,D)=>C-D),R=x.length?x[Math.floor(x.length/2)]:1/0,w=Math.min(8,Math.floor(M.length/4)),b=M.slice(w,M.length-w),N=C=>{const D=C.slice().sort((k,H)=>k-H);return D.length?D[Math.floor(D.length/2)]:R},T=Math.max(1,Math.floor(b.length/3)),y=N(b.slice(0,T)),L=N(b.slice(-T));let U=0;for(let C=h;C<l-1;C++)U+=s[C+1]-s[C];u.push({startS:n[h],endS:n[l-1],dir:U>=0?"L":"R",medR:R,entryR:y,exitR:L,decreasing:L<.8*y})}h=l}let f=1/0;for(let l=0;l<t;l+=2)for(let v=l+150;v<t;v+=2){const M=Math.hypot(e[l].x-e[v].x,e[l].z-e[v].z);M<f&&(f=M)}let m=0,g=1/0,_=-1/0;for(let l=0;l<t;l++)if(g=Math.min(g,e[l].y),_=Math.max(_,e[l].y),l>0){const v=n[l]-n[l-1];v>1e-9&&(m=Math.max(m,Math.abs((e[l].y-e[l-1].y)/v)))}let p=0;for(let l=2;l<t-2;l++){const v=e[l].y;if(v<=e[l-1].y||v<=e[l+1].y||v<=e[l-2].y||v<=e[l+2].y)continue;let M=1/0;for(let b=-60;b<=60;b++){const N=l+b;N>=0&&N<t&&(M=Math.min(M,e[N].y))}if(v-M<2.5)continue;const x=(v+M)/2;let R=l,w=l;for(;R>0&&e[R-1].y>x;)R--;for(;w<t-1&&e[w+1].y>x;)w++;n[w]-n[R]<=70&&p++}return{length:i,n:t,events:u,clearance:f,maxGrade:m,elevMin:g,elevMax:_,crestCount:p}}function Pc(e){let t=2166136261;const n=i=>{const r=Math.round(i*1e3);t^=r&65535,t=Math.imul(t,16777619),t^=r>>>16&65535,t=Math.imul(t,16777619)};for(const i of e)n(i.x),n(i.y),n(i.z);return(t>>>0).toString(16)}const Hv=140,Vv=112;function Uc(e){const t=e.length,n=[0];for(let o=1;o<t;o++)n.push(n[o-1]+Math.hypot(e[o].x-e[o-1].x,e[o].z-e[o-1].z));const i=[];for(let o=0;o<t;o++){const c=e[Math.max(o-3,0)],u=e[Math.min(o+3,t-1)];i.push(Math.atan2(u.x-c.x,u.z-c.z))}const r=[];for(let o=0;o<t;o++){const c=Math.max(o-3,0),u=Math.min(o+3,t-1);let h=Math.abs(i[u]-i[c]);for(;h>Math.PI;)h=2*Math.PI-h;const f=Math.max(n[u]-n[c],1e-6)/Math.max(h,1e-6),m=f<=130?Vv:Hv,g=f<=130?212:122;r.push(Math.min(m,Math.sqrt(g*Math.min(f,1e6))))}const s=r.slice();s[0]=Math.min(s[0],10);for(let o=1;o<t;o++){const c=Math.max(n[o]-n[o-1],1e-6);s[o]=Math.min(r[o],Math.sqrt(s[o-1]*s[o-1]+260*c))}for(let o=t-2;o>=0;o--){const c=Math.max(n[o+1]-n[o],1e-6);s[o]=Math.min(s[o],Math.sqrt(s[o+1]*s[o+1]+200*c))}let a=0;for(let o=1;o<t;o++){const c=n[o]-n[o-1];a+=2*c/Math.max(s[o]+s[o-1],1e-6)}return a}function Wv(e,t){if(e.length<yv||e.length>Ev)return!1;const n=e.events;if(n.length<Cv||n.length>Rv)return!1;const i=n.filter(a=>a.medR>=45&&a.medR<=130);if(i.length<Lv||i.length>Dv)return!1;const r=n.filter(a=>a.medR>130&&a.medR<=175);if(r.length<Iv||r.length>Nv||!n.some(a=>a.dir==="L")||!n.some(a=>a.dir==="R"))return!1;let s=0;for(let a=1;a<n.length;a++)n[a].dir!==n[a-1].dir&&n[a].startS-n[a-1].endS<=110&&s++;if(s<2||!n.some(a=>a.decreasing)||n[0].startS<Tv||n[0].startS>Av||e.clearance<wv||e.maxGrade>bv||e.crestCount<1||e.crestCount>2)return!1;for(const a of t.crestS){const o=n.find(c=>c.startS>a);if(!o){if(e.length-(a+65)<60)return!1;continue}if(o.startS-(a+65)<60||!(o.medR>130))return!1}return!0}function Xv(e){for(let i=0;i<va;i++){const r=sl($u(e,i),i,Fv(e,i),Ov(e,i)),s=Nc(r.points);if(Wv(s,r))return{points:r.points,stats:s,attempt:i,fallback:!1,crestS:r.crestS,estTimeS:Uc(r.points),checksum:Pc(r.points),landmarkS:r.landmarkS}}const t=zv($u(e,va),0),n=Nc(t.points);return{points:t.points,stats:n,attempt:va,fallback:!0,crestS:t.crestS,estTimeS:Uc(t.points),checksum:Pc(t.points),landmarkS:t.landmarkS}}const jv=2,Yv={practice:"eyJ2IjozLCJ0Ijo5MDc1LCJwIjpbWzAsNiwwLDBdLFswLDYsMi41LDBdLFswLDYsNywwXSxbMCw2LDEzLDBdLFswLDYsMjEuNSwwXSxbMCw2LDMxLjUsMF0sWzAsNiw0NCwwXSxbMCw2LDU4LDBdLFswLDYsNzQsMF0sWzAsNiw5Mi41LDBdLFswLDYsMTExLC0wLjAyXSxbLTAuNSw2LDEyOSwtMC4wNl0sWy0xLjUsNiwxNDYuNSwtMC4xNF0sWy0zLDYsMTYzLjUsLTAuMjNdLFstNS41LDYsMTc5LC0wLjM0XSxbLTkuNSw2LDE5NCwtMC40Nl0sWy0xNC41LDYsMjA4LC0wLjU4XSxbLTIxLjUsNiwyMjEsLTAuNzNdLFstMzAuNSw2LDIzMy41LC0wLjkzXSxbLTQxLjUsNi41LDI0NC41LC0xLjE1XSxbLTU0LDcsMjUzLC0xLjM0XSxbLTY4LDcuNSwyNTksLTEuNV0sWy04Myw4LDI2MywtMS42M10sWy05OCw4LDI2NC41LC0xLjczXSxbLTExMyw4LjUsMjY0LC0xLjc5XSxbLTEyOCw4LjUsMjYyLC0xLjgzXSxbLTE0NC41LDguNSwyNTgsLTEuOThdLFstMTYwLDguNSwyNTMsLTIuMDZdLFstMTc2LDguNSwyNDYuNSwtMS45OF0sWy0xOTMsOC41LDIzOSwtMS45MV0sWy0yMTIsOC41LDIzMiwtMS43Ml0sWy0yMzEuNSw5LDIyNiwtMS41OF0sWy0yNTMsOS41LDIyMi41LC0xLjQzXSxbLTI3My41LDEwLDIyMiwtMS4zM10sWy0yOTIsMTEsMjIzLC0xLjNdLFstMzA4LjUsMTEuNSwyMjUuNSwtMS4yNV0sWy0zMjQsMTIsMjI5LC0xLjEzXSxbLTMzOC41LDEyLjUsMjM0LC0wLjkyXSxbLTM1MiwxMi41LDI0MSwtMC42N10sWy0zNjMuNSwxMi41LDI1MC41LC0wLjQ2XSxbLTM3My41LDEyLjUsMjYxLjUsLTAuM10sWy0zODEsMTIuNSwyNzQuNSwtMC4xOF0sWy0zODYsMTIuNSwyODgsLTAuMDddLFstMzg5LjUsMTIuNSwzMDMsMC4wMV0sWy0zOTEuNSwxMi41LDMxOCwwLjA4XSxbLTM5Mi41LDEzLDMzMi41LDAuMTVdLFstMzkxLjUsMTMsMzQ3LjUsMC4yMV0sWy0zOTAsMTMuNSwzNjIuNSwwLjIzXSxbLTM4Ny41LDE0LDM3NywwLjIzXSxbLTM4NSwxNC41LDM5MS41LDAuMjFdLFstMzgyLjUsMTQuNSw0MDYsMC4xOF0sWy0zODAsMTQsNDIxLDAuMTVdLFstMzc3LjUsMTMsNDM1LjUsMC4xXSxbLTM3NSwxMS41LDQ1MCwwLjA1XSxbLTM3My41LDExLDQ2NS41LC0wLjAxXSxbLTM3MywxMC41LDQ4MSwtMC4wOF0sWy0zNzQuNSw5LjUsNDk4LC0wLjJdLFstMzc3LjUsOC41LDUxNiwtMC4zNl0sWy0zODMsNy41LDUzNS41LC0wLjQ4XSxbLTM5MC41LDcuNSw1NTQuNSwtMC41N10sWy0zOTkuNSw3LDU3MS41LC0wLjYzXSxbLTQwOSw3LDU4NywtMC42Nl0sWy00MTkuNSw3LDYwMi41LC0wLjY5XSxbLTQzMS41LDcsNjE3LC0wLjcyXSxbLTQ0My41LDcsNjMxLC0wLjc0XSxbLTQ1Niw3LDY0NSwtMC43NV0sWy00NjksNyw2NTguNSwtMC43NV0sWy00ODEuNSw3LDY3MiwtMC43Nl0sWy00OTQuNSw3LDY4NS41LC0wLjc3XSxbLTQ5NSw3LDY4Ni41LC0wLjc3XV0sInRzIjpbMCwxMzMsMjY3LDQwMCw1MzMsNjY3LDgwMCw5MzMsMTA2NywxMjAwLDEzMzMsMTQ2NywxNjAwLDE3MzMsMTg2NywyMDAwLDIxMzMsMjI2NywyNDAwLDI1MzMsMjY2NywyODAwLDI5MzMsMzA2NywzMjAwLDMzMzMsMzQ2NywzNjAwLDM3MzMsMzg2Nyw0MDAwLDQxMzMsNDI2Nyw0NDAwLDQ1MzMsNDY2Nyw0ODAwLDQ5MzMsNTA2Nyw1MjAwLDUzMzMsNTQ2Nyw1NjAwLDU3MzMsNTg2Nyw2MDAwLDYxMzMsNjI2Nyw2NDAwLDY1MzMsNjY2Nyw2ODAwLDY5MzMsNzA2Nyw3MjAwLDczMzMsNzQ2Nyw3NjAwLDc3MzMsNzg2Nyw4MDAwLDgxMzMsODI2Nyw4NDAwLDg1MzMsODY2Nyw4ODAwLDg5MzMsOTA2Nyw5MDc1XSwidHJhY2siOnsiZGF5IjoiMjAyNi0wMS0wMSIsImNvdXJzZSI6IjI5ZTlmYzNiIiwiZ2VuIjoyfX0",benchmark:"eyJ2IjozLCJ0IjoxNTQ4OCwicCI6W1swLDYsMCwwXSxbMCw2LDIuNSwwXSxbMCw2LDcsMF0sWzAsNiwxMywwXSxbMCw2LDIxLjUsMF0sWzAsNiwzMS41LDBdLFswLDYsNDQsMF0sWzAsNiw1OCwwXSxbMCw2LDc0LDBdLFswLDYsOTIuNSwwXSxbMCw2LDExMSwwLjAxXSxbMCw2LDEyOS41LDAuMDNdLFswLjUsNiwxNDcuNSwwLjA4XSxbMS41LDYsMTY1LDAuMTZdLFszLjUsNiwxODEuNSwwLjI1XSxbNi41LDYsMTk3LDAuMzZdLFsxMC41LDYsMjExLjUsMC40N10sWzE2LDYsMjI1LjUsMC41OV0sWzIzLDYsMjM4LjUsMC43M10sWzMyLDYuNSwyNTEsMC45XSxbNDIuNSw3LDI2MiwxLjA4XSxbNTQuNSw3LDI3MSwxLjI3XSxbNjguNSw3LjUsMjc4LDEuNDVdLFs4Myw3LjUsMjgyLjUsMS41OV0sWzk4LDcuNSwyODQuNSwxLjcyXSxbMTEzLjUsNy41LDI4NC41LDEuODFdLFsxMjguNSw3LDI4Mi41LDEuODldLFsxNDMsNywyNzkuNSwxLjkzXSxbMTU3LjUsNywyNzUsMi4wOF0sWzE3MS41LDYuNSwyNjkuNSwyLjE3XSxbMTg1LDYuNSwyNjIsMi4wOV0sWzIwMC41LDYuNSwyNTQsMi4wMV0sWzIxNyw3LDI0NS41LDEuOF0sWzIzNSw3LjUsMjM4LjUsMS42NF0sWzI1NC41LDgsMjMzLjUsMS40Nl0sWzI3My41LDguNSwyMzIsMS4zNF0sWzI5MSw5LDIzMiwxLjI5XSxbMzA2LjUsOSwyMzQsMS4yMl0sWzMyMS41LDksMjM3LjUsMS4wN10sWzMzNS41LDksMjQyLjUsMC44NV0sWzM0OSw5LDI1MCwwLjYyXSxbMzYwLDksMjYwLDAuNDNdLFszNjksOSwyNzEuNSwwLjI4XSxbMzc2LDguNSwyODQuNSwwLjE2XSxbMzgxLDguNSwyOTguNSwwLjA2XSxbMzg0LjUsOC41LDMxMywtMC4wMl0sWzM4Ni41LDguNSwzMjgsLTAuMDhdLFszODYuNSw4LjUsMzQzLC0wLjE0XSxbMzg2LDEwLDM1OCwtMC4yXSxbMzg0LjUsMTEuNSwzNzIuNSwtMC4yMl0sWzM4MywxMiwzODcuNSwtMC4yM10sWzM4MSwxMiw0MDIsLTAuMjJdLFszNzkuNSwxMS41LDQxNywtMC4yMV0sWzM3Ny41LDEwLjUsNDMxLjUsLTAuMl0sWzM3NS41LDEwLjUsNDQ2LjUsLTAuMThdLFszNzMsMTEsNDYxLC0wLjE1XSxbMzcxLDExLDQ3NiwtMC4xM10sWzM2OC41LDExLDQ5MC41LC0wLjExXSxbMzY3LDExLDUwNSwtMC4xXSxbMzY1LDEwLjUsNTIwLC0wLjA4XSxbMzY0LDEwLjUsNTM1LC0wLjA1XSxbMzYyLjUsMTAuNSw1NDkuNSwtMC4wMV0sWzM2MiwxMCw1NjQuNSwwLjA1XSxbMzYyLjUsMTAsNTc5LjUsMC4xMV0sWzM2MywxMCw1OTQsMC4xOF0sWzM2NSwxMC41LDYwOSwwLjI2XSxbMzY4LDEwLjUsNjIzLjUsMC4zNF0sWzM3MiwxMSw2MzgsMC40Ml0sWzM3NywxMS41LDY1MiwwLjQ5XSxbMzgzLDExLjUsNjY2LDAuNTVdLFszODkuNSwxMiw2NzksMC41OV0sWzM5Ny41LDEyLjUsNjkyLDAuNjJdLFs0MDcsMTIuNSw3MDYuNSwwLjYzXSxbNDE4LDEyLjUsNzIxLjUsMC42Ml0sWzQyOC41LDEyLjUsNzM2LjUsMC41N10sWzQzOC41LDEyLjUsNzUxLjUsMC40Nl0sWzQ0NywxMi41LDc2Ni41LDAuMzFdLFs0NTMuNSwxMiw3ODEsMC4xOV0sWzQ1OCwxMS41LDc5NCwwLjA4XSxbNDYyLDEyLDgwNSwtMC4wNl0sWzQ2MywxMiw4MTYuNSwtMC4yNV0sWzQ2MS41LDEyLDgyOC41LC0wLjQ5XSxbNDU3LjUsMTIsODQwLjUsLTAuNzJdLFs0NTAuNSwxMi41LDg1MiwtMC44OV0sWzQ0MS41LDEzLDg2Mi41LC0wLjk4XSxbNDMwLDEzLDg3MiwtMS4wNF0sWzQxNS41LDEzLjUsODgxLC0xLjFdLFszOTksMTQsODkwLC0xLjE0XSxbMzgyLDE0LjUsODk4LC0xLjE3XSxbMzY1LDE0LjUsOTA1LjUsLTEuMThdLFszNDgsMTQuNSw5MTMsLTEuMThdLFszMzAuNSwxNC41LDkyMCwtMS4xNl0sWzMxNCwxNCw5MjcsLTEuMTRdLFsyOTcuNSwxNCw5MzQuNSwtMS4wOV0sWzI4MiwxNCw5NDIuNSwtMS4wM10sWzI2Ny41LDEzLjUsOTUwLC0wLjk3XSxbMjU0LDEyLjUsOTU4LjUsLTAuOTFdLFsyNDIsMTIsOTY3LC0wLjg3XSxbMjI5LDExLjUsOTc3LjUsLTAuNjZdLFsyMTguNSwxMSw5ODgsLTAuNV0sWzIwOS41LDEwLDEwMDAuNSwtMC40NF0sWzIwMiw5LjUsMTAxMywtMC40N10sWzE5NSw4LjUsMTAyNiwtMC41NV0sWzE4Ny41LDgsMTAzOSwtMC41OF0sWzE3OS41LDcuNSwxMDUxLjUsLTAuNTVdLFsxNzIsNy41LDEwNjQuNSwtMC41XSxbMTY0LjUsNywxMDc3LjUsLTAuNDVdLFsxNTcuNSw3LDEwOTAuNSwtMC40Ml0sWzE1MSw3LDExMDMuNSwtMC40Ml0sWzE0NC41LDcsMTExNywtMC40M10sWzEzOC41LDcsMTEzMC41LC0wLjQzXSxbMTMyLDcsMTE0NCwtMC40Ml0sWzEyNiw3LDExNTcuNSwtMC40XSxbMTIwLDcsMTE3MSwtMC4zOV0sWzExNC41LDcsMTE4NC41LC0wLjM5XSxbMTA4LjUsNywxMTk4LjUsLTAuMzhdLFsxMDMsNywxMjEyLC0wLjM2XSxbMTAyLDcsMTIxNCwtMC4zNV1dLCJ0cyI6WzAsMTMzLDI2Nyw0MDAsNTMzLDY2Nyw4MDAsOTMzLDEwNjcsMTIwMCwxMzMzLDE0NjcsMTYwMCwxNzMzLDE4NjcsMjAwMCwyMTMzLDIyNjcsMjQwMCwyNTMzLDI2NjcsMjgwMCwyOTMzLDMwNjcsMzIwMCwzMzMzLDM0NjcsMzYwMCwzNzMzLDM4NjcsNDAwMCw0MTMzLDQyNjcsNDQwMCw0NTMzLDQ2NjcsNDgwMCw0OTMzLDUwNjcsNTIwMCw1MzMzLDU0NjcsNTYwMCw1NzMzLDU4NjcsNjAwMCw2MTMzLDYyNjcsNjQwMCw2NTMzLDY2NjcsNjgwMCw2OTMzLDcwNjcsNzIwMCw3MzMzLDc0NjcsNzYwMCw3NzMzLDc4NjcsODAwMCw4MTMzLDgyNjcsODQwMCw4NTMzLDg2NjcsODgwMCw4OTMzLDkwNjcsOTIwMCw5MzMzLDk0NjcsOTYwMCw5NzMzLDk4NjcsMTAwMDAsMTAxMzMsMTAyNjcsMTA0MDAsMTA1MzMsMTA2NjcsMTA4MDAsMTA5MzMsMTEwNjcsMTEyMDAsMTEzMzMsMTE0NjcsMTE2MDAsMTE3MzMsMTE4NjcsMTIwMDAsMTIxMzMsMTIyNjcsMTI0MDAsMTI1MzMsMTI2NjcsMTI4MDAsMTI5MzMsMTMwNjcsMTMyMDAsMTMzMzMsMTM0NjcsMTM2MDAsMTM3MzMsMTM4NjcsMTQwMDAsMTQxMzMsMTQyNjcsMTQ0MDAsMTQ1MzMsMTQ2NjcsMTQ4MDAsMTQ5MzMsMTUwNjcsMTUyMDAsMTUzMzMsMTU0NjcsMTU0ODhdLCJ0cmFjayI6eyJkYXkiOiIyMDI2LTAxLTAyIiwiY291cnNlIjoiMWVjYzEzMjMiLCJnZW4iOjJ9fQ"},qv={practice:"2026-01-01",benchmark:"2026-01-02"},Po={gold:1.08,silver:1.2,bronze:1.36},Uo={gold:1.1,silver:1.22,bronze:1.4},$v=td,Kv=1,Zv=[{kind:"straight",len:180},{kind:"corner",corner:{dir:"R",r0:84,r1:84,angleDeg:105}},{kind:"straight",len:170},{kind:"corner",corner:{dir:"L",r0:90,r1:90,angleDeg:108}},{kind:"straight",len:160},{kind:"corner",corner:{dir:"R",r0:150,r1:150,angleDeg:40}},{kind:"straight",len:150}],Qv=[{kind:"straight",len:190},{kind:"corner",corner:{dir:"L",r0:96,r1:96,angleDeg:112}},{kind:"straight",len:130},{kind:"corner",corner:{dir:"R",r0:92,r1:92,angleDeg:116}},{kind:"straight",len:260},{kind:"corner",corner:{dir:"L",r0:150,r1:150,angleDeg:42}},{kind:"straight",len:110},{kind:"corner",corner:{dir:"R",r0:68,r1:38,angleDeg:100}},{kind:"straight",len:220},{kind:"corner",corner:{dir:"L",r0:160,r1:160,angleDeg:38}},{kind:"straight",len:200}],Jv={practice:Zv,benchmark:Qv},tS={practice:{amp:0,hosts:2},benchmark:{amp:ud,hosts:1}};function eS(e){const t=(e||"").replace(/^\?/,"");for(const n of t.split("&")){if(!n)continue;const i=n.indexOf("="),r=i<0?n:n.slice(0,i),s=i<0?"":n.slice(i+1);let a=r,o=s;try{a=decodeURIComponent(r),o=decodeURIComponent(s)}catch{}if(a!=="m"&&a!=="mode"&&a!=="course")continue;const c=o.trim().toLowerCase();if(c==="practice"||c==="benchmark")return c;if(c==="daily")return"daily"}return"daily"}function Zu(e,t,n){const i=`v${jv}.${Kv}`;return e==="daily"?`canyon-course-${e}-${n}-${t}-${i}`:`canyon-course-${e}-${n}-${i}`}function nS(e,t){const n=tS[e],i=sl(t,0,ld(),[.3,.55,.8],n.amp,n.hosts),r=Nc(i.points);return{points:i.points,stats:r,attempt:0,fallback:!1,crestS:i.crestS,estTimeS:Uc(i.points),checksum:Pc(i.points),landmarkS:i.landmarkS}}function iS(e){return{bronzeMs:Math.round(e*Po.bronze),silverMs:Math.round(e*Po.silver),goldMs:Math.round(e*Po.gold)}}function rS(e){const t=e*1e3;return{bronzeMs:Math.round(t*Uo.bronze),silverMs:Math.round(t*Uo.silver),goldMs:Math.round(t*Uo.gold)}}function Qu(e,t){return e==="practice"?{title:"Drift Practice",description:"Short committed drifts with long power straights. Steer, tap the handbrake, then countersteer to surge out clean."}:e==="benchmark"?{title:"Benchmark Sprint",description:"Fast sprint: committed drifts, linked reversal, a crest landing, a tightening challenge, and long power exits."}:{title:"Canyon Daily",description:`Seeded sprint for ${t} — the same course for everyone.`}}const Ju=new Map;function sS(e,t){const n=e==="daily"?`daily|${t}`:e,i=Ju.get(n);if(i)return i;const r=aS(e,t);return Ju.set(n,r),r}function aS(e,t){if(e==="daily"){const u=Xv(t),{title:h,description:d}=Qu(e,t);return{mode:e,title:h,description:d,identityDay:t,storageKey:Zu(e,t,u.checksum),track:u,targets:rS(u.estTimeS),reference:null}}const n=nS(e,Jv[e]),i=qv[e],r=Rs(Yv[e]),s=r&&r.track&&r.track.course.toLowerCase()===n.checksum.toLowerCase()&&r.track.gen===$v?r:null,a=s?s.t:Math.round(n.estTimeS*1e3),{title:o,description:c}=Qu(e,t);return{mode:e,title:o,description:c,identityDay:i,storageKey:Zu(e,i,n.checksum),track:n,targets:iS(a),reference:s}}function oS(e,t){return e!=="exit"?"":t==="perfect"?"PERFECT EXIT":t==="good"?"CLEAN EXIT":""}const cS=.6;function lS(){return{step:"steerTap"}}function uS(e,t){return e.step==="steerTap"?t.event==="entered"&&(e.step="sustain"):e.step==="sustain"?t.phase==="sliding"&&t.slideAge>=cS&&(e.step="counter"):e.step==="counter"&&t.event==="exit"&&(t.grade==="good"||t.grade==="perfect")&&(e.step="complete"),e.step}function hS(e,t){const n=t?"DRIFT":"DRIFT (↓ / space)",i=t?"steer with the stick":"hold ← / →";switch(e){case"steerTap":return`1/3 ${i}, tap ${n}`;case"sustain":return"2/3 hold the slide — countersteer when settled";case"counter":return"3/3 flick opposite to exit with a slingshot";default:return""}}function dS(e=5){return{clean:0,perfect:0,goal:Math.max(1,Math.floor(e))}}function fS(e,t,n){return t!=="exit"||n!=="good"&&n!=="perfect"?!1:(e.clean++,n==="perfect"&&e.perfect++,!0)}function pS(e){return e.clean>=e.goal}function hd(e,t){const n=Math.min(e.clean,e.goal);if(pS(e))return`PRACTICE COMPLETE · ${e.perfect} perfect · progress saved`;const i=t?"slide + countersteer exit":"tap DRIFT + countersteer";return`PRACTICE ${n}/${e.goal} · retries keep progress · ${i}`}function th(e){return!isFinite(e)||e<0?0:Math.round(e*3.6)}function dd(e,t){return!isFinite(e)||e<=0?"none":e<=t.goldMs?"gold":e<=t.silverMs?"silver":e<=t.bronzeMs?"bronze":"none"}function mS(e,t){return!isFinite(e)||e<=0?"":e<=t.goldMs?"GOLD — now chase the reference":e<=t.silverMs?`next GOLD by ${xe(t.goldMs-e)}`:e<=t.bronzeMs?`next SILVER by ${xe(t.silverMs-e)}`:`next BRONZE by ${xe(t.bronzeMs-e)}`}function gS(e,t){const n=[];let i=0,r=0;const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const o=e[a],c=t[a];o===null||c===null||!isFinite(o)||!isFinite(c)||(n.push({index:a,deltaMs:o-i-(c-r)}),i=o,r=c)}return n}function _S(e){if(e.length===0)return"";let t=e[0],n=e[0];for(const r of e)r.deltaMs<t.deltaMs&&(t=r),r.deltaMs>n.deltaMs&&(n=r);const i=[];return n.deltaMs>40&&i.push(`S${n.index+1} cost ${xe(n.deltaMs)}`),t.deltaMs<-40&&i.push(`S${t.index+1} gained ${xe(-t.deltaMs)}`),i.join(" · ")}function MS(e,t){if(t==="daily")return e;const n=e.includes("?")?"&":"?";return`${e}${n}mode=${t}`}const fd="canyon-audio-muted",eh=.6,aa=55,xS=480,vS=4;function Ar(e,t,n,i){e.setTargetAtTime?e.setTargetAtTime(t,n,i):e.linearRampToValueAtTime?e.linearRampToValueAtTime(t,n+i):e.value=t}function SS(e){if(!e)return!1;try{return e.getItem(fd)==="1"}catch{return!1}}class yS{constructor(t){this.deps=t,this.ctx=null,this.master=null,this.engineOsc=null,this.engineGain=null,this.subOsc=null,this.subGain=null,this.noise=null,this.slipGain=null,this.voices=[],this.suspended=!1,this.muted=SS(t.storage)}get ready(){return this.ctx!==null}isMuted(){return this.muted}isSuspended(){return this.suspended}start(){if(this.ctx)return;const t=this.deps.createContext();this.ctx=t;const n=t.currentTime,i=t.createGain();i.gain.value=this.muted?0:eh,i.connect(t.destination),this.master=i;const r=t.createOscillator();r.type="sawtooth",r.frequency.value=aa;const s=t.createGain();s.gain.value=0,r.connect(s),s.connect(i),r.start(n),this.engineOsc=r,this.engineGain=s;const a=t.createOscillator();a.type="sine",a.frequency.value=aa*.5;const o=t.createGain();o.gain.value=0,a.connect(o),o.connect(i),a.start(n),this.subOsc=a,this.subGain=o;const c=t.createBufferSource(),u=Math.max(1,Math.floor(t.sampleRate*.5)),h=t.createBuffer(1,u,t.sampleRate),d=h.getChannelData(0);for(let g=0;g<u;g++)d[g]=Math.random()*2-1;c.buffer=h,c.loop=!0;const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=900,f.Q.value=.7;const m=t.createGain();m.gain.value=0,c.connect(f),f.connect(m),m.connect(i),c.start(n),this.noise=c,this.slipGain=m;for(let g=0;g<vS;g++){const _=t.createOscillator();_.type="triangle",_.frequency.value=220;const p=t.createGain();p.gain.value=0,_.connect(p),p.connect(i),_.start(n),this.voices.push({osc:_,gain:p,active:!1,endsAt:0})}this.muted||t.resume()}setMuted(t){this.muted=t;try{this.deps.storage?.setItem(fd,t?"1":"0")}catch{}this.ctx&&this.master&&Ar(this.master.gain,t?0:eh,this.ctx.currentTime,.02),!t&&this.ctx&&!this.suspended&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMuted(){return this.setMuted(!this.muted),this.muted}suspend(){!this.ctx||this.suspended||(this.suspended=!0,this.ctx.suspend())}resume(){!this.ctx||!this.suspended||(this.suspended=!1,this.ctx.resume())}activeVoiceCount(){const t=this.ctx?this.ctx.currentTime:0;let n=0;for(const i of this.voices)i.active&&i.endsAt>t&&n++;return n}update(t,n){if(!this.ctx||!this.engineOsc||!this.engineGain||!this.subOsc||!this.subGain||!this.slipGain||!(t>0)||this.suspended)return;const i=this.ctx.currentTime,r=Math.max(1,n.maxSpeed),s=Math.max(0,Math.min(n.speed,r)),a=Math.pow(s/r,.7),o=Math.max(0,Math.min(n.load,1)),c=aa+(xS-aa)*a+o*40;Ar(this.engineOsc.frequency,c,i,.05),Ar(this.subOsc.frequency,c*.5,i,.05);const u=(.05+.16*a+.1*o)*(n.grounded?1:.35);Ar(this.engineGain.gain,u,i,.08),Ar(this.subGain.gain,u*.5,i,.08);const h=n.drifting?Math.max(0,Math.min(n.slip,1)):0;Ar(this.slipGain.gain,h*.22,i,.05)}oneShot(t,n=.6){if(!this.ctx||this.muted||this.suspended||this.voices.length===0)return!1;const r=this.ctx.currentTime;let s=this.voices.find(h=>!h.active||r>=h.endsAt);s||(s=this.voices.reduce((h,d)=>h.endsAt<=d.endsAt?h:d));const a=Math.max(.05,Math.min(n,1));let o=220,c=140,u=.25;return t==="land"?(o=190,c=70,u=.22):t==="crash"?(o=130,c=38,u=.4):(o=620,c=1050,u=.18),s.osc.type=t==="crash"?"square":"triangle",s.osc.frequency.cancelScheduledValues?.(r),s.osc.frequency.setValueAtTime(o,r),s.osc.frequency.linearRampToValueAtTime(c,r+u),s.gain.gain.cancelScheduledValues?.(r),s.gain.gain.setValueAtTime(0,r),s.gain.gain.linearRampToValueAtTime(a*.8,r+.012),s.gain.gain.linearRampToValueAtTime(0,r+u),s.active=!0,s.endsAt=r+u+.02,!0}reset(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const n of this.voices)n.gain.gain.cancelScheduledValues?.(t),n.gain.gain.value=0,n.active=!1,n.endsAt=0;this.engineGain&&(this.engineGain.gain.value=0),this.subGain&&(this.subGain.gain.value=0),this.slipGain&&(this.slipGain.gain.value=0)}}function ES(e){return new yS(e)}function TS(e={}){const t=e.mobile??!1;return{halfW:e.halfW??8,guardSpacing:e.guardSpacing??(t?16:10),tickSpacing:e.tickSpacing??(t?40:25),chevronAdvance:e.chevronAdvance??[70,50,30],chevronRepeater:e.chevronRepeater??40,dustN:e.dustN??(t?80:160),mobile:t,barriers:e.barriers??null}}const er={MAX_GUARDRAILS:640,MAX_CHEVRONS:128,MAX_TICKS:260,MAX_DUST:220},fn={BOARD_W:2.4,BOARD_H:1.3,ARROW_W:1.5,ARROW_H:1.05,ARROW_NOTCH:.55,TIGHT_MED_R:62,SEVERE_MED_R:130,DOUBLE_GAP:.5,FACE_OFFSET:.05};function ba(e,t){let n=0,i=e.length-1;if(t<=e[0])return 0;if(t>=e[i])return i;for(;n+1<i;){const r=n+i>>1;e[r]<t?n=r:i=r}return i}function pd(e,t,n=t.barriers??null){const i=[],r=[];if(e.length<2)return{idx:i,side:r};const s=e[e.length-1];if(n)for(const a of[1,-1]){let o=t.guardSpacing;for(let c=1;c<e.length-1&&o<s-8;c++)e[c]>=o&&(el(n,e[c],a)&&(i.push(c),r.push(a)),o=e[c]+t.guardSpacing)}else{let a=t.guardSpacing;for(let o=1;o<e.length-1&&a<s-8;o++)e[o]>=a&&(i.push(o,o),r.push(1,-1),a=e[o]+t.guardSpacing)}if(i.length>er.MAX_GUARDRAILS){let a=i.length-(i.length-er.MAX_GUARDRAILS);a-=a%2,i.length=a,r.length=a}return{idx:i,side:r}}function md(e,t){const n=[];if(e.length<2)return n;const i=e[e.length-1],r=Math.floor(er.MAX_TICKS/2);let s=t.tickSpacing;for(let a=1;a<e.length-1&&s<i-8&&!(e[a]>=s&&(n.push(a),s=e[a]+t.tickSpacing,n.length>=r));a++);return n}function gd(e,t,n){const i=[];if(e.length<2)return i;const r=e[e.length-1];for(const s of t){if(!isFinite(s.startS)||!isFinite(s.endS))continue;const a=s.dir==="L"?1:-1,o=s.dir==="L"?"L":"R",c=s.medR<=fn.SEVERE_MED_R,u=s.decreasing===!0&&s.medR<fn.TIGHT_MED_R;for(const h of n.chevronAdvance){const d=s.startS-h;d>10&&d<r-10&&i.push({s:d,side:a,dir:o,severe:c,tight:u})}for(let h=s.startS+10;h<s.endS-5;h+=n.chevronRepeater)i.push({s:h,side:a,dir:o,severe:c,tight:u})}return i.sort((s,a)=>s.s-a.s),i.length>er.MAX_CHEVRONS&&(i.length=er.MAX_CHEVRONS),i}function _d(e){return e.dir==="R"?1:-1}function Md(e){const t=[];for(const n of e)t.push({chevron:n,offset:0}),n.tight&&t.push({chevron:n,offset:_d(n)*fn.DOUBLE_GAP});return t}function AS(e,t,n){if(e.length<2)return{guardrails:0,chevrons:0,signArrows:0,ticks:0,dust:0};const i=gd(e,t,n);return{guardrails:pd(e,n).idx.length,chevrons:i.length,signArrows:Md(i).length,ticks:md(e,n).length*2,dust:Math.min(n.dustN,er.MAX_DUST)}}const Be={GATE_SPEED:10,GATE_MIX:.25,WIDTH_MIN:.16,WIDTH_MAX:.45,LEN_MIN:.7,LEN_MAX:1.4,DUST_SPREAD_MIN:.8,DUST_SPREAD_MAX:2,ATTACK:5,RELEASE:2.5};function vi(e){return e<0?0:e>1?1:e}function wS(e,t,n,i,r){if(!i||!r||n<Be.GATE_SPEED||e<Be.GATE_MIX)return 0;const s=vi((e-Be.GATE_MIX)/(1-Be.GATE_MIX)),a=s*s*(3-2*s),o=vi(Math.abs(t)/.5);return vi(a*(.35+.65*o))}function bS(e,t,n){const i=t>e?Be.ATTACK:Be.RELEASE,r=t-e,s=i*Math.max(0,n);return r>s?e+s:r<-s?e-s:t}function CS(e){return Be.WIDTH_MIN+(Be.WIDTH_MAX-Be.WIDTH_MIN)*vi(e)}function RS(e){return Be.LEN_MIN+(Be.LEN_MAX-Be.LEN_MIN)*vi(e)}function LS(e){return vi(.1+.6*vi(e))}function DS(e){return e<.12?0:e<.35?3:e<.65?2:1}function IS(e){return e<.15?0:e<.55?1:2}function NS(e){return Be.DUST_SPREAD_MIN+(Be.DUST_SPREAD_MAX-Be.DUST_SPREAD_MIN)*vi(e)}class PS{constructor(t){this.head=0,this.n=Math.max(0,Math.min(Math.floor(t),er.MAX_DUST)),this.positions=new Float32Array(this.n*3),this.life=new Float32Array(this.n);for(let n=0;n<this.n;n++)this.positions[n*3+1]=-100}spawn(t,n,i,r){if(this.n===0)return;const s=this.head,a=(s*2654435761>>>0)/4294967296-.5,o=(s*40503+7)%100/100,c=(s*65599+13)%100/100-.5;this.positions[s*3]=t+a*r,this.positions[s*3+1]=n+o*1.2,this.positions[s*3+2]=i+c*r,this.life[s]=1,this.head=(s+1)%this.n}update(t){const n=t*1.4,i=t*2;for(let r=0;r<this.n;r++)this.life[r]>0&&(this.life[r]-=n,this.positions[r*3+1]+=i,this.life[r]<=0&&(this.positions[r*3+1]=-100))}}const nh=new WeakMap;function US(e){const t=new e.PlaneGeometry(fn.ARROW_W,fn.ARROW_H),n=typeof t.getAttribute=="function"?t.getAttribute("position"):void 0;if(!n||n.count<4||typeof n.setX!="function")return t;const i=fn.ARROW_W,r=fn.ARROW_H,s=fn.ARROW_NOTCH;return n.setX(0,-i/2),n.setY(0,r/2),n.setX(1,i/2),n.setY(1,0),n.setX(2,-i/2+s),n.setY(2,0),n.setX(3,-i/2),n.setY(3,-r/2),n.needsUpdate=!0,typeof t.computeBoundingSphere=="function"&&t.computeBoundingSphere(),t}function FS(e,t){let n=nh.get(e);if(!n){const i=r=>{const s=new e.BoxGeometry(1,1,1),a=new e.PlaneGeometry(fn.BOARD_W,fn.BOARD_H),o=US(e),c=new e.PlaneGeometry(1.4,.5);c.rotateX(-Math.PI/2);const u=new e.MeshLambertMaterial({color:16777215}),h=new e.MeshBasicMaterial({color:16777215,side:e.DoubleSide}),d=new e.MeshBasicMaterial({color:1052688,side:e.DoubleSide}),f=new e.MeshBasicMaterial({color:16117725,transparent:!0,opacity:r?.55:.8});return{guardGeo:s,boardGeo:a,arrowGeo:o,tickGeo:c,guardMat:u,boardMat:h,arrowMat:d,tickMat:f}};n={desk:i(!1),mob:i(!0)},nh.set(e,n)}return t?n.mob:n.desk}function OS(e,t,n,i={}){const r=TS(i),s=n.events??[],a=AS(n.cum,s,r),o=FS(e,r.mobile),c=new e.Group;c.name="canyon-visuals",t.add(c);const u=new e.Matrix4,h=new e.Quaternion,d=new e.Euler,f=new e.Vector3,m=new e.Vector3,g=new e.Vector3(1,1,1),_=new e.Color,p=U=>Math.atan2(n.tangents[U].x,n.tangents[U].z),l=[];let v=null,M=null,x=null,R=null;const w=pd(n.cum,r),b=[[],[]];for(let U=0;U<w.idx.length;U++)b[w.side[U]>0?0:1].push(w.idx[U]);const N=[];for(let U=0;U<2;U++){const C=U===0?1:-1,D=b[U];for(let k=0;k+1<D.length;k++){if(n.cum[D[k+1]]-n.cum[D[k]]>r.guardSpacing*1.6)continue;const H=n.points[D[k]],I=n.normals[D[k]],P=n.points[D[k+1]],Q=n.normals[D[k+1]];N.push({ax:H.x+I.x*C*(r.halfW+2),ay:H.y,az:H.z+I.z*C*(r.halfW+2),bx:P.x+Q.x*C*(r.halfW+2),by:P.y,bz:P.z+Q.z*C*(r.halfW+2),side:C})}}if(N.length>0){v=new e.InstancedMesh(o.guardGeo,o.guardMat,N.length);for(let U=0;U<N.length;U++){const C=N[U],D=C.bx-C.ax,k=C.bz-C.az,H=Math.sqrt(D*D+k*k);d.set(0,Math.atan2(D,k),0),h.setFromEuler(d),f.set((C.ax+C.bx)/2,(C.ay+C.by)/2+.35,(C.az+C.bz)/2),m.set(.55,1,H+1.5),u.compose(f,h,m),v.setMatrixAt(U,u),v.setColorAt(U,_.set(U%4===3?14170666:15327954))}v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),c.add(v),l.push(v)}const T=gd(n.cum,s,r);if(T.length>0){M=new e.InstancedMesh(o.boardGeo,o.boardMat,T.length);for(let C=0;C<T.length;C++){const D=ba(n.cum,T[C].s),k=n.points[D],H=n.normals[D];d.set(0,p(D)+Math.PI,0),h.setFromEuler(d),f.set(k.x+H.x*T[C].side*(r.halfW+4.5),k.y+1.5,k.z+H.z*T[C].side*(r.halfW+4.5)),m.set(1,1,1),u.compose(f,h,m),M.setMatrixAt(C,u);const I=T[C].tight?13703695:T[C].severe?14170666:15902010;M.setColorAt(C,_.set(I))}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M);const U=Md(T);if(U.length>0){x=new e.InstancedMesh(o.arrowGeo,o.arrowMat,U.length);for(let C=0;C<U.length;C++){const D=U[C],k=ba(n.cum,D.chevron.s),H=n.points[k],I=n.normals[k],P=D.chevron.side*(r.halfW+4.5),Q=n.tangents[k];d.set(0,p(k)+Math.PI,0),h.setFromEuler(d),f.set(H.x+I.x*(P+D.offset)-Q.x*fn.FACE_OFFSET,H.y+1.5,H.z+I.z*(P+D.offset)-Q.z*fn.FACE_OFFSET),m.set(_d(D.chevron),1,1),u.compose(f,h,m),x.setMatrixAt(C,u)}x.instanceMatrix.needsUpdate=!0,c.add(x),l.push(x)}}const y=md(n.cum,r);if(y.length>0){R=new e.InstancedMesh(o.tickGeo,o.tickMat,y.length*2);let U=0;for(const C of y){const D=n.points[C],k=n.normals[C];d.set(0,p(C),0),h.setFromEuler(d);for(const H of[1,-1])f.set(D.x+k.x*H*(r.halfW-1.2),D.y+.17,D.z+k.z*H*(r.halfW-1.2)),u.compose(f,h,g),R.setMatrixAt(U++,u)}R.count=U,R.instanceMatrix.needsUpdate=!0,c.add(R),l.push(R)}const L=new PS(r.dustN);return{counts:a,dust:L,setQuality(U){R&&(R.visible=!U),v&&(v.visible=!0),M&&(M.visible=!0),x&&(x.visible=!0)},update(U){L.update(U)},dispose(){for(const U of l)c.remove(U),U.dispose();t.remove(c)}}}const xd=Math.max(fs,Ma),Ls={posLambda:7,lookLambda:10,headLambda:5,fovLambda:5,driftLambda:6,feedforward:1,maxImpulse:1.2,impulseDecay:5,camDist:8.8,camHeight:3.5,lookAhead:12,lookHeight:1.2,baseFov:60,speedFov:32,driftFov:7,fullSpeed:xd,maxDt:.05};function zS(){return{px:0,py:0,pz:0,pvx:0,pvy:0,pvz:0,lx:0,ly:0,lz:0,lvx:0,lvy:0,lvz:0,fov:Ls.baseFov,fovV:0,camH:0,driftMix:0,impx:0,impy:0,impz:0,ready:!1}}function Ca(e){return Math.atan2(Math.sin(e),Math.cos(e))}function _i(e,t,n){return Math.max(t,Math.min(n,e))}function Hn(e){return typeof e=="number"&&isFinite(e)}function Di(e,t,n,i,r,s){const a=i*i,o=2*i,c=t+((n-e)*a-t*o)*r;s[0]=e+c*r,s[1]=c}function Va(e,t,n,i,r,s){const a=Math.sin(s),o=Math.cos(s);e.px=n-a*t.camDist,e.py=i+t.camHeight,e.pz=r-o*t.camDist,e.pvx=0,e.pvy=0,e.pvz=0,e.lx=n+a*t.lookAhead,e.ly=i+t.lookHeight,e.lz=r+o*t.lookAhead,e.lvx=0,e.lvy=0,e.lvz=0,e.fov=t.baseFov,e.fovV=0,e.camH=Ca(s),e.driftMix=0,e.impx=0,e.impy=0,e.impz=0,e.ready=!0}function BS(e,t,n,i,r,s,a,o){let c=e;i>8?c=Math.atan2(t,n):a&&(r!==0||s!==0)&&(c=Math.atan2(r,s));const u=Ca(e-c),h=_i(i/8,0,1),d=(1-.75*_i(o,0,1))*h;return c+u*d}function kS(e,t,n){return e.baseFov+_i(t/e.fullSpeed,0,1)*e.speedFov+_i(n,0,1)*e.driftFov}const ve=[0,0];function GS(e,t,n){const i=n.dt;if(!Hn(i)||i<=0||!Hn(n.px)||!Hn(n.py)||!Hn(n.pz)||!Hn(n.heading)||!Hn(n.vx)||!Hn(n.vz))return;if(!e.ready){Va(e,t,n.px,n.py,n.pz,n.heading);return}const r=i>t.maxDt?t.maxDt:i,s=_i(n.speed,0,200),a=n.drifting?1:0;e.driftMix+=(a-e.driftMix)*(1-Math.exp(-t.driftLambda*r)),e.driftMix=_i(e.driftMix,0,1);const o=BS(n.heading,n.vx,n.vz,s,n.tangentX,n.tangentZ,n.hasTangent,e.driftMix);e.camH+=Ca(o-e.camH)*(1-Math.exp(-t.headLambda*r)),e.camH=Ca(e.camH);const c=Math.sin(e.camH),u=Math.cos(e.camH),h=Math.max(t.feedforward*(2/t.posLambda)-r,0),d=n.px-c*t.camDist+n.vx*h,f=n.py+t.camHeight,m=n.pz-u*t.camDist+n.vz*h;Di(e.px,e.pvx,d,t.posLambda,r,ve),e.px=ve[0],e.pvx=ve[1],Di(e.py,e.pvy,f,t.posLambda,r,ve),e.py=ve[0],e.pvy=ve[1],Di(e.pz,e.pvz,m,t.posLambda,r,ve),e.pz=ve[0],e.pvz=ve[1];const g=Math.max(t.feedforward*(2/t.lookLambda)-r,0),_=n.px+c*t.lookAhead+n.vx*g,p=n.py+t.lookHeight,l=n.pz+u*t.lookAhead+n.vz*g;if(Di(e.lx,e.lvx,_,t.lookLambda,r,ve),e.lx=ve[0],e.lvx=ve[1],Di(e.ly,e.lvy,p,t.lookLambda,r,ve),e.ly=ve[0],e.lvy=ve[1],Di(e.lz,e.lvz,l,t.lookLambda,r,ve),e.lz=ve[0],e.lvz=ve[1],Di(e.fov,e.fovV,kS(t,s,e.driftMix),t.fovLambda,r,ve),e.fov=ve[0],e.fovV=ve[1],n.landed&&Hn(n.landV)&&n.landV<0&&(e.impy-=_i(-n.landV/22,0,1)*.9),n.wallHit&&Hn(n.wallVn)&&n.wallVn>0){const x=_i(n.wallVn/25,0,1)*.8,R=Math.hypot(n.vx,n.vz);R>1e-6&&(e.impx-=n.vx/R*x,e.impz-=n.vz/R*x)}const v=Math.hypot(e.impx,e.impy,e.impz);if(v>t.maxImpulse&&v>0){const x=t.maxImpulse/v;e.impx*=x,e.impy*=x,e.impz*=x}const M=Math.exp(-t.impulseDecay*r);e.impx*=M,e.impy*=M,e.impz*=M}function HS(e,t){t.x=e.px+e.impx,t.y=e.py+e.impy,t.z=e.pz+e.impz}function VS(e){return Math.hypot(e.impx,e.impy,e.impz)}const WS=3.1,XS=.7;function jS(e,t){return e&&t?XS:WS}function YS(e){e.stickId!==-1&&e.stickUp(e.stickId),e.joy=0,e.joyOn=!1,e.driftId!==-1&&e.driftUp(e.driftId),e.drift=!1}const vd=3;function qS(e){return e?"RESCUE":"R RESCUE"}function Sd(e){return e?"RETRY":"ENTER RETRY"}function yd(e){return`${qS(e)} (+${vd}s) · ${Sd(e)}`}function $S(e){return`STUCK — ${yd(e)}`}function KS(e){return`OFF COURSE — ${yd(e)}`}function ZS(){return`RESCUE +${vd}s`}function QS(){return{time:xe(0),progressPct:0,delta:"",split:"",debug:""}}function Ed(){return{spd:0,drifting:!1,sIdx:0,pitch:0,launched:!1,landed:!1,finished:!1,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:"road",landV:0,impact:0,scraping:!1,stuckMs:0,oobMs:0}}function JS(e={}){const t=e.mobile??!1;return{halfW:e.halfW??8,wallStep:e.wallStep??14,scrubStep:e.scrubStep??(t?28:16),mobile:t}}const yi={MAX_WALLS:700,MAX_MESAS:40,MAX_ARCHES:4,MAX_SCRUB:420},ty=8e3,ey=500;function ny(e,t=1200){if(e.length===0)return{cx:0,cz:0,size:t*2,minY:0,maxY:0};let n=1/0,i=-1/0,r=1/0,s=-1/0,a=1/0,o=-1/0;for(const d of e)d.x<n&&(n=d.x),d.x>i&&(i=d.x),d.z<r&&(r=d.z),d.z>s&&(s=d.z),d.y<a&&(a=d.y),d.y>o&&(o=d.y);const c=(n+i)/2,u=(r+s)/2,h=Math.max(i-n,s-r);return{cx:c,cz:u,size:h+t*2,minY:a,maxY:o}}const pi={MIN_WALL_LATERAL:17,INSIDE_LATERAL:26,INSIDE_HEIGHT_CAP:22,MAX_SCRUB_H:1.6,MIN_ARCH_LATERAL:22},Td=4,iy=4,$i=180,ry=80,Lr=150,sy=195,ay=240,Fc=300,ki=8,ih=220,rh=250,oy=15380867,Ke={GUARD_OUT:2.6,SHOULDER:2,SCRUB_OUT:3.1,CURVE_EXTRA:3,JITTER:.6,PUSHBACK:14};function pn(e){return e+Ke.GUARD_OUT+Ke.SHOULDER}function br(e,t,n){const i=e*Math.abs(Math.cos(n)),r=t*.4*Math.abs(Math.sin(n));return Math.sqrt(i*i+r*r)+Ke.JITTER}function Cr(e,t){return Math.max(e,t)*1+Ke.JITTER}function Ad(e){return e*1.28+Ke.JITTER}function cy(e,t){return e-ki+t*.5}function ps(e,t,n){return t<$i?Math.max(n,e):n}function ly(e,t){if(e<$i)return Math.max(t,ay);const n=Math.min(1,(e-$i)/220);return t+(1-n)*110}function wd(e){return .9*e+.3}function gt(e){let t=Math.imul(e|0,2654435761);return t^=t>>>15,t=Math.imul(t,2246822519),t^=t>>>13,(t>>>0)/4294967296}function uy(e){const t=[[.4,.19,.1],[.6,.3,.15],[.75,.43,.23],[.87,.59,.37],[.84,.79,.7]],n=Math.min(.999,Math.max(0,e))*(t.length-1),i=Math.floor(n),r=n-i,s=t[i],a=t[i+1];return[s[0]+(a[0]-s[0])*r,s[1]+(a[1]-s[1])*r,s[2]+(a[2]-s[2])*r]}function wr(e){return e.dir==="L"?-1:1}function sh(e,t){for(const n of e)if(t>=n.startS-20&&t<=n.endS)return n;return null}const oa=!0,bd=300,Fo=[1.25,1.18,1.08];function hy(e){return e>=bd}function dy(e){const t=Math.floor(e/Td);if(t===0)return"vista";const n=t%2;return(gt(t*131+7)<.35?n===1:n===0)?"cut":"vista"}function Cd(e,t,n){const i=[],r=[];if(e.length<2)return{near:i,far:r};const s=e[e.length-1];let a=0,o=0,c=0,u=n.wallStep;for(let f=1;f<e.length-1&&u<s-10;f++){if(e[f]<u)continue;u=e[f]+n.wallStep;const m=e[f],g=sh(t,m),_=m<$i,p=!_&&m<$i+ry;let l=_||p?"vista":dy(o);if(!_&&!p&&l==="cut"&&c>=iy&&(l="vista"),o++,c=l==="vista"?0:c+1,_){if(o%2===0){a++;const v=gt(o*29+1)<.5?-1:1,M=1.5+gt(a*2+2)*3,x=10+gt(a*2+3)*10,R=n.wallStep*1.6,w=(gt(a*3+5)-.5)*.9,b=Math.max(22+gt(a*2+1)*16,pn(n.halfW)+br(x,R,w));i.push({idx:f,side:v,lateral:b,h:M,w:x,segLen:R,tint:a,yaw:w})}}else if(p){a++;const v=gt(o*29+1)<.5?-1:1;let M=10+gt(a*2+2)*12;g&&v===wr(g)&&(M=Math.min(M,pi.INSIDE_HEIGHT_CAP));const x=12+gt(a*2+3)*16,R=n.wallStep*2,w=(gt(a*3+5)-.5)*.9,b=g!==null&&v===wr(g),N=Math.max(74+gt(a*2+1)*50,pn(n.halfW)+br(x,R,w)+(b?Ke.CURVE_EXTRA:0));i.push({idx:f,side:v,lateral:N,h:M,w:x,segLen:R,tint:a,yaw:w})}else if(l==="vista"){a++;const v=gt(o*29+1)<.5?-1:1;let M=16+gt(a*2+2)*26;g&&v===wr(g)&&(M=Math.min(M,pi.INSIDE_HEIGHT_CAP));const x=12+gt(a*2+3)*18,R=n.wallStep*2.4,w=(gt(a*3+5)-.5)*.9,b=g!==null&&v===wr(g),N=Math.max(58+gt(a*2+1)*80,pn(n.halfW)+br(x,R,w)+(b?Ke.CURVE_EXTRA:0));i.push({idx:f,side:v,lateral:N,h:M,w:x,segLen:R,tint:a,yaw:w})}else{const M=.72+gt(Math.floor(o/Td)*57+3)*.65;for(const x of[1,-1]){a++;const R=gt(a*5+11)<.5?1.25:.75;let w=(15+gt(a*2+2)*15)*M*R;const b=g!==null&&x===wr(g);b&&(w=Math.min(w,pi.INSIDE_HEIGHT_CAP));const N=6+gt(a*2+3)*8,T=n.wallStep*1.6,y=(gt(a*3+5)-.5)*.9,L=Math.max(17+gt(a*2+1)*17,b?pi.INSIDE_LATERAL:pi.MIN_WALL_LATERAL,pn(n.halfW)+br(N,T,y)+(b?Ke.CURVE_EXTRA:0))+Ke.PUSHBACK;i.push({idx:f,side:x,lateral:L,h:w,w:N,segLen:T,tint:a,yaw:y})}}}let h=0,d=70;for(let f=1;f<e.length-1&&d<s-10;f++){if(e[f]<d)continue;d=e[f]+90,h++;const m=gt(h*37+5)<.5?-1:1,g=30+gt(1299709+h)*40,_=90,p=(gt((5e3+h)*3+5)-.5)*.9,l=sh(t,e[f]),v=l!==null&&m===wr(l),M=Math.max(90+gt(7919+h*2)*70,pn(n.halfW)+br(g,_,p)+(v?Ke.CURVE_EXTRA:0)),x=Math.min(1,Math.max(0,(e[f]-$i)/220));r.push({idx:f,side:m,lateral:ly(e[f],M),h:(30+gt(104729+h*2)*50)*(.55+.45*x),w:g,segLen:_,tint:5e3+h,yaw:p})}return i.length+r.length>yi.MAX_WALLS&&(i.length=Math.max(0,yi.MAX_WALLS-r.length)),{near:i,far:r}}function Gi(e,t){return t*(.7+gt(e*13+4)*.5)}function Rd(e,t=8){const n=[],i=e.points.length;if(i<2)return n;const r=g=>ba(e.cum,e.cum[i-1]*g);[.12,.25,.4,.55,.7,.85].forEach((g,_)=>{const p=r(g),l=e.points[p],v=e.normals[p],M=_%2?-1:1,x=40+gt(77+_*13)*50,R=ps(Lr,e.cum[p],Math.max(90+gt(31+_*7)*120,pn(t)+Cr(x,Gi(_,x))));n.push({x:l.x+v.x*M*R,y:l.y-ki,z:l.z+v.z*M*R,w:x,h:50+gt(101+_*17)*40,haze:0,tint:_})});let a=1/0,o=-1/0,c=1/0,u=-1/0,h=1/0;for(const g of e.points)g.x<a&&(a=g.x),g.x>o&&(o=g.x),g.z<c&&(c=g.z),g.z>u&&(u=g.z),g.y<h&&(h=g.y);const d=(a+o)/2,f=(c+u)/2;let m=0;for(const g of e.points)m=Math.max(m,Math.hypot(g.x-d,g.z-f));for(let g=0;g<8;g++){const _=g/8*Math.PI*2+gt(1001+g)*.5,p=Math.max(420,m+Fc)+gt(2002+g*3)*200;n.push({x:d+Math.cos(_)*p,y:h-20-gt(3003+g)*20,z:f+Math.sin(_)*p,w:120+gt(4004+g*5)*110,h:90+gt(5005+g*7)*70,haze:.55,tint:100+g})}[.33,.66].forEach((g,_)=>{const p=r(g),l=e.points[p],v=e.normals[p],M=_===0?1:-1,x=6+gt(7007+_)*3,R=ps(Lr,e.cum[p],Math.max(55+gt(6006+_)*20,pn(t)+Cr(x,Gi(200+_,x))));n.push({x:l.x+v.x*M*R,y:l.y-ki,z:l.z+v.z*M*R,w:x,h:70+gt(8008+_)*25,haze:0,tint:200+_})}),[.12,.5].forEach((g,_)=>{const p=r(g),l=e.points[p],v=e.normals[p];for(const M of[1,-1]){const x=bd+_*2+(M<0?1:0),R=3+gt(6100+x)*1.5,w=ps(Lr,e.cum[p],Math.max(pn(t)+Cr(R,Gi(x,R))+1.5,pi.MIN_WALL_LATERAL));n.push({x:l.x+v.x*M*w,y:l.y-ki,z:l.z+v.z*M*w,w:R,h:30+gt(6200+x)*12,haze:0,tint:x})}}),[.06,.18,.31,.45,.58,.72,.88].forEach((g,_)=>{const p=r(g),l=e.points[p],v=e.normals[p],M=_%2?-1:1,x=16+gt(14e3+_*17)*20,R=ps(Lr,e.cum[p],Math.max(52+gt(14200+_*23)*70,pn(t)+Cr(x,Gi(ih+_,x))+4));n.push({x:l.x+v.x*M*R,y:l.y-ki,z:l.z+v.z*M*R,w:x,h:14+gt(14100+_*19)*18,haze:0,tint:ih+_})});{const g=r(.08),_=e.points[g],p=e.normals[g],l=1,v=42+gt(15e3+i)*14,M=50+gt(15001+i)*18,x=Math.max(sy+gt(15002+i)*60,pn(t)+Cr(v,Gi(rh,v))+8);n.push({x:_.x+p.x*l*x,y:_.y-ki,z:_.z+p.z*l*x,w:v,h:M,haze:0,tint:rh})}return n.length>yi.MAX_MESAS&&(n.length=yi.MAX_MESAS),n}function Ld(e,t){const n=[];if(e.length<2)return n;const i=e[e.length-1];return[.3,.55,.8].forEach((r,s)=>{const a=i*r;if(a<30||a>i-30)return;const o=8+gt(9111+s*13)*4,c=ps(Lr,a,Math.max(24+gt(9009+s*11)*8,pi.MIN_ARCH_LATERAL,pn(t.halfW)+Ad(o))+Ke.PUSHBACK);n.push({idx:ba(e,a),side:s%2?-1:1,lateral:c,r:o})}),n.length>yi.MAX_ARCHES&&(n.length=yi.MAX_ARCHES),n}function Dd(e,t){const n=[];if(e.length<2)return n;const i=e[e.length-1];let r=0,s=t.scrubStep;for(let a=1;a<e.length-1&&s<i-8;a++)if(!(e[a]<s)){s=e[a]+t.scrubStep;for(const o of[1,-1]){r++;const c=gt(11011+r*7+(o>0?0:91));if(c<.25)continue;const u=c>.72?2:1;for(let h=0;h<u;h++){const d=r*5+h*131,f=.7+gt(12004+d)*1.7,m=h===0?0:.9;n.push({idx:a,side:o,lateral:Math.max(t.halfW+3.5+gt(11003+d)*3+m,t.halfW+Ke.SCRUB_OUT+wd(f)),w:f,h:Math.min(.35+gt(13005+d)*1.25,pi.MAX_SCRUB_H),tint:d})}}}return n.length>yi.MAX_SCRUB&&(n.length=yi.MAX_SCRUB),n}function cs(e,t,n,i){let r=1/0,s=t,a=0,o=n,c=-1;const u=e.points;for(let h=0;h<u.length;h++){const d=t-u[h].x,f=n-u[h].z,m=Math.sqrt(d*d+f*f);m<r&&(r=m,s=u[h].x,a=u[h].y,o=u[h].z,c=h)}return i.x=s,i.y=a,i.z=o,i.i=c,r}const ls=8;function Id(e,t,n,i,r,s){const a=pn(s),o=s+Ke.SCRUB_OUT,c={x:0,y:0,z:0,i:-1},u=(p,l,v)=>{const M=e.points[p],x=e.normals[p];return{x:M.x+x.x*l*v,z:M.z+x.z*l*v}},h=p=>a+br(p.w,p.segLen,p.yaw)+Ke.CURVE_EXTRA,d=[],f=[];for(const p of[t.near,t.far]){const l=p===t.near?d:f;for(const v of p){let M=v,x=!1;for(let R=0;R<ls;R++){const w=u(M.idx,M.side,M.lateral),b=cs(e,w.x,w.z,c);if(b>=h(M)){x=!0;break}const N=h(M)-b+.5;M={...M,lateral:M.lateral+N}}x&&l.push(M)}}const m=[];for(const p of n){if(p.haze>0){let R=p.x,w=p.z;for(let b=0;b<ls;b++){const N=cs(e,R,w,c);if(N>=Fc)break;const T=Fc-N+1;let y=R-c.x,L=w-c.z;const U=Math.sqrt(y*y+L*L);U<1e-6?(y=1,L=0):(y/=U,L/=U),R+=y*T,w+=L*T}m.push({...p,x:R,z:w});continue}let l=p.x,v=p.z;const M=Cr(p.w,Gi(p.tint,p.w));let x=!1;for(let R=0;R<ls;R++){const w=cs(e,l,v,c),N=e.cum&&c.i>=0&&e.cum[c.i]<$i?Math.max(a+M,Lr):a+M;if(w>=N){x=!0;break}const T=N-w+.5;let y=l-c.x,L=v-c.z;const U=Math.sqrt(y*y+L*L);U<1e-6?(y=1,L=0):(y/=U,L/=U),l+=y*T,v+=L*T}if(x){const R=Math.min(p.y,c.y-ki);m.push({...p,x:l,y:R,z:v})}}const g=[];for(const p of i){let l=p;const v=a+Ad(l.r);let M=!1;for(let x=0;x<ls;x++){const R=u(l.idx,l.side,l.lateral),w=cs(e,R.x,R.z,c);if(w>=v){M=!0;break}l={...l,lateral:l.lateral+(v-w)+.5}}M&&g.push(l)}const _=[];for(const p of r){let l=p;const v=o+wd(l.w);let M=!1;for(let x=0;x<ls;x++){const R=u(l.idx,l.side,l.lateral),w=cs(e,R.x,R.z,c);if(w>=v){M=!0;break}l={...l,lateral:l.lateral+(v-w)+.5}}M&&_.push(l)}return{walls:{near:d,far:f},mesas:m,arches:g,scrub:_}}function fy(e,t,n){if(e.cum.length<2)return{walls:0,farWalls:0,mesas:0,arches:0,scrub:0};const i=Id(e,Cd(e.cum,t,n),Rd(e,n.halfW),Ld(e.cum,n),Dd(e.cum,n),n.halfW);return{walls:i.walls.near.length+i.walls.far.length,farWalls:i.walls.far.length,mesas:i.mesas.length,arches:i.arches.length,scrub:i.scrub.length}}const ah=new WeakMap;function Oo(e,t){const n=e.getAttribute("position");for(let i=0;i<n.count;i++){const r=.5+Math.abs(n.getY(i));n.setX(i,n.getX(i)+(gt(t+i*3+1)-.5)*.24*r),n.setZ(i,n.getZ(i)+(gt(t+i*3+2)-.5)*.24*r),n.setY(i,n.getY(i)+(gt(t+i*3+3)-.5)*.1)}n.needsUpdate=!0,e.computeVertexNormals()}function zo(e,t,n){const i=t.getAttribute("position"),r=new Float32Array(i.count*3);t.computeBoundingBox();const s=t.boundingBox,a=s?s.min.y:0,o=s&&s.max.y-s.min.y>1e-6?s.max.y-s.min.y:1;for(let c=0;c<i.count;c++){const u=Math.min(.999,Math.max(0,(i.getY(c)-a)/o)),h=uy(Math.floor(u*n)/(n-1));r[c*3]=h[0],r[c*3+1]=h[1],r[c*3+2]=h[2]}t.setAttribute("color",new e.BufferAttribute(r,3))}function py(e){let t=ah.get(e);if(!t){const n=new e.CylinderGeometry(.58,1,1,5,2);n.translate(0,.5,0),Oo(n,211),zo(e,n,4);const i=new e.CylinderGeometry(.7,1,1,7,1);i.translate(0,.5,0),Oo(i,412),zo(e,i,4);const r=new e.CylinderGeometry(.72,1,1,8,3);r.translate(0,.5,0),Oo(r,977),zo(e,r,4);const s=new e.TorusGeometry(1,.28,6,12),a=new e.ConeGeometry(.9,1,6);a.translate(0,.5,0),t={wallGeo:n,farGeo:i,mesaGeo:r,archGeo:s,scrubGeo:a,wallMat:new e.MeshLambertMaterial({vertexColors:!0,flatShading:oa}),farMat:new e.MeshLambertMaterial({vertexColors:!0,flatShading:oa}),mesaMat:new e.MeshLambertMaterial({vertexColors:!0,flatShading:oa}),archMat:new e.MeshLambertMaterial({color:12876357,flatShading:oa}),scrubMat:new e.MeshLambertMaterial({color:16777215})},ah.set(e,t)}return t}function my(e,t,n,i={}){const r=JS(i),s=n.events??[],a=fy(n,s,r),o=py(e),c=new e.Group;c.name="canyon-environment",t.add(c);const u=new e.Matrix4,h=new e.Quaternion,d=new e.Euler,f=new e.Vector3,m=new e.Vector3,g=new e.Color,_=new e.Color(oy),p=C=>Math.atan2(n.tangents[C].x,n.tangents[C].z),l=[];let v=null,M=null,x=0,R=0,w=0;const b=(C,D,k)=>{const H=n.points[D.idx],I=n.normals[D.idx];d.set(0,p(D.idx)+D.yaw,0),h.setFromEuler(d),f.set(H.x+I.x*D.side*D.lateral,H.y-10,H.z+I.z*D.side*D.lateral),m.set(D.w,D.h,D.segLen*.4),u.compose(f,h,m),C.setMatrixAt(k,u);const P=.85+gt(D.tint*7+1)*.3;C.setColorAt(k,g.setRGB(P,P*.98,P*.95))},N=Id(n,Cd(n.cum,s,r),Rd(n,r.halfW),Ld(n.cum,r),Dd(n.cum,r),r.halfW),T=N.walls;if(T.near.length>0){const C=new e.InstancedMesh(o.wallGeo,o.wallMat,T.near.length);for(let D=0;D<T.near.length;D++)b(C,T.near[D],D);C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0),c.add(C),l.push(C)}if(x=T.far.length,T.far.length>0){v=new e.InstancedMesh(o.farGeo,o.farMat,T.far.length);for(let C=0;C<T.far.length;C++)b(v,T.far[C],C);v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),c.add(v),l.push(v)}const y=N.mesas;if(y.length>0){const C=new e.InstancedMesh(o.mesaGeo,o.mesaMat,y.length);for(let D=0;D<y.length;D++){const k=y[D];if(d.set(0,gt(k.tint*11+2)*Math.PI,0),h.setFromEuler(d),f.set(k.x,k.y,k.z),m.set(k.w,k.h,Gi(k.tint,k.w)),u.compose(f,h,m),C.setMatrixAt(D,u),hy(k.tint))g.setRGB(Fo[0],Fo[1],Fo[2]);else{const H=.85+gt(k.tint*17+6)*.3;g.setRGB(H,H*.98,H*.95)}k.haze>0&&g.lerp(_,k.haze),C.setColorAt(D,g)}C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0),c.add(C),l.push(C)}const L=N.arches;if(L.length>0){const C=new e.InstancedMesh(o.archGeo,o.archMat,L.length);for(let D=0;D<L.length;D++){const k=L[D],H=n.points[k.idx],I=n.normals[k.idx];d.set(0,p(k.idx),0),h.setFromEuler(d),f.set(H.x+I.x*k.side*k.lateral,cy(H.y,k.r),H.z+I.z*k.side*k.lateral),m.set(k.r,k.r*1.2,k.r),u.compose(f,h,m),C.setMatrixAt(D,u)}C.instanceMatrix.needsUpdate=!0,c.add(C),l.push(C)}const U=N.scrub;if(R=U.length,w=Math.floor(U.length/2),U.length>0){M=new e.InstancedMesh(o.scrubGeo,o.scrubMat,U.length);for(let C=0;C<U.length;C++){const D=U[C],k=n.points[D.idx],H=n.normals[D.idx];d.set(0,gt(D.tint*19+8)*Math.PI*2,0),h.setFromEuler(d),f.set(k.x+H.x*D.side*D.lateral,k.y-.1,k.z+H.z*D.side*D.lateral),m.set(D.w,D.h,D.w),u.compose(f,h,m),M.setMatrixAt(C,u),M.setColorAt(C,g.setHSL(.13+gt(D.tint*23+9)*.06,.3+gt(D.tint*29+3)*.2,.24+gt(D.tint*31+7)*.1))}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M)}return{counts:a,setQuality(C){v&&(v.count=C?0:x),M&&(M.count=C?w:R)},update(C){},dispose(){for(const C of l)c.remove(C),C.dispose();t.remove(c)}}}function gy(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Zr(e){try{return localStorage.getItem(e)}catch{return null}}function Ra(e,t){try{localStorage.setItem(e,t)}catch{}}const Wa=OM(location.search),_y=Wa.day||gy(),Zn=eS(location.search),Ee=sS(Zn,_y),nr=Ee.identityDay,Xn=Wa.timeMs,Nd=`${Ee.storageKey}-best`,La=`${Ee.storageKey}-ghost`;let al=null;{const e=Rs(Zr(La));e&&e.p.length>1&&(al=e)}let Yi=null,en=null,hi="",jn=!1,Da=!1;const Pd=document.getElementById("game"),Fe=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Fe&&document.body.classList.add("touchmode");const Xa=new nM({canvas:Pd,antialias:!Fe,powerPreference:"high-performance"});Xa.setPixelRatio(Math.min(devicePixelRatio||1,Fe?1.5:2));Xa.setSize(innerWidth,innerHeight);const le=new iM;le.background=new Tt(16172169);le.fog=new Zc(15380867,120,700);{const e=new Kn({side:Ge,depthWrite:!1,fog:!1,uniforms:{top:{value:new Tt(3042264)},mid:{value:new Tt(10470382)},bot:{value:new Tt(16172169)}},vertexShader:`
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
      }`}),t=new ge(new Jc(1500,24,12),e);t.frustumCulled=!1,le.add(t)}const Se=new hn(64,innerWidth/innerHeight,.1,2e3);le.add(new oM(16769216,8010530,1));const Ud=new uM(16767400,1.6);Ud.position.set(-120,180,60);le.add(Ud);addEventListener("resize",()=>{Se.aspect=innerWidth/innerHeight,Se.updateProjectionMatrix(),Xa.setSize(innerWidth,innerHeight)});const Re=Ha(Ga("canyon-"+Zn+"-"+nr)),ke=Ee.track;typeof console<"u"&&console.log("[canyon-debug] course",Zn,nr,"attempt",ke.attempt,"fallback",ke.fallback,"len",ke.stats.length.toFixed(0),"est",ke.estTimeS.toFixed(1)+"s");const Qt=ke.points.map(e=>new G(e.x,e.y,e.z)),An=Sv,ol=RM(nr,ke.checksum),me=sv(Qt.map(e=>({x:e.x,y:e.y,z:e.z})),An),Nn=me.tx.map((e,t)=>new G(e,0,me.tz[t])),Ei=me.nx.map((e,t)=>new G(e,0,me.nz[t])),Qn=kv(ke.points);me.barrier=mM(Qn[Qn.length-1],ke.stats.events,ke.crestS);typeof console<"u"&&console.log("[canyon-debug] barriers",`spans=${me.barrier.spans.length}`);const Or=_v(ke.stats.events).map(e=>Mv(Qn,e));let Hi=Or.map(()=>null),Oc=0,Sa=null;{const e=ny(ke.points,1200),t=Math.max(e.size,ty),n=new ge(new ti(t,t),new En({color:12480568}));n.rotation.x=-Math.PI/2,n.position.set(e.cx,Qh-.05,e.cz),le.add(n),Sa=n;const i=r=>{const s=[0,.22,.5,.78,1].map(g=>g*Lc),a=Qt.length,o=new Float32Array(a*s.length*3),c=new Float32Array(a*s.length*3),u=[],h=new Tt,d=new Tt(13208916),f=new Tt(10510131);for(let g=0;g<a;g++){for(let _=0;_<s.length;_++){const p=r*(An+s[_]),l=g*s.length+_;o.set([Qt[g].x+Ei[g].x*p,vs(Qt[g].y,p,An),Qt[g].z+Ei[g].z*p],l*3),h.copy(d).lerp(f,Math.min(1,s[_]/Lc)),c.set([h.r,h.g,h.b],l*3)}if(g<a-1)for(let _=0;_<s.length-1;_++){const p=g*s.length+_,l=p+1,v=(g+1)*s.length+_,M=v+1;u.push(p,l,v,l,M,v)}}const m=new Ve;return m.setAttribute("position",new Ie(o,3)),m.setAttribute("color",new Ie(c,3)),m.setIndex(u),m.computeVertexNormals(),new ge(m,new En({vertexColors:!0,side:dn}))};le.add(i(1)),le.add(i(-1))}function cl(e,t,n){const i=Qt.length,r=new Float32Array(i*2*3),s=new Float32Array(i*2*3),a=[],o=new Tt;for(let u=0;u<i;u++){for(let h=0;h<2;h++){const d=h===0?1:-1,f=Qt[u].clone().addScaledVector(Ei[u],d*e);r.set([f.x,Qt[u].y+t,f.z],(u*2+h)*3),o.copy(n(u,d)),s.set([o.r,o.g,o.b],(u*2+h)*3)}if(u<i-1){const h=u*2,d=u*2+1,f=(u+1)*2,m=(u+1)*2+1;a.push(h,d,f,d,m,f)}}const c=new Ve;return c.setAttribute("position",new Ie(r,3)),c.setAttribute("color",new Ie(s,3)),c.setIndex(a),c.computeVertexNormals(),new ge(c,new En({vertexColors:!0,side:dn}))}const My=new Tt(4012608),xy=new Tt(4538954);le.add(cl(An,.15,e=>Math.floor(Qn[e]/40)%2?My:xy));le.add(cl(An+4,.05,()=>new Tt(13208916)));const vy=new Tt(15258536),Sy=new Tt(14170666),yy=new Tt(15920610);le.add(cl(An+1.1,.12,(e,t)=>{const i=Math.floor(Qn[e]/14)%2?Sy:yy;return me.barrier&&!el(me.barrier,Qn[e],t>=0?1:-1)?i.clone().lerp(vy,.6):i}));{const e=new ti(.35,3);e.rotateX(-Math.PI/2);const t=new rn({color:16117725}),n=Gv(Qn,16).filter(c=>c>=6&&c<Qt.length-6),i=new Cs(e,t,n.length),r=new Kt,s=new Jn,a=new Ze,o=new G(1,1,1);n.forEach((c,u)=>{a.set(0,Math.atan2(Nn[c].x,Nn[c].z),0),s.setFromEuler(a),r.compose(new G(Qt[c].x,Qt[c].y+.19,Qt[c].z),s,o),i.setMatrixAt(u,r)}),i.instanceMatrix.needsUpdate=!0,le.add(i)}const Fd=new ti(2,1.15);Fd.rotateX(-Math.PI/2);const Ey=new rn({color:15920610}),Ty=new rn({color:1315860});function Ay(e){const t=Math.atan2(Nn[e].x,Nn[e].z);for(let n=0;n<2;n++)for(let i=0;i<8;i++){const r=new ge(Fd,(n+i)%2?Ty:Ey),s=(i-3.5)*2,a=(n-.5)*1.15;r.position.set(Qt[e].x+Ei[e].x*s+Nn[e].x*a,Qt[e].y+.21,Qt[e].z+Ei[e].z*s+Nn[e].z*a),r.rotation.y=t,le.add(r)}}const Od={BoxGeometry:ae,PlaneGeometry:ti,MeshLambertMaterial:En,MeshBasicMaterial:rn,InstancedMesh:Cs,Group:gi,Matrix4:Kt,Quaternion:Jn,Euler:Ze,Vector3:G,Color:Tt,DoubleSide:dn},Yn=OS(Od,le,{points:Qt,tangents:Nn,normals:Ei,cum:Qn,events:ke.stats.events,crestS:ke.crestS},{mobile:Fe,halfW:An,barriers:me.barrier});Yn.setQuality(Fe);const wy={...Od,CylinderGeometry:tr,ConeGeometry:Qc,TorusGeometry:tl,BufferAttribute:Ie},by=my(wy,le,{points:Qt,tangents:Nn,normals:Ei,cum:Qn,events:ke.stats.events,crestS:ke.crestS},{mobile:Fe,halfW:An});by.setQuality(Fe);typeof console<"u"&&console.log("[canyon-debug] visuals",`guards=${Yn.counts.guardrails} chevrons=${Yn.counts.chevrons} ticks=${Yn.counts.ticks} dust=${Yn.counts.dust}`);{const e=new ka(1,10);e.rotateX(-Math.PI/2);const t=new En({color:16777215}),n=70,i=new Cs(e,t,n),r=new Kt,s=new Tt;let a=0,o=0;for(;a<n&&o++<2e3;){const c=(Re()-.5)*1100,u=(Re()-.5)*1100;let h=1e9;for(let f=0;f<Qt.length;f+=12){const m=Qt[f].x-c,g=Qt[f].z-u,_=m*m+g*g;_<h&&(h=_)}if(h<1600)continue;const d=6+Re()*22;r.makeScale(d,1,d*(.6+Re()*.6)),r.setPosition(c,-2.35,u),i.setMatrixAt(a,r),i.setColorAt(a,s.setHSL(.03+Re()*.04,.5+Re()*.2,.22+Re()*.1)),a++}i.count=a,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),le.add(i)}{const e=new tr(.35,.55,1,7);e.translate(0,.5,0);const t=new En({color:16777215}),n=Fe?70:120,i=new Cs(e,t,n),r=new Kt,s=new Jn,a=new Ze,o=new G,c=new G,u=new Tt;let h=0,d=0;for(;h<n&&d++<6e3;){const f=(Re()-.5)*1e3,m=(Re()-.5)*1e3;let g=1e9;for(let p=0;p<Qt.length;p+=12){const l=Qt[p].x-f,v=Qt[p].z-m,M=l*l+v*v;M<g&&(g=M)}if(g<1600)continue;const _=3+Re()*4;a.set((Re()-.5)*.14,Re()*3,(Re()-.5)*.14),s.setFromEuler(a),o.set(f,-2.5,m),c.set(.8+Re()*.9,_,.8+Re()*.9),r.compose(o,s,c),i.setMatrixAt(h,r),i.setColorAt(h,u.setHSL(.29+Re()*.04,.4+Re()*.2,.26+Re()*.1)),h++}i.count=h,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),le.add(i)}function zd(e,t){const n=Qt[e],i=Ei[e],r=Math.atan2(Nn[e].x,Nn[e].z),s=-Math.cos(r),a=Math.sin(r),o=new En({color:2236962});for(const c of[1,-1]){const u=new ge(new ae(1.4,9,1.4),o),h=n.clone().addScaledVector(i,c*(An+1.5));u.position.set(h.x,n.y+4.5,h.z),le.add(u)}if(t)for(let c=0;c<10;c++){const u=new ge(new ae(1.9,1.4,1.4),new rn({color:c%2?1118481:16777215})),h=(c-4.5)*1.9;u.position.set(n.x+s*h,n.y+9,n.z+a*h),u.rotation.y=r,le.add(u)}else{const c=new ge(new ae((An+1.5)*2,1.4,1.4),o);c.position.set(n.x,n.y+9,n.z),c.rotation.y=r,le.add(c)}Ay(e)}zd(0,!1);zd(Qt.length-1,!0);function Bd(e,t=!1){const n=new gi,i=t?new rn({color:e,transparent:!0,opacity:.45}):new En({color:e}),r=t?i:new En({color:2302762}),s=t?i:new En({color:10475775}),a=(f,m,g,_,p)=>{const l=new ge(f,m);return l.position.set(g,_,p),n.add(l),l};if(a(new ae(2.3,.55,4.6),i,0,.8,0),a(new ae(2,.3,1),i,0,.55,2.5),a(new ae(2.34,.22,4),r,0,.42,0),a(new ae(.18,.3,1.4),i,-1.2,.95,.9),a(new ae(.18,.3,1.4),i,1.2,.95,.9),a(new ae(1.6,.55,1.9),s,0,1.3,-.2),a(new ae(1.7,.1,2),i,0,1.62,-.2),a(new ae(2.4,.12,.7),r,0,1.72,-2),a(new ae(.14,.5,.4),r,-.8,1.4,-2),a(new ae(.14,.5,.4),r,.8,1.4,-2),a(new ae(.3,.18,.5),i,-1.05,1.35,.6),a(new ae(.3,.18,.5),i,1.05,1.35,.6),a(new ae(.5,.28,.3),r,-.5,.6,-2.35),a(new ae(.5,.28,.3),r,.5,.6,-2.35),!t){const f=new rn({color:16774080}),m=new rn({color:16722474});a(new ae(.45,.18,.1),f,-.7,.82,2.32),a(new ae(.45,.18,.1),f,.7,.82,2.32),a(new ae(.45,.16,.1),m,-.7,.85,-2.32),a(new ae(.45,.16,.1),m,.7,.85,-2.32),n.userData.tail=m}const o=new tr(.45,.45,.4,12);o.rotateZ(Math.PI/2);const c=t?i:new En({color:1315860}),u=t?i:new rn({color:14211294}),h=[],d=[];for(const[f,m,g]of[[-1.15,1.5,1],[1.15,1.5,1],[-1.15,-1.5,0],[1.15,-1.5,0]]){const _=new gi;_.position.set(f,.45,m);const p=new gi;p.add(new ge(o,c));const l=new ge(new tr(.2,.2,.44,8).rotateZ(Math.PI/2),u);p.add(l),_.add(p),n.add(_),d.push(p),g&&h.push(_)}return n.userData.wheels={steer:h,spin:d},n}const Tn=Bd(16742938);Tn.rotation.order="YXZ";le.add(Tn);const Ln=Bd(3528447,!0);le.add(Ln);function ll(){const e=LM({shared:Wa.ghost,pb:al,expected:ol}),t=Ee.reference&&Ee.reference.p.length>1?Ee.reference:null;jn=!1;let n=e.rival;Da&&t?(n={ghost:t,kind:"pb",racingPB:!1},jn=!0):!n&&t&&(n={ghost:t,kind:"pb",racingPB:!1},jn=!0),Yi=n,en=n?n.ghost:null,hi=e.notice,jn&&(hi=(hi?hi+" ":"")+"Racing the REFERENCE run."),Ln.visible=!!en,hi&&typeof console<"u"&&console.log("[canyon-debug] rival",e.status,hi)}ll();const oh=Tn.userData.wheels,Es=new ge((()=>{const e=new ka(2.4,20);return e.rotateX(-Math.PI/2),e})(),new rn({color:0,transparent:!0,opacity:.32,depthWrite:!1}));le.add(Es);const ul=500,nn=new Cs((()=>{const e=new ti(1,1);return e.rotateX(-Math.PI/2),e})(),new rn({transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),ul);nn.frustumCulled=!1;nn.renderOrder=1;le.add(nn);let ms=0;const kd=new Tt(4867920),Cy=new Tt(920846),ch=new Tt,Ry=new Kt().makeScale(0,0,0);function Gd(){for(let e=0;e<ul;e++)nn.setMatrixAt(e,Ry),nn.setColorAt(e,kd);nn.instanceMatrix.needsUpdate=!0,nn.instanceColor&&(nn.instanceColor.needsUpdate=!0),ms=0}Gd();const lh=new Kt,uh=new Jn,hh=new Ze,dh=new G,fh=new G;function Ly(e,t,n,i,r,s,a){hh.set(0,i,0),uh.setFromEuler(hh),dh.set(e,t,n),fh.set(r,1,s),lh.compose(dh,uh,fh),nn.setMatrixAt(ms,lh),ch.copy(kd).lerp(Cy,a),nn.setColorAt(ms,ch),ms=(ms+1)%ul,nn.instanceMatrix.needsUpdate=!0,nn.instanceColor&&(nn.instanceColor.needsUpdate=!0)}let vn=0,Ss=0;const hl=new Ve;hl.setAttribute("position",new Ie(Yn.dust.positions,3));const Hd=new aM(hl,new Kh({color:15254682,size:1.1,transparent:!0,opacity:.45}));Hd.frustumCulled=!1;le.add(Hd);const pe={steer:0,drift:!1,left:!1,right:!1,keyDrift:!1},wn=new av;addEventListener("keydown",e=>{ei(),(e.key==="Escape"||e.key==="p"||e.key==="P")&&(Qr(!sr),e.preventDefault()),(e.key==="f"||e.key==="F")&&(ya=!ya,fl.classList.toggle("hidden",!ya)),!e.repeat&&((e.key==="ArrowLeft"||e.key==="a")&&(pe.left=!0),(e.key==="ArrowRight"||e.key==="d")&&(pe.right=!0),(e.key==="ArrowDown"||e.key===" ")&&(pe.keyDrift=!0,e.preventDefault()),(e.key==="r"||e.key==="R")&&Jd(),e.key==="Enter"&&qt==="menu"&&Zi(!1),e.key==="Enter"&&qt==="finish"&&Zi(!0),e.key==="Enter"&&qt==="run"&&Zi(!0))});addEventListener("keyup",e=>{(e.key==="ArrowLeft"||e.key==="a")&&(pe.left=!1),(e.key==="ArrowRight"||e.key==="d")&&(pe.right=!1),(e.key==="ArrowDown"||e.key===" ")&&(pe.keyDrift=!1)});const ja=document.getElementById("stick"),dl=document.getElementById("knob"),Ki=document.getElementById("driftbtn"),Dy=document.getElementById("resetbtn");Dy.addEventListener("pointerdown",e=>{e.preventDefault(),ei(),Jd()});ja.addEventListener("pointerdown",e=>{ei(),wn.stickDown(e.pointerId,e.clientX);try{e.target.setPointerCapture(e.pointerId)}catch{}});ja.addEventListener("pointermove",e=>{wn.stickMove(e.pointerId,e.clientX),dl.style.transform=`translate(calc(-50% + ${wn.joy*34}px), -50%)`});const Vd=e=>{wn.stickUp(e.pointerId),wn.joyOn||(dl.style.transform="translate(-50%,-50%)")};ja.addEventListener("pointerup",Vd);ja.addEventListener("pointercancel",Vd);Ki.addEventListener("pointerdown",e=>{ei(),wn.driftDown(e.pointerId);try{Ki.setPointerCapture(e.pointerId)}catch{}Ki.classList.add("on"),e.preventDefault()});const Wd=e=>{wn.driftUp(e.pointerId),wn.drift||Ki.classList.remove("on")};Ki.addEventListener("pointerup",Wd);Ki.addEventListener("pointercancel",Wd);function Ds(){pe.left=!1,pe.right=!1,pe.keyDrift=!1,pe.steer=0,pe.drift=!1,YS(wn),dl.style.transform="translate(-50%,-50%)",Ki.classList.remove("on")}addEventListener("blur",Ds);document.addEventListener("visibilitychange",()=>{document.hidden?(Ds(),an.suspend(),(qt==="run"||qt==="countdown"||qt==="watch")&&Qr(!0)):an.resume()});addEventListener("pagehide",Ds);const Xd=document.getElementById("retrybtn");Xd.textContent=`↻ ${Sd(Fe)}`;Xd.addEventListener("click",()=>{ei(),(qt==="run"||qt==="countdown")&&Zi(!0)});function Iy(){pe.left&&!pe.right?pe.steer=-1:pe.right&&!pe.left?pe.steer=1:pe.steer=wn.steer,pe.drift=pe.keyDrift||wn.drift}let qt="menu",gs=0,zc=0,_s=0,sr=!1;const it=ov();let Ts=!0;const _e=zS(),ca={x:0,y:0,z:0};let ya=!1,Bo=60,Ui=0,Fi=0,Ia=0;function Ny(e){Na.textContent=ZS(),Na.classList.add("show"),Ia=e+1800}function Ya(){Na.textContent="",Na.classList.remove("show"),Ia=0}let Ms=Ed(),Le=Number(Zr(Nd)||0);const Is=document.getElementById("time"),zr=document.getElementById("speed"),ko=document.getElementById("best"),qi=document.getElementById("msg"),Na=document.getElementById("penalty"),Dr=document.getElementById("exitfb"),mi=document.getElementById("lesson"),As=document.getElementById("progfill"),qe=document.getElementById("delta"),Vi=document.getElementById("split"),Ns=document.getElementById("panel"),Xr=document.getElementById("presult"),jd=document.getElementById("ptitle"),Py=document.getElementById("pdate"),je=document.getElementById("ptargets"),Uy=document.getElementById("psub"),Fy=document.getElementById("phint"),fl=document.getElementById("debug"),Bc=document.getElementById("racebtn"),Yd=document.getElementById("referencebtn"),qd=document.getElementById("mutebtn"),Oy=document.getElementById("fsbtn"),qa=document.getElementById("pauseoverlay"),zy=document.getElementById("resumebtn"),By=document.getElementById("pausemenubtn"),pl=document.getElementById("pauseplaybtn");function Ye(e,t=!1,n=!1){qi.textContent=e,qi.classList.toggle("count",t),qi.classList.toggle("go",n)}function ml(e){const t=document.createElement("span");return t.className=e==="gold"?"mgold":e==="silver"?"msilver":"mbronze",t.textContent=e.toUpperCase(),t}function la(e,t){const n=document.createElement("span");n.className="tpair";const i=document.createElement("span");return i.className="mtime",i.textContent=xe(t),n.append(ml(e),document.createTextNode(" "),i),n}function Pa(e){const t=document.createElement("span");return t.className="tchunk",t.textContent=e,t}let Ua="";function ky(){const e=`menu:${Le}`;if(e===Ua)return;Ua=e,je.replaceChildren();const t=Ee.targets;if(Le>0){const i=dd(Le,t);je.append(Pa(`BEST ${xe(Le)}`)),i==="none"?je.append(Pa("NO MEDAL YET")):je.append(ml(i)),je.append(la("gold",t.goldMs));return}const n=document.createElement("span");n.className="tlabel",n.textContent="TARGETS —",je.append(n),je.append(la("gold",t.goldMs)),je.append(la("silver",t.silverMs)),je.append(la("bronze",t.bronzeMs))}function Gy(e,t,n){const i=`finish:${e}|${t}|${n}`;if(i===Ua)return;Ua=i,je.replaceChildren();const r=e.replace(/\s*·\s*$/,"");if(r&&je.append(Pa(r)),t){const s=t.match(/^(next )?((?:GOLD|SILVER|BRONZE))([\s\S]*)$/);if(s){const a=document.createElement("span");a.className="tchunk",s[1]&&a.append(document.createTextNode(s[1])),a.append(ml(s[2].toLowerCase())),a.append(document.createTextNode(s[3])),je.append(a)}else je.append(document.createTextNode(t))}n&&je.append(Pa(n))}const Hy=document.getElementById("stopbtn");document.getElementById("day").textContent=Zn==="daily"?`CANYON DAILY · ${nr}`:Ee.title.toUpperCase();function $d(){Le>0?ko.textContent=`BEST ${xe(Le)}`:Xn>0?ko.textContent=`FRIEND ${xe(Xn)}`:ko.textContent="BEST —"}$d();const an=ES({createContext:()=>{const e=window,t=e.AudioContext||e.webkitAudioContext;if(!t)throw new Error("no AudioContext");return new t},storage:(()=>{try{return localStorage}catch{return null}})()});let ph=!1;function gl(){qd.textContent=an.isMuted()?"SOUND OFF":"SOUND ON"}function ei(){if(!ph){ph=!0;try{an.start()}catch{}gl()}}const Go=lS();let mh=Zr("canyon-drift-lesson-seen")==="1";const Kd=`${Ee.storageKey}-practice`,ir=dS(5);{const e=Zr(Kd);if(e){const[t,n]=e.split(","),i=Number(t),r=Number(n);isFinite(i)&&i>=0&&(ir.clean=Math.floor(i)),isFinite(r)&&r>=0&&(ir.perfect=Math.floor(r))}}function Vy(){Ra(Kd,`${ir.clean},${ir.perfect}`)}let Wi=null,xs=0;function $a(){Dr.textContent="",Dr.classList.remove("show"),xs=0}function Wy(e){const t=new URL(location.href);e==="daily"?t.searchParams.delete("mode"):t.searchParams.set("mode",e),location.assign(t.toString())}const gh={daily:document.getElementById("modedaily"),practice:document.getElementById("modepractice"),benchmark:document.getElementById("modebenchmark")};for(const e of["daily","practice","benchmark"])gh[e].onclick=()=>Wy(e),gh[e].classList.toggle("active",e===Zn);function _l(){const e=!!Ee.reference,t=Le>0||!!Wa.ghost||Xn>0;Bc.classList.toggle("hidden",!(e&&t)),Yd.classList.toggle("hidden",!e),e&&(Bc.textContent=Da?"RACE MY BEST":"RACE REFERENCE")}_l();Bc.onclick=()=>{Da=!Da,ll(),_l()};Yd.onclick=()=>jy();qd.onclick=()=>{ei(),an.toggleMuted(),gl()};gl();Oy.onclick=()=>{const e=document.documentElement;document.fullscreenElement?document.exitFullscreen?.():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?.()};zy.onclick=()=>Qr(!1);By.onclick=()=>{Qr(!1),Fa()};function Xy(){const e=[];return Le>0&&e.push(`Your best ${xe(Le)}`),Xn>0&&e.push(`Friend ${xe(Xn)}`),hi&&e.push(hi),!jn&&(Yi||Xn)?e.push(DM(Yi,Xn)):jn||e.push(Ee.reference?"Race the reference, then watch it":"Point-to-point sprint · flat out, drift the hairpins"),e.join(" · ")}function Qr(e){qt!=="run"&&qt!=="countdown"&&qt!=="watch"||(sr=e,qa.classList.toggle("hidden",!e),pl.textContent=e?"RESUME":"PAUSE",e?an.suspend():an.resume())}function Fa(){sr=!1,qa.classList.add("hidden"),pl.textContent="PAUSE",qt="menu",document.body.classList.remove("racing","watching"),Ns.classList.remove("hidden"),Tn.visible=!0,Ln.visible=!!en,Ye(""),qe.textContent="",qe.className="",Is.textContent="0:00.00",zr.textContent="0 km/h",As.style.width="0%",$a(),an.reset()}function jy(){!Ee.reference||Ee.reference.p.length<2||(ei(),Ds(),Ns.classList.add("hidden"),document.body.classList.add("racing","watching"),sr=!1,qa.classList.add("hidden"),_s=0,qt="watch",Tn.visible=!1,Ln.visible=!0,Ye("REFERENCE — DEMONSTRATION"),mi.textContent="",Vi.textContent="",qe.textContent="REPLAY",qe.className="",Is.textContent="0:00.00",zr.textContent="0 km/h",As.style.width="0%",$a(),Ya())}Hy.onclick=()=>{Qr(!1),Fa()};pl.onclick=()=>Qr(!sr);function Ml(e,t,n){const i=(t-me.x[e])*me.nx[e]+(n-me.z[e])*me.nz[e];return vs(me.y[e],i,An)}function Zd(){Tn.position.set(it.px,it.py,it.pz),Tn.rotation.set(it.pitch,it.heading,0);const e=Ml(it.lastIdx,it.px,it.pz)+.2;Es.position.set(it.px,e+.06,it.pz),Es.scale.setScalar(1+Wt(it.py-e,0,12)*.04)}function Qd(e){hv(it,me,e),Zd(),Va(_e,Ls,it.px,it.py,it.pz,it.heading),vn=0,Ss=0,Ts=!0}function Jd(){if(qt==="finish"){Zi(!0);return}qt==="run"&&(dv(it),Zd(),Va(_e,Ls,it.px,it.py,it.pz,it.heading),vn=0,Ss=0,Ts=!0,Ny(performance.now()),Ye(""))}Qd(0);Se.position.set(it.px-10,it.py+6,it.pz-10);Se.lookAt(it.px,it.py+1,it.pz);let _h=!1,Ea=3.1;function Zi(e=!1){Ds(),Ns.classList.add("hidden"),document.body.classList.add("racing"),document.body.classList.remove("watching"),Tn.visible=!0,qt="countdown",gs=0,di=0,Ea=jS(e,_h),_h=!0,Qd(0),Ui=0,Fi=0,Oc=0;const t=QS();Is.textContent=t.time,As.style.width=`${t.progressPct}%`,qe.textContent=t.delta,qe.className="",Vi.textContent=t.split,fl.textContent=t.debug,Ms=Ed(),Ye(""),Ya(),Gd(),$a(),Wi=null,sr=!1,qa.classList.add("hidden"),an.reset(),zr.textContent="0 km/h",mi.textContent="",Hi=Or.map(()=>null),Se.position.set(_e.px,_e.py,_e.pz),Se.lookAt(_e.lx,_e.ly,_e.lz),Se.fov=_e.fov,Se.updateProjectionMatrix(),Ln.visible=!!en}document.getElementById("drivebtn").onclick=()=>{ei(),Zi(qt==="finish")};Pd.addEventListener("pointerdown",()=>{ei(),qt==="menu"&&Zi()});document.getElementById("sharebtn").onclick=async()=>{const e=qt==="finish",t=e?zc:Le;let n="";e?n=id(it.rec,zc,nl,ol):n=Zr(La)||"";const i=MS(FM(location.origin,location.pathname,{day:nr,timeMs:t,ghost:n}),Zn),r=i.includes("&g="),s=UM(nr,t,i),a=await BM({requestNativeShare:o=>navigator.share(o),copyText:o=>navigator.clipboard.writeText(o)},{title:Ee.title,text:s,url:i,hasGhost:r,isFinish:e},zM(Fe,typeof navigator.share=="function"));Xr.textContent=a.message,Xr.classList.remove("finish")};const Yy=new G;function qy(e){Iy();const t=Wt(pe.steer,-1,1),n=pv(it,me,{steer:t,drift:pe.drift},e);it.rhythmOut.event!=="none"&&(Wi={event:it.rhythmOut.event,grade:it.rhythmOut.grade}),n.finished&&$y(),vn=bS(vn,wS(it.driftAmt,Math.abs(n.slip),n.spd,it.grounded,n.drifting),e),Ss++;const i=IS(vn);if(i>0){const s=NS(vn);for(let a=0;a<i;a++)Yn.dust.spawn(it.px,it.py,it.pz,s)}const r=DS(vn);if(r>0&&Ss%r===0){const s=Ml(it.lastIdx,it.px,it.pz)+.2,a=Math.sin(it.heading),o=Math.cos(it.heading),c=-o,u=a,h=CS(vn),d=RS(vn),f=LS(vn);for(const m of[1,-1])Ly(it.px-a*1.5+c*1*m,s+.22,it.pz-o*1.5+u*1*m,it.heading,h,d,f)}return n.offroad&&it.grounded&&n.spd>12&&Ss%2===0&&Yn.dust.spawn(it.px,it.py+.1,it.pz,2.4),Yy.set(it.vx,0,it.vz),n}function $y(){if(qt!=="run")return;qt="finish",di=0,Va(_e,Ls,it.px,it.py,it.pz,it.heading),Ts=!0;const e=Math.round(it.raceMs);zc=e;const t=Le;if(!Le||e<Le){Le=e,Ra(Nd,String(Le));const u=id(it.rec,e,nl,ol);Ra(La,u);try{const h=Rs(Zr(La));al=h&&h.p.length>1?h:null,ll()}catch{}}$d(),_l();const n=Le===e,i=dd(e,Ee.targets);jd.textContent=n?"NEW BEST!":"FINISH!";const r=!t||n?t?`by ${xe(t-e)}`:"first finished run!":`+${xe(e-t)} vs best`,s=i==="none"?"no medal":`${i.toUpperCase()} medal`;Xr.textContent=`${xe(e)} · ${s} · ${r} · best ${xe(Le)}${Xn?` · friend ${xe(Xn)}`:""}`,Xr.classList.add("finish");const a=en?Or.map(u=>Ic(en,me.x[u],me.z[u])):[],o=_S(gS(Hi,a));Gy(jn?"REFERENCE · ":"",mS(Le,Ee.targets),o),document.body.classList.remove("racing"),Ns.classList.remove("hidden");const c=document.getElementById("drivebtn");c.textContent="RETRY (Enter)",c.focus(),Ye(""),Ya(),$a(),Zn==="practice"&&(mi.textContent=hd(ir,Fe))}const Ky=Is;let Mh=performance.now(),di=0;const ua=1/60,ha=ey;function Zy(){Sa&&(Sa.position.x=Math.round(Se.position.x/ha)*ha,Sa.position.z=Math.round(Se.position.z/ha)*ha)}function us(){Zy(),Xa.render(le,Se)}function tf(e){requestAnimationFrame(tf);let t=Math.min((e-Mh)/1e3,.1);if(Mh=e,t>0&&(Bo=sn(Bo,1/t,.05)),sr&&(qt==="countdown"||qt==="run"||qt==="watch")){us();return}if(qt==="watch"){const n=Ee.reference;if(!n){Fa();return}_s+=t*1e3;const i=n.t,r=Math.min(_s,i),s=Io(n,r),a=Io(n,Math.max(0,r-60)),o=Math.hypot(s.x-a.x,s.z-a.z)/.06;if(Is.textContent=xe(r),zr.textContent=`${th(o)} km/h`,As.style.width=`${i>0?Math.min(100,r/i*100):0}%`,Ln.visible=!0,Ln.position.set(s.x,s.y,s.z),Ln.rotation.set(0,s.h,0),Se.position.set(s.x-Math.sin(s.h)*12,s.y+5,s.z-Math.cos(s.h)*12),Se.lookAt(s.x,s.y+1,s.z),_s>i+700&&(Ye("REFERENCE COMPLETE"),_s>i+1600)){Fa();return}us();return}if(qt==="menu"){const n=e/1e3;Se.position.set(Qt[0].x+Math.cos(n*.15)*58,Qt[0].y+24,Qt[0].z+Math.sin(n*.15)*58),Se.lookAt(Qt[0].x,Qt[0].y+1,Qt[0].z),jd.textContent=Ee.title.toUpperCase(),Py.textContent=Zn==="daily"?nr:"",Uy.textContent=Ee.description,ky(),Xr.textContent=Xy(),Xr.classList.remove("finish"),Fy.innerHTML=Fe?"Mobile: left stick steers · tap DRIFT to slide · steer back the other way to exit · RESCUE returns to the track (+3s)<br/>Controls: tap PAUSE to stop the clock · MENU to quit · RETRY restarts":"PC: ← → steer · ↓ / space drift · R rescue (+3s) · Enter retry · Esc / P pause<br/>Drift: hold a direction, tap DRIFT to start the slide, hold it, then countersteer to exit",Ns.classList.remove("hidden"),document.getElementById("drivebtn").textContent="DRIVE",qe.textContent="",qe.className="",Vi.textContent="",zr.textContent="0 km/h",mi.textContent="",us();return}if(qt==="countdown"){if(gs+=t,Ea>1){const n=3-Math.floor(gs);Ye(n>0?String(n):"GO!",!0,n<=0)}else{const n=gs>Ea-.25;Ye(n?"GO!":"READY",!0,n)}gs>Ea&&(qt="run",Ye("")),us();return}if(qt==="run"||qt==="finish"){if(qt==="run"){di+=t;let n=0,i=null;for(;di>=ua&&n<4&&qt==="run";)i=qy(ua),di-=ua,n++;di=vv(di),Ms=gv(Ms,n,i??Ms);const r=Ms;i&&i.wallHit===!0&&(Ui=Math.min(1,(i.wallSev??0)+.25));const s=Ts?1:Wt(di/ua,0,1);Ts=!1;const a=mv(it,s),o=sn(it.prevRaceMs,it.raceMs,s);if(Ky.textContent=xe(it.raceMs),zr.textContent=`${th(r.spd)} km/h`,As.style.width=`${r.sIdx/(me.n-1)*100}%`,en&&Yi){const p=Ic(en,it.px,it.pz);if(p>=0){const l=it.raceMs-p,v=jn?"REF":Yi.kind==="friend"?"FRIEND":"PB";qe.textContent=ju(l,r.spd,v),qe.className=l<0?"ahead":"behind"}else qe.textContent="",qe.className=""}else qe.textContent="",qe.className="";for(let p=0;p<Or.length;p++)if(Hi[p]===null&&r.sIdx>=Or[p]){if(Hi[p]=Math.round(it.raceMs),en){const l=Or[p],v=Ic(en,me.x[l],me.z[l]),M=jn?"REF":Yi&&Yi.kind==="friend"?"FRIEND":"PB";Vi.textContent=v>=0?`S${p+1} ${ju(Hi[p]-v,r.spd,M)}`:`S${p+1} ${xe(Hi[p])}`}else Vi.textContent=`S${p+1} ${xe(Hi[p])}`;Oc=e+1500}Vi.textContent!==""&&e>Oc&&(Vi.textContent=""),Ia&&e>Ia&&Ya();const c=Wi?Wi.event:"none",u=Wi?Wi.grade:"none";Wi=null;const h=oS(c,u);if(h&&(Dr.textContent=h,Dr.classList.add("show"),xs=e+1200,an.oneShot("cleanExit",.5),Fi=Math.min(1,.35+(it.rhythm.lastQuality??0)*.65)),xs&&e>xs&&(Dr.classList.remove("show"),Dr.textContent="",xs=0),Zn==="practice"?(fS(ir,c,u)&&Vy(),mi.textContent=hd(ir,Fe)):mh?mi.textContent="":(uS(Go,{event:c,grade:u,phase:it.rhythmOut.phase,slideAge:it.rhythm.slideAge}),Go.step==="complete"?(mh=!0,Ra("canyon-drift-lesson-seen","1"),mi.textContent=""):mi.textContent=hS(Go.step,Fe)),an.update(t,{speed:r.spd,maxSpeed:xd,load:r.offroad?.8:Math.min(1,it.driftAmt),slip:Math.min(1,it.driftAmt),drifting:r.drifting,grounded:it.grounded}),i&&(i.wallHit===!0?an.oneShot("crash",Wt(i.wallSev??.5,.2,1)):i.landed&&an.oneShot("land",Wt(Math.abs(i.landV)/12,.2,1))),r.stuckMs>1500?Ye($S(Fe)):r.oobMs>900?Ye(KS(Fe)):r.offroad&&it.grounded&&r.spd>12?Ye("LOW GRIP — DIRT"):r.drifting?Ye("DRIFT"):(qi.textContent==="DRIFT"||qi.textContent.startsWith("STUCK")||qi.textContent.startsWith("OFF COURSE")||qi.textContent==="LOW GRIP — DIRT")&&Ye(""),en&&en.p.length>1){const p=Io(en,o);Ln.position.set(p.x,p.y,p.z),Ln.rotation.set(0,p.h,0)}Tn.position.set(a.x,a.y,a.z),Ui*=Math.exp(-5*t),Ui<.001&&(Ui=0),Fi*=Math.exp(-4.5*t),Fi<.001&&(Fi=0);const d=Ui>0?Math.sin(e*.09)*.18*Ui:0,m=-Wt(r.slip,-.9,.9)*(.15+.35*_e.driftMix);Tn.rotation.set(a.pitch-Fi*.05,a.h+m,-pe.steer*(.06+_e.driftMix*.16)-Fi*.07+d);const g=Tn.userData.tail;g&&g.color.setHex(_e.driftMix>.4||pe.drift?16734762:16722474);const _=Ml(r.sIdx,a.x,a.z)+.2;Es.position.set(a.x,_+.06,a.z),Es.scale.setScalar(1+Wt(a.y-_,0,12)*.04),GS(_e,Ls,{dt:t,px:a.x,py:a.y,pz:a.z,heading:a.h,vx:it.vx,vz:it.vz,speed:r.spd,drifting:r.drifting,tangentX:me.tx[r.sIdx],tangentZ:me.tz[r.sIdx],hasTangent:!0,landed:i?i.landed:!1,landV:i?i.landV:0,wallHit:i?i.wallHit===!0:!1,wallVn:i?(i.wallSev??0)*25:0}),HS(_e,ca),Se.position.set(ca.x,ca.y,ca.z),Se.lookAt(_e.lx,_e.ly,_e.lz),Math.abs(Se.fov-_e.fov)>.001&&(Se.fov=_e.fov,Se.updateProjectionMatrix());for(const p of oh.steer)p.rotation.y=pe.steer*.42;for(const p of oh.spin)p.rotation.x+=r.spd/.45*t;if(ya){const p=(r.slip*180/Math.PI).toFixed(1),l=(r.yawRate*180/Math.PI).toFixed(0);fl.textContent=`FPS ${Bo.toFixed(0)} dt ${(t*1e3).toFixed(2)}ms steps ${n} a ${s.toFixed(2)} | spd ${r.spd.toFixed(1)} f ${r.fSpeed.toFixed(1)} l ${r.lSpeed.toFixed(1)} slip ${p} yaw ${l}/s ${r.surface}${r.drifting?" DRIFT":""} fov ${Se.fov.toFixed(1)} hold ${it.driftHold.toFixed(2)} exit ${it.exitT.toFixed(2)} ${r.driftPhase??"idle"} q ${(r.exitQuality??0).toFixed(2)} rb ${(r.rhythmBoost??0).toFixed(1)} trl ${vn.toFixed(2)} ch ${_e.camH.toFixed(2)} imp ${VS(_e).toFixed(2)} oob ${(r.oobMs/1e3).toFixed(1)}s`}}Yn.update(t),hl.attributes.position.needsUpdate=!0,us()}}requestAnimationFrame(tf);

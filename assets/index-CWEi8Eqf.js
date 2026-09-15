(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="170",Bd=0,ol=1,kd=2,ih=1,Hd=2,kn=3,vi=0,Fe=1,Mn=2,_i=0,Ls=1,cl=2,ll=3,ul=4,Gd=5,Bi=100,Vd=101,Wd=102,Xd=103,jd=104,Yd=200,qd=201,$d=202,Kd=203,Do=204,No=205,Zd=206,Qd=207,Jd=208,tf=209,ef=210,nf=211,sf=212,rf=213,af=214,Io=0,Po=1,Uo=2,Fs=3,Fo=4,zo=5,Oo=6,Bo=7,Cc=0,of=1,cf=2,Mi=0,lf=1,uf=2,hf=3,df=4,ff=5,pf=6,mf=7,sh=300,zs=301,Os=302,ko=303,Ho=304,La=306,Go=1e3,Yi=1001,Vo=1002,nn=1003,gf=1004,Dr=1005,Cn=1006,ka=1007,qi=1008,Xn=1009,rh=1010,ah=1011,_r=1012,Rc=1013,Qi=1014,Rn=1015,Sr=1016,Dc=1017,Nc=1018,Bs=1020,oh=35902,ch=1021,lh=1022,vn=1023,uh=1024,hh=1025,Cs=1026,ks=1027,Ic=1028,Pc=1029,dh=1030,Uc=1031,Fc=1033,oa=33776,ca=33777,la=33778,ua=33779,Wo=35840,Xo=35841,jo=35842,Yo=35843,qo=36196,$o=37492,Ko=37496,Zo=37808,Qo=37809,Jo=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,cc=37819,lc=37820,uc=37821,ha=36492,hc=36494,dc=36495,fh=36283,fc=36284,pc=36285,mc=36286,_f=3200,Mf=3201,ph=0,xf=1,ui="",ln="srgb",Vs="srgb-linear",Ca="linear",re="srgb",as=7680,hl=519,vf=512,Sf=513,yf=514,mh=515,Ef=516,Tf=517,wf=518,Af=519,dl=35044,fl="300 es",Hn=2e3,_a=2001;class Ws{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ha=Math.PI/180,gc=180/Math.PI;function yr(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[e&255]+Re[e>>8&255]+Re[e>>16&255]+Re[e>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[n&63|128]+Re[n>>8&255]+"-"+Re[n>>16&255]+Re[n>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Ve(e,t,n){return Math.max(t,Math.min(n,e))}function bf(e,t){return(e%t+t)%t}function Ga(e,t,n){return(1-n)*e+n*t}function Zs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function He(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,n=0){Kt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,n,i,s,r,a,o,c,u){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,c,u)}set(t,n,i,s,r,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],l=s[6],M=s[1],v=s[4],x=s[7],R=s[2],A=s[5],L=s[8];return r[0]=a*_+o*M+c*R,r[3]=a*p+o*v+c*A,r[6]=a*l+o*x+c*L,r[1]=u*_+h*M+d*R,r[4]=u*p+h*v+d*A,r[7]=u*l+h*x+d*L,r[2]=f*_+m*M+g*R,r[5]=f*p+m*v+g*A,r[8]=f*l+m*x+g*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return n*a*h-n*o*u-i*r*h+i*o*c+s*r*u-s*a*c}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],d=h*a-o*u,f=o*c-h*r,m=u*r-a*c,g=n*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*u-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=f*_,t[4]=(h*n-s*c)*_,t[5]=(s*r-o*n)*_,t[6]=m*_,t[7]=(i*c-u*n)*_,t[8]=(a*n-i*r)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(i*c,i*u,-i*(c*a+u*o)+a+t,-s*u,s*c,-s*(-u*a+c*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Va.makeScale(t,n)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,n){return this.premultiply(Va.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Ft;function gh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ma(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Lf(){const e=Ma("canvas");return e.style.display="block",e}const pl={};function or(e){e in pl||(pl[e]=!0,console.warn(e))}function Cf(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function Rf(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Df(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===re&&(e.r=Wn(e.r),e.g=Wn(e.g),e.b=Wn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===re&&(e.r=Rs(e.r),e.g=Rs(e.g),e.b=Rs(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===ui?Ca:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function Wn(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Rs(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}const ml=[.64,.33,.3,.6,.15,.06],gl=[.2126,.7152,.0722],_l=[.3127,.329],Ml=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Vs]:{primaries:ml,whitePoint:_l,transfer:Ca,toXYZ:Ml,fromXYZ:xl,luminanceCoefficients:gl,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:ml,whitePoint:_l,transfer:re,toXYZ:Ml,fromXYZ:xl,luminanceCoefficients:gl,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});let os;class Nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{os===void 0&&(os=Ma("canvas")),os.width=t.width,os.height=t.height;const i=os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ma("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wn(n[i]/255)*255):n[i]=Wn(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let If=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=yr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wa(s[a].image)):r.push(Wa(s[a]))}else r=Wa(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function Wa(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Nf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class ze extends Ws{constructor(t=ze.DEFAULT_IMAGE,n=ze.DEFAULT_MAPPING,i=Yi,s=Yi,r=Cn,a=qi,o=vn,c=Xn,u=ze.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=yr(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Go:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Go:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=sh;ze.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,n=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const c=t.elements,u=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],l=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+l-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,x=(m+1)/2,R=(l+1)/2,A=(h+f)/4,L=(d+_)/4,N=(g+p)/4;return v>x&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=L/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=N/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=L/r,s=N/r),this.set(i,s,r,n),this}let M=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((u+m+l-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uf extends Ws{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new ge(0,0,t,n),this.scissorTest=!1,this.viewport=new ge(0,0,t,n);const s={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new _h(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Uf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Mh extends ze{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ff extends ze{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let c=i[s+0],u=i[s+1],h=i[s+2],d=i[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[n+0]=c,t[n+1]=u,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(d!==_||c!==f||u!==m||h!==g){let p=1-o;const l=c*f+u*m+h*g+d*_,M=l>=0?1:-1,v=1-l*l;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,l*M);p=Math.sin(p*A)/R,o=Math.sin(o*A)/R}const x=o*M;if(c=c*p+f*x,u=u*p+m*x,h=h*p+g*x,d=d*p+_*x,p===1-o){const R=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=R,u*=R,h*=R,d*=R}}t[n]=c,t[n+1]=u,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,a){const o=i[s],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[n]=o*g+h*d+c*m-u*f,t[n+1]=c*g+h*f+u*d-o*m,t[n+2]=u*g+h*m+o*f-c*d,t[n+3]=h*g-o*d-c*f-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(s/2),d=o(r/2),f=c(i/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*d+u*m*g,this._y=u*m*d-f*h*g,this._z=u*h*g+f*m*d,this._w=u*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+u*m*g,this._y=u*m*d-f*h*g,this._z=u*h*g-f*m*d,this._w=u*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-u*m*g,this._y=u*m*d+f*h*g,this._z=u*h*g+f*m*d,this._w=u*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-u*m*g,this._y=u*m*d+f*h*g,this._z=u*h*g-f*m*d,this._w=u*h*d+f*m*g;break;case"YZX":this._x=f*h*d+u*m*g,this._y=u*m*d+f*h*g,this._z=u*h*g-f*m*d,this._w=u*h*d-f*m*g;break;case"XZY":this._x=f*h*d-u*m*g,this._y=u*m*d-f*h*g,this._z=u*h*g+f*m*d,this._w=u*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-u)*m,this._z=(a-s)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+u)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(r-u)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-i*u,this._z=r*h+a*u+i*c-s*o,this._w=a*h-i*o-s*c-r*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*s+n*this._y,this._z=m*r+n*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),d=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,n=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(vl.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*s-o*i),h=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+c*u+a*d-o*h,this.y=i+c*h+o*u-r*d,this.z=s+c*d+r*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,c=n.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xa.copy(this).projectOnVector(t),this.sub(Xa)}reflect(t){return this.sub(Xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new k,vl=new Kn;class ns{constructor(t=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(pn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(pn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=pn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Ir.subVectors(this.max,Qs),cs.subVectors(t.a,Qs),ls.subVectors(t.b,Qs),us.subVectors(t.c,Qs),ni.subVectors(ls,cs),ii.subVectors(us,ls),Li.subVectors(cs,us);let n=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Li.z,Li.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Li.z,0,-Li.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Li.y,Li.x,0];return!ja(n,cs,ls,us,Ir)||(n=[1,0,0,0,1,0,0,0,1],!ja(n,cs,ls,us,Ir))?!1:(Pr.crossVectors(ni,ii),n=[Pr.x,Pr.y,Pr.z],ja(n,cs,ls,us,Ir))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new k,new k,new k,new k,new k,new k,new k,new k],pn=new k,Nr=new ns,cs=new k,ls=new k,us=new k,ni=new k,ii=new k,Li=new k,Qs=new k,Ir=new k,Pr=new k,Ci=new k;function ja(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Ci.fromArray(e,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=t.dot(Ci),u=n.dot(Ci),h=i.dot(Ci);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const zf=new ns,Js=new k,Ya=new k;class Xs{constructor(t=new k,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):zf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Ya)),this.expandByPoint(Js.copy(t.center).sub(Ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new k,qa=new k,Ur=new k,si=new k,$a=new k,Fr=new k,Ka=new k;class xh{constructor(t=new k,n=new k(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Un.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,n),Un.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){qa.copy(t).add(n).multiplyScalar(.5),Ur.copy(n).sub(t).normalize(),si.copy(this.origin).sub(qa);const r=t.distanceTo(n)*.5,a=-this.direction.dot(Ur),o=si.dot(this.direction),c=-si.dot(Ur),u=si.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+u}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+u;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+u;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+u):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+u):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+u);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qa).addScaledVector(Ur,f),m}intersectSphere(t,n){Un.subVectors(t.center,this.origin);const i=Un.dot(this.direction),s=Un.dot(Un)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,n,i,s,r){$a.subVectors(n,t),Fr.subVectors(i,t),Ka.crossVectors($a,Fr);let a=this.direction.dot(Ka),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);const c=o*this.direction.dot(Fr.crossVectors(si,Fr));if(c<0)return null;const u=o*this.direction.dot($a.cross(si));if(u<0||c+u>a)return null;const h=-o*si.dot(Ka);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,n,i,s,r,a,o,c,u,h,d,f,m,g,_,p){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,c,u,h,d,f,m,g,_,p)}set(t,n,i,s,r,a,o,c,u,h,d,f,m,g,_,p){const l=this.elements;return l[0]=t,l[4]=n,l[8]=i,l[12]=s,l[1]=r,l[5]=a,l[9]=o,l[13]=c,l[2]=u,l[6]=h,l[10]=d,l[14]=f,l[3]=m,l[7]=g,l[11]=_,l[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*d,g=o*h,_=o*d;n[0]=c*h,n[4]=-c*d,n[8]=u,n[1]=m+g*u,n[5]=f-_*u,n[9]=-o*c,n[2]=_-f*u,n[6]=g+m*u,n[10]=a*c}else if(t.order==="YXZ"){const f=c*h,m=c*d,g=u*h,_=u*d;n[0]=f+_*o,n[4]=g*o-m,n[8]=a*u,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=m*o-g,n[6]=_+f*o,n[10]=a*c}else if(t.order==="ZXY"){const f=c*h,m=c*d,g=u*h,_=u*d;n[0]=f-_*o,n[4]=-a*d,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*h,n[9]=_-f*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const f=a*h,m=a*d,g=o*h,_=o*d;n[0]=c*h,n[4]=g*u-m,n[8]=f*u+_,n[1]=c*d,n[5]=_*u+f,n[9]=m*u-g,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*u,g=o*c,_=o*u;n[0]=c*h,n[4]=_-f*d,n[8]=g*d+m,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*d+g,n[10]=f-_*d}else if(t.order==="XZY"){const f=a*c,m=a*u,g=o*c,_=o*u;n[0]=c*h,n[4]=-d,n[8]=u*h,n[1]=f*d+_,n[5]=a*h,n[9]=m*d-g,n[2]=g*d-m,n[6]=o*h,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Of,t,Bf)}lookAt(t,n,i){const s=this.elements;return $e.subVectors(t,n),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ri.crossVectors(i,$e),ri.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ri.crossVectors(i,$e)),ri.normalize(),zr.crossVectors($e,ri),s[0]=ri.x,s[4]=zr.x,s[8]=$e.x,s[1]=ri.y,s[5]=zr.y,s[9]=$e.y,s[2]=ri.z,s[6]=zr.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],l=i[14],M=i[3],v=i[7],x=i[11],R=i[15],A=s[0],L=s[4],N=s[8],E=s[12],S=s[1],D=s[5],U=s[9],C=s[13],P=s[2],b=s[6],I=s[10],X=s[14],W=s[3],st=s[7],lt=s[11],vt=s[15];return r[0]=a*A+o*S+c*P+u*W,r[4]=a*L+o*D+c*b+u*st,r[8]=a*N+o*U+c*I+u*lt,r[12]=a*E+o*C+c*X+u*vt,r[1]=h*A+d*S+f*P+m*W,r[5]=h*L+d*D+f*b+m*st,r[9]=h*N+d*U+f*I+m*lt,r[13]=h*E+d*C+f*X+m*vt,r[2]=g*A+_*S+p*P+l*W,r[6]=g*L+_*D+p*b+l*st,r[10]=g*N+_*U+p*I+l*lt,r[14]=g*E+_*C+p*X+l*vt,r[3]=M*A+v*S+x*P+R*W,r[7]=M*L+v*D+x*b+R*st,r[11]=M*N+v*U+x*I+R*lt,r[15]=M*E+v*C+x*X+R*vt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],l=t[15];return g*(+r*c*d-s*u*d-r*o*f+i*u*f+s*o*m-i*c*m)+_*(+n*c*m-n*u*f+r*a*f-s*a*m+s*u*h-r*c*h)+p*(+n*u*d-n*o*m-r*a*d+i*a*m+r*o*h-i*u*h)+l*(-s*o*h-n*c*d+n*o*f+s*a*d-i*a*f+i*c*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],l=t[15],M=d*p*u-_*f*u+_*c*m-o*p*m-d*c*l+o*f*l,v=g*f*u-h*p*u-g*c*m+a*p*m+h*c*l-a*f*l,x=h*_*u-g*d*u+g*o*m-a*_*m-h*o*l+a*d*l,R=g*d*c-h*_*c-g*o*f+a*_*f+h*o*p-a*d*p,A=n*M+i*v+s*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return t[0]=M*L,t[1]=(_*f*r-d*p*r-_*s*m+i*p*m+d*s*l-i*f*l)*L,t[2]=(o*p*r-_*c*r+_*s*u-i*p*u-o*s*l+i*c*l)*L,t[3]=(d*c*r-o*f*r-d*s*u+i*f*u+o*s*m-i*c*m)*L,t[4]=v*L,t[5]=(h*p*r-g*f*r+g*s*m-n*p*m-h*s*l+n*f*l)*L,t[6]=(g*c*r-a*p*r-g*s*u+n*p*u+a*s*l-n*c*l)*L,t[7]=(a*f*r-h*c*r+h*s*u-n*f*u-a*s*m+n*c*m)*L,t[8]=x*L,t[9]=(g*d*r-h*_*r-g*i*m+n*_*m+h*i*l-n*d*l)*L,t[10]=(a*_*r-g*o*r+g*i*u-n*_*u-a*i*l+n*o*l)*L,t[11]=(h*o*r-a*d*r-h*i*u+n*d*u+a*i*m-n*o*m)*L,t[12]=R*L,t[13]=(h*_*s-g*d*s+g*i*f-n*_*f-h*i*p+n*d*p)*L,t[14]=(g*o*s-a*_*s-g*i*c+n*_*c+a*i*p-n*o*p)*L,t[15]=(a*d*s-h*o*s+h*i*c-n*d*c-a*i*f+n*o*f)*L,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,c=t.z,u=r*a,h=r*o;return this.set(u*a+i,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+i,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,c=n._w,u=r+r,h=a+a,d=o+o,f=r*u,m=r*h,g=r*d,_=a*h,p=a*d,l=o*d,M=c*u,v=c*h,x=c*d,R=i.x,A=i.y,L=i.z;return s[0]=(1-(_+l))*R,s[1]=(m+x)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(m-x)*A,s[5]=(1-(f+l))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+v)*L,s[9]=(p-M)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const a=hs.set(s[4],s[5],s[6]).length(),o=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const u=1/r,h=1/a,d=1/o;return mn.elements[0]*=u,mn.elements[1]*=u,mn.elements[2]*=u,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,n.setFromRotationMatrix(mn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,n,i,s,r,a,o=Hn){const c=this.elements,u=2*r/(n-t),h=2*r/(i-s),d=(n+t)/(n-t),f=(i+s)/(i-s);let m,g;if(o===Hn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===_a)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=Hn){const c=this.elements,u=1/(n-t),h=1/(i-s),d=1/(a-r),f=(n+t)*u,m=(i+s)*h;let g,_;if(o===Hn)g=(a+r)*d,_=-2*d;else if(o===_a)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const hs=new k,mn=new Zt,Of=new k(0,0,0),Bf=new k(1,1,1),ri=new k,zr=new k,$e=new k,Sl=new Zt,yl=new Kn;class je{constructor(t=0,n=0,i=0,s=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(n){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sl,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kf=0;const El=new k,ds=new Kn,Fn=new Zt,Or=new k,tr=new k,Hf=new k,Gf=new Kn,Tl=new k(1,0,0),wl=new k(0,1,0),Al=new k(0,0,1),bl={type:"added"},Vf={type:"removed"},fs={type:"childadded",child:null},Za={type:"childremoved",child:null};class Ce extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new k,n=new je,i=new Kn,s=new k(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ft}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ds.setFromAxisAngle(t,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,n){return ds.setFromAxisAngle(t,n),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Tl,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,n){return El.copy(t).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Tl,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Or.copy(t):Or.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(tr,Or,this.up):Fn.lookAt(Or,tr,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Fn),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bl),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Vf),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bl),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new k(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new k,zn=new k,Qa=new k,On=new k,ps=new k,ms=new k,Ll=new k,Ja=new k,to=new k,eo=new k,no=new ge,io=new ge,so=new ge;class xn{constructor(t=new k,n=new k,i=new k){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),gn.subVectors(t,n),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){gn.subVectors(s,n),zn.subVectors(i,n),Qa.subVectors(t,n);const a=gn.dot(gn),o=gn.dot(zn),c=gn.dot(Qa),u=zn.dot(zn),h=zn.dot(Qa),d=a*u-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(u*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,n,i,s,r,a,o,c){return this.getBarycoord(t,n,i,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(t,n,i,s,r,a){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,i),so.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(no,r.x),a.addScaledVector(io,r.y),a.addScaledVector(so,r.z),a}static isFrontFacing(t,n,i,s){return gn.subVectors(i,n),zn.subVectors(t,n),gn.cross(zn).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return xn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,i),ms.subVectors(r,i),Ja.subVectors(t,i);const c=ps.dot(Ja),u=ms.dot(Ja);if(c<=0&&u<=0)return n.copy(i);to.subVectors(t,s);const h=ps.dot(to),d=ms.dot(to);if(h>=0&&d<=h)return n.copy(s);const f=c*d-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(ps,a);eo.subVectors(t,r);const m=ps.dot(eo),g=ms.dot(eo);if(g>=0&&m<=g)return n.copy(r);const _=m*u-c*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(ms,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Ll.subVectors(r,s),o=(d-h)/(d-h+(m-g)),n.copy(s).addScaledVector(Ll,o);const l=1/(p+_+f);return a=_*l,o=f*l,n.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Br={h:0,s:0,l:0};function ro(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class At{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,jt.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=jt.workingColorSpace){if(t=bf(t,1),n=Ve(n,0,1),i=Ve(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=ro(a,r,t+1/3),this.g=ro(a,r,t),this.b=ro(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,n=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ln){const i=Sh[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return jt.fromWorkingColorSpace(De.copy(this),t),Math.round(Ve(De.r*255,0,255))*65536+Math.round(Ve(De.g*255,0,255))*256+Math.round(Ve(De.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=jt.workingColorSpace){jt.fromWorkingColorSpace(De.copy(this),n);const i=De.r,s=De.g,r=De.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,n=jt.workingColorSpace){return jt.fromWorkingColorSpace(De.copy(this),n),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=ln){jt.fromWorkingColorSpace(De.copy(this),t);const n=De.r,i=De.g,s=De.b;return t!==ln?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+n,ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ai),t.getHSL(Br);const i=Ga(ai.h,Br.h,n),s=Ga(ai.s,Br.s,n),r=Ga(ai.l,Br.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new At;At.NAMES=Sh;let Wf=0;class js extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=yr(),this.name="",this.blending=Ls,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=No,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Do&&(i.blendSrc=this.blendSrc),this.blendDst!==No&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(n){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Je extends js{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new k,kr=new Kt;class Oe{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=dl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)kr.fromBufferAttribute(this,n),kr.applyMatrix3(t),this.setXY(n,kr.x,kr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Se.fromBufferAttribute(this,n),Se.applyMatrix3(t),this.setXYZ(n,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Se.fromBufferAttribute(this,n),Se.applyMatrix4(t),this.setXYZ(n,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Se.fromBufferAttribute(this,n),Se.applyNormalMatrix(t),this.setXYZ(n,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Se.fromBufferAttribute(this,n),Se.transformDirection(t),this.setXYZ(n,Se.x,Se.y,Se.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Zs(n,this.array)),n}setX(t,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Zs(n,this.array)),n}setY(t,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Zs(n,this.array)),n}setZ(t,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Zs(n,this.array)),n}setW(t,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=He(n,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}}class yh extends Oe{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Eh extends Oe{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Te extends Oe{constructor(t,n,i){super(new Float32Array(t),n,i)}}let Xf=0;const cn=new Zt,ao=new Ce,gs=new k,Ke=new ns,er=new ns,be=new k;class Ye extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gh(t)?Eh:yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,n,i){return cn.makeTranslation(t,n,i),this.applyMatrix4(cn),this}scale(t,n,i){return cn.makeScale(t,n,i),this.applyMatrix4(cn),this}lookAt(t){return ao.lookAt(t),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(i,3))}else{for(let i=0,s=n.count;i<s;i++){const r=t[i];n.setXYZ(i,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Ke.min,er.min),Ke.expandByPoint(be),be.addVectors(Ke.max,er.max),Ke.expandByPoint(be)):(Ke.expandByPoint(er.min),Ke.expandByPoint(er.max))}Ke.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(be));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)be.fromBufferAttribute(o,u),c&&(gs.fromBufferAttribute(t,u),be.add(gs)),s=Math.max(s,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new k,c[N]=new k;const u=new k,h=new k,d=new k,f=new Kt,m=new Kt,g=new Kt,_=new k,p=new k;function l(N,E,S){u.fromBufferAttribute(i,N),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),h.sub(u),d.sub(u),m.sub(f),g.sub(f);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(D),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),o[N].add(_),o[E].add(_),o[S].add(_),c[N].add(p),c[E].add(p),c[S].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,E=M.length;N<E;++N){const S=M[N],D=S.start,U=S.count;for(let C=D,P=D+U;C<P;C+=3)l(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const v=new k,x=new k,R=new k,A=new k;function L(N){R.fromBufferAttribute(s,N),A.copy(R);const E=o[N];v.copy(E),v.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(A,E);const D=x.dot(c[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,D)}for(let N=0,E=M.length;N<E;++N){const S=M[N],D=S.start,U=S.count;for(let C=D,P=D+U;C<P;C+=3)L(t.getX(C+0)),L(t.getX(C+1)),L(t.getX(C+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oe(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,a=new k,o=new k,c=new k,u=new k,h=new k,d=new k;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),o.add(h),c.add(h),u.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)be.fromBufferAttribute(t,n),be.normalize(),t.setXYZ(n,be.x,be.y,be.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,d=o.normalized,f=new u.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let l=0;l<h;l++)f[g++]=u[m++]}return new Oe(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ye,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],u=t(c,i);n.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let h=0,d=u.length;h<d;h++){const f=u[h],m=t(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(n))}const r=t.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new Zt,Ri=new xh,Hr=new Xs,Rl=new k,Gr=new k,Vr=new k,Wr=new k,oo=new k,Xr=new k,Dl=new k,jr=new k;class me extends Ce{constructor(t=new Ye,n=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=o[c],d=r[c];h!==0&&(oo.fromBufferAttribute(d,t),a?Xr.addScaledVector(oo,h):Xr.addScaledVector(oo.sub(n),h))}n.add(Xr)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Hr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Hr,Rl)===null||Ri.origin.distanceToSquared(Rl)>(t.far-t.near)**2))&&(Cl.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Cl),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ri)))}_computeIntersections(t,n,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],l=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=M,R=v;x<R;x+=3){const A=o.getX(x),L=o.getX(x+1),N=o.getX(x+2);s=Yr(this,l,t,i,u,h,d,A,L,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,l=_;p<l;p+=3){const M=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);s=Yr(this,a,t,i,u,h,d,M,v,x),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],l=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=M,R=v;x<R;x+=3){const A=x,L=x+1,N=x+2;s=Yr(this,l,t,i,u,h,d,A,L,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,l=_;p<l;p+=3){const M=p,v=p+1,x=p+2;s=Yr(this,a,t,i,u,h,d,M,v,x),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function jf(e,t,n,i,s,r,a,o){let c;if(t.side===Fe?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===vi,o),c===null)return null;jr.copy(o),jr.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(jr);return u<n.near||u>n.far?null:{distance:u,point:jr.clone(),object:e}}function Yr(e,t,n,i,s,r,a,o,c,u){e.getVertexPosition(o,Gr),e.getVertexPosition(c,Vr),e.getVertexPosition(u,Wr);const h=jf(e,t,n,i,Gr,Vr,Wr,Dl);if(h){const d=new k;xn.getBarycoord(Dl,Gr,Vr,Wr,d),s&&(h.uv=xn.getInterpolatedAttribute(s,o,c,u,d,new Kt)),r&&(h.uv1=xn.getInterpolatedAttribute(r,o,c,u,d,new Kt)),a&&(h.normal=xn.getInterpolatedAttribute(a,o,c,u,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new k,materialIndex:0};xn.getNormal(Gr,Vr,Wr,f.normal),h.face=f,h.barycoord=d}return h}class ae extends Ye{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,n,t,a,r,0),g("z","y","x",1,-1,i,n,-t,a,r,1),g("x","z","y",1,1,t,i,n,s,a,2),g("x","z","y",1,-1,t,i,-n,s,a,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function g(_,p,l,M,v,x,R,A,L,N,E){const S=x/L,D=R/N,U=x/2,C=R/2,P=A/2,b=L+1,I=N+1;let X=0,W=0;const st=new k;for(let lt=0;lt<I;lt++){const vt=lt*D-C;for(let Lt=0;Lt<b;Lt++){const Qt=Lt*S-U;st[_]=Qt*M,st[p]=vt*v,st[l]=P,u.push(st.x,st.y,st.z),st[_]=0,st[p]=0,st[l]=A>0?1:-1,h.push(st.x,st.y,st.z),d.push(Lt/L),d.push(1-lt/N),X+=1}}for(let lt=0;lt<N;lt++)for(let vt=0;vt<L;vt++){const Lt=f+vt+b*lt,Qt=f+vt+b*(lt+1),Y=f+(vt+1)+b*(lt+1),et=f+(vt+1)+b*lt;c.push(Lt,Qt,et),c.push(Qt,Y,et),W+=6}o.addGroup(m,W,E),m+=W,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Pe(e){const t={};for(let n=0;n<e.length;n++){const i=Hs(e[n]);for(const s in i)t[s]=i[s]}return t}function Yf(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Th(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const qf={clone:Hs,merge:Pe};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends js{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wh extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Hn}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new k,Nl=new Kt,Il=new Kt;class un extends wh{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=gc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gc*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,n){return this.getViewBounds(t,Nl,Il),n.subVectors(Il,Nl)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,n-=a.offsetY*i/u,s*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,Ms=1;class Zf extends Ce{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(_s,Ms,t,n);s.layers=this.layers,this.add(s);const r=new un(_s,Ms,t,n);r.layers=this.layers,this.add(r);const a=new un(_s,Ms,t,n);a.layers=this.layers,this.add(a);const o=new un(_s,Ms,t,n);o.layers=this.layers,this.add(o);const c=new un(_s,Ms,t,n);c.layers=this.layers,this.add(c);const u=new un(_s,Ms,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,c]=n;for(const u of n)this.remove(u);if(t===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,u,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,r),t.setRenderTarget(i,1,s),t.render(n,a),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,c),t.setRenderTarget(i,4,s),t.render(n,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ah extends ze{constructor(t,n,i,s,r,a,o,c,u,h){t=t!==void 0?t:[],n=n!==void 0?n:zs,super(t,n,i,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qf extends Ji{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ah(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ae(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:_i});r.uniforms.tEquirect.value=n;const a=new me(s,r),o=n.minFilter;return n.minFilter===qi&&(n.minFilter=Cn),new Zf(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}}const co=new k,Jf=new k,tp=new Ft;class Ui{constructor(t=new k(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=co.subVectors(i,n).cross(Jf.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(co),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||tp.getNormalMatrix(t),s=this.coplanarPoint(co).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Xs,qr=new k;class zc{constructor(t=new Ui,n=new Ui,i=new Ui,s=new Ui,r=new Ui,a=new Ui){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Hn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],l=s[12],M=s[13],v=s[14],x=s[15];if(i[0].setComponents(c-r,f-u,p-m,x-l).normalize(),i[1].setComponents(c+r,f+u,p+m,x+l).normalize(),i[2].setComponents(c+a,f+h,p+g,x+M).normalize(),i[3].setComponents(c-a,f-h,p-g,x-M).normalize(),i[4].setComponents(c-o,f-d,p-_,x-v).normalize(),n===Hn)i[5].setComponents(c+o,f+d,p+_,x+v).normalize();else if(n===_a)i[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bh(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function ep(e){const t=new WeakMap;function n(o,c){const u=o.array,h=o.usage,d=u.byteLength,f=e.createBuffer();e.bindBuffer(c,f),e.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=e.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=e.SHORT;else if(u instanceof Uint32Array)m=e.UNSIGNED_INT;else if(u instanceof Int32Array)m=e.INT;else if(u instanceof Int8Array)m=e.BYTE;else if(u instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,u){const h=c.array,d=c.updateRanges;if(e.bindBuffer(u,o),d.length===0)e.bufferSubData(u,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];e.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:s,remove:r,update:a}}class Zn extends Ye{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,a=n/2,o=Math.floor(i),c=Math.floor(s),u=o+1,h=c+1,d=t/o,f=n/c,m=[],g=[],_=[],p=[];for(let l=0;l<h;l++){const M=l*f-a;for(let v=0;v<u;v++){const x=v*d-r;g.push(x,-M,0),_.push(0,0,1),p.push(v/o),p.push(1-l/c)}}for(let l=0;l<c;l++)for(let M=0;M<o;M++){const v=M+u*l,x=M+u*(l+1),R=M+1+u*(l+1),A=M+1+u*l;m.push(v,x,A),m.push(x,R,A)}this.setIndex(m),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.width,t.height,t.widthSegments,t.heightSegments)}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
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
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,tm=`struct PhysicalMaterial {
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
}`,em=`
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,c0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,M0=`#define LAMBERT
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
}`,x0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,y0=`#define NORMAL
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
}`,E0=`#define PHONG
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
}`,T0=`#define PHONG
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
}`,w0=`#define STANDARD
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
}`,A0=`#define STANDARD
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
}`,b0=`#define TOON
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
}`,L0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,R0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,N0=`uniform vec3 color;
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
}`,I0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:cp,aomap_pars_fragment:lp,batching_pars_vertex:up,batching_vertex:hp,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:vp,color_fragment:Sp,color_pars_fragment:yp,color_pars_vertex:Ep,color_vertex:Tp,common:wp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:bp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Cp,emissivemap_fragment:Rp,emissivemap_pars_fragment:Dp,colorspace_fragment:Np,colorspace_pars_fragment:Ip,envmap_fragment:Pp,envmap_common_pars_fragment:Up,envmap_pars_fragment:Fp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:qp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:kp,fog_fragment:Hp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Wp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:jp,lights_pars_begin:Yp,lights_toon_fragment:$p,lights_toon_pars_fragment:Kp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Qp,lights_physical_fragment:Jp,lights_physical_pars_fragment:tm,lights_fragment_begin:em,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:cm,map_pars_fragment:lm,map_particle_fragment:um,map_particle_pars_fragment:hm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:Mm,normal_fragment_begin:xm,normal_fragment_maps:vm,normal_pars_fragment:Sm,normal_pars_vertex:ym,normal_vertex:Em,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Lm,opaque_fragment:Cm,packing:Rm,premultiplied_alpha_fragment:Dm,project_vertex:Nm,dithering_fragment:Im,dithering_pars_fragment:Pm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Om,shadowmap_vertex:Bm,shadowmask_pars_fragment:km,skinbase_vertex:Hm,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:jm,tonemapping_fragment:Ym,tonemapping_pars_fragment:qm,transmission_fragment:$m,transmission_pars_fragment:Km,uv_pars_fragment:Zm,uv_pars_vertex:Qm,uv_vertex:Jm,worldpos_vertex:t0,background_vert:e0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:a0,depth_vert:o0,depth_frag:c0,distanceRGBA_vert:l0,distanceRGBA_frag:u0,equirect_vert:h0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:M0,meshmatcap_vert:x0,meshmatcap_frag:v0,meshnormal_vert:S0,meshnormal_frag:y0,meshphong_vert:E0,meshphong_frag:T0,meshphysical_vert:w0,meshphysical_frag:A0,meshtoon_vert:b0,meshtoon_frag:L0,points_vert:C0,points_frag:R0,shadow_vert:D0,shadow_frag:N0,sprite_vert:I0,sprite_frag:P0},at={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},bn={basic:{uniforms:Pe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Pe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Pe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Pe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Pe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Pe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Pe([at.points,at.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Pe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Pe([at.common,at.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Pe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Pe([at.sprite,at.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Pe([at.common,at.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Pe([at.lights,at.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};bn.physical={uniforms:Pe([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const $r={r:0,b:0,g:0},Ni=new je,U0=new Zt;function F0(e,t,n,i,s,r,a){const o=new At(0);let c=r===!0?0:1,u,h,d=null,f=0,m=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?n:t).get(v)),v}function _(M){let v=!1;const x=g(M);x===null?l(o,c):x&&x.isColor&&(l(x,1),v=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function p(M,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===La)?(h===void 0&&(h=new me(new ae(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Hs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(Ni)),h.material.toneMapped=jt.getTransfer(x.colorSpace)!==re,(d!==x||f!==x.version||m!==e.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=e.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new me(new Zn(2,2),new jn({name:"BackgroundMaterial",uniforms:Hs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=jt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,m=e.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function l(M,v){M.getRGB($r,Th(e)),i.buffers.color.setClear($r.r,$r.g,$r.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,l(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,l(o,c)},render:_,addToRenderList:p}}function z0(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(S,D,U,C,P){let b=!1;const I=d(C,U,D);r!==I&&(r=I,u(r.object)),b=m(S,C,U,P),b&&g(S,C,U,P),P!==null&&t.update(P,e.ELEMENT_ARRAY_BUFFER),(b||a)&&(a=!1,x(S,D,U,C),P!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function c(){return e.createVertexArray()}function u(S){return e.bindVertexArray(S)}function h(S){return e.deleteVertexArray(S)}function d(S,D,U){const C=U.wireframe===!0;let P=i[S.id];P===void 0&&(P={},i[S.id]=P);let b=P[D.id];b===void 0&&(b={},P[D.id]=b);let I=b[C];return I===void 0&&(I=f(c()),b[C]=I),I}function f(S){const D=[],U=[],C=[];for(let P=0;P<n;P++)D[P]=0,U[P]=0,C[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:C,object:S,attributes:{},index:null}}function m(S,D,U,C){const P=r.attributes,b=D.attributes;let I=0;const X=U.getAttributes();for(const W in X)if(X[W].location>=0){const lt=P[W];let vt=b[W];if(vt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),lt===void 0||lt.attribute!==vt||vt&&lt.data!==vt.data)return!0;I++}return r.attributesNum!==I||r.index!==C}function g(S,D,U,C){const P={},b=D.attributes;let I=0;const X=U.getAttributes();for(const W in X)if(X[W].location>=0){let lt=b[W];lt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor));const vt={};vt.attribute=lt,lt&&lt.data&&(vt.data=lt.data),P[W]=vt,I++}r.attributes=P,r.attributesNum=I,r.index=C}function _(){const S=r.newAttributes;for(let D=0,U=S.length;D<U;D++)S[D]=0}function p(S){l(S,0)}function l(S,D){const U=r.newAttributes,C=r.enabledAttributes,P=r.attributeDivisors;U[S]=1,C[S]===0&&(e.enableVertexAttribArray(S),C[S]=1),P[S]!==D&&(e.vertexAttribDivisor(S,D),P[S]=D)}function M(){const S=r.newAttributes,D=r.enabledAttributes;for(let U=0,C=D.length;U<C;U++)D[U]!==S[U]&&(e.disableVertexAttribArray(U),D[U]=0)}function v(S,D,U,C,P,b,I){I===!0?e.vertexAttribIPointer(S,D,U,P,b):e.vertexAttribPointer(S,D,U,C,P,b)}function x(S,D,U,C){_();const P=C.attributes,b=U.getAttributes(),I=D.defaultAttributeValues;for(const X in b){const W=b[X];if(W.location>=0){let st=P[X];if(st===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const lt=st.normalized,vt=st.itemSize,Lt=t.get(st);if(Lt===void 0)continue;const Qt=Lt.buffer,Y=Lt.type,et=Lt.bytesPerElement,mt=Y===e.INT||Y===e.UNSIGNED_INT||st.gpuType===Rc;if(st.isInterleavedBufferAttribute){const ot=st.data,bt=ot.stride,Dt=st.offset;if(ot.isInstancedInterleavedBuffer){for(let Pt=0;Pt<W.locationSize;Pt++)l(W.location+Pt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Pt=0;Pt<W.locationSize;Pt++)p(W.location+Pt);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let Pt=0;Pt<W.locationSize;Pt++)v(W.location+Pt,vt/W.locationSize,Y,lt,bt*et,(Dt+vt/W.locationSize*Pt)*et,mt)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)l(W.location+ot,st.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let ot=0;ot<W.locationSize;ot++)v(W.location+ot,vt/W.locationSize,Y,lt,vt*et,vt/W.locationSize*ot*et,mt)}}else if(I!==void 0){const lt=I[X];if(lt!==void 0)switch(lt.length){case 2:e.vertexAttrib2fv(W.location,lt);break;case 3:e.vertexAttrib3fv(W.location,lt);break;case 4:e.vertexAttrib4fv(W.location,lt);break;default:e.vertexAttrib1fv(W.location,lt)}}}}M()}function R(){N();for(const S in i){const D=i[S];for(const U in D){const C=D[U];for(const P in C)h(C[P].object),delete C[P];delete D[U]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const U in D){const C=D[U];for(const P in C)h(C[P].object),delete C[P];delete D[U]}delete i[S.id]}function L(S){for(const D in i){const U=i[D];if(U[S.id]===void 0)continue;const C=U[S.id];for(const P in C)h(C[P].object),delete C[P];delete U[S.id]}}function N(){E(),a=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function O0(e,t,n){let i;function s(u){i=u}function r(u,h){e.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,d){d!==0&&(e.drawArraysInstanced(i,u,h,d),n.update(h,i,d))}function o(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];n.update(m,i,1)}function c(u,h,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)a(u[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function B0(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==vn&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const N=L===Sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Xn&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Rn&&!N)}function c(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function k0(e){const t=this;let n=null,i=0,s=!1,r=!1;const a=new Ui,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,l=e.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):u();else{const M=r?0:i,v=M*4;let x=l.clippingState||null;c.value=x,x=h(g,f,v,m);for(let R=0;R!==v;++R)x[R]=n[R];l.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const l=m+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<l)&&(p=new Float32Array(l));for(let v=0,x=m;v!==_;++v,x+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(p,x),p[x+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function H0(e){let t=new WeakMap;function n(a,o){return o===ko?a.mapping=zs:o===Ho&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ko||o===Ho)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Qf(c.height);return u.fromEquirectangularTexture(e,a),t.set(a,u),a.addEventListener("dispose",s),n(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Lh extends wh{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,Pl=[.125,.215,.35,.446,.526,.582],ki=20,lo=new Lh,Ul=new At;let uo=null,ho=0,fo=0,po=!1;const Fi=(1+Math.sqrt(5))/2,xs=1/Fi,Fl=[new k(-Fi,xs,0),new k(Fi,xs,0),new k(-xs,0,Fi),new k(xs,0,Fi),new k(0,Fi,-xs),new k(0,Fi,xs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,ho,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===zs||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Sr,format:vn,colorSpace:Vs,depthBuffer:!1},s=Ol(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(r)),this._blurMaterial=V0(r,t,n)}return s}_compileMaterial(t){const n=new me(this._lodPlanes[0],t);this._renderer.compile(n,lo)}_sceneToCubeUV(t,n,i,s){const o=new un(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ul),h.toneMapping=Mi,h.autoClear=!1;const m=new Je({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new me(new ae,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Ul),_=!0);for(let l=0;l<6;l++){const M=l%3;M===0?(o.up.set(0,c[l],0),o.lookAt(u[l],0,0)):M===1?(o.up.set(0,0,c[l]),o.lookAt(0,u[l],0)):(o.up.set(0,c[l],0),o.lookAt(0,0,u[l]));const v=this._cubeSize;Kr(s,M*v,l>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===zs||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Kr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,lo)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fl[(s-r-1)%Fl.length];this._blur(t,r-1,r,a,o)}n.autoClear=i}_blur(t,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new me(this._lodPlanes[s],u),f=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ki-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):ki;p>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const l=[];let M=0;for(let L=0;L<ki;++L){const N=L/_,E=Math.exp(-N*N/2);l.push(E),L===0?M+=E:L<p&&(M+=2*E)}for(let L=0;L<l.length;L++)l[L]=l[L]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=l,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[s],R=3*x*(s>v-As?s-v+As:0),A=4*(this._cubeSize-x);Kr(n,R,A,3*x,2*x),c.setRenderTarget(n),c.render(d,lo)}}function G0(e){const t=[],n=[],i=[];let s=e;const r=e-As+1+Pl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);n.push(o);let c=1/o;a>e-As?c=Pl[a-e+As-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,l=1,M=new Float32Array(_*g*m),v=new Float32Array(p*g*m),x=new Float32Array(l*g*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,N=A>2?0:-1,E=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];M.set(E,_*g*A),v.set(f,p*g*A);const S=[A,A,A,A,A,A];x.set(S,l*g*A)}const R=new Ye;R.setAttribute("position",new Oe(M,_)),R.setAttribute("uv",new Oe(v,p)),R.setAttribute("faceIndex",new Oe(x,l)),t.push(R),s>As&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ol(e,t,n){const i=new Ji(e,t,n);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kr(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function V0(e,t,n){const i=new Float32Array(ki),s=new k(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Bl(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function kl(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function W0(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===ko||c===Ho,h=c===zs||c===Os;if(u||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new zl(e)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return u&&m&&m.height>0||h&&m&&s(m)?(n===null&&(n=new zl(e)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function X0(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&or("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function j0(e,t,n,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,l=_.length;p<l;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],e.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,l=_.length;p<l;p++)t.update(_[p],e.ARRAY_BUFFER)}}function u(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let v=0,x=M.length;v<x;v+=3){const R=M[v+0],A=M[v+1],L=M[v+2];f.push(R,A,A,L,L,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const R=v+0,A=v+1,L=v+2;f.push(R,A,A,L,L,R)}}else return;const p=new(gh(f)?Eh:yh)(f,1);p.version=_;const l=r.get(d);l&&t.remove(l),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Y0(e,t,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){e.drawElements(i,m,r,f*a),n.update(m,i,1)}function u(f,m,g){g!==0&&(e.drawElementsInstanced(i,m,r,f*a,g),n.update(m,i,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let l=0;l<g;l++)p+=m[l];n.update(p,i,1)}function d(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let l=0;l<f.length;l++)u(f[l]/a,m[l],_[l]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,g);let l=0;for(let M=0;M<g;M++)l+=m[M]*_[M];n.update(l,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function q0(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function $0(e,t,n){const i=new WeakMap,s=new ge;function r(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let S=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,l=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let R=o.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const L=new Float32Array(R*A*4*d),N=new Mh(L,R,A,d);N.type=Rn,N.needsUpdate=!0;const E=x*4;for(let D=0;D<d;D++){const U=l[D],C=M[D],P=v[D],b=R*A*4*D;for(let I=0;I<U.count;I++){const X=I*E;g===!0&&(s.fromBufferAttribute(U,I),L[b+X+0]=s.x,L[b+X+1]=s.y,L[b+X+2]=s.z,L[b+X+3]=0),_===!0&&(s.fromBufferAttribute(C,I),L[b+X+4]=s.x,L[b+X+5]=s.y,L[b+X+6]=s.z,L[b+X+7]=0),p===!0&&(s.fromBufferAttribute(P,I),L[b+X+8]=s.x,L[b+X+9]=s.y,L[b+X+10]=s.z,L[b+X+11]=P.itemSize===4?s.w:1)}}f={count:d,texture:N,size:new Kt(R,A)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<u.length;p++)g+=u[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(e,"morphTargetBaseInfluence",_),c.getUniforms().setValue(e,"morphTargetInfluences",u)}c.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function K0(e,t,n,i){let s=new WeakMap;function r(c){const u=i.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==u&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:a}}class Ch extends ze{constructor(t,n,i,s,r,a,o,c,u,h=Cs){if(h!==Cs&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cs&&(i=Qi),i===void 0&&h===ks&&(i=Bs),super(null,s,r,a,o,c,h,i,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Rh=new ze,Hl=new Ch(1,1),Dh=new Mh,Nh=new Ff,Ih=new Ah,Gl=[],Vl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),jl=new Float32Array(4);function Ys(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function we(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ae(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ra(e,t){let n=Vl[t];n===void 0&&(n=new Int32Array(t),Vl[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Z0(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Q0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(we(n,t))return;e.uniform2fv(this.addr,t),Ae(n,t)}}function J0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(we(n,t))return;e.uniform3fv(this.addr,t),Ae(n,t)}}function tg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(we(n,t))return;e.uniform4fv(this.addr,t),Ae(n,t)}}function eg(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(we(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ae(n,t)}else{if(we(n,i))return;jl.set(i),e.uniformMatrix2fv(this.addr,!1,jl),Ae(n,i)}}function ng(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(we(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ae(n,t)}else{if(we(n,i))return;Xl.set(i),e.uniformMatrix3fv(this.addr,!1,Xl),Ae(n,i)}}function ig(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(we(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ae(n,t)}else{if(we(n,i))return;Wl.set(i),e.uniformMatrix4fv(this.addr,!1,Wl),Ae(n,i)}}function sg(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function rg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(we(n,t))return;e.uniform2iv(this.addr,t),Ae(n,t)}}function ag(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(we(n,t))return;e.uniform3iv(this.addr,t),Ae(n,t)}}function og(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(we(n,t))return;e.uniform4iv(this.addr,t),Ae(n,t)}}function cg(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function lg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(we(n,t))return;e.uniform2uiv(this.addr,t),Ae(n,t)}}function ug(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(we(n,t))return;e.uniform3uiv(this.addr,t),Ae(n,t)}}function hg(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(we(n,t))return;e.uniform4uiv(this.addr,t),Ae(n,t)}}function dg(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Hl.compareFunction=mh,r=Hl):r=Rh,n.setTexture2D(t||r,s)}function fg(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Nh,s)}function pg(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Ih,s)}function mg(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Dh,s)}function gg(e){switch(e){case 5126:return Z0;case 35664:return Q0;case 35665:return J0;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return cg;case 36294:return lg;case 36295:return ug;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(e,t){e.uniform1fv(this.addr,t)}function Mg(e,t){const n=Ys(t,this.size,2);e.uniform2fv(this.addr,n)}function xg(e,t){const n=Ys(t,this.size,3);e.uniform3fv(this.addr,n)}function vg(e,t){const n=Ys(t,this.size,4);e.uniform4fv(this.addr,n)}function Sg(e,t){const n=Ys(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function yg(e,t){const n=Ys(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Eg(e,t){const n=Ys(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Tg(e,t){e.uniform1iv(this.addr,t)}function wg(e,t){e.uniform2iv(this.addr,t)}function Ag(e,t){e.uniform3iv(this.addr,t)}function bg(e,t){e.uniform4iv(this.addr,t)}function Lg(e,t){e.uniform1uiv(this.addr,t)}function Cg(e,t){e.uniform2uiv(this.addr,t)}function Rg(e,t){e.uniform3uiv(this.addr,t)}function Dg(e,t){e.uniform4uiv(this.addr,t)}function Ng(e,t,n){const i=this.cache,s=t.length,r=Ra(n,s);we(i,r)||(e.uniform1iv(this.addr,r),Ae(i,r));for(let a=0;a!==s;++a)n.setTexture2D(t[a]||Rh,r[a])}function Ig(e,t,n){const i=this.cache,s=t.length,r=Ra(n,s);we(i,r)||(e.uniform1iv(this.addr,r),Ae(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||Nh,r[a])}function Pg(e,t,n){const i=this.cache,s=t.length,r=Ra(n,s);we(i,r)||(e.uniform1iv(this.addr,r),Ae(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||Ih,r[a])}function Ug(e,t,n){const i=this.cache,s=t.length,r=Ra(n,s);we(i,r)||(e.uniform1iv(this.addr,r),Ae(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||Dh,r[a])}function Fg(e){switch(e){case 5126:return _g;case 35664:return Mg;case 35665:return xg;case 35666:return vg;case 35674:return Sg;case 35675:return yg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return bg;case 5125:return Lg;case 36294:return Cg;case 36295:return Rg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Ug}}class zg{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gg(n.type)}}class Og{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Fg(n.type)}}class Bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,n[o.id],i)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Yl(e,t){e.seq.push(t),e.map[t.id]=t}function kg(e,t,n){const i=e.name,s=i.length;for(mo.lastIndex=0;;){const r=mo.exec(i),a=mo.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){Yl(n,u===void 0?new zg(o,e,t):new Og(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Bg(o),Yl(n,d)),n=d}}}class da{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(n,s),a=t.getUniformLocation(n,r.name);kg(r,a,this)}}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in n&&i.push(a)}return i}}function ql(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const Hg=37297;let Gg=0;function Vg(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const $l=new Ft;function Wg(e){jt._getMatrix($l,jt.workingColorSpace,e);const t=`mat3( ${$l.elements.map(n=>n.toFixed(4))} )`;switch(jt.getTransfer(e)){case Ca:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Kl(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+Vg(e.getShaderSource(t),a)}else return s}function Xg(e,t){const n=Wg(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jg(e,t){let n;switch(t){case lf:n="Linear";break;case uf:n="Reinhard";break;case hf:n="Cineon";break;case df:n="ACESFilmic";break;case pf:n="AgX";break;case mf:n="Neutral";break;case ff:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zr=new k;function Yg(){jt.getLuminanceCoefficients(Zr);const e=Zr.x.toFixed(4),t=Zr.y.toFixed(4),n=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function $g(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Kg(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),a=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function cr(e){return e!==""}function Zl(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(e){return e.replace(Zg,Jg)}const Qg=new Map;function Jg(e,t){let n=zt[t];if(n===void 0){const i=Qg.get(t);if(i!==void 0)n=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _c(n)}const t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(e){return e.replace(t_,e_)}function e_(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function n_(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Hd?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function i_(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case zs:case Os:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s_(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function r_(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Cc:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case cf:t="ENVMAP_BLENDING_ADD";break}return t}function a_(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function o_(e,t,n,i){const s=e.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=n_(n),u=i_(n),h=s_(n),d=r_(n),f=a_(n),m=qg(n),g=$g(r),_=s.createProgram();let p,l,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(cr).join(`
`),l.length>0&&(l+=`
`)):(p=[tu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),l=[tu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?zt.tonemapping_pars_fragment:"",n.toneMapping!==Mi?jg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Xg("linearToOutputTexel",n.outputColorSpace),Yg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cr).join(`
`)),a=_c(a),a=Zl(a,n),a=Ql(a,n),o=_c(o),o=Zl(o,n),o=Ql(o,n),a=Jl(a),o=Jl(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",n.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const v=M+p+a,x=M+l+o,R=ql(s,s.VERTEX_SHADER,v),A=ql(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,A),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(D){if(e.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),C=s.getShaderInfoLog(R).trim(),P=s.getShaderInfoLog(A).trim();let b=!0,I=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(b=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,R,A);else{const X=Kl(s,R,"vertex"),W=Kl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+X+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(C===""||P==="")&&(I=!1);I&&(D.diagnostics={runnable:b,programLog:U,vertexShader:{log:C,prefix:p},fragmentShader:{log:P,prefix:l}})}s.deleteShader(R),s.deleteShader(A),N=new da(s,_),E=Kg(s,_)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Hg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let c_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new u_(t),n.set(t,i)),i}}class u_{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}}function h_(e,t,n,i,s,r,a){const o=new vh,c=new l_,u=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function p(E,S,D,U,C){const P=U.fog,b=C.geometry,I=E.isMeshStandardMaterial?U.environment:null,X=(E.isMeshStandardMaterial?n:t).get(E.envMap||I),W=X&&X.mapping===La?X.image.height:null,st=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const lt=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,vt=lt!==void 0?lt.length:0;let Lt=0;b.morphAttributes.position!==void 0&&(Lt=1),b.morphAttributes.normal!==void 0&&(Lt=2),b.morphAttributes.color!==void 0&&(Lt=3);let Qt,Y,et,mt;if(st){const Wt=bn[st];Qt=Wt.vertexShader,Y=Wt.fragmentShader}else Qt=E.vertexShader,Y=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),mt=c.getFragmentShaderID(E);const ot=e.getRenderTarget(),bt=e.state.buffers.depth.getReversed(),Dt=C.isInstancedMesh===!0,Pt=C.isBatchedMesh===!0,ce=!!E.map,Ht=!!E.matcap,Ct=!!X,B=!!E.aoMap,Be=!!E.lightMap,Ot=!!E.bumpMap,kt=!!E.normalMap,Tt=!!E.displacementMap,Yt=!!E.emissiveMap,Et=!!E.metalnessMap,w=!!E.roughnessMap,y=E.anisotropy>0,H=E.clearcoat>0,K=E.dispersion>0,Z=E.iridescence>0,q=E.sheen>0,gt=E.transmission>0,it=y&&!!E.anisotropyMap,ut=H&&!!E.clearcoatMap,Gt=H&&!!E.clearcoatNormalMap,tt=H&&!!E.clearcoatRoughnessMap,dt=Z&&!!E.iridescenceMap,wt=Z&&!!E.iridescenceThicknessMap,Rt=q&&!!E.sheenColorMap,ft=q&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,It=!!E.specularColorMap,ne=!!E.specularIntensityMap,F=gt&&!!E.transmissionMap,rt=gt&&!!E.thicknessMap,j=!!E.gradientMap,$=!!E.alphaMap,J=E.alphaTest>0,Q=!!E.alphaHash,St=!!E.extensions;let Bt=Mi;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Bt=e.toneMapping);const fe={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:Qt,fragmentShader:Y,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Pt,batchingColor:Pt&&C._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&C.instanceColor!==null,instancingMorph:Dt&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?e.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Vs,alphaToCoverage:!!E.alphaToCoverage,map:ce,matcap:Ht,envMap:Ct,envMapMode:Ct&&X.mapping,envMapCubeUVHeight:W,aoMap:B,lightMap:Be,bumpMap:Ot,normalMap:kt,displacementMap:f&&Tt,emissiveMap:Yt,normalMapObjectSpace:kt&&E.normalMapType===xf,normalMapTangentSpace:kt&&E.normalMapType===ph,metalnessMap:Et,roughnessMap:w,anisotropy:y,anisotropyMap:it,clearcoat:H,clearcoatMap:ut,clearcoatNormalMap:Gt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:Z,iridescenceMap:dt,iridescenceThicknessMap:wt,sheen:q,sheenColorMap:Rt,sheenRoughnessMap:ft,specularMap:Vt,specularColorMap:It,specularIntensityMap:ne,transmission:gt,transmissionMap:F,thicknessMap:rt,gradientMap:j,opaque:E.transparent===!1&&E.blending===Ls&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:J,alphaHash:Q,combine:E.combine,mapUv:ce&&_(E.map.channel),aoMapUv:B&&_(E.aoMap.channel),lightMapUv:Be&&_(E.lightMap.channel),bumpMapUv:Ot&&_(E.bumpMap.channel),normalMapUv:kt&&_(E.normalMap.channel),displacementMapUv:Tt&&_(E.displacementMap.channel),emissiveMapUv:Yt&&_(E.emissiveMap.channel),metalnessMapUv:Et&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:it&&_(E.anisotropyMap.channel),clearcoatMapUv:ut&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(E.sheenRoughnessMap.channel),specularMapUv:Vt&&_(E.specularMap.channel),specularColorMapUv:It&&_(E.specularColorMap.channel),specularIntensityMapUv:ne&&_(E.specularIntensityMap.channel),transmissionMapUv:F&&_(E.transmissionMap.channel),thicknessMapUv:rt&&_(E.thicknessMap.channel),alphaMapUv:$&&_(E.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(kt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!b.attributes.uv&&(ce||$),fog:!!P,useFog:E.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:bt,skinning:C.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Bt,decodeVideoTexture:ce&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:Yt&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mn,flipSided:E.side===Fe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:St&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&E.extensions.multiDraw===!0||Pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return fe.vertexUv1s=u.has(1),fe.vertexUv2s=u.has(2),fe.vertexUv3s=u.has(3),u.clear(),fe}function l(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(M(S,E),v(S,E),S.push(e.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function M(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const S=g[E.type];let D;if(S){const U=bn[S];D=qf.clone(U.uniforms)}else D=E.uniforms;return D}function R(E,S){let D;for(let U=0,C=h.length;U<C;U++){const P=h[U];if(P.cacheKey===S){D=P,++D.usedTimes;break}}return D===void 0&&(D=new o_(e,S,E,r),h.push(D)),D}function A(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function L(E){c.remove(E)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:l,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:L,programs:h,dispose:N}}function d_(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,c){e.get(a)[o]=c}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function f_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function eu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function nu(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(d,f,m,g,_,p){let l=e[t];return l===void 0?(l={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},e[t]=l):(l.id=d.id,l.object=d,l.geometry=f,l.material=m,l.groupOrder=g,l.renderOrder=d.renderOrder,l.z=_,l.group=p),t++,l}function o(d,f,m,g,_,p){const l=a(d,f,m,g,_,p);m.transmission>0?i.push(l):m.transparent===!0?s.push(l):n.push(l)}function c(d,f,m,g,_,p){const l=a(d,f,m,g,_,p);m.transmission>0?i.unshift(l):m.transparent===!0?s.unshift(l):n.unshift(l)}function u(d,f){n.length>1&&n.sort(d||f_),i.length>1&&i.sort(f||eu),s.length>1&&s.sort(f||eu)}function h(){for(let d=t,f=e.length;d<f;d++){const m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:u}}function p_(){let e=new WeakMap;function t(i,s){const r=e.get(i);let a;return r===void 0?(a=new nu,e.set(i,[a])):s>=r.length?(a=new nu,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function m_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new k,color:new At};break;case"SpotLight":n={position:new k,direction:new k,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new k,halfWidth:new k,halfHeight:new k};break}return e[t.id]=n,n}}}function g_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let __=0;function M_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function x_(e){const t=new m_,n=g_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const s=new k,r=new Zt,a=new Zt;function o(u){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,l=0,M=0,v=0,x=0,R=0,A=0,L=0;u.sort(M_);for(let E=0,S=u.length;E<S;E++){const D=u[E],U=D.color,C=D.intensity,P=D.distance,b=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=U.r*C,d+=U.g*C,f+=U.b*C;else if(D.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(D.sh.coefficients[I],C);L++}else if(D.isDirectionalLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,W=n.get(D);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=b,i.directionalShadowMatrix[m]=D.shadow.matrix,M++}i.directional[m]=I,m++}else if(D.isSpotLight){const I=t.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(U).multiplyScalar(C),I.distance=P,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,i.spot[_]=I;const X=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,X.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=X.matrix,D.castShadow){const W=n.get(D);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=b,x++}_++}else if(D.isRectAreaLight){const I=t.get(D);I.color.copy(U).multiplyScalar(C),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=I,p++}else if(D.isPointLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),I.distance=D.distance,I.decay=D.decay,D.castShadow){const X=D.shadow,W=n.get(D);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=b,i.pointShadowMatrix[g]=D.shadow.matrix,v++}i.point[g]=I,g++}else if(D.isHemisphereLight){const I=t.get(D);I.skyColor.copy(D.color).multiplyScalar(C),I.groundColor.copy(D.groundColor).multiplyScalar(C),i.hemi[l]=I,l++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==l||N.numDirectionalShadows!==M||N.numPointShadows!==v||N.numSpotShadows!==x||N.numSpotMaps!==R||N.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=l,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=l,N.numDirectionalShadows=M,N.numPointShadows=v,N.numSpotShadows=x,N.numSpotMaps=R,N.numLightProbes=L,i.version=__++)}function c(u,h){let d=0,f=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let l=0,M=u.length;l<M;l++){const v=u[l];if(v.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(v.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:i}}function iu(e){const t=new x_(e),n=[],i=[];function s(h){u.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){t.setup(n)}function c(h){t.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function v_(e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new iu(e),t.set(s,[o])):r>=a.length?(o=new iu(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class S_ extends js{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class y_ extends js{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function w_(e,t,n){let i=new zc;const s=new Kt,r=new Kt,a=new ge,o=new S_({depthPacking:Mf}),c=new y_,u={},h=n.maxTextureSize,d={[vi]:Fe,[Fe]:vi,[Mn]:Mn},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:E_,fragmentShader:T_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new me(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let l=this.type;this.render=function(A,L,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=e.getRenderTarget(),S=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),U=e.state;U.setBlending(_i),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const C=l!==kn&&this.type===kn,P=l===kn&&this.type!==kn;for(let b=0,I=A.length;b<I;b++){const X=A[b],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const st=W.getFrameExtents();if(s.multiply(st),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,W.mapSize.y=r.y)),W.map===null||C===!0||P===!0){const vt=this.type!==kn?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new Ji(s.x,s.y,vt),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}e.setRenderTarget(W.map),e.clear();const lt=W.getViewportCount();for(let vt=0;vt<lt;vt++){const Lt=W.getViewport(vt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),U.viewport(a),W.updateMatrices(X,vt),i=W.getFrustum(),x(L,N,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===kn&&M(W,N),W.needsUpdate=!1}l=this.type,p.needsUpdate=!1,e.setRenderTarget(E,S,D)};function M(A,L){const N=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ji(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(L,null,N,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(L,null,N,m,_,null)}function v(A,L,N,E){let S=null;const D=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?c:o,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const U=S.uuid,C=L.uuid;let P=u[U];P===void 0&&(P={},u[U]=P);let b=P[C];b===void 0&&(b=S.clone(),P[C]=b,L.addEventListener("dispose",R)),S=b}if(S.visible=L.visible,S.wireframe=L.wireframe,E===kn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:d[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=e.properties.get(S);U.light=N}return S}function x(A,L,N,E,S){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===kn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const C=t.update(A),P=A.material;if(Array.isArray(P)){const b=C.groups;for(let I=0,X=b.length;I<X;I++){const W=b[I],st=P[W.materialIndex];if(st&&st.visible){const lt=v(A,st,E,S);A.onBeforeShadow(e,A,L,N,C,lt,W),e.renderBufferDirect(N,null,C,lt,A,W),A.onAfterShadow(e,A,L,N,C,lt,W)}}}else if(P.visible){const b=v(A,P,E,S);A.onBeforeShadow(e,A,L,N,C,b,null),e.renderBufferDirect(N,null,C,b,A,null),A.onAfterShadow(e,A,L,N,C,b,null)}}const U=A.children;for(let C=0,P=U.length;C<P;C++)x(U[C],L,N,E,S)}function R(A){A.target.removeEventListener("dispose",R);for(const N in u){const E=u[N],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const A_={[Io]:Po,[Uo]:Oo,[Fo]:Bo,[Fs]:zo,[Po]:Io,[Oo]:Uo,[Bo]:Fo,[zo]:Fs};function b_(e,t){function n(){let F=!1;const rt=new ge;let j=null;const $=new ge(0,0,0,0);return{setMask:function(J){j!==J&&!F&&(e.colorMask(J,J,J,J),j=J)},setLocked:function(J){F=J},setClear:function(J,Q,St,Bt,fe){fe===!0&&(J*=Bt,Q*=Bt,St*=Bt),rt.set(J,Q,St,Bt),$.equals(rt)===!1&&(e.clearColor(J,Q,St,Bt),$.copy(rt))},reset:function(){F=!1,j=null,$.set(-1,0,0,0)}}}function i(){let F=!1,rt=!1,j=null,$=null,J=null;return{setReversed:function(Q){if(rt!==Q){const St=t.get("EXT_clip_control");rt?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT);const Bt=J;J=null,this.setClear(Bt)}rt=Q},getReversed:function(){return rt},setTest:function(Q){Q?ot(e.DEPTH_TEST):bt(e.DEPTH_TEST)},setMask:function(Q){j!==Q&&!F&&(e.depthMask(Q),j=Q)},setFunc:function(Q){if(rt&&(Q=A_[Q]),$!==Q){switch(Q){case Io:e.depthFunc(e.NEVER);break;case Po:e.depthFunc(e.ALWAYS);break;case Uo:e.depthFunc(e.LESS);break;case Fs:e.depthFunc(e.LEQUAL);break;case Fo:e.depthFunc(e.EQUAL);break;case zo:e.depthFunc(e.GEQUAL);break;case Oo:e.depthFunc(e.GREATER);break;case Bo:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}$=Q}},setLocked:function(Q){F=Q},setClear:function(Q){J!==Q&&(rt&&(Q=1-Q),e.clearDepth(Q),J=Q)},reset:function(){F=!1,j=null,$=null,J=null,rt=!1}}}function s(){let F=!1,rt=null,j=null,$=null,J=null,Q=null,St=null,Bt=null,fe=null;return{setTest:function(Wt){F||(Wt?ot(e.STENCIL_TEST):bt(e.STENCIL_TEST))},setMask:function(Wt){rt!==Wt&&!F&&(e.stencilMask(Wt),rt=Wt)},setFunc:function(Wt,ie,_e){(j!==Wt||$!==ie||J!==_e)&&(e.stencilFunc(Wt,ie,_e),j=Wt,$=ie,J=_e)},setOp:function(Wt,ie,_e){(Q!==Wt||St!==ie||Bt!==_e)&&(e.stencilOp(Wt,ie,_e),Q=Wt,St=ie,Bt=_e)},setLocked:function(Wt){F=Wt},setClear:function(Wt){fe!==Wt&&(e.clearStencil(Wt),fe=Wt)},reset:function(){F=!1,rt=null,j=null,$=null,J=null,Q=null,St=null,Bt=null,fe=null}}}const r=new n,a=new i,o=new s,c=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,l=null,M=null,v=null,x=null,R=null,A=null,L=new At(0,0,0),N=0,E=!1,S=null,D=null,U=null,C=null,P=null;const b=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=X>=2);let st=null,lt={};const vt=e.getParameter(e.SCISSOR_BOX),Lt=e.getParameter(e.VIEWPORT),Qt=new ge().fromArray(vt),Y=new ge().fromArray(Lt);function et(F,rt,j,$){const J=new Uint8Array(4),Q=e.createTexture();e.bindTexture(F,Q),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let St=0;St<j;St++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D(rt,0,e.RGBA,1,1,$,0,e.RGBA,e.UNSIGNED_BYTE,J):e.texImage2D(rt+St,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,J);return Q}const mt={};mt[e.TEXTURE_2D]=et(e.TEXTURE_2D,e.TEXTURE_2D,1),mt[e.TEXTURE_CUBE_MAP]=et(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[e.TEXTURE_2D_ARRAY]=et(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),mt[e.TEXTURE_3D]=et(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(e.DEPTH_TEST),a.setFunc(Fs),Ot(!1),kt(ol),ot(e.CULL_FACE),B(_i);function ot(F){h[F]!==!0&&(e.enable(F),h[F]=!0)}function bt(F){h[F]!==!1&&(e.disable(F),h[F]=!1)}function Dt(F,rt){return d[F]!==rt?(e.bindFramebuffer(F,rt),d[F]=rt,F===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=rt),F===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=rt),!0):!1}function Pt(F,rt){let j=m,$=!1;if(F){j=f.get(rt),j===void 0&&(j=[],f.set(rt,j));const J=F.textures;if(j.length!==J.length||j[0]!==e.COLOR_ATTACHMENT0){for(let Q=0,St=J.length;Q<St;Q++)j[Q]=e.COLOR_ATTACHMENT0+Q;j.length=J.length,$=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,$=!0);$&&e.drawBuffers(j)}function ce(F){return g!==F?(e.useProgram(F),g=F,!0):!1}const Ht={[Bi]:e.FUNC_ADD,[Vd]:e.FUNC_SUBTRACT,[Wd]:e.FUNC_REVERSE_SUBTRACT};Ht[Xd]=e.MIN,Ht[jd]=e.MAX;const Ct={[Yd]:e.ZERO,[qd]:e.ONE,[$d]:e.SRC_COLOR,[Do]:e.SRC_ALPHA,[ef]:e.SRC_ALPHA_SATURATE,[Jd]:e.DST_COLOR,[Zd]:e.DST_ALPHA,[Kd]:e.ONE_MINUS_SRC_COLOR,[No]:e.ONE_MINUS_SRC_ALPHA,[tf]:e.ONE_MINUS_DST_COLOR,[Qd]:e.ONE_MINUS_DST_ALPHA,[nf]:e.CONSTANT_COLOR,[sf]:e.ONE_MINUS_CONSTANT_COLOR,[rf]:e.CONSTANT_ALPHA,[af]:e.ONE_MINUS_CONSTANT_ALPHA};function B(F,rt,j,$,J,Q,St,Bt,fe,Wt){if(F===_i){_===!0&&(bt(e.BLEND),_=!1);return}if(_===!1&&(ot(e.BLEND),_=!0),F!==Gd){if(F!==p||Wt!==E){if((l!==Bi||x!==Bi)&&(e.blendEquation(e.FUNC_ADD),l=Bi,x=Bi),Wt)switch(F){case Ls:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case cl:e.blendFunc(e.ONE,e.ONE);break;case ll:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ul:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ls:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case cl:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case ll:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ul:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,v=null,R=null,A=null,L.set(0,0,0),N=0,p=F,E=Wt}return}J=J||rt,Q=Q||j,St=St||$,(rt!==l||J!==x)&&(e.blendEquationSeparate(Ht[rt],Ht[J]),l=rt,x=J),(j!==M||$!==v||Q!==R||St!==A)&&(e.blendFuncSeparate(Ct[j],Ct[$],Ct[Q],Ct[St]),M=j,v=$,R=Q,A=St),(Bt.equals(L)===!1||fe!==N)&&(e.blendColor(Bt.r,Bt.g,Bt.b,fe),L.copy(Bt),N=fe),p=F,E=!1}function Be(F,rt){F.side===Mn?bt(e.CULL_FACE):ot(e.CULL_FACE);let j=F.side===Fe;rt&&(j=!j),Ot(j),F.blending===Ls&&F.transparent===!1?B(_i):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const $=F.stencilWrite;o.setTest($),$&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Yt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ot(e.SAMPLE_ALPHA_TO_COVERAGE):bt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(F){S!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),S=F)}function kt(F){F!==Bd?(ot(e.CULL_FACE),F!==D&&(F===ol?e.cullFace(e.BACK):F===kd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):bt(e.CULL_FACE),D=F}function Tt(F){F!==U&&(I&&e.lineWidth(F),U=F)}function Yt(F,rt,j){F?(ot(e.POLYGON_OFFSET_FILL),(C!==rt||P!==j)&&(e.polygonOffset(rt,j),C=rt,P=j)):bt(e.POLYGON_OFFSET_FILL)}function Et(F){F?ot(e.SCISSOR_TEST):bt(e.SCISSOR_TEST)}function w(F){F===void 0&&(F=e.TEXTURE0+b-1),st!==F&&(e.activeTexture(F),st=F)}function y(F,rt,j){j===void 0&&(st===null?j=e.TEXTURE0+b-1:j=st);let $=lt[j];$===void 0&&($={type:void 0,texture:void 0},lt[j]=$),($.type!==F||$.texture!==rt)&&(st!==j&&(e.activeTexture(j),st=j),e.bindTexture(F,rt||mt[F]),$.type=F,$.texture=rt)}function H(){const F=lt[st];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{e.compressedTexImage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{e.compressedTexImage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{e.texSubImage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{e.texSubImage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(){try{e.texStorage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{e.texStorage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{e.texImage2D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{e.texImage3D.apply(e,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(F){Qt.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),Qt.copy(F))}function ft(F){Y.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function Vt(F,rt){let j=u.get(rt);j===void 0&&(j=new WeakMap,u.set(rt,j));let $=j.get(F);$===void 0&&($=e.getUniformBlockIndex(rt,F.name),j.set(F,$))}function It(F,rt){const $=u.get(rt).get(F);c.get(rt)!==$&&(e.uniformBlockBinding(rt,$,F.__bindingPointIndex),c.set(rt,$))}function ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},st=null,lt={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,l=null,M=null,v=null,x=null,R=null,A=null,L=new At(0,0,0),N=0,E=!1,S=null,D=null,U=null,C=null,P=null,Qt.set(0,0,e.canvas.width,e.canvas.height),Y.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:bt,bindFramebuffer:Dt,drawBuffers:Pt,useProgram:ce,setBlending:B,setMaterial:Be,setFlipSided:Ot,setCullFace:kt,setLineWidth:Tt,setPolygonOffset:Yt,setScissorTest:Et,activeTexture:w,bindTexture:y,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:dt,texImage3D:wt,updateUBOMapping:Vt,uniformBlockBinding:It,texStorage2D:Gt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:gt,compressedTexSubImage2D:it,compressedTexSubImage3D:ut,scissor:Rt,viewport:ft,reset:ne}}function su(e,t,n,i){const s=L_(i);switch(n){case ch:return e*t;case uh:return e*t;case hh:return e*t*2;case Ic:return e*t/s.components*s.byteLength;case Pc:return e*t/s.components*s.byteLength;case dh:return e*t*2/s.components*s.byteLength;case Uc:return e*t*2/s.components*s.byteLength;case lh:return e*t*3/s.components*s.byteLength;case vn:return e*t*4/s.components*s.byteLength;case Fc:return e*t*4/s.components*s.byteLength;case oa:case ca:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case la:case ua:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xo:case Yo:return Math.max(e,16)*Math.max(t,8)/4;case Wo:case jo:return Math.max(e,8)*Math.max(t,8)/2;case qo:case $o:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ko:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case tc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case nc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case oc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case cc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case uc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ha:case hc:case dc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case fh:case fc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case pc:case mc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function L_(e){switch(e){case Xn:case rh:return{byteLength:1,components:1};case _r:case ah:case Sr:return{byteLength:2,components:1};case Dc:case Nc:return{byteLength:2,components:4};case Qi:case Rc:case Rn:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function C_(e,t,n,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Kt,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return m?new OffscreenCanvas(w,y):Ma("canvas")}function _(w,y,H){let K=1;const Z=Et(w);if((Z.width>H||Z.height>H)&&(K=H/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(K*Z.width),gt=Math.floor(K*Z.height);d===void 0&&(d=g(q,gt));const it=y?g(q,gt):d;return it.width=q,it.height=gt,it.getContext("2d").drawImage(w,0,0,q,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+gt+")."),it}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function p(w){return w.generateMipmaps}function l(w){e.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(w,y,H,K,Z=!1){if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=y;if(y===e.RED&&(H===e.FLOAT&&(q=e.R32F),H===e.HALF_FLOAT&&(q=e.R16F),H===e.UNSIGNED_BYTE&&(q=e.R8)),y===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(q=e.R8UI),H===e.UNSIGNED_SHORT&&(q=e.R16UI),H===e.UNSIGNED_INT&&(q=e.R32UI),H===e.BYTE&&(q=e.R8I),H===e.SHORT&&(q=e.R16I),H===e.INT&&(q=e.R32I)),y===e.RG&&(H===e.FLOAT&&(q=e.RG32F),H===e.HALF_FLOAT&&(q=e.RG16F),H===e.UNSIGNED_BYTE&&(q=e.RG8)),y===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(q=e.RG8UI),H===e.UNSIGNED_SHORT&&(q=e.RG16UI),H===e.UNSIGNED_INT&&(q=e.RG32UI),H===e.BYTE&&(q=e.RG8I),H===e.SHORT&&(q=e.RG16I),H===e.INT&&(q=e.RG32I)),y===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(q=e.RGB8UI),H===e.UNSIGNED_SHORT&&(q=e.RGB16UI),H===e.UNSIGNED_INT&&(q=e.RGB32UI),H===e.BYTE&&(q=e.RGB8I),H===e.SHORT&&(q=e.RGB16I),H===e.INT&&(q=e.RGB32I)),y===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),H===e.UNSIGNED_INT&&(q=e.RGBA32UI),H===e.BYTE&&(q=e.RGBA8I),H===e.SHORT&&(q=e.RGBA16I),H===e.INT&&(q=e.RGBA32I)),y===e.RGB&&H===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),y===e.RGBA){const gt=Z?Ca:jt.getTransfer(K);H===e.FLOAT&&(q=e.RGBA32F),H===e.HALF_FLOAT&&(q=e.RGBA16F),H===e.UNSIGNED_BYTE&&(q=gt===re?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(w,y){let H;return w?y===null||y===Qi||y===Bs?H=e.DEPTH24_STENCIL8:y===Rn?H=e.DEPTH32F_STENCIL8:y===_r&&(H=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qi||y===Bs?H=e.DEPTH_COMPONENT24:y===Rn?H=e.DEPTH_COMPONENT32F:y===_r&&(H=e.DEPTH_COMPONENT16),H}function R(w,y){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==Cn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){const y=w.target;y.removeEventListener("dispose",A),N(y),y.isVideoTexture&&h.delete(y)}function L(w){const y=w.target;y.removeEventListener("dispose",L),S(y)}function N(w){const y=i.get(w);if(y.__webglInit===void 0)return;const H=w.source,K=f.get(H);if(K){const Z=K[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(w),Object.keys(K).length===0&&f.delete(H)}i.remove(w)}function E(w){const y=i.get(w);e.deleteTexture(y.__webglTexture);const H=w.source,K=f.get(H);delete K[y.__cacheKey],a.memory.textures--}function S(w){const y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Z=0;Z<y.__webglFramebuffer[K].length;Z++)e.deleteFramebuffer(y.__webglFramebuffer[K][Z]);else e.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)e.deleteFramebuffer(y.__webglFramebuffer[K]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=w.textures;for(let K=0,Z=H.length;K<Z;K++){const q=i.get(H[K]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(H[K])}i.remove(w)}let D=0;function U(){D=0}function C(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function P(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function b(w,y){const H=i.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,w,y);return}}n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+y)}function I(w,y){const H=i.get(w);if(w.version>0&&H.__version!==w.version){Y(H,w,y);return}n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+y)}function X(w,y){const H=i.get(w);if(w.version>0&&H.__version!==w.version){Y(H,w,y);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+y)}function W(w,y){const H=i.get(w);if(w.version>0&&H.__version!==w.version){et(H,w,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+y)}const st={[Go]:e.REPEAT,[Yi]:e.CLAMP_TO_EDGE,[Vo]:e.MIRRORED_REPEAT},lt={[nn]:e.NEAREST,[gf]:e.NEAREST_MIPMAP_NEAREST,[Dr]:e.NEAREST_MIPMAP_LINEAR,[Cn]:e.LINEAR,[ka]:e.LINEAR_MIPMAP_NEAREST,[qi]:e.LINEAR_MIPMAP_LINEAR},vt={[vf]:e.NEVER,[Af]:e.ALWAYS,[Sf]:e.LESS,[mh]:e.LEQUAL,[yf]:e.EQUAL,[wf]:e.GEQUAL,[Ef]:e.GREATER,[Tf]:e.NOTEQUAL};function Lt(w,y){if(y.type===Rn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Cn||y.magFilter===ka||y.magFilter===Dr||y.magFilter===qi||y.minFilter===Cn||y.minFilter===ka||y.minFilter===Dr||y.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,st[y.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,st[y.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,st[y.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,lt[y.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==Dr&&y.minFilter!==qi||y.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qt(w,y){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",A));const K=y.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const q=P(y);if(q!==w.__cacheKey){Z[q]===void 0&&(Z[q]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[q].usedTimes++;const gt=Z[w.__cacheKey];gt!==void 0&&(Z[w.__cacheKey].usedTimes--,gt.usedTimes===0&&E(y)),w.__cacheKey=q,w.__webglTexture=Z[q].texture}return H}function Y(w,y,H){let K=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=e.TEXTURE_3D);const Z=Qt(w,y),q=y.source;n.bindTexture(K,w.__webglTexture,e.TEXTURE0+H);const gt=i.get(q);if(q.version!==gt.__version||Z===!0){n.activeTexture(e.TEXTURE0+H);const it=jt.getPrimaries(jt.workingColorSpace),ut=y.colorSpace===ui?null:jt.getPrimaries(y.colorSpace),Gt=y.colorSpace===ui||it===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let tt=_(y.image,!1,s.maxTextureSize);tt=Yt(y,tt);const dt=r.convert(y.format,y.colorSpace),wt=r.convert(y.type);let Rt=v(y.internalFormat,dt,wt,y.colorSpace,y.isVideoTexture);Lt(K,y);let ft;const Vt=y.mipmaps,It=y.isVideoTexture!==!0,ne=gt.__version===void 0||Z===!0,F=q.dataReady,rt=R(y,tt);if(y.isDepthTexture)Rt=x(y.format===ks,y.type),ne&&(It?n.texStorage2D(e.TEXTURE_2D,1,Rt,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,Rt,tt.width,tt.height,0,dt,wt,null));else if(y.isDataTexture)if(Vt.length>0){It&&ne&&n.texStorage2D(e.TEXTURE_2D,rt,Rt,Vt[0].width,Vt[0].height);for(let j=0,$=Vt.length;j<$;j++)ft=Vt[j],It?F&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ft.width,ft.height,dt,wt,ft.data):n.texImage2D(e.TEXTURE_2D,j,Rt,ft.width,ft.height,0,dt,wt,ft.data);y.generateMipmaps=!1}else It?(ne&&n.texStorage2D(e.TEXTURE_2D,rt,Rt,tt.width,tt.height),F&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,tt.width,tt.height,dt,wt,tt.data)):n.texImage2D(e.TEXTURE_2D,0,Rt,tt.width,tt.height,0,dt,wt,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){It&&ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,rt,Rt,Vt[0].width,Vt[0].height,tt.depth);for(let j=0,$=Vt.length;j<$;j++)if(ft=Vt[j],y.format!==vn)if(dt!==null)if(It){if(F)if(y.layerUpdates.size>0){const J=su(ft.width,ft.height,y.format,y.type);for(const Q of y.layerUpdates){const St=ft.data.subarray(Q*J/ft.data.BYTES_PER_ELEMENT,(Q+1)*J/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,Q,ft.width,ft.height,1,dt,St)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,tt.depth,dt,ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,Rt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?F&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,tt.depth,dt,wt,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,Rt,ft.width,ft.height,tt.depth,0,dt,wt,ft.data)}else{It&&ne&&n.texStorage2D(e.TEXTURE_2D,rt,Rt,Vt[0].width,Vt[0].height);for(let j=0,$=Vt.length;j<$;j++)ft=Vt[j],y.format!==vn?dt!==null?It?F&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,ft.width,ft.height,dt,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,j,Rt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?F&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ft.width,ft.height,dt,wt,ft.data):n.texImage2D(e.TEXTURE_2D,j,Rt,ft.width,ft.height,0,dt,wt,ft.data)}else if(y.isDataArrayTexture)if(It){if(ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,rt,Rt,tt.width,tt.height,tt.depth),F)if(y.layerUpdates.size>0){const j=su(tt.width,tt.height,y.format,y.type);for(const $ of y.layerUpdates){const J=tt.data.subarray($*j/tt.data.BYTES_PER_ELEMENT,($+1)*j/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,dt,wt,J)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,wt,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,dt,wt,tt.data);else if(y.isData3DTexture)It?(ne&&n.texStorage3D(e.TEXTURE_3D,rt,Rt,tt.width,tt.height,tt.depth),F&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,wt,tt.data)):n.texImage3D(e.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,dt,wt,tt.data);else if(y.isFramebufferTexture){if(ne)if(It)n.texStorage2D(e.TEXTURE_2D,rt,Rt,tt.width,tt.height);else{let j=tt.width,$=tt.height;for(let J=0;J<rt;J++)n.texImage2D(e.TEXTURE_2D,J,Rt,j,$,0,dt,wt,null),j>>=1,$>>=1}}else if(Vt.length>0){if(It&&ne){const j=Et(Vt[0]);n.texStorage2D(e.TEXTURE_2D,rt,Rt,j.width,j.height)}for(let j=0,$=Vt.length;j<$;j++)ft=Vt[j],It?F&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,dt,wt,ft):n.texImage2D(e.TEXTURE_2D,j,Rt,dt,wt,ft);y.generateMipmaps=!1}else if(It){if(ne){const j=Et(tt);n.texStorage2D(e.TEXTURE_2D,rt,Rt,j.width,j.height)}F&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,wt,tt)}else n.texImage2D(e.TEXTURE_2D,0,Rt,dt,wt,tt);p(y)&&l(K),gt.__version=q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function et(w,y,H){if(y.image.length!==6)return;const K=Qt(w,y),Z=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+H);const q=i.get(Z);if(Z.version!==q.__version||K===!0){n.activeTexture(e.TEXTURE0+H);const gt=jt.getPrimaries(jt.workingColorSpace),it=y.colorSpace===ui?null:jt.getPrimaries(y.colorSpace),ut=y.colorSpace===ui||gt===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Gt=y.isCompressedTexture||y.image[0].isCompressedTexture,tt=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!Gt&&!tt?dt[$]=_(y.image[$],!0,s.maxCubemapSize):dt[$]=tt?y.image[$].image:y.image[$],dt[$]=Yt(y,dt[$]);const wt=dt[0],Rt=r.convert(y.format,y.colorSpace),ft=r.convert(y.type),Vt=v(y.internalFormat,Rt,ft,y.colorSpace),It=y.isVideoTexture!==!0,ne=q.__version===void 0||K===!0,F=Z.dataReady;let rt=R(y,wt);Lt(e.TEXTURE_CUBE_MAP,y);let j;if(Gt){It&&ne&&n.texStorage2D(e.TEXTURE_CUBE_MAP,rt,Vt,wt.width,wt.height);for(let $=0;$<6;$++){j=dt[$].mipmaps;for(let J=0;J<j.length;J++){const Q=j[J];y.format!==vn?Rt!==null?It?F&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,J,0,0,Q.width,Q.height,Rt,Q.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,J,Vt,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,J,0,0,Q.width,Q.height,Rt,ft,Q.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,J,Vt,Q.width,Q.height,0,Rt,ft,Q.data)}}}else{if(j=y.mipmaps,It&&ne){j.length>0&&rt++;const $=Et(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,rt,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){It?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,Rt,ft,dt[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,dt[$].width,dt[$].height,0,Rt,ft,dt[$].data);for(let J=0;J<j.length;J++){const St=j[J].image[$].image;It?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,J+1,0,0,St.width,St.height,Rt,ft,St.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,J+1,Vt,St.width,St.height,0,Rt,ft,St.data)}}else{It?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Rt,ft,dt[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Rt,ft,dt[$]);for(let J=0;J<j.length;J++){const Q=j[J];It?F&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,J+1,0,0,Rt,ft,Q.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,J+1,Vt,Rt,ft,Q.image[$])}}}p(y)&&l(e.TEXTURE_CUBE_MAP),q.__version=Z.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function mt(w,y,H,K,Z,q){const gt=r.convert(H.format,H.colorSpace),it=r.convert(H.type),ut=v(H.internalFormat,gt,it,H.colorSpace),Gt=i.get(y),tt=i.get(H);if(tt.__renderTarget=y,!Gt.__hasExternalTextures){const dt=Math.max(1,y.width>>q),wt=Math.max(1,y.height>>q);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,q,ut,dt,wt,y.depth,0,gt,it,null):n.texImage2D(Z,q,ut,dt,wt,0,gt,it,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),kt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,Z,tt.__webglTexture,0,Ot(y)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,Z,tt.__webglTexture,q),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(w,y,H){if(e.bindRenderbuffer(e.RENDERBUFFER,w),y.depthBuffer){const K=y.depthTexture,Z=K&&K.isDepthTexture?K.type:null,q=x(y.stencilBuffer,Z),gt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=Ot(y);kt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it,q,y.width,y.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,it,q,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,q,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,gt,e.RENDERBUFFER,w)}else{const K=y.textures;for(let Z=0;Z<K.length;Z++){const q=K[Z],gt=r.convert(q.format,q.colorSpace),it=r.convert(q.type),ut=v(q.internalFormat,gt,it,q.colorSpace),Gt=Ot(y);H&&kt(y)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Gt,ut,y.width,y.height):kt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Gt,ut,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,ut,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),b(y.depthTexture,0);const Z=K.__webglTexture,q=Ot(y);if(y.depthTexture.format===Cs)kt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0);else if(y.depthTexture.format===ks)kt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Dt(w){const y=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=K}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");bt(y.__webglFramebuffer,w)}else if(H){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=e.createRenderbuffer(),ot(y.__webglDepthbuffer[K],w,!1);else{const Z=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,q)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),ot(y.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,Z)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pt(w,y,H){const K=i.get(w);y!==void 0&&mt(K.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&Dt(w)}function ce(w){const y=w.texture,H=i.get(w),K=i.get(y);w.addEventListener("dispose",L);const Z=w.textures,q=w.isWebGLCubeRenderTarget===!0,gt=Z.length>1;if(gt||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=y.version,a.memory.textures++),q){H.__webglFramebuffer=[];for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[it]=[];for(let ut=0;ut<y.mipmaps.length;ut++)H.__webglFramebuffer[it][ut]=e.createFramebuffer()}else H.__webglFramebuffer[it]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let it=0;it<y.mipmaps.length;it++)H.__webglFramebuffer[it]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(gt)for(let it=0,ut=Z.length;it<ut;it++){const Gt=i.get(Z[it]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=e.createTexture(),a.memory.textures++)}if(w.samples>0&&kt(w)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let it=0;it<Z.length;it++){const ut=Z[it];H.__webglColorRenderbuffer[it]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[it]);const Gt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),dt=v(ut.internalFormat,Gt,tt,ut.colorSpace,w.isXRRenderTarget===!0),wt=Ot(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,wt,dt,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,H.__webglColorRenderbuffer[it])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),ot(H.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,y);for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)mt(H.__webglFramebuffer[it][ut],w,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut);else mt(H.__webglFramebuffer[it],w,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(y)&&l(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(gt){for(let it=0,ut=Z.length;it<ut;it++){const Gt=Z[it],tt=i.get(Gt);n.bindTexture(e.TEXTURE_2D,tt.__webglTexture),Lt(e.TEXTURE_2D,Gt),mt(H.__webglFramebuffer,w,Gt,e.COLOR_ATTACHMENT0+it,e.TEXTURE_2D,0),p(Gt)&&l(e.TEXTURE_2D)}n.unbindTexture()}else{let it=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(it=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,K.__webglTexture),Lt(it,y),y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)mt(H.__webglFramebuffer[ut],w,y,e.COLOR_ATTACHMENT0,it,ut);else mt(H.__webglFramebuffer,w,y,e.COLOR_ATTACHMENT0,it,0);p(y)&&l(it),n.unbindTexture()}w.depthBuffer&&Dt(w)}function Ht(w){const y=w.textures;for(let H=0,K=y.length;H<K;H++){const Z=y[H];if(p(Z)){const q=M(w),gt=i.get(Z).__webglTexture;n.bindTexture(q,gt),l(q),n.unbindTexture()}}}const Ct=[],B=[];function Be(w){if(w.samples>0){if(kt(w)===!1){const y=w.textures,H=w.width,K=w.height;let Z=e.COLOR_BUFFER_BIT;const q=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,gt=i.get(w),it=y.length>1;if(it)for(let ut=0;ut<y.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<y.length;ut++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),it){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const Gt=i.get(y[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Gt,0)}e.blitFramebuffer(0,0,H,K,0,0,H,K,Z,e.NEAREST),c===!0&&(Ct.length=0,B.length=0,Ct.push(e.COLOR_ATTACHMENT0+ut),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ct.push(q),B.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,B)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),it)for(let ut=0;ut<y.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const Gt=i.get(y[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,Gt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Ot(w){return Math.min(s.maxSamples,w.samples)}function kt(w){const y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Tt(w){const y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Yt(w,y){const H=w.colorSpace,K=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Vs&&H!==ui&&(jt.getTransfer(H)===re?(K!==vn||Z!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function Et(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=C,this.resetTextureUnits=U,this.setTexture2D=b,this.setTexture2DArray=I,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=kt}function R_(e,t){function n(i,s=ui){let r;const a=jt.getTransfer(s);if(i===Xn)return e.UNSIGNED_BYTE;if(i===Dc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===oh)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===rh)return e.BYTE;if(i===ah)return e.SHORT;if(i===_r)return e.UNSIGNED_SHORT;if(i===Rc)return e.INT;if(i===Qi)return e.UNSIGNED_INT;if(i===Rn)return e.FLOAT;if(i===Sr)return e.HALF_FLOAT;if(i===ch)return e.ALPHA;if(i===lh)return e.RGB;if(i===vn)return e.RGBA;if(i===uh)return e.LUMINANCE;if(i===hh)return e.LUMINANCE_ALPHA;if(i===Cs)return e.DEPTH_COMPONENT;if(i===ks)return e.DEPTH_STENCIL;if(i===Ic)return e.RED;if(i===Pc)return e.RED_INTEGER;if(i===dh)return e.RG;if(i===Uc)return e.RG_INTEGER;if(i===Fc)return e.RGBA_INTEGER;if(i===oa||i===ca||i===la||i===ua)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wo||i===Xo||i===jo||i===Yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qo||i===$o||i===Ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qo||i===$o)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ko)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zo||i===Qo||i===Jo||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc||i===cc||i===lc||i===uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ec)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ic)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ac)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ha||i===hc||i===dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ha)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fh||i===fc||i===pc||i===mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class D_ extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pi extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const p=n.getJointPose(_,i),l=this._getHandJoint(u,_);p!==null&&(l.matrix.fromArray(p.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=p.radius),l.visible=p!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new pi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
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

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new jn({vertexShader:I_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new me(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F_ extends Ws{constructor(t,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,d=null,f=null,m=null,g=null;const _=new U_,p=n.getContextAttributes();let l=null,M=null;const v=[],x=[],R=new Kt;let A=null;const L=new un;L.viewport=new ge;const N=new un;N.viewport=new ge;const E=[L,N],S=new D_;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=v[Y];return et===void 0&&(et=new go,v[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=v[Y];return et===void 0&&(et=new go,v[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=v[Y];return et===void 0&&(et=new go,v[Y]=et),et.getHandSpace()};function C(Y){const et=x.indexOf(Y.inputSource);if(et===-1)return;const mt=v[et];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,u||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function P(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",b);for(let Y=0;Y<v.length;Y++){const et=x[Y];et!==null&&(x[Y]=null,v[Y].disconnect(et))}D=null,U=null,_.reset(),t.setRenderTarget(l),m=null,f=null,d=null,s=null,M=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(l=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",P),s.addEventListener("inputsourceschange",b),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,n,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Ji(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,mt=null,ot=null;p.depth&&(ot=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,et=p.stencil?ks:Cs,mt=p.stencil?Bs:Qi);const bt={colorFormat:n.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(s,n),f=d.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ji(f.textureWidth,f.textureHeight,{format:vn,type:Xn,depthTexture:new Ch(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function b(Y){for(let et=0;et<Y.removed.length;et++){const mt=Y.removed[et],ot=x.indexOf(mt);ot>=0&&(x[ot]=null,v[ot].disconnect(mt))}for(let et=0;et<Y.added.length;et++){const mt=Y.added[et];let ot=x.indexOf(mt);if(ot===-1){for(let Dt=0;Dt<v.length;Dt++)if(Dt>=x.length){x.push(mt),ot=Dt;break}else if(x[Dt]===null){x[Dt]=mt,ot=Dt;break}if(ot===-1)break}const bt=v[ot];bt&&bt.connect(mt)}}const I=new k,X=new k;function W(Y,et,mt){I.setFromMatrixPosition(et.matrixWorld),X.setFromMatrixPosition(mt.matrixWorld);const ot=I.distanceTo(X),bt=et.projectionMatrix.elements,Dt=mt.projectionMatrix.elements,Pt=bt[14]/(bt[10]-1),ce=bt[14]/(bt[10]+1),Ht=(bt[9]+1)/bt[5],Ct=(bt[9]-1)/bt[5],B=(bt[8]-1)/bt[0],Be=(Dt[8]+1)/Dt[0],Ot=Pt*B,kt=Pt*Be,Tt=ot/(-B+Be),Yt=Tt*-B;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Yt),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=Pt+Tt,w=ce+Tt,y=Ot-Yt,H=kt+(ot-Yt),K=Ht*ce/w*Et,Z=Ct*ce/w*Et;Y.projectionMatrix.makePerspective(y,H,K,Z,Et,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,mt=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),S.near=N.near=L.near=et,S.far=N.far=L.far=mt,(D!==S.near||U!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,U=S.far),L.layers.mask=Y.layers.mask|2,N.layers.mask=Y.layers.mask|4,S.layers.mask=L.layers.mask|N.layers.mask;const ot=Y.parent,bt=S.cameras;st(S,ot);for(let Dt=0;Dt<bt.length;Dt++)st(bt[Dt],ot);bt.length===2?W(S,L,N):S.projectionMatrix.copy(L.projectionMatrix),lt(Y,S,ot)};function lt(Y,et,mt){mt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=gc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let vt=null;function Lt(Y,et){if(h=et.getViewerPose(u||a),g=et,h!==null){const mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let ot=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let Dt=0;Dt<mt.length;Dt++){const Pt=mt[Dt];let ce=null;if(m!==null)ce=m.getViewport(Pt);else{const Ct=d.getViewSubImage(f,Pt);ce=Ct.viewport,Dt===0&&(t.setRenderTargetTextures(M,Ct.colorTexture,f.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(M))}let Ht=E[Dt];Ht===void 0&&(Ht=new un,Ht.layers.enable(Dt),Ht.viewport=new ge,E[Dt]=Ht),Ht.matrix.fromArray(Pt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Pt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ce.x,ce.y,ce.width,ce.height),Dt===0&&(S.matrix.copy(Ht.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(Ht)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Dt=d.getDepthInformation(mt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let mt=0;mt<v.length;mt++){const ot=x[mt],bt=v[mt];ot!==null&&bt!==void 0&&bt.update(ot,et,u||a)}vt&&vt(Y,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const Qt=new bh;Qt.setAnimationLoop(Lt),this.setAnimationLoop=function(Y){vt=Y},this.dispose=function(){}}}const Ii=new je,z_=new Zt;function O_(e,t){function n(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function i(p,l){l.color.getRGB(p.fogColor.value,Th(e)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function s(p,l,M,v,x){l.isMeshBasicMaterial||l.isMeshLambertMaterial?r(p,l):l.isMeshToonMaterial?(r(p,l),d(p,l)):l.isMeshPhongMaterial?(r(p,l),h(p,l)):l.isMeshStandardMaterial?(r(p,l),f(p,l),l.isMeshPhysicalMaterial&&m(p,l,x)):l.isMeshMatcapMaterial?(r(p,l),g(p,l)):l.isMeshDepthMaterial?r(p,l):l.isMeshDistanceMaterial?(r(p,l),_(p,l)):l.isMeshNormalMaterial?r(p,l):l.isLineBasicMaterial?(a(p,l),l.isLineDashedMaterial&&o(p,l)):l.isPointsMaterial?c(p,l,M,v):l.isSpriteMaterial?u(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,n(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,n(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,n(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===Fe&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,n(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===Fe&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,n(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,n(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,n(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const M=t.get(l),v=M.envMap,x=M.envMapRotation;v&&(p.envMap.value=v,Ii.copy(x),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),p.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(Ii)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,n(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,n(l.aoMap,p.aoMapTransform))}function a(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,n(l.map,p.mapTransform))}function o(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function c(p,l,M,v){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*M,p.scale.value=v*.5,l.map&&(p.map.value=l.map,n(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,n(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function u(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,n(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,n(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function h(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function d(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function f(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,n(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,n(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function m(p,l,M){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,n(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,n(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,n(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,n(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,n(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Fe&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,n(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,n(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,n(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,n(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,n(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,n(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,n(l.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,l){l.matcap&&(p.matcap.value=l.matcap)}function _(p,l){const M=t.get(l).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function B_(e,t,n,i){let s={},r={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const x=v.program;i.uniformBlockBinding(M,x)}function u(M,v){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",p));const R=v.program;i.updateUBOMapping(M,R);const A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){const v=d();M.__bindingPointIndex=v;const x=e.createBuffer(),R=M.__size,A=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,R,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,x),x}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],x=M.uniforms,R=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let A=0,L=x.length;A<L;A++){const N=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=N.length;E<S;E++){const D=N[E];if(m(D,A,E,R)===!0){const U=D.__offset,C=Array.isArray(D.value)?D.value:[D.value];let P=0;for(let b=0;b<C.length;b++){const I=C[b],X=_(I);typeof I=="number"||typeof I=="boolean"?(D.__data[0]=I,e.bufferSubData(e.UNIFORM_BUFFER,U+P,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=0,D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=0,D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=0):(I.toArray(D.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,U,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(M,v,x,R){const A=M.value,L=v+"_"+x;if(R[L]===void 0)return typeof A=="number"||typeof A=="boolean"?R[L]=A:R[L]=A.clone(),!0;{const N=R[L];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[L]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(M){const v=M.uniforms;let x=0;const R=16;for(let L=0,N=v.length;L<N;L++){const E=Array.isArray(v[L])?v[L]:[v[L]];for(let S=0,D=E.length;S<D;S++){const U=E[S],C=Array.isArray(U.value)?U.value:[U.value];for(let P=0,b=C.length;P<b;P++){const I=C[P],X=_(I),W=x%R,st=W%X.boundary,lt=W+st;x+=st,lt!==0&&R-lt<X.storage&&(x+=R-lt),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=X.storage}}}const A=x%R;return A>0&&(x+=R-A),M.__size=x,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function l(){for(const M in s)e.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:u,dispose:l}}class k_{constructor(t={}){const{canvas:n=Lf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,l=null;const M=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let R=!1,A=0,L=0,N=null,E=-1,S=null;const D=new ge,U=new ge;let C=null;const P=new At(0);let b=0,I=n.width,X=n.height,W=1,st=null,lt=null;const vt=new ge(0,0,I,X),Lt=new ge(0,0,I,X);let Qt=!1;const Y=new zc;let et=!1,mt=!1;const ot=new Zt,bt=new Zt,Dt=new k,Pt=new ge,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Ct(){return N===null?W:1}let B=i;function Be(T,z){return n.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lc}`),n.addEventListener("webglcontextlost",$,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",Q,!1),B===null){const z="webgl2";if(B=Be(z,T),B===null)throw Be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ot,kt,Tt,Yt,Et,w,y,H,K,Z,q,gt,it,ut,Gt,tt,dt,wt,Rt,ft,Vt,It,ne,F;function rt(){Ot=new X0(B),Ot.init(),It=new R_(B,Ot),kt=new B0(B,Ot,t,It),Tt=new b_(B,Ot),kt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),Yt=new q0(B),Et=new d_,w=new C_(B,Ot,Tt,Et,kt,It,Yt),y=new H0(x),H=new W0(x),K=new ep(B),ne=new z0(B,K),Z=new j0(B,K,Yt,ne),q=new K0(B,Z,K,Yt),Rt=new $0(B,kt,w),tt=new k0(Et),gt=new h_(x,y,H,Ot,kt,ne,tt),it=new O_(x,Et),ut=new p_,Gt=new v_(Ot),wt=new F0(x,y,H,Tt,q,m,c),dt=new w_(x,q,kt),F=new B_(B,Yt,kt,Tt),ft=new O0(B,Ot,Yt),Vt=new Y0(B,Ot,Yt),Yt.programs=gt.programs,x.capabilities=kt,x.extensions=Ot,x.properties=Et,x.renderLists=ut,x.shadowMap=dt,x.state=Tt,x.info=Yt}rt();const j=new F_(x,B);this.xr=j,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(I,X,!1))},this.getSize=function(T){return T.set(I,X)},this.setSize=function(T,z,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,X=z,n.width=Math.floor(T*W),n.height=Math.floor(z*W),G===!0&&(n.style.width=T+"px",n.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(I*W,X*W).floor()},this.setDrawingBufferSize=function(T,z,G){I=T,X=z,W=G,n.width=Math.floor(T*G),n.height=Math.floor(z*G),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,z,G,V){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,z,G,V),Tt.viewport(D.copy(vt).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Lt)},this.setScissor=function(T,z,G,V){T.isVector4?Lt.set(T.x,T.y,T.z,T.w):Lt.set(T,z,G,V),Tt.scissor(U.copy(Lt).multiplyScalar(W).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(T){Tt.setScissorTest(Qt=T)},this.setOpaqueSort=function(T){st=T},this.setTransparentSort=function(T){lt=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(T=!0,z=!0,G=!0){let V=0;if(T){let O=!1;if(N!==null){const nt=N.texture.format;O=nt===Fc||nt===Uc||nt===Pc}if(O){const nt=N.texture.type,ct=nt===Xn||nt===Qi||nt===_r||nt===Bs||nt===Dc||nt===Nc,_t=wt.getClearColor(),Mt=wt.getClearAlpha(),Nt=_t.r,Ut=_t.g,xt=_t.b;ct?(g[0]=Nt,g[1]=Ut,g[2]=xt,g[3]=Mt,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Nt,_[1]=Ut,_[2]=xt,_[3]=Mt,B.clearBufferiv(B.COLOR,0,_))}else V|=B.COLOR_BUFFER_BIT}z&&(V|=B.DEPTH_BUFFER_BIT),G&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",Q,!1),ut.dispose(),Gt.dispose(),Et.dispose(),y.dispose(),H.dispose(),q.dispose(),ne.dispose(),F.dispose(),gt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Tn),j.removeEventListener("sessionend",Jn),rn.stop()};function $(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=Yt.autoReset,z=dt.enabled,G=dt.autoUpdate,V=dt.needsUpdate,O=dt.type;rt(),Yt.autoReset=T,dt.enabled=z,dt.autoUpdate=G,dt.needsUpdate=V,dt.type=O}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function St(T){const z=T.target;z.removeEventListener("dispose",St),Bt(z)}function Bt(T){fe(T),Et.remove(T)}function fe(T){const z=Et.get(T).programs;z!==void 0&&(z.forEach(function(G){gt.releaseProgram(G)}),T.isShaderMaterial&&gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,G,V,O,nt){z===null&&(z=ce);const ct=O.isMesh&&O.matrixWorld.determinant()<0,_t=an(T,z,G,V,O);Tt.setMaterial(V,ct);let Mt=G.index,Nt=1;if(V.wireframe===!0){if(Mt=Z.getWireframeAttribute(G),Mt===void 0)return;Nt=2}const Ut=G.drawRange,xt=G.attributes.position;let qt=Ut.start*Nt,oe=(Ut.start+Ut.count)*Nt;nt!==null&&(qt=Math.max(qt,nt.start*Nt),oe=Math.min(oe,(nt.start+nt.count)*Nt)),Mt!==null?(qt=Math.max(qt,0),oe=Math.min(oe,Mt.count)):xt!=null&&(qt=Math.max(qt,0),oe=Math.min(oe,xt.count));const le=oe-qt;if(le<0||le===1/0)return;ne.setup(O,V,_t,G,Mt);let ke,te=ft;if(Mt!==null&&(ke=K.get(Mt),te=Vt,te.setIndex(ke)),O.isMesh)V.wireframe===!0?(Tt.setLineWidth(V.wireframeLinewidth*Ct()),te.setMode(B.LINES)):te.setMode(B.TRIANGLES);else if(O.isLine){let yt=V.linewidth;yt===void 0&&(yt=1),Tt.setLineWidth(yt*Ct()),O.isLineSegments?te.setMode(B.LINES):O.isLineLoop?te.setMode(B.LINE_LOOP):te.setMode(B.LINE_STRIP)}else O.isPoints?te.setMode(B.POINTS):O.isSprite&&te.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)te.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))te.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const yt=O._multiDrawStarts,In=O._multiDrawCounts,ee=O._multiDrawCount,fn=Mt?K.get(Mt).bytesPerElement:1,rs=Et.get(V).currentProgram.getUniforms();for(let qe=0;qe<ee;qe++)rs.setValue(B,"_gl_DrawID",qe),te.render(yt[qe]/fn,In[qe])}else if(O.isInstancedMesh)te.renderInstances(qt,le,O.count);else if(G.isInstancedBufferGeometry){const yt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,In=Math.min(G.instanceCount,yt);te.renderInstances(qt,le,In)}else te.render(qt,le)};function Wt(T,z,G){T.transparent===!0&&T.side===Mn&&T.forceSinglePass===!1?(T.side=Fe,T.needsUpdate=!0,Nn(T,z,G),T.side=vi,T.needsUpdate=!0,Nn(T,z,G),T.side=Mn):Nn(T,z,G)}this.compile=function(T,z,G=null){G===null&&(G=T),l=Gt.get(G),l.init(z),v.push(l),G.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(l.pushLight(O),O.castShadow&&l.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(l.pushLight(O),O.castShadow&&l.pushShadow(O))}),l.setupLights();const V=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const nt=O.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const _t=nt[ct];Wt(_t,G,O),V.add(_t)}else Wt(nt,G,O),V.add(nt)}),v.pop(),l=null,V},this.compileAsync=function(T,z,G=null){const V=this.compile(T,z,G);return new Promise(O=>{function nt(){if(V.forEach(function(ct){Et.get(ct).currentProgram.isReady()&&V.delete(ct)}),V.size===0){O(T);return}setTimeout(nt,10)}Ot.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ie=null;function _e(T){ie&&ie(T)}function Tn(){rn.stop()}function Jn(){rn.start()}const rn=new bh;rn.setAnimationLoop(_e),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(T){ie=T,j.setAnimationLoop(T),T===null?rn.stop():rn.start()},j.addEventListener("sessionstart",Tn),j.addEventListener("sessionend",Jn),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,N),l=Gt.get(T,v.length),l.init(z),v.push(l),bt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,mt),p=ut.get(T,M.length),p.init(),M.push(p),j.enabled===!0&&j.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&Ti(nt,z,-1/0,x.sortObjects)}Ti(T,z,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(st,lt),Ht=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ht&&wt.addToRenderList(p,T),this.info.render.frame++,et===!0&&tt.beginShadows();const G=l.state.shadowsArray;dt.render(G,T,z),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,O=p.transmissive;if(l.setupLights(),z.isArrayCamera){const nt=z.cameras;if(O.length>0)for(let ct=0,_t=nt.length;ct<_t;ct++){const Mt=nt[ct];Cr(V,O,T,Mt)}Ht&&wt.render(T);for(let ct=0,_t=nt.length;ct<_t;ct++){const Mt=nt[ct];wn(p,T,Mt,Mt.viewport)}}else O.length>0&&Cr(V,O,T,z),Ht&&wt.render(T),wn(p,T,z);N!==null&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(x,T,z),ne.resetDefaultState(),E=-1,S=null,v.pop(),v.length>0?(l=v[v.length-1],et===!0&&tt.setGlobalState(x.clippingPlanes,l.state.camera)):l=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function Ti(T,z,G,V){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)l.pushLight(T),T.castShadow&&l.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){V&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(bt);const ct=q.update(T),_t=T.material;_t.visible&&p.push(T,ct,_t,G,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const ct=q.update(T),_t=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Pt.copy(ct.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(bt)),Array.isArray(_t)){const Mt=ct.groups;for(let Nt=0,Ut=Mt.length;Nt<Ut;Nt++){const xt=Mt[Nt],qt=_t[xt.materialIndex];qt&&qt.visible&&p.push(T,ct,qt,G,Pt.z,xt)}}else _t.visible&&p.push(T,ct,_t,G,Pt.z,null)}}const nt=T.children;for(let ct=0,_t=nt.length;ct<_t;ct++)Ti(nt[ct],z,G,V)}function wn(T,z,G,V){const O=T.opaque,nt=T.transmissive,ct=T.transparent;l.setupLightsView(G),et===!0&&tt.setGlobalState(x.clippingPlanes,G),V&&Tt.viewport(D.copy(V)),O.length>0&&ss(O,z,G),nt.length>0&&ss(nt,z,G),ct.length>0&&ss(ct,z,G),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Cr(T,z,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[V.id]===void 0&&(l.state.transmissionRenderTarget[V.id]=new Ji(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Sr:Xn,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const nt=l.state.transmissionRenderTarget[V.id],ct=V.viewport||D;nt.setSize(ct.z,ct.w);const _t=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(P),b=x.getClearAlpha(),b<1&&x.setClearColor(16777215,.5),x.clear(),Ht&&wt.render(G);const Mt=x.toneMapping;x.toneMapping=Mi;const Nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),l.setupLightsView(V),et===!0&&tt.setGlobalState(x.clippingPlanes,V),ss(T,G,V),w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xt=0,qt=z.length;xt<qt;xt++){const oe=z[xt],le=oe.object,ke=oe.geometry,te=oe.material,yt=oe.group;if(te.side===Mn&&le.layers.test(V.layers)){const In=te.side;te.side=Fe,te.needsUpdate=!0,Rr(le,G,V,ke,te,yt),te.side=In,te.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt))}x.setRenderTarget(_t),x.setClearColor(P,b),Nt!==void 0&&(V.viewport=Nt),x.toneMapping=Mt}function ss(T,z,G){const V=z.isScene===!0?z.overrideMaterial:null;for(let O=0,nt=T.length;O<nt;O++){const ct=T[O],_t=ct.object,Mt=ct.geometry,Nt=V===null?ct.material:V,Ut=ct.group;_t.layers.test(G.layers)&&Rr(_t,z,G,Mt,Nt,Ut)}}function Rr(T,z,G,V,O,nt){T.onBeforeRender(x,z,G,V,O,nt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(x,z,G,V,T,nt),O.transparent===!0&&O.side===Mn&&O.forceSinglePass===!1?(O.side=Fe,O.needsUpdate=!0,x.renderBufferDirect(G,z,V,O,T,nt),O.side=vi,O.needsUpdate=!0,x.renderBufferDirect(G,z,V,O,T,nt),O.side=Mn):x.renderBufferDirect(G,z,V,O,T,nt),T.onAfterRender(x,z,G,V,O,nt)}function Nn(T,z,G){z.isScene!==!0&&(z=ce);const V=Et.get(T),O=l.state.lights,nt=l.state.shadowsArray,ct=O.state.version,_t=gt.getParameters(T,O.state,nt,z,G),Mt=gt.getProgramCacheKey(_t);let Nt=V.programs;V.environment=T.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(T.isMeshStandardMaterial?H:y).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Nt===void 0&&(T.addEventListener("dispose",St),Nt=new Map,V.programs=Nt);let Ut=Nt.get(Mt);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===ct)return Ai(T,_t),Ut}else _t.uniforms=gt.getUniforms(T),T.onBeforeCompile(_t,x),Ut=gt.acquireProgram(_t,Mt),Nt.set(Mt,Ut),V.uniforms=_t.uniforms;const xt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(xt.clippingPlanes=tt.uniform),Ai(T,_t),V.needsLights=Od(T),V.lightsStateVersion=ct,V.needsLights&&(xt.ambientLightColor.value=O.state.ambient,xt.lightProbe.value=O.state.probe,xt.directionalLights.value=O.state.directional,xt.directionalLightShadows.value=O.state.directionalShadow,xt.spotLights.value=O.state.spot,xt.spotLightShadows.value=O.state.spotShadow,xt.rectAreaLights.value=O.state.rectArea,xt.ltc_1.value=O.state.rectAreaLTC1,xt.ltc_2.value=O.state.rectAreaLTC2,xt.pointLights.value=O.state.point,xt.pointLightShadows.value=O.state.pointShadow,xt.hemisphereLights.value=O.state.hemi,xt.directionalShadowMap.value=O.state.directionalShadowMap,xt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,xt.spotShadowMap.value=O.state.spotShadowMap,xt.spotLightMatrix.value=O.state.spotLightMatrix,xt.spotLightMap.value=O.state.spotLightMap,xt.pointShadowMap.value=O.state.pointShadowMap,xt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ut,V.uniformsList=null,Ut}function wi(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=da.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Ai(T,z){const G=Et.get(T);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function an(T,z,G,V,O){z.isScene!==!0&&(z=ce),w.resetTextureUnits();const nt=z.fog,ct=V.isMeshStandardMaterial?z.environment:null,_t=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Vs,Mt=(V.isMeshStandardMaterial?H:y).get(V.envMap||ct),Nt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ut=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),xt=!!G.morphAttributes.position,qt=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color;let le=Mi;V.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(le=x.toneMapping);const ke=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=ke!==void 0?ke.length:0,yt=Et.get(V),In=l.state.lights;if(et===!0&&(mt===!0||T!==S)){const on=T===S&&V.id===E;tt.setState(V,T,on)}let ee=!1;V.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==In.state.version||yt.outputColorSpace!==_t||O.isBatchedMesh&&yt.batching===!1||!O.isBatchedMesh&&yt.batching===!0||O.isBatchedMesh&&yt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&yt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&yt.instancing===!1||!O.isInstancedMesh&&yt.instancing===!0||O.isSkinnedMesh&&yt.skinning===!1||!O.isSkinnedMesh&&yt.skinning===!0||O.isInstancedMesh&&yt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&yt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&yt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&yt.instancingMorph===!1&&O.morphTexture!==null||yt.envMap!==Mt||V.fog===!0&&yt.fog!==nt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==tt.numPlanes||yt.numIntersection!==tt.numIntersection)||yt.vertexAlphas!==Nt||yt.vertexTangents!==Ut||yt.morphTargets!==xt||yt.morphNormals!==qt||yt.morphColors!==oe||yt.toneMapping!==le||yt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,yt.__version=V.version);let fn=yt.currentProgram;ee===!0&&(fn=Nn(V,z,O));let rs=!1,qe=!1,$s=!1;const ue=fn.getUniforms(),An=yt.uniforms;if(Tt.useProgram(fn.program)&&(rs=!0,qe=!0,$s=!0),V.id!==E&&(E=V.id,qe=!0),rs||S!==T){Tt.buffers.depth.getReversed()?(ot.copy(T.projectionMatrix),Rf(ot),Df(ot),ue.setValue(B,"projectionMatrix",ot)):ue.setValue(B,"projectionMatrix",T.projectionMatrix),ue.setValue(B,"viewMatrix",T.matrixWorldInverse);const ti=ue.map.cameraPosition;ti!==void 0&&ti.setValue(B,Dt.setFromMatrixPosition(T.matrixWorld)),kt.logarithmicDepthBuffer&&ue.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ue.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,qe=!0,$s=!0)}if(O.isSkinnedMesh){ue.setOptional(B,O,"bindMatrix"),ue.setOptional(B,O,"bindMatrixInverse");const on=O.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ue.setValue(B,"boneTexture",on.boneTexture,w))}O.isBatchedMesh&&(ue.setOptional(B,O,"batchingTexture"),ue.setValue(B,"batchingTexture",O._matricesTexture,w),ue.setOptional(B,O,"batchingIdTexture"),ue.setValue(B,"batchingIdTexture",O._indirectTexture,w),ue.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&ue.setValue(B,"batchingColorTexture",O._colorsTexture,w));const Ks=G.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Rt.update(O,G,fn),(qe||yt.receiveShadow!==O.receiveShadow)&&(yt.receiveShadow=O.receiveShadow,ue.setValue(B,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(An.envMap.value=Mt,An.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&z.environment!==null&&(An.envMapIntensity.value=z.environmentIntensity),qe&&(ue.setValue(B,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&bi(An,$s),nt&&V.fog===!0&&it.refreshFogUniforms(An,nt),it.refreshMaterialUniforms(An,V,W,X,l.state.transmissionRenderTarget[T.id]),da.upload(B,wi(yt),An,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(da.upload(B,wi(yt),An,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ue.setValue(B,"center",O.center),ue.setValue(B,"modelViewMatrix",O.modelViewMatrix),ue.setValue(B,"normalMatrix",O.normalMatrix),ue.setValue(B,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const on=V.uniformsGroups;for(let ti=0,ei=on.length;ti<ei;ti++){const al=on[ti];F.update(al,fn),F.bind(al,fn)}}return fn}function bi(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Od(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,z,G){Et.get(T.texture).__webglTexture=z,Et.get(T.depthTexture).__webglTexture=G;const V=Et.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const G=Et.get(T);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,G=0){N=T,A=z,L=G;let V=!0,O=null,nt=!1,ct=!1;if(T){const Mt=Et.get(T);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(Mt.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(Mt.__hasExternalTextures)w.rebindTextures(T,Et.get(T.texture).__webglTexture,Et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const xt=T.depthTexture;if(Mt.__boundDepthTexture!==xt){if(xt!==null&&Et.has(xt)&&(T.width!==xt.image.width||T.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ct=!0);const Ut=Et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[z])?O=Ut[z][G]:O=Ut[z],nt=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?O=Et.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?O=Ut[G]:O=Ut,D.copy(T.viewport),U.copy(T.scissor),C=T.scissorTest}else D.copy(vt).multiplyScalar(W).floor(),U.copy(Lt).multiplyScalar(W).floor(),C=Qt;if(Tt.bindFramebuffer(B.FRAMEBUFFER,O)&&V&&Tt.drawBuffers(T,O),Tt.viewport(D),Tt.scissor(U),Tt.setScissorTest(C),nt){const Mt=Et.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,G)}else if(ct){const Mt=Et.get(T.texture),Nt=z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Nt)}E=-1},this.readRenderTargetPixels=function(T,z,G,V,O,nt,ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){Tt.bindFramebuffer(B.FRAMEBUFFER,_t);try{const Mt=T.texture,Nt=Mt.format,Ut=Mt.type;if(!kt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-V&&G>=0&&G<=T.height-O&&B.readPixels(z,G,V,O,It.convert(Nt),It.convert(Ut),nt)}finally{const Mt=N!==null?Et.get(N).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(T,z,G,V,O,nt,ct){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){const Mt=T.texture,Nt=Mt.format,Ut=Mt.type;if(!kt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-V&&G>=0&&G<=T.height-O){Tt.bindFramebuffer(B.FRAMEBUFFER,_t);const xt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.bufferData(B.PIXEL_PACK_BUFFER,nt.byteLength,B.STREAM_READ),B.readPixels(z,G,V,O,It.convert(Nt),It.convert(Ut),0);const qt=N!==null?Et.get(N).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,qt);const oe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Cf(B,oe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,nt),B.deleteBuffer(xt),B.deleteSync(oe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,G=0){T.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const V=Math.pow(2,-G),O=Math.floor(T.image.width*V),nt=Math.floor(T.image.height*V),ct=z!==null?z.x:0,_t=z!==null?z.y:0;w.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,ct,_t,O,nt),Tt.unbindTexture()},this.copyTextureToTexture=function(T,z,G=null,V=null,O=0){T.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],z=arguments[2],O=arguments[3]||0,G=null);let nt,ct,_t,Mt,Nt,Ut,xt,qt,oe;const le=T.isCompressedTexture?T.mipmaps[O]:T.image;G!==null?(nt=G.max.x-G.min.x,ct=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,Mt=G.min.x,Nt=G.min.y,Ut=G.isBox3?G.min.z:0):(nt=le.width,ct=le.height,_t=le.depth||1,Mt=0,Nt=0,Ut=0),V!==null?(xt=V.x,qt=V.y,oe=V.z):(xt=0,qt=0,oe=0);const ke=It.convert(z.format),te=It.convert(z.type);let yt;z.isData3DTexture?(w.setTexture3D(z,0),yt=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(w.setTexture2DArray(z,0),yt=B.TEXTURE_2D_ARRAY):(w.setTexture2D(z,0),yt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const In=B.getParameter(B.UNPACK_ROW_LENGTH),ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fn=B.getParameter(B.UNPACK_SKIP_PIXELS),rs=B.getParameter(B.UNPACK_SKIP_ROWS),qe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,le.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,le.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Mt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ut);const $s=T.isDataArrayTexture||T.isData3DTexture,ue=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const An=Et.get(T),Ks=Et.get(z),on=Et.get(An.__renderTarget),ti=Et.get(Ks.__renderTarget);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,on.__webglFramebuffer),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ei=0;ei<_t;ei++)$s&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(T).__webglTexture,O,Ut+ei),T.isDepthTexture?(ue&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(z).__webglTexture,O,oe+ei),B.blitFramebuffer(Mt,Nt,nt,ct,xt,qt,nt,ct,B.DEPTH_BUFFER_BIT,B.NEAREST)):ue?B.copyTexSubImage3D(yt,O,xt,qt,oe+ei,Mt,Nt,nt,ct):B.copyTexSubImage2D(yt,O,xt,qt,oe+ei,Mt,Nt,nt,ct);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ue?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(yt,O,xt,qt,oe,nt,ct,_t,ke,te,le.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(yt,O,xt,qt,oe,nt,ct,_t,ke,le.data):B.texSubImage3D(yt,O,xt,qt,oe,nt,ct,_t,ke,te,le):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,xt,qt,nt,ct,ke,te,le.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,xt,qt,le.width,le.height,ke,le.data):B.texSubImage2D(B.TEXTURE_2D,O,xt,qt,nt,ct,ke,te,le);B.pixelStorei(B.UNPACK_ROW_LENGTH,In),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fn),B.pixelStorei(B.UNPACK_SKIP_ROWS,rs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qe),O===0&&z.generateMipmaps&&B.generateMipmap(yt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,z,G=null,V=null,O=0){return T.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,T=arguments[2],z=arguments[3],O=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,G,V,O)},this.initRenderTarget=function(T){Et.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){A=0,L=0,N=null,Tt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=jt._getUnpackColorSpace()}}class Bc{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=n,this.far=i}clone(){return new Bc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class H_ extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class G_ extends ze{constructor(t=null,n=1,i=1,s,r,a,o,c,u=nn,h=nn,d,f){super(null,a,o,c,u,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ru extends Oe{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new Zt,au=new Zt,Qr=[],ou=new ns,V_=new Zt,nr=new me,ir=new Xs;class Er extends me{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new ru(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,V_)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ns),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,vs),ou.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(ou)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,vs),ir.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(ir)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,n){const i=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(i),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),au.multiplyMatrices(i,vs),nr.matrixWorld=au,nr.raycast(t,Qr);for(let a=0,o=Qr.length;a<o;a++){const c=Qr[a];c.instanceId=r,c.object=this,n.push(c)}Qr.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new ru(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new G_(new Float32Array(s*this.count),s,this.count,Ic,Rn));const r=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ph extends js{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cu=new Zt,Mc=new xh,Jr=new Xs,ta=new k;class W_ extends Ce{constructor(t=new Ye,n=new Ph){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;cu.copy(s).invert(),Mc.copy(t.ray).applyMatrix4(cu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const p=u.getX(g);ta.fromBufferAttribute(d,p),lu(ta,p,c,s,t,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)ta.fromBufferAttribute(d,g),lu(ta,g,c,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lu(e,t,n,i,s,r,a){const o=Mc.distanceSqToPoint(e);if(o<n){const c=new k;Mc.closestPointToPoint(e,c),c.applyMatrix4(i);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Da extends Ye{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);const r=[],a=[],o=[],c=[],u=new k,h=new Kt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const m=i+d/n*s;u.x=t*Math.cos(m),u.y=t*Math.sin(m),a.push(u.x,u.y,u.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Si extends Ye{constructor(t=1,n=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=i/2;let l=0;M(),a===!1&&(t>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(m,2));function M(){const x=new k,R=new k;let A=0;const L=(n-t)/i;for(let N=0;N<=r;N++){const E=[],S=N/r,D=S*(n-t)+t;for(let U=0;U<=s;U++){const C=U/s,P=C*c+o,b=Math.sin(P),I=Math.cos(P);R.x=D*b,R.y=-S*i+p,R.z=D*I,d.push(R.x,R.y,R.z),x.set(b,L,I).normalize(),f.push(x.x,x.y,x.z),m.push(C,1-S),E.push(g++)}_.push(E)}for(let N=0;N<s;N++)for(let E=0;E<r;E++){const S=_[E][N],D=_[E+1][N],U=_[E+1][N+1],C=_[E][N+1];(t>0||E!==0)&&(h.push(S,D,C),A+=3),(n>0||E!==r-1)&&(h.push(D,U,C),A+=3)}u.addGroup(l,A,0),l+=A}function v(x){const R=g,A=new Kt,L=new k;let N=0;const E=x===!0?t:n,S=x===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*S,0),f.push(0,S,0),m.push(.5,.5),g++;const D=g;for(let U=0;U<=s;U++){const P=U/s*c+o,b=Math.cos(P),I=Math.sin(P);L.x=E*I,L.y=p*S,L.z=E*b,d.push(L.x,L.y,L.z),f.push(0,S,0),A.x=b*.5+.5,A.y=I*.5*S+.5,m.push(A.x,A.y),g++}for(let U=0;U<s;U++){const C=R+U,P=D+U;x===!0?h.push(P,P+1,C):h.push(P+1,P,C),N+=3}u.addGroup(l,N,x===!0?1:2),l+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kc extends Si{constructor(t=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,n,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new kc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hc extends Ye{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const h=[],d=new k,f=new k,m=[],g=[],_=[],p=[];for(let l=0;l<=i;l++){const M=[],v=l/i;let x=0;l===0&&a===0?x=.5/n:l===i&&c===Math.PI&&(x=-.5/n);for(let R=0;R<=n;R++){const A=R/n;d.x=-t*Math.cos(s+A*r)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+x,1-v),M.push(u++)}h.push(M)}for(let l=0;l<i;l++)for(let M=0;M<n;M++){const v=h[l][M+1],x=h[l][M],R=h[l+1][M],A=h[l+1][M+1];(l!==0||a>0)&&m.push(v,x,A),(l!==i-1||c<Math.PI)&&m.push(x,R,A)}this.setIndex(m),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gc extends Ye{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],u=[],h=new k,d=new k,f=new k;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/i*Math.PI*2;d.x=(t+n*Math.cos(p))*Math.cos(_),d.y=(t+n*Math.cos(p))*Math.sin(_),d.z=n*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),u.push(g/s),u.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,l=(s+1)*(m-1)+g,M=(s+1)*m+g;a.push(_,p,M),a.push(p,l,M)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Sn extends js{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uh extends Ce{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class X_ extends Uh{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const _o=new Zt,uu=new k,hu=new k;class j_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zc,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;uu.setFromMatrixPosition(t.matrixWorld),n.position.copy(uu),hu.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(hu),n.updateMatrixWorld(),_o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Y_ extends j_{constructor(){super(new Lh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q_ extends Uh{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Y_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);const $_={driftMaxR:130,sweeperMaxR:175,driftEntryAdvance:30,driftExitRunoff:40,sweeperEntryAdvance:18,sweeperExitRunoff:22,decreasingInsideLen:30,startOpen:200,finishOpen:150,crestHalfGap:55,mergeGap:12,maxSpans:64};function du(e,t,n){return Math.max(t,Math.min(n,e))}function Ds(e){return typeof e=="number"&&isFinite(e)}function K_(e){return e==="L"?1:-1}function Z_(e){return e==="L"?-1:1}function Q_(e){return!(typeof e!="object"||e===null||e.dir!=="L"&&e.dir!=="R"||!Ds(e.startS)||!Ds(e.endS)||!Ds(e.medR)||e.medR<=0||e.endS-e.startS<30||e.endS<=0)}function J_(e,t,n=[],i=$_){const s=i;if(!Ds(e)||e<500||e>1e4)return{spans:[],length:0};const r=s.startOpen,a=e-s.finishOpen;if(!(a>r+60))return{spans:[],length:e};const o=[],c=[];for(const d of n)Ds(d)&&d>0&&d<e&&c.push(d);c.sort((d,f)=>d-f);const u=(d,f,m)=>{let g=du(d,r,a),_=du(f,r,a);if(_-g>=20){for(const p of c){const l=p-s.crestHalfGap,M=p+s.crestHalfGap;if(_<=l||g>=M)continue;const v=l-g,x=_-M;if(v>=20&&x>=20?(o.push({aS:g,bS:l,side:m}),g=M):v>=x?_=Math.min(_,l):g=Math.max(g,M),!(_-g>=20))return}o.push({aS:g,bS:_,side:m})}};if(Array.isArray(t))for(const d of t){if(!Q_(d))continue;const f=K_(d.dir);if(d.medR<=s.driftMaxR){if(u(d.startS-s.driftEntryAdvance,d.endS+s.driftExitRunoff,f),d.decreasing===!0){const m=(d.startS+d.endS)/2;u(m-s.decreasingInsideLen/2,m+s.decreasingInsideLen/2,Z_(d.dir))}}else d.medR<=s.sweeperMaxR&&u(d.startS-s.sweeperEntryAdvance,d.endS+s.sweeperExitRunoff,f)}o.sort((d,f)=>d.side-f.side||d.aS-f.aS);const h=[];for(const d of o){const f=h[h.length-1];f&&f.side===d.side&&d.aS-f.bS<=s.mergeGap?d.bS>f.bS&&(f.bS=d.bS):h.push({aS:d.aS,bS:d.bS,side:d.side})}h.sort((d,f)=>d.aS-f.aS||d.side-f.side),h.length>s.maxSpans&&(h.sort((d,f)=>f.bS-f.aS-(d.bS-d.aS)||d.aS-f.aS),h.length=s.maxSpans,h.sort((d,f)=>d.aS-f.aS||d.side-f.side));for(const d of h)d.aS=Math.round(d.aS*10)/10,d.bS=Math.round(d.bS*10)/10;return{spans:h,length:e}}function Vc(e,t,n){if(!e||!Ds(t)||n!==1&&n!==-1)return!1;const i=e.spans;for(let s=0;s<i.length;s++){const r=i[s];if(r.side===n){if(t<r.aS){if(r.aS>t){let a=!1;for(let o=s+1;o<i.length;o++)if(i[o].side===n&&i[o].aS<r.aS){a=!0;break}if(!a)return!1}continue}if(t<=r.bS)return!0}}return!1}const tM=3,eM=1,Fh=3,zh=1,nM=120,Oh=4e3,Bh=2,Ns=5e3,xa=36e5,xc=1,iM=8192,Wc=1650;function Mo(e,t,n){return e+(t-e)*n}function sM(e){return Math.atan2(Math.sin(e),Math.cos(e))}function Xc(e){return typeof e=="number"&&isFinite(e)}function rM(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function aM(e){for(e=e.replace(/-/g,"+").replace(/_/g,"/");e.length%4;)e+="=";return atob(e)}function fu(e){return[Math.round(e[0]*2)/2,Math.round(e[1]*2)/2,Math.round(e[2]*2)/2,Math.round(e[3]*100)/100]}function oM(e,t){const n=Math.max(1,Math.floor(t)),i=[],s=[];for(let a=0;a<e.p.length;a+=n)i.push(fu(e.p[a])),s.push(Math.round(e.ts[a]));const r=e.p.length-1;return r%n!==0&&r>=0&&(i.push(fu(e.p[r])),s.push(Math.round(e.ts[r]))),{p:i,ts:s}}function kh(e,t,n=Wc,i){let s=1,r="";for(;;){const a=oM(e,s),o=i?{v:Fh,t:Math.round(t),p:a.p,ts:a.ts,track:{...i}}:{v:2,t:Math.round(t),p:a.p,ts:a.ts};if(r=rM(JSON.stringify(o)),r.length<n||e.p.length<40||s>=16)break;s*=2}return r}function pu(e,t){let n=0,i=1;for(let s=0;s<5;s++){if(t>=e.length)return null;const r=e[t++];if(n+=(r&127)*i,!(r&128))return[n,t];i*=128}return null}function cM(e){if(e.length<2||e.charCodeAt(0)!==67||e.charCodeAt(1)!==49)return null;const t=new Uint8Array(e.length);for(let _=0;_<e.length;_++)t[_]=e.charCodeAt(_)&255;let n=2;const i=pu(t,n);if(!i)return null;n=i[1];const s=pu(t,n);if(!s)return null;n=s[1];const r=i[0],a=s[0];if(r<0||r>xa||a<Bh||a>Oh)return null;const o=()=>{if(n+2>t.length)return null;let _=t[n]+t[n+1]*256;return n+=2,_>=32768?_-65536:_},c=[],u=[];let h=0,d=0,f=0,m=0,g=0;for(let _=0;_<a;_++){const p=o(),l=o(),M=o(),v=o();if(p===null||l===null||M===null||v===null)return null;if(_===0)h=p,d=l,f=M,m=v,g=0;else{if(n+2>t.length)return null;const L=t[n]+t[n+1]*256;if(n+=2,h+=p,d+=l,f+=M,m+=v,g+=L,g<0||g>xa)return null}const x=h/2,R=d/2,A=f/2;if(Math.abs(x)>Ns||Math.abs(R)>Ns||Math.abs(A)>Ns)return null;c.push([x,R,A,m/100]),u.push(g)}return n!==t.length||Math.abs(u[a-1]-r)>xc?null:{t:r,p:c,ts:u}}function lM(e){if(!Array.isArray(e)||e.length<Bh||e.length>Oh)return!1;for(const t of e){if(!Array.isArray(t)||t.length!==4)return!1;for(const i of t)if(!Xc(i))return!1;const n=t;if(Math.abs(n[0])>Ns||Math.abs(n[1])>Ns||Math.abs(n[2])>Ns)return!1}return!0}function uM(e){const t=[];for(let n=0;n<e;n++)t.push(n*nM);return t}function hM(e,t){if(!Array.isArray(e)||e.length!==t)return!1;for(const n of e)if(!Xc(n)||n<0||n>xa)return!1;for(let n=1;n<e.length;n++){const i=e[n],s=e[n-1];if(i<s)return!1}return!0}function dM(e){if(!e)return{ok:!1,error:"empty"};if(typeof e!="string")return{ok:!1,error:"not-string"};if(e.length>iM)return{ok:!1,error:"too-long"};let t;try{t=aM(e)}catch{return{ok:!1,error:"bad-encoding"}}if(t.length>=2&&t.charCodeAt(0)===67&&t.charCodeAt(1)===49){const c=cM(t);return c?{ok:!0,ghost:c}:{ok:!1,error:"bad-encoding"}}let n;try{n=JSON.parse(t)}catch{return{ok:!1,error:"bad-encoding"}}if(typeof n!="object"||n===null)return{ok:!1,error:"bad-shape"};const i=n;if(i.v!==void 0&&i.v!==tM&&i.v!==2&&i.v!==eM)return{ok:!1,error:"bad-version"};let s;if(i.v===Fh){if(!Hh(i.track))return{ok:!1,error:"bad-track"};const c=i.track;s={day:c.day,course:c.course,gen:c.gen}}if(!Xc(i.t)||i.t<0||i.t>xa)return{ok:!1,error:"bad-time"};if(!lM(i.p))return{ok:!1,error:"bad-points"};const r=i.p;let a;if(i.ts===void 0){if(a=uM(r.length),a[a.length-1]>i.t+xc)return{ok:!1,error:"legacy-finish-mismatch"}}else{if(!hM(i.ts,r.length))return{ok:!1,error:"bad-timestamps"};if(a=i.ts.slice(),Math.abs(a[a.length-1]-i.t)>xc)return{ok:!1,error:"finish-mismatch"}}return{ok:!0,ghost:s?{t:i.t,p:r,ts:a,track:s}:{t:i.t,p:r,ts:a}}}function Hh(e){if(typeof e!="object"||e===null)return!1;const t=e;return!(typeof t.day!="string"||t.day.length<1||t.day.length>32||typeof t.course!="string"||!/^[0-9a-fA-F]{1,64}$/.test(t.course)||typeof t.gen!="number"||!isFinite(t.gen)||Math.floor(t.gen)!==t.gen||t.gen<0||t.gen>2147483647)}function fM(e,t,n=zh){return{day:e,course:t,gen:n}}function mu(e,t){return e?!e.track||!Hh(e.track)?"legacy":e.track.course.toLowerCase()===t.course.toLowerCase()&&e.track.gen===t.gen?"match":"mismatch":"none"}function xo(e,t){return t==="match"||t==="none"?"":e==="friend"&&t==="mismatch"?"Friend link is for a different course.":e==="friend"?"Friend link predates course checks — ask for a fresh one.":t==="mismatch"?"Saved best is for a different course.":"Saved best predates course checks."}function gu(e){return e==="match"||e==="none"?"none":e}function pM(e){const t=mu(e.shared,e.expected),n=mu(e.pb,e.expected);if(t==="match"&&e.shared&&e.shared.p.length>1)return{rival:{ghost:e.shared,kind:"friend",racingPB:!1},status:"ready",notice:""};if(n==="match"&&e.pb&&e.pb.p.length>1){const a=[];if(e.shared){const o=xo("friend",t);o&&a.push(o),a.push("Racing your best instead.")}return{rival:{ghost:e.pb,kind:"pb",racingPB:!0},status:"ready",notice:a.join(" ")}}const i=[],s=xo("friend",t);s&&i.push(s);const r=xo("pb",n);return r&&i.push(r),e.shared?{rival:null,status:gu(t),notice:i.join(" ")}:e.pb?{rival:null,status:gu(n),notice:i.join(" ")}:{rival:null,status:"none",notice:""}}function Tr(e){const t=dM(e);return t.ok?t.ghost:null}function vo(e,t){const n=e.p,i=e.ts,s=n[0],r=n[n.length-1];if(t<=i[0])return{x:s[0],y:s[1],z:s[2],h:s[3]};const a=i.length-1;if(t>=i[a])return{x:r[0],y:r[1],z:r[2],h:r[3]};let o=0,c=a;for(;c-o>1;){const m=o+c>>1;i[m]<=t?o=m:c=m}const u=i[c]-i[o]||1,h=(t-i[o])/u,d=n[o],f=n[c];return{x:Mo(d[0],f[0],h),y:Mo(d[1],f[1],h),z:Mo(d[2],f[2],h),h:d[3]+sM(f[3]-d[3])*h}}function mM(e,t){return e&&e.kind==="friend"?"Racing a shared ghost":e&&e.kind==="pb"?"Racing your daily best ghost":t>0?"Friend time, no ghost":"No rival ghost"}const gM=36e5,_M=/^\d{4}-\d{2}-\d{2}$/;function MM(e){return e instanceof DOMException&&e.name==="AbortError"}function Gh(e){if(!_M.test(e))return!1;const[t,n,i]=e.split("-").map(Number);if(n<1||n>12||i<1||i>31)return!1;const s=new Date(Date.UTC(t,n-1,i));return s.getUTCFullYear()===t&&s.getUTCMonth()===n-1&&s.getUTCDate()===i}function Vh(e){const t=typeof e=="string"&&e.trim()!==""?Number(e):e;return typeof t!="number"||!isFinite(t)||t<0||t>gM?0:Math.floor(t)}function de(e){if(!isFinite(e)||e<0)return"—";const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3),i=Math.floor(e%1e3/10);return`${t}:${String(n).padStart(2,"0")}.${String(i).padStart(2,"0")}`}function xM(e,t,n){return`🏁 CANYON DAILY ${e} — ${de(t)}
Beat my run: ${n}`}function vM(e,t,n){const i=Gh(n.day)?n.day:"",s=Vh(n.timeMs);let r=typeof n.ghost=="string"?n.ghost:"";r&&!Tr(r)&&(r="");const a=`?d=${encodeURIComponent(i)}&t=${s}${r?`&g=${r}`:""}`;return`${e}${t}${a}`}function SM(e){const t={day:"",timeMs:0,ghost:null,ghostRaw:"",errors:[]};try{if(!e)return t.errors.push("empty"),t;let n=e;const i=e.indexOf("?");i>=0&&(n=e.slice(i)),n.startsWith("?")||(n=`?${n}`);const s=new URLSearchParams(n),r=s.get("d")||"";Gh(r)?t.day=r:r&&t.errors.push("bad-day"),t.timeMs=Vh(s.get("t")||0);const a=s.get("g")||"";if(t.ghostRaw=a,a){const o=Tr(a);o?t.ghost=o:t.errors.push("bad-ghost")}return t}catch{return t.errors.push("parse-failed"),t}}function yM(e,t){return e&&t}async function EM(e,t,n){if(n&&e.requestNativeShare)try{return await e.requestNativeShare({title:t.title,text:t.text,url:t.url}),t.hasGhost?{kind:"shared-with-ghost",message:"Shared with ghost — good luck!"}:{kind:"shared-no-ghost",message:"Shared — no ghost saved yet"}}catch(i){if(MM(i))return{kind:"dismissed",message:"Share dismissed"}}if(e.copyText)try{return await e.copyText(t.text),t.hasGhost?{kind:"copied-with-ghost",message:"Link + ghost copied — send it!"}:t.isFinish?{kind:"copied-time-only",message:"Time copied — send it!"}:{kind:"copied-time-only",message:"Time copied — link has no ghost (finish a run first)"}}catch{return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}return{kind:"copy-failed",message:"Copy failed here — copy the URL manually"}}const _u={entrySteer:.18,entryMinSpeed:25,tapMaxS:.35,sloppyScale:.4,slideAttack:3.5,slideRelease:4,exitOppSteer:.35,rearmDeadband:.12,earlyEnd:.45,optEnd:1.8,lateEnd:3.2,timeoutS:4,peakLoDeg:8,peakHiDeg:28,spinDeg:45,alignDeg:20,speedLo:25,speedHi:70,counterLo:.2,counterHi:.7,abortSpeed:15,cooldownS:1.2,boostTime:.6,boostAccelMax:20,kickRad:.09,pendFreq:7,pendDecay:1.8,pendYaw:1.6,chainWindow:.8,chainHold:.35,chainMin:.25,chainBoost:1.5},So=84;function Wh(){return{phase:"idle",entryDir:0,slideAge:0,peakSlipDeg:0,slideBlend:0,cooldownT:0,boostT:0,boostAccel:0,lastQuality:0,lastGrade:"none",spamCount:0,needNeutral:!1,cleanTap:!0,handHeldS:0,prevHand:!1,pendAmp:0,pendPhase:0,chainDir:0,chainT:0,chainHoldT:0}}function jc(){return{phase:"idle",slideBlend:0,boostAccel:0,event:"none",quality:0,grade:"none",yawKick:0,pendRate:0,pendAmp:0,chainArmed:!1}}function Xh(e){const t=Wh();e.phase=t.phase,e.entryDir=t.entryDir,e.slideAge=t.slideAge,e.peakSlipDeg=t.peakSlipDeg,e.slideBlend=t.slideBlend,e.cooldownT=t.cooldownT,e.boostT=t.boostT,e.boostAccel=t.boostAccel,e.lastQuality=t.lastQuality,e.lastGrade=t.lastGrade,e.spamCount=t.spamCount,e.needNeutral=t.needNeutral,e.cleanTap=t.cleanTap,e.handHeldS=t.handHeldS,e.prevHand=t.prevHand,e.pendAmp=t.pendAmp,e.pendPhase=t.pendPhase,e.chainDir=t.chainDir,e.chainT=t.chainT,e.chainHoldT=t.chainHoldT}function zi(e,t,n){return Math.max(t,Math.min(n,e))}function ea(e){return typeof e=="number"&&isFinite(e)}function yo(e){return e>0?1:e<0?-1:0}function TM(e,t,n,i,s,r){if(t<3||t>e.spinDeg||s>=e.timeoutS||i<e.entryMinSpeed)return 0;const a=t<=e.peakLoDeg?(t-3)/(e.peakLoDeg-3):t<=e.peakHiDeg?1:1-(t-e.peakHiDeg)/(e.spinDeg-e.peakHiDeg),o=1-zi(n/e.alignDeg,0,1),c=zi((i-e.speedLo)/(e.speedHi-e.speedLo),0,1),u=zi((r-e.counterLo)/(e.counterHi-e.counterLo),0,1),h=.4*zi(a,0,1)+.3*o+.15*c+.15*u,d=s<.15?0:s<e.earlyEnd?(s-.15)/(e.earlyEnd-.15):s<=e.optEnd?1:s<=e.lateEnd?1-.75*((s-e.optEnd)/(e.lateEnd-e.optEnd)):.25*(1-(s-e.lateEnd)/(e.timeoutS-e.lateEnd));return zi(h*zi(d,0,1),0,1)}function wM(e){return e>=.8?"perfect":e>=.55?"good":e>.05?"weak":"none"}function AM(e,t,n,i){if(i.event="none",i.quality=0,i.grade="none",i.yawKick=0,i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=e.chainT>0&&e.chainDir!==0,!ea(n.dt)||n.dt<=0||!ea(n.steer)||!ea(n.speed)||!ea(n.slipDeg)){i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}const s=n.dt>.1?.1:n.dt,r=zi(n.steer,-1,1),a=n.handbrake===!0,o=a&&!e.prevHand,c=!a&&e.prevHand;if(e.prevHand=a,c&&e.phase==="sliding"&&(e.cleanTap=e.handHeldS<=t.tapMaxS),a?e.handHeldS+=s:e.handHeldS=0,e.boostT>0&&(e.boostT=Math.max(0,e.boostT-s)),e.boostAccel=e.boostT>0?e.boostAccel:0,!n.grounded){e.phase==="sliding"&&(i.pendRate=-e.entryDir*e.pendAmp*Math.sin(e.pendPhase)*t.pendYaw),i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.phase==="cooldown"){if(e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*s),e.cooldownT-=s,e.chainT>0&&(e.chainT-=s),e.cooldownT<=0&&(e.phase="idle",e.cooldownT=0,e.chainDir=0,e.chainT=0,e.chainHoldT=0),e.chainDir!==0&&e.chainT>0&&yo(r)===e.chainDir&&Math.abs(r)>=t.entrySteer){if(o){Mu(e,t,n,i);return}if(e.chainHoldT+=s,e.chainHoldT>=t.chainHold){Mu(e,t,n,i);return}}else e.chainHoldT=0,o&&(e.spamCount++,i.event="rejected");i.chainArmed=e.chainT>0&&e.chainDir!==0,i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.phase==="idle"){if(e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*s),Math.abs(r)<t.rearmDeadband&&(e.needNeutral=!1),o){const h=yo(r);e.needNeutral||h===0||Math.abs(r)<t.entrySteer||n.speed<t.entryMinSpeed?!e.needNeutral&&e.cooldownT<=0||(e.spamCount++,i.event="rejected"):(e.phase="sliding",e.entryDir=h,e.slideAge=0,e.peakSlipDeg=Math.abs(n.slipDeg),e.cleanTap=!0,e.pendAmp=1,e.pendPhase=0,i.yawKick=-h*t.kickRad,i.pendAmp=e.pendAmp,i.event="entered")}i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.slideAge+=s,e.peakSlipDeg=Math.max(e.peakSlipDeg,Math.abs(n.slipDeg)),e.slideBlend=Math.min(1,e.slideBlend+t.slideAttack*s),e.pendPhase+=t.pendFreq*s,e.pendAmp*=Math.exp(-t.pendDecay*s),a&&e.handHeldS>t.tapMaxS&&(e.cleanTap=!1),i.pendRate=-e.entryDir*e.pendAmp*Math.sin(e.pendPhase)*t.pendYaw,i.pendAmp=e.pendAmp,yo(r)===-e.entryDir&&Math.abs(r)>=t.exitOppSteer){let h=TM(t,e.peakSlipDeg,Math.abs(n.slipDeg),n.speed,e.slideAge,Math.abs(r));e.cleanTap||(h*=t.sloppyScale);const d=wM(h),f=Math.cos(e.pendPhase);let m=f>.3?0:f<-.3?Math.min(e.pendAmp*t.chainBoost,1.5):e.pendAmp*.4;h<.3&&(m=Math.max(m,e.pendAmp)),e.lastQuality=h,e.lastGrade=d,e.phase="cooldown",e.cooldownT=t.cooldownS,e.needNeutral=!0,e.pendAmp=m,m>t.chainMin?(e.chainDir=-e.entryDir,e.chainT=t.chainWindow,e.chainHoldT=0):(e.chainDir=0,e.chainT=0,e.chainHoldT=0),e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*s),h>0?(e.boostT=t.boostTime,e.boostAccel=h*t.boostAccelMax):(e.boostT=0,e.boostAccel=0),i.event="exit",i.quality=h,i.grade=d,i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=e.chainDir!==0,i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}if(e.slideAge>=t.timeoutS||n.speed<t.abortSpeed){e.lastQuality=0,e.lastGrade="none",e.boostT=0,e.boostAccel=0,n.speed<t.abortSpeed?(e.phase="idle",e.chainDir=0,e.chainT=0,e.chainHoldT=0):(e.phase="cooldown",e.cooldownT=t.cooldownS,e.needNeutral=!0,e.pendAmp*=.4,e.pendAmp>t.chainMin?(e.chainDir=-e.entryDir,e.chainT=t.chainWindow,e.chainHoldT=0):(e.chainDir=0,e.chainT=0,e.chainHoldT=0)),e.slideBlend=Math.max(0,e.slideBlend-t.slideRelease*s),i.event="expired",i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=e.chainDir!==0,i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel;return}i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel}function Mu(e,t,n,i){e.phase="sliding",e.entryDir=e.chainDir,e.slideAge=0,e.peakSlipDeg=Math.abs(n.slipDeg),e.cleanTap=!0,e.pendPhase=0,e.chainDir=0,e.chainT=0,e.chainHoldT=0,i.yawKick=-e.entryDir*t.kickRad,i.pendRate=0,i.pendAmp=e.pendAmp,i.chainArmed=!1,i.event="entered",i.phase=e.phase,i.slideBlend=e.slideBlend,i.boostAccel=e.boostAccel}const bM=120,LM=3e3,CM=26,RM=11,DM=20,NM=5.5,IM=13,PM=5e3,UM=48,xu=10,FM=75,zM=14,na=80,OM=74,BM=26,kM=25,HM=.18,GM=6,VM=9,WM=3.5,XM=2.5,jM=4.5,YM=.12,qM=.35,$M=.94,vu=1,KM=.1,ZM=.3,QM=.4,JM=.8,tx=5,ex=.5,nx=32,ix=.7,sx=.35,rx=.35,ax=9,Su=.61,ox=2,yu=.44,cx=4,lx=.3,ux=.25,hx=.4,dx=.007,fx=.62,px=1.2,mx=2,gx=.275,_x=.3;function Mx(e){return e+mx-gx-px-_x}const Ss=6,Eu=.02,Tu=.15,xx=6,wu=.25,vx=.35,Au=.5,Sx=.6,yx=.6,bu=2.5,Ex=55,Tx=.85,wx=.18,Ax=2.2,bx=.9,Lx=5,Cx=8,Rx=.6,Dx=1,Nx=.4,Ix=2,Px=4,Ux=6,Fx=4,zx=60,Ox=3.5,Lu=40,Bx=15,kx=10,Xt=(e,t,n)=>Math.max(t,Math.min(n,e)),tn=(e,t,n)=>e+(t-e)*n;function Na(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Ia(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function fa(e){return Math.atan2(Math.sin(e),Math.cos(e))}function Hx(e,t){const n=e.length,i=e.map(f=>f.x),s=e.map(f=>f.y),r=e.map(f=>f.z),a=[],o=[],c=[],u=[],h=[];for(let f=0;f<n;f++){const m=e[Math.max(f-1,0)],g=e[Math.min(f+1,n-1)];let _=g.x-m.x,p=g.z-m.z;const l=Math.hypot(_,p);l<1e-9?(_=1,p=0):(_/=l,p/=l),a.push(_),o.push(p),c.push(-p),u.push(_),h.push(Math.atan2(_,p))}const d=[0];for(let f=1;f<n;f++)d.push(d[f-1]+Math.hypot(i[f]-i[f-1],r[f]-r[f-1]));return{n,x:i,y:s,z:r,tx:a,tz:o,nx:c,nz:u,yaw:h,halfW:t,cum:d,barrier:null}}class Gx{constructor(){this.stickId=-1,this.stickX0=0,this.joy=0,this.joyOn=!1,this.drift=!1,this.driftId=-1}stickDown(t,n){this.stickId===-1&&(this.stickId=t,this.stickX0=n,this.joyOn=!0,this.joy=0)}stickMove(t,n){t===this.stickId&&(this.joy=Xt((n-this.stickX0)/UM,-1,1))}stickUp(t){t===this.stickId&&(this.stickId=-1,this.joyOn=!1,this.joy=0)}driftDown(t){this.driftId===-1&&(this.driftId=t,this.drift=!0)}driftUp(t){t===this.driftId&&(this.driftId=-1,this.drift=!1)}get steer(){return this.joyOn?this.joy:0}}function Vx(){return{heading:0,px:0,py:0,pz:0,vx:0,vz:0,vy:0,grounded:!0,lastIdx:0,raceMs:0,pitch:0,finished:!1,finishCount:0,prevFinD:0,px0:0,py0:0,pz0:0,h0:0,pitch0:0,prevRaceMs:0,approach:[],rec:{t:0,p:[],ts:[]},recLastMs:0,snap:{i:0,x:0,y:0,z:0,h:0,vx:0,vz:0},snapTimer:0,snaps:[],rescueStreak:0,rescueIdx:-1,steer:0,driftAmt:0,wasOffroad:!1,scrapeLowMs:0,breakT:0,wallCool:0,crashT:0,crashAmp:0,scrapeT:0,kickT:0,oobMs:0,driftHold:0,exitT:0,rhythm:Wh(),rhythmOut:jc(),rhythmExitLatch:0,justLaunched:!1,airSteps:0}}function Wx(e,t){const n=t.n-1;return(e.px-t.x[n])*t.tx[n]+(e.pz-t.z[n])*t.tz[n]}function Xx(e,t,n=100){let i=e.lastIdx,s=1/0;for(let r=-100;r<=n;r++){const a=Xt(e.lastIdx+r,0,t.n-1),o=t.x[a]-e.px,c=t.z[a]-e.pz,u=o*o+c*c;u<s&&(s=u,i=a)}return i}function jx(e,t,n){const i=Xt(e.lastIdx,0,t.n-1),s=Xt(e.lastIdx+1,0,t.n-1),r=i===s?2:Math.max(Hi(t,i,s),.5),a=Math.hypot(e.vx,e.vz);return Math.min(2,1+Math.ceil(a*n/r))}function Cu(e,t,n){const i=Xx(e,t,jx(e,t,n));return i>e.lastIdx&&Math.hypot(t.x[i]-e.px,t.z[i]-e.pz)>Math.hypot(e.vx,e.vz)*n+12?e.lastIdx:i}function Hi(e,t,n){return Math.hypot(e.x[n]-e.x[t],e.z[n]-e.z[t])||1e-6}function Yx(e,t,n){e.lastIdx=n,e.px=t.x[n],e.pz=t.z[n],e.py=t.y[n]+.2,e.heading=t.yaw[n],e.vx=t.tx[n]*xu,e.vz=t.tz[n]*xu,e.vy=0,e.grounded=!0,e.steer=0,e.driftAmt=0,e.wasOffroad=!1,e.raceMs=0,e.finished=!1,e.finishCount=0,e.prevFinD=Wx(e,t),e.approach=[],e.rec={t:0,p:[[e.px,e.py,e.pz,e.heading]],ts:[0]},e.recLastMs=0,e.snap={i:n,x:e.px,y:e.py,z:e.pz,h:e.heading,vx:e.vx,vz:e.vz},e.snaps=[e.snap],e.rescueStreak=0,e.rescueIdx=-1,e.snapTimer=0,e.scrapeLowMs=0,e.breakT=0,e.wallCool=0,e.crashT=0,e.crashAmp=0,e.scrapeT=0,e.kickT=0,e.driftHold=0,e.exitT=0,Xh(e.rhythm),e.rhythmOut=jc(),e.rhythmExitLatch=0,e.justLaunched=!1,e.airSteps=0,e.oobMs=0;const i=(t.y[Math.min(n+1,t.n-1)]-t.y[Math.max(n-1,0)])/Hi(t,Math.max(n-1,0),Math.min(n+1,t.n-1));e.pitch=Math.atan(Xt(i,-.5,.5)),e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch}function qx(e){if(e.finished)return;const t=e.snaps.length,n=t>1?Math.min(e.rescueStreak,t-1):0,i=t-1-n,s=t>0?e.snaps[i]:e.snap;t>0&&i<t-1&&(e.snaps.length=i+1,e.snap=s),e.lastIdx=s.i,e.px=s.x,e.py=s.y,e.pz=s.z,e.heading=s.h,e.vx=s.vx,e.vz=s.vz,e.vy=0,e.grounded=!0,e.driftAmt=0,e.wasOffroad=!1,e.justLaunched=!1,e.scrapeLowMs=0,e.breakT=0,e.wallCool=0,e.crashT=0,e.crashAmp=0,e.scrapeT=0,e.kickT=0,e.driftHold=0,e.exitT=0,Xh(e.rhythm),e.rhythmOut=jc(),e.rhythmExitLatch=0,e.oobMs=0,e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch,e.rescueIdx=s.i,e.rescueStreak++,e.raceMs+=LM}const Ru=8,$x=12;function Kx(e,t,n,i){const s={spd:Math.hypot(e.vx,e.vz),drifting:!1,sIdx:e.lastIdx,pitch:e.pitch,launched:!1,landed:!1,finished:!0,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:e.grounded?"road":"air",landV:0,impact:0,scraping:!1,stuckMs:e.scrapeLowMs,wallHit:!1,wallSev:0,wallNx:0,wallNz:0,wallCool:e.wallCool,oobMs:e.oobMs};if(e.finished)return s;e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch,e.prevRaceMs=e.raceMs;let r=0;const a=Xt(n.steer,-1,1),o=Math.abs(a)>Math.abs(e.steer)?GM:VM;e.steer+=Xt(a-e.steer,-o*i,o*i);const c=e.steer,u=Math.hypot(e.vx,e.vz),h=Math.sin(e.heading),d=Math.cos(e.heading),f=Math.atan2(e.vx*d-e.vz*h,Math.abs(e.vx*h+e.vz*d)+1e-6),m=!n.drift&&e.grounded&&u>=Ex&&Math.abs(c)>=Tx;m?e.breakT+=i:e.breakT=0;const g=m&&(e.breakT>.45||Math.abs(f)>=wx),_=n.drift&&e.grounded&&u>=kM&&Math.abs(c)>=HM||g,p=e.driftAmt,l=Math.sin(e.heading),M=Math.cos(e.heading),v=Math.atan2(e.vx*M-e.vz*l,Math.abs(e.vx*l+e.vz*M)+1e-6),x=c*v<-.02?Xt(-c*v/.12,.35,1):0;AM(e.rhythm,_u,{dt:i,steer:c,handbrake:n.drift,speed:u,slipDeg:v*180/Math.PI,grounded:e.grounded},e.rhythmOut),e.rhythmOut.event==="exit"?e.rhythmExitLatch=1:e.rhythmExitLatch>0&&(e.rhythmExitLatch=Math.max(0,e.rhythmExitLatch-i));const R=e.grounded&&e.rhythmOut.phase==="sliding";R&&(e.driftAmt=Math.max(e.driftAmt,e.rhythmOut.slideBlend));const A=e.rhythmOut.event==="entered",L=e.rhythmOut.yawKick,N=e.rhythmOut.pendRate;if(_||R)e.driftAmt=Math.min(1,e.driftAmt+(g?Ax:WM)*i);else if(e.driftAmt>0){const J=Math.max(x,Math.abs(c)<.25?.6:0);e.driftAmt=Math.max(0,e.driftAmt-tn(XM,jM,J)*i),p>.4&&e.driftAmt<=.4&&e.grounded&&Math.abs(v)<sx&&e.driftHold>.25&&e.rhythmExitLatch<=0&&(e.exitT=ix)}e.driftAmt>.5?e.driftHold+=i:e.driftAmt<=0&&(e.driftHold=0),e.exitT>0&&(e.exitT=Math.max(0,e.exitT-i));const S=Cu(e,t,i);e.lastIdx=S;const D=Math.min(S+Ru,t.n-1),U=Math.max(S-Ru,0),C=Math.min(S+1,t.n-1),P=Math.max(S-1,0),b=(t.y[C]-t.y[P])/Hi(t,P,C),I=(t.y[D]-t.y[S])/Hi(t,S,D),X=(t.y[S]-t.y[U])/Hi(t,U,S),W=(I-X)/(Hi(t,S,D)+Hi(t,U,S)),st=e.px-t.x[S],lt=e.pz-t.z[S],vt=st*t.nx[S]+lt*t.nz[S],Lt=Math.abs(vt)>t.halfW,Qt=t.y[S]+.2;let Y=Math.hypot(e.vx,e.vz);const et=e.driftAmt>.4;let mt=!1,ot=!1,bt=0,Dt=0,Pt=!1;if(e.grounded){const J=Math.min(Math.max(Y,8)/10,1),Q=Y<=30?1:Math.max(.24,1-(Y-30)/68),St=tn(2.3*Q,1.5,e.driftAmt)*J;e.heading-=c*St*i;const Bt=Math.abs(vt)>t.halfW+.2;if(A&&!Bt&&(e.kickT=YM,e.heading+=L),Bt||(e.heading+=N*i),e.kickT>0&&(e.kickT=Math.max(0,e.kickT-i)),e.crashT>0&&(e.heading+=e.crashAmp*Math.sin(e.crashT*25)*i,e.crashT=Math.max(0,e.crashT-i),e.crashT<=0&&(e.crashAmp=0)),m&&e.driftAmt<1){const an=e.breakT>.45?.35:.1+Math.min(e.breakT,.45)*.55;e.heading+=Math.sin(e.raceMs*.045)*bx*an*i}const fe=Math.sin(e.heading),Wt=Math.cos(e.heading);let ie=e.vx*fe+e.vz*Wt,_e=e.vx*Wt-e.vz*fe;Lt&&!e.wasOffroad&&(ie*=.92),e.wasOffroad=Lt,r=e.rhythm.boostT>0?e.rhythm.boostAccel:0;const Tn=r>0?So:Lt?BM:et?OM:na,Jn=e.crashT>0?Math.min(Math.abs(e.crashAmp)/bu,1):0,rn=r>0?0:e.exitT>0?nx:0,Ti=(Lt?zM:FM+rn+r)*(1-yx*Jn);ie<Tn&&(ie=Math.min(Tn,ie+Ti*i)),r<=0&&e.exitT<=0&&!Lt&&ie>na&&(ie=na+(ie-na)*Math.exp(-2*i)),p<.15&&e.driftAmt>=.15&&(ie*=$M);const wn=Math.abs(vt)>t.halfW+1,Cr=!wn&&e.driftAmt>.5?Math.min(Math.max(e.driftHold-vu,0)*QM,JM):0,ss=(tn(Lt?5.5:9,4.8,e.driftAmt)+(Lt||wn?0:(tx*x-Cr)*e.driftAmt))*(e.kickT>0&&!wn?qM:1);_e*=Math.exp(-ss*i);const Rr=Math.atan2(_e,Math.abs(ie)+1e-6),Nn=Math.abs(Rr);let wi=0;if(Nn>yu&&(wi+=ox*(Nn-yu)),Nn>Su&&(wi+=ax*(Nn-Su)),wi>0&&(ie*=Math.exp(-wi*(Lt||wn?1:1-ex*x)*i)),e.driftAmt>.5){const an=Math.min(Math.max(e.driftHold-vu,0)*KM,ZM);ie*=Math.exp(-(rx+an)*i)}if(Lt&&(ie*=Math.exp(-.55*i)),e.vx=fe*ie+Wt*_e,e.vz=Wt*ie-fe*_e,r>0){const an=Math.hypot(e.vx,e.vz);if(an>So){const bi=So/an;e.vx*=bi,e.vz*=bi}}Y=Math.hypot(e.vx,e.vz),e.approach.push(b),e.approach.length>$x&&e.approach.shift();const Ai=Math.hypot(e.vx,e.vz);if(Ai>DM&&-W*Ai*Ai>RM){let an=.08;for(const bi of e.approach)bi>an&&(an=bi);e.vy=Xt(Ai*an,NM,IM),e.grounded=!1,e.justLaunched=!0,e.airSteps=0,mt=!0}}else e.heading-=a*1.1*i,e.vy-=CM*i;e.px+=e.vx*i,e.pz+=e.vz*i;const ce=(e.px-t.x[S])*t.nx[S]+(e.pz-t.z[S])*t.nz[S],Ht=Math.abs(ce)<=t.halfW+Ox;e.grounded?Ht?(e.py=Qt,e.pitch=Math.atan(Xt(b,-.5,.5))):(e.grounded=!1,e.vy=0,e.airSteps=0,e.justLaunched=!1,e.pitch=Xt(Math.atan2(e.vy,Math.max(Math.hypot(e.vx,e.vz),1)),-.6,.6)):(e.py+=e.vy*i,e.airSteps++,Ht&&!e.justLaunched&&e.vy<=0&&e.py<=Qt&&(bt=e.vy,e.py=Qt,e.grounded=!0,e.vy=0,ot=!0,e.airSteps>1&&(e.rhythm.slideBlend=Math.max(0,e.rhythm.slideBlend-_u.slideRelease*e.airSteps*i))),e.pitch=Xt(Math.atan2(e.vy,Math.max(Math.hypot(e.vx,e.vz),1)),-.6,.6)),e.justLaunched=!1;const Ct=Cu(e,t,i);e.lastIdx=Ct;const B=e.px-t.x[Ct],Be=e.pz-t.z[Ct],Ot=B*t.nx[Ct]+Be*t.nz[Ct],kt=Mx(t.halfW);e.wallCool=Math.max(0,e.wallCool-i);let Tt=!1,Yt=0,Et=0,w=0;const y=e.scrapeT<=0,H=Ot>=0?1:-1,K=e.px-t.x[Ct],Z=e.pz-t.z[Ct],q=t.cum?Xt(t.cum[Ct]+K*t.tx[Ct]+Z*t.tz[Ct],0,t.barrier?t.barrier.length:t.cum[t.cum.length-1]):0,gt=t.barrier&&t.cum?Vc(t.barrier,q,H):!0;if(Math.abs(Ot)>kt&&gt){const J=Math.abs(Ot)-kt,Q=Math.sign(Ot);e.px-=t.nx[Ct]*Q*J,e.pz-=t.nz[Ct]*Q*J,Et=-t.nx[Ct]*Q,w=-t.nz[Ct]*Q;const St=e.vx*t.nx[Ct]+e.vz*t.nz[Ct],Bt=St*Q;if(Bt>0){e.vx-=t.nx[Ct]*St,e.vz-=t.nz[Ct]*St;const _e=y&&Bt<=Ss?Math.max(Bt,J*12):Bt;if(_e>Ss&&e.wallCool<=0&&(y||Bt>2*Ss)){const Tn=Xt(hx+_e*dx,0,fx),Jn=Xt((_e-Ss)/xx,0,1),rn=Jn*Jn*(3-2*Jn),Ti=Xt(Ss*Eu,0,Tu),wn=tn(Ti,Tn,rn);e.vx*=1-wn,e.vz*=1-wn,e.vx-=t.nx[Ct]*Q*_e*Au,e.vz-=t.nz[Ct]*Q*_e*Au,Yt=Xt(_e/25,0,1),Dt=Yt,Tt=!0,e.wallCool=vx,e.crashT=Sx*(wu+(1-wu)*rn),e.crashAmp=Q*bu*Yt}else if(Bt<=Ss&&y){const Tn=Xt(Bt*Eu,0,Tu);e.vx*=1-Tn,e.vz*=1-Tn,Yt=Xt(Bt/25,0,1)}else Yt=Xt(Bt/25,0,1)}e.scrapeT+=i;const fe=Xt(e.scrapeT/ux,0,1),Wt=c*Q<-.05,ie=Math.exp(-(Wt?lx:cx)*fe*i);e.vx*=ie,e.vz*=ie,Pt=!0,Y=Math.hypot(e.vx,e.vz)}else e.scrapeT=0;{const J=(e.px-t.x[Ct])*t.nx[Ct]+(e.pz-t.z[Ct])*t.nz[Ct],Q=t.y[Ct]+.2-e.py>kx;Math.abs(J)>t.halfW+Bx||Q?e.oobMs+=i*1e3:e.oobMs=Math.max(0,e.oobMs-2*i*1e3)}{const J=e.px-t.x[0],Q=e.pz-t.z[0],St=J*t.tx[0]+Q*t.tz[0];if(St<-3&&J*J+Q*Q<Lu*Lu){e.px-=t.tx[0]*(St+3),e.pz-=t.tz[0]*(St+3);const Bt=e.vx*t.tx[0]+e.vz*t.tz[0];Bt<0&&(e.vx-=t.tx[0]*Bt,e.vz-=t.tz[0]*Bt)}}const it=e.lastIdx;e.snapTimer+=i;const ut=Math.hypot(e.vx,e.vz),Gt=Math.sin(e.heading),tt=Math.cos(e.heading),dt=Math.abs(Math.atan2(e.vx*tt-e.vz*Gt,Math.abs(e.vx*Gt+e.vz*tt)+1e-6)),wt=(e.px-t.x[it])*t.nx[it]+(e.pz-t.z[it])*t.nz[it],Rt=wt>=0?1:-1,ft=(e.vx*t.nx[it]+e.vz*t.nz[it])*Rt,Vt=Math.abs(fa(e.heading-t.yaw[it])),It=e.grounded&&t.halfW-Math.abs(wt)>=Dx&&ut>=Cx&&dt<=Rx&&Vt<=Nx&&ft<=Ix&&e.scrapeT<=0&&e.crashT<=0&&it<=t.n-1-Px;if(e.snapTimer>.75&&It&&(e.rescueStreak<=0||it>=e.rescueIdx+Fx)){e.snapTimer=0;const J={i:it,x:e.px,y:e.py,z:e.pz,h:e.heading,vx:e.vx,vz:e.vz};for(e.snap=J,e.snaps.push(J);e.snaps.length>Ux+1;)e.snaps.splice(1,1);e.rescueStreak=0}let ne=!1;{const J=t.n-1,Q=(e.px-t.x[J])*t.tx[J]+(e.pz-t.z[J])*t.tz[J];if(e.prevFinD<=0&&Q>0&&e.prevRaceMs+i*1e3>PM&&e.lastIdx>=t.n-zx){const St=Xt(-e.prevFinD/(Q-e.prevFinD||1e-9),0,1);e.raceMs=e.prevRaceMs+St*i*1e3,e.px=e.px0+(e.px-e.px0)*St,e.py=e.py0+(e.py-e.py0)*St,e.pz=e.pz0+(e.pz-e.pz0)*St,e.heading=e.h0+fa(e.heading-e.h0)*St,e.rec.p.push([e.px,e.py,e.pz,e.heading]),e.rec.ts.push(e.raceMs),e.rec.t=Math.round(e.raceMs),e.finished=!0,e.finishCount++,e.px0=e.px,e.py0=e.py,e.pz0=e.pz,e.h0=e.heading,e.pitch0=e.pitch,ne=!0}else e.raceMs=e.prevRaceMs+i*1e3;e.prevFinD=e.prevFinD<=0&&Q>0?e.prevFinD:Q}e.finished||e.raceMs-e.recLastMs>=bM-1e-6&&(e.recLastMs=e.raceMs,e.rec.p.push([e.px,e.py,e.pz,e.heading]),e.rec.ts.push(e.raceMs)),Y=Math.hypot(e.vx,e.vz),Pt&&Y<Lx?e.scrapeLowMs+=i*1e3:e.scrapeLowMs=0;const F=Math.sin(e.heading),rt=Math.cos(e.heading),j=e.vx*F+e.vz*rt,$=e.vx*rt-e.vz*F;return{spd:Y,drifting:et,sIdx:it,pitch:e.pitch,launched:mt,landed:ot,finished:ne,fSpeed:j,lSpeed:$,slip:Math.atan2($,Math.abs(j)+1e-6),yawRate:fa(e.heading-e.h0)/i,offroad:Lt,surface:e.grounded?Lt?"offroad":"road":"air",landV:bt,impact:Dt,scraping:Pt,stuckMs:e.scrapeLowMs,wallHit:Tt,wallSev:Yt,wallNx:Et,wallNz:w,wallCool:e.wallCool,driftPhase:e.rhythmOut.phase,rhythmBoost:r,exitQuality:e.rhythm.lastQuality,pendAmp:e.rhythm.pendAmp,kickT:e.kickT,chainArmed:e.rhythm.chainT>0&&e.rhythm.chainDir!==0,oobMs:e.oobMs}}function Zx(e,t){const n=Xt(t,0,1);return{x:tn(e.px0,e.px,n),y:tn(e.py0,e.py,n),z:tn(e.pz0,e.pz,n),h:e.h0+fa(e.heading-e.h0)*n,pitch:tn(e.pitch0,e.pitch,n)}}function Qx(e,t,n){return t>0?n:e}function Jx(e){if(e.length===0)return[];const t=[.25,.5,.75],n=[];for(const i of t){const s=Math.min(e.length-1,Math.max(0,Math.floor(e.length*i))),r=e[s].endS;(n.length===0||r>n[n.length-1]+1)&&n.push(r)}return n}function tv(e,t){let n=0,i=1/0;for(let s=0;s<e.length;s++){const r=Math.abs(e[s]-t);r<i&&(i=r,n=s)}return n}function vc(e,t,n){if(!e||e.p.length<2||e.ts.length!==e.p.length)return-1;let i=0,s=1/0;for(let a=0;a<e.p.length;a++){const o=e.p[a][0]-t,c=e.p[a][2]-n,u=o*o+c*c;u<s&&(s=u,i=a)}const r=e.ts[i];return typeof r=="number"&&isFinite(r)&&r>=0?r:-1}function ev(e){const t=e/1e3,n=t<0?"-":"+",i=Math.abs(t);return`${n}${i.toFixed(2)}`}function Du(e,t,n){if(!isFinite(e)||!isFinite(t)||t<0)return"";const i=Math.round(Math.abs(e)/1e3*t);return`${ev(e)} · ${i}m vs ${n}`}const Nu=.1;function nv(e){return!isFinite(e)||e<0?0:e>Nu?Nu:e}const iv=11.5,Iu=2,sv=2400,rv=3650,av=140,ov=240,cv=40,lv=.3,pa=40,uv=11,hv=14,dv=5,fv=7,pv=3,mv=4;function gv(){const e=(n,i,s,r)=>({kind:"corner",corner:{dir:n,r0:i,r1:s,angleDeg:r}}),t=n=>({kind:"straight",len:n});return[t(175),e("R",145,145,45),t(50),e("L",116,116,120),t(45),e("R",118,118,125),t(50),e("L",150,150,48),t(55),e("R",66,38,92),t(190),e("L",155,155,45),t(50),e("R",112,112,115),t(185),e("L",188,188,28),t(50),e("R",120,120,120),t(55),e("L",140,140,50),t(50),e("R",186,186,30),t(55),e("L",118,118,118),t(150)]}const sr=[{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"drift",rMin:110,rMax:128,aMin:100,aMax:135},{cls:"dec",rMin:62,rMax:70,aMin:85,aMax:100},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"sweep",rMin:132,rMax:168,aMin:35,aMax:55},{cls:"kink",rMin:180,rMax:198,aMin:24,aMax:34},{cls:"kink",rMin:180,rMax:198,aMin:24,aMax:34}];function _v(e,t){return e==="sweep"?50+t()*12:e==="kink"?45+t()*12:e==="drift"?55+t()*12:45+t()*12}function Pu(e,t){const n=gv();if(t>=pa)return n;const i=Ia(Na(`canyon-${e}#${t}`)),s=b=>b[Math.floor(i()*b.length)],r=sr.map((b,I)=>b.cls==="sweep"?I:-1).filter(b=>b>=0),a=sr.map((b,I)=>b.cls==="sweep"||b.cls==="kink"?I:-1).filter(b=>b>=0),o=sr.findIndex(b=>b.cls==="dec"),c=sr.map((b,I)=>I),u=(b,I)=>{const X=s(I);return b.splice(b.indexOf(X),1),X},h=new Array(12).fill(-1);h[0]=u(c,r),h[11]=u(c,a.filter(b=>c.includes(b)));const d=2+Math.floor(i()*8);h[d]=o,c.splice(c.indexOf(o),1);const f=h.map((b,I)=>b<0?I:-1).filter(b=>b>=0);for(let b=f.length-1;b>=0;b--)h[f[b]]=c.splice(Math.floor(i()*c.length),1)[0];const m=b=>sr[h[b]],g=b=>{const I=m(b);return(I.aMin+I.aMax)/2*Math.PI/180},_=[];_.push(i()<.5?"L":"R");for(let b=1;b<12;b++)_.push(i()<.7?_[b-1]==="L"?"R":"L":_[b-1]);const p=()=>{let b=0;for(let I=0;I<12;I++)b+=(_[I]==="L"?1:-1)*g(I);return b};for(let b=0;b<24&&Math.abs(p())>50*Math.PI/180;b++){const I=1+Math.floor(i()*10),X=Math.abs(p());_[I]=_[I]==="L"?"R":"L",Math.abs(p())>=X&&(_[I]=_[I]==="L"?"R":"L")}_.includes("L")||(_[5]="L"),_.includes("R")||(_[6]="R");const l=[];l.push({kind:"straight",len:155+i()*20});const M=[];for(let b=0;b<12;b++){const I=m(b),X=I.rMin+i()*(I.rMax-I.rMin),W=I.aMin+i()*(I.aMax-I.aMin),st=I.cls==="dec"?{dir:_[b],r0:X,r1:Math.max(30,X*(.5+i()*.08)),angleDeg:W}:{dir:_[b],r0:X,r1:Math.max(30,X+(i()*8-4)),angleDeg:W};l.push({kind:"corner",corner:st}),b<11&&(M.push(l.length),l.push({kind:"straight",len:_v(m(b+1).cls,i)}))}l.push({kind:"straight",len:150+i()*20});const v=h.indexOf(o),x=v===0?0:M[v-1],R=v===11?l.length-1:M[v],A=[[x,80],[R,95]];for(let b=0;b<11;b++){const I=m(b+1);I.cls!=="drift"&&I.cls!=="dec"||_[b+1]!==_[b]&&A.push([M[b],85])}for(const[b,I]of A){const X=l[b];X.kind==="straight"&&X.len<I&&(X.len=I+i()*10)}const L=M.filter((b,I)=>{const X=m(I+1).cls;return X==="sweep"||X==="kink"}),N=L.filter(b=>{const I=m(M.indexOf(b)).cls;return I==="sweep"||I==="kink"}),E=N.length>=2?N:L.length>=2?L:M,S=E[Math.floor(i()*E.length)];let D=E[Math.floor(i()*E.length)];for(;D===S;)D=E[Math.floor(i()*E.length)];for(const b of[S,D]){const I=l[b];I.kind==="straight"&&I.len<180&&(I.len=180+i()*15)}const U=b=>l[1+b*2].corner.dir,C=b=>l[2+b*2].len;let P=0;for(let b=0;b<11;b++)U(b)!==U(b+1)&&C(b)<=110&&P++;for(let b=0;b<11&&P<2;b++)if(U(b)===U(b+1)&&C(b)<=110){const I=l[1+(b+1)*2];I.corner.dir=I.corner.dir==="L"?"R":"L",P++}return l}function Mv(){return{climbTop:14,rollerAmp:.8,rollerLen:260,rollerPhase:0}}function xv(e,t){const n=Ia(Na(`canyon-elev-${e}#${t}`));return{climbTop:10+n()*6,rollerAmp:.4+n()*.4,rollerLen:240+n()*80,rollerPhase:n()*Math.PI*2}}function vv(e,t){const n=Ia(Na(`canyon-mark-${e}#${t}`));return[.26+n()*.08,.5+n()*.1,.74+n()*.08]}function jh(e,t){return Yh(e,t,Mv(),[.3,.55,.8])}function Yh(e,t,n,i){const s=[{x:0,z:0,s:0}];let r=0,a=0,o=0,c=0;const u=[];for(const l of e)if(l.kind==="straight"){u.push({a:c,b:c+l.len});let M=l.len;for(;M>1e-9;){const v=Math.min(Iu,M);r+=Math.sin(o)*v,a+=Math.cos(o)*v,c+=v,M-=v,s.push({x:r,z:a,s:c})}}else{const{dir:M,r0:v,r1:x,angleDeg:R}=l.corner,A=M==="L"?1:-1,L=R*Math.PI/180;let N=0;for(;N<L-1e-9;){const E=v+(x-v)*(N/L),S=Math.min(Iu/E,L-N),D=E*S;o+=A*S,r+=Math.sin(o)*D,a+=Math.cos(o)*D,c+=D,N+=S,s.push({x:r,z:a,s:c})}}const h=c,d=u.slice(1,-1).map((l,M)=>({r:l,len:l.b-l.a,k:M})).sort((l,M)=>M.len-l.len),f=[d[0].r,d[1].r],m=f.map(l=>Math.min(l.b-150-t%3*5,l.b-150)).map((l,M)=>Math.max(l,f[M].a+40)),g=(l,M,v)=>{const x=Xt((v-l)/(M-l),0,1);return x*x*(3-2*x)},_=l=>{const M=h-350,v=6+(Xt(l,250,M)-250)/Math.max(M-250,1)*(n.climbTop-6)+Math.sin((Xt(l,250,M)-250)/n.rollerLen*Math.PI*2+n.rollerPhase)*n.rollerAmp,x=14-(Xt(l,M,h-150)-M)/200*7;let R=tn(6,v,g(210,290,l));R=tn(R,x,g(M-60,M+60,l)),R=tn(R,7,g(h-260,h-140,l));for(const A of m){const L=(l-A)/18;R+=4.5*Math.exp(-L*L)}return R};return{points:s.map(l=>({x:l.x,y:_(l.s),z:l.z})),s:s.map(l=>l.s),crestS:m,straightRanges:u,landmarkS:i.map(l=>l*h)}}function Sv(e){const t=[0];for(let n=1;n<e.length;n++)t.push(t[n-1]+Math.hypot(e[n].x-e[n-1].x,e[n].z-e[n-1].z));return t}function yv(e,t){const n=[];let i=e[0]+t;for(let s=1;s<e.length-1;s++)e[s]>=i&&(n.push(s),i=e[s]+t);return n}function Sc(e){const t=e.length,n=[0];for(let l=1;l<t;l++)n.push(n[l-1]+Math.hypot(e[l].x-e[l-1].x,e[l].z-e[l-1].z));const i=n[t-1],s=[];for(let l=0;l<t;l++){const M=e[Math.max(l-2,0)],v=e[Math.min(l+2,t-1)];s.push(Math.atan2(v.x-M.x,v.z-M.z))}const r=[s[0]];for(let l=1;l<t;l++){let M=s[l]-r[l-1];for(;M>Math.PI;)M-=2*Math.PI;for(;M<-Math.PI;)M+=2*Math.PI;r.push(r[l-1]+M)}const a=7,o=[];for(let l=0;l<t;l++){let M=0,v=0;for(let x=-a;x<=a;x++){const R=l+x;R>=0&&R<t&&(M+=r[R],v++)}o.push(M/v)}const c=new Array(t).fill(1/0);for(let l=1;l<t-1;l++){const M=n[l+1]-n[l-1],v=Math.abs(o[l+1]-o[l-1]);v>1e-6&&M>1e-9&&(c[l]=M/v)}const u=[];let h=0;const d=l=>c[l]<200;for(;h<t;){if(!d(h)){h++;continue}let l=h;for(;l<t&&d(l);)l++;let M=l;for(;M<t&&!d(M)&&(M<l||n[M]-n[l-1]<25);)M++;if(M<t&&d(M)&&n[M]-n[l-1]<25)for(l=M;l<t&&d(l);)l++;if(n[l-1]-n[h]>=30){const v=c.slice(h,l).filter(C=>isFinite(C)),x=v.slice().sort((C,P)=>C-P),R=x.length?x[Math.floor(x.length/2)]:1/0,A=Math.min(8,Math.floor(v.length/4)),L=v.slice(A,v.length-A),N=C=>{const P=C.slice().sort((b,I)=>b-I);return P.length?P[Math.floor(P.length/2)]:R},E=Math.max(1,Math.floor(L.length/3)),S=N(L.slice(0,E)),D=N(L.slice(-E));let U=0;for(let C=h;C<l-1;C++)U+=r[C+1]-r[C];u.push({startS:n[h],endS:n[l-1],dir:U>=0?"L":"R",medR:R,entryR:S,exitR:D,decreasing:D<.8*S})}h=l}let f=1/0;for(let l=0;l<t;l+=2)for(let M=l+150;M<t;M+=2){const v=Math.hypot(e[l].x-e[M].x,e[l].z-e[M].z);v<f&&(f=v)}let m=0,g=1/0,_=-1/0;for(let l=0;l<t;l++)if(g=Math.min(g,e[l].y),_=Math.max(_,e[l].y),l>0){const M=n[l]-n[l-1];M>1e-9&&(m=Math.max(m,Math.abs((e[l].y-e[l-1].y)/M)))}let p=0;for(let l=2;l<t-2;l++){const M=e[l].y;if(M<=e[l-1].y||M<=e[l+1].y||M<=e[l-2].y||M<=e[l+2].y)continue;let v=1/0;for(let L=-60;L<=60;L++){const N=l+L;N>=0&&N<t&&(v=Math.min(v,e[N].y))}if(M-v<2.5)continue;const x=(M+v)/2;let R=l,A=l;for(;R>0&&e[R-1].y>x;)R--;for(;A<t-1&&e[A+1].y>x;)A++;n[A]-n[R]<=70&&p++}return{length:i,n:t,events:u,clearance:f,maxGrade:m,elevMin:g,elevMax:_,crestCount:p}}function yc(e){let t=2166136261;const n=i=>{const s=Math.round(i*1e3);t^=s&65535,t=Math.imul(t,16777619),t^=s>>>16&65535,t=Math.imul(t,16777619)};for(const i of e)n(i.x),n(i.y),n(i.z);return(t>>>0).toString(16)}function Ec(e){const t=e.length,n=[0];for(let o=1;o<t;o++)n.push(n[o-1]+Math.hypot(e[o].x-e[o-1].x,e[o].z-e[o-1].z));const i=[];for(let o=0;o<t;o++){const c=e[Math.max(o-3,0)],u=e[Math.min(o+3,t-1)];i.push(Math.atan2(u.x-c.x,u.z-c.z))}const s=[];for(let o=0;o<t;o++){const c=Math.max(o-3,0),u=Math.min(o+3,t-1);let h=Math.abs(i[u]-i[c]);for(;h>Math.PI;)h=2*Math.PI-h;const f=Math.max(n[u]-n[c],1e-6)/Math.max(h,1e-6),m=f<=130?95:48;s.push(Math.min(80,Math.sqrt(m*Math.min(f,1e6))))}const r=s.slice();r[0]=Math.min(r[0],10);for(let o=1;o<t;o++){const c=Math.max(n[o]-n[o-1],1e-6);r[o]=Math.min(s[o],Math.sqrt(r[o-1]*r[o-1]+150*c))}for(let o=t-2;o>=0;o--){const c=Math.max(n[o+1]-n[o],1e-6);r[o]=Math.min(r[o],Math.sqrt(r[o+1]*r[o+1]+140*c))}let a=0;for(let o=1;o<t;o++){const c=n[o]-n[o-1];a+=2*c/Math.max(r[o]+r[o-1],1e-6)}return a}function Ev(e,t){if(e.length<sv||e.length>rv)return!1;const n=e.events;if(n.length<uv||n.length>hv)return!1;const i=n.filter(a=>a.medR>=45&&a.medR<=130);if(i.length<dv||i.length>fv)return!1;const s=n.filter(a=>a.medR>130&&a.medR<=175);if(s.length<pv||s.length>mv||!n.some(a=>a.dir==="L")||!n.some(a=>a.dir==="R"))return!1;let r=0;for(let a=1;a<n.length;a++)n[a].dir!==n[a-1].dir&&n[a].startS-n[a-1].endS<=110&&r++;if(r<2||!n.some(a=>a.decreasing)||n[0].startS<av||n[0].startS>ov||e.clearance<cv||e.maxGrade>lv||e.crestCount<1||e.crestCount>2)return!1;for(const a of t.crestS){const o=n.find(c=>c.startS>a);if(!o){if(e.length-(a+65)<60)return!1;continue}if(o.startS-(a+65)<60||!(o.medR>130))return!1}return!0}function Tv(e){for(let i=0;i<pa;i++){const s=Yh(Pu(e,i),i,xv(e,i),vv(e,i)),r=Sc(s.points);if(Ev(r,s))return{points:s.points,stats:r,attempt:i,fallback:!1,crestS:s.crestS,estTimeS:Ec(s.points),checksum:yc(s.points),landmarkS:s.landmarkS}}const t=jh(Pu(e,pa),0),n=Sc(t.points);return{points:t.points,stats:n,attempt:pa,fallback:!0,crestS:t.crestS,estTimeS:Ec(t.points),checksum:yc(t.points),landmarkS:t.landmarkS}}const wv=1,Av={practice:"eyJ2IjozLCJ0IjoxNTc2MywicCI6W1swLDYsMCwwXSxbMCw2LDIsMF0sWzAsNiw1LjUsMF0sWzAsNiwxMC41LDBdLFswLDYsMTYuNSwwXSxbMCw2LDI0LDBdLFswLDYsMzIuNSwwXSxbMCw2LDQyLjUsLTAuMDFdLFswLDYsNTIuNSwtMC4xNl0sWy0xLDYsNjIuNSwtMC4yXSxbLTIuNSw2LDczLC0wLjA1XSxbLTMuNSw2LDg0LjUsLTAuMDFdLFstNCw2LDk1LjUsLTAuMDFdLFstNC41LDYsMTA2LjUsLTAuMDddLFstNSw2LDExNy41LC0wLjFdLFstNiw2LDEyOCwtMC4wN10sWy02LjUsNiwxMzcuNSwwXSxbLTcsNiwxNDcuNSwwLjA2XSxbLTYuNSw2LDE1Ny41LDAuMTFdLFstNiw2LDE2NywwLjEyXSxbLTUsNiwxNzcsMC4wOV0sWy00LjUsNiwxODYuNSwwLjA1XSxbLTQsNiwxOTYuNSwwXSxbLTMuNSw2LDIwNi41LC0wLjA2XSxbLTMuNSw2LDIxNi41LC0wLjE3XSxbLTUsNiwyMjcuNSwtMC4zNF0sWy03LjUsNiwyMzguNSwtMC40OF0sWy0xMS41LDYsMjQ5LC0wLjZdLFstMTYsNi41LDI1OC41LC0wLjddLFstMjEuNSw2LjUsMjY3LC0wLjc3XSxbLTI4LDcsMjc1LC0wLjc5XSxbLTM1LDcuNSwyODIuNSwtMC44N10sWy00Miw3LjUsMjg5LjUsLTAuOTJdLFstNTAsOCwyOTYsLTEuMDFdLFstNTgsOCwzMDEuNSwtMS4wOF0sWy02Nyw4LDMwNi41LC0xLjE2XSxbLTc2LDgsMzExLC0xLjIyXSxbLTg1LjUsOCwzMTUsLTEuM10sWy05NSw4LDMxOCwtMS4zN10sWy0xMDUsOCwzMjAuNSwtMS40Nl0sWy0xMTUsOCwzMjIsLTEuNTVdLFstMTI1LDgsMzIyLjUsLTEuNjNdLFstMTM1LDgsMzIyLC0xLjc2XSxbLTE0NSw4LDMyMSwtMS44XSxbLTE1NSw4LDMxOSwtMS44N10sWy0xNjUsOCwzMTYuNSwtMS45MV0sWy0xNzQuNSw4LDMxMy41LC0xLjkyXSxbLTE4NSw4LDMxMCwtMS45NF0sWy0xOTUsOC41LDMwNi41LC0xLjkzXSxbLTIwNSw5LDMwMi41LC0xLjkzXSxbLTIxNSwxMS41LDI5OSwtMS45M10sWy0yMjUsMTIuNSwyOTUsLTEuOTJdLFstMjM1LDE0LDI5MS41LC0xLjkyXSxbLTI0NSwxNC41LDI4Ny41LC0xLjkxXSxbLTI1NSwxNC41LDI4NCwtMS45XSxbLTI2NSwxNC41LDI4MCwtMS44OV0sWy0yNzUsMTMuNSwyNzYuNSwtMS44OV0sWy0yODUsMTIuNSwyNzIuNSwtMS44OF0sWy0yOTUsMTEsMjY5LC0xLjg3XSxbLTMwNC41LDExLjUsMjY2LC0xLjczXSxbLTMxNCwxMS41LDI2My41LC0xLjU5XSxbLTMyNC41LDExLjUsMjYyLC0xLjc1XSxbLTMzNS41LDExLjUsMjYwLjUsLTEuOF0sWy0zNDYuNSwxMS41LDI1OC41LC0xLjgyXSxbLTM1NywxMS41LDI1NiwtMS43OV0sWy0zNjgsMTEuNSwyNTMuNSwtMS43XSxbLTM3OC41LDExLDI1MiwtMS42Nl0sWy0zODguNSwxMSwyNTAuNSwtMS42N10sWy0zOTgsMTEsMjQ5LjUsLTEuNzFdLFstNDA4LDExLDI0OCwtMS43M10sWy00MTcuNSwxMS41LDI0Ni41LC0xLjddLFstNDI3LjUsMTEuNSwyNDUuNSwtMS42NF0sWy00MzcuNSwxMS41LDI0NC41LC0xLjU3XSxbLTQ0OC41LDEyLDI0NCwtMS40NF0sWy00NTkuNSwxMiwyNDUsLTEuNDFdLFstNDcwLjUsMTIuNSwyNDYsLTEuMzFdLFstNDgxLjUsMTIuNSwyNDguNSwtMS4zMl0sWy00OTIsMTMsMjUxLC0xLjNdLFstNTAyLjUsMTQuNSwyNTMuNSwtMS4yOF0sWy01MTMsMTYuNSwyNTYuNSwtMS4yNl0sWy01MjMsMTgsMjYwLC0xLjI0XSxbLTUzMy41LDE5LDI2MywtMS4yMl0sWy01NDQsMTkuNSwyNjYsLTEuMjFdLFstNTU0LDE5LjUsMjY5LC0xLjE5XSxbLTU2NC41LDE5LDI3MiwtMS4xOV0sWy01NzUsMTgsMjc1LC0xLjE4XSxbLTU4NSwxNi41LDI3OC41LC0xLjE3XSxbLTU5NS41LDE0LjUsMjgxLjUsLTEuMTddLFstNjA1LjUsMTMuNSwyODQuNSwtMS4xN10sWy02MTUsMTMsMjg4LC0xLjE4XSxbLTYyNC41LDEyLjUsMjkyLC0xLjJdLFstNjM0LDEyLDI5NS41LC0xLjMxXSxbLTY0NCwxMiwyOTksLTEuNDRdLFstNjUzLjUsMTEuNSwzMDEsLTEuMzddLFstNjY0LDExLDMwMywtMS4zM10sWy02NzUsMTAuNSwzMDUsLTEuNF0sWy02ODUsMTAsMzA3LC0xLjQ1XSxbLTY5NC41LDkuNSwzMDguNSwtMS40NV0sWy03MDQuNSw5LDMxMCwtMS42Ml0sWy03MTQuNSw4LjUsMzEwLjUsLTEuNjRdLFstNzI1LjUsOCwzMTAsLTEuNjZdLFstNzM2LjUsNy41LDMwOS41LC0xLjc0XSxbLTc0Ny41LDcuNSwzMDgsLTEuNzhdLFstNzU4LjUsNywzMDYsLTEuNzldLFstNzY5LjUsNywzMDQsLTEuNzldLFstNzgwLDcsMzAxLjUsLTEuNzldLFstNzkwLjUsNywyOTkuNSwtMS43OV0sWy04MDEsNywyOTcsLTEuNzhdLFstODExLjUsNywyOTUsLTEuNzhdLFstODIyLDcsMjkyLjUsLTEuNzhdLFstODMyLDcsMjkwLC0xLjc4XSxbLTg0Mi41LDcsMjg4LC0xLjc4XSxbLTg1Myw3LDI4NS41LC0xLjc5XSxbLTg2My41LDcsMjgzLjUsLTEuNzhdLFstODczLjUsNywyODEuNSwtMS42OF0sWy04ODMuNSw3LDI3OS41LC0xLjY0XSxbLTg5My41LDcsMjc4LjUsLTEuNzldLFstOTAzLjUsNywyNzYuNSwtMS43N10sWy05MTMuNSw3LDI3NSwtMS42M10sWy05MTUuNSw3LDI3NC41LC0xLjZdXSwidHMiOlswLDEzMywyNjcsNDAwLDUzMyw2NjcsODAwLDkzMywxMDY3LDEyMDAsMTMzMywxNDY3LDE2MDAsMTczMywxODY3LDIwMDAsMjEzMywyMjY3LDI0MDAsMjUzMywyNjY3LDI4MDAsMjkzMywzMDY3LDMyMDAsMzMzMywzNDY3LDM2MDAsMzczMywzODY3LDQwMDAsNDEzMyw0MjY3LDQ0MDAsNDUzMyw0NjY3LDQ4MDAsNDkzMyw1MDY3LDUyMDAsNTMzMyw1NDY3LDU2MDAsNTczMyw1ODY3LDYwMDAsNjEzMyw2MjY3LDY0MDAsNjUzMyw2NjY3LDY4MDAsNjkzMyw3MDY3LDcyMDAsNzMzMyw3NDY3LDc2MDAsNzczMyw3ODY3LDgwMDAsODEzMyw4MjY3LDg0MDAsODUzMyw4NjY3LDg4MDAsODkzMyw5MDY3LDkyMDAsOTMzMyw5NDY3LDk2MDAsOTczMyw5ODY3LDEwMDAwLDEwMTMzLDEwMjY3LDEwNDAwLDEwNTMzLDEwNjY3LDEwODAwLDEwOTMzLDExMDY3LDExMjAwLDExMzMzLDExNDY3LDExNjAwLDExNzMzLDExODY3LDEyMDAwLDEyMTMzLDEyMjY3LDEyNDAwLDEyNTMzLDEyNjY3LDEyODAwLDEyOTMzLDEzMDY3LDEzMjAwLDEzMzMzLDEzNDY3LDEzNjAwLDEzNzMzLDEzODY3LDE0MDAwLDE0MTMzLDE0MjY3LDE0NDAwLDE0NTMzLDE0NjY3LDE0ODAwLDE0OTMzLDE1MDY3LDE1MjAwLDE1MzMzLDE1NDY3LDE1NjAwLDE1NzMzLDE1NzYzXSwidHJhY2siOnsiZGF5IjoiMjAyNi0wMS0wMSIsImNvdXJzZSI6IjI3MTAxMWFjIiwiZ2VuIjoxfX0",benchmark:"eyJ2IjozLCJ0IjoyMzQ4NiwicCI6W1swLDYsMCwwXSxbMCw2LDIsMF0sWzAsNiw1LjUsMF0sWzAsNiwxMC41LDBdLFswLDYsMTYuNSwwXSxbMCw2LDI0LDBdLFswLDYsMzIuNSwwXSxbMCw2LDQyLjUsMC4wMV0sWzAsNiw1Mi41LDAuMTZdLFsxLDYsNjIuNSwwLjJdLFsyLjUsNiw3MywwLjA1XSxbMy41LDYsODQuNSwwLjAxXSxbNCw2LDk1LjUsMC4wMV0sWzQuNSw2LDEwNi41LDAuMDddLFs1LDYsMTE3LjUsMC4xXSxbNiw2LDEyOCwwLjA3XSxbNi41LDYsMTM3LjUsMC4wMV0sWzcsNiwxNDcuNSwtMC4wNl0sWzYuNSw2LDE1Ny41LC0wLjA5XSxbNiw2LDE2NywtMC4wN10sWzUuNSw2LDE3NywtMC4wM10sWzUuNSw2LDE4Ni41LDAuMDRdLFs1LjUsNiwxOTcsMC4xMl0sWzYsNiwyMDcuNSwwLjI5XSxbOC41LDYsMjE4LjUsMC40NV0sWzEyLDYsMjI5LDAuNThdLFsxNi41LDYsMjM5LDAuN10sWzIyLDYsMjQ4LDAuNzldLFsyOC41LDYuNSwyNTYsMC44Ml0sWzM1LjUsNi41LDI2My41LDAuODZdLFs0Mi41LDcsMjcwLDAuOTVdLFs1MSw3LDI3Ni41LDFdLFs1OSw3LjUsMjgyLDEuMV0sWzY4LDcuNSwyODcsMS4xNl0sWzc3LDcuNSwyOTEuNSwxLjI2XSxbODYuNSw3LjUsMjk1LDEuM10sWzk2LDcuNSwyOTgsMS4zNl0sWzEwNiw3LjUsMzAwLjUsMS40NF0sWzExNiw3LjUsMzAyLjUsMS41Ml0sWzEyNiw3LDMwMywxLjYxXSxbMTM2LDcsMzAzLDEuNjldLFsxNDYsNywzMDIuNSwxLjc4XSxbMTU2LDcsMzAwLjUsMS44N10sWzE2Niw2LjUsMjk4LDEuOTNdLFsxNzUuNSw2LjUsMjk1LDJdLFsxODUsNi41LDI5MSwyLjAxXSxbMTk0LjUsNi41LDI4Ni41LDIuMTRdLFsyMDQsNywyODIsMi4xN10sWzIxMi41LDcsMjc2LjUsMi4xN10sWzIyMSw3LDI3MSwyLjE1XSxbMjMwLDcuNSwyNjUuNSwyLjFdLFsyMzguNSw3LjUsMjYwLDIuMDldLFsyNDcsOCwyNTUsMi4wOV0sWzI1Ni41LDgsMjQ5LjUsMi4wMV0sWzI2NS41LDguNSwyNDUsMS45Nl0sWzI3NC41LDguNSwyNDEsMS45M10sWzI4NCw5LDIzNy41LDEuODJdLFsyOTMuNSw5LDIzNC41LDEuNzddLFszMDMuNSw5LDIzMiwxLjY5XSxbMzEzLjUsOSwyMzAuNSwxLjU2XSxbMzIzLjUsOSwyMzAsMS41MV0sWzMzNCw5LDIzMCwxLjQyXSxbMzQ0LDksMjMxLDEuM10sWzM1My41LDksMjMzLDEuMjRdLFszNjMuNSw5LDIzNiwxLjE0XSxbMzczLDksMjQwLDEuMDddLFszODIsOC41LDI0NC41LDAuOTJdLFszOTAuNSw4LjUsMjUwLDAuODZdLFszOTguNSw4LjUsMjU2LDAuNzldLFs0MDUuNSw4LjUsMjYzLDAuN10sWzQxMi41LDguNSwyNzAuNSwwLjYxXSxbNDE5LDguNSwyNzguNSwwLjQ5XSxbNDI0LDguNSwyODcsMC40NF0sWzQyOC41LDguNSwyOTYsMC4zNV0sWzQzMi41LDguNSwzMDUuNSwwLjI5XSxbNDM2LDksMzE1LDAuMTZdLFs0MzgsOSwzMjQuNSwwLjEyXSxbNDM5LjUsOS41LDMzNSwwLjAzXSxbNDQwLjUsOS41LDM0NSwwXSxbNDQxLDEwLDM1NS41LC0wLjA2XSxbNDQwLjUsMTAsMzY1LjUsLTAuMDZdLFs0NDAsMTAuNSwzNzYsLTAuMDRdLFs0MzkuNSwxMSwzODcsLTAuMDRdLFs0MzksMTIuNSwzOTcuNSwtMC4wNV0sWzQzOC41LDE0LjUsNDA4LC0wLjA1XSxbNDM4LDE1LjUsNDE5LC0wLjA1XSxbNDM3LjUsMTYuNSw0MjkuNSwtMC4wNV0sWzQzNywxNi41LDQ0MCwtMC4wNV0sWzQzNi41LDE2LjUsNDUwLjUsLTAuMDVdLFs0MzYsMTYsNDYxLjUsLTAuMDVdLFs0MzUuNSwxNSw0NzIsLTAuMDVdLFs0MzUsMTMuNSw0ODIuNSwtMC4wNV0sWzQzNC41LDExLjUsNDkzLjUsLTAuMDVdLFs0MzQsMTAuNSw1MDQsLTAuMDNdLFs0MzQsMTAsNTE0LDAuMTRdLFs0MzQuNSwxMCw1MjQsMC4xOV0sWzQzNiwxMCw1MzQuNSwwLjA0XSxbNDM3LDEwLDU0NiwwXSxbNDM3LDEwLjUsNTU3LDAuMDNdLFs0MzcuNSwxMC41LDU2OCwwLjA1XSxbNDM4LDEwLjUsNTc5LC0wLjAxXSxbNDM4LjUsMTEsNTkwLjUsLTAuMDFdLFs0MzguNSwxMS41LDYwMS41LDAuMDhdLFs0MzksMTEuNSw2MTIsMC4xOF0sWzQ0MCwxMiw2MjIuNSwwLjM0XSxbNDQyLDEyLDYzMiwwLjQ1XSxbNDQ1LDEyLjUsNjQxLjUsMC41Ml0sWzQ0OSwxMi41LDY1MC41LDAuNTZdLFs0NTMuNSwxMi41LDY1OS41LDAuNTldLFs0NTguNSwxMi41LDY2OCwwLjYyXSxbNDYzLjUsMTIuNSw2NzYsMC42Nl0sWzQ2OS41LDEyLjUsNjg0LDAuNjhdLFs0NzUuNSwxMi41LDY5MiwwLjddLFs0ODEuNSwxMi41LDY5OS41LDAuN10sWzQ4Ny41LDEyLjUsNzA3LjUsMC43MV0sWzQ5My41LDEyLjUsNzE1LDAuNjddLFs1MDAsMTIuNSw3MjIuNSwwLjYzXSxbNTA2LDEyLDczMCwwLjU3XSxbNTExLjUsMTIsNzM4LDAuNTFdLFs1MTcsMTIsNzQ2LjUsMC40NF0sWzUyMiwxMiw3NTUuNSwwLjI5XSxbNTI2LDEyLDc2NS41LDAuMDldLFs1MjguNSwxMiw3NzYuNSwtMC4xMV0sWzUyOS41LDEyLDc4NywtMC4zMV0sWzUyOC41LDEyLjUsNzk3LjUsLTAuNTFdLFs1MjYsMTIuNSw4MDcuNSwtMC43MV0sWzUyMS41LDEzLDgxNiwtMC44Nl0sWzUxNS41LDEzLDgyNCwtMC44NV0sWzUwOCwxMy41LDgzMS41LC0wLjg1XSxbNTAwLDE1LDgzOC41LC0wLjg5XSxbNDkxLjUsMTcsODQ1LjUsLTAuOTRdLFs0ODMuNSwxOCw4NTIsLTAuOTldLFs0NzUsMTksODU5LC0xLjAyXSxbNDY3LDE5LjUsODY1LjUsLTEuMDVdLFs0NTguNSwxOS41LDg3Mi41LC0xLjA3XSxbNDUwLjUsMTksODc5LC0xLjA4XSxbNDQyLDE4LDg4NiwtMS4wOV0sWzQzNCwxNi41LDg5Mi41LC0xLjFdLFs0MjUuNSwxNC41LDg5OS41LC0xLjExXSxbNDE4LDE0LDkwNSwtMS4wOF0sWzQxMCwxNCw5MTAsLTEuMDhdLFs0MDEsMTQsOTE1LC0xLjA4XSxbMzkyLjUsMTQsOTIwLC0wLjkyXSxbMzg0LDE0LDkyNS41LC0wLjc4XSxbMzc2LDEzLjUsOTMyLC0wLjk0XSxbMzY3LjUsMTMuNSw5MzksLTAuOV0sWzM1OSwxMyw5NDUuNSwtMC44M10sWzM1MS41LDEyLjUsOTUyLC0wLjgxXSxbMzQ0LDEyLDk1OC41LC0wLjddLFszMzcsMTEuNSw5NjYsLTAuNjFdLFszMzAuNSwxMS41LDk3My41LC0wLjYyXSxbMzI0LDExLDk4Mi41LC0wLjU0XSxbMzE4LDEwLjUsOTkxLjUsLTAuNDZdLFszMTIsMTAsMTAwMS41LC0wLjQxXSxbMzA3LDksMTAxMSwtMC4zNV0sWzMwMyw4LjUsMTAyMSwtMC4zN10sWzI5OSw4LDEwMzAsLTAuNDFdLFsyOTUsOCwxMDM5LjUsLTAuNDFdLFsyOTAuNSw3LjUsMTA0OSwtMC40Nl0sWzI4Ni41LDcuNSwxMDU4LC0wLjQ2XSxbMjgyLDcsMTA2Ny41LC0wLjM0XSxbMjc4LDcsMTA3Ni41LC0wLjMzXSxbMjc0LjUsNywxMDg2LC0wLjQ1XSxbMjcwLjUsNywxMDk1LjUsLTAuNDddLFsyNjYuNSw3LDExMDUsLTAuMzVdLFsyNjIuNSw3LDExMTQsLTAuMzNdLFsyNTguNSw3LDExMjMuNSwtMC4zXSxbMjU1LjUsNywxMTMyLjUsLTAuM10sWzI1Mi41LDcsMTE0MS41LC0wLjM1XSxbMjQ5LDcsMTE1MSwtMC40XSxbMjQ1LjUsNywxMTYwLC0wLjQzXSxbMjQxLjUsNywxMTY5LC0wLjQyXSxbMjM4LDcsMTE3OCwtMC40XSxbMjM0LDcsMTE4NywtMC40XSxbMjMwLDcsMTE5NiwtMC40XSxbMjI2LjUsNywxMjA1LC0wLjQxXSxbMjIyLjUsNywxMjE0LC0wLjQ0XSxbMjIyLDcsMTIxNS41LC0wLjQ1XV0sInRzIjpbMCwxMzMsMjY3LDQwMCw1MzMsNjY3LDgwMCw5MzMsMTA2NywxMjAwLDEzMzMsMTQ2NywxNjAwLDE3MzMsMTg2NywyMDAwLDIxMzMsMjI2NywyNDAwLDI1MzMsMjY2NywyODAwLDI5MzMsMzA2NywzMjAwLDMzMzMsMzQ2NywzNjAwLDM3MzMsMzg2Nyw0MDAwLDQxMzMsNDI2Nyw0NDAwLDQ1MzMsNDY2Nyw0ODAwLDQ5MzMsNTA2Nyw1MjAwLDUzMzMsNTQ2Nyw1NjAwLDU3MzMsNTg2Nyw2MDAwLDYxMzMsNjI2Nyw2NDAwLDY1MzMsNjY2Nyw2ODAwLDY5MzMsNzA2Nyw3MjAwLDczMzMsNzQ2Nyw3NjAwLDc3MzMsNzg2Nyw4MDAwLDgxMzMsODI2Nyw4NDAwLDg1MzMsODY2Nyw4ODAwLDg5MzMsOTA2Nyw5MjAwLDkzMzMsOTQ2Nyw5NjAwLDk3MzMsOTg2NywxMDAwMCwxMDEzMywxMDI2NywxMDQwMCwxMDUzMywxMDY2NywxMDgwMCwxMDkzMywxMTA2NywxMTIwMCwxMTMzMywxMTQ2NywxMTYwMCwxMTczMywxMTg2NywxMjAwMCwxMjEzMywxMjI2NywxMjQwMCwxMjUzMywxMjY2NywxMjgwMCwxMjkzMywxMzA2NywxMzIwMCwxMzMzMywxMzQ2NywxMzYwMCwxMzczMywxMzg2NywxNDAwMCwxNDEzMywxNDI2NywxNDQwMCwxNDUzMywxNDY2NywxNDgwMCwxNDkzMywxNTA2NywxNTIwMCwxNTMzMywxNTQ2NywxNTYwMCwxNTczMywxNTg2NywxNjAwMCwxNjEzMywxNjI2NywxNjQwMCwxNjUzMywxNjY2NywxNjgwMCwxNjkzMywxNzA2NywxNzIwMCwxNzMzMywxNzQ2NywxNzYwMCwxNzczMywxNzg2NywxODAwMCwxODEzMywxODI2NywxODQwMCwxODUzMywxODY2NywxODgwMCwxODkzMywxOTA2NywxOTIwMCwxOTMzMywxOTQ2NywxOTYwMCwxOTczMywxOTg2NywyMDAwMCwyMDEzMywyMDI2NywyMDQwMCwyMDUzMywyMDY2NywyMDgwMCwyMDkzMywyMTA2NywyMTIwMCwyMTMzMywyMTQ2NywyMTYwMCwyMTczMywyMTg2NywyMjAwMCwyMjEzMywyMjI2NywyMjQwMCwyMjUzMywyMjY2NywyMjgwMCwyMjkzMywyMzA2NywyMzIwMCwyMzMzMywyMzQ2NywyMzQ4Nl0sInRyYWNrIjp7ImRheSI6IjIwMjYtMDEtMDIiLCJjb3Vyc2UiOiIxOTljYTdiYiIsImdlbiI6MX19"},bv={practice:"2026-01-01",benchmark:"2026-01-02"},Eo={gold:1.08,silver:1.2,bronze:1.36},To={gold:1.1,silver:1.22,bronze:1.4},Lv=zh,Cv=1,Rv=[{kind:"straight",len:200},{kind:"corner",corner:{dir:"R",r0:122,r1:122,angleDeg:108}},{kind:"straight",len:220},{kind:"corner",corner:{dir:"L",r0:165,r1:165,angleDeg:36}},{kind:"straight",len:200},{kind:"corner",corner:{dir:"R",r0:150,r1:150,angleDeg:30}},{kind:"straight",len:180}],Dv=[{kind:"straight",len:180},{kind:"corner",corner:{dir:"L",r0:122,r1:122,angleDeg:118}},{kind:"straight",len:95},{kind:"corner",corner:{dir:"R",r0:120,r1:120,angleDeg:120}},{kind:"straight",len:210},{kind:"corner",corner:{dir:"L",r0:165,r1:165,angleDeg:42}},{kind:"straight",len:80},{kind:"corner",corner:{dir:"R",r0:66,r1:38,angleDeg:92}},{kind:"straight",len:200},{kind:"corner",corner:{dir:"L",r0:185,r1:185,angleDeg:30}},{kind:"straight",len:220}],Nv={practice:Rv,benchmark:Dv};function Iv(e){const t=(e||"").replace(/^\?/,"");for(const n of t.split("&")){if(!n)continue;const i=n.indexOf("="),s=i<0?n:n.slice(0,i),r=i<0?"":n.slice(i+1);let a=s,o=r;try{a=decodeURIComponent(s),o=decodeURIComponent(r)}catch{}if(a!=="m"&&a!=="mode"&&a!=="course")continue;const c=o.trim().toLowerCase();if(c==="practice"||c==="benchmark")return c;if(c==="daily")return"daily"}return"daily"}function Uu(e,t,n){const i=`v${wv}.${Cv}`;return e==="daily"?`canyon-course-${e}-${n}-${t}-${i}`:`canyon-course-${e}-${n}-${i}`}function Pv(e){const t=jh(e,0),n=Sc(t.points);return{points:t.points,stats:n,attempt:0,fallback:!1,crestS:t.crestS,estTimeS:Ec(t.points),checksum:yc(t.points),landmarkS:t.landmarkS}}function Uv(e){return{bronzeMs:Math.round(e*Eo.bronze),silverMs:Math.round(e*Eo.silver),goldMs:Math.round(e*Eo.gold)}}function Fv(e){const t=e*1e3;return{bronzeMs:Math.round(t*To.bronze),silverMs:Math.round(t*To.silver),goldMs:Math.round(t*To.gold)}}function Fu(e,t){return e==="practice"?{title:"Drift Practice",description:"A short teachable drift with a generous exit. Steer, tap the handbrake, then countersteer to straighten."}:e==="benchmark"?{title:"Benchmark Sprint",description:"Fixed sprint: broad drift, reversal, a controlled crest landing, a tightening challenge, and a fast finish."}:{title:"Canyon Daily",description:`Seeded sprint for ${t} — the same course for everyone.`}}const zu=new Map;function zv(e,t){const n=e==="daily"?`daily|${t}`:e,i=zu.get(n);if(i)return i;const s=Ov(e,t);return zu.set(n,s),s}function Ov(e,t){if(e==="daily"){const u=Tv(t),{title:h,description:d}=Fu(e,t);return{mode:e,title:h,description:d,identityDay:t,storageKey:Uu(e,t,u.checksum),track:u,targets:Fv(u.estTimeS),reference:null}}const n=Pv(Nv[e]),i=bv[e],s=Tr(Av[e]),r=s&&s.track&&s.track.course.toLowerCase()===n.checksum.toLowerCase()&&s.track.gen===Lv?s:null,a=r?r.t:Math.round(n.estTimeS*1e3),{title:o,description:c}=Fu(e,t);return{mode:e,title:o,description:c,identityDay:i,storageKey:Uu(e,i,n.checksum),track:n,targets:Uv(a),reference:r}}function Bv(e,t){return e!=="exit"?"":t==="perfect"?"PERFECT EXIT":t==="good"?"CLEAN EXIT":""}const kv=.6;function Hv(){return{step:"steerTap"}}function Gv(e,t){return e.step==="steerTap"?t.event==="entered"&&(e.step="sustain"):e.step==="sustain"?t.phase==="sliding"&&t.slideAge>=kv&&(e.step="counter"):e.step==="counter"&&t.event==="exit"&&(t.grade==="good"||t.grade==="perfect")&&(e.step="complete"),e.step}function Vv(e,t){const n=t?"DRIFT":"DRIFT (↓ / space)",i=t?"steer with the stick":"hold ← / →";switch(e){case"steerTap":return`1/3 ${i}, tap ${n}`;case"sustain":return"2/3 hold the slide — countersteer when settled";case"counter":return"3/3 flick opposite to exit with a slingshot";default:return""}}function Wv(e=5){return{clean:0,perfect:0,goal:Math.max(1,Math.floor(e))}}function Xv(e,t,n){return t!=="exit"||n!=="good"&&n!=="perfect"?!1:(e.clean++,n==="perfect"&&e.perfect++,!0)}function jv(e){return e.clean>=e.goal}function qh(e,t){const n=Math.min(e.clean,e.goal);if(jv(e))return`PRACTICE COMPLETE · ${e.perfect} perfect · progress saved`;const i=t?"slide + countersteer exit":"tap DRIFT + countersteer";return`PRACTICE ${n}/${e.goal} · retries keep progress · ${i}`}function Ou(e){return!isFinite(e)||e<0?0:Math.round(e*3.6)}function $h(e,t){return!isFinite(e)||e<=0?"none":e<=t.goldMs?"gold":e<=t.silverMs?"silver":e<=t.bronzeMs?"bronze":"none"}function Yv(e,t){return!isFinite(e)||e<=0?"":e<=t.goldMs?"GOLD — now chase the reference":e<=t.silverMs?`next GOLD by ${de(t.goldMs-e)}`:e<=t.bronzeMs?`next SILVER by ${de(t.silverMs-e)}`:`next BRONZE by ${de(t.bronzeMs-e)}`}function qv(e,t){const n=[];let i=0,s=0;const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=e[a],c=t[a];o===null||c===null||!isFinite(o)||!isFinite(c)||(n.push({index:a,deltaMs:o-i-(c-s)}),i=o,s=c)}return n}function $v(e){if(e.length===0)return"";let t=e[0],n=e[0];for(const s of e)s.deltaMs<t.deltaMs&&(t=s),s.deltaMs>n.deltaMs&&(n=s);const i=[];return n.deltaMs>40&&i.push(`S${n.index+1} cost ${de(n.deltaMs)}`),t.deltaMs<-40&&i.push(`S${t.index+1} gained ${de(-t.deltaMs)}`),i.join(" · ")}function Kv(e,t){if(t==="daily")return e;const n=e.includes("?")?"&":"?";return`${e}${n}mode=${t}`}const Kh="canyon-audio-muted",Bu=.6,ia=55,Zv=480,Qv=4;function ys(e,t,n,i){e.setTargetAtTime?e.setTargetAtTime(t,n,i):e.linearRampToValueAtTime?e.linearRampToValueAtTime(t,n+i):e.value=t}function Jv(e){if(!e)return!1;try{return e.getItem(Kh)==="1"}catch{return!1}}class tS{constructor(t){this.deps=t,this.ctx=null,this.master=null,this.engineOsc=null,this.engineGain=null,this.subOsc=null,this.subGain=null,this.noise=null,this.slipGain=null,this.voices=[],this.suspended=!1,this.muted=Jv(t.storage)}get ready(){return this.ctx!==null}isMuted(){return this.muted}isSuspended(){return this.suspended}start(){if(this.ctx)return;const t=this.deps.createContext();this.ctx=t;const n=t.currentTime,i=t.createGain();i.gain.value=this.muted?0:Bu,i.connect(t.destination),this.master=i;const s=t.createOscillator();s.type="sawtooth",s.frequency.value=ia;const r=t.createGain();r.gain.value=0,s.connect(r),r.connect(i),s.start(n),this.engineOsc=s,this.engineGain=r;const a=t.createOscillator();a.type="sine",a.frequency.value=ia*.5;const o=t.createGain();o.gain.value=0,a.connect(o),o.connect(i),a.start(n),this.subOsc=a,this.subGain=o;const c=t.createBufferSource(),u=Math.max(1,Math.floor(t.sampleRate*.5)),h=t.createBuffer(1,u,t.sampleRate),d=h.getChannelData(0);for(let g=0;g<u;g++)d[g]=Math.random()*2-1;c.buffer=h,c.loop=!0;const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=900,f.Q.value=.7;const m=t.createGain();m.gain.value=0,c.connect(f),f.connect(m),m.connect(i),c.start(n),this.noise=c,this.slipGain=m;for(let g=0;g<Qv;g++){const _=t.createOscillator();_.type="triangle",_.frequency.value=220;const p=t.createGain();p.gain.value=0,_.connect(p),p.connect(i),_.start(n),this.voices.push({osc:_,gain:p,active:!1,endsAt:0})}this.muted||t.resume()}setMuted(t){this.muted=t;try{this.deps.storage?.setItem(Kh,t?"1":"0")}catch{}this.ctx&&this.master&&ys(this.master.gain,t?0:Bu,this.ctx.currentTime,.02),!t&&this.ctx&&!this.suspended&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMuted(){return this.setMuted(!this.muted),this.muted}suspend(){!this.ctx||this.suspended||(this.suspended=!0,this.ctx.suspend())}resume(){!this.ctx||!this.suspended||(this.suspended=!1,this.ctx.resume())}activeVoiceCount(){const t=this.ctx?this.ctx.currentTime:0;let n=0;for(const i of this.voices)i.active&&i.endsAt>t&&n++;return n}update(t,n){if(!this.ctx||!this.engineOsc||!this.engineGain||!this.subOsc||!this.subGain||!this.slipGain||!(t>0)||this.suspended)return;const i=this.ctx.currentTime,s=Math.max(1,n.maxSpeed),r=Math.max(0,Math.min(n.speed,s)),a=Math.pow(r/s,.7),o=Math.max(0,Math.min(n.load,1)),c=ia+(Zv-ia)*a+o*40;ys(this.engineOsc.frequency,c,i,.05),ys(this.subOsc.frequency,c*.5,i,.05);const u=(.05+.16*a+.1*o)*(n.grounded?1:.35);ys(this.engineGain.gain,u,i,.08),ys(this.subGain.gain,u*.5,i,.08);const h=n.drifting?Math.max(0,Math.min(n.slip,1)):0;ys(this.slipGain.gain,h*.22,i,.05)}oneShot(t,n=.6){if(!this.ctx||this.muted||this.suspended||this.voices.length===0)return!1;const s=this.ctx.currentTime;let r=this.voices.find(h=>!h.active||s>=h.endsAt);r||(r=this.voices.reduce((h,d)=>h.endsAt<=d.endsAt?h:d));const a=Math.max(.05,Math.min(n,1));let o=220,c=140,u=.25;return t==="land"?(o=190,c=70,u=.22):t==="crash"?(o=130,c=38,u=.4):(o=620,c=1050,u=.18),r.osc.type=t==="crash"?"square":"triangle",r.osc.frequency.cancelScheduledValues?.(s),r.osc.frequency.setValueAtTime(o,s),r.osc.frequency.linearRampToValueAtTime(c,s+u),r.gain.gain.cancelScheduledValues?.(s),r.gain.gain.setValueAtTime(0,s),r.gain.gain.linearRampToValueAtTime(a*.8,s+.012),r.gain.gain.linearRampToValueAtTime(0,s+u),r.active=!0,r.endsAt=s+u+.02,!0}reset(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const n of this.voices)n.gain.gain.cancelScheduledValues?.(t),n.gain.gain.value=0,n.active=!1,n.endsAt=0;this.engineGain&&(this.engineGain.gain.value=0),this.subGain&&(this.subGain.gain.value=0),this.slipGain&&(this.slipGain.gain.value=0)}}function eS(e){return new tS(e)}function nS(e={}){const t=e.mobile??!1;return{halfW:e.halfW??8,guardSpacing:e.guardSpacing??(t?16:10),tickSpacing:e.tickSpacing??(t?40:25),chevronAdvance:e.chevronAdvance??[70,50,30],chevronRepeater:e.chevronRepeater??40,dustN:e.dustN??(t?80:160),mobile:t,barriers:e.barriers??null}}const ts={MAX_GUARDRAILS:640,MAX_CHEVRONS:128,MAX_TICKS:260,MAX_DUST:220},hn={BOARD_W:2.4,BOARD_H:1.3,ARROW_W:1.15,ARROW_H:1,ARROW_NOTCH:.42,TIGHT_MED_R:62,SEVERE_MED_R:130,DOUBLE_GAP:.5,FACE_OFFSET:.05};function va(e,t){let n=0,i=e.length-1;if(t<=e[0])return 0;if(t>=e[i])return i;for(;n+1<i;){const s=n+i>>1;e[s]<t?n=s:i=s}return i}function Zh(e,t,n=t.barriers??null){const i=[],s=[];if(e.length<2)return{idx:i,side:s};const r=e[e.length-1];if(n)for(const a of[1,-1]){let o=t.guardSpacing;for(let c=1;c<e.length-1&&o<r-8;c++)e[c]>=o&&(Vc(n,e[c],a)&&(i.push(c),s.push(a)),o=e[c]+t.guardSpacing)}else{let a=t.guardSpacing;for(let o=1;o<e.length-1&&a<r-8;o++)e[o]>=a&&(i.push(o,o),s.push(1,-1),a=e[o]+t.guardSpacing)}if(i.length>ts.MAX_GUARDRAILS){let a=i.length-(i.length-ts.MAX_GUARDRAILS);a-=a%2,i.length=a,s.length=a}return{idx:i,side:s}}function Qh(e,t){const n=[];if(e.length<2)return n;const i=e[e.length-1],s=Math.floor(ts.MAX_TICKS/2);let r=t.tickSpacing;for(let a=1;a<e.length-1&&r<i-8&&!(e[a]>=r&&(n.push(a),r=e[a]+t.tickSpacing,n.length>=s));a++);return n}function Jh(e,t,n){const i=[];if(e.length<2)return i;const s=e[e.length-1];for(const r of t){if(!isFinite(r.startS)||!isFinite(r.endS))continue;const a=r.dir==="L"?1:-1,o=r.dir==="L"?"L":"R",c=r.medR<=hn.SEVERE_MED_R,u=r.decreasing===!0&&r.medR<hn.TIGHT_MED_R;for(const h of n.chevronAdvance){const d=r.startS-h;d>10&&d<s-10&&i.push({s:d,side:a,dir:o,severe:c,tight:u})}for(let h=r.startS+10;h<r.endS-5;h+=n.chevronRepeater)i.push({s:h,side:a,dir:o,severe:c,tight:u})}return i.sort((r,a)=>r.s-a.s),i.length>ts.MAX_CHEVRONS&&(i.length=ts.MAX_CHEVRONS),i}function td(e){return e.dir==="R"?1:-1}function ed(e){const t=[];for(const n of e)t.push({chevron:n,offset:0}),n.tight&&t.push({chevron:n,offset:td(n)*hn.DOUBLE_GAP});return t}function iS(e,t,n){if(e.length<2)return{guardrails:0,chevrons:0,signArrows:0,ticks:0,dust:0};const i=Jh(e,t,n);return{guardrails:Zh(e,n).idx.length,chevrons:i.length,signArrows:ed(i).length,ticks:Qh(e,n).length*2,dust:Math.min(n.dustN,ts.MAX_DUST)}}const Ue={GATE_SPEED:10,GATE_MIX:.25,WIDTH_MIN:.16,WIDTH_MAX:.45,LEN_MIN:.7,LEN_MAX:1.4,DUST_SPREAD_MIN:.8,DUST_SPREAD_MAX:2,ATTACK:5,RELEASE:2.5};function xi(e){return e<0?0:e>1?1:e}function sS(e,t,n,i,s){if(!i||!s||n<Ue.GATE_SPEED||e<Ue.GATE_MIX)return 0;const r=xi((e-Ue.GATE_MIX)/(1-Ue.GATE_MIX)),a=r*r*(3-2*r),o=xi(Math.abs(t)/.5);return xi(a*(.35+.65*o))}function rS(e,t,n){const i=t>e?Ue.ATTACK:Ue.RELEASE,s=t-e,r=i*Math.max(0,n);return s>r?e+r:s<-r?e-r:t}function aS(e){return Ue.WIDTH_MIN+(Ue.WIDTH_MAX-Ue.WIDTH_MIN)*xi(e)}function oS(e){return Ue.LEN_MIN+(Ue.LEN_MAX-Ue.LEN_MIN)*xi(e)}function cS(e){return xi(.1+.6*xi(e))}function lS(e){return e<.12?0:e<.35?3:e<.65?2:1}function uS(e){return e<.15?0:e<.55?1:2}function hS(e){return Ue.DUST_SPREAD_MIN+(Ue.DUST_SPREAD_MAX-Ue.DUST_SPREAD_MIN)*xi(e)}class dS{constructor(t){this.head=0,this.n=Math.max(0,Math.min(Math.floor(t),ts.MAX_DUST)),this.positions=new Float32Array(this.n*3),this.life=new Float32Array(this.n);for(let n=0;n<this.n;n++)this.positions[n*3+1]=-100}spawn(t,n,i,s){if(this.n===0)return;const r=this.head,a=(r*2654435761>>>0)/4294967296-.5,o=(r*40503+7)%100/100,c=(r*65599+13)%100/100-.5;this.positions[r*3]=t+a*s,this.positions[r*3+1]=n+o*1.2,this.positions[r*3+2]=i+c*s,this.life[r]=1,this.head=(r+1)%this.n}update(t){const n=t*1.4,i=t*2;for(let s=0;s<this.n;s++)this.life[s]>0&&(this.life[s]-=n,this.positions[s*3+1]+=i,this.life[s]<=0&&(this.positions[s*3+1]=-100))}}const ku=new WeakMap;function fS(e){const t=new e.PlaneGeometry(hn.ARROW_W,hn.ARROW_H),n=typeof t.getAttribute=="function"?t.getAttribute("position"):void 0;if(!n||n.count<4||typeof n.setX!="function")return t;const i=hn.ARROW_W,s=hn.ARROW_H,r=hn.ARROW_NOTCH;return n.setX(0,-i/2),n.setY(0,s/2),n.setX(1,i/2),n.setY(1,0),n.setX(2,-i/2+r),n.setY(2,0),n.setX(3,-i/2),n.setY(3,-s/2),n.needsUpdate=!0,typeof t.computeBoundingSphere=="function"&&t.computeBoundingSphere(),t}function pS(e,t){let n=ku.get(e);if(!n){const i=s=>{const r=new e.BoxGeometry(1,1,1),a=new e.PlaneGeometry(hn.BOARD_W,hn.BOARD_H),o=fS(e),c=new e.PlaneGeometry(1.4,.5);c.rotateX(-Math.PI/2);const u=new e.MeshLambertMaterial({color:16777215}),h=new e.MeshBasicMaterial({color:16777215,side:e.DoubleSide}),d=new e.MeshBasicMaterial({color:1052688,side:e.DoubleSide}),f=new e.MeshBasicMaterial({color:16117725,transparent:!0,opacity:s?.55:.8});return{guardGeo:r,boardGeo:a,arrowGeo:o,tickGeo:c,guardMat:u,boardMat:h,arrowMat:d,tickMat:f}};n={desk:i(!1),mob:i(!0)},ku.set(e,n)}return t?n.mob:n.desk}function mS(e,t,n,i={}){const s=nS(i),r=n.events??[],a=iS(n.cum,r,s),o=pS(e,s.mobile),c=new e.Group;c.name="canyon-visuals",t.add(c);const u=new e.Matrix4,h=new e.Quaternion,d=new e.Euler,f=new e.Vector3,m=new e.Vector3,g=new e.Vector3(1,1,1),_=new e.Color,p=U=>Math.atan2(n.tangents[U].x,n.tangents[U].z),l=[];let M=null,v=null,x=null,R=null;const A=Zh(n.cum,s),L=[[],[]];for(let U=0;U<A.idx.length;U++)L[A.side[U]>0?0:1].push(A.idx[U]);const N=[];for(let U=0;U<2;U++){const C=U===0?1:-1,P=L[U];for(let b=0;b+1<P.length;b++){if(n.cum[P[b+1]]-n.cum[P[b]]>s.guardSpacing*1.6)continue;const I=n.points[P[b]],X=n.normals[P[b]],W=n.points[P[b+1]],st=n.normals[P[b+1]];N.push({ax:I.x+X.x*C*(s.halfW+2),ay:I.y,az:I.z+X.z*C*(s.halfW+2),bx:W.x+st.x*C*(s.halfW+2),by:W.y,bz:W.z+st.z*C*(s.halfW+2),side:C})}}if(N.length>0){M=new e.InstancedMesh(o.guardGeo,o.guardMat,N.length);for(let U=0;U<N.length;U++){const C=N[U],P=C.bx-C.ax,b=C.bz-C.az,I=Math.sqrt(P*P+b*b);d.set(0,Math.atan2(P,b),0),h.setFromEuler(d),f.set((C.ax+C.bx)/2,(C.ay+C.by)/2+.35,(C.az+C.bz)/2),m.set(.55,1,I+1.5),u.compose(f,h,m),M.setMatrixAt(U,u),M.setColorAt(U,_.set(U%4===3?14170666:15327954))}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M)}const E=Jh(n.cum,r,s);if(E.length>0){v=new e.InstancedMesh(o.boardGeo,o.boardMat,E.length);for(let C=0;C<E.length;C++){const P=va(n.cum,E[C].s),b=n.points[P],I=n.normals[P];d.set(0,p(P)+Math.PI,0),h.setFromEuler(d),f.set(b.x+I.x*E[C].side*(s.halfW+4.5),b.y+1.5,b.z+I.z*E[C].side*(s.halfW+4.5)),m.set(1,1,1),u.compose(f,h,m),v.setMatrixAt(C,u);const X=E[C].tight?13703695:E[C].severe?14170666:15902010;v.setColorAt(C,_.set(X))}v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),c.add(v),l.push(v);const U=ed(E);if(U.length>0){x=new e.InstancedMesh(o.arrowGeo,o.arrowMat,U.length);for(let C=0;C<U.length;C++){const P=U[C],b=va(n.cum,P.chevron.s),I=n.points[b],X=n.normals[b],W=P.chevron.side*(s.halfW+4.5),st=n.tangents[b];d.set(0,p(b)+Math.PI,0),h.setFromEuler(d),f.set(I.x+X.x*(W+P.offset)-st.x*hn.FACE_OFFSET,I.y+1.5,I.z+X.z*(W+P.offset)-st.z*hn.FACE_OFFSET),m.set(td(P.chevron),1,1),u.compose(f,h,m),x.setMatrixAt(C,u)}x.instanceMatrix.needsUpdate=!0,c.add(x),l.push(x)}}const S=Qh(n.cum,s);if(S.length>0){R=new e.InstancedMesh(o.tickGeo,o.tickMat,S.length*2);let U=0;for(const C of S){const P=n.points[C],b=n.normals[C];d.set(0,p(C),0),h.setFromEuler(d);for(const I of[1,-1])f.set(P.x+b.x*I*(s.halfW-1.2),P.y+.17,P.z+b.z*I*(s.halfW-1.2)),u.compose(f,h,g),R.setMatrixAt(U++,u)}R.count=U,R.instanceMatrix.needsUpdate=!0,c.add(R),l.push(R)}const D=new dS(s.dustN);return{counts:a,dust:D,setQuality(U){R&&(R.visible=!U),M&&(M.visible=!0),v&&(v.visible=!0),x&&(x.visible=!0)},update(U){D.update(U)},dispose(){for(const U of l)c.remove(U),U.dispose();t.remove(c)}}}const wr={posLambda:7,lookLambda:10,headLambda:5,fovLambda:5,driftLambda:6,feedforward:1,maxImpulse:1.2,impulseDecay:5,camDist:11.5,camHeight:4.6,lookAhead:9,lookHeight:1.4,baseFov:62,speedFov:14,driftFov:5,fullSpeed:80,maxDt:.05};function gS(){return{px:0,py:0,pz:0,pvx:0,pvy:0,pvz:0,lx:0,ly:0,lz:0,lvx:0,lvy:0,lvz:0,fov:wr.baseFov,fovV:0,camH:0,driftMix:0,impx:0,impy:0,impz:0,ready:!1}}function Sa(e){return Math.atan2(Math.sin(e),Math.cos(e))}function mi(e,t,n){return Math.max(t,Math.min(n,e))}function Bn(e){return typeof e=="number"&&isFinite(e)}function Pi(e,t,n,i,s,r){const a=i*i,o=2*i,c=t+((n-e)*a-t*o)*s;r[0]=e+c*s,r[1]=c}function Pa(e,t,n,i,s,r){const a=Math.sin(r),o=Math.cos(r);e.px=n-a*t.camDist,e.py=i+t.camHeight,e.pz=s-o*t.camDist,e.pvx=0,e.pvy=0,e.pvz=0,e.lx=n+a*t.lookAhead,e.ly=i+t.lookHeight,e.lz=s+o*t.lookAhead,e.lvx=0,e.lvy=0,e.lvz=0,e.fov=t.baseFov,e.fovV=0,e.camH=Sa(r),e.driftMix=0,e.impx=0,e.impy=0,e.impz=0,e.ready=!0}function _S(e,t,n,i,s,r,a,o){let c=e;i>8?c=Math.atan2(t,n):a&&(s!==0||r!==0)&&(c=Math.atan2(s,r));const u=Sa(e-c),h=mi(i/8,0,1),d=(1-.75*mi(o,0,1))*h;return c+u*d}function MS(e,t,n){return e.baseFov+mi(t/e.fullSpeed,0,1)*e.speedFov+mi(n,0,1)*e.driftFov}const Me=[0,0];function xS(e,t,n){const i=n.dt;if(!Bn(i)||i<=0||!Bn(n.px)||!Bn(n.py)||!Bn(n.pz)||!Bn(n.heading)||!Bn(n.vx)||!Bn(n.vz))return;if(!e.ready){Pa(e,t,n.px,n.py,n.pz,n.heading);return}const s=i>t.maxDt?t.maxDt:i,r=mi(n.speed,0,200),a=n.drifting?1:0;e.driftMix+=(a-e.driftMix)*(1-Math.exp(-t.driftLambda*s)),e.driftMix=mi(e.driftMix,0,1);const o=_S(n.heading,n.vx,n.vz,r,n.tangentX,n.tangentZ,n.hasTangent,e.driftMix);e.camH+=Sa(o-e.camH)*(1-Math.exp(-t.headLambda*s)),e.camH=Sa(e.camH);const c=Math.sin(e.camH),u=Math.cos(e.camH),h=Math.max(t.feedforward*(2/t.posLambda)-s,0),d=n.px-c*t.camDist+n.vx*h,f=n.py+t.camHeight,m=n.pz-u*t.camDist+n.vz*h;Pi(e.px,e.pvx,d,t.posLambda,s,Me),e.px=Me[0],e.pvx=Me[1],Pi(e.py,e.pvy,f,t.posLambda,s,Me),e.py=Me[0],e.pvy=Me[1],Pi(e.pz,e.pvz,m,t.posLambda,s,Me),e.pz=Me[0],e.pvz=Me[1];const g=Math.max(t.feedforward*(2/t.lookLambda)-s,0),_=n.px+c*t.lookAhead+n.vx*g,p=n.py+t.lookHeight,l=n.pz+u*t.lookAhead+n.vz*g;if(Pi(e.lx,e.lvx,_,t.lookLambda,s,Me),e.lx=Me[0],e.lvx=Me[1],Pi(e.ly,e.lvy,p,t.lookLambda,s,Me),e.ly=Me[0],e.lvy=Me[1],Pi(e.lz,e.lvz,l,t.lookLambda,s,Me),e.lz=Me[0],e.lvz=Me[1],Pi(e.fov,e.fovV,MS(t,r,e.driftMix),t.fovLambda,s,Me),e.fov=Me[0],e.fovV=Me[1],n.landed&&Bn(n.landV)&&n.landV<0&&(e.impy-=mi(-n.landV/22,0,1)*.9),n.wallHit&&Bn(n.wallVn)&&n.wallVn>0){const x=mi(n.wallVn/25,0,1)*.8,R=Math.hypot(n.vx,n.vz);R>1e-6&&(e.impx-=n.vx/R*x,e.impz-=n.vz/R*x)}const M=Math.hypot(e.impx,e.impy,e.impz);if(M>t.maxImpulse&&M>0){const x=t.maxImpulse/M;e.impx*=x,e.impy*=x,e.impz*=x}const v=Math.exp(-t.impulseDecay*s);e.impx*=v,e.impy*=v,e.impz*=v}function vS(e,t){t.x=e.px+e.impx,t.y=e.py+e.impy,t.z=e.pz+e.impz}function SS(e){return Math.hypot(e.impx,e.impy,e.impz)}const yS=3.1,ES=.7;function TS(e,t){return e&&t?ES:yS}function wS(e){e.stickId!==-1&&e.stickUp(e.stickId),e.joy=0,e.joyOn=!1,e.driftId!==-1&&e.driftUp(e.driftId),e.drift=!1}const nd=3;function AS(e){return e?"RESCUE":"R RESCUE"}function id(e){return e?"RETRY":"ENTER RETRY"}function sd(e){return`${AS(e)} (+${nd}s) · ${id(e)}`}function bS(e){return`STUCK — ${sd(e)}`}function LS(e){return`OFF COURSE — ${sd(e)}`}function CS(){return`RESCUE +${nd}s`}function RS(){return{time:de(0),progressPct:0,delta:"",split:"",debug:""}}function rd(){return{spd:0,drifting:!1,sIdx:0,pitch:0,launched:!1,landed:!1,finished:!1,fSpeed:0,lSpeed:0,slip:0,yawRate:0,offroad:!1,surface:"road",landV:0,impact:0,scraping:!1,stuckMs:0,oobMs:0}}function DS(e={}){const t=e.mobile??!1;return{halfW:e.halfW??8,wallStep:e.wallStep??14,scrubStep:e.scrubStep??(t?28:16),mobile:t}}const yi={MAX_WALLS:700,MAX_MESAS:40,MAX_ARCHES:4,MAX_SCRUB:420},hi={MIN_WALL_LATERAL:17,INSIDE_LATERAL:26,INSIDE_HEIGHT_CAP:22,MAX_SCRUB_H:1.6,MIN_ARCH_LATERAL:22},ad=4,NS=4,Is=180,IS=80,lr=150,PS=195,US=240,Tc=300,Gi=8,Hu=220,Gu=250,FS=15380867,We={GUARD_OUT:2.6,SHOULDER:2,SCRUB_OUT:3.1,CURVE_EXTRA:3,JITTER:.6,PUSHBACK:14};function dn(e){return e+We.GUARD_OUT+We.SHOULDER}function Ts(e,t,n){const i=e*Math.abs(Math.cos(n)),s=t*.4*Math.abs(Math.sin(n));return Math.sqrt(i*i+s*s)+We.JITTER}function ws(e,t){return Math.max(e,t)*1+We.JITTER}function od(e){return e*1.28+We.JITTER}function zS(e,t){return e-Gi+t*.5}function ur(e,t,n){return t<Is?Math.max(n,e):n}function OS(e,t){if(e<Is)return Math.max(t,US);const n=Math.min(1,(e-Is)/220);return t+(1-n)*110}function cd(e){return .9*e+.3}function pt(e){let t=Math.imul(e|0,2654435761);return t^=t>>>15,t=Math.imul(t,2246822519),t^=t>>>13,(t>>>0)/4294967296}function BS(e){const t=[[.4,.19,.1],[.6,.3,.15],[.75,.43,.23],[.87,.59,.37],[.84,.79,.7]],n=Math.min(.999,Math.max(0,e))*(t.length-1),i=Math.floor(n),s=n-i,r=t[i],a=t[i+1];return[r[0]+(a[0]-r[0])*s,r[1]+(a[1]-r[1])*s,r[2]+(a[2]-r[2])*s]}function Es(e){return e.dir==="L"?-1:1}function Vu(e,t){for(const n of e)if(t>=n.startS-20&&t<=n.endS)return n;return null}const sa=!0,ld=300,wo=[1.25,1.18,1.08];function kS(e){return e>=ld}function HS(e){const t=Math.floor(e/ad);if(t===0)return"vista";const n=t%2;return(pt(t*131+7)<.35?n===1:n===0)?"cut":"vista"}function ud(e,t,n){const i=[],s=[];if(e.length<2)return{near:i,far:s};const r=e[e.length-1];let a=0,o=0,c=0,u=n.wallStep;for(let f=1;f<e.length-1&&u<r-10;f++){if(e[f]<u)continue;u=e[f]+n.wallStep;const m=e[f],g=Vu(t,m),_=m<Is,p=!_&&m<Is+IS;let l=_||p?"vista":HS(o);if(!_&&!p&&l==="cut"&&c>=NS&&(l="vista"),o++,c=l==="vista"?0:c+1,_){if(o%2===0){a++;const M=pt(o*29+1)<.5?-1:1,v=1.5+pt(a*2+2)*3,x=10+pt(a*2+3)*10,R=n.wallStep*1.6,A=(pt(a*3+5)-.5)*.9,L=Math.max(22+pt(a*2+1)*16,dn(n.halfW)+Ts(x,R,A));i.push({idx:f,side:M,lateral:L,h:v,w:x,segLen:R,tint:a,yaw:A})}}else if(p){a++;const M=pt(o*29+1)<.5?-1:1;let v=10+pt(a*2+2)*12;g&&M===Es(g)&&(v=Math.min(v,hi.INSIDE_HEIGHT_CAP));const x=12+pt(a*2+3)*16,R=n.wallStep*2,A=(pt(a*3+5)-.5)*.9,L=g!==null&&M===Es(g),N=Math.max(74+pt(a*2+1)*50,dn(n.halfW)+Ts(x,R,A)+(L?We.CURVE_EXTRA:0));i.push({idx:f,side:M,lateral:N,h:v,w:x,segLen:R,tint:a,yaw:A})}else if(l==="vista"){a++;const M=pt(o*29+1)<.5?-1:1;let v=16+pt(a*2+2)*26;g&&M===Es(g)&&(v=Math.min(v,hi.INSIDE_HEIGHT_CAP));const x=12+pt(a*2+3)*18,R=n.wallStep*2.4,A=(pt(a*3+5)-.5)*.9,L=g!==null&&M===Es(g),N=Math.max(58+pt(a*2+1)*80,dn(n.halfW)+Ts(x,R,A)+(L?We.CURVE_EXTRA:0));i.push({idx:f,side:M,lateral:N,h:v,w:x,segLen:R,tint:a,yaw:A})}else{const v=.72+pt(Math.floor(o/ad)*57+3)*.65;for(const x of[1,-1]){a++;const R=pt(a*5+11)<.5?1.25:.75;let A=(15+pt(a*2+2)*15)*v*R;const L=g!==null&&x===Es(g);L&&(A=Math.min(A,hi.INSIDE_HEIGHT_CAP));const N=6+pt(a*2+3)*8,E=n.wallStep*1.6,S=(pt(a*3+5)-.5)*.9,D=Math.max(17+pt(a*2+1)*17,L?hi.INSIDE_LATERAL:hi.MIN_WALL_LATERAL,dn(n.halfW)+Ts(N,E,S)+(L?We.CURVE_EXTRA:0))+We.PUSHBACK;i.push({idx:f,side:x,lateral:D,h:A,w:N,segLen:E,tint:a,yaw:S})}}}let h=0,d=70;for(let f=1;f<e.length-1&&d<r-10;f++){if(e[f]<d)continue;d=e[f]+90,h++;const m=pt(h*37+5)<.5?-1:1,g=30+pt(1299709+h)*40,_=90,p=(pt((5e3+h)*3+5)-.5)*.9,l=Vu(t,e[f]),M=l!==null&&m===Es(l),v=Math.max(90+pt(7919+h*2)*70,dn(n.halfW)+Ts(g,_,p)+(M?We.CURVE_EXTRA:0)),x=Math.min(1,Math.max(0,(e[f]-Is)/220));s.push({idx:f,side:m,lateral:OS(e[f],v),h:(30+pt(104729+h*2)*50)*(.55+.45*x),w:g,segLen:_,tint:5e3+h,yaw:p})}return i.length+s.length>yi.MAX_WALLS&&(i.length=Math.max(0,yi.MAX_WALLS-s.length)),{near:i,far:s}}function Vi(e,t){return t*(.7+pt(e*13+4)*.5)}function hd(e,t=8){const n=[],i=e.points.length;if(i<2)return n;const s=g=>va(e.cum,e.cum[i-1]*g);[.12,.25,.4,.55,.7,.85].forEach((g,_)=>{const p=s(g),l=e.points[p],M=e.normals[p],v=_%2?-1:1,x=40+pt(77+_*13)*50,R=ur(lr,e.cum[p],Math.max(90+pt(31+_*7)*120,dn(t)+ws(x,Vi(_,x))));n.push({x:l.x+M.x*v*R,y:l.y-Gi,z:l.z+M.z*v*R,w:x,h:50+pt(101+_*17)*40,haze:0,tint:_})});let a=1/0,o=-1/0,c=1/0,u=-1/0,h=1/0;for(const g of e.points)g.x<a&&(a=g.x),g.x>o&&(o=g.x),g.z<c&&(c=g.z),g.z>u&&(u=g.z),g.y<h&&(h=g.y);const d=(a+o)/2,f=(c+u)/2;let m=0;for(const g of e.points)m=Math.max(m,Math.hypot(g.x-d,g.z-f));for(let g=0;g<8;g++){const _=g/8*Math.PI*2+pt(1001+g)*.5,p=Math.max(420,m+Tc)+pt(2002+g*3)*200;n.push({x:d+Math.cos(_)*p,y:h-20-pt(3003+g)*20,z:f+Math.sin(_)*p,w:120+pt(4004+g*5)*110,h:90+pt(5005+g*7)*70,haze:.55,tint:100+g})}[.33,.66].forEach((g,_)=>{const p=s(g),l=e.points[p],M=e.normals[p],v=_===0?1:-1,x=6+pt(7007+_)*3,R=ur(lr,e.cum[p],Math.max(55+pt(6006+_)*20,dn(t)+ws(x,Vi(200+_,x))));n.push({x:l.x+M.x*v*R,y:l.y-Gi,z:l.z+M.z*v*R,w:x,h:70+pt(8008+_)*25,haze:0,tint:200+_})}),[.12,.5].forEach((g,_)=>{const p=s(g),l=e.points[p],M=e.normals[p];for(const v of[1,-1]){const x=ld+_*2+(v<0?1:0),R=3+pt(6100+x)*1.5,A=ur(lr,e.cum[p],Math.max(dn(t)+ws(R,Vi(x,R))+1.5,hi.MIN_WALL_LATERAL));n.push({x:l.x+M.x*v*A,y:l.y-Gi,z:l.z+M.z*v*A,w:R,h:30+pt(6200+x)*12,haze:0,tint:x})}}),[.06,.18,.31,.45,.58,.72,.88].forEach((g,_)=>{const p=s(g),l=e.points[p],M=e.normals[p],v=_%2?-1:1,x=16+pt(14e3+_*17)*20,R=ur(lr,e.cum[p],Math.max(52+pt(14200+_*23)*70,dn(t)+ws(x,Vi(Hu+_,x))+4));n.push({x:l.x+M.x*v*R,y:l.y-Gi,z:l.z+M.z*v*R,w:x,h:14+pt(14100+_*19)*18,haze:0,tint:Hu+_})});{const g=s(.08),_=e.points[g],p=e.normals[g],l=1,M=42+pt(15e3+i)*14,v=50+pt(15001+i)*18,x=Math.max(PS+pt(15002+i)*60,dn(t)+ws(M,Vi(Gu,M))+8);n.push({x:_.x+p.x*l*x,y:_.y-Gi,z:_.z+p.z*l*x,w:M,h:v,haze:0,tint:Gu})}return n.length>yi.MAX_MESAS&&(n.length=yi.MAX_MESAS),n}function dd(e,t){const n=[];if(e.length<2)return n;const i=e[e.length-1];return[.3,.55,.8].forEach((s,r)=>{const a=i*s;if(a<30||a>i-30)return;const o=8+pt(9111+r*13)*4,c=ur(lr,a,Math.max(24+pt(9009+r*11)*8,hi.MIN_ARCH_LATERAL,dn(t.halfW)+od(o))+We.PUSHBACK);n.push({idx:va(e,a),side:r%2?-1:1,lateral:c,r:o})}),n.length>yi.MAX_ARCHES&&(n.length=yi.MAX_ARCHES),n}function fd(e,t){const n=[];if(e.length<2)return n;const i=e[e.length-1];let s=0,r=t.scrubStep;for(let a=1;a<e.length-1&&r<i-8;a++)if(!(e[a]<r)){r=e[a]+t.scrubStep;for(const o of[1,-1]){s++;const c=pt(11011+s*7+(o>0?0:91));if(c<.25)continue;const u=c>.72?2:1;for(let h=0;h<u;h++){const d=s*5+h*131,f=.7+pt(12004+d)*1.7,m=h===0?0:.9;n.push({idx:a,side:o,lateral:Math.max(t.halfW+3.5+pt(11003+d)*3+m,t.halfW+We.SCRUB_OUT+cd(f)),w:f,h:Math.min(.35+pt(13005+d)*1.25,hi.MAX_SCRUB_H),tint:d})}}}return n.length>yi.MAX_SCRUB&&(n.length=yi.MAX_SCRUB),n}function rr(e,t,n,i){let s=1/0,r=t,a=0,o=n;const c=e.points;for(let u=0;u<c.length;u++){const h=t-c[u].x,d=n-c[u].z,f=Math.sqrt(h*h+d*d);f<s&&(s=f,r=c[u].x,a=c[u].y,o=c[u].z)}return i.x=r,i.y=a,i.z=o,s}const ar=8;function pd(e,t,n,i,s,r){const a=dn(r),o=r+We.SCRUB_OUT,c={x:0,y:0,z:0},u=(p,l,M)=>{const v=e.points[p],x=e.normals[p];return{x:v.x+x.x*l*M,z:v.z+x.z*l*M}},h=p=>a+Ts(p.w,p.segLen,p.yaw)+We.CURVE_EXTRA,d=[],f=[];for(const p of[t.near,t.far]){const l=p===t.near?d:f;for(const M of p){let v=M,x=!1;for(let R=0;R<ar;R++){const A=u(v.idx,v.side,v.lateral),L=rr(e,A.x,A.z,c);if(L>=h(v)){x=!0;break}const N=h(v)-L+.5;v={...v,lateral:v.lateral+N}}x&&l.push(v)}}const m=[];for(const p of n){if(p.haze>0){let R=p.x,A=p.z;for(let L=0;L<ar;L++){const N=rr(e,R,A,c);if(N>=Tc)break;const E=Tc-N+1;let S=R-c.x,D=A-c.z;const U=Math.sqrt(S*S+D*D);U<1e-6?(S=1,D=0):(S/=U,D/=U),R+=S*E,A+=D*E}m.push({...p,x:R,z:A});continue}let l=p.x,M=p.z;const v=ws(p.w,Vi(p.tint,p.w));let x=!1;for(let R=0;R<ar;R++){const A=rr(e,l,M,c);if(A>=a+v){x=!0;break}const L=a+v-A+.5;let N=l-c.x,E=M-c.z;const S=Math.sqrt(N*N+E*E);S<1e-6?(N=1,E=0):(N/=S,E/=S),l+=N*L,M+=E*L}if(x){const R=Math.min(p.y,c.y-Gi);m.push({...p,x:l,y:R,z:M})}}const g=[];for(const p of i){let l=p;const M=a+od(l.r);let v=!1;for(let x=0;x<ar;x++){const R=u(l.idx,l.side,l.lateral),A=rr(e,R.x,R.z,c);if(A>=M){v=!0;break}l={...l,lateral:l.lateral+(M-A)+.5}}v&&g.push(l)}const _=[];for(const p of s){let l=p;const M=o+cd(l.w);let v=!1;for(let x=0;x<ar;x++){const R=u(l.idx,l.side,l.lateral),A=rr(e,R.x,R.z,c);if(A>=M){v=!0;break}l={...l,lateral:l.lateral+(M-A)+.5}}v&&_.push(l)}return{walls:{near:d,far:f},mesas:m,arches:g,scrub:_}}function GS(e,t,n){if(e.cum.length<2)return{walls:0,farWalls:0,mesas:0,arches:0,scrub:0};const i=pd(e,ud(e.cum,t,n),hd(e,n.halfW),dd(e.cum,n),fd(e.cum,n),n.halfW);return{walls:i.walls.near.length+i.walls.far.length,farWalls:i.walls.far.length,mesas:i.mesas.length,arches:i.arches.length,scrub:i.scrub.length}}const Wu=new WeakMap;function Ao(e,t){const n=e.getAttribute("position");for(let i=0;i<n.count;i++){const s=.5+Math.abs(n.getY(i));n.setX(i,n.getX(i)+(pt(t+i*3+1)-.5)*.24*s),n.setZ(i,n.getZ(i)+(pt(t+i*3+2)-.5)*.24*s),n.setY(i,n.getY(i)+(pt(t+i*3+3)-.5)*.1)}n.needsUpdate=!0,e.computeVertexNormals()}function bo(e,t,n){const i=t.getAttribute("position"),s=new Float32Array(i.count*3);t.computeBoundingBox();const r=t.boundingBox,a=r?r.min.y:0,o=r&&r.max.y-r.min.y>1e-6?r.max.y-r.min.y:1;for(let c=0;c<i.count;c++){const u=Math.min(.999,Math.max(0,(i.getY(c)-a)/o)),h=BS(Math.floor(u*n)/(n-1));s[c*3]=h[0],s[c*3+1]=h[1],s[c*3+2]=h[2]}t.setAttribute("color",new e.BufferAttribute(s,3))}function VS(e){let t=Wu.get(e);if(!t){const n=new e.CylinderGeometry(.58,1,1,5,2);n.translate(0,.5,0),Ao(n,211),bo(e,n,4);const i=new e.CylinderGeometry(.7,1,1,7,1);i.translate(0,.5,0),Ao(i,412),bo(e,i,4);const s=new e.CylinderGeometry(.72,1,1,8,3);s.translate(0,.5,0),Ao(s,977),bo(e,s,4);const r=new e.TorusGeometry(1,.28,6,12),a=new e.ConeGeometry(.9,1,6);a.translate(0,.5,0),t={wallGeo:n,farGeo:i,mesaGeo:s,archGeo:r,scrubGeo:a,wallMat:new e.MeshLambertMaterial({vertexColors:!0,flatShading:sa}),farMat:new e.MeshLambertMaterial({vertexColors:!0,flatShading:sa}),mesaMat:new e.MeshLambertMaterial({vertexColors:!0,flatShading:sa}),archMat:new e.MeshLambertMaterial({color:12876357,flatShading:sa}),scrubMat:new e.MeshLambertMaterial({color:16777215})},Wu.set(e,t)}return t}function WS(e,t,n,i={}){const s=DS(i),r=n.events??[],a=GS(n,r,s),o=VS(e),c=new e.Group;c.name="canyon-environment",t.add(c);const u=new e.Matrix4,h=new e.Quaternion,d=new e.Euler,f=new e.Vector3,m=new e.Vector3,g=new e.Color,_=new e.Color(FS),p=C=>Math.atan2(n.tangents[C].x,n.tangents[C].z),l=[];let M=null,v=null,x=0,R=0,A=0;const L=(C,P,b)=>{const I=n.points[P.idx],X=n.normals[P.idx];d.set(0,p(P.idx)+P.yaw,0),h.setFromEuler(d),f.set(I.x+X.x*P.side*P.lateral,I.y-10,I.z+X.z*P.side*P.lateral),m.set(P.w,P.h,P.segLen*.4),u.compose(f,h,m),C.setMatrixAt(b,u);const W=.85+pt(P.tint*7+1)*.3;C.setColorAt(b,g.setRGB(W,W*.98,W*.95))},N=pd(n,ud(n.cum,r,s),hd(n,s.halfW),dd(n.cum,s),fd(n.cum,s),s.halfW),E=N.walls;if(E.near.length>0){const C=new e.InstancedMesh(o.wallGeo,o.wallMat,E.near.length);for(let P=0;P<E.near.length;P++)L(C,E.near[P],P);C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0),c.add(C),l.push(C)}if(x=E.far.length,E.far.length>0){M=new e.InstancedMesh(o.farGeo,o.farMat,E.far.length);for(let C=0;C<E.far.length;C++)L(M,E.far[C],C);M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),c.add(M),l.push(M)}const S=N.mesas;if(S.length>0){const C=new e.InstancedMesh(o.mesaGeo,o.mesaMat,S.length);for(let P=0;P<S.length;P++){const b=S[P];if(d.set(0,pt(b.tint*11+2)*Math.PI,0),h.setFromEuler(d),f.set(b.x,b.y,b.z),m.set(b.w,b.h,Vi(b.tint,b.w)),u.compose(f,h,m),C.setMatrixAt(P,u),kS(b.tint))g.setRGB(wo[0],wo[1],wo[2]);else{const I=.85+pt(b.tint*17+6)*.3;g.setRGB(I,I*.98,I*.95)}b.haze>0&&g.lerp(_,b.haze),C.setColorAt(P,g)}C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0),c.add(C),l.push(C)}const D=N.arches;if(D.length>0){const C=new e.InstancedMesh(o.archGeo,o.archMat,D.length);for(let P=0;P<D.length;P++){const b=D[P],I=n.points[b.idx],X=n.normals[b.idx];d.set(0,p(b.idx),0),h.setFromEuler(d),f.set(I.x+X.x*b.side*b.lateral,zS(I.y,b.r),I.z+X.z*b.side*b.lateral),m.set(b.r,b.r*1.2,b.r),u.compose(f,h,m),C.setMatrixAt(P,u)}C.instanceMatrix.needsUpdate=!0,c.add(C),l.push(C)}const U=N.scrub;if(R=U.length,A=Math.floor(U.length/2),U.length>0){v=new e.InstancedMesh(o.scrubGeo,o.scrubMat,U.length);for(let C=0;C<U.length;C++){const P=U[C],b=n.points[P.idx],I=n.normals[P.idx];d.set(0,pt(P.tint*19+8)*Math.PI*2,0),h.setFromEuler(d),f.set(b.x+I.x*P.side*P.lateral,b.y-.1,b.z+I.z*P.side*P.lateral),m.set(P.w,P.h,P.w),u.compose(f,h,m),v.setMatrixAt(C,u),v.setColorAt(C,g.setHSL(.13+pt(P.tint*23+9)*.06,.3+pt(P.tint*29+3)*.2,.24+pt(P.tint*31+7)*.1))}v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),c.add(v),l.push(v)}return{counts:a,setQuality(C){M&&(M.count=C?0:x),v&&(v.count=C?A:R)},update(C){},dispose(){for(const C of l)c.remove(C),C.dispose();t.remove(c)}}}function XS(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Yn(e){try{return localStorage.getItem(e)}catch{return null}}function gr(e,t){try{localStorage.setItem(e,t)}catch{}}const Ua=SM(location.search),jS=Ua.day||XS(),sn=Iv(location.search),ye=zv(sn,jS),qn=ye.identityDay,Gn=Ua.timeMs,md=`${ye.storageKey}-best`,ya=`${ye.storageKey}-ghost`,YS=`canyon-best-${qn}`,Yc=`canyon-ghost-${qn}`;let qc=null;{const e=Yn(ya)??(sn==="daily"?Yn(Yc):null),t=Tr(e);t&&t.p.length>1&&(qc=t)}let $i=null,Ze=null,ci="",Vn=!1,Ea=!1;const gd=document.getElementById("game"),Ie=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Ie&&document.body.classList.add("touchmode");const di=new k_({canvas:gd,antialias:!Ie,powerPreference:"high-performance"});di.setPixelRatio(Math.min(devicePixelRatio||1,Ie?1.5:2));di.setSize(innerWidth,innerHeight);const se=new H_;se.background=new At(16172169);se.fog=new Bc(15380867,120,700);{const e=new jn({side:Fe,depthWrite:!1,fog:!1,uniforms:{top:{value:new At(3042264)},mid:{value:new At(10470382)},bot:{value:new At(16172169)}},vertexShader:`
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
      }`}),t=new me(new Hc(1500,24,12),e);t.frustumCulled=!1,se.add(t)}const pe=new un(64,innerWidth/innerHeight,.1,2e3);se.add(new X_(16769216,8010530,1));const _d=new q_(16767400,1.6);_d.position.set(-120,180,60);se.add(_d);addEventListener("resize",()=>{pe.aspect=innerWidth/innerHeight,pe.updateProjectionMatrix(),di.setSize(innerWidth,innerHeight)});const Le=Ia(Na("canyon-"+sn+"-"+qn)),Xe=ye.track;typeof console<"u"&&console.log("[canyon-debug] course",sn,qn,"attempt",Xe.attempt,"fallback",Xe.fallback,"len",Xe.stats.length.toFixed(0),"est",Xe.estTimeS.toFixed(1)+"s");const Jt=Xe.points.map(e=>new k(e.x,e.y,e.z)),Ei=iv,$c=fM(qn,Xe.checksum),ve=Hx(Jt.map(e=>({x:e.x,y:e.y,z:e.z})),Ei),Dn=ve.tx.map((e,t)=>new k(e,0,ve.tz[t])),Gs=ve.nx.map((e,t)=>new k(e,0,ve.nz[t])),$n=Sv(Xe.points);ve.barrier=J_($n[$n.length-1],Xe.stats.events,Xe.crestS);typeof console<"u"&&console.log("[canyon-debug] barriers",`spans=${ve.barrier.spans.length}`);const Ps=Jx(Xe.stats.events).map(e=>tv($n,e));let Wi=Ps.map(()=>null),wc=0;{const e=Jt[Jt.length-1],t=(Jt[0].x+e.x)/2,n=(Jt[0].z+e.z)/2,i=new me(new Zn(2600,2600),new Sn({color:13201215}));i.rotation.x=-Math.PI/2,i.position.set(t,-2.5,n),se.add(i);const s=new me(new Si(760,820,24,28),new Sn({color:11096108}));s.position.set(t,-14,n),se.add(s)}function Kc(e,t,n){const i=Jt.length,s=new Float32Array(i*2*3),r=new Float32Array(i*2*3),a=[],o=new At;for(let u=0;u<i;u++){for(let h=0;h<2;h++){const d=h===0?1:-1,f=Jt[u].clone().addScaledVector(Gs[u],d*e);s.set([f.x,Jt[u].y+t,f.z],(u*2+h)*3),o.copy(n(u,d)),r.set([o.r,o.g,o.b],(u*2+h)*3)}if(u<i-1){const h=u*2,d=u*2+1,f=(u+1)*2,m=(u+1)*2+1;a.push(h,d,f,d,m,f)}}const c=new Ye;return c.setAttribute("position",new Oe(s,3)),c.setAttribute("color",new Oe(r,3)),c.setIndex(a),c.computeVertexNormals(),new me(c,new Sn({vertexColors:!0,side:Mn}))}const qS=new At(4012608),$S=new At(4538954);se.add(Kc(Ei,.15,e=>Math.floor($n[e]/40)%2?qS:$S));se.add(Kc(Ei+4,.05,()=>new At(13208916)));const KS=new At(15258536),ZS=new At(14170666),QS=new At(15920610);se.add(Kc(Ei+1.1,.12,(e,t)=>{const i=Math.floor($n[e]/14)%2?ZS:QS;return ve.barrier&&!Vc(ve.barrier,$n[e],t>=0?1:-1)?i.clone().lerp(KS,.6):i}));{const e=new Zn(.35,3);e.rotateX(-Math.PI/2);const t=new Je({color:16117725}),n=yv($n,16).filter(c=>c>=6&&c<Jt.length-6),i=new Er(e,t,n.length),s=new Zt,r=new Kn,a=new je,o=new k(1,1,1);n.forEach((c,u)=>{a.set(0,Math.atan2(Dn[c].x,Dn[c].z),0),r.setFromEuler(a),s.compose(new k(Jt[c].x,Jt[c].y+.19,Jt[c].z),r,o),i.setMatrixAt(u,s)}),i.instanceMatrix.needsUpdate=!0,se.add(i)}const Md=new Zn(2,1.15);Md.rotateX(-Math.PI/2);const JS=new Je({color:15920610}),ty=new Je({color:1315860});function ey(e){const t=Math.atan2(Dn[e].x,Dn[e].z);for(let n=0;n<2;n++)for(let i=0;i<8;i++){const s=new me(Md,(n+i)%2?ty:JS),r=(i-3.5)*2,a=(n-.5)*1.15;s.position.set(Jt[e].x+Gs[e].x*r+Dn[e].x*a,Jt[e].y+.21,Jt[e].z+Gs[e].z*r+Dn[e].z*a),s.rotation.y=t,se.add(s)}}const xd={BoxGeometry:ae,PlaneGeometry:Zn,MeshLambertMaterial:Sn,MeshBasicMaterial:Je,InstancedMesh:Er,Group:pi,Matrix4:Zt,Quaternion:Kn,Euler:je,Vector3:k,Color:At,DoubleSide:Mn},gi=mS(xd,se,{points:Jt,tangents:Dn,normals:Gs,cum:$n,events:Xe.stats.events,crestS:Xe.crestS},{mobile:Ie,halfW:Ei,barriers:ve.barrier});gi.setQuality(Ie);const ny={...xd,CylinderGeometry:Si,ConeGeometry:kc,TorusGeometry:Gc,BufferAttribute:Oe},iy=WS(ny,se,{points:Jt,tangents:Dn,normals:Gs,cum:$n,events:Xe.stats.events,crestS:Xe.crestS},{mobile:Ie,halfW:Ei});iy.setQuality(Ie);typeof console<"u"&&console.log("[canyon-debug] visuals",`guards=${gi.counts.guardrails} chevrons=${gi.counts.chevrons} ticks=${gi.counts.ticks} dust=${gi.counts.dust}`);{const e=new Da(1,10);e.rotateX(-Math.PI/2);const t=new Sn({color:16777215}),n=70,i=new Er(e,t,n),s=new Zt,r=new At;let a=0,o=0;for(;a<n&&o++<2e3;){const c=(Le()-.5)*1100,u=(Le()-.5)*1100;let h=1e9;for(let f=0;f<Jt.length;f+=12){const m=Jt[f].x-c,g=Jt[f].z-u,_=m*m+g*g;_<h&&(h=_)}if(h<1600)continue;const d=6+Le()*22;s.makeScale(d,1,d*(.6+Le()*.6)),s.setPosition(c,-2.35,u),i.setMatrixAt(a,s),i.setColorAt(a,r.setHSL(.03+Le()*.04,.5+Le()*.2,.22+Le()*.1)),a++}i.count=a,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),se.add(i)}{const e=new Si(.35,.55,1,7);e.translate(0,.5,0);const t=new Sn({color:16777215}),n=Ie?70:120,i=new Er(e,t,n),s=new Zt,r=new Kn,a=new je,o=new k,c=new k,u=new At;let h=0,d=0;for(;h<n&&d++<6e3;){const f=(Le()-.5)*1e3,m=(Le()-.5)*1e3;let g=1e9;for(let p=0;p<Jt.length;p+=12){const l=Jt[p].x-f,M=Jt[p].z-m,v=l*l+M*M;v<g&&(g=v)}if(g<1600)continue;const _=3+Le()*4;a.set((Le()-.5)*.14,Le()*3,(Le()-.5)*.14),r.setFromEuler(a),o.set(f,-2.5,m),c.set(.8+Le()*.9,_,.8+Le()*.9),s.compose(o,r,c),i.setMatrixAt(h,s),i.setColorAt(h,u.setHSL(.29+Le()*.04,.4+Le()*.2,.26+Le()*.1)),h++}i.count=h,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),se.add(i)}function vd(e,t){const n=Jt[e],i=Gs[e],s=Math.atan2(Dn[e].x,Dn[e].z),r=-Math.cos(s),a=Math.sin(s),o=new Sn({color:2236962});for(const c of[1,-1]){const u=new me(new ae(1.4,9,1.4),o),h=n.clone().addScaledVector(i,c*(Ei+1.5));u.position.set(h.x,n.y+4.5,h.z),se.add(u)}if(t)for(let c=0;c<10;c++){const u=new me(new ae(1.9,1.4,1.4),new Je({color:c%2?1118481:16777215})),h=(c-4.5)*1.9;u.position.set(n.x+r*h,n.y+9,n.z+a*h),u.rotation.y=s,se.add(u)}else{const c=new me(new ae((Ei+1.5)*2,1.4,1.4),o);c.position.set(n.x,n.y+9,n.z),c.rotation.y=s,se.add(c)}ey(e)}vd(0,!1);vd(Jt.length-1,!0);function Sd(e,t=!1){const n=new pi,i=t?new Je({color:e,transparent:!0,opacity:.45}):new Sn({color:e}),s=t?i:new Sn({color:2302762}),r=t?i:new Sn({color:10475775}),a=(f,m,g,_,p)=>{const l=new me(f,m);return l.position.set(g,_,p),n.add(l),l};if(a(new ae(2.3,.55,4.6),i,0,.8,0),a(new ae(2,.3,1),i,0,.55,2.5),a(new ae(2.34,.22,4),s,0,.42,0),a(new ae(.18,.3,1.4),i,-1.2,.95,.9),a(new ae(.18,.3,1.4),i,1.2,.95,.9),a(new ae(1.6,.55,1.9),r,0,1.3,-.2),a(new ae(1.7,.1,2),i,0,1.62,-.2),a(new ae(2.4,.12,.7),s,0,1.72,-2),a(new ae(.14,.5,.4),s,-.8,1.4,-2),a(new ae(.14,.5,.4),s,.8,1.4,-2),a(new ae(.3,.18,.5),i,-1.05,1.35,.6),a(new ae(.3,.18,.5),i,1.05,1.35,.6),a(new ae(.5,.28,.3),s,-.5,.6,-2.35),a(new ae(.5,.28,.3),s,.5,.6,-2.35),!t){const f=new Je({color:16774080}),m=new Je({color:16722474});a(new ae(.45,.18,.1),f,-.7,.82,2.32),a(new ae(.45,.18,.1),f,.7,.82,2.32),a(new ae(.45,.16,.1),m,-.7,.85,-2.32),a(new ae(.45,.16,.1),m,.7,.85,-2.32),n.userData.tail=m}const o=new Si(.45,.45,.4,12);o.rotateZ(Math.PI/2);const c=t?i:new Sn({color:1315860}),u=t?i:new Je({color:14211294}),h=[],d=[];for(const[f,m,g]of[[-1.15,1.5,1],[1.15,1.5,1],[-1.15,-1.5,0],[1.15,-1.5,0]]){const _=new pi;_.position.set(f,.45,m);const p=new pi;p.add(new me(o,c));const l=new me(new Si(.2,.2,.44,8).rotateZ(Math.PI/2),u);p.add(l),_.add(p),n.add(_),d.push(p),g&&h.push(_)}return n.userData.wheels={steer:h,spin:d},n}const yn=Sd(16742938);yn.rotation.order="YXZ";se.add(yn);const Ln=Sd(3528447,!0);se.add(Ln);function Zc(){const e=pM({shared:Ua.ghost,pb:qc,expected:$c}),t=ye.reference&&ye.reference.p.length>1?ye.reference:null;Vn=!1;let n=e.rival;Ea&&t?(n={ghost:t,kind:"pb",racingPB:!1},Vn=!0):!n&&t&&(n={ghost:t,kind:"pb",racingPB:!1},Vn=!0),$i=n,Ze=n?n.ghost:null,ci=e.notice,Vn&&(ci=(ci?ci+" ":"")+"Racing the REFERENCE run."),Ln.visible=!!Ze,ci&&typeof console<"u"&&console.log("[canyon-debug] rival",e.status,ci)}Zc();const Xu=yn.userData.wheels,Mr=new me((()=>{const e=new Da(2.4,20);return e.rotateX(-Math.PI/2),e})(),new Je({color:0,transparent:!0,opacity:.32,depthWrite:!1}));se.add(Mr);const Qc=500,Qe=new Er((()=>{const e=new Zn(1,1);return e.rotateX(-Math.PI/2),e})(),new Je({transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Qc);Qe.frustumCulled=!1;Qe.renderOrder=1;se.add(Qe);let hr=0;const yd=new At(4867920),sy=new At(920846),ju=new At,ry=new Zt().makeScale(0,0,0);function Ed(){for(let e=0;e<Qc;e++)Qe.setMatrixAt(e,ry),Qe.setColorAt(e,yd);Qe.instanceMatrix.needsUpdate=!0,Qe.instanceColor&&(Qe.instanceColor.needsUpdate=!0),hr=0}Ed();const Yu=new Zt,qu=new Kn,$u=new je,Ku=new k,Zu=new k;function ay(e,t,n,i,s,r,a){$u.set(0,i,0),qu.setFromEuler($u),Ku.set(e,t,n),Zu.set(s,1,r),Yu.compose(Ku,qu,Zu),Qe.setMatrixAt(hr,Yu),ju.copy(yd).lerp(sy,a),Qe.setColorAt(hr,ju),hr=(hr+1)%Qc,Qe.instanceMatrix.needsUpdate=!0,Qe.instanceColor&&(Qe.instanceColor.needsUpdate=!0)}let _n=0,Ta=0;const Jc=new Ye;Jc.setAttribute("position",new Oe(gi.dust.positions,3));const Td=new W_(Jc,new Ph({color:15254682,size:1.1,transparent:!0,opacity:.45}));Td.frustumCulled=!1;se.add(Td);const he={steer:0,drift:!1,left:!1,right:!1,keyDrift:!1},En=new Gx;addEventListener("keydown",e=>{Qn(),(e.key==="Escape"||e.key==="p"||e.key==="P")&&(qs(!is),e.preventDefault()),(e.key==="f"||e.key==="F")&&(ma=!ma,nl.classList.toggle("hidden",!ma)),!e.repeat&&((e.key==="ArrowLeft"||e.key==="a")&&(he.left=!0),(e.key==="ArrowRight"||e.key==="d")&&(he.right=!0),(e.key==="ArrowDown"||e.key===" ")&&(he.keyDrift=!0,e.preventDefault()),(e.key==="r"||e.key==="R")&&Fd(),e.key==="Enter"&&$t==="menu"&&Zi(!1),e.key==="Enter"&&$t==="finish"&&Zi(!0),e.key==="Enter"&&$t==="run"&&Zi(!0))});addEventListener("keyup",e=>{(e.key==="ArrowLeft"||e.key==="a")&&(he.left=!1),(e.key==="ArrowRight"||e.key==="d")&&(he.right=!1),(e.key==="ArrowDown"||e.key===" ")&&(he.keyDrift=!1)});const Fa=document.getElementById("stick"),tl=document.getElementById("knob"),Ki=document.getElementById("driftbtn"),oy=document.getElementById("resetbtn");oy.addEventListener("pointerdown",e=>{e.preventDefault(),Qn(),Fd()});Fa.addEventListener("pointerdown",e=>{Qn(),En.stickDown(e.pointerId,e.clientX);try{e.target.setPointerCapture(e.pointerId)}catch{}});Fa.addEventListener("pointermove",e=>{En.stickMove(e.pointerId,e.clientX),tl.style.transform=`translate(calc(-50% + ${En.joy*34}px), -50%)`});const wd=e=>{En.stickUp(e.pointerId),En.joyOn||(tl.style.transform="translate(-50%,-50%)")};Fa.addEventListener("pointerup",wd);Fa.addEventListener("pointercancel",wd);Ki.addEventListener("pointerdown",e=>{Qn(),En.driftDown(e.pointerId);try{Ki.setPointerCapture(e.pointerId)}catch{}Ki.classList.add("on"),e.preventDefault()});const Ad=e=>{En.driftUp(e.pointerId),En.drift||Ki.classList.remove("on")};Ki.addEventListener("pointerup",Ad);Ki.addEventListener("pointercancel",Ad);function Ar(){he.left=!1,he.right=!1,he.keyDrift=!1,he.steer=0,he.drift=!1,wS(En),tl.style.transform="translate(-50%,-50%)",Ki.classList.remove("on")}addEventListener("blur",Ar);document.addEventListener("visibilitychange",()=>{document.hidden?(Ar(),en.suspend(),($t==="run"||$t==="countdown"||$t==="watch")&&qs(!0)):en.resume()});addEventListener("pagehide",Ar);const bd=document.getElementById("retrybtn");bd.textContent=`↻ ${id(Ie)}`;bd.addEventListener("click",()=>{Qn(),($t==="run"||$t==="countdown")&&Zi(!0)});function cy(){he.left&&!he.right?he.steer=-1:he.right&&!he.left?he.steer=1:he.steer=En.steer,he.drift=he.keyDrift||En.drift}let $t="menu",dr=0,Ac=0,fr=0,is=!1;const ht=Vx();let xr=!0;const xe=gS(),ra={x:0,y:0,z:0};let ma=!1,Lo=60,Oi=0,wa=0;function ly(e){Aa.textContent=CS(),Aa.classList.add("show"),wa=e+1800}function za(){Aa.textContent="",Aa.classList.remove("show"),wa=0}let pr=rd(),Ee=Number(Yn(md)||0);!Ee&&sn==="daily"&&(Ee=Number(Yn(YS)||0));const br=document.getElementById("time"),Us=document.getElementById("speed"),Co=document.getElementById("best"),Ne=document.getElementById("msg"),Aa=document.getElementById("penalty"),bs=document.getElementById("exitfb"),fi=document.getElementById("lesson"),vr=document.getElementById("progfill"),Ge=document.getElementById("delta"),Xi=document.getElementById("split"),Lr=document.getElementById("panel"),el=document.getElementById("presult"),Ld=document.getElementById("ptitle"),uy=document.getElementById("pdate"),Cd=document.getElementById("ptargets"),hy=document.getElementById("psub"),dy=document.getElementById("phint"),nl=document.getElementById("debug"),bc=document.getElementById("racebtn"),Rd=document.getElementById("referencebtn"),Dd=document.getElementById("mutebtn"),fy=document.getElementById("fsbtn"),Oa=document.getElementById("pauseoverlay"),py=document.getElementById("resumebtn"),my=document.getElementById("pausemenubtn"),il=document.getElementById("pauseplaybtn"),gy=document.getElementById("stopbtn");document.getElementById("day").textContent=sn==="daily"?`CANYON DAILY · ${qn}`:ye.title.toUpperCase();function Nd(){Ee>0?Co.textContent=`BEST ${de(Ee)}`:Gn>0?Co.textContent=`FRIEND ${de(Gn)}`:Co.textContent="BEST —"}Nd();const en=eS({createContext:()=>{const e=window,t=e.AudioContext||e.webkitAudioContext;if(!t)throw new Error("no AudioContext");return new t},storage:(()=>{try{return localStorage}catch{return null}})()});let Qu=!1;function sl(){Dd.textContent=en.isMuted()?"SOUND OFF":"SOUND ON"}function Qn(){if(!Qu){Qu=!0;try{en.start()}catch{}sl()}}const Ro=Hv();let Ju=Yn("canyon-drift-lesson-seen")==="1";const Id=`${ye.storageKey}-practice`,es=Wv(5);{const e=Yn(Id);if(e){const[t,n]=e.split(","),i=Number(t),s=Number(n);isFinite(i)&&i>=0&&(es.clean=Math.floor(i)),isFinite(s)&&s>=0&&(es.perfect=Math.floor(s))}}function _y(){gr(Id,`${es.clean},${es.perfect}`)}let ji=null,mr=0;function Ba(){bs.textContent="",bs.classList.remove("show"),mr=0}function My(e){const t=new URL(location.href);e==="daily"?t.searchParams.delete("mode"):t.searchParams.set("mode",e),location.assign(t.toString())}const th={daily:document.getElementById("modedaily"),practice:document.getElementById("modepractice"),benchmark:document.getElementById("modebenchmark")};for(const e of["daily","practice","benchmark"])th[e].onclick=()=>My(e),th[e].classList.toggle("active",e===sn);function rl(){const e=!!ye.reference,t=Ee>0||!!Ua.ghost||Gn>0;bc.classList.toggle("hidden",!(e&&t)),Rd.classList.toggle("hidden",!e),e&&(bc.textContent=Ea?"RACE MY BEST":"RACE REFERENCE")}rl();bc.onclick=()=>{Ea=!Ea,Zc(),rl()};Rd.onclick=()=>Sy();Dd.onclick=()=>{Qn(),en.toggleMuted(),sl()};sl();fy.onclick=()=>{const e=document.documentElement;document.fullscreenElement?document.exitFullscreen?.():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?.()};py.onclick=()=>qs(!1);my.onclick=()=>{qs(!1),ba()};function xy(){const e=ye.targets;if(Ee>0){const t=$h(Ee,e);return`BEST ${de(Ee)} · ${t==="none"?"NO MEDAL YET":t.toUpperCase()} · GOLD ${de(e.goldMs)}`}return`TARGETS — GOLD ${de(e.goldMs)} · SILVER ${de(e.silverMs)} · BRONZE ${de(e.bronzeMs)}`}function vy(){const e=[];return Ee>0&&e.push(`Your best ${de(Ee)}`),Gn>0&&e.push(`Friend ${de(Gn)}`),ci&&e.push(ci),!Vn&&($i||Gn)?e.push(mM($i,Gn)):Vn||e.push(ye.reference?"Race the reference, then watch it":"Point-to-point sprint · flat out, drift the hairpins"),e.join(" · ")}function qs(e){$t!=="run"&&$t!=="countdown"&&$t!=="watch"||(is=e,Oa.classList.toggle("hidden",!e),il.textContent=e?"RESUME":"PAUSE",e?en.suspend():en.resume())}function ba(){is=!1,Oa.classList.add("hidden"),il.textContent="PAUSE",$t="menu",document.body.classList.remove("racing","watching"),Lr.classList.remove("hidden"),yn.visible=!0,Ln.visible=!!Ze,Ne.textContent="",Ge.textContent="",Ge.className="",br.textContent="0:00.00",Us.textContent="0 km/h",vr.style.width="0%",Ba(),en.reset()}function Sy(){!ye.reference||ye.reference.p.length<2||(Qn(),Ar(),Lr.classList.add("hidden"),document.body.classList.add("racing","watching"),is=!1,Oa.classList.add("hidden"),fr=0,$t="watch",yn.visible=!1,Ln.visible=!0,Ne.textContent="REFERENCE — DEMONSTRATION",fi.textContent="",Xi.textContent="",Ge.textContent="REPLAY",Ge.className="",br.textContent="0:00.00",Us.textContent="0 km/h",vr.style.width="0%",Ba(),za())}gy.onclick=()=>{qs(!1),ba()};il.onclick=()=>qs(!is);function Pd(){yn.position.set(ht.px,ht.py,ht.pz),yn.rotation.set(ht.pitch,ht.heading,0);const e=ve.y[ht.lastIdx]+.2;Mr.position.set(ht.px,e+.06,ht.pz),Mr.scale.setScalar(1+Xt(ht.py-e,0,12)*.04)}function Ud(e){Yx(ht,ve,e),Pd(),Pa(xe,wr,ht.px,ht.py,ht.pz,ht.heading),_n=0,Ta=0,xr=!0}function Fd(){if($t==="finish"){Zi(!0);return}$t==="run"&&(qx(ht),Pd(),Pa(xe,wr,ht.px,ht.py,ht.pz,ht.heading),_n=0,Ta=0,xr=!0,ly(performance.now()),Ne.textContent="")}Ud(0);pe.position.set(ht.px-10,ht.py+6,ht.pz-10);pe.lookAt(ht.px,ht.py+1,ht.pz);let eh=!1,ga=3.1;function Zi(e=!1){Ar(),Lr.classList.add("hidden"),document.body.classList.add("racing"),document.body.classList.remove("watching"),yn.visible=!0,$t="countdown",dr=0,li=0,ga=TS(e,eh),eh=!0,Ud(0),Oi=0,wc=0;const t=RS();br.textContent=t.time,vr.style.width=`${t.progressPct}%`,Ge.textContent=t.delta,Ge.className="",Xi.textContent=t.split,nl.textContent=t.debug,pr=rd(),Ne.textContent="",za(),Ed(),Ba(),ji=null,is=!1,Oa.classList.add("hidden"),en.reset(),Us.textContent="0 km/h",fi.textContent="",Wi=Ps.map(()=>null),pe.position.set(xe.px,xe.py,xe.pz),pe.lookAt(xe.lx,xe.ly,xe.lz),pe.fov=xe.fov,pe.updateProjectionMatrix(),Ln.visible=!!Ze}document.getElementById("drivebtn").onclick=()=>{Qn(),Zi($t==="finish")};gd.addEventListener("pointerdown",()=>{Qn(),$t==="menu"&&Zi()});document.getElementById("sharebtn").onclick=async()=>{const e=$t==="finish",t=e?Ac:Ee;let n="";e?n=kh(ht.rec,Ac,Wc,$c):n=Yn(ya)||(sn==="daily"?Yn(Yc):null)||"";const i=Kv(vM(location.origin,location.pathname,{day:qn,timeMs:t,ghost:n}),sn),s=i.includes("&g="),r=xM(qn,t,i),a=await EM({requestNativeShare:o=>navigator.share(o),copyText:o=>navigator.clipboard.writeText(o)},{title:ye.title,text:r,url:i,hasGhost:s,isFinish:e},yM(Ie,typeof navigator.share=="function"));el.textContent=a.message};const yy=new k;function Ey(e){cy();const t=Xt(he.steer,-1,1),n=Kx(ht,ve,{steer:t,drift:he.drift},e);ht.rhythmOut.event!=="none"&&(ji={event:ht.rhythmOut.event,grade:ht.rhythmOut.grade}),n.finished&&Ty(),_n=rS(_n,sS(ht.driftAmt,Math.abs(n.slip),n.spd,ht.grounded,n.drifting),e),Ta++;const i=uS(_n);if(i>0){const r=hS(_n);for(let a=0;a<i;a++)gi.dust.spawn(ht.px,ht.py,ht.pz,r)}const s=lS(_n);if(s>0&&Ta%s===0){const r=ve.y[ht.lastIdx]+.2,a=Math.sin(ht.heading),o=Math.cos(ht.heading),c=-o,u=a,h=aS(_n),d=oS(_n),f=cS(_n);for(const m of[1,-1])ay(ht.px-a*1.5+c*1*m,r+.22,ht.pz-o*1.5+u*1*m,ht.heading,h,d,f)}return yy.set(ht.vx,0,ht.vz),n}function Ty(){if($t!=="run")return;$t="finish",li=0,Pa(xe,wr,ht.px,ht.py,ht.pz,ht.heading),xr=!0;const e=Math.round(ht.raceMs);Ac=e;const t=Ee;if(!Ee||e<Ee){Ee=e,gr(md,String(Ee));const u=kh(ht.rec,e,Wc,$c);gr(ya,u),sn==="daily"&&gr(Yc,u);try{const h=Tr(Yn(ya));qc=h&&h.p.length>1?h:null,Zc()}catch{}}Nd(),rl();const n=Ee===e,i=$h(e,ye.targets);Ld.textContent=n?"NEW BEST!":"FINISH!";const s=!t||n?t?`by ${de(t-e)}`:"first finished run!":`+${de(e-t)} vs best`,r=i==="none"?"no medal":`${i.toUpperCase()} medal`;el.textContent=`${de(e)} · ${r} · ${s} · best ${de(Ee)}${Gn?` · friend ${de(Gn)}`:""}`;const a=Ze?Ps.map(u=>vc(Ze,ve.x[u],ve.z[u])):[],o=$v(qv(Wi,a));Cd.textContent=`${Vn?"REFERENCE · ":""}${Yv(Ee,ye.targets)}${o?` · ${o}`:""}`,document.body.classList.remove("racing"),Lr.classList.remove("hidden");const c=document.getElementById("drivebtn");c.textContent="RETRY (Enter)",c.focus(),Ne.textContent="",za(),Ba(),sn==="practice"&&(fi.textContent=qh(es,Ie))}const wy=br;let nh=performance.now(),li=0;const aa=1/60;function zd(e){requestAnimationFrame(zd);let t=Math.min((e-nh)/1e3,.1);if(nh=e,t>0&&(Lo=tn(Lo,1/t,.05)),is&&($t==="countdown"||$t==="run"||$t==="watch")){di.render(se,pe);return}if($t==="watch"){const n=ye.reference;if(!n){ba();return}fr+=t*1e3;const i=n.t,s=Math.min(fr,i),r=vo(n,s),a=vo(n,Math.max(0,s-60)),o=Math.hypot(r.x-a.x,r.z-a.z)/.06;if(br.textContent=de(s),Us.textContent=`${Ou(o)} km/h`,vr.style.width=`${i>0?Math.min(100,s/i*100):0}%`,Ln.visible=!0,Ln.position.set(r.x,r.y,r.z),Ln.rotation.set(0,r.h,0),pe.position.set(r.x-Math.sin(r.h)*12,r.y+5,r.z-Math.cos(r.h)*12),pe.lookAt(r.x,r.y+1,r.z),fr>i+700&&(Ne.textContent="REFERENCE COMPLETE",fr>i+1600)){ba();return}di.render(se,pe);return}if($t==="menu"){const n=e/1e3;pe.position.set(Jt[0].x+Math.cos(n*.15)*58,Jt[0].y+24,Jt[0].z+Math.sin(n*.15)*58),pe.lookAt(Jt[0].x,Jt[0].y+1,Jt[0].z),Ld.textContent=ye.title.toUpperCase(),uy.textContent=sn==="daily"?qn:"",hy.textContent=ye.description,Cd.textContent=xy(),el.textContent=vy(),dy.innerHTML=Ie?"Mobile: left stick steers · tap DRIFT to slide · steer back the other way to exit · RESCUE returns to the track (+3s)<br/>Controls: tap PAUSE to stop the clock · MENU to quit · RETRY restarts":"PC: ← → steer · ↓ / space drift · R rescue (+3s) · Enter retry · Esc / P pause<br/>Drift: hold a direction, tap DRIFT to start the slide, hold it, then countersteer to exit",Lr.classList.remove("hidden"),document.getElementById("drivebtn").textContent="DRIVE",Ge.textContent="",Ge.className="",Xi.textContent="",Us.textContent="0 km/h",fi.textContent="",di.render(se,pe);return}if($t==="countdown"){if(dr+=t,ga>1){const n=3-Math.floor(dr);Ne.textContent=n>0?String(n):"GO!"}else Ne.textContent=dr>ga-.25?"GO!":"READY";dr>ga&&($t="run",Ne.textContent=""),di.render(se,pe);return}if($t==="run"||$t==="finish"){if($t==="run"){li+=t;let n=0,i=null;for(;li>=aa&&n<4&&$t==="run";)i=Ey(aa),li-=aa,n++;li=nv(li),pr=Qx(pr,n,i??pr);const s=pr;i&&i.wallHit===!0&&(Oi=Math.min(1,(i.wallSev??0)+.25));const r=xr?1:Xt(li/aa,0,1);xr=!1;const a=Zx(ht,r),o=tn(ht.prevRaceMs,ht.raceMs,r);if(wy.textContent=de(ht.raceMs),Us.textContent=`${Ou(s.spd)} km/h`,vr.style.width=`${s.sIdx/(ve.n-1)*100}%`,Ze&&$i){const g=vc(Ze,ht.px,ht.pz);if(g>=0){const _=ht.raceMs-g,p=Vn?"REF":$i.kind==="friend"?"FRIEND":"PB";Ge.textContent=Du(_,s.spd,p),Ge.className=_<0?"ahead":"behind"}else Ge.textContent="",Ge.className=""}else Ge.textContent="",Ge.className="";for(let g=0;g<Ps.length;g++)if(Wi[g]===null&&s.sIdx>=Ps[g]){if(Wi[g]=Math.round(ht.raceMs),Ze){const _=Ps[g],p=vc(Ze,ve.x[_],ve.z[_]),l=Vn?"REF":$i&&$i.kind==="friend"?"FRIEND":"PB";Xi.textContent=p>=0?`S${g+1} ${Du(Wi[g]-p,s.spd,l)}`:`S${g+1} ${de(Wi[g])}`}else Xi.textContent=`S${g+1} ${de(Wi[g])}`;wc=e+1500}Xi.textContent!==""&&e>wc&&(Xi.textContent=""),wa&&e>wa&&za();const c=ji?ji.event:"none",u=ji?ji.grade:"none";ji=null;const h=Bv(c,u);if(h&&(bs.textContent=h,bs.classList.add("show"),mr=e+1200,en.oneShot("cleanExit",.5)),mr&&e>mr&&(bs.classList.remove("show"),bs.textContent="",mr=0),sn==="practice"?(Xv(es,c,u)&&_y(),fi.textContent=qh(es,Ie)):Ju?fi.textContent="":(Gv(Ro,{event:c,grade:u,phase:ht.rhythmOut.phase,slideAge:ht.rhythm.slideAge}),Ro.step==="complete"?(Ju=!0,gr("canyon-drift-lesson-seen","1"),fi.textContent=""):fi.textContent=Vv(Ro.step,Ie)),en.update(t,{speed:s.spd,maxSpeed:80,load:s.offroad?.8:Math.min(1,ht.driftAmt),slip:Math.min(1,ht.driftAmt),drifting:s.drifting,grounded:ht.grounded}),i&&(i.wallHit===!0?en.oneShot("crash",Xt(i.wallSev??.5,.2,1)):i.landed&&en.oneShot("land",Xt(Math.abs(i.landV)/12,.2,1))),s.stuckMs>1500?Ne.textContent=bS(Ie):s.oobMs>900?Ne.textContent=LS(Ie):s.drifting?Ne.textContent="DRIFT":(Ne.textContent==="DRIFT"||Ne.textContent.startsWith("STUCK")||Ne.textContent.startsWith("OFF COURSE"))&&(Ne.textContent=""),Ze&&Ze.p.length>1){const g=vo(Ze,o);Ln.position.set(g.x,g.y,g.z),Ln.rotation.set(0,g.h,0)}yn.position.set(a.x,a.y,a.z),Oi*=Math.exp(-5*t),Oi<.001&&(Oi=0);const d=Oi>0?Math.sin(e*.09)*.18*Oi:0;yn.rotation.set(a.pitch,a.h,-he.steer*(.05+xe.driftMix*.09)+d);const f=yn.userData.tail;f&&f.color.setHex(xe.driftMix>.4||he.drift?16734762:16722474);const m=ve.y[s.sIdx]+.2;Mr.position.set(a.x,m+.06,a.z),Mr.scale.setScalar(1+Xt(a.y-m,0,12)*.04),xS(xe,wr,{dt:t,px:a.x,py:a.y,pz:a.z,heading:a.h,vx:ht.vx,vz:ht.vz,speed:s.spd,drifting:s.drifting,tangentX:ve.tx[s.sIdx],tangentZ:ve.tz[s.sIdx],hasTangent:!0,landed:i?i.landed:!1,landV:i?i.landV:0,wallHit:i?i.wallHit===!0:!1,wallVn:i?(i.wallSev??0)*25:0}),vS(xe,ra),pe.position.set(ra.x,ra.y,ra.z),pe.lookAt(xe.lx,xe.ly,xe.lz),Math.abs(pe.fov-xe.fov)>.001&&(pe.fov=xe.fov,pe.updateProjectionMatrix());for(const g of Xu.steer)g.rotation.y=he.steer*.42;for(const g of Xu.spin)g.rotation.x+=s.spd/.45*t;if(ma){const g=(s.slip*180/Math.PI).toFixed(1),_=(s.yawRate*180/Math.PI).toFixed(0);nl.textContent=`FPS ${Lo.toFixed(0)} dt ${(t*1e3).toFixed(2)}ms steps ${n} a ${r.toFixed(2)} | spd ${s.spd.toFixed(1)} f ${s.fSpeed.toFixed(1)} l ${s.lSpeed.toFixed(1)} slip ${g} yaw ${_}/s ${s.surface}${s.drifting?" DRIFT":""} fov ${pe.fov.toFixed(1)} hold ${ht.driftHold.toFixed(2)} exit ${ht.exitT.toFixed(2)} ${s.driftPhase??"idle"} q ${(s.exitQuality??0).toFixed(2)} rb ${(s.rhythmBoost??0).toFixed(1)} trl ${_n.toFixed(2)} ch ${xe.camH.toFixed(2)} imp ${SS(xe).toFixed(2)} oob ${(s.oobMs/1e3).toFixed(1)}s`}}gi.update(t),Jc.attributes.position.needsUpdate=!0,di.render(se,pe)}}requestAnimationFrame(zd);

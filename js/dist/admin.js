(()=>{var t={n:s=>{var e=s&&s.__esModule?()=>s.default:()=>s;return t.d(e,{a:e}),e},d:(s,e)=>{for(var a in e)t.o(e,a)&&!t.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:e[a]})},o:(t,s)=>Object.prototype.hasOwnProperty.call(t,s),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},s={};(()=>{"use strict";t.r(s);const e=flarum.core.compat["admin/app"];var a=t.n(e);function n(t,s){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},n(t,s)}const r=flarum.core.compat["admin/components/ExtensionPage"];var o=function(t){var s,e;function r(){return t.apply(this,arguments)||this}return e=t,(s=r).prototype=Object.create(e.prototype),s.prototype.constructor=s,n(s,e),r.prototype.content=function(){var t=a().data.s3SetByEnv;return m("div",{className:"ExtensionPage--settings"},m("div",{className:"container"},t?m("h3",{className:"ExtensionPage-subHeader"},a().translator.trans("blomstra-s3-assets.admin.settings.configured_by_environment")):m("div",{className:"Form-group"},m("h3",null,a().translator.trans("blomstra-s3-assets.admin.settings.aws-section")),this.buildSettingComponent({setting:"fof-upload.awsS3Key",type:"string",label:a().translator.trans("blomstra-s3-assets.admin.settings.s3key.label"),help:a().translator.trans("blomstra-s3-assets.admin.settings.s3key.help")}),this.buildSettingComponent({setting:"fof-upload.awsS3Secret",type:"string",label:a().translator.trans("blomstra-s3-assets.admin.settings.s3secret.label"),help:a().translator.trans("blomstra-s3-assets.admin.settings.s3secret.help")}),this.buildSettingComponent({setting:"fof-upload.awsS3Region",type:"string",label:a().translator.trans("blomstra-s3-assets.admin.settings.s3region.label"),help:a().translator.trans("blomstra-s3-assets.admin.settings.s3region.help")}),this.buildSettingComponent({setting:"fof-upload.awsS3Bucket",type:"string",label:a().translator.trans("blomstra-s3-assets.admin.settings.s3bucket.label"),help:a().translator.trans("blomstra-s3-assets.admin.settings.s3bucket.help")}),m("h3",null,a().translator.trans("blomstra-s3-assets.admin.settings.s3-compatible-section")),m("p",{className:"helpText"},a().translator.trans("blomstra-s3-assets.admin.settings.s3-compatible-section-help")),this.buildSettingComponent({setting:"fof-upload.cdnUrl",type:"string",label:a().translator.trans("blomstra-s3-assets.admin.settings.s3url.label"),help:a().translator.trans("blomstra-s3-assets.admin.settings.s3url.help")}),this.buildSettingComponent({setting:"fof-upload.awsS3Endpoint",type:"string",label:a().translator.trans("blomstra-s3-assets.admin.settings.s3endpoint.label"),help:a().translator.trans("blomstra-s3-assets.admin.settings.s3endpoint.help")}),this.buildSettingComponent({setting:"fof-upload.awsS3UsePathStyleEndpoint",type:"boolean",label:a().translator.trans("blomstra-s3-assets.admin.settings.s3path-style-endpoint.label"),help:a().translator.trans("blomstra-s3-assets.admin.settings.s3path-style-endpoint.help")}),this.submitButton())))},r}(t.n(r)());a().initializers.add("blomstra/s3-assets",(function(){a().extensionData.for("blomstra-s3-assets").registerPage(o)}))})(),module.exports=s})();
//# sourceMappingURL=admin.js.map
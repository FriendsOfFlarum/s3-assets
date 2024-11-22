(()=>{var t={n:s=>{var e=s&&s.__esModule?()=>s.default:()=>s;return t.d(e,{a:e}),e},d:(s,e)=>{for(var a in e)t.o(e,a)&&!t.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:e[a]})},o:(t,s)=>Object.prototype.hasOwnProperty.call(t,s)};(()=>{"use strict";const s=flarum.core.compat["admin/app"];var e=t.n(s);function a(t,s){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},a(t,s)}const n=flarum.core.compat["admin/components/ExtensionPage"];var i=t.n(n);const o=flarum.core.compat["common/utils/ItemList"];var r=t.n(o),l=function(t){function s(){for(var s,e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return(s=t.call.apply(t,[this].concat(a))||this).s3SetByEnv=void 0,s.settingPrefix=void 0,s.awsRegions=void 0,s}var n,i;i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,a(n,i);var o=s.prototype;return o.oninit=function(s){t.prototype.oninit.call(this,s),this.awsRegions=e().data.FoFS3Regions,this.s3SetByEnv=e().data.s3SetByEnv,this.settingPrefix=e().data.FoFS3ShareWithFoFUpload?"fof-upload.":"fof-s3-assets."},o.content=function(){return m("div",{className:"S3SettingsPage"},m("div",{className:"container"},m("div",{className:"S3SettingsPageTabPage S3SettingsPage--settings"},m("div",{className:"Form"},this.settingsItems().toArray(),m("div",{className:"Form-group"},this.submitButton())))))},o.settingsItems=function(){var t=new(r());return t.add("general",m("div",{className:"Section"},m("h3",null,e().translator.trans("fof-s3-assets.admin.settings.general.heading")),m("p",{className:"helpText"},e().translator.trans("fof-s3-assets.admin.settings.general.help")),this.generalItems().toArray())),!this.s3SetByEnv&&t.add("aws-s3",m("div",{className:"Section"},m("h3",null,e().translator.trans("fof-s3-assets.admin.settings.aws-s3.heading")),m("p",{className:"helpText"},e().translator.trans("fof-s3-assets.admin.settings.aws-s3.help")),this.awss3Items().toArray())),!this.s3SetByEnv&&t.add("aws-s3-compatible",m("div",{className:"Section"},m("h3",null,e().translator.trans("fof-s3-assets.admin.settings.aws-s3-compatible.heading")),m("p",{className:"helpText"},e().translator.trans("fof-s3-assets.admin.settings.aws-s3-compatible.help")),this.awss3CompatibleItems().toArray())),t},o.generalItems=function(){var t=new(r());return e().initializers.has("fof-upload")&&!this.s3SetByEnv&&t.add("shareWithFoFUpload",this.buildSettingComponent({setting:"fof-s3-assets.share_s3_config_with_fof_upload",type:"boolean",label:e().translator.trans("fof-s3-assets.admin.settings.general.shareWithFoFUpload.label"),help:e().translator.trans("fof-s3-assets.admin.settings.general.shareWithFoFUpload.help")})),t},o.awss3Items=function(){var t=new(r());return t.add("awsS3Key",this.buildSettingComponent({setting:this.settingPrefix+"awsS3Key",type:"password",label:e().translator.trans("fof-s3-assets.admin.settings.s3key.label"),help:e().translator.trans("fof-s3-assets.admin.settings.s3key.help")})),t.add("awsS3Secret",this.buildSettingComponent({setting:this.settingPrefix+"awsS3Secret",type:"password",label:e().translator.trans("fof-s3-assets.admin.settings.s3secret.label"),help:e().translator.trans("fof-s3-assets.admin.settings.s3secret.help")})),t.add("awsS3Region",this.buildSettingComponent({setting:this.settingPrefix+"awsS3Region",type:"select",options:this.awsRegions.reduce((function(t,s){return t[s.value]=s.label+" ("+s.value+")",t}),{}),label:e().translator.trans("fof-s3-assets.admin.settings.s3region.label"),help:e().translator.trans("fof-s3-assets.admin.settings.s3region.help")})),t.add("awsS3Bucket",this.buildSettingComponent({setting:this.settingPrefix+"awsS3Bucket",type:"string",label:e().translator.trans("fof-s3-assets.admin.settings.s3bucket.label"),help:e().translator.trans("fof-s3-assets.admin.settings.s3bucket.help")})),t.add("awsS3ACL",this.buildSettingComponent({setting:this.settingPrefix+"awsS3ACL",type:"string",label:e().translator.trans("fof-s3-assets.admin.settings.s3acl.label"),help:e().translator.trans("fof-s3-assets.admin.settings.s3acl.help")})),t},o.awss3CompatibleItems=function(){var t=new(r());return t.add("cdnUrl",this.buildSettingComponent({setting:this.settingPrefix+"cdnUrl",type:"string",label:e().translator.trans("fof-s3-assets.admin.settings.s3url.label"),help:e().translator.trans("fof-s3-assets.admin.settings.s3url.help")})),t.add("awsS3Endpoint",this.buildSettingComponent({setting:this.settingPrefix+"awsS3Endpoint",type:"string",label:e().translator.trans("fof-s3-assets.admin.settings.s3endpoint.label"),help:e().translator.trans("fof-s3-assets.admin.settings.s3endpoint.help")})),t.add("awsS3UsePathStyleEndpoint",this.buildSettingComponent({setting:this.settingPrefix+"awsS3UsePathStyleEndpoint",type:"boolean",label:e().translator.trans("fof-s3-assets.admin.settings.s3path-style-endpoint.label"),help:e().translator.trans("fof-s3-assets.admin.settings.s3path-style-endpoint.help")})),t},s}(i());e().initializers.add("fof/s3-assets",(function(){e().extensionData.for("fof-s3-assets").registerPage(l)}))})(),module.exports={}})();
//# sourceMappingURL=admin.js.map
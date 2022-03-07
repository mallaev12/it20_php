!function(T){"use strict";T.Zebra_Dialog=function(){var _,h,f={animation_speed_hide:250,animation_speed_show:0,auto_close:!(this.version="3.0.5"),auto_focus_button:!0,buttons:!0,center_buttons:!1,custom_class:!1,default_value:"",disable_page_scrolling:!0,height:0,keyboard:!0,margin:0,max_height:0,max_width:450,message:"",modal:!0,backdrop_close:!0,backdrop_opacity:".9",position:"center",reposition_speed:500,show_close_button:!0,source:!1,title:"",type:"information",vcenter_short_message:!0,width:0,onClose:null},y=this,v={},D=!1,Z=!1,w=function(){var t,e,o,i,s,a=T(window).width(),n=T(window).height(),r=y.dialog.outerWidth(),l=y.dialog.outerHeight(),d=a<768,g=0,c=0;y.dialog_left=void 0,y.dialog_top=void 0,(s=(y.settings.margin+"").match(/^([0-9]+)(\%)?$/))&&(void 0!==s[2]?(g=parseInt(a*parseInt(s[1],10)/100,10),c=parseInt(n*parseInt(s[1],10)/100,10)):g=c=parseInt(s[1],10),isNaN(g)&&(g=c=0)),t={left:g,top:c,right:a-g-r,bottom:n-c-l,center:(a-r)/2,middle:(n-l)/2},T.isArray(y.settings.position)&&2===y.settings.position.length&&"string"==typeof y.settings.position[0]&&y.settings.position[0].match(/^(left|right|center)[\s0-9\+\-]*$/)&&"string"==typeof y.settings.position[1]&&y.settings.position[1].match(/^(top|bottom|middle|center)[\s0-9\+\-]*$/)&&(y.settings.position[0]=y.settings.position[0].toLowerCase(),y.settings.position[1]=y.settings.position[1].toLowerCase(),"center"===y.settings.position[1]&&(y.settings.position[1]="middle"),T.each(t,function(t,e){var o,i,s;for(o=0;o<2;o++)(i=(s=d?y.settings.position[o].replace(/[0-9\+\-\s]/g,""):y.settings.position[o]).replace(t,e))!==s&&(0===o?y.dialog_left=p(i):y.dialog_top=p(i))})),void 0!==y.dialog_left&&void 0!==y.dialog_top||(y.dialog_left=t.center,y.dialog_top=t.middle),y.dialog_top<c&&(y.dialog_top=c),n-2*c<l+c?y.body.css("height",n-2*c-(T(".ZebraDialog_Title",y.dialog).length?T(".ZebraDialog_Title",y.dialog).outerHeight():0)-(T(".ZebraDialog_Buttons",y.dialog).length?T(".ZebraDialog_Buttons",y.dialog).outerHeight():0)-(parseFloat(y.body.css("marginTop"))||0)-(parseFloat(y.body.css("marginBottom"))||0)-(parseFloat(y.body.css("paddingTop"))||0)-(parseFloat(y.body.css("paddingBottom"))||0)-(parseFloat(y.body.css("borderTopWidth"))||0)-(parseFloat(y.body.css("borderBottomWidth"))||0)):Z&&y.body.css("height",y.dialog.height()-(T(".ZebraDialog_Title",y.dialog).length?T(".ZebraDialog_Title",y.dialog).outerHeight():0)-(T(".ZebraDialog_Buttons",y.dialog).length?T(".ZebraDialog_Buttons",y.dialog).outerHeight():0)-(parseFloat(y.body.css("marginTop"))||0)-(parseFloat(y.body.css("marginBottom"))||0)-(parseFloat(y.body.css("paddingTop"))||0)-(parseFloat(y.body.css("paddingBottom"))||0)-(parseFloat(y.body.css("borderTopWidth"))||0)-(parseFloat(y.body.css("borderBottomWidth"))||0)),y.iframe&&y.body.css("overflow","hidden"),y.settings.vcenter_short_message&&(o=(e=y.body.find("div:first")).height())<(i=y.body.height())&&e.css("padding-top",(i-o)/2),"boolean"==typeof arguments[0]&&!1===arguments[0]||0===y.settings.reposition_speed?y.dialog.css({left:y.dialog_left,top:y.dialog_top,visibility:"visible",opacity:0}).animate({opacity:"1"},y.settings.animation_speed_show):(y.dialog.stop(!0),y.dialog.css("visibility","visible").animate({left:y.dialog_left,top:y.dialog_top},y.settings.reposition_speed)),void 0===_&&(!1!==y.settings.auto_focus_button?y.dialog.find("a[class^=ZebraDialog_Button]").eq(!0===y.settings.auto_focus_button?0:y.settings.auto_focus_button).focus():y.body.attr("tabindex",1).focus().removeAttr("tabindex"))},k=function(){switch(y.settings.type){case"confirmation":case"error":case"information":case"question":case"warning":case"prompt":return y.settings.type.charAt(0).toUpperCase()+y.settings.type.slice(1).toLowerCase();default:return!1}},p=function(t){var e=0;for(t=t.replace(/\s/g,"").match(/[+\-]?([0-9\.\s]+)/g)||[];t.length;)e+=parseFloat(t.shift());return e};return y.settings={},"string"==typeof arguments[0]&&(v.message=arguments[0]),"object"!=typeof arguments[0]&&"object"!=typeof arguments[1]||(v=T.extend(v,"object"==typeof arguments[0]?arguments[0]:arguments[1])),y.init=function(){var t,i,e,o,s,a,n,r,l,d,g,c,p,u,b=T("body"),m=0;if(y.settings=T.extend({},f,v),T(".ZebraDialog").each(function(){var t=parseInt(T(this).css("zIndex"),10);t&&m<t&&(m=t)}),y.settings.modal&&(y.backdrop=T("<div>",{"class":"ZebraDialogBackdrop"+(y.settings.custom_class?" "+y.settings.custom_class:"")}).css({position:"fixed",left:0,top:0,opacity:y.settings.backdrop_opacity+""}),0<m&&(y.backdrop.css("zIndex",m+1),T(".ZebraDialogBackdrop").each(function(){var t=T(this);t.data("ZebraDialog_opacity")||t.data("ZebraDialog_opacity",t.css("opacity")).css("opacity",0)}),T(".ZebraDialog").each(function(){T(this).data("ZebraDialog_MuteESC",!0)})),y.settings.backdrop_close&&y.backdrop.on("click",function(){y.close()}),y.backdrop.appendTo(b),y.settings.disable_page_scrolling&&window.innerWidth>document.body.clientWidth&&!b.hasClass("ZebraDialog_NoScroll")&&b.data("ZebraDialog_vScroll",window.pageYOffset).css({right:(c=T("<div>").css({visibility:"hidden",overflow:"scroll",msOverflowStyle:"scrollbar"}).appendTo(T("body")),p=T("<div>").appendTo(c),u=c.outerWidth()-p.outerWidth(),c.remove(),p.remove(),u),top:-1*T(window).scrollTop()}).addClass("ZebraDialog_NoScroll")),y.dialog=T("<div>",{"class":"ZebraDialog"+(y.settings.custom_class?" "+y.settings.custom_class:"")+(y.settings.modal?"":" ZebraDialog_NotModal")+(!1!==k()?" ZebraDialog_Icon ZebraDialog_"+k():"")}).css({position:"fixed",left:0,top:0,visibility:"hidden"}),0<m&&y.dialog.css("zIndex",m+1),h=Math.floor(9999999*Math.random()),(d=(y.settings.width+"").match(/^([0-9]+)(\%)?$/))&&(d=void 0!==d[2]?parseInt(Math.max(document.documentElement.clientWidth,window.innerWidth||0)*parseInt(d[1],10)/100,10):parseInt(d[1],10),!isNaN(d)&&0<d&&y.dialog.css("width",d)),(isNaN(d)||0===d)&&(d=(y.settings.max_width+"").match(/^([0-9]+)(\%)?$/))&&(d=void 0!==d[2]?parseInt(Math.max(document.documentElement.clientWidth,window.innerWidth||0)*parseInt(d[1],10)/100,10):parseInt(d[1],10),!isNaN(d)&&0<d&&y.dialog.css("max-width",d)),(d=(y.settings.height+"").match(/^([0-9]+)(\%)?$/))&&(d=void 0!==d[2]?parseInt(Math.max(document.documentElement.clientHeight,window.innerHeight||0)*parseInt(d[1],10)/100,10):parseInt(d[1],10),!isNaN(d)&&0<d&&(y.dialog.css("height",d),Z=!0)),(isNaN(d)||0===d)&&(d=(y.settings.max_height+"").match(/^([0-9]+)(\%)?$/))&&(d=void 0!==d[2]?parseInt(Math.max(document.documentElement.clientHeight,window.innerHeight||0)*parseInt(d[1],10)/100,10):parseInt(d[1],10),!isNaN(d)&&0<d&&(y.dialog.css("max-height",d),Z=!0)),y.settings.title?l=T("<h3>",{"class":"ZebraDialog_Title"}).html(y.settings.title).appendTo(y.dialog):y.dialog.addClass("ZebraDialog_NoTitle"),void 0!==y.settings.source.iframe&&(y.settings.vcenter_short_message=!1),y.body=T("<div>",{"class":"ZebraDialog_Body"}),"prompt"===y.settings.type&&(y.settings.message+='<input type="text" name="ZebraDialog_Prompt_Input" value="'+y.settings.default_value+'" class="ZebraDialog_Prompt_Input">'),y.settings.vcenter_short_message?T("<div>").html(y.settings.message).appendTo(y.body):y.body.html(y.settings.message),"prompt"===y.settings.type&&(y.settings.message=T(".ZebraDialog_Prompt_Input",y.body),T(".ZebraDialog_Prompt_Input",y.body).on("keypress",function(t){13===t.keyCode&&(D?D.trigger("click"):y.close(!0,this.value))})),y.settings.source&&"object"==typeof y.settings.source)for(g in o=y.settings.vcenter_short_message?T("div:first",y.body):y.body,y.settings.source)switch(g){case"ajax":t="string"==typeof y.settings.source[g]?{url:y.settings.source[g]}:y.settings.source[g],r=T("<div>").attr("class","ZebraDialog_Spinner").appendTo(o),t.success=function(t){r.remove(),o.append(t),w(!1)},T.ajax(t);break;case"iframe":s={width:"100%",height:"100%",marginheight:"0",marginwidth:"0",frameborder:"0"},a=T.extend(s,"string"==typeof y.settings.source[g]?{src:y.settings.source[g]}:y.settings.source[g]),y.iframe=T("<iframe>").attr(a).on("load",function(){T(".ZebraDialog_Spinner",y.body).remove()}),y.body.append(T("<div>").addClass("ZebraDialog_Spinner ZebraDialog_iFrame")),o.append(y.iframe);break;case"inline":o.append(y.settings.source[g])}return y.body.appendTo(y.dialog),(e=function(){if(!0!==y.settings.buttons&&!T.isArray(y.settings.buttons))return!1;if(!0===y.settings.buttons)switch(y.settings.type){case"question":case"warning":case"prompt":y.settings.buttons=["Ok","Cancel"];break;default:y.settings.buttons=["Ok"]}return y.settings.buttons}())?(i=T("<div>",{"class":"ZebraDialog_Buttons"}).appendTo(y.dialog),T.each(e,function(t,o){var e=T("<a>",{href:"javascript:void(0)","class":"ZebraDialog_Button_"+t+(void 0!==o.custom_class&&""!==o.custom_class.toString().trim()?" "+o.custom_class:"")});void 0!==o.caption?e.html(o.caption):e.html(o),e.on("click",function(){var t=!0,e="prompt"===y.settings.type&&T(".ZebraDialog_Prompt_Input",y.body).length?T(".ZebraDialog_Prompt_Input",y.body).val():void 0;void 0!==o.callback&&(t=o.callback(y.dialog,e)),!1!==t&&y.close(void 0!==o.caption?o.caption:o,e)}),e.appendTo(i),void 0!==o.default_confirmation&&o.default_confirmation&&(D=e)}),y.settings.center_buttons&&i.addClass("ZebraDialog_Buttons_Centered")):y.dialog.addClass("ZebraDialog_NoButtons"),y.dialog.appendTo(b),y.settings.show_close_button?T('<a href="javascript:void(0)" class="ZebraDialog_Close">&times;</a>').on("click",function(t){t.preventDefault(),y.close()}).appendTo(l||y.body):y.dialog.addClass("ZebraDialog_NoCloseButton"),T(window).on("resize.ZebraDialog_"+h,function(){clearTimeout(_),_=setTimeout(function(){w()},100)}),y.settings.keyboard&&T(document).on("keyup.ZebraDialog_"+h,function(t){if(!y.dialog.data("ZebraDialog_MuteESC"))return 27===t.which&&y.close(),!0}),!1!==y.settings.auto_close&&(y.dialog.on("click",function(){clearTimeout(y.timeout),y.close()}),y.timeout=setTimeout(y.close,y.settings.auto_close)),w(!1),"prompt"===y.settings.type&&(T(".ZebraDialog_Prompt_Input",y.body).focus(),""!==y.settings.default_value&&(y.settings.message.get(0).setSelectionRange?(n=2*y.settings.default_value.length,setTimeout(function(){y.settings.message.get(0).setSelectionRange(n,n)},1)):y.settings.message.val(y.settings.default_value))),y},y.close=function(t,e){var o,i=y.settings.animation_speed_hide,s=T(".ZebraDialogBackdrop"),a=T(".ZebraDialog"),n=T("body"),r=s.length;T(document).off(".ZebraDialog_"+h),T(window).off(".ZebraDialog_"+h),y.settings.modal&&y.backdrop&&(1<r&&T(s[r-1]).is(y.backdrop)?((o=T(s[r-2])).css("opacity",o.data("ZebraDialog_opacity")).removeData("ZebraDialog_opacity"),i=0,T(a[r-2]).removeData("ZebraDialog_MuteESC")):1===r&&n.hasClass("ZebraDialog_NoScroll")&&(n.removeClass("ZebraDialog_NoScroll").css({right:"",top:"",height:""}),T(window).scrollTop(n.data("ZebraDialog_vScroll"))),y.backdrop.off("click").animate({opacity:"0"},i,function(){y.backdrop.remove()})),y.dialog.animate({top:"0",opacity:"0"},y.settings.animation_speed_hide,function(){y.dialog.remove(),y.settings.onClose&&"function"==typeof y.settings.onClose&&y.settings.onClose(void 0!==t?t:"",e)})},y.update=function(){clearTimeout(_),_=setTimeout(function(){w()},100)},y.init()}}(jQuery);
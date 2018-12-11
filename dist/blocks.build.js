!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){},function(e,t,n){var a,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=n.apply(null,a);r&&e.push(r)}else if("object"===o)for(var i in a)l.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}var l={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(a=[],void 0!==(o=function(){return n}.apply(t,a))&&(e.exports=o))}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(3),n(6),n(9),n(12),n(15),n(18),n(21),n(24),n(27),n(31)},function(e,t,n){"use strict";var a=n(4),o=(n.n(a),n(5));n.n(o);!function(e,t,n,a){var o=wp.i18n.__,l=a.createElement,r=wp.blocks.registerBlockType,i=wp.editor.RichText,c=wp.editor.BlockControls,s=wp.editor.AlignmentToolbar;r("alps-gutenberg-blocks/accordion",{title:o("Accordion"),icon:"welcome-add-page",description:"Add heading and basic text.",category:"common",html:!1,attributes:{title:{type:"array",source:"children",selector:".o-title"},body:{type:"array",source:"children",selector:".o-body"},alignment:{type:"string"}},edit:function(e){var t=e.attributes;return[l(c,{key:"controls"},l(s,{value:t.alignment,onChange:function(t){e.setAttributes({alignment:t})}})),l("div",{className:e.className},l(i,{tagName:"strong",placeholder:"Title",className:"o-heading--l",keepPlaceholderOnFocus:!0,isSelected:!1,value:t.title,onChange:function(t){e.setAttributes({title:t})}}),l(i,{key:"editable",tagName:"p",placeholder:"Body",keepPlaceholderOnFocus:!0,isSelected:!1,value:t.body,style:{textAlign:t.alignment},onChange:function(t){e.setAttributes({body:t})}}))]},save:function(e){var t=e.attributes;return wp.element.createElement("div",null,wp.element.createElement("div",{className:"c-accordion u-position--relative u-spacing"},wp.element.createElement("div",{className:"c-accordion__item u-spacing--half u-border--left u-padding--half--left"},wp.element.createElement("div",{className:"c-accordion__heading js-toggle-parent u-font--primary--m u-theme--color--darker"},wp.element.createElement("span",{className:"u-icon u-icon--m c-accordion__arrow u-space--half--right u-theme--path-fill--darker"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 10"},wp.element.createElement("title",null,"Artboard 1"),wp.element.createElement("path",{d:"M6.75,3.59,3.25.09,1.84,1.5,5.34,5,1.84,8.5,3.25,9.91l3.5-3.5L8.16,5Z",fill:"#9b9b9b"}))),wp.element.createElement("strong",{className:"o-title"},t.title)),wp.element.createElement("div",{className:"c-accordion__content u-padding--half--left"},wp.element.createElement("p",{className:"o-body",style:{textAlign:t.alignment}},t.body)))))}})}(window.wp.blocks,window.wp.components,window.wp.i18n,window.wp.element)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(7),o=(n.n(a),n(8));n.n(o);!function(e,t,n,a){var o=wp.i18n.__,l=a.createElement,r=wp.blocks.registerBlockType,i=wp.editor.RichText,c=wp.editor.InspectorControls,s=wp.components.ToggleControl;r("alps-gutenberg-blocks/blockquote",{title:o("Blockquote"),icon:"format-quote",category:"common",html:!1,attributes:{body:{type:"array",source:"children",selector:".o-paragraph"},citation:{type:"array",source:"children",selector:".o-citation"},applyStyles:{type:"string",default:""}},edit:function(e){function t(){n.applyStyles?e.setAttributes({applyStyles:""}):e.setAttributes({applyStyles:"o-pullquote--extended"})}var n=e.attributes;return[l(c,{key:"inspector"},l(s,{label:"Extend Quote",help:"Extends the quote outside the page content.",checked:n.applyStyles,onChange:t})),l("blockquote",{className:e.className},l("blockquote",{},l(i,{tagName:"p",placeholder:"Write a quote...",keepPlaceholderOnFocus:!0,isSelected:!1,value:n.body,onChange:function(t){e.setAttributes({body:t})}}),l(i,{tagName:"cite",placeholder:"Citation",keepPlaceholderOnFocus:!0,isSelected:!1,value:n.citation,onChange:function(t){e.setAttributes({citation:t})}})))]},save:function(e){var t=e.attributes;return wp.element.createElement("blockquote",{className:"pullquote u-theme--border-color--darker--left u-theme--color--darker u-padding--right "+t.applyStyles},wp.element.createElement("p",{className:"o-paragraph"},t.body),wp.element.createElement("cite",{className:"o-citation u-theme--color--base"},t.citation))}})}(window.wp.blocks,window.wp.components,window.wp.i18n,window.wp.element)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(10),o=(n.n(a),n(11));n.n(o);!function(e,t,n,a){var o=wp.i18n.__,l=a.createElement,r=wp.blocks.registerBlockType,i=wp.editor.RichText,c=wp.components.TextControl;wp.editor.BlockControls,wp.editor.AlignmentToolbar;r("alps-gutenberg-blocks/content-block",{title:o("Content Block"),description:"Content block that highlights a row to text.",icon:"welcome-write-blog",category:"common",html:!1,attributes:{title:{type:"array",source:"children",selector:"strong"},body:{type:"array",source:"children",selector:"p"},link:{type:"url"}},edit:function(e){var t=e.attributes;return[l("div",{className:e.className},l("div",{},l(i,{tagName:"strong",value:t.title,placeholder:"Title",keepPlaceholderOnFocus:!0,isSelected:!1,onChange:function(t){e.setAttributes({title:t})}}),l(i,{tagName:"p",value:t.body,placeholder:"Write a description...",keepPlaceholderOnFocus:!0,isSelected:!1,onChange:function(t){e.setAttributes({body:t})}}),l(c,{type:"url",label:o("Link Url"),value:t.link,placeholder:"http://",keepPlaceholderOnFocus:!0,isSelected:!1,onChange:function(t){e.setAttributes({link:t})}})))]},save:function(e){var t=e.attributes;if(t.link)var n=wp.element.createElement("h3",{className:"u-theme--color--darker u-font--primary--m"},wp.element.createElement("a",{href:""+t.link,className:"c-block__title-link u-theme--link-hover--dark"},wp.element.createElement("strong",null,t.title))),a=wp.element.createElement("a",{href:""+t.link,className:"c-block__button o-button o-button--outline"},"Read More",wp.element.createElement("span",{className:"u-icon u-icon--m u-path-fill--base u-space--half--left"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},wp.element.createElement("path",{d:"M18.29,8.59l-3.5-3.5L13.38,6.5,15.88,9H.29v2H15.88l-2.5,2.5,1.41,1.41,3.5-3.5L19.71,10Z"}))));else var n=wp.element.createElement("h3",{className:"u-theme--color--darker u-font--secondary--m u-text-transform--upper"},wp.element.createElement("strong",null,t.title));return wp.element.createElement("div",null,wp.element.createElement("div",{className:"c-block c-block__text u-theme--border-color--darker u-border--left u-spacing--half"},n,wp.element.createElement("p",{className:"c-block__body text"},t.body),a))}})}(window.wp.blocks,window.wp.components,window.wp.i18n,window.wp.element)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(13),o=(n.n(a),n(14));n.n(o);!function(e,t,n,a){var o=wp.i18n.__,l=a.createElement,r=wp.blocks.registerBlockType,i=wp.editor.RichText;r("alps-gutenberg-blocks/content-expand",{title:o("Content Expand"),icon:"arrow-down-alt",description:"Content block that expands the content on click.",category:"common",html:!1,attributes:{kicker:{type:"array",source:"children",selector:"em"},title:{type:"array",source:"children",selector:"font"},body:{type:"array",source:"children",selector:"p"}},edit:function(e){var t=e.attributes;return l("div",{className:e.className},l(i,{tagName:"em",placeholder:"Kicker",className:"o-kicker",keepPlaceholderOnFocus:!0,isSelected:!1,value:t.kicker,onChange:function(t){e.setAttributes({kicker:t})}}),l(i,{tagName:"font",placeholder:"Title",className:"o-heading--l",keepPlaceholderOnFocus:!0,isSelected:!1,value:t.title,onChange:function(t){e.setAttributes({title:t})}}),l(i,{tagName:"p",placeholder:"Body",keepPlaceholderOnFocus:!0,isSelected:!1,value:t.body,onChange:function(t){e.setAttributes({body:t})}}))},save:function(e){var t=e.attributes;return wp.element.createElement("div",null,wp.element.createElement("div",{className:"js-this c-block c-block c-block__expand u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark"},wp.element.createElement("div",{className:"c-block__header"},wp.element.createElement("div",{className:"c-block__title u-padding"},wp.element.createElement("h2",{className:"u-font--primary--s u-theme--color--darker"},wp.element.createElement("span",{className:"u-theme--color--base"},wp.element.createElement("em",null,t.kicker)," "),wp.element.createElement("font",null,t.title)),wp.element.createElement("div",{className:"c-block__toggle"},wp.element.createElement("button",{className:"js-toggle o-button o-button--outline o-button--toggle o-button--small","data-toggled":"this","data-prefix":"this"},wp.element.createElement("span",{className:"u-icon u-icon--xs u-path-fill--white"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 10"},wp.element.createElement("title",null,"o-icon__plus"),wp.element.createElement("path",{d:"M10,4H6V0H4V4H0V6H4v4H6V6h4Z",fill:"#9b9b9b"}))))))),wp.element.createElement("div",{className:"c-block__body u-padding u-padding--zero--top u-spacing"},wp.element.createElement("p",null,t.body))))}})}(window.wp.blocks,window.wp.components,window.wp.i18n,window.wp.element)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(16),o=(n.n(a),n(17));n.n(o);!function(e,t,n,a){var o=wp.i18n.__,l=a.createElement,r=wp.blocks.registerBlockType,i=wp.editor.RichText,c=wp.editor.MediaUpload;r("alps-gutenberg-blocks/content-show-more",{title:o("Content Show More"),icon:"editor-expand",description:"Content block that has a toggle button to show more.",category:"common",html:!1,attributes:{title:{type:"array",source:"children",selector:"strong"},description:{type:"array",source:"children",selector:".o-description"},body:{type:"array",source:"children",selector:".o-paragraph"},imageID:{type:"number"},imageURL:{type:"string",source:"attribute",attribute:"src",selector:"img"}},edit:function(e){var n=e.attributes,a=function(t){return e.setAttributes({imageURL:t.url,imageID:t.id})};return l("div",{className:e.className},l("div",{className:"o-image--"+n.imageID+" o-image"},l(c,{onSelect:a,type:"image",value:n.imageID,render:function(e){return l(t.Button,{className:n.imageID?"image-button":"button button-large",onClick:e.open},n.imageID?l("img",{src:n.imageURL}):o("Upload Image"))}})),l(i,{tagName:"strong",placeholder:"Title",className:"o-heading--l",keepPlaceholderOnFocus:!0,isSelected:!1,value:n.title,onChange:function(t){e.setAttributes({title:t})}}),l(i,{tagName:"p",className:"o-description",placeholder:"Description",keepPlaceholderOnFocus:!0,isSelected:!1,value:n.description,onChange:function(t){e.setAttributes({description:t})}}),l(i,{tagName:"p",className:"o-paragraph",placeholder:"Body (Display on click of show more button)",keepPlaceholderOnFocus:!0,isSelected:!1,value:n.body,onChange:function(t){e.setAttributes({body:t})}}))},save:function(e){var t=e.attributes,n="";if(t.imageURL)var n="has-image ",a=wp.element.createElement("img",{className:"c-block__image",src:""+t.imageURL});return wp.element.createElement("div",null,wp.element.createElement("div",{className:n+"c-block c-block__text u-theme--border-color--darker u-border--left c-block__text-expand u-spacing u-background-color--gray--light u-padding u-clear-fix can-be--dark-dark"},a,wp.element.createElement("h3",{className:"u-theme--color--darker u-font--primary--m"},wp.element.createElement("strong",null,t.title)),wp.element.createElement("p",{className:"c-block__body text o-description"},t.description),wp.element.createElement("div",{className:"c-block__content"},wp.element.createElement("p",{className:"o-paragraph"},t.body)),wp.element.createElement("a",{className:"o-button o-button--outline o-button--expand js-toggle-parent"})))}})}(window.wp.blocks,window.wp.components,window.wp.i18n,window.wp.element)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(19),o=(n.n(a),n(20));n.n(o);!function(e,t,n,a){var o=wp.i18n.__,l=a.createElement,r=wp.blocks.registerBlockType,i=wp.editor.RichText,c=wp.editor.BlockControls,s=wp.editor.AlignmentToolbar;r("alps-gutenberg-blocks/paragraph",{title:o("Paragraph"),icon:"editor-paragraph",description:"Add some basic text.",category:"common",html:!1,attributes:{body:{type:"array",source:"children",selector:"p"},alignment:{type:"string"}},edit:function(e){var t=e.attributes;return[l(c,{key:"controls"},l(s,{value:t.alignment,onChange:function(t){e.setAttributes({alignment:t})}})),l(i,{key:"editable",tagName:"p",className:e.className,style:{textAlign:t.alignment},value:t.body,onChange:function(t){e.setAttributes({body:t})}})]},save:function(e){var t=e.attributes;return l(i.Content,{className:e.className,tagName:"p",style:{textAlign:t.alignment},value:t.body})}})}(window.wp.blocks,window.wp.components,window.wp.i18n,window.wp.element)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(22),o=(n.n(a),n(23));n.n(o);!function(e,t,n,a){var o=wp.i18n.__,l=a.createElement,r=wp.blocks.registerBlockType,i=wp.editor.RichText;r("alps-gutenberg-blocks/highlighted-paragraph",{title:o("Highlighted Paragraph"),icon:"media-text",description:"Highlight a block of text.",category:"common",attributes:{content:{type:"array",source:"children",selector:"p"}},edit:function(e){var t=e.attributes;return l("div",{className:e.className},l(i,{tagName:"p",placeholder:"Content goes here...",keepPlaceholderOnFocus:!0,value:t.content,isSelected:!1,onChange:function(t){e.setAttributes({content:t})}}))},save:function(e){var t=e.attributes;return l("div",{className:e.className},l(i.Content,{tagName:"p",className:"o-highlight u-padding u-background-color--gray--light can-be--dark-dark",value:t.content}))}})}(window.wp.blocks,window.wp.components,window.wp.i18n,window.wp.element)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(25),o=(n.n(a),n(26));n.n(o);!function(e,t,n,a){var o=wp.i18n.__,l=a.createElement,r=wp.blocks.registerBlockType,i=wp.editor.RichText,c=(wp.editor.InspectorControls,wp.components.ToggleControl,wp.editor.BlockControls,wp.editor.MediaUpload);r("alps-gutenberg-blocks/image-breakout",{title:o("Image (Breakout)"),icon:"format-image",description:"Image that expands the width of the page.",category:"common",attributes:{url:{type:"string"},caption:{type:"array",source:"children",selector:"p"},id:{type:"number"}},edit:function(e){var n=e.attributes;return[l(c,{onSelect:function(t){e.setAttributes({url:t.url}),e.setAttributes({id:t.id})},type:"image",value:n.id,render:function(e){return l(t.Button,{className:n.id?"image-button":"button button-large",onClick:e.open},n.id?l("img",{src:n.url}):o("Upload Image"))}}),l(i,{tagName:"p",placeholder:"Caption",keepPlaceholderOnFocus:!0,isSelected:!1,value:n.caption,onChange:function(t){e.setAttributes({caption:t})}})]},save:function(e){var t=e.attributes;return wp.element.createElement("div",null,wp.element.createElement("section",{className:"l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7"},wp.element.createElement("div",{className:"u-width--100p u-padding--zero--sides"},wp.element.createElement("div",{className:"c-breakout-image"},wp.element.createElement("div",{className:"c-breakout-image__background u-image--breakout u-background--cover",style:{backgroundImage:"url('"+t.url+"');"}}),wp.element.createElement("div",{className:"c-breakout-image__caption"},wp.element.createElement("figcaption",{className:"o-figcaption"},wp.element.createElement("p",{className:"o-caption u-color--gray u-font--secondary--s"},t.caption)))))))}})}(window.wp.blocks,window.wp.components,window.wp.i18n,window.wp.element)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(28),o=(n.n(a),n(0)),l=(n.n(o),n(29));wp.blocks.registerBlockType("alps-gutenberg-blocks/image-2up",{title:wp.i18n.__("Image (2up)"),description:"Two images organized in a two column layout.",icon:"format-gallery",category:"common",attributes:{images:{type:"array",default:[],source:"query",selector:".wp-block-alps-gutenberg-blocks-image-2up .l-grid-item--m--3-col",query:{url:{source:"attribute",selector:"img",attribute:"src"},link:{source:"attribute",selector:"img",attribute:"data-link"},alt:{source:"attribute",selector:"img",attribute:"alt",default:""},id:{source:"attribute",selector:"img",attribute:"data-id"},caption:{type:"array",source:"children",selector:".o-caption"}}}},edit:function(e){return wp.element.createElement(l.a,e)},save:function(e){var t=e.attributes;return wp.element.createElement("div",null,wp.element.createElement("section",{className:"l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7 u-shift--left--1-col--standard"},t.images.map(function(e){return wp.element.createElement("div",{className:"l-grid-item--m--3-col u-padding--zero--left"},wp.element.createElement("figure",{key:e.id||e.url,className:"o-figure"},wp.element.createElement("div",{className:"o-figure__image"},wp.element.createElement("picture",{className:"picture"},wp.element.createElement("img",{className:"wp-image-"+e.id+" size-large",itemprop:"image",src:e.url,alt:e.alt,"data-id":e.id}))),wp.element.createElement("div",{className:"o-figure__caption"},wp.element.createElement("figcaption",{className:"o-figcaption"},wp.element.createElement("p",{className:"o-caption u-color--gray u-font--secondary--s"},e.caption)))))})))}})},function(e,t){},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return Math.min(3,e.images.length)}var c=n(0),s=(n.n(c),n(30)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=lodash,m=p.filter,d=p.pick,g=wp.element,b=g.Component,w=g.Fragment,f=wp.i18n.__,h=wp.components,y=h.IconButton,v=h.DropZone,k=h.FormFileUpload,E=(h.PanelBody,h.RangeControl,h.SelectControl,h.ToggleControl,h.Toolbar),_=h.withNotices,N=wp.editor,S=(N.RichText,N.BlockControls),C=(N.BlockAlignmentToolbar,N.MediaUpload),I=N.MediaPlaceholder,A=(N.InspectorControls,N.editorMediaUpload),x=(f("Attachment Page"),f("Media File"),f("None"),function(e){function t(){o(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onSelectImage=e.onSelectImage.bind(e),e.onSelectImages=e.onSelectImages.bind(e),e.onRemoveImage=e.onRemoveImage.bind(e),e.setImageAttributes=e.setImageAttributes.bind(e),e.addFiles=e.addFiles.bind(e),e.uploadFromFiles=e.uploadFromFiles.bind(e),e.state={selectedImage:null},e}return r(t,e),u(t,[{key:"onSelectImage",value:function(e){var t=this;return function(){t.state.selectedImage!==e&&t.setState({selectedImage:e})}}},{key:"onRemoveImage",value:function(e){var t=this;return function(){var n=m(t.props.attributes.images,function(t,n){return e!==n}),a=t.props.attributes.columns;t.setState({selectedImage:null}),t.props.setAttributes({images:n,columns:a?Math.min(n.length,a):a})}}},{key:"onSelectImages",value:function(e){this.props.setAttributes({images:e.map(function(e){return d(e,["alt","caption","id","url"])})})}},{key:"setImageAttributes",value:function(e,t){var n=this.props,o=n.attributes.images,l=n.setAttributes;o[e]&&l({images:[].concat(a(o.slice(0,e)),[Object.assign({},o[e],t)],a(o.slice(e+1)))})}},{key:"uploadFromFiles",value:function(e){this.addFiles(e.target.files)}},{key:"addFiles",value:function(e){var t=this.props.attributes.images||[],n=this.props,a=n.noticeOperations,o=n.setAttributes;A({allowedType:"image",filesList:e,onFileChange:function(e){o({images:t.concat(e)})},onError:a.createErrorNotice})}},{key:"componentWillReceiveProps",value:function(e){!e.isSelected&&this.props.isSelected&&this.setState({selectedImage:null,captionSelected:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,a=t.isSelected,o=t.className,l=t.noticeOperations,r=t.noticeUI,c=n.images,u=n.columns,p=(void 0===u&&i(n),wp.element.createElement(v,{onFilesDrop:this.addFiles})),m=wp.element.createElement(S,null,!!c.length&&wp.element.createElement(E,null,wp.element.createElement(C,{onSelect:this.onSelectImages,type:"image",multiple:!0,gallery:!0,value:c.map(function(e){return e.id}),render:function(e){var t=e.open;return wp.element.createElement(y,{className:"components-toolbar__control",label:f("Edit Images"),icon:"edit",onClick:t})}})));return 0===c.length?wp.element.createElement(w,null,m,wp.element.createElement(I,{icon:"format-gallery",className:o,labels:{title:f("Image (2up)"),name:f("images")},onSelect:this.onSelectImages,accept:"image/*",type:"image",multiple:!0,notices:r,onError:l.createErrorNotice})):wp.element.createElement(w,null,m,r,wp.element.createElement("ul",{className:""+o},p,c.map(function(t,n){return wp.element.createElement("li",{className:"blocks-gallery-item",key:t.id||t.url},wp.element.createElement(s.a,{url:t.url,alt:t.alt,id:t.id,isSelected:a&&e.state.selectedImage===n,onRemove:e.onRemoveImage(n),onSelect:e.onSelectImage(n),setAttributes:function(t){return e.setImageAttributes(n,t)},caption:t.caption}))}),a&&wp.element.createElement("li",{className:"blocks-gallery-item"},wp.element.createElement(k,{multiple:!0,isLarge:!0,className:"core-blocks-gallery-add-item-button",onChange:this.uploadFromFiles,accept:"image/*",icon:"insert"},f("Upload an image")))))}}]),t}(b));t.a=_(x)},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=wp.element.Component,s=wp.components,u=s.IconButton,p=s.Spinner,m=wp.i18n.__,d=wp.keycodes,g=d.BACKSPACE,b=d.DELETE,w=wp.data.withSelect,f=wp.editor.RichText,h=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onImageClick=e.onImageClick.bind(e),e.onSelectCaption=e.onSelectCaption.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e.bindContainer=e.bindContainer.bind(e),e.state={captionSelected:!1},e}return l(t,e),r(t,[{key:"bindContainer",value:function(e){this.container=e}},{key:"onSelectCaption",value:function(){this.state.captionSelected||this.setState({captionSelected:!0}),this.props.isSelected||this.props.onSelect()}},{key:"onImageClick",value:function(){this.props.isSelected||this.props.onSelect(),this.state.captionSelected&&this.setState({captionSelected:!1})}},{key:"onKeyDown",value:function(e){this.container===document.activeElement&&this.props.isSelected&&-1!==[g,b].indexOf(e.keyCode)&&(e.stopPropagation(),e.preventDefault(),this.props.onRemove())}},{key:"componentWillReceiveProps",value:function(e){var t=e.isSelected,n=e.image,a=e.url;n&&!a&&this.props.setAttributes({url:n.source_url,alt:n.alt_text}),this.state.captionSelected&&!t&&this.props.isSelected&&this.setState({captionSelected:!1})}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.alt,a=e.id,o=e.linkTo,l=e.link,r=e.isSelected,c=e.caption,s=e.onRemove,d=e.setAttributes,g=void 0;switch(o){case"media":g=t;break;case"attachment":g=l}var b=t?wp.element.createElement("img",{src:t,alt:n,"data-id":a,onClick:this.onImageClick}):wp.element.createElement(p,null),w=i({"is-selected":r,"is-transient":t&&0===t.indexOf("blob:")});return wp.element.createElement("figure",{className:w,tabIndex:"-1",onKeyDown:this.onKeyDown,ref:this.bindContainer},r&&wp.element.createElement("div",{className:"core-blocks-gallery-item__inline-menu"},wp.element.createElement(u,{icon:"no-alt",onClick:s,className:"blocks-gallery-item__remove",label:m("Remove Image")})),g?wp.element.createElement("a",{href:g},b):b,c&&c.length>0||r?wp.element.createElement(f,{tagName:"figcaption",placeholder:m("Write caption\u2026"),value:c,isSelected:this.state.captionSelected,onChange:function(e){return d({caption:e})},unstableOnFocus:this.onSelectCaption,inlineToolbar:!0}):null)}}]),t}(c);t.a=w(function(e,t){var n=e("core"),a=n.getMedia,o=t.id;return{image:o?a(o):null}})(h)},function(e,t,n){"use strict";var a=n(32),o=(n.n(a),n(33)),l=lodash,r=(l.filter,l.every,wp.i18n.__),i=(wp.element.createElement,wp.blocks.registerBlockType);wp.editor.RichText,wp.editor.editorMediaUpload;i("alps-gutenberg-blocks/gallery",{title:r("Gallery"),description:r("Display a gallery images in a container that expands on click."),icon:"format-gallery",category:"common",attributes:{title:{type:"array",source:"children",selector:".o-title"},images:{type:"array",default:[],source:"query",selector:".wp-block-alps-gutenberg-blocks-gallery .c-gallery-block__image",query:{url:{source:"attribute",selector:"img",attribute:"src"},link:{source:"attribute",selector:"img",attribute:"data-link"},alt:{source:"attribute",selector:"img",attribute:"alt",default:""},id:{source:"attribute",selector:"img",attribute:"data-id"},caption:{type:"array",source:"children",selector:".c-gallery-block__caption"}}}},edit:function(e){return wp.element.createElement(o.a,e)},save:function(e){var t=e.attributes,n=t.images;return wp.element.createElement("div",{className:"c-gallery-block__image"},wp.element.createElement("div",{className:"js-this c-gallery-block c-block u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark"},wp.element.createElement("div",{className:"c-gallery-block__header"},wp.element.createElement("div",{className:"c-gallery-block__title u-padding u-spacing--half"},wp.element.createElement("h2",{className:"u-font--primary--s u-theme--color--darker"},wp.element.createElement("span",{className:"u-theme--color--base"},wp.element.createElement("em",null,"Gallery"))," ",wp.element.createElement("span",{className:"o-title"},t.title)),wp.element.createElement("button",{className:"c-gallery-block__toggle js-toggle o-button o-button--outline o-button--toggle o-button--small","data-toggled":"this","data-prefix":"this"},wp.element.createElement("span",{class:"u-icon u-icon--xs u-path-fill--white"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 10"},wp.element.createElement("title",null,"o-icon__plus"),wp.element.createElement("path",{d:"M10,4H6V0H4V4H0V6H4v4H6V6h4Z",fill:"#9b9b9b"}))))),wp.element.createElement("div",{className:"c-gallery-block__thumb u-background--cover",style:{backgroundImage:"url('"+n.map(function(e,t){return e.url})[0]+"');"}})),wp.element.createElement("div",{className:"c-gallery-block__body"},n.map(function(e){return wp.element.createElement("div",{key:e.id||e.url,className:"c-gallery-block__image"},wp.element.createElement("img",{src:e.url,alt:e.alt,"data-id":e.id}),wp.element.createElement("div",{className:"c-gallery-block__caption u-font--secondary--s u-color--gray u-padding u-padding--double--bottom"},e.caption))}))))}})},function(e,t){},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return Math.min(3,e.images.length)}var c=n(34),s=(n.n(c),n(35)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=lodash,m=p.filter,d=p.pick,g=wp.element,b=g.Component,w=g.Fragment,f=wp.i18n.__,h=wp.components,y=h.IconButton,v=h.DropZone,k=h.FormFileUpload,E=(h.PanelBody,h.RangeControl,h.SelectControl,h.ToggleControl,h.Toolbar),_=h.withNotices,N=wp.editor,S=N.RichText,C=N.BlockControls,I=(N.BlockAlignmentToolbar,N.MediaUpload),A=N.MediaPlaceholder,x=(N.InspectorControls,N.editorMediaUpload),O=(f("Attachment Page"),f("Media File"),f("None"),function(e){function t(){o(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onSelectImage=e.onSelectImage.bind(e),e.onSelectImages=e.onSelectImages.bind(e),e.onChangeTitle=e.onChangeTitle.bind(e),e.onRemoveImage=e.onRemoveImage.bind(e),e.setImageAttributes=e.setImageAttributes.bind(e),e.addFiles=e.addFiles.bind(e),e.uploadFromFiles=e.uploadFromFiles.bind(e),e.state={selectedImage:null},e}return r(t,e),u(t,[{key:"onSelectImage",value:function(e){var t=this;return function(){t.state.selectedImage!==e&&t.setState({selectedImage:e})}}},{key:"onRemoveImage",value:function(e){var t=this;return function(){var n=m(t.props.attributes.images,function(t,n){return e!==n}),a=t.props.attributes.columns;t.setState({selectedImage:null}),t.props.setAttributes({images:n,columns:a?Math.min(n.length,a):a})}}},{key:"onSelectImages",value:function(e){this.props.setAttributes({images:e.map(function(e){return d(e,["alt","caption","id","url"])})})}},{key:"onChangeTitle",value:function(e){this.props.setAttributes({title:e})}},{key:"setImageAttributes",value:function(e,t){var n=this.props,o=n.attributes.images,l=n.setAttributes;o[e]&&l({images:[].concat(a(o.slice(0,e)),[Object.assign({},o[e],t)],a(o.slice(e+1)))})}},{key:"uploadFromFiles",value:function(e){this.addFiles(e.target.files)}},{key:"addFiles",value:function(e){var t=this.props.attributes.images||[],n=this.props,a=n.noticeOperations,o=n.setAttributes;x({allowedType:"image",filesList:e,onFileChange:function(e){o({images:t.concat(e)})},onError:a.createErrorNotice})}},{key:"componentWillReceiveProps",value:function(e){!e.isSelected&&this.props.isSelected&&this.setState({selectedImage:null,captionSelected:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,a=t.isSelected,o=t.className,l=t.noticeOperations,r=t.noticeUI,c=n.images,u=n.columns,p=(void 0===u&&i(n),n.title),m=wp.element.createElement(v,{onFilesDrop:this.addFiles}),d=wp.element.createElement(C,null,!!c.length&&wp.element.createElement(E,null,wp.element.createElement(I,{onSelect:this.onSelectImages,type:"image",multiple:!0,gallery:!0,value:c.map(function(e){return e.id}),render:function(e){var t=e.open;return wp.element.createElement(y,{className:"components-toolbar__control",label:f("Edit Gallery"),icon:"edit",onClick:t})}})));return 0===c.length?wp.element.createElement(w,null,d,wp.element.createElement(A,{icon:"format-gallery",className:o,labels:{title:f("Gallery"),name:f("images")},onSelect:this.onSelectImages,accept:"image/*",type:"image",multiple:!0,notices:r,onError:l.createErrorNotice})):wp.element.createElement(w,null,wp.element.createElement(S,{tagName:"p",className:o,value:p,onChange:this.onChangeTitle,placeholder:"Enter a gallery title.."}),d,r,wp.element.createElement("ul",{className:""+o},m,c.map(function(t,n){return wp.element.createElement("li",{className:"blocks-gallery-item",key:t.id||t.url},wp.element.createElement(s.a,{url:t.url,alt:t.alt,id:t.id,isSelected:a&&e.state.selectedImage===n,onRemove:e.onRemoveImage(n),onSelect:e.onSelectImage(n),setAttributes:function(t){return e.setImageAttributes(n,t)},caption:t.caption}))}),a&&wp.element.createElement("li",{className:"blocks-gallery-item"},wp.element.createElement(k,{multiple:!0,isLarge:!0,className:"core-blocks-gallery-add-item-button",onChange:this.uploadFromFiles,accept:"image/*",icon:"insert"},f("Upload an image")))))}}]),t}(b));t.a=_(O)},function(e,t){},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=wp.element.Component,s=wp.components,u=s.IconButton,p=s.Spinner,m=wp.i18n.__,d=wp.keycodes,g=d.BACKSPACE,b=d.DELETE,w=wp.data.withSelect,f=wp.editor.RichText,h=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onImageClick=e.onImageClick.bind(e),e.onSelectCaption=e.onSelectCaption.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e.bindContainer=e.bindContainer.bind(e),e.state={captionSelected:!1},e}return l(t,e),r(t,[{key:"bindContainer",value:function(e){this.container=e}},{key:"onSelectCaption",value:function(){this.state.captionSelected||this.setState({captionSelected:!0}),this.props.isSelected||this.props.onSelect()}},{key:"onImageClick",value:function(){this.props.isSelected||this.props.onSelect(),this.state.captionSelected&&this.setState({captionSelected:!1})}},{key:"onKeyDown",value:function(e){this.container===document.activeElement&&this.props.isSelected&&-1!==[g,b].indexOf(e.keyCode)&&(e.stopPropagation(),e.preventDefault(),this.props.onRemove())}},{key:"componentWillReceiveProps",value:function(e){var t=e.isSelected,n=e.image,a=e.url;n&&!a&&this.props.setAttributes({url:n.source_url,alt:n.alt_text}),this.state.captionSelected&&!t&&this.props.isSelected&&this.setState({captionSelected:!1})}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.alt,a=e.id,o=e.linkTo,l=e.link,r=e.isSelected,c=e.caption,s=e.onRemove,d=e.setAttributes,g=void 0;switch(o){case"media":g=t;break;case"attachment":g=l}var b=t?wp.element.createElement("img",{src:t,alt:n,"data-id":a,onClick:this.onImageClick}):wp.element.createElement(p,null),w=i({"is-selected":r,"is-transient":t&&0===t.indexOf("blob:")});return wp.element.createElement("figure",{className:w,tabIndex:"-1",onKeyDown:this.onKeyDown,ref:this.bindContainer},r&&wp.element.createElement("div",{className:"core-blocks-gallery-item__inline-menu"},wp.element.createElement(u,{icon:"no-alt",onClick:s,className:"blocks-gallery-item__remove",label:m("Remove Image")})),g?wp.element.createElement("a",{href:g},b):b,c&&c.length>0||r?wp.element.createElement(f,{tagName:"figcaption",placeholder:m("Write caption\u2026"),value:c,isSelected:this.state.captionSelected,onChange:function(e){return d({caption:e})},unstableOnFocus:this.onSelectCaption,inlineToolbar:!0}):null)}}]),t}(c);t.a=w(function(e,t){var n=e("core"),a=n.getMedia,o=t.id;return{image:o?a(o):null}})(h)}]);
webpackJsonpCoveo__temporary([75],{239:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0}),r(597);var i=r(0),o=r(34),a=r(17),s=r(11),u=r(3),l=r(6),c=r(15),d=r(1),b=r(10),m=r(7),p=r(8),h=r(2),f=function(e){function t(r,n,i){var s=e.call(this,r,t.ID,i)||this;return s.element=r,s.options=n,s.options=p.ComponentOptions.initComponentOptions(r,t,n),s.bind.oneRootElement(a.InitializationEvents.afterInitialization,function(){return s.handleAfterInitialization()}),s.bind.onRootElement(o.BreadcrumbEvents.redrawBreadcrumb,function(){return s.redrawBreadcrumb()}),s.element.style.display="none",s.element.setAttribute("tabindex","-1"),s.addDefaultAccessibilityAttributes(),s}return n(t,e),t.prototype.getBreadcrumbs=function(){var e={breadcrumbs:[]};return this.bind.trigger(this.root,o.BreadcrumbEvents.populateBreadcrumb,e),this.logger.debug("Retrieved breadcrumbs",e.breadcrumbs),i.isEmpty(e.breadcrumbs)&&!i.isEmpty(this.lastBreadcrumbs)&&this.focusFirstEnabledResultList(),this.lastBreadcrumbs=e.breadcrumbs,e.breadcrumbs},t.prototype.clearBreadcrumbs=function(){var e={};this.bind.trigger(this.root,o.BreadcrumbEvents.clearBreadcrumb,e),this.logger.debug("Clearing breadcrumbs"),this.usageAnalytics.logSearchEvent(b.analyticsActionCauseList.breadcrumbResetAll,{}),this.queryController.executeQuery()},t.prototype.drawBreadcrumb=function(e){var t=this;d.$$(this.element).empty(),0!=e.length?this.element.style.display="":this.element.style.display="none";var r=document.createElement("div");d.$$(r).addClass("coveo-breadcrumb-items"),this.element.appendChild(r),i.each(e,function(e){var t=e.element;d.$$(t).addClass("coveo-breadcrumb-item"),r.appendChild(t)});var n=d.$$("div",void 0,l.l("ClearAllFilters")).el,o=d.$$("div",{className:"coveo-breadcrumb-clear-all",title:l.l("ClearAllFilters")},n).el;(new c.AccessibleButton).withElement(o).withSelectAction(function(){return t.clearBreadcrumbs()}).withOwner(this.bind).withLabel(l.l("ClearAllFilters")).build(),this.element.appendChild(o)},t.prototype.redrawBreadcrumb=function(){this.lastBreadcrumbs?this.drawBreadcrumb(this.lastBreadcrumbs):this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleDeferredQuerySuccess=function(){this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleQueryError=function(){this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleAfterInitialization=function(){var e=this;this.bind.onRootElement(s.QueryEvents.deferredQuerySuccess,function(){return e.handleDeferredQuerySuccess()}),this.bind.onRootElement(s.QueryEvents.queryError,function(){return e.handleQueryError()})},t.prototype.focusFirstEnabledResultList=function(){var e=this.searchInterface.getComponents("ResultList"),t=i.find(e,function(e){return!1===e.disabled});t&&t.element.focus({preventScroll:!0})},t.prototype.addDefaultAccessibilityAttributes=function(){this.element.getAttribute("role")||this.element.setAttribute("role","navigation"),this.element.getAttribute("aria-label")||this.element.setAttribute("aria-label",l.l("Breadcrumb"))},t.ID="Breadcrumb",t.options={},t.doExport=function(){u.exportGlobally({Breadcrumb:t})},t}(m.Component);t.Breadcrumb=f,h.Initialization.registerAutoCreateComponent(f)},597:function(e,t){}});
//# sourceMappingURL=Breadcrumb.min__45edc409d97327d59af1.js.map
var profile = (function() {
    return {
        basePath: "./src",
        releaseDir: "../release_test",
        releaseName: "lib",
        action: "release",
        layerOptimize: "closure",
        optimize: "closure",
        cssOptimize: "comments",
        stripConsole: "warn",

        packages: [
             {name: "dojo", location: "dojo"},
             {name: "dijit", location: "dijit"},
             {name: "dojox", location: "dojox"}
        ],
        
        layers: {
            "dojo/dojo": {
                   include: ["dojo/parser", "dojo/_base/declare", "dojo/_base/lang", "dojo/window", "dojo/on", "dojo/aspect", "dojo/query",
                             "dojo/dom", "dojo/dom-construct", "dojo/dom-class", "dojo/dom-geometry", "dojo/_base/array", "dojo/dom-style", "dojo/Deferred",
                             "dojo/promise/all", "dojo/cookie", "dojo/json",
                             "dijit/registry", "dijit/Dialog", "dijit/layout/BorderContainer", "dijit/layout/TabContainer",
                             "dijit/layout/ContentPane",
                             "dijit/form/Button", "dijit/Tooltip", "dojox/timing", "dojox/collections/Set",
                             "dojox/widget/Standby", "dojox/validate",
                             "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
                             "dojox/charting/Chart", "dojox/charting/themes/Claro",
                             "dojox/charting/plot2d/Lines",
                             "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MouseZoomAndPan",
                             "dojox/charting/action2d/TouchZoomAndPan", "dojox/charting/action2d/TouchIndicator",
                             "dojox/charting/plot2d/Markers", "dojox/charting/axis2d/Default", "dojo/fx/easing",
                             "dojox/charting/SimpleTheme"
                             ],
                   boot: true,
                   customBase: true
               }
        }
    };
})();

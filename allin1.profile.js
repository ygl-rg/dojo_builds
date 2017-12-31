var profile = (function() {
    return {
        basePath: "./src",
        releaseDir: "../release",
        releaseName: "lib",
        action: "release",
        layerOptimize: "closure",
        optimize: "closure",
        cssOptimize: "comments",
        stripConsole: "warn",
        selectorEngine: "lite",

        defaultConfig: {
            hasCache:{
                "dojo-built": 1,
                "dojo-loader": 1,
                "dom": 1,
                "host-browser": 1,
                "config-selectorEngine": "lite"
            },
            async: 1
        },

        packages: [
             {name: "dojo", location: "dojo"},
             {name: "dijit", location: "dijit"},
             {name: "dojox", location: "dojox"},
             {name: "dgrid", location: "dgrid121"},
             {name: "dstore", location: "dstore112"}
        ],
        
        layers: {
            "dojo/dojo": {
                   include: ["dojo/dojo", "dojo/i18n", "dojo/domReady",
                             "dojo/parser", "dojo/_base/declare", "dojo/_base/lang",
                             "dojo/window", "dojo/on", "dojo/aspect", "dojo/query",
                             "dojo/dom", "dojo/dom-construct", "dojo/dom-class",
                             "dojo/dom-geometry", "dojo/_base/array", "dojo/dom-style",
                             "dojo/Deferred", "dojo/promise/all", "dojo/cookie",
                             "dojo/json", "dojo/request/xhr",
                             "dojo/selector/lite", "dojo/selector/acme",
                             "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
                             "dijit/registry", "dijit/Dialog", "dijit/layout/BorderContainer",
                             "dijit/layout/TabContainer", "dijit/layout/ContentPane", "dijit/form/Button",
                             "dijit/Tooltip", "dijit/form/RadioButton", "dijit/form/CheckBox",
                             "dijit/form/TextBox", "dijit/form/Select", 
                             "dojox/timing", "dojox/collections/Set", "dojox/widget/Standby",
                             "dojox/validate",
                             "dgrid/OnDemandGrid", "dgrid/CellSelection", "dgrid/Editor",
                             "dgrid/extensions/ColumnHider", "dgrid/Keyboard",
                             "dstore/Memory"
                             ],
                   boot: true,
                   customBase: true
               }
        }
    };
})();

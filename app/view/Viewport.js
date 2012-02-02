/**
 * Main viewport of Docs app
 */
Ext.define('Docs.view.Viewport', {
    extend: 'Ext.dataview.NestedList',
    requires: ['Docs.view.cls.PackageLogic'],
    config: {
        fullscreen: true,
        title: 'Touch 2 Docs',
        displayField: 'text'
    },

    initialize: function(){
        var data = {
            text: 'Groceries',
            items: [{
                text: 'Drinks',
                items: [{
                    text: 'Water',
                    items: [{
                        text: 'Sparkling',
                        leaf: true
                    }, {
                        text: 'Still',
                        leaf: true
                    }]
                }, {
                    text: 'Coffee',
                    leaf: true
                }, {
                    text: 'Espresso',
                    leaf: true
                }, {
                    text: 'Redbull',
                    leaf: true
                }, {
                    text: 'Coke',
                    leaf: true
                }, {
                    text: 'Diet Coke',
                    leaf: true
                }]
            }, {
                text: 'Fruit',
                items: [{
                    text: 'Bananas',
                    leaf: true
                }, {
                    text: 'Lemon',
                    leaf: true
                }]
            }, {
                text: 'Snacks',
                items: [{
                    text: 'Nuts',
                    leaf: true
                }, {
                    text: 'Pretzels',
                    leaf: true
                }, {
                    text: 'Wasabi Peas',
                    leaf: true
                }]
            }]
        };

        var logic = new Docs.view.cls.PackageLogic({
            classes: Docs.data.classes
        });

        Ext.define('Docs.model.ListItem', {
            extend: 'Ext.data.Model',
            fields: [{
                name: 'text',
                type: 'string'
            }]
        });

        var store = new Ext.data.TreeStore({
            model: 'Docs.model.ListItem',
            defaultRootProperty: 'items',
            root: logic.create()
        });

        this.callParent(arguments);

        this.setStore(store);
    }
});
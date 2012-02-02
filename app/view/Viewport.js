/**
 * Main viewport of Docs app
 */
Ext.define('Docs.view.Viewport', {
    extend: 'Ext.dataview.NestedList',
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
            root: data
        });

        this.callParent(arguments);

        this.setStore(store);
    }
});
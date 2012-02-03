/**
 * Main viewport of Docs app
 */
Ext.define('Docs.Detail', {
    extend: 'Ext.Panel',
    xtype: 'detail',
    config: {
        cls: 'ux-code',
        styleHtmlContent: true,
        scrollable: true,
        masked: true
    }
});

Ext.define('Docs.view.Viewport', {
    extend: 'Ext.dataview.NestedList',
    requires: ['Docs.view.cls.PackageLogic'],
    config: {
        fullscreen: true,
        title: 'Touch 2 Docs',
        displayField: 'text',
        detailCard: new Docs.Detail(),
        listeners: {
            leafitemtap: function(me, list, index, item, e) {
                var store = list.getStore(),
                    record  = store.getAt(index),
                    detailCard = me.getDetailCard();

                detailCard.update('');

                list.setMasked(true);
                detailCard.setMasked(true);
                Ext.Ajax.request({
                    url: 'output/' + record.get('className') + ".html",
                    success: function(response) {
                        detailCard.setHtml(response.responseText);
                        list.unmask();
                        detailCard.unmask();
                    },
                    failure: function() {
                        detailCard.setHtml("Loading failed.");
                        list.unmask();
                        detailCard.unmask();
                    }
                });

            }
        }
    },

    initialize: function(){
        var logic = new Docs.view.cls.PackageLogic({
            classes: Docs.data.classes
        });

        Ext.define('Docs.model.ListItem', {
            extend: 'Ext.data.Model',
            fields: [{
                name: 'text',
                type: 'string'
            }, {
                name: 'className',
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
    },



});
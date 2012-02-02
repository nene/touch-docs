Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    views: [
        'Viewport'
    ],

    name: 'Docs',

    launch: function() {
        Ext.create('Docs.view.Viewport');
    }
});

Ext.define("Igor.store.Feeds", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Feed',
        autoLoad: true,
        sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('lastName')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: 'feeds.json'
        }
    }
});

Ext.define("Igor.store.Feeds", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Feed',
        pageSize: 5,
        autoLoad: true,
        sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('!lastName');
            }
        },
        proxy: {
            type: 'ajax',
            url: 'data/feeds.json'
        }
    }
});

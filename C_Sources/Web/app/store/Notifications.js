Ext.define("Igor.store.Notifications", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Notification',
        pageSize: 5,
        autoLoad: true,
        sorters: 'date',
        grouper: {
            groupFn: function(record) {
                return record.get('!username');
            }
        }/*,
        proxy: {
            type: 'ajax',
            url: 'data/notifications.json'
        }*/
    }
});

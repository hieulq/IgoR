Ext.define("Igor.store.Tasks", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Task',
        pageSize: 5,
        autoLoad: true,
        sorters: 'period',
        groupField: 'period',
        groupDir: 'DESC',

        grouper: {
            groupFn: function(record) {
                return record.get('!period');
            }
        },
        proxy: {
            type: 'ajax',
            url: 'data/tasks.json'
        }
    }
});

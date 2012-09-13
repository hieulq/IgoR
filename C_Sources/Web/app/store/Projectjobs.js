Ext.define("Igor.store.Projectjobs", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Projectjob',
        autoLoad: true,
    }
});

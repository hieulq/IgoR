Ext.define("Igor.store.Classprojects", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Classproject',
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url : 'data/job_project.json',
            reader: {
                type: 'json',
                rootProperty: 'projects'

            }
        }
    }
});

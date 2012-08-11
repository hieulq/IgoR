Ext.define("Igor.model.Classproject", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'projectid',
            'name',
            'description'
        ],

        // associations: [
        //     {type: 'hasMany', model: 'Igor.model.Projectmember', name: 'members', associationKey: 'members'},
        //     {type: 'hasMany', model: 'Igor.model.Projectjob', name: 'jobs', associationKey: 'jobs'},
        // ],
    }
});

Ext.define("Igor.model.Classproject", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'projectid',
            'description'
        ],

        associations: [
            {type: 'hasMany', model: 'User', name: 'members', associationKey: 'members'},
            {type: 'hasMany', model: 'Classtask', name: 'jobs', associationKey: 'jobs'},
            {type: 'belongsTo', model: 'Classdetail'}
        ]

    }
});

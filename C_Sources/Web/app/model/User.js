Ext.define("Igor.model.User", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'userid',
            'username',
            'fullname',
            'password',
            'avatar',
            'studentid',
            'email',
            'group',
            'course'
        ],

        associations: [
            {type: 'belongsTo', model: 'Igor.model.Classproject'}
        ]
    }
});

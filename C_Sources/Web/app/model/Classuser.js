Ext.define("Igor.model.Classuser", {
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

        proxy: {
            type: 'ajax',
            url : 'data/profiles.json',
            reader: {
                type: 'json',
            }
        }

    }
});

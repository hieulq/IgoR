Ext.define("Igor.model.Notification", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'userid',
            'username',
            'avatar',
            'action',
            'object',
            'objectid',
            'date'
        ]
    }
});

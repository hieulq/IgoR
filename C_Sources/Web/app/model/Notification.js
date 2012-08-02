Ext.define("Igor.model.Notification", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'notification_id',
            'userid',
            'username',
            'avatar',
            'action',
            'object',
            'objectid',
            'date',
            'is_read'
        ]
    }
});

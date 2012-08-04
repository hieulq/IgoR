Ext.define("Igor.model.User", {
    extend: 'Ext.data.Model',

    config: {
        idProperty : "userid",
        identifier: {
            type: 'uuid'
        },

        fields: [
            {name: 'userid', type: 'int'},
            {name: 'fullname', type: 'string'},
            {name: 'avatar', type: 'string'},
            {name: 'studentid', type: 'int'},
            {name: 'email', type: 'string'},
            {name: 'group', type: 'string'},
            {name: 'course', type: 'string'},
            {name: 'loggedIn', type: 'boolean', defaultValue: false}
        ]
    }
});

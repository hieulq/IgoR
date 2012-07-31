Ext.define("Igor.model.Projectmember", {
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
            url : 'data/job_project.json',
            reader: {
                type: 'json',
                rootProperty: 'projects.members'

            }
        }
    }
});

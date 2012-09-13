Ext.define('Igor.view.profile.UserList', {

	extend: 'Ext.List',
	xtype: 'userList',

	config: {

        cls: 'x-feeds',
		itemTpl: [
            '<div class="feed" style="background-image:url(resources/images/headshots/{avatar});"></div>',
            '{fullname}',
            '{group} - Course {course}',
        ].join(''),
	}
});

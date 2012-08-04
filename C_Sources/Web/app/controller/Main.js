Ext.define("Igor.controller.Main", {
    extend: 'Ext.app.Controller',
    views: ['Main', 'task.Task'], 

    requires: [
         'Igor.view.task.NewProject',
         'Igor.view.task.NewClassTask'
    ],
    
    init: function() {
        
    },

    config: {
        control: {
            // Sự kiện click vào 1 item trên list Updates
            updatesList: {
                itemtap: 'viewUpdateDetails',
                disclose: 'viewUpdateDiscloseDetails'
            },

            tasksListByDay: {
                itemtap: 'viewTaskDetails',
            },

            userDetailsForm: {
                pop: 'onProfilePop',
            },

            daySelBtn: {
                toggle: 'onDayToggle',
            },

            tasksForm: {
                pop: 'onTaskPop',
                push: 'onTaskPush',
                initialize: 'onTaskInit'
            },

            refreshNewsButton: {
                tap: 'onNotificationInit'
            },

            updatesListForm: {
                //initialize: 'onNotificationInit',
            },

            newProjectForm: {
                initialize: 'onNewProjectInit'
            },

            mainPnl: {
                initialize: 'onNotificationInit'
            }
        },
        routes: {
            // Khi xuat hien url dang http://abc.com/afterLogin/.../#updates thi se thuc hien ham doUpdates()
            'updates': 'doUpdates',
            'updates/Update/:id':'viewUpdateDetails', // Hàm này sẽ thực thi khi có route tương ứng việc click 1 item trên list update
            
            // Khi xuất hiện url dạng http://abc.com/afterLogin/.../#tasks/abc thì sẽ thực hiện hàm doTasks()
            'tasks/:id': 'doTasks',
            'tasks/taskbyday/:day_of_week': 'showTasksByDay',
            'tasks/Task/:id':'viewTaskDetails', // Hàm này sẽ thực thi khi có route tương ứng việc click 1 item trên list task

            // Khi xuất hiện url dạng http://abc.com/afterLogin/.../#tasks thì sẽ thực hiện hàm doTasks()
            'user/:id': 'doUser',
            'user/frienddetails/:id':'viewFriendDetails',
            'user/classdetails/:id':'viewClassDetails',
        },

        refs: {
            // Updates
            refreshNewsButton: 'updatesListForm #refreshNewsButton',
            updatesListForm: 'updatesListForm',
            daySelBtn: 'tasksForm #daySelectBtn',
            mainPnl: 'mainpanel',
            newProjectForm: 'newProjectForm',

            // Tasks
            tasksForm:'tasksForm',
            addTaskBtn: '.tasksForm #addTaskBtn',
            tasksListByDay:'#tasksListByDay',
            termSelBtn: '.tasksForm #termSelectBtn',

            // Users
            userDetailsForm: 'userDetailsForm',
            editProfileButton: 'userDetailsForm #editProfileButton',
        },

        before: {
            // Tasks
            doTasks: ['getCurrentTime', 'getAllTasksByUser'],
        },
    },

    testFunc: function() {
        var a = this.getMainPnl().getTabBar().getComponent(0);
    },

    onTaskInit: function() {
        var segmentedButton = this.getDaySelBtn();
        var date = new Date().getDay();

        if (date == 0) {
            segmentedButton.setPressedButtons(6);
            this.showTasksByDay(6);    
        } 
        else {
            segmentedButton.setPressedButtons(date - 1);
            this.showTasksByDay(date - 1); 
        }

        this.getTermSelBtn().setHandler(function() {
            if (!this.picker) {
                this.picker = Ext.Viewport.add({
                    xtype: 'picker',
                    title: 'Select Term',
                    toolbar: {
                        title: 'Select Term'
                    },
                    slots: [
                        {
                            name : 'term',
                            title: 'Term',
                            data : [
                                {text: '20111', value: 20111},
                                {text: '20112', value: 20112},
                                {text: '20113', value: 20113},
                                {text: '20121', value: 20121}
                            ]
                        }
                    ]
                });
            }
            this.picker.show();
        });     
    },

    onNotificationInit: function() {

        this.getMainPnl().setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });

        this.getMainPnl().getTabBar().getComponent(0).setBadgeText(null);

        var userId = Ext.getStore('Users').getAt(0).get('userid');
        

        Ext.data.JsonP.request({
            url: 'https://igor-assistant-ca-2012.appspot.com/igor/notification/call/jsonp/get_all_notification',
            params: {
                owner: userId,
            },
            disableCaching: false,

            success: function(result, request) {
                // Unmask the viewport
                mainPanel = Ext.ComponentQuery.query('mainpanel')[0];
                mainPanel.unmask();

                if (result.status = 'OK') {
                    var notifyStore = Ext.getStore('Notifications'),
                        notifyModel = {}, read_count = 0;

                        notifyStore.removeAll();

                    Ext.Array.each(result.message, function(notify) {
                        if (notify.is_read == false) {
                            read_count++;
                        }

                        if (notify.avatar == null) {
                            notify.avatar = "default_male.png"
                        }
                        notifyModel = Ext.create('Igor.model.Notification', notify);
                        notifyStore.add(notifyModel);

                        if (read_count != 0) {
                            //console.log(read_count);
                            mainPanel.getTabBar().getComponent(0).setBadgeText(read_count);
                        }
                        //console.log(notify);

                    });
                }
                
                
            }
        });
    },

    onNewProjectInit: function() {
        var id = this.getNewProjectForm().getClassid();
        console.log(id);
    },

    onDayToggle: function(container, button, pressed, eOpts){
        //console.log("User toggled the '" + button.getText() + button.getId() + "' button: " + (pressed ? 'on' : 'off'));
        window.location.href = 'index.html#tasks/taskbyday/' + button.getItemId();
    },

    onProfilePop: function(){
        var editProfileBtn = this.getEditProfileButton();
        editProfileBtn.show();
    },

    onTaskPop: function(){
        var taskForm = this.getTasksForm();
        var previousCtn = taskForm.getPreviousItem();
        var addTaskBtn = this.getAddTaskBtn();

        //console.log(activeCtn.getItemId());

        if (previousCtn == null) {
            addTaskBtn.setHandler(function() {
                var navView = this.up('navigationview');
                var termBtn = Ext.ComponentQuery.query('#termSelectBtn')[0];
                navView.push({xtype: 'newTask'});
                this.hide();
                termBtn.hide();
            });
            this.getTermSelBtn().show();
            addTaskBtn.show();
        }    
        else if (previousCtn.getItemId().indexOf('scheduler') != -1) {
            //console.log(previousCtn.getItemId());     
            addTaskBtn.show();
            addTaskBtn.setHandler(this.getFuncForAddBtn("class"));
        }
        else if (previousCtn.getItemId().indexOf('classDetailsForm') != -1) {
            addTaskBtn.show();
            addTaskBtn.setHandler(this.getFuncForAddBtn("project"));
        }
    },

    onTaskPush: function(){
        var taskForm = this.getTasksForm();
        var activeCtn = taskForm.getActiveItem();

        if (activeCtn.getItemId().indexOf('classDetailsForm') != -1) {
            //console.log(activeCtn.getItemId());
            this.getAddTaskBtn().setHandler(this.getFuncForAddBtn("class"));
        }
        else if (activeCtn.getItemId().indexOf('projectDetailsForm') != -1) {
            this.getAddTaskBtn().setHandler(this.getFuncForAddBtn("project"));
        }
        else if (activeCtn.getItemId().indexOf('classTaskDetailsForm') != -1) {
            this.getAddTaskBtn().hide();
        }
        else if (activeCtn.getItemId().indexOf('jobDetailsForm') != -1) {
            this.getAddTaskBtn().hide();
        }
    },

    viewUpdateDetails: function(list, index, target, record){
        // Show 1 popup để hiển thị details của notification này
        // Trên popup này sẽ có 1 nút "Read/Unread" để xác định việc xem notification này, 
        // sử dụng hàm Mark_read(notifications) trong file .doc
        var rec = list.getStore().getAt(index);
        //console.log(rec.data);
        Ext.Msg.alert('Test', '1Redirect to objectid ' + rec.get('objectid'));
    },

    // Tasks
    // Hàm này thực hiện chính: khi có routes báo #tasks thì hàm này sẽ thực hiện tất cả các thao tác 
    // để đưa dữ liệu lên list chính
    doTasks: function() {
        // Thực hiện 2 hàm Filters trước
        this.showTasksByUser();
    },

    // (*) WS lấy về toàn bộ các tasks
    getAllTasksByUser: function(id) {
        // Sử dụng hàm Get_scheduler(user_id, int term=current) trong file .doc
    },

    // Hàm này lấy về thời gian hiện tại
    getCurrentTime: function() {
        // Thông tin về thời gian hiện tại sẽ cần cho việc hiển thị tasks focus vào khoảng thời gian hiện tại
    },

    // Hàm này sẽ bind dữ liệu đã load về lên giao diện tương ứng
    showTasksByUser: function() {
        
    },

    // Hàm này thực hiện khi click vào 1 tab Day cụ thể
    showTasksByDay: function(day_of_week) {

        this.getMainPnl().setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
        
        var userId = Ext.getStore('Users').getAt(0).get('userid');

        Ext.data.JsonP.request({
            url: 'https://igor-assistant-ca-2012.appspot.com/igor/class_subject/call/jsonp/get_classes_by_user_time',
            params: {
                user_id: userId,
                term: '20111', 
                day_of_week: day_of_week
            },
            disableCaching: false,

            success: function(result, request) {
                // Unmask the viewport
                Ext.ComponentQuery.query('mainpanel')[0].unmask();

                if (result.status = 'OK') {
                    var taskStore = Ext.getStore('Tasks'),
                        taskModel = {};

                    taskStore.removeAll();

                    Ext.Array.each(result.message, function(scheduler) {
                        taskModel = Ext.create('Igor.model.Task', scheduler);
                        taskStore.add(taskModel);
                        //console.log(scheduler);

                    });
                }
                
                
            }
        });
    },

    // Hàm này thực hiện khi click vào 1 item trên list tasks theo Day/Week...
    viewTaskDetails: function(id) {
        this.redirectTo('url'); // Chuyển sang màn hình xem chi tiết Tasks
        // Sử dụng route: http://abc.com/afterlogin/taskdetails/123
        // -> redirect sang màn hình TaskDetails
    },

    // User
    doUser: function() {
        // Thực hiện 3 hàm filters trước (dưới)
        // Sau đó, binding dữ liệu lên các 3 form đã khai báo tương ứng
    },

    // (*) WS lấy về thông tin chi tiết user theo ID
    getUserDetails: function(id) {
        // sử dụng hàm Get_user_detail(user_id) trong file .doc
    },

    // (*) WS lấy về toàn bộ class list của user này theo ID
    getClassesListByUser: function(user_id) {
        // Sử dụng hàm Get_classes_by_user(user_id) trong file .doc
    },

    // Hàm này xem thông tin chi tiết về lớp theo ID tương ứng (màn hình Class Details)
    viewClassDetails: function(id) {
        this.redirectTo('url'); // Cập nhật route
    },

    getFuncForAddBtn: function(viewName) {
        var taskForm = this.getTasksForm();
        var activeCtn = taskForm.getActiveItem();

        if (viewName == "class") {
            return function() {
                this.actions = Ext.Viewport.add({
                    xtype: 'actionsheet',
                    items: [
                        {
                            text: 'Add New Project',
                            scope: this,
                            handler: function() {
                                taskForm.push({xtype: 'newProjectForm'});
                                this.hide();
                                this.actions.hide();
                            }
                        },
                        {
                            text: 'Add New Task',
                            scope: this,
                            handler: function() {
                                taskForm.push({xtype: 'newClassTaskForm'});
                                this.hide();
                                this.actions.hide();
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            scope: this,
                            handler: function() {
                                this.actions.hide();
                            }
                        }
                    ]
                });

                this.actions.show();
            }
        }
        else if (viewName == "project") {
            return function() {
                this.actions = Ext.Viewport.add({
                    xtype: 'actionsheet',
                    items: [
                        {
                            text: 'Add New Member',
                            scope: this,
                            handler: function() {
                                taskForm.push({xtype: 'newProjectForm'});
                                this.hide();
                                this.actions.hide();
                            }
                        },
                        {
                            text: 'Add New Job',
                            scope: this,
                            handler: function() {
                                taskForm.push({xtype: 'newClassTaskForm'});
                                this.hide();
                                this.actions.hide();
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            scope: this,
                            handler: function() {
                                this.actions.hide();
                            }
                        }
                    ]
                });

                this.actions.show();
            }
        }

    }

});
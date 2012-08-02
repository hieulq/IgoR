Ext.define("Igor.controller.Main", {
    extend: 'Ext.app.Controller',
    views: ['Main'], 

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

            // Sự kiện khi click vào 1 task trên form tasks list
            dayTabPanel: {
                tabSelected: 'showTasksByDay',
            },
            tasksListByDay: {
                itemtap: 'viewTaskDetails',
            },

            // Sự kiện khi click trên các form của màn hình User
            friendsListForm: {
                itemtap: 'viewFriendDetails',
            },
            classesListForm: {
                itemtap: 'viewClassDetails',
            },

            userDetailsForm: {
                pop: 'onProfilePop',
            },

            daySelBtn: {
                toggle: 'onDayToggle',
                initialize: 'onSelBtnInit',
            },

            tasksForm: {
                pop: 'onTaskPop',
                push: 'onTaskPush'
            },

            refreshNewsButton: {
                //tap: 'onNotificationInit'
                tap: 'testFunc'
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
            refreshNewsButton: '#refreshNewsButton',
            updatesListForm: 'updatesListForm',
            daySelBtn: '#daySelectBtn',
            mainPnl: 'mainpanel',
            newProjectForm: 'newProjectForm',

            // Tasks
            tasksForm:'tasksForm',
            dayTabPanel:'#dayTabPanel',
            tasksListByDay:'#tasksListByDay',

            // Users
            userDetailsForm: 'userDetailsForm',
            friendsListForm: '#friendsListForm',
            classesListForm: '#classesListForm',
        },

        before: {
            // Updates
            doUpdates: ['ensureLoadingUserInfo','getAllUpdates'],

            // Tasks
            doTasks: ['getCurrentTime', 'getAllTasksByUser'], // Nếu cần ràng buộc j thì thêm vào đây

            // User
            doUser: ['getUserDetails', 'getFriendsListByUser', 'getClassesListByUser']
        },
    },

    testFunc: function() {
        var a = this.getMainPnl().getTabBar().getComponent(0);
    },

    onNotificationInit: function() {
        this.getMainPnl().setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });

        this.getMainPnl().getTabBar().getComponent(0).setBadgeText(null);
        var notifyStore = Ext.getStore('Notifications');

        notifyStore.removeAll();

        Ext.data.JsonP.request({
            url: 'https://igor-assistant-ca-2012.appspot.com/igor/notification/call/jsonp/get_all_notification',
            params: {
                owner: '6006',
            },
            disableCaching: false,

            success: function(result, request) {
                // Unmask the viewport
                mainPanel = Ext.getCmp('mainpanel');
                mainPanel.unmask();

                if (result.status = 'OK') {
                    var notifyStore = Ext.getStore('Notifications'),
                        notifyModel = {}, read_count = 0;

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
        window.location.href = 'index.html#tasks/taskbyday/' + button.getId();
    },

    onSelBtnInit: function(){
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
    },

    onProfilePop: function(){
        var editProfileBtn = Ext.getCmp('editProfileButton');
        editProfileBtn.show();
    },

    onTaskPop: function(){
        var taskForm = this.getTasksForm();
        var previousCtn = taskForm.getPreviousItem();

        //console.log(activeCtn.getItemId());

        if (previousCtn == null) {
            var termBtn = Ext.getCmp('termSelectBtn');
            var addTaskBtn = Ext.getCmp('addTaskBtn');

            addTaskBtn.setHandler(function() {
                var navView = this.up('navigationview');
                var termBtn = Ext.getCmp('termSelectBtn');

                navView.push({xtype: 'newTask'});
                this.hide();
                termBtn.hide();
            });

            termBtn.show();
            addTaskBtn.show();
        }    
        else if (previousCtn.getItemId().indexOf('scheduler') != -1) {
            //console.log(previousCtn.getItemId());
            var addTaskBtn = Ext.getCmp('addTaskBtn');
            addTaskBtn.show();

            addTaskBtn.setHandler(this.getFuncForAddBtn("class"));
        }
        else if (previousCtn.getItemId().indexOf('classDetailsForm') != -1) {
            var addTaskBtn = Ext.getCmp('addTaskBtn');
            addTaskBtn.show();

            addTaskBtn.setHandler(this.getFuncForAddBtn("project"));
        }
    },

    onTaskPush: function(){
        var taskForm = this.getTasksForm();
        var activeCtn = taskForm.getActiveItem();

        if (activeCtn.getItemId().indexOf('classDetailsForm') != -1) {
            //console.log(activeCtn.getItemId());
            var addTaskBtn = Ext.getCmp('addTaskBtn');

            addTaskBtn.setHandler(this.getFuncForAddBtn("class"));
        }
        else if (activeCtn.getItemId().indexOf('projectDetailsForm') != -1) {
            var addTaskBtn = Ext.getCmp('addTaskBtn');

            addTaskBtn.setHandler(this.getFuncForAddBtn("project"));
        }
        else if (activeCtn.getItemId().indexOf('classTaskDetailsForm') != -1) {
            var addTaskBtn = Ext.getCmp('addTaskBtn');
            addTaskBtn.hide();
        }
        else if (activeCtn.getItemId().indexOf('jobDetailsForm') != -1) {
            var addTaskBtn = Ext.getCmp('addTaskBtn');
            addTaskBtn.hide();
        }
    },

    // Updates
    // Hàm này thực hiện chính: khi có routes báo #updates thì hàm này sẽ thực hiện tất cả các thao tác 
    // để đưa dữ liệu lên list chính
    doUpdates: function(){
        // Thực hiện hàm ensureLoadingUserInfo() đầu tiên
        // Thực hiện hàm getAllUpdates() tiếp theo
        this.showListForm();
    },

    // Hàm này lấy về thông tin của user sau khi đăng nhập thành công
    ensureLoadingUserInfo: function(){
        // Lấy được user_id
    },

    // (*) Đây là hàm tương tác vs server IgoR để lấy về toàn bộ notifications, updates...
    getAllUpdates: function(user_id){
        // Sử dụng hàm Get_all_notification(owner) trong file .doc
    },

    // Sau khi 2 hàm trên thực hiện thì sẽ có dữ liệu để hiển thị trên giao diện
    // Hàm này sẽ thực hiện binding dữ liệu đã load về được lên list view
    showListForm: function(){
        // abc...
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

        var taskStore = Ext.getStore('Tasks');

        taskStore.removeAll();

        Ext.data.JsonP.request({
            url: 'https://igor-assistant-ca-2012.appspot.com/igor/class_subject/call/jsonp/get_classes_by_user_time',
            params: {
                user_id: '4006',
                term: '20111', 
                day_of_week: day_of_week
            },
            disableCaching: false,

            success: function(result, request) {
                // Unmask the viewport
                Ext.getCmp('mainpanel').unmask();

                if (result.status = 'OK') {
                    var taskStore = Ext.getStore('Tasks'),
                        taskModel = {};

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
        alert('dcm');
    },

    // (*) WS lấy về thông tin chi tiết user theo ID
    getUserDetails: function(id) {
        // sử dụng hàm Get_user_detail(user_id) trong file .doc
    },

    // (*) WS lấy về toàn bộ friend list của user này theo ID
    getFriendsListByUser: function() {

    },

    // (*) WS lấy về toàn bộ class list của user này theo ID
    getClassesListByUser: function(user_id) {
        // Sử dụng hàm Get_classes_by_user(user_id) trong file .doc
    },

    // Hàm này sẽ mở màn hình thông tin chi tiết về user theo ID tương ứng (màn hình User Details)
    viewFriendDetails: function(id) {
        this.redirectTo('url'); // Cập nhật route
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
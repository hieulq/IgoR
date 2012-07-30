Ext.define("Igor.controller.Main", {
    extend: 'Ext.app.Controller',
    views: ['Main'], // tương ứng sheet 3, 4, 5
    
    init: function() {
        
    },

    config: {
        control: {
            // Sự kiện click vào 1 item trên list Updates
            updatesListForm: {
                itemSelected: 'viewUpdateDetails',
            },

            // Sự kiện khi click vào 1 task trên form tasks list
            dayTabPanel: {
                tabSelected: 'showTasksByDay',
            },
            tasksListByDay: {
                itemSelected: 'viewTaskDetails',
            },

            // Sự kiện khi click trên các form của màn hình User
            friendsListForm: {
                itemSelected: 'viewFriendDetails',
            },
            classesListForm: {
                itemSelected: 'viewClassDetails',
            },

            userDetailsForm: {
                pop: 'onProfilePop',
            },
            tasksForm: {
                pop: 'onTaskPop',
            }
        },
        routes: {
            // Khi xuat hien url dang http://abc.com/afterLogin/.../#updates thi se thuc hien ham doUpdates()
            'updates': 'doUpdates',
            'updates/Update/:id':'viewUpdateDetails', // Hàm này sẽ thực thi khi có route tương ứng việc click 1 item trên list update
            
            // Khi xuất hiện url dạng http://abc.com/afterLogin/.../#tasks/abc thì sẽ thực hiện hàm doTasks()
            'tasks/:id': 'doTasks',
            'tasks/taskbyday/:timestamp': 'showTasksByDay',
            'tasks/Task/:id':'viewTaskDetails', // Hàm này sẽ thực thi khi có route tương ứng việc click 1 item trên list task

            // Khi xuất hiện url dạng http://abc.com/afterLogin/.../#tasks thì sẽ thực hiện hàm doTasks()
            'user/:id': 'doUser',
            'user/frienddetails/:id':'viewFriendDetails',
            'user/classdetails/:id':'viewClassDetails',
        },

        refs: {
            // Updates
            updatesListForm: '#updatesListForm',

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

    onProfilePop: function(){
        var editProfileBtn = Ext.getCmp('editProfileButton');
        editProfileBtn.show();
    },

    onTaskPop: function(){
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

    viewUpdateDetails: function(){
        // Show 1 popup để hiển thị details của notification này
        // Trên popup này sẽ có 1 nút "Read/Unread" để xác định việc xem notification này, 
        // sử dụng hàm Mark_read(notifications) trong file .doc
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
    showTasksByDay: function(time) {
        // Từ list các tasks lấy từ ws ở trên, truyền tham số cụ thể vào sẽ lấy được các tasks tương ứng Day truyền vào
        // Sử dụng hàm Get_scheduler_by_time(user_id, day_of_week, term) trong file .doc
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
});
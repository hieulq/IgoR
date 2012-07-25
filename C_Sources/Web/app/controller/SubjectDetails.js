Ext.define("Igor.controller.SubjectDetails", {
    extend: 'Ext.app.Controller',
    views: ['SubjectDetails'], // tương ứng sheet 7
    
    init: function() {
        
    },

    config: {
        control: {
            classesListForm: 'List' {
                itemSelected: 'viewClassDetails',
            }
        },
        routes: {
            'subjectdetails/:id': 'doSubjectDetails'
            // Khi xuat hien url dang http://abc.com/#login thi se thuc hien ham showLogin
        },

        refs: {
            // Subject Details
            subjectDetailsForm: '#subjectDetailsForm' 

            // Classes List By Subject
            classesListForm: '#classesListForm'
        }

        before: {
            doSubjectDetails: ['getSubjectDetails', 'getAllClassesBySubject'],
            // Truoc khi thuc hien ham doLogin thi se invoke ham authenticate trước!
        },
    },

    // Hàm chính
    doSubjectDetails: function() {
        // Thực hiện 2 hàm filter và binding dữ liệu lên giao diện
    },

    // (*) WS lấy về thông tin chi tiết của Subject theo id
    getSubjectDetails: function(subject_id) {
        // Sử dụng hàm Get_subject_detail(subject_id) trong file .doc
    },

    // (*) WS lấy về toàn bộ các classes của subject này
    getAllClassesBySubject: function(subject_id) {
        // Sử dụng hàm Get_class_by_subject(subject_id) trong file .doc
    }

    // Hàm này để xem chi tiết về 1 class
    viewClassDetails: function(class_id) {
        // Cập nhật route: .../classdetails/abc
        // Chuyển sang màn hình xem Class Details
        this.redirectTo('url');
    }
});
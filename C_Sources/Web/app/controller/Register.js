Ext.define("Igor.controller.Register", {
    extend: 'Ext.app.Controller',
    views: ['authenticate.Register'], // tương ứng sheet 1
    
    init: function() {
        
    },

    config: {
        control: {
            submitButton: {
                tap: 'doRegister'
            },
        },
        routes: {
            'register': 'doRegister'
            // Khi xuat hien url dang http://abc.com/#register thi se thuc hien ham doRegister
        },

        refs: {
            registerForm: '#registerForm' 
            // sau nay có thể lấy email/pass... từ giao diện, có thể thêm refs cụ thể cho từng textbox...
            submitButton: 'button[action=register]'
        }

        before: {
            doLogin: 'authenticate'
            // Truoc khi thuc hien ham doLogin thi se invoke ham authenticate trước!
        },
    },

    doRegister: function(){
        // Gọi hàm tương tác vs server IgoR
        this.register();
        // Có thể thực hiện chuyển màn hình sang màn hình chính Main
        this.redirectTo('url');
    },

    // Ham này sẽ gửi thông tin cần xác thực tới Google Sync
    authenticate: function(action) {
        MyApp.authenticate({
            success: function() {
                // Do smt... để xác thực với google
                // Hiện thông báo thành công
                action.resume();
                // hàm này sẽ cho phép quay trở lại tình trạng app hiện tại, thực hiện tiếp hàm doRegister
            },
            failure: function() {
                Ext.Msg.alert('Wrong Information to login! Try Again!');
            }
        });
    },

    // (*) Web Service
    register: function (userdetails){
        // Sử dụng hàm Register(user details) trong file .doc
    },
});
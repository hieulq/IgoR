Ext.define("Igor.controller.Login", {
    extend: 'Ext.app.Controller',
    views: ['authenticate.Authenticate'], // tương ứng sheet 2
    
    init: function() {
        this.checkSession();
    },

    config: {
        control: {
            submitButton: {
                tap: 'doLogin'
            },
        },

        routes: {
            'login': 'doLogin'
            // Khi xuat hien url dang http://abc.com/#login thi se thuc hien ham showLogin
        },

        refs: {
            loginForm: 'formpanel',
            // sau nay có thể lấy email/pass... từ giao diện, có thể thêm refs cụ thể cho từng textbox...
            submitButton: '#submitBtn'
        },

        before: {
            // doLogin: ['checkSession']
        }
    },

    checkSession: function() {
        var userStore = Ext.getStore('Users'), userSession = {};
        userSession = Ext.create('Igor.model.User');
        userStore.load({
            callback: function(records, operation, success) {
                    userSession = userStore.first();
                    if (userSession !== undefined) {
                        Ext.Viewport.setActiveItem(Ext.create('Igor.view.Main'));
                    }
                },
                scope: this
        });
    },

    doLogin: function(){
        // Lấy thông tin từ view
        var loginForm = this.getLoginForm().getValues();
        var emailText = loginForm['email'];
        var passText = loginForm['password'];

        if (emailText != '' && passText != '') {
            this.communicatingServer(emailText, passText);
        } else {
            // Không điền đầy đủ thông tin
            Ext.Msg.alert('Invalid Email or Password!');
        }
    },

    // (*) Web Service
    communicatingServer: function (_email, _password){
        var userStore = Ext.getStore('Users');
        userStore.removeAll();

        Ext.data.JsonP.request({    
            url: 'https://igor-assistant-ca-2012.appspot.com/igor/user/call/jsonp/login/',
            params: {
                email: _email,
                password: _password
            },
            disableCaching: false,

            success: function(result, request) {
                if (result.status == 'OK' && result.message !== 'Authentication failed! Check your email or password again') {
                    // Save the current user for the logged in session
                    Ext.Array.each(result.message, function(user) {
                        var userStore = Ext.getStore('Users'), userDetails = {};
                        userStore.removeAll();
                        userDetails = Ext.create('Igor.model.User', user);
                        userDetails.set('loggedIn', true);
                        userStore.add(userDetails);
                        userStore.sync();
                    });

                    // Route to the Main view
                    Ext.Viewport.setActiveItem(Ext.create('Igor.view.Main'));
                } else {
                    Ext.Msg.alert('Invalid Email or Password!');
                }
            }
        });
    }
});
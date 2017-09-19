Ractive.components['ux-login'] = Ractive.extend({
    template: '',
    isolated: true,
    data: {
        isLoggedIn: sessionStorage.getItem('username'),
        type: true
    },
    oninit: function() {
        if (this.get('type') && !this.get('isLoggedIn') && (window.location.pathname != '/index.html')) {
            window.location.href = '/index.html';
        } else if (!this.get('type') && (window.location.pathname != '/admin.html')) {
            $.ajax({
                method: "POST",
                data: { username: this.get('isLoggedIn'), admin: 1},
                url: "/user/isAdminLogin",
                success: function(result, model) {
                    if (result.User.status != 'OK') {
                        window.location.href = '/admin.html';
                    }
                },
                error: function(response) {
                    window.location.href = '/admin.html';
                }
            });
        }
    },
    oncomplete: function() {
        console.log('ux-login completedd');
    }
});
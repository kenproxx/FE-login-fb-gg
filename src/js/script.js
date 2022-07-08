



function getInfor() {
    FB.api(
        '/me',
        'GET',
        {"fields":"first_name,id"},
        function(response) {
            console.log(response.first_name);
            console.log(response.id);
        }
    );
}

function logout() {
    FB.logout(function(response) {
        // Person is now logged out
        getInfor()
    });
}
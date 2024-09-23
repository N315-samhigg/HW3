export function changePage(pageName) {
    console.log(pageName);
    if (pageName == "") {
        $.get("pages/" + pageName + ".html", (data) =>{
            $("#app").html(data);
        }).fail((error) => {
            console.log("error " + error);
            Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Dismiss',
            })
        });
    } else {
        $.get("pages/home.html", (data) =>{
            $("#app").html(data);
        }).fail((error) => {
            console.log("error " + error);
            Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Dismiss',
            })
        });
    }
}

export function checkSignIn() {
    let userSignedIn = false;

    if (userSignedIn) {
        console.log("user signed in");
        callback();
    } else {
        console.log("user signed out");
        changePage("signin");
    }
}
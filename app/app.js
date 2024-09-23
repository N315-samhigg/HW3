//import Swal from "../node_modules/sweetalert2";

import { changePage, checkSignIn } from "../model/model.js";

function initListeners() {
    /* Swal.fire({
        title: 'Not Signed In',
        text: 'Do you want to sign in?',
        icon: 'info',
        confirmButtonText: 'Yes',
        showCancelButton: true,
      }) */
}

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePage(pageID);
    //console.log("route " + pageID);
}

function initSite() {
    $(window).on("hashchange", route);
    route();
}
 
$(document).ready(function () {
    //initListeners();
    checkSignIn();
    initSite();
});
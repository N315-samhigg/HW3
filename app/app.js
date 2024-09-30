//import Swal from "../node_modules/sweetalert2";

import { changePage } from "../model/model.js";

function initListeners() {

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
    initSite();
});
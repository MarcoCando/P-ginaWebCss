function AsyncConfirm(title, msg, yesFn, noFn, obj) {
    var $confirm = $("#modalConfirmYesNo");
    $confirm.modal('show');
    $("#lblTitleConfirmYesNo").html(title);
    $("#lblMsgConfirmYesNo").html(msg);
    $("#btnYesConfirmYesNo").off('click').click(function () {
        yesFn(obj);
        $confirm.modal("hide");
    });
    $("#btnNoConfirmYesNo").off('click').click(function () {
        //noFn();
        $confirm.modal("hide");
    });
}

function Confirm(obj, msj, title) {
    AsyncConfirm(title, msj, Callback, NoCallback, obj);
    return false;
}

function Callback(obj) {
    PostBack(obj);
}
function NoCallback() {
    alert("Well... just continue working.");
    //$("#lblTestResult").html("You are not hungry");
}

function PostBack(index) {
    theForm.__EVENTTARGET.value = index;
    theForm.__EVENTARGUMENT.value = index;
    __doPostBack(index, '');
}

function MessageBox(obj, msj, title) {
    $("#messageBox").on("show", function () {    // wire up the OK button to dismiss the modal when shown
        $("#messageBox a.btn").on("click", function (e) {
            //console.log("button pressed");   // just as an example...
            $("#messageBox").modal('hide');     // dismiss the dialog
        });
    });

    $("#messageBox").on("hide", function () {    // remove the event listeners when the dialog is dismissed
        $("#messageBox a.btn").off("click");
    });

    $("#messageBox").on("hidden", function () {  // remove the actual elements from the DOM when fully hidden
        $("#messageBox").remove();
    });

    $('#divMensaje').html(msj);
    $('#messageBoxTitle').html(title);

    $("#messageBox").modal({                    // wire up the actual modal functionality and show the dialog
        "backdrop": "static",
        "keyboard": true,
        "show": true                     // ensure the modal is shown immediately
    });
    return false;
};


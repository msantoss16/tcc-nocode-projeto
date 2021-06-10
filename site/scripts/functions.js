md =  {
    showNotification: function(from, align, typeS, messageS) {
        type = ['', 'info', 'danger', 'success', 'warning', 'primary'];
    
        $.notify({
          icon: "add_alert",
          message: messageS,
        }, {
          type: type[type.indexOf(typeS)],
          timer: 3000,
          placement: {
            from: from,
            align: align
          }
        });
      },

      showProgressBar: function(message, dismiss=false) {
        return $.notify(message, {allow_dismiss: dismiss, showProgressBar: true})
      },
};



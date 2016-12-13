   $(function () {
            pageLoadScript();
        });

//submit_modal_envio
        function pageLoadScript() {

            _stepEffect = $('#stepEffect').val();
            _style = 'style2';
            _stepTransition = $('#stepTransition').is(':checked');
            _showButtons = $('#showButtons').is(':checked');
            _showStepNum = $('#showStepNum').is(':checked');



            $('.tsf-wizard-1').tsfWizard({
                stepEffect: _stepEffect,
                stepStyle: _style,
                navPosition: 'top',
                stepTransition: _stepTransition,
                showButtons: _showButtons,
                showStepNum: _showStepNum,
                height: 'auto'
            });

        }

        wow = new WOW(
                          {
                              boxClass: 'wow',      // default
                              animateClass: 'animated', // default
                              offset: 0,          // default
                              mobile: true,       // default
                              live: true        // default
                          }
                        )
        wow.init();


        $(window).load(function () {
            if ($(".loaderWrap").length > 0) {
                $(".loaderWrap").delay(500).fadeOut("slow");
            }
        });

        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-33013198-9', 'auto');
        ga('send', 'pageview');

        window.onload = function () {
            $("#h3_1_description").hide();
            $("#h3_2_description").hide();
            $("#h3_3_description").hide();
            $("#h3_4_description").hide();

            $("#anterior").html('Anterior');
            $("#siguiente").html('Siguiente');
            $("#Guardar_Modal").html('Salir');
        }

        function existeUrl(url) {
            var http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();
            return http.status != 404;
        }

        $(document).ready(function () {

          toastr.options = {
              "closeButton": false,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-top-center",
              "preventDuplicates": false,
              "showDuration": "1000",
              "hideDuration": "10000",
              "timeOut": "10000",
              "extendedTimeOut": "10000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
          }

          $('#submit_btn_t').click(function (event) {

          var project_name_modal = $('#project_name_modal').val();
          var type_modal = $('#type_modal').val();
          var budget_modal = $('#budget_modal').val();
          var message_modal1 = $('#message_modal1').val();
          var target_modal = $('#target_modal').val();
          var contact_modal = $('#contact_modal').val();
          var company_modal = $('#company_modal').val();
          var phone_modal = $('#phone_modal').val();

          if(!project_name_modal || !type_modal || !budget_modal || !message_modal1 || !target_modal || !company_modal || !contact_modal || !phone_modal)
                toastr.info('Existen campos vacios favor de llenarlos para continuar.');
                else
                  {
                $.post("Code/message.php", { project_name_modal: project_name_modal, type_modal: type_modal, budget_modal: budget_modal,
                                                    message_modal1: message_modal1, target_modal: target_modal, contact_modal: contact_modal,
                                                    company_modal: company_modal, phone_modal: phone_modal })
                    .done(function (data) {
                          toastr.success('Propuesta enviada con éxito en un momento te atenderemos.');
                          $('#project_name_modal').val('');
                          $('#type_modal').val('');
                          $('#budget_modal').val('');
                          $('#message_modal1').val('');
                          $('#target_modal').val('');
                          $('#contact_modal').val('');
                          $('#company_modal').val('');
                          $('#phone_modal').val('');
                    })
                  .fail(function (data) {
                      toastr.warning('Ocurrio un error favor de intentarlo de nuevo.');
                  });
                }
                 event.preventDefault();
          });

          $('#submit_modal_envio').click(function (event) {
              var filename = $('#email_modal').val() + "_datos.txt";
              if(existeUrl("Code/" + filename))
              {
                  filename = "_" + filename;
              }
              var name = $('#name_modal').val();
              var message = $('#message_modal').val();
              var email = $('#email_modal').val();

              var parametros = {
                  "name": name,
                  "message": message,
                  "email": email,
                  "filename": filename
              };

              if (!name || !message || !email){
                    toastr.info('Existen campos vacios favor de llenarlos para continuar.');
              }
              else
              {
                  $.ajax({
                      type: "POST",
                      url: "Code/file.php",
                      data: parametros,
                      success: function (data) {
                        $('#name_modal').val('');
                        $('#message_modal').val('');
                        $('#email_modal').val('');
                          toastr.success('Mensaje enviado con éxito, en un momento te antederemos.');
                      }
                  });
              }
                   event.preventDefault();
          });

          var vd=$("#vader").ProgressBarWars({porcentaje:50,estilo:"vader"});

          $("#step1").click(function() {
             vd.mover(50);
          });

          $("#step2").click(function() {
             vd.mover(100);
          });

          $("#siguiente").click(function() {
             vd.mover(100);
          });

          $("#anterior").click(function() {
             vd.mover(50);
          });

            $("#h3_1").click(function () {
                var description = $("#h3_1_description");
                if (description.is(":visible"))
                    description.hide();
                else
                    description.show();
            });

            $("#h3_2").click(function () {
                var description = $("#h3_2_description");
                if (description.is(":visible"))
                    description.hide();
                else
                    description.show();
            });

            $("#h3_3").click(function () {
                var description = $("#h3_3_description");
                if (description.is(":visible"))
                    description.hide();
                else
                    description.show();
            });

            $("#h3_4").click(function () {
                var description = $("#h3_4_description");
                if (description.is(":visible"))
                    description.hide();
                else
                    description.show();
            });

            $("#contactanos").animatedModal({
                modalTarget: 'animatedModal',
                animatedIn: 'lightSpeedIn',
                animatedOut: 'bounceOutDown',
                color: '#2C3E50',
                beforeOpen: function () {

                    var children = $(".thumb");
                    var index = 0;

                    function addClassNextChild() {
                        if (index == children.length) return;
                        children.eq(index++).show().velocity("transition.slideRightIn", { opacity: 1, stagger: 450, defaultDuration: 100 });
                        window.setTimeout(addClassNextChild, 100);
                    }
                    addClassNextChild();
                },
                afterClose: function () {
                    $(".thumb").hide();
                }
            });

            $("#demo03").animatedModal({
                modalTarget: 'lightSpeedIn',
                animatedIn: 'lightSpeedIn',
                animatedOut: 'bounceOutDown',
                color: '#C00d18',
                beforeOpen: function () {

                    var children = $(".thumb");
                    var index = 0;

                    function addClassNextChild() {
                        if (index == children.length) return;
                        children.eq(index++).show().velocity("transition.slideRightIn", { opacity: 1, stagger: 450, defaultDuration: 100 });
                        window.setTimeout(addClassNextChild, 100);
                    }
                    addClassNextChild();
                },
                afterClose: function () {
                    $(".thumb").hide();
                }
            });

            $("#demo02").animatedModal({
                modalTarget: 'lightSpeedIn',
                animatedIn: 'lightSpeedIn',
                animatedOut: 'bounceOutDown',
                color: '#C00d18',
                beforeOpen: function () {

                    var children = $(".thumb");
                    var index = 0;

                    function addClassNextChild() {
                        if (index == children.length) return;
                        children.eq(index++).show().velocity("transition.slideRightIn", { opacity: 1, stagger: 450, defaultDuration: 100 });
                        window.setTimeout(addClassNextChild, 100);
                    }
                    addClassNextChild();
                },
                afterClose: function () {
                    $(".thumb").hide();
                }
            });

        });
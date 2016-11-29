$(document).ready(function() {
    $('#log_out_btn').hide();
    $('#log_sec').hide();

    //로그아웃 버튼----------------------------------------
    $('#log_out_btn').on('click', function() {
       

        //로그아웃 시 아이콘 초기화-----------------------------
        $('#resume_icon_box').show();
        $('#hide_resume1').hide();
        $('#hide_resume2').hide();
        $('#hide_resume3').hide();
        $('#hide_resume4').hide();
        $('#hide_resume5').hide();
        $('#hide_resume6').hide();
        //------------------------------------------
        $('#two,#three,#welcome_message').slideUp('slow');
        $('#log_out_btn').fadeOut('slow');
        $('#login_form').slideDown('slow');
        $('#four').slideDown('slow');
        $('#id, #pw').val('');

    })

    //회원가입 버튼 ------------------------------------------
    $('#sign_in_btn').on('click', function() {
     
        $('#log_sec').slideDown('slow');
        $('.check_id_and_password').hide();
        $('#two,#three').slideDown('slow');
        $('#log_out_btn').fadeIn('slow');
        $('#login_form, #four').slideUp('slow');
        $('#welcome_message').slideDown('slow');
    });

    //회원가입 취소버튼-------------------------------
    $('#cancel').on('click', function() {
        $('#welcome_message').slideUp('slow');
        $('#login_form').slideDown('slow');

        $('.sign > input:first-of-type').val('').css('backgroundColor', 'rgba(0,0,0,0)');
        $('.check_id_and_password').remove();
        $('#sign_in').slideUp('slow');
        $('#want_sign_wrap').slideDown('normal');
    });
    //아이콘 상태변경------------------------------------------------------------

    function fnMove() {
        var offset = $("#two").offset();
        $('html, body').animate({
            scrollTop: offset.top
        }, 600);
    }
    $('#resume_icon1').on('click', function() {
        $('#resume_icon_box').slideUp(1000);
        $('#hide_resume1').slideDown(1000);
    });
    $('#hide_resume1').on('click', function() {

        $('#hide_resume1').slideUp('slow');
        $('#resume_icon_box').slideDown('slow');
        fnMove();
    });
    $('#resume_icon2').on('click', function() {
        $('#resume_icon_box').slideUp('slow');
        $('#hide_resume2').slideDown('slow');

    });
    $('#hide_resume2').on('click', function() {
        $('#hide_resume2').slideUp('slow');
        $('#resume_icon_box').slideDown('slow');
        fnMove();
    });
    $('#resume_icon3').on('click', function() {
        $('#resume_icon_box').slideUp('slow');
        $('#hide_resume3').slideDown('slow');
        $('#full_progress_html').css('width', '80%');
        $('#full_progress_css').css('width', '90%');
        $('#full_progress_js').css('width', '60%');
        $('#full_progress_jq').css('width', '60%');
    });
    $('#hide_resume3').on('click', function() {
        $('#hide_resume3').slideUp('slow');
        $('#resume_icon_box').slideDown('slow');
        $('#full_progress_html,#full_progress_css').css('width', '0%');
        $('#full_progress_js,#full_progress_jq').css('width', '0%');
        fnMove();
    });
    $('#resume_icon4').on('click', function() {
        $('#resume_icon_box').slideUp('slow');
        $('#hide_resume4').slideDown('slow');

    });
    $('#hide_resume4').on('click', function() {
        $('#hide_resume4').slideUp('slow');
        $('#resume_icon_box').slideDown('slow');
        fnMove();
    });
    $('#resume_icon5').on('click', function() {
        $('#resume_icon_box').slideUp('slow');
        $('#hide_resume5').slideDown('slow');

    });
    $('#hide_resume5').on('click', function() {
        $('#hide_resume5').slideUp('slow');
        $('#resume_icon_box').slideDown('slow');
        fnMove();
    });
    $('#resume_icon6').on('click', function() {
        $('#resume_icon_box').slideUp('slow');
        $('#hide_resume6').slideDown('slow');

    });
    $('#hide_resume6').on('click', function() {
        $('#hide_resume6').slideUp('slow');
        $('#resume_icon_box').slideDown('slow');
        fnMove();
    });



});

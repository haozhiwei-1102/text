"use strict";

window.onload = function () {
  // 数据请求
  function reques() {
    var getyzm = false;
    var botm = $('#botm'); //报名按钮

    var setyzm = $('.lisrn_inpcc button'); //发送验证码

    setyzm.click(function () {
      var names = $('input[name="name"]').val(); //姓名

      var phone = $('input[name="phone"]').val(); //手机号

      var yzm = $('input[name="yzm"]').val(); //验证码

      if (phone == '') {
        $('.lisrn_tack').show();
        $('.lisrn_tackcen_kanj11 p').text('请输入您的手机号');
        $('.lisrn_tackcen_kanj11 img').hide();
      } else if (phone.length < 11 || phone.length > 11) {
        $('.lisrn_tack').show();
        $('.lisrn_tackcen_kanj11 p').text('您的手机号格式不正确');
        $('.lisrn_tackcen_kanj11 img').hide();
      } else {
        getyzm = true;
        $.ajax({
          url: 'http://hbbm.jianzhan365.net/index/send_sms',
          type: 'post',
          data: {
            phone: phone
          },
          dataType: 'json',
          success: function success(res) {
            console.log(res);

            if (res.code == '200') {
              $('.lisrn_tack').show();
              $('.lisrn_tackcen_kanj11 p').text(res.msg);
              $('.lisrn_tackcen_kanj11 img').show();
            }

            if (res.code == '505') {
              $('.lisrn_tack').show();
              $('.lisrn_tackcen_kanj11 p').text(res.msg);
              $('.lisrn_tackcen_kanj11 img').hide();
            }
          }
        });
      }
    });
    botm.click(function () {
      var names = $('input[name="name"]').val(); //姓名

      var phone = $('input[name="phone"]').val(); //手机号

      var yzm = $('input[name="yzm"]').val(); //验证码

      if (names == '') {
        $('.lisrn_tack').show();
        $('.lisrn_tackcen_kanj11 p').text('请输入您的姓名');
      } else if (names != '' && phone == '') {
        $('.lisrn_tack').show();
        $('.lisrn_tackcen_kanj11 p').text('请输入您的手机号');
      } else if (names != '' && phone.length < 11 || phone.length > 11) {
        $('.lisrn_tack').show();
        $('.lisrn_tackcen_kanj11 p').text('您的手机号格式不正确');
      } else if (yzm == '') {
        $('.lisrn_tack').show();
        $('.lisrn_tackcen_kanj11 p').text('请输入验证码');
      } else if (yzm != '' && getyzm == true) {
        $.ajax({
          url: 'http://hbbm.jianzhan365.net/index/add_user',
          type: 'post',
          data: {
            username: names,
            phone: phone,
            code: yzm
          },
          dataType: 'json',
          success: function success(res) {
            console.log(res);

            if (res.code == '200') {
              alert('cg');
            }

            if (res.code == '400') {
              $('.lisrn_tack').show();
              $('.lisrn_tackcen_kanj11 p').text(res.msg);
              $('.lisrn_tackcen_kanj11 img').hide();
            }

            if (res.code == '201') {
              $('.lisrn_tack').show();
              $('.lisrn_tackcen_kanj11 p').text(res.msg);
              $('.lisrn_tackcen_kanj11 img').hide();
            }
          }
        });
      }
    });
  }

  reques();
  $('.lisrn_tackcen_kanj22').click(function () {
    tackhide();
  });
  $('.lisrn_tackcen_kanjxx img').click(function () {
    tackhide();
  });

  function tackhide() {
    $('.lisrn_tack').hide();
  }

  var nub;

  function scrott() {
    if ($(window).scrollTop() > 620) {
      $('.hbh_nav').addClass('fixed');
    } else {
      $('.hbh_nav').removeClass('fixed');
    } // 判断页面滑动到某个节点并


    sTop = $(window).scrollTop();
    hbh_centn = $('.hbh_header').offset().top; //首页

    result = hbh_centn - sTop;
    hbh_glb = $('#hbh_glb').offset().top; //免费索票

    result1 = hbh_glb - sTop;
    hbh_zhjs = $('#hbh_zhjs').offset().top; //展会介绍

    result2 = hbh_zhjs - sTop;
    hbh_xzhd = $('#hbh_xzhd').offset().top; //现场活动

    result3 = hbh_xzhd - sTop;
    hbh_news = $('#hbh_news').offset().top; //新闻中心

    result4 = hbh_news - sTop;
    hbh_hzpp = $('#hbh_hzpp').offset().top; //合作品牌

    result5 = hbh_hzpp - sTop;
    hbh_gzlc = $('#hbh_gzlc').offset().top; //观展流程

    result6 = hbh_gzlc - sTop;
    hbh_jtzn = $('#hbh_jtzn').offset().top; //交通指南

    result7 = hbh_jtzn - sTop;
    hbh_lxwm = $('#hbh_lxwm').offset().top; //联系我们

    result8 = hbh_lxwm - sTop;

    if (result == -300) {
      nub = 0;
    } else if (result > -300) {
      nub = 0;
    }

    if (result1 < 0) {
      nub = 1;
    }

    if (result2 < 240) {
      nub = 2;
    }

    if (result3 < 240) {
      nub = 3;
    }

    if (result4 < 240) {
      nub = 4;
    }

    if (result5 < 240) {
      nub = 5;
    }

    if (result6 < 240) {
      nub = 6;
    }

    if (result7 < 240) {
      nub = 7;
    }

    if (result8 < 240) {
      nub = 8;
    }
  } // scrott()
  // 滚轮事件


  $(window).scroll(function () {
    scrott();
    var cc = $('.nav_body_list').eq(nub).hasClass('nav_body_list_active');

    if (cc == false) {
      $('.nav_body_list').removeClass('nav_body_list_active');
      $('.nav_body_list').eq(nub).addClass('nav_body_list_active');
    }
  });
  $('.lbtce_bm_text').on('click', function () {
    // 马上报名
    var targetPos = parseInt($('.hbh_header').offset().top);
    $('html').css('scroll-behavior', 'smooth');
    goTarget(targetPos);
  });
  $('.nav_body_list').on('click', function () {
    $('html').css('scroll-behavior', 'smooth');
  });
  $('.nav_body_list').eq(0).on('click', function () {
    var targetPos = parseInt($('.hbh_header').offset().top);
    goTarget(targetPos);
  });
  $('.nav_body_list').eq(1).on('click', function () {
    //免费索票
    var targetPos = parseInt($('#hbh_glb').offset().top);
    goTarget(targetPos);
  });
  $('.nav_body_list').eq(2).on('click', function () {
    // 展会介绍
    var targetPos = parseInt($('#hbh_zhjs').offset().top);
    goTarget(targetPos);
  });
  $('.nav_body_list').eq(3).on('click', function () {
    //现场活动
    var targetPos = parseInt($('#hbh_xzhd').offset().top);
    goTarget(targetPos);
  });
  $('.nav_body_list').eq(4).on('click', function () {
    //新闻中心
    var targetPos = parseInt($('#hbh_news').offset().top);
    goTarget(targetPos);
  });
  $('.nav_body_list').eq(5).on('click', function () {
    // 合作品牌
    var targetPos = parseInt($('#hbh_hzpp').offset().top);
    goTarget(targetPos);
  });
  $('.nav_body_list').eq(6).on('click', function () {
    // 观展流程
    var targetPos = parseInt($('#hbh_gzlc').offset().top);
    goTarget(targetPos);
  });
  $('.nav_body_list').eq(7).on('click', function () {
    //交通指南
    var targetPos = parseInt($('#hbh_jtzn').offset().top);
    goTarget(targetPos);
  });
  $('.nav_body_list').eq(8).on('click', function () {
    // 联系我们
    var targetPos = parseInt($('#hbh_lxwm').offset().top);
    goTarget(targetPos);
  }); // 点击input添加边框颜色效果

  var nemas = $('input[name="name"]');
  var phone = $('input[name="phone"]');
  nemas.click(function (event) {
    phone.css('border', '1px solid #C3C2C2');
    $(this).css('border', '1px solid rgb(254, 0, 102)');
    event.stopPropagation();
  });
  phone.click(function (event) {
    $(this).css('border', '1px solid rgb(254, 0, 102)');
    nemas.css('border', '1px solid #C3C2C2');
    event.stopPropagation();
  });
  $("body").click(function (event) {
    nemas.css('border', '1px solid #C3C2C2');
    phone.css('border', '1px solid #C3C2C2');
    event.stopPropagation(); //  阻止事件冒泡
  }); // 页面滚动动画效果

  function goTarget(target) {
    var timer = null;
    var lastPos = 0;

    function goMove() {
      var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
      currentPosition = parseInt(currentPosition);

      if (lastPos == currentPosition) {
        //页面高度不够长，未滑动到指定位置的时候，已经滑动到底部了
        window.scrollTo(0, target);
        clearInterval(timer);
        console.log('move to ' + target);
        return;
      }

      lastPos = currentPosition;
      console.log(target, currentPosition);

      if (Math.abs(currentPosition - target) < 20) {
        window.scrollTo(0, target);
        clearInterval(timer);
        console.log('move end');
        return;
      }

      if (currentPosition - target > 20) {
        currentPosition -= 20;
        window.scrollTo(0, currentPosition);
      } else {
        currentPosition += 20;
        window.scrollTo(0, currentPosition);
      }
    }

    timer = setInterval(goMove, 10);
  } // 马上报名效果


  function radio() {
    var main = document.getElementById("main_cent");
    var dom1 = document.getElementById("dom1_cent"); //创建用于复制dom1的新节点

    var newnode = document.createElement("div");
    newnode.id = "dom2_cent";
    main.appendChild(newnode);
    var dom2 = document.getElementById("dom2_cent");
    var speed = 80; //设置速度

    dom2.innerHTML = dom1.innerHTML; //复制dom1节点
    // 滚动函数

    function moveTop() {
      // 当main向上滚动超出部分>=滚动节点高度时, 设置为scrollTop为0
      if (dom1.offsetHeight - main.scrollTop <= 0) {
        main.scrollTop = 0; // 或者main.scrollTop -= dom1.offsetHeight;
      } else {
        main.scrollTop++;
      }
    }

    var myMarquee = setInterval(moveTop, speed); //设置定时器
    // 鼠标悬停时清除定时器停止滚动，移出后继续滚动

    main.onmouseover = function () {
      clearInterval(myMarquee);
    };

    main.onmouseout = function () {
      myMarquee = setInterval(moveTop, speed);
    };
  }

  radio();
};
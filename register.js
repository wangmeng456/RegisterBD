$(function(){var t,a=$("#user"),e=$("#telephone"),o=$("#password"),l=$("#code"),s=$("#acquire"),n=$("#register"),i=6,u=!1,c=!1,r=!1,v=!1;a.focus(function(){console.log("d"),$("#user-validation-message").html("设置后不可更改，中英文均可，最长14个英文或7个汉字")}),a.focusout(function(){console.log("a");var t=$("#user-validation-message");return""===a.val()?(t.html("不能为空!"),!1):/[^\w\u4e00-\u9fa5]|^\d+$/.test(a.val())?(t.html("用户名仅支持中英文、数字和下划线，且不能为纯数字"),!1):(t.html(""),void(u=!0))}),e.focusout(function(){console.log("b");var t=$("#telephone-validation-message");return""===e.val()?(t.html("不能为空!"),!1):/^1[3456789]\d{9}$/.test(e.val())?(t.html(""),void(r=!0)):(t.html("手机号码格式不正确"),!1)}),o.focus(function(){$("#password-validation-message").html("长度为8~14个字符，字母/数字以及标点符号至少两种，不允许有中文、空格")}),o.focusout(function(){var t=$("#password-validation-message");return""===o.val()?(t.html("不能为空!"),!1):/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(o.val())?(t.html(""),void(c=!0)):(t.html("密码设置不符合要求"),!1)}),l.focusout(function(){var t=$("#code-validation-message");if(""===l.val())return t.html("不能为空!"),!1;t.html(""),v=!0}),s.click(function(){s.attr("disabled",!0),t=setInterval(function(){0==--i?(s.attr("disabled",!1),clearInterval(t),s.val("获取验证码"),$("#code-validation-message").html("请求超时，请稍后再试"),i=6):s.val("获取中("+i+"s)")},1e3)}),n.click(function(){u&&c&&r&&v?alert("注册成功!"):a.attr("autofocus",!0)})});
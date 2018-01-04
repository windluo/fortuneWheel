exports.getCookie = function(name) {
  var match = document.cookie.match(new RegExp(name + '=([^;]+)'))
  if (match) return match[1]
  else return null
}

exports.getQueryString = function(a) {
  var reg = RegExp("(^|\x26)" + a + "\x3d([^\x26]*)(\x26|$)", "i")
  if (window.location.search === '') {
    return null
  }
  var res = window.location.search.substr(1).match(reg)
  return res !== null ? unescape(res[2]) : null
}

exports.setCookie = function(cname, cvalue, exdays) {
  exdays = exdays ? exdays : 30;
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";expires=" + expires + ";path=/";
}

var setHeight = function (target, height) {
  var h = height ? document.documentElement.clientHeight - height : document.documentElement.clientHeight
  target.style.height = h + 'px'
}
exports.resetHeight = function (target, height) {
  setHeight(target, height)
  var resizeWaiter = false
  window.onresize = function () {
    // 设一个延迟，不然有的浏览器会执行两次
    if (!resizeWaiter) {
      resizeWaiter = true
      setTimeout(function () {
        setHeight(target, height)
        resizeWaiter = false
      }, 100)
    }
  }
}
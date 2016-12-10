var zyalert = {
    confirmcallbackok: false,
    confirmcallbackcanle: false,
    //弹出确定对话框
    showconfirm: function (title, oktext, canceltext, ok, back) {
        var height = $(window).height();
        var minw = 150;
        var obj = $('#yxalert_f');
        var minalert = $('#minalert_f');
        if (obj.length > 0) {
            obj.show();
            minalert.show();
            obj.height(height);
        } else {

            $('body').append('<div class="alertstyle" id="minalert_f"><div class="t tstyle"></div><a href="javascript:zyalert.closeconfirm()" class="but butcanle tbut">取消</a><a href="javascript:zyalert.okconfirm();" class="but butok tbut">确定</a><div class="clear"></div></div></div><div class="misalert" id="yxalert_f" style="filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity: 0.5;opacity: 0.5;background: none repeat scroll 0 0 #000;position:fixed;top:0px;left:0px;z-index:1999800;width:100%;margin:auto;height:' + height + 'px;line-height:' + height + 'px;text-align:center;"><span class="t" style="color:#fff;"></span></div>');
            obj = $("#yxalert_f");
            minalert = $('#minalert_f');
        }
        minalert.find('.t').html(title);
        minalert.find('.butok').html(oktext == '' ? '确定' : oktext);
        minalert.find('.butcanle').html(canceltext == '' ? '取消' : canceltext);
        var x = ($(window).width() - minw) / 2;
        obj.css("top", "0px");
        zyalert.confirmcallback = ok;
        zyalert.confirmcallbackcanle = back;
    },
    resetalert: function () {
        var obj = $("#yxalert_f,#yxalert");
        var body = $("#minalert_f,#minalert");
        var scrollTop = $(window).scrollTop();
        var y = scrollTop;
        obj.css("top", y);
        body.css("top", "20%");
    },
    okconfirm: function () {
        var obj = $("#yxalert_f");
        var body = $("#minalert_f");
        obj.hide();
        body.hide();
        zyalert.confirmcallback();
    },
    //关闭弹出框
    closeconfirm: function () {
        var obj = $("#yxalert_f");
        var body = $("#minalert_f");
        obj.hide();
        body.hide();
        if (zyalert.confirmcallbackcanle)
            zyalert.confirmcallbackcanle();
    },
    //弹窗正确框,参数为自动关闭时间
    showok: function (mc, sd) {
        if (!sd) sd = 1500;
        zyalert.showalert(mc, false, sd, true, false);
    },
    //弹窗正确框,参数为自动关闭时间
    showokparent: function (mc, sd) {
        if (parent) parent.showok(mc, sd);
    },
    showero: function (mc, sd) {
        if (!sd) sd = 3000;
        this.showalert(mc, false, sd, false, true);
    },
    //弹窗正确框,参数为自动关闭时间
    showeroparent: function (mc, sd) {
        if (parent) parent.showero(mc, sd);
    },
    showloading: function (mc, sd) {
        this.showalert(mc, true, sd, false, false);
    },
    showalert: function (txt, isload, mc, isok, isero) {
        var height = $(window).height();
        var width = $(window).width();
        var minw = 100;
        var minheight = 'auto';
        var lineheight = 'auto';
        if (!isload && !isok && !isero) {
            minw = 100;
            minheight = 'auto';
            lineheight = 'auto';
        }
        //if (isok || isero) minheight = 70;
        obj = $("#yxalert");
        minalert = $('#minalert');
        if (obj.length > 0) {
            obj.show();
            //minalert.attr('class', 'misalert');
            minalert.show();
            //obj.height(height);
            //minalert.attr('class', 'misalert putdown');
        } else {
            $('body').append('<div class="misalert shadow2  fadeInUp animated" id="minalert" style="height:' + minheight + 'px;">\
        <div class="spinner" id="loading779988">\
                <div class="spinner-container container1">\
                    <div class="circle1"></div>\
                    <div class="circle2"></div>\
                    <div class="circle3"></div>\
                    <div class="circle4"></div>\
                </div>\
                <div class="spinner-container container2">\
                    <div class="circle1"></div>\
                    <div class="circle2"></div>\
                    <div class="circle3"></div>\
                    <div class="circle4"></div>\
                </div>\
                <div class="spinner-container container3">\
                    <div class="circle1"></div>\
                    <div class="circle2"></div>\
                    <div class="circle3"></div>\
                    <div class="circle4"></div>\
                </div>\
            </div>\
        <i class="icono-check" id="ok779988" style="color: green"></i>\
        <i class="icono-exclamationCircle" id="ok779955" style="color: red"></i>\
        <span class="t" id="tt7788"><span></span></span>\
        <span class="t" id="tt7799"><span></span></span>\
        </div><div class="misalert windowbloack" id="yxalert" style="height:' + height + 'px;line-height:' + height + 'px;"><span class="t" style="color:#000;"></span></div>');
            obj = $("#yxalert");
            minalert = $('#minalert');
        }
        if (!isok) {
            minalert.find('#ok779988').hide();
        } else {
            minalert.find('#ok779988').show();
        }
        if (!isload) {
            minalert.find('#loading779988').hide();
        } else {
            minalert.find('#loading779988').show();
        }
        if (!isero) {
            minalert.find('#ok779955').hide();
        } else {
            minalert.find('#ok779955').show();
        }

        if (!isok && !isload && !isero) {
            minalert.find('.t').css('line-height', '');
            $('#tt7799').show();
            $('#tt7788').hide();
            minalert.find('#tt7799').find('span').html(txt);
        } else {
            $('#tt7788').show();
            $('#tt7799').hide();
            minalert.find('#tt7788').find('span').html(txt);
        }

        minalert.height(minheight);

        var x = ($(window).width() - (minalert.width())) / 2;
        obj.css('left', "0px");
        if (mc) setTimeout('zyalert.closealert()', mc);
    }, showtext: function (txt) {
        this.showalert(txt, false, 2500, false);
    }, showtextlong: function (txt, tx) {
        this.showalert(txt, false, 5000, false);
    }, closealert: function () {
        var obj = $(".misalert");
        obj.hide();
    }, alertAndBack: function (t, url) {
        this.showok(t);
        setTimeout(function () {
            location.href = url;
        }, 1500);
    }
}

$(window).resize(function () {
    var obj = $("#yxalert");
    var minalert = $('#minalert');
    if (obj.length > 0) {
        if (obj.css('display') != 'none') {
            var minw = 150;
            var scrollTop = $(window).scrollTop();
            var x = ($(window).width() - minw) / 2;
            var y = scrollTop;
            //obj.css("top", y);
            //minalert.css("top", y + height / 2 - minw).css("left", x);
            minalert.css("left", "0px");
            obj.css('left', 0).css('height', $(window).height());
        }
    } else {

    }
});
var zysys = {
    //是否是安卓
    isandroid: function () {
        if (/android/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    },
    //是否是安卓4
    isandroid40: function () {
        if (/android 4.0/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    },
    //是否是安卓4
    isandroid41: function () {
        if (/android 4.1/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    },
    //是否是安卓3
    isandroid3: function () {
        if (/android 3/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    },
    //是否是安卓2
    sandroid2: function () {
        if (/android 2/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    },
    //是否是苹果系统
    isios: function () {
        if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
            return true;
        }
    },
    //是否是微信浏览器
    isweixin: function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },
    isMobile: function () {
        return navigator.userAgent.match(/mobile/i);
    }
}
var zyunit = {
    getQueryString: function (name, vhref) {
        if (vhref == undefined) vhref = location.href;
        if (vhref.indexOf("?") == -1 || vhref.indexOf(name + '=') == -1) {
            return '';
        }
        var queryString = vhref.substring(vhref.indexOf("?") + 1);

        var parameters = queryString.split("&");
        var pos, paraName, paraValue;
        for (var i = 0; i < parameters.length; i++) {
            pos = parameters[i].indexOf('=');
            if (pos == -1) {
                continue;
            }
            paraName = parameters[i].substring(0, pos);
            paraValue = parameters[i].substring(pos + 1);

            if (paraValue.indexOf('#') > 0) paraValue = paraValue.split('#')[0];
            if (paraName == name) {
                return unescape(paraValue.replace(/\+/g, " "));
            }
        }
        return '';
    }
}


var zycookie = {
    getCookie: function (c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return ""
    },
    setCookie: function (c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }
}


var zywindow = {
    title: '',
    list: null,
    content: function (o) {
        this.list = new Array();
        this.list = o;
    },
    get: function (index) {

    },
    show: function () {
        var pl = $('#zywindow');

        if (pl.length <= 0) {
            $('body').append('<div id="zywindow" style="display: none;" class="shadow2">\
                <a href="javascript:zywindow.close()" class="stitle"><span class="close" style="float:right;width:auto;margin-right:10px;"><i class="fa fa-remove"></i></span><span class="t"></span></a>\
                <div class="s-list"></div>\
            </div>');
        } else {

        }

        pl = $('#zywindow');
        pl.find('.stitle .t').html(this.title);
        pl.attr('class', '');
        pl.show().attr('class', 'shadow2 scroll1');
        zyalert.showalert('', false);
        $('#minalert').hide();


        if (this.list != null) {
            if (this.list.length > 6)
                pl.css('height', $(window).height() - 100);
            else
                pl.css('height', 'auto');
        }
        else
            pl.css('height', 'auto');

        $('#zywindow div').html('');
        var index = 0;
        $(this.list).each(function () {
            $('#zywindow div').append('<a href="javascript:zywindow.click(' + (index++) + ')">' + this.text + '</a>');
        });
    },
    showbutton: function (type) {
        if (type == '') type = 'text';
        var pl = $('#showbuttonl');

        if (pl.length <= 0) {
            $('body').append('<div id="showbuttonl" style="display:none;" class="shadow2">\
                <a href="javascript:zywindow.close()" class="close"><i class="fa fa-remove"></i></a>\
                <a href="javascript:zywindow.close()" class="stitle"></a>\
                <input type="' + type + '" name="sb118" id="sb118" style="margin: auto;width: 90%;border:solid 1px #ccc;text-align: center;float: none;border-radius: 3px;height: 45px;line-height: 45px;display: block;padding: 0 10px;margin-top: 15px;font-size: 1rem;" value=""/>\
                <div><a href="javascript:showpl.clickbutton()" style="margin: auto;width: 90%;text-align: center;float: none;background-color: #ff5001;color: #FFF;border-radius: 3px;height: 40px;line-height: 40px;display: block;padding: 0 10px;margin-top: 15px;">确定</a></div>\
            </div>');
        } else {

        }

        pl = $('#showbuttonl');
        pl.find('.stitle').html(this.title);
        pl.attr('class', '');
        pl.show().attr('class', 'shadow2 putdown scroll1');
        zyalert.showalert('', false);
        $('#minalert').hide();


        if (this.list != null) {
            if (showpl.list.length > 6)
                pl.css('height', $(window).height() - 100);
            else
                pl.css('height', 'auto');
        }
        else
            pl.css('height', 'auto');
    },
    click: function (index) {
        var _index = 0;
        $(this.list).each(function () {
            if (_index == index) {
                zywindow.clickback(this);
            }
            _index++;
        });
    },
    clickback: function (o) {
        this.close();
    },
    clickbutton: function () {
        var sb = $('#sb118').val();
        this.clickbackbutton(sb);
        this.close();
    },
    clickbackbutton: function (o) {

    },
    close: function () {
        zyalert.closealert();
        $('#zywindow').hide();
        zyalert.closealert();
        $('#showbuttonl').hide();
    }
}

var zydate = {
    yyysjc: function (timestamp) {

        var d = new Date(timestamp * 1000);    //根据时间戳生成的时间对象
        var date = (d.getFullYear()) + "-" +
                   (d.getMonth() + 1) + "-" +
                   (d.getDate()) + " " +
                   (d.getHours()) + ":" +
                   (d.getMinutes()) + ":" +
                   (d.getSeconds());
        return date;
    },

    sjday: function (date1, date2) {
        var date3 = date2.getTime() - date1.getTime()  //时间差的毫秒数
        //计算出相差天数
        var days = Math.floor(date3 / (24 * 3600 * 1000));
        return days;
    }, NewDatefunction: function (str) {
        str = str.split('-');
        var date = new Date();
        date.setUTCFullYear(str[0], str[1] - 1, str[2]);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }, NewDateCH: function (str) {
        var n = str.split('年')[0];
        var y = str.split('年')[1].split('月')[0];
        var r = str.split('年')[1].split('月')[1].replace('日', '');
        var date = new Date();
        date.setUTCFullYear(n, y - 1, r);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }, DateAdd: function (interval, number, date) {
        switch (interval) {
            case "y": {
                date.setFullYear(date.getFullYear() + number);
                return date;
                break;
            }
            case "q": {
                date.setMonth(date.getMonth() + number * 3);
                return date;
                break;
            }
            case "m": {
                date.setMonth(date.getMonth() + number);
                return date;
                break;
            }
            case "w": {
                date.setDate(date.getDate() + number * 7);
                return date;
                break;
            }
            case "d": {
                date.setDate(date.getDate() + number);
                return date;
                break;
            }
            case "h": {
                date.setHours(date.getHours() + number);
                return date;
                break;
            }
            case "m": {
                date.setMinutes(date.getMinutes() + number);
                return date;
                break;
            }
            case "s": {
                date.setSeconds(date.getSeconds() + number);
                return date;
                break;
            }
            default: {
                date.setDate(d.getDate() + number);
                return date;
                break;
            }
        }
    }
}

var zydom = {
    setbuttonclick: function (o, click, t) {
        if ($(o).data('click') == '' || $(o).data('click') == undefined) {
            click();
            $(o).attr('data-click', $(o).html());
            $(o).html(t);
        }
    },
    rebuttonclick: function (o) {
        $(o).html($(o).attr('data-click'));
        $(o).removeAttr('data-click');
    },

    ischecked: function (ids) {
        return $(ids).prop('checked');
    },
    checked: function (ids) {
        return $(ids).prop('checked', true);
    },
    unchecked: function (ids) {
        return $(ids).prop('checked', false);
    }
}

Array.prototype.removes = function (v) {
    for (var i = 0; i < this.length; i++) {
        if (array[i] === v) {
            arr.splice(i, 1);
            i--;
        }
    }
}
//zyhash
$.zyhash = function () {
    this.items = new Array();
    this.itemsCount = 0;
    this.add = function (key, value) {
        if (!this.containsKey(key)) {
            this.items[key] = value;
            this.itemsCount++;
        }
        else
            throw "key '" + key + "' 已经存在"
    }
    this.get = function (key) {
        if (this.containsKey(key))
            return this.items[key];
        else
            return null;
    }

    this.remove = function (key) {
        if (this.containsKey(key)) {
            delete this.items[key];
            this.itemsCount--;
        }
        else
            throw "key '" + key + "' 不存在"
    }
    this.containsKey = function (key) {
        return typeof (this.items[key]) != "undefined";
    }
    this.containsValue = function containsValue(value) {
        for (var item in this.items) {
            if (this.items[item] == value)
                return true;
        }
        return false;
    }
    this.contains = function (keyOrValue) {
        return this.containsKey(keyOrValue) || this.containsValue(keyOrValue);
    }
    this.clear = function () {
        this.items = new Array();
        itemsCount = 0;
    }
    this.size = function () {
        return this.itemsCount;
    }
    this.isEmpty = function () {
        return this.size() == 0;
    }
};
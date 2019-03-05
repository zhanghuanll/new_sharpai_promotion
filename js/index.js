$(function(){
    $(".info-list .video-name").each(function(i,v){
        $(this).hover(function(i,v){
            showIndex(this);
        })
        $(this).click(function(i,v){
            showIndex(this);
        })
    })

    $(".location-btn1").click(function(){
        window.location = "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-12617595122.2.33ff4679Hed5KU&id=577748526182"
    })
    
    function showIndex(my_this){
        var index = $(my_this).index()
        if(index && index == 1){
            $(".video-show").css("display","none");
            $(".info-show").css("display","block")
            $(".show-info-one img").attr("src","img/01.png")
            $(".show-info-tow").html("人脸识别技术是基于人的脸部特征，对输入的人脸图像或者视频流 . 首先判断其是否存在人脸 , 如果存在人脸，则进一步的给出每个脸的位置、大小和各个主要面部器官的位置信息。并依据这些信息，进一步提取每个人脸中所蕴涵的身份特征，并将其与已知的人脸进行对比，从而识别每个人脸的身份。")
        }else if(index && index == 2){
            $(".video-show").css("display","none");
            $(".info-show").css("display","block")
            $(".show-info-one img").attr("src","img/02.png")
            $(".show-info-tow").html("无缝跟踪搜索摄像设备中的人体，实时发送人体所处位置的坐标图像，输出人体活动GIF图。人形识别是对人体进行一系列的训练和处理，识别出的人体可进行姿势估算，特征提取，信息对比，从而实现人体交叉多重识别和跟踪。")
        }else if(index && index == 3){
            $(".video-show").css("display","none");
            $(".info-show").css("display","block")
            $(".show-info-one img").attr("src","img/03.png")
            $(".show-info-tow").html("大范围提取数据，通过摄像头捕捉检测，我们可以定制化地针对不同应用场景提供模型。比如在施工过程中，我们的产品监测到工人未带安全帽，未按规定着装之类的，给予警告。")
        }else{
            $(".video-show").css("display","block");
            $(".info-show").css("display","none")
        }
    }

})

// 轮播图js
window.onload=function() {

    var playerElement = document.getElementById("player");
    var player = new Clappr.Player({
        source: 'mp4/sharipAI小区版.mp4',
        poster: 'img/img02.png',
        mute: true,
        height: '100%',
        width: '100%'
    });

    player.attachTo(playerElement);

    slideLlx("slide");
    slideLlx("slide_two");
    function slideLlx(slideID) {
        var slide=document.getElementById(slideID);
        var slideLis=slide.getElementsByTagName('li');
        var conut=slideLis.length;
        if(conut <1) {
            return false;
        }
        var imgs=slide.getElementsByTagName( "img");
        var firstSrc=imgs[0].getAttribute( "src");
        var lastSrc=imgs[imgs.length-1].getAttribute( "src");
        var offset=slide.clientWidth;
        var index=1;
        var slideUl=slide.getElementsByTagName( "ul")[0];
        var Timer;
        var firstLi=document.createElement( "li");
        var firstIMG=document.createElement( "img");
        firstIMG.setAttribute( "src", lastSrc);
        firstLi.appendChild(firstIMG);
        slideUl.insertBefore(firstLi, slideUl.firstChild);
        slideUl.style.transform="translateX("+(-offset)+"px)";
        var lastLi=document.createElement( "li");
        var lastIMG=document.createElement( "img");
        lastIMG.setAttribute( "src", firstSrc);
        lastLi.appendChild(lastIMG);
        slideUl.appendChild(lastLi);
        var circle_btn=document.createElement( "div");
        circle_btn.setAttribute( "class", "circle_btn");
        for(var i=0;
        i<conut;
        i++) {
            var cbtn=document.createElement( "button");
            circle_btn.appendChild(cbtn);
        }
        slide.appendChild(circle_btn);
        var circles=Array.prototype.slice.call(circle_btn.getElementsByTagName( "button"));
        circles[0].setAttribute( "class", "active");
        circles.forEach(function(e, i) {
            e.onclick=function() {
                closeAutoSlide();
                openTransition();
                index=i+1;
                goslide();
                beActive(this);
            }
        }
        );
        var btn_prev=slide.getElementsByClassName( "prev_btn")[0];
        btn_prev.onclick=function() {
            closeAutoSlide();
            openTransition();
            index--;
            goslide();
            if(index<1) {
                index=conut;
                beActive(circles[index-1]);
                setTimeout(function() {
                    closeTransition();
                    goslide();
                }
                , 600)
            }
            else {
                beActive(circles[index-1]);
            }
        }
        var btn_next=slide.getElementsByClassName( "next_btn")[0];
        btn_next.onclick=function() {
            openTransition();
            index++;
            goslide();
            if(index>conut) {
                index=1;
                beActive(circles[index-1]);
                setTimeout(function() {
                    closeTransition();
                    goslide();
                }
                , 600)
            }
            else {
                beActive(circles[index-1]);
            }
        }
        openAutoSlide();
        function openAutoSlide() {
            if(Timer) {
                window.clearInterval(Timer);
            }
            Timer=setInterval(function() {
                beActive(circles[index-1]);
                btn_next.onclick();
            }
            , 3000)
        }
        function closeAutoSlide() {
            window.clearInterval(Timer);
            setTimeout(function() {
                openAutoSlide();
            }
            , 6000);
        }
        btn_next.onmousedown=function() {
            closeAutoSlide();
        }
        btn_prev.onmousedown=function() {
            closeAutoSlide();
        }
        function beActive(btn) {
            circle_btn.getElementsByClassName("active")[0].setAttribute("class", "");
            btn.setAttribute("class", "active");
        }
        function openTransition() {
            slideUl.style.transition="all .6s";
        }
        function closeTransition() {
            slideUl.style.transition="none";
        }
        function goslide() {
            slideUl.style.transform="translateX(-"+index*offset+"px)";
        }
        slideUl.style.width=slideLis.length*100+"%";
        var liWidth=100/slideLis.length+"%";
        for(var i=0;
        i <slideLis.length;
        i++) {
            slideLis[i].style.width=liWidth;
        }
        window.onresize=function() {
            closeTransition();
            offset=slide.clientWidth;
            goslide();
        }
    }
}

//视频播放器js
videojs.addLanguage('zh-CN', {
    "Play": "播放",
    "Pause": "暂停",
    "Current Time": "当前时间",
    "Duration": "时长",
    "Remaining Time": "剩余时间",
    "Stream Type": "媒体流类型",
    "LIVE": "直播",
    "Loaded": "加载完毕",
    "Progress": "进度",
    "Fullscreen": "全屏",
    "Non-Fullscreen": "退出全屏",
    "Mute": "静音",
    "Unmute": "取消静音",
    "Playback Rate": "播放速度",
    "Subtitles": "字幕",
    "subtitles off": "关闭字幕",
    "Captions": "内嵌字幕",
    "captions off": "关闭内嵌字幕",
    "Chapters": "节目段落",
    "Close Modal Dialog": "关闭弹窗",
    "Descriptions": "描述",
    "descriptions off": "关闭描述",
    "Audio Track": "音轨",
    "You aborted the media playback": "视频播放被终止",
    "A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
    "The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
    "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
    "No compatible source was found for this media.": "无法找到此视频兼容的源。",
    "The media is encrypted and we do not have the keys to decrypt it.": "视频已加密，无法解密。",
    "Play Video": "播放视频",
    "Close": "关闭",
    "Modal Window": "弹窗",
    "This is a modal window": "这是一个弹窗",
    "This modal can be closed by pressing the Escape key or activating the close button.": "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
    ", opens captions settings dialog": ", 开启标题设置弹窗",
    ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
    ", opens descriptions settings dialog": ", 开启描述设置弹窗",
    ", selected": ", 选择",
    "captions settings": "字幕设定",
    "Audio Player": "音频播放器",
    "Video Player": "视频播放器",
    "Replay": "重播",
    "Progress Bar": "进度小节",
    "Volume Level": "音量",
    "subtitles settings": "字幕设定",
    "descriptions settings": "描述设定",
    "Text": "文字",
    "White": "白",
    "Black": "黑",
    "Red": "红",
    "Green": "绿",
    "Blue": "蓝",
    "Yellow": "黄",
    "Magenta": "紫红",
    "Cyan": "青",
    "Background": "背景",
    "Window": "视窗",
    "Transparent": "透明",
    "Semi-Transparent": "半透明",
    "Opaque": "不透明",
    "Font Size": "字体尺寸",
    "Text Edge Style": "字体边缘样式",
    "None": "无",
    "Raised": "浮雕",
    "Depressed": "压低",
    "Uniform": "均匀",
    "Dropshadow": "下阴影",
    "Font Family": "字体库",
    "Proportional Sans-Serif": "比例无细体",
    "Monospace Sans-Serif": "单间隔无细体",
    "Proportional Serif": "比例细体",
    "Monospace Serif": "单间隔细体",
    "Casual": "舒适",
    "Script": "手写体",
    "Small Caps": "小型大写字体",
    "Reset": "重启",
    "restore all settings to the default values": "恢复全部设定至预设值",
    "Done": "完成",
    "Caption Settings Dialog": "字幕设定视窗",
    "Beginning of dialog window. Escape will cancel and close the window.": "开始对话视窗。离开会取消及关闭视窗",
    "End of dialog window.": "结束对话视窗"
  });
  var myPlayer = videojs('my-video');
  videojs("my-video").ready(function(){
      var myPlayer = this;
      myPlayer.play();
  });




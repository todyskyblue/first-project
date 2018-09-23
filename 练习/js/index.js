$(function () {

    (function(){
        let $bg = $('#h-bg').find("p"),
            $tab = $("#h-tab .btn"),
            length = $bg.length,
            index = 0,
            timer = null;


        $tab.click(function () {
            if( $(this).index() === index ){
                return;
            }
            clearInterval(timer);
            auto();

            change(function () {
                index = $(this).index();
            }.bind(this));

        });


        auto();
        function auto() {
            timer = setInterval(() => {
                change(function () {
                    index ++;
                    index %= length;
                });
            }, 5000)
        }
        function change(fn) {
            fn();
            $bg.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
            $tab.eq(index).addClass("active").siblings().removeClass("active");
        }
    })();


    (function(){
        var $speakerList = $("#speaker .s-c-img ul");
        var length = data.length;

        (function(){
            let html = "";
            for (let i = 0; i < length; i++) {
                let d = data[i];
                html += `<li style='background-image: url("${d.src}");'>	
                            <div class="txt">
                                <h5>${d.name}</h5>
                                <p class='pos'>${d.title}</p>
                                <p class="summary">${d.dec}</p>
                            </div>
					    </li>`
            }
            $speakerList.append(html);
        })();

        (function(){
            var $btn = $("#speaker .s-c-arrow p");
            var index = 0;//初始最左边是第几张
            var eachWidth = $speakerList.find("li").outerWidth(true);
            var lastData = new Date();
            var maxIndex = length - 4;

            function btnToggle(index){
                var arr = [];
                if( index === 0 ){
                    arr = ["hide" , "show"];
                }else if(index === maxIndex){
                    arr = ["show" , "hide"];
                }else{
                    arr = ["show" , "show"];
                }
                $btn.eq(0)[arr[0]]();
                $btn.eq(1)[arr[1]]();
            }

            btnToggle(index);

            $btn.on("click",function () {
                if( new Date() - lastData  < 500) return;
                index += ($(this).index()?2:-2);
                index = Math.min(index , maxIndex);
                index = Math.max(index , 0);
                /*$speakerList.animate({
                    marginLeft : -index * eachWidth
                },500);*/
                $speakerList.css("margin-left" , -index * eachWidth+"px");
                btnToggle(index);
                lastData = new Date();
            });
        })();


    })();

    ;(function(){
        var $tab = $("#works .w-m-c-tab ul li"),
            $content = $("#works .w-m-c-works ul");

        $tab.click(function () {
            $content.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
            $(this).addClass('on').siblings().removeClass("on");
        });
    })();


















});




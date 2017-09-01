$.fn.seamlessRolling = function (option) {
    function mixinsAnimationFrame(type) {
        if (type === 'request') {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    var currTime = +new Date,
                        delay = Math.max(1000 / 60, 1000 / 60 - (currTime - lastTime));
                    lastTime = currTime + delay;
                    return setTimeout(callback, delay);
                };
        } else {
            return window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.webkitCancelRequestAnimationFrame ||
                window.mozCancelRequestAnimationFrame ||
                window.msCancelRequestAnimationFrame ||
                clearTimeout;
        }
    }

    function seamlessRolling($El, speed) {

        // 目标位置
        var $items = $El,
            target = $items.width();

        // clone 元素
        $items.html($items.html() + $items.html());

        var timer = null, scrollX = 0;

        function adAni() {
            timer = nextFrame(function () {
                scrollX += speed;
                if (scrollX >= target) {
                    scrollX = 0;
                }
                $items.scrollLeft(scrollX);
                adAni();
            });
        }

        adAni();
    }

    // 暂时没有处理取消动画的情况, 先留着 cancelFrame 备用
    var lastTime = 0, nextFrame = mixinsAnimationFrame('request'), cancelFrame = mixinsAnimationFrame();

    var _option = $.extend({
        speed: 2
    }, option);
    seamlessRolling(this, _option.speed);

    return this;
};
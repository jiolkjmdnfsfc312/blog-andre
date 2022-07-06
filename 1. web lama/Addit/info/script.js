(function () {
    $(document).ready(function () {
        var walkthrough;
        walkthrough = {
            index: 0,
            nextScreen: function () {
                if (this.index < this.indexMax()) {
                    this.index++;
                    return this.updateScreen();
                }
            },
            prevScreen: function () {
                if (this.index > 0) {
                    this.index--;
                    return this.updateScreen();
                }
            },
            updateScreen: function () {
                this.reset();
                this.goTo(this.index);
                return this.setBtns();
            },
            setBtns: function () {
                var $lastBtn, $nextBtn, $prevBtn;
                $nextBtn = $('.next-screen');
                $prevBtn = $('.prev-screen');
                $lastBtn = $('.finish');
                if (walkthrough.index === walkthrough.indexMax()) {
                    $nextBtn.prop('disabled', true);
                    $prevBtn.prop('disabled', false);
                    return $lastBtn.addClass('active').prop('disabled', false);
                } else if (walkthrough.index === 0) {
                    $nextBtn.prop('disabled', false);
                    return $prevBtn.prop('disabled', true);
                } else {
                    $nextBtn.prop('disabled', false);
                    $prevBtn.prop('disabled', false);
                    return $lastBtn.removeClass('active').prop('disabled', true);
                }
            },
            goTo: function (index) {
                $('.screen').eq(index).addClass('active');
                return $('.dot').eq(index).addClass('active');
            },
            reset: function () {
                return $('.screen, .dot').removeClass('active');
            },
            indexMax: function () {
                return $('.screen').length - 1;
            },
            closeModal: function () {
                $('.walkthrough, .shade').removeClass('reveal');
                return setTimeout(function (_this) {
                    return function () {
                        $('.walkthrough, .shade').removeClass('show');
                        _this.index = 0;
                        return _this.updateScreen();
                    };
                }(this), 200);
            },
            openModal: function () {
                $('.walkthrough, .shade').addClass('show');
                setTimeout(function (_this) {
                    return function () {
                        return $('.walkthrough, .shade').addClass('reveal');
                    };
                }(this), 200);
                return this.updateScreen();
            }
        };
        $('.next-screen').click(function () {
            return walkthrough.nextScreen();
        });
        $('.prev-screen').click(function () {
            return walkthrough.prevScreen();
        });
        $('.close').click(function () {
            return walkthrough.closeModal();
        });
        $('.open-walkthrough').click(function () {
            return walkthrough.openModal();
        });
        walkthrough.openModal();
        return $(document).keydown(function (e) {
            switch (e.which) {
            case 37:
                walkthrough.prevScreen();
                break;
            case 38:
                walkthrough.openModal();
                break;
            case 39:
                walkthrough.nextScreen();
                break;
            case 40:
                walkthrough.closeModal();
                break;
            default:
                return;
            }
            e.preventDefault();
        });
    });
}.call(this));

var helpButton = document.getElementsByClassName('help')[0];

helpButton.onclick = function() {
  var el = document.getElementsByClassName('help-modal')[0];
  el.className = 'help-modal';
  document.getElementsByClassName('close')[0].className = 'close';
};

document.getElementsByClassName('mailHelp')[0].onclick = function() {
            window.androidPort.requestBrowserIntent(''
                    + 'mailto:geosnap@cxdeberry.com?subject=GeoSnap%20settings%20help'
                    + '&body=' + 'My%20problem%20is%20that:' + ' '  + '%0A%0A'
                    + 'Instagram%20:' + '  ' + '%0A');
};

document.getElementsByClassName('close')[0].onclick = function() {
		document.getElementsByClassName('close')[0].className = 'close hidden';
		document.getElementsByClassName('help-modal')[0].className = 'help-modal hidden';
};

document.getElementsByClassName('escort')[0].onclick = function() {
	window.androidPort.requestEscortMock();
};
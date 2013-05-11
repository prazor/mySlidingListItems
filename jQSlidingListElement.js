/*
Copyright (c) 2013 Zoran Pranjic
Released under the Creative Commons Attribution 3.0 Unported License.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE. 
*/

(function($) {
    $.fn.slideMyList = function(options){
		var settings = $.extend({
			'bgColor'	: '#eee',
			'txtColor'	: '#09f',
			'border'	: 'none',
			'size'		: 30,
			'expWidth'	: 200,
			'float'		: 'none',
			'font'		: '10px Verdana, Arial, sans-serif',
			'margin'	: 0
		}, options );

		$(this).children('li').css({
			margin: settings.margin + 'px',
			'list-style': 'none',
			padding: '10px 5px 5px 10px', 
			width: settings.size + 'px',
			height:  settings.size + 'px',
			background: settings.bgColor,
			border: settings.border,
			float: settings.float
		});
		$(this).find('span').css({
			font: settings.font,
			width: settings.expWidth - 50 + 'px',
			height: settings.size + 5 + 'px',
			position: 'absolute',
			padding: '0px 5px 5px',
			display: 'none',
			'line-height': '110%',
			color: settings.txtColor
		});
		
		function expand(evt, element) {
			var img		= $(element).find('img').attr('src');
			var imgName	= img.split('.')[0];
			var imgExt	= img.split('.')[1];
			$(element).find('img').attr({ src: imgName + '-hover.' + imgExt });
			$(element).animate({ width: settings.expWidth + 'px' }, { queue: false, duration: 'normal'} );
			$(element).find('span').css({ display: 'inline' }).animate({ opacity: 'show' }, 'fast');
		}
		function reduce(evt, element) {
			var img		= $(element).find('img').attr('src');
			var imgName	= img.split('-hover.')[0];
			var imgExt	= img.split('-hover.')[1];
			$(element).find('img').attr({ src: imgName + '.' + imgExt });			
			$(element).animate({ width: settings.size + 'px' }, { queue: false, duration: 'normal' } );
			$(element).find('span').animate({ opacity: 'hide' }, 'fast');
		}
		
		$(this).children('li').bind({
            mouseenter: function(evt){
                expand(evt, this);
            },
            mouseleave: function(evt){
                reduce(evt, this);
            }
        });
		return this;
	};
})(jQuery);

/**
* Shoelace Javascript file
* @author Matt Carter <m@ttcarter.com>
*/
$(function() {

/* data-tip {{{ */
$('[data-tip]').each(function() {
	settings = {title: $(this).data('tip')};
	if ($(this).data('tip-placement'))
		settings['placement'] = $(this).data('tip-placement');
	$(this).tooltip(settings);
});
/* }}} */

});

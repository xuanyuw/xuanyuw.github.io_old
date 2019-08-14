function clearHoverDetail() {
	$('#hover-detail').text('').removeClass('fadeInUp')
}

$('.data').hover(hoverHandlerIn('(Not) Nerdy Data Science'), clearHoverDetail)
$('.brain').hover(hoverHandlerIn('Yummy Brains'), clearHoverDetail)
$('.fun').hover(hoverHandlerIn('Random Stuff'), clearHoverDetail)
$('.github').hover(hoverHandlerIn('Find Everything Here'), clearHoverDetail)

function hoverHandlerIn(detailText) {
	return () => {
		$('#hover-detail').text(detailText).addClass('fadeInUp')
	}
}
$(function () {
	//toggle button
	$('.btn').on("click", function () {
		$('.btn').toggleClass('btnc');
		$('.sidebar').toggleClass('side');
	});

	$("#red").click(function () {
		$('body').css('background', 'tomato');
	});

	$('#blue').click(
		function () {
			$('body').css('background', 'skyblue');
		}
	)

	$('#green').click(
		function () {
			$('body').css('background', 'lightgreen');
		}
	)
});

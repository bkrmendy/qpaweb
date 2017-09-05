$(document).ready(function(){
	$(".content__element").click(function(){
		let $this = $(this);
		let classes = this.className.split(' ');
		let height_of_item = parseInt($this.css("height"), 10);	
		let text_of_item = $this.children().eq(1);
		let height_of_text = parseInt(text_of_item.css("height"), 10);
		let new_height = height_of_item + height_of_text;

		if(!$this.hasClass("opened")){
			$(".content__element").removeClass("opened");
			$(".content__element").css("max-height", 100);
			$this.addClass("opened");
			$this.css("max-height", new_height);
		}
		else if($this.hasClass("opened")){
			$(".content__element").removeClass("opened");
			$(".content__element").css("max-height", 100);
		}
	});

	$(".menu__opener").click(function(){
		$(".menu").addClass("opened");
	});

	$(".menu__element").click(function(){
		$(".menu").removeClass("opened");
	});

	$("#scene").parallax();
});
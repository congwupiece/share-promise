function rGo(){
	var dtd = $.Deferred();
	$(".r").animate({"left":"1000px"},1000,function(){
		dtd.resolve();
	});
	return dtd.promise();
}

function gGo(){
	var dtd = $.Deferred();
	$(".g").animate({"left":"1000px"},1000,function(){
		dtd.resolve();
	});
	return dtd.promise();
}}
function g0Go(){
	var dtd = $.Deferred();
	$(".g0").animate({"left":"1000px"},1000,function(){
		dtd.resolve();
	});
	return dtd.promise();
}
function g1Go(){
	var dtd = $.Deferred();
	$(".g1").animate({"left":"1000px"},1000,function(){
		dtd.resolve();
	});
	return dtd.promise();
}
function g2Go(){
	var dtd = $.Deferred();
	$(".g2").animate({"left":"1000px"},1000,function(){
		dtd.resolve();
	});
	return dtd.promise();
}

function bGo(){
	var dtd = $.Deferred();
	$(".b").animate({"left":"1000px"},1000,function(){
		dtd.resolve();
	});
	return dtd.promise();
}
function pGo(){
	var dtd = $.Deferred();
	$(".p").animate({"left":"1000px"},1000,function(){
		dtd.resolve();
	});
	return dtd.promise();
}
function yGo(){
	var dtd = $.Deferred();
	$(".y").animate({"left":"1000px"},1000,function(){
		dtd.resolve();
	});
	return dtd.promise();
}

rGo()
.pipe(function(){
	return gGo();
})
.pipe(function(){
	return $.when(
		g0Go(),
		g1Go(),
		g2Go()
	);
})
.pipe(function(){
	return yGo();
})
.pipe(function(){
	return bGo();
})
.pipe(function(){
	return pGo();
});

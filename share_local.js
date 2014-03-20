function rGo(){
	var promise = new Promise(function(resolve, reject){
		$(".r").animate({"left":"1000px"},1000,function(){
			resolve();
		});
	});
	return promise;
}

function gGo(){
	var promise = new Promise(function(resolve, reject){
		$(".g").animate({"left":"1000px"},1000,function(){
			resolve();
		});
	});
	return promise;
}
function g0Go(){
	var promise = new Promise(function(resolve, reject){
		$(".g0").animate({"left":"1000px"},1000,function(){
			resolve();
		});
	});
	return promise;
}
function g1Go(){
	var promise = new Promise(function(resolve, reject){
		$(".g1").animate({"left":"1000px"},1000,function(){
			resolve();
		});
	});
	return promise;
}
function g2Go(){
	var promise = new Promise(function(resolve, reject){
		$(".g2").animate({"left":"1000px"},1000,function(){
			resolve();
		});
	});
	return promise;
}

function bGo(){
	var promise = new Promise(function(resolve, reject){
		$(".b").animate({"left":"1000px"},1000,function(){
			resolve();
		});
	});
	return promise;
}
function pGo(){
	var promise = new Promise(function(resolve, reject){
		$(".p").animate({"left":"1000px"},1000,function(){
			resolve();
		});
	});
	return promise;
}
function yGo(){
	var promise = new Promise(function(resolve, reject){
		$(".y").animate({"left":"1000px"},1000,function(){
			resolve();
		});
	});
	return promise;
}

rGo()
.then(function(){
	return gGo();
})
.then(function(){
	return Promise.all(
		[g0Go(),
		g1Go(),
		g2Go()]
	);
})
.then(function(){
	return yGo();
})
.then(function(){
	return bGo();
})
.then(function(){
	return pGo();
});

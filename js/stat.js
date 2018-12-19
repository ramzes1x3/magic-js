'use strict'

// statistics
window.renderStatistics = function (ctx,names,times) {

	// canvas
	var endShadow = 610;
	ctx.beginPath();
	ctx.moveTo(150,10);
	ctx.lineTo(endShadow,10);
	ctx.bezierCurveTo(endShadow,10, 510,100, 620,210);
	ctx.lineTo(endShadow,210);
	ctx.lineTo(150,210);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7';
	ctx.fill();

	var endCloud = 600;
	ctx.beginPath();
	ctx.moveTo(150,10);
	ctx.lineTo(endCloud,10);
	ctx.bezierCurveTo(endCloud,10, 500,95, endCloud,200);
	ctx.lineTo(endCloud,200);
	ctx.lineTo(150,200);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle = 'white';
	ctx.fill();
	// canvas

// text
	ctx.fillStyle = 'black';
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура вы победили!', 160,30);
	ctx.fillText('Список результатов:',160,50);
// text


// worst player
	var max = -1;
	var maxIndex = -1;
	for (var i = 0; i < times.length; i++) {
	var time = times[i];
	if(time > max){
		max = time;
		maxIndex = i;
	}
}
ctx.fillText('Худшее время: '+ Math.round(max) + 'мс',160,155);
ctx.fillText('У игрока ' + names[maxIndex],160,175);
// worst player


// histogram
	var histogramHeight = 150;
	var step = histogramHeight / (max - 0);
	var widthResultColumn = 30;
	var indent = 50;
	var initialX = 370;
	var initialY = 10;
	var column;

	for(var j = 0; j < times.length; j++){
		var name = names[j];
		if(name == "Вы") {
			ctx.fillStyle = 'black';
			ctx.fillText(names[j],initialX + indent * j,initialY + 15 + step * times[j]);
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
			ctx.fillRect(initialX + indent * j,initialY,widthResultColumn,step * times[j]);
		}else {
			ctx.fillStyle = 'black';
			ctx.fillText(names[j],initialX + indent * j,initialY + 15 + step * times[j]);
			ctx.fillStyle = `rgba(0, 0, 255, ${Math.random().toFixed(2)})`;
			ctx.fillRect(initialX + indent * j,initialY,widthResultColumn,step * times[j]);
		}
	};
// histogram

};
// statistics

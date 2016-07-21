"use strict";

window.onload = function (){
	offWork(8, 19, 30);
}
var canClick = true;

function offWork(startHour, endHour, minutes){
	var timer = null,
		startTime = startHour||8,
		endTime = endHour||21,
		randMinute = minutes||30,
		clickBtn = document.getElementById('clockIn'),
		shandow = document.querySelector('.window-shadow'),
		mark = document.querySelector('.window-mask'),
		popPanel = document.querySelector('.messager-window'),
		randMinute = 0+parseInt(Math.random()*15, 10);
	timer = setInterval(function (){
		var _curTime = new Date(),
			_curHour = _curTime.getHours(),
			_curMinite = _curTime.getMinutes(),
			_day = _curTime.getDay();
			
		console.log(_curHour, _curMinite,randMinute);
		if(_day == 0 || _day == 6){
			console.log('今天休息！')
			return;
		}
		// 上班打卡
		if( _curHour === startTime && _curMinite>= randMinute && canClick ){
			canClick = false;
			clickBtn&&clickBtn.click();
			// 保存到localstorage 中
			window.localStorage.setItem('start', _curHour+':'+randMinute)
			resetBtn(true);
			setTimeout(function (){
				shandow = document.querySelector('.window-shadow'),
				mark = document.querySelector('.window-mask'),
				popPanel = document.querySelector('.messager-window')

				shandow.remove()
				mark.remove()
				popPanel.remove()
			}, 3000)
			//window.history.go(-1)
			
		}else if( _curHour === endTime && _curMinite>= randMinute && canClick ){
			// 下班打卡
			canClick = false;
			clickBtn&&clickBtn.click();
			// 保存到localstorage 中
			window.localStorage.setItem('end', _curHour+':'+randMinute)
			resetBtn(false);
			setTimeout(function (){
				shandow = document.querySelector('.window-shadow'),
				mark = document.querySelector('.window-mask'),
				popPanel = document.querySelector('.messager-window')

				shandow.remove()
				mark.remove()
				popPanel.remove()
			}, 3000)
			
		}else{
			console.log('work or rest...')
		}
	}, 1000*30)

	// 重置canClick 
	function  resetBtn(isStart){
		var timer = null;
		var min = isStart?0:30;
		randMinute = min+parseInt(Math.random()*15, 10);
		timer = setTimeout(function (){
			canClick = true;
		}, 1000*60*60)
	}
}
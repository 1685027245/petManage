/* 饼状图 */
$(function(){
	var config = {
		type: 'pie',
		data: {
			datasets: [{
				data: [
					10,20,40,20,10
				],
				backgroundColor: [
					window.chartColors.red,
					window.chartColors.orange,
					window.chartColors.yellow,
					window.chartColors.green,
					window.chartColors.blue,
				],
				label: 'Dataset 1'
			}],
			labels: [
				'Red',
				'Orange',
				'Yellow',
				'Green',
				'Blue'
			]
		},
		options: {
			responsive: true,
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Doughnut Chart'
			},
			animation: {
				animateScale: true,
				animateRotate: true
			}
		}
	};
	
	var ctx = document.getElementById('pie-chart').getContext('2d');
	window.myPie = new Chart(ctx, config);
	
	
	var config2 = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [
					10,20,40,20,10
				],
				backgroundColor: [
					window.chartColors.red,
					window.chartColors.orange,
					window.chartColors.yellow,
					window.chartColors.green,
					window.chartColors.blue,
				],
				label: 'Dataset 1'
			}],
			labels: [
				'Red',
				'Orange',
				'Yellow',
				'Green',
				'Blue'
			]
		},
		options: {
			responsive: true,
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: 'Chart.js Doughnut Chart'
			},
			animation: {
				animateScale: true,
				animateRotate: true
			}
		}
	};
	
	var ctx = document.getElementById('pie-chart2').getContext('2d');
	window.myDoughnut = new Chart(ctx, config2);
})
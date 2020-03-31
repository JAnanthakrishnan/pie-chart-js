const pizza_input = document.querySelector('.pizza-input');
const steak_input = document.querySelector('.steak-input');
const hamburger_input = document.querySelector('.Hamburger-input');

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type : 'pie',
    data: {
        labels: ['Pizza','Steak','Hamburger'],
        datasets:[
            {
                label: '# of Votes',
                data: [10,10,10],
                backgroundColor: ['#E4572E','#17BEBB','#FFC914'],
                borderwidth: 1
            }
        ]
    }
});
const updateChartValue = (input,dataOrder) => {
    input.addEventListener('change', (e) => {
        myChart.data.datasets[0].data[dataOrder] = e.target.value;
        myChart.update();
    });
};
updateChartValue(pizza_input,0);
updateChartValue(steak_input,1);
updateChartValue(hamburger_input,2);
//updateChartValue(hamburger_input,2);
const button = document.querySelector('.btn');
button.addEventListener('click',(e)=>{
    pizza_input.value='';
    steak_input.value='';
    hamburger_input.value='';
})


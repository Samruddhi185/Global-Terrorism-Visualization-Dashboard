
function onYearButtonClicked(event) {
    document.getElementById("btn1").className = 'btn btn-secondary btn-lg';
    document.getElementById("btn2").className = 'btn btn-secondary btn-lg';
    document.getElementById("btn3").className = 'btn btn-secondary btn-lg';
    document.getElementById("btn4").className = 'btn btn-secondary btn-lg';
    document.getElementById("btn5").className = 'btn btn-secondary btn-lg';
    var year = Number(event.textContent.substring(0, 4))
    event.className = 'btn btn-primary active btn-danger btn-lg';
    world_map(year);
    pcp(country_name, year);
    wc(country_name, year);
    pieChart(country_name, year);
    create_chart(country_name, year);
}

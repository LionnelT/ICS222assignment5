function zebraEffect() {
    let rows = document.querySelectorAll('table tr:nth-child(odd)');
    rows.forEach((row) => {
        row.classList.add('zebraStripe');
    });   
}

function RemovezebraEffect() {
    let rows = document.querySelectorAll('table tr:nth-child(odd)');
    rows.forEach((row) => {
        row.classList.remove('zebraStripe');
    });   
}
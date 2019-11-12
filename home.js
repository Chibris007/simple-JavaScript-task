
let daysOfTheWeek = 'tuesday';
 
let button = document.getElementById('showanswer');

button.addEventListener('click', function() {

    switch(daysOfTheWeek) {
        case 'monday':
                document.getElementById('daysOfTheWeek').innerHTML = " Today is Monday";
                   break;

        case 'tuesday':
                document.getElementById('daysOfTheWeek').innerHTML = "Today is Tuesday";
                    break;
                    
        case 'wednesday':
                document.getElementById('daysOfTheWeek').innerHTML = "Today is Wednesday";
                    break; 

        case 'thursday':
                document.getElementById('daysOfTheWeek').innerHTML = "Today is Thursday";
                    break;

        case 'friday':
                document.getElementById('daysOfTheWeek').innerHTML = "Today is Friday";
                    break;
            
        case 'saturday':
                document.getElementById('daysOfTheWeek').innerHTML = "Today is Saturday";
                    break;

        case 'sunday':
                document.getElementById('daysOfTheWeek').innerHTML = "Today is Sunday";
                    break;

            default:
                document.getElementById('daysOfTheWeek').innerHTML = " Dev Chibris, Please kindly enter a correct Day!";
                    break;

    }
})
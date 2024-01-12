const endDate = "12 March 2023 11:59 PM";
document.getElementById('end-date').innerHTML = endDate;
const inputs = document.querySelectorAll("input")

// const clock = () => {

// }

function clock(){
 const end = new Date(endDate);
 const now = new Date();
 console.log(end , now);
// let diff = (end - now); // result in mili seconds
 const diff = (end - now) / 1000; // result in seconds
//  console.log(diff);
 // convert into days

 if (diff < 0) return;
 inputs[0].value = (Math.floor(diff / 3600  / 24));
 inputs[1].value = (Math.floor(diff / 3600) % 24);
 inputs[2].value = (Math.floor(diff / 60) % 60 );
 inputs[3].value = (Math.floor(diff) % 60 );
}
clock();


/*
 1 day = 24 hrs
 1 hr = 60 mins
 60 mins = 3600 sec


*/

setInterval(
    () => {
        clock()
    },
    1000
)
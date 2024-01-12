
var rect = document.querySelector("#center");

//Throttling Function
const throttleFunction = (func, delay)=>{
    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference between previously 
        // called and current called timings
        // console.log(now-prev, delay);

        // If the difference is greater than delay call
        // the function again.
        if(now - prev > delay){
            prev = now;

            // "..." is the spread operator here
            // returning the function with the
            // array of arguments
            return func(...args);
        }
    }
}
rect.addEventListener("mousemove", throttleFunction((dets)=>{
//    your less repeatation code 
var div =  document.createElement("div");
div.classList.add('imagediv');
div.style.left = dets.clientX + 'px';
div.style.top = dets.clientY + 'px';

var img =  document.createElement("img");
img.setAttribute("src","https://images.unsplash.com/photo-1702355864508-3f4e6d4e9401?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
div.appendChild(img);


document.body.appendChild(div);


gsap.to(img,{
y: "0",
ease: Power3,
duration: .6,
});
gsap.to(img,{
y: "100%",
delay: .6,
ease: Power2,
duration: .2,
});

setTimeout(() => {
div.remove();
}, 2000);

}, 500));

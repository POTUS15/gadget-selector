// console.error('This is an error')
// console.warn('This is a warning')
// let age= 20;
// console.log(age);
// const year=2020;
// console.log(year);
let choice=1;
let result=0;
var iOS=0;
document.getElementById('B3').style.display="none";
document.getElementById('B4').style.display="none";
document.getElementById('B5').style.display="none";




function iOS_decide(){
    if (choice==4){
        iOS=1;
        console.log("iOS detected "+iOS);
    }
    myFunction();
}




document.getElementById('B1').addEventListener("click",function() {
    if(iOS==1&&choice==6){
        result=(result*10)+5;
        console.log(result);
    }
    else{
        result=(result*10)+1;
        console.log(result);
    }
})

document.getElementById('B2').addEventListener("click",function() {
    result=(result*10)+2;
    console.log(result);
})

document.getElementById('B3').addEventListener("click",function() {
    result=(result*10)+3;
    console.log(result);
})

document.getElementById('B4').addEventListener("click",function() {
    result=(result*10)+4;
    console.log(result);
})

document.getElementById('B5').addEventListener("click",function() {
    result=(result*10)+5;
    console.log(result);
})











function myFunction(){

    if(choice==1){

        document.getElementById('B1').innerHTML="Professional Shots";
        document.getElementById('B4').innerHTML="Mostly for selfies";
        document.getElementById('B2').innerHTML="Just normal clicks";
        document.getElementById('question').innerHTML="How do you mostly use the camera?";
        document.getElementById('B3').style.display="none";
        document.getElementById('B4').style.display="block";
        document.getElementById('B5').style.display="none";
        choice=2;

    }
    else if(choice==2 ){
        document.getElementById('B1').innerHTML="Greater than 64GB";
        document.getElementById('B2').innerHTML=" Upto 64GB";
        document.getElementById('question').innerHTML="What is your storage requirement?";
        document.getElementById('B3').style.display="none";
        document.getElementById('B4').style.display="none";
        document.getElementById('B5').style.display="none";
        choice=3;
    }
    else if(choice==3 ){
        document.getElementById('B1').innerHTML="iOS";
        document.getElementById('B2').innerHTML="Android";
        document.getElementById('B4').innerHTML="Doesn't Matter";
        document.getElementById('question').innerHTML="Which Operating system would you prefer?";
        document.getElementById('B3').style.display="none";
        document.getElementById('B4').style.display="block";
        document.getElementById('B5').style.display="none";
        choice=4;
    }
    else if(choice==4&&iOS==0){
        console.log("HERE1 "+"Android "+iOS);
        document.getElementById('question').innerHTML="What price range are you looking at?";
        document.getElementById('B1').innerHTML="Upto ₹15,000";
        document.getElementById('B3').innerHTML="₹15,000 - ₹25,000";
        document.getElementById('B4').innerHTML="₹25,000 - ₹40,000";
        document.getElementById('B5').innerHTML="₹40,000 - ₹60,000";
        document.getElementById('B2').innerHTML="₹60,000 and above";
        document.getElementById('B3').style.display="block";
        document.getElementById('B4').style.display="block";
        document.getElementById('B5').style.display="block";
        choice=5;
    }
    else if(choice==4&&iOS==1){
        console.log("HERE "+"iOS "+iOS);
        document.getElementById('question').innerHTML="What price range are you looking at?";
        document.getElementById('B1').innerHTML="₹40,000 - ₹60,000";
        document.getElementById('B3').innerHTML="₹15,000 - ₹25,000";
        document.getElementById('B4').innerHTML="₹25,000 - ₹40,000";
        document.getElementById('B5').innerHTML="₹40,000 - ₹60,000";
        document.getElementById('B2').innerHTML="₹60,000 and above";
        document.getElementById('B1').style.display="block";
        document.getElementById('B3').style.display="none";
        document.getElementById('B4').style.display="none";
        document.getElementById('B5').style.display="none";
        document.getElementById('B2').style.display="block";

        choice=5;
    }
    else if(choice==5){
        document.getElementById('question').innerHTML="Here's the perfect product for you!";
        document.getElementById('B3').style.display="none";
        document.getElementById('B1').style.display="none";
        document.getElementById('B5').style.display="none";
        document.getElementById('B2').style.display="none";
        document.getElementById('B4').style.display="block";
        document.getElementById('B4').innerHTML="Click to reveal!";
        choice=6;

    }
}





// Making Sure result is only 5 digits


document.getElementById('B1').addEventListener("click",function() {
    if(result>99999){
        result=Math.trunc(result/10);
        console.log(result);
    }
})
document.getElementById('B2').addEventListener("click",function() {
    if(result>99999){
        result=Math.trunc(result/10);
        console.log(result);
    }
})
document.getElementById('B3').addEventListener("click",function() {
    if(result>99999){
        result=Math.trunc(result/10);
        console.log(result);
    }
})
document.getElementById('B4').addEventListener("click",function() {
    if(result>99999){
        result=Math.trunc(result/10);
        console.log(result);
    }
})
document.getElementById('B5').addEventListener("click",function() {
    if(result>99999){
        result=Math.trunc(result/10);
        console.log(result);
    }
})





var link;

var d1,d2,d3,d4,d5,temp;

function digit_sep(){
    temp=result;
    console.log("temp"+temp);
    d5=temp%10;
    temp=Math.trunc(temp/10);
    d4=temp%10;
    temp=Math.trunc(temp/10);
    d3=temp%10;
    temp=Math.trunc(temp/10);
    d2=temp%10;
    temp=Math.trunc(temp/10);
    d1=temp%10;
    temp=Math.trunc(temp/10);

}











function link_get(){
    if(d5==1){                                //Under 15,000
        if(d1==1){                                    //Gaming
            link="https://amzn.to/3hHiu4F";                 // Redmi Note 9 Pro
        }
        if(d1==2){                                    //No Gaming
            link="https://amzn.to/3eZoeFe";                 // Galaxy M21
        }

    }


    else if(d5==3){                           //15,000-25,000
        if(d1==1){                                  //Gaming
            link="https://amzn.to/2DmHVK4";             //K20 pro
        }

        if(d1==2){                                  // Non Gaming
            if(d3==2){                                      //upto 64 GB
                link="https://amzn.to/30cqzrX";                 //M31
            }
            else if(d3==1){                                 //Greater than 64 GB
                link="https://amzn.to/30dvmK4";                  //M31s Change link on Aug 6
            }


        }


    }


    else if(d5==4){
        if(d1==1){                                  //Gaming
            link="https://amzn.to/3gr4RGJ";             //OP 7T
        }

        if(d1==2){                                  // Non Gaming
            link="https://amzn.to/3fhgbUa";             //OP Nord

        }

    }


    else if(d5==5){                                 //40,000-60,000
        if (d4==1){                     //Apple
            if (d3==1){
                link="http://fkrt.it/pmGvQ_uuuN";         //iPhone SE 128GB
            }
            else if(d3==2){
                link="http://fkrt.it/3UbA!QNNNN";         //iPhone XR 64GB
            }

        }

        else{
            if(d1==1){                                  //Gaming
            link="http://fkrt.it/oRm3c_uuuN";             //ROG phone 3
             }

            if(d1==2){                                  // Non Gaming
            link="https://amzn.to/3hLFU8Q";             //OP 8 Pro
            }
        }


    }


    else if(d5==2){                                    //60,000+
        if (d4==1){                                       //Apple
            if (d1==1){                                     //Gaming
                if(d3==2){                                      //upto 64 GB
                    link="https://amzn.to/3f8ur1y";                 //iPhone 11 pro 64
                }
                else if(d3==1){                                 //Greater than 64 GB
                    link="https://amzn.to/2D1XbvW";                 //iPhone 11 pro 256
                }
            }
            else if(d1==2){                                 //Not much Gaming
                if(d3==2){                                      //upto 64 GB
                    link="https://amzn.to/2DhL2Tl";                 //iPhone 11 64 GB
                }
                else if(d3==1){                                 //Greater than 64 GB
                    link="https://amzn.to/3fedEtV";                 //iPhone 11 128GB
                }

            }

        }

        else if(d4==2){                                   //Android
            if(d1==1){                                       //Gaming
            link="https://amzn.to/2DeA29j";                      //S20 ultra
             }

            else if(d1==2){                                      // Non Gaming
            link="https://amzn.to/2DgFbxN";                      //S20
            }
        }

        else if(d4==4){                                   //Any OS
            if(d1==1){                                       //Gaming
                link="https://amzn.to/2DeA29j";                      //S20 ultra
             }
             else if(d1==2){                                 //Not much Gaming
                if(d3==2){                                      //upto 64 GB
                    link="https://amzn.to/2DhL2Tl";                 //iPhone 11 64 GB
                }
                else if(d3==1){                                 //Greater than 64 GB
                    link="https://amzn.to/3fedEtV";                 //iPhone 11 128GB
                }

            }

        }


    }

}






// Link to the product will be given here


document.getElementById('B4').addEventListener("click",function() {
    if(choice==6){
        digit_sep();
        link_get();
        window.open(link,"_blank")
        console.log(link);
    }
})

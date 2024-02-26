
 function sendOTP(){
    const email = document.getElementById('email');
   
    const otpverify = document.getElementsByClassName('otpverify')[0];

   
    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>Account Verification code </h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        SecureToken : "5226bb3e-014b-40f1-aaff-b642bb6c8e945",
        To : email.value, 
        From : "rockoh1789@gmail.com",
        Subject : "Verification code",
        Body : emailbody
    }).then(
        //if success it returns "OK";
      message => {
        if(message === "OK"){
            document.getElementById('indicate').innerHTML="OTP sent to your email";
            document.getElementById('indicate').style.color='blue';
            
            

            // now making otp input visible
            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp_btn');

            otp_btn.addEventListener('click',()=>{
                // now check whether sent email is valid
                if(otp_inp.value == otp_val){
                    
            document.getElementById('welcomeMessage').innerText = "Hello " + email.value;
            document.getElementById('main').style.display = "none";
            document.getElementById('homePage').style.display = "block";
                }
                else{
                    document.getElementById('msg').innerHTML="Invalid OTP"
                }
            })
        }
      }
    );
    
}
function logout() {
             // Reset form fields
            //  document.getElementById('loginForm').reset();
            document.getElementById('homePage').style.display = "none";
            document.getElementById('main').style.display = "block";
            document.getElementById('email').value=''
            document.getElementById('otp_inp').value=''



}

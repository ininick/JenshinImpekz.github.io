//VALIDASI REGISTER

const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPassword2 = document.getElementById('password2');
const inputAge = document.getElementById('age');
const inputTerms = document.getElementById('terms');

const errortext = document.getElementById('error-msg1');
const submit = document.getElementById('btn-register');

submit.addEventListener("click",(event)=>{
    event.preventDefault();
    var errormsg = "";
    
    //validasi username -> minimal 4 karakter
    const username = inputUsername.value;
    if(username.length < 4){
        errormsg = "Username must be at least 4 characters!"
    }

    //validasi email -> harus ada @ dan diakhiri oleh .com (otomatis, minimal 6 character)
    let check1 = 0;
    const email = inputEmail.value;
    // console.log(email.charAt(email.length-1) + 'ini: '+ 'm');
    // console.log(email.length-2 + 'ini: '+ 'o');
    // console.log(email.length-3 + 'ini: '+ 'c');
    // console.log(email.length-4 + 'ini: '+ '.');
    if(email.length >= 6){
        if(email.includes("@")){
            if(email.charAt(email.length-1) == 'm' && email.charAt(email.length-2) == 'o'
                && email.charAt(email.length-3) == 'c' && email.charAt(email.length-4) == '.'){
                    check1 = 1;
            }
        }
    }
    if(check1 !=1){
        errormsg = "Email must be contains '@' and ended with '.com'!";
    }

    //validasi password -> 8 karakter, ada angka, tidak ada spasi
    let check = 0;
    const password = inputPassword.value;
    console.log(password);
    if(password.length >= 8){ //untuk panjang password (string)
        for(let i = 0; i < password.length; i++){ //untuk check per karakter
            if(password[i] >'0'|| password[i] < '9'){ //check apakah ada angka
                if(password[i] != ' '){ //check apakah ada spasi di pass
                    check = 1;
                }
            }
        }
    }
    if(check!=1){
        errormsg = "Password must be at least 8 characters, contains number, and do not contains space!"
    }

    //validasi confirm password, harus smaa dengan password, case = sensitive
    const password2 = inputPassword2.value;
    console.log("pass" + password2);
    if(password.localeCompare(password2)!=0){
        errormsg = "Confirm password must be same!";
    }

    //validasi umur, minimal 15 tahun
    const age = inputAge.value;
    if(age < 15){
        errormsg = "Minimum age is 15  years!";
    }
    //validasi checkbox -> harus udah di check
    if(inputTerms.checked != true){
        errormsg = "You must be agree with our Terms of Service and Privacy Policy!";
    }
    
    errortext.innerText = errormsg;
    console.log("Data Submitted.");
})
//VALIDASI LOGIN

const loginUsername = document.getElementById('usernamelog').value;
const loginPassword = document.getElementById('passwordlog').value;
const loginPassword2 = document.getElementById('passwordlog').value;

const errortext2 = document.getElementById('error-msg2');
const login = document.getElementById('btn-login');

login.addEventListener("click",(event)=>{ //validasi login , hanya username dan password
    event.preventDefault();
    var errormsg = "";
    if(username.length < 4){
        errormsg = "Username must be at least 4 characters!"
    }
    let check = 0;
    console.log(loginPassword);
    if(loginPassword.length >= 8){ //untuk panjang loginPassword (string)
        for(let i = 0; i < loginPassword.length; i++){ //untuk check per karakter
            if(loginPassword[i] >'0'|| loginPassword[i] < '9'){ //check apakah ada angka
                if(loginPassword[i] != ' '){ //check apakah ada spasi di pass
                    check = 1;
                }
            }
        }
    }
    if(check!=1){
        errormsg = "Password must be at least 8 characters, contains number, and do not contains space!"
    }
    console.log("pass" + loginPassword2);
    if(loginPassword.localeCompare(loginPassword2)!=0){
        errormsg = "Confirm password must be same!";
    }
    errortext2.innerText = errormsg;
})

//KLIK DARI NAV BAR
const loginnav = document.getElementById('loginnav');
const slide = document.getElementById('slides');
function slidetologin(){
    slide.style.marginLeft = "-100%";
}
loginnav.addEventListener("click",()=>{
    slidetologin();
})
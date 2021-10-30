const loginform=document.querySelector('#login_form');
console.log("12345");
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("credentialbhbbhbhbhshhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
    const email=loginform['loginemail'].value;
    const password=loginform['loginpassword'].value;
    console.log("credentialbhbbhbhbhs");
    auth.signInWithEmailAndPassword(email,password)
    .then(cred=>{
console.log(cred);
console.log("credentials");
if(cred.user) {
    window.location.href='./dashboard.html';
    console.log("vvvjgggggggggggggggggg");
  }
    })
})

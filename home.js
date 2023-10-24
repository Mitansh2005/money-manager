const account_page=document.querySelector('.inputs');
const total_page=document.querySelector('.Total');

const reason=document.querySelector('.reason');
const time=document.querySelector('.time');
const  amount=document.querySelector('.amount');


const submitBtn=document.querySelector('.submit');

account_page.addEventListener('click',()=>{
  document.location='home.html';
});
total_page.addEventListener('click',()=>{
  document.location='accounts.html';
});

submitBtn.addEventListener('click',()=>{
   const  reason_value=reason.value;
 const time_value=time.value;
 const  amount_value=amount.value;
        console.log(reason_value);
        console.log(time_value);
        console.log(amount_value);
        localStorage.setItem('reason_v',reason_value);
        localStorage.setItem('time_v',time_value);
        localStorage.setItem('amount_v',amount_value);
})


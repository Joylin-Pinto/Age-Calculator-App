var elements = document.getElementsByClassName('customNumberInput')
for(let i=0;i<elements.length;i++){
  elements[i].addEventListener('input',function(event){
this.value = this.value.replace(/\D/g, '');  
}) 
}
function handleonsubmit(event){
  event.preventDefault()
  let date = document.getElementById('date').value
  let month = document.getElementById('month').value
  let year = document.getElementById('year').value
  let err = document.getElementsByClassName('err-title')
  let resYear = document.getElementById('resultYears')
  let resMonth = document.getElementById('resultMonth')
  let resDate =document.getElementById('resultDate')
  let currDate = new Date()
  let C_date =  currDate.getDate()
  let C_month = currDate.getMonth()
  let C_year =  currDate.getFullYear()  
  let daysInMonth = getDaysInMonth(C_month, C_date)
  console.log(daysInMonth)
  if (date === "" || month === "" || year === "") {
    for (let i = 0; i < err.length; i++) {
      err[i].style.display = 'flex';
    }
    if (date !== "") {
      err[0].style.display = 'none';
    }
    if (month !== "") {
      err[1].style.display = 'none';
    }
    if (year !== "") {
      err[2].style.display = 'none';
    }
  } else {
    for (let i = 0; i < err.length; i++) {
      err[i].style.display = 'none';
    }
  }
  
  
 
  resYear.innerHTML= C_year-year 
  if(C_month>month){
  resMonth.innerHTML= C_month-month 
  }else{
    resMonth.innerHTML= month-C_month 
  }
  if(C_date>date){
    resDate.innerHTML= (C_date-date)
  }else{
    resDate.innerHTML= (30-date+C_date)
  }



}
function getDaysInMonth(d_month, d_year) {
  return new Date(d_year, d_month, 0).getDate();
}
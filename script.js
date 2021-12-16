'use-strict'

const form = document.querySelector('form')
const allInputs = form.querySelectorAll('input')
const nameInput = form.querySelector('#name')
const emailInput = form.querySelector('#email')
const phoneInput = form.querySelector('#phone')
const companyInput = form.querySelector('#company')
const messageArea = form.querySelector('#message')
const send = form.querySelector('#send')
const reset = form.querySelector('#reset')

// COLLECTING ALL INPUTS EXCEPT THE BUTTONS
const arrOfInputs = [
  nameInput,
  emailInput,
  phoneInput,
  companyInput,
  messageArea,
]

// ADD KEY UP EVENT ON PHONE INPUT
phoneInput.addEventListener('keyup', () => {
  if (phoneInput.value.length < 8 || phoneInput.value.length > 10) {
    phoneInput.style.color = 'red'
  } else {
    phoneInput.style.color = 'black'
  }
})

// ADD EVENT ON EMAIL INPUT TO CHECK VALIDITY
emailInput.addEventListener('keyup', () => {
  if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailInput.style.color = 'red'
  } else {
    emailInput.style.color = 'black'
  }
})

// RESETTING THE WHOLE FORM WHEN RESET BUTTON IS CLICKED
reset.addEventListener('click', (e) => {
  e.preventDefault()
  // LOOP OVER CREATED ARRAY OF INPUTS EXCEPT SUBMIT AND RESET
  arrOfInputs.forEach((input) => {
    input.value = '' //CLEAR ALL INPUT FIELD
    if (input.classList.contains('red-error')) {
      input.classList.remove('red-error') //REMOVE RED COLOR ON INPUTS
    }
    if (input.id === 'name') {
      input.placeholder = 'Name' // SET PLACEHOLDER TO INITIAL PLACEHOLDER
    }
    if (input.id === 'email') {
      input.placeholder = 'Email'
    }
    if (input.id === 'phone') {
      input.placeholder = 'Phone'
    }
    if (input.id === 'company') {
      input.placeholder = 'Company'
    }
    if (input.id === 'message') {
      input.placeholder = 'Your Message'
    }
  })
})

// SENDING DATA WHEN SEND BUTTON IS CLICKED
send.addEventListener('click', (e) => {
  e.preventDefault()
  arrOfInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('red-error') // ADD RED COLOR ON INPUT

      if (input.id === 'name') {
        input.placeholder = 'Write your name and surname' //SET NAME FIELD PLACEHOLDER
      }
      if (input.id === 'email') {
        input.placeholder = 'write an email (example@example.com)' //SET EMAIL FIELD PLACEHOLDER
      }
      if (input.id === 'phone') {
        input.placeholder = 'write your phone number' //SET PHONE FIELD PLACEHOLDER
      }
      if (input.id === 'company') {
        input.placeholder = 'write your company name' //SET COMPANY FIELD PLACEHOLDER
      }
      if (input.id === 'message') {
        input.placeholder = 'write your message' //SET MESSAGE FIELD PLACEHOLDER
      }
      return
    }
    //REMOVE THE RED COLOR ON INPUT
    else {
      if (input.classList.contains('red-error')) {
        input.classList.remove('red-error')
      }
    }
  })

  //CONSOLE THE DATA ADDED IN ANY INPUT

  // console.log(
  //   'Names:',
  //   nameInput.value,
  //   'Email:',
  //   emailInput.value,
  //   'Phone:',
  //   phoneInput.value,
  //   'Company:',
  //   companyInput.value,
  //   'Message:',
  //   messageArea.value
  // )
})

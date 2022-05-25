import {getTimer} from './timer.js'
import {getModal} from './modal.js'
import {sendForm} from './sendForm.js'
import {animation} from './animation.js'
let timer
timer = setInterval(()=>{getTimer(timer)},1000)
getModal()
sendForm()
const myImg = document.querySelector('.process__img')
const myImg1 = document.querySelector('.team__img')
animation(myImg)
animation(myImg1)
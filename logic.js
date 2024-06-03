//inserting the images
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pown' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
            else {
                image.innerHTML = `${image.innerText} <img class='all-img' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()

//Coloring the board

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(232 235 239)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(125 135 150)'
        }
    })
}
coloring()


//function to not remove the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'blue') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'greenyellow' && i2.innerText.length !== 0) {


                    greenyellowText = i2.innerText

                    blueText = i1.innerText

                    blueColor = ((Array.from(blueText)).shift()).toString()
                    greenyellowColor = ((Array.from(greenyellowText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(232 235 239)'
                    }
                    if (a % 2 !== 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(125 135 150)'
                    }

                }
            })
        }
    })
}

//reset button
document.getElementById("reset-btn").addEventListener("click", function () {
    location.reload();
});

//pause button
document.getElementById("pause-btn").addEventListener("click", function () {
    alert("Game has been Paused. Click on Resume to begin")
});

//resume button
document.getElementById("resume-btn").addEventListener("click", function () {
    alert("Game has been Resumed Again")
});


tog = 1

document.querySelectorAll('.box').forEach(item => {


    item.addEventListener('click', function () {

        if (item.style.backgroundColor == 'greenyellow' && item.innerText.length == 0) {
            tog = tog + 1
        }

        else if (item.style.backgroundColor == 'greenyellow' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'blue') {
                    blueId = i.id
                    blueText = i.innerText

                    document.getElementById(blueId).innerText = ''
                    item.innerText = blueText
                    coloring()
                    insertImage()
                    tog = tog + 1

                }
            })
        }



        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup

        //function to display the available paths for all pieces

        function whosTurn(toggle) {

            if (item.innerText == `${toggle}Semi-Ricochet-1`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow'
                }

                item.style.backgroundColor = 'blue'

            }

            if (item.innerText == `${toggle}Semi-Ricochet-2`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow'
                }

                item.style.backgroundColor = 'blue'

            }

            if (item.innerText == `${toggle}Cannon`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow'
                }

                item.style.backgroundColor = 'blue'

            }

            if (item.innerText == `${toggle}Titan`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow'
                }

                item.style.backgroundColor = 'blue'

            }

            if (item.innerText == `${toggle}Tank`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow'
                }

                item.style.backgroundColor = 'blue'

            }

            if (item.innerText == `${toggle}Richochet`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow'
                }

                item.style.backgroundColor = 'blue'

            }


        }

        // Toggling the turn

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "Red's Turn"
            whosTurn('R')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Blue's Turn"
            whosTurn('B')
        }

        reddish()



    })
})

// Moving the element
document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'blue') {

            blueId = hathiTest.id
            blueText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'greenyellow' && hathiTest2.innerText.length == 0) {
                        document.getElementById(blueId).innerText = ''
                        hathiTest2.innerText = blueText
                        coloring()
                        insertImage()

                    }

                })
            })

        }

    })

})




// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
  ee.addEventListener('click', function () {
      z = z + 1
      if (z % 2 == 0 && ee.style.backgroundColor !== 'greenyellow') {
          coloring()
      }
  })
})



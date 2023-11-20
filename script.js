const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = this.window.innerWidth


//This is to maintain everything even after resizing
window.addEventListener('resize',function(){
    canvas.height = window.innerHeight
    canvas.width = this.window.innerWidth

    constructEntireCanvas()
})

function drawHouse(){
    var x = 180
    var y = 80


    //First floor
    ctx.fillStyle = "#f9fdb7"
    ctx.fillRect(x+25,y,300,150)

    //Baricade
    ctx.fillStyle = "#c60000"
    ctx.fillRect(x-25,y+150,400,50)

    //Ground floor
    ctx.fillStyle = "#f9fdb7"
    ctx.fillRect(x,y+200,350,200)

    //Windows
    ctx.fillStyle = "#8B4513"
    ctx.fillRect(205,320,80,80)
    ctx.fillStyle = "white"
    ctx.fillRect(215,330,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(255,330,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(215,370,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(255,370,20,20)

    ctx.fillStyle = "#8B4513"
    ctx.fillRect(425,320,80,80)
    ctx.fillStyle = "white"
    ctx.fillRect(435,330,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(475,330,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(435,370,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(475,370,20,20)
    
    //Door
    ctx.fillStyle = '#c60000'
    ctx.beginPath()
    ctx.moveTo(310,480)
    ctx.lineTo(310,315)
    ctx.lineTo(400,315)
    ctx.lineTo(400,480)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc(380,400,5,0,Math.PI * 2)
    ctx.fill()
    
    ctx.fillStyle = "#8B4513"
    ctx.fillRect(315,320,80,160)

    //Knob
    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc(380,400,5,0,Math.PI * 2)
    ctx.fill()

    //windows for first floor
    ctx.fillStyle = "#8B4513"
    ctx.fillRect(240,120,80,80)
    ctx.fillStyle = "white"
    ctx.fillRect(250,130,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(290,130,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(250,170,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(290,170,20,20)

    ctx.fillStyle = "#8B4513"
    ctx.fillRect(390,120,80,80)
    ctx.fillStyle = "white"
    ctx.fillRect(400,130,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(440,130,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(400,170,20,20)
    ctx.fillStyle = "white"
    ctx.fillRect(440,170,20,20)

    //Roof
    ctx.fillStyle = "#8B4513"
    ctx.moveTo(x-40,y)
    ctx.lineTo(x+400,y)
    ctx.lineTo(x+160,y-60)
    ctx.closePath()
    ctx.fill()
}

function drawMan(){

    //Head
    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.arc(600,400,20,0,Math.PI * 2)
    ctx.closePath()
    ctx.fill()

    //Neck
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(600,420)
    ctx.lineTo(600,425)
    ctx.closePath()
    ctx.stroke()

    //Chest
    ctx.fillStyle = "black"
    ctx.fillRect(580,425,40,50)

    //Hands
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(585,435)
    ctx.lineTo(550,460)
    ctx.closePath()
    ctx.stroke()

    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(615,435)
    ctx.lineTo(650,460)
    ctx.closePath()
    ctx.stroke()

    //Legs
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(590,475)
    ctx.lineTo(590,510)
    ctx.closePath()
    ctx.stroke()

    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(610,475)
    ctx.lineTo(610,510)
    ctx.closePath()
    ctx.stroke()

    //Words on shirt
    ctx.font = '5px Arial'
    ctx.fillStyle = 'white'
    const text = 'TEAM VIEWER'
    const x = 583
    const y = 450

    ctx.fillText(text, x, y)

}

function drawCar(){

    ctx.fillStyle = "#FFD700"
    ctx.beginPath()
    ctx.moveTo(30,530)
    ctx.lineTo(30,480)
    ctx.lineTo(80,480)
    ctx.lineTo(100,430)
    ctx.lineTo(200,430)
    ctx.lineTo(220,480)
    ctx.lineTo(270,480)
    ctx.lineTo(270,530)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.moveTo(90,480)
    ctx.lineTo(105,435)
    ctx.lineTo(195,435)
    ctx.lineTo(210,480)
    ctx.closePath()
    ctx.fill()

    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.moveTo(150,480)
    ctx.lineTo(150,435)
    ctx.closePath()
    ctx.stroke()

    //tyres
    ctx.fillStyle = "black"
    ctx.strokeStyle = "white"
    ctx.beginPath()
    ctx.arc(80,530,25,0,Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = "black"
    ctx.strokeStyle = "white"
    ctx.beginPath()
    ctx.arc(220,530,25,0,Math.PI * 2)
    ctx.fill()
    ctx.stroke()
}

function drawTree(){
    var x = 0
    var y = 500
    var trunkWidth = 20
    var trunkHeight = 150

    
    ctx.fillStyle = "#8B4513"
    ctx.fillRect(x+70, y-200, trunkWidth, trunkHeight)

    ctx.fillStyle = 'green'
    ctx.beginPath()
    ctx.arc(80,250,55,0,Math.PI * 2)
    ctx.fill()
}

function ground(){
    var x = 0
    var y = 500

    //road
    ctx.fillStyle = "#6f6f6e"
    ctx.fillRect(x,y,1000,100)
    
    //lines in the road
    ctx.strokeStyle = "white"
    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x,y+50)
    ctx.lineTo(x+60,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+80,y+50)
    ctx.lineTo(x+140,y+50)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+160,y+50)
    ctx.lineTo(x+220,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+240,y+50)
    ctx.lineTo(x+300,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+320,y+50)
    ctx.lineTo(x+380,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+400,y+50)
    ctx.lineTo(x+460,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+480,y+50)
    ctx.lineTo(x+540,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+560,y+50)
    ctx.lineTo(x+620,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+640,y+50)
    ctx.lineTo(x+700,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+720,y+50)
    ctx.lineTo(x+780,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+800,y+50)
    ctx.lineTo(x+860,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+880,y+50)
    ctx.lineTo(x+940,y+50)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.moveTo(x+960,y+50)
    ctx.lineTo(x+1000,y+50)
    ctx.stroke()

    //Green Grass
    ctx.fillStyle = "green"
    ctx.fillRect(x,y-50,1000,50)
    
}


//To call all my functions as a bulk at once
function constructEntireCanvas(){
    ground()
    drawTree()
    drawHouse()
    drawCar()
    drawMan()

}


constructEntireCanvas()
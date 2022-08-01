function newImage(assets, left, bottom){
    let image = document.createElement('img')
    image.src = assets
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}




function newItem(assets, left, bottom){
    let item = document.createElement('img')
    item.src = assets
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}



function backdrop(assets, left, bottom, width, height) {
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            newImage(assets, left + j*100, bottom+i*100)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

backdrop('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
backdrop('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)




newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 350, 100)
newImage('assets/well.png', 500, 425) 

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

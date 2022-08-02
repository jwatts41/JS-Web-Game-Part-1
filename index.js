function newImage(assets, left, bottom){
    let image = document.createElement('img')
    image.src = assets
    document.body.append(image)
    return image
}

function move (image, left, bottom) {
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
}


function newItem(assets, left, bottom){
    let item = newImage(assets, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = assets
        inventory.append(inventoryItem)
    })
}

let inventory = document.createElement('div')
function newInventory(){
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
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



newInventory()
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 350, 100)
newImage('assets/well.png', 500, 425) 

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

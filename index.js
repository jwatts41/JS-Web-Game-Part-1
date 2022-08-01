function newImage(assets, left, bottom){
    let image = document.createElement('img')
    image.src = assets
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}


newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 350, 100)
newImage('assets/well.png', 500, 425) 

function newItem(assets, left, bottom)
    let image = newImage(assets, left, bottom)

    image.addEventListener('dblclick', () => {
        image.remove()
    })

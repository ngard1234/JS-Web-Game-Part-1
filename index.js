

function newImage(assestsrc, pos, leftpos, bottompos){
    let image = document.createElement('img')
    image.src = assestsrc
    image.id = assestsrc
    image.style.position = pos
    image.style.left = leftpos +'px'
    image.style.bottom = bottompos +'px'
    document.body.append(image)  
    return
    
}

function newItem(assestsrc, pos, leftpos, bottompos){

    newImage(assestsrc, pos, leftpos, bottompos);

    const img = document.getElementById(assestsrc)
      img.addEventListener('dblclick', function(){
        img.remove()
      })

      return
    }
    document.body.style.backgroundImage = "url('assets/grass.png')";
    document.body.style.backgroroundSize= '200px'
    document.body.style.backgroundImage.position= 'bottom'

    


    
     



newImage('assets/green-character.gif', 'fixed', '100', '100');
newImage('assets/pine-tree.png', 'fixed', '450', '200');
newImage('assets/tree.png', 'fixed', '200', '300');
newImage('assets/pillar.png', 'fixed', '350', '100');
newImage('assets/crate.png', 'fixed', '150', '200');
newImage('assets/well.png', 'fixed', '500', '425');

newItem('assets/sword.png', 'fixed', '500', '405');
newItem('assets/sheild.png', 'fixed', '165', '185');
newItem('assets/staff.png', 'fixed', '600', '100');




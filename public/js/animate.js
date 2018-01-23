/*   
    function hueGenerator(){

        var spiral = document.getElementsByClassName('drawnpath');
        
        for(var i = 0; i < spiral.length; i++){
            spiral[i].setAttribute("id", i);
            spiral[i] = document.getElementById(i);
            getWidth(spiral[i]);
            spiral[i].style.stroke = getColor();
        }
    };
    hueGenerator();

    function getColor(){

        var hue = 'rgb(' + (Math.floor((256-0)*Math.random()) + 0) + ',' + (Math.floor((256-0)*Math.random()) + 0) + ',' + (Math.floor((256-0)*Math.random()) + 0) + ')';
        return hue;
    }

    function getWidth(spiral){

        var Weight = (Math.floor(8-1)*Math.random() + 1) + 'px';
            spiral.setAttribute("style", "stroke-width: " + Weight + ";");
    }

    document.getElementById("path2").onclick = function() {

    var menu = document.getElementsByClassName('menu');
    
        for (var x = 0; x < menu.length; x++) {
            menu[x].setAttribute('class', 'menu hide');
        }
    this.style.fill ="none";
    }
*/


    var menuButton = document.getElementById("path2"),
        spiral = document.getElementsByClassName('drawnpath'),
        menu = document.getElementsByClassName('menu');
    
    function hueGenerator(){
        for(var i = 0; i < spiral.length; i++){
            spiral[i].setAttribute("id", i);
            spiral[i] = document.getElementById(i);
            getWidth(spiral[i]);
            spiral[i].style.stroke = getColor();
        }
    };
    hueGenerator();

    function getColor(){
        var hue = 'rgb(' + (Math.floor((256-0)*Math.random()) + 0) 
                    + ',' + (Math.floor((256-0)*Math.random()) + 0) + ','
                            + (Math.floor((256-0)*Math.random()) + 0) + ')';
        return hue;
    }

    function getWidth(spiral){
        var Weight = (Math.floor(8-1)*Math.random() + 1) + 'px';
            spiral.setAttribute("style", "stroke-width: " + Weight + ";");
    }

    function hideMenu() {
        console.log('it works');
        for (var x = 0; x < menu.length; x++) {
            menu[x].setAttribute('class', 'menu hide');
        }
        this.style.fill ="none";
    }
    menuButton.onclick = hideMenu;
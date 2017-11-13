(function () {
    let scene = new THREE.Scene();
    //ancho y el alto de la pantalla
    const aspectRatio = window.innerWidth / window.innerHeight;
    //
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
        camera.position.z = 60;
        camera.position.y = 10
    let loader = new THREE.TextureLoader();
    loader.load('public/textura.png', function (texture){
        var geometry = new THREE.SphereGeometry(10,32,32,0,6.3,90,1.8);
        var material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide //permite que se tenga la misma textura por dentro y fuera de la figura.
        }) 

        var taza1 = new THREE.Mesh(geometry,material);
        scene.add(taza1);
    })
    
  

    let pointLight = new THREE.PointLight(0x404040);
    
        pointLight.position.y = 60;
         pointLight.position.z = 20;

    scene.background = new THREE.Color(0x000000);    
    scene.add(new THREE.AmbientLight(0x404040));

    let controls = new THREE.OrbitControls(camera, renderer.domElement);
    function loop() {
        //ya es una animacion, por lo que ya se esta dibujando varias veces.
        //ciclo que permite ver el grafico dentro de la escena.
        requestAnimationFrame(loop);
            
        //console.log("new frame");
        renderer.render(scene, camera);

    }

    loop();
}) ();
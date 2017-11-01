(function () {
    let scene = new THREE.Scene();
    //ancho y el alto de la pantalla
    const aspectRatio = window.innerWidth / window.innerHeight;
    //
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    //busca el nodo padre y agrega lo que creamos al elemento.
    //domElement es un canvas.
    document.body.appendChild(renderer.domElement);

    camera.position.z = 60;
    camera.position.y = 15;
    let mesh;

    let planeGeometry = new THREE.PlaneGeometry(200,900);
    //makeRotatiion es para que el plano se redibuje una y otra vez.
    planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xfffffff
    });
    let plane = new THREE.Mesh(planeGeometry,groundMaterial);

    let loader = new THREE.TextureLoader();

    loader.load('public/map.jpg', function (texture) {
        let geometry = new THREE.SphereGeometry(10,50, 50)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh = new THREE.Mesh(geometry, material);

        mesh.position.y = 20;
        scene.add(mesh);
    })

    //alpha la estructura el mesh que se va a generar.
    //let geometry = new THREE.BoxGeometry(1,1,1,1);

    let geometrycircle = new THREE.CircleGeometry(1, 10);
    let materialCircle = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    let Circle = new THREE.Mesh(geometrycircle, materialCircle);


    /*1 = radio interno
    2 = radio externo 
    32 = numero de segmentos */
    let geomtetryring = new THREE.RingGeometry(1, 5, 32);
    let materialRing = new THREE.MeshPhongMaterial({
        color: 0xff0f0f,
        side: THREE.DoubleSide
    });
    let Ring = new THREE.Mesh(geomtetryring, materialRing);

    let geometrySphere = new THREE.SphereGeometry(5, 32, 32);
    let materialSphere = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
    let Sphere = new THREE.Mesh(geometrySphere, materialSphere);

    let geometryTriangle = new THREE.CircleGeometry(1, 1);
    let materialTriangle = new THREE.MeshPhongMaterial({ color: 0xfffff0 });
    let Triangle = new THREE.Mesh(geometryTriangle, materialTriangle);

    let geometryCone = new THREE.ConeGeometry(2.5, 3, 4);
    let materialCone = new THREE.MeshPhongMaterial({ color: "green" });
    let Cone = new THREE.Mesh(geometryCone, materialCone);

    let groundMaterial1 = new THREE.MeshPhongMaterial({
        color: 0xfffffff
    });

    //let mesh = new THREE.Mesh(geometry, groundMaterial);

    let pointLight = new THREE.PointLight(0x404040);

    pointLight.position.y = 80;

    //scene.add(mesh);
    scene.add(Circle);
    //scene.add(Ring);
    //scene.add(Sphere);
    //scene.add(Triangle);
    //scene.add(Cone);

    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);

    renderer.render(scene, camera);

    function loop() {
        //ya es una animacion, por lo que ya se esta dibujando varias veces.
        //ciclo que permite ver el grafico dentro de la escena.
        requestAnimationFrame(loop);
        //mesh.rotation.y += 0.01;
        //mesh.rotation.z += 0.01;

       
        //console.log("new frame");
        renderer.render(scene, camera);

    }

    loop();

})();
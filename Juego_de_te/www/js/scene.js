(function (){
    var camera, scene, renderer;
    var cameraControls;
    var effectController;
    var teapotSize = 400;
    var ambientLight, light;
    var tess = -1;	// force initialization
    var newTess = 15;
    var bottom = true,
    lid = true;
    var newShading="glossy";
    var body=true;
    var fitLid=false;
    var nonblinn=false;
    var bBottom ;
    var bLid;
    var bBody;
    var bFitLid;
    var bNonBlinn;
    var shading;
    var wireMaterial, flatMaterial, gouraudMaterial, phongMaterial, texturedMaterial, reflectiveMaterial;
    var teapot;

    var diffuseColor = new THREE.Color();
    var specularColor = new THREE.Color();
    
    init();
    render();

    function init(){
        var canvasWidth = window.innerWidth;
        var canvasHeight = window.innerHeight;
        // CAMERA
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
        camera.position.set( -600, 550, 1300 );
        // LIGHTS
        ambientLight = new THREE.AmbientLight( 0x333333 );	// 0.2
        light = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );

        // RENDERER
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( canvasWidth, canvasHeight );
				renderer.gammaInput = true;
				renderer.gammaOutput = true;
                document.body.appendChild(renderer.domElement);
        // CONTROLS
				cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
                cameraControls.addEventListener( 'change', render );
        // MATERIALS
				var materialColor = new THREE.Color();
				materialColor.setRGB( 1.0, 1.0, 1.0 );
				phongMaterial = new THREE.MeshPhongMaterial( { color: materialColor, side: THREE.DoubleSide } );
				
				// scene itself
				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xeeeeee );
				scene.add( ambientLight );
                scene.add( light );
        
    }

    function render() {
        if ( newTess !== tess ||
            bottom !== bBottom ||
            lid !== bLid ||
            body !== bBody ||
            fitLid !== bFitLid ||
            nonblinn !== bNonBlinn ||hading !== shading )
        {
            tess = newTess;
            bBottom = bottom;
            bLid = lid;
            bBody = body;
            bFitLid = fitLid;
            bNonBlinn = nonblinn;
            shading = newShading;
            createNewTeapot();
        }
        // We're a bit lazy here. We could check to see if any material attributes changed and update
        // only if they have. But, these calls are cheap enough and this is just a demo.
        phongMaterial.shininess = shininess;
        texturedMaterial.shininess = shininess;
        diffuseColor.setHSL( hue, saturation, lightness );
        if ( metallic )
        {
            // hacer que los colores tengan un tono metalico
            specularColor.copy( diffuseColor );
        }
        else
        {
            // para que se vea como si fuera de plastico
            specularColor.setRGB( 1, 1, 1 );
        }
        diffuseColor.multiplyScalar( kd );
        flatMaterial.color.copy( diffuseColor );
        gouraudMaterial.color.copy( diffuseColor );
        phongMaterial.color.copy( diffuseColor );
        texturedMaterial.color.copy( diffuseColor );
        specularColor.multiplyScalar( ks );
        phongMaterial.specular.copy( specularColor );
        texturedMaterial.specular.copy( specularColor );
        // Ambient's actually controlled by the light for this demo
        ambientLight.color.setHSL( hue, saturation, lightness * ka );
        light.position.set( lx, ly, lz );
        light.color.setHSL( lhue, lsaturation, llightness );
        // skybox is rendered separately, so that it is always behind the teapot.
        if ( shading === "reflective" ) {
            scene.background = textureCube;
        } else {
            scene.background = null;
        }
        renderer.render( scene, camera );
    }
    // Whenever the teapot changes, the scene is rebuilt from scratch (not much to it).
    function createNewTeapot() {
        
        var teapotGeometry = new THREE.TeapotBufferGeometry( teapotSize,tess,bottom,lid,body,fitLid,! nonblinn );
        teapot = new THREE.Mesh(
            teapotGeometry,phongMaterial );	// if no match, pick Phong
        scene.add( teapot );
    }



}) ();
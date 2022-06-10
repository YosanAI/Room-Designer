import { Scene,BoxGeometry, DirectionalLight,Vector2,AmbientLight,AxesHelper,WebGLRenderer,PerspectiveCamera,Mesh, MeshBasicMaterial } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export let scene, camera, renderer,controls,directionalLight;
export function initScene() {

    scene = new Scene();

    camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 10, 10);

    renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new OrbitControls(camera, renderer.domElement)

    //let there be light
    directionalLight = new DirectionalLight(0xffffff, 1);
    //shadow
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize = new Vector2(4096, 4096);
    const shadowCameraSize = 25;
    directionalLight.shadow.camera.left = - shadowCameraSize;
    directionalLight.shadow.camera.right = shadowCameraSize;
    directionalLight.shadow.camera.top = shadowCameraSize;
    directionalLight.shadow.camera.bottom = - shadowCameraSize;
    //to prvent wierd shadow on double sided mesh
    directionalLight.shadow.bias = - 0.000007;
    directionalLight.position.set(100, 300, 200);
    scene.add(directionalLight);
    const ambientLight = new AmbientLight(0xffffff);
    ambientLight.intensity = 0.4;
    scene.add(ambientLight);

    let testmesh = new Mesh(new BoxGeometry(), new MeshBasicMaterial(0xffffff));
    //scene.add(testmesh);

    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);

    window.addEventListener(
        'resize',
        () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
            render()
        },
        false
    )
}






export function animate() {
    requestAnimationFrame(animate)
    controls.update()
    render()
}

function render() {
    renderer.render(scene, camera)
}

//animate()

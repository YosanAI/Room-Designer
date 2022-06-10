import { BoxGeometry, Group, Mesh, MeshBasicMaterial, MeshLambertMaterial, Shape, ShapeGeometry, Vector2 } from "three"
import 'three/examples/jsm/geometries/ConvexGeometry';
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";
import { degToRad } from "three/src/math/MathUtils";


// dont forget disposing 
export class Floor {
    joint = new Group();
    material = new MeshBasicMaterial({/*wireframe:true*/ });
    geom;
    constructor(nodeList) {

        // this.geom=new ConvexGeometry(nodeList);
        let shape = new Shape();
        shape.moveTo(nodeList[0].x, nodeList[0].y);


        for (let i = 1; i < nodeList.length; i++) {

            let x = nodeList[i].x;
            let y = nodeList[i].y;

            shape.lineTo(x, y);
        }
        this.geom = new ShapeGeometry(shape);
        let mesh = new Mesh(this.geom, this.material);
        this.joint.rotation.x = degToRad(-90);
        this.joint.add(mesh);
    }

}

export class Wall {
    joint = new Group();
    material= new MeshLambertMaterial();
    geom;
    constructor(startPt, endPt, height,thickness) {

        let dirVec = new Vector2();
        dirVec.subVectors(endPt, startPt);

        let length = dirVec.length();
        let angle = dirVec.angle();

        this.geom = new BoxGeometry(length,height,thickness);
        this.mesh = new Mesh(this.geom, this.material);
        this.positionMesh(startPt,endPt,length,height,thickness);

        this.joint.position.set(startPt.x,0,-startPt.y);
        //this.joint.rotation.y = angle;
       
        
        this.joint.add(this.mesh);
    }
    positionMesh(startPt,endPt,length,height,thickness){
        //let horizontalMeshOffset=(startPt.x>endPt.x) ? -length/2: length/2;
        //console.log(horizontalMeshOffset);
        //this.mesh.position.set(horizontalMeshOffset,height/2,thickness/2);
        this.mesh.position.set(length/2,height/2,thickness/2);    
        
    }
   /* computeWallInclination(dir) {


        let horizVec = new Vector2(1, 0);


        return horizVec.angleTo(dir);
    }*/

}
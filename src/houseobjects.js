import { Group, Mesh, MeshBasicMaterial, Shape, ShapeGeometry } from "three"
import 'three/examples/jsm/geometries/ConvexGeometry';
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry";
import { degToRad } from "three/src/math/MathUtils";



export class Floor{
    joint= new Group();
    material= new MeshBasicMaterial({/*wireframe:true*/});
    geom;
    constructor(nodeList){
    
       // this.geom=new ConvexGeometry(nodeList);
       let shape= new Shape();
       shape.moveTo(nodeList[0].x,nodeList[0].y);
       
       
       for (let i = 1; i < nodeList.length; i++) {
           
           let x=nodeList[i].x;
           let y=nodeList[i].y;
           
           shape.lineTo(x,y);
      }
      this.geom= new ShapeGeometry(shape);
        let mesh= new Mesh(this.geom,this.material);
        this.joint.rotation.x=degToRad(-90);
        this.joint.add(mesh);
    }

}
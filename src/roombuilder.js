import * as Scene from './scene.js';
import {Floor, Wall} from './houseobjects.js';

import { Vector2, Vector3 } from "three";


//let roomNodeList= [new Vector3(0,0,0),new Vector3(0,0,-5),new Vector3(-5,0,-5),new Vector3(-5,0,0)];
let roomNodeList= [new Vector2(0,0),new Vector2(0,7),new Vector2(-3,7),new Vector2(-3,6),new Vector2(-5,6),
   new Vector2(-5,7),new Vector2(-8,7),new Vector2(-8,5.5),new Vector2(-9.5,5.5),new Vector2(-9.5,3),new Vector2(-4.5,3),
new Vector2(-4.5,0),new Vector2(0,0)];

//let roomNodeList=[new Vector2(0,0),new Vector2(1,2),new Vector2(2,0)];

//randomizePos(roomNodeList);

const floor=new Floor(roomNodeList);

//let wall1= new Wall(roomNodeList[1],roomNodeList[2],2,0.1);


Scene.initScene();

Scene.scene.add(floor.joint);

for(let i=0;i<roomNodeList.length-1;i++){
   let startNode= roomNodeList[i];
   let endNode=roomNodeList[i+1];
   let wall=new Wall(startNode,endNode,2,0.1);
   Scene.scene.add(wall.joint);
 }

 function randomizePos(nodeList){
   

   nodeList.forEach((node)=>{
      let randMax=1;
   let intSign= Math.random() < 0.5 ? -1 : 1;
   let rand=Math.random()*intSign*randMax;
         node.x+=rand;
         node.y+=rand;
     });
     nodeList[nodeList.length-1]=nodeList[0];
 }
 //Scene.scene.add(wall1.joint);
Scene.animate();
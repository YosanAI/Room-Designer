import * as Scene from './scene.js';
import {Floor} from './houseobjects.js';

import { Vector2, Vector3 } from "three";


//let roomNodeList= [new Vector3(0,0,0),new Vector3(0,0,-5),new Vector3(-5,0,-5),new Vector3(-5,0,0)];
let roomNodeList= [new Vector2(0,0),new Vector2(0,7),new Vector2(-3,7),new Vector2(-3,6),new Vector2(-5,6),
   new Vector2(-5,7),new Vector2(-8,7),new Vector2(-8,5.5),new Vector2(-9.5,5.5),new Vector2(-9.5,3),new Vector2(-4.5,3),
new Vector2(-4.5,0),new Vector2(0,0)];

//let roomNodeList=[new Vector2(0,0),new Vector2(1,2),new Vector2(2,0)];


const floor=new Floor(roomNodeList);
Scene.initScene();

Scene.scene.add(floor.joint);
Scene.animate();
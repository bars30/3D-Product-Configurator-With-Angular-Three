import { CUSTOM_ELEMENTS_SCHEMA, Component, viewChild, ElementRef, ChangeDetectionStrategy, computed } from '@angular/core';
import { extend, injectBeforeRender, injectLoader, injectStore, NgtArgs } from 'angular-three';
import * as THREE from 'three'
import { Mesh, BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, Color } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls} from 'three-stdlib'


extend(THREE);
extend({ OrbitControls});

@Component({
  standalone: true,
  imports: [NgtArgs],
  template: ` 
    <ngt-ambient-light [intensity]="1"] />
    <ngt-directional-light [intensity]="2"] [position]="[0, 0, 1]" />
    <ngt-directional-light [intensity]="2"] [position]="[0, 0, -1]" />
    <ngt-point-light [intensity]="0.5" [position]="[1, 1, 0]" />
    <ngt-point-light [intensity]="0.5" [position]="[-0.5, -0.5, 0]" />
    <ngt-primitive *args="[model()]" [position]="[0, -0.7, -0.1]" />
    <ngt-orbit-controls 
    #orbitControls
    *args="[camera(), glDomElement()]"
     [enableZoom]="false"
      [autoRotate]="true" 
    [autoRotateSpeed]="5" />
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  ngtStore = injectStore();

  orbitControls = viewChild<ElementRef<OrbitControls>>('orbitControls')

  gltf = injectLoader(() => GLTFLoader, () => `assets/scene.gltf`)


  model = computed(() => {
    const gltf = this.gltf();
    if(!gltf) return null;

    // const mesh = gltf.scene.getObjectByName('Onject_2') as Mesh;
    // const material = mesh.material as MeshStandardMaterial;
    // material.color.set(new Color('#b3478c'))
    
    return gltf.scene;
  })

  camera = this.ngtStore.select('camera');
  glDomElement = this.ngtStore.select('gl', 'domElement')

  constructor(){
    injectBeforeRender(()=>{
      const orbitControls = this.orbitControls()?.nativeElement;
      if (orbitControls) {
        orbitControls.update()
      }
    })
  }

}


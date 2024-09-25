# 3DProductConfiguratorWithAngularThree

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## For avoiding errors

1️⃣ 🔴import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
🔴  Cannot find module 'three/examples/jsm/loaders/GLTFLoader' or its corresponding type declarations.ts(2307)
      🔴No quick fixes available 
🟢In tsconfig.json
   Check Module Resolution --- Make sure your moduleResolution setting is appropriate. You have it set to "bundler", which should generally work, but you might want to try changing it to "node" if you're still encountering issues:
   "moduleResolution": "node",


2️⃣ 🔴Could not load assets/scene.gltf: THREE.GLTFLoader: Failed to load buffer "scene.bin".
🟢Try dragging the entire .zip file into the editor. All of the files in that folder are part of the model.







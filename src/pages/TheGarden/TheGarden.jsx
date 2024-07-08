import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { NavBar } from '../../components/NavBar/NavBar.jsx';
import { BottomNav } from '../../components/BottomNav/BottomNav.jsx';

export const TheGarden = () => {
    const sceneRef = useRef(null);
    const [plantModel, setPlantModel] = useState(null);
    const [plots] = useState([
        { position: new THREE.Vector3(-2, 0, 0), occupied: false },
        { position: new THREE.Vector3(0, 0, 0), occupied: false },
        { position: new THREE.Vector3(2, 0, 0), occupied: false }
    ]);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current.appendChild(renderer.domElement);

        scene.background = new THREE.Color(0x87CEEB);
        camera.position.z = 5;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load('path/to/your/plant/model.gltf', (gltf) => {
            gltf.scene.scale.set(0.1, 0.1, 0.1);
            setPlantModel(gltf.scene);
        });

        plots.forEach(plot => {
            const geometry = new THREE.BoxGeometry(0.8, 0.1, 0.8);
            const material = new THREE.MeshBasicMaterial({ color: 0x654321 });
            const soilPlot = new THREE.Mesh(geometry, material);
            soilPlot.position.copy(plot.position);
            scene.add(soilPlot);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            scene.remove(ambientLight);
            scene.remove(directionalLight);
            plots.forEach(plot => scene.remove(plot));
            if (plantModel) scene.remove(plantModel);
        };
    }, []);

    const handleDrop = (e) => {
        const droppedOnPlot = e.dropData;
        if (droppedOnPlot && !droppedOnPlot.occupied) {
            droppedOnPlot.occupied = true;
            e.dragData.position.copy(droppedOnPlot.position);
        }
    };

    return (
        <main>
            <NavBar />
            <div ref={sceneRef}>
                <DragDropContainer>
                    <div>
                        {plantModel && (
                            <DropTarget targetKey="plot" onHit={handleDrop} dragData={plantModel}>
                                <primitive object={plantModel} />
                            </DropTarget>
                        )}
                    </div>
                </DragDropContainer>

                {plots.map((plot, index) => (
                    <DropTarget key={index} targetKey="plot" dropData={plot}>
                        <div
                            style={{
                                position: 'absolute',
                                left: `${plot.position.x * 100 + 50}%`,
                                top: `${-plot.position.y * 100 + 50}%`,
                                width: '10px', height: '10px',
                                background: plot.occupied ? 'green' : 'brown'
                            }}
                        ></div>
                    </DropTarget>
                ))}
            </div>
            <BottomNav />
        </main>
    );
}
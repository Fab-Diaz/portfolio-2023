import { useRef, useState, createElement } from 'react'
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export var GltfModel = function (_a) {
  var modelPath = _a.modelPath,
    _b = _a.movement,
    movement = _b === void 0 ? 'fixed' : _b,
    _c = _a.scale,
    scale = _c === void 0 ? 40 : _c,
    _d = _a.position,
    position = _d === void 0 ? [0, 0, 0] : _d,
    _e = _a.camera,
    camera = _e === void 0 ? { position: [7, 7, -7] } : _e,
    _f = _a.isManipulating,
    isManipulating = _f === void 0 ? false : _f
  var _g = useState('left'),
    movementRotationSwitch = _g[0],
    setMovementRotationSwitch = _g[1]
  var ref = useRef(null)
  var gltf = useLoader(GLTFLoader, modelPath)
  useFrame(function (state) {
    if (
      !(ref === null || ref === void 0 ? void 0 : ref.current) ||
      isManipulating
    )
      return
    switch (movement) {
      case 'rotate':
        if (movementRotationSwitch === 'left') {
          if (ref.current.rotation.y < 1) {
            ref.current.rotation.y += 0.003
          } else {
            setMovementRotationSwitch('right')
          }
        }
        if (movementRotationSwitch === 'right') {
          if (ref.current.rotation.y > -1) {
            ref.current.rotation.y -= 0.003
          } else {
            setMovementRotationSwitch('left')
          }
        }
        break
      case 'float':
        var t = state.clock.getElapsedTime()
        ref.current.rotation.set(
          0.1 + Math.cos(t / 4.5) / 10,
          Math.sin(t / 4) / 4,
          0.3 - (1 + Math.sin(t / 4)) / 8,
        )
        ref.current.position.y = (1 + Math.sin(t / 2)) / 10
        break
    }
  })
  useThree(function (_a) {
    var threeCamera = _a.camera
    threeCamera.position.set(
      camera.position[0],
      camera.position[1],
      camera.position[2],
    )
  })
  return createElement('primitive', {
    ref: ref,
    object: gltf.scene,
    position: position,
    scale: scale,
  })
}

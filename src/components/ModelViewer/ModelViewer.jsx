import { Canvas } from '@react-three/fiber'
import { Box as ThreeBox, OrbitControls } from '@react-three/drei'
import { GltfModel } from '@/components'
import { useState, createElement } from 'react'
export var ModelViewer = function (_a) {
  var _b, _c, _d, _e
  var modelPath = _a.modelPath,
    _f = _a.scale,
    scale = _f === void 0 ? 1 : _f,
    _g = _a.position,
    position = _g === void 0 ? [0, 0, 0] : _g,
    orbits = _a.orbits,
    camera = _a.camera,
    movement = _a.movement,
    pointLights = _a.pointLights,
    ambientLights = _a.ambientLights,
    spotlights = _a.spotlights,
    _h = _a.stopWhenManipulating,
    stopWhenManipulating = _h === void 0 ? true : _h,
    _j = _a.enableZoom,
    enableZoom = _j === void 0 ? true : _j
  var _k = useState(false),
    isManipulating = _k[0],
    setIsManipulating = _k[1]
  return (
    <Canvas
      shadows={true}
      onMouseEnter={function () {
        return stopWhenManipulating && setIsManipulating(true)
      }}
      onMouseLeave={function () {
        return stopWhenManipulating && setIsManipulating(false)
      }}
    >
      {ambientLights === null || ambientLights === void 0
        ? void 0
        : ambientLights.map(function (_a, index) {
            var _b = _a.intensity,
              intensity = _b === void 0 ? 0.4 : _b
            return createElement('ambientLight', {
              key: ''.concat(modelPath, '_ambientLight_').concat(index),
              intensity: intensity,
            })
          })}
      {pointLights === null || pointLights === void 0
        ? void 0
        : pointLights.map(function (_a, index) {
            var _b = _a.position,
              position = _b === void 0 ? [0, 0, 0] : _b,
              _c = _a.intensity,
              intensity = _c === void 0 ? 0.4 : _c,
              _d = _a.color,
              color = _d === void 0 ? 'white' : _d,
              helper = _a.helper
            return createElement(
              'pointLight',
              {
                key: ''.concat(modelPath, '_pointLight_').concat(index),
                position: position,
                intensity: intensity,
                color: color,
              },
              helper && createElement(ThreeBox, { scale: 1 }),
            )
          })}
      {spotlights === null || spotlights === void 0
        ? void 0
        : spotlights.map(function (_a, index) {
            var _b = _a.position,
              position = _b === void 0 ? [0, 0, 0] : _b,
              _c = _a.angle,
              angle = _c === void 0 ? 0.6 : _c,
              _d = _a.penumbra,
              penumbra = _d === void 0 ? 1 : _d,
              _e = _a.color,
              color = _e === void 0 ? 'white' : _e,
              helper = _a.helper
            return createElement(
              'spotLight',
              {
                key: ''.concat(modelPath, '_spotLight_').concat(index),
                position: position,
                angle: angle,
                penumbra: penumbra,
                color: color,
              },
              helper && createElement(ThreeBox, { scale: 1 }),
            )
          })}
      <GltfModel
        modelPath={modelPath}
        scale={scale}
        position={position}
        camera={camera}
        movement={movement}
        isManipulating={isManipulating}
      />
      {createElement(OrbitControls, {
        rotateSpeed: 1,
        enableZoom: enableZoom,
        minAzimuthAngle:
          (_b =
            orbits === null || orbits === void 0
              ? void 0
              : orbits.minAzimuthAngle) !== null && _b !== void 0
            ? _b
            : -10,
        maxAzimuthAngle:
          (_c =
            orbits === null || orbits === void 0
              ? void 0
              : orbits.maxAzimuthAngle) !== null && _c !== void 0
            ? _c
            : 10,
        minPolarAngle:
          (_d =
            orbits === null || orbits === void 0
              ? void 0
              : orbits.minPolarAngle) !== null && _d !== void 0
            ? _d
            : -10,
        maxPolarAngle:
          (_e =
            orbits === null || orbits === void 0
              ? void 0
              : orbits.maxPolarAngle) !== null && _e !== void 0
            ? _e
            : 10,
      })}
    </Canvas>
  )
}

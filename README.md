# TAIGA - TP DOC AI interactive mascot

A true 3D Three.js character component, reconstructed from the supplied front-view reference. White glossy armor, graphite joints and orange accents. The browser scene contains geometry throughout; no image of the robot is used as a model.

## Open immediately

Use the deployed private preview supplied with this package. To run the downloaded package locally, serve the `web/` directory with any static web server (for example, `python3 -m http.server 8080 --directory web`) and open `http://localhost:8080`. ES modules require HTTP(S); double-clicking `index.html` from a `file://` URL is not supported.

## Website setup

Copy the complete contents of `web/` to `/taiga/` on your domain. Keep `assets/` and its chunk filenames together. The component has a transparent WebGL canvas; the showcase page adds its own dark studio background.

### Script component

```html
<script type="module" src="/taiga/assets/taiga.js"></script>
<taiga-mascot
  style="display:block;width:100%;height:640px"
  name="TAIGA"
  brand="TP DOC AI"
  accent="#ff7900"
  speed="1"
></taiga-mascot>
```

The custom element lazy-imports the renderer/model code when it approaches the viewport. It builds the model from shared geometry; it does not download the GLB at runtime. No API keys, tracking, remote fonts or runtime CDN dependencies are needed.

### iframe

```html
<iframe
  src="/taiga/index.html?embed=1"
  title="TAIGA interactive mascot"
  style="display:block;width:100%;height:640px;border:0"
  loading="lazy"
  allow="gyroscope; accelerometer"
></iframe>
```

Use your own public domain for a production embed. The provided hosted preview is private; it is not an anonymous public iframe endpoint. Your server must allow framing if you embed across domains. For direct script integration across domains, configure ordinary CORS for JS assets. No server configuration changes are needed for same-origin use.

## Controls

- Move the mouse: head, face display and torso ease toward the pointer. The head is limited to ±31.5° yaw and ±19.5° pitch; the torso to ±11.5° and ±5.7°. A full neck revolution would violate the requested natural limits, so full 360° movement belongs to the whole model.
- Drag or touch-drag: quaternion arcball rotation on all axes, with inertia. The model begins returning to front 3 seconds after the last input.
- Hover over chest/gauge/globe: raycast-driven brighter effects; chest scan and globe rotation accelerate.
- Keyboard: arrow keys rotate horizontally/vertically; Q/E roll; Home resets.
- Touch: drag is always available. The tilt-control button requests device motion permission where needed; HTTPS and a device with sensors are required. If unavailable, touch remains the fallback.
- Pause stops automatic animation. Reduced motion uses static effects and immediate pointer response instead of continuous easing/idle motion. Hidden tabs and off-screen components stop their animation loop.
- The showcase has PNG export, a 360° tour, a WebM recorder and an optional subtle cinematic focus toggle. Recording depends on MediaRecorder and WebGL support.

## Change appearance or motion

Set `name`, `brand`, `accent`, `speed` or `quality` attributes before the custom element mounts. Keep the labels short enough for the available display area. A speed of `0.5` is half-speed; `2` is double-speed.

For more detailed changes, edit `source/src/config.js`, then build with `npm install` and `npm run build` in `source/`. `build.mjs` writes the JS output into `dist/assets`. Copy the built files into your hosted `assets/` directory. Config contains palette, text, animation speed, neck/torso limits, damping, idle float, return delay, bloom, quality and reduced-motion policy. Mesh construction is in `src/model.js`; displays and instruments are in `src/effects.js`; interactions/lifecycle are in `src/component.js`.

The element emits `taiga:ready` with an API in `event.detail`: `reset()`, `setPaused(boolean)`, `setDemo(boolean)`, `setSpeed(number)`, `setQuality('auto'|'low')`, `setDepthOfField(boolean)`, `enableGyro()`, `snapshot()`, `record()` and `destroy()`. Cleanup runs when the custom element is disconnected. Styling and configuration changes after mount should use the API or remount the element.

## Files

In the full ZIP, media files are inside `web/downloads/`. Models and the guides are also copied to the ZIP root for convenience.

- `web/index.html`, `style.css`, `ui.js`: showcase and transparent iframe mode.
- `web/assets/taiga.js` and `component-*.js`: lazy-loaded bundled component and pinned Three.js dependencies.
- `source/`: commented editable source, package manifest/lock, build script and validation script.
- `TAIGA_Rigged.glb`: 4.25 MB rigid-weight skinned model, five bones (Root, Torso, Head, RightArm, LeftArm), and a six-second head idle clip. This is a mechanical rig, not a deformable facial/body animation rig.
- `TAIGA_Articulated.glb`: 2.19 MB model preserving the full named object-pivot hierarchy, including forearms and wrists.
- `TAIGA_3D_Front.png`: 1600 × 2100 transparent front-pose render from the actual mesh.
- `TAIGA_3D_Interactive.webm`: 600 × 800, 20 fps, 12 seconds, transparent model animation.
- `TAIGA_3D_Interactive.mp4`: 600 × 800, 20 fps, 12 seconds, dark-background demonstration with a simulated cursor and full turn.
- `TAIGA_3D_Interactive.gif`: 360 × 480, 10 fps looping demonstration.
- `CHECKLIST.md`: requirement-by-requirement verification status.

The animation exports use the same geometry and programmed pointer targets; they are an offline demonstration, not a screen recording of real browser pointer events. The static GLBs do not execute the website's hologram shaders, dynamic numbers or interaction logic. The articulated GLB preserves lines and display geometry; some DCC tools may omit glTF line primitives. Use the web component for the complete animated effect system. The skinned file's holographic line primitives are static in bind pose; the exported idle clip rotates the head only, where its graphics are skinned geometry.

## Rendering and performance

Desktop uses PBR materials, a generated environment map, rim lighting, soft shadows and bloom. Cinematic focus is optional and off by default to keep labels crisp. The canvas remains transparent. Mobile and low quality omit the expensive postprocess/shadow path. Pixel ratio is capped at 1.5 desktop / 1.25 touch. Auto quality drops postprocessing if observed FPS is below 28 after warmup. The target is 60 fps desktop and 30+ mobile, but those rates are not certified on physical devices.

## Browser support and limitations

Intended for current Chrome, Edge, Firefox and Safari with WebGL 2 and ES modules enabled. Touch is supported through Pointer Events. Gyroscope support/permission behavior varies. WebM alpha support varies across browsers/editors; PNG is the still-image fallback and MP4 is the broadly compatible video fallback. Browser/device compatibility has not been verified here.

The available preview browser disabled WebGL. Its loading failure and fallback UI were inspected, but live GPU rendering, pointer hover, mobile gyro, actual frame rates and cross-browser behavior could not be verified. An independent EGL renderer verified the mesh and produced the exports. The page shows the real 3D-rendered video when WebGL cannot start and explicitly labels that fallback as a non-interactive preview.

Exact identity to the reference's source mesh, unseen surfaces and all production QA criteria cannot be certified from one image. This is a functional procedural 3D reconstruction, with interpreted rear surfaces and simplified mechanical detail. Review the turntable before using it as a final approved brand master.

## Licenses

Three.js and its bundled fonts are distributed under their included licenses. World outlines use world-atlas / Natural Earth data. See `THIRD_PARTY_NOTICES.txt`. All numerical values on the chest are illustrative motion graphics, not actual TP analysis or financial results.

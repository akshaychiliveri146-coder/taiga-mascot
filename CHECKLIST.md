# TAIGA acceptance checklist

PASS means checked in code, geometry or an exported artifact as indicated. UNVERIFIED is not a claimed pass. PARTIAL identifies the working substitute.

| Requirement | Status | Evidence / limitation |
|---|---|---|
| True 3D, depth-correct robot | PASS | 199 geometry meshes; exported GLB successfully reloads; actual 3D turntable rendered. |
| Exact original silhouette/material identity | PARTIAL | Original white/black/orange design guides the reconstruction; exact source geometry and unseen surfaces cannot be recovered from one view. |
| Front-facing heroic pose, idle float/breathing | PASS / UNVERIFIED live | Front render checked; idle code present. |
| Exactly 3 animated candles and TAIGA on face | PASS | Three counted graph nodes; transform sweep validates; rendered text checked. |
| TP DOC AI and secondary TAIGA chest marks | PASS | Extruded geometry, correctly spelled and readable in PNG. Embossed, not physically cut into the armor. |
| Chest grid, scanning, running numbers, mini chart | PASS code / UNVERIFIED live | 3D graph, scan and changing numeric geometry implemented. Grid/network effect is illustrative. |
| Right-hand animated measurement gauge | PASS | Geometric dial/needle; sweep/settle/remeasure code and offline motion. |
| Left-hand revolving world, data points and country arcs | PASS | World-atlas coastline geometry, longitude/latitude, arc particles; offline rotation checked. |
| Mouse cursor following, smooth easing | UNVERIFIED live | Implemented with time-based damping; browser WebGL unavailable. Export shows programmed cursor targets. |
| 360° head rotation and unlimited vertical neck rotation | PARTIAL | Natural neck limits retained. Full all-axis rotation applies to whole model via drag, preventing broken-neck motion. |
| Drag 360° all axes with inertia and 3-second return | UNVERIFIED live | Quaternion arcball and decay/return implemented; keyboard alternatives included. |
| Hover intensified chest/gauge/globe | UNVERIFIED live | Raycast hit groups and animated intensities/speeds implemented. |
| Touch and gyroscope | UNVERIFIED device | Touch pointer controls; opt-in sensor permission flow. No physical phone test available. |
| Hidden-tab pause, offscreen pause, reduced motion | PASS code / UNVERIFIED runtime | Visibility/intersection listeners, RAF cancellation and reduced-motion query implemented. |
| PBR/environment/rim/soft shadows/bloom | PASS implementation / UNVERIFIED GPU | Three.js environment, physical materials and postprocessing; mobile adapts to cheaper effects. |
| Ground ring, floating particles and depth of field | PASS implementation / UNVERIFIED GPU | Actual 3D ring and particles; optional desktop BokehPass. |
| Transparent embeddable component | PASS structure / UNVERIFIED GPU | Custom element plus alpha renderer/composite; PNG and WebM alpha verified. |
| Model <5 MB and lazy load | PASS | Rigged GLB 4,251,016 bytes; articulated 2,192,856 bytes. Lazy module initialization generates geometry rather than fetching GLB. |
| 60 fps laptop / 30+ mobile | UNVERIFIED | Adaptive quality implemented; actual devices not available for benchmark. |
| Live demo and iframe/script setup | PASS delivery | Hosted private preview and local server package; public website embed requires self-hosting. |
| Rigged GLB | PASS | Five rigid-weight bones, 199 skinned meshes, idle clip; re-import validated. |
| High-resolution transparent PNG | PASS | 1600×2100 RGBA render of exported geometry. |
| MP4/WebM/GIF | PASS | 12s geometric turntable, cursor-target phase, return; standard exports verified. |
| No clipping / no broken edges | PARTIAL | Front/turntable views inspected; no full collision or all-pose mechanical certification. |
| Production readiness at requested studio quality | NOT CERTIFIED | Requires brand-mesh approval, real WebGL interaction QA, physical-device performance and browser testing. |

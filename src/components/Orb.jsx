import React, { useRef, useEffect } from 'react';
import { Renderer, Camera, Transform, Program, Mesh, Sphere } from 'ogl';

const Orb = ({ 
  hoverIntensity = 0.5, 
  rotateOnHover = true, 
  hue = 0, 
  forceHoverState = false 
}) => {
  const canvasRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create renderer
    const renderer = new Renderer({
      canvas,
      width: canvas.offsetWidth,
      height: canvas.offsetHeight,
      alpha: true,
      antialias: true,
    });
    rendererRef.current = renderer;

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    // Create camera
    const camera = new Camera(gl, { fov: 35 });
    camera.position.set(0, 0, 8);

    // Create scene
    const scene = new Transform();
    sceneRef.current = scene;

    // Create geometry
    const geometry = new Sphere(gl, {
      radius: 1,
      widthSegments: 64,
      heightSegments: 32,
    });

    // Create shader program
    const program = new Program(gl, {
      vertex: `
        attribute vec3 position;
        attribute vec3 normal;
        attribute vec2 uv;
        
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform mat3 normalMatrix;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uHover;
        
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          
          vec3 pos = position;
          
          // Add some wave distortion
          pos += normal * sin(pos.y * 4.0 + uTime * 2.0) * 0.1 * uHover;
          pos += normal * sin(pos.x * 3.0 + uTime * 1.5) * 0.05;
          
          vPosition = pos;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uHover;
        uniform float uHue;
        
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }
        
        void main() {
          vec3 normal = normalize(vNormal);
          
          // Create fresnel effect
          float fresnel = pow(1.0 - dot(normal, vec3(0.0, 0.0, 1.0)), 2.0);
          
          // Add some noise
          float noise = sin(vPosition.x * 10.0 + uTime) * sin(vPosition.y * 10.0 + uTime) * 0.1;
          
          // Base color using HSV
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.8, 0.9));
          
          // Mix colors based on fresnel and noise
          vec3 color = mix(baseColor, vec3(0.0, 1.0, 1.0), fresnel + noise);
          
          // Add glow effect
          float glow = fresnel * (1.0 + uHover * 0.5);
          
          // Pulsing effect
          float pulse = sin(uTime * 3.0) * 0.1 + 0.9;
          
          gl_FragColor = vec4(color * glow * pulse, glow * 0.8);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: [0, 0] },
        uHover: { value: 0 },
        uHue: { value: hue },
      },
      transparent: true,
    });

    // Create mesh
    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);
    meshRef.current = mesh;

    // Animation loop
    const animate = (time) => {
      program.uniforms.uTime.value = time * 0.001;
      
      // Update hover state
      const targetHover = (isHovering.current || forceHoverState) ? hoverIntensity : 0;
      program.uniforms.uHover.value += (targetHover - program.uniforms.uHover.value) * 0.1;
      
      // Update mouse position
      program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y];
      
      // Rotate mesh
      if (rotateOnHover && (isHovering.current || forceHoverState)) {
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.005;
      } else {
        mesh.rotation.y += 0.002;
      }
      
      renderer.render({ scene, camera });
      requestAnimationFrame(animate);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      camera.perspective({ aspect: canvas.offsetWidth / canvas.offsetHeight });
    };

    // Handle mouse move
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height * 2 - 1);
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverIntensity, rotateOnHover, hue, forceHoverState]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
};

export default Orb;

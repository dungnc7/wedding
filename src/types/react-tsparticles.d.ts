declare module 'react-tsparticles' {
  import { ComponentType } from 'react';
  
  interface ParticlesProps {
    id?: string;
    className?: string;
    options?: any; // Sử dụng any để tránh các lỗi về type
    init?: (engine: any) => Promise<void>;
    loaded?: (container: any) => Promise<void>;
  }
  
  const Particles: ComponentType<ParticlesProps>;
  export default Particles;
}

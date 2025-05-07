'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';
import { withBasePath } from '@/utils/basePath';

interface BackgroundProps {
  type?: 'hearts' | 'flowers' | 'petals' | 'bubbles';
}

const Background = ({ type = 'hearts' }: BackgroundProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
    // Đổi tên tham số thành _container để ESLint hiểu rằng chúng ta biết nó không được sử dụng
    // Có thể thực hiện các hành động khi particles đã được tải xong
  }, []);

  if (!mounted) return null;

  // Sửa cấu hình để tương thích với phiên bản mới của tsparticles
  const flowersConfig = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#ff9ff6", "#ffd1e8", "#ffffff", "#ffc7e3"]
      },
      shape: {
        type: "image",
        image: [
          {
            src: withBasePath("images/flower-1.png"),
            width: 32,
            height: 32
          },
          {
            src: withBasePath("images/flower-2.png"),
            width: 32,
            height: 32
          }
        ]
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: false
        }
      },
      size: {
        value: 15,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    },
    retina_detect: true,
    background: {
      color: {
        value: "transparent"
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  };

  // Cấu hình cho hiệu ứng trái tim bay - Sử dụng file SVG trái tim
  const heartsConfig = {
    particles: {
      number: {
        value: 12, // Giảm số lượng từ 30 xuống 12
        density: {
          enable: true,
          value_area: 1200 // Tăng giá trị này để phân bố các trái tim xa nhau hơn
        }
      },
      color: {
        value: "#ff0000" // Đã cố định màu đỏ cho trái tim
      },
      shape: {
        type: "image",
        image: {
          src: withBasePath("images/heart.svg"), // Sửa đường dẫn để hoạt động với GitHub Pages
          width: 32,
          height: 32
        }
      },
      opacity: {
        value: 0.8, // Giảm độ đục xuống để trái tim trong suốt hơn
        random: true,
        anim: {
          enable: true,
          speed: 0.3,
          opacity_min: 0.5,
          sync: false
        }
      },
      size: {
        value: 18, // Giảm kích thước từ 24 xuống 18
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 1.8, // Giảm tốc độ để trái tim di chuyển chậm hơn
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "canvas", // Thay detect_on thành detectsOn
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 150,
          size: 22,
          duration: 2,
          opacity: 0.9,
          speed: 3
        },
        push: {
          particles_nb: 2 // Giảm số lượng trái tim được thêm mỗi khi click
        }
      }
    },
    retina_detect: true,
    background: {
      color: {
        value: "transparent"
      }
    }
  };
  
  // Cấu hình cho hiệu ứng cánh hoa bay
  const petalsConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#ffcad4", "#f4acb7", "#ffb3c1", "#ffffff"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: false
        }
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom-right",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "canvas", // Thay detect_on thành detectsOn
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 150,
          size: 10,
          duration: 2,
          opacity: 0.8,
          speed: 3
        }
      }
    },
    retina_detect: true,
    background: {
      color: {
        value: "transparent"
      }
    }
  };
  
  // Cấu hình cho hiệu ứng bong bóng bay
  const bubblesConfig = {
    particles: {
      number: {
        value: 25,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#ffffff", "#f0f8ff", "#e6f0ff", "#cce4ff"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 20,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 5,
          sync: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "canvas", // Thay detect_on thành detectsOn
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 150,
          size: 30,
          duration: 2,
          opacity: 0.4,
          speed: 3
        }
      }
    },
    retina_detect: true,
    background: {
      color: {
        value: "transparent"
      }
    }
  };

  // Chọn cấu hình dựa trên loại hiệu ứng
  const getConfig = () => {
    switch (type) {
      case 'hearts':
        return heartsConfig;
      case 'petals':
        return petalsConfig;
      case 'bubbles':
        return bubblesConfig;
      case 'flowers':
      default:
        return flowersConfig;
    }
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={getConfig()}
        className="w-full h-full"
      />
    </div>
  );
};

export default Background;
import React, { useState, useEffect } from 'react';
import './index.css';
import image from "./assets/img.png"
import img from "./assets/image.png"
import video from "./assets/video.mp4"


const App = () => {
  const [position, setPosition] = useState(100); // Start off-screen to the right

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition(prev => {
        // When text is completely off-screen to the left, reset to right
        if (prev < -1000) return 100;
        return prev - 1;
      });
    }, 30); // Adjust speed by changing interval time

    return () => clearInterval(animation);
  }, []);
  
  return (
    <div>
      {/* Marquee version (simpler) */}
      <div className="top-bar">
        <marquee direction="left" scrollamount="5">
          You can participate in person at <strong>Kuala Lumpur, Malaysia</strong> or <strong>Virtually</strong> from your home or office.
        </marquee>
      </div>

      {/* Alternative animated version (uncomment to use) */}
      {/* <div className="top-bar-container">
        <div 
          className="top-bar-content"
          style={{ transform: `translateX(${position}%)` }}
        >
          You can participate in person at <strong>Kuala Lumpur, Malaysia</strong> or <strong>Virtually</strong> from your home or office.
        </div>
      </div> */}

<header className="header">
  <div className="logo">ICLSMHA</div>
  <div className="right-section">
    <nav className="nav">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Call for Papers</a></li>
        <li><a href="#">Paper Submission</a></li>
        <li><a href="#">Publication</a></li>
        <li><a href="#">Registration</a></li>
        <li><a href="#">Venue</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <button className="login-btn">Login</button>
  </div>
</header>

      <main className="main">
       <div className="conference-banner" style={{ 
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden'
}}>
  {/* Video Background - Fixed Version */}
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      top: 0,
      left: 0,
      zIndex: 0,
      opacity: 0.7
    }}
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
  {/* Overlay Content */}
  <div style={{
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }}>
    {/* Logos Row */}
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      marginBottom: '20px',
      flexWrap: 'wrap'
    }}>
      {/* Add your logo images here */}
    </div>
    
    {/* Conference Title */}
    <h1 style={{ 
      textAlign: 'center', 
      fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
      marginBottom: '10px',
      maxWidth: '900px',
      lineHeight: '1.3'
    }}>
      International Conference on Life Sciences and Multidisciplinary Healthcare Approaches (ICLSMHA-2026)
    </h1>
    
    {/* Theme */}
    <p style={{ 
      textAlign: 'center', 
      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
      marginBottom: '20px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      maxWidth: '800px'
    }}>
      Theme: "Bridging Science and Practice: Multidisciplinary Approaches to Health and Wellbeing"
    </p>
    
    {/* Conference Details */}
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(5px)',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '30px',
      textAlign: 'center',
      maxWidth: '600px'
    }}>
      <p style={{ margin: '5px 0', fontSize: '1.2rem' }}><strong>Hybrid Conference:</strong> In Person + Online</p>
      <p style={{ margin: '5px 0', fontSize: '1.2rem' }}><strong>Date:</strong> 14-15 May, 2026</p>
      <p style={{ margin: '5px 0', fontSize: '1.2rem' }}><strong>Location:</strong> Kuala Lumpur, Malaysia</p>
      <p style={{ margin: '5px 0', fontSize: '1.2rem' }}>Organized by: <strong>Confworld Educational Research and Development Association</strong></p>
      <p style={{ margin: '5px 0', fontSize: '1rem' }}>ISBN: 978-52-951719-1-8</p>
    </div>
  </div>
</div>

       <section className="section" style={{
  padding: '4rem 2rem',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative'
}}>
  {/* Decorative elements */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  }}></div>
  
  <div className="intro-container" style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '3rem',
    marginBottom: '2rem'
  }}>
    <div className="intro-text" style={{
      flex: '1 1 55%',
      minWidth: '300px'
    }}>
      <h2 style={{
        color: '#1d4ed8',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        lineHeight: '1.2',
        position: 'relative',
        display: 'inline-block'
      }}>
        Welcome to <span style={{color: '#b91c1c'}}>ICLSMHA-2026</span>
        <span style={{
          position: 'absolute',
          bottom: '-10px',
          left: '0',
          width: '80px',
          height: '4px',
          borderRadius: '2px'
        }}></span>
      </h2>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          color: '#333'
        }}>
          We are delighted to invite researchers, academicians, healthcare professionals and industry experts from around the globe to join us at <strong style={{color: '#1d4ed8'}}>ICLSMHA-2026</strong>, where innovation meets collaboration. This international platform is designed to foster dialogue, share cutting-edge research and explore interdisciplinary strategies that shape the future of health and life sciences.
        </p>
        
        <div style={{
          padding: '1.5rem',
          borderRadius: '12px',
          borderLeft: '4px solid #1d4ed8',
          boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
        }}>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#333',
            margin: '0'
          }}>
            <strong style={{color: '#b91c1c'}}>ICLSMHA-2026</strong> serves as a dynamic hub for scholars, healthcare practitioners and industry experts to come together, exchange knowledge and foster cross-sector collaboration.
          </p>
        </div>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          color: '#333'
        }}>
          This conference is committed to addressing pressing global health issues by embracing innovative, multidisciplinary approaches across biotechnology, public health, environmental science and medical research. Engage with thought leaders, present groundbreaking work and be part of transformative conversations that inspire progress in healthcare.
        </p>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          color: '#333',
          fontWeight: '600',
          fontStyle: 'italic'
        }}>
          Let us come together to bridge scientific discovery and practical application in advancing health, sustainability and global wellbeing.
        </p>
      </div>
    </div>
    
    <div className="intro-image" style={{
      flex: '1 1 40%',
      minWidth: '300px',
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
    }}>
      <img 
        src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/science_img_0.jpg" 
        alt="Conference Science" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '1rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <p style={{margin: '0', fontWeight: '500'}}>Multidisciplinary Approaches to Health Innovation</p>
      </div>
    </div>
  </div>
</section>

        <section className="section" style={{
  padding: '5rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
}}>
  
  {/* Decorative elements */}
  <div style={{
    position: 'absolute',
    top: '3rem',
    left: '-50px',
    width: '150px',
    height: '150px',
    zIndex: 0
  }}></div>
  
  <div style={{
    position: 'relative',
    zIndex: 1
  }}>
    <h2 style={{
      color: '#1d4ed8',
      fontSize: '2.75rem',
      fontWeight: '800',
      marginBottom: '1rem',
      lineHeight: '1.2',
      position: 'relative',
      display: 'inline-block'
    }}>
      Conference Theme
      <span style={{
        position: 'absolute',
        bottom: '-10px',
        left: '0',
        width: '120px',
        height: '5px',
        background: 'linear-gradient(90deg, #1d4ed8, #b91c1c)',
        borderRadius: '3px'
      }}></span>
    </h2>
    
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '3rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      border: '1px solid rgba(0,0,0,0.05)'
    }}>
      <p style={{
        fontSize: '1.5rem',
        lineHeight: '1.6',
        color: '#b91c1c',
        fontWeight: '600',
        fontStyle: 'italic',
        marginBottom: '2.5rem',
        textAlign: 'center',
        position: 'relative',
        padding: '0 2rem'
      }}>
        <span style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          width: '30px',
          height: '2px',
          background: '#b91c1c'
        }}></span>
        "Bridging Science and Practice: Multidisciplinary Approaches to Health and Wellbeing"
        <span style={{
          position: 'absolute',
          right: '0',
          top: '50%',
          width: '30px',
          height: '2px',
          background: '#b91c1c'
        }}></span>
      </p>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.8rem',
        marginBottom: '3rem'
      }}>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#334155'
        }}>
          The International Conference on Life Sciences and Multidisciplinary Healthcare Approaches (ICLSMHA-2026) centers on the critical integration of life sciences, healthcare and allied disciplines to address complex global health challenges. This theme emphasizes the importance of translating scientific innovation into real-world healthcare solutions through cross-disciplinary collaboration.
        </p>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#334155'
        }}>
          From biotechnology and environmental health to clinical research and public health policy, the conference aims to foster meaningful dialogue and knowledge exchange that drive sustainable improvements in global wellbeing. By uniting diverse perspectives, ICLSMHA-2026 seeks to build pathways toward inclusive, evidence-based and impactful healthcare practices.
        </p>
      </div>
      
      <div style={{
        backgroundColor: '#f0fdf4',
        borderLeft: '4px solid #059669',
        borderRadius: '8px',
        padding: '1.5rem 2rem',
        margin: '2.5rem 0',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
      }}>
        <p style={{
          color: '#059669',
          fontWeight: '700',
          fontSize: '1.2rem',
          marginBottom: '1rem',
          fontStyle: 'italic'
        }}>
          Through this theme, ICETMRS seeks to:
        </p>
        
        <ul style={{
          listStyleType: 'none',
          paddingLeft: '0',
          display: 'grid',
          gap: '1rem'
        }}>
          {[
            "Highlight the importance of technology in transforming education and research",
            "Promote sustainable practices across disciplines",
            "Foster innovative approaches to lifelong learning and development"
          ].map((item, index) => (
            <li key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.8rem',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#334155'
            }}>
              <span style={{
                flexShrink: '0',
                width: '24px',
                height: '24px',
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.7',
        color: '#1e293b',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '2.5rem',
        padding: '1.5rem',
        backgroundColor: '#eff6ff',
        borderRadius: '10px',
        border: '1px dashed #1d4ed8'
      }}>
        Be part of this transformative dialogue as we explore the future of learning and research through the lens of sustainability and innovation!
      </p>
    </div>
  </div>
</section>
          <section className="purpose-section" style={{
  padding: '6rem 2rem',
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* Decorative elements */}
  <div style={{
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    zIndex: 0
  }}></div>
  
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  }}>
    <h1 style={{
      color: '#1d4ed8',
      fontSize: '3rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      position: 'relative',
      display: 'inline-block'
    }}>
      Purpose
      <span style={{
        position: 'absolute',
        bottom: '-10px',
        left: '0',
        width: '80px',
        height: '5px',
        background: 'linear-gradient(90deg, #1d4ed8, #b91c1c)',
        borderRadius: '3px'
      }}></span>
    </h1>
    
    <p style={{
      fontSize: '1.2rem',
      lineHeight: '1.8',
      color: '#334155',
      marginBottom: '3rem',
      textAlign:'justify'
    }}>
      The purpose of the International Conference on Life Sciences and Multidisciplinary Healthcare Approaches (ICLSMHA-2026) is to provide a global platform for researchers, educators, healthcare professionals and industry leaders to come together and explore innovative, cross-disciplinary solutions to today's most pressing health and life science challenges.
    </p>
    
    <h3 style={{
      color: '#1d4ed8',
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '2.5rem',
      position: 'relative',
      paddingLeft: '1.5rem'
    }}>
      <span style={{
        position: 'absolute',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '8px',
        height: '40px',
        background: 'linear-gradient(to bottom, #1d4ed8, #b91c1c)',
        borderRadius: '4px'
      }}></span>
      This conference seeks to:
    </h3>
    
    <div className="purpose-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    }}>
      {[
        {
          title: "Foster collaboration",
          content: "across diverse fields such as biotechnology, medicine, public health, environmental science and allied health disciplines.",
          icon: "🤝"
        },
        {
          title: "Promote knowledge exchange",
          content: "by showcasing cutting-edge research, emerging technologies and best practices in healthcare and life sciences.",
          icon: "💡"
        },
        {
          title: "Encourage translational research",
          content: "that bridges the gap between scientific discovery and clinical or community application.",
          icon: "🌉"
        },
        {
          title: "Support sustainable health strategies",
          content: "that contribute to global wellbeing, resilience and equity.",
          icon: "🌍"
        }
      ].map((item, index) => (
        <div key={index} className="purpose-box" style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          borderTop: '4px solid #1d4ed8',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            fontSize: '4rem',
            opacity: '0.1',
            lineHeight: '1',
            zIndex: -1
          }}>
            {item.icon}
          </div>
          <h4 style={{
            color: '#1d4ed8',
            fontSize: '1.3rem',
            fontWeight: '700',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              fontSize: '1.5rem'
            }}>{item.icon}</span>
            {item.title}
          </h4>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#475569',
            margin: 0
          }}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="highlights-section" style={{
  padding: '6rem 2rem',
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* Decorative elements */}
  <div style={{
    position: 'absolute',
    top: '-50px',
    left: '-50px',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    zIndex: 0
  }}></div>
  
  <div style={{
    margin: '0 auto',
    position: 'relative',
    maxWidth: '1200px',
    zIndex: 1
  }}>
    <h2 style={{
      color: '#1d4ed8',
      fontSize: '2.8rem',
      fontWeight: '800',
      marginBottom: '1rem',
      position: 'relative',
      display: 'inline-block',
    }}>
      Key Highlights
      <span style={{
        position: 'absolute',
        bottom: '-10px',
        left: '25%',
        width: '50%',
        height: '4px',
        background: 'linear-gradient(90deg, #1d4ed8, #b91c1c)',
        borderRadius: '2px'
      }}></span>
    </h2>
    
    <p style={{
      fontSize: '1.2rem',
      color: '#475569',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 3rem auto',
      lineHeight: '1.6'
    }}>
      Discover the premier features that make ICLSMHA-2026 a must-attend event for healthcare and life sciences professionals
    </p>
    
    <div className="highlights-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem'
    }}>
      {[
        {
          icon: '🌍',
          title: 'Global Platform',
          description: 'Collaboration among researchers, healthcare professionals, and academic leaders'
        },
        {
          icon: '🧬',
          title: 'Multidisciplinary Focus',
          description: 'Spanning life sciences, biotechnology, public health, environmental science, and medical research'
        },
        {
          icon: '🎤',
          title: 'Keynote Addresses',
          description: 'By internationally renowned scientists, clinicians, and policy experts'
        },
        {
          icon: '📑',
          title: 'Research Presentations',
          description: 'Across diverse tracks with opportunities for publication'
        },
        {
          icon: '🤝',
          title: 'Networking Sessions',
          description: 'Foster partnerships between academia, industry, and healthcare institutions'
        },
        {
          icon: '🏆',
          title: 'Best Paper Awards',
          description: 'Recognizing outstanding contributions in research and presentation'
        },
        {
          icon: '🌱',
          title: 'Sustainability Integration',
          description: 'Discussions on innovations for long-term global health impact'
        },
        {
          icon: '📚',
          title: 'Workshops & Panels',
          description: 'On emerging trends, challenges, and solutions in healthcare and life sciences'
        }
      ].map((highlight, index) => (
        <div key={index} className="highlight-box" style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          borderLeft: '4px solid #1d4ed8',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.12)'
          }
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            fontSize: '5rem',
            opacity: '0.05',
            lineHeight: '1',
            zIndex: 0
          }}>
            {highlight.icon}
          </div>
          <h3 style={{
            color: '#1d4ed8',
            fontSize: '1.4rem',
            fontWeight: '700',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            position: 'relative',
            zIndex: 1
          }}>
            <span style={{
              fontSize: '1.8rem',
              background: 'linear-gradient(135deg, #1d4ed8, #b91c1c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>{highlight.icon}</span>
            {highlight.title}
          </h3>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#475569',
            margin: 0,
            position: 'relative',
            zIndex: 1
          }}>
            {highlight.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        <div style={{ padding: '0 2rem', maxWidth: '1400px', margin: '0 auto' }}>
  {/* Publication Opportunities Section */}
  <section className="conference-info" style={{
    background: 'white',
    padding: '3rem',
    margin: '3rem auto',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    borderTop: '6px solid #1d4ed8',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      position: 'absolute',
      top: '0',
      right: '0',
      width: '150px',
      height: '150px',
      background: 'radial-gradient(circle, rgba(29,78,216,0.08) 0%, rgba(29,78,216,0) 70%)',
      zIndex: 0
    }}></div>
    
    <h2 style={{
      color: '#1d4ed8',
      fontSize: '2.2rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      position: 'relative',
      zIndex: 1
    }}>
      Conference Proceedings & Indexed Publication Opportunities
    </h2>
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      position: 'relative',
      zIndex: 1
    }}>
      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#334155',
        margin: 0
      }}>
        Selected papers will be published in our conference proceedings with ISBN. Outstanding research will have opportunities for publication in Scopus and Web of Science indexed journals.
      </p>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        marginTop: '1rem',
        flexWrap: 'wrap'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundColor: '#f0f7ff',
          padding: '0.8rem 1.5rem',
          borderRadius: '8px'
        }}>
          <img src="/logos/scopus-logo.png" alt="Scopus" style={{ height: '40px' }} />
          <span style={{ fontWeight: '600', color: '#1d4ed8' }}>Scopus Indexed</span>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundColor: '#f0f7ff',
          padding: '0.8rem 1.5rem',
          borderRadius: '8px'
        }}>
          <img src="/logos/clarivate-logo.png" alt="Clarivate" style={{ height: '40px' }} />
          <span style={{ fontWeight: '600', color: '#1d4ed8' }}>Web of Science</span>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundColor: '#f0f7ff',
          padding: '0.8rem 1.5rem',
          borderRadius: '8px'
        }}>
          <img src="/logos/isbn-logo.png" alt="ISBN" style={{ height: '40px' }} />
          <span style={{ fontWeight: '600', color: '#1d4ed8' }}>ISBN Proceedings</span>
        </div>
      </div>
    </div>
  </section>

  {/* Who Can Attend Section */}
  <section className="conference-info" style={{
  background: 'white',
  padding: '3rem',
  margin: '3rem auto',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  borderTop: '6px solid #059669',
  position: 'relative',
  overflow: 'hidden',
  maxWidth: '1400px'
}}>
  <div style={{
    position: 'absolute',
    top: '0',
    right: '0',
    width: '150px',
    height: '150px',
    background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, rgba(5,150,105,0) 70%)',
    zIndex: 0
  }}></div>
  
  <h2 style={{
    color: '#1d4ed8',
    fontSize: '2.2rem',
    fontWeight: '800',
    marginBottom: '2rem',
    position: 'relative',
    zIndex: 1,
    textAlign: 'center'
  }}>
    Who Can Attend ICLSMHA-2026?
  </h2>
  
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '1.5rem',
    position: 'relative',
    zIndex: 1
  }}>
    {[
      {
        icon: '🔬',
        title: 'Researchers & Academicians',
        description: 'From life sciences, psychology, public health, education and healthcare disciplines.',
        color: '#6366f1'
      },
      {
        icon: '👩‍⚕️',
        title: 'Healthcare Professionals',
        description: 'Physicians, nurses, therapists, psychologists, and public health specialists.',
        color: '#ec4899'
      },
      {
        icon: '🎓',
        title: 'Students & Scholars',
        description: 'Undergraduate, postgraduate, and doctoral students in relevant fields.',
        color: '#f59e0b'
      },
      {
        icon: '🏢',
        title: 'Industry Professionals',
        description: 'From biotech, pharma, digital health, and medical devices industries.',
        color: '#10b981'
      },
      {
        icon: '🏛️',
        title: 'Policy Makers & NGOs',
        description: 'Engaged in health advocacy and public health initiatives.',
        color: '#3b82f6'
      },
      {
        icon: '👩‍🏫',
        title: 'Educators & Social Workers',
        description: 'Contributing to health awareness and community engagement.',
        color: '#8b5cf6'
      },
      {
        icon: '💻',
        title: 'Tech Experts',
        description: 'Working in healthcare AI, telemedicine, and bioinformatics.',
        color: '#ef4444'
      },
      {
        icon: '🌐',
        title: 'Global Participants',
        description: 'International delegates passionate about healthcare innovation.',
        color: '#06b6d4'
      }
    ].map((item, index) => (
      <div key={index} style={{
        background: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        borderTop: `4px solid ${item.color}`,
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 10px 25px rgba(0,0,0,0.1), 0 0 0 2px ${item.color}20`
        }
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: `${item.color}10`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            color: item.color
          }}>
            {item.icon}
          </div>
          <h3 style={{
            color: '#1d4ed8',
            fontSize: '1.3rem',
            fontWeight: '700',
            margin: 0
          }}>
            {item.title}
          </h3>
        </div>
        <p style={{
          color: '#475569',
          lineHeight: '1.6',
          fontSize: '1rem',
          margin: 0,
          paddingLeft: '66px'
        }}>
          {item.description}
        </p>
      </div>
    ))}
  </div>
</section>
</div>
<section style={{
  background: 'white',
  padding: '3rem 2rem',
  maxWidth: '1000px',
  margin: '2rem auto',
  borderRadius: '12px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
}}>
  <h2 style={{
    color: '#1d4ed8',
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '2rem',
    textAlign: 'center'
  }}>
    Conference Objectives
  </h2>

  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2.5rem'
  }}>
    {[
      "Promote interdisciplinary research in life sciences and healthcare",
      "Facilitate knowledge exchange among professionals",
      "Translate scientific discoveries into practical solutions",
      "Address global health challenges sustainably",
      "Foster professional networking worldwide"
    ].map((item, index) => (
      <div key={index} style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem'
      }}>
        <div style={{
          minWidth: '24px',
          height: '24px',
          backgroundColor: '#1d4ed8',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          {index + 1}
        </div>
        <p style={{
          color: '#334155',
          margin: '0',
          lineHeight: '1.6'
        }}>
          {item}
        </p>
      </div>
    ))}
  </div>

  <div style={{
    backgroundColor: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '8px',
    borderLeft: '3px solid #1d4ed8',
    textAlign: 'center'
  }}>
    <p style={{
      color: '#1e293b',
      margin: '0',
      fontStyle: 'italic',
      lineHeight: '1.6'
    }}>
      Uniting professionals to advance health solutions worldwide.
    </p>
  </div>
</section>
        <section className="submission-deadlines">
  <h2>Submission Deadlines</h2>
  <div className="deadlines-grid">
    <div className="deadline-box">
      <div className="deadline-title">Early bird registration</div>
      <div className="deadline-date">30<sup>th</sup><br />Jun 2025</div>
    </div>
    <div className="deadline-box">
      <div className="deadline-title">Abstract submission</div>
      <div className="deadline-date">31<sup>st</sup><br />Jul 2025</div>
    </div>
    <div className="deadline-box">
      <div className="deadline-title">Full paper submission</div>
      <div className="deadline-date">31<sup>st</sup><br />Aug 2025</div>
    </div>
    <div className="deadline-box">
      <div className="deadline-title">Final Registration</div>
      <div className="deadline-date">30<sup>th</sup><br />Sep 2025</div>
    </div>
  </div>
  <p style={{ marginTop: '1rem' }}>
    For detailed submission guidelines, please visit the <a href="#" style={{ color: '#6366f1', fontWeight: 'bold' }}>Submission Guidelines Page</a>
  </p>
</section>

<section className="session-tracks" style={{
  padding: '3rem 2rem',
  maxWidth: '1400px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif'
}}>
  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
    <h2 style={{
      color: '#1d4ed8',
      fontSize: '2.2rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    }}>
      Session Tracks / Call for Papers
    </h2>
    <p style={{
      color: '#64748b',
      fontSize: '1.1rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      Explore interdisciplinary presentations spanning life sciences and healthcare topics.
    </p>
  </div>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem'
  }}>
    {[
      "Pharmacology and Toxicology",
      "COVID-19 Research",
      "Emerging Frontiers in Life Sciences",
      "Digital Healthcare Innovation",
      "Multidisciplinary Medicine",
      "Public Health and Epidemiology",
      "Climate and Environmental Health",
      "Food Security and Nutrition",
      "Regenerative Therapies",
      "Advanced Medical Imaging",
      "Biomedical Technologies",
      "Mental Health Research",
      "Infectious Disease Strategies",
      "Maternal and Child Health",
      "Healthcare Psychology",
      "Healthcare Systems Management"
    ].map((track, index) => (
      <div key={index} style={{
        background: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{
          color: '#1d4ed8',
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBottom: '0.8rem'
        }}>
          {track}
        </h3>
        <p style={{
          color: '#64748b',
          fontSize: '0.95rem',
          lineHeight: '1.5',
          marginBottom: '1.2rem'
        }}>
          Present your research on {track.toLowerCase()} and related areas.
        </p>
        <button style={{
          background: 'none',
          color: '#1d4ed8',
          border: '1px solid #1d4ed8',
          padding: '0.4rem 1rem',
          borderRadius: '4px',
          fontSize: '0.9rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          ':hover': {
            background: '#1d4ed8',
            color: 'white'
          }
        }}>
          Submit Abstract
        </button>
      </div>
    ))}
  </div>
</section>

<section style={{
  maxWidth: '1200px',
  margin: '2rem auto',
  padding: '2rem',
  background: '#f8fafc',
  borderRadius: '12px',
  fontFamily: 'Arial, sans-serif'
}}>
  {/* Header */}
  <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
    <h2 style={{
      color: '#1d4ed8',
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '0.5rem'
    }}>
      Why Join <span style={{ color: '#059669' }}>ICLSMHA-2026?</span>
    </h2>
    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
      Discover what makes our conference unique.
    </p>
  </div>

  {/* Grid Cards */}
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  }}>
    {[
      { icon: '🌐', title: 'Global Networking', desc: 'Connect with experts worldwide' },
      { icon: '💡', title: 'Latest Research', desc: 'Cutting-edge healthcare innovations' },
      { icon: '🤝', title: 'Collaborations', desc: 'Build partnerships for future projects' },
      { icon: '🎤', title: 'Interactive Sessions', desc: 'Engaging workshops & discussions' },
      { icon: '🚀', title: 'Healthcare Innovation', desc: 'Shape the future of medicine' },
      { icon: '🏙️', title: 'Vibrant Location', desc: 'In beautiful Kuala Lumpur' }
    ].map((item, index) => (
      <div key={index} style={{
        background: 'white',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        textAlign: 'center',
        transition: 'transform 0.2s',
        ':hover': { transform: 'translateY(-4px)' }
      }}>
        <span style={{
          fontSize: '2rem',
          display: 'block',
          marginBottom: '1rem'
        }}>{item.icon}</span>
        <h3 style={{
          color: '#1d4ed8',
          fontSize: '1.2rem',
          fontWeight: '600',
          marginBottom: '0.5rem'
        }}>{item.title}</h3>
        <p style={{ color: '#475569', margin: '0' }}>{item.desc}</p>
      </div>
    ))}
  </div>

  {/* Footer CTA */}
  <p style={{
    color: '#1d4ed8',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '1.1rem',
    marginTop: '1rem'
  }}>
    Be part of the conversation that’s transforming global healthcare.
  </p>
</section>
<section style={{
  maxWidth: '1200px',
  margin: '3rem auto',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem'
}}>
  <h2 style={{
    color: '#1d4ed8',
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '1rem'
  }}>
    Registration Steps
  </h2>

  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem'
  }}>
    {/* Registration Steps */}

    {/* Image */}
    <div style={{
      flex: '1',
      minWidth: '300px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={image}
        alt="Conference registration" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  </div>

  <button style={{
    backgroundColor: '#1d4ed8',
    color: 'white',
    border: 'none',
    padding: '0.8rem 2rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#1e40af'
    }
  }}>
    Register Now
  </button>
</section>

<section style={{
  maxWidth: '1200px',
  margin: '3rem auto',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem'
}}>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem'
  }}>
    {/* Registration Steps */}

    {/* Image */}
    <div style={{
      flex: '1',
      minWidth: '300px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={img}
        alt="Conference registration" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  </div>
</section>
      </main>

      <footer className="footer">
        #CERADA Supports SDGs | Contact: info@icetmrs.com | +91 8072381719
      </footer>
    </div>
  );
};

export default App;
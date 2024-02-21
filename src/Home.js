import React, { useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Home.css';

const Home = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = () => {
      // Check if the CSS animation is still running
      if (animationRef.current && !animationRef.current.getAnimations().some(animation => animation.playState === 'running')) {
        // Redirect to the URL for the menu page
        window.location.href = 'http://localhost:3100/menu';
      }
    };

    // Add event listener for mouse down
    document.body.addEventListener('mousedown', handleMouseDown);

    // Cleanup function to remove event listener
    return () => {
      document.body.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      <div ref={animationRef} className="animated-element">
        <div className="a-long-time-ago">
            A long time ago, in a galaxy far,<br /> far away...
        </div>
        <div className="logo">
          <img alt="logo" src="Star_Wars_Logo.jpg" />
        </div>
        <div className="crawl">
          <div>
              <p>
                  It is a period of civil war.
                  Rebel spaceships, strikings
                  from a hidden base, have won
                  their first victory against
                  the evil Galactic Empire.
              </p>
              <p>
                  During the battle, Rebel
                  spies managed to steal secret
                  plans to the Empire's
                  ultimate weapon, the DEATH
                  STAR, an armored space
                  station with enough power to
                  destroy an entire planet.
              </p>
              <p>
                  Pursued by the Empire's
                  sinister agents, Princess
                  Leia races home aboard her
                  starship, custodian of the
                  stolen plan that can save
                  her people and restore
                  freedom to the galaxy....
              </p>
          </div>
        </div>
      </div>
      <ReactAudioPlayer
        src="audio/Star-Wars.mp3"
        autoPlay
      />
    </>
  );
}

export default Home;

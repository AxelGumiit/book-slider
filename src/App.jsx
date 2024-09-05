import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { useRef } from "react";
import { useEffect } from "react";

function App() {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isPlaying) {
      audio.play();
    }
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <>
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>

      {!isPlaying && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <button
            onClick={handlePlay}
            className="bg-white text-black px-6 py-3 rounded-lg shadow-lg"
          >
            Play
          </button>
        </div>
      )}
      <audio ref={audioRef} src="/audios/ikaw at ako.mp3" loop />
    </>
  );
}

export default App;

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loading">
        <p>Loading {Math.round(progress)}%</p>
        {/* You can add a spinner or other loading indicator */}
      </div>
    </Html>
  );
};

export default CanvasLoader;

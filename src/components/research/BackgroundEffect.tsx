
const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-200 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-60 h-60 rounded-full bg-green-200 filter blur-3xl"></div>
      <div className="absolute top-2/3 right-1/3 w-32 h-32 rounded-full bg-purple-200 filter blur-3xl"></div>
    </div>
  );
};

export default BackgroundEffect;

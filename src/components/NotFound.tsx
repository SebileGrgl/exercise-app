import notFound from "../assets/not-found.png";

const NotFound = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-3">
      <div className="flex justify-between items-center gap-3">
        <img src={notFound} alt="not-found" width={40} />
        <h2 className="text-4xl text-primary/60 ">Ooops!</h2>
      </div>
      <p className="font-light text-sm text-primary/60">{title}</p>
    </div>
  );
};

export default NotFound;

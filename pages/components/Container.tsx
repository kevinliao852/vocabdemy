export const Container = ({ title, children }: any) => {
  return (
    <div className="min-w-max container mx-auto max-w-4xl py-5 my-10 theme-main">
      <h1 className="text-center ">{title}</h1>
      <div className="theme-second py-10 m-10 rounded max-w-sm mx-auto">
        {children}
      </div>
    </div>
  );
};

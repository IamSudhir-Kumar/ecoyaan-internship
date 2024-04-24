const Home = () => {
    return (
      <>
        <div className="flex h-screen w-full flex-col items-center justify-center p-6 text-slate-400/0 xl:text-slate-400">
          <div className="grid h-full w-full grid-cols-3 gap-4">
            <div className="col-span-2 row-span-3 border">
              <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl bg-slate-200 px-12 text-center">
                <h1 className="text-6xl font-bold">Pawsome Pet Supplies</h1>
                <h3 className="text-3xl font-semibold">
                  Everything Your Furry Friend Needs
                </h3>
              </div>
            </div>
            <div className="row-span-4 gridItemClasses border">Adventure Gear</div>
            <div className="row-span-3 gridItemClasses border">Gourmet Delights</div>
            <div className="row-span-3 gridItemClasses border">Playtime Essentials</div>
            <div className="row-span-2 gridItemClasses border">Cozy Comfort</div>
          </div>
        </div>
      </>
    );
  };
  
  <script setup>
  const gridItemClasses = `rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold`;
  </script>
  
  export default Home;
  
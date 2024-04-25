const Home = () => {
  return (
    <>
     <div className="parent flex h-screen w-full flex-col items-center justify-center p-6 text-slate-400/0 xl:text-slate-400">
  <div className="grid h-full w-full grid-cols-1 md:grid-cols-3 gap-4">
    <div className="div1 col-start-2 col-end-3 row-start-1 row-end-3 border">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl bg-slate-200 px-12 text-center">
        <h1 className="text-6xl font-bold">Pawsome Pet Supplies</h1>
        <h3 className="text-3xl font-semibold">Everything Your Furry Friend Needs</h3>
      </div>
    </div>
    <div className="div2 row-start-1 row-end-2 md:row-span-4 gridItemclassNamees border">Adventure Gear</div>
    <div className="div3 row-start-2 row-end-3 md:row-span-3 gridItemclassNamees border">Gourmet Delights</div>
    <div className="row-start-3 row-end-4 md:row-span-3 gridItemclassNamees border">Playtime Essentials</div>
  </div>
</div>

    </>
  );
};

<script setup>
const gridItemclassNamees = `rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold`;
</script>

export default Home;

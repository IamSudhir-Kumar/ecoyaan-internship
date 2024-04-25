const Home = () => {
  return (
    <div className="m-7">
      <div className=" flex h-screen w-full flex-col items-center justify-center p-6">
        <div className="grid h-full w-full grid-cols-1 md:grid-cols-3 gap-2">
          <div className=" col-start-3 col-end-4 row-start-1 row-end-8 border">
            <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl bg-[#436850] px-12 text-center">
              <h1 className="text-6xl font-bold">Pawsome Pet Supplies</h1>
              <h3 className="text-3xl font-semibold">Everything Your Furry Friend Needs</h3>
            </div>
          </div>
          <div className=" col-start-1 col-end-3 md:row-span-4  bg-white border rounded-3xl flex-col px-5 py-5">
            <h1 className="text-3xl">Join our community in creating a more sustainable future for everyone</h1>
            <h3 className="text-3xl font-semibold">At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</h3>
          </div>
          <div className=" col-start-1 col-end-2 md:row-span-3  bg-[#FDCB9E] border rounded-3xl">Gourmet Delights</div>
          <div className="col-start-2 col-end-3 md:row-span-3  bg-[#3F3F44] border rounded-3xl">Playtime Essentials</div>
        </div>
      </div>

    </div>
  );
};

<script setup>
  const gridItemclassNamees = `rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold`;
</script>

export default Home;

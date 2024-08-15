import Card from "@/components/ui/Card";

const DressStyle = () => {
  return (
    <Card className="flex min-h-96 w-full flex-col gap-8 p-12">
      <h2 className="text-center font-integral text-3xl font-bold uppercase lg:text-5xl">
        browse by dress style
      </h2>

      <div className="grid grid-cols-1 gap-y-4 text-2xl font-bold lg:grid-cols-5 lg:grid-rows-2 lg:gap-4">
        <div className="col-span-2 h-64 w-full rounded-[20px] bg-white p-6">
          <p>Casual</p>
          {/* Image */}
        </div>

        <div className="col-span-3 h-64 rounded-[20px] bg-white p-6">
          <p>Formal</p>
          {/* Image */}
        </div>

        <div className="col-span-3 h-64 rounded-[20px] bg-white p-6">
          <p>Party</p>
          {/* Image */}
        </div>

        <div className="col-span-2 h-64 rounded-[20px] bg-white p-6">
          <p>Gym</p>
          {/* Image */}
        </div>
      </div>
    </Card>
  );
};

export default DressStyle;

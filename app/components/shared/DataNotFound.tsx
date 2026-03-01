export default function DataNotFound() {
  return (
    <div className="flex justify-between items-center h-screen">
      <h2 className="text-2xl font-semibold text-center mt-10">Data Not Found</h2>
      <p className="text-center text-gray-500 mt-4">
        Sorry, we could not find the data you are looking for. Please try again later.
      </p>
    </div>
  );
}

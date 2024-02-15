const UploadModal = () => {
  return (
    <div className="fixed inset-0 z-[99999] bg-black bg-opacity-35 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-slate-800 px-2 py-4 rounded-lg flex flex-col items-center justify-center">
        <form action="" className="flex flex-col items-center justify-center">
          <input type="text" className="m-2" placeholder="Insert the book name"/>
          <input type="text" className="m-2" placeholder="Insert the Author's name" />
          <input type="number" className="m-2" placeholder="Total amount of pages" />
          <input type="number" className="m-2" placeholder="Current read page" />
          <input type="file" accept=".jpg, .png" className="m-2" placeholder="Insert the book cover" />
          <button role="submit" className="mt-2 py-2 px-5">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
"use client";
import UploadModal from "@/components/UploadModal";
import { useState } from "react";

const openUploadModal = () => {
  return (
    <UploadModal />
  );
};

export default function Home() {
  const [uploadModalActive, setUploadModalActive] = useState(false);

  return (
    <div className="flex h-[90vh] items-center justify-center overflow-y-hidden" >
      <button onClick={() => setUploadModalActive(true)}>
        Upload a Book
      </button>
      <div>
        {uploadModalActive && (
          <UploadModal />
        )}
      </div>
    </div>
  );
}

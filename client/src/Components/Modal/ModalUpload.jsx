import { useState } from "react";
import Button from "@mui/material/Button";
import "./modalUpload.css";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleModalClose = () => {
    setFile(null);
    setIsOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    handleModalClose();
  };

  return (
    <>
      <Button className="btnModal" onClick={() => setIsOpen(true)}>
        Upload Entry
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>

          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Upload Your Entry</h2>

              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Choose a picture:
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="border rounded py-2 px-3"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    type="submit"
                  >
                    Upload
                  </button>

                  <button
                    className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={handleModalClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;

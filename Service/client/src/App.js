import "./App.css";
import { useRef, useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  console.log(file);
  return (
    <>
      <div className="container">
        <div className="image-area">Image</div>
        <div className="text-area">
          <h1>File Sharing</h1>
          <p>Upload and share the download link</p>
          <button onClick={() => onUploadClick()}>Upload</button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <a href={result} target="_black">
            {result}
          </a>
          <div className="qr-image">
            <h3>Scan To Download</h3>
            <QRCodeCanvas value={result} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

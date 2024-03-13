import React, { useCallback, useState } from "react";
import FileUploader, {
  FileUploaderTypes,
} from "devextreme-react/file-uploader";


const FileUpload: React.FC = () => {
  let data:any = localStorage.getItem("data");
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  // console.log(data);
  const [selectedFiles, setSelectedFiles] =
    useState(data);
    
    // console.log(localStorage.getItem("data"));
    const onSelectedFilesChanged = useCallback(
      (e: FileUploaderTypes.ValueChangedEvent) => {
      console.log(e.value)
     
    
  
     
      
      
      let all:any=e.value 
      let arr = [...selectedFiles];
      if (e.value) {
        for (let i of all) {
          arr.push({
            name: i.name,
            lastModified: i.lastModified,
            size: i.size,
            type: i.type,
          });
        }
      }
      localStorage.setItem("data", JSON.stringify(arr));
    all?.unshift(...selectedFiles)
      setSelectedFiles(e.value)
  
    },
    [setSelectedFiles]
  );

  return (
    <div>
      <div className="widget-container">
        <FileUploader
          multiple={true}
          accept={"*"}
          uploadMode={"instantly"}
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          onValueChanged={onSelectedFilesChanged}
        />
        <div>
          <h4>Selected Files</h4>
          {selectedFiles?.map((file:any, i:any) => (
            <div
              className="selected-item"
              key={i}
              style={{ marginTop: "2rem" }}
            >
              <span>
                {`Name: ${file.name}`}
                <br />
              </span>
              <span>
                {`Size ${file.size}`}
                <br />
              </span>
              <span>
                {`Type ${file.type}`}
                <br />
              </span>
              <span>{`Last Modified Date: ${file.lastModified}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;

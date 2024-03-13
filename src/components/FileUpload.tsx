import React, { useCallback, useState } from "react";
import FileUploader, {
  FileUploaderTypes,
} from "devextreme-react/file-uploader";


const FileUpload: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<
    FileUploaderTypes.ValueChangedEvent["value"]
  >([]);


  const onSelectedFilesChanged = useCallback(
    (e: FileUploaderTypes.ValueChangedEvent) => {
        console.log(e.value)
        e.value?.forEach((e)=>console.log(e.lastModified))
      setSelectedFiles(e.value);
 
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
          {selectedFiles?.map((file, i) => (
            <div className="selected-item" key={i}>
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

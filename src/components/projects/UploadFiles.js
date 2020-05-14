import React, {useCallback } from 'react';
import {useDropzone} from 'react-dropzone';


function UploadFiles()  {
 
    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      console.log(acceptedFiles);
    }, []);
    
  
   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  
    return (
      <div>
          <h4>Hello, in this page you can drag and drop files, upload, download and delete them.</h4>
          <div {...getRootProps()} className="dropzone-container">
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
          </div>
            <div className='input-field'>
                <button className="btn red lighten-1 z-depth-2"  >upload files</button>
                <button className="btn pink lighten-1 z-depth-2" >download files</button>
                <button className="btn green lighten-1 z-depth-2" >delete files</button>
            </div>
      </div>
      
      
    )
  }
export default UploadFiles;
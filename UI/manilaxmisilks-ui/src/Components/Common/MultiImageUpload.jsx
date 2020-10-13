import React, { useState, useEffect } from "react";
import MultiImageInput from "react-multiple-image-input";

function MultiImageUpload(props) {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  const [images, setImages] = useState({});

  useEffect(() => {
    props.handleCountChange(images);
  }, [images]);

  return (
    <React.Fragment>
      <div className="form-group">
        <label className="m-1">{"Images"}</label>
        <MultiImageInput
          max={6}
          images={images}
          setImages={setImages}
          allowCrop={false}
          cropConfig={{ crop, ruleOfThirds: true }}
          theme={{
            background: "#ffffff",
            outlineColor: "#ced4da",
            textColor: "rgba(255,255,255,0.6)",
            buttonColor: "#D41872",
            modalColor: "#ffffff",
          }}
        />
        <small className="form-text text-muted">
          Only upto 6 image selection is allowed
        </small>
      </div>
    </React.Fragment>
  );
}

export default MultiImageUpload;

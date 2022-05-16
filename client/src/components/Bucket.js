import React from 'react';
import styled from 'styled-components';

import { mixColor } from '../util/color.js';

const BucketView = styled.div`
  border: 10px solid #505050;
  border-radius: 50%;
  width: 600px;
  height: 600px;
  background-color: ${({hex}) => hex};
`

const Bucket = ({bucket, addDrop}) => {
  var hex = mixColor(bucket);
  if (hex === '#ffffff') {
    hex = '#b7b7b7';
  }
  return (
    <div className="bucket-container" onClick={addDrop}>
      <BucketView hex={hex}/>
    </div>
  );
};

export default Bucket;
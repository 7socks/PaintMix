import React from 'react';
import styled from 'styled-components';
import { colord, extend} from 'colord';
import cmykPlugin from 'colord/plugins/cmyk';
extend([cmykPlugin]);

const BucketView = styled.div`
  border: 10px solid #505050;
  border-radius: 50%;
  width: 600px;
  height: 600px;
  background-color: ${({hex}) => hex};
`

const Bucket = ({bucket}) => {
  var hex = colord({
    c: bucket.c,
    m: bucket.m,
    y: bucket.y,
    k: 0
  }).toHex();
  return (
    <div className="bucket-container">
      <BucketView hex={hex}/>
    </div>
  );
};

export default Bucket;
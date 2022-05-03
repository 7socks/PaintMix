import React from 'react';
import styled from 'styled-components';

const BucketView = styled.div`
  border: 10px solid gray;
  border-radius: 50%;
  width: 600px;
  height: 600px;
`

const Bucket = ({bucket}) => {
  return (
    <div className="bucket-container">
      <BucketView/>
    </div>
  );
};

export default Bucket;
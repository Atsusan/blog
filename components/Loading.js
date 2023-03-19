import { FaSpinner } from 'react-icons/fa';
import { css } from '@emotion/core';
import { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // 3秒後にローディングを非表示にする
  }, []);

  return (
    <div className="loading-wrapper">
      <ScaleLoader color="#fff" loading={loading} css={override} />
      <p>Now Loading...</p>
    </div>
  );
}

export default Loading;

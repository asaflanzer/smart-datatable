import { useState, useEffect } from 'react';
// lib
import { fetchFeatures, fetchModelMetadata } from '../lib/mock-api';

export default function useQueryFeatures() {
  const [loading, setLoading] = useState(false);
  const [features, setFeatures] = useState([]);
  const [metadata, setMetaData] = useState({});

  useEffect(() => {
    const getFeatures = async () => {
      setLoading(true);
      const res = await fetchFeatures();
      // console.log('features', res);

      res.map((item) => {
        return setFeatures((features) => [...features, item.attributes]);
      });
    };
    getFeatures();

    const getModelMetadata = async () => {
      const res = await fetchModelMetadata();
      //console.log('metadata', res);
      setMetaData(res);
      setLoading(false);
    };
    getModelMetadata();
  }, []);

  return { loading, features, metadata };
}

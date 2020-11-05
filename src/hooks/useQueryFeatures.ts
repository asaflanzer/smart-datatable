import { useState, useEffect } from 'react';
// lib
import { fetchFeatures, fetchModelMetadata } from '../lib/mock-api';
import { INodeAttributes, IModelMetadata } from '../lib/types';

export default function useQueryFeatures() {
  const [loading, setLoading] = useState(false as boolean);
  const [features, setFeatures] = useState([] as INodeAttributes[]);
  const [metadata, setMetaData] = useState({} as IModelMetadata);

  useEffect(() => {
    const getFeatures = async () => {
      setLoading(true);
      const res = await fetchFeatures();
      // console.log('features', res);
      const featuresArray: INodeAttributes[] = res.map((item) => item.attributes);
      setFeatures(featuresArray);
    };
    getFeatures();

    const getModelMetadata = async () => {
      const res: IModelMetadata = await fetchModelMetadata();
      //console.log('metadata', res);
      setMetaData(res);
      setLoading(false);
    };
    getModelMetadata();
  }, []);

  return { loading, features, metadata };
}

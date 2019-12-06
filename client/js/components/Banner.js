import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import _isEmpty from 'lodash.isempty';
import { useContentful } from '../utils/customHooks';

const Banner = props => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState([]);
  const { id } = props;
  const [centerMode, setCenterMode] = useState(
    !window.matchMedia('(min-width: 600px)').matches
  );

  const resizeEvent = () =>
    setCenterMode(!window.matchMedia('(min-width: 600px)').matches);

  useEffect(() => {
    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);

  const client = useContentful();

  const fetchData = async () => {
    try {
      const response = await client.getEntry(id);
      setTitle(response.fields.title);
      setImg(response.fields.images);
    } catch (err) {
      console.warn(err || 'Could not get a response from Contentful');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!title && _isEmpty(img)) {
    return null;
  }

  return (
    <div className="logos">
      <Container>
        <h4>{title}</h4>
        <div className="logos-list">
          {centerMode
            ? !_isEmpty(img) && <img src={img[1].fields.file.url} />
            : img.map(img => {
                return <img key={img.sys.id} src={img.fields.file.url} />;
              })}
        </div>
      </Container>
    </div>
  );
};

export default Banner;

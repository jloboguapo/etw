import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useContentful } from '../utils/customHooks';

const Banner = () => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState([]);

  const client = useContentful();

  const fetchData = async () => {
    const response = await client.getEntries({
      include: 10,
      content_type: 'banner'
    });

    setTitle(response.items[0].fields.title);
    setImg(response.items[0].fields.images);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="logos">
      <Container>
        <h4>{title}</h4>
        <div className="logos-list">
          {img.map(img => {
            return <img key={img.sys.id} src={img.fields.file.url} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Banner;

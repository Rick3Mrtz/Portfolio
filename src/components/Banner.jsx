const Banner = ({ images, speed = 20000 }) => {
  
    return (
      <div className="inner">
        <div className="wrapper">
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image-icons" key={id}>
                {image.icon}
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image-icons" key={id}>
                {image.icon}
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image-icons" key={id}>
                {image.icon}
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  
  export { Banner };
  
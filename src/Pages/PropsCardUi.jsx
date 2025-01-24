
const PropsCardUI = ({ title, description, price, Image }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 border-0 shadow-sm hover-shadow-lg">
        <img
          src={Image}
          alt={title}
          className="card-img-top img-fluid rounded-top"
          style={{ objectFit: 'cover', height: '450px' }} // Adjust image size
        />
        <div className="card-body ">
          <h2 className="card-title text-dark">{title}</h2>
          <p className="card-text text-muted">{description}</p>
          <div className="mt-auto">
            <p className="card-text ">
              <strong><u>Price: ₹{price}</u></strong>
            </p>
            <button className="btn btn-primary w-100">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropsCardUI;

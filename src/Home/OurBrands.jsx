const OurBrands = ({brand}) => {
    const {id, name, img} = brand;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-64"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body bg-gray-200">
        <h2 className="card-title text-xl font-bold uppercase">{name}</h2>
        
      </div>
    </div>
  );
};

export default OurBrands;

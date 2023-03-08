const ContainerForAllDevices = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ContainerForAllDevices;

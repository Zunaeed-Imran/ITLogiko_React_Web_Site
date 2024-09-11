import PropTypes from 'prop-types';

function Card({ logo, name, title, desc }) {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <div className="flex gap-1 justify-center items-center">
            <h2 className="card-title">{logo}</h2>
            <h2 className="card-title">{name}</h2>
          </div>
          <h2 className="">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;



Card.propTypes = {
  // this code will be down to the file
  logo: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string
};
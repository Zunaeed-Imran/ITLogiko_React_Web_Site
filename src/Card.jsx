import PropTypes from 'prop-types';

function Card({ logo, title, desc }) {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{logo}</h2>
          <h2 className="card-title">{title}</h2>
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
  title: PropTypes.string,
  desc: PropTypes.string
};
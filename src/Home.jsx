import Card from "./Card"
import { GiSpiderWeb } from "react-icons/gi";

function Home() {
  return (
    <div>
      <Card
        logo={<GiSpiderWeb />}
        name={'Web Application'}
        title={'Boost Your Business with Web Apps'}
        desc={'Use web applications to communicate with customerwith employees secure storage of data and to provide data and information to management'}
      />
    </div>
  );
}

export default Home

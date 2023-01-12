import Header from "../components/user/Header";
import electric from "../assets/electric-vehicles.svg";
import local from "../assets/local-compagnies.svg";
import spot from "../assets/spot-location.svg";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center mt-12">
          <img src={electric} alt="" className="mx-14  h-48" />
          <img src={local} alt="" className="mx-14 h-48" />
          <img src={spot} alt="" className="mx-14 h-48" />
        </div>
      </div>
    </div>
  );
}

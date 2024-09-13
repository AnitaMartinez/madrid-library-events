import Image from 'next/image';
import spinnerSVG from "../../../../public/images/spinner.svg";

const Spinner = () => (
  <div>
    <Image
      src={spinnerSVG}
      alt="spinner"
    />
  </div>
)

export default Spinner

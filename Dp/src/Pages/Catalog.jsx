import FooterAll from "../Components/Footer/FooterAll"
import { useState, useEffect } from "react";
import Preloader from "./Preloader";

function Catalog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
    return (
        <div className="">

            <div className="2xl:container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 ">
             <img src="https://ik.imagekit.io/zhf0gkzac/Devipolytech/DPT_CAT_2024_page-0001.jpg?updatedAt=1728998144433" alt="markdynamics" />
            <img src="https://ik.imagekit.io/zhf0gkzac/Devipolytech/DPT_CAT_2024_page-0002.jpg?updatedAt=1728998144714" alt="markdynamics" />

         
            </div>
            <div className="flex justify-center items-center m-[20px]">
                <button className="bg-customGreen text-white p-2 rounded-lg">
                    <a href="../assets/Devipolytech.pdf" download="Devipolytech.pdf">Download ▼</a></button>
            </div>
            <FooterAll></FooterAll>
            </div>
  )
}

export default Catalog
import axios from "axios";
import { useEffect } from "react";
import Domain from "../../services/Endpoint";

const ProductPage = () => {
  const call = async () => {
    try {
      const req = await axios(`${Domain}/api/user/getUserClients`);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    call();
  }, []);
  return (
    <div>
      <h1>This is the protected product page</h1>
    </div>
  );
};

export default ProductPage;

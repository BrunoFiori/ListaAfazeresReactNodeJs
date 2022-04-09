import endPoint from "../../utils/endpoints";
import FrontRequest from "../../utils/api/FrontRequest";

const ufRegras = FrontRequest(endPoint.Fiscal.ufRegras);

export default ufRegras;

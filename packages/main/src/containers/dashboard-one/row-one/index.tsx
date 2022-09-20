import { useEffect, useState } from "react";
import axios from "axios";
import { Col } from "@doar/components";
import { conversions } from "@doar/shared/data/dashboard-one";
import Conversion from "../../../components/dashboard-one/conversion";

const RowOne: React.FC = () => {
    const [bill, setBill] = useState([]);

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const dataabc = await axios.get(
                "http://localhost:8070/student/data/62e9424ce59c791481fdae1c"
            );

            setBill(dataabc?.data);
        };

        // call the function
        fetchData().catch(console.error);
    }, []);

    return (
        <>
            {console.log("billeffef", bill)}
            {bill &&
                bill.map(({ id, title, rate, change, chart }: any) => (
                    <Col
                        sm={6}
                        lg={3}
                        mt={["10px", null, null, "0px"]}
                        key={id}
                    >
                        <Conversion
                            title={title}
                            rate={rate}
                            change={change}
                            chart={chart}
                        />
                    </Col>
                ))}
        </>
    );
};

export default RowOne;

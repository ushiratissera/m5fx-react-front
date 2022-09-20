import { FC } from "react";
import { Col } from "@doar/components";
import CryptoChart from "../../../components/dashboard-three/crypto-chart";
// import RevenueGrowth from "../../../components/dashboard-one/revenue-growth";
// import AccountRetention from "../../../components/dashboard-one/account-retention";
import Cryptcurrencies from "../../../components/dashboard-three/cryptocurrencies";

const RowTwo: FC = () => {
    return (
        <>
            <Col lg={10} xl={9} mt="10px">
                <CryptoChart />
            </Col>
            <Col lg={2} xl={3} mt="10px">
                {/* <AccountRetention /> */}
                <Cryptcurrencies />
            </Col>
        </>
    );
};

export default RowTwo;

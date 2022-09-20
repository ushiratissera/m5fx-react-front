import { FC } from "react";
import { Col } from "@doar/components";
// import SalesRevenue from "../../../components/dashboard-one/sales-revenue";
import LatestNews from "../../../components/dashboard-three/latest-news";
import RecentActivities from "../../../components/dashboard-four/recent-activities";
import AgentPoints from "../../../components/dashboard-four/agent-points";
// import RecentEarnings from "../../../components/dashboard-one/recent-earnings";
// import CSVDownload from "../../../components/dashboard-one/csv-download";

const RowThree: FC = () => {
    return (
        <>
            <Col xl={3} md={3} mt="10px" mdOrder={1} xlOrder={0}>
                <RecentActivities />
            </Col>
            <Col xl={3} lg={6} mt="10px">
                <AgentPoints />
            </Col>
            <Col xl={6} lg={6} mt="10px">
                <LatestNews />
                {/* <RecentEarnings />
                <CSVDownload /> */}
            </Col>
        </>
    );
};

export default RowThree;

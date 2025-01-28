import Sidebar from '../components/sidebar/Sidebar';
import DashBoardHeader from '../components/dashboardheader/DashBoardHeader';
import SalesInformation from '../components/salesinformation/SalesInformation';
import DashBoardTable from '../components/dashboardtable/DashBoardTable';
import '../style.css';

function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main content container */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Dashboard Header */}
                <DashBoardHeader />

                {/* Sales Information */}
                <SalesInformation />

                {/* Table container, centered */}
                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <DashBoardTable />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

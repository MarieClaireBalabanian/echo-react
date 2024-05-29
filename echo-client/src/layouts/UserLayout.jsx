import Sidebar from '../components/user/Sidebar'

const UserLayout = ({ children }) => {
    return (
        <div>
            <main>
                <div className="flex-wrapper">
                    <Sidebar />
                    {children}
                </div>
            </main>
        </div>
    );
};
export default UserLayout;
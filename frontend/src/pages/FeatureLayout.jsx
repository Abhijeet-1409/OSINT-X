import { Outlet } from 'react-router-dom';
function FeatureLayout({ }) {
  return (<>
    <div className='feature-layout'>
      <Outlet />
    </div>
  </>);
}
export default FeatureLayout;
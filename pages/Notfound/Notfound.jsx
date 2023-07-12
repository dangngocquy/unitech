import { notfound } from '../../assets/images'
import { NavLink } from 'react-router-dom'
import ButtonMain from '../../components/designLayouts/ButtonMain';

function Notfound() {
    return (
        <div className="unitech-notfound">
            <title>Unitech - 404 Not Found</title>
            {/* <img src={notfound} alt="404 not found"/> */}
            <div className='Unitech-text-notfound'>
                <img src={notfound} alt="404 not found2" />
                <span>
                    <h3>Meoz...Liên kết bạn vừa truy cập không tồn tại :3</h3>
                    <NavLink to="/">
                        <ButtonMain title={<div style={{ padding: '10px' }}>Quay lại trang chủ</div>} />
                    </NavLink>
                </span>
            </div>
        </div>
    );
}
export default Notfound;
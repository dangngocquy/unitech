import React from "react";

const CollectionRenewed = () => {
	return (
		<div className="CollectionRenewed-banner">
			<title>Unitech - Thu mua đồ công nghệ cũ</title>
			<div className="CollectionRenewed-box">
				<div>
					<h2>Thu mua đồ công nghệ cũ tại nhà</h2>
				</div>
				<p>Áp dụng các khu vực tại <u>Đồng Nai</u></p>
				<div className="box-collection-search">
					<h3>Tìm sản phẩm cần bán</h3>
					<div className="Cart-contact">
						<input type="email" placeholder="Chọn dòng sản phẩm cần bán" className="CollectionRenewed-input" />
					</div>
					{/*<div className="CollectionRenewed-call">
		        	    <FiPhoneCall size={18}/>
		        	    <p>Hotline tư vấn: 0368869899</p>
		        	</div>*/}
				</div>
			</div>
			<div className="CollectionRenewed-all">
				<div className="CollectionRenewed-text box-collec1">
					<h3>Thu mua tận nơi</h3>
					<p>Nhân viên đến tận nơi kiểm tra máy, định giá và thu mua. 100% miễn phí.</p>
				</div>
				<div className="CollectionRenewed-text box-collec2">
					<h3>Nhận tiền ngay</h3>
					<p>Nhận được tiền nhanh chóng trong vòng 24h.</p>
				</div>
				<div className="CollectionRenewed-text box-collec3">
					<h3>Thanh lý nhanh và dễ dàng</h3>
					<p>Nhận được tiền nhanh chóng trong vòng 24h.</p>
				</div>
			</div>
		</div>
	);
}
export default CollectionRenewed;
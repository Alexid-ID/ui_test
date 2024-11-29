import React from "react";
import logo from "../../images/logo.svg";
import searchIcon from "../../images/search_icon.svg";
import "./style.css";

const Header = () => {
	return (
		<header>
			<div className="logo-container">
				<img src={logo} alt="logo" />
			</div>
			<div className="search-container">
				<img src={searchIcon} alt="search" />
				<input className="search-input" type="text" placeholder="Tìm kiếm sản phẩm" />
			</div>
			<p className="text">Tạp chí</p>
		</header>
	);
};

export default Header;

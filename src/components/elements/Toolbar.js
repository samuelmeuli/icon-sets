import React from 'react';
import PropTypes from 'prop-types';
import SimpleSvg from 'react-simple-svg';

import Dropdown from './Dropdown';
import iconMoon from '../../assets/icons/moon.svg';
import iconSun from '../../assets/icons/sun.svg';
import iconPlus from '../../assets/icons/plus.svg';


const propTypes = {
	filterFormat: PropTypes.object.isRequired,
	filterLicense: PropTypes.object.isRequired,
	filterPrice: PropTypes.object.isRequired,
	sortMethods: PropTypes.arrayOf(PropTypes.string).isRequired,
	sortMethodActive: PropTypes.string.isRequired,
	setFilterFormat: PropTypes.func.isRequired,
	setFilterLicense: PropTypes.func.isRequired,
	setFilterPrice: PropTypes.func.isRequired,
	setSortMethodActive: PropTypes.func.isRequired
};

export default function Toolbar(props) {
	const {
		filterFormat,
		filterLicense,
		filterPrice,
		sortMethods,
		sortMethodActive,
		setFilterFormat,
		setFilterLicense,
		setFilterPrice,
		setSortMethodActive
	} = props;
	const iconSize = 20;
	return (
		<div className="toolbar">
			<div>
				<a
					className="button button-icon"
					href="https://github.com/samuelmeuli/iconsets.org#adding-an-icon-set"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SimpleSvg src={iconPlus} title="Add icon set" height={iconSize} width={iconSize} />
				</a>
				<button className="button button-icon" type="button">
					<SimpleSvg src={iconMoon} title="Toggle dark mode" height={iconSize} width={iconSize} />
				</button>
			</div>
			<div>
				<div>
					<Dropdown
						className="dropdown-filter-format"
						label="Format"
						filterElements={filterFormat}
						setFilterElements={setFilterFormat}
					/>
				</div>
				<div>
					<Dropdown
						className="dropdown-filter-license"
						label="License"
						filterElements={filterLicense}
						setFilterElements={setFilterLicense}
					/>
				</div>
				<div>
					<Dropdown
						className="dropdown-filter-prices"
						label="Price"
						filterElements={filterPrice}
						setFilterElements={setFilterPrice}
					/>
				</div>
				<div>
					<Dropdown
						className="dropdown-sort"
						label="Sort"
						sortMethods={sortMethods}
						sortMethodActive={sortMethodActive}
						setSortMethodActive={setSortMethodActive}
					/>
				</div>
			</div>
		</div>
	);
}

Toolbar.propTypes = propTypes;

interface props {
	title: string;
	bgClass: string;
	icon: JSX.Element;
	disclaimer?: string;
}
export const BenefitItem = ({ title, bgClass, icon, disclaimer }: props) => {
	return (
		<div className={`${bgClass} text-white p-3 rounded benefits-grid-item`}>
			<div className='icon-container'>{icon}</div>
			<h5 className='fw-500 title-benefist'>{title}</h5>
			<p className='fw-400 mt-2'>{disclaimer}</p>
		</div>
	);
};

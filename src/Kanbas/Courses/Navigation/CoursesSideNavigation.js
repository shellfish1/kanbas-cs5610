import { Link, useLocation } from "react-router-dom";

function CourseSideNavigation() {
	const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
	const { pathname } = useLocation();
	return (
		<ul className="wd-side-navigation">
			{links.map((link, index) => (
				<li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
					<Link to={link}>{link}</Link>
				</li>
			))}
		</ul>
	);
}

export default CourseSideNavigation;
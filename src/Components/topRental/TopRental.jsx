import React from "react";
import styles from "./topRental.module.css";
import { PieChart } from "@mui/x-charts/PieChart";

export const data = [
	{ id: 0, value: 17439, label: "Sport Cars" + " 17439" },
	{ id: 1, value: 17439, label: "SUV" + " 17439" },
	{ id: 2, value: 18197, label: "Coupe" + " 18197" },
	{ id: 3, value: 12510, label: "Hatchback" + " 12510" },
	{ id: 4, value: 14406, label: "MPV" + " 14406" },
];

const TopRental = () => {
	return (
		<div className={`parent-section ${styles.parent}`}>
			<div className="section-title">Top 5 Car Rental </div>
			<div className={styles.chart}>
				<PieChart
					colors={["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"]}
					series={[
						{
							data: data,
							innerRadius: 75,
							outerRadius: 100,
							paddingAngle: 5,
							cornerRadius: 5,
							startAngle: 0,
							endAngle: 360,
							cx: 100,
							cy: 170,
						},
					]}
					width={450}
					height={300}
				/>
				<p className={styles.total_Cars}>
					<span>72,030</span>
					Total Cars
				</p>
			</div>
		</div>
	);
};

export default TopRental;

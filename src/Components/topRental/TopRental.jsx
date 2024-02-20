import React from "react";
import styles from "./topRental.module.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ["Sport Car", "SUV", "Coupe", "Hatchback", "MPV"],
	datasets: [
		{
			label: "# of Rental Cars",
			data: [17439, 9478, 18197, 12510, 14406],
			backgroundColor: ["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"],
			borderWidth: 10,
		},
	],
};
const TopRental = () => {
	return (
		<div className={`parent-section ${styles.parent}`}>
			<div className="section-title">Top 5 Car Rental </div>
			<div className={styles.chart}>
				<Doughnut
					data={data}
					options={{
						responsive: true,
						plugins: {
							legend: {
								position: "right",
								labels: {
									padding: 24,
								},
							},
						},
					}}
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

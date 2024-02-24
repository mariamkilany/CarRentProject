import React, { useEffect, useState } from "react";
import styles from "./topRental.module.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { CAR_API_BASE_URL } from "../../utils/baseUrl";

// export const data = [
// 	{ id: 0, value: 17439, label: "Sport Cars" + " 17439" },
// 	{ id: 1, value: 17439, label: "SUV" + " 17439" },
// 	{ id: 2, value: 18197, label: "Coupe" + " 18197" },
// 	{ id: 3, value: 12510, label: "Hatchback" + " 12510" },
// 	{ id: 4, value: 14406, label: "MPV" + " 14406" },
// ];

const TopRental = () => {
	const [data, setData] = useState([]);
	const [totalCars, setTotalCars] = useState(0);
	let sportNum = 0,
		SUVNum = 0,
		MPVNum = 0,
		sedanNum = 0,
		coupeNum = 0,
		HatchbackNum = 0;
	useEffect(() => {
		fetch(`${CAR_API_BASE_URL}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				data?.forEach(car => {
					if (car.type === "Sports Car") sportNum++;
					else if (car.type === "SUV") SUVNum++;
					else if (car.type === "Electric Car") MPVNum++;
					else if (car.type === "Sedan") sedanNum++;
					else if (car.type === "Truck") coupeNum++;
					else if (car.type === "Hatchback") HatchbackNum++;
				});
				setTotalCars(sportNum + SUVNum + MPVNum + sedanNum + coupeNum + HatchbackNum);
				setData([
					{ id: 0, value: sportNum, label: `Sport Cars ${sportNum}` },
					{ id: 1, value: SUVNum, label: `SUV ${SUVNum}` },
					{ id: 2, value: MPVNum, label: `MPV ${MPVNum}` },
					{ id: 3, value: sedanNum, label: `Sedan ${sedanNum}` },
					{ id: 4, value: coupeNum, label: `Coupe ${coupeNum}` },
					{ id: 5, value: HatchbackNum, label: `Hatchback ${HatchbackNum}` },
				]);
			});
	}, [sportNum, SUVNum, MPVNum, sedanNum, coupeNum, HatchbackNum, setData, setTotalCars]);

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
					<span>{totalCars}</span>
					Total Cars
				</p>
			</div>
		</div>
	);
};

export default TopRental;

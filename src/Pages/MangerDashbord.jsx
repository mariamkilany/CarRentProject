import React, { useState } from "react";
import RentalDetails from "../Components/rentalDetails/RentalDetails";
import TopRental from "../Components/topRental/TopRental";
import RecentTransactions from "../Components/recentTransaction/RecentTransaction";

const MangerDashbord = () => {
	const style = {
		display: "flex",
		flexWrap: "wrap",
		gap: "2.4rem 3.2rem",
		padding: "3.2rem",
	};

	const recentCars = [
		{
			name: "Toyota Camry",
			type: "Sedan",
			image: ["https://www.example.com/toyota_camry.jpg", ""],
			id: "1001",
			steering: "Automatic",
			chairCapacity: 5,
			gasoline: 87,
			price: 55000,
			rating: 4.7,
			carDesc: "The Toyota Camry is a reliable and fuel-efficient sedan, known for its comfortable ride and spacious interior.",
			carDetails: "Model Year: 2023, Engine: 2.5L 4-cylinder, Transmission: 8-speed automatic, Fuel Economy: 28 mpg combined",
			reviews: [
				{
					userId: "101",
					userTitle: "Customer",
					reviewText: "I love my Toyota Camry! It's comfortable, reliable, and great on gas.",
					stars: 5,
					userName: "Sarah Johnson",
					userImage: "https://www.example.com/user1.jpg",
					createdAt: "2023-07-20",
				},
			],
			transactions: [
				{
					userId: "101",
					date: 1692486000,
					dropoff: {
						location: {
							latitude: 34.0522,
							longitude: -118.2437,
						},
						date: 1693064400,
					},
					pickUp: {
						location: {
							latitude: 37.7749,
							longitude: -122.4194,
						},
						date: 1692479200,
					},
				},
			],
		},
		{
			name: "Honda Accord",
			type: "Sedan",
			image: ["https://www.example.com/honda_accord.jpg", ""],
			id: "1002",
			steering: "Automatic",
			chairCapacity: 5,
			gasoline: 89,
			price: 58000,
			rating: 4.6,
			carDesc: "The Honda Accord is a versatile and well-equipped sedan, offering a smooth ride and advanced safety features.",
			carDetails:
				"Model Year: 2023, Engine: 1.5L 4-cylinder turbocharged, Transmission: Continuously Variable Transmission (CVT), Fuel Economy: 30 mpg combined",
			reviews: [
				{
					userId: "102",
					userTitle: "Customer",
					reviewText: "The Honda Accord exceeded my expectations! It's comfortable, stylish, and packed with features.",
					stars: 5,
					userName: "Michael Smith",
					userImage: "https://www.example.com/user2.jpg",
					createdAt: "2023-07-25",
				},
			],
			transactions: [
				{
					userId: "102",
					date: 1693064400,
					dropoff: {
						location: {
							latitude: 34.0522,
							longitude: -118.2437,
						},
						date: 1693642800,
					},
					pickUp: {
						location: {
							latitude: 37.7749,
							longitude: -122.4194,
						},
						date: 1693057200,
					},
				},
			],
		},
		{
			name: "Ford Mustang",
			type: "Sports Car",
			image: ["https://www.example.com/ford_mustang.jpg", ""],
			id: "1003",
			steering: "Automatic",
			chairCapacity: 4,
			gasoline: 91,
			price: 65000,
			rating: 4.8,
			carDesc: "The Ford Mustang is an iconic American muscle car, known for its powerful performance and timeless design.",
			carDetails: "Model Year: 2023, Engine: 5.0L V8, Transmission: 10-speed automatic, Fuel Economy: 18 mpg combined",
			reviews: [
				{
					userId: "103",
					userTitle: "Customer",
					reviewText: "Owning a Ford Mustang has been a dream come true! It's fast, stylish, and incredibly fun to drive.",
					stars: 5,
					userName: "John Williams",
					userImage: "https://www.example.com/user3.jpg",
					createdAt: "2023-08-15",
				},
			],
			transactions: [
				{
					userId: "103",
					date: 1693642800,
					dropoff: {
						location: {
							latitude: 34.0522,
							longitude: -118.2437,
						},
						date: 1694221200,
					},
					pickUp: {
						location: {
							latitude: 37.7749,
							longitude: -122.4194,
						},
						date: 1693636400,
					},
				},
			],
		},
		{
			name: "Chevrolet Silverado",
			type: "Truck",
			image: ["https://www.example.com/chevrolet_silverado.jpg", ""],
			id: "1004",
			steering: "Automatic",
			chairCapacity: 5,
			gasoline: 87,
			price: 70000,
			rating: 4.5,
			carDesc: "The Chevrolet Silverado is a rugged and dependable truck, perfect for both work and everyday use.",
			carDetails: "Model Year: 2023, Engine: 5.3L V8, Transmission: 8-speed automatic, Fuel Economy: 20 mpg combined",
			reviews: [
				{
					userId: "104",
					userTitle: "Customer",
					reviewText:
						"I'm impressed with the Chevrolet Silverado's performance and towing capabilities. It's a great truck for hauling.",
					stars: 4,
					userName: "Jennifer Brown",
					userImage: "https://www.example.com/user4.jpg",
					createdAt: "2023-08-25",
				},
			],
			transactions: [
				{
					userId: "104",
					date: 1694221200,
					dropoff: {
						location: {
							latitude: 34.0522,
							longitude: -118.2437,
						},
						date: 1694799600,
					},
					pickUp: {
						location: {
							latitude: 37.7749,
							longitude: -122.4194,
						},
						date: 1694214800,
					},
				},
			],
		},
		{
			name: "Tesla Model 3",
			type: "Electric Car",
			image: ["https://www.example.com/tesla_model_3.jpg", ""],
			id: "1005",
			steering: "Automatic",
			chairCapacity: 5,
			gasoline: "Electric",
			price: 60000,
			rating: 4.9,
			carDesc: "The Tesla Model 3 is a cutting-edge electric car, known for its futuristic design and impressive performance.",
			carDetails: "Model Year: 2023, Battery: Long Range (up to 353 miles), Acceleration: 0-60 mph in 4.2 seconds",
			reviews: [
				{
					userId: "105",
					userTitle: "Customer",
					reviewText: "The Tesla Model 3 is simply amazing! It's fast, efficient, and loaded with technology.",
					stars: 5,
					userName: "David Miller",
					userImage: "https://www.example.com/user5.jpg",
					createdAt: "2023-09-10",
				},
			],
			transactions: [
				{
					userId: "105",
					date: 1694799600,
					dropoff: {
						location: {
							latitude: 34.0522,
							longitude: -118.2437,
						},
						date: 1695378000,
					},
					pickUp: {
						location: {
							latitude: 37.7749,
							longitude: -122.4194,
						},
						date: 1694792400,
					},
				},
			],
		},
	];

	const [selectedCar, setSelectedCar] = useState(null);

	const handleCarSelect = car => {
		setSelectedCar(car);
	};

	return (
		<div style={style}>
			<RentalDetails selectedCar={selectedCar} />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					flexGrow: 1,
					flexShrink: 1,
					gap: "2.4rem",
				}}
			>
				<TopRental />
				<RecentTransactions recentCars={recentCars} onCarSelect={handleCarSelect} selectedCarId={selectedCar?.id} />
			</div>
		</div>
	);
};

export default MangerDashbord;

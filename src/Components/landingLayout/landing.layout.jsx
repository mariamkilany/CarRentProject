import React from "react";
import ToysIcon from "@mui/icons-material/Toys";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MapIcon from "@mui/icons-material/Map";
import "./landingLayout.css";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingLayout = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="landingSection">
				<div className="headerText">
					<h1>Drive Your Dream Today</h1>
					<p>
						Discover a world of possibilities with our extensive fleet of top-quality vehicles. Whether you're planning a road trip, a
						business trip, or just need a ride around town, we've got the perfect car for you.
					</p>
					<div className="headerBtns">
						<div className="rentBtn" onClick={() => navigate("/login")}>
							Rent a car
						</div>
					</div>
				</div>
			</div>

			<div className="choosingSection">
				<h6>why choose us ?</h6>
				<h5>Why choose MORENT ?</h5>

				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<div className="choosing">
							<ToysIcon sx={{ color: "var(--clr-m-800)", fontSize: "6.5rem" }}></ToysIcon>
							<h6>Extnsinve Morent fleet</h6>
							<p>
								Select from a wide range of prestigious cars, <br></br>
								each meticulously maintained to ensure <br></br>
								the ultimate driving experience
							</p>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className="choosing">
							<HandshakeIcon sx={{ color: "var(--clr-m-800)", fontSize: "6.5rem" }}></HandshakeIcon>
							<h6>Flexible Rental Options</h6>
							<p>
								choose from daily , weekly or long-term rentals<br></br>
								tailored to your specific needs and prefrences
							</p>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className="choosing">
							<MapIcon sx={{ color: "var(--clr-m-800)", fontSize: "6.5rem" }}></MapIcon>
							<h6>convenient locations</h6>
							<p>
								we have rental hubs in major cities across the <br></br>
								Egypt making it convenient for you to pick up and <br></br>
								return your rental car
							</p>
						</div>
					</Grid>
				</Grid>
			</div>

			<section className="section-how">
				<div className="container">
					<span className="subheading">How it works</span>
					<h2 className="heading-secondary">It's as easy as 1, 2, 3</h2>
				</div>

				<div className="container grid grid--2-cols grid--center-v">
					<div className="step-text-box">
						<p className="step-number">01</p>
						<h3 className="heading-tertiary">Select Your Dream Car</h3>
						<p className="step-description">
							Browse through our extensive collection of vehicles from luxury to economy models. Use our intuitive search and filter
							tools to find a car that suits your needs and preferences.
						</p>
					</div>
					<div className="step-img-box">
						<img
							src="images/step1.svg"
							className="step-img"
							alt="iPhone app
            preferences selection screen"
						/>
					</div>

					<div className="step-img-box">
						<img
							src="images/step2.svg"
							className="step-img"
							alt="iPhone app
            meal approving plan screen"
						/>
					</div>
					<div className="step-text-box">
						<p className="step-number">02</p>
						<h3 className="heading-tertiary">Reserve Your Dates</h3>
						<p className="step-description">
							Choose your pick-up and drop-off dates and locations. Our flexible booking system allows you to rent for a few hours, a
							day, or even for weeks at a time
						</p>
					</div>

					<div className="step-text-box">
						<p className="step-number">03</p>
						<h3 className="heading-tertiary">Start Your Journey</h3>
						<p className="step-description">
							Pick up your car from the selected location. After a quick check-in process, you'll be ready to hit the road. Enjoy your
							trip and the freedom to explore at your own pace
						</p>
					</div>
					<div className="step-img-box">
						<img
							src="images/step3.svg"
							className="step-img"
							alt="iPhone app
            delivery screen"
						/>
					</div>
				</div>
			</section>

			<div className="choosingSection joining">
				<Grid container spacing={2} justifyContent="center" alignItems="center">
					{/* looping on the data */}
					<Grid item xs={12} md={6}>
						<div className="joiningSection">
							<h6>Join us Now</h6>
							<h5>Get Your Comfortable car</h5>
							Complete the login process to join and rent our cars
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<button className="getStarted" onClick={() => navigate(`/login`)}>
							Get Started
						</button>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default LandingLayout;

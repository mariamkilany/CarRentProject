import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";
import { Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCarsTypes, getCarsCapacity, getCarsByTypes } from "../../features/car/carSlice";
const Asidebar = () => {
	const [sliderValue, setSliderValue] = React.useState(50);
	const [checkedOptions, setCheckedOptions] = React.useState({});
	const [open, setOpen] = React.useState(false);

	const { carsTypes: types, carsCapacity: capacity } = useSelector(state => state.car);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getCarsTypes());
		dispatch(getCarsCapacity());
	}, []);

	const handleSliderChange = (event, newValue) => {
		setSliderValue(newValue);
	};
	const handleChange = event => {
		setCheckedOptions({
			...checkedOptions,
			[event.target.name]: event.target.checked,
		});
		dispatch(
			getCarsByTypes({
				...checkedOptions,
				[event.target.name]: event.target.checked,
			})
		);
	};
	return (
		<Box p={4} bgcolor={"white"} sx={{ display: { xs: "none", lg: "block" } }}>
			<List aria-label="Sidebar">
				<Typography variant="body1">Type</Typography>
				{types.map((type, index) => (
					<ListItem sx={{ display: "contents" }} key={index}>
						<ListItemButton>
							<Checkbox label="Solid" variant="solid" size="large" name={type} onChange={e => handleChange(e)} />
							<Typography variant="subtitle2">{type}</Typography>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<List aria-label="Sidebar">
				<Typography variant="body1" sx={{ marginBottom: "10px" }}>
					Capacity
				</Typography>
				{capacity?.map(capacity => (
					<ListItem sx={{ display: "contents" }}>
						<ListItemButton>
							<Checkbox label="Solid" variant="solid" size="large" />
							<Typography variant="subtitle2" mr={1}>
								{capacity} Person
							</Typography>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Slider value={sliderValue} onChange={handleSliderChange} aria-labelledby="sliderValue" min={0} max={7000} step={1} />
			<Typography variant="subtitle2" textAlign={"center"}>
				Max.{sliderValue} LE
			</Typography>
		</Box>
	);
};
export default Asidebar;

import React from "react";
import styles from "./recentTransaction.module.css";
import { useNavigate } from "react-router-dom";

const RecentTransaction = ({ recentCars, onCarSelect, selectedCarId }) => {
	const data = [
		"https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iBG8Tj2GfPvHdXns~duEdI5FEFbdsughN0a7HnD1H1ztKSy8dVBBgQ1zHw3BqlNCouxR06745iQa3nGWcOKIwKR-QSM3mzcy7i6LP04EkvlMwiGUtF-MLr3vGnI9A~h6K0GxhZcDBd2W4ro8TKH~mPdeAZ55SHmMmzKr~DDE~L2zJpr0lMmPihH19GRLwE8q8rwhT8hIrGBDpmSNFzc7TZgEG7M0kj5rB8v3TGDxOYc7eRqb30TF9nAll4RPXes6apJhAKCH8XoG4i6p~PnvLGpVtgTW3S8B73z34PAkxYa8ZOB0DpDP8uKPse5jcwVFdqd7ImtlPORC20s4Zxm7qQ__",
		"https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IAz~adr9kpgCWMa5PNUTPysGenZbaeV54jSI192pu0GxtAhBzIyKolW2a~wBZySCXh~BcDGl-JbCz04OSev9wK6WKwS6yRCN1sJhuCfAyY450rV2XeEtdE6BOS1VvBpi78Jed27QUNV8TcX6mlyjRJZSsW-6JiGgp5nx5apoC-0Qx0XMRPMi17JcI4Y-xeDEf19hFjCCvs2lFKH5UasxLagNsCI17Ibl5rFiSVxdyhnM54VPE3MSk0QUA-ObcdUrj00PQV90Gb3ixqGwV0R2iMIGccNnJcAyady4QNd1wCPGRFVxXD3yOQUuqWWQ1QlVf2PPjRR6D9gImBQH5tqZ2A__",
		"https://s3-alpha-sig.figma.com/img/2e45/bdb6/4d6f5df6dab1d18d948223ba47972f21?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dqm-pg0KrRkj6DwNmopjEk1W9ZQGb4-BKMDQ02kzq66CMBzFrsckK-2D-8mN6N6Ds-A-dKWHLYHWH2dAC-1orON69q~NrvKZgHS1iib~qXzStPy7W8oCc7TTIpc5lYwNBzfpAzqm5tbcMo~YR9eULDNxWLcxkQsMz-LDtoAEb3dRBqwBTV3dUF2WjsTT5PI1d0lYaq9dILcnnSe8UsX960SNfprsLd18nxhorg8VXsrz51E0OKHtbNcEt3X-5CLZkK1KTkL750f~Zgi-FL9upOTDNwiQMfXGo8EDBHiI~fjEPJGVdpF-b14AuitX~Fs1NHCgKTYBddf07BzW3cLBbQ__",
		"https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HgI713b4qRzzNipQWH31Ci6nhdFFv-vyz2FEuxOhuLuzLLY58TLN4B79alOsbNcj8fZkameSFyg-260dmJmxDyju2sTCROP3gSrEe7RBE6emu6yfQnuZvcIh5LPIenFqRHBtBYv2Ha-T8v~3ULYafdk8d-rMLPrmrKsUlJwhH8ZaDiKghAPZjDKwgZoEo6Vm72hDSQJqIGigzhVbUZuGcG3jn5cXrSVbcRv4D8HJFJtKdzCOgm5s1CmxV5psKsuNOKNdFlxuiMLG1bFXsoTij1lbICTwzaHltsAfq2w2V5TQKWZuRUs3FPvJiIg3yWviH~2ie-9o6nfNHnfQJa1NEw__",
		"https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iBG8Tj2GfPvHdXns~duEdI5FEFbdsughN0a7HnD1H1ztKSy8dVBBgQ1zHw3BqlNCouxR06745iQa3nGWcOKIwKR-QSM3mzcy7i6LP04EkvlMwiGUtF-MLr3vGnI9A~h6K0GxhZcDBd2W4ro8TKH~mPdeAZ55SHmMmzKr~DDE~L2zJpr0lMmPihH19GRLwE8q8rwhT8hIrGBDpmSNFzc7TZgEG7M0kj5rB8v3TGDxOYc7eRqb30TF9nAll4RPXes6apJhAKCH8XoG4i6p~PnvLGpVtgTW3S8B73z34PAkxYa8ZOB0DpDP8uKPse5jcwVFdqd7ImtlPORC20s4Zxm7qQ__",
	];

	return (
		<div className={`parent-section ${styles.parent}`}>
			<div className={styles.header}>
				<h3 className="section-title">Recent Transaction</h3>
				<button className={styles.btn} onClick={() => window.location.replace("https://dashboard.stripe.com/test/payments")}>
					View All
				</button>
			</div>
			<div className={styles.transactions}>
				{recentCars.map((item, idx) => (
					<div
						key={item.id}
						className={`${styles.transaction} ${selectedCarId === item.id ? ` ${styles.selected}` : ""}`}
						onClick={() =>
							onCarSelect({
								...item,
								image: data[idx],
							})
						}
					>
						{console.log(selectedCarId === item.id)}
						<img src={data[idx]} alt="car" />
						<div>
							<h4>{item.name}</h4>
							<p>{item.type}</p>
						</div>
						<div>
							<p>
								{new Date(item.transactions[0].date * 1000).toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
								})}
							</p>
							<h4>${item.price}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentTransaction;

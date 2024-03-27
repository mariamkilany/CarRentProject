import React from "react";
import styles from "./recentTransaction.module.css";
import { useNavigate } from "react-router-dom";

const RecentTransaction = ({ recentCars, onCarSelect, selectedCarId }) => {
  const data = [
    "Images/car-1.png",
    "Images/car-4.png",
    "Images/car-1.png",
    "Images/car-4.png",
    "Images/car-4.png",
  ];

  return (
    <div className={`parent-section ${styles.parent}`}>
      <div className={styles.header}>
        <h3 className="section-title">Recent Transaction</h3>
        <button
          className={styles.btn}
          onClick={() =>
            window.location.replace(
              "https://dashboard.stripe.com/test/payments"
            )
          }
        >
          View All
        </button>
      </div>
      <div className={styles.transactions}>
        {recentCars.map((item, idx) => (
          <div
            key={item.id}
            className={`${styles.transaction} ${
              selectedCarId === item.id ? ` ${styles.selected}` : ""
            }`}
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
                {new Date(item.transactions[0].date * 1000).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                  }
                )}
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

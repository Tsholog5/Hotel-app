import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookings } from "../Redux/dbSlice"; 
import './Checkout.css';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useLocation } from "react-router-dom";

const Checkout = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { room, checkInDate, checkOutDate, guests, totalAmount, vat } = location.state || {};

    const [{ options, isPending }, payPalDispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        payPalDispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    };

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: totalAmount.toString(),
                    },
                },
            ],
        });
    };

    const onApproveOrder = async (data, actions) => {
        const details = await actions.order.capture();
        const name = details.payer.name.given_name;

        // Prepare booking data
        const bookingData = {
            room,
            checkInDate,
            checkOutDate,
            guests,
            totalAmount,
            vat,
            payerName: name,
            orderId: data.orderID,
            createdAt: new Date(),
        };

        // Dispatch action to add booking to Firebase
        dispatch(addBookings(bookingData));
        alert(`Transaction completed by ${name}`);
    };

    return (
        <div className="checkout">
            {isPending ? <p>LOADING...</p> : (
                <>
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                    </select>
                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
};

export default Checkout;


import { useEffect, useRef} from 'react'

const paypalBtn = ({total,state,dispatch,address,mobile}) => {
    const refPaypalBtn = useRef()
    const { auth, cart} = state

    useEffect(() => {
        paypal.Buttons({
        createOrder: function(data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: total
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function (details) {
                alert('Transaction completed by' + details.payer.name.given_name);
            });
        }
             }).render(refPaypalBtn.current);
                 },[])

    return(
        <div ref={refPaypalBtn}></div>
)
}

export default paypalBtn
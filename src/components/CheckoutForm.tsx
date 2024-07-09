import React from 'react';
import DeliveryIcon from "../assets/img/car-side_svgrepo.com.svg";
import PickupIcon from "../assets/img/cart_svgrepo.com.png";
import MastercardIcon from "../assets/img/Frame 60218.svg";
import PaypalIcon from "../assets/img/logo-paypal_svgrepo.com.png";
import VisaIcon from "../assets/img/visa-fill_svgrepo.com.png";

interface CheckoutFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  deliveryOption: string;
  address: string;
  paymentType: string;
  cardNumber: string;
  cvv: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    deliveryOption: '',
    address: '',
    paymentType: '',
    cardNumber: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally, you can reset the form fields after submission
    setFormData({
      deliveryOption: '',
      address: '',
      paymentType: '',
      cardNumber: '',
      cvv: '',
    });
  };

  return (
    <div>
      <form action="">
        <div>
          
        </div>
      </form>
    </div>

  );
};

export default CheckoutForm;

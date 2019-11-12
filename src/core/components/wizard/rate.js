import {ShippingOption} from "./constants";

const shippingRate = 0.40;

export const shippingCost = (weight, shippingOption) => (weight * shippingRate *
    (shippingOption === ShippingOption.ground ? 1 : 1.5));

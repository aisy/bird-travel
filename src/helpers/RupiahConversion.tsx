const rupiahConversion = (price: number) => {
  return Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
  ).format(price);
}

export default rupiahConversion

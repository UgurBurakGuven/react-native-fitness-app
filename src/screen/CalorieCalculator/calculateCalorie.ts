export default function calculateCalorie(
  maleGender: boolean,
  femaleGender: boolean,
  selectedPicker: string,
  age: number,
  height: number,
  weight: number
) {
  if ((age && height && weight) !== 0) {
    if (maleGender) {
      if (selectedPicker === "0") {
        const calculate: number = 366 + 13.7 * weight + 5 * height - 6.8 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else if (selectedPicker === "1") {
        const calculate: number = 666 + 13.7 * weight + 5 * height - 6.8 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else if (selectedPicker === "2") {
        const calculate: number = 966 + 13.7 * weight + 5 * height - 6.8 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else if (selectedPicker === "3") {
        const calculate: number = 1266 + 13.7 * weight + 5 * height - 6.8 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else if (selectedPicker === "4") {
        const calculate: number = 1566 + 13.7 * weight + 5 * height - 6.8 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else return "ERROR";
    } else {
      if (selectedPicker === "0") {
        const calculate: number = 955 + 9.6 * weight + 1.8 * height - 4.7 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else if (selectedPicker === "1") {
        const calculate: number =
          1255 + 9.6 * weight + 1.8 * height - 4.7 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else if (selectedPicker === "2") {
        const calculate: number =
          1555 + 9.6 * weight + 1.8 * height - 4.7 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else if (selectedPicker === "3") {
        const calculate: number =
          1855 + 9.6 * weight + 1.8 * height - 4.7 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else if (selectedPicker === "4") {
        const calculate: number =
          2155 + 9.6 * weight + 1.8 * height - 4.7 * age;
        const calculatedCalorie: number = Number(calculate.toFixed(2));
        return `Kalori ihtiyacınız ${calculatedCalorie} , kilo vermek istiyorsanız ${
          calculatedCalorie - 300
        } ,kilo almak istiyorsanız ${
          calculatedCalorie + 300
        } kalori almalısınız`;
      } else return "ERROR";
    }
  } else {
    return "0 Giremezsiniz";
  }
}

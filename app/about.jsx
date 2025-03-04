import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);

    if (isNaN(val1) || isNaN(val2)) {
      setResult("Invalid Input");
      return;
    }

    let output;
    switch (operator) {
      case "+":
        output = val1 + val2;
        break;
      case "-":
        output = val1 - val2;
        break;
      case "*":
        output = val1 * val2;
        break;
      case "/":
        output = val2 !== 0 ? val1 / val2 : "Cannot divide by zero";
        break;
      case "%":
        output = val2 !== 0 ? val1 % val2 : "Cannot divide by zero";
        break;
      default:
        output = "Invalid Operator";
    }

    setResult(output);
  };

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <TextInput
        style={{
          borderColor: "black",
          width: "80%",
          height: 50,
          borderWidth: 3,
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={{
          borderColor: "black",
          width: "80%",
          height: 50,
          borderWidth: 3,
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        placeholder="Enter operator (+, -, *, /, %)"
        value={operator}
        onChangeText={setOperator}
      />

      <TextInput
        style={{
          borderColor: "black",
          width: "80%",
          height: 50,
          borderWidth: 3,
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Answer = {result !== null ? result : "?"}
      </Text>

      <Button title="Calculate" onPress={calculate} />
    </View>
  );
}

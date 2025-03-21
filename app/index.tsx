import { TouchableOpacity, Text, View, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Index() {
  const router = useRouter();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const calcu = () => {
    router.push({
      pathname: "/startcal",
      params: { name: encodeURIComponent(fname), lastName: encodeURIComponent(lname) },
    });
  };
  

  const clearFields = () => {
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fill The Information To Sign In</Text>

      <TextInput
        style={styles.textinput}
        placeholder="Enter First Name"
        onChangeText={(text) => setFname(text)}
        value={fname} 
      />
      
      <TextInput
        style={styles.textinput}
        placeholder="Enter Last Name"
        onChangeText={(text) => setLname(text)}
        value={lname}
      />
      
      <TextInput
        style={styles.textinput}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      
      <TextInput
        style={styles.textinput}
        placeholder="Enter Password"
        secureTextEntry={true} 
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={calcu} style={styles.touchsub}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clearFields} style={styles.touchclr}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 30,
    borderColor: "#3498db",
    borderWidth: 1.5, 
    padding: 10,
    width: "80%",
    borderRadius: 5,
    
  },
  text: 
  {
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#3498db"
  },
  touchsub: {
    backgroundColor: "#2ecc71", 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3, 
  },
  touchclr:{
    backgroundColor: "#E74C3C", 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3, 
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 250,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#ffffff",
  },
});


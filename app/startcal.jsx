import { TouchableOpacity, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function startcal() {
    const router = useRouter();

    const calcu = () => {
      router.push("/about"); 
  
    };
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#3498db",  marginBottom: 500  }}>
        Let's Calculate
      </Text>
      <TouchableOpacity 
          onPress={calcu} 
          style={{
            backgroundColor: "#2ecc71", 
            paddingVertical: 12,
            paddingHorizontal: 50,
            borderRadius: 8,
            elevation: 3, 
          }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#ffffff" }}>
            Start
          </Text>
        </TouchableOpacity>
    </View>
    );
}
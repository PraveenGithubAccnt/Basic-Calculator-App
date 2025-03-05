import { Stack } from "expo-router";

export default function RootLayout() 
{
  return (
  <Stack>
   <Stack.Screen name="index" options={{headerShown:false}}/>
   <Stack.Screen name="about" options={{headerShown:false}}/>
   <Stack.Screen name="startcal" options={{headerShown:false}}/>
  </Stack>);
};

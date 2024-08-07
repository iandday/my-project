import React from "react";
import { Text, View, Image, TouchableOpacity } from "../ui";
import { PlantOut } from "~/lib/plant_tracker/model";
import { router } from "expo-router";

interface plantCountProps {
  plantData: PlantOut[];
  graveyardData: PlantOut[];
}

export default function plantCount({ plantData, graveyardData }: plantCountProps) {
  return (
    <View className='flex-row flex justify-center'>
      <View className='items-center px-4'>
        <TouchableOpacity onPress={() => router.navigate("/my-plants")}>
          <Image
            style={{ width: 100, height: 92 }}
            source={require("r../../assets/images/alivePlant.png")}
          />
          <Text className='pt-2'>{plantData.length} Healthy</Text>
        </TouchableOpacity>
      </View>

      <View className='items-center px-4'>
        <TouchableOpacity onPress={() => router.navigate("/my-graveyard")}>
          <Image
            style={{ width: 100, height: 92 }}
            source={require("../../assets/images/deadPlant.png")}
            className='pt-2'
          />
          <Text className='pt-2'>{graveyardData.length} Not So Healthy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

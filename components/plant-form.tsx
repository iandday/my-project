import { zodResolver } from "@hookform/resolvers/zod";
import dayjs, { type Dayjs } from "dayjs";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as z from "zod";

import type { Option } from "~/components/ui";
import {
  Button,
  ControlledDatePicker,
  ControlledInput,
  ControlledSelect,
  Text,
  View,
} from "~/components/ui";
import { AreaOut, PlantOut } from "~/lib/plant_tracker/model";

const schema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),

  common_name: z.string({}).nullable(),
  scientific_name: z.string({}).nullable(),
  notes: z.string({}).nullable(),
  area: z.string({}).nullable(),
  p_date: z.instanceof(dayjs as unknown as typeof Dayjs).nullable(),
});

export type FormType = z.infer<typeof schema>;

export type PlantFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  plantData?: PlantOut;
  areaData: AreaOut[];
};

const blankPlantOut: PlantOut = {
  name: "",
  common_name: "",
  scientific_name: "",
  notes: "",
  area: "",
  purchase_date: "",
  user: "",
};
/* eslint-disable max-lines-per-function */
export const PlantForm = ({
  onSubmit = () => {},
  plantData = blankPlantOut,
  areaData,
}: PlantFormProps) => {
  const defaultValues = plantData.name
    ? {
        name: plantData.name,
        common_name: plantData.common_name,
        scientific_name: plantData.scientific_name,
        notes: plantData.notes,
        area: plantData.area,
        p_date: dayjs(plantData?.purchase_date, "YYYY-MM-DD"),
      }
    : {
        common_name: "",
        scientific_name: "",
        notes: "",
        p_date: dayjs(),
      };

  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  // build list for area select
  const areaList: Option[] = [];
  areaData.forEach(function (arrayItem) {
    var current: Option = { value: arrayItem.id, label: arrayItem.name };
    areaList.push(current);
  });

  return (
    <View className="flex-1 flex-col p-4">
      <ControlledInput control={control} name="name" label="Name" />
      <ControlledInput
        control={control}
        name="common_name"
        label="Common Name"
      />
      <ControlledInput
        control={control}
        name="scientific_name"
        label="Scientific Name"
      />
      <ControlledSelect
        control={control}
        name="area"
        label="Area"
        options={areaList}
      />
      <ControlledDatePicker
        control={control}
        name="p_date"
        label="Purchase Date"
      />

      <ControlledInput control={control} name="notes" label="Notes" multiline />
      <Button label="Save" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

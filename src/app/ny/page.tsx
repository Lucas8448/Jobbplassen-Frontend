"use client";

import { useState } from "react";
import { Textfield, Card, Label, Field, Select, Button} from "@digdir/designsystemet-react";
import Header from "../komponenter/Header";
import LeggTilStilling from "../komponenter/LeggTilStilling";
import CustomTextfield from "../komponenter/CustomTextfield";


export default function Home() {
  const [filters, setFilters] = useState<string[]>([]);

  const handleSearchSubmit = (value: string) => {
    if (!filters.includes(value)) {
      setFilters((prev) => [...prev, value]);
    }
  };

  const handleRemove = (label: string) => {
    setFilters((prev) => prev.filter((f) => f !== label));
  };

  return (
    <>
      <Header />
      <LeggTilStilling />
    <div className="flex justify-center items-center pt-10">
     <Card className="flex flex-col bg-gray-100 min-w-[800px]">
        <CustomTextfield label="Tittel" />

        <CustomTextfield label="Lokasjon" />

        <CustomTextfield label="Bedrift" />

        <Field>
        <Label>
            Velg en stillingstype
        </Label>
        <Select className="border-2 border-black rounded-md focus:outline-none ring-0 pl-2"
            defaultValue=""
            
            width="full"
        >
            <Select.Option
            disabled
            value=""
            ></Select.Option>
            <Select.Option
            value="Deltid">
            Deltid
            </Select.Option>

            <Select.Option value="Heltid">
            Heltid
            </Select.Option>
            
        </Select>
        </Field>

        <Textfield
            label="Beskrivelse"
            multiline
            rows={4}
            className="[&_textarea]:border-2 [&_textarea]:border-black [&_textarea]:rounded-md [&_textarea]:focus:outline-none [&_textarea]:pl-2 [&_textarea]:pt-2 [&_textarea]:focus:ring-0"
        />
        <Button className="max-w-[100px] border-2 border-black mt-5 bg-blue-600 text-white py-2 px-3 rounded-md cursor-pointer"
            variant="primary"
        >
            Send inn
        </Button>
     </Card>
     </div>

     
      
    </>
  );
}

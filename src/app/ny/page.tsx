"use client";

import { useState } from "react";
import { Textfield, Card, Label, Field, Select, Button} from "@digdir/designsystemet-react";
import Header from "../komponenter/Header";
import LeggTilStilling from "../komponenter/LeggTilStilling";
import CustomTextfield from "../komponenter/CustomTextfield";


export default function Home() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !location || !company || !jobType || !description) {
      alert("Vennligst fyll ut alle felter");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch(`/api/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          company,
          location,
          job_type: jobType,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      alert("Stilling opprettet!");
      
      // Reset form
      setTitle("");
      setLocation("");
      setCompany("");
      setJobType("");
      setDescription("");
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Feil ved oppretting av stilling. Prøv igjen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <LeggTilStilling />
     <div className="flex justify-center items-center pt-10">
     <Card className="flex flex-col bg-gray-100 min-w-[800px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <CustomTextfield 
          label="Tittel" 
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />

        <CustomTextfield 
          label="Lokasjon" 
          value={location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
        />

        <CustomTextfield 
          label="Bedrift" 
          value={company}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
        />

        <Field>
        <Label>
            Velg en stillingstype
        </Label>
        <Select 
          className="border-2 border-black rounded-md focus:outline-none ring-0 pl-2"
          value={jobType}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setJobType(e.target.value)}
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
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            className="[&_textarea]:border-2 [&_textarea]:border-black [&_textarea]:rounded-md [&_textarea]:focus:outline-none [&_textarea]:pl-2 [&_textarea]:pt-2 [&_textarea]:focus:ring-0"
        />
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="max-w-[100px] border-2 border-black mt-5 bg-blue-600 text-white py-2 px-3 rounded-md cursor-pointer hover:text-gray-200"
          variant="primary"
        >
            {isSubmitting ? "Sender..." : "Send inn"}
        </Button>
        </form>
     </Card>
     </div>

     
      
    </>
  );
}
